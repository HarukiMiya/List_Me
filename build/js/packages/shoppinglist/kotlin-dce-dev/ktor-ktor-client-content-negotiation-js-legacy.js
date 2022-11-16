(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-http-js-legacy', 'ktor-ktor-serialization-js-legacy', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-io-js-legacy', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-serialization-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-content-negotiation-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-content-negotiation-js-legacy'.");
    }
    if (typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-legacy'. Its dependency 'ktor-ktor-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-js-legacy' is loaded prior to 'ktor-ktor-client-content-negotiation-js-legacy'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-legacy'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'ktor-ktor-client-content-negotiation-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-content-negotiation-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-content-negotiation-js-legacy'.");
    }
    root['ktor-ktor-client-content-negotiation-js-legacy'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-legacy'], kotlin, this['ktor-ktor-http-js-legacy'], this['ktor-ktor-serialization-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_serialization_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var equals = Kotlin.equals;
  var ContentTypeMatcher = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentTypeMatcher;
  var Configuration = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.Configuration;
  var HttpRequestPipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestPipeline;
  var accept = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.accept_41kwpe$;
  var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_jzzg3d$;
  var kotlin = Kotlin.kotlin;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var charset = $module$ktor_ktor_http_js_legacy.io.ktor.http.charset_10ldo9$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var ensureNotNull = Kotlin.ensureNotNull;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var HttpResponsePipeline = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponsePipeline;
  var ByteReadChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel;
  var getKClass = Kotlin.getKClass;
  var contentType_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_v1wgmc$;
  var suitableCharset = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.suitableCharset_4q0pk1$;
  var HttpResponseContainer = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpResponseContainer;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HttpClientPlugin = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.plugins.HttpClientPlugin;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var mutableSetOf = Kotlin.kotlin.collections.mutableSetOf_i5x0yv$;
  ContentConverterException.prototype = Object.create(Exception.prototype);
  ContentConverterException.prototype.constructor = ContentConverterException;
  function ContentNegotiation(registrations) {
    ContentNegotiation$Plugin_getInstance();
    this.registrations_8be2vx$ = registrations;
  }
  function ContentNegotiation$Config() {
    this.registrations_8be2vx$ = ArrayList_init();
  }
  function ContentNegotiation$Config$ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.converter = converter;
    this.contentTypeToSend = contentTypeToSend;
    this.contentTypeMatcher = contentTypeMatcher;
  }
  ContentNegotiation$Config$ConverterRegistration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConverterRegistration',
    interfaces: []
  };
  ContentNegotiation$Config.prototype.register_6d0rjl$$default = function (contentType, converter, configuration) {
    var tmp$;
    if (equals(contentType, ContentType.Application.Json))
      tmp$ = JsonContentTypeMatcher_getInstance();
    else
      tmp$ = this.defaultMatcher_0(contentType);
    var matcher = tmp$;
    this.register_ttoac0$(contentType, converter, matcher, configuration);
  };
  ContentNegotiation$Config.prototype.register_ttoac0$ = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    configuration(converter);
    var registration = new ContentNegotiation$Config$ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.registrations_8be2vx$.add_11rb$(registration);
  };
  function ContentNegotiation$Config$defaultMatcher$ObjectLiteral(closure$pattern) {
    this.closure$pattern = closure$pattern;
  }
  ContentNegotiation$Config$defaultMatcher$ObjectLiteral.prototype.contains_9v5yzd$ = function (contentType) {
    return contentType.match_9v5yzd$(this.closure$pattern);
  };
  ContentNegotiation$Config$defaultMatcher$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ContentTypeMatcher]
  };
  ContentNegotiation$Config.prototype.defaultMatcher_0 = function (pattern) {
    return new ContentNegotiation$Config$defaultMatcher$ObjectLiteral(pattern);
  };
  ContentNegotiation$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: [Configuration]
  };
  function ContentNegotiation$Plugin() {
    ContentNegotiation$Plugin_instance = this;
    this.key_vpaj35$_0 = new AttributeKey('ContentNegotiation');
  }
  Object.defineProperty(ContentNegotiation$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_vpaj35$_0;
    }
  });
  ContentNegotiation$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new ContentNegotiation$Config();
    block($receiver);
    var config = $receiver;
    return new ContentNegotiation(config.registrations_8be2vx$);
  };
  function ContentNegotiation$Plugin$install$lambda$lambda(it) {
    return it.converter.toString();
  }
  function Coroutine$ContentNegotiation$Plugin$install$lambda(closure$plugin_0, $receiver_0, payload_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$registrations = void 0;
    this.local$contentType = void 0;
    this.local$matchingRegistrations = void 0;
    this.local$firstNotNullOfOrNull$result = void 0;
    this.local$tmp$_2 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$payload = payload_0;
  }
  Coroutine$ContentNegotiation$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContentNegotiation$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContentNegotiation$Plugin$install$lambda.prototype.constructor = Coroutine$ContentNegotiation$Plugin$install$lambda;
  Coroutine$ContentNegotiation$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$registrations = this.local$closure$plugin.registrations_8be2vx$;
            var tmp$_0;
            tmp$_0 = this.local$registrations.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              accept(this.local$$receiver.context, element.contentTypeToSend);
            }

            var tmp$_1 = Kotlin.isType(this.local$$receiver.subject, OutgoingContent);
            if (!tmp$_1) {
              var $receiver = DefaultIgnoredTypes;
              var any$result;
              any$break: do {
                var tmp$_2;
                if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
                  any$result = false;
                  break any$break;
                }
                tmp$_2 = $receiver.iterator();
                while (tmp$_2.hasNext()) {
                  var element_0 = tmp$_2.next();
                  if (element_0.isInstance_s8jyv4$(this.local$payload)) {
                    any$result = true;
                    break any$break;
                  }
                }
                any$result = false;
              }
               while (false);
              tmp$_1 = any$result;
            }

            if (tmp$_1) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = contentType(this.local$$receiver.context);
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$contentType = this.local$tmp$;
            if (Kotlin.isType(this.local$payload, Object.getPrototypeOf(kotlin.Unit).constructor)) {
              this.local$$receiver.context.headers.remove_61zpoe$(http.HttpHeaders.ContentType);
              this.state_0 = 4;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(utils.EmptyContent, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            return;
          case 5:
            var destination = ArrayList_init();
            var tmp$_3;
            tmp$_3 = this.local$registrations.iterator();
            while (tmp$_3.hasNext()) {
              var element_1 = tmp$_3.next();
              if (element_1.contentTypeMatcher.contains_9v5yzd$(this.local$contentType))
                destination.add_11rb$(element_1);
            }

            this.local$tmp$_0 = !destination.isEmpty() ? destination : null;
            if (this.local$tmp$_0 == null) {
              return;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.local$matchingRegistrations = this.local$tmp$_0;
            if (this.local$$receiver.context.bodyType == null) {
              return;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 7:
            this.local$$receiver.context.headers.remove_61zpoe$(http.HttpHeaders.ContentType);
            this.state_0 = 8;
            continue;
          case 8:
            this.local$tmp$_2 = this.local$matchingRegistrations.iterator();
            this.state_0 = 9;
            continue;
          case 9:
            if (!this.local$tmp$_2.hasNext()) {
              this.state_0 = 12;
              continue;
            }

            var element_2 = this.local$tmp$_2.next();
            var tmp$_4;
            this.state_0 = 10;
            this.result_0 = element_2.converter.serialize_4ln4px$(this.local$contentType, (tmp$_4 = charset(this.local$contentType)) != null ? tmp$_4 : charsets.Charsets.UTF_8, ensureNotNull(this.local$$receiver.context.bodyType), this.local$payload, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var result = this.result_0;
            if (result != null) {
              this.local$firstNotNullOfOrNull$result = result;
              this.state_0 = 13;
              continue;
            } else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            this.state_0 = 9;
            continue;
          case 12:
            this.local$firstNotNullOfOrNull$result = null;
            if (!false) {
              this.state_0 = 13;
              continue;
            }

            this.state_0 = 8;
            continue;
          case 13:
            tmp$ = this.local$firstNotNullOfOrNull$result;
            if (tmp$ == null) {
              throw new ContentConverterException("Can't convert " + this.local$payload.toString() + ' with contentType ' + this.local$contentType + ' using converters ' + joinToString(this.local$matchingRegistrations, void 0, void 0, void 0, void 0, void 0, ContentNegotiation$Plugin$install$lambda$lambda));
            }

            var serializedContent = tmp$;
            this.state_0 = 14;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(serializedContent, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            return this.result_0;
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
  function ContentNegotiation$Plugin$install$lambda(closure$plugin_0) {
    return function ($receiver_0, payload_0, continuation_0, suspended) {
      var instance = new Coroutine$ContentNegotiation$Plugin$install$lambda(closure$plugin_0, $receiver_0, payload_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ContentNegotiation$Plugin$install$lambda_0(closure$plugin_0, $receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$info = void 0;
    this.local$body = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$matchingRegistrations = void 0;
    this.local$firstNotNullOfOrNull$result = void 0;
    this.local$tmp$_3 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$ContentNegotiation$Plugin$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ContentNegotiation$Plugin$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ContentNegotiation$Plugin$install$lambda_0.prototype.constructor = Coroutine$ContentNegotiation$Plugin$install$lambda_0;
  Coroutine$ContentNegotiation$Plugin$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$info = this.local$f.component1(), this.local$body = this.local$f.component2();
            var tmp$;
            if (!Kotlin.isType(this.local$body, ByteReadChannel)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.local$info.type) != null ? tmp$.equals(getKClass(ByteReadChannel)) : null) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$tmp$_0 = contentType_0(this.local$$receiver.context.response);
            if (this.local$tmp$_0 == null) {
              return;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var contentType = this.local$tmp$_0;
            var registrations = this.local$closure$plugin.registrations_8be2vx$;
            var destination = ArrayList_init();
            var tmp$_0;
            tmp$_0 = registrations.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              if (element.contentTypeMatcher.contains_9v5yzd$(contentType))
                destination.add_11rb$(element);
            }

            this.local$tmp$_1 = !destination.isEmpty() ? destination : null;
            if (this.local$tmp$_1 == null) {
              return;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.local$matchingRegistrations = this.local$tmp$_1;
            this.state_0 = 6;
            continue;
          case 6:
            this.local$tmp$_3 = this.local$matchingRegistrations.iterator();
            this.state_0 = 7;
            continue;
          case 7:
            if (!this.local$tmp$_3.hasNext()) {
              this.state_0 = 10;
              continue;
            }

            var element_0 = this.local$tmp$_3.next();
            this.state_0 = 8;
            this.result_0 = element_0.converter.deserialize_obau6j$(suitableCharset(this.local$$receiver.context.request.headers), this.local$info, this.local$body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var result = this.result_0;
            if (result != null) {
              this.local$firstNotNullOfOrNull$result = result;
              this.state_0 = 11;
              continue;
            } else {
              this.state_0 = 9;
              continue;
            }

          case 9:
            this.state_0 = 7;
            continue;
          case 10:
            this.local$firstNotNullOfOrNull$result = null;
            if (!false) {
              this.state_0 = 11;
              continue;
            }

            this.state_0 = 6;
            continue;
          case 11:
            this.local$tmp$_2 = this.local$firstNotNullOfOrNull$result;
            if (this.local$tmp$_2 == null) {
              return;
            } else {
              this.state_0 = 12;
              continue;
            }

          case 12:
            var parsedBody = this.local$tmp$_2;
            var response = new HttpResponseContainer(this.local$info, parsedBody);
            this.state_0 = 13;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            return this.result_0;
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
  function ContentNegotiation$Plugin$install$lambda_0(closure$plugin_0) {
    return function ($receiver_0, f_0, continuation_0, suspended) {
      var instance = new Coroutine$ContentNegotiation$Plugin$install$lambda_0(closure$plugin_0, $receiver_0, f_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ContentNegotiation$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline.Phases.Transform, ContentNegotiation$Plugin$install$lambda(plugin));
    scope.responsePipeline.intercept_h71y74$(HttpResponsePipeline.Phases.Transform, ContentNegotiation$Plugin$install$lambda_0(plugin));
  };
  ContentNegotiation$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var ContentNegotiation$Plugin_instance = null;
  function ContentNegotiation$Plugin_getInstance() {
    if (ContentNegotiation$Plugin_instance === null) {
      new ContentNegotiation$Plugin();
    }
    return ContentNegotiation$Plugin_instance;
  }
  ContentNegotiation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContentNegotiation',
    interfaces: []
  };
  function ContentConverterException(message) {
    Exception_init(message, this);
    this.name = 'ContentConverterException';
  }
  ContentConverterException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContentConverterException',
    interfaces: [Exception]
  };
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.contains_9v5yzd$ = function (contentType) {
    if (contentType.match_9v5yzd$(ContentType.Application.Json)) {
      return true;
    }
    var value = contentType.withoutParameters().toString();
    return startsWith(value, 'application/') && endsWith(value, '+json');
  };
  JsonContentTypeMatcher.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonContentTypeMatcher',
    interfaces: [ContentTypeMatcher]
  };
  var JsonContentTypeMatcher_instance = null;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance === null) {
      new JsonContentTypeMatcher();
    }
    return JsonContentTypeMatcher_instance;
  }
  var DefaultIgnoredTypes;
  ContentNegotiation$Config.ConverterRegistration = ContentNegotiation$Config$ConverterRegistration;
  ContentNegotiation.Config = ContentNegotiation$Config;
  Object.defineProperty(ContentNegotiation, 'Plugin', {
    get: ContentNegotiation$Plugin_getInstance
  });
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  var package$plugins = package$client.plugins || (package$client.plugins = {});
  var package$contentnegotiation = package$plugins.contentnegotiation || (package$plugins.contentnegotiation = {});
  package$contentnegotiation.ContentNegotiation = ContentNegotiation;
  package$contentnegotiation.ContentConverterException = ContentConverterException;
  Object.defineProperty(package$contentnegotiation, 'JsonContentTypeMatcher', {
    get: JsonContentTypeMatcher_getInstance
  });
  Object.defineProperty(package$contentnegotiation, 'DefaultIgnoredTypes_8be2vx$', {
    get: function () {
      return DefaultIgnoredTypes;
    }
  });
  ContentNegotiation$Config.prototype.register_6d0rjl$ = Configuration.prototype.register_6d0rjl$;
  ContentNegotiation$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  DefaultIgnoredTypes = mutableSetOf([getKClass(OutgoingContent), getKClass(ByteReadChannel), PrimitiveClasses$byteArrayClass]);
  Kotlin.defineModule('ktor-ktor-client-content-negotiation-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-legacy.js.map
