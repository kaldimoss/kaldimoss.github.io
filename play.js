'use strict';



;define("play/adapters/application", ["exports", "@ember-data/adapter/json-api", "play/config/environment", "@ember/string"], function (_exports, _jsonApi, _environment, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api",0,"play/config/environment",0,"@ember/string"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "host", _environment.default.TribeENV.API_URL);
      _defineProperty(this, "namespace", 'api.php');
      _defineProperty(this, "headers", {
        Authorization: `Bearer ${_environment.default.TribeENV.API_KEY}`
      });
    }
    pathForType(type) {
      return (0, _string.underscore)(type);
    }
  }
  _exports.default = ApplicationAdapter;
});
;define("play/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "play/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"play/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("play/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("play/components/animated-beacon", ["exports", "ember-animated/components/animated-beacon"], function (_exports, _animatedBeacon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedBeacon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-beacon"eaimeta@70e063a35619d71f
});
;define("play/components/animated-container", ["exports", "ember-animated/components/animated-container"], function (_exports, _animatedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-container"eaimeta@70e063a35619d71f
});
;define("play/components/animated-each", ["exports", "ember-animated/components/animated-each"], function (_exports, _animatedEach) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedEach.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-each"eaimeta@70e063a35619d71f
});
;define("play/components/animated-if", ["exports", "ember-animated/components/animated-if"], function (_exports, _animatedIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedIf.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-if"eaimeta@70e063a35619d71f
});
;define("play/components/animated-orphans", ["exports", "ember-animated/components/animated-orphans"], function (_exports, _animatedOrphans) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedOrphans.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-orphans"eaimeta@70e063a35619d71f
});
;define("play/components/animated-value", ["exports", "ember-animated/components/animated-value"], function (_exports, _animatedValue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _animatedValue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/animated-value"eaimeta@70e063a35619d71f
});
;define("play/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-content"eaimeta@70e063a35619d71f
});
;define("play/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("play/components/basic-dropdown-wormhole", ["exports", "ember-basic-dropdown/components/basic-dropdown-wormhole"], function (_exports, _basicDropdownWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownWormhole.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown-wormhole"eaimeta@70e063a35619d71f
});
;define("play/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/components/basic-dropdown"eaimeta@70e063a35619d71f
});
;define("play/components/category-bar", ["exports", "@ember/component", "@glimmer/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- template-lint-disable no-yield-only --}}
  {{yield}}
  
  <div class="wk d-flex justify-content-around p-2">
      <div class="d-flex"> 
          <LinkTo @route="index">⌂</LinkTo>
      </div>
  
      <div class="d-flex">      
          {{@category.modules.title}}   
          
      </div>
  
      <div>
          <LinkTo @route="category-page" @model="{{this.category.slug}}">>
                     
                  </LinkTo>
          
      </div>
  
  </div>
  */
  {
    "id": "zVM/xIvW",
    "block": "[[[18,2,null],[1,\"\\n\\n\"],[10,0],[14,0,\"wk d-flex justify-content-around p-2\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"d-flex\"],[12],[1,\" \\n        \"],[8,[39,2],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"⌂\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"d-flex\"],[12],[1,\"      \\n        \"],[1,[30,1,[\"modules\",\"title\"]]],[1,\"   \\n        \\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[12],[1,\"\\n        \"],[8,[39,2],null,[[\"@route\",\"@model\"],[\"category-page\",[29,[[30,0,[\"category\",\"slug\"]]]]]],[[\"default\"],[[[[1,\">\\n                   \\n                \"]],[]]]]],[1,\"\\n        \\n    \"],[13],[1,\"\\n\\n\"],[13]],[\"@category\",\"&default\"],false,[\"yield\",\"div\",\"link-to\"]]",
    "moduleName": "play/components/category-bar.hbs",
    "isStrictMode": false
  });
  class CategoryBar extends _component2.default {}
  _exports.default = CategoryBar;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CategoryBar);
});
;define("play/components/ea-list-element", ["exports", "ember-animated/components/ea-list-element"], function (_exports, _eaListElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eaListElement.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/components/ea-list-element"eaimeta@70e063a35619d71f
});
;define("play/components/ember-table-loading-more", ["exports", "ember-table/components/ember-table-loading-more/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-table-loading-more/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-table-private/row-wrapper", ["exports", "ember-table/components/-private/row-wrapper"], function (_exports, _rowWrapper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rowWrapper.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/-private/row-wrapper"eaimeta@70e063a35619d71f
});
;define("play/components/ember-table-private/scroll-indicators", ["exports", "ember-table/components/-private/scroll-indicators/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/-private/scroll-indicators/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-table-simple-checkbox", ["exports", "ember-table/components/ember-table-simple-checkbox"], function (_exports, _emberTableSimpleCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTableSimpleCheckbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-table-simple-checkbox"eaimeta@70e063a35619d71f
});
;define("play/components/ember-table", ["exports", "ember-table/components/ember-table/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-table/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-tbody", ["exports", "ember-table/components/ember-tbody/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-tbody/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-td", ["exports", "ember-table/components/ember-td/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-td/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-tfoot", ["exports", "ember-table/components/ember-tfoot/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-tfoot/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-th", ["exports", "ember-table/components/ember-th/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-th/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-th/resize-handle", ["exports", "ember-table/components/ember-th/resize-handle/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-th/resize-handle/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-th/sort-indicator", ["exports", "ember-table/components/ember-th/sort-indicator/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-th/sort-indicator/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-thead", ["exports", "ember-table/components/ember-thead/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-thead/component"eaimeta@70e063a35619d71f
});
;define("play/components/ember-tr", ["exports", "ember-table/components/ember-tr/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-table/components/ember-tr/component"eaimeta@70e063a35619d71f
});
;define("play/components/file-dropzone", ["exports", "ember-file-upload/components/file-dropzone"], function (_exports, _fileDropzone) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileDropzone.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/components/file-dropzone"eaimeta@70e063a35619d71f
});
;define("play/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple"eaimeta@70e063a35619d71f
});
;define("play/components/power-select-multiple/input", ["exports", "ember-power-select/components/power-select-multiple/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple/input"eaimeta@70e063a35619d71f
});
;define("play/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select-multiple/trigger"eaimeta@70e063a35619d71f
});
;define("play/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/before-options"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/input", ["exports", "ember-power-select/components/power-select/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/input"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/label", ["exports", "ember-power-select/components/power-select/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/label"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/no-matches-message", ["exports", "ember-power-select/components/power-select/no-matches-message"], function (_exports, _noMatchesMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noMatchesMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/no-matches-message"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/options"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/placeholder"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/power-select-group"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/search-message"eaimeta@70e063a35619d71f
});
;define("play/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/components/power-select/trigger"eaimeta@70e063a35619d71f
});
;define("play/components/sidebar", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "LqwHJlCr",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "play/components/sidebar.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "sidebar"));
});
;define("play/components/tag-input", ["exports", "ember-tag-input/components/tag-input"], function (_exports, _tagInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tagInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-tag-input/components/tag-input"eaimeta@70e063a35619d71f
});
;define("play/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@html-next/vertical-collection/components/vertical-collection/component"eaimeta@70e063a35619d71f
});
;define("play/components/welcome-flame", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="flame-bg d-flex align-items-center justify-content-center">
    <div class="py-6 container px-0 text-center text-dark">
      <img src="/assets/img/flame.png" width="200">
    </div>
  </section>
  */
  {
    "id": "Nyi33AGZ",
    "block": "[[[10,\"section\"],[14,0,\"flame-bg d-flex align-items-center justify-content-center\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"py-6 container px-0 text-center text-dark\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"src\",\"/assets/img/flame.png\"],[14,\"width\",\"200\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"section\",\"div\",\"img\"]]",
    "moduleName": "play/components/welcome-flame.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "welcome-flame"));
});
;define("play/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("play/components/x-toggle-label", ["exports", "ember-toggle/components/x-toggle-label"], function (_exports, _xToggleLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggleLabel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-toggle/components/x-toggle-label"eaimeta@70e063a35619d71f
});
;define("play/components/x-toggle-switch", ["exports", "ember-toggle/components/x-toggle-switch"], function (_exports, _xToggleSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggleSwitch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-toggle/components/x-toggle-switch"eaimeta@70e063a35619d71f
});
;define("play/components/x-toggle", ["exports", "ember-toggle/components/x-toggle"], function (_exports, _xToggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xToggle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-toggle/components/x-toggle"eaimeta@70e063a35619d71f
});
;define("play/controllers/category-page", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f
  class CategoryPageController extends _controller.default {}
  _exports.default = CategoryPageController;
});
;define("play/controllers/index", ["exports", "@ember/controller", "howler"], function (_exports, _controller, _howler) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"howler"eaimeta@70e063a35619d71f
  class IndexController extends _controller.default {
    /*
      var sound = new Howl({
          src: [this.model.nicola.modules.files.url]
        });
        
        sound.play();*/
  }
  _exports.default = IndexController;
});
;define("play/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("play/helpers/abs", ["exports", "ember-math-helpers/helpers/abs"], function (_exports, _abs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/abs"eaimeta@70e063a35619d71f
});
;define("play/helpers/acos", ["exports", "ember-math-helpers/helpers/acos"], function (_exports, _acos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acos"eaimeta@70e063a35619d71f
});
;define("play/helpers/acosh", ["exports", "ember-math-helpers/helpers/acosh"], function (_exports, _acosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acosh"eaimeta@70e063a35619d71f
});
;define("play/helpers/add", ["exports", "ember-math-helpers/helpers/add"], function (_exports, _add) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/add"eaimeta@70e063a35619d71f
});
;define("play/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("play/helpers/app-version", ["exports", "@ember/component/helper", "play/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"play/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("play/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/append"eaimeta@70e063a35619d71f
});
;define("play/helpers/asin", ["exports", "ember-math-helpers/helpers/asin"], function (_exports, _asin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asin"eaimeta@70e063a35619d71f
});
;define("play/helpers/asinh", ["exports", "ember-math-helpers/helpers/asinh"], function (_exports, _asinh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asinh"eaimeta@70e063a35619d71f
});
;define("play/helpers/assign", ["exports", "ember-assign-helper/helpers/assign"], function (_exports, _assign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _assign.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-assign-helper/helpers/assign"eaimeta@70e063a35619d71f
});
;define("play/helpers/atan", ["exports", "ember-math-helpers/helpers/atan"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan"eaimeta@70e063a35619d71f
});
;define("play/helpers/atan2", ["exports", "ember-math-helpers/helpers/atan2"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan2"eaimeta@70e063a35619d71f
});
;define("play/helpers/atanh", ["exports", "ember-math-helpers/helpers/atanh"], function (_exports, _atanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atanh"eaimeta@70e063a35619d71f
});
;define("play/helpers/await", ["exports", "ember-promise-helpers/helpers/await"], function (_exports, _await) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/await"eaimeta@70e063a35619d71f
});
;define("play/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/call"eaimeta@70e063a35619d71f
});
;define("play/helpers/camelize", ["exports", "ember-cli-string-helpers/helpers/camelize"], function (_exports, _camelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/camelize"eaimeta@70e063a35619d71f
});
;define("play/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("play/helpers/capitalize", ["exports", "ember-cli-string-helpers/helpers/capitalize"], function (_exports, _capitalize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/capitalize"eaimeta@70e063a35619d71f
});
;define("play/helpers/cbrt", ["exports", "ember-math-helpers/helpers/cbrt"], function (_exports, _cbrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cbrt"eaimeta@70e063a35619d71f
});
;define("play/helpers/ceil", ["exports", "ember-math-helpers/helpers/ceil"], function (_exports, _ceil) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/ceil"eaimeta@70e063a35619d71f
});
;define("play/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/chunk"eaimeta@70e063a35619d71f
});
;define("play/helpers/classify", ["exports", "ember-cli-string-helpers/helpers/classify"], function (_exports, _classify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "classify", {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/classify"eaimeta@70e063a35619d71f
});
;define("play/helpers/clz32", ["exports", "ember-math-helpers/helpers/clz32"], function (_exports, _clz) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/clz32"eaimeta@70e063a35619d71f
});
;define("play/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compact"eaimeta@70e063a35619d71f
});
;define("play/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compute"eaimeta@70e063a35619d71f
});
;define("play/helpers/cos", ["exports", "ember-math-helpers/helpers/cos"], function (_exports, _cos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cos"eaimeta@70e063a35619d71f
});
;define("play/helpers/cosh", ["exports", "ember-math-helpers/helpers/cosh"], function (_exports, _cosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cosh"eaimeta@70e063a35619d71f
});
;define("play/helpers/dasherize", ["exports", "ember-cli-string-helpers/helpers/dasherize"], function (_exports, _dasherize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/dasherize"eaimeta@70e063a35619d71f
});
;define("play/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/dec"eaimeta@70e063a35619d71f
});
;define("play/helpers/div", ["exports", "ember-math-helpers/helpers/div"], function (_exports, _div) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/div"eaimeta@70e063a35619d71f
});
;define("play/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/drop"eaimeta@70e063a35619d71f
});
;define("play/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/element"eaimeta@70e063a35619d71f
});
;define("play/helpers/ember-power-select-is-equal", ["exports", "ember-power-select/helpers/ember-power-select-is-equal"], function (_exports, _emberPowerSelectIsEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-equal"eaimeta@70e063a35619d71f
});
;define("play/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-group"eaimeta@70e063a35619d71f
});
;define("play/helpers/ember-power-select-is-selected-present", ["exports", "ember-power-select/helpers/ember-power-select-is-selected-present"], function (_exports, _emberPowerSelectIsSelectedPresent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelectedPresent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-power-select/helpers/ember-power-select-is-selected-present"eaimeta@70e063a35619d71f
});
;define("play/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("play/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/entries"eaimeta@70e063a35619d71f
});
;define("play/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("play/helpers/exp", ["exports", "ember-math-helpers/helpers/exp"], function (_exports, _exp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/exp"eaimeta@70e063a35619d71f
});
;define("play/helpers/expm1", ["exports", "ember-math-helpers/helpers/expm1"], function (_exports, _expm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/expm1"eaimeta@70e063a35619d71f
});
;define("play/helpers/file-queue", ["exports", "ember-file-upload/helpers/file-queue"], function (_exports, _fileQueue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileQueue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/helpers/file-queue"eaimeta@70e063a35619d71f
});
;define("play/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter-by"eaimeta@70e063a35619d71f
});
;define("play/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter"eaimeta@70e063a35619d71f
});
;define("play/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/find-by"eaimeta@70e063a35619d71f
});
;define("play/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/flatten"eaimeta@70e063a35619d71f
});
;define("play/helpers/floor", ["exports", "ember-math-helpers/helpers/floor"], function (_exports, _floor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/floor"eaimeta@70e063a35619d71f
});
;define("play/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/from-entries"eaimeta@70e063a35619d71f
});
;define("play/helpers/fround", ["exports", "ember-math-helpers/helpers/fround"], function (_exports, _fround) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/fround"eaimeta@70e063a35619d71f
});
;define("play/helpers/gcd", ["exports", "ember-math-helpers/helpers/gcd"], function (_exports, _gcd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gcd.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/gcd"eaimeta@70e063a35619d71f
});
;define("play/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/group-by"eaimeta@70e063a35619d71f
});
;define("play/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("play/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("play/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-next"eaimeta@70e063a35619d71f
});
;define("play/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-previous"eaimeta@70e063a35619d71f
});
;define("play/helpers/html-safe", ["exports", "ember-cli-string-helpers/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/html-safe"eaimeta@70e063a35619d71f
});
;define("play/helpers/humanize", ["exports", "ember-cli-string-helpers/helpers/humanize"], function (_exports, _humanize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(_exports, "humanize", {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/humanize"eaimeta@70e063a35619d71f
});
;define("play/helpers/hypot", ["exports", "ember-math-helpers/helpers/hypot"], function (_exports, _hypot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/hypot"eaimeta@70e063a35619d71f
});
;define("play/helpers/if-key", ["exports", "ember-keyboard/helpers/if-key"], function (_exports, _ifKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ifKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/helpers/if-key"eaimeta@70e063a35619d71f
});
;define("play/helpers/imul", ["exports", "ember-math-helpers/helpers/imul"], function (_exports, _imul) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/imul"eaimeta@70e063a35619d71f
});
;define("play/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/inc"eaimeta@70e063a35619d71f
});
;define("play/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/includes"eaimeta@70e063a35619d71f
});
;define("play/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/intersect"eaimeta@70e063a35619d71f
});
;define("play/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/invoke"eaimeta@70e063a35619d71f
});
;define("play/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("play/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("play/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("play/helpers/is-fulfilled", ["exports", "ember-promise-helpers/helpers/is-fulfilled"], function (_exports, _isFulfilled) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/is-fulfilled"eaimeta@70e063a35619d71f
});
;define("play/helpers/is-pending", ["exports", "ember-promise-helpers/helpers/is-pending"], function (_exports, _isPending) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/is-pending"eaimeta@70e063a35619d71f
});
;define("play/helpers/is-rejected", ["exports", "ember-promise-helpers/helpers/is-rejected"], function (_exports, _isRejected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/is-rejected"eaimeta@70e063a35619d71f
});
;define("play/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/join"eaimeta@70e063a35619d71f
});
;define("play/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/keys"eaimeta@70e063a35619d71f
});
;define("play/helpers/lcm", ["exports", "ember-math-helpers/helpers/lcm"], function (_exports, _lcm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lcm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/lcm"eaimeta@70e063a35619d71f
});
;define("play/helpers/log-e", ["exports", "ember-math-helpers/helpers/log-e"], function (_exports, _logE) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log-e"eaimeta@70e063a35619d71f
});
;define("play/helpers/log10", ["exports", "ember-math-helpers/helpers/log10"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log10"eaimeta@70e063a35619d71f
});
;define("play/helpers/log1p", ["exports", "ember-math-helpers/helpers/log1p"], function (_exports, _log1p) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log1p"eaimeta@70e063a35619d71f
});
;define("play/helpers/log2", ["exports", "ember-math-helpers/helpers/log2"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log2"eaimeta@70e063a35619d71f
});
;define("play/helpers/lowercase", ["exports", "ember-cli-string-helpers/helpers/lowercase"], function (_exports, _lowercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(_exports, "lowercase", {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/lowercase"eaimeta@70e063a35619d71f
});
;define("play/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("play/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("play/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map-by"eaimeta@70e063a35619d71f
});
;define("play/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map"eaimeta@70e063a35619d71f
});
;define("play/helpers/max", ["exports", "ember-math-helpers/helpers/max"], function (_exports, _max) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/max"eaimeta@70e063a35619d71f
});
;define("play/helpers/min", ["exports", "ember-math-helpers/helpers/min"], function (_exports, _min) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/min"eaimeta@70e063a35619d71f
});
;define("play/helpers/mod", ["exports", "ember-math-helpers/helpers/mod"], function (_exports, _mod) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mod"eaimeta@70e063a35619d71f
});
;define("play/helpers/mult", ["exports", "ember-math-helpers/helpers/mult"], function (_exports, _mult) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mult"eaimeta@70e063a35619d71f
});
;define("play/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/next"eaimeta@70e063a35619d71f
});
;define("play/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/noop"eaimeta@70e063a35619d71f
});
;define("play/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("play/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("play/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/object-at"eaimeta@70e063a35619d71f
});
;define("play/helpers/on-key", ["exports", "ember-keyboard/helpers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/helpers/on-key"eaimeta@70e063a35619d71f
});
;define("play/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/optional"eaimeta@70e063a35619d71f
});
;define("play/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("play/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("play/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("play/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pick"eaimeta@70e063a35619d71f
});
;define("play/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe-action"eaimeta@70e063a35619d71f
});
;define("play/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe"eaimeta@70e063a35619d71f
});
;define("play/helpers/pow", ["exports", "ember-math-helpers/helpers/pow"], function (_exports, _pow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/pow"eaimeta@70e063a35619d71f
});
;define("play/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/previous"eaimeta@70e063a35619d71f
});
;define("play/helpers/promise-all", ["exports", "ember-promise-helpers/helpers/promise-all"], function (_exports, _promiseAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/promise-all"eaimeta@70e063a35619d71f
});
;define("play/helpers/promise-hash", ["exports", "ember-promise-helpers/helpers/promise-hash"], function (_exports, _promiseHash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/promise-hash"eaimeta@70e063a35619d71f
});
;define("play/helpers/promise-rejected-reason", ["exports", "ember-promise-helpers/helpers/promise-rejected-reason"], function (_exports, _promiseRejectedReason) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-promise-helpers/helpers/promise-rejected-reason"eaimeta@70e063a35619d71f
});
;define("play/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/queue"eaimeta@70e063a35619d71f
});
;define("play/helpers/random", ["exports", "ember-math-helpers/helpers/random"], function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/random"eaimeta@70e063a35619d71f
});
;define("play/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/range"eaimeta@70e063a35619d71f
});
;define("play/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reduce"eaimeta@70e063a35619d71f
});
;define("play/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reject-by"eaimeta@70e063a35619d71f
});
;define("play/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/repeat"eaimeta@70e063a35619d71f
});
;define("play/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reverse"eaimeta@70e063a35619d71f
});
;define("play/helpers/round", ["exports", "ember-math-helpers/helpers/round"], function (_exports, _round) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/round"eaimeta@70e063a35619d71f
});
;define("play/helpers/route-idle", ["exports", "ember-app-scheduler/helpers/route-idle"], function (_exports, _routeIdle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeIdle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-app-scheduler/helpers/route-idle"eaimeta@70e063a35619d71f
});
;define("play/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/shuffle"eaimeta@70e063a35619d71f
});
;define("play/helpers/sign", ["exports", "ember-math-helpers/helpers/sign"], function (_exports, _sign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sign"eaimeta@70e063a35619d71f
});
;define("play/helpers/sin", ["exports", "ember-math-helpers/helpers/sin"], function (_exports, _sin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sin"eaimeta@70e063a35619d71f
});
;define("play/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/slice"eaimeta@70e063a35619d71f
});
;define("play/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/sort-by"eaimeta@70e063a35619d71f
});
;define("play/helpers/sqrt", ["exports", "ember-math-helpers/helpers/sqrt"], function (_exports, _sqrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sqrt"eaimeta@70e063a35619d71f
});
;define("play/helpers/sub", ["exports", "ember-math-helpers/helpers/sub"], function (_exports, _sub) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sub"eaimeta@70e063a35619d71f
});
;define("play/helpers/sum", ["exports", "ember-math-helpers/helpers/sum"], function (_exports, _sum) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sum.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sum"eaimeta@70e063a35619d71f
});
;define("play/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/take"eaimeta@70e063a35619d71f
});
;define("play/helpers/tan", ["exports", "ember-math-helpers/helpers/tan"], function (_exports, _tan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tan"eaimeta@70e063a35619d71f
});
;define("play/helpers/tanh", ["exports", "ember-math-helpers/helpers/tanh"], function (_exports, _tanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tanh"eaimeta@70e063a35619d71f
});
;define("play/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("play/helpers/titleize", ["exports", "ember-cli-string-helpers/helpers/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(_exports, "titleize", {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/titleize"eaimeta@70e063a35619d71f
});
;define("play/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle-action"eaimeta@70e063a35619d71f
});
;define("play/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle"eaimeta@70e063a35619d71f
});
;define("play/helpers/trim", ["exports", "ember-cli-string-helpers/helpers/trim"], function (_exports, _trim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(_exports, "trim", {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/trim"eaimeta@70e063a35619d71f
});
;define("play/helpers/trunc", ["exports", "ember-math-helpers/helpers/trunc"], function (_exports, _trunc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/trunc"eaimeta@70e063a35619d71f
});
;define("play/helpers/truncate", ["exports", "ember-cli-string-helpers/helpers/truncate"], function (_exports, _truncate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(_exports, "truncate", {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/truncate"eaimeta@70e063a35619d71f
});
;define("play/helpers/underscore", ["exports", "ember-cli-string-helpers/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/underscore"eaimeta@70e063a35619d71f
});
;define("play/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/union"eaimeta@70e063a35619d71f
});
;define("play/helpers/uppercase", ["exports", "ember-cli-string-helpers/helpers/uppercase"], function (_exports, _uppercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(_exports, "uppercase", {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/uppercase"eaimeta@70e063a35619d71f
});
;define("play/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/values"eaimeta@70e063a35619d71f
});
;define("play/helpers/w", ["exports", "ember-cli-string-helpers/helpers/w"], function (_exports, _w) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(_exports, "w", {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/helpers/w"eaimeta@70e063a35619d71f
});
;define("play/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/without"eaimeta@70e063a35619d71f
});
;define("play/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("play/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "play/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"play/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("play/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("play/instance-initializers/ember-router-scroll", ["exports", "ember-router-scroll/instance-initializers/ember-router-scroll"], function (_exports, _emberRouterScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/instance-initializers/ember-router-scroll"eaimeta@70e063a35619d71f
});
;define("play/models/media-item", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let MediaItemModel = _exports.default = (_class = class MediaItemModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "slug", _descriptor, this);
      _initializerDefineProperty(this, "modules", _descriptor2, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "slug", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "modules", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("play/models/webapp", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let WebappModel = _exports.default = (_class = class WebappModel extends _model.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "slug", _descriptor, this);
      _initializerDefineProperty(this, "modules", _descriptor2, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "slug", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "modules", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("play/modifiers/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/modifiers/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDropdownTrigger.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-basic-dropdown/modifiers/basic-dropdown-trigger"eaimeta@70e063a35619d71f
});
;define("play/modifiers/did-insert", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function didInsert(element, [fn, ...args], named) {
    fn(element, args, named);
  });
});
;define("play/modifiers/did-pan", ["exports", "ember-gesture-modifiers/modifiers/did-pan"], function (_exports, _didPan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didPan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-gesture-modifiers/modifiers/did-pan"eaimeta@70e063a35619d71f
});
;define("play/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("play/modifiers/on-click-outside", ["exports", "ember-click-outside/modifiers/on-click-outside"], function (_exports, _onClickOutside) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onClickOutside.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-click-outside/modifiers/on-click-outside"eaimeta@70e063a35619d71f
});
;define("play/modifiers/on-key", ["exports", "ember-keyboard/modifiers/on-key"], function (_exports, _onKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onKey.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/modifiers/on-key"eaimeta@70e063a35619d71f
});
;define("play/modifiers/ripple", ["exports", "ember-modifier", "ripplet.js"], function (_exports, _emberModifier, _ripplet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier",0,"ripplet.js"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function ripple(element) {
    element.addEventListener('pointerdown', _ripplet.default);
  });
});
;define("play/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-style-modifier/modifiers/style"eaimeta@70e063a35619d71f
});
;define("play/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("play/router", ["exports", "@ember/routing/router", "play/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"play/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('studio');
    this.route('reviews');
    this.route('contact');
    this.route('cv');
    this.route('texts');
    this.route('general-atm');
    this.route('summer-zurich');
    this.route('category-page', {
      path: '/:slug'
    });
    this.route('page1');
    this.route('page2', {
      path: '/page2/:slug'
    });
  });
});
;define("play/routes/application", ["exports", "@ember/routing/route", "bootstrap", "@ember/service", "@ember/runloop", "@ember/object"], function (_exports, _route, bootstrap, _service, _runloop, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"bootstrap",0,"@ember/service",0,"@ember/runloop",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ApplicationRoute = _exports.default = (_class = class ApplicationRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "types", _descriptor, this);
    }
    async beforeModel() {
      await this.types.fetchAgain();
    }
    didTransition() {
      (0, _runloop.later)(this, () => {
        document.querySelector('#loading').classList.add('d-none');
      }, 50);
    }
    willTransition() {
      document.querySelector('#loading').classList.remove('d-none');
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "types", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "didTransition", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "didTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "willTransition", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "willTransition"), _class.prototype), _class);
});
;define("play/routes/category-page", ["exports", "@ember/routing/route", "@ember/service", "@ember/string", "rsvp"], function (_exports, _route, _service, _string, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"@ember/string",0,"rsvp"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let CategoryPageRoute = _exports.default = (_class = class CategoryPageRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model(params) {
      let x = await this.store.findAll('location');
      let c = await this.store.findRecord('category', params.slug);
      let s = await this.store.query('page', {
        modules: {
          category: params.slug
        }
      });
      return _rsvp.default.hash({
        category: c,
        stories: s,
        locaction: x
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("play/routes/contact", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ContactRoute extends _route.default {}
  _exports.default = ContactRoute;
});
;define("play/routes/cv", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class CvRoute extends _route.default {}
  _exports.default = CvRoute;
});
;define("play/routes/general-atm", ["exports", "@ember/routing/route", "@ember/service", "rsvp"], function (_exports, _route, _service, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"rsvp"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let GeneralAtmRoute = _exports.default = (_class = class GeneralAtmRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model() {
      return _rsvp.default.hash({
        block1: await this.store.findRecord('page', 27)
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("play/routes/index", ["exports", "@ember/routing/route", "@ember/service", "rsvp"], function (_exports, _route, _service, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"rsvp"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let IndexRoute = _exports.default = (_class = class IndexRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model() {
      let c = await this.store.findAll('category');
      return _rsvp.default.hash({
        categories: c
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("play/routes/page1", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class Page1Route extends _route.default {}
  _exports.default = Page1Route;
});
;define("play/routes/page2", ["exports", "@ember/routing/route", "@ember/service", "@ember/string", "rsvp"], function (_exports, _route, _service, _string, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"@ember/string",0,"rsvp"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let Page2Route = _exports.default = (_class = class Page2Route extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model(params) {
      return await this.store.findRecord('page', params.slug);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("play/routes/reviews", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ReviewsRoute extends _route.default {}
  _exports.default = ReviewsRoute;
});
;define("play/routes/studio", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class StudioRoute extends _route.default {}
  _exports.default = StudioRoute;
});
;define("play/routes/summer-zurich", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class SummerZurichRoute extends _route.default {}
  _exports.default = SummerZurichRoute;
});
;define("play/routes/texts", ["exports", "@ember/routing/route", "@ember/service", "rsvp"], function (_exports, _route, _service, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"rsvp"eaimeta@70e063a35619d71f
  class TextsRoute extends _route.default {}
  _exports.default = TextsRoute;
});
;define("play/serializers/application", ["exports", "@ember-data/serializer/json-api", "@ember/string"], function (_exports, _jsonApi, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api",0,"@ember/string"eaimeta@70e063a35619d71f
  class ApplicationSerializer extends _jsonApi.default {
    keyForAttribute(attr) {
      return (0, _string.underscore)(attr);
    }
    payloadKeyFromModelName(key) {
      return (0, _string.underscore)(key);
    }
  }
  _exports.default = ApplicationSerializer;
});
;define("play/services/-ea-motion", ["exports", "ember-animated/services/-ea-motion"], function (_exports, _eaMotion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eaMotion.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-animated/services/-ea-motion"eaimeta@70e063a35619d71f
});
;define("play/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("play/services/cookies", ["exports", "@ember/service", "@ember/object", "@glimmer/tracking"], function (_exports, _service, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let CookiesService = _exports.default = (_class = class CookiesService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "days", _descriptor, this);
    }
    setCookie(name, value) {
      var expires = '';
      var date = new Date();
      date.setTime(date.getTime() + this.days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    getCookie(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    eraseCookie(name) {
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "days", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 365;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setCookie", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCookie"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getCookie", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getCookie"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "eraseCookie", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "eraseCookie"), _class.prototype), _class);
});
;define("play/services/file-queue", ["exports", "ember-file-upload/services/file-queue"], function (_exports, _fileQueue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileQueue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/services/file-queue"eaimeta@70e063a35619d71f
});
;define("play/services/keyboard", ["exports", "ember-keyboard/services/keyboard"], function (_exports, _keyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-keyboard/services/keyboard"eaimeta@70e063a35619d71f
});
;define("play/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("play/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/services/router-scroll"eaimeta@70e063a35619d71f
});
;define("play/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("play/services/types", ["exports", "@ember/service", "play/config/environment", "@ember/object", "@glimmer/tracking", "@ember-data/model", "@ember/application"], function (_exports, _service, _environment, _object, _tracking, _model, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"play/config/environment",0,"@ember/service",0,"@ember/object",0,"@glimmer/tracking",0,"@ember-data/model",0,"@ember/application"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TypesService = _exports.default = (_class = class TypesService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "json", _descriptor2, this);
    }
    async fetchAgain() {
      if (_environment.default.TribeENV.API_URL !== undefined && _environment.default.TribeENV.API_URL != '') {
        this.json = await this.store.findRecord('webapp', 0, {});
        let owner = (0, _application.getOwner)(this);
        Object.entries(this.json.modules).forEach(([modelName, modelData]) => {
          var _class2, _descriptor3, _descriptor4;
          const modelDynamicName = modelName.replace(/_/g, '-');
          let DynamicModel = (_class2 = class DynamicModel extends _model.default {
            constructor(...args) {
              super(...args);
              _initializerDefineProperty(this, "slug", _descriptor3, this);
              _initializerDefineProperty(this, "modules", _descriptor4, this);
            }
          }, _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "slug", [_model.attr], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: null
          }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "modules", [_model.attr], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: null
          }), _class2);
          if (!owner.hasRegistration(`model:${modelDynamicName}`)) {
            owner.register(`model:${modelDynamicName}`, DynamicModel);
          }
        });
        this.json = await this.store.findRecord('webapp', 0, {
          include: ['total_objects']
        });
        this.json = this.json;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "json", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.store.peekRecord('webapp', 0, {
        include: ['total_objects']
      });
    }
  }), _applyDecoratedDescriptor(_class.prototype, "fetchAgain", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchAgain"), _class.prototype), _class);
});
;define("play/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Play"}}
  {{outlet}}
  <BasicDropdownWormhole />
  */
  {
    "id": "fFfYc881",
    "block": "[[[1,[28,[35,0],[\"Play\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[8,[39,3],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\",\"basic-dropdown-wormhole\"]]",
    "moduleName": "play/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/category-page", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "CategoryPage"}}
  
  <CategoryBar @category={{this.model.category}} />
  
  <div class="{{this.category.modules.classes}} listofcontent p-2 mx-5">
     
  <p>
  
    <div class="my-3">
  
      {{#each this.model.stories as |story|}}
  
      <LinkTo @route="page2" @model={{story.slug}}>
      <div class="d-flex">
        {{story.modules.title}} <br>
        {{story.modules.date}} <br><br>
      </div>
  
      </LinkTo>
      {{/each}}
    </div>
  
  
  
  </p>
  
  </div>
  
  {{outlet}}
  */
  {
    "id": "QK2GB0Fr",
    "block": "[[[1,[28,[35,0],[\"CategoryPage\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@category\"],[[30,0,[\"model\",\"category\"]]]],null],[1,\"\\n\\n\"],[10,0],[15,0,[29,[[30,0,[\"category\",\"modules\",\"classes\"]],\" listofcontent p-2 mx-5\"]]],[12],[1,\"\\n   \\n\"],[10,2],[12],[1,\"\\n\\n  \"],[10,0],[14,0,\"my-3\"],[12],[1,\"\\n\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,0,[\"model\",\"stories\"]]],null]],null],null,[[[1,\"\\n    \"],[8,[39,6],null,[[\"@route\",\"@model\"],[\"page2\",[30,1,[\"slug\"]]]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"d-flex\"],[12],[1,\"\\n      \"],[1,[30,1,[\"modules\",\"title\"]]],[1,\" \"],[10,\"br\"],[12],[13],[1,\"\\n      \"],[1,[30,1,[\"modules\",\"date\"]]],[1,\" \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"]],[]]]]],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\\n\\n\\n\"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,9],null,null],null,null,null]],[\"story\"],false,[\"page-title\",\"category-bar\",\"div\",\"p\",\"each\",\"-track-array\",\"link-to\",\"br\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/category-page.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/contact", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Contact"}}
  
  <div class="d-flex justify-content-center align-items-center vh-100">
  <p>EMAIL: <a href="mailto:kmoss.mois@gmail.com" target="_blank" rel="noopener noreferrer">kmoss.mois@gmail.com</a> <br>
          TELEGRAM: @Mossisatree <br>
          SIGNAL: kaldi_moss.13 <br>
          MOB : +918168931725 <br>
          INSTA : @kaldi_moss</p>
  </div>
  {{outlet}}
  */
  {
    "id": "Et8nHQHX",
    "block": "[[[1,[28,[35,0],[\"Contact\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"d-flex justify-content-center align-items-center vh-100\"],[12],[1,\"\\n\"],[10,2],[12],[1,\"EMAIL: \"],[10,3],[14,6,\"mailto:kmoss.mois@gmail.com\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"kmoss.mois@gmail.com\"],[13],[1,\" \"],[10,\"br\"],[12],[13],[1,\"\\n        TELEGRAM: @Mossisatree \"],[10,\"br\"],[12],[13],[1,\"\\n        SIGNAL: kaldi_moss.13 \"],[10,\"br\"],[12],[13],[1,\"\\n        MOB : +918168931725 \"],[10,\"br\"],[12],[13],[1,\"\\n        INSTA : @kaldi_moss\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,6],null,null],null,null,null]],[],false,[\"page-title\",\"div\",\"p\",\"a\",\"br\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/contact.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/cv", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Cv"}}
  
  <div class="p-2 m-2">
  <p dir="ltr" id="docs-internal-guid-c6f1b1e0-7fff-9e01-c231-8c54e605beba" style="line-height:1.38;margin-right: -18pt;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">K. Moss&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.38;margin-right: -18pt;text-align: center;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:8pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">(formerly working under the name Sultana Zana)&nbsp;</span></p>
  &nbsp;
  
  <p dir="ltr" style="line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">kmoss.mois@gmail.com</span></p>
  
  <p dir="ltr" style="line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><a href="https://whattt.cargo.site" style="text-decoration:none;"><span style="font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">https://whattt.cargo.site</span></a></p>
  
  <p dir="ltr" style="line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><a href="https://kaldimoss.github.io/home.io/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">https://kaldimoss.github.io</span></a></p>
  
  <div style="text-align: center;">&nbsp;</div>
  
  <p dir="ltr" style="line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artistic Director, Walkin Studios</span></p>
  
  <p dir="ltr" style="line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Co-founder of NOTAAT</span></p>
  
  <p dir="ltr" style="line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;"><span style="font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Member of noise band Cynk Collective</span></p>
  
  <h1 dir="ltr" style="line-height:1.7999999999999998;margin-right: -1.5pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Residencies and Grants</span></h1>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2024</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Invited artist to IFMZ, Zurich, Switzerland for Studio Residency supported my ProHelvetia</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2023</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artist-in-residence at the Interim program at Srishti-Manipal Institute of Art, Design and Technology</span></p>
  
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Invited artist at Live Arts workshop, Khoj International Artists&rsquo; association</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Invited artist in residence at Hertz Lab, ZKM, Karlsruhe as part of Bangalore-Expanded residency program</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2020</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Recipient of a grant from Goethe-Institut / Max Mueller Bhavan and is being realised within the framework of Five Million Incidents 2019-2020</span></p>
  
  <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artist in Residence at ShopArt residency, 4Tables Project, Gunehar, Himachal Pradesh</span></p>
  &nbsp;
  
  <h1 dir="ltr" style="line-height:1.38;margin-right: -1.5pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Work</span></h1>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2023</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Presentation and performance at hack4play, Forlay society, Kochi</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">A study of thick and thin sounds</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Live spatial concert as part </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wetspace Noise Drips 1.0</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> - A two day sonic exploration.</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Walkin studios, Bangalore.</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> Nov 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Moist</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><a href="https://zkm.de/en/media/video/sultana-zana-the-only-time-is-now-where-are-you" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Installation and </span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">immersive environment&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Open day, Live arts Workshop, Khoj, New Delhi</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; Oct 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Fieldness 2.0</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sonic ecological smartphone based platform, showcased as part of exhibition &lsquo;Disturbing the Balance&rsquo;. Base, Milan, Italy.</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> Sep 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Now is the only time, Where are you?</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><a href="https://zkm.de/en/media/video/sultana-zana-the-only-time-is-now-where-are-you" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Spatial sound composition performed at the KUBUS</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, ZKM, Karlsruhe concert after a one-month residency at the Hertz Lab, ZKM, Karlsruhe</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><a href="https://zkm.de/en" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ZKM, Karlsruhe, Germany</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">.</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> March 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Fool </span><a href="https://www.terrain.art/explore/artworks/894" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Meme</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> as part of Terrain.Art exhibition </span><a href="https://www.terrain.art/explore/dreams-exe" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Dreams.exe</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Aug 2021</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2020</span><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><a href="https://sultanazana.github.io/fieldness.io/" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Fieldness</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> A blockchain-based ecological platform&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The project is a recipient of a grant from Goethe-Institut / Max Mueller Bhavan and is being realised within the framework of Five Million Incidents 2019-2020.&nbsp; </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">January 2020 - present</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2020</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Of the Millions of Possibilities&nbsp;&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Multi channel sound and video installation as part of the exhibition &lsquo;WE ARE STILL ALIVE&rsquo;&nbsp;&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">India International Centre, Delhi. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;January 2020</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The Earth lab&nbsp;&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artistic research lab which led to the film &lsquo;All the lines became invisible&rsquo; as part of the ShopArt Residency. Gunehar, Himachal Pradesh. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;June 2019 ; </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Interaccess, Canada </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Oct</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2020</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><a href="https://whattt.cargo.site/" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Heaven 2.0</span></a><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Multimedia installation using sound, video, hologram, QR code and a web address.</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">As a part of the show THE FUTURE IS HERE curated by Arshiya Lokhandwala.&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Bajaj Art Gallery, Mumbai</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> January 2019</span></p>
  &nbsp;
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Landscapes&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2 channel video installation with raspberry pi, camera, monitors, microscope, samples and film.</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Part of the show Ecology and the Metropolis curated by Vivek Chockalingam.</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Walkin Studios, Bangalore </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">August 2018</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wa&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Film and text Installation. As a part of the show Ging-Bang curated by Vivek Chockalingam.&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Walkin Studios, Bangalore </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">June 2018</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">And then,&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sound performance and installation with hay, logs, tree roots and mushrooms..</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Shoonya-Centre for Art and Somatic Practices. Bangalore, </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">May 2018</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Watermelon</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sound performance with hay, wood logs, plants, and 13 watermelons. Powercut Edition 2, Bangalore. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;April 2018</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Flower&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sound performance with hay, tree roots, plants and a flower. Partly Purple, Yelahanka, Bangalore</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Mar 2018</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2017</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Scene after words</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Screen prints, two microphones and a speaker. One Shanthi Road, Bangalore. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Aug 2017</span></p>
  
  <h1 dir="ltr" style="line-height:1.2;margin-right: -1.5pt;margin-top:16pt;margin-bottom:10pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Collaborative works&nbsp;</span></h1>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2023</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wetspace Noise Drips 2.0</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Organized and conducted an immersive audio-visual event as part of Walkin Studios&rsquo; outpost at Kochi inviting 10 artists over two days. Forplay Society, Kochi.&nbsp; </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">11 - 12 March 2023</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wetspace Noise Drips 1.0</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Organized and conducted a spatial sonic event in collaboration with Sofy Yudiskta and Walkin Studios with live acts and sound installations by 16 artists over two days. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">4- 5 Nov 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">PublicDomain.Garden</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Co-directed </span><a href="https://publicdomain.garden/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">public domain.garden</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> as part of </span><a href="https://www.walkinstudios.com/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Walkin Studios</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. It is part of the studios&rsquo;&nbsp; 2021-22 framework for research and curation. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">October 2021 - Ongoing</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sonicular&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Performance by Cynk collective at Forplay Society, Kochi, </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">17 Dec 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Take what you need</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Collaborative work with Avril Stormy Unger as part of Antifreeze - an exhibition curated by Beth Troaks at the</span><a href="https://lockinbrighton.com/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> LockIn Gallery</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, Brighton, UK. </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Oct 2021</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Creation of Birds (NOTAAT)</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><a href="https://sultanazana.github.io/creation_of_birds/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Web-based work</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> exploring human and non human languages using machine-learning algorithms, image sensing and performance of our bodies</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The work was shown at the </span><a href="https://eliterature.org/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ELO</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> conference in May-June 2021</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Meaning to Walk&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Video work In collaboration with Vivek Chokalingham.&nbsp; Mind Over Matter, Dresden, Germany </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;January- Mar 2021</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><a href="https://vimeo.com/383569085" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">OSCILNATION Session 0</span></a><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp;</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Multi-channel sound performance using code, analog instruments and objects by Cynk Collective. </span><a href="https://www.walkinstudios.com/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Walkin studios, Bangalore.</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> </span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;December 2019</span></p>
  
  <h1 dir="ltr" style="line-height:1.2;margin-right: -1.5pt;margin-top:16pt;margin-bottom:10pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Workshop (conducted)</span></h1>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2023</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Intro to Pure Data - 3 day workshop at ABC Art Room, Kochi Muziris Biennale 2022-23</span></p>
  
  <p dir="ltr" style="line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3-5 Feb 2023, Cabral Yard, Kochi</span></p>
  
  <h1 dir="ltr" style="line-height:1.2;margin-right: -1.5pt;margin-top:16pt;margin-bottom:10pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Workshops (participated)</span></h1>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><a href="https://forum.ircam.fr/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">IRCAM FORUM</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, Paris, March 2022</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artistic dissidences - workshop with Eva Bonilla and Fernando Jeminez from </span><a href="https://avfloss.github.io/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">AV-FLOSS</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> at MediaLab Prado in Spain&nbsp; </span><a href="https://www.jaaga.in/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Jaaga, Bangalore</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, Jul 2019</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Cyanotype workshop with </span><a href="https://cargocollective.com/riafish/Bio" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ria Rajan</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> at </span><a href="https://www.walkinstudios.com/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Walkin Studios, Bangalore</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, Jul 2019</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Residency at Nalanda Lab, Wardha with</span><a href="https://marclee.io/en/home/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> Marc Lee</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> and Abhiyan Humane, Jan 2019</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2018</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wild City&rsquo;s Women in electronic music : with </span><a href="https://www.thewildcity.com/artists/137-rhl" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rahul Giri</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> and </span><a href="https://www.rachelkcollier.com/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rachel Collier</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">. Bangalore, Apr 2018</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2016</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Workshop at Isro with </span><a href="https://www.crisap.org/people/cathy-lane/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Cathy Lane </span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">and </span><a href="http://vivcorringham.org/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Viv Corringham</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> at </span><a href="https://www.theisro.org/" style="text-decoration:none;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ISRO</span></a><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> , Feb 2018</span></p>
  &nbsp;
  
  <h1 dir="ltr" style="line-height:1.2;margin-right: -1.5pt;margin-top:0pt;margin-bottom:10pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Reviews and Interviews</span></h1>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2023</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Stirworld: </span><a href="https://www.stirworld.com/think-opinions-talks-on-art-tech-and-law-align-disrupt-conversations-at-iaf-2023" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Talks on art, tech and law &#39;Align &amp; Disrupt&#39; conversations at IAF 2023</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2023</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Livemint: </span><a href="https://lifestyle.livemint.com/amp/how-to-lounge/art-culture/the-future-of-tech-art-is-human-111676174914157.html" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The future of tech-art is human</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Interview with Inka Magazine - Karlsruhe city magazine (print)</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2022</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">India Art Fair panel : </span><a href="https://youtu.be/g2aHHcgN83o" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artistic Practice: Mediatic Environments</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><a href="https://two.compost.digital/reverence-for-the-spaces-in-between/" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Reverence for spaces in-between</span></a><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, Interview with </span><a href="https://two.compost.digital/" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Compost digital</span></a><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> online magazine</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Creatrix Mag: </span><a href="https://creatrixmag.com/touching-the-unknown/" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Touching the Unknown</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2021</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Deep fried neurons podcast: </span><a href="https://anchor.fm/deep-fried-neurons/episodes/99---Ecological-Footprints-of-Colonisation-and-Anthropocene-Interventions-ft--Sultana-Zana-ep5v3k" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ecological Footprints of Colonisation and Anthropocene Interventions</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2020</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">InterAccess, Toronto: </span><a href="https://youtu.be/1lNUJ2JCHO4" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sustainable Approaches to Making - panel discussion</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Indian Express: </span><a href="https://indianexpress.com/article/lifestyle/art-and-culture/earth-to-earth-sultana-zana-artist-man-nature-conflict-5806889/" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Artist Sultana Zana on her new project in the Himalayas that focuses on the conflict between man and nature</span></a></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2019</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;&nbsp; &nbsp;</span><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hindustan times : </span><a href="https://www.walkinstudios.com/?lightbox=dataItem-kbuex3rv1" style="text-decoration:none;"><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Decoding chaos</span></a><span style="font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;</span></p>
  &nbsp;
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Education</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Srishti School of Art, Design and Technology</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">M.Cr.A (Contemporary Art Practice)</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">July 2016 - July 2018</span></p>
  &nbsp;
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">JSS Academy of Technical Education, Noida</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">August&nbsp; 2011 - May 2015</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">B. tech (Electronics and Instrumentation)</span></p>
  &nbsp;
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Indian Institute of Information Technology and Management, Gwalior</span></p>
  
  <p dir="ltr" style="line-height:1.56;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nanotechnology Research 2014-15</span></p>
  <br />
  <br />
  <br />
  
  </div>
  
  {{outlet}}
  */
  {
    "id": "LeFRkj5N",
    "block": "[[[1,[28,[35,0],[\"Cv\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"p-2 m-2\"],[12],[1,\"\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,1,\"docs-internal-guid-c6f1b1e0-7fff-9e01-c231-8c54e605beba\"],[14,5,\"line-height:1.38;margin-right: -18pt;text-align: center;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:13pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"K. Moss \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.38;margin-right: -18pt;text-align: center;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:8pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"(formerly working under the name Sultana Zana) \"],[13],[13],[1,\"\\n \\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"kmoss.mois@gmail.com\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"],[12],[10,3],[14,6,\"https://whattt.cargo.site\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"https://whattt.cargo.site\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"],[12],[10,3],[14,6,\"https://kaldimoss.github.io/home.io/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"https://kaldimoss.github.io\"],[13],[13],[13],[1,\"\\n\\n\"],[10,0],[14,5,\"text-align: center;\"],[12],[1,\" \"],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artistic Director, Walkin Studios\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Co-founder of NOTAAT\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height: 1.56; margin-top: 0pt; margin-bottom: 0pt; text-align: center;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Member of noise band Cynk Collective\"],[13],[13],[1,\"\\n\\n\"],[10,\"h1\"],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.7999999999999998;margin-right: -1.5pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Residencies and Grants\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2024\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Invited artist to IFMZ, Zurich, Switzerland for Studio Residency supported my ProHelvetia\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2023\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artist-in-residence at the Interim program at Srishti-Manipal Institute of Art, Design and Technology\"],[13],[13],[1,\"\\n\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Invited artist at Live Arts workshop, Khoj International Artists’ association\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Invited artist in residence at Hertz Lab, ZKM, Karlsruhe as part of Bangalore-Expanded residency program\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2020\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Recipient of a grant from Goethe-Institut / Max Mueller Bhavan and is being realised within the framework of Five Million Incidents 2019-2020\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artist in Residence at ShopArt residency, 4Tables Project, Gunehar, Himachal Pradesh\"],[13],[13],[1,\"\\n \\n\\n\"],[10,\"h1\"],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.38;margin-right: -1.5pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Work\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2023\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Presentation and performance at hack4play, Forlay society, Kochi\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"A study of thick and thin sounds\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Live spatial concert as part \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Wetspace Noise Drips 1.0\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" - A two day sonic exploration.\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Walkin studios, Bangalore.\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" Nov 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Moist\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,3],[14,6,\"https://zkm.de/en/media/video/sultana-zana-the-only-time-is-now-where-are-you\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Installation and \"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"immersive environment \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Open day, Live arts Workshop, Khoj, New Delhi\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"  Oct 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Fieldness 2.0\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Sonic ecological smartphone based platform, showcased as part of exhibition ‘Disturbing the Balance’. Base, Milan, Italy.\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" Sep 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Now is the only time, Where are you?\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,3],[14,6,\"https://zkm.de/en/media/video/sultana-zana-the-only-time-is-now-where-are-you\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Spatial sound composition performed at the KUBUS\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\", ZKM, Karlsruhe concert after a one-month residency at the Hertz Lab, ZKM, Karlsruhe\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,3],[14,6,\"https://zkm.de/en\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"ZKM, Karlsruhe, Germany\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\".\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" March 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Fool \"],[13],[10,3],[14,6,\"https://www.terrain.art/explore/artworks/894\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Meme\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" as part of Terrain.Art exhibition \"],[13],[10,3],[14,6,\"https://www.terrain.art/explore/dreams-exe\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Dreams.exe\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\". Aug 2021\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2020\"],[13],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,3],[14,6,\"https://sultanazana.github.io/fieldness.io/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Fieldness\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" A blockchain-based ecological platform \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"The project is a recipient of a grant from Goethe-Institut / Max Mueller Bhavan and is being realised within the framework of Five Million Incidents 2019-2020.  \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"January 2020 - present\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2020\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Of the Millions of Possibilities  \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Multi channel sound and video installation as part of the exhibition ‘WE ARE STILL ALIVE’  \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"India International Centre, Delhi. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" January 2020\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"The Earth lab  \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artistic research lab which led to the film ‘All the lines became invisible’ as part of the ShopArt Residency. Gunehar, Himachal Pradesh. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" June 2019 ; \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Interaccess, Canada \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Oct\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2020\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,3],[14,6,\"https://whattt.cargo.site/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Heaven 2.0\"],[13],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Multimedia installation using sound, video, hologram, QR code and a web address.\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"As a part of the show THE FUTURE IS HERE curated by Arshiya Lokhandwala. \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Bajaj Art Gallery, Mumbai\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" January 2019\"],[13],[13],[1,\"\\n \\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Landscapes \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2 channel video installation with raspberry pi, camera, monitors, microscope, samples and film.\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Part of the show Ecology and the Metropolis curated by Vivek Chockalingam.\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Walkin Studios, Bangalore \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"August 2018\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Wa \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Film and text Installation. As a part of the show Ging-Bang curated by Vivek Chockalingam. \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Walkin Studios, Bangalore \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"June 2018\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"And then, \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Sound performance and installation with hay, logs, tree roots and mushrooms..\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Shoonya-Centre for Art and Somatic Practices. Bangalore, \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"May 2018\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Watermelon\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Sound performance with hay, wood logs, plants, and 13 watermelons. Powercut Edition 2, Bangalore. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" April 2018\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Flower \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Sound performance with hay, tree roots, plants and a flower. Partly Purple, Yelahanka, Bangalore\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\". Mar 2018\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2017\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Scene after words\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Screen prints, two microphones and a speaker. One Shanthi Road, Bangalore. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Aug 2017\"],[13],[13],[1,\"\\n\\n\"],[10,\"h1\"],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.2;margin-right: -1.5pt;margin-top:16pt;margin-bottom:10pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Collaborative works \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2023\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Wetspace Noise Drips 2.0\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Organized and conducted an immersive audio-visual event as part of Walkin Studios’ outpost at Kochi inviting 10 artists over two days. Forplay Society, Kochi.  \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"11 - 12 March 2023\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Wetspace Noise Drips 1.0\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Organized and conducted a spatial sonic event in collaboration with Sofy Yudiskta and Walkin Studios with live acts and sound installations by 16 artists over two days. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"4- 5 Nov 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"PublicDomain.Garden\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Co-directed \"],[13],[10,3],[14,6,\"https://publicdomain.garden/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"public domain.garden\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" as part of \"],[13],[10,3],[14,6,\"https://www.walkinstudios.com/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Walkin Studios\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\". It is part of the studios’  2021-22 framework for research and curation. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"October 2021 - Ongoing\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Sonicular \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Performance by Cynk collective at Forplay Society, Kochi, \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"17 Dec 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Take what you need\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Collaborative work with Avril Stormy Unger as part of Antifreeze - an exhibition curated by Beth Troaks at the\"],[13],[10,3],[14,6,\"https://lockinbrighton.com/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" LockIn Gallery\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\", Brighton, UK. \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Oct 2021\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Creation of Birds (NOTAAT)\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,3],[14,6,\"https://sultanazana.github.io/creation_of_birds/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Web-based work\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" exploring human and non human languages using machine-learning algorithms, image sensing and performance of our bodies\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"The work was shown at the \"],[13],[10,3],[14,6,\"https://eliterature.org/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"ELO\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" conference in May-June 2021\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Meaning to Walk \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Video work In collaboration with Vivek Chokalingham.  Mind Over Matter, Dresden, Germany \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" January- Mar 2021\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,3],[14,6,\"https://vimeo.com/383569085\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"OSCILNATION Session 0\"],[13],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"  \"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Multi-channel sound performance using code, analog instruments and objects by Cynk Collective. \"],[13],[10,3],[14,6,\"https://www.walkinstudios.com/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Walkin studios, Bangalore.\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" December 2019\"],[13],[13],[1,\"\\n\\n\"],[10,\"h1\"],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.2;margin-right: -1.5pt;margin-top:16pt;margin-bottom:10pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Workshop (conducted)\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2023\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Intro to Pure Data - 3 day workshop at ABC Art Room, Kochi Muziris Biennale 2022-23\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"3-5 Feb 2023, Cabral Yard, Kochi\"],[13],[13],[1,\"\\n\\n\"],[10,\"h1\"],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.2;margin-right: -1.5pt;margin-top:16pt;margin-bottom:10pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Workshops (participated)\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,3],[14,6,\"https://forum.ircam.fr/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"IRCAM FORUM\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\", Paris, March 2022\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artistic dissidences - workshop with Eva Bonilla and Fernando Jeminez from \"],[13],[10,3],[14,6,\"https://avfloss.github.io/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"AV-FLOSS\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" at MediaLab Prado in Spain  \"],[13],[10,3],[14,6,\"https://www.jaaga.in/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Jaaga, Bangalore\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\", Jul 2019\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Cyanotype workshop with \"],[13],[10,3],[14,6,\"https://cargocollective.com/riafish/Bio\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Ria Rajan\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" at \"],[13],[10,3],[14,6,\"https://www.walkinstudios.com/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Walkin Studios, Bangalore\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\", Jul 2019\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Residency at Nalanda Lab, Wardha with\"],[13],[10,3],[14,6,\"https://marclee.io/en/home/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" Marc Lee\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" and Abhiyan Humane, Jan 2019\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2018\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Wild City’s Women in electronic music : with \"],[13],[10,3],[14,6,\"https://www.thewildcity.com/artists/137-rhl\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Rahul Giri\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" and \"],[13],[10,3],[14,6,\"https://www.rachelkcollier.com/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Rachel Collier\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\". Bangalore, Apr 2018\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2016\"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Workshop at Isro with \"],[13],[10,3],[14,6,\"https://www.crisap.org/people/cathy-lane/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Cathy Lane \"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"and \"],[13],[10,3],[14,6,\"http://vivcorringham.org/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Viv Corringham\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" at \"],[13],[10,3],[14,6,\"https://www.theisro.org/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"ISRO\"],[13],[13],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" , Feb 2018\"],[13],[13],[1,\"\\n \\n\\n\"],[10,\"h1\"],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.2;margin-right: -1.5pt;margin-top:0pt;margin-bottom:10pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Reviews and Interviews\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2023\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Stirworld: \"],[13],[10,3],[14,6,\"https://www.stirworld.com/think-opinions-talks-on-art-tech-and-law-align-disrupt-conversations-at-iaf-2023\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Talks on art, tech and law 'Align & Disrupt' conversations at IAF 2023\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2023\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Livemint: \"],[13],[10,3],[14,6,\"https://lifestyle.livemint.com/amp/how-to-lounge/art-culture/the-future-of-tech-art-is-human-111676174914157.html\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"The future of tech-art is human\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Interview with Inka Magazine - Karlsruhe city magazine (print)\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2022\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"India Art Fair panel : \"],[13],[10,3],[14,6,\"https://youtu.be/g2aHHcgN83o\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artistic Practice: Mediatic Environments\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,3],[14,6,\"https://two.compost.digital/reverence-for-the-spaces-in-between/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Reverence for spaces in-between\"],[13],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\", Interview with \"],[13],[10,3],[14,6,\"https://two.compost.digital/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Compost digital\"],[13],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" online magazine\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Creatrix Mag: \"],[13],[10,3],[14,6,\"https://creatrixmag.com/touching-the-unknown/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Touching the Unknown\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2021\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Deep fried neurons podcast: \"],[13],[10,3],[14,6,\"https://anchor.fm/deep-fried-neurons/episodes/99---Ecological-Footprints-of-Colonisation-and-Anthropocene-Interventions-ft--Sultana-Zana-ep5v3k\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Ecological Footprints of Colonisation and Anthropocene Interventions\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2020\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"InterAccess, Toronto: \"],[13],[10,3],[14,6,\"https://youtu.be/1lNUJ2JCHO4\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Sustainable Approaches to Making - panel discussion\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Indian Express: \"],[13],[10,3],[14,6,\"https://indianexpress.com/article/lifestyle/art-and-culture/earth-to-earth-sultana-zana-artist-man-nature-conflict-5806889/\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Artist Sultana Zana on her new project in the Himalayas that focuses on the conflict between man and nature\"],[13],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"2019\"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"    \"],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Hindustan times : \"],[13],[10,3],[14,6,\"https://www.walkinstudios.com/?lightbox=dataItem-kbuex3rv1\"],[14,5,\"text-decoration:none;\"],[12],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#1155cc;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Decoding chaos\"],[13],[13],[10,1],[14,5,\"font-size:10pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:500;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\" \"],[13],[13],[1,\"\\n \\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:11pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:600;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Education\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Srishti School of Art, Design and Technology\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"M.Cr.A (Contemporary Art Practice)\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"July 2016 - July 2018\"],[13],[13],[1,\"\\n \\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"JSS Academy of Technical Education, Noida\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"August  2011 - May 2015\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"B. tech (Electronics and Instrumentation)\"],[13],[13],[1,\"\\n \\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Indian Institute of Information Technology and Management, Gwalior\"],[13],[13],[1,\"\\n\\n\"],[10,2],[14,\"dir\",\"ltr\"],[14,5,\"line-height:1.56;margin-top:0pt;margin-bottom:0pt;\"],[12],[10,1],[14,5,\"font-size:9pt;font-family:Montserrat,sans-serif;color:#000000;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"],[12],[1,\"Nanotechnology Research 2014-15\"],[13],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\n\"],[10,\"br\"],[12],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,8],null,null],null,null,null]],[],false,[\"page-title\",\"div\",\"p\",\"span\",\"a\",\"h1\",\"br\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/cv.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/general-atm", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "GeneralAtm"}}
  
  <div class="p-3">
      
      {{{get (get this.model.block1.modules.page_content.blocks '0') 'data.text'}}}
      </div>
      <div>
          {{!-- template-lint-disable require-valid-alt-text --}}
          <img class="img-fluid" src={{get (get this.model.block1.modules.image '0') 'lg.url'}}>
    
      </div>
      
      <div>
      {{{get (get this.model.block1.modules.page_content.blocks '1') 'data.text'}}}
       </div>
  
  
  {{outlet}}
  */
  {
    "id": "WWw5o8rZ",
    "block": "[[[1,[28,[35,0],[\"GeneralAtm\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"p-3\"],[12],[1,\"\\n    \\n    \"],[2,[28,[37,2],[[28,[37,2],[[30,0,[\"model\",\"block1\",\"modules\",\"page_content\",\"blocks\"]],\"0\"],null],\"data.text\"],null]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n\"],[1,\"        \"],[10,\"img\"],[14,0,\"img-fluid\"],[15,\"src\",[28,[37,2],[[28,[37,2],[[30,0,[\"model\",\"block1\",\"modules\",\"image\"]],\"0\"],null],\"lg.url\"],null]],[12],[13],[1,\"\\n  \\n    \"],[13],[1,\"\\n    \\n    \"],[10,0],[12],[1,\"\\n    \"],[2,[28,[37,2],[[28,[37,2],[[30,0,[\"model\",\"block1\",\"modules\",\"page_content\",\"blocks\"]],\"1\"],null],\"data.text\"],null]],[1,\"\\n     \"],[13],[1,\"\\n\\n\\n\"],[46,[28,[37,5],null,null],null,null,null]],[],false,[\"page-title\",\"div\",\"get\",\"img\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/general-atm.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Remove the WelcomeFlame component and write your HTML code here --}}
  
  <div>
  
  <div class="line2">
        
          <div> <LinkTo @route="reviews"> REVIEWS </LinkTo> </div>
          <div> <LinkTo @route="contact"> CONTACT </LinkTo> </div>
          <div> <a href="https://kaldimoss.github.io/home.io/Moss_cv2024.html"> CV </a> </div>
      </div>
  
  
      <div class="line3">
    <!--           
          {{#each @model.categories as |category|}}
              <div class="{{category.modules.classes}} p-1">
                  <LinkTo @route="category-page" @model="{{category.slug}}">
                      {{category.modules.title}}
                  </LinkTo>
              </div>
          {{/each}}
                      {{!-- {{get (get this.model.categories 1) 'modules.title'}}     --}}
  -->
          
  
      {{!--
          <div class="{{get (get this.model.categories 0) 'modules.classes'}} p-1">
              <LinkTo @route="/:slug"> 
                  {{get (get this.model.categories 0) 'modules.title'}}
              </LinkTo>
          </div>
          
          <div class="tx p-1"><LinkTo @route="texts">{{get (get this.model.categories 1) 'modules.title'}}</LinkTo>  </div>
          <div class="sk p-1"><LinkTo @route="sketches">{{get (get this.model.categories 2) 'modules.title'}}</LinkTo> </div>
          <div class="pr p-1"><LinkTo @route="proposals">{{get (get this.model.categories 3) 'modules.title'}}</LinkTo> </div>
      
      --}}
  
  
      </div>
  
      <div class="title">
          <br>
          Moss Homepage
      </div>
  
      
      <div class="content px-5 mx-2">
          <div>
              I AM INTERESTED IN MEASUREMENT, INSTRUMENTS, TOOLS, NETWORKS, LANGUAGE, AND MEDIA. <br> I WORK WITH PEOPLE, CODE, ELECTRONICS, SCULPTURE, SOUND, AND PERFORMANCE. 
              <!--
              THIS IS A WEBSITE FOR ONGOING INVESTIGATIONS, AN ARCHIVE OF TESTS, IDEAS AND, DEAD ENDS. BELOW ARE THE COLLECTIVES I AM PART OF, OLDER WEBSITES AND LIVE PROJETS. 
              -->
              <br><br>
              
          </div>
       </div>
       <div class="line4">
         <a href="https://whattt.cargo.site/"> Portfolio website </a>
      </div>
  
      <div class="line5">
          <LinkTo @route="studio">
              Studio 
          </LinkTo> 
       </div>
  
       <div class="line6">
          <div><a href="https://cynkcollective.github.io/home.io"> CYNK </a></div>
          <div><a href="https://notaat-notaat.github.io/About/"> NOTAAT</a> </div>
      </div>
     
  
      <div class="line8">
          <div> <a href="https://kaldimoss.github.io/conductors.io/"> Operators and Conductors <br> (2023) </a> </div>
          <div> <a href="https://sultanazana.github.io/dreams.io/"> Dreams and Experiments <br> (2019) </a> </div>
          <div><a href="https://sultanazana.github.io/fieldness.io/"> The Fieldness Website <br> (2020) </a> </div>
          <div><a href="https://thoughtcavesgrowfast.wordpress.com/2018/06/11/the-mycelium-project/"> The Mycellium Project<br> (2017) </a></div>
      </div>  
  
  <!--
  
  <div class="line8">
          <div> <a href="https://recon-banerjee.netlify.app"> Recon <br> (2026) </a> </div>
          <div> <a href="https://sultanazana.github.io/dreams.io/"> Benthos people <br> (2023) </a> </div>
          <div><a href="https://sultanazana.github.io/fieldness.io/"> Frame of Reference <br> (2023) </a> </div>
          <div><a href="https://thoughtcavesgrowfast.wordpress.com/2018/06/11/the-mycelium-project/"> General Atmosphere - spatial sound instrument <br> (2017) </a></div>
      </div>  
  -->
  
  
  
  
  
  
  </div>
  
  
  {{outlet}}
  */
  {
    "id": "sJ7cCgtt",
    "block": "[[[1,\"\\n\"],[10,0],[12],[1,\"\\n\\n\"],[10,0],[14,0,\"line2\"],[12],[1,\"\\n      \\n        \"],[10,0],[12],[1,\" \"],[8,[39,1],null,[[\"@route\"],[\"reviews\"]],[[\"default\"],[[[[1,\" REVIEWS \"]],[]]]]],[1,\" \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\" \"],[8,[39,1],null,[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\" CONTACT \"]],[]]]]],[1,\" \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\" \"],[10,3],[14,6,\"https://kaldimoss.github.io/home.io/Moss_cv2024.html\"],[12],[1,\" CV \"],[13],[1,\" \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\\n    \"],[10,0],[14,0,\"line3\"],[12],[1,\"\\n  \"],[3,\"           \\n{{#each @model.categories as |category|}}\\n            <div class=\\\"{{category.modules.classes}} p-1\\\">\\n                <LinkTo @route=\\\"category-page\\\" @model=\\\"{{category.slug}}\\\">\\n                    {{category.modules.title}}\\n                </LinkTo>\\n            </div>\\n        {{/each}}{{!-- {{get (get this.model.categories 1) 'modules.title'}}     --}}\"],[1,\"\\n        \\n\\n\"],[1,\"\\n\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        Moss Homepage\\n    \"],[13],[1,\"\\n\\n    \\n    \"],[10,0],[14,0,\"content px-5 mx-2\"],[12],[1,\"\\n        \"],[10,0],[12],[1,\"\\n            I AM INTERESTED IN MEASUREMENT, INSTRUMENTS, TOOLS, NETWORKS, LANGUAGE, AND MEDIA. \"],[10,\"br\"],[12],[13],[1,\" I WORK WITH PEOPLE, CODE, ELECTRONICS, SCULPTURE, SOUND, AND PERFORMANCE. \\n            \"],[3,\"\\n            THIS IS A WEBSITE FOR ONGOING INVESTIGATIONS, AN ARCHIVE OF TESTS, IDEAS AND, DEAD ENDS. BELOW ARE THE COLLECTIVES I AM PART OF, OLDER WEBSITES AND LIVE PROJETS. \\n            \"],[1,\"\\n            \"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[1,\"\\n            \\n        \"],[13],[1,\"\\n     \"],[13],[1,\"\\n     \"],[10,0],[14,0,\"line4\"],[12],[1,\"\\n       \"],[10,3],[14,6,\"https://whattt.cargo.site/\"],[12],[1,\" Portfolio website \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"line5\"],[12],[1,\"\\n        \"],[8,[39,1],null,[[\"@route\"],[\"studio\"]],[[\"default\"],[[[[1,\"\\n            Studio \\n        \"]],[]]]]],[1,\" \\n     \"],[13],[1,\"\\n\\n     \"],[10,0],[14,0,\"line6\"],[12],[1,\"\\n        \"],[10,0],[12],[10,3],[14,6,\"https://cynkcollective.github.io/home.io\"],[12],[1,\" CYNK \"],[13],[13],[1,\"\\n        \"],[10,0],[12],[10,3],[14,6,\"https://notaat-notaat.github.io/About/\"],[12],[1,\" NOTAAT\"],[13],[1,\" \"],[13],[1,\"\\n    \"],[13],[1,\"\\n   \\n\\n    \"],[10,0],[14,0,\"line8\"],[12],[1,\"\\n        \"],[10,0],[12],[1,\" \"],[10,3],[14,6,\"https://kaldimoss.github.io/conductors.io/\"],[12],[1,\" Operators and Conductors \"],[10,\"br\"],[12],[13],[1,\" (2023) \"],[13],[1,\" \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\" \"],[10,3],[14,6,\"https://sultanazana.github.io/dreams.io/\"],[12],[1,\" Dreams and Experiments \"],[10,\"br\"],[12],[13],[1,\" (2019) \"],[13],[1,\" \"],[13],[1,\"\\n        \"],[10,0],[12],[10,3],[14,6,\"https://sultanazana.github.io/fieldness.io/\"],[12],[1,\" The Fieldness Website \"],[10,\"br\"],[12],[13],[1,\" (2020) \"],[13],[1,\" \"],[13],[1,\"\\n        \"],[10,0],[12],[10,3],[14,6,\"https://thoughtcavesgrowfast.wordpress.com/2018/06/11/the-mycelium-project/\"],[12],[1,\" The Mycellium Project\"],[10,\"br\"],[12],[13],[1,\" (2017) \"],[13],[13],[1,\"\\n    \"],[13],[1,\"  \\n\\n\"],[3,\"\\n\\n<div class=\\\"line8\\\">\\n        <div> <a href=\\\"https://recon-banerjee.netlify.app\\\"> Recon <br> (2026) </a> </div>\\n        <div> <a href=\\\"https://sultanazana.github.io/dreams.io/\\\"> Benthos people <br> (2023) </a> </div>\\n        <div><a href=\\\"https://sultanazana.github.io/fieldness.io/\\\"> Frame of Reference <br> (2023) </a> </div>\\n        <div><a href=\\\"https://thoughtcavesgrowfast.wordpress.com/2018/06/11/the-mycelium-project/\\\"> General Atmosphere - spatial sound instrument <br> (2017) </a></div>\\n    </div>  \\n\"],[1,\"\\n\\n\\n\\n\\n\\n\\n\"],[13],[1,\"\\n\\n\\n\"],[46,[28,[37,5],null,null],null,null,null]],[],false,[\"div\",\"link-to\",\"a\",\"br\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/index.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/page1", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Page1"}}
  {{outlet}}
  */
  {
    "id": "Asja+CDJ",
    "block": "[[[1,[28,[35,0],[\"Page1\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/page1.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/page2", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Page2"}}
  <CategoryBar />
  
      <div id="twoscrolll" class="min-vh-100">
         
          
                  
          {{#each this.model.modules.page_content.blocks as |block|}}
              <div class="mx-2 px-3">
                  
                  <p>{{{block.data.text}}}</p>
              </div>
          {{/each}}
  
  
      </div>
      
      <div id="twoscrollr">
         
         {{#each this.model.modules.image as |image|}}
          <div class="mx-2 px-2">
  
              {{!-- template-lint-disable no-shadowed-elements --}}
              <img class="img-fluid" src={{image.md.url}} alt="img-not-loaded">
          </div>
         {{/each}}
          this is the right side.
      </div>
  
  {{outlet}}
  */
  {
    "id": "NJ11dEY6",
    "block": "[[[1,[28,[35,0],[\"Page2\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n    \"],[10,0],[14,1,\"twoscrolll\"],[14,0,\"min-vh-100\"],[12],[1,\"\\n       \\n        \\n                \\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"model\",\"modules\",\"page_content\",\"blocks\"]]],null]],null],null,[[[1,\"            \"],[10,0],[14,0,\"mx-2 px-3\"],[12],[1,\"\\n                \\n                \"],[10,2],[12],[2,[30,1,[\"data\",\"text\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[1]],null],[1,\"\\n\\n    \"],[13],[1,\"\\n    \\n    \"],[10,0],[14,1,\"twoscrollr\"],[12],[1,\"\\n       \\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"model\",\"modules\",\"image\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"mx-2 px-2\"],[12],[1,\"\\n\\n\"],[1,\"            \"],[10,\"img\"],[14,0,\"img-fluid\"],[15,\"src\",[30,2,[\"md\",\"url\"]]],[14,\"alt\",\"img-not-loaded\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[2]],null],[1,\"        this is the right side.\\n    \"],[13],[1,\"\\n\\n\"],[46,[28,[37,8],null,null],null,null,null]],[\"block\",\"image\"],false,[\"page-title\",\"category-bar\",\"div\",\"each\",\"-track-array\",\"p\",\"img\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/page2.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/reviews", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Reviews"}}
  
  <div class="flex-box mx-auto p-3">
  
  <h1> Reviews and Interviews</h1>
  
  <p>  <a href="https://artmeets.podigee.io/s2e8-new-episode"> 2024 Art meets podcast episode 'Possibilities' </a> |   <a href="https://prohelvetia.ch/en/whats-on/art-meets-podcast-season-two/"> Art Meets.. Website </a></p>
  
  <p>2023 Stirworld: <a href="https://www.stirworld.com/think-opinions-talks-on-art-tech-and-law-align-disrupt-conversations-at-iaf-2023" target="_blank" rel="noopener noreferrer">Talks on art, tech and law 'Align &amp; Disrupt' conversations at IAF 2023</a></p>
  
  <p>2023 Livemint: <a href="https://lifestyle.livemint.com/amp/how-to-lounge/art-culture/the-future-of-tech-art-is-human-111676174914157.html" target="_blank" rel="noopener noreferrer">The future of tech-art is human</a></p>
  <p>2022 Interview with Inka Magazine - Karlsruhe city magazine (print)</p>
  <p>2022 India Art Fair panel : <a href="https://youtu.be/g2aHHcgN83o" target="_blank" rel="noopener noreferrer">Artistic Practice: Mediatic Environments</a></p>
  <p>2021 <a href="https://two.compost.digital/reverence-for-the-spaces-in-between/" target="_blank" rel="noopener noreferrer">Reverence for spaces in-between</a>, Interview with <a href="https://two.compost.digital/" target="_blank" rel="noopener noreferrer">Compost digital</a> online magazine</p>
  <p>2021 Creatrix Mag: <a href="https://creatrixmag.com/touching-the-unknown/" target="_blank" rel="noopener noreferrer">Touching the Unknown</a></p>
  <p>2021 Deep fried neurons podcast: <a href="https://anchor.fm/deep-fried-neurons/episodes/99---Ecological-Footprints-of-Colonisation-and-Anthropocene-Interventions-ft--Sultana-Zana-ep5v3k" target="_blank" rel="noopener noreferrer">Ecological Footprints of Colonisation and Anthropocene Interventions</a></p>
  <p>2020 InterAccess, Toronto: <a href="https://youtu.be/1lNUJ2JCHO4" target="_blank" rel="noopener noreferrer">Sustainable Approaches to Making - panel discussion</a></p>
  <p>2019 Indian Express: <a href="https://indianexpress.com/article/lifestyle/art-and-culture/earth-to-earth-sultana-zana-artist-man-nature-conflict-5806889/" target="_blank" rel="noopener noreferrer">Artist Sultana Zana on her new project in the Himalayas that focuses on the conflict between man and nature</a></p>
  <p>2019 Hindustan times : <a href="https://www.walkinstudios.com/?lightbox=dataItem-kbuex3rv1" target="_blank" rel="noopener noreferrer">Decoding chaos</a></p>
  
  </div>
  
  {{outlet}}
  */
  {
    "id": "bhjUqE0S",
    "block": "[[[1,[28,[35,0],[\"Reviews\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"flex-box mx-auto p-3\"],[12],[1,\"\\n\\n\"],[10,\"h1\"],[12],[1,\" Reviews and Interviews\"],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"  \"],[10,3],[14,6,\"https://artmeets.podigee.io/s2e8-new-episode\"],[12],[1,\" 2024 Art meets podcast episode 'Possibilities' \"],[13],[1,\" |   \"],[10,3],[14,6,\"https://prohelvetia.ch/en/whats-on/art-meets-podcast-season-two/\"],[12],[1,\" Art Meets.. Website \"],[13],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"2023 Stirworld: \"],[10,3],[14,6,\"https://www.stirworld.com/think-opinions-talks-on-art-tech-and-law-align-disrupt-conversations-at-iaf-2023\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Talks on art, tech and law 'Align & Disrupt' conversations at IAF 2023\"],[13],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"2023 Livemint: \"],[10,3],[14,6,\"https://lifestyle.livemint.com/amp/how-to-lounge/art-culture/the-future-of-tech-art-is-human-111676174914157.html\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"The future of tech-art is human\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"2022 Interview with Inka Magazine - Karlsruhe city magazine (print)\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"2022 India Art Fair panel : \"],[10,3],[14,6,\"https://youtu.be/g2aHHcgN83o\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Artistic Practice: Mediatic Environments\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"2021 \"],[10,3],[14,6,\"https://two.compost.digital/reverence-for-the-spaces-in-between/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Reverence for spaces in-between\"],[13],[1,\", Interview with \"],[10,3],[14,6,\"https://two.compost.digital/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Compost digital\"],[13],[1,\" online magazine\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"2021 Creatrix Mag: \"],[10,3],[14,6,\"https://creatrixmag.com/touching-the-unknown/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Touching the Unknown\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"2021 Deep fried neurons podcast: \"],[10,3],[14,6,\"https://anchor.fm/deep-fried-neurons/episodes/99---Ecological-Footprints-of-Colonisation-and-Anthropocene-Interventions-ft--Sultana-Zana-ep5v3k\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Ecological Footprints of Colonisation and Anthropocene Interventions\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"2020 InterAccess, Toronto: \"],[10,3],[14,6,\"https://youtu.be/1lNUJ2JCHO4\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Sustainable Approaches to Making - panel discussion\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"2019 Indian Express: \"],[10,3],[14,6,\"https://indianexpress.com/article/lifestyle/art-and-culture/earth-to-earth-sultana-zana-artist-man-nature-conflict-5806889/\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Artist Sultana Zana on her new project in the Himalayas that focuses on the conflict between man and nature\"],[13],[13],[1,\"\\n\"],[10,2],[12],[1,\"2019 Hindustan times : \"],[10,3],[14,6,\"https://www.walkinstudios.com/?lightbox=dataItem-kbuex3rv1\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"Decoding chaos\"],[13],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,6],null,null],null,null,null]],[],false,[\"page-title\",\"div\",\"h1\",\"p\",\"a\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/reviews.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/studio", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Studio"}}
  
  {{!-- {{get @model.nicola.slug}}
  
  <audio controls>
    <source src={{@model.nicola.modules.url}} type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
    --}}
  
  <div class="d-flex justify-content-center align-items-center vh-100">
  
  <img class="img-fluid" src="assets/img/studio.png" alt="Alchemy, instruemtns, research, repair">
  
  </div>
  
  {{outlet}}
  */
  {
    "id": "vLNkZ6mr",
    "block": "[[[1,[28,[35,0],[\"Studio\"],null]],[1,\"\\n\\n\"],[1,\"\\n\"],[10,0],[14,0,\"d-flex justify-content-center align-items-center vh-100\"],[12],[1,\"\\n\\n\"],[10,\"img\"],[14,0,\"img-fluid\"],[14,\"src\",\"assets/img/studio.png\"],[14,\"alt\",\"Alchemy, instruemtns, research, repair\"],[12],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,4],null,null],null,null,null]],[],false,[\"page-title\",\"div\",\"img\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/studio.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/summer-zurich", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "SummerZurich"}}
  <TopBar />
  
      <div id="twoscrolll" class="min-vh-100">
          This is the left side
      </div>
      
      <div id="twoscrollr">
          this is the right side.
      </div>
  
  {{outlet}}
  */
  {
    "id": "9zJKIwx9",
    "block": "[[[1,[28,[35,0],[\"SummerZurich\"],null]],[1,\"\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n    \"],[10,0],[14,1,\"twoscrolll\"],[14,0,\"min-vh-100\"],[12],[1,\"\\n        This is the left side\\n    \"],[13],[1,\"\\n    \\n    \"],[10,0],[14,1,\"twoscrollr\"],[12],[1,\"\\n        this is the right side.\\n    \"],[13],[1,\"\\n\\n\"],[46,[28,[37,4],null,null],null,null,null]],[],false,[\"page-title\",\"top-bar\",\"div\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/summer-zurich.hbs",
    "isStrictMode": false
  });
});
;define("play/templates/texts", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Texts"}}
  
      <TopBar />
  
     
          <div class="row">
              <div class="col-2 sidebar mx-3 my-2">
                  
                  <div class="m-1 p-2 border-top border-bottom border-dark">
                      <LinkTo @route="general-atm"> General Atmosphere - The instrument </LinkTo>
                      <div class="date">April 2025 | project | period </div> 
                  </div>
                  <div class="m-1 p-2 border-top border-bottom border-dark">
                      <LinkTo @route="summer-zurich"> The summer of Zurich </LinkTo>
                  </div>
  
                  <div class="m-1 p-2 border-top border-bottom border-dark">
                      <LinkTo @route="summer-zurich"> Benthos Research </LinkTo>
                  </div>
  
                  <div class="m-1 p-2 border-top border-bottom border-dark">
                      <LinkTo @route="summer-zurich"> www to dapp timeline </LinkTo>
                  </div>
  
                  <div class="m-1 p-2 border-top border-bottom border-dark">
                      <LinkTo @route="summer-zurich"> Frame of Refernce-Research </LinkTo>
                  </div>
              
              </div>
              
  
              <div class="col-9">
            
                  Content comes here
              </div>
  
  
          </div>
     
  
  {{outlet}}
  */
  {
    "id": "5H7eYWBO",
    "block": "[[[1,[28,[35,0],[\"Texts\"],null]],[1,\"\\n\\n    \"],[8,[39,1],null,null,null],[1,\"\\n\\n   \\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"col-2 sidebar mx-3 my-2\"],[12],[1,\"\\n                \\n                \"],[10,0],[14,0,\"m-1 p-2 border-top border-bottom border-dark\"],[12],[1,\"\\n                    \"],[8,[39,3],null,[[\"@route\"],[\"general-atm\"]],[[\"default\"],[[[[1,\" General Atmosphere - The instrument \"]],[]]]]],[1,\"\\n                    \"],[10,0],[14,0,\"date\"],[12],[1,\"April 2025 | project | period \"],[13],[1,\" \\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"m-1 p-2 border-top border-bottom border-dark\"],[12],[1,\"\\n                    \"],[8,[39,3],null,[[\"@route\"],[\"summer-zurich\"]],[[\"default\"],[[[[1,\" The summer of Zurich \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[10,0],[14,0,\"m-1 p-2 border-top border-bottom border-dark\"],[12],[1,\"\\n                    \"],[8,[39,3],null,[[\"@route\"],[\"summer-zurich\"]],[[\"default\"],[[[[1,\" Benthos Research \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[10,0],[14,0,\"m-1 p-2 border-top border-bottom border-dark\"],[12],[1,\"\\n                    \"],[8,[39,3],null,[[\"@route\"],[\"summer-zurich\"]],[[\"default\"],[[[[1,\" www to dapp timeline \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[10,0],[14,0,\"m-1 p-2 border-top border-bottom border-dark\"],[12],[1,\"\\n                    \"],[8,[39,3],null,[[\"@route\"],[\"summer-zurich\"]],[[\"default\"],[[[[1,\" Frame of Refernce-Research \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n            \\n            \"],[13],[1,\"\\n            \\n\\n            \"],[10,0],[14,0,\"col-9\"],[12],[1,\"\\n          \\n                Content comes here\\n            \"],[13],[1,\"\\n\\n\\n        \"],[13],[1,\"\\n   \\n\\n\"],[46,[28,[37,5],null,null],null,null,null]],[],false,[\"page-title\",\"top-bar\",\"div\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "play/templates/texts.hbs",
    "isStrictMode": false
  });
});
;define("play/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("play/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("play/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("play/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("play/utils/parse-touch-data", ["exports", "ember-gesture-modifiers/utils/parse-touch-data"], function (_exports, _parseTouchData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "isHorizontal", {
    enumerable: true,
    get: function () {
      return _parseTouchData.isHorizontal;
    }
  });
  Object.defineProperty(_exports, "isVertical", {
    enumerable: true,
    get: function () {
      return _parseTouchData.isVertical;
    }
  });
  Object.defineProperty(_exports, "parseInitialTouchData", {
    enumerable: true,
    get: function () {
      return _parseTouchData.parseInitialTouchData;
    }
  });
  Object.defineProperty(_exports, "parseTouchData", {
    enumerable: true,
    get: function () {
      return _parseTouchData.parseTouchData;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-gesture-modifiers/utils/parse-touch-data"eaimeta@70e063a35619d71f
});
;define("play/utils/titleize", ["exports", "ember-cli-string-helpers/utils/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-string-helpers/utils/titleize"eaimeta@70e063a35619d71f
});
;

;define('play/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("play/app")["default"].create({"name":"play","version":"0.0.0+ad6faecc"});
          }
        
//# sourceMappingURL=play.map
