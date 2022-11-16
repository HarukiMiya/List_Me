(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-serialization-js-legacy'.");
    }
    root['ktor-ktor-serialization-js-legacy'] = factory(typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Exception = Kotlin.kotlin.Exception;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var parseAndSortHeader = $module$ktor_ktor_http_js_legacy.io.ktor.http.parseAndSortHeader_pdl1vj$;
  var equals = Kotlin.equals;
  var Charset = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.Charset;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Any = Object;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var throwCCE = Kotlin.throwCCE;
  var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
  var getKClass = Kotlin.getKClass;
  var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Throwable = Error;
  ContentConvertException.prototype = Object.create(Exception.prototype);
  ContentConvertException.prototype.constructor = ContentConvertException;
  JsonConvertException.prototype = Object.create(ContentConvertException.prototype);
  JsonConvertException.prototype.constructor = JsonConvertException;
  WebsocketContentConvertException.prototype = Object.create(ContentConvertException.prototype);
  WebsocketContentConvertException.prototype.constructor = WebsocketContentConvertException;
  WebsocketConverterNotFoundException.prototype = Object.create(WebsocketContentConvertException.prototype);
  WebsocketConverterNotFoundException.prototype.constructor = WebsocketConverterNotFoundException;
  WebsocketDeserializeException.prototype = Object.create(WebsocketContentConvertException.prototype);
  WebsocketDeserializeException.prototype.constructor = WebsocketDeserializeException;
  function ContentConvertException(message, cause) {
    if (cause === void 0)
      cause = null;
    Exception.call(this, message, cause);
    this.name = 'ContentConvertException';
  }
  ContentConvertException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContentConvertException',
    interfaces: [Exception]
  };
  function JsonConvertException(message, cause) {
    if (cause === void 0)
      cause = null;
    ContentConvertException.call(this, message, cause);
    this.name = 'JsonConvertException';
  }
  JsonConvertException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonConvertException',
    interfaces: [ContentConvertException]
  };
  function WebsocketContentConvertException(message, cause) {
    if (cause === void 0)
      cause = null;
    ContentConvertException.call(this, message, cause);
    this.name = 'WebsocketContentConvertException';
  }
  WebsocketContentConvertException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebsocketContentConvertException',
    interfaces: [ContentConvertException]
  };
  function WebsocketConverterNotFoundException(message, cause) {
    if (cause === void 0)
      cause = null;
    WebsocketContentConvertException.call(this, message, cause);
    this.name = 'WebsocketConverterNotFoundException';
  }
  WebsocketConverterNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebsocketConverterNotFoundException',
    interfaces: [WebsocketContentConvertException]
  };
  function WebsocketDeserializeException(message, cause, frame) {
    if (cause === void 0)
      cause = null;
    WebsocketContentConvertException.call(this, message, cause);
    this.frame = frame;
    this.name = 'WebsocketDeserializeException';
  }
  WebsocketDeserializeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebsocketDeserializeException',
    interfaces: [WebsocketContentConvertException]
  };
  function ContentConverter() {
  }
  ContentConverter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ContentConverter',
    interfaces: []
  };
  function suitableCharset($receiver, defaultCharset) {
    if (defaultCharset === void 0)
      defaultCharset = charsets.Charsets.UTF_8;
    var tmp$;
    return (tmp$ = suitableCharsetOrNull($receiver, defaultCharset)) != null ? tmp$ : defaultCharset;
  }
  function suitableCharsetOrNull($receiver, defaultCharset) {
    if (defaultCharset === void 0)
      defaultCharset = charsets.Charsets.UTF_8;
    var tmp$;
    tmp$ = parseAndSortHeader($receiver.get_61zpoe$(http.HttpHeaders.AcceptCharset)).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var charset = tmp$_0.component1();
      if (equals(charset, '*'))
        return defaultCharset;
      else if (Charset.Companion.isSupported_61zpoe$(charset))
        return Charset.Companion.forName_61zpoe$(charset);
    }
    return null;
  }
  function Configuration() {
  }
  function Configuration$register$lambda($receiver) {
    return Unit;
  }
  Configuration.prototype.register_6d0rjl$ = function (contentType, converter, configuration, callback$default) {
    if (configuration === void 0)
      configuration = Configuration$register$lambda;
    callback$default ? callback$default(contentType, converter, configuration) : this.register_6d0rjl$$default(contentType, converter, configuration);
  };
  Configuration.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Configuration',
    interfaces: []
  };
  function WebsocketContentConverter() {
  }
  WebsocketContentConverter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebsocketContentConverter',
    interfaces: []
  };
  function serialize(T_0, isT, $receiver, value, charset, continuation) {
    if (charset === void 0)
      charset = charsets.Charsets.UTF_8;
    var tmp$_1;
    var tmp$_2 = reflect.JsType;
    var tmp$_0_1 = getKClass(T_0);
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
    return $receiver.serialize_36e71y$(charset, typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), Kotlin.isType(tmp$_1 = value, Any) ? tmp$_1 : throwCCE(), continuation);
  }
  defineInlineFunction('ktor-ktor-serialization-js-legacy.io.ktor.serialization.serialize_du9chr$', wrapFunction(function () {
    var charsets = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.charsets;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, value, charset, continuation) {
      if (charset === void 0)
        charset = charsets.Charsets.UTF_8;
      var tmp$_1;
      var tmp$_2 = reflect.JsType;
      var tmp$_0_1 = getKClass(T_0);
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
      Kotlin.suspendCall($receiver.serialize_36e71y$(charset, typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), Kotlin.isType(tmp$_1 = value, Any) ? tmp$_1 : throwCCE(), Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function Coroutine$deserialize(T_0_0, isT_0, $receiver_0, content_0, charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
    this.local$charset = charset_0;
  }
  Coroutine$deserialize.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deserialize.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deserialize.prototype.constructor = Coroutine$deserialize;
  Coroutine$deserialize.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$charset === void 0)
              this.local$charset = charsets.Charsets.UTF_8;
            var tmp$_1;
            var tmp$_2 = reflect.JsType;
            var tmp$_0_1 = getKClass(this.local$T_0);
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
            this.result_0 = this.local$$receiver.deserialize_v0czzf$(this.local$charset, typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), this.local$content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$isT(tmp$_1 = this.result_0) ? tmp$_1 : throwCCE();
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
  function deserialize(T_0_0, isT_0, $receiver_0, content_0, charset_0, continuation_0, suspended) {
    var instance = new Coroutine$deserialize(T_0_0, isT_0, $receiver_0, content_0, charset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-serialization-js-legacy.io.ktor.serialization.deserialize_v41121$', wrapFunction(function () {
    var charsets = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.charsets;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, content, charset, continuation) {
      if (charset === void 0)
        charset = charsets.Charsets.UTF_8;
      var tmp$_1;
      var tmp$_2 = reflect.JsType;
      var tmp$_0_1 = getKClass(T_0);
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
      Kotlin.suspendCall($receiver.deserialize_v0czzf$(charset, typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), content, Kotlin.coroutineReceiver()));
      return isT(tmp$_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_1 : throwCCE();
    };
  }));
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$serialization = package$ktor.serialization || (package$ktor.serialization = {});
  package$serialization.ContentConvertException = ContentConvertException;
  package$serialization.JsonConvertException = JsonConvertException;
  package$serialization.WebsocketContentConvertException = WebsocketContentConvertException;
  package$serialization.WebsocketConverterNotFoundException = WebsocketConverterNotFoundException;
  package$serialization.WebsocketDeserializeException = WebsocketDeserializeException;
  package$serialization.ContentConverter = ContentConverter;
  package$serialization.suitableCharset_4q0pk1$ = suitableCharset;
  package$serialization.suitableCharsetOrNull_4q0pk1$ = suitableCharsetOrNull;
  package$serialization.Configuration = Configuration;
  package$serialization.WebsocketContentConverter = WebsocketContentConverter;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = $module$ktor_ktor_utils_js_legacy;
  Kotlin.defineModule('ktor-ktor-serialization-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-js-legacy.js.map
