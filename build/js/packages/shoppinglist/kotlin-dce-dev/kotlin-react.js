(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-core', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-core'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react'.");
    }
    root['kotlin-react'] = factory(typeof this['kotlin-react'] === 'undefined' ? {} : this['kotlin-react'], kotlin, this['kotlin-react-core'], react);
  }
}(this, function (_, Kotlin, $module$kotlin_react_core, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var createElement = $module$react.createElement;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var rawForwardRef = $module$react.forwardRef;
  var single = Kotlin.kotlin.collections.single_us0mfu$;
  var isValidElement = $module$react.isValidElement;
  var CHILDREN;
  var get_children = defineInlineFunction('kotlin-react.react.get_children_hw7ish$', function ($receiver) {
    return $receiver[CHILDREN];
  });
  function set_children($receiver, value) {
    $receiver[CHILDREN] = value;
  }
  function ChildrenBuilder() {
  }
  ChildrenBuilder.prototype.unaryPlus_lapc4x$ = function ($receiver) {
    Object.assign(this, $receiver);
  };
  ChildrenBuilder.prototype.child_m8hz59$ = function (element) {
    if (this[CHILDREN] != null) {
      this[CHILDREN].push(element);
    } else {
      this[CHILDREN] = [element];
    }
  };
  ChildrenBuilder.prototype.unaryPlus_kzna72$ = function ($receiver) {
    this.child_m8hz59$($receiver);
  };
  ChildrenBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.unaryPlus_kzna72$($receiver);
  };
  ChildrenBuilder.prototype.child_sv8fgx$ = function (type, props) {
    this.unaryPlus_kzna72$(createElement(type, props));
  };
  ChildrenBuilder.prototype.invoke_r7bapy$ = function ($receiver) {
    this.unaryPlus_kzna72$(createElement($receiver));
  };
  ChildrenBuilder.prototype.invoke_gax9jq$ = function ($receiver, block) {
    this.unaryPlus_kzna72$(create_0($receiver, block));
  };
  function ChildrenBuilder$invoke$lambda(closure$value, closure$block) {
    return function ($receiver) {
      $receiver.value = closure$value;
      closure$block($receiver);
      return Unit;
    };
  }
  ChildrenBuilder.prototype.invoke_1uzlnf$ = function ($receiver, value, block) {
    this.invoke_gax9jq$($receiver.Provider, ChildrenBuilder$invoke$lambda(value, block));
  };
  function ChildrenBuilder$invoke$lambda_0(closure$value, closure$block) {
    return function ($receiver) {
      $receiver.value = closure$value;
      closure$block($receiver);
      return Unit;
    };
  }
  ChildrenBuilder.prototype.invoke_snd3xh$ = function ($receiver, value, block) {
    this.invoke_gax9jq$($receiver, ChildrenBuilder$invoke$lambda_0(value, block));
  };
  ChildrenBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ChildrenBuilder',
    interfaces: []
  };
  function ChildrenBuilder_0() {
    return new ChildrenBuilderImpl();
  }
  function ChildrenBuilderImpl() {
  }
  ChildrenBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildrenBuilderImpl',
    interfaces: [ChildrenBuilder]
  };
  function FC$lambda$lambda(closure$block, closure$props) {
    return function ($receiver) {
      closure$block($receiver, closure$props);
      return Unit;
    };
  }
  function FC$lambda(closure$block) {
    return function (props) {
      return createElementOrNull(FC$lambda$lambda(closure$block, props));
    };
  }
  function FC(block) {
    var component = FC$lambda(block);
    return component;
  }
  function FC_0(displayName, block) {
    var component = FC(block);
    component.displayName = displayName;
    return component;
  }
  function ForwardRef$lambda$lambda(closure$block, closure$props, closure$ref) {
    return function ($receiver) {
      closure$block($receiver, closure$props, closure$ref);
      return Unit;
    };
  }
  function ForwardRef$lambda(closure$block) {
    return function (props, ref) {
      return createElementOrNull(ForwardRef$lambda$lambda(closure$block, props, ref));
    };
  }
  function ForwardRef(block) {
    return rawForwardRef(ForwardRef$lambda(block));
  }
  function VFC$lambda(closure$block) {
    return function () {
      return createElementOrNull(closure$block);
    };
  }
  function VFC(block) {
    var component = VFC$lambda(block);
    return component;
  }
  function VFC_0(displayName, block) {
    var component = VFC(block);
    component.displayName = displayName;
    return component;
  }
  function create($receiver) {
    return createElement($receiver);
  }
  function create_0($receiver, block) {
    var tmp$;
    var builder = ChildrenBuilder_0();
    block(builder);
    var props = builder;
    var children = (tmp$ = builder[CHILDREN]) != null ? tmp$ : [];
    return createElement.apply(null, [$receiver, props].concat(children));
  }
  function createElementOrNull(block) {
    var tmp$, tmp$_0;
    var $receiver = ChildrenBuilder_0();
    block($receiver);
    tmp$ = $receiver[CHILDREN];
    if (tmp$ == null) {
      return null;
    }
    var children = tmp$;
    if (children.length === 0)
      return null;
    if (children.length === 1) {
      tmp$_0 = single(children);
      if (tmp$_0 == null) {
        return null;
      }
      var child = tmp$_0;
      if (isValidElement(child)) {
        return child;
      }
    }
    return createElement.apply(null, [$module$react.Fragment, void 0].concat(children));
  }
  var package$react = _.react || (_.react = {});
  package$react.get_children_hw7ish$ = get_children;
  $$importsForInline$$['kotlin-react'] = _;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  package$react.ChildrenBuilder = ChildrenBuilder;
  package$react.createChildrenBuilder = ChildrenBuilder_0;
  package$react.FC_4y0n3r$ = FC;
  package$react.FC_6y5zbd$ = FC_0;
  package$react.ForwardRef_kujimp$ = ForwardRef;
  package$react.VFC_3ulnvg$ = VFC;
  package$react.VFC_5m0spe$ = VFC_0;
  package$react.create_r7bapy$ = create;
  package$react.create_gax9jq$ = create_0;
  package$react.createElementOrNull_khlwf$ = createElementOrNull;
  ChildrenBuilderImpl.prototype.unaryPlus_lapc4x$ = ChildrenBuilder.prototype.unaryPlus_lapc4x$;
  ChildrenBuilderImpl.prototype.unaryPlus_kzna72$ = ChildrenBuilder.prototype.unaryPlus_kzna72$;
  ChildrenBuilderImpl.prototype.unaryPlus_pdl1vz$ = ChildrenBuilder.prototype.unaryPlus_pdl1vz$;
  ChildrenBuilderImpl.prototype.child_m8hz59$ = ChildrenBuilder.prototype.child_m8hz59$;
  ChildrenBuilderImpl.prototype.child_sv8fgx$ = ChildrenBuilder.prototype.child_sv8fgx$;
  ChildrenBuilderImpl.prototype.invoke_r7bapy$ = ChildrenBuilder.prototype.invoke_r7bapy$;
  ChildrenBuilderImpl.prototype.invoke_gax9jq$ = ChildrenBuilder.prototype.invoke_gax9jq$;
  ChildrenBuilderImpl.prototype.invoke_1uzlnf$ = ChildrenBuilder.prototype.invoke_1uzlnf$;
  ChildrenBuilderImpl.prototype.invoke_snd3xh$ = ChildrenBuilder.prototype.invoke_snd3xh$;
  CHILDREN = Symbol('@@children');
  Kotlin.defineModule('kotlin-react', _);
  return _;
}));
