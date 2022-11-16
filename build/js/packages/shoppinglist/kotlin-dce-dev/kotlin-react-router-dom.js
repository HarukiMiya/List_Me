(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-router-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-router-dom'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-router-dom'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-react-router-dom'.");
    }
    root['kotlin-react-router-dom'] = factory(typeof this['kotlin-react-router-dom'] === 'undefined' ? {} : this['kotlin-react-router-dom'], kotlin, this['kotlin-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function NavigateFunction() {
  }
  NavigateFunction.prototype.invoke_61zpoe$ = defineInlineFunction('kotlin-react-router-dom.react.router.NavigateFunction.invoke_61zpoe$', function (to) {
    this(to);
  });
  NavigateFunction.prototype.invoke_kyy9b9$ = defineInlineFunction('kotlin-react-router-dom.react.router.NavigateFunction.invoke_kyy9b9$', function (to, options) {
    this(to, options);
  });
  NavigateFunction.prototype.invoke_za3lpa$ = defineInlineFunction('kotlin-react-router-dom.react.router.NavigateFunction.invoke_za3lpa$', function (delta) {
    this(delta);
  });
  NavigateFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavigateFunction',
    interfaces: []
  };
  function SearchParamsSetter() {
  }
  SearchParamsSetter.prototype.invoke_6r12sh$ = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsSetter.invoke_6r12sh$', function (value) {
    this(value);
  });
  SearchParamsSetter.prototype.invoke_buh9ni$ = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsSetter.invoke_buh9ni$', function (value, options) {
    this(value, options);
  });
  SearchParamsSetter.prototype.invoke_qoinjp$ = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsSetter.invoke_qoinjp$', function (value, block) {
    var $receiver = {};
    block($receiver);
    this(value, $receiver);
  });
  SearchParamsSetter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SearchParamsSetter',
    interfaces: []
  };
  function SearchParamsInstance() {
  }
  SearchParamsInstance.prototype.component1 = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsInstance.component1', function () {
    return this[0];
  });
  SearchParamsInstance.prototype.component2 = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsInstance.component2', function () {
    return this[1];
  });
  SearchParamsInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this[0];
  });
  SearchParamsInstance.prototype.setValue_1wh48m$ = defineInlineFunction('kotlin-react-router-dom.react.router.dom.SearchParamsInstance.setValue_1wh48m$', function (thisRef, property, value) {
    this[1](value);
  });
  SearchParamsInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SearchParamsInstance',
    interfaces: []
  };
  var package$react = _.react || (_.react = {});
  var package$router = package$react.router || (package$react.router = {});
  package$router.NavigateFunction = NavigateFunction;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  $$importsForInline$$['kotlin-react-router-dom'] = _;
  var package$dom = package$router.dom || (package$router.dom = {});
  package$dom.SearchParamsSetter = SearchParamsSetter;
  package$dom.SearchParamsInstance = SearchParamsInstance;
  Kotlin.defineModule('kotlin-react-router-dom', _);
  return _;
}));
