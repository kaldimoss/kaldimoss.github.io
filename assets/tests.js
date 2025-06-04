'use strict';

define("play/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("play/tests/integration/components/category-bar-test", ["qunit", "play/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | category-bar', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <CategoryBar />
      */
      {
        "id": "vOHUpDUU",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"category-bar\"]]",
        "moduleName": "/Users/moss_wildfire/Documents/Code/play/play/tests/integration/components/category-bar-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <CategoryBar>
              template block text
            </CategoryBar>
          
      */
      {
        "id": "xUjF34Mg",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"category-bar\"]]",
        "moduleName": "/Users/moss_wildfire/Documents/Code/play/play/tests/integration/components/category-bar-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("play/tests/integration/components/sidebar-test", ["qunit", "play/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | sidebar', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Sidebar />
      */
      {
        "id": "mRMR5g6B",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"sidebar\"]]",
        "moduleName": "/Users/moss_wildfire/Documents/Code/play/play/tests/integration/components/sidebar-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Sidebar>
              template block text
            </Sidebar>
          
      */
      {
        "id": "UmGfJXcW",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"sidebar\"]]",
        "moduleName": "/Users/moss_wildfire/Documents/Code/play/play/tests/integration/components/sidebar-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("play/tests/test-helper", ["play/app", "play/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit/test-loader", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _testLoader, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"play/app",0,"play/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit/test-loader",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
});
define("play/tests/unit/controllers/category-page-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | category-page', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:category-page');
      assert.ok(controller);
    });
  });
});
define("play/tests/unit/controllers/index-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("play/tests/unit/models/media-item-test", ["play/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"play/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | media item', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('media-item', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("play/tests/unit/routes/category-page-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | category-page', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:category-page');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/contact-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/cv-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | cv', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:cv');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/general-atm-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | general_atm', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:general-atm');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/page1-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | page1', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:page1');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/page2-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | page2', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:page2');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/reviews-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | reviews', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:reviews');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/studio-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | studio', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:studio');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/summer-zurich-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | summer-zurich', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:summer-zurich');
      assert.ok(route);
    });
  });
});
define("play/tests/unit/routes/texts-test", ["qunit", "play/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"play/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | texts', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:texts');
      assert.ok(route);
    });
  });
});
define('play/config/environment', [], function() {
  var prefix = 'play';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('play/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
