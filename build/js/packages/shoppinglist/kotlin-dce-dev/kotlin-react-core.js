(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-core'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-core'.");
    }
    root['kotlin-react-core'] = factory(typeof this['kotlin-react-core'] === 'undefined' ? {} : this['kotlin-react-core'], kotlin, react);
  }
}(this, function (_, Kotlin, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var isValidElement = $module$react.isValidElement;
  var rawUseEffect = $module$react.useEffect;
  var rawUseInsertionEffect = $module$react.useInsertionEffect;
  var rawUseLayoutEffect = $module$react.useLayoutEffect;
  var useContext = $module$react.useContext;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function get_react($receiver) {
    return get_js($receiver);
  }
  function RStatics(klazz) {
    this.$delegate_j4nvxa$_0 = get_js(klazz);
  }
  Object.defineProperty(RStatics.prototype, 'contextType', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.contextType;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.contextType = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'defaultProps', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.defaultProps;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.defaultProps = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'displayName', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.displayName;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.displayName = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'getDerivedStateFromError', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.getDerivedStateFromError;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.getDerivedStateFromError = tmp$;
    }
  });
  Object.defineProperty(RStatics.prototype, 'getDerivedStateFromProps', {
    configurable: true,
    get: function () {
      return this.$delegate_j4nvxa$_0.getDerivedStateFromProps;
    },
    set: function (tmp$) {
      this.$delegate_j4nvxa$_0.getDerivedStateFromProps = tmp$;
    }
  });
  RStatics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RStatics',
    interfaces: []
  };
  function EffectBuilder() {
  }
  EffectBuilder.prototype.cleanup_o14v8n$ = defineInlineFunction('kotlin-react-core.react.EffectBuilder.cleanup_o14v8n$', function (block) {
    this.push(block);
  });
  EffectBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EffectBuilder',
    interfaces: []
  };
  function createEffectCallback$lambda(closure$effect) {
    return function () {
      var cleanups = [];
      closure$effect(cleanups);
      return buildCleanup(cleanups);
    };
  }
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup$lambda(closure$cleanups) {
    return function () {
      var tmp$, tmp$_0;
      tmp$ = closure$cleanups;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var cleanup = tmp$[tmp$_0];
        cleanup();
      }
      return Unit;
    };
  }
  function buildCleanup(cleanups) {
    if (cleanups.length === 0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function FunctionStateInstance() {
  }
  FunctionStateInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react-core.react.FunctionStateInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this[0];
  });
  FunctionStateInstance.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react-core.react.FunctionStateInstance.setValue_havc3g$', wrapFunction(function () {
    function FunctionStateInstance$setValue$lambda(closure$value) {
      return function () {
        return closure$value;
      };
    }
    return function (thisRef, property, value) {
      this[1](FunctionStateInstance$setValue$lambda(value));
    };
  }));
  FunctionStateInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunctionStateInstance',
    interfaces: []
  };
  var IntrinsicType = defineInlineFunction('kotlin-react-core.react.IntrinsicType_mptuke$', function (tagName) {
    return tagName;
  });
  var get_key = defineInlineFunction('kotlin-react-core.react.get_key_efnnzi$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver) {
      throw IllegalStateException_init(''.toString());
    };
  }));
  var set_key = defineInlineFunction('kotlin-react-core.react.set_key_nvjkkv$', function ($receiver, value) {
    $receiver.key = value;
  });
  var get_ref = defineInlineFunction('kotlin-react-core.react.get_ref_efnnzi$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver) {
      throw IllegalStateException_init(''.toString());
    };
  }));
  var set_ref = defineInlineFunction('kotlin-react-core.react.set_ref_mtffaz$', function ($receiver, value) {
    $receiver.ref = value;
  });
  var ReactNode = defineInlineFunction('kotlin-react-core.react.ReactNode_sm31w9$', function (source) {
    return source;
  });
  var ReactNode_0 = defineInlineFunction('kotlin-react-core.react.ReactNode_61zpoe$', function (source) {
    return source;
  });
  function asStringOrNull($receiver) {
    var tmp$;
    return typeof (tmp$ = $receiver) === 'string' ? tmp$ : null;
  }
  function asElementOrNull($receiver) {
    if (isValidElement($receiver)) {
      return $receiver;
    } else
      return null;
  }
  var RefCallback = defineInlineFunction('kotlin-react-core.react.RefCallback_dajwzo$', function (callback) {
    return callback;
  });
  var useRefCallback = defineInlineFunction('kotlin-react-core.react.useRefCallback_fo0l6b$', wrapFunction(function () {
    var rawUseCallback = _.$$importsForInline$$.react.useCallback;
    return function (dependencies, callback) {
      return rawUseCallback(callback, dependencies);
    };
  }));
  function StateSetter() {
  }
  StateSetter.prototype.invoke_11rb$ = defineInlineFunction('kotlin-react-core.react.StateSetter.invoke_11rb$', function (value) {
    this(value);
  });
  StateSetter.prototype.invoke_ru8m0w$ = defineInlineFunction('kotlin-react-core.react.StateSetter.invoke_ru8m0w$', function (transform) {
    this(transform);
  });
  StateSetter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateSetter',
    interfaces: []
  };
  function StateInstance() {
  }
  StateInstance.prototype.component1 = defineInlineFunction('kotlin-react-core.react.StateInstance.component1', function () {
    return this[0];
  });
  StateInstance.prototype.component2 = defineInlineFunction('kotlin-react-core.react.StateInstance.component2', function () {
    return this[1];
  });
  StateInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react-core.react.StateInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this[0];
  });
  StateInstance.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react-core.react.StateInstance.setValue_havc3g$', function (thisRef, property, value) {
    this[1](value);
  });
  StateInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateInstance',
    interfaces: []
  };
  var get_displayName = defineInlineFunction('kotlin-react-core.react.get_displayName_8yf2nf$', function ($receiver) {
    return $receiver.displayName;
  });
  var set_displayName = defineInlineFunction('kotlin-react-core.react.set_displayName_rjhp04$', function ($receiver, value) {
    $receiver.displayName = value;
  });
  var get_displayName_0 = defineInlineFunction('kotlin-react-core.react.get_displayName_g3dnnk$', function ($receiver) {
    return $receiver.displayName;
  });
  var set_displayName_0 = defineInlineFunction('kotlin-react-core.react.set_displayName_pb8gu9$', function ($receiver, value) {
    $receiver.displayName = value;
  });
  var get_displayName_1 = defineInlineFunction('kotlin-react-core.react.get_displayName_9bw8u7$', function ($receiver) {
    return $receiver.displayName;
  });
  var set_displayName_1 = defineInlineFunction('kotlin-react-core.react.set_displayName_cmp874$', function ($receiver, value) {
    $receiver.displayName = value;
  });
  var useCallback = defineInlineFunction('kotlin-react-core.react.useCallback_uhj01c$', wrapFunction(function () {
    var rawUseCallback = _.$$importsForInline$$.react.useCallback;
    return function (dependencies, callback) {
      return rawUseCallback(callback, dependencies);
    };
  }));
  function useEffect(effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback);
  }
  function useEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback, dependencies);
  }
  function useEffectOnce(effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback, []);
  }
  var useImperativeHandle = defineInlineFunction('kotlin-react-core.react.useImperativeHandle_jyaov0$', wrapFunction(function () {
    var rawUseImperativeHandle = _.$$importsForInline$$.react.useImperativeHandle;
    return function (ref, dependencies, init) {
      rawUseImperativeHandle(ref, init, dependencies);
    };
  }));
  function useInsertionEffect(effect) {
    var callback = createEffectCallback(effect);
    rawUseInsertionEffect(callback);
  }
  function useInsertionEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseInsertionEffect(callback, dependencies);
  }
  function useLayoutEffect(effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback);
  }
  function useLayoutEffect_0(dependencies, effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback, dependencies);
  }
  function useLayoutEffectOnce(effect) {
    var callback = createEffectCallback(effect);
    rawUseLayoutEffect(callback, []);
  }
  var useMemo = defineInlineFunction('kotlin-react-core.react.useMemo_peqy5h$', wrapFunction(function () {
    var rawUseMemo = _.$$importsForInline$$.react.useMemo;
    return function (dependencies, callback) {
      return rawUseMemo(callback, dependencies);
    };
  }));
  var useRefValue = defineInlineFunction('kotlin-react-core.react.useRefValue_30y1fr$', wrapFunction(function () {
    var useRef = _.$$importsForInline$$.react.useRef;
    return function () {
      return useRef();
    };
  }));
  var useRefValue_0 = defineInlineFunction('kotlin-react-core.react.useRefValue_issdgt$', wrapFunction(function () {
    var useRef = _.$$importsForInline$$.react.useRef;
    return function (initialValue) {
      return useRef(initialValue);
    };
  }));
  function RefValueInstance() {
  }
  RefValueInstance.prototype.getValue_d6mtq7$ = defineInlineFunction('kotlin-react-core.react.RefValueInstance.getValue_d6mtq7$', function (thisRef, property) {
    return this.current;
  });
  RefValueInstance.prototype.setValue_havc3g$ = defineInlineFunction('kotlin-react-core.react.RefValueInstance.setValue_havc3g$', function (thisRef, property, value) {
    this.current = value;
  });
  RefValueInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefValueInstance',
    interfaces: []
  };
  function useRequiredContext(context) {
    var value = useContext(context);
    var requireNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalArgumentException_init(message.toString());
    } else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  }
  var package$react = _.react || (_.react = {});
  package$react.get_react_2wnr96$ = get_react;
  package$react.RStatics = RStatics;
  package$react.EffectBuilder = EffectBuilder;
  package$react.createEffectCallback_1ce2r7$ = createEffectCallback;
  package$react.FunctionStateInstance = FunctionStateInstance;
  package$react.IntrinsicType_mptuke$ = IntrinsicType;
  package$react.get_key_efnnzi$ = get_key;
  package$react.set_key_nvjkkv$ = set_key;
  package$react.get_ref_efnnzi$ = get_ref;
  package$react.set_ref_mtffaz$ = set_ref;
  package$react.ReactNode_sm31w9$ = ReactNode;
  package$react.ReactNode_61zpoe$ = ReactNode_0;
  package$react.asStringOrNull_m8hz4t$ = asStringOrNull;
  package$react.asElementOrNull_m8hz4t$ = asElementOrNull;
  package$react.RefCallback_dajwzo$ = RefCallback;
  $$importsForInline$$.react = $module$react;
  $$importsForInline$$['kotlin-react-core'] = _;
  package$react.useRefCallback_fo0l6b$ = useRefCallback;
  package$react.StateSetter = StateSetter;
  package$react.StateInstance = StateInstance;
  package$react.get_displayName_8yf2nf$ = get_displayName;
  package$react.set_displayName_rjhp04$ = set_displayName;
  package$react.get_displayName_g3dnnk$ = get_displayName_0;
  package$react.set_displayName_pb8gu9$ = set_displayName_0;
  package$react.get_displayName_9bw8u7$ = get_displayName_1;
  package$react.set_displayName_cmp874$ = set_displayName_1;
  package$react.useCallback_uhj01c$ = useCallback;
  package$react.useEffect_yy86ve$ = useEffect;
  package$react.useEffect_74bcxr$ = useEffect_0;
  package$react.useEffectOnce_yy86ve$ = useEffectOnce;
  package$react.useImperativeHandle_jyaov0$ = useImperativeHandle;
  package$react.useInsertionEffect_yy86ve$ = useInsertionEffect;
  package$react.useInsertionEffect_74bcxr$ = useInsertionEffect_0;
  package$react.useLayoutEffect_yy86ve$ = useLayoutEffect;
  package$react.useLayoutEffect_74bcxr$ = useLayoutEffect_0;
  package$react.useLayoutEffectOnce_yy86ve$ = useLayoutEffectOnce;
  package$react.useMemo_peqy5h$ = useMemo;
  package$react.useRefValue_30y1fr$ = useRefValue;
  package$react.useRefValue_issdgt$ = useRefValue_0;
  package$react.RefValueInstance = RefValueInstance;
  package$react.useRequiredContext_4nabqa$ = useRequiredContext;
  Kotlin.defineModule('kotlin-react-core', _);
  return _;
}));
