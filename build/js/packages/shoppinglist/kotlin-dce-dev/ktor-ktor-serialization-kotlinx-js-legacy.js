(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-serialization-js-legacy', 'ktor-ktor-websockets-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-serialization-js-legacy'), require('ktor-ktor-websockets-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-legacy'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-legacy'.");
    }
    if (typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-legacy'. Its dependency 'ktor-ktor-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-legacy'.");
    }
    if (typeof this['ktor-ktor-websockets-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-legacy'. Its dependency 'ktor-ktor-websockets-js-legacy' was not found. Please, check whether 'ktor-ktor-websockets-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-legacy'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-legacy'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-legacy'], kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-serialization-js-legacy'], this['ktor-ktor-websockets-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_serialization_js_legacy, $module$ktor_ktor_websockets_js_legacy) {
  'use strict';
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var SerializationException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SerializationException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var readText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readText_1lnizf$;
  var StringFormat = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.StringFormat;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var BinaryFormat = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.BinaryFormat;
  var discard = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.discard_7wsnj1$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var withCharsetIfNeeded = $module$ktor_ktor_http_js_legacy.io.ktor.http.withCharsetIfNeeded_73qf4i$;
  var TextContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.TextContent;
  var ByteArrayContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.ByteArrayContent;
  var toString = Kotlin.toString;
  var getKClass = Kotlin.getKClass;
  var ContentConverter = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.ContentConverter;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var WebsocketConverterNotFoundException = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.WebsocketConverterNotFoundException;
  var Frame$Text = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Text;
  var readText_0 = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.readText_xv7s0w$;
  var WebsocketDeserializeException = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.WebsocketDeserializeException;
  var Frame$Binary = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Binary;
  var readBytes_0 = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.readBytes_q8vmvx$;
  var Frame$Frame$Text_init = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Text_init_61zpoe$;
  var Frame$Frame$Binary_init = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Binary_init_3eyok5$;
  var WebsocketContentConverter = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.WebsocketContentConverter;
  var serializerOrNull = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializerOrNull_ca95z9$;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_1yb8b7$;
  var ListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.ListSerializer_swdriu$;
  var List = Kotlin.kotlin.collections.List;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.serializer_6eet4j$;
  var SetSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.SetSerializer_swdriu$;
  var Set = Kotlin.kotlin.collections.Set;
  var MapSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.MapSerializer_2yqygg$;
  var Map = Kotlin.kotlin.collections.Map;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var singleOrNull = Kotlin.kotlin.collections.singleOrNull_2p1efm$;
  var get_nullable = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.builtins.get_nullable_2418p6$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
  SerializationNegotiationParameters.prototype = Object.create(SerializationParameters.prototype);
  SerializationNegotiationParameters.prototype.constructor = SerializationNegotiationParameters;
  KotlinxSerializationConverter$serializationBase$ObjectLiteral.prototype = Object.create(KotlinxSerializationBase.prototype);
  KotlinxSerializationConverter$serializationBase$ObjectLiteral.prototype.constructor = KotlinxSerializationConverter$serializationBase$ObjectLiteral;
  KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral.prototype = Object.create(KotlinxSerializationBase.prototype);
  KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral.prototype.constructor = KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral;
  function KotlinxSerializationBase(format) {
    this.format_0 = format;
  }
  function Coroutine$serialize_jhffn2$($this, parameters_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$parameters = parameters_0;
  }
  Coroutine$serialize_jhffn2$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$serialize_jhffn2$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$serialize_jhffn2$.prototype.constructor = Coroutine$serialize_jhffn2$;
  Coroutine$serialize_jhffn2$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.local$parameters.serializer = serializerFromTypeInfo(this.local$parameters.typeInfo, this.$this.format_0.serializersModule);
            this.state_0 = 1;
            this.result_0 = this.$this.serializeContent_mrjhm3$(this.local$parameters, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 6;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 6;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, SerializationException)) {
              this.local$tmp$ = null;
            } else
              throw cause;
            this.state_0 = 3;
            continue;
          case 3:
            var result = this.local$tmp$;
            if (result != null) {
              return result;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var guessedSearchSerializer = guessSerializer(this.local$parameters.value, this.$this.format_0.serializersModule);
            this.local$parameters.serializer = guessedSearchSerializer;
            this.state_0 = 5;
            this.result_0 = this.$this.serializeContent_mrjhm3$(this.local$parameters, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return this.result_0;
          case 6:
            throw this.exception_0;
          default:
            this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  KotlinxSerializationBase.prototype.serialize_jhffn2$ = function (parameters_0, continuation_0, suspended) {
    var instance = new Coroutine$serialize_jhffn2$(this, parameters_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  KotlinxSerializationBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinxSerializationBase',
    interfaces: []
  };
  function SerializationParameters(format, value, typeInfo, charset) {
    this.format_rzncps$_0 = format;
    this.value_7rzid0$_0 = value;
    this.typeInfo_r8asj3$_0 = typeInfo;
    this.charset_v8qo0h$_0 = charset;
    this.serializer_xka1k5$_0 = this.serializer_xka1k5$_0;
  }
  Object.defineProperty(SerializationParameters.prototype, 'format', {
    get: function () {
      return this.format_rzncps$_0;
    }
  });
  Object.defineProperty(SerializationParameters.prototype, 'value', {
    get: function () {
      return this.value_7rzid0$_0;
    }
  });
  Object.defineProperty(SerializationParameters.prototype, 'typeInfo', {
    get: function () {
      return this.typeInfo_r8asj3$_0;
    }
  });
  Object.defineProperty(SerializationParameters.prototype, 'charset', {
    get: function () {
      return this.charset_v8qo0h$_0;
    }
  });
  Object.defineProperty(SerializationParameters.prototype, 'serializer', {
    configurable: true,
    get: function () {
      if (this.serializer_xka1k5$_0 == null)
        return throwUPAE('serializer');
      return this.serializer_xka1k5$_0;
    },
    set: function (serializer) {
      this.serializer_xka1k5$_0 = serializer;
    }
  });
  SerializationParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationParameters',
    interfaces: []
  };
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.format_wmbrjz$_0 = format;
    this.value_no0ss3$_0 = value;
    this.typeInfo_1nvg3y$_0 = typeInfo;
    this.charset_wpjc2a$_0 = charset;
    this.contentType = contentType;
  }
  Object.defineProperty(SerializationNegotiationParameters.prototype, 'format', {
    get: function () {
      return this.format_wmbrjz$_0;
    }
  });
  Object.defineProperty(SerializationNegotiationParameters.prototype, 'value', {
    get: function () {
      return this.value_no0ss3$_0;
    }
  });
  Object.defineProperty(SerializationNegotiationParameters.prototype, 'typeInfo', {
    get: function () {
      return this.typeInfo_1nvg3y$_0;
    }
  });
  Object.defineProperty(SerializationNegotiationParameters.prototype, 'charset', {
    get: function () {
      return this.charset_wpjc2a$_0;
    }
  });
  SerializationNegotiationParameters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationNegotiationParameters',
    interfaces: [SerializationParameters]
  };
  function KotlinxSerializationConverter(format) {
    this.format_0 = format;
    if (!(Kotlin.isType(this.format_0, BinaryFormat) || Kotlin.isType(this.format_0, StringFormat))) {
      var message = 'Only binary and string formats are supported, ' + (this.format_0.toString() + ' is not supported.');
      throw IllegalArgumentException_init(message.toString());
    }
    this.serializationBase_0 = new KotlinxSerializationConverter$serializationBase$ObjectLiteral(this, this.format_0);
  }
  KotlinxSerializationConverter.prototype.serialize_4ln4px$ = function (contentType, charset, typeInfo, value, continuation) {
    return this.serializationBase_0.serialize_jhffn2$(new SerializationNegotiationParameters(this.format_0, value, typeInfo, charset, contentType), continuation);
  };
  function Coroutine$deserialize_obau6j$($this, charset_0, typeInfo_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$serializer = void 0;
    this.local$charset = charset_0;
    this.local$typeInfo = typeInfo_0;
    this.local$content = content_0;
  }
  Coroutine$deserialize_obau6j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deserialize_obau6j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deserialize_obau6j$.prototype.constructor = Coroutine$deserialize_obau6j$;
  Coroutine$deserialize_obau6j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$serializer = serializerFromTypeInfo(this.local$typeInfo, this.$this.format_0.serializersModule);
            this.state_0 = 2;
            this.result_0 = this.local$content.readRemaining_s8cxhz$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var contentPacket = this.result_0;
            tmp$ = this.$this.format_0;
            if (Kotlin.isType(tmp$, StringFormat))
              tmp$_0 = this.$this.format_0.decodeFromString_awif5v$(this.local$serializer, readText(contentPacket, this.local$charset));
            else if (Kotlin.isType(tmp$, BinaryFormat))
              tmp$_0 = this.$this.format_0.decodeFromByteArray_dntfbn$(this.local$serializer, readBytes(contentPacket));
            else {
              discard(contentPacket);
              throw IllegalStateException_init(('Unsupported format ' + this.$this.format_0).toString());
            }

            return tmp$_0;
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
  KotlinxSerializationConverter.prototype.deserialize_obau6j$ = function (charset_0, typeInfo_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$deserialize_obau6j$(this, charset_0, typeInfo_0, content_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  KotlinxSerializationConverter.prototype.serializeContent_0 = function (serializer, format, value, contentType, charset) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(format, StringFormat)) {
      var content = format.encodeToString_tf03ej$(Kotlin.isType(tmp$ = serializer, KSerializer) ? tmp$ : throwCCE(), value);
      tmp$_1 = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else if (Kotlin.isType(format, BinaryFormat)) {
      var content_0 = format.encodeToByteArray_tf03ej$(Kotlin.isType(tmp$_0 = serializer, KSerializer) ? tmp$_0 : throwCCE(), value);
      tmp$_1 = new ByteArrayContent(content_0, contentType);
    } else {
      throw IllegalStateException_init(('Unsupported format ' + format).toString());
    }
    return tmp$_1;
  };
  function KotlinxSerializationConverter$serializationBase$ObjectLiteral(this$KotlinxSerializationConverter, format) {
    this.this$KotlinxSerializationConverter = this$KotlinxSerializationConverter;
    KotlinxSerializationBase.call(this, format);
  }
  KotlinxSerializationConverter$serializationBase$ObjectLiteral.prototype.serializeContent_mrjhm3$ = function (parameters, continuation) {
    if (!Kotlin.isType(parameters, SerializationNegotiationParameters)) {
      throw IllegalStateException_init(('parameters type is ' + toString(Kotlin.getKClassFromExpression(parameters).simpleName) + ',' + (' but expected ' + toString(getKClass(SerializationNegotiationParameters).simpleName))).toString());
    }
    return this.this$KotlinxSerializationConverter.serializeContent_0(parameters.serializer, parameters.format, parameters.value, parameters.contentType, parameters.charset);
  };
  KotlinxSerializationConverter$serializationBase$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [KotlinxSerializationBase]
  };
  KotlinxSerializationConverter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinxSerializationConverter',
    interfaces: [ContentConverter]
  };
  function serialization($receiver, contentType, format) {
    $receiver.register_6d0rjl$(contentType, new KotlinxSerializationConverter(format));
  }
  function serialization_0($receiver, contentType, format) {
    $receiver.register_6d0rjl$(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxWebsocketSerializationConverter(format) {
    this.format_0 = format;
    if (!(Kotlin.isType(this.format_0, BinaryFormat) || Kotlin.isType(this.format_0, StringFormat))) {
      var message = 'Only binary and string formats are supported, ' + (this.format_0.toString() + ' is not supported.');
      throw IllegalArgumentException_init(message.toString());
    }
    this.serializationBase_0 = new KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral(this, this.format_0);
  }
  KotlinxWebsocketSerializationConverter.prototype.serialize_36e71y$ = function (charset, typeInfo, value, continuation) {
    return this.serializationBase_0.serialize_jhffn2$(new SerializationParameters(this.format_0, value, typeInfo, charset), continuation);
  };
  KotlinxWebsocketSerializationConverter.prototype.deserialize_v0czzf$ = function (charset, typeInfo, content, continuation) {
    var tmp$, tmp$_0;
    if (!this.isApplicable_q1ubw4$(content)) {
      throw new WebsocketConverterNotFoundException('Unsupported frame ' + content.frameType.name);
    }
    var serializer = serializerFromTypeInfo(typeInfo, this.format_0.serializersModule);
    tmp$ = this.format_0;
    if (Kotlin.isType(tmp$, StringFormat))
      if (Kotlin.isType(content, Frame$Text)) {
        tmp$_0 = this.format_0.decodeFromString_awif5v$(serializer, readText_0(content));
      } else {
        throw new WebsocketDeserializeException('Unsupported format ' + this.format_0 + ' for ' + content.frameType.name, void 0, content);
      }
     else if (Kotlin.isType(tmp$, BinaryFormat))
      if (Kotlin.isType(content, Frame$Binary)) {
        tmp$_0 = this.format_0.decodeFromByteArray_dntfbn$(serializer, readBytes_0(content));
      } else {
        throw new WebsocketDeserializeException('Unsupported format ' + this.format_0 + ' for ' + content.frameType.name, void 0, content);
      }
     else {
      throw IllegalStateException_init(('Unsupported format ' + this.format_0).toString());
    }
    if (tmp$_0 == null) {
      throw new WebsocketDeserializeException('Unsupported format ' + this.format_0 + ' for ' + content.frameType.name, void 0, content);
    }
    return tmp$_0;
  };
  KotlinxWebsocketSerializationConverter.prototype.isApplicable_q1ubw4$ = function (frame) {
    return Kotlin.isType(frame, Frame$Text) || Kotlin.isType(frame, Frame$Binary);
  };
  KotlinxWebsocketSerializationConverter.prototype.serializeContent_0 = function (serializer, format, value) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(format, StringFormat)) {
      var content = format.encodeToString_tf03ej$(Kotlin.isType(tmp$ = serializer, KSerializer) ? tmp$ : throwCCE(), value);
      tmp$_1 = Frame$Frame$Text_init(content);
    } else if (Kotlin.isType(format, BinaryFormat)) {
      var content_0 = format.encodeToByteArray_tf03ej$(Kotlin.isType(tmp$_0 = serializer, KSerializer) ? tmp$_0 : throwCCE(), value);
      tmp$_1 = Frame$Frame$Binary_init(true, content_0);
    } else {
      throw IllegalStateException_init(('Unsupported format ' + format).toString());
    }
    return tmp$_1;
  };
  function KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral(this$KotlinxWebsocketSerializationConverter, format) {
    this.this$KotlinxWebsocketSerializationConverter = this$KotlinxWebsocketSerializationConverter;
    KotlinxSerializationBase.call(this, format);
  }
  KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral.prototype.serializeContent_mrjhm3$ = function (parameters, continuation) {
    return this.this$KotlinxWebsocketSerializationConverter.serializeContent_0(parameters.serializer, parameters.format, parameters.value);
  };
  KotlinxWebsocketSerializationConverter$serializationBase$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [KotlinxSerializationBase]
  };
  KotlinxWebsocketSerializationConverter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinxWebsocketSerializationConverter',
    interfaces: [WebsocketContentConverter]
  };
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = typeInfo.kotlinType) != null ? tmp$.arguments.isEmpty() ? null : serializerOrNull(module_0, tmp$) : null) != null ? tmp$_0 : module_0.getContextual_2n2k9f$(typeInfo.type)) != null ? tmp$_1 : serializer(typeInfo.type);
  }
  function guessSerializer(value, module_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (Kotlin.isType(value, List))
      tmp$_2 = ListSerializer(elementSerializer(value, module_0));
    else if (Kotlin.isArray(value)) {
      tmp$_2 = (tmp$_0 = (tmp$ = firstOrNull(value)) != null ? guessSerializer(tmp$, module_0) : null) != null ? tmp$_0 : ListSerializer(serializer_0(kotlin_js_internal_StringCompanionObject));
    } else if (Kotlin.isType(value, Set))
      tmp$_2 = SetSerializer(elementSerializer(value, module_0));
    else if (Kotlin.isType(value, Map)) {
      var keySerializer = elementSerializer(value.keys, module_0);
      var valueSerializer = elementSerializer(value.values, module_0);
      tmp$_2 = MapSerializer(keySerializer, valueSerializer);
    } else {
      tmp$_2 = (tmp$_1 = module_0.getContextual_2n2k9f$(Kotlin.getKClassFromExpression(value))) != null ? tmp$_1 : serializer(Kotlin.getKClassFromExpression(value));
    }
    return Kotlin.isType(tmp$_3 = tmp$_2, KSerializer) ? tmp$_3 : throwCCE();
  }
  function elementSerializer($receiver, module_0) {
    var tmp$, tmp$_0;
    var $receiver_0 = filterNotNull($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(guessSerializer(item, module_0));
    }
    var tmp$_2;
    var set = HashSet_init();
    var list = ArrayList_init_0();
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var e = tmp$_2.next();
      var key = e.descriptor.serialName;
      if (set.add_11rb$(key))
        list.add_11rb$(e);
    }
    var serializers = list;
    if (serializers.size > 1) {
      var destination_0 = ArrayList_init(collectionSizeOrDefault(serializers, 10));
      var tmp$_3;
      tmp$_3 = serializers.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_0.add_11rb$(item_0.descriptor.serialName);
      }
      throw IllegalStateException_init(('Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + destination_0)).toString());
    }
    var selected = (tmp$ = singleOrNull(serializers)) != null ? tmp$ : serializer_0(kotlin_js_internal_StringCompanionObject);
    if (selected.descriptor.isNullable) {
      return selected;
    }
    Kotlin.isType(tmp$_0 = selected, KSerializer) ? tmp$_0 : throwCCE();
    var any$result;
    any$break: do {
      var tmp$_4;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        if (element == null) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result) {
      return get_nullable(selected);
    }
    return selected;
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$serialization = package$ktor.serialization || (package$ktor.serialization = {});
  var package$kotlinx = package$serialization.kotlinx || (package$serialization.kotlinx = {});
  package$kotlinx.KotlinxSerializationBase = KotlinxSerializationBase;
  package$kotlinx.SerializationParameters = SerializationParameters;
  package$kotlinx.SerializationNegotiationParameters = SerializationNegotiationParameters;
  package$kotlinx.KotlinxSerializationConverter = KotlinxSerializationConverter;
  package$kotlinx.serialization_vge7$ = serialization;
  package$kotlinx.serialization_15409d$ = serialization_0;
  package$kotlinx.KotlinxWebsocketSerializationConverter = KotlinxWebsocketSerializationConverter;
  package$kotlinx.serializerFromTypeInfo_wj9ktv$ = serializerFromTypeInfo;
  package$kotlinx.guessSerializer_uxyllt$ = guessSerializer;
  Kotlin.defineModule('ktor-ktor-serialization-kotlinx-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-legacy.js.map
