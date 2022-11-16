(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js', '@emotion/css', 'kotlin-csstype', '@emotion/styled'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'), require('@emotion/css'), require('kotlin-csstype'), require('@emotion/styled'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['@emotion/styled'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency '@emotion/styled' was not found. Please, check whether '@emotion/styled' is loaded prior to 'kotlin-emotion'.");
    }
    root['kotlin-emotion'] = factory(typeof this['kotlin-emotion'] === 'undefined' ? {} : this['kotlin-emotion'], kotlin, this['kotlin-js'], this['@emotion/css'], this['kotlin-csstype'], this['@emotion/styled']);
  }
}(this, function (_, Kotlin, $module$kotlin_js, $module$_emotion_css, $module$kotlin_csstype, $module$_emotion_styled) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Record = $module$kotlin_js.kotlinx.js.Record_kz82n3$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var styled = $module$_emotion_styled.default;
  var ClassName = defineInlineFunction('kotlin-emotion.emotion.css.ClassName_vwddye$', wrapFunction(function () {
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function (block) {
      var $receiver = {};
      block($receiver);
      return css($receiver);
    };
  }));
  var ClassName_0 = defineInlineFunction('kotlin-emotion.emotion.css.ClassName_naa8wq$', wrapFunction(function () {
    var cx = _.$$importsForInline$$['@emotion/css'].cx;
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function (classNames, block) {
      var $receiver = {};
      block($receiver);
      var element = css($receiver);
      return cx.apply(null, classNames.concat([element]));
    };
  }));
  var FROM_PERCENTAGE;
  var TO_PERCENTAGE;
  function KeyframesBuilder() {
    this.keyframes_0 = Record();
  }
  KeyframesBuilder.prototype.invoke_5dhdzl$ = function ($receiver, block) {
    var tmp$ = this.keyframes_0;
    var $receiver_0 = {};
    block($receiver_0);
    tmp$[$receiver] = $receiver_0;
  };
  KeyframesBuilder.prototype.from_1gv6kt$ = function (block) {
    this.invoke_5dhdzl$(FROM_PERCENTAGE, block);
  };
  KeyframesBuilder.prototype.to_1gv6kt$ = function (block) {
    this.invoke_5dhdzl$(TO_PERCENTAGE, block);
  };
  KeyframesBuilder.prototype.build = function () {
    return this.keyframes_0;
  };
  KeyframesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyframesBuilder',
    interfaces: []
  };
  var keyframes = defineInlineFunction('kotlin-emotion.emotion.css.keyframes_nvhna5$', wrapFunction(function () {
    var KeyframesBuilder_init = _.emotion.css.KeyframesBuilder;
    var keyframes = _.$$importsForInline$$['@emotion/css'].keyframes;
    return function (block) {
      var $receiver = new KeyframesBuilder_init();
      block($receiver);
      return keyframes($receiver.build());
    };
  }));
  var styles = defineInlineFunction('kotlin-emotion.emotion.react.styles_lf1xr6$', function ($receiver, block) {
    var $receiver_0 = {};
    block($receiver_0);
    $receiver.styles = $receiver_0;
  });
  var css = defineInlineFunction('kotlin-emotion.emotion.react.css_8fpypf$', wrapFunction(function () {
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function ($receiver, block) {
      var $receiver_0 = {};
      block($receiver_0);
      $receiver.className = css($receiver_0);
    };
  }));
  var css_0 = defineInlineFunction('kotlin-emotion.emotion.react.css_2do4zd$', wrapFunction(function () {
    var cx = _.$$importsForInline$$['@emotion/css'].cx;
    var css = _.$$importsForInline$$['@emotion/css'].css;
    return function ($receiver, classNames, block) {
      var classNames_0 = classNames.slice();
      var $receiver_0 = {};
      block($receiver_0);
      var element = css($receiver_0);
      $receiver.className = cx.apply(null, classNames_0.concat([element]));
    };
  }));
  var index;
  function generateId() {
    var tmp$;
    return 'ke-' + (tmp$ = index, index = tmp$ + 1 | 0, tmp$);
  }
  function get_theme($receiver) {
    return $receiver.theme;
  }
  function styled$lambda(closure$block) {
    return function (props) {
      var builder = {};
      closure$block(builder, props, props.theme);
      return builder;
    };
  }
  function styled_0($receiver, options, block) {
    var style = styled$lambda(block);
    var $receiver_0 = {};
    $receiver_0.target = generateId();
    var defaultOptions = $receiver_0;
    var finalOptions = Object.assign(defaultOptions, options);
    return styled($receiver, finalOptions)(style);
  }
  function styled_1($receiver, block) {
    return styled_0($receiver, null, block);
  }
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  $$importsForInline$$['@emotion/css'] = $module$_emotion_css;
  var package$emotion = _.emotion || (_.emotion = {});
  var package$css = package$emotion.css || (package$emotion.css = {});
  package$css.ClassName_vwddye$ = ClassName;
  $$importsForInline$$['kotlin-emotion'] = _;
  package$css.ClassName_naa8wq$ = ClassName_0;
  $$importsForInline$$['kotlin-csstype'] = $module$kotlin_csstype;
  package$css.KeyframesBuilder = KeyframesBuilder;
  package$css.keyframes_nvhna5$ = keyframes;
  var package$react = package$emotion.react || (package$emotion.react = {});
  package$react.styles_lf1xr6$ = styles;
  package$react.css_8fpypf$ = css;
  package$react.css_2do4zd$ = css_0;
  var package$styled = package$emotion.styled || (package$emotion.styled = {});
  package$styled.generateId_8be2vx$ = generateId;
  package$styled.styled_fbuz96$ = styled_0;
  package$styled.styled_9dd1hm$ = styled_1;
  FROM_PERCENTAGE = (0).toString() + '%';
  TO_PERCENTAGE = (100).toString() + '%';
  index = 0;
  Kotlin.defineModule('kotlin-emotion', _);
  return _;
}));
