

/*!
 * @overview  Ember - JavaScript Application Framework
 * @copyright Copyright 2011 Tilde Inc. and contributors
 *            Portions Copyright 2006-2011 Strobe Inc.
 *            Portions Copyright 2008-2011 Apple Inc. All rights reserved.
 * @license   Licensed under MIT license
 *            See https://raw.github.com/emberjs/ember.js/master/LICENSE
 * @version   6.2.0
 */
/* eslint-disable no-var */
/* globals global globalThis self */
/* eslint-disable-next-line no-unused-vars */
var define, require;
(function () {
  var globalObj = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
  if (globalObj === null) {
    throw new Error('unable to locate global object');
  }
  if (typeof globalObj.define === 'function' && typeof globalObj.require === 'function') {
    define = globalObj.define;
    require = globalObj.require;
    return;
  }
  var registry = Object.create(null);
  var seen = Object.create(null);
  function missingModule(name, referrerName) {
    if (referrerName) {
      throw new Error('Could not find module ' + name + ' required by: ' + referrerName);
    } else {
      throw new Error('Could not find module ' + name);
    }
  }
  function internalRequire(_name, referrerName) {
    var name = _name;
    var mod = registry[name];
    if (!mod) {
      name = name + '/index';
      mod = registry[name];
    }
    var exports = seen[name];
    if (exports !== undefined) {
      return exports;
    }
    exports = seen[name] = {};
    if (!mod) {
      missingModule(_name, referrerName);
    }
    var deps = mod.deps;
    var callback = mod.callback;
    var reified = new Array(deps.length);
    for (var i = 0; i < deps.length; i++) {
      if (deps[i] === 'exports') {
        reified[i] = exports;
      } else if (deps[i] === 'require') {
        reified[i] = require;
      } else {
        reified[i] = require(deps[i], name);
      }
    }
    var result = callback.apply(this, reified);
    if (!deps.includes('exports') || result !== undefined) {
      exports = seen[name] = result;
    }
    return exports;
  }
  require = function (name) {
    return internalRequire(name, null);
  };
  define = function (name, deps, callback) {
    registry[name] = {
      deps: deps,
      callback: callback
    };
  };

  // setup `require` module
  require['default'] = require;
  require.has = function registryHas(moduleName) {
    return Boolean(registry[moduleName]) || Boolean(registry[moduleName + '/index']);
  };
  require._eak_seen = require.entries = registry;
})();
(function (runtime, runloop, errorHandling, EmberObject, debug, EmberApplication, Internals, Router, test) {
  'use strict';

  function d(name, mod) {
    Object.defineProperty(mod, '__esModule', {
      value: true
    });
    define(name, [], () => mod);
  }
  function run(fn) {
    if (!runloop._getCurrentRunLoop()) {
      return runloop.run(fn);
    } else {
      return fn();
    }
  }
  const emberTestingLibTestRun = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: run
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  let lastPromise = null;
  class TestPromise extends runtime.RSVP.Promise {
    constructor(executor, label) {
      super(executor, label);
      lastPromise = this;
    }
    then(onFulfilled, onRejected, label) {
      let normalizedOnFulfilled = typeof onFulfilled === 'function' ? result => isolate(onFulfilled, result) : undefined;
      return super.then(normalizedOnFulfilled, onRejected, label);
    }
  }

  /**
    This returns a thenable tailored for testing.  It catches failed
    `onSuccess` callbacks and invokes the `Ember.Test.adapter.exception`
    callback in the last chained then.
     This method should be returned by async helpers such as `wait`.
     @public
    @for Ember.Test
    @method promise
    @param {Function} resolver The function used to resolve the promise.
    @param {String} label An optional string for identifying the promise.
  */
  function promise(resolver, label) {
    let fullLabel = `Ember.Test.promise: ${label || '<Unknown Promise>'}`;
    return new TestPromise(resolver, fullLabel);
  }

  /**
    Replacement for `Ember.RSVP.resolve`
    The only difference is this uses
    an instance of `Ember.Test.Promise`
     @public
    @for Ember.Test
    @method resolve
    @param {Mixed} The value to resolve
    @since 1.2.0
  */
  function resolve(result, label) {
    return TestPromise.resolve(result, label);
  }
  function getLastPromise() {
    return lastPromise;
  }

  // This method isolates nested async methods
  // so that they don't conflict with other last promises.
  //
  // 1. Set `Ember.Test.lastPromise` to null
  // 2. Invoke method
  // 3. Return the last promise created during method
  function isolate(onFulfilled, result) {
    // Reset lastPromise for nested helpers
    lastPromise = null;
    let value = onFulfilled(result);
    let promise = lastPromise;
    lastPromise = null;

    // If the method returned a promise
    // return that promise. If not,
    // return the last async helper's promise
    if (value && value instanceof TestPromise || !promise) {
      return value;
    } else {
      return run(() => resolve(promise).then(() => value));
    }
  }
  const emberTestingLibTestPromise = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: TestPromise,
    getLastPromise,
    promise,
    resolve
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  const helpers = {};
  /**
   @module @ember/test
  */

  /**
    `registerHelper` is used to register a test helper that will be injected
    when `App.injectTestHelpers` is called.
     The helper method will always be called with the current Application as
    the first parameter.
     For example:
     ```javascript
    import { registerHelper } from '@ember/test';
    import { run } from '@ember/runloop';
     registerHelper('boot', function(app) {
      run(app, app.advanceReadiness);
    });
    ```
     This helper can later be called without arguments because it will be
    called with `app` as the first parameter.
     ```javascript
    import Application from '@ember/application';
     App = Application.create();
    App.injectTestHelpers();
    boot();
    ```
     @public
    @for @ember/test
    @static
    @method registerHelper
    @param {String} name The name of the helper method to add.
    @param {Function} helperMethod
    @param options {Object}
  */
  function registerHelper(name, helperMethod) {
    helpers[name] = {
      method: helperMethod,
      meta: {
        wait: false
      }
    };
  }

  /**
    `registerAsyncHelper` is used to register an async test helper that will be injected
    when `App.injectTestHelpers` is called.
     The helper method will always be called with the current Application as
    the first parameter.
     For example:
     ```javascript
    import { registerAsyncHelper } from '@ember/test';
    import { run } from '@ember/runloop';
     registerAsyncHelper('boot', function(app) {
      run(app, app.advanceReadiness);
    });
    ```
     The advantage of an async helper is that it will not run
    until the last async helper has completed.  All async helpers
    after it will wait for it complete before running.
      For example:
     ```javascript
    import { registerAsyncHelper } from '@ember/test';
     registerAsyncHelper('deletePost', function(app, postId) {
      click('.delete-' + postId);
    });
     // ... in your test
    visit('/post/2');
    deletePost(2);
    visit('/post/3');
    deletePost(3);
    ```
     @public
    @for @ember/test
    @method registerAsyncHelper
    @param {String} name The name of the helper method to add.
    @param {Function} helperMethod
    @since 1.2.0
  */
  function registerAsyncHelper(name, helperMethod) {
    helpers[name] = {
      method: helperMethod,
      meta: {
        wait: true
      }
    };
  }

  /**
    Remove a previously added helper method.
     Example:
     ```javascript
    import { unregisterHelper } from '@ember/test';
     unregisterHelper('wait');
    ```
     @public
    @method unregisterHelper
    @static
    @for @ember/test
    @param {String} name The helper to remove.
  */
  function unregisterHelper(name) {
    delete helpers[name];
    // SAFETY: This isn't necessarily a safe thing to do, but in terms of the immediate types here
    // it won't error.
    delete TestPromise.prototype[name];
  }
  const emberTestingLibTestHelpers = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    helpers,
    registerAsyncHelper,
    registerHelper,
    unregisterHelper
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  const callbacks$1 = [];

  /**
    Used to register callbacks to be fired whenever `App.injectTestHelpers`
    is called.
     The callback will receive the current application as an argument.
     Example:
     ```javascript
    import $ from 'jquery';
     Ember.Test.onInjectHelpers(function() {
      $(document).ajaxSend(function() {
        Test.pendingRequests++;
      });
       $(document).ajaxComplete(function() {
        Test.pendingRequests--;
      });
    });
    ```
     @public
    @for Ember.Test
    @method onInjectHelpers
    @param {Function} callback The function to be called.
  */
  function onInjectHelpers(callback) {
    callbacks$1.push(callback);
  }
  function invokeInjectHelpersCallbacks(app) {
    for (let callback of callbacks$1) {
      callback(app);
    }
  }
  const emberTestingLibTestOnInjectHelpers = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    callbacks: callbacks$1,
    invokeInjectHelpersCallbacks,
    onInjectHelpers
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
   @module @ember/test
  */
  const contexts = [];
  const callbacks = [];

  /**
     This allows ember-testing to play nicely with other asynchronous
     events, such as an application that is waiting for a CSS3
     transition or an IndexDB transaction. The waiter runs periodically
     after each async helper (i.e. `click`, `andThen`, `visit`, etc) has executed,
     until the returning result is truthy. After the waiters finish, the next async helper
     is executed and the process repeats.
      For example:
      ```javascript
     import { registerWaiter } from '@ember/test';
      registerWaiter(function() {
       return myPendingTransactions() === 0;
     });
     ```
     The `context` argument allows you to optionally specify the `this`
     with which your callback will be invoked.
      For example:
      ```javascript
     import { registerWaiter } from '@ember/test';
      registerWaiter(MyDB, MyDB.hasPendingTransactions);
     ```
      @public
     @for @ember/test
     @static
     @method registerWaiter
     @param {Object} context (optional)
     @param {Function} callback
     @since 1.2.0
  */

  function registerWaiter(
  // Formatting makes a pretty big difference in how readable this is.
  // prettier-ignore
  ...args) {
    let checkedCallback;
    let checkedContext;
    if (args.length === 1) {
      checkedContext = null;
      checkedCallback = args[0];
    } else {
      checkedContext = args[0];
      checkedCallback = args[1];
    }
    if (indexOf(checkedContext, checkedCallback) > -1) {
      return;
    }
    contexts.push(checkedContext);
    callbacks.push(checkedCallback);
  }

  /**
     `unregisterWaiter` is used to unregister a callback that was
     registered with `registerWaiter`.
      @public
     @for @ember/test
     @static
     @method unregisterWaiter
     @param {Object} context (optional)
     @param {Function} callback
     @since 1.2.0
  */
  function unregisterWaiter(context, callback) {
    if (!callbacks.length) {
      return;
    }
    if (arguments.length === 1) {
      callback = context;
      context = null;
    }
    let i = indexOf(context, callback);
    if (i === -1) {
      return;
    }
    contexts.splice(i, 1);
    callbacks.splice(i, 1);
  }

  /**
    Iterates through each registered test waiter, and invokes
    its callback. If any waiter returns false, this method will return
    true indicating that the waiters have not settled yet.
     This is generally used internally from the acceptance/integration test
    infrastructure.
     @public
    @for @ember/test
    @static
    @method checkWaiters
  */
  function checkWaiters() {
    if (!callbacks.length) {
      return false;
    }
    for (let i = 0; i < callbacks.length; i++) {
      let context = contexts[i];
      let callback = callbacks[i];
      // SAFETY: The loop ensures that this exists
      if (!callback.call(context)) {
        return true;
      }
    }
    return false;
  }
  function indexOf(context, callback) {
    for (let i = 0; i < callbacks.length; i++) {
      if (callbacks[i] === callback && contexts[i] === context) {
        return i;
      }
    }
    return -1;
  }
  const emberTestingLibTestWaiters = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    checkWaiters,
    registerWaiter,
    unregisterWaiter
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  let adapter;
  function getAdapter() {
    return adapter;
  }
  function setAdapter(value) {
    adapter = value;
    if (value && typeof value.exception === 'function') {
      errorHandling.setDispatchOverride(adapterDispatch);
    } else {
      errorHandling.setDispatchOverride(null);
    }
  }
  function asyncStart() {
    if (adapter) {
      adapter.asyncStart();
    }
  }
  function asyncEnd() {
    if (adapter) {
      adapter.asyncEnd();
    }
  }
  function adapterDispatch(error) {
    adapter.exception(error);

    // @ts-expect-error Normally unreachable
    console.error(error.stack); // eslint-disable-line no-console
  }
  const emberTestingLibTestAdapter = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    asyncEnd,
    asyncStart,
    getAdapter,
    setAdapter
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
    @module ember
  */

  /**
    This is a container for an assortment of testing related functionality:
     * Choose your default test adapter (for your framework of choice).
    * Register/Unregister additional test helpers.
    * Setup callbacks to be fired when the test helpers are injected into
      your application.
     @class Test
    @namespace Ember
    @public
  */
  const Test = {
    /**
      Hash containing all known test helpers.
       @property _helpers
      @private
      @since 1.7.0
    */
    _helpers: helpers,
    registerHelper,
    registerAsyncHelper,
    unregisterHelper,
    onInjectHelpers,
    Promise: TestPromise,
    promise,
    resolve,
    registerWaiter,
    unregisterWaiter,
    checkWaiters
  };

  /**
   Used to allow ember-testing to communicate with a specific testing
   framework.
    You can manually set it before calling `App.setupForTesting()`.
    Example:
    ```javascript
   Ember.Test.adapter = MyCustomAdapter.create()
   ```
    If you do not set it, ember-testing will default to `Ember.Test.QUnitAdapter`.
    @public
   @for Ember.Test
   @property adapter
   @type {Class} The adapter to be used.
   @default Ember.Test.QUnitAdapter
  */
  Object.defineProperty(Test, 'adapter', {
    get: getAdapter,
    set: setAdapter
  });
  const emberTestingLibTest = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: Test
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
   @module @ember/test
  */

  /**
    The primary purpose of this class is to create hooks that can be implemented
    by an adapter for various test frameworks.
     @class TestAdapter
    @public
  */

  const Adapter = EmberObject.default.extend({
    /**
      This callback will be called whenever an async operation is about to start.
       Override this to call your framework's methods that handle async
      operations.
       @public
      @method asyncStart
    */
    asyncStart() {},
    /**
      This callback will be called whenever an async operation has completed.
       @public
      @method asyncEnd
    */
    asyncEnd() {},
    /**
      Override this method with your testing framework's false assertion.
      This function is called whenever an exception occurs causing the testing
      promise to fail.
       QUnit example:
       ```javascript
        exception: function(error) {
          ok(false, error);
        };
      ```
       @public
      @method exception
      @param {String} error The exception to be raised.
    */
    exception(error) {
      throw error;
    }
  });
  const emberTestingLibAdaptersAdapter = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: Adapter
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /* globals QUnit */

  function isVeryOldQunit(obj) {
    return obj != null && typeof obj.stop === 'function';
  }

  /**
     @module ember
  */
  /**
    This class implements the methods defined by TestAdapter for the
    QUnit testing framework.
     @class QUnitAdapter
    @namespace Ember.Test
    @extends TestAdapter
    @public
  */

  const QUnitAdapter = Adapter.extend({
    init() {
      this.doneCallbacks = [];
    },
    asyncStart() {
      if (isVeryOldQunit(QUnit)) {
        // very old QUnit version
        // eslint-disable-next-line qunit/no-qunit-stop
        QUnit.stop();
      } else {
        this.doneCallbacks.push(QUnit.config.current ? QUnit.config.current.assert.async() : null);
      }
    },
    asyncEnd() {
      // checking for QUnit.stop here (even though we _need_ QUnit.start) because
      // QUnit.start() still exists in QUnit 2.x (it just throws an error when calling
      // inside a test context)
      if (isVeryOldQunit(QUnit)) {
        QUnit.start();
      } else {
        let done = this.doneCallbacks.pop();
        // This can be null if asyncStart() was called outside of a test
        if (done) {
          done();
        }
      }
    },
    exception(error) {
      QUnit.config.current.assert.ok(false, debug.inspect(error));
    }
  });
  const emberTestingLibAdaptersQunit = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: QUnitAdapter
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /* global self */

  /**
    Sets Ember up for testing. This is useful to perform
    basic setup steps in order to unit test.
     Use `App.setupForTesting` to perform integration tests (full
    application testing).
     @method setupForTesting
    @namespace Ember
    @since 1.5.0
    @private
  */
  function setupForTesting() {
    debug.setTesting(true);
    let adapter = getAdapter();
    // if adapter is not manually set default to QUnit
    if (!adapter) {
      setAdapter(typeof self.QUnit === 'undefined' ? Adapter.create() : QUnitAdapter.create());
    }
  }
  const emberTestingLibSetupForTesting = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: setupForTesting
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  EmberApplication.default.reopen({
    /**
     This property contains the testing helpers for the current application. These
     are created once you call `injectTestHelpers` on your `Application`
     instance. The included helpers are also available on the `window` object by
     default, but can be used from this object on the individual application also.
       @property testHelpers
      @type {Object}
      @default {}
      @public
    */
    testHelpers: {},
    /**
     This property will contain the original methods that were registered
     on the `helperContainer` before `injectTestHelpers` is called.
      When `removeTestHelpers` is called, these methods are restored to the
     `helperContainer`.
       @property originalMethods
      @type {Object}
      @default {}
      @private
      @since 1.3.0
    */
    originalMethods: {},
    /**
    This property indicates whether or not this application is currently in
    testing mode. This is set when `setupForTesting` is called on the current
    application.
     @property testing
    @type {Boolean}
    @default false
    @since 1.3.0
    @public
    */
    testing: false,
    /**
      This hook defers the readiness of the application, so that you can start
      the app when your tests are ready to run. It also sets the router's
      location to 'none', so that the window's location will not be modified
      (preventing both accidental leaking of state between tests and interference
      with your testing framework). `setupForTesting` should only be called after
      setting a custom `router` class (for example `App.Router = Router.extend(`).
       Example:
       ```
      App.setupForTesting();
      ```
       @method setupForTesting
      @public
    */
    setupForTesting() {
      setupForTesting();
      this.testing = true;
      this.resolveRegistration('router:main').reopen({
        location: 'none'
      });
    },
    /**
      This will be used as the container to inject the test helpers into. By
      default the helpers are injected into `window`.
       @property helperContainer
      @type {Object} The object to be used for test helpers.
      @default window
      @since 1.2.0
      @private
    */
    helperContainer: null,
    /**
      This injects the test helpers into the `helperContainer` object. If an object is provided
      it will be used as the helperContainer. If `helperContainer` is not set it will default
      to `window`. If a function of the same name has already been defined it will be cached
      (so that it can be reset if the helper is removed with `unregisterHelper` or
      `removeTestHelpers`).
       Any callbacks registered with `onInjectHelpers` will be called once the
      helpers have been injected.
       Example:
      ```
      App.injectTestHelpers();
      ```
       @method injectTestHelpers
      @public
    */
    injectTestHelpers(helperContainer) {
      if (helperContainer) {
        this.helperContainer = helperContainer;
      } else {
        this.helperContainer = window;
      }
      this.reopen({
        willDestroy() {
          this._super(...arguments);
          this.removeTestHelpers();
        }
      });
      this.testHelpers = {};
      for (let name in helpers) {
        // SAFETY: It is safe to access a property on an object
        this.originalMethods[name] = this.helperContainer[name];
        // SAFETY: It is not quite as safe to do this, but it _seems_ to be ok.
        this.testHelpers[name] = this.helperContainer[name] = helper(this, name);
        // SAFETY: We checked that it exists
        protoWrap(TestPromise.prototype, name, helper(this, name), helpers[name].meta.wait);
      }
      invokeInjectHelpersCallbacks(this);
    },
    /**
      This removes all helpers that have been registered, and resets and functions
      that were overridden by the helpers.
       Example:
       ```javascript
      App.removeTestHelpers();
      ```
       @public
      @method removeTestHelpers
    */
    removeTestHelpers() {
      if (!this.helperContainer) {
        return;
      }
      for (let name in helpers) {
        this.helperContainer[name] = this.originalMethods[name];
        // SAFETY: This is a weird thing, but it's not technically unsafe here.
        delete TestPromise.prototype[name];
        delete this.testHelpers[name];
        delete this.originalMethods[name];
      }
    }
  });

  // This method is no longer needed
  // But still here for backwards compatibility
  // of helper chaining
  function protoWrap(proto, name, callback, isAsync) {
    // SAFETY: This isn't entirely safe, but it _seems_ to be ok.
    proto[name] = function (...args) {
      if (isAsync) {
        return callback.apply(this, args);
      } else {
        // SAFETY: This is not actually safe.
        return this.then(function () {
          return callback.apply(this, args);
        });
      }
    };
  }
  function helper(app, name) {
    let helper = helpers[name];
    !helper && debug.assert(`[BUG] Missing helper: ${name}`, helper);
    let fn = helper.method;
    let meta = helper.meta;
    if (!meta.wait) {
      return (...args) => fn.apply(app, [app, ...args]);
    }
    return (...args) => {
      let lastPromise = run(() => resolve(getLastPromise()));

      // wait for last helper's promise to resolve and then
      // execute. To be safe, we need to tell the adapter we're going
      // asynchronous here, because fn may not be invoked before we
      // return.
      asyncStart();
      return lastPromise.then(() => fn.apply(app, [app, ...args])).finally(asyncEnd);
    };
  }
  const emberTestingLibExtApplication = /*#__PURE__*/Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  runtime.RSVP.configure('async', function (callback, promise) {
    // if schedule will cause autorun, we need to inform adapter
    runloop._backburner.schedule('actions', () => callback(promise));
  });
  const emberTestingLibExtRsvp = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: runtime.RSVP
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  function andThen(app, callback) {
    let wait = app.testHelpers['wait'];
    !wait && debug.assert('[BUG] Missing wait helper', wait);
    return wait(callback(app));
  }
  const emberTestingLibHelpersAndThen = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: andThen
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
  @module ember
  */

  /**
    Returns the current path.
   Example:
   ```javascript
  function validateURL() {
    equal(currentPath(), 'some.path.index', "correct path was transitioned into.");
  }
   click('#some-link-id').then(validateURL);
  ```
   @method currentPath
  @return {Object} The currently active path.
  @since 1.5.0
  @public
  */
  function currentPath(app) {
    !app.__container__ && debug.assert('[BUG] app.__container__ is not set', app.__container__);
    let routingService = app.__container__.lookup('service:-routing');
    !(routingService instanceof Internals.RoutingService) && debug.assert('[BUG] service:-routing is not a RoutingService', routingService instanceof Internals.RoutingService);
    return EmberObject.get(routingService, 'currentPath');
  }
  const emberTestingLibHelpersCurrentPath = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: currentPath
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
  @module ember
  */
  /**
    Returns the currently active route name.
   Example:
   ```javascript
  function validateRouteName() {
    equal(currentRouteName(), 'some.path', "correct route was transitioned into.");
  }
  visit('/some/path').then(validateRouteName)
  ```
   @method currentRouteName
  @return {Object} The name of the currently active route.
  @since 1.5.0
  @public
  */
  function currentRouteName(app) {
    !app.__container__ && debug.assert('[BUG] app.__container__ is not set', app.__container__);
    let routingService = app.__container__.lookup('service:-routing');
    !(routingService instanceof Internals.RoutingService) && debug.assert('[BUG] service:-routing is not a RoutingService', routingService instanceof Internals.RoutingService);
    return EmberObject.get(routingService, 'currentRouteName');
  }
  const emberTestingLibHelpersCurrentRouteName = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: currentRouteName
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
  @module ember
  */

  /**
    Returns the current URL.
   Example:
   ```javascript
  function validateURL() {
    equal(currentURL(), '/some/path', "correct URL was transitioned into.");
  }
   click('#some-link-id').then(validateURL);
  ```
   @method currentURL
  @return {Object} The currently active URL.
  @since 1.5.0
  @public
  */
  function currentURL(app) {
    !app.__container__ && debug.assert('[BUG] app.__container__ is not set', app.__container__);
    let router = app.__container__.lookup('router:main');
    !(router instanceof Router.default) && debug.assert('[BUG] router:main is not a Router', router instanceof Router.default);
    let location = EmberObject.get(router, 'location');
    !(typeof location !== 'string') && debug.assert('[BUG] location is still a string', typeof location !== 'string');
    return location.getURL();
  }
  const emberTestingLibHelpersCurrentUrl = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: currentURL
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
  @module ember
  */
  let resume;

  /**
   Resumes a test paused by `pauseTest`.
    @method resumeTest
   @return {void}
   @public
  */
  function resumeTest() {
    !resume && debug.assert('Testing has not been paused. There is nothing to resume.', resume);
    resume();
    resume = undefined;
  }

  /**
   Pauses the current test - this is useful for debugging while testing or for test-driving.
   It allows you to inspect the state of your application at any point.
   Example (The test will pause before clicking the button):
    ```javascript
   visit('/')
   return pauseTest();
   click('.btn');
   ```
    You may want to turn off the timeout before pausing.
    qunit (timeout available to use as of 2.4.0):
    ```
   visit('/');
   assert.timeout(0);
   return pauseTest();
   click('.btn');
   ```
    mocha (timeout happens automatically as of ember-mocha v0.14.0):
    ```
   visit('/');
   this.timeout(0);
   return pauseTest();
   click('.btn');
   ```
     @since 1.9.0
   @method pauseTest
   @return {Object} A promise that will never resolve
   @public
  */
  function pauseTest() {
    debug.info('Testing paused. Use `resumeTest()` to continue.');
    return new runtime.RSVP.Promise(resolve => {
      resume = resolve;
    }, 'TestAdapter paused promise');
  }
  const emberTestingLibHelpersPauseTest = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    pauseTest,
    resumeTest
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
    Loads a route, sets up any controllers, and renders any templates associated
    with the route as though a real user had triggered the route change while
    using your app.
     Example:
     ```javascript
    visit('posts/index').then(function() {
      // assert something
    });
    ```
     @method visit
    @param {String} url the name of the route
    @return {RSVP.Promise<undefined>}
    @public
  */
  function visit(app, url) {
    !app.__container__ && debug.assert('[BUG] Missing container', app.__container__);
    const router = app.__container__.lookup('router:main');
    !(router instanceof Router.default) && debug.assert('[BUG] router:main is not a Router', router instanceof Router.default);
    let shouldHandleURL = false;
    app.boot().then(() => {
      !(typeof router.location !== 'string') && debug.assert('[BUG] router.location is still a string', typeof router.location !== 'string');
      router.location.setURL(url);
      if (shouldHandleURL) {
        !app.__deprecatedInstance__ && debug.assert("[BUG] __deprecatedInstance__ isn't set", app.__deprecatedInstance__);
        runloop.run(app.__deprecatedInstance__, 'handleURL', url);
      }
    });
    if (app._readinessDeferrals > 0) {
      // SAFETY: This should be safe, though it is odd.
      router.initialURL = url;
      runloop.run(app, 'advanceReadiness');
      delete router.initialURL;
    } else {
      shouldHandleURL = true;
    }
    let wait = app.testHelpers['wait'];
    !wait && debug.assert('[BUG] missing wait helper', wait);
    return wait();
  }
  const emberTestingLibHelpersVisit = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: visit
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  let requests = [];
  function pendingRequests() {
    return requests.length;
  }
  function clearPendingRequests() {
    requests.length = 0;
  }
  function incrementPendingRequests(_, xhr) {
    requests.push(xhr);
  }
  function decrementPendingRequests(_, xhr) {
    setTimeout(function () {
      for (let i = 0; i < requests.length; i++) {
        if (xhr === requests[i]) {
          requests.splice(i, 1);
          break;
        }
      }
    }, 0);
  }
  const emberTestingLibTestPendingRequests = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    clearPendingRequests,
    decrementPendingRequests,
    incrementPendingRequests,
    pendingRequests
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /**
  @module ember
  */

  /**
    Causes the run loop to process any pending events. This is used to ensure that
    any async operations from other helpers (or your assertions) have been processed.
     This is most often used as the return value for the helper functions (see 'click',
    'fillIn','visit',etc). However, there is a method to register a test helper which
    utilizes this method without the need to actually call `wait()` in your helpers.
     The `wait` helper is built into `registerAsyncHelper` by default. You will not need
    to `return app.testHelpers.wait();` - the wait behavior is provided for you.
     Example:
     ```javascript
    import { registerAsyncHelper } from '@ember/test';
     registerAsyncHelper('loginUser', function(app, username, password) {
      visit('secured/path/here')
        .fillIn('#username', username)
        .fillIn('#password', password)
        .click('.submit');
    });
    ```
     @method wait
    @param {Object} value The value to be returned.
    @return {RSVP.Promise<any>} Promise that resolves to the passed value.
    @public
    @since 1.0.0
  */
  function wait(app, value) {
    return new runtime.RSVP.Promise(function (resolve) {
      !app.__container__ && debug.assert('[BUG] Missing container', app.__container__);
      const router = app.__container__.lookup('router:main');
      !(router instanceof Router.default) && debug.assert('[BUG] Expected router:main to be a subclass of Ember Router', router instanceof Router.default); // Every 10ms, poll for the async thing to have finished
      let watcher = setInterval(() => {
        // 1. If the router is loading, keep polling
        let routerIsLoading = router._routerMicrolib && Boolean(router._routerMicrolib.activeTransition);
        if (routerIsLoading) {
          return;
        }

        // 2. If there are pending Ajax requests, keep polling
        if (pendingRequests()) {
          return;
        }

        // 3. If there are scheduled timers or we are inside of a run loop, keep polling
        if (runloop._hasScheduledTimers() || runloop._getCurrentRunLoop()) {
          return;
        }
        if (checkWaiters()) {
          return;
        }

        // Stop polling
        clearInterval(watcher);

        // Synchronously resolve the promise
        runloop.run(null, resolve, value);
      }, 10);
    });
  }
  const emberTestingLibHelpersWait = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: wait
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  registerAsyncHelper('visit', visit);
  registerAsyncHelper('wait', wait);
  registerAsyncHelper('andThen', andThen);
  registerAsyncHelper('pauseTest', pauseTest);
  registerHelper('currentRouteName', currentRouteName);
  registerHelper('currentPath', currentPath);
  registerHelper('currentURL', currentURL);
  registerHelper('resumeTest', resumeTest);
  const emberTestingLibHelpers = /*#__PURE__*/Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  let name = 'deferReadiness in `testing` mode';
  EmberApplication.onLoad('Ember.Application', function (ApplicationClass) {
    if (!ApplicationClass.initializers[name]) {
      ApplicationClass.initializer({
        name: name,
        initialize(application) {
          if (application.testing) {
            application.deferReadiness();
          }
        }
      });
    }
  });
  const emberTestingLibInitializers = /*#__PURE__*/Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  // to setup initializer

  const emberTestingLibPublicApi = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Adapter,
    QUnitAdapter,
    Test,
    setupForTesting
  }, Symbol.toStringTag, {
    value: 'Module'
  });
  test.registerTestImplementation(emberTestingLibPublicApi);
  const emberTestingIndex = /*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Adapter,
    QUnitAdapter,
    Test,
    setupForTesting
  }, Symbol.toStringTag, {
    value: 'Module'
  });

  /* eslint-disable */

  d('ember-testing/index', emberTestingIndex);
  d('ember-testing/lib/adapters/adapter', emberTestingLibAdaptersAdapter);
  d('ember-testing/lib/adapters/qunit', emberTestingLibAdaptersQunit);
  d('ember-testing/lib/ext/application', emberTestingLibExtApplication);
  d('ember-testing/lib/ext/rsvp', emberTestingLibExtRsvp);
  d('ember-testing/lib/helpers', emberTestingLibHelpers);
  d('ember-testing/lib/helpers/and_then', emberTestingLibHelpersAndThen);
  d('ember-testing/lib/helpers/current_path', emberTestingLibHelpersCurrentPath);
  d('ember-testing/lib/helpers/current_route_name', () => emberTestingLibHelpersCurrentRouteName);
  d('ember-testing/lib/helpers/current_url', emberTestingLibHelpersCurrentUrl);
  d('ember-testing/lib/helpers/pause_test', emberTestingLibHelpersPauseTest);
  d('ember-testing/lib/helpers/visit', emberTestingLibHelpersVisit);
  d('ember-testing/lib/helpers/wait', emberTestingLibHelpersWait);
  d('ember-testing/lib/initializers', emberTestingLibInitializers);
  d('ember-testing/lib/public-api', emberTestingLibPublicApi);
  d('ember-testing/lib/setup_for_testing', emberTestingLibSetupForTesting);
  d('ember-testing/lib/test', emberTestingLibTest);
  d('ember-testing/lib/test/adapter', emberTestingLibTestAdapter);
  d('ember-testing/lib/test/helpers', emberTestingLibTestHelpers);
  d('ember-testing/lib/test/on_inject_helpers', emberTestingLibTestOnInjectHelpers);
  d('ember-testing/lib/test/pending_requests', emberTestingLibTestPendingRequests);
  d('ember-testing/lib/test/promise', emberTestingLibTestPromise);
  d('ember-testing/lib/test/run', emberTestingLibTestRun);
  d('ember-testing/lib/test/waiters', emberTestingLibTestWaiters);
})(require('@ember/-internals/runtime'), require('@ember/runloop'), require('@ember/-internals/error-handling'), require('@ember/object'), require('@ember/debug'), require('@ember/application'), require('@ember/routing/-internals'), require('@ember/routing/router'), require('@ember/test'));
(function() {
  var key = '_embroider_macros_runtime_config';
  if (!window[key]) {
    window[key] = [];
  }
  window[key].push(function(m) {
    m.setGlobalConfig(
      '@embroider/macros',
      Object.assign({}, m.getGlobalConfig()['@embroider/macros'], { isTesting: true })
    );
  });
})();

define("ember-classy-page-object/-private/page-object", ["exports", "@ember/debug", "ember-cli-page-object", "ember-classy-page-object/-private/utils/descriptors"], function (_exports, _debug, _emberCliPageObject, _descriptors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-cli-page-object",0,"ember-classy-page-object/-private/utils/descriptors"eaimeta@70e063a35619d71f
  function extendDefinition(definition, extension) {
    (true && !(extension !== null && (typeof extension === 'string' || typeof extension === 'object')) && (0, _debug.assert)('must provide a string or an object to extend', extension !== null && (typeof extension === 'string' || typeof extension === 'object')));
    (true && !(extension && Object.keys(extension).length > 0) && (0, _debug.assert)('must provide a definition with atleast one key when extending a PageObject', extension && Object.keys(extension).length > 0));
    let finalizedDefinition = typeof extension === 'string' ? {
      scope: extension
    } : extension;
    finalizedDefinition = (0, _descriptors.extractPageObjects)(finalizedDefinition);
    finalizedDefinition = (0, _descriptors.extractGetters)(finalizedDefinition);
    finalizedDefinition = (0, _descriptors.deepMergeDescriptors)(finalizedDefinition, definition);
    return finalizedDefinition;
  }
  class PageObject {
    constructor(extension) {
      let definition = this.constructor._definition;
      definition = extension ? extendDefinition(definition, extension) : definition;
      return (0, _emberCliPageObject.create)(definition);
    }
    static extend(extension) {
      let Page = class extends this {};
      Page._definition = extendDefinition(this._definition, extension);
      return Page;
    }
  }
  _exports.default = PageObject;
  PageObject._definition = {};
});
define("ember-classy-page-object/-private/properties/collection", ["exports", "ember-cli-page-object", "@ember/debug"], function (_exports, _emberCliPageObject, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.collection = collection;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-page-object",0,"@ember/debug"eaimeta@70e063a35619d71f
  class CollectionProxy {
    constructor(scope, definition, key, parent) {
      this._key = key;
      this._page = (0, _emberCliPageObject.create)({
        [key]: (0, _emberCliPageObject.collection)(scope, definition)
      }, {
        parent
      });

      // Hack: Trick the page object into thinking it has a different parent
      this._collection.parent = parent;
    }
    get _collection() {
      return this._page[this._key];
    }
    objectAt(index) {
      return this._collection.objectAt(index);
    }
    get length() {
      return this._collection.length;
    }
    toArray() {
      return this._collection.toArray();
    }
    filter(...args) {
      return this._collection.filter(...args);
    }
    filterBy(...args) {
      return this._collection.filterBy(...args);
    }
    map(...args) {
      return this._collection.map(...args);
    }
    mapBy(...args) {
      return this._collection.mapBy(...args);
    }
    forEach(...args) {
      return this.toArray().forEach(...args);
    }
    findOne(query) {
      let result = this.findAll(query);
      (true && !(result.length === 1) && (0, _debug.assert)(`Expected at most one result from 'findOne' query in '${this._collection.key}' collection, but found ${result.length} using query ${(0, _debug.inspect)(query)}`, result.length === 1));
      return result[0];
    }
    findAll(query) {
      let predicate;
      if (typeof query === 'object') {
        predicate = item => {
          let isMatch = true;
          for (let key in query) {
            isMatch = isMatch && item[key] === query[key];
          }
          return isMatch;
        };
      } else if (typeof query === 'function') {
        predicate = query;
      } else {
        (true && !(false) && (0, _debug.assert)(`Expected query for findAll to be either an object or function, received: ${(0, _debug.inspect)(query)}`, false));
      }
      return this.filter(predicate);
    }
  }
  function collection(scopeOrDefinition, definitionOrNull) {
    // Collection proxies need to be created for each of instances of this collection,
    // and there may be many since page objects can be reused in many locations. We use
    // a WeakMap to store each instance relative to its node.
    let collectionProxyMap = new WeakMap();
    let definition = definitionOrNull || scopeOrDefinition;
    if (definition._definition) {
      definition = definition._definition;
    }
    let scope = definitionOrNull ? scopeOrDefinition : definition.scope;
    delete definition.scope;
    return {
      isDescriptor: true,
      setup(node, key) {
        let collectionProxy = new CollectionProxy(this._scope, this._definition, key, node);
        collectionProxyMap.set(node, collectionProxy);
      },
      get() {
        return collectionProxyMap.get(this);
      },
      _scope: scope,
      _definition: definition
    };
  }
});
define("ember-classy-page-object/-private/utils/descriptors", ["exports", "ember-cli-page-object/macros"], function (_exports, _macros) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.deepMergeDescriptors = deepMergeDescriptors;
  _exports.extractGetters = extractGetters;
  _exports.extractPageObjects = extractPageObjects;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-page-object/macros"eaimeta@70e063a35619d71f
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
  }
  function walkObject(obj, fn) {
    Object.getOwnPropertyNames(obj).forEach(name => {
      // Copy descriptor
      let descriptor = Object.getOwnPropertyDescriptor(obj, name);
      fn(obj, name, descriptor);
    });
  }
  function extractPageObjects(definition) {
    let finalizedDefinition = {};
    walkObject(definition, (obj, name, descriptor) => {
      if (typeof descriptor.value === 'function' && descriptor.value._definition) {
        descriptor.value = descriptor.value._definition;
      }
      if (isObject(descriptor.value)) {
        descriptor.value = extractPageObjects(descriptor.value);
      }
      Object.defineProperty(finalizedDefinition, name, descriptor);
    });
    return finalizedDefinition;
  }
  function extractGetters(definition) {
    let finalizedDefinition = {};
    walkObject(definition, (obj, name, descriptor) => {
      if (typeof descriptor.get === 'function') {
        descriptor.value = (0, _macros.getter)(descriptor.get);
        descriptor.writable = true;
        delete descriptor.get;
        delete descriptor.set;
      } else if (isObject(descriptor.value)) {
        descriptor.value = extractGetters(descriptor.value);
      }
      Object.defineProperty(finalizedDefinition, name, descriptor);
    });
    return finalizedDefinition;
  }
  function deepMergeDescriptors(dest, src) {
    walkObject(src, (obj, name, descriptor) => {
      const {
        value: srcValue
      } = descriptor;

      // The property exists on both objects
      if (Object.hasOwnProperty.call(dest, name)) {
        let {
          value: destValue
        } = Object.getOwnPropertyDescriptor(dest, name);

        // Deep merge if both are objects
        if (isObject(destValue) && isObject(srcValue)) {
          descriptor.value = deepMergeDescriptors(destValue, srcValue);
        } else if (destValue === undefined) {
          descriptor.value = srcValue;
        } else {
          // Defer to the 'dest' value otherwise (ie, do not redefine property)
          return;
        }
      } else if (isObject(srcValue)) {
        // The property only exists on 'src'
        descriptor.value = deepMergeDescriptors({}, srcValue);
      }
      Object.defineProperty(dest, name, descriptor);
    });
    return dest;
  }
});
define("ember-classy-page-object/-private/utils/extract-getters", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
define("ember-classy-page-object/extend", ["exports", "ember-cli-page-object/extend"], function (_exports, _extend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "buildSelector", {
    enumerable: true,
    get: function () {
      return _extend.buildSelector;
    }
  });
  _exports.findElement = findElement;
  _exports.findElementWithAssert = findElementWithAssert;
  Object.defineProperty(_exports, "fullScope", {
    enumerable: true,
    get: function () {
      return _extend.fullScope;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-page-object/extend",0,"ember-cli-page-object/extend"eaimeta@70e063a35619d71f
  function findElement(node, selector, options = {}) {
    const result = (0, _extend.findElement)(node, selector, options);
    return options.multiple ? result.toArray() : result[0];
  }
  function findElementWithAssert(node, selector, options = {}) {
    const result = (0, _extend.findElementWithAssert)(node, selector, options);
    return options.multiple ? result.toArray() : result[0];
  }
});
define("ember-classy-page-object/index", ["exports", "ember-cli-page-object", "ember-cli-page-object/macros", "ember-classy-page-object/-private/properties/collection", "ember-classy-page-object/-private/page-object"], function (_exports, _emberCliPageObject, _macros, _collection, _pageObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "alias", {
    enumerable: true,
    get: function () {
      return _macros.alias;
    }
  });
  Object.defineProperty(_exports, "attribute", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.attribute;
    }
  });
  Object.defineProperty(_exports, "blurrable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.blurrable;
    }
  });
  Object.defineProperty(_exports, "clickOnText", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.clickOnText;
    }
  });
  Object.defineProperty(_exports, "clickable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.clickable;
    }
  });
  Object.defineProperty(_exports, "collection", {
    enumerable: true,
    get: function () {
      return _collection.collection;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.contains;
    }
  });
  Object.defineProperty(_exports, "count", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.count;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageObject.default;
    }
  });
  Object.defineProperty(_exports, "fillable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "hasClass", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.hasClass;
    }
  });
  Object.defineProperty(_exports, "isHidden", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isHidden;
    }
  });
  Object.defineProperty(_exports, "isPresent", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isPresent;
    }
  });
  Object.defineProperty(_exports, "isVisible", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isVisible;
    }
  });
  Object.defineProperty(_exports, "notHasClass", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.notHasClass;
    }
  });
  Object.defineProperty(_exports, "property", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.property;
    }
  });
  Object.defineProperty(_exports, "text", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.text;
    }
  });
  Object.defineProperty(_exports, "triggerable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.triggerable;
    }
  });
  Object.defineProperty(_exports, "value", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.value;
    }
  });
  Object.defineProperty(_exports, "visitable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.visitable;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-page-object",0,"ember-cli-page-object/macros",0,"ember-classy-page-object/-private/properties/collection",0,"ember-classy-page-object/-private/page-object"eaimeta@70e063a35619d71f
});
define("ember-gesture-modifiers/test-support/create-pointer-event", ["exports", "@ember/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createPointerEvent;
  /**
   * Generates a PointerEvent for testing purposes
   *
   * @param {Element} target
   * @param {string} eventType pointerdown, pointermove or pointerend
   * @param {number} x
   * @param {number} y
   * @param {number} identifier
   * @returns {PointerEvent}
   */
  function createPointerEvent(target, eventType, x, y, identifier = 0, pointerType = 'touch') {
    (true && !(['touch', 'mouse', 'pen'].includes(pointerType)) && (0, _debug.assert)('Argument "pointerType" must be one of "touch", "mouse" or "pen".', ['touch', 'mouse', 'pen'].includes(pointerType)));
    return new PointerEvent(eventType, {
      bubbles: true,
      cancelable: true,
      identifier: identifier || 0,
      target,
      clientX: x,
      clientY: y,
      pointerType: [pointerType]
    });
  }
});
define("ember-gesture-modifiers/test-support/index", ["exports", "ember-gesture-modifiers/test-support/pan"], function (_exports, _pan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "pan", {
    enumerable: true,
    get: function () {
      return _pan.default;
    }
  });
});
define("ember-gesture-modifiers/test-support/pan", ["exports", "@ember/test-helpers", "ember-gesture-modifiers/test-support/create-pointer-event"], function (_exports, _testHelpers, _createPointerEvent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = pan;
  function timeout(duration) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), duration);
    });
  }
  function nextTickPromise() {
    return new Promise(resolve => {
      setTimeout(resolve);
    });
  }
  function getElement(target) {
    if (target.nodeType === Node.ELEMENT_NODE || target.nodeType === Node.DOCUMENT_NODE || target instanceof Window) {
      return target;
    } else if (typeof target === 'string') {
      let rootElement = (0, _testHelpers.getRootElement)();
      return rootElement.querySelector(target);
    } else {
      throw new Error('Must use an element or a selector string');
    }
  }
  function sendEvent(element, type, x, y, pointerType) {
    const event = (0, _createPointerEvent.default)(element, type, x, y, 0, pointerType);
    element.dispatchEvent(event);
  }
  async function _pan(element, options = {}) {
    const {
      top,
      left,
      width,
      height
    } = element.getBoundingClientRect();
    const {
      direction = 'right',
      duration = 300,
      resolution = 17,
      // ms per step
      pointerType
    } = options;
    const right = left + width;
    const bottom = top + height;
    const middleX = left + width / 2;
    const middleY = top + height / 2;
    const {
      startX = direction === 'left' ? right - 1 : direction === 'right' || direction === 'up-right' ? left + 1 : middleX,
      endX = direction === 'left' ? left + 1 : direction === 'right' || direction === 'up-right' ? right - 1 : middleX,
      startY = direction === 'up' || direction === 'up-right' ? bottom - 1 : direction === 'down' ? top + 1 : middleY,
      endY = direction === 'up' || direction === 'up-right' ? top + 1 : direction === 'down' ? bottom - 1 : middleY
    } = options;
    const steps = Math.ceil(duration / resolution);
    sendEvent(document, 'pointerdown', startX, startY, pointerType);
    sendEvent(element, 'pointerdown', startX, startY, pointerType);
    for (let i = 1; i < steps; i++) {
      await timeout(resolution);
      const x = direction === 'left' ? startX - (startX - endX) / steps * i : direction === 'right' || direction === 'up-right' ? startX + (endX - startX) / steps * i : middleX;
      const y = direction === 'up' || direction === 'up-right' ? startY - (startY - endY) / steps * i : direction === 'down' ? startY + (endY - startY) / steps * i : middleY;
      sendEvent(document, 'pointermove', x, y, pointerType);
      sendEvent(element, 'pointermove', x, y, pointerType);
    }
    sendEvent(document, 'pointerup', endX, endY, pointerType);
    sendEvent(element, 'pointerup', endX, endY, pointerType);
  }
  async function pan(target, direction, pointerType) {
    await nextTickPromise();
    if (!target) {
      throw new Error('Must pass an element or selector to `pan`.');
    }
    let element = getElement(target);
    if (!element) {
      throw new Error(`Element not found when calling \`pan('${target}')\`.`);
    }
    await _pan(element, {
      direction,
      pointerType
    });
    return (0, _testHelpers.settled)();
  }
});
define("ember-raf-scheduler/test-support/register-waiter", ["exports", "@ember/test", "ember-raf-scheduler"], function (_exports, _test, _emberRafScheduler) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = registerWaiter;
  /* eslint-disable ember/no-legacy-test-waiters */

  function registerWaiter() {
    (0, _test.registerWaiter)(function () {
      return _emberRafScheduler.default.jobs === 0;
    });
  }
});
define("ember-table/test-support/helpers/element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getScale = getScale;
  function getScale(element) {
    let rect = element.getBoundingClientRect();
    if (element.offsetHeight === rect.height || rect.height === 0) {
      return 1;
    } else {
      return element.offsetHeight / rect.height;
    }
  }
});
define("ember-table/test-support/helpers/mouse", ["exports", "@ember/test-helpers"], function (_exports, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.mouseDown = mouseDown;
  _exports.mouseMove = mouseMove;
  _exports.mouseUp = mouseUp;
  async function mouseDown(target, x, y) {
    await (0, _testHelpers.triggerEvent)(target, 'pointerdown', {
      clientX: x,
      clientY: y,
      button: 0
    });
  }
  async function mouseMove(target, x, y) {
    await (0, _testHelpers.triggerEvent)(target, 'pointermove', {
      clientX: x,
      clientY: y,
      button: 0
    });
  }
  async function mouseUp(target, x, y) {
    await (0, _testHelpers.triggerEvent)(target, 'pointerup', {
      clientX: x,
      clientY: y,
      button: 0
    });
  }
});
define("ember-table/test-support/index", ["exports", "ember-table/test-support/pages/ember-table", "ember-raf-scheduler/test-support/register-waiter", "ember-table/components/ember-tbody/component", "ember-table/components/ember-thead/component", "ember-table/components/ember-td/component"], function (_exports, _emberTable, _registerWaiter, _component, _component2, _component3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "TablePage", {
    enumerable: true,
    get: function () {
      return _emberTable.default;
    }
  });
  _exports.setupForTest = setupForTest;
  function setupForTest() {
    (0, _registerWaiter.default)();
    (0, _component.setSetupRowCountForTest)(true);
    (0, _component2.setupTHeadForTest)(true);
    (0, _component3.setSimpleCheckboxForTest)(true);
  }
});
define("ember-table/test-support/pages/-private/ember-table-body", ["exports", "ember-classy-page-object", "ember-classy-page-object/extend", "@ember/test-helpers"], function (_exports, _emberClassyPageObject, _extend, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.BodyCell = void 0;
  /**
   * Page object for single table `td` cell; also used by the footer page object
   * to represent footer cells.
   */
  const BodyCell = _exports.BodyCell = _emberClassyPageObject.default.extend({
    scope: 'td',
    doubleClick: (0, _emberClassyPageObject.triggerable)('dblclick'),
    isFirstColumn: (0, _emberClassyPageObject.hasClass)('is-first-column'),
    isLastColumn: (0, _emberClassyPageObject.hasClass)('is-last-column'),
    isSlack: (0, _emberClassyPageObject.hasClass)('is-slack')
  });
  var _default = _exports.default = _emberClassyPageObject.default.extend({
    scope: 'tbody',
    /**
      Returns the height of the entire tbody element.
    */
    get height() {
      return (0, _extend.findElement)(this).offsetHeight;
    },
    /**
      Returns the number of rows in the body.
    */
    get rowCount() {
      let element = (0, _extend.findElement)(this);
      if (!element.hasAttribute('data-test-row-count')) {
        throw new Error('data-test-row-count attribute not found on the Ember Table tbody. Perhaps you need to run setupForTest? See https://github.com/Addepar/ember-table/blob/master/README.md');
      }
      return Number(element.getAttribute('data-test-row-count'));
    },
    /**
      List of rows in table body. Each of property/function in this collections is the property/func
      of a single row selected by using calling rows.objectAt(index).
    */
    rows: (0, _emberClassyPageObject.collection)({
      scope: 'tr',
      /**
        List of all cells for the selected row.
      */
      cells: (0, _emberClassyPageObject.collection)('td:not([data-test-ember-table-slack])', BodyCell),
      /**
        Slack cell from this row, if present.
      */
      slackCell: BodyCell.extend({
        scope: 'td[data-test-ember-table-slack]'
      }),
      /**
        Returns the height of selected row.
      */
      get height() {
        return (0, _extend.findElement)(this).offsetHeight;
      },
      checkbox: {
        scope: '[data-test-select-row]',
        isChecked: (0, _emberClassyPageObject.property)('checked'),
        async clickWith(options) {
          await (0, _testHelpers.click)((0, _extend.findElement)(this), options);
        }
      },
      checkboxContainer: {
        scope: '[data-test-select-row-container]',
        isHidden: (0, _emberClassyPageObject.hasClass)('et-speech-only')
      },
      toggleSelect: (0, _emberClassyPageObject.alias)('checkbox.click'),
      collapse: {
        scope: '[data-test-collapse-row]',
        isCollapsed: (0, _emberClassyPageObject.property)('checked')
      },
      toggleCollapse: (0, _emberClassyPageObject.alias)('collapse.click'),
      isSelected: (0, _emberClassyPageObject.hasClass)('is-selected'),
      /**
        Helper function to click with options like the meta key and ctrl key set
         @param {Object} options - click event options
      */
      async clickWith(options) {
        await (0, _testHelpers.click)((0, _extend.findElement)(this), options);
      },
      doubleClick: (0, _emberClassyPageObject.triggerable)('dblclick')
    }),
    /**
      A shortcut to return cell page object specified by row & column indexes.
    */
    getCell(rowIndex, columnIndex) {
      return this.rows.objectAt(rowIndex).cells.objectAt(columnIndex);
    }
  });
});
define("ember-table/test-support/pages/-private/ember-table-footer", ["exports", "ember-classy-page-object", "ember-table/test-support/pages/-private/ember-table-body"], function (_exports, _emberClassyPageObject, _emberTableBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _emberTableBody.default.extend({
    scope: 'tfoot',
    footers: (0, _emberClassyPageObject.collection)('td:not([data-test-ember-table-slack])', _emberTableBody.BodyCell),
    slackFooters: (0, _emberClassyPageObject.collection)('td[data-test-ember-table-slack]', _emberTableBody.BodyCell)
  });
});
define("ember-table/test-support/pages/-private/ember-table-header", ["exports", "ember-classy-page-object", "ember-classy-page-object/extend", "@ember/test-helpers", "ember-table/test-support/helpers/mouse", "ember-table/test-support/helpers/element"], function (_exports, _emberClassyPageObject, _extend, _testHelpers, _mouse, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.SortPage = _exports.ResizePage = void 0;
  function computedStyleInPixels(target, property) {
    let stringValue = window.getComputedStyle(target)[property];
    let numberValue = Number(stringValue.substring(0, stringValue.length - 2));
    if (isNaN(numberValue)) {
      throw new Error(`computedStyleInPixels failed to convert the computed style property of '${property}' into a Number. Value was '${stringValue}'`);
    }
    return numberValue;
  }
  const SortPage = _exports.SortPage = _emberClassyPageObject.default.extend({
    indicator: {
      scope: '[data-test-sort-indicator]',
      isAscending: (0, _emberClassyPageObject.hasClass)('is-ascending'),
      isDescending: (0, _emberClassyPageObject.hasClass)('is-descending')
    },
    toggle: {
      scope: '[data-test-sort-toggle]'
    }
  });
  const ResizePage = _exports.ResizePage = _emberClassyPageObject.default.extend({
    scope: '[data-test-resize-handle]'
  });
  const Header = _emberClassyPageObject.default.extend({
    get text() {
      return (0, _extend.findElement)(this).innerText.replace(/\s+/g, ' ').trim();
    },
    /**
     * Retrieves selected header cell width.
     *
     * offsetWidth returns a rounded integer, and so can
     * result in unreliable tests.
     *
     * @returns {number}
     */
    get width() {
      return (0, _extend.findElement)(this).offsetWidth;
    },
    /**
     * Retrieves selected header cell height.
     *
     * offsetHeight returns a rounded integer, and so can
     * result in unreliable tests.
     *
     * @returns {number}
     */
    get height() {
      return (0, _extend.findElement)(this).offsetHeight;
    },
    /**
     * Retrieves selected header cell logical width.
     *
     * @returns {number}
     */
    get logicalWidth() {
      return computedStyleInPixels((0, _extend.findElement)(this), 'width');
    },
    /**
     * Retrieves the rendered width of the selected header cell.
     *
     * @returns {number}
     */
    get renderedWidth() {
      return (0, _extend.findElement)(this).getBoundingClientRect().width;
    },
    get isLeaf() {
      return (0, _extend.findElement)(this).dataset.testLeafHeader;
    },
    get isRendered() {
      return (0, _extend.findElement)(this).style.display !== 'none';
    },
    isFixedLeft: (0, _emberClassyPageObject.hasClass)('is-fixed-left'),
    isFixedRight: (0, _emberClassyPageObject.hasClass)('is-fixed-right'),
    isFirstColumn: (0, _emberClassyPageObject.hasClass)('is-first-column'),
    isLastColumn: (0, _emberClassyPageObject.hasClass)('is-last-column'),
    isSlack: (0, _emberClassyPageObject.hasClass)('is-slack'),
    contextMenu: (0, _emberClassyPageObject.triggerable)('contextmenu'),
    /**
     * Resize the table header. This API isn't clear about if a logical
     * or rendered size is being passed. It defers to the more explicit
     * logicalResize which should probably be preferred in future use.
     */
    async resize(targetSize) {
      await this.logicalResize(targetSize);
    },
    async logicalResize(targetSize) {
      let renderedTargetSize = targetSize / (0, _element.getScale)(document.getElementById('ember-testing-container').firstElementChild);
      await this.renderedResize(renderedTargetSize);
    },
    /**
     * Resizes this column by dragging right border several pixels,
     * unless the column is fixed right in quick case it drags left.
     */
    async renderedResize(targetSize) {
      let resizeHandle = (0, _extend.findElement)(this, '[data-test-resize-handle]');
      if (!resizeHandle) {
        return;
      }
      let box = resizeHandle.getBoundingClientRect();
      let startX = (box.right + box.left) / 2;
      let y = box.top + (box.bottom - box.top) / 2;
      let deltaX = targetSize - this.renderedWidth;
      if (this.isFixedRight) {
        deltaX = -deltaX;
      }
      let finalX = startX + deltaX;
      await (0, _mouse.mouseDown)(resizeHandle, startX, y);

      /**
       * Below a certain number of steps, Hammer (the gesture library
       * which recognizes panning) will not pick up the pointermove
       * events emitted by `mouseMove` before the gestrure completes.
       *
       * 5 seems a reasonable number.
       */
      let current = startX;
      for (let steps = 5; steps > 0; steps--) {
        await (0, _mouse.mouseMove)(resizeHandle, current, y);
        current = current + (finalX - current) / steps;
      }
      await (0, _mouse.mouseMove)(resizeHandle, finalX, y);
      await (0, _mouse.mouseUp)(resizeHandle, finalX, y);
    },
    /**
     * Moves this header to left (or right).
     *
     * @params deltaPosition Indicates how many index this column should move. This is a positive
     *    number if the column is moved to its right and negative if it's moved to its left.
     */
    async reorderBy(deltaPosition) {
      let header = (0, _extend.findElement)(this);
      let targetElement = header;
      while (deltaPosition !== 0) {
        if (deltaPosition < 0) {
          deltaPosition++;
          targetElement = targetElement.previousElementSibling ? targetElement.previousElementSibling : targetElement;
        } else {
          deltaPosition--;
          targetElement = targetElement.nextElementSibling ? targetElement.nextElementSibling : targetElement;
        }
      }
      let headerBox = header.getBoundingClientRect();
      let targetBox = targetElement.getBoundingClientRect();
      let deltaX = targetBox.left - headerBox.left;
      let startX = (headerBox.right + headerBox.left) / 2;
      await (0, _mouse.mouseDown)(header, startX - 20, header.clientHeight / 2);
      await (0, _mouse.mouseMove)(header, startX, header.clientHeight / 2);
      await (0, _mouse.mouseMove)(header, startX + deltaX, header.clientHeight / 2);
      await (0, _mouse.mouseUp)(header, startX + deltaX, header.clientHeight / 2);
    },
    /**
      Helper function to click with options like the meta key and ctrl key set
       @param {Object} options - click event options
    */
    async clickWith(options) {
      await (0, _testHelpers.click)((0, _extend.findElement)(this), options);
    },
    async enterKeyup() {
      await (0, _testHelpers.triggerKeyEvent)((0, _extend.findElement)(this), 'keyup', 'Enter');
    },
    isSortable: (0, _emberClassyPageObject.hasClass)('is-sortable'),
    sort: SortPage,
    sortIndicator: (0, _emberClassyPageObject.alias)('sort.indicator'),
    sortToggle: (0, _emberClassyPageObject.alias)('sort.toggle'),
    resizeHandle: ResizePage
  });
  var _default = _exports.default = {
    scope: 'thead',
    /**
     * Selects all non-slack `th` header elements from all header rows.
     */
    headers: (0, _emberClassyPageObject.collection)('th:not([data-test-ember-table-slack])', Header),
    /**
     * Selects all slack `th` header elements from all header rows.
     */
    slackHeaders: (0, _emberClassyPageObject.collection)('th[data-test-ember-table-slack]', Header),
    /**
      Returns the height of the entire thead element.
    */
    get height() {
      return (0, _extend.findElement)(this).offsetHeight;
    },
    /**
      Returns the number of rows in the header.
    */
    get rowCount() {
      let element = (0, _extend.findElement)(this);
      if (!element.hasAttribute('data-test-row-count')) {
        throw new Error('data-test-row-count attribute not found on the Ember Table tbody. Perhaps you need to run setupForTest? See https://github.com/Addepar/ember-table/blob/master/README.md');
      }
      return Number(element.getAttribute('data-test-row-count'));
    },
    rows: (0, _emberClassyPageObject.collection)({
      scope: 'tr',
      headers: (0, _emberClassyPageObject.collection)('th:not([data-test-ember-table-slack])', Header),
      slackHeader: Header.extend({
        scope: 'th[data-test-ember-table-slack]'
      })
    })
  };
});
define("ember-table/test-support/pages/-private/ember-table-loading-more", ["exports", "ember-classy-page-object", "ember-classy-page-object/extend"], function (_exports, _emberClassyPageObject, _extend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /**
   * Page object for "Loading More" component that renders beneath the body.
   */
  var _default = _exports.default = _emberClassyPageObject.default.extend({
    scope: '[data-test-ember-table-loading-more]',
    /**
     * Returns the pixel value of the `translateX` transform applied to center
     * the indicator in the scroll viewport.
     */
    get translateX() {
      let transform = (0, _extend.findElement)(this).style.transform;
      let result = transform.match(/translateX\((\d+)px\)/);
      return result ? parseInt(result[1]) : 0;
    },
    /**
     * Returns if the LoadingMore component is occupying space in the layout.
     */
    get isIncludedInLayout() {
      return (0, _extend.findElement)(this).style.display !== 'none';
    },
    /**
     * Returns if the LoadingMore component and user block is visible.
     */
    get isShown() {
      return (0, _extend.findElement)(this).style.visibility !== 'hidden';
    }
  });
});
define("ember-table/test-support/pages/ember-table", ["exports", "ember-classy-page-object", "ember-classy-page-object/extend", "ember-table/test-support/pages/-private/ember-table-body", "ember-table/test-support/pages/-private/ember-table-footer", "ember-table/test-support/pages/-private/ember-table-header", "ember-table/test-support/pages/-private/ember-table-loading-more"], function (_exports, _emberClassyPageObject, _extend, _emberTableBody, _emberTableFooter, _emberTableHeader, _emberTableLoadingMore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /**
   * Ember Table page object. Use this page object and its nested header/body object to retrieve table
   * data and manipulate table in test.
   */
  var _default = _exports.default = _emberClassyPageObject.default.extend({
    scope: '[data-test-ember-table]',
    /**
     * Page object for table header.
     */
    header: _emberTableHeader.default,
    /**
     * Page object for table body.
     */
    body: _emberTableBody.default,
    /**
     * Page object for "Loading More" component that renders beneath the body.
     */
    loadingMore: _emberTableLoadingMore.default,
    /**
     * Page object for table footer.
     */
    footer: _emberTableFooter.default,
    rows: (0, _emberClassyPageObject.alias)('body.rows'),
    getCell: (0, _emberClassyPageObject.alias)('body.getCell'),
    /**
     * Page object collection of header cells from all header rows.
     */
    headers: (0, _emberClassyPageObject.alias)('header.headers'),
    /**
     * Page object collection of slack header cells from all header rows.
     */
    slackHeaders: (0, _emberClassyPageObject.alias)('header.slackHeaders'),
    footers: (0, _emberClassyPageObject.alias)('footer.footers'),
    /**
     * Returns the table width.
     *
     * offsetWidth returns a rounded integer, and so can
     * result in unreliable tests.
     *
     * @returns {number}
     */
    get width() {
      return (0, _extend.findElement)(this, 'table').offsetWidth;
    },
    /**
     * Returns the table container width.
     *
     * offsetWidth returns a rounded integer, and so can
     * result in unreliable tests.
     *
     * @returns {number}
     */
    get containerWidth() {
      return (0, _extend.findElement)(this).offsetWidth;
    },
    /**
     * Returns the specified scroll indicator element
     */
    scrollIndicator(side = 'right') {
      return (0, _extend.findElement)(this, `[data-test-ember-table-scroll-indicator="${side}"]`);
    },
    /**
     * Returns whether the specified scroll indicator is currently visible
     */
    isScrollIndicatorRendered(side = 'right') {
      return !!this.scrollIndicator(side);
    },
    /**
     * Returns the scrollable overflow element
     */
    overflow() {
      return (0, _extend.findElement)(this, '[data-test-ember-table-overflow]');
    },
    /**
     * Returns the height of the horizontal scrollbar on the overflow element
     */
    horizontalScrollbarHeight() {
      let overflow = this.overflow();
      return overflow.offsetHeight - overflow.clientHeight;
    },
    /**
     * Returns the width of the vertical scrollbar on the overflow element
     */
    verticalScrollbarWidth() {
      let overflow = this.overflow();
      return overflow.offsetWidth - overflow.clientWidth;
    },
    /**
     * Returns the height of the visible portion of the footer
     */
    visibleFooterHeight() {
      let footerCells = (0, _extend.findElement)(this, 'tfoot td', {
        multiple: true
      });
      if (footerCells.length > 0) {
        let footerCellY = footerCells[0].getBoundingClientRect().y;
        let overflow = this.overflow();
        let overflowRect = overflow.getBoundingClientRect();
        let scale = overflow.offsetHeight / overflowRect.height;
        return Math.min(overflow.clientHeight - scale * (footerCellY - overflowRect.y), overflow.clientHeight);
      }
      return 0;
    },
    /**
     * Selects a row in the body
     *
     * @param {number} index
     */
    async selectRow(index) {
      await this.body.rows.objectAt(index).click();
    },
    /**
     * Selects a row in the body while holding shift key
     *
     * @param {number} index
     */
    async selectRowWithShiftClick(index) {
      await this.body.rows.objectAt(index).clickWith({
        shiftKey: true
      });
    },
    /**
     * Toggles a row in the body
     *
     * @param {number} index
     */
    async toggleRow(index) {
      await this.body.rows.objectAt(index).clickWith({
        metaKey: true
      });
    },
    /**
     * Selects a range of rows in the body with simple click first
     *
     * @param {number} beginIndex
     * @param {number} endIndex
     */
    async selectRangeFromClick(beginIndex, endIndex) {
      await this.body.rows.objectAt(beginIndex).click();
      await this.body.rows.objectAt(endIndex).clickWith({
        shiftKey: true
      });
    },
    /**
     * Selects a range of rows in the body with shift+click first
     *
     * @param {number} beginIndex
     * @param {number} endIndex
     */
    async selectRangeFromShiftClick(beginIndex, endIndex) {
      await this.body.rows.objectAt(beginIndex).clickWith({
        shiftKey: true
      });
      await this.body.rows.objectAt(endIndex).clickWith({
        shiftKey: true
      });
    }
  });
});
runningTests = true;

if (typeof Testem !== 'undefined' && (typeof QUnit !== 'undefined' || typeof Mocha !== 'undefined')) {
  window.Testem.hookIntoTestFramework();
}


//# sourceMappingURL=test-support.map
