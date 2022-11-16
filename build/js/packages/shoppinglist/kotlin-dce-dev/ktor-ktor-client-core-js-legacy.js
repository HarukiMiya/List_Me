(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'ktor-ktor-utils-js-legacy', 'ktor-ktor-io-js-legacy', 'kotlinx-atomicfu', 'ktor-ktor-events-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-websockets-js-legacy', 'ktor-ktor-serialization-js-legacy', 'ktor-ktor-websocket-serialization-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktor-ktor-utils-js-legacy'), require('ktor-ktor-io-js-legacy'), require('kotlinx-atomicfu'), require('ktor-ktor-events-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-websockets-js-legacy'), require('ktor-ktor-serialization-js-legacy'), require('ktor-ktor-websocket-serialization-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-events-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-events-js-legacy' was not found. Please, check whether 'ktor-ktor-events-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-websockets-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-websockets-js-legacy' was not found. Please, check whether 'ktor-ktor-websockets-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    if (typeof this['ktor-ktor-websocket-serialization-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-legacy'. Its dependency 'ktor-ktor-websocket-serialization-js-legacy' was not found. Please, check whether 'ktor-ktor-websocket-serialization-js-legacy' is loaded prior to 'ktor-ktor-client-core-js-legacy'.");
    }
    root['ktor-ktor-client-core-js-legacy'] = factory(typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-legacy'], kotlin, this['kotlinx-coroutines-core'], this['ktor-ktor-utils-js-legacy'], this['ktor-ktor-io-js-legacy'], this['kotlinx-atomicfu'], this['ktor-ktor-events-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-websockets-js-legacy'], this['ktor-ktor-serialization-js-legacy'], this['ktor-ktor-websocket-serialization-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktor_ktor_utils_js_legacy, $module$ktor_ktor_io_js_legacy, $module$kotlinx_atomicfu, $module$ktor_ktor_events_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_websockets_js_legacy, $module$ktor_ktor_serialization_js_legacy, $module$ktor_ktor_websocket_serialization_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  var ensureNotNull = Kotlin.ensureNotNull;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var throwCCE = Kotlin.throwCCE;
  var AttributeKey = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributeKey;
  var Closeable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Closeable;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$boolean$1;
  var Job_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Attributes = $module$ktor_ktor_utils_js_legacy.io.ktor.util.AttributesJsFn;
  var Events = $module$ktor_ktor_events_js_legacy.io.ktor.events.Events;
  var cancel = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_q2ti5d$;
  var Throwable = Error;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Any = Object;
  var util = $module$ktor_ktor_utils_js_legacy.io.ktor.util;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwUPAE = Kotlin.throwUPAE;
  var instanceOf = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.instanceOf_lgjw4r$;
  var cancel_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_n4wjt3$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ByteReadChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var flattenEntries = $module$ktor_ktor_utils_js_legacy.io.ktor.util.flattenEntries_vr6bp2$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
  var getKClass = Kotlin.getKClass;
  var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var ByteReadChannel_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteReadChannel_fqrh44$;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var OutgoingContent$ReadChannelContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ReadChannelContent;
  var OutgoingContent$ByteArrayContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ByteArrayContent;
  var OutgoingContent$ProtocolUpgrade = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.ProtocolUpgrade;
  var OutgoingContent$NoContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.NoContent;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var writer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writer_x9a1ni$;
  var OutgoingContent$WriteChannelContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent.WriteChannelContent;
  var CoroutineName = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineName;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var createKType = Kotlin.createKType;
  var get_job = $module$kotlinx_coroutines_core.kotlinx.coroutines.get_job_qdnslq$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var http = $module$ktor_ktor_http_js_legacy.io.ktor.http;
  var UnsafeHeaderException = $module$ktor_ktor_http_js_legacy.io.ktor.http.UnsafeHeaderException;
  var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
  var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var CompletableJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableJob;
  var SilentSupervisor = $module$ktor_ktor_utils_js_legacy.io.ktor.util.SilentSupervisor_5dx9e$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var CloseableCoroutineDispatcher = $module$kotlinx_coroutines_core.kotlinx.coroutines.CloseableCoroutineDispatcher;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Url = $module$ktor_ktor_http_js_legacy.io.ktor.http.Url_61zpoe$;
  var equals = Kotlin.equals;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var CoroutineContext$Element = Kotlin.kotlin.coroutines.CoroutineContext.Element;
  var copyAndClose = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.copyAndClose_47ygvz$;
  var writer_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writer_tkzhm5$;
  var PipelinePhase = $module$ktor_ktor_utils_js_legacy.io.ktor.util.pipeline.PipelinePhase;
  var contentLength = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentLength_v1wgmc$;
  var DataConversion = $module$ktor_ktor_utils_js_legacy.io.ktor.util.converters.DataConversion;
  var DataConversion$Configuration = $module$ktor_ktor_utils_js_legacy.io.ktor.util.converters.DataConversion.Configuration;
  var appendAll = $module$ktor_ktor_utils_js_legacy.io.ktor.util.appendAll_k10e8h$;
  var URLProtocol = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLProtocol;
  var URLBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLBuilder_dxu3lv$;
  var ParametersBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.ParametersBuilder_za3lpa$;
  var takeFrom = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_rs9g2p$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var set = $module$ktor_ktor_http_js_legacy.io.ktor.http.set_ax9qsi$;
  var takeFrom_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_jl1sg7$;
  var HeadersBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeadersBuilder;
  var URLBuilder_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.URLBuilder;
  var HttpMessageBuilder = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMessageBuilder;
  var checkBuilderCapacity = Kotlin.kotlin.collections.checkBuilderCapacity_za3lpa$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_jzzg3d$;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var TextContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.TextContent;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var cancel_1 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.cancel_3dmw3p$;
  var kotlin = Kotlin.kotlin;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var ByteReadPacket = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.ByteReadPacket;
  var Input = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Input;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var copyTo = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.copyTo_47ygvz$;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var HttpStatusCode = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpStatusCode;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var contains = Kotlin.kotlin.ranges.contains_u6rtyw$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var charset = $module$ktor_ktor_http_js_legacy.io.ktor.http.charset_10ldo9$;
  var withCharset = $module$ktor_ktor_http_js_legacy.io.ktor.http.withCharset_73qf4i$;
  var charset_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.charset_v1wgmc$;
  var readText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readText_1lnizf$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var get_name = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.get_name_2sg7fd$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var HttpMethod = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMethod;
  var setOf_0 = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var get_authority = $module$ktor_ktor_http_js_legacy.io.ktor.http.get_authority_5y8s0c$;
  var isSecure = $module$ktor_ktor_http_js_legacy.io.ktor.http.isSecure_v5fpbg$;
  var get_authority_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.get_authority_3q1sfd$;
  var EventDefinition = $module$ktor_ktor_events_js_legacy.io.ktor.events.EventDefinition;
  var cancel_2 = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_6dgle8$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var L0 = Kotlin.Long.ZERO;
  var L1000 = Kotlin.Long.fromInt(1000);
  var L60000 = Kotlin.Long.fromInt(60000);
  var Random = Kotlin.kotlin.random.Random;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var CoroutineScope_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope_1fupul$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var JsMath = Math;
  var toString = Kotlin.toString;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var hashCode = Kotlin.hashCode;
  var isWebsocket = $module$ktor_ktor_http_js_legacy.io.ktor.http.isWebsocket_v5fpbg$;
  var IOException_init = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException_init_61zpoe$;
  var IOException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException;
  var HeaderValue = $module$ktor_ktor_http_js_legacy.io.ktor.http.HeaderValue;
  var isSuccess = $module$ktor_ktor_http_js_legacy.io.ktor.http.isSuccess_b3he4c$;
  var cacheControl = $module$ktor_ktor_http_js_legacy.io.ktor.http.cacheControl_v1wgmc$;
  var getCallableRef = Kotlin.getCallableRef;
  var Url_0 = $module$ktor_ktor_http_js_legacy.io.ktor.http.Url_pboq08$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var vary = $module$ktor_ktor_http_js_legacy.io.ktor.http.vary_v1wgmc$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var GMTDate = $module$ktor_ktor_utils_js_legacy.io.ktor.util.date.GMTDate_mts6q2$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var plus_0 = $module$ktor_ktor_utils_js_legacy.io.ktor.util.date.plus_e4j7mw$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var fromHttpToGmtDate = $module$ktor_ktor_http_js_legacy.io.ktor.http.fromHttpToGmtDate_pdl1vz$;
  var parseHeaderValue = $module$ktor_ktor_http_js_legacy.io.ktor.http.parseHeaderValue_pdl1vj$;
  var ConcurrentSet = $module$ktor_ktor_utils_js_legacy.io.ktor.util.collections.ConcurrentSet_30y1fr$;
  var ConcurrentMap = $module$ktor_ktor_utils_js_legacy.io.ktor.util.collections.ConcurrentMap;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var atomic_0 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$long$1;
  var Mutex = $module$kotlinx_coroutines_core.kotlinx.coroutines.sync.Mutex_6taknv$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var toLowerCasePreservingASCIIRules = $module$ktor_ktor_utils_js_legacy.io.ktor.util.toLowerCasePreservingASCIIRules_pdl1vz$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var endsWith = Kotlin.kotlin.text.endsWith_sgbm27$;
  var hostIsIp = $module$ktor_ktor_http_js_legacy.io.ktor.http.hostIsIp_61zpoe$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_7epoxm$;
  var clone = $module$ktor_ktor_http_js_legacy.io.ktor.http.clone_3q1sfd$;
  var parseClientCookiesHeader = $module$ktor_ktor_http_js_legacy.io.ktor.http.parseClientCookiesHeader_ivxn3r$;
  var Cookie = $module$ktor_ktor_http_js_legacy.io.ktor.http.Cookie;
  var setCookie = $module$ktor_ktor_http_js_legacy.io.ktor.http.setCookie_v1wgmc$;
  var renderCookieHeader = $module$ktor_ktor_http_js_legacy.io.ktor.http.renderCookieHeader_s2xy1c$;
  var split_0 = $module$ktor_ktor_utils_js_legacy.io.ktor.util.split_o3z30d$;
  var discard = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.discard_3dmw3p$;
  var WebSocketSession = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.WebSocketSession;
  var DefaultWebSocketSession = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.DefaultWebSocketSession;
  var WebsocketConverterNotFoundException = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.WebsocketConverterNotFoundException;
  var suitableCharset = $module$ktor_ktor_serialization_js_legacy.io.ktor.serialization.suitableCharset_4q0pk1$;
  var reflect_0 = $module$ktor_ktor_websocket_serialization_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
  var typeInfoImpl_0 = $module$ktor_ktor_websocket_serialization_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var WebsocketDeserializeException_init = $module$ktor_ktor_websocket_serialization_js_legacy.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.WebsocketDeserializeException;
  var websocketServerAccept = $module$ktor_ktor_http_js_legacy.io.ktor.http.websocket.websocketServerAccept_61zpoe$;
  var generateNonce = $module$ktor_ktor_utils_js_legacy.io.ktor.util.generateNonce_za3lpa$;
  var encodeBase64 = $module$ktor_ktor_utils_js_legacy.io.ktor.util.encodeBase64_964n91$;
  var parseWebSocketExtensions = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.parseWebSocketExtensions_61zpoe$;
  var DefaultWebSocketSession_0 = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.DefaultWebSocketSession_f6qnbq$;
  var WebSocketExtensionsConfig = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.WebSocketExtensionsConfig;
  var L_1 = Kotlin.Long.NEG_ONE;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var close = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.close_d9la3o$;
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel_6taknv$;
  var HttpMessage = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpMessage;
  var putAll = $module$ktor_ktor_utils_js_legacy.io.ktor.util.putAll_orn3b7$;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var takeFrom_1 = $module$ktor_ktor_http_js_legacy.io.ktor.http.takeFrom_wol2ee$;
  var Pipeline = $module$ktor_ktor_utils_js_legacy.io.ktor.util.pipeline.Pipeline;
  var formUrlEncode = $module$ktor_ktor_http_js_legacy.io.ktor.http.formUrlEncode_invt95$;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.writeFully_4scpqu$;
  var copyTo_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.copyTo_7gmipu$;
  var close_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var BytePacketBuilder = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var writeFully_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var PartData$FileItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.FileItem;
  var PartData$BinaryItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.BinaryItem;
  var PartData$FormItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.FormItem;
  var PartData$BinaryChannelItem = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.PartData.BinaryChannelItem;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var readAvailable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readAvailable_czhrh1$;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var encodeToByteArray_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var addSuppressedInternal = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.addSuppressedInternal_oh0dqn$;
  var requestWriteBuffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.requestWriteBuffer_9tm6dw$;
  var Buffer = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.Buffer;
  var completeWriting = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.completeWriting_oczduq$;
  var Parameters = $module$ktor_ktor_http_js_legacy.io.ktor.http.Parameters;
  var Headers = $module$ktor_ktor_http_js_legacy.io.ktor.http.Headers;
  var escapeIfNeeded = $module$ktor_ktor_http_js_legacy.io.ktor.http.escapeIfNeeded_pdl1vz$;
  var ByteReadPacket_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.ByteReadPacket_1qge3v$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var encodeBase64_0 = $module$ktor_ktor_utils_js_legacy.io.ktor.util.encodeBase64_pdl1vz$;
  var decode = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.decode_lb8wo3$;
  var readFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readFully_vg4m8x$;
  var pool = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.pool;
  var readAvailable_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.readAvailable_vg4m8x$;
  var HttpProtocolVersion = $module$ktor_ktor_http_js_legacy.io.ktor.http.HttpProtocolVersion;
  var CancellationException_init_0 = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_wspj0f$;
  var cancel_3 = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_xz8be$;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var Error_0 = Kotlin.kotlin.Error;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_lsve6m$;
  var coroutines_0 = Kotlin.kotlin.coroutines;
  var CloseReason$Codes = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.CloseReason.Codes;
  var Frame$Frame$Binary_init = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Binary_init_3eyok5$;
  var Frame$Frame$Text_init = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Text_init_61zpoe$;
  var CloseReason = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.CloseReason;
  var Frame$Frame$Close_init = $module$ktor_ktor_websockets_js_legacy.io.ktor.websocket.Frame.Close_init_becdtx$;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var readShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readShort_7wsnj1$;
  var cancelConsumed = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.cancelConsumed_v57n85$;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  ReceivePipelineException.prototype = Object.create(IllegalStateException.prototype);
  ReceivePipelineException.prototype.constructor = ReceivePipelineException;
  NoTransformationFoundException.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFoundException.prototype.constructor = NoTransformationFoundException;
  SavedHttpCall.prototype = Object.create(HttpClientCall.prototype);
  SavedHttpCall.prototype.constructor = SavedHttpCall;
  SavedHttpResponse.prototype = Object.create(HttpResponse.prototype);
  SavedHttpResponse.prototype.constructor = SavedHttpResponse;
  UnsupportedContentTypeException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentTypeException.prototype.constructor = UnsupportedContentTypeException;
  UnsupportedUpgradeProtocolException.prototype = Object.create(IllegalArgumentException.prototype);
  UnsupportedUpgradeProtocolException.prototype.constructor = UnsupportedUpgradeProtocolException;
  ObservableContent.prototype = Object.create(OutgoingContent$ReadChannelContent.prototype);
  ObservableContent.prototype.constructor = ObservableContent;
  ClientEngineClosedException.prototype = Object.create(IllegalStateException.prototype);
  ClientEngineClosedException.prototype.constructor = ClientEngineClosedException;
  ProxyType.prototype = Object.create(Enum.prototype);
  ProxyType.prototype.constructor = ProxyType;
  ResponseException.prototype = Object.create(IllegalStateException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  RedirectResponseException.prototype = Object.create(ResponseException.prototype);
  RedirectResponseException.prototype.constructor = RedirectResponseException;
  ServerResponseException.prototype = Object.create(ResponseException.prototype);
  ServerResponseException.prototype.constructor = ServerResponseException;
  ClientRequestException.prototype = Object.create(ResponseException.prototype);
  ClientRequestException.prototype.constructor = ClientRequestException;
  defaultTransformers$lambda$ObjectLiteral.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  defaultTransformers$lambda$ObjectLiteral.prototype.constructor = defaultTransformers$lambda$ObjectLiteral;
  defaultTransformers$lambda$ObjectLiteral_0.prototype = Object.create(OutgoingContent$ReadChannelContent.prototype);
  defaultTransformers$lambda$ObjectLiteral_0.prototype.constructor = defaultTransformers$lambda$ObjectLiteral_0;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  HttpRequestTimeoutException.prototype = Object.create(IOException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  InvalidCacheStateException.prototype = Object.create(IllegalStateException.prototype);
  InvalidCacheStateException.prototype.constructor = InvalidCacheStateException;
  DisabledCacheStorage.prototype = Object.create(HttpCacheStorage.prototype);
  DisabledCacheStorage.prototype.constructor = DisabledCacheStorage;
  UnlimitedCacheStorage.prototype = Object.create(HttpCacheStorage.prototype);
  UnlimitedCacheStorage.prototype.constructor = UnlimitedCacheStorage;
  DelegatedCall.prototype = Object.create(HttpClientCall.prototype);
  DelegatedCall.prototype.constructor = DelegatedCall;
  DelegatedResponse.prototype = Object.create(HttpResponse.prototype);
  DelegatedResponse.prototype.constructor = DelegatedResponse;
  ClientUpgradeContent.prototype = Object.create(OutgoingContent$NoContent.prototype);
  ClientUpgradeContent.prototype.constructor = ClientUpgradeContent;
  WebSocketContent.prototype = Object.create(ClientUpgradeContent.prototype);
  WebSocketContent.prototype.constructor = WebSocketContent;
  WebSocketException.prototype = Object.create(IllegalStateException.prototype);
  WebSocketException.prototype.constructor = WebSocketException;
  HttpRequestPipeline.prototype = Object.create(Pipeline.prototype);
  HttpRequestPipeline.prototype.constructor = HttpRequestPipeline;
  HttpSendPipeline.prototype = Object.create(Pipeline.prototype);
  HttpSendPipeline.prototype.constructor = HttpSendPipeline;
  FormDataContent.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  FormDataContent.prototype.constructor = FormDataContent;
  MultiPartFormDataContent.prototype = Object.create(OutgoingContent$WriteChannelContent.prototype);
  MultiPartFormDataContent.prototype.constructor = MultiPartFormDataContent;
  PreparedPart$InputPart.prototype = Object.create(PreparedPart.prototype);
  PreparedPart$InputPart.prototype.constructor = PreparedPart$InputPart;
  PreparedPart$ChannelPart.prototype = Object.create(PreparedPart.prototype);
  PreparedPart$ChannelPart.prototype.constructor = PreparedPart$ChannelPart;
  DefaultHttpResponse.prototype = Object.create(HttpResponse.prototype);
  DefaultHttpResponse.prototype.constructor = DefaultHttpResponse;
  HttpResponsePipeline.prototype = Object.create(Pipeline.prototype);
  HttpResponsePipeline.prototype.constructor = HttpResponsePipeline;
  HttpReceivePipeline.prototype = Object.create(Pipeline.prototype);
  HttpReceivePipeline.prototype.constructor = HttpReceivePipeline;
  EmptyContent.prototype = Object.create(OutgoingContent$NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  wrapHeaders$ObjectLiteral.prototype = Object.create(OutgoingContent$NoContent.prototype);
  wrapHeaders$ObjectLiteral.prototype.constructor = wrapHeaders$ObjectLiteral;
  wrapHeaders$ObjectLiteral_0.prototype = Object.create(OutgoingContent$ReadChannelContent.prototype);
  wrapHeaders$ObjectLiteral_0.prototype.constructor = wrapHeaders$ObjectLiteral_0;
  wrapHeaders$ObjectLiteral_1.prototype = Object.create(OutgoingContent$WriteChannelContent.prototype);
  wrapHeaders$ObjectLiteral_1.prototype.constructor = wrapHeaders$ObjectLiteral_1;
  wrapHeaders$ObjectLiteral_2.prototype = Object.create(OutgoingContent$ByteArrayContent.prototype);
  wrapHeaders$ObjectLiteral_2.prototype.constructor = wrapHeaders$ObjectLiteral_2;
  wrapHeaders$ObjectLiteral_3.prototype = Object.create(OutgoingContent$ProtocolUpgrade.prototype);
  wrapHeaders$ObjectLiteral_3.prototype.constructor = wrapHeaders$ObjectLiteral_3;
  JsClientEngine.prototype = Object.create(HttpClientEngineBase.prototype);
  JsClientEngine.prototype.constructor = JsClientEngine;
  JsError.prototype = Object.create(Throwable.prototype);
  JsError.prototype.constructor = JsError;
  ConnectTimeoutException_1.prototype = Object.create(IOException.prototype);
  ConnectTimeoutException_1.prototype.constructor = ConnectTimeoutException_1;
  SocketTimeoutException_0.prototype = Object.create(IOException.prototype);
  SocketTimeoutException_0.prototype.constructor = SocketTimeoutException_0;
  function HttpClient$lambda($receiver) {
    return Unit;
  }
  function HttpClient$lambda_0(closure$engine) {
    return function (it) {
      closure$engine.close();
      return Unit;
    };
  }
  function HttpClient(engineFactory, block) {
    if (block === void 0)
      block = HttpClient$lambda;
    var $receiver = new HttpClientConfig();
    block($receiver);
    var config = $receiver;
    var engine = engineFactory.create_dxyxif$(config.engineConfig_8be2vx$);
    var client = HttpClient_init(engine, config, true);
    ensureNotNull(client.coroutineContext.get_j3r2sn$(Job.Key)).invokeOnCompletion_f05bi3$(HttpClient$lambda_0(engine));
    return client;
  }
  function HttpClient_0(engine, block) {
    var $receiver = new HttpClientConfig();
    block($receiver);
    return HttpClient_init(engine, $receiver, false);
  }
  function HttpClient_1(engine, userConfig) {
    if (userConfig === void 0)
      userConfig = new HttpClientConfig();
    this.engine = engine;
    this.userConfig_0 = userConfig;
    this.manageEngine_0 = false;
    this.closed_0 = atomic(false);
    this.clientJob_0 = Job_0(this.engine.coroutineContext.get_j3r2sn$(Job.Key));
    this.coroutineContext_94yqr5$_0 = this.engine.coroutineContext.plus_1fupul$(this.clientJob_0);
    this.requestPipeline = new HttpRequestPipeline(this.userConfig_0.developmentMode);
    this.responsePipeline = new HttpResponsePipeline(this.userConfig_0.developmentMode);
    this.sendPipeline = new HttpSendPipeline(this.userConfig_0.developmentMode);
    this.receivePipeline = new HttpReceivePipeline(this.userConfig_0.developmentMode);
    this.attributes = Attributes(true);
    this.engineConfig = this.engine.config;
    this.monitor = new Events();
    this.config_8be2vx$ = new HttpClientConfig();
    if (this.manageEngine_0) {
      this.clientJob_0.invokeOnCompletion_f05bi3$(HttpClient_init$lambda(this));
    }
    this.engine.install_k5i6f8$(this);
    this.sendPipeline.intercept_h71y74$(HttpSendPipeline$Phases_getInstance().Receive, HttpClient_init$lambda_0(this));
    var $receiver = this.userConfig_0;
    this.config_8be2vx$.install_dq2y33$(HttpRequestLifecycle$Plugin_getInstance());
    this.config_8be2vx$.install_dq2y33$(BodyProgress$Plugin_getInstance());
    if ($receiver.useDefaultTransformers) {
      this.config_8be2vx$.install_q2ual$('DefaultTransformers', HttpClient_init$lambda$lambda);
    }
    this.config_8be2vx$.install_dq2y33$(HttpSend$Plugin_getInstance());
    this.config_8be2vx$.install_dq2y33$(HttpCallValidator$Companion_getInstance());
    if ($receiver.followRedirects) {
      this.config_8be2vx$.install_dq2y33$(HttpRedirect$Plugin_getInstance());
    }
    this.config_8be2vx$.plusAssign_bi476h$($receiver);
    if ($receiver.useDefaultTransformers) {
      this.config_8be2vx$.install_dq2y33$(HttpPlainText$Plugin_getInstance());
    }
    addDefaultResponseValidation(this.config_8be2vx$);
    this.config_8be2vx$.install_k5i6f8$(this);
    this.responsePipeline.intercept_h71y74$(HttpResponsePipeline$Phases_getInstance().Receive, HttpClient_init$lambda_1(this));
  }
  Object.defineProperty(HttpClient_1.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_94yqr5$_0;
    }
  });
  function Coroutine$execute_jc2hdt$($this, builder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$builder = builder_0;
  }
  Coroutine$execute_jc2hdt$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_jc2hdt$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_jc2hdt$.prototype.constructor = Coroutine$execute_jc2hdt$;
  Coroutine$execute_jc2hdt$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.$this.monitor.raise_asioqi$(HttpRequestCreated, this.local$builder);
            this.state_0 = 2;
            this.result_0 = this.$this.requestPipeline.execute_8pmvt0$(this.local$builder, this.local$builder.body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Kotlin.isType(tmp$ = this.result_0, HttpClientCall) ? tmp$ : throwCCE();
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
  HttpClient_1.prototype.execute_jc2hdt$ = function (builder_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_jc2hdt$(this, builder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpClient_1.prototype.isSupported_tlxpog$ = function (capability) {
    return this.engine.supportedCapabilities.contains_11rb$(capability);
  };
  HttpClient_1.prototype.config_f0veat$ = function (block) {
    var tmp$ = this.engine;
    var $receiver = new HttpClientConfig();
    $receiver.plusAssign_bi476h$(this.userConfig_0);
    block($receiver);
    return HttpClient_init(tmp$, $receiver, this.manageEngine_0);
  };
  HttpClient_1.prototype.close = function () {
    var success = this.closed_0.atomicfu$compareAndSet(false, true);
    if (!success)
      return;
    var installedFeatures = this.attributes.get_yzaw86$(PLUGIN_INSTALLED_LIST);
    var tmp$;
    tmp$ = installedFeatures.allKeys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var plugin = installedFeatures.get_yzaw86$(Kotlin.isType(tmp$_0 = element, AttributeKey) ? tmp$_0 : throwCCE());
      if (Kotlin.isType(plugin, Closeable)) {
        plugin.close();
      }
    }
    this.clientJob_0.complete();
    if (this.manageEngine_0) {
      this.engine.close();
    }
  };
  HttpClient_1.prototype.toString = function () {
    return 'HttpClient[' + this.engine + ']';
  };
  function HttpClient_init$lambda(this$HttpClient) {
    return function (it) {
      if (it != null) {
        cancel(this$HttpClient.engine);
      }
      return Unit;
    };
  }
  function Coroutine$HttpClient_init$lambda(this$HttpClient_0, $receiver_0, call_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HttpClient = this$HttpClient_0;
    this.local$$receiver = $receiver_0;
    this.local$call = call_0;
  }
  Coroutine$HttpClient_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpClient_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpClient_init$lambda.prototype.constructor = Coroutine$HttpClient_init$lambda;
  Coroutine$HttpClient_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!Kotlin.isType(this.local$call, HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + this.local$call.toString() + '(' + Kotlin.getKClassFromExpression(this.local$call) + ').';
              throw IllegalStateException_init(message.toString());
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$HttpClient.receivePipeline.execute_8pmvt0$(Unit, this.local$call.response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            this.local$call.setResponse_5mhyb0$(response);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$call, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function HttpClient_init$lambda_0(this$HttpClient_0) {
    return function ($receiver_0, call_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpClient_init$lambda(this$HttpClient_0, $receiver_0, call_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function HttpClient_init$lambda$lambda($receiver) {
    defaultTransformers($receiver);
    return Unit;
  }
  function Coroutine$HttpClient_init$lambda_0(this$HttpClient_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$this$HttpClient = this$HttpClient_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpClient_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpClient_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpClient_init$lambda_0.prototype.constructor = Coroutine$HttpClient_init$lambda_0;
  Coroutine$HttpClient_init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.proceed(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 4;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$this$HttpClient.monitor.raise_asioqi$(HttpResponseReceiveFailed, new HttpResponseReceiveFail(this.local$$receiver.context.response, cause));
              throw cause;
            } else
              throw cause;
          case 3:
            return;
          case 4:
            throw this.exception_0;
          default:
            this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpClient_init$lambda_1(this$HttpClient_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpClient_init$lambda_0(this$HttpClient_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpClient_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClient',
    interfaces: [Closeable, CoroutineScope]
  };
  function HttpClient_init(engine, userConfig, manageEngine, $this) {
    $this = $this || Object.create(HttpClient_1.prototype);
    HttpClient_1.call($this, engine, userConfig);
    $this.manageEngine_0 = manageEngine;
    return $this;
  }
  function HttpClientConfig() {
    this.plugins_0 = LinkedHashMap_init();
    this.pluginConfigurations_0 = LinkedHashMap_init();
    this.customInterceptors_0 = LinkedHashMap_init();
    this.engineConfig_8be2vx$ = HttpClientConfig$engineConfig$lambda;
    this.followRedirects = true;
    this.useDefaultTransformers = true;
    this.expectSuccess = false;
    this.developmentMode = util.PlatformUtils.IS_DEVELOPMENT_MODE;
  }
  function HttpClientConfig$engine$lambda(closure$oldConfig, closure$block) {
    return function ($receiver) {
      closure$oldConfig($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  HttpClientConfig.prototype.engine_dxyxif$ = function (block) {
    var oldConfig = this.engineConfig_8be2vx$;
    this.engineConfig_8be2vx$ = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  function HttpClientConfig$install$lambda($receiver) {
    return Unit;
  }
  function HttpClientConfig$install$lambda_0(closure$previousConfigBlock, closure$configure) {
    return function ($receiver) {
      var tmp$;
      closure$previousConfigBlock != null ? closure$previousConfigBlock($receiver) : null;
      closure$configure(Kotlin.isType(tmp$ = $receiver, Any) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes(true);
  }
  function HttpClientConfig$install$lambda_1(closure$plugin) {
    return function (scope) {
      var attributes = scope.attributes.computeIfAbsent_u4q9l2$(PLUGIN_INSTALLED_LIST, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.config_8be2vx$.pluginConfigurations_0.get_11rb$(closure$plugin.key));
      var pluginData = closure$plugin.prepare_oh3mgy$(config);
      closure$plugin.install_wojrb5$(pluginData, scope);
      attributes.put_uuntuo$(closure$plugin.key, pluginData);
      return Unit;
    };
  }
  HttpClientConfig.prototype.install_dq2y33$ = function (plugin, configure) {
    if (configure === void 0)
      configure = HttpClientConfig$install$lambda;
    var previousConfigBlock = this.pluginConfigurations_0.get_11rb$(plugin.key);
    var $receiver = this.pluginConfigurations_0;
    var key = plugin.key;
    $receiver.put_xwzc9p$(key, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.plugins_0.containsKey_11rb$(plugin.key))
      return;
    var $receiver_0 = this.plugins_0;
    var key_0 = plugin.key;
    $receiver_0.put_xwzc9p$(key_0, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.install_q2ual$ = function (key, block) {
    this.customInterceptors_0.put_xwzc9p$(key, block);
  };
  HttpClientConfig.prototype.install_k5i6f8$ = function (client) {
    var tmp$;
    tmp$ = this.plugins_0.values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(client);
    }
    var tmp$_0;
    tmp$_0 = this.customInterceptors_0.values.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0(client);
    }
  };
  HttpClientConfig.prototype.clone = function () {
    var result = new HttpClientConfig();
    result.plusAssign_bi476h$(this);
    return result;
  };
  HttpClientConfig.prototype.plusAssign_bi476h$ = function (other) {
    this.followRedirects = other.followRedirects;
    this.useDefaultTransformers = other.useDefaultTransformers;
    this.expectSuccess = other.expectSuccess;
    var $receiver = this.plugins_0;
    var map = other.plugins_0;
    $receiver.putAll_a2k3zr$(map);
    var $receiver_0 = this.pluginConfigurations_0;
    var map_0 = other.pluginConfigurations_0;
    $receiver_0.putAll_a2k3zr$(map_0);
    var $receiver_1 = this.customInterceptors_0;
    var map_1 = other.customInterceptors_0;
    $receiver_1.putAll_a2k3zr$(map_1);
  };
  function HttpClientConfig$engineConfig$lambda($receiver) {
    return Unit;
  }
  HttpClientConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientConfig',
    interfaces: []
  };
  function receive(T_0, isT, $receiver, continuation) {
    throw IllegalStateException_init('Use `body` method instead'.toString());
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.call.receive_8ov3cv$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, $receiver, continuation) {
      throw IllegalStateException_init('Use `body` method instead'.toString());
    };
  }));
  function receive_0(T_0, isT, $receiver, continuation) {
    throw IllegalStateException_init('Use `body` method instead'.toString());
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.call.receive_5sqbag$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, $receiver, continuation) {
      throw IllegalStateException_init('Use `body` method instead'.toString());
    };
  }));
  function receive_1($receiver, info, continuation) {
    throw IllegalStateException_init('Use `body` method instead'.toString());
  }
  function HttpClientCall(client) {
    HttpClientCall$Companion_getInstance();
    this.client = client;
    this.received_8b75r7$_0 = atomic(false);
    this.request_vta333$_0 = this.request_vta333$_0;
    this.response_zcvbsz$_0 = this.response_zcvbsz$_0;
    this.allowDoubleReceive_c2ese3$_0 = false;
  }
  Object.defineProperty(HttpClientCall.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.response.coroutineContext;
    }
  });
  Object.defineProperty(HttpClientCall.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this.request.attributes;
    }
  });
  Object.defineProperty(HttpClientCall.prototype, 'request', {
    configurable: true,
    get: function () {
      if (this.request_vta333$_0 == null)
        return throwUPAE('request');
      return this.request_vta333$_0;
    },
    set: function (request) {
      this.request_vta333$_0 = request;
    }
  });
  Object.defineProperty(HttpClientCall.prototype, 'response', {
    configurable: true,
    get: function () {
      if (this.response_zcvbsz$_0 == null)
        return throwUPAE('response');
      return this.response_zcvbsz$_0;
    },
    set: function (response) {
      this.response_zcvbsz$_0 = response;
    }
  });
  Object.defineProperty(HttpClientCall.prototype, 'allowDoubleReceive', {
    configurable: true,
    get: function () {
      return this.allowDoubleReceive_c2ese3$_0;
    }
  });
  HttpClientCall.prototype.getResponseContent = function (continuation) {
    return this.response.content;
  };
  function Coroutine$body_qi9ur9$($this, info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$info = info_0;
  }
  Coroutine$body_qi9ur9$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$body_qi9ur9$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$body_qi9ur9$.prototype.constructor = Coroutine$body_qi9ur9$;
  Coroutine$body_qi9ur9$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 1;
            if (instanceOf(this.$this.response, this.local$info.type)) {
              this.exceptionState_0 = 9;
              this.finallyPath_0 = [2];
              this.state_0 = 8;
              this.$returnValue = this.$this.response;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            this.finallyPath_0 = [9];
            this.exceptionState_0 = 8;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              cancel_0(this.$this.response, 'Receive failed', cause);
              throw cause;
            } else
              throw cause;
          case 2:
            return this.$returnValue;
          case 3:
            if (!this.$this.allowDoubleReceive && !this.$this.received_8b75r7$_0.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.$this);
            }

            this.local$tmp$ = this.$this.attributes.getOrNull_yzaw86$(HttpClientCall$Companion_getInstance().CustomResponse);
            if (this.local$tmp$ == null) {
              this.state_0 = 4;
              this.result_0 = this.$this.getResponseContent(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            var responseData = this.local$tmp$;
            var subject = new HttpResponseContainer(this.local$info, responseData);
            this.state_0 = 6;
            this.result_0 = this.$this.client.responsePipeline.execute_8pmvt0$(this.$this, subject, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var result = this.result_0.response;
            if (!instanceOf(result, this.local$info.type)) {
              var from = Kotlin.getKClassFromExpression(result);
              var to = this.local$info.type;
              throw new NoTransformationFoundException(this.$this.response, from, to);
            }

            this.exceptionState_0 = 9;
            this.finallyPath_0 = [7];
            this.state_0 = 8;
            this.$returnValue = result;
            continue;
          case 7:
            return this.$returnValue;
          case 8:
            this.exceptionState_0 = 9;
            complete(this.$this.response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          case 10:
            return;
          default:
            this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 9) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpClientCall.prototype.body_qi9ur9$ = function (info_0, continuation_0, suspended) {
    var instance = new Coroutine$body_qi9ur9$(this, info_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.request.url + ', ' + this.response.status + ']';
  };
  HttpClientCall.prototype.setResponse_5mhyb0$ = function (response) {
    this.response = response;
  };
  HttpClientCall.prototype.setRequest_mosvwc$ = function (request) {
    this.request = request;
  };
  function HttpClientCall$Companion() {
    HttpClientCall$Companion_instance = this;
    this.CustomResponse = new AttributeKey('CustomResponse');
  }
  HttpClientCall$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpClientCall$Companion_instance = null;
  function HttpClientCall$Companion_getInstance() {
    if (HttpClientCall$Companion_instance === null) {
      new HttpClientCall$Companion();
    }
    return HttpClientCall$Companion_instance;
  }
  HttpClientCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientCall',
    interfaces: [CoroutineScope]
  };
  function HttpClientCall_init(client, requestData, responseData, $this) {
    $this = $this || Object.create(HttpClientCall.prototype);
    HttpClientCall.call($this, client);
    $this.request = new DefaultHttpRequest($this, requestData);
    $this.response = new DefaultHttpResponse($this, responseData);
    if (!Kotlin.isType(responseData.body, ByteReadChannel)) {
      $this.attributes.put_uuntuo$(HttpClientCall$Companion_getInstance().CustomResponse, responseData.body);
    }
    return $this;
  }
  function Coroutine$body(T_0_0, isT_0, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$body.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$body.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$body.prototype.constructor = Coroutine$body;
  Coroutine$body.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
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
            this.result_0 = this.local$$receiver.body_qi9ur9$(typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), this);
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
  function body(T_0_0, isT_0, $receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$body(T_0_0, isT_0, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.call.body_8ov3cv$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, continuation) {
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
      Kotlin.suspendCall($receiver.body_qi9ur9$(typeInfoImpl(tmp$_2, tmp$_0_1, tryGetType$result_0), Kotlin.coroutineReceiver()));
      return isT(tmp$_1 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_1 : throwCCE();
    };
  }));
  function Coroutine$body_0(T_0_0, isT_0, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$body_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$body_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$body_0.prototype.constructor = Coroutine$body_0;
  Coroutine$body_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_2;
            var tmp$_3 = this.local$$receiver.call;
            var tmp$_4 = reflect.JsType;
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
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$isT(tmp$_2 = this.result_0) ? tmp$_2 : throwCCE();
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
  function body_0(T_0_0, isT_0, $receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$body_0(T_0_0, isT_0, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.call.body_5sqbag$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_2;
      var tmp$_3 = $receiver.call;
      var tmp$_4 = reflect.JsType;
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
      Kotlin.suspendCall(tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), Kotlin.coroutineReceiver()));
      return isT(tmp$_2 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_2 : throwCCE();
    };
  }));
  function Coroutine$body_1($receiver_0, typeInfo_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$typeInfo = typeInfo_0;
  }
  Coroutine$body_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$body_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$body_1.prototype.constructor = Coroutine$body_1;
  Coroutine$body_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.call.body_qi9ur9$(this.local$typeInfo, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
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
  function body_1($receiver_0, typeInfo_0, continuation_0, suspended) {
    var instance = new Coroutine$body_1($receiver_0, typeInfo_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function DoubleReceiveException(call) {
    IllegalStateException_init_0(this);
    this.name = 'DoubleReceiveException';
    this.message_eo7lbx$_0 = 'Response already received: ' + call;
  }
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.message_eo7lbx$_0;
    }
  });
  DoubleReceiveException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleReceiveException',
    interfaces: [IllegalStateException]
  };
  function ReceivePipelineException(request, info, cause) {
    IllegalStateException_init('Fail to run receive pipeline: ' + cause, this);
    this.request = request;
    this.info = info;
    this.cause_xlcv2q$_0 = cause;
    this.name = 'ReceivePipelineException';
  }
  Object.defineProperty(ReceivePipelineException.prototype, 'cause', {
    get: function () {
      return this.cause_xlcv2q$_0;
    }
  });
  ReceivePipelineException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReceivePipelineException',
    interfaces: [IllegalStateException]
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init(this);
    this.name = 'NoTransformationFoundException';
    this.message_gd84kd$_0 = trimMargin('No transformation found: ' + from + ' -> ' + to + '\n' + '        |with response from ' + get_request(response).url + ':' + '\n' + '        |status: ' + response.status + '\n' + '        |response headers: ' + '\n' + '        |' + joinToString(flattenEntries(response.headers), void 0, void 0, void 0, void 0, void 0, NoTransformationFoundException$message$lambda) + '\n' + '    ');
  }
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.message_gd84kd$_0;
    }
  });
  function NoTransformationFoundException$message$lambda(f) {
    var key = f.component1()
    , value = f.component2();
    return key + ': ' + value + '\n';
  }
  NoTransformationFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoTransformationFoundException',
    interfaces: [UnsupportedOperationException]
  };
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.responseBody_0 = responseBody;
    this.request = new SavedHttpRequest(this, request);
    this.response = new SavedHttpResponse(this, this.responseBody_0, response);
    this.allowDoubleReceive_je4pft$_0 = true;
  }
  SavedHttpCall.prototype.getResponseContent = function (continuation) {
    return ByteReadChannel_0(this.responseBody_0);
  };
  Object.defineProperty(SavedHttpCall.prototype, 'allowDoubleReceive', {
    configurable: true,
    get: function () {
      return this.allowDoubleReceive_je4pft$_0;
    }
  });
  SavedHttpCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavedHttpCall',
    interfaces: [HttpClientCall]
  };
  function SavedHttpRequest(call, origin) {
    this.call_k7cxor$_0 = call;
    this.$delegate_k8mkjd$_0 = origin;
  }
  Object.defineProperty(SavedHttpRequest.prototype, 'call', {
    get: function () {
      return this.call_k7cxor$_0;
    }
  });
  Object.defineProperty(SavedHttpRequest.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this.$delegate_k8mkjd$_0.attributes;
    }
  });
  Object.defineProperty(SavedHttpRequest.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.$delegate_k8mkjd$_0.content;
    }
  });
  Object.defineProperty(SavedHttpRequest.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.$delegate_k8mkjd$_0.coroutineContext;
    }
  });
  Object.defineProperty(SavedHttpRequest.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.$delegate_k8mkjd$_0.headers;
    }
  });
  Object.defineProperty(SavedHttpRequest.prototype, 'method', {
    configurable: true,
    get: function () {
      return this.$delegate_k8mkjd$_0.method;
    }
  });
  Object.defineProperty(SavedHttpRequest.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.$delegate_k8mkjd$_0.url;
    }
  });
  SavedHttpRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavedHttpRequest',
    interfaces: [HttpRequest_0]
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.call_tbj7t5$_0 = call;
    this.context_0 = Job_0();
    this.status_i2dvkt$_0 = origin.status;
    this.version_ol3l9j$_0 = origin.version;
    this.requestTime_3msfjx$_0 = origin.requestTime;
    this.responseTime_xhbsdj$_0 = origin.responseTime;
    this.headers_w25qx3$_0 = origin.headers;
    this.coroutineContext_pwmz9e$_0 = origin.coroutineContext.plus_1fupul$(this.context_0);
    this.content_mzxkbe$_0 = ByteReadChannel_0(body);
  }
  Object.defineProperty(SavedHttpResponse.prototype, 'call', {
    get: function () {
      return this.call_tbj7t5$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.status_i2dvkt$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'version', {
    configurable: true,
    get: function () {
      return this.version_ol3l9j$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'requestTime', {
    configurable: true,
    get: function () {
      return this.requestTime_3msfjx$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'responseTime', {
    configurable: true,
    get: function () {
      return this.responseTime_xhbsdj$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_w25qx3$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_pwmz9e$_0;
    }
  });
  Object.defineProperty(SavedHttpResponse.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_mzxkbe$_0;
    }
  });
  SavedHttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SavedHttpResponse',
    interfaces: [HttpResponse]
  };
  function Coroutine$save($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$save.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$save.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$save.prototype.constructor = Coroutine$save;
  Coroutine$save.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.response.content.readRemaining_s8cxhz$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var responseBody = readBytes(this.result_0);
            return new SavedHttpCall(this.local$$receiver.client, this.local$$receiver.request, this.local$$receiver.response, responseBody);
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
  function save($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$save($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init('Failed to write body: ' + Kotlin.getKClassFromExpression(content), this);
    this.name = 'UnsupportedContentTypeException';
  }
  UnsupportedContentTypeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnsupportedContentTypeException',
    interfaces: [IllegalStateException]
  };
  function UnsupportedUpgradeProtocolException(url) {
    IllegalArgumentException_init('Unsupported upgrade protocol exception: ' + url, this);
    this.name = 'UnsupportedUpgradeProtocolException';
  }
  UnsupportedUpgradeProtocolException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnsupportedUpgradeProtocolException',
    interfaces: [IllegalArgumentException]
  };
  function ObservableContent(delegate, callContext, listener) {
    OutgoingContent$ReadChannelContent.call(this);
    this.callContext_0 = callContext;
    this.listener_0 = listener;
    var tmp$;
    if (Kotlin.isType(delegate, OutgoingContent$ByteArrayContent))
      tmp$ = ByteReadChannel_0(delegate.bytes());
    else if (Kotlin.isType(delegate, OutgoingContent$ProtocolUpgrade))
      throw new UnsupportedContentTypeException(delegate);
    else if (Kotlin.isType(delegate, OutgoingContent$NoContent))
      tmp$ = ByteReadChannel.Companion.Empty;
    else if (Kotlin.isType(delegate, OutgoingContent$ReadChannelContent))
      tmp$ = delegate.readFrom();
    else if (Kotlin.isType(delegate, OutgoingContent$WriteChannelContent))
      tmp$ = writer(coroutines.GlobalScope, this.callContext_0, true, ObservableContent$content$lambda(delegate)).channel;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    this.content_0 = tmp$;
    this.delegate_0 = delegate;
  }
  Object.defineProperty(ObservableContent.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.delegate_0.contentType;
    }
  });
  Object.defineProperty(ObservableContent.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.delegate_0.contentLength;
    }
  });
  Object.defineProperty(ObservableContent.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.delegate_0.status;
    }
  });
  Object.defineProperty(ObservableContent.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.delegate_0.headers;
    }
  });
  ObservableContent.prototype.getProperty_yzaw86$ = function (key) {
    return this.delegate_0.getProperty_yzaw86$(key);
  };
  ObservableContent.prototype.setProperty_uuntuo$ = function (key, value) {
    this.delegate_0.setProperty_uuntuo$(key, value);
  };
  ObservableContent.prototype.readFrom = function () {
    return observable(this.content_0, this.callContext_0, this.contentLength, this.listener_0);
  };
  function Coroutine$ObservableContent$content$lambda(closure$delegate_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$delegate = closure$delegate_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ObservableContent$content$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ObservableContent$content$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ObservableContent$content$lambda.prototype.constructor = Coroutine$ObservableContent$content$lambda;
  Coroutine$ObservableContent$content$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$delegate.writeTo_h3x4ir$(this.local$$receiver.channel, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function ObservableContent$content$lambda(closure$delegate_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ObservableContent$content$lambda(closure$delegate_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ObservableContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObservableContent',
    interfaces: [OutgoingContent$ReadChannelContent]
  };
  function attachToUserJob$lambda(closure$callJob) {
    return function (cause) {
      if (cause == null)
        return;
      closure$callJob.cancel_x5z25k$(CancellationException_init(cause.message));
      return Unit;
    };
  }
  function attachToUserJob$lambda_0(closure$cleanupHandler) {
    return function (it) {
      closure$cleanupHandler.dispose();
      return Unit;
    };
  }
  var CALL_COROUTINE;
  var CLIENT_CONFIG;
  function HttpClientEngine() {
  }
  Object.defineProperty(HttpClientEngine.prototype, 'supportedCapabilities', {
    configurable: true,
    get: function () {
      return emptySet();
    }
  });
  Object.defineProperty(HttpClientEngine.prototype, 'closed_yj5g8o$_0', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      return !((tmp$_0 = (tmp$ = this.coroutineContext.get_j3r2sn$(Job.Key)) != null ? tmp$.isActive : null) != null ? tmp$_0 : false);
    }
  });
  function HttpClientEngine$install$lambda$lambda(closure$client, closure$response) {
    return function (it) {
      if (it != null) {
        closure$client.monitor.raise_asioqi$(HttpResponseCancelled, closure$response);
      }
      return Unit;
    };
  }
  function Coroutine$HttpClientEngine$install$lambda(closure$client_0, this$HttpClientEngine_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$client = closure$client_0;
    this.local$this$HttpClientEngine = this$HttpClientEngine_0;
    this.local$requestData = void 0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpClientEngine$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpClientEngine$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpClientEngine$install$lambda.prototype.constructor = Coroutine$HttpClientEngine$install$lambda;
  Coroutine$HttpClientEngine$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new HttpRequestBuilder();
            $receiver.takeFromWithExecutionContext_s9rlw$(this.local$$receiver.context);
            if (this.local$content == null) {
              $receiver.body = package$utils.EmptyContent;
              $receiver.bodyType = null;
            } else if (Kotlin.isType(this.local$content, OutgoingContent)) {
              $receiver.body = this.local$content;
              $receiver.bodyType = null;
            } else {
              $receiver.body = this.local$content;
              var tmp$ = reflect.JsType;
              var tmp$_0 = PrimitiveClasses$anyClass;
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(PrimitiveClasses$anyClass, [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }

            var builder = $receiver;
            this.local$closure$client.monitor.raise_asioqi$(HttpRequestIsReadyForSending, builder);
            var $receiver_0 = builder.build();
            $receiver_0.attributes.put_uuntuo$(CLIENT_CONFIG, this.local$closure$client.config_8be2vx$);
            this.local$requestData = $receiver_0;
            validateHeaders(this.local$requestData);
            this.local$this$HttpClientEngine.checkExtensions_1320zn$_0(this.local$requestData);
            this.state_0 = 2;
            this.result_0 = this.local$this$HttpClientEngine.executeWithinCallContext_2kaaho$_0(this.local$requestData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var responseData = this.result_0;
            var call = HttpClientCall_init(this.local$closure$client, this.local$requestData, responseData);
            var response = call.response;
            this.local$closure$client.monitor.raise_asioqi$(HttpResponseReceived, response);
            get_job(response.coroutineContext).invokeOnCompletion_f05bi3$(HttpClientEngine$install$lambda$lambda(this.local$closure$client, response));
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(call, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function HttpClientEngine$install$lambda(closure$client_0, this$HttpClientEngine_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpClientEngine$install$lambda(closure$client_0, this$HttpClientEngine_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpClientEngine.prototype.install_k5i6f8$ = function (client) {
    client.sendPipeline.intercept_h71y74$(HttpSendPipeline$Phases_getInstance().Engine, HttpClientEngine$install$lambda(client, this));
  };
  function Coroutine$HttpClientEngine$executeWithinCallContext$lambda(this$HttpClientEngine_0, closure$requestData_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HttpClientEngine = this$HttpClientEngine_0;
    this.local$closure$requestData = closure$requestData_0;
  }
  Coroutine$HttpClientEngine$executeWithinCallContext$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpClientEngine$executeWithinCallContext$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpClientEngine$executeWithinCallContext$lambda.prototype.constructor = Coroutine$HttpClientEngine$executeWithinCallContext$lambda;
  Coroutine$HttpClientEngine$executeWithinCallContext$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$this$HttpClientEngine.closed_yj5g8o$_0) {
              throw new ClientEngineClosedException();
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$HttpClientEngine.execute_dkgphz$(this.local$closure$requestData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function HttpClientEngine$executeWithinCallContext$lambda(this$HttpClientEngine_0, closure$requestData_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpClientEngine$executeWithinCallContext$lambda(this$HttpClientEngine_0, closure$requestData_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$executeWithinCallContext_2kaaho$_0($this, requestData_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$requestData = requestData_0;
  }
  Coroutine$executeWithinCallContext_2kaaho$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executeWithinCallContext_2kaaho$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executeWithinCallContext_2kaaho$_0.prototype.constructor = Coroutine$executeWithinCallContext_2kaaho$_0;
  Coroutine$executeWithinCallContext_2kaaho$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = createCallContext(this.$this, this.local$requestData.executionContext, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var callContext = this.result_0;
            var context = callContext.plus_1fupul$(new KtorCallContextElement(callContext));
            this.state_0 = 3;
            this.result_0 = async(this.$this, context, void 0, HttpClientEngine$executeWithinCallContext$lambda(this.$this, this.local$requestData)).await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  HttpClientEngine.prototype.executeWithinCallContext_2kaaho$_0 = function (requestData_0, continuation_0, suspended) {
    var instance = new Coroutine$executeWithinCallContext_2kaaho$_0(this, requestData_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpClientEngine.prototype.checkExtensions_1320zn$_0 = function (requestData) {
    var tmp$;
    tmp$ = requestData.requiredCapabilities_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var requestedExtension = tmp$.next();
      if (!this.supportedCapabilities.contains_11rb$(requestedExtension)) {
        var message = "Engine doesn't support " + requestedExtension;
        throw IllegalArgumentException_init(message.toString());
      }
    }
  };
  HttpClientEngine.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientEngine',
    interfaces: [Closeable, CoroutineScope]
  };
  function HttpClientEngineFactory() {
  }
  function HttpClientEngineFactory$create$lambda($receiver) {
    return Unit;
  }
  HttpClientEngineFactory.prototype.create_dxyxif$ = function (block, callback$default) {
    if (block === void 0)
      block = HttpClientEngineFactory$create$lambda;
    return callback$default ? callback$default(block) : this.create_dxyxif$$default(block);
  };
  HttpClientEngineFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientEngineFactory',
    interfaces: []
  };
  function config$ObjectLiteral(closure$parent, closure$nested) {
    this.closure$parent = closure$parent;
    this.closure$nested = closure$nested;
  }
  function config$ObjectLiteral$create$lambda(closure$nested, closure$block) {
    return function ($receiver) {
      closure$nested($receiver);
      closure$block($receiver);
      return Unit;
    };
  }
  config$ObjectLiteral.prototype.create_dxyxif$$default = function (block) {
    return this.closure$parent.create_dxyxif$(config$ObjectLiteral$create$lambda(this.closure$nested, block));
  };
  config$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HttpClientEngineFactory]
  };
  function config($receiver, nested) {
    var parent = $receiver;
    return new config$ObjectLiteral(parent, nested);
  }
  function createCallContext($receiver, parentJob, continuation) {
    var callJob = Job_0(parentJob);
    var callContext = $receiver.coroutineContext.plus_1fupul$(callJob).plus_1fupul$(CALL_COROUTINE);
    attachToUserJob$break: do {
      var tmp$;
      tmp$ = continuation.context.get_j3r2sn$(Job.Key);
      if (tmp$ == null) {
        break attachToUserJob$break;
      }
      var userJob = tmp$;
      var cleanupHandler = userJob.invokeOnCompletion_ct2b2z$(true, void 0, attachToUserJob$lambda(callJob));
      callJob.invokeOnCompletion_f05bi3$(attachToUserJob$lambda_0(cleanupHandler));
    }
     while (false);
    return callContext;
  }
  function validateHeaders(request) {
    var requestHeaders = request.headers;
    var $receiver = requestHeaders.names();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (http.HttpHeaders.UnsafeHeadersList.contains_11rb$(element))
        destination.add_11rb$(element);
    }
    var unsafeRequestHeaders = destination;
    if (!unsafeRequestHeaders.isEmpty()) {
      throw new UnsafeHeaderException(unsafeRequestHeaders.toString());
    }
  }
  function HttpClientEngineBase(engineName) {
    this.engineName_n0bloo$_0 = engineName;
    this.closed_je8r6f$_0 = atomic(false);
    this.coroutineContext_huxu0y$_0 = lazy(HttpClientEngineBase$coroutineContext$lambda(this));
  }
  Object.defineProperty(HttpClientEngineBase.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_huxu0y$_0.value;
    }
  });
  function HttpClientEngineBase$close$lambda(this$HttpClientEngineBase) {
    return function (it) {
      close_1(this$HttpClientEngineBase.dispatcher);
      return Unit;
    };
  }
  HttpClientEngineBase.prototype.close = function () {
    var tmp$, tmp$_0;
    if (!this.closed_je8r6f$_0.atomicfu$compareAndSet(false, true))
      return;
    tmp$_0 = Kotlin.isType(tmp$ = this.coroutineContext.get_j3r2sn$(Job.Key), CompletableJob) ? tmp$ : null;
    if (tmp$_0 == null) {
      return;
    }
    var requestJob = tmp$_0;
    requestJob.complete();
    requestJob.invokeOnCompletion_f05bi3$(HttpClientEngineBase$close$lambda(this));
  };
  function HttpClientEngineBase$coroutineContext$lambda(this$HttpClientEngineBase) {
    return function () {
      return SilentSupervisor().plus_1fupul$(this$HttpClientEngineBase.dispatcher).plus_1fupul$(new CoroutineName(this$HttpClientEngineBase.engineName_n0bloo$_0 + '-context'));
    };
  }
  HttpClientEngineBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientEngineBase',
    interfaces: [HttpClientEngine]
  };
  function ClientEngineClosedException(cause) {
    if (cause === void 0)
      cause = null;
    IllegalStateException_init('Client already closed', this);
    this.cause_om4vf0$_0 = cause;
    this.name = 'ClientEngineClosedException';
  }
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    get: function () {
      return this.cause_om4vf0$_0;
    }
  });
  ClientEngineClosedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientEngineClosedException',
    interfaces: [IllegalStateException]
  };
  function close_1($receiver) {
    try {
      if (Kotlin.isType($receiver, CloseableCoroutineDispatcher))
        $receiver.close();
      else if (Kotlin.isType($receiver, Closeable))
        $receiver.close();
    } catch (ignore) {
      if (!Kotlin.isType(ignore, Throwable))
        throw ignore;
    }
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientEngineCapability',
    interfaces: []
  };
  function HttpClientEngineConfig() {
    this.threadsCount = 4;
    this.pipelining = false;
    this.proxy = null;
  }
  HttpClientEngineConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpClientEngineConfig',
    interfaces: []
  };
  function ProxyType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ProxyType_initFields() {
    ProxyType_initFields = function () {
    };
    ProxyType$SOCKS_instance = new ProxyType('SOCKS', 0);
    ProxyType$HTTP_instance = new ProxyType('HTTP', 1);
    ProxyType$UNKNOWN_instance = new ProxyType('UNKNOWN', 2);
  }
  var ProxyType$SOCKS_instance;
  function ProxyType$SOCKS_getInstance() {
    ProxyType_initFields();
    return ProxyType$SOCKS_instance;
  }
  var ProxyType$HTTP_instance;
  function ProxyType$HTTP_getInstance() {
    ProxyType_initFields();
    return ProxyType$HTTP_instance;
  }
  var ProxyType$UNKNOWN_instance;
  function ProxyType$UNKNOWN_getInstance() {
    ProxyType_initFields();
    return ProxyType$UNKNOWN_instance;
  }
  ProxyType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProxyType',
    interfaces: [Enum]
  };
  function ProxyType$values() {
    return [ProxyType$SOCKS_getInstance(), ProxyType$HTTP_getInstance(), ProxyType$UNKNOWN_getInstance()];
  }
  ProxyType.values = ProxyType$values;
  function ProxyType$valueOf(name) {
    switch (name) {
      case 'SOCKS':
        return ProxyType$SOCKS_getInstance();
      case 'HTTP':
        return ProxyType$HTTP_getInstance();
      case 'UNKNOWN':
        return ProxyType$UNKNOWN_getInstance();
      default:
        throwISE('No enum constant io.ktor.client.engine.ProxyType.' + name);
    }
  }
  ProxyType.valueOf_61zpoe$ = ProxyType$valueOf;
  function http_0($receiver, urlString) {
    return $receiver.http_dxu3lv$(Url(urlString));
  }
  function attachToUserJob$lambda_1(closure$callJob) {
    return function (cause) {
      if (cause == null)
        return;
      closure$callJob.cancel_x5z25k$(CancellationException_init(cause.message));
      return Unit;
    };
  }
  function attachToUserJob$lambda_2(closure$cleanupHandler) {
    return function (it) {
      closure$cleanupHandler.dispose();
      return Unit;
    };
  }
  var KTOR_DEFAULT_USER_AGENT;
  function mergeHeaders$lambda(closure$requestHeaders, closure$content) {
    return function ($receiver) {
      $receiver.appendAll_hb0ubp$(closure$requestHeaders);
      $receiver.appendAll_hb0ubp$(closure$content.headers);
      return Unit;
    };
  }
  function mergeHeaders$lambda_0(closure$block) {
    return function (key, values) {
      if (equals(http.HttpHeaders.ContentLength, key))
        return;
      if (equals(http.HttpHeaders.ContentType, key))
        return;
      closure$block(key, joinToString(values, ','));
      return Unit;
    };
  }
  function mergeHeaders(requestHeaders, content, block) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    buildHeaders(mergeHeaders$lambda(requestHeaders, content)).forEach_ubvtmq$(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.get_61zpoe$(http.HttpHeaders.UserAgent) == null && content.headers.get_61zpoe$(http.HttpHeaders.UserAgent) == null;
    if (missingAgent && needUserAgent()) {
      block(http.HttpHeaders.UserAgent, KTOR_DEFAULT_USER_AGENT);
    }
    var type = (tmp$_0 = (tmp$ = content.contentType) != null ? tmp$.toString() : null) != null ? tmp$_0 : content.headers.get_61zpoe$(http.HttpHeaders.ContentType);
    var length = (tmp$_2 = (tmp$_1 = content.contentLength) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : content.headers.get_61zpoe$(http.HttpHeaders.ContentLength);
    if (type != null) {
      block(http.HttpHeaders.ContentType, type);
    }
    if (length != null) {
      block(http.HttpHeaders.ContentLength, length);
    }
  }
  function callContext(continuation) {
    return ensureNotNull(continuation.context.get_j3r2sn$(KtorCallContextElement$Companion_getInstance())).callContext;
  }
  function KtorCallContextElement(callContext) {
    KtorCallContextElement$Companion_getInstance();
    this.callContext = callContext;
  }
  Object.defineProperty(KtorCallContextElement.prototype, 'key', {
    configurable: true,
    get: function () {
      return KtorCallContextElement$Companion_getInstance();
    }
  });
  function KtorCallContextElement$Companion() {
    KtorCallContextElement$Companion_instance = this;
  }
  KtorCallContextElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [CoroutineContext$Key]
  };
  var KtorCallContextElement$Companion_instance = null;
  function KtorCallContextElement$Companion_getInstance() {
    if (KtorCallContextElement$Companion_instance === null) {
      new KtorCallContextElement$Companion();
    }
    return KtorCallContextElement$Companion_instance;
  }
  KtorCallContextElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KtorCallContextElement',
    interfaces: [CoroutineContext$Element]
  };
  function attachToUserJob(callJob, continuation) {
    var tmp$_0;
    tmp$_0 = continuation.context.get_j3r2sn$(Job.Key);
    if (tmp$_0 == null) {
      return;
    }
    var userJob_0 = tmp$_0;
    var cleanupHandler_0 = userJob_0.invokeOnCompletion_ct2b2z$(true, void 0, attachToUserJob$lambda_1(callJob));
    callJob.invokeOnCompletion_f05bi3$(attachToUserJob$lambda_2(cleanupHandler_0));
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.engine.attachToUserJob_mmkme6$', wrapFunction(function () {
    var Job = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.Job;
    var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_pdl1vj$;
    var Unit = Kotlin.kotlin.Unit;
    function attachToUserJob$lambda(closure$callJob) {
      return function (cause) {
        if (cause == null)
          return;
        closure$callJob.cancel_x5z25k$(CancellationException_init(cause.message));
        return Unit;
      };
    }
    function attachToUserJob$lambda_0(closure$cleanupHandler) {
      return function (it) {
        closure$cleanupHandler.dispose();
        return Unit;
      };
    }
    return function (callJob, continuation) {
      var tmp$_0;
      tmp$_0 = Kotlin.coroutineReceiver().context.get_j3r2sn$(Job.Key);
      if (tmp$_0 == null) {
        return;
      }
      var userJob_0 = tmp$_0;
      var cleanupHandler_0 = userJob_0.invokeOnCompletion_ct2b2z$(true, void 0, attachToUserJob$lambda(callJob));
      callJob.invokeOnCompletion_f05bi3$(attachToUserJob$lambda_0(cleanupHandler_0));
    };
  }));
  function needUserAgent() {
    return !util.PlatformUtils.IS_BROWSER;
  }
  function Coroutine$mapEngineExceptions$lambda(closure$input_0, closure$replacementChannel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$input = closure$input_0;
    this.local$closure$replacementChannel = closure$replacementChannel_0;
  }
  Coroutine$mapEngineExceptions$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapEngineExceptions$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapEngineExceptions$lambda.prototype.constructor = Coroutine$mapEngineExceptions$lambda;
  Coroutine$mapEngineExceptions$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = copyAndClose(this.local$closure$input, this.local$closure$replacementChannel, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              return this.local$closure$input.cancel_dbl4no$(cause);
            } else {
              throw cause;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:
            this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mapEngineExceptions$lambda(closure$input_0, closure$replacementChannel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapEngineExceptions$lambda(closure$input_0, closure$replacementChannel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapEngineExceptions($receiver, input, request) {
    if (util.PlatformUtils.IS_NATIVE) {
      return input;
    }
    var replacementChannel = ByteChannelWithMappedExceptions(request);
    writer_0($receiver, void 0, replacementChannel, mapEngineExceptions$lambda(input, replacementChannel));
    return replacementChannel;
  }
  function Coroutine$mapEngineExceptions$lambda_0(closure$replacementChannel_0, closure$output_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$replacementChannel = closure$replacementChannel_0;
    this.local$closure$output = closure$output_0;
  }
  Coroutine$mapEngineExceptions$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapEngineExceptions$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapEngineExceptions$lambda_0.prototype.constructor = Coroutine$mapEngineExceptions$lambda_0;
  Coroutine$mapEngineExceptions$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = copyAndClose(this.local$closure$replacementChannel, this.local$closure$output, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              return this.local$closure$replacementChannel.close_dbl4no$(cause);
            } else {
              throw cause;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:
            this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function mapEngineExceptions$lambda_0(closure$replacementChannel_0, closure$output_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mapEngineExceptions$lambda_0(closure$replacementChannel_0, closure$output_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mapEngineExceptions_0($receiver, output, request) {
    if (util.PlatformUtils.IS_NATIVE) {
      return output;
    }
    var replacementChannel = ByteChannelWithMappedExceptions(request);
    writer_0($receiver, void 0, replacementChannel, mapEngineExceptions$lambda_0(replacementChannel, output));
    return replacementChannel;
  }
  var UploadProgressListenerAttributeKey;
  var DownloadProgressListenerAttributeKey;
  function BodyProgress() {
    BodyProgress$Plugin_getInstance();
  }
  function Coroutine$BodyProgress$handle$lambda($receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$BodyProgress$handle$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BodyProgress$handle$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BodyProgress$handle$lambda.prototype.constructor = Coroutine$BodyProgress$handle$lambda;
  Coroutine$BodyProgress$handle$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = this.local$$receiver.context.attributes.getOrNull_yzaw86$(UploadProgressListenerAttributeKey);
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var listener = this.local$tmp$;
            var observableContent = new ObservableContent(Kotlin.isType(tmp$ = this.local$content, OutgoingContent) ? tmp$ : throwCCE(), this.local$$receiver.context.executionContext, listener);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(observableContent, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function BodyProgress$handle$lambda($receiver_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$BodyProgress$handle$lambda($receiver_0, content_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$BodyProgress$handle$lambda_0($receiver_0, response_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$response = response_0;
  }
  Coroutine$BodyProgress$handle$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BodyProgress$handle$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BodyProgress$handle$lambda_0.prototype.constructor = Coroutine$BodyProgress$handle$lambda_0;
  Coroutine$BodyProgress$handle$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$response.call.request.attributes.getOrNull_yzaw86$(DownloadProgressListenerAttributeKey);
            if (this.local$tmp$ == null) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var listener = this.local$tmp$;
            var observableResponse = withObservableDownload(this.local$response, listener);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(observableResponse, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function BodyProgress$handle$lambda_0($receiver_0, response_0, continuation_0, suspended) {
    var instance = new Coroutine$BodyProgress$handle$lambda_0($receiver_0, response_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  BodyProgress.prototype.handle_0 = function (scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.requestPipeline.insertPhaseAfter_b9zzbm$(HttpRequestPipeline$Phases_getInstance().Render, observableContentPhase);
    scope.requestPipeline.intercept_h71y74$(observableContentPhase, BodyProgress$handle$lambda);
    scope.receivePipeline.intercept_h71y74$(HttpReceivePipeline$Phases_getInstance().After, BodyProgress$handle$lambda_0);
  };
  function BodyProgress$Plugin() {
    BodyProgress$Plugin_instance = this;
    this.key_xac8mq$_0 = new AttributeKey('BodyProgress');
  }
  Object.defineProperty(BodyProgress$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_xac8mq$_0;
    }
  });
  BodyProgress$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    return new BodyProgress();
  };
  BodyProgress$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    plugin.handle_0(scope);
  };
  BodyProgress$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var BodyProgress$Plugin_instance = null;
  function BodyProgress$Plugin_getInstance() {
    if (BodyProgress$Plugin_instance === null) {
      new BodyProgress$Plugin();
    }
    return BodyProgress$Plugin_instance;
  }
  BodyProgress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BodyProgress',
    interfaces: []
  };
  function withObservableDownload($receiver, listener) {
    var observableByteChannel = observable($receiver.content, $receiver.coroutineContext, contentLength($receiver), listener);
    return wrapWithContent_1($receiver, observableByteChannel);
  }
  function onDownload($receiver, listener) {
    if (listener == null) {
      $receiver.attributes.remove_yzaw86$(DownloadProgressListenerAttributeKey);
    } else {
      $receiver.attributes.put_uuntuo$(DownloadProgressListenerAttributeKey, listener);
    }
  }
  function onUpload($receiver, listener) {
    if (listener == null) {
      $receiver.attributes.remove_yzaw86$(UploadProgressListenerAttributeKey);
    } else {
      $receiver.attributes.put_uuntuo$(UploadProgressListenerAttributeKey, listener);
    }
  }
  function DataConversion_0() {
    DataConversion_instance = this;
    this.key_93ftbi$_0 = new AttributeKey('DataConversion');
  }
  Object.defineProperty(DataConversion_0.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_93ftbi$_0;
    }
  });
  DataConversion_0.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new DataConversion$Configuration();
    block($receiver);
    var configuration = $receiver;
    return new DataConversion(configuration);
  };
  DataConversion_0.prototype.install_wojrb5$ = function (plugin, scope) {
  };
  DataConversion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DataConversion',
    interfaces: [HttpClientPlugin]
  };
  var DataConversion_instance = null;
  function DataConversion_getInstance() {
    if (DataConversion_instance === null) {
      new DataConversion_0();
    }
    return DataConversion_instance;
  }
  function DefaultRequest(block) {
    DefaultRequest$Plugin_getInstance();
    this.block_0 = block;
  }
  function DefaultRequest$Plugin() {
    DefaultRequest$Plugin_instance = this;
    this.key_5a3dpp$_0 = new AttributeKey('DefaultRequest');
  }
  Object.defineProperty(DefaultRequest$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_5a3dpp$_0;
    }
  });
  DefaultRequest$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    return new DefaultRequest(block);
  };
  function Coroutine$DefaultRequest$Plugin$install$lambda(closure$plugin_0, this$DefaultRequest$_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$this$DefaultRequest$ = this$DefaultRequest$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultRequest$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultRequest$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultRequest$Plugin$install$lambda.prototype.constructor = Coroutine$DefaultRequest$Plugin$install$lambda;
  Coroutine$DefaultRequest$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new DefaultRequest$DefaultRequestBuilder();
            var closure$plugin = this.local$closure$plugin;
            appendAll($receiver.headers, this.local$$receiver.context.headers);
            closure$plugin.block_0($receiver);
            var defaultRequest = $receiver;
            var defaultUrl = defaultRequest.url.build();
            this.local$this$DefaultRequest$.mergeUrls_0(defaultUrl, this.local$$receiver.context.url);
            var tmp$;
            tmp$ = defaultRequest.attributes.allKeys.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var tmp$_0;
              if (!this.local$$receiver.context.attributes.contains_w48dwb$(element)) {
                this.local$$receiver.context.attributes.put_uuntuo$(Kotlin.isType(tmp$_0 = element, AttributeKey) ? tmp$_0 : throwCCE(), defaultRequest.attributes.get_yzaw86$(element));
              }
            }

            return this.local$$receiver.context.headers.appendMissing_hb0ubp$(defaultRequest.headers.build()), Unit;
          case 1:
            throw this.exception_0;
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
  function DefaultRequest$Plugin$install$lambda(closure$plugin_0, this$DefaultRequest$_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$DefaultRequest$Plugin$install$lambda(closure$plugin_0, this$DefaultRequest$_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DefaultRequest$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Before, DefaultRequest$Plugin$install$lambda(plugin, this));
  };
  DefaultRequest$Plugin.prototype.mergeUrls_0 = function (baseUrl, requestUrl) {
    var tmp$;
    if ((tmp$ = requestUrl.protocol) != null ? tmp$.equals(URLProtocol.Companion.HTTP) : null) {
      requestUrl.protocol = baseUrl.protocol;
    }
    if (requestUrl.host.length > 0)
      return;
    var resultUrl = URLBuilder(baseUrl);
    resultUrl.protocol = requestUrl.protocol;
    if (requestUrl.port !== 0) {
      resultUrl.port = requestUrl.port;
    }
    resultUrl.encodedPathSegments = this.concatenatePath_0(resultUrl.encodedPathSegments, requestUrl.encodedPathSegments);
    if (requestUrl.encodedFragment.length > 0) {
      resultUrl.encodedFragment = requestUrl.encodedFragment;
    }
    var $receiver = ParametersBuilder();
    appendAll($receiver, resultUrl.encodedParameters);
    var defaultParameters = $receiver;
    resultUrl.encodedParameters = requestUrl.encodedParameters;
    var tmp$_0;
    tmp$_0 = defaultParameters.entries().iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var key = element.key;
      var values = element.value;
      if (!resultUrl.encodedParameters.contains_61zpoe$(key)) {
        resultUrl.encodedParameters.appendAll_poujtz$(key, values);
      }
    }
    takeFrom(requestUrl, resultUrl);
  };
  DefaultRequest$Plugin.prototype.concatenatePath_0 = function (parent, child) {
    if (child.isEmpty())
      return parent;
    if (parent.isEmpty())
      return child;
    if (first(child).length === 0)
      return child;
    var capacity = parent.size + child.size - 1 | 0;
    checkBuilderCapacity(capacity);
    var $receiver = ArrayList_init_0(capacity);
    var tmp$;
    tmp$ = parent.size - 1 | 0;
    for (var index = 0; index < tmp$; index++) {
      $receiver.add_11rb$(parent.get_za3lpa$(index));
    }
    $receiver.addAll_brywnq$(child);
    return $receiver.build();
  };
  DefaultRequest$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var DefaultRequest$Plugin_instance = null;
  function DefaultRequest$Plugin_getInstance() {
    if (DefaultRequest$Plugin_instance === null) {
      new DefaultRequest$Plugin();
    }
    return DefaultRequest$Plugin_instance;
  }
  function DefaultRequest$DefaultRequestBuilder() {
    this.headers_yd9zdu$_0 = new HeadersBuilder();
    this.url = new URLBuilder_0();
    this.attributes = Attributes(true);
  }
  Object.defineProperty(DefaultRequest$DefaultRequestBuilder.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_yd9zdu$_0;
    }
  });
  DefaultRequest$DefaultRequestBuilder.prototype.url_wpb63d$ = function (block) {
    block(this.url);
  };
  function DefaultRequest$DefaultRequestBuilder$url$lambda($receiver) {
    return Unit;
  }
  DefaultRequest$DefaultRequestBuilder.prototype.url_mgtxx1$ = function (scheme, host, port, path, block) {
    if (scheme === void 0)
      scheme = null;
    if (host === void 0)
      host = null;
    if (port === void 0)
      port = null;
    if (path === void 0)
      path = null;
    if (block === void 0)
      block = DefaultRequest$DefaultRequestBuilder$url$lambda;
    set(this.url, scheme, host, port, path, block);
  };
  DefaultRequest$DefaultRequestBuilder.prototype.url_61zpoe$ = function (urlString) {
    takeFrom_0(this.url, urlString);
  };
  Object.defineProperty(DefaultRequest$DefaultRequestBuilder.prototype, 'host', {
    configurable: true,
    get: function () {
      return this.url.host;
    },
    set: function (value) {
      this.url.host = value;
    }
  });
  Object.defineProperty(DefaultRequest$DefaultRequestBuilder.prototype, 'port', {
    configurable: true,
    get: function () {
      return this.url.port;
    },
    set: function (value) {
      this.url.port = value;
    }
  });
  DefaultRequest$DefaultRequestBuilder.prototype.setAttributes_yhh5ns$ = function (block) {
    block(this.attributes);
  };
  DefaultRequest$DefaultRequestBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultRequestBuilder',
    interfaces: [HttpMessageBuilder]
  };
  DefaultRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultRequest',
    interfaces: []
  };
  function defaultRequest$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function defaultRequest($receiver, block) {
    $receiver.install_dq2y33$(DefaultRequest$Plugin_getInstance(), defaultRequest$lambda(block));
  }
  var ValidateMark;
  function Coroutine$addDefaultResponseValidation$lambda$lambda(response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$statusCode = void 0;
    this.local$originCall = void 0;
    this.local$exceptionResponse = void 0;
    this.local$response = response_0;
  }
  Coroutine$addDefaultResponseValidation$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addDefaultResponseValidation$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addDefaultResponseValidation$lambda$lambda.prototype.constructor = Coroutine$addDefaultResponseValidation$lambda$lambda;
  Coroutine$addDefaultResponseValidation$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var expectSuccess = this.local$response.call.attributes.get_yzaw86$(ExpectSuccessAttributeKey);
            if (!expectSuccess) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$statusCode = this.local$response.status.value;
            this.local$originCall = this.local$response.call;
            if (this.local$statusCode < 300 || this.local$originCall.attributes.contains_w48dwb$(ValidateMark)) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = save(this.local$originCall, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver = this.result_0;
            $receiver.attributes.put_uuntuo$(ValidateMark, Unit);
            var exceptionCall = $receiver;
            this.local$exceptionResponse = exceptionCall.response;
            this.state_0 = 5;
            this.result_0 = bodyAsText(this.local$exceptionResponse, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var exceptionResponseText = this.result_0;
            if (this.local$statusCode >= 300 && this.local$statusCode <= 399)
              throw new RedirectResponseException(this.local$exceptionResponse, exceptionResponseText);
            else if (this.local$statusCode >= 400 && this.local$statusCode <= 499)
              throw new ClientRequestException(this.local$exceptionResponse, exceptionResponseText);
            else if (this.local$statusCode >= 500 && this.local$statusCode <= 599)
              throw new ServerResponseException(this.local$exceptionResponse, exceptionResponseText);
            else
              throw new ResponseException(this.local$exceptionResponse, exceptionResponseText);
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
  function addDefaultResponseValidation$lambda$lambda(response_0, continuation_0, suspended) {
    var instance = new Coroutine$addDefaultResponseValidation$lambda$lambda(response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function addDefaultResponseValidation$lambda(this$addDefaultResponseValidation) {
    return function ($receiver) {
      $receiver.expectSuccess = this$addDefaultResponseValidation.expectSuccess;
      $receiver.validateResponse_d4bkoy$(addDefaultResponseValidation$lambda$lambda);
      return Unit;
    };
  }
  function addDefaultResponseValidation($receiver) {
    HttpResponseValidator($receiver, addDefaultResponseValidation$lambda($receiver));
  }
  var NO_RESPONSE_TEXT;
  var DEPRECATED_EXCEPTION_CTOR;
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init('Bad response: ' + response + '. Text: ' + '"' + cachedResponseText + '"', this);
    this.name = 'ResponseException';
    this.response = response;
  }
  ResponseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResponseException',
    interfaces: [IllegalStateException]
  };
  function ResponseException_init(response, $this) {
    $this = $this || Object.create(ResponseException.prototype);
    ResponseException.call($this, response, NO_RESPONSE_TEXT);
    return $this;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.name = 'RedirectResponseException';
    this.message_8bpi86$_0 = 'Unhandled redirect: ' + response.call.request.method.value + ' ' + response.call.request.url + '. ' + ('Status: ' + response.status + '. Text: ' + '"' + cachedResponseText + '"');
  }
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.message_8bpi86$_0;
    }
  });
  RedirectResponseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RedirectResponseException',
    interfaces: [ResponseException]
  };
  function RedirectResponseException_init(response, $this) {
    $this = $this || Object.create(RedirectResponseException.prototype);
    RedirectResponseException.call($this, response, NO_RESPONSE_TEXT);
    return $this;
  }
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.name = 'ServerResponseException';
    this.message_2wntoz$_0 = 'Server error(' + response.call.request.method.value + ' ' + response.call.request.url + ': ' + (response.status.toString() + '. Text: ' + '"' + cachedResponseText + '"');
  }
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.message_2wntoz$_0;
    }
  });
  ServerResponseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerResponseException',
    interfaces: [ResponseException]
  };
  function ServerResponseException_init(response, $this) {
    $this = $this || Object.create(ServerResponseException.prototype);
    ServerResponseException.call($this, response, NO_RESPONSE_TEXT);
    return $this;
  }
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.name = 'ClientRequestException';
    this.message_pce58h$_0 = 'Client request(' + response.call.request.method.value + ' ' + response.call.request.url + ') ' + ('invalid: ' + response.status + '. Text: ' + '"' + cachedResponseText + '"');
  }
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.message_pce58h$_0;
    }
  });
  ClientRequestException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientRequestException',
    interfaces: [ResponseException]
  };
  function ClientRequestException_init(response, $this) {
    $this = $this || Object.create(ClientRequestException.prototype);
    ClientRequestException.call($this, response, NO_RESPONSE_TEXT);
    return $this;
  }
  function defaultTransformers$lambda$ObjectLiteral(closure$body, closure$contentType) {
    this.closure$body = closure$body;
    OutgoingContent$ByteArrayContent.call(this);
    this.contentType_qbp83j$_0 = closure$contentType != null ? closure$contentType : ContentType.Application.OctetStream;
    this.contentLength_3supn9$_0 = Kotlin.Long.fromInt(closure$body.length);
  }
  Object.defineProperty(defaultTransformers$lambda$ObjectLiteral.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.contentType_qbp83j$_0;
    }
  });
  Object.defineProperty(defaultTransformers$lambda$ObjectLiteral.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.contentLength_3supn9$_0;
    }
  });
  defaultTransformers$lambda$ObjectLiteral.prototype.bytes = function () {
    return this.closure$body;
  };
  defaultTransformers$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ByteArrayContent]
  };
  function defaultTransformers$lambda$ObjectLiteral_0(closure$body, this$, closure$contentType) {
    this.closure$body = closure$body;
    OutgoingContent$ReadChannelContent.call(this);
    var tmp$;
    this.contentLength_3supn9$_0 = (tmp$ = this$.context.headers.get_61zpoe$(http.HttpHeaders.ContentLength)) != null ? toLong(tmp$) : null;
    this.contentType_qbp83j$_0 = closure$contentType != null ? closure$contentType : ContentType.Application.OctetStream;
  }
  Object.defineProperty(defaultTransformers$lambda$ObjectLiteral_0.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.contentLength_3supn9$_0;
    }
  });
  Object.defineProperty(defaultTransformers$lambda$ObjectLiteral_0.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.contentType_qbp83j$_0;
    }
  });
  defaultTransformers$lambda$ObjectLiteral_0.prototype.readFrom = function () {
    return this.closure$body;
  };
  defaultTransformers$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ReadChannelContent]
  };
  function Coroutine$defaultTransformers$lambda($receiver_0, body_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$body = body_0;
  }
  Coroutine$defaultTransformers$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$defaultTransformers$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$defaultTransformers$lambda.prototype.constructor = Coroutine$defaultTransformers$lambda;
  Coroutine$defaultTransformers$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$$receiver.context.headers.get_61zpoe$(http.HttpHeaders.Accept) == null) {
              this.local$$receiver.context.headers.append_puj7f4$(http.HttpHeaders.Accept, '*/*');
            }

            var contentType_0 = contentType(this.local$$receiver.context);
            if (typeof this.local$body === 'string')
              tmp$ = new TextContent(this.local$body, contentType_0 != null ? contentType_0 : ContentType.Text.Plain);
            else if (Kotlin.isByteArray(this.local$body))
              tmp$ = new defaultTransformers$lambda$ObjectLiteral(this.local$body, contentType_0);
            else if (Kotlin.isType(this.local$body, ByteReadChannel))
              tmp$ = new defaultTransformers$lambda$ObjectLiteral_0(this.local$body, this.local$$receiver, contentType_0);
            else if (Kotlin.isType(this.local$body, OutgoingContent))
              tmp$ = this.local$body;
            else
              tmp$ = platformRequestDefaultTransform(contentType_0, this.local$$receiver.context, this.local$body);
            var content = tmp$;
            if (content != null) {
              this.local$$receiver.context.headers.remove_61zpoe$(http.HttpHeaders.ContentType);
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(content, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
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
  function defaultTransformers$lambda($receiver_0, body_0, continuation_0, suspended) {
    var instance = new Coroutine$defaultTransformers$lambda($receiver_0, body_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$defaultTransformers$lambda$lambda(closure$body_0, closure$response_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$body = closure$body_0;
    this.local$closure$response = closure$response_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$defaultTransformers$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$defaultTransformers$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$defaultTransformers$lambda$lambda.prototype.constructor = Coroutine$defaultTransformers$lambda$lambda;
  Coroutine$defaultTransformers$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = copyTo(this.local$closure$body, this.local$$receiver.channel, Long$Companion$MAX_VALUE, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            this.finallyPath_0 = [6];
            this.exceptionState_0 = 4;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, CancellationException)) {
              cancel(this.local$closure$response, cause);
              throw cause;
            } else if (Kotlin.isType(cause, Throwable)) {
              cancel_0(this.local$closure$response, 'Receive failed', cause);
              throw cause;
            } else
              throw cause;
          case 4:
            this.exceptionState_0 = 6;
            complete(this.local$closure$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            return;
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
  function defaultTransformers$lambda$lambda(closure$body_0, closure$response_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$defaultTransformers$lambda$lambda(closure$body_0, closure$response_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function defaultTransformers$lambda$lambda$lambda(closure$responseJobHolder) {
    return function (it) {
      closure$responseJobHolder.complete();
      return Unit;
    };
  }
  function Coroutine$defaultTransformers$lambda_0($receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$info = void 0;
    this.local$body = void 0;
    this.local$contentLength = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$defaultTransformers$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$defaultTransformers$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$defaultTransformers$lambda_0.prototype.constructor = Coroutine$defaultTransformers$lambda_0;
  Coroutine$defaultTransformers$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$info = this.local$f.component1(), this.local$body = this.local$f.component2();
            var tmp$, tmp$_0, tmp$_1;
            if (!Kotlin.isType(this.local$body, ByteReadChannel)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var response = this.local$$receiver.context.response;
            this.local$contentLength = (tmp$_0 = (tmp$ = response.headers.get_61zpoe$(http.HttpHeaders.ContentLength)) != null ? toLong(tmp$) : null) != null ? tmp$_0 : Long$Companion$MAX_VALUE;
            tmp$_1 = this.local$info.type;
            if (equals(tmp$_1, getKClass(Object.getPrototypeOf(kotlin.Unit).constructor))) {
              cancel_1(this.local$body);
              this.state_0 = 16;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, Unit), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (equals(tmp$_1, PrimitiveClasses$intClass)) {
                this.state_0 = 13;
                this.result_0 = this.local$body.readRemaining_s8cxhz$(void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                if (equals(tmp$_1, getKClass(ByteReadPacket)) || equals(tmp$_1, getKClass(Input))) {
                  this.state_0 = 10;
                  this.result_0 = this.local$body.readRemaining_s8cxhz$(void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  if (equals(tmp$_1, PrimitiveClasses$byteArrayClass)) {
                    this.state_0 = 7;
                    this.result_0 = this.local$body.readRemaining_s8cxhz$(this.local$contentLength, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  } else {
                    if (equals(tmp$_1, getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job_0(response.coroutineContext.get_j3r2sn$(Job.Key));
                      var $receiver = writer(this.local$$receiver, response.coroutineContext, void 0, defaultTransformers$lambda$lambda(this.local$body, response));
                      $receiver.invokeOnCompletion_f05bi3$(defaultTransformers$lambda$lambda$lambda(responseJobHolder));
                      var channel = $receiver.channel;
                      this.state_0 = 5;
                      this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, channel), this);
                      if (this.result_0 === COROUTINE_SUSPENDED)
                        return COROUTINE_SUSPENDED;
                      continue;
                    } else {
                      if (equals(tmp$_1, getKClass(HttpStatusCode))) {
                        cancel_1(this.local$body);
                        this.state_0 = 3;
                        this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, response.status), this);
                        if (this.result_0 === COROUTINE_SUSPENDED)
                          return COROUTINE_SUSPENDED;
                        continue;
                      } else {
                        this.state_0 = 4;
                        continue;
                      }
                    }
                  }
                }
              }
            }

          case 3:
            return this.result_0;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return this.result_0;
          case 6:
            this.state_0 = 9;
            continue;
          case 7:
            var readRemaining = this.result_0;
            if (this.local$contentLength.compareTo_11rb$(Long$Companion$MAX_VALUE) < 0) {
              if (!equals(readRemaining.remaining, this.local$contentLength)) {
                var message = 'Expected ' + this.local$contentLength.toString() + ', actual ' + readRemaining.remaining.toString();
                throw IllegalStateException_init(message.toString());
              }
            }

            this.state_0 = 8;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, readBytes(readRemaining)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            return this.result_0;
          case 9:
            this.state_0 = 12;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, this.result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            return this.result_0;
          case 12:
            this.state_0 = 15;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, toInt(this.result_0.readText_vux9f0$())), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            return this.result_0;
          case 15:
            this.state_0 = 17;
            continue;
          case 16:
            return this.result_0;
          case 17:
            return Unit;
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
  function defaultTransformers$lambda_0($receiver_0, f_0, continuation_0, suspended) {
    var instance = new Coroutine$defaultTransformers$lambda_0($receiver_0, f_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function defaultTransformers($receiver) {
    $receiver.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Render, defaultTransformers$lambda);
    $receiver.responsePipeline.intercept_h71y74$(HttpResponsePipeline$Phases_getInstance().Parse, defaultTransformers$lambda_0);
    platformResponseDefaultTransformers($receiver);
  }
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    HttpCallValidator$Companion_getInstance();
    this.responseValidators_0 = responseValidators;
    this.callExceptionHandlers_0 = callExceptionHandlers;
    this.expectSuccess_0 = expectSuccess;
  }
  function Coroutine$validateResponse_0($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$response = response_0;
  }
  Coroutine$validateResponse_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$validateResponse_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$validateResponse_0.prototype.constructor = Coroutine$validateResponse_0;
  Coroutine$validateResponse_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.responseValidators_0.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = element(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
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
  HttpCallValidator.prototype.validateResponse_0 = function (response_0, continuation_0, suspended) {
    var instance = new Coroutine$validateResponse_0(this, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$processException_0($this, cause_0, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$cause = cause_0;
    this.local$request = request_0;
  }
  Coroutine$processException_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$processException_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$processException_0.prototype.constructor = Coroutine$processException_0;
  Coroutine$processException_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.callExceptionHandlers_0.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var element = this.local$tmp$.next();
            if (Kotlin.isType(element, ExceptionHandlerWrapper)) {
              this.state_0 = 5;
              this.result_0 = element.handler(this.local$cause, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(element, RequestExceptionHandlerWrapper)) {
                this.state_0 = 3;
                this.result_0 = element.handler(this.local$cause, this.local$request, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 4;
                continue;
              }
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
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
  HttpCallValidator.prototype.processException_0 = function (cause_0, request_0, continuation_0, suspended) {
    var instance = new Coroutine$processException_0(this, cause_0, request_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HttpCallValidator$Config() {
    this.responseValidators_8be2vx$ = ArrayList_init();
    this.responseExceptionHandlers_8be2vx$ = ArrayList_init();
    this.expectSuccess = true;
  }
  HttpCallValidator$Config.prototype.handleResponseException_9rdja$ = function (block) {
    var $receiver = this.responseExceptionHandlers_8be2vx$;
    var element = new ExceptionHandlerWrapper(block);
    $receiver.add_11rb$(element);
  };
  HttpCallValidator$Config.prototype.handleResponseExceptionWithRequest_yc597p$ = function (block) {
    var $receiver = this.responseExceptionHandlers_8be2vx$;
    var element = new RequestExceptionHandlerWrapper(block);
    $receiver.add_11rb$(element);
  };
  HttpCallValidator$Config.prototype.validateResponse_d4bkoy$ = function (block) {
    this.responseValidators_8be2vx$.add_11rb$(block);
  };
  HttpCallValidator$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpCallValidator$Companion() {
    HttpCallValidator$Companion_instance = this;
    this.key_vbv7yu$_0 = new AttributeKey('HttpResponseValidator');
  }
  Object.defineProperty(HttpCallValidator$Companion.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_vbv7yu$_0;
    }
  });
  HttpCallValidator$Companion.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpCallValidator$Config();
    block($receiver);
    var config = $receiver;
    return new HttpCallValidator(reversed(config.responseValidators_8be2vx$), reversed(config.responseExceptionHandlers_8be2vx$), config.expectSuccess);
  };
  function HttpCallValidator$Companion$install$lambda$lambda(closure$plugin) {
    return function () {
      return closure$plugin.expectSuccess_0;
    };
  }
  function Coroutine$HttpCallValidator$Companion$install$lambda(closure$plugin_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$plugin = closure$plugin_0;
    this.local$unwrappedCause = void 0;
    this.local$$receiver = $receiver_0;
    this.local$it = it_0;
  }
  Coroutine$HttpCallValidator$Companion$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCallValidator$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCallValidator$Companion$install$lambda.prototype.constructor = Coroutine$HttpCallValidator$Companion$install$lambda;
  Coroutine$HttpCallValidator$Companion$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.local$$receiver.context.attributes.computeIfAbsent_u4q9l2$(ExpectSuccessAttributeKey, HttpCallValidator$Companion$install$lambda$lambda(this.local$closure$plugin));
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$unwrappedCause = unwrapCancellationException(cause);
              this.state_0 = 3;
              this.result_0 = this.local$closure$plugin.processException_0(this.local$unwrappedCause, HttpRequest(this.local$$receiver.context), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              throw cause;
            }

          case 3:
            throw this.local$unwrappedCause;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
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
  function HttpCallValidator$Companion$install$lambda(closure$plugin_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCallValidator$Companion$install$lambda(closure$plugin_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCallValidator$Companion$install$lambda_0(closure$plugin_0, $receiver_0, container_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$plugin = closure$plugin_0;
    this.local$unwrappedCause = void 0;
    this.local$$receiver = $receiver_0;
    this.local$container = container_0;
  }
  Coroutine$HttpCallValidator$Companion$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCallValidator$Companion$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCallValidator$Companion$install$lambda_0.prototype.constructor = Coroutine$HttpCallValidator$Companion$install$lambda_0;
  Coroutine$HttpCallValidator$Companion$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$container, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$unwrappedCause = unwrapCancellationException(cause);
              this.state_0 = 3;
              this.result_0 = this.local$closure$plugin.processException_0(this.local$unwrappedCause, this.local$$receiver.context.request, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              throw cause;
            }

          case 3:
            throw this.local$unwrappedCause;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
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
  function HttpCallValidator$Companion$install$lambda_0(closure$plugin_0) {
    return function ($receiver_0, container_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCallValidator$Companion$install$lambda_0(closure$plugin_0, $receiver_0, container_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCallValidator$Companion$install$lambda_1(closure$plugin_0, $receiver_0, request_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$call = void 0;
    this.local$$receiver = $receiver_0;
    this.local$request = request_0;
  }
  Coroutine$HttpCallValidator$Companion$install$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCallValidator$Companion$install$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCallValidator$Companion$install$lambda_1.prototype.constructor = Coroutine$HttpCallValidator$Companion$install$lambda_1;
  Coroutine$HttpCallValidator$Companion$install$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.execute_s9rlw$(this.local$request, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$call = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$closure$plugin.validateResponse_0(this.local$call.response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.local$call;
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
  function HttpCallValidator$Companion$install$lambda_1(closure$plugin_0) {
    return function ($receiver_0, request_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCallValidator$Companion$install$lambda_1(closure$plugin_0, $receiver_0, request_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpCallValidator$Companion.prototype.install_wojrb5$ = function (plugin_0, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Before, HttpCallValidator$Companion$install$lambda(plugin_0));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.responsePipeline.insertPhaseBefore_b9zzbm$(HttpResponsePipeline$Phases_getInstance().Receive, BeforeReceive);
    scope.responsePipeline.intercept_h71y74$(BeforeReceive, HttpCallValidator$Companion$install$lambda_0(plugin_0));
    plugin(scope, HttpSend$Plugin_getInstance()).intercept_aa8w70$(HttpCallValidator$Companion$install$lambda_1(plugin_0));
  };
  HttpCallValidator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HttpClientPlugin]
  };
  var HttpCallValidator$Companion_instance = null;
  function HttpCallValidator$Companion_getInstance() {
    if (HttpCallValidator$Companion_instance === null) {
      new HttpCallValidator$Companion();
    }
    return HttpCallValidator$Companion_instance;
  }
  HttpCallValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCallValidator',
    interfaces: []
  };
  function HttpRequest$ObjectLiteral(closure$builder) {
    this.closure$builder = closure$builder;
    this.method_wo5b7y$_0 = closure$builder.method;
    this.url_okq4sy$_0 = closure$builder.url.build();
    this.attributes_qewzi4$_0 = closure$builder.attributes;
    this.headers_th47hh$_0 = closure$builder.headers.build();
  }
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'call', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('Call is not initialized'.toString());
    }
  });
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'method', {
    configurable: true,
    get: function () {
      return this.method_wo5b7y$_0;
    }
  });
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.url_okq4sy$_0;
    }
  });
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this.attributes_qewzi4$_0;
    }
  });
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_th47hh$_0;
    }
  });
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'content', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$ = this.closure$builder.body, OutgoingContent) ? tmp$ : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init(('Content was not transformed to OutgoingContent yet. Current body is ' + this.closure$builder.body.toString()).toString());
      }
      return tmp$_1;
    }
  });
  HttpRequest$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HttpRequest_0]
  };
  function HttpRequest(builder) {
    return new HttpRequest$ObjectLiteral(builder);
  }
  function HttpResponseValidator($receiver, block) {
    $receiver.install_dq2y33$(HttpCallValidator$Companion_getInstance(), block);
  }
  function get_expectSuccess($receiver) {
    var tmp$;
    return (tmp$ = $receiver.attributes.getOrNull_yzaw86$(ExpectSuccessAttributeKey)) != null ? tmp$ : true;
  }
  function set_expectSuccess($receiver, value) {
    $receiver.attributes.put_uuntuo$(ExpectSuccessAttributeKey, value);
  }
  var ExpectSuccessAttributeKey;
  function HandlerWrapper() {
  }
  HandlerWrapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HandlerWrapper',
    interfaces: []
  };
  function ExceptionHandlerWrapper(handler) {
    this.handler = handler;
  }
  ExceptionHandlerWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExceptionHandlerWrapper',
    interfaces: [HandlerWrapper]
  };
  function RequestExceptionHandlerWrapper(handler) {
    this.handler = handler;
  }
  RequestExceptionHandlerWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestExceptionHandlerWrapper',
    interfaces: [HandlerWrapper]
  };
  var PLUGIN_INSTALLED_LIST;
  function HttpClientPlugin() {
  }
  function HttpClientPlugin$prepare$lambda($receiver) {
    return Unit;
  }
  HttpClientPlugin.prototype.prepare_oh3mgy$ = function (block, callback$default) {
    if (block === void 0)
      block = HttpClientPlugin$prepare$lambda;
    return callback$default ? callback$default(block) : this.prepare_oh3mgy$$default(block);
  };
  HttpClientPlugin.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpClientPlugin',
    interfaces: []
  };
  function pluginOrNull($receiver, plugin) {
    var tmp$;
    return (tmp$ = $receiver.attributes.getOrNull_yzaw86$(PLUGIN_INSTALLED_LIST)) != null ? tmp$.getOrNull_yzaw86$(plugin.key) : null;
  }
  function plugin($receiver, plugin) {
    var tmp$;
    tmp$ = pluginOrNull($receiver, plugin);
    if (tmp$ == null) {
      throw IllegalStateException_init('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.key + ')` in client config first.');
    }
    return tmp$;
  }
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function HttpPlainText(charsets_0, charsetQuality, sendCharset, responseCharsetFallback) {
    HttpPlainText$Plugin_getInstance();
    this.responseCharsetFallback_0 = responseCharsetFallback;
    this.requestCharset_0 = null;
    this.acceptCharsetHeader_0 = null;
    var tmp$, tmp$_0, tmp$_1;
    var withQuality = sortedWith(toList(charsetQuality), new Comparator(compareByDescending$lambda(HttpPlainText_init$lambda)));
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = charsets_0.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (!charsetQuality.containsKey_11rb$(element))
        destination.add_11rb$(element);
    }
    var withoutQuality = sortedWith(destination, new Comparator(compareBy$lambda(HttpPlainText_init$lambda_0)));
    var $receiver = StringBuilder_init();
    var tmp$_3;
    tmp$_3 = withoutQuality.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      if ($receiver.length > 0)
        $receiver.append_pdl1vj$(',');
      $receiver.append_pdl1vj$(get_name(element_0));
    }
    var tmp$_4;
    tmp$_4 = withQuality.iterator();
    while (tmp$_4.hasNext()) {
      var element_1 = tmp$_4.next();
      var charset = element_1.component1()
      , quality = element_1.component2();
      if ($receiver.length > 0)
        $receiver.append_pdl1vj$(',');
      if (!contains(rangeTo(0.0, 1.0), quality)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      var truncatedQuality = roundToInt(100 * quality) / 100.0;
      $receiver.append_pdl1vj$(get_name(charset) + ';q=' + truncatedQuality);
    }
    if ($receiver.length === 0) {
      $receiver.append_pdl1vj$(get_name(this.responseCharsetFallback_0));
    }
    this.acceptCharsetHeader_0 = $receiver.toString();
    this.requestCharset_0 = (tmp$_1 = (tmp$_0 = sendCharset != null ? sendCharset : firstOrNull(withoutQuality)) != null ? tmp$_0 : (tmp$ = firstOrNull(withQuality)) != null ? tmp$.first : null) != null ? tmp$_1 : charsets.Charsets.UTF_8;
  }
  function HttpPlainText$Config() {
    this.charsets_8be2vx$ = LinkedHashSet_init();
    this.charsetQuality_8be2vx$ = LinkedHashMap_init();
    this.sendCharset = null;
    this.responseCharsetFallback = charsets.Charsets.UTF_8;
  }
  HttpPlainText$Config.prototype.register_qv516$ = function (charset, quality) {
    if (quality === void 0)
      quality = null;
    if (quality != null) {
      if (!contains(rangeTo(0.0, 1.0), quality)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
    }
    this.charsets_8be2vx$.add_11rb$(charset);
    if (quality == null) {
      this.charsetQuality_8be2vx$.remove_11rb$(charset);
    } else {
      this.charsetQuality_8be2vx$.put_xwzc9p$(charset, quality);
    }
  };
  HttpPlainText$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpPlainText$Plugin() {
    HttpPlainText$Plugin_instance = this;
    this.key_y9ebr4$_0 = new AttributeKey('HttpPlainText');
  }
  Object.defineProperty(HttpPlainText$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_y9ebr4$_0;
    }
  });
  HttpPlainText$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpPlainText$Config();
    block($receiver);
    var config = $receiver;
    return new HttpPlainText(config.charsets_8be2vx$, config.charsetQuality_8be2vx$, config.sendCharset, config.responseCharsetFallback);
  };
  function Coroutine$HttpPlainText$Plugin$install$lambda(closure$plugin_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$contentType = void 0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpPlainText$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpPlainText$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpPlainText$Plugin$install$lambda.prototype.constructor = Coroutine$HttpPlainText$Plugin$install$lambda;
  Coroutine$HttpPlainText$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$plugin.addCharsetHeaders_jc2hdt$(this.local$$receiver.context);
            if (!(typeof this.local$content === 'string')) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$contentType = contentType(this.local$$receiver.context);
            if (this.local$contentType != null && !equals(this.local$contentType.contentType, ContentType.Text.Plain.contentType)) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$closure$plugin.wrapContent_0(this.local$content, this.local$contentType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function HttpPlainText$Plugin$install$lambda(closure$plugin_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpPlainText$Plugin$install$lambda(closure$plugin_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpPlainText$Plugin$install$lambda_0(closure$plugin_0, $receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$info = void 0;
    this.local$body = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$HttpPlainText$Plugin$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpPlainText$Plugin$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpPlainText$Plugin$install$lambda_0.prototype.constructor = Coroutine$HttpPlainText$Plugin$install$lambda_0;
  Coroutine$HttpPlainText$Plugin$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$info = this.local$f.component1(), this.local$body = this.local$f.component2();
            var tmp$;
            if (!((tmp$ = this.local$info.type) != null ? tmp$.equals(PrimitiveClasses$stringClass) : null) || !Kotlin.isType(this.local$body, ByteReadChannel)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$body.readRemaining_s8cxhz$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var bodyBytes = this.result_0;
            var content = this.local$closure$plugin.read_r18uy3$(this.local$$receiver.context, bodyBytes);
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new HttpResponseContainer(this.local$info, content), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function HttpPlainText$Plugin$install$lambda_0(closure$plugin_0) {
    return function ($receiver_0, f_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpPlainText$Plugin$install$lambda_0(closure$plugin_0, $receiver_0, f_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpPlainText$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Render, HttpPlainText$Plugin$install$lambda(plugin));
    scope.responsePipeline.intercept_h71y74$(HttpResponsePipeline$Phases_getInstance().Transform, HttpPlainText$Plugin$install$lambda_0(plugin));
  };
  HttpPlainText$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var HttpPlainText$Plugin_instance = null;
  function HttpPlainText$Plugin_getInstance() {
    if (HttpPlainText$Plugin_instance === null) {
      new HttpPlainText$Plugin();
    }
    return HttpPlainText$Plugin_instance;
  }
  HttpPlainText.prototype.wrapContent_0 = function (content, requestContentType) {
    var tmp$;
    var contentType = requestContentType != null ? requestContentType : ContentType.Text.Plain;
    var charset_0 = (tmp$ = requestContentType != null ? charset(requestContentType) : null) != null ? tmp$ : this.requestCharset_0;
    return new TextContent(content, withCharset(contentType, charset_0));
  };
  HttpPlainText.prototype.read_r18uy3$ = function (call, body) {
    var tmp$;
    var actualCharset = (tmp$ = charset_0(call.response)) != null ? tmp$ : this.responseCharsetFallback_0;
    return readText(body, actualCharset);
  };
  HttpPlainText.prototype.addCharsetHeaders_jc2hdt$ = function (context) {
    if (context.headers.get_61zpoe$(http.HttpHeaders.AcceptCharset) != null)
      return;
    context.headers.set_puj7f4$(http.HttpHeaders.AcceptCharset, this.acceptCharsetHeader_0);
  };
  function HttpPlainText_init$lambda(it) {
    return it.second;
  }
  function HttpPlainText_init$lambda_0(it) {
    return get_name(it);
  }
  HttpPlainText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpPlainText',
    interfaces: []
  };
  function Charsets($receiver, block) {
    $receiver.install_dq2y33$(HttpPlainText$Plugin_getInstance(), block);
  }
  var ALLOWED_FOR_REDIRECT;
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    HttpRedirect$Plugin_getInstance();
    this.checkHttpMethod_0 = checkHttpMethod;
    this.allowHttpsDowngrade_0 = allowHttpsDowngrade;
  }
  function HttpRedirect$Config() {
    this.checkHttpMethod = true;
    this.allowHttpsDowngrade = false;
  }
  HttpRedirect$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpRedirect$Plugin() {
    HttpRedirect$Plugin_instance = this;
    this.key_fcr0bn$_0 = new AttributeKey('HttpRedirect');
    this.HttpResponseRedirect = new EventDefinition();
  }
  Object.defineProperty(HttpRedirect$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_fcr0bn$_0;
    }
  });
  HttpRedirect$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpRedirect$Config();
    block($receiver);
    var config = $receiver;
    return new HttpRedirect(config.checkHttpMethod, config.allowHttpsDowngrade);
  };
  function Coroutine$HttpRedirect$Plugin$install$lambda(closure$plugin_0, closure$scope_0, this$HttpRedirect$_0, $receiver_0, context_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$scope = closure$scope_0;
    this.local$this$HttpRedirect$ = this$HttpRedirect$_0;
    this.local$origin = void 0;
    this.local$$receiver = $receiver_0;
    this.local$context = context_0;
  }
  Coroutine$HttpRedirect$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpRedirect$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpRedirect$Plugin$install$lambda.prototype.constructor = Coroutine$HttpRedirect$Plugin$install$lambda;
  Coroutine$HttpRedirect$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.execute_s9rlw$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$origin = this.result_0;
            if (this.local$closure$plugin.checkHttpMethod_0 && !ALLOWED_FOR_REDIRECT.contains_11rb$(this.local$origin.request.method)) {
              return this.local$origin;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$HttpRedirect$.handleCall_0(this.local$$receiver, this.local$context, this.local$origin, this.local$closure$plugin.allowHttpsDowngrade_0, this.local$closure$scope, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function HttpRedirect$Plugin$install$lambda(closure$plugin_0, closure$scope_0, this$HttpRedirect$_0) {
    return function ($receiver_0, context_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpRedirect$Plugin$install$lambda(closure$plugin_0, closure$scope_0, this$HttpRedirect$_0, $receiver_0, context_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpRedirect$Plugin.prototype.install_wojrb5$ = function (plugin_0, scope) {
    plugin(scope, HttpSend$Plugin_getInstance()).intercept_aa8w70$(HttpRedirect$Plugin$install$lambda(plugin_0, scope, this));
  };
  function Coroutine$handleCall_0($this, $receiver_0, context_0, origin_0, allowHttpsDowngrade_0, client_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$call = void 0;
    this.local$requestBuilder = void 0;
    this.local$originProtocol = void 0;
    this.local$originAuthority = void 0;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = $receiver_0;
    this.local$context = context_0;
    this.local$origin = origin_0;
    this.local$allowHttpsDowngrade = allowHttpsDowngrade_0;
    this.local$client = client_0;
  }
  Coroutine$handleCall_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$handleCall_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$handleCall_0.prototype.constructor = Coroutine$handleCall_0;
  Coroutine$handleCall_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!isRedirect(this.local$origin.response.status)) {
              return this.local$origin;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$call = {v: this.local$origin};
            this.local$requestBuilder = {v: this.local$context};
            this.local$originProtocol = this.local$origin.request.url.protocol;
            this.local$originAuthority = get_authority(this.local$origin.request.url);
            this.state_0 = 3;
            continue;
          case 3:
            this.local$client.monitor.raise_asioqi$(this.$this.HttpResponseRedirect, this.local$call.v.response);
            var location = this.local$call.v.response.headers.get_61zpoe$(http.HttpHeaders.Location);
            this.local$$receiver = new HttpRequestBuilder();
            this.local$$receiver.takeFromWithExecutionContext_s9rlw$(this.local$requestBuilder.v);
            this.local$$receiver.url.parameters.clear();
            if (location != null) {
              takeFrom_0(this.local$$receiver.url, location);
            }

            if (!this.local$allowHttpsDowngrade && isSecure(this.local$originProtocol) && !isSecure(this.local$$receiver.url.protocol)) {
              return this.local$call.v;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            if (!equals(this.local$originAuthority, get_authority_0(this.local$$receiver.url))) {
              this.local$$receiver.headers.remove_61zpoe$(http.HttpHeaders.Authorization);
            }

            this.local$requestBuilder.v = this.local$$receiver;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver_0.execute_s9rlw$(this.local$requestBuilder.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$call.v = this.result_0;
            if (!isRedirect(this.local$call.v.response.status)) {
              return this.local$call.v;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            this.state_0 = 3;
            continue;
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
  HttpRedirect$Plugin.prototype.handleCall_0 = function ($receiver_0, context_0, origin_0, allowHttpsDowngrade_0, client_0, continuation_0, suspended) {
    var instance = new Coroutine$handleCall_0(this, $receiver_0, context_0, origin_0, allowHttpsDowngrade_0, client_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpRedirect$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var HttpRedirect$Plugin_instance = null;
  function HttpRedirect$Plugin_getInstance() {
    if (HttpRedirect$Plugin_instance === null) {
      new HttpRedirect$Plugin();
    }
    return HttpRedirect$Plugin_instance;
  }
  HttpRedirect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRedirect',
    interfaces: []
  };
  function isRedirect($receiver) {
    var tmp$;
    tmp$ = $receiver.value;
    if (tmp$ === HttpStatusCode.Companion.MovedPermanently.value || tmp$ === HttpStatusCode.Companion.Found.value || tmp$ === HttpStatusCode.Companion.TemporaryRedirect.value || tmp$ === HttpStatusCode.Companion.PermanentRedirect.value || tmp$ === HttpStatusCode.Companion.SeeOther.value)
      return true;
    else
      return false;
  }
  function HttpRequestLifecycle() {
    HttpRequestLifecycle$Plugin_getInstance();
  }
  function HttpRequestLifecycle$Plugin() {
    HttpRequestLifecycle$Plugin_instance = this;
    this.key_hfnmn2$_0 = new AttributeKey('RequestLifecycle');
  }
  Object.defineProperty(HttpRequestLifecycle$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_hfnmn2$_0;
    }
  });
  HttpRequestLifecycle$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    return new HttpRequestLifecycle();
  };
  function Coroutine$HttpRequestLifecycle$Plugin$install$lambda(closure$scope_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$scope = closure$scope_0;
    this.local$executionContext = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpRequestLifecycle$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpRequestLifecycle$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpRequestLifecycle$Plugin$install$lambda.prototype.constructor = Coroutine$HttpRequestLifecycle$Plugin$install$lambda;
  Coroutine$HttpRequestLifecycle$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$executionContext = Job_0(this.local$$receiver.context.executionContext);
            attachToClientEngineJob(this.local$executionContext, ensureNotNull(this.local$closure$scope.coroutineContext.get_j3r2sn$(Job.Key)));
            this.exceptionState_0 = 3;
            this.local$$receiver.context.executionContext = this.local$executionContext;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.proceed(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            this.finallyPath_0 = [6];
            this.exceptionState_0 = 4;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$executionContext.completeExceptionally_tcv7n7$(cause);
              throw cause;
            } else
              throw cause;
          case 4:
            this.exceptionState_0 = 6;
            this.local$executionContext.complete();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            return;
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
  function HttpRequestLifecycle$Plugin$install$lambda(closure$scope_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpRequestLifecycle$Plugin$install$lambda(closure$scope_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpRequestLifecycle$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Before, HttpRequestLifecycle$Plugin$install$lambda(scope));
  };
  HttpRequestLifecycle$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var HttpRequestLifecycle$Plugin_instance = null;
  function HttpRequestLifecycle$Plugin_getInstance() {
    if (HttpRequestLifecycle$Plugin_instance === null) {
      new HttpRequestLifecycle$Plugin();
    }
    return HttpRequestLifecycle$Plugin_instance;
  }
  HttpRequestLifecycle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestLifecycle',
    interfaces: []
  };
  function attachToClientEngineJob$lambda(closure$requestJob) {
    return function (cause) {
      if (cause != null) {
        cancel_2(closure$requestJob, 'Engine failed', cause);
      } else {
        closure$requestJob.complete();
      }
      return Unit;
    };
  }
  function attachToClientEngineJob$lambda_0(closure$handler) {
    return function (it) {
      closure$handler.dispose();
      return Unit;
    };
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.invokeOnCompletion_f05bi3$(attachToClientEngineJob$lambda(requestJob));
    requestJob.invokeOnCompletion_f05bi3$(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestRetry(configuration) {
    HttpRequestRetry$Plugin_getInstance();
    this.shouldRetry_0 = configuration.shouldRetry_8be2vx$;
    this.shouldRetryOnException_0 = configuration.shouldRetryOnException_8be2vx$;
    this.delayMillis_0 = configuration.delayMillis_8be2vx$;
    this.delay_0 = configuration.delay_8be2vx$;
    this.maxRetries_0 = configuration.maxRetries;
    this.modifyRequest_0 = configuration.modifyRequest_8be2vx$;
  }
  function HttpRequestRetry$ShouldRetryContext(retryCount) {
    this.retryCount = retryCount;
  }
  HttpRequestRetry$ShouldRetryContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShouldRetryContext',
    interfaces: []
  };
  function HttpRequestRetry$DelayContext(request, response, cause) {
    this.request = request;
    this.response = response;
    this.cause = cause;
  }
  HttpRequestRetry$DelayContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelayContext',
    interfaces: []
  };
  function HttpRequestRetry$ModifyRequestContext(request, response, cause, retryCount) {
    this.request = request;
    this.response = response;
    this.cause = cause;
    this.retryCount = retryCount;
  }
  HttpRequestRetry$ModifyRequestContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModifyRequestContext',
    interfaces: []
  };
  function HttpRequestRetry$RetryEventData(request, retryCount, response, cause) {
    this.request = request;
    this.retryCount = retryCount;
    this.response = response;
    this.cause = cause;
  }
  HttpRequestRetry$RetryEventData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RetryEventData',
    interfaces: []
  };
  function HttpRequestRetry$Configuration() {
    this.shouldRetry_8be2vx$_x693vd$_0 = this.shouldRetry_8be2vx$_x693vd$_0;
    this.shouldRetryOnException_8be2vx$_fb7ebf$_0 = this.shouldRetryOnException_8be2vx$_fb7ebf$_0;
    this.delayMillis_8be2vx$_474j0t$_0 = this.delayMillis_8be2vx$_474j0t$_0;
    this.modifyRequest_8be2vx$ = HttpRequestRetry$Configuration$modifyRequest$lambda;
    this.delay_8be2vx$ = HttpRequestRetry$Configuration$delay$lambda;
    this.maxRetries = 0;
    this.retryOnExceptionOrServerErrors_za3lpa$(3);
    this.exponentialDelay_rel7ht$();
  }
  Object.defineProperty(HttpRequestRetry$Configuration.prototype, 'shouldRetry_8be2vx$', {
    configurable: true,
    get: function () {
      if (this.shouldRetry_8be2vx$_x693vd$_0 == null)
        return throwUPAE('shouldRetry');
      return this.shouldRetry_8be2vx$_x693vd$_0;
    },
    set: function (shouldRetry) {
      this.shouldRetry_8be2vx$_x693vd$_0 = shouldRetry;
    }
  });
  Object.defineProperty(HttpRequestRetry$Configuration.prototype, 'shouldRetryOnException_8be2vx$', {
    configurable: true,
    get: function () {
      if (this.shouldRetryOnException_8be2vx$_fb7ebf$_0 == null)
        return throwUPAE('shouldRetryOnException');
      return this.shouldRetryOnException_8be2vx$_fb7ebf$_0;
    },
    set: function (shouldRetryOnException) {
      this.shouldRetryOnException_8be2vx$_fb7ebf$_0 = shouldRetryOnException;
    }
  });
  Object.defineProperty(HttpRequestRetry$Configuration.prototype, 'delayMillis_8be2vx$', {
    configurable: true,
    get: function () {
      if (this.delayMillis_8be2vx$_474j0t$_0 == null)
        return throwUPAE('delayMillis');
      return this.delayMillis_8be2vx$_474j0t$_0;
    },
    set: function (delayMillis) {
      this.delayMillis_8be2vx$_474j0t$_0 = delayMillis;
    }
  });
  function HttpRequestRetry$Configuration$noRetry$lambda($receiver, f, f_0) {
    return false;
  }
  function HttpRequestRetry$Configuration$noRetry$lambda_0($receiver, f, f_0) {
    return false;
  }
  HttpRequestRetry$Configuration.prototype.noRetry = function () {
    this.maxRetries = 0;
    this.shouldRetry_8be2vx$ = HttpRequestRetry$Configuration$noRetry$lambda;
    this.shouldRetryOnException_8be2vx$ = HttpRequestRetry$Configuration$noRetry$lambda_0;
  };
  HttpRequestRetry$Configuration.prototype.modifyRequest_2ju1wn$ = function (block) {
    this.modifyRequest_8be2vx$ = block;
  };
  HttpRequestRetry$Configuration.prototype.retryIf_5xk0mr$ = function (maxRetries, block) {
    if (maxRetries === void 0)
      maxRetries = -1;
    if (maxRetries !== -1)
      this.maxRetries = maxRetries;
    this.shouldRetry_8be2vx$ = block;
  };
  HttpRequestRetry$Configuration.prototype.retryOnExceptionIf_dm4w6m$ = function (maxRetries, block) {
    if (maxRetries === void 0)
      maxRetries = -1;
    if (maxRetries !== -1)
      this.maxRetries = maxRetries;
    this.shouldRetryOnException_8be2vx$ = block;
  };
  function HttpRequestRetry$Configuration$retryOnException$lambda($receiver, f, cause) {
    return !Kotlin.isType(cause, CancellationException);
  }
  HttpRequestRetry$Configuration.prototype.retryOnException_za3lpa$ = function (maxRetries) {
    if (maxRetries === void 0)
      maxRetries = -1;
    this.retryOnExceptionIf_dm4w6m$(maxRetries, HttpRequestRetry$Configuration$retryOnException$lambda);
  };
  function HttpRequestRetry$Configuration$retryOnServerErrors$lambda($receiver, f, response) {
    var it = response.status.value;
    return 500 <= it && it <= 599;
  }
  HttpRequestRetry$Configuration.prototype.retryOnServerErrors_za3lpa$ = function (maxRetries) {
    if (maxRetries === void 0)
      maxRetries = -1;
    this.retryIf_5xk0mr$(maxRetries, HttpRequestRetry$Configuration$retryOnServerErrors$lambda);
  };
  HttpRequestRetry$Configuration.prototype.retryOnExceptionOrServerErrors_za3lpa$ = function (maxRetries) {
    if (maxRetries === void 0)
      maxRetries = -1;
    this.retryOnServerErrors_za3lpa$(maxRetries);
    this.retryOnException_za3lpa$(maxRetries);
  };
  function HttpRequestRetry$Configuration$delayMillis$lambda(closure$respectRetryAfterHeader, closure$block) {
    return function ($receiver, it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (closure$respectRetryAfterHeader) {
        var retryAfter = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.response) != null ? tmp$.headers : null) != null ? tmp$_0.get_61zpoe$(http.HttpHeaders.RetryAfter) : null) != null ? toLongOrNull(tmp$_1) : null) != null ? tmp$_2.multiply(Kotlin.Long.fromInt(1000)) : null;
        var a = closure$block($receiver, it);
        var b = retryAfter != null ? retryAfter : L0;
        return a.compareTo_11rb$(b) >= 0 ? a : b;
      } else {
        return closure$block($receiver, it);
      }
    };
  }
  HttpRequestRetry$Configuration.prototype.delayMillis_xofa3c$ = function (respectRetryAfterHeader, block) {
    if (respectRetryAfterHeader === void 0)
      respectRetryAfterHeader = true;
    this.delayMillis_8be2vx$ = HttpRequestRetry$Configuration$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  function HttpRequestRetry$Configuration$constantDelay$lambda(closure$millis, closure$randomizationMs, this$Configuration) {
    return function ($receiver, it) {
      return closure$millis.add(this$Configuration.randomMs_0(closure$randomizationMs));
    };
  }
  HttpRequestRetry$Configuration.prototype.constantDelay_6o1nvj$ = function (millis, randomizationMs, respectRetryAfterHeader) {
    if (millis === void 0)
      millis = L1000;
    if (randomizationMs === void 0)
      randomizationMs = L1000;
    if (respectRetryAfterHeader === void 0)
      respectRetryAfterHeader = true;
    if (!(millis.toNumber() > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(randomizationMs.toNumber() >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    this.delayMillis_xofa3c$(respectRetryAfterHeader, HttpRequestRetry$Configuration$constantDelay$lambda(millis, randomizationMs, this));
  };
  function HttpRequestRetry$Configuration$exponentialDelay$lambda(closure$base, closure$maxDelayMs, closure$randomizationMs, this$Configuration) {
    return function ($receiver, retry) {
      var $receiver_0 = closure$base;
      var a = Kotlin.Long.fromNumber(JsMath.pow($receiver_0, retry)).multiply(L1000);
      var b = closure$maxDelayMs;
      var delay = a.compareTo_11rb$(b) <= 0 ? a : b;
      return delay.add(this$Configuration.randomMs_0(closure$randomizationMs));
    };
  }
  HttpRequestRetry$Configuration.prototype.exponentialDelay_rel7ht$ = function (base, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    if (base === void 0)
      base = 2.0;
    if (maxDelayMs === void 0)
      maxDelayMs = L60000;
    if (randomizationMs === void 0)
      randomizationMs = L1000;
    if (respectRetryAfterHeader === void 0)
      respectRetryAfterHeader = true;
    if (!(base > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(maxDelayMs.toNumber() > 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    if (!(randomizationMs.toNumber() >= 0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }
    this.delayMillis_xofa3c$(respectRetryAfterHeader, HttpRequestRetry$Configuration$exponentialDelay$lambda(base, maxDelayMs, randomizationMs, this));
  };
  HttpRequestRetry$Configuration.prototype.delay_lipqu2$ = function (block) {
    this.delay_8be2vx$ = block;
  };
  HttpRequestRetry$Configuration.prototype.randomMs_0 = function (randomizationMs) {
    return equals(randomizationMs, L0) ? L0 : Random.Default.nextLong_s8cxhz$(randomizationMs);
  };
  function HttpRequestRetry$Configuration$modifyRequest$lambda($receiver, it) {
    return Unit;
  }
  function Coroutine$HttpRequestRetry$Configuration$delay$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$HttpRequestRetry$Configuration$delay$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpRequestRetry$Configuration$delay$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpRequestRetry$Configuration$delay$lambda.prototype.constructor = Coroutine$HttpRequestRetry$Configuration$delay$lambda;
  Coroutine$HttpRequestRetry$Configuration$delay$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function HttpRequestRetry$Configuration$delay$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$HttpRequestRetry$Configuration$delay$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  HttpRequestRetry$Configuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Configuration',
    interfaces: []
  };
  function Coroutine$HttpRequestRetry$intercept$lambda(this$HttpRequestRetry_0, closure$client_0, $receiver_0, request_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 8;
    this.local$this$HttpRequestRetry = this$HttpRequestRetry_0;
    this.local$closure$client = closure$client_0;
    this.local$tmp$_4 = void 0;
    this.local$retryCount = void 0;
    this.local$shouldRetry = void 0;
    this.local$shouldRetryOnException = void 0;
    this.local$maxRetries = void 0;
    this.local$delayMillis = void 0;
    this.local$modifyRequest = void 0;
    this.local$call = void 0;
    this.local$lastRetryData = void 0;
    this.local$subRequest = void 0;
    this.local$$receiver = $receiver_0;
    this.local$request = request_0;
  }
  Coroutine$HttpRequestRetry$intercept$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpRequestRetry$intercept$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpRequestRetry$intercept$lambda.prototype.constructor = Coroutine$HttpRequestRetry$intercept$lambda;
  Coroutine$HttpRequestRetry$intercept$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            this.local$retryCount = 0;
            this.local$shouldRetry = (tmp$ = this.local$request.attributes.getOrNull_yzaw86$(ShouldRetryPerRequestAttributeKey)) != null ? tmp$ : this.local$this$HttpRequestRetry.shouldRetry_0;
            this.local$shouldRetryOnException = (tmp$_0 = this.local$request.attributes.getOrNull_yzaw86$(ShouldRetryOnExceptionPerRequestAttributeKey)) != null ? tmp$_0 : this.local$this$HttpRequestRetry.shouldRetryOnException_0;
            this.local$maxRetries = (tmp$_1 = this.local$request.attributes.getOrNull_yzaw86$(MaxRetriesPerRequestAttributeKey)) != null ? tmp$_1 : this.local$this$HttpRequestRetry.maxRetries_0;
            this.local$delayMillis = (tmp$_2 = this.local$request.attributes.getOrNull_yzaw86$(RetryDelayPerRequestAttributeKey)) != null ? tmp$_2 : this.local$this$HttpRequestRetry.delayMillis_0;
            this.local$modifyRequest = (tmp$_3 = this.local$request.attributes.getOrNull_yzaw86$(ModifyRequestPerRequestAttributeKey)) != null ? tmp$_3 : this.local$this$HttpRequestRetry.modifyRequest_0;
            this.local$lastRetryData = null;
            this.state_0 = 1;
            continue;
          case 1:
            this.local$subRequest = this.local$this$HttpRequestRetry.prepareRequest_0(this.local$request);
            this.exceptionState_0 = 5;
            if (this.local$lastRetryData != null) {
              var modifyRequestContext = new HttpRequestRetry$ModifyRequestContext(this.local$request, this.local$lastRetryData.response, this.local$lastRetryData.cause, this.local$lastRetryData.retryCount);
              this.local$modifyRequest(modifyRequestContext, this.local$subRequest);
            }

            this.state_0 = 2;
            this.result_0 = this.local$$receiver.execute_s9rlw$(this.local$subRequest, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$call = this.result_0;
            if (!this.local$this$HttpRequestRetry.shouldRetry_1(this.local$retryCount, this.local$maxRetries, this.local$shouldRetry, this.local$call)) {
              this.exceptionState_0 = 5;
              this.state_0 = 4;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$tmp$_4 = new HttpRequestRetry$RetryEventData(this.local$subRequest, (this.local$retryCount = this.local$retryCount + 1 | 0, this.local$retryCount), this.local$call.response, null);
            this.exceptionState_0 = 8;
            this.state_0 = 6;
            continue;
          case 4:
            return this.local$call;
          case 5:
            this.exceptionState_0 = 8;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              if (!this.local$this$HttpRequestRetry.shouldRetryOnException_1(this.local$retryCount, this.local$maxRetries, this.local$shouldRetryOnException, this.local$subRequest, cause)) {
                throw cause;
              }
              this.local$tmp$_4 = new HttpRequestRetry$RetryEventData(this.local$subRequest, (this.local$retryCount = this.local$retryCount + 1 | 0, this.local$retryCount), null, cause);
            } else
              throw cause;
            this.state_0 = 6;
            continue;
          case 6:
            var retryData = this.local$tmp$_4;
            this.local$lastRetryData = retryData;
            this.local$closure$client.monitor.raise_asioqi$(HttpRequestRetry$Plugin_getInstance().HttpRequestRetryEvent, this.local$lastRetryData);
            var delayContext = new HttpRequestRetry$DelayContext(this.local$lastRetryData.request, this.local$lastRetryData.response, this.local$lastRetryData.cause);
            this.state_0 = 7;
            this.result_0 = this.local$this$HttpRequestRetry.delay_0(this.local$delayMillis(delayContext, this.local$retryCount), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            throw this.exception_0;
          default:
            this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HttpRequestRetry$intercept$lambda(this$HttpRequestRetry_0, closure$client_0) {
    return function ($receiver_0, request_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpRequestRetry$intercept$lambda(this$HttpRequestRetry_0, closure$client_0, $receiver_0, request_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpRequestRetry.prototype.intercept_k2lke9$ = function (client) {
    plugin(client, HttpSend$Plugin_getInstance()).intercept_aa8w70$(HttpRequestRetry$intercept$lambda(this, client));
  };
  HttpRequestRetry.prototype.shouldRetry_1 = function (retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRequestRetry$ShouldRetryContext(retryCount + 1 | 0), call.request, call.response);
  };
  HttpRequestRetry.prototype.shouldRetryOnException_1 = function (retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRequestRetry$ShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  };
  function Coroutine$HttpRequestRetry$prepareRequest$lambda(closure$subRequestJob_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$subRequestJob = closure$subRequestJob_0;
  }
  Coroutine$HttpRequestRetry$prepareRequest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpRequestRetry$prepareRequest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpRequestRetry$prepareRequest$lambda.prototype.constructor = Coroutine$HttpRequestRetry$prepareRequest$lambda;
  Coroutine$HttpRequestRetry$prepareRequest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$subRequestJob.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function HttpRequestRetry$prepareRequest$lambda(closure$subRequestJob_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpRequestRetry$prepareRequest$lambda(closure$subRequestJob_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function HttpRequestRetry$prepareRequest$lambda_0(closure$subRequestJob) {
    return function (it) {
      if (it == null)
        closure$subRequestJob.complete();
      else
        closure$subRequestJob.completeExceptionally_tcv7n7$(it);
      return Unit;
    };
  }
  HttpRequestRetry.prototype.prepareRequest_0 = function (request) {
    var subRequest = (new HttpRequestBuilder()).takeFrom_s9rlw$(request);
    var subRequestJob = Job_0();
    subRequest.executionContext = subRequestJob;
    launch(CoroutineScope_0(request.executionContext), void 0, void 0, HttpRequestRetry$prepareRequest$lambda(subRequestJob));
    request.executionContext.invokeOnCompletion_f05bi3$(HttpRequestRetry$prepareRequest$lambda_0(subRequestJob));
    return subRequest;
  };
  function HttpRequestRetry$Plugin() {
    HttpRequestRetry$Plugin_instance = this;
    this.key_y2bw0w$_0 = new AttributeKey('RetryFeature');
    this.HttpRequestRetryEvent = new EventDefinition();
  }
  Object.defineProperty(HttpRequestRetry$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_y2bw0w$_0;
    }
  });
  HttpRequestRetry$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpRequestRetry$Configuration();
    block($receiver);
    var configuration = $receiver;
    return new HttpRequestRetry(configuration);
  };
  HttpRequestRetry$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    plugin.intercept_k2lke9$(scope);
  };
  HttpRequestRetry$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var HttpRequestRetry$Plugin_instance = null;
  function HttpRequestRetry$Plugin_getInstance() {
    if (HttpRequestRetry$Plugin_instance === null) {
      new HttpRequestRetry$Plugin();
    }
    return HttpRequestRetry$Plugin_instance;
  }
  HttpRequestRetry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestRetry',
    interfaces: []
  };
  function retry($receiver, block) {
    var $receiver_0 = new HttpRequestRetry$Configuration();
    block($receiver_0);
    var configuration = $receiver_0;
    $receiver.attributes.put_uuntuo$(ShouldRetryPerRequestAttributeKey, configuration.shouldRetry_8be2vx$);
    $receiver.attributes.put_uuntuo$(ShouldRetryOnExceptionPerRequestAttributeKey, configuration.shouldRetryOnException_8be2vx$);
    $receiver.attributes.put_uuntuo$(RetryDelayPerRequestAttributeKey, configuration.delayMillis_8be2vx$);
    $receiver.attributes.put_uuntuo$(MaxRetriesPerRequestAttributeKey, configuration.maxRetries);
    $receiver.attributes.put_uuntuo$(ModifyRequestPerRequestAttributeKey, configuration.modifyRequest_8be2vx$);
  }
  var MaxRetriesPerRequestAttributeKey;
  var ShouldRetryPerRequestAttributeKey;
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  var ModifyRequestPerRequestAttributeKey;
  var RetryDelayPerRequestAttributeKey;
  function Sender() {
  }
  Sender.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Sender',
    interfaces: []
  };
  function HttpSend(maxSendCount) {
    HttpSend$Plugin_getInstance();
    if (maxSendCount === void 0)
      maxSendCount = 20;
    this.maxSendCount_0 = maxSendCount;
    this.interceptors_0 = ArrayList_init();
  }
  function HttpSend$Config() {
    this.maxSendCount = 20;
  }
  HttpSend$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  HttpSend.prototype.intercept_w12cfo$ = function (block) {
    throw IllegalStateException_init(('This interceptors do not allow to intercept original call. ' + 'Please use another overload and call `this.execute(request)` manually').toString());
  };
  HttpSend.prototype.intercept_aa8w70$ = function (block) {
    this.interceptors_0.add_11rb$(block);
  };
  function HttpSend$Plugin() {
    HttpSend$Plugin_instance = this;
    this.key_uv5xfz$_0 = new AttributeKey('HttpSend');
  }
  Object.defineProperty(HttpSend$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_uv5xfz$_0;
    }
  });
  HttpSend$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpSend$Config();
    block($receiver);
    var config = $receiver;
    return new HttpSend(config.maxSendCount);
  };
  function Coroutine$HttpSend$Plugin$install$lambda(closure$plugin_0, closure$scope_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$scope = closure$scope_0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpSend$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpSend$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpSend$Plugin$install$lambda.prototype.constructor = Coroutine$HttpSend$Plugin$install$lambda;
  Coroutine$HttpSend$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!Kotlin.isType(this.local$content, OutgoingContent)) {
              var message = trimMargin('\n' + '|Fail to prepare request body for sending. ' + '\n' + '|The body type is: ' + Kotlin.getKClassFromExpression(this.local$content) + ', with Content-Type: ' + toString(contentType(this.local$$receiver.context)) + '.' + '\n' + '|' + '\n' + '|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init(message.toString());
            }

            var $receiver = this.local$$receiver.context;
            if (this.local$content == null) {
              $receiver.body = package$utils.EmptyContent;
              $receiver.bodyType = null;
            } else if (Kotlin.isType(this.local$content, OutgoingContent)) {
              $receiver.body = this.local$content;
              $receiver.bodyType = null;
            } else {
              $receiver.body = this.local$content;
              var tmp$ = reflect.JsType;
              var tmp$_0 = getKClass(OutgoingContent);
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(getKClass(OutgoingContent), [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }

            var realSender = new HttpSend$DefaultSender(this.local$closure$plugin.maxSendCount_0, this.local$closure$scope);
            var interceptedSender = {v: realSender};
            var tmp$_1;
            tmp$_1 = downTo(get_lastIndex(this.local$closure$plugin.interceptors_0), 0).iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              var interceptor = this.local$closure$plugin.interceptors_0.get_za3lpa$(element);
              interceptedSender.v = new HttpSend$InterceptedSender(interceptor, interceptedSender.v);
            }

            this.state_0 = 2;
            this.result_0 = interceptedSender.v.execute_s9rlw$(this.local$$receiver.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var call = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(call, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function HttpSend$Plugin$install$lambda(closure$plugin_0, closure$scope_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpSend$Plugin$install$lambda(closure$plugin_0, closure$scope_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpSend$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Send, HttpSend$Plugin$install$lambda(plugin, scope));
  };
  HttpSend$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var HttpSend$Plugin_instance = null;
  function HttpSend$Plugin_getInstance() {
    if (HttpSend$Plugin_instance === null) {
      new HttpSend$Plugin();
    }
    return HttpSend$Plugin_instance;
  }
  function HttpSend$InterceptedSender(interceptor, nextSender) {
    this.interceptor_0 = interceptor;
    this.nextSender_0 = nextSender;
  }
  HttpSend$InterceptedSender.prototype.execute_s9rlw$ = function (requestBuilder, continuation) {
    return this.interceptor_0(this.nextSender_0, requestBuilder, continuation);
  };
  HttpSend$InterceptedSender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterceptedSender',
    interfaces: [Sender]
  };
  function HttpSend$DefaultSender(maxSendCount, client) {
    this.maxSendCount_0 = maxSendCount;
    this.client_0 = client;
    this.sentCount_0 = 0;
    this.currentCall_0 = null;
  }
  function Coroutine$execute_s9rlw$($this, requestBuilder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$requestBuilder = requestBuilder_0;
  }
  Coroutine$execute_s9rlw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_s9rlw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_s9rlw$.prototype.constructor = Coroutine$execute_s9rlw$;
  Coroutine$execute_s9rlw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            (tmp$ = this.$this.currentCall_0) != null ? (cancel(tmp$), Unit) : null;
            if (this.$this.sentCount_0 >= this.$this.maxSendCount_0) {
              throw new SendCountExceedException('Max send count ' + this.$this.maxSendCount_0 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            this.$this.sentCount_0 = this.$this.sentCount_0 + 1 | 0;
            this.state_0 = 2;
            this.result_0 = this.$this.client_0.sendPipeline.execute_8pmvt0$(this.local$requestBuilder, this.local$requestBuilder.body, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var sendResult = this.result_0;
            var tmp$_2;
            if ((tmp$_1 = Kotlin.isType(tmp$_0 = sendResult, HttpClientCall) ? tmp$_0 : null) != null)
              tmp$_2 = tmp$_1;
            else {
              throw IllegalStateException_init(('Failed to execute send pipeline. Expected [HttpClientCall], but received ' + sendResult.toString()).toString());
            }

            var call = tmp$_2;
            this.$this.currentCall_0 = call;
            return call;
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
  HttpSend$DefaultSender.prototype.execute_s9rlw$ = function (requestBuilder_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_s9rlw$(this, requestBuilder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpSend$DefaultSender.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultSender',
    interfaces: [Sender]
  };
  HttpSend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpSend',
    interfaces: []
  };
  function SendCountExceedException(message) {
    IllegalStateException_init(message, this);
    this.name = 'SendCountExceedException';
  }
  SendCountExceedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SendCountExceedException',
    interfaces: [IllegalStateException]
  };
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    HttpTimeout$Plugin_getInstance();
    this.requestTimeoutMillis_0 = requestTimeoutMillis;
    this.connectTimeoutMillis_0 = connectTimeoutMillis;
    this.socketTimeoutMillis_0 = socketTimeoutMillis;
  }
  function HttpTimeout$HttpTimeoutCapabilityConfiguration() {
    HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_getInstance();
    this._requestTimeoutMillis_0 = L0;
    this._connectTimeoutMillis_0 = L0;
    this._socketTimeoutMillis_0 = L0;
  }
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, 'requestTimeoutMillis', {
    configurable: true,
    get: function () {
      return this._requestTimeoutMillis_0;
    },
    set: function (value) {
      this._requestTimeoutMillis_0 = this.checkTimeoutValue_0(value);
    }
  });
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, 'connectTimeoutMillis', {
    configurable: true,
    get: function () {
      return this._connectTimeoutMillis_0;
    },
    set: function (value) {
      this._connectTimeoutMillis_0 = this.checkTimeoutValue_0(value);
    }
  });
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype, 'socketTimeoutMillis', {
    configurable: true,
    get: function () {
      return this._socketTimeoutMillis_0;
    },
    set: function (value) {
      this._socketTimeoutMillis_0 = this.checkTimeoutValue_0(value);
    }
  });
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.build_8be2vx$ = function () {
    return new HttpTimeout(this.requestTimeoutMillis, this.connectTimeoutMillis, this.socketTimeoutMillis);
  };
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.checkTimeoutValue_0 = function (value) {
    if (!(value == null || value.toNumber() > 0)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init(message.toString());
    }
    return value;
  };
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, HttpTimeout$HttpTimeoutCapabilityConfiguration) ? tmp$_0 : throwCCE();
    if (!equals(this._requestTimeoutMillis_0, other._requestTimeoutMillis_0))
      return false;
    if (!equals(this._connectTimeoutMillis_0, other._connectTimeoutMillis_0))
      return false;
    if (!equals(this._socketTimeoutMillis_0, other._socketTimeoutMillis_0))
      return false;
    return true;
  };
  HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var result = (tmp$_0 = (tmp$ = this._requestTimeoutMillis_0) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0;
    result = (31 * result | 0) + ((tmp$_2 = (tmp$_1 = this._connectTimeoutMillis_0) != null ? hashCode(tmp$_1) : null) != null ? tmp$_2 : 0) | 0;
    result = (31 * result | 0) + ((tmp$_4 = (tmp$_3 = this._socketTimeoutMillis_0) != null ? hashCode(tmp$_3) : null) != null ? tmp$_4 : 0) | 0;
    return result;
  };
  function HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion() {
    HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance = this;
    this.key = new AttributeKey('TimeoutConfiguration');
  }
  HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance = null;
  function HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_getInstance() {
    if (HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance === null) {
      new HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion();
    }
    return HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_instance;
  }
  HttpTimeout$HttpTimeoutCapabilityConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpTimeoutCapabilityConfiguration',
    interfaces: []
  };
  function HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    if (requestTimeoutMillis === void 0)
      requestTimeoutMillis = null;
    if (connectTimeoutMillis === void 0)
      connectTimeoutMillis = null;
    if (socketTimeoutMillis === void 0)
      socketTimeoutMillis = null;
    $this = $this || Object.create(HttpTimeout$HttpTimeoutCapabilityConfiguration.prototype);
    HttpTimeout$HttpTimeoutCapabilityConfiguration.call($this);
    $this.requestTimeoutMillis = requestTimeoutMillis;
    $this.connectTimeoutMillis = connectTimeoutMillis;
    $this.socketTimeoutMillis = socketTimeoutMillis;
    return $this;
  }
  HttpTimeout.prototype.hasNotNullTimeouts_0 = function () {
    return this.requestTimeoutMillis_0 != null || this.connectTimeoutMillis_0 != null || this.socketTimeoutMillis_0 != null;
  };
  function HttpTimeout$Plugin() {
    HttpTimeout$Plugin_instance = this;
    this.key_9he6wm$_0 = new AttributeKey('TimeoutPlugin');
    this.INFINITE_TIMEOUT_MS = Long$Companion$MAX_VALUE;
  }
  Object.defineProperty(HttpTimeout$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_9he6wm$_0;
    }
  });
  HttpTimeout$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init();
    block($receiver);
    return $receiver.build_8be2vx$();
  };
  function Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda(closure$requestTimeout_0, closure$context_0, closure$executionContext_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$requestTimeout = closure$requestTimeout_0;
    this.local$closure$context = closure$context_0;
    this.local$closure$executionContext = closure$executionContext_0;
  }
  Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda.prototype.constructor = Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda;
  Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(this.local$closure$requestTimeout, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var cause = HttpRequestTimeoutException_init(this.local$closure$context);
            return cancel_2(this.local$closure$executionContext, ensureNotNull(cause.message), cause), Unit;
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
  function HttpTimeout$Plugin$install$lambda$lambda$lambda(closure$requestTimeout_0, closure$context_0, closure$executionContext_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpTimeout$Plugin$install$lambda$lambda$lambda(closure$requestTimeout_0, closure$context_0, closure$executionContext_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function HttpTimeout$Plugin$install$lambda$lambda$lambda_0(closure$killer) {
    return function (it) {
      closure$killer.cancel_x5z25k$();
      return Unit;
    };
  }
  function Coroutine$HttpTimeout$Plugin$install$lambda(closure$plugin_0, this$HttpTimeout$_0, closure$scope_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$this$HttpTimeout$ = this$HttpTimeout$_0;
    this.local$closure$scope = closure$scope_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpTimeout$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpTimeout$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpTimeout$Plugin$install$lambda.prototype.constructor = Coroutine$HttpTimeout$Plugin$install$lambda;
  Coroutine$HttpTimeout$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var isWebSocket = isWebsocket(this.local$$receiver.context.url.protocol);
            if (isWebSocket || Kotlin.isType(this.local$$receiver.context.body, ClientUpgradeContent))
              return;
            var configuration = this.local$$receiver.context.getCapabilityOrNull_i25mbv$(HttpTimeout$Plugin_getInstance());
            if (configuration == null && this.local$closure$plugin.hasNotNullTimeouts_0()) {
              configuration = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init();
              this.local$$receiver.context.setCapability_wfl2px$(HttpTimeout$Plugin_getInstance(), configuration);
            }

            var tmp$;
            if (configuration != null) {
              var $receiver = configuration;
              var closure$plugin = this.local$closure$plugin;
              var this$HttpTimeout$ = this.local$this$HttpTimeout$;
              var closure$scope = this.local$closure$scope;
              block$break: do {
                var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
                var context = this.local$$receiver.context;
                $receiver.connectTimeoutMillis = (tmp$_0 = $receiver.connectTimeoutMillis) != null ? tmp$_0 : closure$plugin.connectTimeoutMillis_0;
                $receiver.socketTimeoutMillis = (tmp$_1 = $receiver.socketTimeoutMillis) != null ? tmp$_1 : closure$plugin.socketTimeoutMillis_0;
                $receiver.requestTimeoutMillis = (tmp$_2 = $receiver.requestTimeoutMillis) != null ? tmp$_2 : closure$plugin.requestTimeoutMillis_0;
                var requestTimeout = (tmp$_3 = $receiver.requestTimeoutMillis) != null ? tmp$_3 : closure$plugin.requestTimeoutMillis_0;
                if (requestTimeout == null || equals(requestTimeout, this$HttpTimeout$.INFINITE_TIMEOUT_MS))
                  break block$break;
                var executionContext = context.executionContext;
                var killer = launch(closure$scope, void 0, void 0, HttpTimeout$Plugin$install$lambda$lambda$lambda(requestTimeout, context, executionContext));
                context.executionContext.invokeOnCompletion_f05bi3$(HttpTimeout$Plugin$install$lambda$lambda$lambda_0(killer));
              }
               while (false);
              tmp$ = $receiver;
            } else
              tmp$ = null;
            return tmp$;
          case 1:
            throw this.exception_0;
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
  function HttpTimeout$Plugin$install$lambda(closure$plugin_0, this$HttpTimeout$_0, closure$scope_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpTimeout$Plugin$install$lambda(closure$plugin_0, this$HttpTimeout$_0, closure$scope_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpTimeout$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Before, HttpTimeout$Plugin$install$lambda(plugin, this, scope));
  };
  HttpTimeout$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientEngineCapability, HttpClientPlugin]
  };
  var HttpTimeout$Plugin_instance = null;
  function HttpTimeout$Plugin_getInstance() {
    if (HttpTimeout$Plugin_instance === null) {
      new HttpTimeout$Plugin();
    }
    return HttpTimeout$Plugin_instance;
  }
  HttpTimeout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpTimeout',
    interfaces: []
  };
  function timeout($receiver, block) {
    var tmp$ = HttpTimeout$Plugin_getInstance();
    var $receiver_0 = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init();
    block($receiver_0);
    $receiver.setCapability_wfl2px$(tmp$, $receiver_0);
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    IOException_init('Request timeout has expired [url=' + url + ', request_timeout=' + (timeoutMillis != null ? timeoutMillis : 'unknown').toString() + ' ms]', this);
    this.name = 'HttpRequestTimeoutException';
  }
  HttpRequestTimeoutException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestTimeoutException',
    interfaces: [IOException]
  };
  function HttpRequestTimeoutException_init(request, $this) {
    $this = $this || Object.create(HttpRequestTimeoutException.prototype);
    var tmp$;
    HttpRequestTimeoutException.call($this, request.url.buildString(), (tmp$ = request.getCapabilityOrNull_i25mbv$(HttpTimeout$Plugin_getInstance())) != null ? tmp$.requestTimeoutMillis : null);
    return $this;
  }
  function HttpRequestTimeoutException_init_0(request, $this) {
    $this = $this || Object.create(HttpRequestTimeoutException.prototype);
    var tmp$;
    HttpRequestTimeoutException.call($this, request.url.toString(), (tmp$ = request.getCapabilityOrNull_1sr7de$(HttpTimeout$Plugin_getInstance())) != null ? tmp$.requestTimeoutMillis : null);
    return $this;
  }
  function ConnectTimeoutException(request, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$, tmp$_0;
    return new ConnectTimeoutException_1('Connect timeout has expired [url=' + request.url + ', ' + ('connect_timeout=' + ((tmp$_0 = (tmp$ = request.getCapabilityOrNull_1sr7de$(HttpTimeout$Plugin_getInstance())) != null ? tmp$.connectTimeoutMillis : null) != null ? tmp$_0 : 'unknown').toString() + ' ms]'), cause);
  }
  function ConnectTimeoutException_0(url, timeout, cause) {
    if (cause === void 0)
      cause = null;
    return new ConnectTimeoutException_1('Connect timeout has expired [url=' + url + ', connect_timeout=' + (timeout != null ? timeout : 'unknown').toString() + ' ms]', cause);
  }
  function SocketTimeoutException(request, cause) {
    if (cause === void 0)
      cause = null;
    var tmp$, tmp$_0;
    return new SocketTimeoutException_0('Socket timeout has expired [url=' + request.url + ', ' + ('socket_timeout=' + ((tmp$_0 = (tmp$ = request.getCapabilityOrNull_1sr7de$(HttpTimeout$Plugin_getInstance())) != null ? tmp$.socketTimeoutMillis : null) != null ? tmp$_0 : 'unknown').toString() + '] ms'), cause);
  }
  function convertLongTimeoutToIntWithInfiniteAsZero(timeout) {
    if (equals(timeout, HttpTimeout$Plugin_getInstance().INFINITE_TIMEOUT_MS))
      return 0;
    else if (timeout.toNumber() < -2147483648)
      return -2147483648;
    else if (timeout.toNumber() > 2147483647)
      return 2147483647;
    else
      return timeout.toInt();
  }
  function convertLongTimeoutToLongWithInfiniteAsZero(timeout) {
    if (equals(timeout, HttpTimeout$Plugin_getInstance().INFINITE_TIMEOUT_MS))
      return L0;
    else
      return timeout;
  }
  var unwrapRequestTimeoutException = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.plugins.unwrapRequestTimeoutException_klfg04$', wrapFunction(function () {
    var unwrapCancellationException = _.io.ktor.client.utils.unwrapCancellationException_dbl4o4$;
    var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
    return function (block) {
      try {
        return block();
      } catch (cause) {
        if (Kotlin.isType(cause, CancellationException)) {
          throw unwrapCancellationException(cause);
        } else
          throw cause;
      }
    };
  }));
  function UserAgent(agent) {
    UserAgent$Plugin_getInstance();
    this.agent = agent;
  }
  function UserAgent$Config(agent) {
    if (agent === void 0)
      agent = 'Ktor http-client';
    this.agent = agent;
  }
  UserAgent$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function UserAgent$Plugin() {
    UserAgent$Plugin_instance = this;
    this.key_vlyr9n$_0 = new AttributeKey('UserAgent');
  }
  Object.defineProperty(UserAgent$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_vlyr9n$_0;
    }
  });
  UserAgent$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new UserAgent$Config();
    block($receiver);
    return new UserAgent($receiver.agent);
  };
  function Coroutine$UserAgent$Plugin$install$lambda(closure$plugin_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$UserAgent$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UserAgent$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UserAgent$Plugin$install$lambda.prototype.constructor = Coroutine$UserAgent$Plugin$install$lambda;
  Coroutine$UserAgent$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return header(this.local$$receiver.context, http.HttpHeaders.UserAgent, this.local$closure$plugin.agent), Unit;
          case 1:
            throw this.exception_0;
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
  function UserAgent$Plugin$install$lambda(closure$plugin_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$UserAgent$Plugin$install$lambda(closure$plugin_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  UserAgent$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().State, UserAgent$Plugin$install$lambda(plugin));
  };
  UserAgent$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var UserAgent$Plugin_instance = null;
  function UserAgent$Plugin_getInstance() {
    if (UserAgent$Plugin_instance === null) {
      new UserAgent$Plugin();
    }
    return UserAgent$Plugin_instance;
  }
  UserAgent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserAgent',
    interfaces: []
  };
  function BrowserUserAgent$lambda($receiver) {
    $receiver.agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) ' + 'Ubuntu Chromium/70.0.3538.77 Chrome/70.0.3538.77 Safari/537.36';
    return Unit;
  }
  function BrowserUserAgent($receiver) {
    $receiver.install_dq2y33$(UserAgent$Plugin_getInstance(), BrowserUserAgent$lambda);
  }
  function CurlUserAgent$lambda($receiver) {
    $receiver.agent = 'curl/7.61.0';
    return Unit;
  }
  function CurlUserAgent($receiver) {
    $receiver.install_dq2y33$(UserAgent$Plugin_getInstance(), CurlUserAgent$lambda);
  }
  var compareByDescending$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function CacheControl() {
    CacheControl_instance = this;
    this.NO_STORE_8be2vx$ = new HeaderValue('no-store');
    this.NO_CACHE_8be2vx$ = new HeaderValue('no-cache');
    this.PRIVATE_8be2vx$ = new HeaderValue('private');
    this.MUST_REVALIDATE_8be2vx$ = new HeaderValue('must-revalidate');
  }
  CacheControl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CacheControl',
    interfaces: []
  };
  var CacheControl_instance = null;
  function CacheControl_getInstance() {
    if (CacheControl_instance === null) {
      new CacheControl();
    }
    return CacheControl_instance;
  }
  function HttpCache(publicStorage, privateStorage) {
    HttpCache$Companion_getInstance();
    this.publicStorage = publicStorage;
    this.privateStorage = privateStorage;
  }
  function HttpCache$Config() {
    this.publicStorage = HttpCacheStorage$Companion_getInstance().Unlimited();
    this.privateStorage = HttpCacheStorage$Companion_getInstance().Unlimited();
  }
  HttpCache$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpCache$Companion() {
    HttpCache$Companion_instance = this;
    this.key_p083cc$_0 = new AttributeKey('HttpCache');
    this.HttpResponseFromCache = new EventDefinition();
  }
  Object.defineProperty(HttpCache$Companion.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_p083cc$_0;
    }
  });
  HttpCache$Companion.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpCache$Config();
    block($receiver);
    var config = $receiver;
    return new HttpCache(config.publicStorage, config.privateStorage);
  };
  function Coroutine$HttpCache$Companion$install$lambda(closure$plugin_0, closure$scope_0, this$HttpCache$_0, $receiver_0, content_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$scope = closure$scope_0;
    this.local$this$HttpCache$ = this$HttpCache$_0;
    this.local$tmp$_0 = void 0;
    this.local$cache = void 0;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
  }
  Coroutine$HttpCache$Companion$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCache$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCache$Companion$install$lambda.prototype.constructor = Coroutine$HttpCache$Companion$install$lambda;
  Coroutine$HttpCache$Companion$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0, tmp$_1;
            if (!Kotlin.isType(this.local$content, OutgoingContent$NoContent)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!((tmp$ = this.local$$receiver.context.method) != null ? tmp$.equals(HttpMethod.Companion.Get) : null) || !canStore(this.local$$receiver.context.url.protocol)) {
              return;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$tmp$_0 = this.local$closure$plugin.findResponse_0(this.local$$receiver.context, this.local$content);
            if (this.local$tmp$_0 == null) {
              return;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.local$cache = this.local$tmp$_0;
            if (!shouldValidate(this.local$cache)) {
              this.local$$receiver.finish();
              var call = this.local$cache.produceResponse_8be2vx$().call;
              this.local$closure$scope.monitor.raise_asioqi$(this.local$this$HttpCache$.HttpResponseFromCache, call.response);
              this.state_0 = 5;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(call, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            return;
          case 6:
            if ((tmp$_0 = this.local$cache.responseHeaders_8be2vx$.get_61zpoe$(http.HttpHeaders.ETag)) != null) {
              header(this.local$$receiver.context, http.HttpHeaders.IfNoneMatch, tmp$_0);
            }

            var tmp$_2;
            if ((tmp$_1 = this.local$cache.responseHeaders_8be2vx$.get_61zpoe$(http.HttpHeaders.LastModified)) != null) {
              header(this.local$$receiver.context, http.HttpHeaders.IfModifiedSince, tmp$_1);
              tmp$_2 = Unit;
            } else
              tmp$_2 = null;
            return tmp$_2;
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
  function HttpCache$Companion$install$lambda(closure$plugin_0, closure$scope_0, this$HttpCache$_0) {
    return function ($receiver_0, content_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCache$Companion$install$lambda(closure$plugin_0, closure$scope_0, this$HttpCache$_0, $receiver_0, content_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCache$Companion$install$lambda_0(closure$plugin_0, closure$scope_0, this$HttpCache$_0, $receiver_0, response_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$scope = closure$scope_0;
    this.local$this$HttpCache$ = this$HttpCache$_0;
    this.local$$receiver = $receiver_0;
    this.local$response = response_0;
  }
  Coroutine$HttpCache$Companion$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCache$Companion$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCache$Companion$install$lambda_0.prototype.constructor = Coroutine$HttpCache$Companion$install$lambda_0;
  Coroutine$HttpCache$Companion$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            if (!((tmp$ = this.local$response.call.request.method) != null ? tmp$.equals(HttpMethod.Companion.Get) : null)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (isSuccess(this.local$response.status)) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$plugin.cacheResponse_0(this.local$response, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 3:
            var reusableResponse = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(reusableResponse, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return;
          case 5:
            if ((tmp$_0 = this.local$response.status) != null ? tmp$_0.equals(HttpStatusCode.Companion.NotModified) : null) {
              complete(this.local$response);
              tmp$_1 = this.local$closure$plugin.findAndRefresh_0(this.local$response.call.request, this.local$response);
              if (tmp$_1 == null) {
                throw new InvalidCacheStateException(this.local$response.call.request.url);
              }
              var responseFromCache = tmp$_1;
              this.local$closure$scope.monitor.raise_asioqi$(this.local$this$HttpCache$.HttpResponseFromCache, responseFromCache);
              this.state_0 = 6;
              this.result_0 = this.local$$receiver.proceedWith_trkh7z$(responseFromCache, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            return Unit;
          case 7:
            return Unit;
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
  function HttpCache$Companion$install$lambda_0(closure$plugin_0, closure$scope_0, this$HttpCache$_0) {
    return function ($receiver_0, response_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCache$Companion$install$lambda_0(closure$plugin_0, closure$scope_0, this$HttpCache$_0, $receiver_0, response_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpCache$Companion.prototype.install_wojrb5$ = function (plugin, scope) {
    var CachePhase = new PipelinePhase('Cache');
    scope.sendPipeline.insertPhaseAfter_b9zzbm$(HttpSendPipeline$Phases_getInstance().State, CachePhase);
    scope.sendPipeline.intercept_h71y74$(CachePhase, HttpCache$Companion$install$lambda(plugin, scope, this));
    scope.receivePipeline.intercept_h71y74$(HttpReceivePipeline$Phases_getInstance().State, HttpCache$Companion$install$lambda_0(plugin, scope, this));
  };
  HttpCache$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HttpClientPlugin]
  };
  var HttpCache$Companion_instance = null;
  function HttpCache$Companion_getInstance() {
    if (HttpCache$Companion_instance === null) {
      new HttpCache$Companion();
    }
    return HttpCache$Companion_instance;
  }
  function Coroutine$cacheResponse_0($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$request = void 0;
    this.local$storage = void 0;
    this.local$response = response_0;
  }
  Coroutine$cacheResponse_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cacheResponse_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cacheResponse_0.prototype.constructor = Coroutine$cacheResponse_0;
  Coroutine$cacheResponse_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$request = this.local$response.call.request;
            var responseCacheControl = cacheControl(this.local$response);
            this.local$storage = responseCacheControl.contains_11rb$(CacheControl_getInstance().PRIVATE_8be2vx$) ? this.$this.privateStorage : this.$this.publicStorage;
            if (responseCacheControl.contains_11rb$(CacheControl_getInstance().NO_STORE_8be2vx$)) {
              return this.local$response;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = store(this.local$storage, this.local$request.url, this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var cacheEntry = this.result_0;
            return cacheEntry.produceResponse_8be2vx$();
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
  HttpCache.prototype.cacheResponse_0 = function (response_0, continuation_0, suspended) {
    var instance = new Coroutine$cacheResponse_0(this, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpCache.prototype.findAndRefresh_0 = function (request, response) {
    var tmp$;
    var url = response.call.request.url;
    var cacheControl_0 = cacheControl(response);
    var storage = cacheControl_0.contains_11rb$(CacheControl_getInstance().PRIVATE_8be2vx$) ? this.privateStorage : this.publicStorage;
    var varyKeysFrom304 = varyKeys(response);
    tmp$ = this.findResponse_1(storage, varyKeysFrom304, url, request);
    if (tmp$ == null) {
      return null;
    }
    var cache = tmp$;
    var newVaryKeys = varyKeysFrom304.isEmpty() ? cache.varyKeys : varyKeysFrom304;
    storage.store_w4ov72$(url, new HttpCacheEntry_0(cacheExpires(response), newVaryKeys, cache.response, cache.body));
    return cache.produceResponse_8be2vx$();
  };
  function HttpCache$findResponse$lambda(it) {
    return it.response.responseTime;
  }
  HttpCache.prototype.findResponse_1 = function (storage, varyKeys, url, request) {
    if (!varyKeys.isEmpty())
      return storage.find_99tow0$(url, varyKeys);
    else {
      var requestHeaders = mergedHeadersLookup(request.content, getCallableRef('get', function ($receiver, p1) {
        return $receiver.get_61zpoe$(p1);
      }.bind(null, request.headers)), getCallableRef('getAll', function ($receiver, p1) {
        return $receiver.getAll_61zpoe$(p1);
      }.bind(null, request.headers)));
      var $receiver = sortedWith(storage.findByUrl_dxu3lv$(url), new Comparator(compareByDescending$lambda_0(HttpCache$findResponse$lambda)));
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        loop_label: while (tmp$.hasNext()) {
          var element = tmp$.next();
          var $receiver_0 = element.varyKeys;
          var all$result;
          all$break: do {
            var tmp$_0;
            if ($receiver_0.isEmpty()) {
              all$result = true;
              break all$break;
            }
            tmp$_0 = $receiver_0.entries.iterator();
            while (tmp$_0.hasNext()) {
              var element_0 = tmp$_0.next();
              var key = element_0.key;
              var value = element_0.value;
              if (!equals(requestHeaders(key), value)) {
                all$result = false;
                break all$break;
              }
            }
            all$result = true;
          }
           while (false);
          if (all$result) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  };
  HttpCache.prototype.findResponse_0 = function (context, content) {
    var tmp$;
    var url = Url_0(context.url);
    var lookup = mergedHeadersLookup(content, getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_61zpoe$(p1);
    }.bind(null, context.headers)), getCallableRef('getAll', function ($receiver, p1) {
      return $receiver.getAll_61zpoe$(p1);
    }.bind(null, context.headers)));
    var cachedResponses = plus(this.privateStorage.findByUrl_dxu3lv$(url), this.publicStorage.findByUrl_dxu3lv$(url));
    tmp$ = cachedResponses.iterator();
    loop_label: while (tmp$.hasNext()) {
      var item = tmp$.next();
      var varyKeys = item.varyKeys;
      var tmp$_0 = varyKeys.isEmpty();
      if (!tmp$_0) {
        var all$result;
        all$break: do {
          var tmp$_1;
          if (varyKeys.isEmpty()) {
            all$result = true;
            break all$break;
          }
          tmp$_1 = varyKeys.entries.iterator();
          while (tmp$_1.hasNext()) {
            var element = tmp$_1.next();
            var key = element.key;
            var value = element.value;
            if (!equals(lookup(key), value)) {
              all$result = false;
              break all$break;
            }
          }
          all$result = true;
        }
         while (false);
        tmp$_0 = all$result;
      }
      if (tmp$_0) {
        return item;
      }
    }
    return null;
  };
  HttpCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCache',
    interfaces: []
  };
  function mergedHeadersLookup$lambda(closure$content, closure$headerExtractor, closure$allHeadersExtractor) {
    return function (header) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      switch (header) {
        case 'Content-Length':
          tmp$_7 = (tmp$_0 = (tmp$ = closure$content.contentLength) != null ? tmp$.toString() : null) != null ? tmp$_0 : '';
          break;
        case 'Content-Type':
          tmp$_7 = (tmp$_2 = (tmp$_1 = closure$content.contentType) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : '';
          break;
        case 'User-Agent':
          tmp$_7 = (tmp$_4 = (tmp$_3 = closure$content.headers.get_61zpoe$(http.HttpHeaders.UserAgent)) != null ? tmp$_3 : closure$headerExtractor(http.HttpHeaders.UserAgent)) != null ? tmp$_4 : KTOR_DEFAULT_USER_AGENT;
          break;
        default:
          var value = (tmp$_6 = (tmp$_5 = closure$content.headers.getAll_61zpoe$(header)) != null ? tmp$_5 : closure$allHeadersExtractor(header)) != null ? tmp$_6 : emptyList();
          tmp$_7 = joinToString(value, ';');
          break;
      }
      return tmp$_7;
    };
  }
  function mergedHeadersLookup(content, headerExtractor, allHeadersExtractor) {
    return mergedHeadersLookup$lambda(content, headerExtractor, allHeadersExtractor);
  }
  function InvalidCacheStateException(requestUrl) {
    IllegalStateException_init('The entry for url: ' + requestUrl + ' was removed from cache', this);
    this.name = 'InvalidCacheStateException';
  }
  InvalidCacheStateException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidCacheStateException',
    interfaces: [IllegalStateException]
  };
  function canStore($receiver) {
    return equals($receiver.name, 'http') || equals($receiver.name, 'https');
  }
  function Coroutine$HttpCacheEntry(response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$response = response_0;
  }
  Coroutine$HttpCacheEntry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCacheEntry.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCacheEntry.prototype.constructor = Coroutine$HttpCacheEntry;
  Coroutine$HttpCacheEntry.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$response.content.readRemaining_s8cxhz$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var body = readBytes(this.result_0);
            complete(this.local$response);
            return new HttpCacheEntry_0(cacheExpires(this.local$response), varyKeys(this.local$response), this.local$response, body);
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
  function HttpCacheEntry(response_0, continuation_0, suspended) {
    var instance = new Coroutine$HttpCacheEntry(response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function HttpCacheEntry_0(expires, varyKeys, response, body) {
    this.expires = expires;
    this.varyKeys = varyKeys;
    this.response = response;
    this.body = body;
    var $receiver = new HeadersBuilder();
    $receiver.appendAll_hb0ubp$(this.response.headers);
    this.responseHeaders_8be2vx$ = $receiver.build();
  }
  HttpCacheEntry_0.prototype.produceResponse_8be2vx$ = function () {
    var currentClient = this.response.call.client;
    var call = new SavedHttpCall(currentClient, this.response.call.request, this.response, this.body);
    return call.response;
  };
  HttpCacheEntry_0.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, HttpCacheEntry_0))
      return false;
    if (other === this)
      return true;
    return equals(this.varyKeys, other.varyKeys);
  };
  HttpCacheEntry_0.prototype.hashCode = function () {
    return hashCode(this.varyKeys);
  };
  HttpCacheEntry_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCacheEntry',
    interfaces: []
  };
  function varyKeys($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = vary($receiver);
    if (tmp$ == null) {
      return emptyMap();
    }
    var validationKeys = tmp$;
    var result = LinkedHashMap_init();
    var requestHeaders = $receiver.call.request.headers;
    tmp$_0 = validationKeys.iterator();
    while (tmp$_0.hasNext()) {
      var key = tmp$_0.next();
      var value = (tmp$_1 = requestHeaders.get_61zpoe$(key)) != null ? tmp$_1 : '';
      result.put_xwzc9p$(key, value);
    }
    return result;
  }
  function cacheExpires$lambda() {
    return GMTDate();
  }
  function cacheExpires($receiver, fallback) {
    if (fallback === void 0)
      fallback = cacheExpires$lambda;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var cacheControl_0 = cacheControl($receiver);
    var isPrivate = cacheControl_0.contains_11rb$(CacheControl_getInstance().PRIVATE_8be2vx$);
    var maxAgeKey = isPrivate ? 's-max-age' : 'max-age';
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_4;
      tmp$_4 = cacheControl_0.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        if (startsWith(element.value, maxAgeKey)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var maxAge = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.value : null) != null ? split(tmp$_0, ['=']) : null) != null ? tmp$_1.get_za3lpa$(1) : null) != null ? toInt(tmp$_2) : null;
    if (maxAge != null) {
      return plus_0($receiver.call.response.requestTime, Kotlin.Long.fromInt(maxAge).multiply(L1000));
    }
    var expires = $receiver.headers.get_61zpoe$(http.HttpHeaders.Expires);
    var tmp$_5;
    if (expires != null) {
      var tmp$_6;
      if (equals(expires, '0') || isBlank(expires))
        return fallback();
      try {
        tmp$_6 = fromHttpToGmtDate(expires);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$_6 = fallback();
        } else
          throw e;
      }
      return tmp$_6;
    } else
      tmp$_5 = null;
    return (tmp$_3 = tmp$_5) != null ? tmp$_3 : fallback();
  }
  function shouldValidate($receiver) {
    var tmp$, tmp$_0;
    var cacheControl = (tmp$_0 = (tmp$ = $receiver.responseHeaders_8be2vx$.get_61zpoe$(http.HttpHeaders.CacheControl)) != null ? parseHeaderValue(tmp$) : null) != null ? tmp$_0 : emptyList();
    var isStale = GMTDate().compareTo_11rb$($receiver.expires) > 0;
    return isStale || cacheControl.contains_11rb$(CacheControl_getInstance().NO_CACHE_8be2vx$);
  }
  function DisabledCacheStorage() {
    DisabledCacheStorage_instance = this;
    HttpCacheStorage.call(this);
  }
  DisabledCacheStorage.prototype.store_w4ov72$ = function (url, value) {
  };
  DisabledCacheStorage.prototype.find_99tow0$ = function (url, varyKeys) {
    return null;
  };
  DisabledCacheStorage.prototype.findByUrl_dxu3lv$ = function (url) {
    return emptySet();
  };
  DisabledCacheStorage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DisabledCacheStorage',
    interfaces: [HttpCacheStorage]
  };
  var DisabledCacheStorage_instance = null;
  function DisabledCacheStorage_getInstance() {
    if (DisabledCacheStorage_instance === null) {
      new DisabledCacheStorage();
    }
    return DisabledCacheStorage_instance;
  }
  function HttpCacheStorage() {
    HttpCacheStorage$Companion_getInstance();
  }
  function HttpCacheStorage$Companion() {
    HttpCacheStorage$Companion_instance = this;
    this.Unlimited = HttpCacheStorage$Companion$Unlimited$lambda;
    this.Disabled = DisabledCacheStorage_getInstance();
  }
  function HttpCacheStorage$Companion$Unlimited$lambda() {
    return new UnlimitedCacheStorage();
  }
  HttpCacheStorage$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpCacheStorage$Companion_instance = null;
  function HttpCacheStorage$Companion_getInstance() {
    if (HttpCacheStorage$Companion_instance === null) {
      new HttpCacheStorage$Companion();
    }
    return HttpCacheStorage$Companion_instance;
  }
  HttpCacheStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCacheStorage',
    interfaces: []
  };
  function Coroutine$store($receiver_0, url_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$url = url_0;
    this.local$value = value_0;
  }
  Coroutine$store.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$store.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$store.prototype.constructor = Coroutine$store;
  Coroutine$store.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HttpCacheEntry(this.local$value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var result = this.result_0;
            this.local$$receiver.store_w4ov72$(this.local$url, result);
            return result;
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
  function store($receiver_0, url_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$store($receiver_0, url_0, value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function UnlimitedCacheStorage() {
    HttpCacheStorage.call(this);
    this.store_0 = new ConcurrentMap();
  }
  function UnlimitedCacheStorage$store$lambda() {
    return ConcurrentSet();
  }
  UnlimitedCacheStorage.prototype.store_w4ov72$ = function (url, value) {
    var data = this.store_0.computeIfAbsent_kpg1aj$(url, UnlimitedCacheStorage$store$lambda);
    if (!data.add_11rb$(value)) {
      data.remove_11rb$(value);
      data.add_11rb$(value);
    }
  };
  function UnlimitedCacheStorage$find$lambda() {
    return ConcurrentSet();
  }
  UnlimitedCacheStorage.prototype.find_99tow0$ = function (url, varyKeys) {
    var data = this.store_0.computeIfAbsent_kpg1aj$(url, UnlimitedCacheStorage$find$lambda);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = data.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.varyKeys, varyKeys)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  UnlimitedCacheStorage.prototype.findByUrl_dxu3lv$ = function (url) {
    var tmp$;
    return (tmp$ = this.store_0.get_11rb$(url)) != null ? tmp$ : emptySet();
  };
  UnlimitedCacheStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnlimitedCacheStorage',
    interfaces: [HttpCacheStorage]
  };
  function AcceptAllCookiesStorage() {
    this.container_0 = ArrayList_init();
    this.oldestCookie_0 = atomic_0(L0);
    this.mutex_0 = Mutex();
  }
  function Coroutine$get_dxu3lv$($this, requestUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$requestUrl = requestUrl_0;
  }
  Coroutine$get_dxu3lv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_dxu3lv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_dxu3lv$.prototype.constructor = Coroutine$get_dxu3lv$;
  Coroutine$get_dxu3lv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.$this.mutex_0;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.lock_s8jyv4$(null, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            try {
              var date = GMTDate();
              if (date.timestamp.compareTo_11rb$(this.$this.oldestCookie_0.kotlinx$atomicfu$value) >= 0)
                this.$this.cleanup_0(date.timestamp);
              var $receiver = this.$this.container_0;
              var destination = ArrayList_init();
              var tmp$;
              tmp$ = $receiver.iterator();
              while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (matches(element, this.local$requestUrl))
                  destination.add_11rb$(element);
              }
              this.result_0 = destination;
            }finally {
              this.local$$receiver.unlock_s8jyv4$(null);
            }

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
  AcceptAllCookiesStorage.prototype.get_dxu3lv$ = function (requestUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$get_dxu3lv$(this, requestUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function AcceptAllCookiesStorage$addCookie$lambda$lambda(closure$cookie, closure$requestUrl) {
    return function (it) {
      return equals(it.name, closure$cookie.name) && matches(it, closure$requestUrl);
    };
  }
  function Coroutine$addCookie_c6y2p3$($this, requestUrl_0, cookie_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$requestUrl = requestUrl_0;
    this.local$cookie = cookie_0;
  }
  Coroutine$addCookie_c6y2p3$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addCookie_c6y2p3$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addCookie_c6y2p3$.prototype.constructor = Coroutine$addCookie_c6y2p3$;
  Coroutine$addCookie_c6y2p3$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.$this.mutex_0;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.lock_s8jyv4$(null, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            try {
              action$break: do {
                var tmp$, tmp$_0;
                if (isBlank(this.local$cookie.name))
                  break action$break;
                removeAll(this.$this.container_0, AcceptAllCookiesStorage$addCookie$lambda$lambda(this.local$cookie, this.local$requestUrl));
                this.$this.container_0.add_11rb$(fillDefaults(this.local$cookie, this.local$requestUrl));
                if ((tmp$_0 = (tmp$ = this.local$cookie.expires) != null ? tmp$.timestamp : null) != null) {
                  if (this.$this.oldestCookie_0.kotlinx$atomicfu$value.compareTo_11rb$(tmp$_0) > 0) {
                    this.$this.oldestCookie_0.kotlinx$atomicfu$value = tmp$_0;
                  }
                }
              }
               while (false);
              this.result_0 = Unit;
            }finally {
              this.local$$receiver.unlock_s8jyv4$(null);
            }

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
  AcceptAllCookiesStorage.prototype.addCookie_c6y2p3$ = function (requestUrl_0, cookie_0, continuation_0, suspended) {
    var instance = new Coroutine$addCookie_c6y2p3$(this, requestUrl_0, cookie_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AcceptAllCookiesStorage.prototype.close = function () {
  };
  function AcceptAllCookiesStorage$cleanup$lambda(closure$timestamp) {
    return function (cookie) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = cookie.expires) != null ? tmp$.timestamp : null;
      if (tmp$_0 == null) {
        return false;
      }
      var expires = tmp$_0;
      return expires.compareTo_11rb$(closure$timestamp) < 0;
    };
  }
  AcceptAllCookiesStorage.prototype.cleanup_0 = function (timestamp) {
    removeAll(this.container_0, AcceptAllCookiesStorage$cleanup$lambda(timestamp));
    var $receiver = this.container_0;
    var tmp$;
    var accumulator = Long$Companion$MAX_VALUE;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var acc = accumulator;
      var tmp$_0, tmp$_1, tmp$_2;
      accumulator = (tmp$_2 = (tmp$_1 = (tmp$_0 = element.expires) != null ? tmp$_0.timestamp : null) != null ? acc.compareTo_11rb$(tmp$_1) <= 0 ? acc : tmp$_1 : null) != null ? tmp$_2 : acc;
    }
    var newOldest = accumulator;
    this.oldestCookie_0.kotlinx$atomicfu$value = newOldest;
  };
  AcceptAllCookiesStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AcceptAllCookiesStorage',
    interfaces: [CookiesStorage]
  };
  function ConstantCookiesStorage(cookies) {
    var destination = ArrayList_init_0(cookies.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== cookies.length; ++tmp$) {
      var item = cookies[tmp$];
      destination.add_11rb$(fillDefaults(item, (new URLBuilder_0()).build()));
    }
    this.storage_0 = toList_0(destination);
  }
  ConstantCookiesStorage.prototype.get_dxu3lv$ = function (requestUrl, continuation) {
    var $receiver = this.storage_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (matches(element, requestUrl))
        destination.add_11rb$(element);
    }
    return destination;
  };
  ConstantCookiesStorage.prototype.addCookie_c6y2p3$ = function (requestUrl, cookie, continuation) {
  };
  ConstantCookiesStorage.prototype.close = function () {
  };
  ConstantCookiesStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantCookiesStorage',
    interfaces: [CookiesStorage]
  };
  function CookiesStorage() {
  }
  CookiesStorage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CookiesStorage',
    interfaces: [Closeable]
  };
  function Coroutine$addCookie($receiver_0, urlString_0, cookie_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$urlString = urlString_0;
    this.local$cookie = cookie_0;
  }
  Coroutine$addCookie.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addCookie.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addCookie.prototype.constructor = Coroutine$addCookie;
  Coroutine$addCookie.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.addCookie_c6y2p3$(Url(this.local$urlString), this.local$cookie, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function addCookie($receiver_0, urlString_0, cookie_0, continuation_0, suspended) {
    var instance = new Coroutine$addCookie($receiver_0, urlString_0, cookie_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function matches($receiver, requestUrl) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_1 = (tmp$_0 = (tmp$ = $receiver.domain) != null ? toLowerCasePreservingASCIIRules(tmp$) : null) != null ? trimStart(tmp$_0, Kotlin.charArrayOf(46)) : null) != null)
      tmp$_2 = tmp$_1;
    else {
      throw IllegalStateException_init('Domain field should have the default value'.toString());
    }
    var domain = tmp$_2;
    var tmp$_3;
    var tmp$_4;
    if ((tmp$_3 = $receiver.path) != null)
      tmp$_4 = tmp$_3;
    else {
      throw IllegalStateException_init('Path field should have the default value'.toString());
    }
    var current = tmp$_4;
    var path = endsWith(current, 47) ? current : toString($receiver.path) + '/';
    var host = toLowerCasePreservingASCIIRules(requestUrl.host);
    var pathInRequest = requestUrl.encodedPath;
    var requestPath = endsWith(pathInRequest, 47) ? pathInRequest : pathInRequest + '/';
    if (!equals(host, domain) && (hostIsIp(host) || !endsWith_0(host, '.' + domain))) {
      return false;
    }
    if (!equals(path, '/') && !equals(requestPath, path) && !startsWith(requestPath, path))
      return false;
    return !($receiver.secure && !isSecure(requestUrl.protocol));
  }
  function fillDefaults($receiver, requestUrl) {
    var tmp$;
    var result = $receiver;
    if (((tmp$ = result.path) != null ? startsWith(tmp$, '/') : null) !== true) {
      result = result.copy_hcwwmo$(void 0, void 0, void 0, void 0, void 0, void 0, requestUrl.encodedPath);
    }
    var $receiver_0 = result.domain;
    if ($receiver_0 == null || isBlank($receiver_0)) {
      result = result.copy_hcwwmo$(void 0, void 0, void 0, void 0, void 0, requestUrl.host);
    }
    return result;
  }
  function HttpCookies(storage, defaults) {
    HttpCookies$Companion_getInstance();
    this.storage_0 = storage;
    this.defaults_0 = defaults;
    this.initializer_0 = launch(coroutines.GlobalScope, coroutines.Dispatchers.Unconfined, void 0, HttpCookies$initializer$lambda(this));
  }
  function Coroutine$get_dxu3lv$_0($this, requestUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$requestUrl = requestUrl_0;
  }
  Coroutine$get_dxu3lv$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_dxu3lv$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_dxu3lv$_0.prototype.constructor = Coroutine$get_dxu3lv$_0;
  Coroutine$get_dxu3lv$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.initializer_0.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.storage_0.get_dxu3lv$(this.local$requestUrl, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  HttpCookies.prototype.get_dxu3lv$ = function (requestUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$get_dxu3lv$_0(this, requestUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$captureHeaderCookies_jc2hdt$($this, builder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = void 0;
    this.local$tmp$ = void 0;
    this.local$builder = builder_0;
  }
  Coroutine$captureHeaderCookies_jc2hdt$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$captureHeaderCookies_jc2hdt$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$captureHeaderCookies_jc2hdt$.prototype.constructor = Coroutine$captureHeaderCookies_jc2hdt$;
  Coroutine$captureHeaderCookies_jc2hdt$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$url = clone(this.local$builder.url).build();
            var tmp$_0;
            if ((tmp$ = this.local$builder.headers.get_61zpoe$(http.HttpHeaders.Cookie)) != null) {
              var $receiver = parseClientCookiesHeader(tmp$);
              var destination = ArrayList_init_0($receiver.size);
              var tmp$_1;
              tmp$_1 = $receiver.entries.iterator();
              while (tmp$_1.hasNext()) {
                var item = tmp$_1.next();
                var tmp$_2 = destination.add_11rb$;
                var name = item.key;
                var encodedValue = item.value;
                tmp$_2.call(destination, new Cookie(name, encodedValue));
              }
              tmp$_0 = destination;
            } else
              tmp$_0 = null;
            var cookies = tmp$_0;
            if (cookies != null) {
              this.local$tmp$ = cookies.iterator();
              this.state_0 = 2;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = this.$this.storage_0.addCookie_c6y2p3$(this.local$url, element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
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
  HttpCookies.prototype.captureHeaderCookies_jc2hdt$ = function (builder_0, continuation_0, suspended) {
    var instance = new Coroutine$captureHeaderCookies_jc2hdt$(this, builder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sendCookiesWith_jc2hdt$($this, builder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$builder = builder_0;
  }
  Coroutine$sendCookiesWith_jc2hdt$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendCookiesWith_jc2hdt$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendCookiesWith_jc2hdt$.prototype.constructor = Coroutine$sendCookiesWith_jc2hdt$;
  Coroutine$sendCookiesWith_jc2hdt$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.get_dxu3lv$(clone(this.local$builder.url).build(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var cookies = this.result_0;
            if (!cookies.isEmpty()) {
              this.local$builder.headers.set_puj7f4$(http.HttpHeaders.Cookie, renderClientCookies(cookies));
            } else {
              this.local$builder.headers.remove_61zpoe$(http.HttpHeaders.Cookie);
            }

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
  HttpCookies.prototype.sendCookiesWith_jc2hdt$ = function (builder_0, continuation_0, suspended) {
    var instance = new Coroutine$sendCookiesWith_jc2hdt$(this, builder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$saveCookiesFrom_5mhyb0$($this, response_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = void 0;
    this.local$tmp$ = void 0;
    this.local$response = response_0;
  }
  Coroutine$saveCookiesFrom_5mhyb0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$saveCookiesFrom_5mhyb0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$saveCookiesFrom_5mhyb0$.prototype.constructor = Coroutine$saveCookiesFrom_5mhyb0$;
  Coroutine$saveCookiesFrom_5mhyb0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$url = get_request(this.local$response).url;
            this.local$tmp$ = setCookie(this.local$response).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = this.$this.storage_0.addCookie_c6y2p3$(this.local$url, element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
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
  HttpCookies.prototype.saveCookiesFrom_5mhyb0$ = function (response_0, continuation_0, suspended) {
    var instance = new Coroutine$saveCookiesFrom_5mhyb0$(this, response_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpCookies.prototype.close = function () {
    this.storage_0.close();
  };
  function HttpCookies$Config() {
    this.defaults_0 = ArrayList_init();
    this.storage = new AcceptAllCookiesStorage();
  }
  HttpCookies$Config.prototype.default_uxr3t9$ = function (block) {
    this.defaults_0.add_11rb$(block);
  };
  HttpCookies$Config.prototype.build_8be2vx$ = function () {
    return new HttpCookies(this.storage, this.defaults_0);
  };
  HttpCookies$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function HttpCookies$Companion() {
    HttpCookies$Companion_instance = this;
    this.key_6q2kl6$_0 = new AttributeKey('HttpCookies');
  }
  HttpCookies$Companion.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new HttpCookies$Config();
    block($receiver);
    return $receiver.build_8be2vx$();
  };
  Object.defineProperty(HttpCookies$Companion.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_6q2kl6$_0;
    }
  });
  function Coroutine$HttpCookies$Companion$install$lambda(closure$plugin_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpCookies$Companion$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCookies$Companion$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCookies$Companion$install$lambda.prototype.constructor = Coroutine$HttpCookies$Companion$install$lambda;
  Coroutine$HttpCookies$Companion$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$plugin.captureHeaderCookies_jc2hdt$(this.local$$receiver.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function HttpCookies$Companion$install$lambda(closure$plugin_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCookies$Companion$install$lambda(closure$plugin_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCookies$Companion$install$lambda_0(closure$plugin_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$HttpCookies$Companion$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCookies$Companion$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCookies$Companion$install$lambda_0.prototype.constructor = Coroutine$HttpCookies$Companion$install$lambda_0;
  Coroutine$HttpCookies$Companion$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$plugin.sendCookiesWith_jc2hdt$(this.local$$receiver.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function HttpCookies$Companion$install$lambda_0(closure$plugin_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCookies$Companion$install$lambda_0(closure$plugin_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HttpCookies$Companion$install$lambda_1(closure$plugin_0, $receiver_0, response_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$response = response_0;
  }
  Coroutine$HttpCookies$Companion$install$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCookies$Companion$install$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCookies$Companion$install$lambda_1.prototype.constructor = Coroutine$HttpCookies$Companion$install$lambda_1;
  Coroutine$HttpCookies$Companion$install$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$plugin.saveCookiesFrom_5mhyb0$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function HttpCookies$Companion$install$lambda_1(closure$plugin_0) {
    return function ($receiver_0, response_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCookies$Companion$install$lambda_1(closure$plugin_0, $receiver_0, response_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpCookies$Companion.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().State, HttpCookies$Companion$install$lambda(plugin));
    scope.sendPipeline.intercept_h71y74$(HttpSendPipeline$Phases_getInstance().State, HttpCookies$Companion$install$lambda_0(plugin));
    scope.receivePipeline.intercept_h71y74$(HttpReceivePipeline$Phases_getInstance().State, HttpCookies$Companion$install$lambda_1(plugin));
  };
  HttpCookies$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [HttpClientPlugin]
  };
  var HttpCookies$Companion_instance = null;
  function HttpCookies$Companion_getInstance() {
    if (HttpCookies$Companion_instance === null) {
      new HttpCookies$Companion();
    }
    return HttpCookies$Companion_instance;
  }
  function Coroutine$HttpCookies$initializer$lambda(this$HttpCookies_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HttpCookies = this$HttpCookies_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$HttpCookies$initializer$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpCookies$initializer$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpCookies$initializer$lambda.prototype.constructor = Coroutine$HttpCookies$initializer$lambda;
  Coroutine$HttpCookies$initializer$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$HttpCookies.defaults_0.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = element(this.local$this$HttpCookies.storage_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
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
  function HttpCookies$initializer$lambda(this$HttpCookies_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HttpCookies$initializer$lambda(this$HttpCookies_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HttpCookies.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCookies',
    interfaces: [Closeable]
  };
  function renderClientCookies(cookies) {
    return joinToString(cookies, ';', void 0, void 0, void 0, void 0, getCallableRef('renderCookieHeader', function (p1) {
      return renderCookieHeader(p1);
    }));
  }
  function Coroutine$cookies($receiver_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$url = url_0;
  }
  Coroutine$cookies.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cookies.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cookies.prototype.constructor = Coroutine$cookies;
  Coroutine$cookies.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$ = pluginOrNull(this.local$$receiver, HttpCookies$Companion_getInstance())) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.get_dxu3lv$(this.local$url, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            return (tmp$_0 = this.result_0) != null ? tmp$_0 : emptyList();
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
  function cookies($receiver_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$cookies($receiver_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$cookies_0($receiver_0, urlString_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$urlString = urlString_0;
  }
  Coroutine$cookies_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cookies_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cookies_0.prototype.constructor = Coroutine$cookies_0;
  Coroutine$cookies_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$ = pluginOrNull(this.local$$receiver, HttpCookies$Companion_getInstance())) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.get_dxu3lv$(Url(this.local$urlString), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            return (tmp$_0 = this.result_0) != null ? tmp$_0 : emptyList();
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
  function cookies_0($receiver_0, urlString_0, continuation_0, suspended) {
    var instance = new Coroutine$cookies_0($receiver_0, urlString_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function get_0($receiver, name) {
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  }
  function wrapWithContent($receiver, content, shouldCloseOrigin) {
    return wrapWithContent_0($receiver, content);
  }
  function wrapWithContent_0($receiver, content) {
    return new DelegatedCall($receiver.client, content, $receiver);
  }
  function wrapWithContent_1($receiver, content) {
    return new DelegatedResponse($receiver.call, content, $receiver);
  }
  function DelegatedCall(client, content, originCall) {
    HttpClientCall.call(this, client);
    this.request = new DelegatedRequest(this, originCall.request);
    this.response = new DelegatedResponse(this, content, originCall.response);
  }
  DelegatedCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatedCall',
    interfaces: [HttpClientCall]
  };
  function DelegatedRequest(call, origin) {
    this.call_zhi73$_0 = call;
    this.$delegate_bjp05r$_0 = origin;
  }
  Object.defineProperty(DelegatedRequest.prototype, 'call', {
    get: function () {
      return this.call_zhi73$_0;
    }
  });
  Object.defineProperty(DelegatedRequest.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this.$delegate_bjp05r$_0.attributes;
    }
  });
  Object.defineProperty(DelegatedRequest.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.$delegate_bjp05r$_0.content;
    }
  });
  Object.defineProperty(DelegatedRequest.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.$delegate_bjp05r$_0.coroutineContext;
    }
  });
  Object.defineProperty(DelegatedRequest.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.$delegate_bjp05r$_0.headers;
    }
  });
  Object.defineProperty(DelegatedRequest.prototype, 'method', {
    configurable: true,
    get: function () {
      return this.$delegate_bjp05r$_0.method;
    }
  });
  Object.defineProperty(DelegatedRequest.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.$delegate_bjp05r$_0.url;
    }
  });
  DelegatedRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatedRequest',
    interfaces: [HttpRequest_0]
  };
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.call_bpc16b$_0 = call;
    this.content_if43bk$_0 = content;
    this.origin_0 = origin;
    this.coroutineContext_jo80q4$_0 = this.origin_0.coroutineContext;
  }
  Object.defineProperty(DelegatedResponse.prototype, 'call', {
    get: function () {
      return this.call_bpc16b$_0;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'content', {
    get: function () {
      return this.content_if43bk$_0;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_jo80q4$_0;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.origin_0.status;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'version', {
    configurable: true,
    get: function () {
      return this.origin_0.version;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'requestTime', {
    configurable: true,
    get: function () {
      return this.origin_0.requestTime;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'responseTime', {
    configurable: true,
    get: function () {
      return this.origin_0.responseTime;
    }
  });
  Object.defineProperty(DelegatedResponse.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.origin_0.headers;
    }
  });
  DelegatedResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatedResponse',
    interfaces: [HttpResponse]
  };
  function ResponseObserver(responseHandler, filter) {
    ResponseObserver$Plugin_getInstance();
    if (filter === void 0)
      filter = null;
    this.responseHandler_0 = responseHandler;
    this.filter_0 = filter;
  }
  function ResponseObserver$Config() {
    this.responseHandler_8be2vx$ = ResponseObserver$Config$responseHandler$lambda;
    this.filter_8be2vx$ = null;
  }
  ResponseObserver$Config.prototype.onResponse_d4bkoy$ = function (block) {
    this.responseHandler_8be2vx$ = block;
  };
  ResponseObserver$Config.prototype.filter_je1qkx$ = function (block) {
    this.filter_8be2vx$ = block;
  };
  function Coroutine$ResponseObserver$Config$responseHandler$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$ResponseObserver$Config$responseHandler$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResponseObserver$Config$responseHandler$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResponseObserver$Config$responseHandler$lambda.prototype.constructor = Coroutine$ResponseObserver$Config$responseHandler$lambda;
  Coroutine$ResponseObserver$Config$responseHandler$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
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
  function ResponseObserver$Config$responseHandler$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ResponseObserver$Config$responseHandler$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  ResponseObserver$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function ResponseObserver$Plugin() {
    ResponseObserver$Plugin_instance = this;
    this.key_8ecns0$_0 = new AttributeKey('BodyInterceptor');
  }
  Object.defineProperty(ResponseObserver$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_8ecns0$_0;
    }
  });
  ResponseObserver$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new ResponseObserver$Config();
    block($receiver);
    var config = $receiver;
    return new ResponseObserver(config.responseHandler_8be2vx$, config.filter_8be2vx$);
  };
  function Coroutine$ResponseObserver$Plugin$install$lambda$lambda(closure$plugin_0, closure$sideResponse_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 6;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$sideResponse = closure$sideResponse_0;
  }
  Coroutine$ResponseObserver$Plugin$install$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResponseObserver$Plugin$install$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResponseObserver$Plugin$install$lambda$lambda.prototype.constructor = Coroutine$ResponseObserver$Plugin$install$lambda$lambda;
  Coroutine$ResponseObserver$Plugin$install$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$plugin.responseHandler_0(this.local$closure$sideResponse, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 6;
            var _ = this.exception_0;
            if (!Kotlin.isType(_, Throwable))
              throw _;
            this.state_0 = 3;
            continue;
          case 3:
            var content = this.local$closure$sideResponse.content;
            if (!content.isClosedForRead) {
              this.state_0 = 4;
              this.result_0 = discard(content, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            return Unit;
          case 5:
            return Unit;
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
  function ResponseObserver$Plugin$install$lambda$lambda(closure$plugin_0, closure$sideResponse_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ResponseObserver$Plugin$install$lambda$lambda(closure$plugin_0, closure$sideResponse_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ResponseObserver$Plugin$install$lambda(closure$plugin_0, closure$scope_0, $receiver_0, response_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$scope = closure$scope_0;
    this.local$newResponse = void 0;
    this.local$sideResponse = void 0;
    this.local$$receiver = $receiver_0;
    this.local$response = response_0;
  }
  Coroutine$ResponseObserver$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResponseObserver$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResponseObserver$Plugin$install$lambda.prototype.constructor = Coroutine$ResponseObserver$Plugin$install$lambda;
  Coroutine$ResponseObserver$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            if (((tmp$ = this.local$closure$plugin.filter_0) != null ? tmp$(this.local$response.call) : null) === false) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_2 = split_0(this.local$response.content, this.local$response);
            var loggingContent = tmp$_2.component1()
            , responseContent = tmp$_2.component2();
            this.local$newResponse = wrapWithContent_0(this.local$response.call, responseContent).response;
            this.local$sideResponse = wrapWithContent_0(this.local$response.call, loggingContent).response;
            this.state_0 = 3;
            this.result_0 = getResponseObserverContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$_0 = this.result_0;
            tmp$_1 = ResponseObserver$Plugin$install$lambda$lambda(this.local$closure$plugin, this.local$sideResponse);
            launch(this.local$closure$scope, tmp$_0, void 0, tmp$_1);
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(this.local$newResponse, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function ResponseObserver$Plugin$install$lambda(closure$plugin_0, closure$scope_0) {
    return function ($receiver_0, response_0, continuation_0, suspended) {
      var instance = new Coroutine$ResponseObserver$Plugin$install$lambda(closure$plugin_0, closure$scope_0, $receiver_0, response_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ResponseObserver$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    scope.receivePipeline.intercept_h71y74$(HttpReceivePipeline$Phases_getInstance().After, ResponseObserver$Plugin$install$lambda(plugin, scope));
  };
  ResponseObserver$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var ResponseObserver$Plugin_instance = null;
  function ResponseObserver$Plugin_getInstance() {
    if (ResponseObserver$Plugin_instance === null) {
      new ResponseObserver$Plugin();
    }
    return ResponseObserver$Plugin_instance;
  }
  ResponseObserver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResponseObserver',
    interfaces: []
  };
  function ResponseObserver$lambda(closure$block) {
    return function ($receiver) {
      $receiver.responseHandler_8be2vx$ = closure$block;
      return Unit;
    };
  }
  function ResponseObserver_0($receiver, block) {
    $receiver.install_dq2y33$(ResponseObserver$Plugin_getInstance(), ResponseObserver$lambda(block));
  }
  function ClientWebSocketSession() {
  }
  ClientWebSocketSession.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ClientWebSocketSession',
    interfaces: [WebSocketSession]
  };
  function DefaultClientWebSocketSession(call, delegate) {
    this.call_isp37v$_0 = call;
    this.$delegate_qgt999$_0 = delegate;
  }
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'call', {
    get: function () {
      return this.call_isp37v$_0;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'closeReason', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.closeReason;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.coroutineContext;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'extensions', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.extensions;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'incoming', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.incoming;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'masking', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.masking;
    },
    set: function (tmp$) {
      this.$delegate_qgt999$_0.masking = tmp$;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'maxFrameSize', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.maxFrameSize;
    },
    set: function (tmp$) {
      this.$delegate_qgt999$_0.maxFrameSize = tmp$;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'outgoing', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.outgoing;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'pingIntervalMillis', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.pingIntervalMillis;
    },
    set: function (tmp$) {
      this.$delegate_qgt999$_0.pingIntervalMillis = tmp$;
    }
  });
  Object.defineProperty(DefaultClientWebSocketSession.prototype, 'timeoutMillis', {
    configurable: true,
    get: function () {
      return this.$delegate_qgt999$_0.timeoutMillis;
    },
    set: function (tmp$) {
      this.$delegate_qgt999$_0.timeoutMillis = tmp$;
    }
  });
  DefaultClientWebSocketSession.prototype.flush = function (continuation) {
    return this.$delegate_qgt999$_0.flush(continuation);
  };
  DefaultClientWebSocketSession.prototype.send_q1ubw4$ = function (frame, continuation) {
    return this.$delegate_qgt999$_0.send_q1ubw4$(frame, continuation);
  };
  DefaultClientWebSocketSession.prototype.start_wwqcjq$$default = function (negotiatedExtensions) {
    return this.$delegate_qgt999$_0.start_wwqcjq$$default(negotiatedExtensions);
  };
  DefaultClientWebSocketSession.prototype.terminate = function () {
    return this.$delegate_qgt999$_0.terminate();
  };
  DefaultClientWebSocketSession.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultClientWebSocketSession',
    interfaces: [DefaultWebSocketSession, ClientWebSocketSession]
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.call_763etk$_0 = call;
    this.$delegate_m50m56$_0 = session;
  }
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'call', {
    get: function () {
      return this.call_763etk$_0;
    }
  });
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.$delegate_m50m56$_0.coroutineContext;
    }
  });
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'extensions', {
    configurable: true,
    get: function () {
      return this.$delegate_m50m56$_0.extensions;
    }
  });
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'incoming', {
    configurable: true,
    get: function () {
      return this.$delegate_m50m56$_0.incoming;
    }
  });
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'masking', {
    configurable: true,
    get: function () {
      return this.$delegate_m50m56$_0.masking;
    },
    set: function (tmp$) {
      this.$delegate_m50m56$_0.masking = tmp$;
    }
  });
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'maxFrameSize', {
    configurable: true,
    get: function () {
      return this.$delegate_m50m56$_0.maxFrameSize;
    },
    set: function (tmp$) {
      this.$delegate_m50m56$_0.maxFrameSize = tmp$;
    }
  });
  Object.defineProperty(DelegatingClientWebSocketSession.prototype, 'outgoing', {
    configurable: true,
    get: function () {
      return this.$delegate_m50m56$_0.outgoing;
    }
  });
  DelegatingClientWebSocketSession.prototype.flush = function (continuation) {
    return this.$delegate_m50m56$_0.flush(continuation);
  };
  DelegatingClientWebSocketSession.prototype.send_q1ubw4$ = function (frame, continuation) {
    return this.$delegate_m50m56$_0.send_q1ubw4$(frame, continuation);
  };
  DelegatingClientWebSocketSession.prototype.terminate = function () {
    return this.$delegate_m50m56$_0.terminate();
  };
  DelegatingClientWebSocketSession.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatingClientWebSocketSession',
    interfaces: [ClientWebSocketSession, WebSocketSession]
  };
  function get_converter($receiver) {
    var tmp$;
    return (tmp$ = pluginOrNull($receiver.call.client, WebSockets$Plugin_getInstance())) != null ? tmp$.contentConverter : null;
  }
  function Coroutine$sendSerialized(T_0_0, isT_0, $receiver_0, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$T_0 = T_0_0;
    this.local$$receiver = $receiver_0;
    this.local$data = data_0;
  }
  Coroutine$sendSerialized.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendSerialized.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendSerialized.prototype.constructor = Coroutine$sendSerialized;
  Coroutine$sendSerialized.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_0;
            tmp$_0 = get_converter(this.local$$receiver);
            if (tmp$_0 == null) {
              throw new WebsocketConverterNotFoundException('No converter was found for websocket');
            }

            var converter_0 = tmp$_0;
            var charset_0 = suitableCharset(this.local$$receiver.call.request.headers);
            var tmp$_1_0 = reflect_0.JsType;
            var tmp$_0_0_0 = getKClass(this.local$T_0);
            var tryGetType$result_0_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0_0 = getReifiedTypeParameterKType(this.local$T_0);
              } catch (cause_0_0) {
                if (Kotlin.isType(cause_0_0, Throwable)) {
                  tryGetType$result_0_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0_0;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = converter_0.serialize_36e71y$(charset_0, typeInfoImpl_0(tmp$_1_0, tmp$_0_0_0, tryGetType$result_0_0), this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var serializedData_0_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.outgoing.send_11rb$(serializedData_0_0, this);
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
  function sendSerialized(T_0_0, isT_0, $receiver_0, data_0, continuation_0, suspended) {
    var instance = new Coroutine$sendSerialized(T_0_0, isT_0, $receiver_0, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.plugins.websocket.sendSerialized_mrnp39$', wrapFunction(function () {
    var get_converter = _.io.ktor.client.plugins.websocket.get_converter_vw5opa$;
    var WebsocketConverterNotFoundException_init = _.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.WebsocketConverterNotFoundException;
    var suitableCharset = _.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.suitableCharset_4q0pk1$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var reflect = _.$$importsForInline$$['ktor-ktor-websocket-serialization-js-legacy'].$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-websocket-serialization-js-legacy'].$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, data, continuation) {
      var tmp$_0;
      tmp$_0 = get_converter($receiver);
      if (tmp$_0 == null) {
        throw new WebsocketConverterNotFoundException_init('No converter was found for websocket');
      }
      var converter_0 = tmp$_0;
      var charset_0 = suitableCharset($receiver.call.request.headers);
      var tmp$_1_0 = reflect.JsType;
      var tmp$_0_0_0 = getKClass(T_0);
      var tryGetType$result_0_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0_0 = getReifiedTypeParameterKType(T_0);
        } catch (cause_0_0) {
          if (Kotlin.isType(cause_0_0, Throwable)) {
            tryGetType$result_0_0 = null;
            break tryGetType$break;
          } else
            throw cause_0_0;
        }
      }
       while (false);
      Kotlin.suspendCall(converter_0.serialize_36e71y$(charset_0, typeInfoImpl(tmp$_1_0, tmp$_0_0_0, tryGetType$result_0_0), data, Kotlin.coroutineReceiver()));
      var serializedData_0_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      Kotlin.suspendCall($receiver.outgoing.send_11rb$(serializedData_0_0, Kotlin.coroutineReceiver()));
    };
  }));
  function Coroutine$receiveDeserialized(T_0_0, isT_0, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$converter = void 0;
    this.local$charset = void 0;
    this.local$frame = void 0;
    this.local$result = void 0;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$receiveDeserialized.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$receiveDeserialized.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$receiveDeserialized.prototype.constructor = Coroutine$receiveDeserialized;
  Coroutine$receiveDeserialized.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_0;
            tmp$_0 = get_converter(this.local$$receiver);
            if (tmp$_0 == null) {
              throw new WebsocketConverterNotFoundException('No converter was found for websocket');
            }

            this.local$converter = tmp$_0;
            this.local$charset = suitableCharset(this.local$$receiver.call.request.headers);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.incoming.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$frame = this.result_0;
            if (!this.local$converter.isApplicable_q1ubw4$(this.local$frame)) {
              throw new WebsocketDeserializeException_init("Converter doesn't support frame type " + this.local$frame.frameType.name, void 0, this.local$frame);
            }

            var tmp$_1_0 = reflect_0.JsType;
            var tmp$_0_0_0 = getKClass(this.local$T_0);
            var tryGetType$result_0_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0_0 = getReifiedTypeParameterKType(this.local$T_0);
              } catch (cause_0_0) {
                if (Kotlin.isType(cause_0_0, Throwable)) {
                  tryGetType$result_0_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_0_0;
              }
            }
             while (false);
            this.state_0 = 4;
            this.result_0 = this.local$converter.deserialize_v0czzf$(this.local$charset, typeInfoImpl_0(tmp$_1_0, tmp$_0_0_0, tryGetType$result_0_0), this.local$frame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$result = this.result_0;
            if (this.local$isT(this.local$result)) {
              this.result_0 = this.local$result;
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            throw new WebsocketDeserializeException_init("Can't deserialize value : expected value of type " + toString(getKClass(this.local$T_0).simpleName) + ',' + (' got ' + toString(Kotlin.getKClassFromExpression(this.local$result).simpleName)), void 0, this.local$frame);
          case 6:
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
  function receiveDeserialized(T_0_0, isT_0, $receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$receiveDeserialized(T_0_0, isT_0, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.plugins.websocket.receiveDeserialized_aqvyx3$', wrapFunction(function () {
    var get_converter = _.io.ktor.client.plugins.websocket.get_converter_vw5opa$;
    var WebsocketConverterNotFoundException_init = _.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.WebsocketConverterNotFoundException;
    var suitableCharset = _.$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.suitableCharset_4q0pk1$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var WebsocketDeserializeException_init = _.$$importsForInline$$['ktor-ktor-websocket-serialization-js-legacy'].$$importsForInline$$['ktor-ktor-serialization-js-legacy'].io.ktor.serialization.WebsocketDeserializeException;
    var getKClass = Kotlin.getKClass;
    var toString = Kotlin.toString;
    var reflect = _.$$importsForInline$$['ktor-ktor-websocket-serialization-js-legacy'].$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-websocket-serialization-js-legacy'].$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_0;
      tmp$_0 = get_converter($receiver);
      if (tmp$_0 == null) {
        throw new WebsocketConverterNotFoundException_init('No converter was found for websocket');
      }
      var converter = tmp$_0;
      var charset = suitableCharset($receiver.call.request.headers);
      receiveDeserializedBase$break: do {
        Kotlin.suspendCall($receiver.incoming.receive(Kotlin.coroutineReceiver()));
        var frame = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        if (!converter.isApplicable_q1ubw4$(frame)) {
          throw new WebsocketDeserializeException_init("Converter doesn't support frame type " + frame.frameType.name, void 0, frame);
        }
        var tmp$_1_0 = reflect.JsType;
        var tmp$_0_0_0 = getKClass(T_0);
        var tryGetType$result_0_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0_0 = getReifiedTypeParameterKType(T_0);
          } catch (cause_0_0) {
            if (Kotlin.isType(cause_0_0, Throwable)) {
              tryGetType$result_0_0 = null;
              break tryGetType$break;
            } else
              throw cause_0_0;
          }
        }
         while (false);
        Kotlin.suspendCall(converter.deserialize_v0czzf$(charset, typeInfoImpl(tmp$_1_0, tmp$_0_0_0, tryGetType$result_0_0), frame, Kotlin.coroutineReceiver()));
        var result = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        if (isT(result)) {
          Kotlin.setCoroutineResult(result, Kotlin.coroutineReceiver());
          break receiveDeserializedBase$break;
        }
        throw new WebsocketDeserializeException_init("Can't deserialize value : expected value of type " + toString(getKClass(T_0).simpleName) + ',' + (' got ' + toString(Kotlin.getKClassFromExpression(result).simpleName)), void 0, frame);
      }
       while (false);
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var WEBSOCKET_VERSION;
  var NONCE_SIZE;
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var $receiver = StringBuilder_init();
    var nonce = generateNonce(16);
    $receiver.append_pdl1vj$(encodeBase64(nonce));
    this.nonce_0 = $receiver.toString();
    var $receiver_0 = new HeadersBuilder();
    $receiver_0.append_puj7f4$(http.HttpHeaders.Upgrade, 'websocket');
    $receiver_0.append_puj7f4$(http.HttpHeaders.Connection, 'upgrade');
    $receiver_0.append_puj7f4$(http.HttpHeaders.SecWebSocketKey, this.nonce_0);
    $receiver_0.append_puj7f4$(http.HttpHeaders.SecWebSocketVersion, WEBSOCKET_VERSION);
    this.headers_81bwsu$_0 = $receiver_0.build();
  }
  Object.defineProperty(WebSocketContent.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_81bwsu$_0;
    }
  });
  WebSocketContent.prototype.verify_fkh4uy$ = function (headers) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = headers.get_61zpoe$(http.HttpHeaders.SecWebSocketAccept)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Server should specify header Sec-WebSocket-Accept'.toString());
    }
    var serverAccept = tmp$_0;
    var expectedAccept = websocketServerAccept(this.nonce_0);
    if (!equals(expectedAccept, serverAccept)) {
      var message = 'Failed to verify server accept header. Expected: ' + expectedAccept + ', received: ' + serverAccept;
      throw IllegalStateException_init(message.toString());
    }
  };
  WebSocketContent.prototype.toString = function () {
    return 'WebSocketContent';
  };
  WebSocketContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebSocketContent',
    interfaces: [ClientUpgradeContent]
  };
  var REQUEST_EXTENSIONS_KEY;
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  WebSocketCapability.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebSocketCapability',
    interfaces: [HttpClientEngineCapability]
  };
  var WebSocketCapability_instance = null;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance === null) {
      new WebSocketCapability();
    }
    return WebSocketCapability_instance;
  }
  function WebSocketExtensionsCapability() {
    WebSocketExtensionsCapability_instance = this;
  }
  WebSocketExtensionsCapability.prototype.toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  WebSocketExtensionsCapability.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebSocketExtensionsCapability',
    interfaces: [HttpClientEngineCapability]
  };
  var WebSocketExtensionsCapability_instance = null;
  function WebSocketExtensionsCapability_getInstance() {
    if (WebSocketExtensionsCapability_instance === null) {
      new WebSocketExtensionsCapability();
    }
    return WebSocketExtensionsCapability_instance;
  }
  function WebSockets(pingInterval, maxFrameSize, extensionsConfig, contentConverter) {
    WebSockets$Plugin_getInstance();
    if (contentConverter === void 0)
      contentConverter = null;
    this.pingInterval = pingInterval;
    this.maxFrameSize = maxFrameSize;
    this.extensionsConfig_0 = extensionsConfig;
    this.contentConverter = contentConverter;
  }
  WebSockets.prototype.installExtensions_0 = function (context) {
    var installed = this.extensionsConfig_0.build();
    context.attributes.put_uuntuo$(REQUEST_EXTENSIONS_KEY, installed);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = installed.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.protocols;
      addAll(destination, list);
    }
    var protocols = destination;
    this.addNegotiatedProtocols_0(context, protocols);
  };
  WebSockets.prototype.completeNegotiation_0 = function (call) {
    var tmp$, tmp$_0;
    var serverExtensions = (tmp$_0 = (tmp$ = call.response.headers.get_61zpoe$(http.HttpHeaders.SecWebSocketExtensions)) != null ? parseWebSocketExtensions(tmp$) : null) != null ? tmp$_0 : emptyList();
    var clientExtensions = call.attributes.get_yzaw86$(REQUEST_EXTENSIONS_KEY);
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = clientExtensions.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (element.clientNegotiation_wklug5$(serverExtensions))
        destination.add_11rb$(element);
    }
    return destination;
  };
  WebSockets.prototype.addNegotiatedProtocols_0 = function (context, protocols) {
    if (protocols.isEmpty())
      return;
    var headerValue = joinToString(protocols, ';');
    header(context, http.HttpHeaders.SecWebSocketExtensions, headerValue);
  };
  WebSockets.prototype.convertSessionToDefault_7ikcz7$ = function (session) {
    if (Kotlin.isType(session, DefaultWebSocketSession))
      return session;
    var $receiver = DefaultWebSocketSession_0(session, this.pingInterval, this.pingInterval.multiply(Kotlin.Long.fromInt(2)));
    $receiver.maxFrameSize = this.maxFrameSize;
    return $receiver;
  };
  function WebSockets$Config() {
    this.extensionsConfig_8be2vx$ = new WebSocketExtensionsConfig();
    this.pingInterval = L_1;
    this.maxFrameSize = L2147483647;
    this.contentConverter = null;
  }
  WebSockets$Config.prototype.extensions_rm8exh$ = function (block) {
    block(this.extensionsConfig_8be2vx$);
  };
  WebSockets$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  function WebSockets$Plugin() {
    WebSockets$Plugin_instance = this;
    this.key_duloku$_0 = new AttributeKey('Websocket');
  }
  Object.defineProperty(WebSockets$Plugin.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_duloku$_0;
    }
  });
  WebSockets$Plugin.prototype.prepare_oh3mgy$$default = function (block) {
    var $receiver = new WebSockets$Config();
    block($receiver);
    var config = $receiver;
    return new WebSockets(config.pingInterval, config.maxFrameSize, config.extensionsConfig_8be2vx$, config.contentConverter);
  };
  function Coroutine$WebSockets$Plugin$install$lambda(closure$extensionsSupported_0, closure$plugin_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$extensionsSupported = closure$extensionsSupported_0;
    this.local$closure$plugin = closure$plugin_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WebSockets$Plugin$install$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WebSockets$Plugin$install$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebSockets$Plugin$install$lambda.prototype.constructor = Coroutine$WebSockets$Plugin$install$lambda;
  Coroutine$WebSockets$Plugin$install$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!isWebsocket(this.local$$receiver.context.url.protocol)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver.context.setCapability_wfl2px$(WebSocketCapability_getInstance(), Unit);
            if (this.local$closure$extensionsSupported) {
              this.local$closure$plugin.installExtensions_0(this.local$$receiver.context);
            }

            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(new WebSocketContent(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function WebSockets$Plugin$install$lambda(closure$extensionsSupported_0, closure$plugin_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$WebSockets$Plugin$install$lambda(closure$extensionsSupported_0, closure$plugin_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebSockets$Plugin$install$lambda_0(closure$plugin_0, closure$extensionsSupported_0, $receiver_0, f_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$plugin = closure$plugin_0;
    this.local$closure$extensionsSupported = closure$extensionsSupported_0;
    this.local$info = void 0;
    this.local$session = void 0;
    this.local$$receiver = $receiver_0;
    this.local$f = f_0;
  }
  Coroutine$WebSockets$Plugin$install$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WebSockets$Plugin$install$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebSockets$Plugin$install$lambda_0.prototype.constructor = Coroutine$WebSockets$Plugin$install$lambda_0;
  Coroutine$WebSockets$Plugin$install$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$info = this.local$f.component1(), this.local$session = this.local$f.component2();
            var tmp$, tmp$_0;
            if (!Kotlin.isType(this.local$session, WebSocketSession)) {
              return;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.local$info.type, getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.local$closure$plugin.convertSessionToDefault_7ikcz7$(this.local$session);
              var clientSession = new DefaultClientWebSocketSession(this.local$$receiver.context, defaultSession);
              if (this.local$closure$extensionsSupported) {
                tmp$ = this.local$closure$plugin.completeNegotiation_0(this.local$$receiver.context);
              } else
                tmp$ = emptyList();
              var negotiated = tmp$;
              clientSession.start_wwqcjq$(negotiated);
              tmp$_0 = clientSession;
            } else
              tmp$_0 = new DelegatingClientWebSocketSession(this.local$$receiver.context, this.local$session);
            var clientSession_0 = tmp$_0;
            var response = new HttpResponseContainer(this.local$info, clientSession_0);
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.proceedWith_trkh7z$(response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function WebSockets$Plugin$install$lambda_0(closure$plugin_0, closure$extensionsSupported_0) {
    return function ($receiver_0, f_0, continuation_0, suspended) {
      var instance = new Coroutine$WebSockets$Plugin$install$lambda_0(closure$plugin_0, closure$extensionsSupported_0, $receiver_0, f_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  WebSockets$Plugin.prototype.install_wojrb5$ = function (plugin, scope) {
    var extensionsSupported = scope.engine.supportedCapabilities.contains_11rb$(WebSocketExtensionsCapability_getInstance());
    scope.requestPipeline.intercept_h71y74$(HttpRequestPipeline$Phases_getInstance().Render, WebSockets$Plugin$install$lambda(extensionsSupported, plugin));
    scope.responsePipeline.intercept_h71y74$(HttpResponsePipeline$Phases_getInstance().Transform, WebSockets$Plugin$install$lambda_0(plugin, extensionsSupported));
  };
  WebSockets$Plugin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Plugin',
    interfaces: [HttpClientPlugin]
  };
  var WebSockets$Plugin_instance = null;
  function WebSockets$Plugin_getInstance() {
    if (WebSockets$Plugin_instance === null) {
      new WebSockets$Plugin();
    }
    return WebSockets$Plugin_instance;
  }
  WebSockets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebSockets',
    interfaces: []
  };
  function WebSockets_init(pingInterval, maxFrameSize, $this) {
    if (pingInterval === void 0)
      pingInterval = L_1;
    if (maxFrameSize === void 0)
      maxFrameSize = L2147483647;
    $this = $this || Object.create(WebSockets.prototype);
    WebSockets.call($this, pingInterval, maxFrameSize, new WebSocketExtensionsConfig());
    return $this;
  }
  function WebSockets_init_0($this) {
    $this = $this || Object.create(WebSockets.prototype);
    WebSockets.call($this, L_1, L2147483647, new WebSocketExtensionsConfig());
    return $this;
  }
  function WebSocketException(message) {
    IllegalStateException_init(message, this);
    this.name = 'WebSocketException';
  }
  WebSocketException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebSocketException',
    interfaces: [IllegalStateException]
  };
  var HttpStatement$body$lambda = wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$continuation, this$HttpStatement, typeClosure$T, isT, closure$block) {
      return function () {
        this$HttpStatement.executeUnsafe(closure$continuation);
        var response = closure$continuation.$$coroutineResult$$;
        try {
          var T_0 = typeClosure$T;
          var isT_0 = isT;
          var tmp$;
          var tmp$_0 = response.call;
          var tmp$_1 = reflect.JsType;
          var tmp$_0_0 = getKClass(T_0);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = getReifiedTypeParameterKType(typeClosure$T);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          tmp$_0.body_qi9ur9$(typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result), $this$);
          $this$.$$coroutineResult$$ = isT_0(tmp$ = $this$.$$coroutineResult$$) ? tmp$ : throwCCE();
          var result = closure$continuation.$$coroutineResult$$;
          closure$block(result, closure$continuation);
          return closure$continuation.$$coroutineResult$$;
        }finally {
          this$HttpStatement.cleanup_abn2de$(response, closure$continuation);
        }
      };
    };
  });
  function WebSockets$lambda(closure$config) {
    return function ($receiver) {
      closure$config($receiver);
      return Unit;
    };
  }
  function WebSockets_0($receiver, config) {
    $receiver.install_dq2y33$(WebSockets$Plugin_getInstance(), WebSockets$lambda(config));
  }
  function webSocketSession$lambda$lambda($receiver, it) {
    $receiver.protocol = URLProtocol.Companion.WS;
    $receiver.port = $receiver.protocol.defaultPort;
    return Unit;
  }
  function webSocketSession$lambda$lambda$lambda(closure$sessionCompleted) {
    return function (it) {
      if (it != null)
        closure$sessionCompleted.completeExceptionally_tcv7n7$(it);
      else
        closure$sessionCompleted.complete_11rb$(Unit);
      return Unit;
    };
  }
  function Coroutine$webSocketSession$lambda$lambda(closure$sessionDeferred_0, session_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$sessionDeferred = closure$sessionDeferred_0;
    this.local$session = session_0;
  }
  Coroutine$webSocketSession$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$webSocketSession$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$webSocketSession$lambda$lambda.prototype.constructor = Coroutine$webSocketSession$lambda$lambda;
  Coroutine$webSocketSession$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var sessionCompleted = CompletableDeferred();
            this.local$closure$sessionDeferred.complete_11rb$(this.local$session);
            this.local$session.outgoing.invokeOnClose_f05bi3$(webSocketSession$lambda$lambda$lambda(sessionCompleted));
            this.state_0 = 2;
            this.result_0 = sessionCompleted.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function webSocketSession$lambda$lambda_0(closure$sessionDeferred_0) {
    return function (session_0, continuation_0, suspended) {
      var instance = new Coroutine$webSocketSession$lambda$lambda(closure$sessionDeferred_0, session_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$webSocketSession$lambda(closure$statement_0, closure$sessionDeferred_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 13;
    this.local$closure$statement = closure$statement_0;
    this.local$closure$sessionDeferred = closure$sessionDeferred_0;
    this.local$$this = void 0;
    this.local$block = void 0;
    this.local$response = void 0;
  }
  Coroutine$webSocketSession$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$webSocketSession$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$webSocketSession$lambda.prototype.constructor = Coroutine$webSocketSession$lambda;
  Coroutine$webSocketSession$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 10;
            this.local$$this = this.local$closure$statement;
            this.local$block = webSocketSession$lambda$lambda_0(this.local$closure$sessionDeferred);
            this.exceptionState_0 = 8;
            this.state_0 = 1;
            this.result_0 = this.local$$this.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 5;
            var tmp$;
            var tmp$_0 = this.local$response.call;
            var tmp$_1 = reflect.JsType;
            var tmp$_0_0 = getKClass(DefaultClientWebSocketSession);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(DefaultClientWebSocketSession), [], false);
              } catch (cause_0) {
                if (Kotlin.isType(cause_0, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause_0;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_0.body_qi9ur9$(typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$ = this.result_0, DefaultClientWebSocketSession) ? tmp$ : throwCCE();
            var result = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$block(result, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [4];
            this.state_0 = 6;
            continue;
          case 4:
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            continue;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = this.local$$this.cleanup_abn2de$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.exceptionState_0 = 10;
            var cause_1 = this.exception_0;
            if (Kotlin.isType(cause_1, CancellationException)) {
              throw unwrapCancellationException(cause_1);
            } else
              throw cause_1;
          case 9:
            return this.result_0;
          case 10:
            this.exceptionState_0 = 13;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              return this.local$closure$sessionDeferred.completeExceptionally_tcv7n7$(cause);
            } else {
              throw cause;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            return;
          case 13:
            throw this.exception_0;
          default:
            this.state_0 = 13;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 13) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function webSocketSession$lambda(closure$statement_0, closure$sessionDeferred_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$webSocketSession$lambda(closure$statement_0, closure$sessionDeferred_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function webSocketSession($receiver, block, continuation) {
    var $result;
    plugin($receiver, WebSockets$Plugin_getInstance());
    var sessionDeferred = CompletableDeferred();
    var $receiver_0 = new HttpRequestBuilder();
    $receiver_0.url_6yzzjr$(webSocketSession$lambda$lambda);
    block($receiver_0);
    $result = new HttpStatement($receiver_0, $receiver);
    var statement = $result;
    launch($receiver, void 0, void 0, webSocketSession$lambda(statement, sessionDeferred));
    $result = sessionDeferred.await(continuation);
    return $result;
  }
  function webSocketSession$lambda_0($receiver) {
    return Unit;
  }
  function webSocketSession$lambda_1(closure$method, closure$host, closure$port, closure$path, closure$block) {
    return function ($receiver) {
      $receiver.method = closure$method;
      url_0($receiver, 'ws', closure$host, closure$port, closure$path);
      closure$block($receiver);
      return Unit;
    };
  }
  function webSocketSession_0($receiver, method, host, port, path, block, continuation) {
    if (method === void 0)
      method = HttpMethod.Companion.Get;
    if (host === void 0)
      host = null;
    if (port === void 0)
      port = null;
    if (path === void 0)
      path = null;
    if (block === void 0)
      block = webSocketSession$lambda_0;
    return webSocketSession($receiver, webSocketSession$lambda_1(method, host, port, path, block), continuation);
  }
  function webSocketSession$lambda_2($receiver) {
    return Unit;
  }
  function webSocketSession$lambda_3(closure$urlString, closure$block) {
    return function ($receiver) {
      takeFrom_0($receiver.url, closure$urlString);
      closure$block($receiver);
      return Unit;
    };
  }
  function webSocketSession_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = webSocketSession$lambda_2;
    return webSocketSession($receiver, webSocketSession$lambda_3(urlString, block), continuation);
  }
  function webSocket$lambda$lambda($receiver, it) {
    $receiver.protocol = URLProtocol.Companion.WS;
    return Unit;
  }
  function Coroutine$webSocket$lambda(closure$block_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$closure$block = closure$block_0;
    this.local$it = it_0;
  }
  Coroutine$webSocket$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$webSocket$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$webSocket$lambda.prototype.constructor = Coroutine$webSocket$lambda;
  Coroutine$webSocket$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$closure$block(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [7];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 7;
            this.state_0 = 6;
            this.result_0 = close(this.local$it, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            throw this.exception_0;
          default:
            this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function webSocket$lambda(closure$block_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$webSocket$lambda(closure$block_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$webSocket($receiver_0, request_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.local$session = void 0;
    this.local$response = void 0;
    this.local$$receiver = $receiver_0;
    this.local$request = request_0;
    this.local$block = block_0;
  }
  Coroutine$webSocket.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$webSocket.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$webSocket.prototype.constructor = Coroutine$webSocket;
  Coroutine$webSocket.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            plugin(this.local$$receiver, WebSockets$Plugin_getInstance());
            var $receiver = new HttpRequestBuilder();
            $receiver.url_6yzzjr$(webSocket$lambda$lambda);
            this.local$request($receiver);
            this.result_0 = new HttpStatement($receiver, this.local$$receiver);
            this.local$session = this.result_0;
            this.exceptionState_0 = 8;
            this.state_0 = 1;
            this.result_0 = this.local$session.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 5;
            var tmp$;
            var tmp$_0 = this.local$response.call;
            var tmp$_1 = reflect.JsType;
            var tmp$_0_0 = getKClass(DefaultClientWebSocketSession);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(DefaultClientWebSocketSession), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_0.body_qi9ur9$(typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$ = this.result_0, DefaultClientWebSocketSession) ? tmp$ : throwCCE();
            var result = this.result_0;
            this.state_0 = 3;
            this.result_0 = webSocket$lambda(this.local$block)(result, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [4];
            this.state_0 = 6;
            continue;
          case 4:
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            continue;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = this.local$session.cleanup_abn2de$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.exceptionState_0 = 10;
            var cause_0 = this.exception_0;
            if (Kotlin.isType(cause_0, CancellationException)) {
              throw unwrapCancellationException(cause_0);
            } else
              throw cause_0;
          case 9:
            return;
          case 10:
            throw this.exception_0;
          default:
            this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 10) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function webSocket($receiver_0, request_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$webSocket($receiver_0, request_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function webSocket$lambda_0($receiver) {
    return Unit;
  }
  function webSocket$lambda_1(closure$method, closure$host, closure$port, closure$path, closure$request) {
    return function ($receiver) {
      $receiver.method = closure$method;
      url_0($receiver, 'ws', closure$host, closure$port, closure$path);
      closure$request($receiver);
      return Unit;
    };
  }
  function Coroutine$webSocket_0($receiver_0, method_0, host_0, port_0, path_0, request_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$method = method_0;
    this.local$host = host_0;
    this.local$port = port_0;
    this.local$path = path_0;
    this.local$request = request_0;
    this.local$block = block_0;
  }
  Coroutine$webSocket_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$webSocket_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$webSocket_0.prototype.constructor = Coroutine$webSocket_0;
  Coroutine$webSocket_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$method === void 0)
              this.local$method = HttpMethod.Companion.Get;
            if (this.local$host === void 0)
              this.local$host = null;
            if (this.local$port === void 0)
              this.local$port = null;
            if (this.local$path === void 0)
              this.local$path = null;
            if (this.local$request === void 0)
              this.local$request = webSocket$lambda_0;
            this.state_0 = 2;
            this.result_0 = webSocket(this.local$$receiver, webSocket$lambda_1(this.local$method, this.local$host, this.local$port, this.local$path, this.local$request), this.local$block, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function webSocket_0($receiver_0, method_0, host_0, port_0, path_0, request_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$webSocket_0($receiver_0, method_0, host_0, port_0, path_0, request_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function webSocket$lambda_2($receiver) {
    return Unit;
  }
  function webSocket$lambda_3(closure$urlString, closure$request) {
    return function ($receiver) {
      $receiver.url.protocol = URLProtocol.Companion.WS;
      $receiver.url.port = get_port($receiver);
      takeFrom_0($receiver.url, closure$urlString);
      closure$request($receiver);
      return Unit;
    };
  }
  function Coroutine$webSocket_1($receiver_0, urlString_0, request_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$urlString = urlString_0;
    this.local$request = request_0;
    this.local$block = block_0;
  }
  Coroutine$webSocket_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$webSocket_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$webSocket_1.prototype.constructor = Coroutine$webSocket_1;
  Coroutine$webSocket_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$request === void 0)
              this.local$request = webSocket$lambda_2;
            this.state_0 = 2;
            this.result_0 = webSocket_0(this.local$$receiver, HttpMethod.Companion.Get, null, null, null, webSocket$lambda_3(this.local$urlString, this.local$request), this.local$block, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function webSocket_1($receiver_0, urlString_0, request_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$webSocket_1($receiver_0, urlString_0, request_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ws$lambda($receiver) {
    return Unit;
  }
  function ws($receiver, method, host, port, path, request, block, continuation) {
    if (method === void 0)
      method = HttpMethod.Companion.Get;
    if (host === void 0)
      host = null;
    if (port === void 0)
      port = null;
    if (path === void 0)
      path = null;
    if (request === void 0)
      request = ws$lambda;
    return webSocket_0($receiver, method, host, port, path, request, block, continuation);
  }
  function ws_0($receiver, request, block, continuation) {
    return webSocket($receiver, request, block, continuation);
  }
  function ws$lambda_0($receiver) {
    return Unit;
  }
  function ws_1($receiver, urlString, request, block, continuation) {
    if (request === void 0)
      request = ws$lambda_0;
    return webSocket_1($receiver, urlString, request, block, continuation);
  }
  function wss$lambda(closure$request) {
    return function ($receiver) {
      $receiver.url.protocol = URLProtocol.Companion.WSS;
      $receiver.url.port = $receiver.url.protocol.defaultPort;
      closure$request($receiver);
      return Unit;
    };
  }
  function wss($receiver, request, block, continuation) {
    return webSocket($receiver, wss$lambda(request), block, continuation);
  }
  function wss$lambda_0($receiver) {
    return Unit;
  }
  function wss$lambda_1(closure$urlString, closure$request) {
    return function ($receiver) {
      takeFrom_0($receiver.url, closure$urlString);
      closure$request($receiver);
      return Unit;
    };
  }
  function wss_0($receiver, urlString, request, block, continuation) {
    if (request === void 0)
      request = wss$lambda_0;
    return wss($receiver, wss$lambda_1(urlString, request), block, continuation);
  }
  function wss$lambda_2($receiver) {
    return Unit;
  }
  function wss$lambda_3(closure$port, closure$request) {
    return function ($receiver) {
      $receiver.url.protocol = URLProtocol.Companion.WSS;
      if (closure$port != null)
        $receiver.url.port = closure$port;
      closure$request($receiver);
      return Unit;
    };
  }
  function wss_1($receiver, method, host, port, path, request, block, continuation) {
    if (method === void 0)
      method = HttpMethod.Companion.Get;
    if (host === void 0)
      host = null;
    if (port === void 0)
      port = null;
    if (path === void 0)
      path = null;
    if (request === void 0)
      request = wss$lambda_2;
    return webSocket_0($receiver, method, host, port, path, wss$lambda_3(port, request), block, continuation);
  }
  function ClientUpgradeContent() {
    OutgoingContent$NoContent.call(this);
    this.content_1mwwgv$_xt2h6t$_0 = lazy(ClientUpgradeContent$content$lambda);
  }
  Object.defineProperty(ClientUpgradeContent.prototype, 'content_1mwwgv$_0', {
    configurable: true,
    get: function () {
      return this.content_1mwwgv$_xt2h6t$_0.value;
    }
  });
  Object.defineProperty(ClientUpgradeContent.prototype, 'output', {
    configurable: true,
    get: function () {
      return this.content_1mwwgv$_0;
    }
  });
  function Coroutine$pipeTo_h3x4ir$($this, output_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$output = output_0;
  }
  Coroutine$pipeTo_h3x4ir$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pipeTo_h3x4ir$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pipeTo_h3x4ir$.prototype.constructor = Coroutine$pipeTo_h3x4ir$;
  Coroutine$pipeTo_h3x4ir$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = copyAndClose(this.$this.content_1mwwgv$_0, this.local$output, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  ClientUpgradeContent.prototype.pipeTo_h3x4ir$ = function (output_0, continuation_0, suspended) {
    var instance = new Coroutine$pipeTo_h3x4ir$(this, output_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function ClientUpgradeContent$content$lambda() {
    return ByteChannel();
  }
  ClientUpgradeContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientUpgradeContent',
    interfaces: [OutgoingContent$NoContent]
  };
  function DefaultHttpRequest(call, data) {
    this.call_bo7spw$_0 = call;
    this.method_c5x7eh$_0 = data.method;
    this.url_9j6cnp$_0 = data.url;
    this.content_jw4yw1$_0 = data.body;
    this.headers_atwsac$_0 = data.headers;
    this.attributes_el41s3$_0 = data.attributes;
  }
  Object.defineProperty(DefaultHttpRequest.prototype, 'call', {
    get: function () {
      return this.call_bo7spw$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.call.coroutineContext;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'method', {
    configurable: true,
    get: function () {
      return this.method_c5x7eh$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'url', {
    configurable: true,
    get: function () {
      return this.url_9j6cnp$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_jw4yw1$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_atwsac$_0;
    }
  });
  Object.defineProperty(DefaultHttpRequest.prototype, 'attributes', {
    configurable: true,
    get: function () {
      return this.attributes_el41s3$_0;
    }
  });
  DefaultHttpRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultHttpRequest',
    interfaces: [HttpRequest_0]
  };
  function HttpRequest_0() {
  }
  Object.defineProperty(HttpRequest_0.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.call.coroutineContext;
    }
  });
  HttpRequest_0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpRequest',
    interfaces: [CoroutineScope, HttpMessage]
  };
  function HttpRequestBuilder() {
    HttpRequestBuilder$Companion_getInstance();
    this.url = new URLBuilder_0();
    this.method = HttpMethod.Companion.Get;
    this.headers_nor9ye$_0 = new HeadersBuilder();
    this.body_ts5xt2$_0 = EmptyContent_getInstance();
    this.executionContext_h6ms6p$_0 = SupervisorJob();
    this.attributes = Attributes(true);
  }
  Object.defineProperty(HttpRequestBuilder.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_nor9ye$_0;
    }
  });
  Object.defineProperty(HttpRequestBuilder.prototype, 'body', {
    configurable: true,
    get: function () {
      return this.body_ts5xt2$_0;
    },
    set: function (body) {
      this.body_ts5xt2$_0 = body;
    }
  });
  Object.defineProperty(HttpRequestBuilder.prototype, 'bodyType', {
    configurable: true,
    get: function () {
      return this.attributes.getOrNull_yzaw86$(BodyTypeAttributeKey);
    },
    set: function (value) {
      if (value != null) {
        this.attributes.put_uuntuo$(BodyTypeAttributeKey, value);
      } else {
        this.attributes.remove_yzaw86$(BodyTypeAttributeKey);
      }
    }
  });
  Object.defineProperty(HttpRequestBuilder.prototype, 'executionContext', {
    configurable: true,
    get: function () {
      return this.executionContext_h6ms6p$_0;
    },
    set: function (executionContext) {
      this.executionContext_h6ms6p$_0 = executionContext;
    }
  });
  HttpRequestBuilder.prototype.url_6yzzjr$ = function (block) {
    block(this.url, this.url);
  };
  HttpRequestBuilder.prototype.build = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.url.build();
    tmp$_0 = this.method;
    tmp$_1 = this.headers.build();
    var tmp$_4;
    if ((tmp$_3 = Kotlin.isType(tmp$_2 = this.body, OutgoingContent) ? tmp$_2 : null) != null)
      tmp$_4 = tmp$_3;
    else {
      throw IllegalStateException_init(('No request transformation found: ' + this.body.toString()).toString());
    }
    return new HttpRequestData(tmp$, tmp$_0, tmp$_1, tmp$_4, this.executionContext, this.attributes);
  };
  HttpRequestBuilder.prototype.setAttributes_yhh5ns$ = function (block) {
    block(this.attributes);
  };
  HttpRequestBuilder.prototype.takeFromWithExecutionContext_s9rlw$ = function (builder) {
    this.executionContext = builder.executionContext;
    return this.takeFrom_s9rlw$(builder);
  };
  HttpRequestBuilder.prototype.takeFrom_s9rlw$ = function (builder) {
    this.method = builder.method;
    this.body = builder.body;
    this.bodyType = builder.bodyType;
    takeFrom(this.url, builder.url);
    this.url.encodedPathSegments = this.url.encodedPathSegments;
    appendAll(this.headers, builder.headers);
    putAll(this.attributes, builder.attributes);
    return this;
  };
  function HttpRequestBuilder$setCapability$lambda() {
    return LinkedHashMap_init();
  }
  HttpRequestBuilder.prototype.setCapability_wfl2px$ = function (key, capability) {
    var capabilities = this.attributes.computeIfAbsent_u4q9l2$(ENGINE_CAPABILITIES_KEY, HttpRequestBuilder$setCapability$lambda);
    capabilities.put_xwzc9p$(key, capability);
  };
  HttpRequestBuilder.prototype.getCapabilityOrNull_i25mbv$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.get_11rb$(key) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  function HttpRequestBuilder$Companion() {
    HttpRequestBuilder$Companion_instance = this;
  }
  HttpRequestBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpRequestBuilder$Companion_instance = null;
  function HttpRequestBuilder$Companion_getInstance() {
    if (HttpRequestBuilder$Companion_instance === null) {
      new HttpRequestBuilder$Companion();
    }
    return HttpRequestBuilder$Companion_instance;
  }
  HttpRequestBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestBuilder',
    interfaces: [HttpMessageBuilder]
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
    this.executionContext = executionContext;
    this.attributes = attributes;
    var tmp$, tmp$_0;
    this.requiredCapabilities_8be2vx$ = (tmp$_0 = (tmp$ = this.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.keys : null) != null ? tmp$_0 : emptySet();
  }
  HttpRequestData.prototype.getCapabilityOrNull_1sr7de$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.get_11rb$(key) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.url + ', method=' + this.method + ')';
  };
  HttpRequestData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestData',
    interfaces: []
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.statusCode = statusCode;
    this.requestTime = requestTime;
    this.headers = headers;
    this.version = version;
    this.body = body;
    this.callContext = callContext;
    this.responseTime = GMTDate();
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.statusCode + ')';
  };
  HttpResponseData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponseData',
    interfaces: []
  };
  function headers($receiver, block) {
    var $receiver_0 = $receiver.headers;
    block($receiver_0);
    return $receiver_0;
  }
  function takeFrom_2($receiver, request) {
    $receiver.method = request.method;
    $receiver.body = request.content;
    $receiver.bodyType = $receiver.attributes.getOrNull_yzaw86$(BodyTypeAttributeKey);
    takeFrom_1($receiver.url, request.url);
    $receiver.headers.appendAll_hb0ubp$(request.headers);
    putAll($receiver.attributes, request.attributes);
    return $receiver;
  }
  function url($receiver, block) {
    block($receiver.url);
  }
  function takeFrom_3($receiver, request) {
    $receiver.method = request.method;
    $receiver.body = request.body;
    $receiver.bodyType = $receiver.attributes.getOrNull_yzaw86$(BodyTypeAttributeKey);
    takeFrom_1($receiver.url, request.url);
    $receiver.headers.appendAll_hb0ubp$(request.headers);
    putAll($receiver.attributes, request.attributes);
    return $receiver;
  }
  function invoke($receiver, block) {
    var $receiver_0 = new HttpRequestBuilder();
    url($receiver_0, block);
    return $receiver_0;
  }
  function url$lambda($receiver) {
    return Unit;
  }
  function url_0($receiver, scheme, host, port, path, block) {
    if (scheme === void 0)
      scheme = null;
    if (host === void 0)
      host = null;
    if (port === void 0)
      port = null;
    if (path === void 0)
      path = null;
    if (block === void 0)
      block = url$lambda;
    set($receiver.url, scheme, host, port, path, block);
  }
  function invoke$lambda($receiver) {
    return Unit;
  }
  function invoke_0($receiver, scheme, host, port, path, block) {
    if (scheme === void 0)
      scheme = null;
    if (host === void 0)
      host = null;
    if (port === void 0)
      port = null;
    if (path === void 0)
      path = null;
    if (block === void 0)
      block = invoke$lambda;
    var $receiver_0 = new HttpRequestBuilder();
    url_0($receiver_0, scheme, host, port, path, block);
    return $receiver_0;
  }
  function url_1($receiver, urlString) {
    takeFrom_0($receiver.url, urlString);
  }
  function isUpgradeRequest($receiver) {
    return Kotlin.isType($receiver.body, ClientUpgradeContent);
  }
  function HttpRequestPipeline(developmentMode) {
    HttpRequestPipeline$Phases_getInstance();
    if (developmentMode === void 0)
      developmentMode = false;
    Pipeline.call(this, [HttpRequestPipeline$Phases_getInstance().Before, HttpRequestPipeline$Phases_getInstance().State, HttpRequestPipeline$Phases_getInstance().Transform, HttpRequestPipeline$Phases_getInstance().Render, HttpRequestPipeline$Phases_getInstance().Send]);
    this.developmentMode_dglch5$_0 = developmentMode;
  }
  Object.defineProperty(HttpRequestPipeline.prototype, 'developmentMode', {
    get: function () {
      return this.developmentMode_dglch5$_0;
    }
  });
  function HttpRequestPipeline$Phases() {
    HttpRequestPipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Before');
    this.State = new PipelinePhase('State');
    this.Transform = new PipelinePhase('Transform');
    this.Render = new PipelinePhase('Render');
    this.Send = new PipelinePhase('Send');
  }
  HttpRequestPipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpRequestPipeline$Phases_instance = null;
  function HttpRequestPipeline$Phases_getInstance() {
    if (HttpRequestPipeline$Phases_instance === null) {
      new HttpRequestPipeline$Phases();
    }
    return HttpRequestPipeline$Phases_instance;
  }
  HttpRequestPipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpRequestPipeline',
    interfaces: [Pipeline]
  };
  function HttpSendPipeline(developmentMode) {
    HttpSendPipeline$Phases_getInstance();
    if (developmentMode === void 0)
      developmentMode = false;
    Pipeline.call(this, [HttpSendPipeline$Phases_getInstance().Before, HttpSendPipeline$Phases_getInstance().State, HttpSendPipeline$Phases_getInstance().Monitoring, HttpSendPipeline$Phases_getInstance().Engine, HttpSendPipeline$Phases_getInstance().Receive]);
    this.developmentMode_7517lc$_0 = developmentMode;
  }
  Object.defineProperty(HttpSendPipeline.prototype, 'developmentMode', {
    get: function () {
      return this.developmentMode_7517lc$_0;
    }
  });
  function HttpSendPipeline$Phases() {
    HttpSendPipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Before');
    this.State = new PipelinePhase('State');
    this.Monitoring = new PipelinePhase('Monitoring');
    this.Engine = new PipelinePhase('Engine');
    this.Receive = new PipelinePhase('Receive');
  }
  HttpSendPipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpSendPipeline$Phases_instance = null;
  function HttpSendPipeline$Phases_getInstance() {
    if (HttpSendPipeline$Phases_instance === null) {
      new HttpSendPipeline$Phases();
    }
    return HttpSendPipeline$Phases_instance;
  }
  HttpSendPipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpSendPipeline',
    interfaces: [Pipeline]
  };
  var BodyTypeAttributeKey;
  var setBody = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.setBody_p8vcjn$', wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT, $receiver, body) {
      if (body == null) {
        $receiver.body = utils.EmptyContent;
        $receiver.bodyType = null;
      } else if (Kotlin.isType(body, OutgoingContent)) {
        $receiver.body = body;
        $receiver.bodyType = null;
      } else {
        $receiver.body = body;
        var tmp$ = reflect.JsType;
        var tmp$_0 = getKClass(T_0);
        var tryGetType$result;
        tryGetType$break: do {
          try {
            tryGetType$result = getReifiedTypeParameterKType(T_0);
          } catch (cause) {
            if (Kotlin.isType(cause, Throwable)) {
              tryGetType$result = null;
              break tryGetType$break;
            } else
              throw cause;
          }
        }
         while (false);
        $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
      }
    };
  }));
  function request$lambda($receiver) {
    return Unit;
  }
  function prepareRequest$lambda($receiver) {
    return Unit;
  }
  function request$lambda_0($receiver) {
    return Unit;
  }
  function prepareRequest$lambda_0($receiver) {
    return Unit;
  }
  function get$lambda($receiver) {
    return Unit;
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function put$lambda($receiver) {
    return Unit;
  }
  function delete$lambda($receiver) {
    return Unit;
  }
  function options$lambda($receiver) {
    return Unit;
  }
  function patch$lambda($receiver) {
    return Unit;
  }
  function head$lambda($receiver) {
    return Unit;
  }
  function prepareGet$lambda($receiver) {
    return Unit;
  }
  function preparePost$lambda($receiver) {
    return Unit;
  }
  function preparePut$lambda($receiver) {
    return Unit;
  }
  function prepareDelete$lambda($receiver) {
    return Unit;
  }
  function prepareOptions$lambda($receiver) {
    return Unit;
  }
  function preparePatch$lambda($receiver) {
    return Unit;
  }
  function prepareHead$lambda($receiver) {
    return Unit;
  }
  function request($receiver, builder, continuation) {
    if (builder === void 0)
      builder = new HttpRequestBuilder();
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_30bfl5$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      if (builder === void 0)
        builder = new HttpRequestBuilder_init();
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareRequest($receiver, builder, continuation) {
    if (builder === void 0)
      builder = new HttpRequestBuilder();
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareRequest_30bfl5$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      if (builder === void 0)
        builder = new HttpRequestBuilder_init();
      return new HttpStatement_init(builder, $receiver);
    };
  }));
  function request_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareRequest_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareRequest_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function request_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = request$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function request$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = request$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareRequest_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = prepareRequest$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareRequest_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareRequest$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = prepareRequest$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function request_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = request$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    url_2($receiver_1, url);
    block($receiver_1);
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.request_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_qpqkqe$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function request$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url_0, block, continuation) {
      if (block === void 0)
        block = request$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, url_0);
      block($receiver_1);
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareRequest_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = prepareRequest$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    url_2($receiver_1, url);
    block($receiver_1);
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareRequest_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_qpqkqe$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareRequest$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url_0, block, continuation) {
      if (block === void 0)
        block = prepareRequest$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, url_0);
      block($receiver_1);
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function get_1($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Get;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Get;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Post;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Post;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Put;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Put;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_0($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Delete;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Delete;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Options;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Options;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Patch;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Patch;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Head;
    return (new HttpStatement(builder, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Head;
      Kotlin.suspendCall((new HttpStatement_init(builder, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareGet($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Get;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareGet_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Get;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePost($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Post;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePost_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Post;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePut($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Put;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePut_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Put;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareDelete($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Delete;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareDelete_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Delete;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareOptions($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Options;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareOptions_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Options;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePatch($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Patch;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePatch_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Patch;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareHead($receiver, builder, continuation) {
    builder.method = HttpMethod.Companion.Head;
    return new HttpStatement(builder, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareHead_30bfl5$', wrapFunction(function () {
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, builder, continuation) {
      builder.method = HttpMethod.Companion.Head;
      Kotlin.setCoroutineResult(new HttpStatement_init(builder, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function get_2($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Get;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Get;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Post;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Post;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Put;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Put;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_1($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Delete;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Delete;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Options;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Options;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Patch;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Patch;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Head;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Head;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareGet_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Get;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareGet_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Get;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePost_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Post;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePost_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Post;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePut_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Put;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePut_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Put;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareDelete_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Delete;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareDelete_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Delete;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareOptions_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Options;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareOptions_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Options;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePatch_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Patch;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePatch_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Patch;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareHead_0($receiver, block, continuation) {
    var $receiver_1 = new HttpRequestBuilder();
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Head;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareHead_uxii9k$', wrapFunction(function () {
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    return function ($receiver, block, continuation) {
      var $receiver_1 = new HttpRequestBuilder_init();
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Head;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function request_3(block) {
    var $receiver = new HttpRequestBuilder();
    block($receiver);
    return $receiver;
  }
  function get_3($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = get$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Get;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function get$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = get$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Get;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = post$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Post;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function post$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = post$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Post;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = put$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Put;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function put$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = put$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Put;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_2($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = delete$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Delete;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function delete$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = delete$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Delete;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = options$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Options;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function options$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = options$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Options;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = patch$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Patch;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function patch$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = patch$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Patch;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = head$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Head;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function head$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = head$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Head;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareGet_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = prepareGet$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Get;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareGet_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareGet$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = prepareGet$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Get;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePost_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = preparePost$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Post;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePost_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function preparePost$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = preparePost$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Post;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePut_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = preparePut$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Put;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePut_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function preparePut$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = preparePut$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Put;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareDelete_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = prepareDelete$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Delete;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareDelete_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareDelete$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = prepareDelete$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Delete;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareOptions_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = prepareOptions$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Options;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareOptions_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareOptions$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = prepareOptions$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Options;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePatch_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = preparePatch$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Patch;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePatch_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function preparePatch$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = preparePatch$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Patch;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareHead_1($receiver, urlString, block, continuation) {
    if (block === void 0)
      block = prepareHead$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    url_1($receiver_1, urlString);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Head;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareHead_7cz7zq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareHead$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, urlString, block, continuation) {
      if (block === void 0)
        block = prepareHead$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      url($receiver_1, urlString);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Head;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function get$lambda_0($receiver) {
    return Unit;
  }
  function prepareGet$lambda_0($receiver) {
    return Unit;
  }
  function post$lambda_0($receiver) {
    return Unit;
  }
  function preparePost$lambda_0($receiver) {
    return Unit;
  }
  function put$lambda_0($receiver) {
    return Unit;
  }
  function preparePut$lambda_0($receiver) {
    return Unit;
  }
  function patch$lambda_0($receiver) {
    return Unit;
  }
  function preparePatch$lambda_0($receiver) {
    return Unit;
  }
  function options$lambda_0($receiver) {
    return Unit;
  }
  function prepareOptions$lambda_0($receiver) {
    return Unit;
  }
  function head$lambda_0($receiver) {
    return Unit;
  }
  function prepareHead$lambda_0($receiver) {
    return Unit;
  }
  function delete$lambda_0($receiver) {
    return Unit;
  }
  function prepareDelete$lambda_0($receiver) {
    return Unit;
  }
  function get_4($receiver, url, block, continuation) {
    if (block === void 0)
      block = get$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Get;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.get_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function get$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = get$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Get;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareGet_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = prepareGet$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Get;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareGet_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareGet$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = prepareGet$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Get;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function post_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = post$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Post;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.post_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function post$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = post$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Post;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePost_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = preparePost$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Post;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePost_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function preparePost$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = preparePost$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Post;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function put_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = put$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Put;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.put_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function put$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = put$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Put;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePut_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = preparePut$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Put;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePut_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function preparePut$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = preparePut$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Put;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function patch_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = patch$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Patch;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.patch_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function patch$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = patch$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Patch;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function preparePatch_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = preparePatch$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Patch;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.preparePatch_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function preparePatch$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = preparePatch$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Patch;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function options_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = options$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Options;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.options_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function options$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = options$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Options;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareOptions_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = prepareOptions$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Options;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareOptions_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareOptions$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = prepareOptions$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Options;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function head_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = head$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Head;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.head_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function head$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = head$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Head;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareHead_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = prepareHead$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Head;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareHead_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareHead$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = prepareHead$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Head;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function delete_3($receiver, url, block, continuation) {
    if (block === void 0)
      block = delete$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Delete;
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.delete_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function delete$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = delete$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Delete;
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareDelete_2($receiver, url, block, continuation) {
    if (block === void 0)
      block = prepareDelete$lambda_0;
    var $receiver_1 = new HttpRequestBuilder();
    takeFrom_1($receiver_1.url, url);
    block($receiver_1);
    $receiver_1.method = HttpMethod.Companion.Delete;
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.prepareDelete_9weqol$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.takeFrom_wol2ee$;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    function prepareDelete$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, url, block, continuation) {
      if (block === void 0)
        block = prepareDelete$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      takeFrom($receiver_1.url, url);
      block($receiver_1);
      $receiver_1.method = HttpMethod.Companion.Delete;
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function url_2($receiver, url) {
    takeFrom_1($receiver.url, url);
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    OutgoingContent$ByteArrayContent.call(this);
    this.formData = formData;
    var $receiver = formUrlEncode(this.formData);
    var charset;
    var toByteArray$result;
    toByteArray$break: do {
      charset = charsets.Charsets.UTF_8;
      if (charset != null ? charset.equals(charsets.Charsets.UTF_8) : null) {
        toByteArray$result = encodeToByteArray($receiver);
        break toByteArray$break;
      }
      toByteArray$result = encodeToByteArray_0(charset.newEncoder(), $receiver, 0, $receiver.length);
    }
     while (false);
    this.content_0 = toByteArray$result;
    this.contentLength_f2tvnf$_0 = Kotlin.Long.fromInt(this.content_0.length);
    this.contentType_gyve29$_0 = withCharset(ContentType.Application.FormUrlEncoded, charsets.Charsets.UTF_8);
  }
  Object.defineProperty(FormDataContent.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.contentLength_f2tvnf$_0;
    }
  });
  Object.defineProperty(FormDataContent.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.contentType_gyve29$_0;
    }
  });
  FormDataContent.prototype.bytes = function () {
    return this.content_0;
  };
  FormDataContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormDataContent',
    interfaces: [OutgoingContent$ByteArrayContent]
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    if (boundary === void 0)
      boundary = generateBoundary();
    if (contentType === void 0)
      contentType = ContentType.MultiPart.FormData.withParameter_puj7f4$('boundary', boundary);
    OutgoingContent$WriteChannelContent.call(this);
    this.boundary = boundary;
    this.contentType_azd2en$_0 = contentType;
    var $receiver = '--' + this.boundary + '\r' + '\n';
    var charset;
    var toByteArray$result;
    toByteArray$break: do {
      charset = charsets.Charsets.UTF_8;
      if (charset != null ? charset.equals(charsets.Charsets.UTF_8) : null) {
        toByteArray$result = encodeToByteArray($receiver);
        break toByteArray$break;
      }
      toByteArray$result = encodeToByteArray_0(charset.newEncoder(), $receiver, 0, $receiver.length);
    }
     while (false);
    this.BOUNDARY_BYTES_0 = toByteArray$result;
    var $receiver_0 = '--' + this.boundary + '--' + '\r' + '\n';
    var charset_0;
    var toByteArray$result_0;
    toByteArray$break: do {
      charset_0 = charsets.Charsets.UTF_8;
      if (charset_0 != null ? charset_0.equals(charsets.Charsets.UTF_8) : null) {
        toByteArray$result_0 = encodeToByteArray($receiver_0);
        break toByteArray$break;
      }
      toByteArray$result_0 = encodeToByteArray_0(charset_0.newEncoder(), $receiver_0, 0, $receiver_0.length);
    }
     while (false);
    this.LAST_BOUNDARY_BYTES_0 = toByteArray$result_0;
    this.BODY_OVERHEAD_SIZE_0 = this.LAST_BOUNDARY_BYTES_0.length;
    this.PART_OVERHEAD_SIZE_0 = (RN_BYTES.length * 2 | 0) + this.BOUNDARY_BYTES_0.length | 0;
    var destination = ArrayList_init_0(collectionSizeOrDefault(parts, 10));
    var tmp$;
    tmp$ = parts.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      var headersBuilder = new BytePacketBuilder();
      tmp$_1 = item.headers.entries().iterator();
      while (tmp$_1.hasNext()) {
        var tmp$_6 = tmp$_1.next();
        var key = tmp$_6.key;
        var values = tmp$_6.value;
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully_0(headersBuilder, RN_BYTES);
      }
      var bodySize = (tmp$_2 = item.headers.get_61zpoe$(http.HttpHeaders.ContentLength)) != null ? toLong(tmp$_2) : null;
      if (Kotlin.isType(item, PartData$FileItem)) {
        var headers = readBytes(headersBuilder.build());
        var size = (tmp$_3 = bodySize != null ? bodySize.add(Kotlin.Long.fromInt(this.PART_OVERHEAD_SIZE_0)) : null) != null ? tmp$_3.add(Kotlin.Long.fromInt(headers.length)) : null;
        transform$result = new PreparedPart$InputPart(headers, item.provider, size);
      } else if (Kotlin.isType(item, PartData$BinaryItem)) {
        var headers_0 = readBytes(headersBuilder.build());
        var size_0 = (tmp$_4 = bodySize != null ? bodySize.add(Kotlin.Long.fromInt(this.PART_OVERHEAD_SIZE_0)) : null) != null ? tmp$_4.add(Kotlin.Long.fromInt(headers_0.length)) : null;
        transform$result = new PreparedPart$InputPart(headers_0, item.provider, size_0);
      } else if (Kotlin.isType(item, PartData$FormItem)) {
        var buildPacket$result;
        var builder = new BytePacketBuilder();
        try {
          writeText(builder, item.value);
          buildPacket$result = builder.build();
        } catch (t) {
          if (Kotlin.isType(t, Throwable)) {
            builder.release();
            throw t;
          } else
            throw t;
        }
        var bytes = readBytes(buildPacket$result);
        var provider = MultiPartFormDataContent$rawParts$lambda$lambda(bytes);
        if (bodySize == null) {
          writeText(headersBuilder, http.HttpHeaders.ContentLength + ': ' + bytes.length);
          writeFully_0(headersBuilder, RN_BYTES);
        }
        var headers_1 = readBytes(headersBuilder.build());
        var size_1 = bytes.length + this.PART_OVERHEAD_SIZE_0 + headers_1.length | 0;
        transform$result = new PreparedPart$InputPart(headers_1, provider, Kotlin.Long.fromInt(size_1));
      } else if (Kotlin.isType(item, PartData$BinaryChannelItem)) {
        var headers_2 = readBytes(headersBuilder.build());
        var size_2 = (tmp$_5 = bodySize != null ? bodySize.add(Kotlin.Long.fromInt(this.PART_OVERHEAD_SIZE_0)) : null) != null ? tmp$_5.add(Kotlin.Long.fromInt(headers_2.length)) : null;
        transform$result = new PreparedPart$ChannelPart(headers_2, item.provider, size_2);
      } else {
        transform$result = Kotlin.noWhenBranchMatched();
      }
      tmp$_0.call(destination, transform$result);
    }
    this.rawParts_0 = destination;
    this.contentLength_egukxp$_0 = null;
    var tmp$_7;
    var rawLength = L0;
    tmp$_7 = this.rawParts_0.iterator();
    while (tmp$_7.hasNext()) {
      var part = tmp$_7.next();
      var size_3 = part.size;
      if (size_3 == null) {
        rawLength = null;
        break;
      }
      rawLength = rawLength != null ? rawLength.add(size_3) : null;
    }
    if (rawLength != null) {
      rawLength = rawLength.add(Kotlin.Long.fromInt(this.BODY_OVERHEAD_SIZE_0));
    }
    this.contentLength_egukxp$_0 = rawLength;
  }
  Object.defineProperty(MultiPartFormDataContent.prototype, 'contentType', {
    get: function () {
      return this.contentType_azd2en$_0;
    }
  });
  Object.defineProperty(MultiPartFormDataContent.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.contentLength_egukxp$_0;
    }
  });
  function Coroutine$writeTo_h3x4ir$($this, channel_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 18;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$part = void 0;
    this.local$$receiver = void 0;
    this.local$closed = void 0;
    this.local$channel = channel_0;
  }
  Coroutine$writeTo_h3x4ir$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo_h3x4ir$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo_h3x4ir$.prototype.constructor = Coroutine$writeTo_h3x4ir$;
  Coroutine$writeTo_h3x4ir$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 15;
            this.local$tmp$ = this.$this.rawParts_0.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 13;
              continue;
            }

            this.local$part = this.local$tmp$.next();
            this.state_0 = 2;
            this.result_0 = writeFully(this.local$channel, this.$this.BOUNDARY_BYTES_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 3;
            this.result_0 = writeFully(this.local$channel, this.local$part.headers, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeFully(this.local$channel, RN_BYTES, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (Kotlin.isType(this.local$part, PreparedPart$InputPart)) {
              this.local$$receiver = this.local$part.provider();
              var tmp$;
              this.local$closed = false;
              this.exceptionState_0 = 8;
              this.state_0 = 7;
              this.result_0 = copyTo_1(this.local$$receiver, this.local$channel, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(this.local$part, PreparedPart$ChannelPart)) {
                this.state_0 = 5;
                this.result_0 = copyTo_0(this.local$part.provider(), this.local$channel, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                Kotlin.noWhenBranchMatched();
                this.state_0 = 6;
                continue;
              }
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 11;
            continue;
          case 7:
            tmp$ = Unit;
            this.exceptionState_0 = 15;
            this.finallyPath_0 = [10];
            this.state_0 = 9;
            continue;
          case 8:
            this.finallyPath_0 = [15];
            this.exceptionState_0 = 9;
            var first = this.exception_0;
            if (Kotlin.isType(first, Throwable)) {
              try {
                this.local$closed = true;
                this.local$$receiver.close();
              } catch (second) {
                if (Kotlin.isType(second, Throwable)) {
                  addSuppressedInternal(first, second);
                } else
                  throw second;
              }
              throw first;
            } else
              throw first;
          case 9:
            this.exceptionState_0 = 15;
            if (!this.local$closed) {
              this.local$$receiver.close();
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = writeFully(this.local$channel, RN_BYTES, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 1;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = writeFully(this.local$channel, this.$this.LAST_BOUNDARY_BYTES_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.exceptionState_0 = 18;
            this.finallyPath_0 = [17];
            this.state_0 = 16;
            continue;
          case 15:
            this.finallyPath_0 = [18];
            this.exceptionState_0 = 16;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$channel.close_dbl4no$(cause);
            } else
              throw cause;
            this.finallyPath_0 = [17];
            this.state_0 = 16;
            continue;
          case 16:
            this.exceptionState_0 = 18;
            close_0(this.local$channel);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 17:
            return;
          case 18:
            throw this.exception_0;
          default:
            this.state_0 = 18;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 18) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiPartFormDataContent.prototype.writeTo_h3x4ir$ = function (channel_0, continuation_0, suspended) {
    var instance = new Coroutine$writeTo_h3x4ir$(this, channel_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function MultiPartFormDataContent$rawParts$lambda$lambda(closure$bytes) {
    return function () {
      var buildPacket$result;
      var builder = new BytePacketBuilder();
      try {
        writeFully_0(builder, closure$bytes);
        buildPacket$result = builder.build();
      } catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        } else
          throw t;
      }
      return buildPacket$result;
    };
  }
  MultiPartFormDataContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiPartFormDataContent',
    interfaces: [OutgoingContent$WriteChannelContent]
  };
  function generateBoundary() {
    var $receiver = StringBuilder_init();
    for (var index = 0; index < 32; index++) {
      $receiver.append_pdl1vj$(toString_0(Random.Default.nextInt(), 16));
    }
    return take($receiver.toString(), 70);
  }
  function PreparedPart(headers, size) {
    this.headers = headers;
    this.size = size;
  }
  function PreparedPart$InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.provider = provider;
  }
  PreparedPart$InputPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputPart',
    interfaces: [PreparedPart]
  };
  function PreparedPart$ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.provider = provider;
  }
  PreparedPart$ChannelPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelPart',
    interfaces: [PreparedPart]
  };
  PreparedPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreparedPart',
    interfaces: []
  };
  function Coroutine$copyTo($receiver_0, channel_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$buffer = void 0;
    this.local$bytesWritten = void 0;
    this.local$$receiver = $receiver_0;
    this.local$channel = channel_0;
  }
  Coroutine$copyTo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$copyTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyTo.prototype.constructor = Coroutine$copyTo;
  Coroutine$copyTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$$receiver, ByteReadPacket)) {
              this.state_0 = 1;
              this.result_0 = this.local$channel.writePacket_3uq2w4$(this.local$$receiver, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            return;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$$receiver.endOfInput) {
              this.state_0 = 10;
              continue;
            }

            var tmp$_0;
            this.state_0 = 4;
            this.result_0 = requestWriteBuffer(this.local$channel, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$buffer = (tmp$_0 = this.result_0) != null ? tmp$_0 : Buffer.Companion.Empty;
            this.local$bytesWritten = 0;
            this.exceptionState_0 = 5;
            var freeSpace = this.local$buffer.memory;
            var startOffset = Kotlin.Long.fromInt(this.local$buffer.writePosition);
            this.local$bytesWritten = readAvailable(this.local$$receiver, freeSpace, startOffset, Kotlin.Long.fromInt(this.local$buffer.limit).subtract(startOffset)).toInt();
            this.local$buffer.commitWritten_za3lpa$(this.local$bytesWritten);
            this.result_0 = this.local$bytesWritten;
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [9];
            this.state_0 = 6;
            continue;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = completeWriting(this.local$channel, this.local$buffer, this.local$bytesWritten, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
          case 9:
            this.state_0 = 3;
            continue;
          case 10:
            return;
          default:
            this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function copyTo_1($receiver_0, channel_0, continuation_0, suspended) {
    var instance = new Coroutine$copyTo($receiver_0, channel_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function submitForm$lambda($receiver) {
    return Unit;
  }
  var submitForm$lambda_0 = wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$encodeInQuery, closure$formParameters, closure$block) {
      return function ($receiver) {
        if (closure$encodeInQuery) {
          $receiver.method = HttpMethod.Companion.Get;
          $receiver.url.parameters.appendAll_hb0ubp$(closure$formParameters);
        } else {
          $receiver.method = HttpMethod.Companion.Post;
          var body = new FormDataContent(closure$formParameters);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isInstanceOf(OutgoingContent)(body)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(FormDataContent);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(FormDataContent), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  function prepareForm$lambda($receiver) {
    return Unit;
  }
  var prepareForm$lambda_0 = wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$encodeInQuery, closure$formParameters, closure$block) {
      return function ($receiver) {
        if (closure$encodeInQuery) {
          $receiver.method = HttpMethod.Companion.Get;
          $receiver.url.parameters.appendAll_hb0ubp$(closure$formParameters);
        } else {
          $receiver.method = HttpMethod.Companion.Post;
          var body = new FormDataContent(closure$formParameters);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isInstanceOf(OutgoingContent)(body)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(FormDataContent);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(FormDataContent), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  function submitFormWithBinaryData$lambda($receiver) {
    return Unit;
  }
  var submitFormWithBinaryData$lambda_0 = wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$formData, closure$block) {
      return function ($receiver) {
        $receiver.method = HttpMethod.Companion.Post;
        var body = new MultiPartFormDataContent(closure$formData);
        if (body == null) {
          $receiver.body = utils.EmptyContent;
          $receiver.bodyType = null;
        } else if (Kotlin.isInstanceOf(OutgoingContent)(body)) {
          $receiver.body = body;
          $receiver.bodyType = null;
        } else {
          $receiver.body = body;
          var tmp$ = reflect.JsType;
          var tmp$_0 = getKClass_0(MultiPartFormDataContent);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = createKType(getKClass(MultiPartFormDataContent), [], false);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  var submitFormWithBinaryData$lambda_1 = wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$formData, closure$block) {
      return function ($receiver) {
        $receiver.method = HttpMethod.Companion.Post;
        var body = new MultiPartFormDataContent(closure$formData);
        if (body == null) {
          $receiver.body = utils.EmptyContent;
          $receiver.bodyType = null;
        } else if (Kotlin.isInstanceOf(OutgoingContent)(body)) {
          $receiver.body = body;
          $receiver.bodyType = null;
        } else {
          $receiver.body = body;
          var tmp$ = reflect.JsType;
          var tmp$_0 = getKClass_0(MultiPartFormDataContent);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = createKType(getKClass(MultiPartFormDataContent), [], false);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  function submitFormWithBinaryData$lambda_2($receiver) {
    return Unit;
  }
  function prepareFormWithBinaryData$lambda($receiver) {
    return Unit;
  }
  var prepareFormWithBinaryData$lambda_0 = wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$formData, closure$block) {
      return function ($receiver) {
        $receiver.method = HttpMethod.Companion.Post;
        var body = new MultiPartFormDataContent(closure$formData);
        if (body == null) {
          $receiver.body = utils.EmptyContent;
          $receiver.bodyType = null;
        } else if (Kotlin.isInstanceOf(OutgoingContent)(body)) {
          $receiver.body = body;
          $receiver.bodyType = null;
        } else {
          $receiver.body = body;
          var tmp$ = reflect.JsType;
          var tmp$_0 = getKClass_0(MultiPartFormDataContent);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = createKType(getKClass(MultiPartFormDataContent), [], false);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  var prepareFormWithBinaryData$lambda_1 = wrapFunction(function () {
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = $module$ktor_ktor_http_js_legacy.io.ktor.http.content.OutgoingContent;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass_0 = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$formData, closure$block) {
      return function ($receiver) {
        $receiver.method = HttpMethod.Companion.Post;
        var body = new MultiPartFormDataContent(closure$formData);
        if (body == null) {
          $receiver.body = utils.EmptyContent;
          $receiver.bodyType = null;
        } else if (Kotlin.isInstanceOf(OutgoingContent)(body)) {
          $receiver.body = body;
          $receiver.bodyType = null;
        } else {
          $receiver.body = body;
          var tmp$ = reflect.JsType;
          var tmp$_0 = getKClass_0(MultiPartFormDataContent);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = createKType(getKClass(MultiPartFormDataContent), [], false);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
        }
        closure$block($receiver);
        return Unit;
      };
    };
  });
  function prepareFormWithBinaryData$lambda_2($receiver) {
    return Unit;
  }
  function prepareFormWithBinaryData$lambda_3(closure$url, closure$block) {
    return function ($receiver) {
      url_1($receiver, closure$url);
      closure$block($receiver);
      return Unit;
    };
  }
  function submitForm($receiver, formParameters, encodeInQuery, block, continuation) {
    if (formParameters === void 0)
      formParameters = Parameters.Companion.Empty;
    if (encodeInQuery === void 0)
      encodeInQuery = false;
    if (block === void 0)
      block = submitForm$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    if (encodeInQuery) {
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
    } else {
      $receiver_1.method = HttpMethod.Companion.Post;
      var body_0 = new FormDataContent(formParameters);
      if (body_0 == null) {
        $receiver_1.body = package$utils.EmptyContent;
        $receiver_1.bodyType = null;
      } else if (Kotlin.isType(body_0, OutgoingContent)) {
        $receiver_1.body = body_0;
        $receiver_1.bodyType = null;
      } else {
        $receiver_1.body = body_0;
        var tmp$_1 = reflect.JsType;
        var tmp$_0_0 = getKClass(FormDataContent);
        var tryGetType$result_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0 = createKType(getKClass(FormDataContent), [], false);
          } catch (cause_0) {
            if (Kotlin.isType(cause_0, Throwable)) {
              tryGetType$result_0 = null;
              break tryGetType$break;
            } else
              throw cause_0;
          }
        }
         while (false);
        $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
      }
    }
    block($receiver_1);
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitForm_9i20zh$', wrapFunction(function () {
    var Parameters = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    var getKClass = Kotlin.getKClass;
    var createKType = Kotlin.createKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    function submitForm$lambda($receiver) {
      return Unit;
    }
    var submitForm$lambda_0 = wrapFunction(function () {
      var utils = _.io.ktor.client.utils;
      var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass_0 = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$encodeInQuery, closure$formParameters, closure$block) {
        return function ($receiver) {
          if (closure$encodeInQuery) {
            $receiver.method = HttpMethod.Companion.Get;
            $receiver.url.parameters.appendAll_hb0ubp$(closure$formParameters);
          } else {
            $receiver.method = HttpMethod.Companion.Post;
            var body = new FormDataContent_init(closure$formParameters);
            if (body == null) {
              $receiver.body = utils.EmptyContent;
              $receiver.bodyType = null;
            } else if (Kotlin.isType(body, OutgoingContent)) {
              $receiver.body = body;
              $receiver.bodyType = null;
            } else {
              $receiver.body = body;
              var tmp$ = reflect.JsType;
              var tmp$_0 = getKClass_0(FormDataContent_init);
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(getKClass(FormDataContent_init), [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }
          }
          closure$block($receiver);
          return Unit;
        };
      };
    });
    return function ($receiver, formParameters, encodeInQuery, block, continuation) {
      if (formParameters === void 0)
        formParameters = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = submitForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
      } else {
        $receiver_1.method = HttpMethod.Companion.Post;
        var body_0 = new FormDataContent_init(formParameters);
        if (body_0 == null) {
          $receiver_1.body = utils.EmptyContent;
          $receiver_1.bodyType = null;
        } else if (Kotlin.isType(body_0, OutgoingContent)) {
          $receiver_1.body = body_0;
          $receiver_1.bodyType = null;
        } else {
          $receiver_1.body = body_0;
          var tmp$_1 = reflect.JsType;
          var tmp$_0_0 = getKClass(FormDataContent_init);
          var tryGetType$result_0;
          tryGetType$break: do {
            try {
              tryGetType$result_0 = createKType(getKClass(FormDataContent_init), [], false);
            } catch (cause_0) {
              if (Kotlin.isType(cause_0, Throwable)) {
                tryGetType$result_0 = null;
                break tryGetType$break;
              } else
                throw cause_0;
            }
          }
           while (false);
          $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
        }
      }
      block($receiver_1);
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function submitForm$lambda_1($receiver) {
    return Unit;
  }
  function submitForm_0($receiver, url, formParameters, encodeInQuery, block, continuation) {
    if (formParameters === void 0)
      formParameters = Parameters.Companion.Empty;
    if (encodeInQuery === void 0)
      encodeInQuery = false;
    if (block === void 0)
      block = submitForm$lambda_1;
    var $receiver_0 = new HttpRequestBuilder();
    if (encodeInQuery) {
      $receiver_0.method = HttpMethod.Companion.Get;
      $receiver_0.url.parameters.appendAll_hb0ubp$(formParameters);
    } else {
      $receiver_0.method = HttpMethod.Companion.Post;
      var body = new FormDataContent(formParameters);
      if (body == null) {
        $receiver_0.body = package$utils.EmptyContent;
        $receiver_0.bodyType = null;
      } else if (Kotlin.isType(body, OutgoingContent)) {
        $receiver_0.body = body;
        $receiver_0.bodyType = null;
      } else {
        $receiver_0.body = body;
        var tmp$ = reflect.JsType;
        var tmp$_0 = getKClass(FormDataContent);
        var tryGetType$result;
        tryGetType$break: do {
          try {
            tryGetType$result = createKType(getKClass(FormDataContent), [], false);
          } catch (cause) {
            if (Kotlin.isType(cause, Throwable)) {
              tryGetType$result = null;
              break tryGetType$break;
            } else
              throw cause;
          }
        }
         while (false);
        $receiver_0.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
      }
    }
    url_1($receiver_0, url);
    block($receiver_0);
    return (new HttpStatement($receiver_0, $receiver)).execute(continuation);
  }
  function submitFormWithBinaryData($receiver, formData, block, continuation) {
    if (block === void 0)
      block = submitFormWithBinaryData$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    $receiver_1.method = HttpMethod.Companion.Post;
    var body_0 = new MultiPartFormDataContent(formData);
    if (body_0 == null) {
      $receiver_1.body = package$utils.EmptyContent;
      $receiver_1.bodyType = null;
    } else if (Kotlin.isType(body_0, OutgoingContent)) {
      $receiver_1.body = body_0;
      $receiver_1.bodyType = null;
    } else {
      $receiver_1.body = body_0;
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(MultiPartFormDataContent);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent), [], false);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
    }
    block($receiver_1);
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitFormWithBinaryData_ln1qgv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var getKClass = Kotlin.getKClass;
    var createKType = Kotlin.createKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    function submitFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    var submitFormWithBinaryData$lambda_0 = wrapFunction(function () {
      var utils = _.io.ktor.client.utils;
      var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass_0 = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$formData, closure$block) {
        return function ($receiver) {
          $receiver.method = HttpMethod.Companion.Post;
          var body = new MultiPartFormDataContent_init(closure$formData);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isType(body, OutgoingContent)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(MultiPartFormDataContent_init);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(MultiPartFormDataContent_init), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
          closure$block($receiver);
          return Unit;
        };
      };
    });
    return function ($receiver, formData, block, continuation) {
      if (block === void 0)
        block = submitFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      var body_0 = new MultiPartFormDataContent_init(formData);
      if (body_0 == null) {
        $receiver_1.body = utils.EmptyContent;
        $receiver_1.bodyType = null;
      } else if (Kotlin.isType(body_0, OutgoingContent)) {
        $receiver_1.body = body_0;
        $receiver_1.bodyType = null;
      } else {
        $receiver_1.body = body_0;
        var tmp$_1 = reflect.JsType;
        var tmp$_0_0 = getKClass(MultiPartFormDataContent_init);
        var tryGetType$result_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent_init), [], false);
          } catch (cause_0) {
            if (Kotlin.isType(cause_0, Throwable)) {
              tryGetType$result_0 = null;
              break tryGetType$break;
            } else
              throw cause_0;
          }
        }
         while (false);
        $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
      }
      block($receiver_1);
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function submitFormWithBinaryData_0($receiver, url, formData, block, continuation) {
    if (block === void 0)
      block = submitFormWithBinaryData$lambda_2;
    var $receiver_1 = new HttpRequestBuilder();
    $receiver_1.method = HttpMethod.Companion.Post;
    var body_0 = new MultiPartFormDataContent(formData);
    if (body_0 == null) {
      $receiver_1.body = package$utils.EmptyContent;
      $receiver_1.bodyType = null;
    } else if (Kotlin.isType(body_0, OutgoingContent)) {
      $receiver_1.body = body_0;
      $receiver_1.bodyType = null;
    } else {
      $receiver_1.body = body_0;
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(MultiPartFormDataContent);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent), [], false);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
    }
    url_1($receiver_1, url);
    block($receiver_1);
    return (new HttpStatement($receiver_1, $receiver)).execute(continuation);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.submitFormWithBinaryData_rrwb9t$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var getKClass = Kotlin.getKClass;
    var createKType = Kotlin.createKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    var submitFormWithBinaryData$lambda = wrapFunction(function () {
      var utils = _.io.ktor.client.utils;
      var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass_0 = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$formData, closure$block) {
        return function ($receiver) {
          $receiver.method = HttpMethod.Companion.Post;
          var body = new MultiPartFormDataContent_init(closure$formData);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isType(body, OutgoingContent)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(MultiPartFormDataContent_init);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(MultiPartFormDataContent_init), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
          closure$block($receiver);
          return Unit;
        };
      };
    });
    function submitFormWithBinaryData$lambda_0($receiver) {
      return Unit;
    }
    return function ($receiver, url_0, formData, block, continuation) {
      if (block === void 0)
        block = submitFormWithBinaryData$lambda_0;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      var body_0 = new MultiPartFormDataContent_init(formData);
      if (body_0 == null) {
        $receiver_1.body = utils.EmptyContent;
        $receiver_1.bodyType = null;
      } else if (Kotlin.isType(body_0, OutgoingContent)) {
        $receiver_1.body = body_0;
        $receiver_1.bodyType = null;
      } else {
        $receiver_1.body = body_0;
        var tmp$_1 = reflect.JsType;
        var tmp$_0_0 = getKClass(MultiPartFormDataContent_init);
        var tryGetType$result_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent_init), [], false);
          } catch (cause_0) {
            if (Kotlin.isType(cause_0, Throwable)) {
              tryGetType$result_0 = null;
              break tryGetType$break;
            } else
              throw cause_0;
          }
        }
         while (false);
        $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
      }
      url($receiver_1, url_0);
      block($receiver_1);
      Kotlin.suspendCall((new HttpStatement_init($receiver_1, $receiver)).execute(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareForm($receiver, formParameters, encodeInQuery, block, continuation) {
    if (formParameters === void 0)
      formParameters = Parameters.Companion.Empty;
    if (encodeInQuery === void 0)
      encodeInQuery = false;
    if (block === void 0)
      block = prepareForm$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    if (encodeInQuery) {
      $receiver_1.method = HttpMethod.Companion.Get;
      $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
    } else {
      $receiver_1.method = HttpMethod.Companion.Post;
      var body_0 = new FormDataContent(formParameters);
      if (body_0 == null) {
        $receiver_1.body = package$utils.EmptyContent;
        $receiver_1.bodyType = null;
      } else if (Kotlin.isType(body_0, OutgoingContent)) {
        $receiver_1.body = body_0;
        $receiver_1.bodyType = null;
      } else {
        $receiver_1.body = body_0;
        var tmp$_1 = reflect.JsType;
        var tmp$_0_0 = getKClass(FormDataContent);
        var tryGetType$result_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0 = createKType(getKClass(FormDataContent), [], false);
          } catch (cause_0) {
            if (Kotlin.isType(cause_0, Throwable)) {
              tryGetType$result_0 = null;
              break tryGetType$break;
            } else
              throw cause_0;
          }
        }
         while (false);
        $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
      }
    }
    block($receiver_1);
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.prepareForm_9i20zh$', wrapFunction(function () {
    var Parameters = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.Parameters;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var FormDataContent_init = _.io.ktor.client.request.forms.FormDataContent;
    var getKClass = Kotlin.getKClass;
    var createKType = Kotlin.createKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    function prepareForm$lambda($receiver) {
      return Unit;
    }
    var prepareForm$lambda_0 = wrapFunction(function () {
      var utils = _.io.ktor.client.utils;
      var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass_0 = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$encodeInQuery, closure$formParameters, closure$block) {
        return function ($receiver) {
          if (closure$encodeInQuery) {
            $receiver.method = HttpMethod.Companion.Get;
            $receiver.url.parameters.appendAll_hb0ubp$(closure$formParameters);
          } else {
            $receiver.method = HttpMethod.Companion.Post;
            var body = new FormDataContent_init(closure$formParameters);
            if (body == null) {
              $receiver.body = utils.EmptyContent;
              $receiver.bodyType = null;
            } else if (Kotlin.isType(body, OutgoingContent)) {
              $receiver.body = body;
              $receiver.bodyType = null;
            } else {
              $receiver.body = body;
              var tmp$ = reflect.JsType;
              var tmp$_0 = getKClass_0(FormDataContent_init);
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(getKClass(FormDataContent_init), [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }
          }
          closure$block($receiver);
          return Unit;
        };
      };
    });
    return function ($receiver, formParameters, encodeInQuery, block, continuation) {
      if (formParameters === void 0)
        formParameters = Parameters.Companion.Empty;
      if (encodeInQuery === void 0)
        encodeInQuery = false;
      if (block === void 0)
        block = prepareForm$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      if (encodeInQuery) {
        $receiver_1.method = HttpMethod.Companion.Get;
        $receiver_1.url.parameters.appendAll_hb0ubp$(formParameters);
      } else {
        $receiver_1.method = HttpMethod.Companion.Post;
        var body_0 = new FormDataContent_init(formParameters);
        if (body_0 == null) {
          $receiver_1.body = utils.EmptyContent;
          $receiver_1.bodyType = null;
        } else if (Kotlin.isType(body_0, OutgoingContent)) {
          $receiver_1.body = body_0;
          $receiver_1.bodyType = null;
        } else {
          $receiver_1.body = body_0;
          var tmp$_1 = reflect.JsType;
          var tmp$_0_0 = getKClass(FormDataContent_init);
          var tryGetType$result_0;
          tryGetType$break: do {
            try {
              tryGetType$result_0 = createKType(getKClass(FormDataContent_init), [], false);
            } catch (cause_0) {
              if (Kotlin.isType(cause_0, Throwable)) {
                tryGetType$result_0 = null;
                break tryGetType$break;
              } else
                throw cause_0;
            }
          }
           while (false);
          $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
        }
      }
      block($receiver_1);
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareForm$lambda_1($receiver) {
    return Unit;
  }
  function prepareForm_0($receiver, url, formParameters, encodeInQuery, block, continuation) {
    if (formParameters === void 0)
      formParameters = Parameters.Companion.Empty;
    if (encodeInQuery === void 0)
      encodeInQuery = false;
    if (block === void 0)
      block = prepareForm$lambda_1;
    var $receiver_0 = new HttpRequestBuilder();
    if (encodeInQuery) {
      $receiver_0.method = HttpMethod.Companion.Get;
      $receiver_0.url.parameters.appendAll_hb0ubp$(formParameters);
    } else {
      $receiver_0.method = HttpMethod.Companion.Post;
      var body = new FormDataContent(formParameters);
      if (body == null) {
        $receiver_0.body = package$utils.EmptyContent;
        $receiver_0.bodyType = null;
      } else if (Kotlin.isType(body, OutgoingContent)) {
        $receiver_0.body = body;
        $receiver_0.bodyType = null;
      } else {
        $receiver_0.body = body;
        var tmp$ = reflect.JsType;
        var tmp$_0 = getKClass(FormDataContent);
        var tryGetType$result;
        tryGetType$break: do {
          try {
            tryGetType$result = createKType(getKClass(FormDataContent), [], false);
          } catch (cause) {
            if (Kotlin.isType(cause, Throwable)) {
              tryGetType$result = null;
              break tryGetType$break;
            } else
              throw cause;
          }
        }
         while (false);
        $receiver_0.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
      }
    }
    url_1($receiver_0, url);
    block($receiver_0);
    return new HttpStatement($receiver_0, $receiver);
  }
  function prepareFormWithBinaryData($receiver, formData, block, continuation) {
    if (block === void 0)
      block = prepareFormWithBinaryData$lambda;
    var $receiver_1 = new HttpRequestBuilder();
    $receiver_1.method = HttpMethod.Companion.Post;
    var body_0 = new MultiPartFormDataContent(formData);
    if (body_0 == null) {
      $receiver_1.body = package$utils.EmptyContent;
      $receiver_1.bodyType = null;
    } else if (Kotlin.isType(body_0, OutgoingContent)) {
      $receiver_1.body = body_0;
      $receiver_1.bodyType = null;
    } else {
      $receiver_1.body = body_0;
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(MultiPartFormDataContent);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent), [], false);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
    }
    block($receiver_1);
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.prepareFormWithBinaryData_ln1qgv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var getKClass = Kotlin.getKClass;
    var createKType = Kotlin.createKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    function prepareFormWithBinaryData$lambda($receiver) {
      return Unit;
    }
    var prepareFormWithBinaryData$lambda_0 = wrapFunction(function () {
      var utils = _.io.ktor.client.utils;
      var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass_0 = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$formData, closure$block) {
        return function ($receiver) {
          $receiver.method = HttpMethod.Companion.Post;
          var body = new MultiPartFormDataContent_init(closure$formData);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isType(body, OutgoingContent)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(MultiPartFormDataContent_init);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(MultiPartFormDataContent_init), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
          closure$block($receiver);
          return Unit;
        };
      };
    });
    return function ($receiver, formData, block, continuation) {
      if (block === void 0)
        block = prepareFormWithBinaryData$lambda;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      var body_0 = new MultiPartFormDataContent_init(formData);
      if (body_0 == null) {
        $receiver_1.body = utils.EmptyContent;
        $receiver_1.bodyType = null;
      } else if (Kotlin.isType(body_0, OutgoingContent)) {
        $receiver_1.body = body_0;
        $receiver_1.bodyType = null;
      } else {
        $receiver_1.body = body_0;
        var tmp$_1 = reflect.JsType;
        var tmp$_0_0 = getKClass(MultiPartFormDataContent_init);
        var tryGetType$result_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent_init), [], false);
          } catch (cause_0) {
            if (Kotlin.isType(cause_0, Throwable)) {
              tryGetType$result_0 = null;
              break tryGetType$break;
            } else
              throw cause_0;
          }
        }
         while (false);
        $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
      }
      block($receiver_1);
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function prepareFormWithBinaryData_0($receiver, url, formData, block, continuation) {
    if (block === void 0)
      block = prepareFormWithBinaryData$lambda_2;
    var $receiver_1 = new HttpRequestBuilder();
    $receiver_1.method = HttpMethod.Companion.Post;
    var body_0 = new MultiPartFormDataContent(formData);
    if (body_0 == null) {
      $receiver_1.body = package$utils.EmptyContent;
      $receiver_1.bodyType = null;
    } else if (Kotlin.isType(body_0, OutgoingContent)) {
      $receiver_1.body = body_0;
      $receiver_1.bodyType = null;
    } else {
      $receiver_1.body = body_0;
      var tmp$_1 = reflect.JsType;
      var tmp$_0_0 = getKClass(MultiPartFormDataContent);
      var tryGetType$result_0;
      tryGetType$break: do {
        try {
          tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent), [], false);
        } catch (cause_0) {
          if (Kotlin.isType(cause_0, Throwable)) {
            tryGetType$result_0 = null;
            break tryGetType$break;
          } else
            throw cause_0;
        }
      }
       while (false);
      $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
    }
    prepareFormWithBinaryData$lambda_3(url, block)($receiver_1);
    return new HttpStatement($receiver_1, $receiver);
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.prepareFormWithBinaryData_rrwb9t$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var url = _.io.ktor.client.request.url_g8iu3v$;
    var HttpMethod = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
    var MultiPartFormDataContent_init = _.io.ktor.client.request.forms.MultiPartFormDataContent;
    var getKClass = Kotlin.getKClass;
    var createKType = Kotlin.createKType;
    var HttpRequestBuilder_init = _.io.ktor.client.request.HttpRequestBuilder;
    var HttpStatement_init = _.io.ktor.client.statement.HttpStatement;
    var utils = _.io.ktor.client.utils;
    var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    var prepareFormWithBinaryData$lambda = wrapFunction(function () {
      var utils = _.io.ktor.client.utils;
      var OutgoingContent = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass_0 = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$formData, closure$block) {
        return function ($receiver) {
          $receiver.method = HttpMethod.Companion.Post;
          var body = new MultiPartFormDataContent_init(closure$formData);
          if (body == null) {
            $receiver.body = utils.EmptyContent;
            $receiver.bodyType = null;
          } else if (Kotlin.isType(body, OutgoingContent)) {
            $receiver.body = body;
            $receiver.bodyType = null;
          } else {
            $receiver.body = body;
            var tmp$ = reflect.JsType;
            var tmp$_0 = getKClass_0(MultiPartFormDataContent_init);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(MultiPartFormDataContent_init), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            $receiver.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
          }
          closure$block($receiver);
          return Unit;
        };
      };
    });
    function prepareFormWithBinaryData$lambda_0($receiver) {
      return Unit;
    }
    function prepareFormWithBinaryData$lambda_1(closure$url, closure$block) {
      return function ($receiver) {
        url($receiver, closure$url);
        closure$block($receiver);
        return Unit;
      };
    }
    return function ($receiver, url, formData, block, continuation) {
      if (block === void 0)
        block = prepareFormWithBinaryData$lambda_0;
      var $receiver_1 = new HttpRequestBuilder_init();
      $receiver_1.method = HttpMethod.Companion.Post;
      var body_0 = new MultiPartFormDataContent_init(formData);
      if (body_0 == null) {
        $receiver_1.body = utils.EmptyContent;
        $receiver_1.bodyType = null;
      } else if (Kotlin.isType(body_0, OutgoingContent)) {
        $receiver_1.body = body_0;
        $receiver_1.bodyType = null;
      } else {
        $receiver_1.body = body_0;
        var tmp$_1 = reflect.JsType;
        var tmp$_0_0 = getKClass(MultiPartFormDataContent_init);
        var tryGetType$result_0;
        tryGetType$break: do {
          try {
            tryGetType$result_0 = createKType(getKClass(MultiPartFormDataContent_init), [], false);
          } catch (cause_0) {
            if (Kotlin.isType(cause_0, Throwable)) {
              tryGetType$result_0 = null;
              break tryGetType$break;
            } else
              throw cause_0;
          }
        }
         while (false);
        $receiver_1.bodyType = typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result_0);
      }
      prepareFormWithBinaryData$lambda_1(url, block)($receiver_1);
      Kotlin.setCoroutineResult(new HttpStatement_init($receiver_1, $receiver), Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function ByteReadPacket$lambda(it) {
    return Unit;
  }
  var append$lambda = wrapFunction(function () {
    var BytePacketBuilder_init = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder;
    var Throwable = Error;
    return function (closure$bodyBuilder) {
      return function () {
        var buildPacket$result;
        var builder = new BytePacketBuilder_init();
        try {
          closure$bodyBuilder(builder);
          buildPacket$result = builder.build();
        } catch (t) {
          if (Kotlin.isType(t, Throwable)) {
            builder.release();
            throw t;
          } else
            throw t;
        }
        return buildPacket$result;
      };
    };
  });
  function FormPart(key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    this.key = key;
    this.value = value;
    this.headers = headers;
  }
  FormPart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormPart',
    interfaces: []
  };
  FormPart.prototype.component1 = function () {
    return this.key;
  };
  FormPart.prototype.component2 = function () {
    return this.value;
  };
  FormPart.prototype.component3 = function () {
    return this.headers;
  };
  FormPart.prototype.copy_gtfma3$ = function (key, value, headers) {
    return new FormPart(key === void 0 ? this.key : key, value === void 0 ? this.value : value, headers === void 0 ? this.headers : headers);
  };
  FormPart.prototype.toString = function () {
    return 'FormPart(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + (', headers=' + Kotlin.toString(this.headers)) + ')';
  };
  FormPart.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.headers) | 0;
    return result;
  };
  FormPart.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.headers, other.headers)))));
  };
  function formData$lambda$lambda() {
    return Unit;
  }
  function formData$lambda$lambda_0() {
    return Unit;
  }
  function formData$lambda$lambda_1(closure$value) {
    return function () {
      var array = closure$value;
      return ByteReadPacket_0(array, 0, array.length, ByteReadPacket$lambda);
    };
  }
  function formData$lambda$lambda_2() {
    return Unit;
  }
  function formData$lambda$lambda_3(closure$value) {
    return function () {
      return closure$value.copy();
    };
  }
  function formData$lambda$lambda_4(closure$value) {
    return function () {
      closure$value.close();
      return Unit;
    };
  }
  function formData$lambda$lambda_5() {
    return Unit;
  }
  function formData(values) {
    var result = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
      var element = values[tmp$];
      var key = element.component1()
      , value = element.component2()
      , headers = element.component3();
      var tmp$_0;
      var $receiver = new HeadersBuilder();
      $receiver.append_puj7f4$(http.HttpHeaders.ContentDisposition, 'form-data; name=' + escapeIfNeeded(key));
      $receiver.appendAll_hb0ubp$(headers);
      var partHeaders = $receiver;
      if (typeof value === 'string')
        tmp$_0 = new PartData$FormItem(value, formData$lambda$lambda, partHeaders.build());
      else if (Kotlin.isNumber(value))
        tmp$_0 = new PartData$FormItem(value.toString(), formData$lambda$lambda_0, partHeaders.build());
      else if (Kotlin.isByteArray(value)) {
        partHeaders.append_puj7f4$(http.HttpHeaders.ContentLength, value.length.toString());
        tmp$_0 = new PartData$BinaryItem(formData$lambda$lambda_1(value), formData$lambda$lambda_2, partHeaders.build());
      } else if (Kotlin.isType(value, ByteReadPacket)) {
        partHeaders.append_puj7f4$(http.HttpHeaders.ContentLength, value.remaining.toString());
        tmp$_0 = new PartData$BinaryItem(formData$lambda$lambda_3(value), formData$lambda$lambda_4(value), partHeaders.build());
      } else if (Kotlin.isType(value, InputProvider)) {
        var size = value.size;
        if (size != null) {
          partHeaders.append_puj7f4$(http.HttpHeaders.ContentLength, size.toString());
        }
        tmp$_0 = new PartData$BinaryItem(value.block, formData$lambda$lambda_5, partHeaders.build());
      } else if (Kotlin.isType(value, ChannelProvider)) {
        var size_0 = value.size;
        if (size_0 != null) {
          partHeaders.append_puj7f4$(http.HttpHeaders.ContentLength, size_0.toString());
        }
        tmp$_0 = new PartData$BinaryChannelItem(value.block, partHeaders.build());
      } else if (Kotlin.isType(value, Input)) {
        throw IllegalStateException_init(("Can't use [Input] as part of form: " + value.toString() + '. Consider using [InputProvider] instead.').toString());
      } else {
        throw IllegalStateException_init(('Unknown form content type: ' + value.toString()).toString());
      }
      var part = tmp$_0;
      result.add_11rb$(part);
    }
    return result;
  }
  function formData_0(block) {
    var $receiver = new FormBuilder();
    block($receiver);
    return formData(copyToArray($receiver.build_8be2vx$()).slice());
  }
  function FormBuilder() {
    this.parts_0 = ArrayList_init();
  }
  FormBuilder.prototype.append_53xmxh$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_xz3v4a$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_7q0o72$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_73s1u4$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_5qopdo$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.appendInput_yeupz6$ = function (key, headers, size, block) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    if (size === void 0)
      size = null;
    var $receiver = this.parts_0;
    var element = new FormPart(key, new InputProvider(size, block), headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_uzngfo$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_bdvw45$ = function (key, value, headers) {
    if (headers === void 0)
      headers = Headers.Companion.Empty;
    var $receiver = this.parts_0;
    var element = new FormPart(key, value, headers);
    $receiver.add_11rb$(element);
  };
  FormBuilder.prototype.append_ith9wd$ = function (part) {
    this.parts_0.add_11rb$(part);
  };
  FormBuilder.prototype.build_8be2vx$ = function () {
    return this.parts_0;
  };
  FormBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormBuilder',
    interfaces: []
  };
  var append = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.request.forms.append_4vwixh$', wrapFunction(function () {
    var Headers = _.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.Headers;
    var wrapFunction = Kotlin.wrapFunction;
    var InputProvider_init = _.io.ktor.client.request.forms.InputProvider;
    var FormPart_init = _.io.ktor.client.request.forms.FormPart;
    var append$lambda = wrapFunction(function () {
      var BytePacketBuilder_init = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.core.BytePacketBuilder;
      var Throwable = Error;
      return function (closure$bodyBuilder) {
        return function () {
          var buildPacket$result;
          var builder = new BytePacketBuilder_init();
          try {
            closure$bodyBuilder(builder);
            buildPacket$result = builder.build();
          } catch (t) {
            if (Kotlin.isType(t, Throwable)) {
              builder.release();
              throw t;
            } else
              throw t;
          }
          return buildPacket$result;
        };
      };
    });
    return function ($receiver, key, headers, size, bodyBuilder) {
      if (headers === void 0)
        headers = Headers.Companion.Empty;
      if (size === void 0)
        size = null;
      $receiver.append_ith9wd$(new FormPart_init(key, new InputProvider_init(size, append$lambda(bodyBuilder)), headers));
    };
  }));
  function InputProvider(size, block) {
    if (size === void 0)
      size = null;
    this.size = size;
    this.block = block;
  }
  InputProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputProvider',
    interfaces: []
  };
  function ChannelProvider(size, block) {
    if (size === void 0)
      size = null;
    this.size = size;
    this.block = block;
  }
  ChannelProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelProvider',
    interfaces: []
  };
  function append_0($receiver, key, filename, contentType, size, bodyBuilder) {
    if (contentType === void 0)
      contentType = null;
    if (size === void 0)
      size = null;
    var headersBuilder = new HeadersBuilder();
    headersBuilder.set_puj7f4$(http.HttpHeaders.ContentDisposition, 'filename=' + escapeIfNeeded(filename));
    if (contentType != null) {
      headersBuilder.set_puj7f4$(http.HttpHeaders.ContentType, contentType.toString());
    }
    var headers = headersBuilder.build();
    $receiver.append_ith9wd$(new FormPart(key, new InputProvider(size, append$lambda(bodyBuilder)), headers));
  }
  function get_host($receiver) {
    return $receiver.url.host;
  }
  function set_host($receiver, value) {
    $receiver.url.host = value;
  }
  function get_port($receiver) {
    return $receiver.url.port;
  }
  function set_port($receiver, value) {
    $receiver.url.port = value;
  }
  function header($receiver, key, value) {
    var tmp$;
    var tmp$_0;
    if (value != null) {
      $receiver.headers.append_puj7f4$(key, value.toString());
      tmp$_0 = Unit;
    } else
      tmp$_0 = null;
    (tmp$ = tmp$_0) != null ? tmp$ : Unit;
  }
  function cookie($receiver, name, value, maxAge, expires, domain, path, secure, httpOnly, extensions) {
    if (maxAge === void 0)
      maxAge = 0;
    if (expires === void 0)
      expires = null;
    if (domain === void 0)
      domain = null;
    if (path === void 0)
      path = null;
    if (secure === void 0)
      secure = false;
    if (httpOnly === void 0)
      httpOnly = false;
    if (extensions === void 0)
      extensions = emptyMap();
    var renderedCookie = renderCookieHeader(new Cookie(name, value, void 0, maxAge, expires, domain, path, secure, httpOnly, extensions));
    if (!$receiver.headers.contains_61zpoe$(http.HttpHeaders.Cookie)) {
      $receiver.headers.append_puj7f4$(http.HttpHeaders.Cookie, renderedCookie);
      return;
    }
    $receiver.headers.set_puj7f4$(http.HttpHeaders.Cookie, $receiver.headers.get_61zpoe$(http.HttpHeaders.Cookie) + '; ' + renderedCookie);
  }
  function parameter($receiver, key, value) {
    var tmp$;
    var tmp$_0;
    if (value != null) {
      $receiver.url.parameters.append_puj7f4$(key, value.toString());
      tmp$_0 = Unit;
    } else
      tmp$_0 = null;
    (tmp$ = tmp$_0) != null ? tmp$ : Unit;
  }
  function accept($receiver, contentType) {
    $receiver.headers.append_puj7f4$(http.HttpHeaders.Accept, contentType.toString());
  }
  function basicAuth($receiver, username, password) {
    header($receiver, http.HttpHeaders.Authorization, 'Basic ' + encodeBase64_0(username + ':' + password));
  }
  function bearerAuth($receiver, token) {
    header($receiver, http.HttpHeaders.Authorization, 'Bearer ' + token);
  }
  function receive_2(T_0, isT, $receiver, continuation) {
    throw IllegalStateException_init('Use `body` method instead'.toString());
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.statement.receive_n40086$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, $receiver, continuation) {
      throw IllegalStateException_init('Use `body` method instead'.toString());
    };
  }));
  function receive_3(T_0, isT, $receiver, block, continuation) {
    throw IllegalStateException_init('Use `body` method instead'.toString());
  }
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.statement.receive_wkua8a$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, $receiver, block, continuation) {
      throw IllegalStateException_init('Use `body` method instead'.toString());
    };
  }));
  function readText_0($receiver, fallbackCharset, continuation) {
    if (fallbackCharset === void 0)
      fallbackCharset = null;
    throw IllegalStateException_init('Use `bodyAsText` method instead'.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.call_9p3cfk$_0 = call;
    this.coroutineContext_5l7f2v$_0 = responseData.callContext;
    this.status_gsg6kc$_0 = responseData.statusCode;
    this.version_vctfwy$_0 = responseData.version;
    this.requestTime_34y64q$_0 = responseData.requestTime;
    this.responseTime_u9wao0$_0 = responseData.responseTime;
    var tmp$, tmp$_0;
    this.content_7wqjir$_0 = (tmp$_0 = Kotlin.isType(tmp$ = responseData.body, ByteReadChannel) ? tmp$ : null) != null ? tmp$_0 : ByteReadChannel.Companion.Empty;
    this.headers_gyyq4g$_0 = responseData.headers;
  }
  Object.defineProperty(DefaultHttpResponse.prototype, 'call', {
    get: function () {
      return this.call_9p3cfk$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_5l7f2v$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.status_gsg6kc$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'version', {
    configurable: true,
    get: function () {
      return this.version_vctfwy$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'requestTime', {
    configurable: true,
    get: function () {
      return this.requestTime_34y64q$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'responseTime', {
    configurable: true,
    get: function () {
      return this.responseTime_u9wao0$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_7wqjir$_0;
    }
  });
  Object.defineProperty(DefaultHttpResponse.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_gyyq4g$_0;
    }
  });
  DefaultHttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultHttpResponse',
    interfaces: [HttpResponse]
  };
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).url + ', ' + this.status + ']';
  };
  HttpResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponse',
    interfaces: [CoroutineScope, HttpMessage]
  };
  function get_request($receiver) {
    return $receiver.call.request;
  }
  function complete($receiver) {
    var tmp$;
    var job = Kotlin.isType(tmp$ = ensureNotNull($receiver.coroutineContext.get_j3r2sn$(Job.Key)), CompletableJob) ? tmp$ : throwCCE();
    job.complete();
  }
  function Coroutine$bodyAsText($receiver_0, fallbackCharset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$decoder = void 0;
    this.local$$receiver = $receiver_0;
    this.local$fallbackCharset = fallbackCharset_0;
  }
  Coroutine$bodyAsText.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$bodyAsText.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$bodyAsText.prototype.constructor = Coroutine$bodyAsText;
  Coroutine$bodyAsText.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$fallbackCharset === void 0)
              this.local$fallbackCharset = charsets.Charsets.UTF_8;
            var tmp$;
            var originCharset = (tmp$ = charset_0(this.local$$receiver)) != null ? tmp$ : this.local$fallbackCharset;
            this.local$decoder = originCharset.newDecoder();
            var tmp$_0;
            var tmp$_1 = this.local$$receiver.call;
            var tmp$_2 = reflect.JsType;
            var tmp$_0_0 = getKClass(Input);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(Input), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_1.body_qi9ur9$(typeInfoImpl(tmp$_2, tmp$_0_0, tryGetType$result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, Input) ? tmp$_0 : throwCCE();
            var input = this.result_0;
            return decode(this.local$decoder, input);
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
  function bodyAsText($receiver_0, fallbackCharset_0, continuation_0, suspended) {
    var instance = new Coroutine$bodyAsText($receiver_0, fallbackCharset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$bodyAsChannel($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$bodyAsChannel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$bodyAsChannel.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$bodyAsChannel.prototype.constructor = Coroutine$bodyAsChannel;
  Coroutine$bodyAsChannel.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0 = this.local$$receiver.call;
            var tmp$_1 = reflect.JsType;
            var tmp$_0_0 = getKClass(ByteReadChannel);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = createKType(getKClass(ByteReadChannel), [], false);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_0.body_qi9ur9$(typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Kotlin.isType(tmp$ = this.result_0, ByteReadChannel) ? tmp$ : throwCCE();
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
  function bodyAsChannel($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$bodyAsChannel($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function HttpResponsePipeline(developmentMode) {
    HttpResponsePipeline$Phases_getInstance();
    if (developmentMode === void 0)
      developmentMode = false;
    Pipeline.call(this, [HttpResponsePipeline$Phases_getInstance().Receive, HttpResponsePipeline$Phases_getInstance().Parse, HttpResponsePipeline$Phases_getInstance().Transform, HttpResponsePipeline$Phases_getInstance().State, HttpResponsePipeline$Phases_getInstance().After]);
    this.developmentMode_368lah$_0 = developmentMode;
  }
  Object.defineProperty(HttpResponsePipeline.prototype, 'developmentMode', {
    get: function () {
      return this.developmentMode_368lah$_0;
    }
  });
  function HttpResponsePipeline$Phases() {
    HttpResponsePipeline$Phases_instance = this;
    this.Receive = new PipelinePhase('Receive');
    this.Parse = new PipelinePhase('Parse');
    this.Transform = new PipelinePhase('Transform');
    this.State = new PipelinePhase('State');
    this.After = new PipelinePhase('After');
  }
  HttpResponsePipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpResponsePipeline$Phases_instance = null;
  function HttpResponsePipeline$Phases_getInstance() {
    if (HttpResponsePipeline$Phases_instance === null) {
      new HttpResponsePipeline$Phases();
    }
    return HttpResponsePipeline$Phases_instance;
  }
  HttpResponsePipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponsePipeline',
    interfaces: [Pipeline]
  };
  function HttpReceivePipeline(developmentMode) {
    HttpReceivePipeline$Phases_getInstance();
    if (developmentMode === void 0)
      developmentMode = false;
    Pipeline.call(this, [HttpReceivePipeline$Phases_getInstance().Before, HttpReceivePipeline$Phases_getInstance().State, HttpReceivePipeline$Phases_getInstance().After]);
    this.developmentMode_wr860l$_0 = developmentMode;
  }
  Object.defineProperty(HttpReceivePipeline.prototype, 'developmentMode', {
    get: function () {
      return this.developmentMode_wr860l$_0;
    }
  });
  function HttpReceivePipeline$Phases() {
    HttpReceivePipeline$Phases_instance = this;
    this.Before = new PipelinePhase('Before');
    this.State = new PipelinePhase('State');
    this.After = new PipelinePhase('After');
  }
  HttpReceivePipeline$Phases.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Phases',
    interfaces: []
  };
  var HttpReceivePipeline$Phases_instance = null;
  function HttpReceivePipeline$Phases_getInstance() {
    if (HttpReceivePipeline$Phases_instance === null) {
      new HttpReceivePipeline$Phases();
    }
    return HttpReceivePipeline$Phases_instance;
  }
  HttpReceivePipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpReceivePipeline',
    interfaces: [Pipeline]
  };
  function HttpResponseContainer(expectedType, response) {
    this.expectedType = expectedType;
    this.response = response;
  }
  HttpResponseContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponseContainer',
    interfaces: []
  };
  HttpResponseContainer.prototype.component1 = function () {
    return this.expectedType;
  };
  HttpResponseContainer.prototype.component2 = function () {
    return this.response;
  };
  HttpResponseContainer.prototype.copy_487ue8$ = function (expectedType, response) {
    return new HttpResponseContainer(expectedType === void 0 ? this.expectedType : expectedType, response === void 0 ? this.response : response);
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + Kotlin.toString(this.expectedType) + (', response=' + Kotlin.toString(this.response)) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expectedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.response) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expectedType, other.expectedType) && Kotlin.equals(this.response, other.response)))));
  };
  var HttpStatement$body$lambda_0 = wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$continuation, this$HttpStatement, typeClosure$T, isT) {
      return function () {
        var tmp$;
        this$HttpStatement.executeUnsafe(closure$continuation);
        var response = closure$continuation.$$coroutineResult$$;
        try {
          var T_0 = typeClosure$T;
          var isT_0 = isT;
          var tmp$_0;
          var tmp$_1 = response.call;
          var tmp$_2 = reflect.JsType;
          var tmp$_0_0 = getKClass(T_0);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = getReifiedTypeParameterKType(typeClosure$T);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          tmp$_1.body_qi9ur9$(typeInfoImpl(tmp$_2, tmp$_0_0, tryGetType$result), $this$);
          $this$.$$coroutineResult$$ = isT_0(tmp$_0 = $this$.$$coroutineResult$$) ? tmp$_0 : throwCCE();
          tmp$ = closure$continuation.$$coroutineResult$$;
        }finally {
          complete(response);
        }
        return tmp$;
      };
    };
  });
  var HttpStatement$body$lambda_1 = wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var reflect = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = $module$ktor_ktor_utils_js_legacy.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (closure$continuation, this$HttpStatement, typeClosure$T, isT, closure$block) {
      return function () {
        this$HttpStatement.executeUnsafe(closure$continuation);
        var response = closure$continuation.$$coroutineResult$$;
        try {
          var T_0 = typeClosure$T;
          var isT_0 = isT;
          var tmp$;
          var tmp$_0 = response.call;
          var tmp$_1 = reflect.JsType;
          var tmp$_0_0 = getKClass(T_0);
          var tryGetType$result;
          tryGetType$break: do {
            try {
              tryGetType$result = getReifiedTypeParameterKType(typeClosure$T);
            } catch (cause) {
              if (Kotlin.isType(cause, Throwable)) {
                tryGetType$result = null;
                break tryGetType$break;
              } else
                throw cause;
            }
          }
           while (false);
          tmp$_0.body_qi9ur9$(typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result), $this$);
          $this$.$$coroutineResult$$ = isT_0(tmp$ = $this$.$$coroutineResult$$) ? tmp$ : throwCCE();
          var result = closure$continuation.$$coroutineResult$$;
          closure$block(result, closure$continuation);
          return closure$continuation.$$coroutineResult$$;
        }finally {
          this$HttpStatement.cleanup_abn2de$(response, closure$continuation);
        }
      };
    };
  });
  function HttpStatement(builder, client) {
    this.builder_0 = builder;
    this.client = client;
    this.checkCapabilities_0();
  }
  function Coroutine$execute_2rh6on$($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$response = void 0;
    this.local$block = block_0;
  }
  Coroutine$execute_2rh6on$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_2rh6on$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_2rh6on$.prototype.constructor = Coroutine$execute_2rh6on$;
  Coroutine$execute_2rh6on$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 8;
            this.state_0 = 1;
            this.result_0 = this.$this.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 5;
            this.state_0 = 2;
            this.result_0 = this.local$block(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            this.$returnValue = this.result_0;
            continue;
          case 3:
            return this.$returnValue;
          case 4:
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            continue;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            this.result_0 = this.$this.cleanup_abn2de$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.exceptionState_0 = 10;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, CancellationException)) {
              throw unwrapCancellationException(cause);
            } else
              throw cause;
          case 9:
            return;
          case 10:
            throw this.exception_0;
          default:
            this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 10) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.execute_2rh6on$ = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_2rh6on$(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$HttpStatement$execute$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$HttpStatement$execute$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HttpStatement$execute$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HttpStatement$execute$lambda.prototype.constructor = Coroutine$HttpStatement$execute$lambda;
  Coroutine$HttpStatement$execute$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = save(this.local$it.call, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var savedCall = this.result_0;
            return savedCall.response;
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
  function HttpStatement$execute$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$HttpStatement$execute$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  HttpStatement.prototype.execute = function (continuation) {
    return this.execute_2rh6on$(HttpStatement$execute$lambda, continuation);
  };
  function Coroutine$body_287e2$($this, T_0_0, isT_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$response = void 0;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
  }
  Coroutine$body_287e2$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$body_287e2$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$body_287e2$.prototype.constructor = Coroutine$body_287e2$;
  Coroutine$body_287e2$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 6;
            this.state_0 = 1;
            this.result_0 = this.$this.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_3;
            var tmp$_4 = this.local$response.call;
            var tmp$_5 = reflect.JsType;
            var tmp$_0_1 = getKClass(this.local$T_0);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = getReifiedTypeParameterKType(this.local$T_0);
              } catch (cause_1) {
                if (Kotlin.isType(cause_1, Throwable)) {
                  tryGetType$result_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_1;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_4.body_qi9ur9$(typeInfoImpl(tmp$_5, tmp$_0_1, tryGetType$result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = this.local$isT(tmp$_3 = this.result_0) ? tmp$_3 : throwCCE();
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            return this.local$tmp$;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.exceptionState_0 = 8;
            var cause_2 = this.exception_0;
            if (Kotlin.isType(cause_2, CancellationException)) {
              throw unwrapCancellationException(cause_2);
            } else
              throw cause_2;
          case 7:
            return;
          case 8:
            throw this.exception_0;
          default:
            this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.body_287e2$ = function (T_0_0, isT_0, continuation_0, suspended) {
    var instance = new Coroutine$body_287e2$(this, T_0_0, isT_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.statement.HttpStatement.body_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var complete = _.io.ktor.client.statement.complete_abn2de$;
    var wrapFunction = Kotlin.wrapFunction;
    var unwrapCancellationException = _.io.ktor.client.utils.unwrapCancellationException_dbl4o4$;
    var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    var HttpStatement$body$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$continuation, this$HttpStatement, typeClosure$T, isT) {
        return function () {
          var tmp$;
          this$HttpStatement.executeUnsafe(closure$continuation);
          var response = closure$continuation.$$coroutineResult$$;
          try {
            var T_0 = typeClosure$T;
            var isT_0 = isT;
            var tmp$_0;
            var tmp$_1 = response.call;
            var tmp$_2 = reflect.JsType;
            var tmp$_0_0 = getKClass(T_0);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = getReifiedTypeParameterKType(typeClosure$T);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            tmp$_1.body_qi9ur9$(typeInfoImpl(tmp$_2, tmp$_0_0, tryGetType$result), $this$);
            $this$.$$coroutineResult$$ = isT_0(tmp$_0 = $this$.$$coroutineResult$$) ? tmp$_0 : throwCCE();
            tmp$ = closure$continuation.$$coroutineResult$$;
          }finally {
            complete(response);
          }
          return tmp$;
        };
      };
    });
    return function (T_0, isT, continuation) {
      try {
        var tmp$_2;
        Kotlin.suspendCall(this.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_3;
          var tmp$_4 = response.call;
          var tmp$_5 = reflect.JsType;
          var tmp$_0_1 = getKClass(T_0);
          var tryGetType$result_0;
          tryGetType$break: do {
            try {
              tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
            } catch (cause_1) {
              if (Kotlin.isType(cause_1, Throwable)) {
                tryGetType$result_0 = null;
                break tryGetType$break;
              } else
                throw cause_1;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_4.body_qi9ur9$(typeInfoImpl(tmp$_5, tmp$_0_1, tryGetType$result_0), Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_3 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_3 : throwCCE(), Kotlin.coroutineReceiver());
          tmp$_2 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        }finally {
          complete(response);
        }
        return tmp$_2;
      } catch (cause_2) {
        if (Kotlin.isType(cause_2, CancellationException)) {
          throw unwrapCancellationException(cause_2);
        } else
          throw cause_2;
      }
    };
  }));
  function Coroutine$body_yswr0a$($this, T_0_0, isT_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 11;
    this.$this = $this;
    this.local$response = void 0;
    this.local$T_0 = T_0_0;
    this.local$isT = isT_0;
    this.local$block = block_0;
  }
  Coroutine$body_yswr0a$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$body_yswr0a$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$body_yswr0a$.prototype.constructor = Coroutine$body_yswr0a$;
  Coroutine$body_yswr0a$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 9;
            this.state_0 = 1;
            this.result_0 = this.$this.executeUnsafe(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 6;
            var tmp$_2;
            var tmp$_3 = this.local$response.call;
            var tmp$_4 = reflect.JsType;
            var tmp$_0_1 = getKClass(this.local$T_0);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = getReifiedTypeParameterKType(this.local$T_0);
              } catch (cause_1) {
                if (Kotlin.isType(cause_1, Throwable)) {
                  tryGetType$result_0 = null;
                  break tryGetType$break;
                } else
                  throw cause_1;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = this.local$isT(tmp$_2 = this.result_0) ? tmp$_2 : throwCCE();
            var result_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$block(result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [4];
            this.state_0 = 7;
            this.$returnValue = this.result_0;
            continue;
          case 4:
            return this.$returnValue;
          case 5:
            this.exceptionState_0 = 11;
            this.state_0 = 10;
            continue;
          case 6:
            this.finallyPath_0 = [9];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            this.result_0 = this.$this.cleanup_abn2de$(this.local$response, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            this.exceptionState_0 = 11;
            var cause_2 = this.exception_0;
            if (Kotlin.isType(cause_2, CancellationException)) {
              throw unwrapCancellationException(cause_2);
            } else
              throw cause_2;
          case 10:
            return;
          case 11:
            throw this.exception_0;
          default:
            this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 11) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.body_yswr0a$ = function (T_0_0, isT_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$body_yswr0a$(this, T_0_0, isT_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.statement.HttpStatement.body_yswr0a$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var unwrapCancellationException = _.io.ktor.client.utils.unwrapCancellationException_dbl4o4$;
    var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
    var throwCCE = Kotlin.throwCCE;
    var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    var HttpStatement$body$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var reflect = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
      var getKClass = Kotlin.getKClass;
      var typeInfoImpl = _.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
      var Throwable = Error;
      return function (closure$continuation, this$HttpStatement, typeClosure$T, isT, closure$block) {
        return function () {
          this$HttpStatement.executeUnsafe(closure$continuation);
          var response = closure$continuation.$$coroutineResult$$;
          try {
            var T_0 = typeClosure$T;
            var isT_0 = isT;
            var tmp$;
            var tmp$_0 = response.call;
            var tmp$_1 = reflect.JsType;
            var tmp$_0_0 = getKClass(T_0);
            var tryGetType$result;
            tryGetType$break: do {
              try {
                tryGetType$result = getReifiedTypeParameterKType(typeClosure$T);
              } catch (cause) {
                if (Kotlin.isType(cause, Throwable)) {
                  tryGetType$result = null;
                  break tryGetType$break;
                } else
                  throw cause;
              }
            }
             while (false);
            tmp$_0.body_qi9ur9$(typeInfoImpl(tmp$_1, tmp$_0_0, tryGetType$result), $this$);
            $this$.$$coroutineResult$$ = isT_0(tmp$ = $this$.$$coroutineResult$$) ? tmp$ : throwCCE();
            var result = closure$continuation.$$coroutineResult$$;
            closure$block(result, closure$continuation);
            return closure$continuation.$$coroutineResult$$;
          }finally {
            this$HttpStatement.cleanup_abn2de$(response, closure$continuation);
          }
        };
      };
    });
    return function (T_0, isT, block, continuation) {
      try {
        Kotlin.suspendCall(this.executeUnsafe(Kotlin.coroutineReceiver()));
        var response = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        try {
          var tmp$_2;
          var tmp$_3 = response.call;
          var tmp$_4 = reflect.JsType;
          var tmp$_0_1 = getKClass(T_0);
          var tryGetType$result_0;
          tryGetType$break: do {
            try {
              tryGetType$result_0 = getReifiedTypeParameterKType(T_0);
            } catch (cause_1) {
              if (Kotlin.isType(cause_1, Throwable)) {
                tryGetType$result_0 = null;
                break tryGetType$break;
              } else
                throw cause_1;
            }
          }
           while (false);
          Kotlin.suspendCall(tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), Kotlin.coroutineReceiver()));
          Kotlin.setCoroutineResult(isT(tmp$_2 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_2 : throwCCE(), Kotlin.coroutineReceiver());
          var result_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          Kotlin.suspendCall(block(result_0, Kotlin.coroutineReceiver()));
          return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        }finally {
          Kotlin.suspendCall(this.cleanup_abn2de$(response, Kotlin.coroutineReceiver()));
        }
      } catch (cause_2) {
        if (Kotlin.isType(cause_2, CancellationException)) {
          throw unwrapCancellationException(cause_2);
        } else
          throw cause_2;
      }
    };
  }));
  function Coroutine$executeUnsafe($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
  }
  Coroutine$executeUnsafe.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executeUnsafe.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executeUnsafe.prototype.constructor = Coroutine$executeUnsafe;
  Coroutine$executeUnsafe.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            var builder = (new HttpRequestBuilder()).takeFromWithExecutionContext_s9rlw$(this.$this.builder_0);
            this.state_0 = 1;
            this.result_0 = this.$this.client.execute_jc2hdt$(builder, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var call = this.result_0;
            return call.response;
          case 2:
            this.exceptionState_0 = 4;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, CancellationException)) {
              throw unwrapCancellationException(cause);
            } else
              throw cause;
          case 3:
            return;
          case 4:
            throw this.exception_0;
          default:
            this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HttpStatement.prototype.executeUnsafe = function (continuation_0, suspended) {
    var instance = new Coroutine$executeUnsafe(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$cleanup_abn2de$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$cleanup_abn2de$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cleanup_abn2de$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cleanup_abn2de$.prototype.constructor = Coroutine$cleanup_abn2de$;
  Coroutine$cleanup_abn2de$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var job = Kotlin.isType(tmp$ = ensureNotNull(this.local$$receiver.coroutineContext.get_j3r2sn$(Job.Key)), CompletableJob) ? tmp$ : throwCCE();
            job.complete();
            try {
              cancel_1(this.local$$receiver.content);
            } catch (_) {
              if (!Kotlin.isType(_, Throwable))
                throw _;
            }

            this.state_0 = 2;
            this.result_0 = job.join(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  HttpStatement.prototype.cleanup_abn2de$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$cleanup_abn2de$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  HttpStatement.prototype.checkCapabilities_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_0 = (tmp$ = this.builder_0.attributes.getOrNull_yzaw86$(ENGINE_CAPABILITIES_KEY)) != null ? tmp$.keys : null) != null) {
      var destination = ArrayList_init();
      var tmp$_3;
      tmp$_3 = tmp$_0.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (Kotlin.isType(element, HttpClientPlugin))
          destination.add_11rb$(element);
      }
      tmp$_2 = destination;
    } else
      tmp$_2 = null;
    if ((tmp$_1 = tmp$_2) != null) {
      var tmp$_4;
      tmp$_4 = tmp$_1.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        if (pluginOrNull(this.client, element_0) == null) {
          var message = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
          throw IllegalArgumentException_init(message.toString());
        }
      }
    }
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.builder_0.url.buildString() + ']';
  };
  HttpStatement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpStatement',
    interfaces: []
  };
  function Coroutine$readBytes($receiver_0, count_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = $receiver_0;
    this.local$count = count_0;
  }
  Coroutine$readBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBytes.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBytes.prototype.constructor = Coroutine$readBytes;
  Coroutine$readBytes.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new Int8Array(this.local$count);
            this.state_0 = 2;
            this.result_0 = readFully(this.local$$receiver_0.content, this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver;
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
  function readBytes_0($receiver_0, count_0, continuation_0, suspended) {
    var instance = new Coroutine$readBytes($receiver_0, count_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBytes_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBytes_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBytes_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBytes_0.prototype.constructor = Coroutine$readBytes_0;
  Coroutine$readBytes_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.content.readRemaining_s8cxhz$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return readBytes(this.result_0);
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
  function readBytes_1($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBytes_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$discardRemaining($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$discardRemaining.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$discardRemaining.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$discardRemaining.prototype.constructor = Coroutine$discardRemaining;
  Coroutine$discardRemaining.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = discard(this.local$$receiver.content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function discardRemaining($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$discardRemaining($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$observable$lambda(closure$contentLength_0, this$observable_0, closure$listener_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 11;
    this.local$closure$contentLength = closure$contentLength_0;
    this.local$this$observable = this$observable_0;
    this.local$closure$listener = closure$listener_0;
    this.local$$receiver = void 0;
    this.local$instance = void 0;
    this.local$this$observable_0 = void 0;
    this.local$closure$listener_0 = void 0;
    this.local$total = void 0;
    this.local$bytesSend = void 0;
    this.local$read = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$observable$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$observable$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$observable$lambda.prototype.constructor = Coroutine$observable$lambda;
  Coroutine$observable$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = pool.ByteArrayPool;
            this.local$instance = this.local$$receiver.borrow();
            this.exceptionState_0 = 9;
            var closure$contentLength = this.local$closure$contentLength;
            this.local$this$observable_0 = this.local$this$observable;
            this.local$closure$listener_0 = this.local$closure$listener;
            this.local$total = closure$contentLength != null ? closure$contentLength : L_1;
            this.local$bytesSend = L0;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$this$observable_0.isClosedForRead) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = readAvailable_0(this.local$this$observable_0, this.local$instance, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$read = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver_0.channel.writeFully_mj6st8$(this.local$instance, 0, this.local$read, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$bytesSend = this.local$bytesSend.add(Kotlin.Long.fromInt(this.local$read));
            this.state_0 = 4;
            this.result_0 = this.local$closure$listener_0(this.local$bytesSend, this.local$total, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            var closedCause = this.local$this$observable_0.closedCause;
            this.local$$receiver_0.channel.close_dbl4no$(closedCause);
            if (closedCause == null && equals(this.local$bytesSend, L0)) {
              this.state_0 = 6;
              this.result_0 = this.local$closure$listener_0(this.local$bytesSend, this.local$total, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [8];
            this.state_0 = 10;
            continue;
          case 8:
            return Unit;
          case 9:
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 10:
            this.exceptionState_0 = 11;
            this.local$$receiver.recycle_trkh7z$(this.local$instance);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 11:
            throw this.exception_0;
          default:
            this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 11) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function observable$lambda(closure$contentLength_0, this$observable_0, closure$listener_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$observable$lambda(closure$contentLength_0, this$observable_0, closure$listener_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function observable($receiver, context, contentLength, listener) {
    return writer(coroutines.GlobalScope, context, true, observable$lambda(contentLength, $receiver, listener)).channel;
  }
  var DEFAULT_HTTP_POOL_SIZE;
  var DEFAULT_HTTP_BUFFER_SIZE;
  function CacheControl_0() {
    CacheControl_instance_0 = this;
    this.MAX_AGE = 'max-age';
    this.MIN_FRESH = 'min-fresh';
    this.ONLY_IF_CACHED = 'only-if-cached';
    this.MAX_STALE = 'max-stale';
    this.NO_CACHE = 'no-cache';
    this.NO_STORE = 'no-store';
    this.NO_TRANSFORM = 'no-transform';
    this.MUST_REVALIDATE = 'must-revalidate';
    this.PUBLIC = 'public';
    this.PRIVATE = 'private';
    this.PROXY_REVALIDATE = 'proxy-revalidate';
    this.S_MAX_AGE = 's-maxage';
  }
  CacheControl_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CacheControl',
    interfaces: []
  };
  var CacheControl_instance_0 = null;
  function CacheControl_getInstance_0() {
    if (CacheControl_instance_0 === null) {
      new CacheControl_0();
    }
    return CacheControl_instance_0;
  }
  var HttpRequestCreated;
  var HttpRequestIsReadyForSending;
  var HttpResponseReceived;
  function HttpResponseReceiveFail(response, cause) {
    this.response = response;
    this.cause = cause;
  }
  HttpResponseReceiveFail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpResponseReceiveFail',
    interfaces: []
  };
  var HttpResponseReceiveFailed;
  var HttpResponseCancelled;
  function EmptyContent() {
    EmptyContent_instance = this;
    OutgoingContent$NoContent.call(this);
    this.contentLength_89rfwp$_0 = L0;
  }
  Object.defineProperty(EmptyContent.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.contentLength_89rfwp$_0;
    }
  });
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  EmptyContent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyContent',
    interfaces: [OutgoingContent$NoContent]
  };
  var EmptyContent_instance = null;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance === null) {
      new EmptyContent();
    }
    return EmptyContent_instance;
  }
  function wrapHeaders$ObjectLiteral(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$NoContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$NoContent]
  };
  function wrapHeaders$ObjectLiteral_0(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ReadChannelContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_0.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_0.prototype.readFrom = function () {
    return this.this$wrapHeaders.readFrom();
  };
  wrapHeaders$ObjectLiteral_0.prototype.readFrom_6z6t3e$ = function (range) {
    return this.this$wrapHeaders.readFrom_6z6t3e$(range);
  };
  wrapHeaders$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ReadChannelContent]
  };
  function wrapHeaders$ObjectLiteral_1(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$WriteChannelContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_1.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_1.prototype.writeTo_h3x4ir$ = function (channel, continuation) {
    return this.this$wrapHeaders.writeTo_h3x4ir$(channel, continuation);
  };
  wrapHeaders$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$WriteChannelContent]
  };
  function wrapHeaders$ObjectLiteral_2(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ByteArrayContent.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'status', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.status;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_2.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_2.prototype.bytes = function () {
    return this.this$wrapHeaders.bytes();
  };
  wrapHeaders$ObjectLiteral_2.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ByteArrayContent]
  };
  function wrapHeaders$ObjectLiteral_3(this$wrapHeaders, closure$block) {
    this.this$wrapHeaders = this$wrapHeaders;
    OutgoingContent$ProtocolUpgrade.call(this);
    this.headers_byaa2p$_0 = closure$block(this$wrapHeaders.headers);
  }
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'contentLength', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentLength;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'contentType', {
    configurable: true,
    get: function () {
      return this.this$wrapHeaders.contentType;
    }
  });
  Object.defineProperty(wrapHeaders$ObjectLiteral_3.prototype, 'headers', {
    configurable: true,
    get: function () {
      return this.headers_byaa2p$_0;
    }
  });
  wrapHeaders$ObjectLiteral_3.prototype.upgrade_h1mv0l$ = function (input, output, engineContext, userContext, continuation) {
    return this.this$wrapHeaders.upgrade_h1mv0l$(input, output, engineContext, userContext, continuation);
  };
  wrapHeaders$ObjectLiteral_3.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OutgoingContent$ProtocolUpgrade]
  };
  function wrapHeaders($receiver, block) {
    if (Kotlin.isType($receiver, OutgoingContent$NoContent))
      return new wrapHeaders$ObjectLiteral($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ReadChannelContent))
      return new wrapHeaders$ObjectLiteral_0($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$WriteChannelContent))
      return new wrapHeaders$ObjectLiteral_1($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ByteArrayContent))
      return new wrapHeaders$ObjectLiteral_2($receiver, block);
    else if (Kotlin.isType($receiver, OutgoingContent$ProtocolUpgrade))
      return new wrapHeaders$ObjectLiteral_3($receiver, block);
    else
      return Kotlin.noWhenBranchMatched();
  }
  function buildHeaders$lambda($receiver) {
    return Unit;
  }
  function buildHeaders(block) {
    if (block === void 0)
      block = buildHeaders$lambda;
    var $receiver = new HeadersBuilder();
    block($receiver);
    return $receiver.build();
  }
  function HttpClient$lambda_1($receiver) {
    return Unit;
  }
  function HttpClient_2(block) {
    if (block === void 0)
      block = HttpClient$lambda_1;
    return HttpClient(JsClient(), block);
  }
  function ProxyConfig() {
  }
  ProxyConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProxyConfig',
    interfaces: []
  };
  function ProxyBuilder() {
    ProxyBuilder_instance = this;
  }
  ProxyBuilder.prototype.http_dxu3lv$ = function (url) {
    throw IllegalStateException_init('Proxy unsupported in js client engine.'.toString());
  };
  ProxyBuilder.prototype.socks_bm4lxs$ = function (host, port) {
    throw IllegalStateException_init('Proxy unsupported in js client engine.'.toString());
  };
  ProxyBuilder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ProxyBuilder',
    interfaces: []
  };
  var ProxyBuilder_instance = null;
  function ProxyBuilder_getInstance() {
    if (ProxyBuilder_instance === null) {
      new ProxyBuilder();
    }
    return ProxyBuilder_instance;
  }
  function resolveAddress($receiver) {
    throw IllegalStateException_init('Proxy unsupported in js client engine.'.toString());
  }
  function get_type($receiver) {
    throw IllegalStateException_init('Proxy unsupported in js client engine.'.toString());
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.create_dxyxif$$default = function (block) {
    var $receiver = new HttpClientEngineConfig();
    block($receiver);
    return new JsClientEngine($receiver);
  };
  Js.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Js',
    interfaces: [HttpClientEngineFactory]
  };
  var Js_instance = null;
  function Js_getInstance() {
    if (Js_instance === null) {
      new Js();
    }
    return Js_instance;
  }
  function JsClient() {
    return Js_getInstance();
  }
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.config_2md4la$_0 = config;
    this.dispatcher_j9yf5v$_0 = coroutines.Dispatchers.Default;
    this.supportedCapabilities_380cpg$_0 = setOf_0([HttpTimeout$Plugin_getInstance(), WebSocketCapability_getInstance()]);
    if (!(this.config.proxy == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init(message.toString());
    }
  }
  Object.defineProperty(JsClientEngine.prototype, 'config', {
    get: function () {
      return this.config_2md4la$_0;
    }
  });
  Object.defineProperty(JsClientEngine.prototype, 'dispatcher', {
    configurable: true,
    get: function () {
      return this.dispatcher_j9yf5v$_0;
    }
  });
  Object.defineProperty(JsClientEngine.prototype, 'supportedCapabilities', {
    configurable: true,
    get: function () {
      return this.supportedCapabilities_380cpg$_0;
    }
  });
  function Coroutine$execute_dkgphz$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$callContext = void 0;
    this.local$clientConfig = void 0;
    this.local$requestTime = void 0;
    this.local$data = data_0;
  }
  Coroutine$execute_dkgphz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute_dkgphz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute_dkgphz$.prototype.constructor = Coroutine$execute_dkgphz$;
  Coroutine$execute_dkgphz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = callContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$callContext = this.result_0;
            this.local$clientConfig = this.local$data.attributes.get_yzaw86$(CLIENT_CONFIG);
            if (isUpgradeRequest(this.local$data)) {
              this.state_0 = 3;
              this.result_0 = this.$this.executeWebSocketRequest_0(this.local$data, this.local$callContext, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            return this.result_0;
          case 4:
            this.local$requestTime = GMTDate();
            this.state_0 = 5;
            this.result_0 = toRaw(this.local$data, this.local$clientConfig, this.local$callContext, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var rawRequest = this.result_0;
            this.state_0 = 6;
            this.result_0 = commonFetch(this.local$data.url.toString(), rawRequest, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var rawResponse = this.result_0;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = HttpProtocolVersion.Companion.HTTP_1_1;
            var body = readBody(CoroutineScope_0(this.local$callContext), rawResponse);
            return new HttpResponseData(status, this.local$requestTime, headers, version, body, this.local$callContext);
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
  JsClientEngine.prototype.execute_dkgphz$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$execute_dkgphz$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function JsClientEngine$createWebSocket$ObjectLiteral() {
  }
  JsClientEngine$createWebSocket$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function JsClientEngine$createWebSocket$lambda(closure$headers_capturingHack) {
    return function (name, values) {
      closure$headers_capturingHack[name] = joinToString(values, ',');
      return Unit;
    };
  }
  JsClientEngine.prototype.createWebSocket_0 = function (urlString_capturingHack, headers) {
    if (util.PlatformUtils.IS_NODE) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$ObjectLiteral();
      headers.forEach_ubvtmq$(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      return new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      return new WebSocket(urlString_capturingHack);
    }
  };
  function Coroutine$executeWebSocketRequest_0($this, request_0, callContext_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$requestTime = void 0;
    this.local$urlString = void 0;
    this.local$socket = void 0;
    this.local$request = request_0;
    this.local$callContext = callContext_0;
  }
  Coroutine$executeWebSocketRequest_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executeWebSocketRequest_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executeWebSocketRequest_0.prototype.constructor = Coroutine$executeWebSocketRequest_0;
  Coroutine$executeWebSocketRequest_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$requestTime = GMTDate();
            this.local$urlString = this.local$request.url.toString();
            this.local$socket = this.$this.createWebSocket_0(this.local$urlString, this.local$request.headers);
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = awaitConnection(this.local$socket, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              cancel_3(this.local$callContext, CancellationException_init_0('Failed to connect to ' + this.local$urlString, cause));
              throw cause;
            } else
              throw cause;
          case 3:
            var session = new JsWebSocketSession(this.local$callContext, this.local$socket);
            return new HttpResponseData(HttpStatusCode.Companion.OK, this.local$requestTime, Headers.Companion.Empty, HttpProtocolVersion.Companion.HTTP_1_1, session, this.local$callContext);
          case 4:
            throw this.exception_0;
          default:
            this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsClientEngine.prototype.executeWebSocketRequest_0 = function (request_0, callContext_0, continuation_0, suspended) {
    var instance = new Coroutine$executeWebSocketRequest_0(this, request_0, callContext_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JsClientEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsClientEngine',
    interfaces: [HttpClientEngineBase]
  };
  function awaitConnection$lambda$lambda(closure$continuation, this$awaitConnection) {
    return function (event) {
      switch (event.type) {
        case 'open':
          var $receiver = closure$continuation;
          var value = this$awaitConnection;
          $receiver.resumeWith_tl1gpc$(new Result(value));
          break;
        case 'error':
          var $receiver_0 = closure$continuation;
          var exception = new WebSocketException(asString(event));
          $receiver_0.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break;
      }
      return Unit;
    };
  }
  function awaitConnection$lambda$lambda_0(closure$eventListener, this$awaitConnection) {
    return function (it) {
      this$awaitConnection.removeEventListener('open', closure$eventListener);
      this$awaitConnection.removeEventListener('error', closure$eventListener);
      if (it != null) {
        this$awaitConnection.close();
      }
      return Unit;
    };
  }
  function awaitConnection$lambda(this$awaitConnection) {
    return function (continuation) {
      if (continuation.isCancelled)
        return;
      var eventListener = awaitConnection$lambda$lambda(continuation, this$awaitConnection);
      this$awaitConnection.addEventListener('open', eventListener);
      this$awaitConnection.addEventListener('error', eventListener);
      continuation.invokeOnCancellation_f05bi3$(awaitConnection$lambda$lambda_0(eventListener, this$awaitConnection));
      return Unit;
    };
  }
  function Coroutine$awaitConnection($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$awaitConnection.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$awaitConnection.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$awaitConnection.prototype.constructor = Coroutine$awaitConnection;
  Coroutine$awaitConnection.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(awaitConnection$lambda(this.local$$receiver))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function awaitConnection($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$awaitConnection($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function asString($receiver) {
    var $receiver_0 = StringBuilder_init();
    $receiver_0.append_pdl1vj$(JSON.stringify($receiver, ['message', 'target', 'type', 'isTrusted']));
    return $receiver_0.toString();
  }
  function mapToKtor$lambda$lambda(this$) {
    return function (value, key) {
      this$.append_puj7f4$(key, value);
      return Unit;
    };
  }
  function mapToKtor$lambda(this$mapToKtor) {
    return function ($receiver) {
      this$mapToKtor.forEach(mapToKtor$lambda$lambda($receiver));
      return Unit;
    };
  }
  function mapToKtor($receiver) {
    return buildHeaders(mapToKtor$lambda($receiver));
  }
  function JsError(origin) {
    Throwable.call(this);
    this.message_9vnttw$_0 = 'Error from javascript[' + origin.toString() + '].';
    this.cause_kdow7y$_0 = null;
    this.origin = origin;
    Kotlin.captureStack(Throwable, this);
    this.name = 'JsError';
  }
  Object.defineProperty(JsError.prototype, 'message', {
    get: function () {
      return this.message_9vnttw$_0;
    }
  });
  Object.defineProperty(JsError.prototype, 'cause', {
    get: function () {
      return this.cause_kdow7y$_0;
    }
  });
  JsError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsError',
    interfaces: [Throwable]
  };
  function toRaw$lambda(closure$jsHeaders) {
    return function (key, value) {
      closure$jsHeaders[key] = value;
      return Unit;
    };
  }
  function Coroutine$toRaw$lambda(closure$content_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$content = closure$content_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toRaw$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toRaw$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toRaw$lambda.prototype.constructor = Coroutine$toRaw$lambda;
  Coroutine$toRaw$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$content.writeTo_h3x4ir$(this.local$$receiver.channel, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function toRaw$lambda_0(closure$content_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$toRaw$lambda(closure$content_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function toRaw$lambda_1(this$toRaw, closure$jsHeaders, closure$clientConfig, closure$bodyBytes) {
    return function ($receiver) {
      $receiver.method = this$toRaw.method.value;
      $receiver.headers = closure$jsHeaders;
      $receiver.redirect = closure$clientConfig.followRedirects ? 'follow' : 'manual';
      if (closure$bodyBytes != null) {
        $receiver.body = new Uint8Array(toTypedArray(closure$bodyBytes));
      }
      return Unit;
    };
  }
  function Coroutine$toRaw($receiver_0, clientConfig_0, callContext_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$jsHeaders = void 0;
    this.local$$receiver = $receiver_0;
    this.local$clientConfig = clientConfig_0;
    this.local$callContext = callContext_0;
  }
  Coroutine$toRaw.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toRaw.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toRaw.prototype.constructor = Coroutine$toRaw;
  Coroutine$toRaw.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$jsHeaders = {};
            mergeHeaders(this.local$$receiver.headers, this.local$$receiver.body, toRaw$lambda(this.local$jsHeaders));
            var content = this.local$$receiver.body;
            if (Kotlin.isType(content, OutgoingContent$ByteArrayContent)) {
              this.local$tmp$ = content.bytes();
              this.state_0 = 6;
              continue;
            } else {
              if (Kotlin.isType(content, OutgoingContent$ReadChannelContent)) {
                this.state_0 = 4;
                this.result_0 = content.readFrom().readRemaining_s8cxhz$(void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                if (Kotlin.isType(content, OutgoingContent$WriteChannelContent)) {
                  this.state_0 = 2;
                  this.result_0 = writer(coroutines.GlobalScope, this.local$callContext, void 0, toRaw$lambda_0(content)).channel.readRemaining_s8cxhz$(void 0, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.local$tmp$ = null;
                  this.state_0 = 3;
                  continue;
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = readBytes(this.result_0);
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$ = readBytes(this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            var bodyBytes = this.local$tmp$;
            return buildObject(toRaw$lambda_1(this.local$$receiver, this.local$jsHeaders, this.local$clientConfig, bodyBytes));
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
  function toRaw($receiver_0, clientConfig_0, callContext_0, continuation_0, suspended) {
    var instance = new Coroutine$toRaw($receiver_0, clientConfig_0, callContext_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function buildObject(block) {
    var tmp$;
    var $receiver = (tmp$ = {}) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    block($receiver);
    return $receiver;
  }
  function asByteArray($receiver) {
    return new Int8Array($receiver.buffer, $receiver.byteOffset, $receiver.length);
  }
  function suspendCancellableCoroutine$lambda_0(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function readBodyBrowser($receiver, response) {
    var tmp$;
    tmp$ = response.body;
    if (tmp$ == null) {
      return ByteReadChannel.Companion.Empty;
    }
    var stream = tmp$;
    return channelFromStream($receiver, stream);
  }
  function Coroutine$channelFromStream$lambda(closure$stream_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 8;
    this.local$closure$stream = closure$stream_0;
    this.local$tmp$ = void 0;
    this.local$reader = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$channelFromStream$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$channelFromStream$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$channelFromStream$lambda.prototype.constructor = Coroutine$channelFromStream$lambda;
  Coroutine$channelFromStream$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$reader = this.local$closure$stream.getReader();
            this.state_0 = 1;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.state_0 = 2;
            this.result_0 = readChunk(this.local$reader, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.exceptionState_0 = 6;
              this.state_0 = 5;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var chunk = this.local$tmp$;
            this.state_0 = 4;
            this.result_0 = writeFully(this.local$$receiver.channel, asByteArray(chunk), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            continue;
          case 5:
            return Unit;
          case 6:
            this.exceptionState_0 = 8;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$reader.cancel(cause);
              throw cause;
            } else
              throw cause;
          case 7:
            this.state_0 = 1;
            continue;
          case 8:
            throw this.exception_0;
          default:
            this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function channelFromStream$lambda(closure$stream_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$channelFromStream$lambda(closure$stream_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function channelFromStream($receiver, stream) {
    return writer($receiver, void 0, void 0, channelFromStream$lambda(stream)).channel;
  }
  function readChunk$lambda$lambda(closure$continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done || chunk == null ? null : chunk;
      closure$continuation.resumeWith_tl1gpc$(new Result(result));
      return Unit;
    };
  }
  function readChunk$lambda$lambda_0(closure$continuation) {
    return function (cause) {
      closure$continuation.resumeWith_tl1gpc$(new Result(createFailure(cause)));
      return Unit;
    };
  }
  function readChunk$lambda(this$readChunk) {
    return function (continuation) {
      this$readChunk.read().then(readChunk$lambda$lambda(continuation)).catch(readChunk$lambda$lambda_0(continuation));
      return Unit;
    };
  }
  function Coroutine$readChunk($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readChunk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readChunk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readChunk.prototype.constructor = Coroutine$readChunk;
  Coroutine$readChunk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_0(readChunk$lambda(this.local$$receiver))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function readChunk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readChunk($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function suspendCancellableCoroutine$lambda_1(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  function commonFetch$lambda$lambda(closure$controller) {
    return function (it) {
      closure$controller.abort();
      return Unit;
    };
  }
  function commonFetch$lambda$lambda_0(closure$continuation) {
    return function (it) {
      closure$continuation.resumeWith_tl1gpc$(new Result(it));
      return Unit;
    };
  }
  function commonFetch$lambda$lambda_1(closure$continuation) {
    return function (it) {
      closure$continuation.resumeWith_tl1gpc$(new Result(createFailure(new Error_0('Fail to fetch', it))));
      return Unit;
    };
  }
  function commonFetch$lambda(closure$init, closure$input) {
    return function (continuation) {
      var tmp$;
      var controller = AbortController_0();
      closure$init.signal = controller.signal;
      continuation.invokeOnCancellation_f05bi3$(commonFetch$lambda$lambda(controller));
      if (util.PlatformUtils.IS_BROWSER) {
        tmp$ = fetch(closure$input, closure$init);
      } else {
        tmp$ = jsRequireNodeFetch()(closure$input, closure$init);
      }
      var promise = tmp$;
      promise.then(commonFetch$lambda$lambda_0(continuation), commonFetch$lambda$lambda_1(continuation));
      return Unit;
    };
  }
  function Coroutine$commonFetch(input_0, init_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$input = input_0;
    this.local$init = init_0;
  }
  Coroutine$commonFetch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$commonFetch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$commonFetch.prototype.constructor = Coroutine$commonFetch;
  Coroutine$commonFetch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_1(commonFetch$lambda(this.local$init, this.local$input))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function commonFetch(input_0, init_0, continuation_0, suspended) {
    var instance = new Coroutine$commonFetch(input_0, init_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function AbortController_0() {
    var tmp$;
    if (util.PlatformUtils.IS_BROWSER) {
      tmp$ = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp$ = new controller();
    }
    return tmp$;
  }
  function readBody($receiver, response) {
    if (util.PlatformUtils.IS_BROWSER) {
      return readBodyBrowser($receiver, response);
    } else {
      return readBodyNode($receiver, response);
    }
  }
  function jsRequireNodeFetch() {
    try {
      return eval('require')('node-fetch');
    } catch (cause) {
      throw Error_init("Error loading module 'node-fetch': " + cause.toString());
    }
  }
  function readBodyNode$lambda$lambda(closure$responseData, closure$body) {
    return function (chunk) {
      closure$responseData.trySend_11rb$(asByteArray(new Uint8Array(chunk))).isSuccess;
      return closure$body.pause();
    };
  }
  function readBodyNode$lambda$lambda_0(closure$responseData, this$) {
    return function (error) {
      var cause = new JsError(error);
      closure$responseData.close_dbl4no$(cause);
      return this$.channel.close_dbl4no$(cause);
    };
  }
  function readBodyNode$lambda$lambda_1(closure$responseData) {
    return function () {
      return closure$responseData.close_dbl4no$();
    };
  }
  function Coroutine$readBodyNode$lambda(closure$response_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 8;
    this.local$closure$response = closure$response_0;
    this.local$tmp$_0 = void 0;
    this.local$body = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBodyNode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBodyNode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBodyNode$lambda.prototype.constructor = Coroutine$readBodyNode$lambda;
  Coroutine$readBodyNode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0;
            if ((tmp$ = this.local$closure$response.body) != null)
              tmp$_0 = tmp$;
            else {
              throw IllegalStateException_init('Fail to get body'.toString());
            }

            this.local$body = tmp$_0;
            var responseData = Channel(1);
            this.local$body.on('data', readBodyNode$lambda$lambda(responseData, this.local$body));
            this.local$body.on('error', readBodyNode$lambda$lambda_0(responseData, this.local$$receiver));
            this.local$body.on('end', readBodyNode$lambda$lambda_1(responseData));
            this.exceptionState_0 = 6;
            this.local$tmp$_0 = responseData.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$tmp$_0.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (!this.result_0) {
              this.state_0 = 5;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var chunk = this.local$tmp$_0.next();
            this.state_0 = 4;
            this.result_0 = writeFully(this.local$$receiver.channel, chunk, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$body.resume();
            this.state_0 = 1;
            continue;
          case 5:
            this.exceptionState_0 = 8;
            this.state_0 = 7;
            continue;
          case 6:
            this.exceptionState_0 = 8;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$body.destroy(cause);
              throw cause;
            } else
              throw cause;
          case 7:
            return Unit;
          case 8:
            throw this.exception_0;
          default:
            this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBodyNode$lambda(closure$response_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$readBodyNode$lambda(closure$response_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function readBodyNode($receiver, response) {
    return writer($receiver, void 0, void 0, readBodyNode$lambda(response)).channel;
  }
  var invoke_1 = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.fetch.invoke_jvo5iz$', function ($receiver, evt) {
    $receiver(evt);
  });
  var get_5 = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.fetch.get_1nqz5t$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_0 = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.fetch.set_uwgz9l$', function ($receiver, index, value) {
    $receiver[index] = value;
  });
  var get_6 = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.fetch.get_vmghym$', function ($receiver, n) {
    return $receiver[n];
  });
  var set_1 = defineInlineFunction('ktor-ktor-client-core-js-legacy.io.ktor.client.fetch.set_y4mcs4$', function ($receiver, n, value) {
    $receiver[n] = value;
  });
  function ConnectTimeoutException_1(message, cause) {
    if (cause === void 0)
      cause = null;
    IOException.call(this, message, cause);
    this.name = 'ConnectTimeoutException';
  }
  ConnectTimeoutException_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConnectTimeoutException',
    interfaces: [IOException]
  };
  function SocketTimeoutException_0(message, cause) {
    if (cause === void 0)
      cause = null;
    IOException.call(this, message, cause);
    this.name = 'SocketTimeoutException';
  }
  SocketTimeoutException_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SocketTimeoutException',
    interfaces: [IOException]
  };
  function ByteChannelWithMappedExceptions(request) {
    return ByteChannel();
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers($receiver) {
  }
  function getResponseObserverContext(continuation) {
    return coroutines_0.EmptyCoroutineContext;
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.coroutineContext_rv3h91$_0 = coroutineContext;
    this.websocket_0 = websocket;
    this._closeReason_0 = CompletableDeferred();
    this._incoming_0 = Channel(2147483647);
    this._outgoing_0 = Channel(2147483647);
    this.incoming_z0xtng$_0 = this._incoming_0;
    this.outgoing_j2o89i$_0 = this._outgoing_0;
    this.closeReason_qo69t6$_0 = this._closeReason_0;
    var tmp$;
    this.websocket_0.binaryType = 'arraybuffer';
    this.websocket_0.addEventListener('message', JsWebSocketSession_init$lambda(this));
    this.websocket_0.addEventListener('error', JsWebSocketSession_init$lambda_0(this));
    this.websocket_0.addEventListener('close', JsWebSocketSession_init$lambda_1(this));
    launch(this, void 0, void 0, JsWebSocketSession_init$lambda_2(this));
    (tmp$ = this.coroutineContext.get_j3r2sn$(Job.Key)) != null ? tmp$.invokeOnCompletion_f05bi3$(JsWebSocketSession_init$lambda_3(this)) : null;
  }
  Object.defineProperty(JsWebSocketSession.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_rv3h91$_0;
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'incoming', {
    configurable: true,
    get: function () {
      return this.incoming_z0xtng$_0;
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'outgoing', {
    configurable: true,
    get: function () {
      return this.outgoing_j2o89i$_0;
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'extensions', {
    configurable: true,
    get: function () {
      return emptyList();
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'closeReason', {
    configurable: true,
    get: function () {
      return this.closeReason_qo69t6$_0;
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'pingIntervalMillis', {
    configurable: true,
    get: function () {
      throw new WebSocketException('Websocket ping-pong is not supported in JS engine.');
    },
    set: function (f) {
      throw new WebSocketException('Websocket ping-pong is not supported in JS engine.');
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'timeoutMillis', {
    configurable: true,
    get: function () {
      throw new WebSocketException('Websocket timeout is not supported in JS engine.');
    },
    set: function (f) {
      throw new WebSocketException('Websocket timeout is not supported in JS engine.');
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'masking', {
    configurable: true,
    get: function () {
      return true;
    },
    set: function (f) {
      throw new WebSocketException('Masking switch is not supported in JS engine.');
    }
  });
  Object.defineProperty(JsWebSocketSession.prototype, 'maxFrameSize', {
    configurable: true,
    get: function () {
      return Long$Companion$MAX_VALUE;
    },
    set: function (f) {
      throw new WebSocketException('Max frame size switch is not supported in Js engine.');
    }
  });
  JsWebSocketSession.prototype.start_wwqcjq$$default = function (negotiatedExtensions) {
    if (!negotiatedExtensions.isEmpty()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init(message.toString());
    }
  };
  JsWebSocketSession.prototype.flush = function (continuation) {
  };
  JsWebSocketSession.prototype.terminate = function () {
    this._incoming_0.cancel_x5z25k$();
    this._outgoing_0.cancel_x5z25k$();
    cancel_2(this._closeReason_0, 'WebSocket terminated');
    this.websocket_0.close();
  };
  JsWebSocketSession.prototype.isReservedStatusCode_0 = function ($receiver) {
    var resolved = CloseReason$Codes.Companion.byCode_mq22fl$($receiver);
    return resolved == null || equals(resolved, CloseReason$Codes.CLOSED_ABNORMALLY);
  };
  function JsWebSocketSession_init$lambda(this$JsWebSocketSession) {
    return function (it) {
      var tmp$;
      var event = it;
      var data = event.data;
      if (Kotlin.isType(data, ArrayBuffer)) {
        tmp$ = Frame$Frame$Binary_init(false, new Int8Array(data));
      } else if (typeof data === 'string')
        tmp$ = Frame$Frame$Text_init(data);
      else {
        var error = IllegalStateException_init('Unknown frame type: ' + event.type);
        this$JsWebSocketSession._closeReason_0.completeExceptionally_tcv7n7$(error);
        throw error;
      }
      var frame = tmp$;
      this$JsWebSocketSession._incoming_0.trySend_11rb$(frame);
      return Unit;
    };
  }
  function JsWebSocketSession_init$lambda_0(this$JsWebSocketSession) {
    return function (it) {
      var cause = new WebSocketException(it.toString());
      this$JsWebSocketSession._closeReason_0.completeExceptionally_tcv7n7$(cause);
      this$JsWebSocketSession._incoming_0.close_dbl4no$(cause);
      this$JsWebSocketSession._outgoing_0.cancel_x5z25k$();
      return Unit;
    };
  }
  function JsWebSocketSession_init$lambda_1(this$JsWebSocketSession) {
    return function (event) {
      var tmp$, tmp$_0;
      var reason = new CloseReason(typeof (tmp$ = event.code) === 'number' ? tmp$ : throwCCE(), typeof (tmp$_0 = event.reason) === 'string' ? tmp$_0 : throwCCE());
      this$JsWebSocketSession._closeReason_0.complete_11rb$(reason);
      this$JsWebSocketSession._incoming_0.trySend_11rb$(Frame$Frame$Close_init(reason));
      this$JsWebSocketSession._incoming_0.close_dbl4no$();
      this$JsWebSocketSession._outgoing_0.cancel_x5z25k$();
      return Unit;
    };
  }
  function Coroutine$JsWebSocketSession_init$lambda(this$JsWebSocketSession_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 8;
    this.local$this$JsWebSocketSession = this$JsWebSocketSession_0;
    this.local$$receiver = void 0;
    this.local$cause = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsWebSocketSession_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsWebSocketSession_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsWebSocketSession_init$lambda.prototype.constructor = Coroutine$JsWebSocketSession_init$lambda;
  Coroutine$JsWebSocketSession_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = this.local$this$JsWebSocketSession._outgoing_0;
            this.local$cause = null;
            this.exceptionState_0 = 5;
            this.local$tmp$ = this.local$$receiver.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            if (!this.result_0) {
              this.state_0 = 4;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var e_0 = this.local$tmp$.next();
            var this$JsWebSocketSession = this.local$this$JsWebSocketSession;
            var tmp$;
            switch (e_0.frameType.name) {
              case 'TEXT':
                var text = e_0.data;
                this$JsWebSocketSession.websocket_0.send(String_0(text));
                break;
              case 'BINARY':
                var source = Kotlin.isType(tmp$ = e_0.data, Int8Array) ? tmp$ : throwCCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this$JsWebSocketSession.websocket_0.send(frameData);
                break;
              case 'CLOSE':
                var buildPacket$result;
                var builder = new BytePacketBuilder();
                try {
                  writeFully_0(builder, e_0.data);
                  buildPacket$result = builder.build();
                } catch (t) {
                  if (Kotlin.isType(t, Throwable)) {
                    builder.release();
                    throw t;
                  } else
                    throw t;
                }

                var data = buildPacket$result;
                var code = readShort(data);
                var reason = data.readText_vux9f0$();
                this$JsWebSocketSession._closeReason_0.complete_11rb$(new CloseReason(code, reason));
                if (this$JsWebSocketSession.isReservedStatusCode_0(code)) {
                  this$JsWebSocketSession.websocket_0.close();
                } else {
                  this$JsWebSocketSession.websocket_0.close(code, reason);
                }

                break;
              case 'PING':
              case 'PONG':
                break;
            }

            this.state_0 = 1;
            continue;
          case 4:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [7];
            this.state_0 = 6;
            continue;
          case 5:
            this.finallyPath_0 = [8];
            this.exceptionState_0 = 6;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Throwable)) {
              this.local$cause = e_2;
              throw e_2;
            } else
              throw e_2;
          case 6:
            this.exceptionState_0 = 8;
            cancelConsumed(this.local$$receiver, this.local$cause);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            this.result_0 = Unit;
            return this.result_0;
          case 8:
            throw this.exception_0;
          default:
            this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 8) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JsWebSocketSession_init$lambda_2(this$JsWebSocketSession_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JsWebSocketSession_init$lambda(this$JsWebSocketSession_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function JsWebSocketSession_init$lambda_3(this$JsWebSocketSession) {
    return function (cause) {
      if (cause == null) {
        this$JsWebSocketSession.websocket_0.close();
      } else {
        this$JsWebSocketSession.websocket_0.close(CloseReason$Codes.INTERNAL_ERROR.code, 'Client failed');
      }
      return Unit;
    };
  }
  JsWebSocketSession.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsWebSocketSession',
    interfaces: [DefaultWebSocketSession]
  };
  function clientDispatcher($receiver, threadCount, dispatcherName) {
    if (dispatcherName === void 0)
      dispatcherName = 'ktor-client-dispatcher';
    return $receiver.Unconfined;
  }
  function unwrapCancellationException($receiver) {
    return $receiver;
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$client = package$ktor.client || (package$ktor.client = {});
  package$client.HttpClient_744i18$ = HttpClient;
  package$client.HttpClient_rh9o9d$ = HttpClient_0;
  package$client.HttpClient_init_qii15z$ = HttpClient_init;
  package$client.HttpClient = HttpClient_1;
  package$client.HttpClientConfig = HttpClientConfig;
  var package$call = package$client.call || (package$client.call = {});
  package$call.receive_26a8z0$ = receive_1;
  Object.defineProperty(HttpClientCall, 'Companion', {
    get: HttpClientCall$Companion_getInstance
  });
  package$call.HttpClientCall_init_nfutnc$ = HttpClientCall_init;
  package$call.HttpClientCall = HttpClientCall;
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = $module$ktor_ktor_utils_js_legacy;
  package$call.body_vx6uev$ = body_1;
  package$call.DoubleReceiveException = DoubleReceiveException;
  package$call.ReceivePipelineException = ReceivePipelineException;
  package$call.NoTransformationFoundException = NoTransformationFoundException;
  package$call.SavedHttpCall = SavedHttpCall;
  package$call.SavedHttpRequest = SavedHttpRequest;
  package$call.SavedHttpResponse = SavedHttpResponse;
  package$call.save_iicrl5$ = save;
  package$call.UnsupportedContentTypeException = UnsupportedContentTypeException;
  package$call.UnsupportedUpgradeProtocolException = UnsupportedUpgradeProtocolException;
  var package$content = package$client.content || (package$client.content = {});
  package$content.ObservableContent = ObservableContent;
  var package$engine = package$client.engine || (package$client.engine = {});
  Object.defineProperty(package$engine, 'CALL_COROUTINE_8be2vx$', {
    get: function () {
      return CALL_COROUTINE;
    }
  });
  Object.defineProperty(package$engine, 'CLIENT_CONFIG_8be2vx$', {
    get: function () {
      return CLIENT_CONFIG;
    }
  });
  $$importsForInline$$['ktor-ktor-client-core-js-legacy'] = _;
  package$engine.HttpClientEngine = HttpClientEngine;
  package$engine.HttpClientEngineFactory = HttpClientEngineFactory;
  package$engine.config_qszf4x$ = config;
  package$engine.createCallContext_antxd1$ = createCallContext;
  package$engine.HttpClientEngineBase = HttpClientEngineBase;
  package$engine.ClientEngineClosedException = ClientEngineClosedException;
  Object.defineProperty(package$engine, 'ENGINE_CAPABILITIES_KEY_8be2vx$', {
    get: function () {
      return ENGINE_CAPABILITIES_KEY;
    }
  });
  Object.defineProperty(package$engine, 'DEFAULT_CAPABILITIES', {
    get: function () {
      return DEFAULT_CAPABILITIES;
    }
  });
  package$engine.HttpClientEngineCapability = HttpClientEngineCapability;
  package$engine.HttpClientEngineConfig = HttpClientEngineConfig;
  Object.defineProperty(ProxyType, 'SOCKS', {
    get: ProxyType$SOCKS_getInstance
  });
  Object.defineProperty(ProxyType, 'HTTP', {
    get: ProxyType$HTTP_getInstance
  });
  Object.defineProperty(ProxyType, 'UNKNOWN', {
    get: ProxyType$UNKNOWN_getInstance
  });
  package$engine.ProxyType = ProxyType;
  package$engine.http_2mspj3$ = http_0;
  Object.defineProperty(package$engine, 'KTOR_DEFAULT_USER_AGENT', {
    get: function () {
      return KTOR_DEFAULT_USER_AGENT;
    }
  });
  package$engine.mergeHeaders_kqv6tz$ = mergeHeaders;
  package$engine.callContext = callContext;
  Object.defineProperty(KtorCallContextElement, 'Companion', {
    get: KtorCallContextElement$Companion_getInstance
  });
  package$engine.KtorCallContextElement = KtorCallContextElement;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$engine.attachToUserJob_mmkme6$ = attachToUserJob;
  var package$network = package$client.network || (package$client.network = {});
  var package$sockets = package$network.sockets || (package$network.sockets = {});
  package$sockets.mapEngineExceptions_g5e7iu$ = mapEngineExceptions;
  package$sockets.mapEngineExceptions_ijr7bl$ = mapEngineExceptions_0;
  Object.defineProperty(BodyProgress, 'Plugin', {
    get: BodyProgress$Plugin_getInstance
  });
  var package$plugins = package$client.plugins || (package$client.plugins = {});
  package$plugins.BodyProgress = BodyProgress;
  package$plugins.withObservableDownload_qnpnm4$ = withObservableDownload;
  package$plugins.onDownload_5hoavf$ = onDownload;
  package$plugins.onUpload_5hoavf$ = onUpload;
  Object.defineProperty(package$plugins, 'DataConversion', {
    get: DataConversion_getInstance
  });
  Object.defineProperty(DefaultRequest, 'Plugin', {
    get: DefaultRequest$Plugin_getInstance
  });
  DefaultRequest.DefaultRequestBuilder = DefaultRequest$DefaultRequestBuilder;
  package$plugins.DefaultRequest = DefaultRequest;
  package$plugins.defaultRequest_70yo6u$ = defaultRequest;
  package$plugins.addDefaultResponseValidation_bbdm9p$ = addDefaultResponseValidation;
  Object.defineProperty(package$plugins, 'NO_RESPONSE_TEXT_8be2vx$', {
    get: function () {
      return NO_RESPONSE_TEXT;
    }
  });
  Object.defineProperty(package$plugins, 'DEPRECATED_EXCEPTION_CTOR_8be2vx$', {
    get: function () {
      return DEPRECATED_EXCEPTION_CTOR;
    }
  });
  package$plugins.ResponseException_init_48zimp$ = ResponseException_init;
  package$plugins.ResponseException = ResponseException;
  package$plugins.RedirectResponseException_init_48zimp$ = RedirectResponseException_init;
  package$plugins.RedirectResponseException = RedirectResponseException;
  package$plugins.ServerResponseException_init_48zimp$ = ServerResponseException_init;
  package$plugins.ServerResponseException = ServerResponseException;
  package$plugins.ClientRequestException_init_48zimp$ = ClientRequestException_init;
  package$plugins.ClientRequestException = ClientRequestException;
  package$plugins.defaultTransformers_ejcypf$ = defaultTransformers;
  HttpCallValidator.Config = HttpCallValidator$Config;
  Object.defineProperty(HttpCallValidator, 'Companion', {
    get: HttpCallValidator$Companion_getInstance
  });
  package$plugins.HttpCallValidator = HttpCallValidator;
  package$plugins.HttpResponseValidator_44ieoj$ = HttpResponseValidator;
  package$plugins.get_expectSuccess_ocert9$ = get_expectSuccess;
  package$plugins.set_expectSuccess_wpsvw2$ = set_expectSuccess;
  Object.defineProperty(package$plugins, 'ExpectSuccessAttributeKey_8be2vx$', {
    get: function () {
      return ExpectSuccessAttributeKey;
    }
  });
  package$plugins.HandlerWrapper = HandlerWrapper;
  package$plugins.ExceptionHandlerWrapper = ExceptionHandlerWrapper;
  package$plugins.RequestExceptionHandlerWrapper = RequestExceptionHandlerWrapper;
  Object.defineProperty(package$plugins, 'PLUGIN_INSTALLED_LIST_8be2vx$', {
    get: function () {
      return PLUGIN_INSTALLED_LIST;
    }
  });
  package$plugins.HttpClientPlugin = HttpClientPlugin;
  package$plugins.pluginOrNull_dd3wyz$ = pluginOrNull;
  package$plugins.plugin_dd3wyz$ = plugin;
  HttpPlainText.Config = HttpPlainText$Config;
  Object.defineProperty(HttpPlainText, 'Plugin', {
    get: HttpPlainText$Plugin_getInstance
  });
  package$plugins.HttpPlainText = HttpPlainText;
  package$plugins.Charsets_zgjn62$ = Charsets;
  HttpRedirect.Config = HttpRedirect$Config;
  Object.defineProperty(HttpRedirect, 'Plugin', {
    get: HttpRedirect$Plugin_getInstance
  });
  package$plugins.HttpRedirect = HttpRedirect;
  Object.defineProperty(HttpRequestLifecycle, 'Plugin', {
    get: HttpRequestLifecycle$Plugin_getInstance
  });
  package$plugins.HttpRequestLifecycle = HttpRequestLifecycle;
  HttpRequestRetry.ShouldRetryContext = HttpRequestRetry$ShouldRetryContext;
  HttpRequestRetry.DelayContext = HttpRequestRetry$DelayContext;
  HttpRequestRetry.ModifyRequestContext = HttpRequestRetry$ModifyRequestContext;
  HttpRequestRetry.RetryEventData = HttpRequestRetry$RetryEventData;
  HttpRequestRetry.Configuration = HttpRequestRetry$Configuration;
  Object.defineProperty(HttpRequestRetry, 'Plugin', {
    get: HttpRequestRetry$Plugin_getInstance
  });
  package$plugins.HttpRequestRetry = HttpRequestRetry;
  package$plugins.retry_csl518$ = retry;
  package$plugins.Sender = Sender;
  HttpSend.Config = HttpSend$Config;
  Object.defineProperty(HttpSend, 'Plugin', {
    get: HttpSend$Plugin_getInstance
  });
  package$plugins.HttpSend = HttpSend;
  package$plugins.SendCountExceedException = SendCountExceedException;
  Object.defineProperty(HttpTimeout$HttpTimeoutCapabilityConfiguration, 'Companion', {
    get: HttpTimeout$HttpTimeoutCapabilityConfiguration$Companion_getInstance
  });
  HttpTimeout.HttpTimeoutCapabilityConfiguration_init_oq4a4q$ = HttpTimeout$HttpTimeout$HttpTimeoutCapabilityConfiguration_init;
  HttpTimeout.HttpTimeoutCapabilityConfiguration = HttpTimeout$HttpTimeoutCapabilityConfiguration;
  Object.defineProperty(HttpTimeout, 'Plugin', {
    get: HttpTimeout$Plugin_getInstance
  });
  package$plugins.HttpTimeout = HttpTimeout;
  package$plugins.timeout_xuctv$ = timeout;
  package$plugins.HttpRequestTimeoutException_init_s9rlw$ = HttpRequestTimeoutException_init;
  package$plugins.HttpRequestTimeoutException_init_dkgphz$ = HttpRequestTimeoutException_init_0;
  package$plugins.HttpRequestTimeoutException = HttpRequestTimeoutException;
  package$plugins.ConnectTimeoutException_nkaggn$ = ConnectTimeoutException;
  package$plugins.ConnectTimeoutException_214kh0$ = ConnectTimeoutException_0;
  package$plugins.SocketTimeoutException_nkaggn$ = SocketTimeoutException;
  package$plugins.convertLongTimeoutToIntWithInfiniteAsZero_s8cxhz$ = convertLongTimeoutToIntWithInfiniteAsZero;
  package$plugins.convertLongTimeoutToLongWithInfiniteAsZero_s8cxhz$ = convertLongTimeoutToLongWithInfiniteAsZero;
  var package$utils = package$client.utils || (package$client.utils = {});
  package$utils.unwrapCancellationException_dbl4o4$ = unwrapCancellationException;
  package$plugins.unwrapRequestTimeoutException_klfg04$ = unwrapRequestTimeoutException;
  UserAgent.Config = UserAgent$Config;
  Object.defineProperty(UserAgent, 'Plugin', {
    get: UserAgent$Plugin_getInstance
  });
  package$plugins.UserAgent = UserAgent;
  package$plugins.BrowserUserAgent_bbdm9p$ = BrowserUserAgent;
  package$plugins.CurlUserAgent_bbdm9p$ = CurlUserAgent;
  var package$cache = package$plugins.cache || (package$plugins.cache = {});
  Object.defineProperty(package$cache, 'CacheControl', {
    get: CacheControl_getInstance
  });
  HttpCache.Config = HttpCache$Config;
  Object.defineProperty(HttpCache, 'Companion', {
    get: HttpCache$Companion_getInstance
  });
  package$cache.HttpCache = HttpCache;
  package$cache.InvalidCacheStateException = InvalidCacheStateException;
  package$cache.HttpCacheEntry_5mhyb0$ = HttpCacheEntry;
  $$importsForInline$$['ktor-ktor-http-js-legacy'] = $module$ktor_ktor_http_js_legacy;
  package$cache.HttpCacheEntry = HttpCacheEntry_0;
  package$cache.varyKeys_wb8fhh$ = varyKeys;
  package$cache.cacheExpires_73wl2z$ = cacheExpires;
  package$cache.shouldValidate_rxrmmn$ = shouldValidate;
  var package$storage = package$cache.storage || (package$cache.storage = {});
  Object.defineProperty(package$storage, 'DisabledCacheStorage', {
    get: DisabledCacheStorage_getInstance
  });
  Object.defineProperty(HttpCacheStorage, 'Companion', {
    get: HttpCacheStorage$Companion_getInstance
  });
  package$storage.HttpCacheStorage = HttpCacheStorage;
  package$storage.store_4cafnn$ = store;
  package$storage.UnlimitedCacheStorage = UnlimitedCacheStorage;
  var package$cookies = package$plugins.cookies || (package$plugins.cookies = {});
  package$cookies.AcceptAllCookiesStorage = AcceptAllCookiesStorage;
  package$cookies.ConstantCookiesStorage = ConstantCookiesStorage;
  package$cookies.CookiesStorage = CookiesStorage;
  package$cookies.addCookie_ydiped$ = addCookie;
  package$cookies.matches_hkbsw1$ = matches;
  package$cookies.fillDefaults_hkbsw1$ = fillDefaults;
  HttpCookies.Config = HttpCookies$Config;
  Object.defineProperty(HttpCookies, 'Companion', {
    get: HttpCookies$Companion_getInstance
  });
  package$cookies.HttpCookies = HttpCookies;
  package$cookies.cookies_4av9u2$ = cookies;
  package$cookies.cookies_660qol$ = cookies_0;
  package$cookies.get_h6ajkg$ = get_0;
  var package$observer = package$plugins.observer || (package$plugins.observer = {});
  package$observer.wrapWithContent_4e6wbo$ = wrapWithContent;
  package$observer.wrapWithContent_e4hb7v$ = wrapWithContent_0;
  package$observer.wrapWithContent_hinyhb$ = wrapWithContent_1;
  package$observer.DelegatedCall = DelegatedCall;
  package$observer.DelegatedRequest = DelegatedRequest;
  package$observer.DelegatedResponse = DelegatedResponse;
  ResponseObserver.Config = ResponseObserver$Config;
  Object.defineProperty(ResponseObserver, 'Plugin', {
    get: ResponseObserver$Plugin_getInstance
  });
  package$observer.ResponseObserver = ResponseObserver;
  package$observer.ResponseObserver_y67bb3$ = ResponseObserver_0;
  var package$websocket = package$plugins.websocket || (package$plugins.websocket = {});
  package$websocket.ClientWebSocketSession = ClientWebSocketSession;
  package$websocket.DefaultClientWebSocketSession = DefaultClientWebSocketSession;
  package$websocket.DelegatingClientWebSocketSession = DelegatingClientWebSocketSession;
  package$websocket.get_converter_vw5opa$ = get_converter;
  $$importsForInline$$['ktor-ktor-serialization-js-legacy'] = $module$ktor_ktor_serialization_js_legacy;
  $$importsForInline$$['ktor-ktor-websocket-serialization-js-legacy'] = $module$ktor_ktor_websocket_serialization_js_legacy;
  package$websocket.WebSocketContent = WebSocketContent;
  Object.defineProperty(package$websocket, 'WebSocketCapability', {
    get: WebSocketCapability_getInstance
  });
  Object.defineProperty(package$websocket, 'WebSocketExtensionsCapability', {
    get: WebSocketExtensionsCapability_getInstance
  });
  WebSockets.Config = WebSockets$Config;
  Object.defineProperty(WebSockets, 'Plugin', {
    get: WebSockets$Plugin_getInstance
  });
  package$websocket.WebSockets_init_3pjtqy$ = WebSockets_init;
  package$websocket.WebSockets_init = WebSockets_init_0;
  package$websocket.WebSockets = WebSockets;
  package$websocket.WebSocketException = WebSocketException;
  package$websocket.WebSockets_n145kc$ = WebSockets_0;
  package$websocket.webSocketSession_uxii9k$ = webSocketSession;
  package$websocket.webSocketSession_se50ds$ = webSocketSession_0;
  package$websocket.webSocketSession_7cz7zq$ = webSocketSession_1;
  package$websocket.webSocket_vs36k0$ = webSocket;
  package$websocket.webSocket_z2dzuw$ = webSocket_0;
  package$websocket.webSocket_ada30e$ = webSocket_1;
  package$websocket.ws_z2dzuw$ = ws;
  package$websocket.ws_vs36k0$ = ws_0;
  package$websocket.ws_ada30e$ = ws_1;
  package$websocket.wss_vs36k0$ = wss;
  package$websocket.wss_ada30e$ = wss_0;
  package$websocket.wss_z2dzuw$ = wss_1;
  var package$request = package$client.request || (package$client.request = {});
  package$request.ClientUpgradeContent = ClientUpgradeContent;
  package$request.DefaultHttpRequest = DefaultHttpRequest;
  package$request.HttpRequest = HttpRequest_0;
  Object.defineProperty(HttpRequestBuilder, 'Companion', {
    get: HttpRequestBuilder$Companion_getInstance
  });
  package$request.HttpRequestBuilder = HttpRequestBuilder;
  package$request.HttpRequestData = HttpRequestData;
  package$request.HttpResponseData = HttpResponseData;
  package$request.headers_lm84jb$ = headers;
  package$request.takeFrom_1c2elq$ = takeFrom_2;
  package$request.url_vbrh3o$ = url;
  package$request.takeFrom_kzlv8c$ = takeFrom_3;
  package$request.invoke_qdb19q$ = invoke;
  package$request.url_77nkxq$ = url_0;
  package$request.invoke_aiai9s$ = invoke_0;
  package$request.url_g8iu3v$ = url_1;
  package$request.isUpgradeRequest_5kadeu$ = isUpgradeRequest;
  Object.defineProperty(HttpRequestPipeline, 'Phases', {
    get: HttpRequestPipeline$Phases_getInstance
  });
  package$request.HttpRequestPipeline = HttpRequestPipeline;
  Object.defineProperty(HttpSendPipeline, 'Phases', {
    get: HttpSendPipeline$Phases_getInstance
  });
  package$request.HttpSendPipeline = HttpSendPipeline;
  Object.defineProperty(package$request, 'BodyTypeAttributeKey_8be2vx$', {
    get: function () {
      return BodyTypeAttributeKey;
    }
  });
  package$request.request_30bfl5$ = request;
  package$request.prepareRequest_30bfl5$ = prepareRequest;
  package$request.request_uxii9k$ = request_0;
  package$request.prepareRequest_uxii9k$ = prepareRequest_0;
  package$request.request_7cz7zq$ = request_1;
  package$request.prepareRequest_7cz7zq$ = prepareRequest_1;
  package$request.url_qpqkqe$ = url_2;
  package$request.request_9weqol$ = request_2;
  package$request.prepareRequest_9weqol$ = prepareRequest_2;
  package$request.get_30bfl5$ = get_1;
  package$request.post_30bfl5$ = post;
  package$request.put_30bfl5$ = put;
  package$request.delete_30bfl5$ = delete_0;
  package$request.options_30bfl5$ = options;
  package$request.patch_30bfl5$ = patch;
  package$request.head_30bfl5$ = head;
  package$request.prepareGet_30bfl5$ = prepareGet;
  package$request.preparePost_30bfl5$ = preparePost;
  package$request.preparePut_30bfl5$ = preparePut;
  package$request.prepareDelete_30bfl5$ = prepareDelete;
  package$request.prepareOptions_30bfl5$ = prepareOptions;
  package$request.preparePatch_30bfl5$ = preparePatch;
  package$request.prepareHead_30bfl5$ = prepareHead;
  package$request.get_uxii9k$ = get_2;
  package$request.post_uxii9k$ = post_0;
  package$request.put_uxii9k$ = put_0;
  package$request.delete_uxii9k$ = delete_1;
  package$request.options_uxii9k$ = options_0;
  package$request.patch_uxii9k$ = patch_0;
  package$request.head_uxii9k$ = head_0;
  package$request.prepareGet_uxii9k$ = prepareGet_0;
  package$request.preparePost_uxii9k$ = preparePost_0;
  package$request.preparePut_uxii9k$ = preparePut_0;
  package$request.prepareDelete_uxii9k$ = prepareDelete_0;
  package$request.prepareOptions_uxii9k$ = prepareOptions_0;
  package$request.preparePatch_uxii9k$ = preparePatch_0;
  package$request.prepareHead_uxii9k$ = prepareHead_0;
  package$request.request_2kdidn$ = request_3;
  package$request.get_7cz7zq$ = get_3;
  package$request.post_7cz7zq$ = post_1;
  package$request.put_7cz7zq$ = put_1;
  package$request.delete_7cz7zq$ = delete_2;
  package$request.options_7cz7zq$ = options_1;
  package$request.patch_7cz7zq$ = patch_1;
  package$request.head_7cz7zq$ = head_1;
  package$request.prepareGet_7cz7zq$ = prepareGet_1;
  package$request.preparePost_7cz7zq$ = preparePost_1;
  package$request.preparePut_7cz7zq$ = preparePut_1;
  package$request.prepareDelete_7cz7zq$ = prepareDelete_1;
  package$request.prepareOptions_7cz7zq$ = prepareOptions_1;
  package$request.preparePatch_7cz7zq$ = preparePatch_1;
  package$request.prepareHead_7cz7zq$ = prepareHead_1;
  package$request.get_9weqol$ = get_4;
  package$request.prepareGet_9weqol$ = prepareGet_2;
  package$request.post_9weqol$ = post_2;
  package$request.preparePost_9weqol$ = preparePost_2;
  package$request.put_9weqol$ = put_2;
  package$request.preparePut_9weqol$ = preparePut_2;
  package$request.patch_9weqol$ = patch_2;
  package$request.preparePatch_9weqol$ = preparePatch_2;
  package$request.options_9weqol$ = options_2;
  package$request.prepareOptions_9weqol$ = prepareOptions_2;
  package$request.head_9weqol$ = head_2;
  package$request.prepareHead_9weqol$ = prepareHead_2;
  package$request.delete_9weqol$ = delete_3;
  package$request.prepareDelete_9weqol$ = prepareDelete_2;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  var package$forms = package$request.forms || (package$request.forms = {});
  package$forms.FormDataContent = FormDataContent;
  package$forms.MultiPartFormDataContent = MultiPartFormDataContent;
  package$forms.submitForm_9i20zh$ = submitForm;
  package$forms.submitForm_wk4whd$ = submitForm_0;
  package$forms.submitFormWithBinaryData_ln1qgv$ = submitFormWithBinaryData;
  package$forms.submitFormWithBinaryData_rrwb9t$ = submitFormWithBinaryData_0;
  package$forms.prepareForm_9i20zh$ = prepareForm;
  package$forms.prepareForm_wk4whd$ = prepareForm_0;
  package$forms.prepareFormWithBinaryData_ln1qgv$ = prepareFormWithBinaryData;
  package$forms.prepareFormWithBinaryData_rrwb9t$ = prepareFormWithBinaryData_0;
  package$forms.FormPart = FormPart;
  package$forms.formData_l3ed5z$ = formData;
  package$forms.formData_hut2op$ = formData_0;
  package$forms.FormBuilder = FormBuilder;
  package$forms.append_4vwixh$ = append;
  package$forms.InputProvider = InputProvider;
  package$forms.ChannelProvider = ChannelProvider;
  package$forms.append_d311l7$ = append_0;
  package$request.get_host_ocert9$ = get_host;
  package$request.set_host_g8iu3v$ = set_host;
  package$request.get_port_ocert9$ = get_port;
  package$request.set_port_7bct3p$ = set_port;
  package$request.header_rpxout$ = header;
  package$request.cookie_fpw88e$ = cookie;
  package$request.parameter_xadl6p$ = parameter;
  package$request.accept_41kwpe$ = accept;
  package$request.basicAuth_5uwi09$ = basicAuth;
  package$request.bearerAuth_qpfjxl$ = bearerAuth;
  var package$statement = package$client.statement || (package$client.statement = {});
  package$statement.readText_rjorc7$ = readText_0;
  package$statement.DefaultHttpResponse = DefaultHttpResponse;
  package$statement.HttpResponse = HttpResponse;
  package$statement.get_request_abn2de$ = get_request;
  package$statement.complete_abn2de$ = complete;
  package$statement.bodyAsText_89yka0$ = bodyAsText;
  package$statement.bodyAsChannel_abn2de$ = bodyAsChannel;
  Object.defineProperty(HttpResponsePipeline, 'Phases', {
    get: HttpResponsePipeline$Phases_getInstance
  });
  package$statement.HttpResponsePipeline = HttpResponsePipeline;
  Object.defineProperty(HttpReceivePipeline, 'Phases', {
    get: HttpReceivePipeline$Phases_getInstance
  });
  package$statement.HttpReceivePipeline = HttpReceivePipeline;
  package$statement.HttpResponseContainer = HttpResponseContainer;
  package$statement.HttpStatement = HttpStatement;
  package$statement.readBytes_j8kr8g$ = readBytes_0;
  package$statement.readBytes_abn2de$ = readBytes_1;
  package$statement.discardRemaining_abn2de$ = discardRemaining;
  package$utils.observable_joo1j6$ = observable;
  Object.defineProperty(package$utils, 'DEFAULT_HTTP_POOL_SIZE', {
    get: function () {
      return DEFAULT_HTTP_POOL_SIZE;
    }
  });
  Object.defineProperty(package$utils, 'DEFAULT_HTTP_BUFFER_SIZE', {
    get: function () {
      return DEFAULT_HTTP_BUFFER_SIZE;
    }
  });
  Object.defineProperty(package$utils, 'CacheControl', {
    get: CacheControl_getInstance_0
  });
  Object.defineProperty(package$utils, 'HttpRequestCreated', {
    get: function () {
      return HttpRequestCreated;
    }
  });
  Object.defineProperty(package$utils, 'HttpRequestIsReadyForSending', {
    get: function () {
      return HttpRequestIsReadyForSending;
    }
  });
  Object.defineProperty(package$utils, 'HttpResponseReceived', {
    get: function () {
      return HttpResponseReceived;
    }
  });
  package$utils.HttpResponseReceiveFail = HttpResponseReceiveFail;
  Object.defineProperty(package$utils, 'HttpResponseReceiveFailed', {
    get: function () {
      return HttpResponseReceiveFailed;
    }
  });
  Object.defineProperty(package$utils, 'HttpResponseCancelled', {
    get: function () {
      return HttpResponseCancelled;
    }
  });
  Object.defineProperty(package$utils, 'EmptyContent', {
    get: EmptyContent_getInstance
  });
  package$utils.wrapHeaders_j1n6iz$ = wrapHeaders;
  package$utils.buildHeaders_g6xk4w$ = buildHeaders;
  package$client.HttpClient_f0veat$ = HttpClient_2;
  package$engine.ProxyConfig = ProxyConfig;
  Object.defineProperty(package$engine, 'ProxyBuilder', {
    get: ProxyBuilder_getInstance
  });
  package$engine.resolveAddress_axu49q$ = resolveAddress;
  package$engine.get_type_axu49q$ = get_type;
  var package$js = package$engine.js || (package$engine.js = {});
  Object.defineProperty(package$js, 'Js', {
    get: Js_getInstance
  });
  package$js.JsClient = JsClient;
  package$js.JsClientEngine = JsClientEngine;
  package$js.JsError = JsError;
  package$js.toRaw_kenwlq$ = toRaw;
  package$js.buildObject_ymnom6$ = buildObject;
  package$js.asByteArray_es0py6$ = asByteArray;
  var package$browser = package$js.browser || (package$js.browser = {});
  package$browser.readBodyBrowser_qitd22$ = readBodyBrowser;
  package$browser.channelFromStream_qgv9rp$ = channelFromStream;
  package$browser.readChunk_blugp5$ = readChunk;
  var package$compatibility = package$js.compatibility || (package$js.compatibility = {});
  package$compatibility.commonFetch_gzh8gj$ = commonFetch;
  package$compatibility.AbortController_8be2vx$ = AbortController_0;
  package$compatibility.readBody_qitd22$ = readBody;
  var package$node = package$js.node || (package$js.node = {});
  package$node.readBodyNode_qitd22$ = readBodyNode;
  var package$fetch = package$client.fetch || (package$client.fetch = {});
  package$fetch.invoke_jvo5iz$ = invoke_1;
  package$fetch.get_1nqz5t$ = get_5;
  package$fetch.set_uwgz9l$ = set_0;
  package$fetch.get_vmghym$ = get_6;
  package$fetch.set_y4mcs4$ = set_1;
  package$sockets.ConnectTimeoutException = ConnectTimeoutException_1;
  package$sockets.SocketTimeoutException = SocketTimeoutException_0;
  package$sockets.ByteChannelWithMappedExceptions_zh1zd2$ = ByteChannelWithMappedExceptions;
  package$plugins.platformRequestDefaultTransform_mb9ulc$ = platformRequestDefaultTransform;
  package$plugins.platformResponseDefaultTransformers_h1fxjk$ = platformResponseDefaultTransformers;
  package$observer.getResponseObserverContext_8be2vx$ = getResponseObserverContext;
  package$websocket.JsWebSocketSession = JsWebSocketSession;
  package$utils.clientDispatcher_b7msz$ = clientDispatcher;
  config$ObjectLiteral.prototype.create_dxyxif$ = HttpClientEngineFactory.prototype.create_dxyxif$;
  Object.defineProperty(HttpClientEngineBase.prototype, 'supportedCapabilities', Object.getOwnPropertyDescriptor(HttpClientEngine.prototype, 'supportedCapabilities'));
  HttpClientEngineBase.prototype.install_k5i6f8$ = HttpClientEngine.prototype.install_k5i6f8$;
  HttpClientEngineBase.prototype.executeWithinCallContext_2kaaho$_0 = HttpClientEngine.prototype.executeWithinCallContext_2kaaho$_0;
  HttpClientEngineBase.prototype.checkExtensions_1320zn$_0 = HttpClientEngine.prototype.checkExtensions_1320zn$_0;
  KtorCallContextElement.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  KtorCallContextElement.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  KtorCallContextElement.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  KtorCallContextElement.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  BodyProgress$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  DataConversion_0.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  DefaultRequest$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpCallValidator$Companion.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  Object.defineProperty(HttpRequest$ObjectLiteral.prototype, 'coroutineContext', Object.getOwnPropertyDescriptor(HttpRequest_0.prototype, 'coroutineContext'));
  HttpPlainText$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpRedirect$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpRequestLifecycle$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpRequestRetry$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpSend$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpTimeout$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  UserAgent$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpCache$Companion.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  HttpCookies$Companion.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  ResponseObserver$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  ClientWebSocketSession.prototype.send_q1ubw4$ = WebSocketSession.prototype.send_q1ubw4$;
  DefaultClientWebSocketSession.prototype.start_wwqcjq$ = DefaultWebSocketSession.prototype.start_wwqcjq$;
  WebSockets$Plugin.prototype.prepare_oh3mgy$ = HttpClientPlugin.prototype.prepare_oh3mgy$;
  Js.prototype.create_dxyxif$ = HttpClientEngineFactory.prototype.create_dxyxif$;
  JsClientEngine.prototype.executeWithinCallContext_2kaaho$_0 = HttpClientEngine.prototype.executeWithinCallContext_2kaaho$_0;
  JsClientEngine.prototype.checkExtensions_1320zn$_0 = HttpClientEngine.prototype.checkExtensions_1320zn$_0;
  JsWebSocketSession.prototype.send_q1ubw4$ = DefaultWebSocketSession.prototype.send_q1ubw4$;
  JsWebSocketSession.prototype.start_wwqcjq$ = DefaultWebSocketSession.prototype.start_wwqcjq$;
  CALL_COROUTINE = new CoroutineName('call-context');
  CLIENT_CONFIG = new AttributeKey('client-config');
  ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
  DEFAULT_CAPABILITIES = setOf(HttpTimeout$Plugin_getInstance());
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
  DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
  ValidateMark = new AttributeKey('ValidateMark');
  NO_RESPONSE_TEXT = '<no response text provided>';
  DEPRECATED_EXCEPTION_CTOR = 'Please, provide response text in constructor';
  ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
  PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
  ALLOWED_FOR_REDIRECT = setOf_0([HttpMethod.Companion.Get, HttpMethod.Companion.Head]);
  MaxRetriesPerRequestAttributeKey = new AttributeKey('MaxRetriesPerRequestAttributeKey');
  ShouldRetryPerRequestAttributeKey = new AttributeKey('ShouldRetryPerRequestAttributeKey');
  ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey('ShouldRetryOnExceptionPerRequestAttributeKey');
  ModifyRequestPerRequestAttributeKey = new AttributeKey('ModifyRequestPerRequestAttributeKey');
  RetryDelayPerRequestAttributeKey = new AttributeKey('RetryDelayPerRequestAttributeKey');
  WEBSOCKET_VERSION = '13';
  NONCE_SIZE = 16;
  REQUEST_EXTENSIONS_KEY = new AttributeKey('Websocket extensions');
  BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
  var charset_1;
  var toByteArray$result;
  toByteArray$break: do {
    charset_1 = charsets.Charsets.UTF_8;
    if (charset_1 != null ? charset_1.equals(charsets.Charsets.UTF_8) : null) {
      toByteArray$result = encodeToByteArray('\r\n');
      break toByteArray$break;
    }
    toByteArray$result = encodeToByteArray_0(charset_1.newEncoder(), '\r\n', 0, '\r\n'.length);
  }
   while (false);
  RN_BYTES = toByteArray$result;
  DEFAULT_HTTP_POOL_SIZE = 1000;
  DEFAULT_HTTP_BUFFER_SIZE = 4096;
  HttpRequestCreated = new EventDefinition();
  HttpRequestIsReadyForSending = new EventDefinition();
  HttpResponseReceived = new EventDefinition();
  HttpResponseReceiveFailed = new EventDefinition();
  HttpResponseCancelled = new EventDefinition();
  Kotlin.defineModule('ktor-ktor-client-core-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-legacy.js.map
