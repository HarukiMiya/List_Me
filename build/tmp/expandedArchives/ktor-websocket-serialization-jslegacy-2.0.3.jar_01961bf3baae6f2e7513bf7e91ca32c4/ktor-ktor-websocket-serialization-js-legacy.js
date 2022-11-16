(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-utils-js-legacy', 'ktor-ktor-serialization-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-utils-js-legacy'), require('ktor-ktor-serialization-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websocket-serialization-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-websocket-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websocket-serialization-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-websocket-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websocket-serialization-js-legacy'. Its dependency 'ktor-ktor-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-js-legacy' is loaded prior to 'ktor-ktor-websocket-serialization-js-legacy'.");
    }
    root['ktor-ktor-websocket-serialization-js-legacy'] = factory(typeof this['ktor-ktor-websocket-serialization-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-websocket-serialization-js-legacy'], kotlin, this['ktor-ktor-utils-js-legacy'], this['ktor-ktor-serialization-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_utils_js_legacy, $module$ktor_ktor_serialization_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var WebsocketDeserializeException = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.WebsocketDeserializeException;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
  var getKClass = Kotlin.getKClass;
  var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Throwable = Error;
  var toString = Kotlin.toString;
  function Coroutine$sendSerializedBase(T_0_0, isT_0, $receiver_0, data_0, converter_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0_0;
    this.local$$receiver = $receiver_0;
    this.local$data = data_0;
    this.local$converter = converter_0;
    this.local$charset = charset_0;
  }
  Coroutine$sendSerializedBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendSerializedBase.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendSerializedBase.prototype.constructor = Coroutine$sendSerializedBase;
  Coroutine$sendSerializedBase.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_1 = reflect.JsType;
            var tmp$_0_0 = getKClass(this.local$T_0);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = getReifiedTypeParameterKType(this.local$T_0);
              } catch (cause_0) {
                if (Kotlin.isType(cause_0, Throwable)) {
                  tryGetType$result_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = this.local$converter.serialize_36e71y$(this.local$charset, typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0), this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var serializedData_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.outgoing.send_11rb$(serializedData_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function sendSerializedBase(T_0_0, isT_0, $receiver_0, data_0, converter_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$sendSerializedBase(T_0_0, isT_0, $receiver_0, data_0, converter_0, charset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-websocket-serialization-js-legacy.io.ktor.websocket.serialization.sendSerializedBase_iktjxe$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, data, converter, charset, continuation) {
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(T_0);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      Kotlin.suspendCall(converter.serialize_36e71y$(charset, typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0), data, Kotlin.coroutineReceiver()));
      var serializedData_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      Kotlin.suspendCall($receiver.outgoing.send_11rb$(serializedData_0, Kotlin.coroutineReceiver()));
    };
  }));
  function Coroutine$receiveDeserializedBase(T_0_0, isT_0, $receiver_0, converter_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$frame = void 0;
    this.local$result = void 0;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
    this.local$converter = converter_0;
    this.local$charset = charset_0;
  }
  Coroutine$receiveDeserializedBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receiveDeserializedBase.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receiveDeserializedBase.prototype.constructor = Coroutine$receiveDeserializedBase;
  Coroutine$receiveDeserializedBase.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.incoming.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$frame = this.result_0;
            if (!this.local$converter.isApplicable_q1ubw4$(this.local$frame)) {
              throw new WebsocketDeserializeException("Converter doesn't support frame type " + this.local$frame.frameType.name, void 0, this.local$frame);
            }

            var tmp$_1 = reflect.JsType;
            var tmp$_0_0 = getKClass(this.local$T_0);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = getReifiedTypeParameterKType(this.local$T_0);
              } catch (cause_0) {
                if (Kotlin.isType(cause_0, Throwable)) {
                  tryGetType$result_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0;
              }
            }
             while (false);
            this.state_0 = 3;
            this.result_0 = this.local$converter.deserialize_v0czzf$(this.local$charset, typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0), this.local$frame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$result = this.result_0;
            if (this.local$isT(this.local$result)) {
              return this.local$result;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            throw new WebsocketDeserializeException("Can't deserialize value : expected value of type " + toString(getKClass(this.local$T_0).simpleName) + ',' + (' got ' + toString(Kotlin.getKClassFromExpression(this.local$result).simpleName)), void 0, this.local$frame);
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function receiveDeserializedBase(T_0_0, isT_0, $receiver_0, converter_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$receiveDeserializedBase(T_0_0, isT_0, $receiver_0, converter_0, charset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-websocket-serialization-js-legacy.io.ktor.websocket.serialization.receiveDeserializedBase_nqr1pk$', wrapFunction(function () {
    var WebsocketDeserializeException_init = _.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.WebsocketDeserializeException;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var getKClass = Kotlin.getKClass;
    var toString = Kotlin.toString;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, converter, charset, continuation) {
      Kotlin.suspendCall($receiver.incoming.receive(Kotlin.coroutineReceiver()));
      var frame = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      if (!converter.isApplicable_q1ubw4$(frame)) {
        throw new WebsocketDeserializeException_init("Converter doesn't support frame type " + frame.frameType.name, void 0, frame);
      }
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(T_0);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      Kotlin.suspendCall(converter.deserialize_v0czzf$(charset, typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0), frame, Kotlin.coroutineReceiver()));
      var result = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      if (isT(result))
        return result;
      throw new WebsocketDeserializeException_init("Can't deserialize value : expected value of type " + toString(getKClass(T_0).simpleName) + ',' + (' got ' + toString(Kotlin.getKClassFromExpression(result).simpleName)), void 0, frame);
    };
  }));
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = $module$ktor_ktor_utils_js_legacy;
  $$importsForInline$$['ktor-ktor-serialization-js-legacy'] = $module$ktor_ktor_serialization_js_legacy;
  Kotlin.defineModule('ktor-ktor-websocket-serialization-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-websocket-serialization-js-legacy.js.map
