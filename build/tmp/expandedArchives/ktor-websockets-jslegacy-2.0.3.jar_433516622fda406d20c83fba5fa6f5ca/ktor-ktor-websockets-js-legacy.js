(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'ktor-ktor-io-js-legacy', 'ktor-ktor-utils-js-legacy', 'kotlinx-atomicfu'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktor-ktor-io-js-legacy'), require('ktor-ktor-utils-js-legacy'), require('kotlinx-atomicfu'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets-js-legacy'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-websockets-js-legacy'.");
    }
    root['ktor-ktor-websockets-js-legacy'] = factory(typeof this['ktor-ktor-websockets-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-websockets-js-legacy'], kotlin, this['kotlinx-coroutines-core'], this['ktor-ktor-io-js-legacy'], this['ktor-ktor-utils-js-legacy'], this['kotlinx-atomicfu']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktor_ktor_io_js_legacy, $module$ktor_ktor_utils_js_legacy, $module$kotlinx_atomicfu) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var L15000 = Kotlin.Long.fromInt(15000);
  var CoroutineName = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineName;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var cancel = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_q2ti5d$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Unit = Kotlin.kotlin.Unit;
  var BytePacketBuilder = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder;
  var ensureNotNull = Kotlin.ensureNotNull;
  var writeFully = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeFully_i6snlg$;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var ClosedSendChannelException = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.ClosedSendChannelException;
  var Throwable = Error;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var CoroutineStart = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineStart;
  var ClosedReceiveChannelException = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.ClosedReceiveChannelException;
  var CancellationException = Kotlin.kotlin.coroutines.cancellation.CancellationException;
  var ChannelIOException = $module$ktor_ktor_utils_js_legacy.io.ktor.util.cio.ChannelIOException;
  var CancellationException_init = Kotlin.kotlin.coroutines.cancellation.CancellationException_init_wspj0f$;
  var L0 = Kotlin.Long.ZERO;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$ref$1;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_lsve6m$;
  var atomic_0 = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$boolean$1;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  var Job_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var cancelConsumed = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.cancelConsumed_v57n85$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var decode = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.decode_lb8wo3$;
  var readShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readShort_7wsnj1$;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var initCauseBridge = $module$ktor_ktor_utils_js_legacy.io.ktor.util.internal.initCauseBridge_oh0dqn$;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var CopyableThrowable = $module$kotlinx_coroutines_core.kotlinx.coroutines.CopyableThrowable;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var Array_0 = Array;
  var getTimeMillis = $module$ktor_ktor_utils_js_legacy.io.ktor.util.date.getTimeMillis;
  var Random = Kotlin.kotlin.random.Random_s8cxhz$;
  var withTimeoutOrNull = $module$kotlinx_coroutines_core.kotlinx.coroutines.withTimeoutOrNull_ms3uf5$;
  var hex = $module$ktor_ktor_utils_js_legacy.io.ktor.util.hex_fqrh44$;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var equals = Kotlin.equals;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var encodeToByteArray_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var ChannelWriteException = $module$ktor_ktor_utils_js_legacy.io.ktor.util.cio.ChannelWriteException;
  var close = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var EOFException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.EOFException;
  var toByte = Kotlin.toByte;
  var toShort = Kotlin.toShort;
  var Random_0 = Kotlin.kotlin.random.Random;
  var L65535 = Kotlin.Long.fromInt(65535);
  var bits = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.bits;
  var ByteReadPacket = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.ByteReadPacket_1qge3v$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var writeShort = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeShort_9kfkzl$;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  CloseReason$Codes.prototype = Object.create(Enum.prototype);
  CloseReason$Codes.prototype.constructor = CloseReason$Codes;
  FrameTooBigException.prototype = Object.create(Exception.prototype);
  FrameTooBigException.prototype.constructor = FrameTooBigException;
  FrameType.prototype = Object.create(Enum.prototype);
  FrameType.prototype.constructor = FrameType;
  Frame$Binary.prototype = Object.create(Frame.prototype);
  Frame$Binary.prototype.constructor = Frame$Binary;
  Frame$Text.prototype = Object.create(Frame.prototype);
  Frame$Text.prototype.constructor = Frame$Text;
  Frame$Close.prototype = Object.create(Frame.prototype);
  Frame$Close.prototype.constructor = Frame$Close;
  Frame$Ping.prototype = Object.create(Frame.prototype);
  Frame$Ping.prototype.constructor = Frame$Ping;
  Frame$Pong.prototype = Object.create(Frame.prototype);
  Frame$Pong.prototype.constructor = Frame$Pong;
  function CloseReason(code, message) {
    this.code = code;
    this.message = message;
  }
  Object.defineProperty(CloseReason.prototype, 'knownReason', {
    configurable: true,
    get: function () {
      return CloseReason$Codes$Companion_getInstance().byCode_mq22fl$(this.code);
    }
  });
  CloseReason.prototype.toString = function () {
    var tmp$;
    return 'CloseReason(reason=' + ((tmp$ = this.knownReason) != null ? tmp$ : this.code).toString() + ', message=' + this.message + ')';
  };
  function CloseReason$Codes(name, ordinal, code) {
    Enum.call(this);
    this.code = code;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CloseReason$Codes_initFields() {
    CloseReason$Codes_initFields = function () {
    };
    CloseReason$Codes$NORMAL_instance = new CloseReason$Codes('NORMAL', 0, 1000);
    CloseReason$Codes$GOING_AWAY_instance = new CloseReason$Codes('GOING_AWAY', 1, 1001);
    CloseReason$Codes$PROTOCOL_ERROR_instance = new CloseReason$Codes('PROTOCOL_ERROR', 2, 1002);
    CloseReason$Codes$CANNOT_ACCEPT_instance = new CloseReason$Codes('CANNOT_ACCEPT', 3, 1003);
    CloseReason$Codes$CLOSED_ABNORMALLY_instance = new CloseReason$Codes('CLOSED_ABNORMALLY', 4, 1006);
    CloseReason$Codes$NOT_CONSISTENT_instance = new CloseReason$Codes('NOT_CONSISTENT', 5, 1007);
    CloseReason$Codes$VIOLATED_POLICY_instance = new CloseReason$Codes('VIOLATED_POLICY', 6, 1008);
    CloseReason$Codes$TOO_BIG_instance = new CloseReason$Codes('TOO_BIG', 7, 1009);
    CloseReason$Codes$NO_EXTENSION_instance = new CloseReason$Codes('NO_EXTENSION', 8, 1010);
    CloseReason$Codes$INTERNAL_ERROR_instance = new CloseReason$Codes('INTERNAL_ERROR', 9, 1011);
    CloseReason$Codes$SERVICE_RESTART_instance = new CloseReason$Codes('SERVICE_RESTART', 10, 1012);
    CloseReason$Codes$TRY_AGAIN_LATER_instance = new CloseReason$Codes('TRY_AGAIN_LATER', 11, 1013);
    CloseReason$Codes$Companion_getInstance();
  }
  var CloseReason$Codes$NORMAL_instance;
  function CloseReason$Codes$NORMAL_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$NORMAL_instance;
  }
  var CloseReason$Codes$GOING_AWAY_instance;
  function CloseReason$Codes$GOING_AWAY_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$GOING_AWAY_instance;
  }
  var CloseReason$Codes$PROTOCOL_ERROR_instance;
  function CloseReason$Codes$PROTOCOL_ERROR_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$PROTOCOL_ERROR_instance;
  }
  var CloseReason$Codes$CANNOT_ACCEPT_instance;
  function CloseReason$Codes$CANNOT_ACCEPT_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$CANNOT_ACCEPT_instance;
  }
  var CloseReason$Codes$CLOSED_ABNORMALLY_instance;
  function CloseReason$Codes$CLOSED_ABNORMALLY_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$CLOSED_ABNORMALLY_instance;
  }
  var CloseReason$Codes$NOT_CONSISTENT_instance;
  function CloseReason$Codes$NOT_CONSISTENT_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$NOT_CONSISTENT_instance;
  }
  var CloseReason$Codes$VIOLATED_POLICY_instance;
  function CloseReason$Codes$VIOLATED_POLICY_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$VIOLATED_POLICY_instance;
  }
  var CloseReason$Codes$TOO_BIG_instance;
  function CloseReason$Codes$TOO_BIG_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$TOO_BIG_instance;
  }
  var CloseReason$Codes$NO_EXTENSION_instance;
  function CloseReason$Codes$NO_EXTENSION_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$NO_EXTENSION_instance;
  }
  var CloseReason$Codes$INTERNAL_ERROR_instance;
  function CloseReason$Codes$INTERNAL_ERROR_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$INTERNAL_ERROR_instance;
  }
  var CloseReason$Codes$SERVICE_RESTART_instance;
  function CloseReason$Codes$SERVICE_RESTART_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$SERVICE_RESTART_instance;
  }
  var CloseReason$Codes$TRY_AGAIN_LATER_instance;
  function CloseReason$Codes$TRY_AGAIN_LATER_getInstance() {
    CloseReason$Codes_initFields();
    return CloseReason$Codes$TRY_AGAIN_LATER_instance;
  }
  function CloseReason$Codes$Companion() {
    CloseReason$Codes$Companion_instance = this;
    var $receiver = CloseReason$Codes$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.code, element);
    }
    this.byCodeMap_0 = destination;
    this.UNEXPECTED_CONDITION = CloseReason$Codes$INTERNAL_ERROR_getInstance();
  }
  CloseReason$Codes$Companion.prototype.byCode_mq22fl$ = function (code) {
    return this.byCodeMap_0.get_11rb$(code);
  };
  CloseReason$Codes$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CloseReason$Codes$Companion_instance = null;
  function CloseReason$Codes$Companion_getInstance() {
    CloseReason$Codes_initFields();
    if (CloseReason$Codes$Companion_instance === null) {
      new CloseReason$Codes$Companion();
    }
    return CloseReason$Codes$Companion_instance;
  }
  CloseReason$Codes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Codes',
    interfaces: [Enum]
  };
  function CloseReason$Codes$values() {
    return [CloseReason$Codes$NORMAL_getInstance(), CloseReason$Codes$GOING_AWAY_getInstance(), CloseReason$Codes$PROTOCOL_ERROR_getInstance(), CloseReason$Codes$CANNOT_ACCEPT_getInstance(), CloseReason$Codes$CLOSED_ABNORMALLY_getInstance(), CloseReason$Codes$NOT_CONSISTENT_getInstance(), CloseReason$Codes$VIOLATED_POLICY_getInstance(), CloseReason$Codes$TOO_BIG_getInstance(), CloseReason$Codes$NO_EXTENSION_getInstance(), CloseReason$Codes$INTERNAL_ERROR_getInstance(), CloseReason$Codes$SERVICE_RESTART_getInstance(), CloseReason$Codes$TRY_AGAIN_LATER_getInstance()];
  }
  CloseReason$Codes.values = CloseReason$Codes$values;
  function CloseReason$Codes$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return CloseReason$Codes$NORMAL_getInstance();
      case 'GOING_AWAY':
        return CloseReason$Codes$GOING_AWAY_getInstance();
      case 'PROTOCOL_ERROR':
        return CloseReason$Codes$PROTOCOL_ERROR_getInstance();
      case 'CANNOT_ACCEPT':
        return CloseReason$Codes$CANNOT_ACCEPT_getInstance();
      case 'CLOSED_ABNORMALLY':
        return CloseReason$Codes$CLOSED_ABNORMALLY_getInstance();
      case 'NOT_CONSISTENT':
        return CloseReason$Codes$NOT_CONSISTENT_getInstance();
      case 'VIOLATED_POLICY':
        return CloseReason$Codes$VIOLATED_POLICY_getInstance();
      case 'TOO_BIG':
        return CloseReason$Codes$TOO_BIG_getInstance();
      case 'NO_EXTENSION':
        return CloseReason$Codes$NO_EXTENSION_getInstance();
      case 'INTERNAL_ERROR':
        return CloseReason$Codes$INTERNAL_ERROR_getInstance();
      case 'SERVICE_RESTART':
        return CloseReason$Codes$SERVICE_RESTART_getInstance();
      case 'TRY_AGAIN_LATER':
        return CloseReason$Codes$TRY_AGAIN_LATER_getInstance();
      default:
        throwISE('No enum constant io.ktor.websocket.CloseReason.Codes.' + name);
    }
  }
  CloseReason$Codes.valueOf_61zpoe$ = CloseReason$Codes$valueOf;
  CloseReason.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloseReason',
    interfaces: []
  };
  function CloseReason_init(code, message, $this) {
    $this = $this || Object.create(CloseReason.prototype);
    CloseReason.call($this, code.code, message);
    return $this;
  }
  CloseReason.prototype.component1 = function () {
    return this.code;
  };
  CloseReason.prototype.component2 = function () {
    return this.message;
  };
  CloseReason.prototype.copy_qid81t$ = function (code, message) {
    return new CloseReason(code === void 0 ? this.code : code, message === void 0 ? this.message : message);
  };
  CloseReason.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  CloseReason.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.message, other.message)))));
  };
  function DefaultWebSocketSession() {
  }
  DefaultWebSocketSession.prototype.start_wwqcjq$ = function (negotiatedExtensions, callback$default) {
    if (negotiatedExtensions === void 0)
      negotiatedExtensions = emptyList();
    callback$default ? callback$default(negotiatedExtensions) : this.start_wwqcjq$$default(negotiatedExtensions);
  };
  DefaultWebSocketSession.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DefaultWebSocketSession',
    interfaces: [WebSocketSession]
  };
  function DefaultWebSocketSession_0(session, pingInterval, timeoutMillis) {
    if (pingInterval === void 0)
      pingInterval = L_1;
    if (timeoutMillis === void 0)
      timeoutMillis = L15000;
    if (!!Kotlin.isType(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init(message.toString());
    }
    return new DefaultWebSocketSessionImpl(session, pingInterval, timeoutMillis);
  }
  var IncomingProcessorCoroutineName;
  var OutgoingProcessorCoroutineName;
  var NORMAL_CLOSE;
  function DefaultWebSocketSessionImpl(raw, pingInterval, timeoutMillis) {
    DefaultWebSocketSessionImpl$Companion_getInstance();
    this.raw_0 = raw;
    this.pinger_0 = atomic(null);
    this.closeReasonRef_0 = CompletableDeferred();
    this.filtered_0 = Channel(8);
    this.outgoingToBeProcessed_0 = Channel(8);
    this.closed_0 = atomic_0(false);
    this.context_0 = Job_0(this.raw_0.coroutineContext.get_j3r2sn$(Job.Key));
    this._extensions_0 = ArrayList_init();
    this.started_0 = atomic_0(false);
    this.coroutineContext_e1jcv0$_0 = this.raw_0.coroutineContext.plus_1fupul$(this.context_0).plus_1fupul$(new CoroutineName('ws-default'));
    this.pingIntervalMillis_3oq8ke$_0 = pingInterval;
    this.timeoutMillis_jqpwcu$_0 = timeoutMillis;
    this.closeReason_rkke7x$_0 = this.closeReasonRef_0;
  }
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'incoming', {
    configurable: true,
    get: function () {
      return this.filtered_0;
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'outgoing', {
    configurable: true,
    get: function () {
      return this.outgoingToBeProcessed_0;
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'extensions', {
    configurable: true,
    get: function () {
      return this._extensions_0;
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_e1jcv0$_0;
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'masking', {
    configurable: true,
    get: function () {
      return this.raw_0.masking;
    },
    set: function (value) {
      this.raw_0.masking = value;
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'maxFrameSize', {
    configurable: true,
    get: function () {
      return this.raw_0.maxFrameSize;
    },
    set: function (value) {
      this.raw_0.maxFrameSize = value;
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'pingIntervalMillis', {
    configurable: true,
    get: function () {
      return this.pingIntervalMillis_3oq8ke$_0;
    },
    set: function (newValue) {
      this.pingIntervalMillis_3oq8ke$_0 = newValue;
      this.runOrCancelPinger_0();
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'timeoutMillis', {
    configurable: true,
    get: function () {
      return this.timeoutMillis_jqpwcu$_0;
    },
    set: function (newValue) {
      this.timeoutMillis_jqpwcu$_0 = newValue;
      this.runOrCancelPinger_0();
    }
  });
  Object.defineProperty(DefaultWebSocketSessionImpl.prototype, 'closeReason', {
    configurable: true,
    get: function () {
      return this.closeReason_rkke7x$_0;
    }
  });
  DefaultWebSocketSessionImpl.prototype.start_wwqcjq$$default = function (negotiatedExtensions) {
    if (!this.started_0.atomicfu$compareAndSet(false, true)) {
      throw IllegalStateException_init('WebSocket session is already started.'.toString());
    }
    this._extensions_0.addAll_brywnq$(negotiatedExtensions);
    this.runOrCancelPinger_0();
    this.runIncomingProcessor_0(ponger(this, this.outgoing));
    this.runOutgoingProcessor_0();
  };
  function Coroutine$goingAway_61zpoe$($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$goingAway_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$goingAway_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$goingAway_61zpoe$.prototype.constructor = Coroutine$goingAway_61zpoe$;
  Coroutine$goingAway_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$message === void 0)
              this.local$message = 'Server is going down';
            this.state_0 = 2;
            this.result_0 = this.$this.sendCloseSequence_0(CloseReason_init(CloseReason$Codes$GOING_AWAY_getInstance(), this.local$message), this);
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
  DefaultWebSocketSessionImpl.prototype.goingAway_61zpoe$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$goingAway_61zpoe$(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$flush($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$flush.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flush.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flush.prototype.constructor = Coroutine$flush;
  Coroutine$flush.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.raw_0.flush(this);
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
  DefaultWebSocketSessionImpl.prototype.flush = function (continuation_0, suspended) {
    var instance = new Coroutine$flush(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultWebSocketSessionImpl.prototype.terminate = function () {
    this.context_0.cancel_x5z25k$();
    cancel(this.raw_0);
  };
  function Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda(this$DefaultWebSocketSessionImpl_0, closure$ponger_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 32;
    this.local$this$DefaultWebSocketSessionImpl = this$DefaultWebSocketSessionImpl_0;
    this.local$closure$ponger = closure$ponger_0;
    this.local$last = void 0;
    this.local$closeFramePresented = void 0;
    this.local$$receiver = void 0;
    this.local$cause = void 0;
    this.local$tmp$ = void 0;
    this.local$e = void 0;
    this.local$this$DefaultWebSocketSessionImpl_0 = void 0;
    this.local$closure$ponger_0 = void 0;
  }
  Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda.prototype.constructor = Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda;
  Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$last = {v: null};
            this.local$closeFramePresented = {v: false};
            this.exceptionState_0 = 2;
            this.local$$receiver = this.local$this$DefaultWebSocketSessionImpl.raw_0.incoming;
            this.local$cause = null;
            this.exceptionState_0 = 1;
            this.local$tmp$ = this.local$$receiver.iterator();
            this.state_0 = 11;
            continue;
          case 1:
            this.finallyPath_0 = [2];
            this.exceptionState_0 = 26;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Throwable)) {
              this.local$cause = e_2;
              throw e_2;
            } else
              throw e_2;
          case 2:
            this.finallyPath_0 = [32];
            this.exceptionState_0 = 7;
            var ignore = this.exception_0;
            if (Kotlin.isType(ignore, ClosedSendChannelException)) {
              this.exceptionState_0 = 32;
              this.finallyPath_0 = [5];
              this.state_0 = 7;
              this.$returnValue = Unit;
              continue;
            } else {
              if (Kotlin.isType(ignore, Throwable)) {
                var cause = ignore;
                this.local$closure$ponger.close_dbl4no$();
                this.exceptionState_0 = 32;
                this.finallyPath_0 = [3];
                this.state_0 = 7;
                this.$returnValue = this.local$this$DefaultWebSocketSessionImpl.filtered_0.close_dbl4no$(cause);
                continue;
              } else {
                throw ignore;
              }
            }

          case 3:
            return this.$returnValue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return this.$returnValue;
          case 6:
            this.finallyPath_0 = [31];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 32;
            this.local$closure$ponger.close_dbl4no$();
            (tmp$ = this.local$last.v) != null ? (tmp$.release(), Unit) : null;
            this.local$this$DefaultWebSocketSessionImpl.filtered_0.close_dbl4no$();
            if (!this.local$closeFramePresented.v) {
              this.state_0 = 29;
              this.result_0 = close_0(this.local$this$DefaultWebSocketSessionImpl, CloseReason_init(CloseReason$Codes$CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 30;
              continue;
            }

          case 8:
            return;
          case 9:
            if (!false) {
              this.state_0 = 10;
              continue;
            }

            this.state_0 = 14;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            if (!this.result_0) {
              this.state_0 = 25;
              continue;
            } else {
              this.state_0 = 13;
              continue;
            }

          case 13:
            this.local$e = this.local$tmp$.next();
            this.local$this$DefaultWebSocketSessionImpl_0 = this.local$this$DefaultWebSocketSessionImpl;
            this.local$closure$ponger_0 = this.local$closure$ponger;
            this.state_0 = 14;
            continue;
          case 14:
            var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            if (Kotlin.isType(this.local$e, Frame$Close)) {
              if (!this.local$this$DefaultWebSocketSessionImpl_0.outgoing.isClosedForSend) {
                this.state_0 = 23;
                this.result_0 = this.local$this$DefaultWebSocketSessionImpl_0.outgoing.send_11rb$(Frame$Frame$Close_init((tmp$_0 = readReason(this.local$e)) != null ? tmp$_0 : NORMAL_CLOSE), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 24;
                continue;
              }
            } else {
              if (Kotlin.isType(this.local$e, Frame$Pong)) {
                if ((tmp$_1 = this.local$this$DefaultWebSocketSessionImpl_0.pinger_0.kotlinx$atomicfu$value) != null) {
                  this.state_0 = 20;
                  this.result_0 = tmp$_1.send_11rb$(this.local$e, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.result_0 = null;
                  this.state_0 = 21;
                  continue;
                }
              } else {
                if (Kotlin.isType(this.local$e, Frame$Ping)) {
                  this.state_0 = 18;
                  this.result_0 = this.local$closure$ponger_0.send_11rb$(this.local$e, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.state_0 = 15;
                  this.result_0 = this.local$this$DefaultWebSocketSessionImpl_0.checkMaxFrameSize_0(this.local$last.v, this.local$e, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
              }
            }

          case 15:
            if (!this.local$e.fin) {
              if (this.local$last.v == null) {
                this.local$last.v = new BytePacketBuilder();
              }
              writeFully(ensureNotNull(this.local$last.v), this.local$e.data);
              this.state_0 = 10;
              continue;
            } else {
              this.state_0 = 16;
              continue;
            }

          case 16:
            var tmp$_4;
            if ((tmp$_2 = this.local$last.v) != null) {
              writeFully(tmp$_2, this.local$e.data);
              tmp$_4 = Frame$Companion_getInstance().byType_da1xm4$(true, this.local$e.frameType, readBytes(tmp$_2.build()), this.local$e.rsv1, this.local$e.rsv2, this.local$e.rsv3);
            } else
              tmp$_4 = null;
            var frameToSend = (tmp$_3 = tmp$_4) != null ? tmp$_3 : this.local$e;
            this.local$last.v = null;
            this.state_0 = 17;
            this.result_0 = this.local$this$DefaultWebSocketSessionImpl_0.filtered_0.send_11rb$(this.local$this$DefaultWebSocketSessionImpl_0.processIncomingExtensions_0(frameToSend), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.state_0 = 19;
            continue;
          case 18:
            this.state_0 = 19;
            continue;
          case 19:
            this.state_0 = 22;
            continue;
          case 20:
            this.result_0 = Unit;
            this.state_0 = 21;
            continue;
          case 21:
            this.state_0 = 22;
            continue;
          case 22:
            this.state_0 = 9;
            continue;
          case 23:
            this.state_0 = 24;
            continue;
          case 24:
            this.local$closeFramePresented.v = true;
            this.exceptionState_0 = 32;
            this.finallyPath_0 = [7, 8];
            this.state_0 = 26;
            continue;
          case 25:
            this.exceptionState_0 = 2;
            this.finallyPath_0 = [27];
            this.state_0 = 26;
            continue;
          case 26:
            this.exceptionState_0 = 2;
            cancelConsumed(this.local$$receiver, this.local$cause);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 27:
            this.result_0 = Unit;
            this.exceptionState_0 = 32;
            this.finallyPath_0 = [28];
            this.state_0 = 7;
            this.$returnValue = this.result_0;
            continue;
          case 28:
            return this.$returnValue;
          case 29:
            this.state_0 = 30;
            continue;
          case 30:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 31:
            return;
          case 32:
            throw this.exception_0;
          default:
            this.state_0 = 32;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 32) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$lambda(this$DefaultWebSocketSessionImpl_0, closure$ponger_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DefaultWebSocketSessionImpl$runIncomingProcessor$lambda(this$DefaultWebSocketSessionImpl_0, closure$ponger_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DefaultWebSocketSessionImpl.prototype.runIncomingProcessor_0 = function (ponger) {
    return launch(this, IncomingProcessorCoroutineName.plus_1fupul$(coroutines.Dispatchers.Unconfined), void 0, DefaultWebSocketSessionImpl$runIncomingProcessor$lambda(this, ponger));
  };
  function Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda(this$DefaultWebSocketSessionImpl_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 18;
    this.local$this$DefaultWebSocketSessionImpl = this$DefaultWebSocketSessionImpl_0;
  }
  Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda.prototype.constructor = Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda;
  Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$this$DefaultWebSocketSessionImpl.outgoingProcessorLoop_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 18;
            this.finallyPath_0 = [2];
            this.state_0 = 15;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            this.finallyPath_0 = [18];
            this.exceptionState_0 = 15;
            var ignore = this.exception_0;
            if (Kotlin.isType(ignore, ClosedSendChannelException)) {
              this.exceptionState_0 = 18;
              this.finallyPath_0 = [13];
              this.state_0 = 15;
              this.$returnValue = Unit;
              continue;
            } else {
              if (Kotlin.isType(ignore, ClosedReceiveChannelException)) {
                this.exceptionState_0 = 18;
                this.finallyPath_0 = [11];
                this.state_0 = 15;
                this.$returnValue = Unit;
                continue;
              } else {
                if (Kotlin.isType(ignore, CancellationException)) {
                  this.exceptionState_0 = 18;
                  this.finallyPath_0 = [9];
                  this.state_0 = 15;
                  this.$returnValue = Unit;
                  continue;
                } else {
                  if (Kotlin.isType(ignore, ChannelIOException)) {
                    this.exceptionState_0 = 18;
                    this.finallyPath_0 = [7];
                    this.state_0 = 15;
                    this.$returnValue = Unit;
                    continue;
                  } else {
                    if (Kotlin.isType(ignore, Throwable)) {
                      var cause = ignore;
                      this.local$this$DefaultWebSocketSessionImpl.outgoingToBeProcessed_0.cancel_x5z25k$(CancellationException_init('Failed to send frame', cause));
                      this.state_0 = 4;
                      this.result_0 = closeExceptionally(this.local$this$DefaultWebSocketSessionImpl.raw_0, cause, this);
                      if (this.result_0 === COROUTINE_SUSPENDED)
                        return COROUTINE_SUSPENDED;
                      continue;
                    } else {
                      throw ignore;
                    }
                  }
                }
              }
            }

          case 4:
            this.exceptionState_0 = 18;
            this.finallyPath_0 = [5];
            this.state_0 = 15;
            this.$returnValue = this.result_0;
            continue;
          case 5:
            return this.$returnValue;
          case 6:
            this.state_0 = 8;
            continue;
          case 7:
            return this.$returnValue;
          case 8:
            this.state_0 = 10;
            continue;
          case 9:
            return this.$returnValue;
          case 10:
            this.state_0 = 12;
            continue;
          case 11:
            return this.$returnValue;
          case 12:
            this.state_0 = 14;
            continue;
          case 13:
            return this.$returnValue;
          case 14:
            this.finallyPath_0 = [17];
            this.state_0 = 15;
            continue;
          case 15:
            this.exceptionState_0 = 18;
            this.local$this$DefaultWebSocketSessionImpl.outgoingToBeProcessed_0.cancel_x5z25k$();
            this.state_0 = 16;
            this.result_0 = close_0(this.local$this$DefaultWebSocketSessionImpl.raw_0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
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
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda(this$DefaultWebSocketSessionImpl_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda(this$DefaultWebSocketSessionImpl_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DefaultWebSocketSessionImpl.prototype.runOutgoingProcessor_0 = function () {
    return launch(this, OutgoingProcessorCoroutineName.plus_1fupul$(coroutines.Dispatchers.Unconfined), CoroutineStart.UNDISPATCHED, DefaultWebSocketSessionImpl$runOutgoingProcessor$lambda(this));
  };
  function Coroutine$outgoingProcessorLoop_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$outgoingProcessorLoop_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$outgoingProcessorLoop_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$outgoingProcessorLoop_0.prototype.constructor = Coroutine$outgoingProcessorLoop_0;
  Coroutine$outgoingProcessorLoop_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.outgoingToBeProcessed_0.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 8;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var frame = this.local$tmp$.next();
            if (Kotlin.isType(frame, Frame$Close)) {
              this.state_0 = 5;
              this.result_0 = this.$this.sendCloseSequence_0(readReason(frame), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(frame, Frame$Text) || Kotlin.isType(frame, Frame$Binary))
                this.local$tmp$_0 = this.$this.processOutgoingExtensions_0(frame);
              else
                this.local$tmp$_0 = frame;
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 8;
            continue;
          case 6:
            var processedFrame = this.local$tmp$_0;
            this.state_0 = 7;
            this.result_0 = this.$this.raw_0.outgoing.send_11rb$(processedFrame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 2;
            continue;
          case 8:
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
  DefaultWebSocketSessionImpl.prototype.outgoingProcessorLoop_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$outgoingProcessorLoop_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sendCloseSequence_0($this, reason_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$reasonToSend = void 0;
    this.local$reason = reason_0;
  }
  Coroutine$sendCloseSequence_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendCloseSequence_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendCloseSequence_0.prototype.constructor = Coroutine$sendCloseSequence_0;
  Coroutine$sendCloseSequence_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.$this.tryClose_0()) {
              return;
            } else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.$this.context_0.complete();
            this.local$reasonToSend = this.local$reason != null ? this.local$reason : CloseReason_init(CloseReason$Codes$NORMAL_getInstance(), '');
            this.exceptionState_0 = 5;
            this.$this.runOrCancelPinger_0();
            if (this.local$reasonToSend.code !== CloseReason$Codes$CLOSED_ABNORMALLY_getInstance().code) {
              this.state_0 = 2;
              this.result_0 = this.$this.raw_0.outgoing.send_11rb$(Frame$Frame$Close_init(this.local$reasonToSend), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [4];
            this.state_0 = 6;
            continue;
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [7];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 7;
            this.$this.closeReasonRef_0.complete_11rb$(this.local$reasonToSend);
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
  DefaultWebSocketSessionImpl.prototype.sendCloseSequence_0 = function (reason_0, continuation_0, suspended) {
    var instance = new Coroutine$sendCloseSequence_0(this, reason_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultWebSocketSessionImpl.prototype.tryClose_0 = function () {
    return this.closed_0.atomicfu$compareAndSet(false, true);
  };
  DefaultWebSocketSessionImpl.prototype.runOrCancelPinger_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var interval = this.pingIntervalMillis;
    if (this.closed_0.kotlinx$atomicfu$value)
      tmp$ = null;
    else if (interval.compareTo_11rb$(L0) > 0)
      tmp$ = pinger(this, this.raw_0.outgoing, interval, this.timeoutMillis);
    else
      tmp$ = null;
    var newPinger = tmp$;
    (tmp$_0 = this.pinger_0.atomicfu$getAndSet(newPinger)) != null ? tmp$_0.close_dbl4no$() : null;
    (tmp$_1 = newPinger != null ? newPinger.trySend_11rb$(DefaultWebSocketSessionImpl$Companion_getInstance().EmptyPong_0) : null) != null ? tmp$_1.isSuccess : null;
    if (this.closed_0.kotlinx$atomicfu$value && newPinger != null) {
      this.runOrCancelPinger_0();
    }
  };
  function Coroutine$checkMaxFrameSize_0($this, packet_0, frame_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$size = void 0;
    this.local$packet = packet_0;
    this.local$frame = frame_0;
  }
  Coroutine$checkMaxFrameSize_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$checkMaxFrameSize_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$checkMaxFrameSize_0.prototype.constructor = Coroutine$checkMaxFrameSize_0;
  Coroutine$checkMaxFrameSize_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$size = this.local$frame.data.length + ((tmp$ = this.local$packet != null ? this.local$packet.size : null) != null ? tmp$ : 0) | 0;
            if (this.local$size > this.$this.maxFrameSize.toNumber()) {
              this.local$packet != null ? (this.local$packet.release(), Unit) : null;
              this.state_0 = 2;
              this.result_0 = close_0(this.$this, CloseReason_init(CloseReason$Codes$TOO_BIG_getInstance(), 'Frame is too big: ' + this.local$size + '. Max size is ' + this.$this.maxFrameSize.toString()), this);
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
            throw new FrameTooBigException(Kotlin.Long.fromInt(this.local$size));
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
  DefaultWebSocketSessionImpl.prototype.checkMaxFrameSize_0 = function (packet_0, frame_0, continuation_0, suspended) {
    var instance = new Coroutine$checkMaxFrameSize_0(this, packet_0, frame_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultWebSocketSessionImpl.prototype.processIncomingExtensions_0 = function (frame) {
    var tmp$;
    var accumulator = frame;
    tmp$ = this.extensions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.processIncomingFrame_q1ubw4$(accumulator);
    }
    return accumulator;
  };
  DefaultWebSocketSessionImpl.prototype.processOutgoingExtensions_0 = function (frame) {
    var tmp$;
    var accumulator = frame;
    tmp$ = this.extensions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.processOutgoingFrame_q1ubw4$(accumulator);
    }
    return accumulator;
  };
  function DefaultWebSocketSessionImpl$Companion() {
    DefaultWebSocketSessionImpl$Companion_instance = this;
    this.EmptyPong_0 = new Frame$Pong(new Int8Array(0), NonDisposableHandle_getInstance());
  }
  DefaultWebSocketSessionImpl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DefaultWebSocketSessionImpl$Companion_instance = null;
  function DefaultWebSocketSessionImpl$Companion_getInstance() {
    if (DefaultWebSocketSessionImpl$Companion_instance === null) {
      new DefaultWebSocketSessionImpl$Companion();
    }
    return DefaultWebSocketSessionImpl$Companion_instance;
  }
  DefaultWebSocketSessionImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultWebSocketSessionImpl',
    interfaces: [DefaultWebSocketSession, WebSocketSession]
  };
  function readText($receiver) {
    if (!$receiver.fin) {
      var message = 'Text could be only extracted from non-fragmented frame';
      throw IllegalArgumentException_init(message.toString());
    }
    var tmp$ = charsets.Charsets.UTF_8.newDecoder();
    var buildPacket$result;
    var builder = new BytePacketBuilder();
    try {
      writeFully(builder, $receiver.data);
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return decode(tmp$, buildPacket$result);
  }
  function readBytes_0($receiver) {
    return $receiver.data.slice();
  }
  function readReason($receiver) {
    if ($receiver.data.length < 2) {
      return null;
    }
    var buildPacket$result;
    var builder = new BytePacketBuilder();
    try {
      writeFully(builder, $receiver.data);
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    var packet = buildPacket$result;
    var code = readShort(packet);
    var message = packet.readText_vux9f0$();
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose = function () {
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NonDisposableHandle',
    interfaces: [DisposableHandle]
  };
  var NonDisposableHandle_instance = null;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance === null) {
      new NonDisposableHandle();
    }
    return NonDisposableHandle_instance;
  }
  function FrameTooBigException(frameSize) {
    Exception_init(this);
    this.frameSize = frameSize;
    this.name = 'FrameTooBigException';
  }
  Object.defineProperty(FrameTooBigException.prototype, 'message', {
    configurable: true,
    get: function () {
      return 'Frame is too big: ' + this.frameSize.toString();
    }
  });
  FrameTooBigException.prototype.createCopy = function () {
    var $receiver = new FrameTooBigException(this.frameSize);
    initCauseBridge($receiver, this);
    return $receiver;
  };
  FrameTooBigException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameTooBigException',
    interfaces: [CopyableThrowable, Exception]
  };
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this);
    this.controlFrame = controlFrame;
    this.opcode = opcode;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FrameType_initFields() {
    FrameType_initFields = function () {
    };
    FrameType$TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType$BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType$CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType$PING_instance = new FrameType('PING', 3, true, 9);
    FrameType$PONG_instance = new FrameType('PONG', 4, true, 10);
    FrameType$Companion_getInstance();
  }
  var FrameType$TEXT_instance;
  function FrameType$TEXT_getInstance() {
    FrameType_initFields();
    return FrameType$TEXT_instance;
  }
  var FrameType$BINARY_instance;
  function FrameType$BINARY_getInstance() {
    FrameType_initFields();
    return FrameType$BINARY_instance;
  }
  var FrameType$CLOSE_instance;
  function FrameType$CLOSE_getInstance() {
    FrameType_initFields();
    return FrameType$CLOSE_instance;
  }
  var FrameType$PING_instance;
  function FrameType$PING_getInstance() {
    FrameType_initFields();
    return FrameType$PING_instance;
  }
  var FrameType$PONG_instance;
  function FrameType$PONG_getInstance() {
    FrameType_initFields();
    return FrameType$PONG_instance;
  }
  function FrameType$Companion() {
    FrameType$Companion_instance = this;
    var $receiver = FrameType$values();
    var maxByOrNull$result;
    maxByOrNull$break: do {
      if ($receiver.length === 0) {
        maxByOrNull$result = null;
        break maxByOrNull$break;
      }
      var maxElem = $receiver[0];
      var lastIndex = get_lastIndex($receiver);
      if (lastIndex === 0) {
        maxByOrNull$result = maxElem;
        break maxByOrNull$break;
      }
      var maxValue = maxElem.opcode;
      for (var i = 1; i <= lastIndex; i++) {
        var e = $receiver[i];
        var v = e.opcode;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxByOrNull$result = maxElem;
    }
     while (false);
    this.maxOpcode_0 = ensureNotNull(maxByOrNull$result).opcode;
    var array = Array_0(this.maxOpcode_0 + 1 | 0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    loop_label: for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      var $receiver_0 = FrameType$values();
      var singleOrNull$result;
      singleOrNull$break: do {
        var tmp$_0;
        var single = null;
        var found = false;
        for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
          var element = $receiver_0[tmp$_0];
          if (element.opcode === i_0) {
            if (found) {
              singleOrNull$result = null;
              break singleOrNull$break;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          singleOrNull$result = null;
          break singleOrNull$break;
        }
        singleOrNull$result = single;
      }
       while (false);
      array[i_0] = singleOrNull$result;
    }
    this.byOpcodeArray_0 = array;
  }
  FrameType$Companion.prototype.get_za3lpa$ = function (opcode) {
    var tmp$;
    tmp$ = this.maxOpcode_0;
    return 0 <= opcode && opcode <= tmp$ ? this.byOpcodeArray_0[opcode] : null;
  };
  FrameType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FrameType$Companion_instance = null;
  function FrameType$Companion_getInstance() {
    FrameType_initFields();
    if (FrameType$Companion_instance === null) {
      new FrameType$Companion();
    }
    return FrameType$Companion_instance;
  }
  FrameType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameType',
    interfaces: [Enum]
  };
  function FrameType$values() {
    return [FrameType$TEXT_getInstance(), FrameType$BINARY_getInstance(), FrameType$CLOSE_getInstance(), FrameType$PING_getInstance(), FrameType$PONG_getInstance()];
  }
  FrameType.values = FrameType$values;
  function FrameType$valueOf(name) {
    switch (name) {
      case 'TEXT':
        return FrameType$TEXT_getInstance();
      case 'BINARY':
        return FrameType$BINARY_getInstance();
      case 'CLOSE':
        return FrameType$CLOSE_getInstance();
      case 'PING':
        return FrameType$PING_getInstance();
      case 'PONG':
        return FrameType$PONG_getInstance();
      default:
        throwISE('No enum constant io.ktor.websocket.FrameType.' + name);
    }
  }
  FrameType.valueOf_61zpoe$ = FrameType$valueOf;
  var PongerCoroutineName;
  var PingerCoroutineName;
  function Coroutine$ponger$lambda(closure$channel_0, closure$outgoing_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 12;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$outgoing = closure$outgoing_0;
    this.local$$receiver = void 0;
    this.local$cause = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$ponger$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ponger$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ponger$lambda.prototype.constructor = Coroutine$ponger$lambda;
  Coroutine$ponger$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 9;
            this.local$$receiver = this.local$closure$channel;
            this.local$cause = null;
            this.exceptionState_0 = 6;
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
              this.state_0 = 5;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            var e_0 = this.local$tmp$.next();
            this.state_0 = 4;
            this.result_0 = this.local$closure$outgoing.send_11rb$(new Frame$Pong(e_0.data), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [8];
            this.state_0 = 7;
            continue;
          case 6:
            this.finallyPath_0 = [9];
            this.exceptionState_0 = 7;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Throwable)) {
              this.local$cause = e_2;
              throw e_2;
            } else
              throw e_2;
          case 7:
            this.exceptionState_0 = 9;
            cancelConsumed(this.local$$receiver, this.local$cause);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.result_0 = Unit;
            return this.result_0;
          case 9:
            this.exceptionState_0 = 12;
            var _ = this.exception_0;
            if (Kotlin.isType(_, ClosedSendChannelException)) {
              return Unit;
            } else {
              throw _;
            }

          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            return;
          case 12:
            throw this.exception_0;
          default:
            this.state_0 = 12;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 12) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ponger$lambda(closure$channel_0, closure$outgoing_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ponger$lambda(closure$channel_0, closure$outgoing_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ponger($receiver, outgoing) {
    var channel = Channel(5);
    launch($receiver, PongerCoroutineName, void 0, ponger$lambda(channel, outgoing));
    return channel;
  }
  function Coroutine$pinger$lambda$lambda(closure$channel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
  }
  Coroutine$pinger$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pinger$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pinger$lambda$lambda.prototype.constructor = Coroutine$pinger$lambda$lambda;
  Coroutine$pinger$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$closure$channel.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
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
  function pinger$lambda$lambda(closure$channel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$pinger$lambda$lambda(closure$channel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$pinger$lambda$lambda_0(closure$outgoing_0, closure$pingMessage_0, closure$channel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$outgoing = closure$outgoing_0;
    this.local$closure$pingMessage = closure$pingMessage_0;
    this.local$closure$channel = closure$channel_0;
  }
  Coroutine$pinger$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pinger$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pinger$lambda$lambda_0.prototype.constructor = Coroutine$pinger$lambda$lambda_0;
  Coroutine$pinger$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$closure$outgoing;
            var $receiver = this.local$closure$pingMessage;
            var charset = charsets.Charsets.ISO_8859_1;
            var toByteArray$result;
            toByteArray$break: do {
              if (charset != null ? charset.equals(charsets.Charsets.UTF_8) : null) {
                toByteArray$result = encodeToByteArray($receiver);
                break toByteArray$break;
              }
              toByteArray$result = encodeToByteArray_0(charset.newEncoder(), $receiver, 0, $receiver.length);
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$.send_11rb$(new Frame$Ping(toByteArray$result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$closure$channel.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var msg = this.result_0;
            if (equals(String_0(msg.data, void 0, void 0, charsets.Charsets.ISO_8859_1), this.local$closure$pingMessage)) {
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 3;
            continue;
          case 6:
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
  function pinger$lambda$lambda_0(closure$outgoing_0, closure$pingMessage_0, closure$channel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$pinger$lambda$lambda_0(closure$outgoing_0, closure$pingMessage_0, closure$channel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$pinger$lambda(closure$periodMillis_0, closure$channel_0, closure$timeoutMillis_0, closure$outgoing_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 12;
    this.local$closure$periodMillis = closure$periodMillis_0;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$timeoutMillis = closure$timeoutMillis_0;
    this.local$closure$outgoing = closure$outgoing_0;
    this.local$random = void 0;
    this.local$pingIdBytes = void 0;
  }
  Coroutine$pinger$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pinger$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pinger$lambda.prototype.constructor = Coroutine$pinger$lambda;
  Coroutine$pinger$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$random = Random(getTimeMillis());
            this.local$pingIdBytes = new Int8Array(32);
            this.exceptionState_0 = 7;
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = withTimeoutOrNull(this.local$closure$periodMillis, pinger$lambda$lambda(this.local$closure$channel), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$random.nextBytes_fqrh44$(this.local$pingIdBytes);
            var pingMessage = '[ping ' + hex(this.local$pingIdBytes) + ' ping]';
            this.state_0 = 3;
            this.result_0 = withTimeoutOrNull(this.local$closure$timeoutMillis, pinger$lambda$lambda_0(this.local$closure$outgoing, pingMessage, this.local$closure$channel), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var rc = this.result_0;
            if (rc == null) {
              var closeFrame = Frame$Frame$Close_init(CloseReason_init(CloseReason$Codes$INTERNAL_ERROR_getInstance(), 'Ping timeout'));
              this.state_0 = 4;
              this.result_0 = this.local$closure$outgoing.send_11rb$(closeFrame, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 1;
            continue;
          case 6:
            this.exceptionState_0 = 12;
            this.state_0 = 11;
            continue;
          case 7:
            this.exceptionState_0 = 12;
            var ignore = this.exception_0;
            if (Kotlin.isType(ignore, CancellationException)) {
              return Unit;
            } else {
              if (Kotlin.isType(ignore, ClosedReceiveChannelException)) {
                return Unit;
              } else {
                if (Kotlin.isType(ignore, ClosedSendChannelException)) {
                  return Unit;
                } else {
                  throw ignore;
                }
              }
            }

          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            return Unit;
          case 12:
            throw this.exception_0;
          default:
            this.state_0 = 12;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 12) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function pinger$lambda(closure$periodMillis_0, closure$channel_0, closure$timeoutMillis_0, closure$outgoing_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$pinger$lambda(closure$periodMillis_0, closure$channel_0, closure$timeoutMillis_0, closure$outgoing_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function pinger$lambda_0(closure$actorJob) {
    return function (it) {
      closure$actorJob.cancel_x5z25k$();
      return Unit;
    };
  }
  function pinger($receiver, outgoing, periodMillis, timeoutMillis) {
    var actorJob = Job_0();
    var channel = Channel(2147483647);
    launch($receiver, actorJob.plus_1fupul$(PingerCoroutineName), void 0, pinger$lambda(periodMillis, channel, timeoutMillis, outgoing));
    ensureNotNull($receiver.coroutineContext.get_j3r2sn$(Job.Key)).invokeOnCompletion_f05bi3$(pinger$lambda_0(actorJob));
    return channel;
  }
  function ByteReadPacket$lambda(it) {
    return Unit;
  }
  function RawWebSocketCommon(input, output, maxFrameSize, masking, coroutineContext) {
    if (maxFrameSize === void 0)
      maxFrameSize = L2147483647;
    if (masking === void 0)
      masking = false;
    this.input_0 = input;
    this.output_0 = output;
    this.maxFrameSize_bk9yz7$_0 = maxFrameSize;
    this.masking_w8hg6f$_0 = masking;
    this.socketJob_0 = Job_0(coroutineContext.get_j3r2sn$(Job.Key));
    this._incoming_0 = Channel(8);
    this._outgoing_0 = Channel(8);
    this.lastOpcode_0 = 0;
    this.coroutineContext_2cg00w$_0 = coroutineContext.plus_1fupul$(this.socketJob_0).plus_1fupul$(new CoroutineName('raw-ws'));
    this.writerJob_0 = launch(this, new CoroutineName('ws-writer'), CoroutineStart.ATOMIC, RawWebSocketCommon$writerJob$lambda(this));
    this.readerJob_0 = launch(this, new CoroutineName('ws-reader'), CoroutineStart.ATOMIC, RawWebSocketCommon$readerJob$lambda(this));
    this.socketJob_0.complete();
  }
  Object.defineProperty(RawWebSocketCommon.prototype, 'maxFrameSize', {
    get: function () {
      return this.maxFrameSize_bk9yz7$_0;
    },
    set: function (maxFrameSize) {
      this.maxFrameSize_bk9yz7$_0 = maxFrameSize;
    }
  });
  Object.defineProperty(RawWebSocketCommon.prototype, 'masking', {
    get: function () {
      return this.masking_w8hg6f$_0;
    },
    set: function (masking) {
      this.masking_w8hg6f$_0 = masking;
    }
  });
  Object.defineProperty(RawWebSocketCommon.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.coroutineContext_2cg00w$_0;
    }
  });
  Object.defineProperty(RawWebSocketCommon.prototype, 'incoming', {
    configurable: true,
    get: function () {
      return this._incoming_0;
    }
  });
  Object.defineProperty(RawWebSocketCommon.prototype, 'outgoing', {
    configurable: true,
    get: function () {
      return this._outgoing_0;
    }
  });
  Object.defineProperty(RawWebSocketCommon.prototype, 'extensions', {
    configurable: true,
    get: function () {
      return emptyList();
    }
  });
  function Coroutine$flush_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$$receiver = void 0;
  }
  Coroutine$flush_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$flush_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$flush_0.prototype.constructor = Coroutine$flush_0;
  Coroutine$flush_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new RawWebSocketCommon$FlushRequest(this.$this.coroutineContext.get_j3r2sn$(Job.Key));
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this._outgoing_0.send_11rb$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 2:
            this.exceptionState_0 = 7;
            var closed = this.exception_0;
            if (Kotlin.isType(closed, ClosedSendChannelException)) {
              this.local$$receiver.complete();
              this.state_0 = 3;
              this.result_0 = this.$this.writerJob_0.join(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(closed, Throwable)) {
                var sendFailure = closed;
                this.local$$receiver.complete();
                throw sendFailure;
              } else
                throw closed;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$$receiver.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            return this.result_0;
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
  RawWebSocketCommon.prototype.flush = function (continuation_0, suspended) {
    var instance = new Coroutine$flush_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RawWebSocketCommon.prototype.terminate = function () {
    this.outgoing.close_dbl4no$();
    this.socketJob_0.complete();
  };
  function RawWebSocketCommon$FlushRequest(parent) {
    this.done_0 = Job_0(parent);
  }
  RawWebSocketCommon$FlushRequest.prototype.complete = function () {
    return this.done_0.complete();
  };
  RawWebSocketCommon$FlushRequest.prototype.await = function (continuation) {
    return this.done_0.join(continuation);
  };
  RawWebSocketCommon$FlushRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlushRequest',
    interfaces: []
  };
  function Coroutine$RawWebSocketCommon$writerJob$lambda(this$RawWebSocketCommon_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 10;
    this.local$this$RawWebSocketCommon = this$RawWebSocketCommon_0;
    this.local$message = void 0;
  }
  Coroutine$RawWebSocketCommon$writerJob$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RawWebSocketCommon$writerJob$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RawWebSocketCommon$writerJob$lambda.prototype.constructor = Coroutine$RawWebSocketCommon$writerJob$lambda;
  Coroutine$RawWebSocketCommon$writerJob$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.exceptionState_0 = 7;
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$this$RawWebSocketCommon._outgoing_0.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$message = this.result_0;
            if (Kotlin.isType(this.local$message, Frame)) {
              this.state_0 = 3;
              this.result_0 = writeFrame(this.local$this$RawWebSocketCommon.output_0, this.local$message, this.local$this$RawWebSocketCommon.masking, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(this.local$message, RawWebSocketCommon$FlushRequest))
                this.local$message.complete();
              else
                throw IllegalArgumentException_init('unknown message ' + this.local$message.toString());
              this.state_0 = 5;
              continue;
            }

          case 3:
            this.local$this$RawWebSocketCommon.output_0.flush();
            if (Kotlin.isType(this.local$message, Frame$Close)) {
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 1;
            continue;
          case 6:
            this.local$this$RawWebSocketCommon._outgoing_0.close_dbl4no$();
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 7:
            this.finallyPath_0 = [10];
            this.exceptionState_0 = 8;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, ChannelWriteException)) {
              this.local$this$RawWebSocketCommon._outgoing_0.close_dbl4no$(CancellationException_init('Failed to write to WebSocket.', cause));
            } else if (Kotlin.isType(cause, Throwable)) {
              var t = cause;
              this.local$this$RawWebSocketCommon._outgoing_0.close_dbl4no$(t);
            } else
              throw cause;
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 10;
            this.local$this$RawWebSocketCommon._outgoing_0.close_dbl4no$(CancellationException_init('WebSocket closed.', null));
            close(this.local$this$RawWebSocketCommon.output_0);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            while (true) {
              tmp$ = this.local$this$RawWebSocketCommon._outgoing_0.tryReceive().getOrNull();
              if (tmp$ == null) {
                break;
              }
              var message = tmp$;
              if (Kotlin.isType(message, RawWebSocketCommon$FlushRequest))
                message.complete();
            }

            return Unit;
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
  function RawWebSocketCommon$writerJob$lambda(this$RawWebSocketCommon_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RawWebSocketCommon$writerJob$lambda(this$RawWebSocketCommon_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RawWebSocketCommon$readerJob$lambda(this$RawWebSocketCommon_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 18;
    this.local$this$RawWebSocketCommon = this$RawWebSocketCommon_0;
    this.local$cause = void 0;
  }
  Coroutine$RawWebSocketCommon$readerJob$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RawWebSocketCommon$readerJob$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RawWebSocketCommon$readerJob$lambda.prototype.constructor = Coroutine$RawWebSocketCommon$readerJob$lambda;
  Coroutine$RawWebSocketCommon$readerJob$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = readFrame(this.local$this$RawWebSocketCommon.input_0, this.local$this$RawWebSocketCommon.maxFrameSize, this.local$this$RawWebSocketCommon.lastOpcode_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var frame = this.result_0;
            if (!frame.frameType.controlFrame) {
              this.local$this$RawWebSocketCommon.lastOpcode_0 = frame.frameType.opcode;
            }

            this.state_0 = 3;
            this.result_0 = this.local$this$RawWebSocketCommon._incoming_0.send_11rb$(frame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 1;
            continue;
          case 4:
            this.finallyPath_0 = [18];
            this.exceptionState_0 = 16;
            this.local$cause = this.exception_0;
            if (Kotlin.isType(this.local$cause, FrameTooBigException)) {
              this.state_0 = 5;
              this.result_0 = this.local$this$RawWebSocketCommon.outgoing.send_11rb$(Frame$Frame$Close_init(CloseReason_init(CloseReason$Codes$TOO_BIG_getInstance(), this.local$cause.message)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (Kotlin.isType(this.local$cause, CancellationException)) {
                this.exceptionState_0 = 18;
                this.finallyPath_0 = [13];
                this.state_0 = 16;
                this.$returnValue = (this.local$this$RawWebSocketCommon._incoming_0.cancel_x5z25k$(this.local$cause), Unit);
                continue;
              } else {
                if (Kotlin.isType(this.local$cause, EOFException)) {
                  var eof = this.local$cause;
                  this.exceptionState_0 = 18;
                  this.finallyPath_0 = [11];
                  this.state_0 = 16;
                  this.$returnValue = Unit;
                  continue;
                } else {
                  if (Kotlin.isType(this.local$cause, ClosedReceiveChannelException)) {
                    var eof_0 = this.local$cause;
                    this.exceptionState_0 = 18;
                    this.finallyPath_0 = [9];
                    this.state_0 = 16;
                    this.$returnValue = Unit;
                    continue;
                  } else {
                    if (Kotlin.isType(this.local$cause, ChannelIOException)) {
                      var io = this.local$cause;
                      this.exceptionState_0 = 18;
                      this.finallyPath_0 = [7];
                      this.state_0 = 16;
                      this.$returnValue = (this.local$this$RawWebSocketCommon._incoming_0.cancel_x5z25k$(), Unit);
                      continue;
                    } else {
                      if (Kotlin.isType(this.local$cause, Throwable)) {
                        this.local$this$RawWebSocketCommon._incoming_0.close_dbl4no$(this.local$cause);
                        throw this.local$cause;
                      } else
                        throw this.local$cause;
                    }
                  }
                }
              }
            }

          case 5:
            this.exceptionState_0 = 18;
            this.finallyPath_0 = [6];
            this.state_0 = 16;
            this.$returnValue = this.local$this$RawWebSocketCommon._incoming_0.close_dbl4no$(this.local$cause);
            continue;
          case 6:
            return this.$returnValue;
          case 7:
            return this.$returnValue;
          case 8:
            this.state_0 = 10;
            continue;
          case 9:
            return this.$returnValue;
          case 10:
            this.state_0 = 12;
            continue;
          case 11:
            return this.$returnValue;
          case 12:
            this.state_0 = 14;
            continue;
          case 13:
            return this.$returnValue;
          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            this.finallyPath_0 = [17];
            this.state_0 = 16;
            continue;
          case 16:
            this.exceptionState_0 = 18;
            this.local$this$RawWebSocketCommon._incoming_0.close_dbl4no$();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 17:
            return Unit;
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
  function RawWebSocketCommon$readerJob$lambda(this$RawWebSocketCommon_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RawWebSocketCommon$readerJob$lambda(this$RawWebSocketCommon_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RawWebSocketCommon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RawWebSocketCommon',
    interfaces: [WebSocketSession]
  };
  function mask($receiver, maskKey) {
    var size_0 = Kotlin.Long.fromInt(4);
    var tmp$;
    var allocator = bits.DefaultAllocator;
    var memory = allocator.alloc_s8cxhz$(size_0);
    try {
      memory.view.setInt32(0, maskKey, false);
      var buildPacket$result;
      var builder = new BytePacketBuilder();
      try {
        var times = $receiver.remaining.toInt();
        for (var index = 0; index < times; index++) {
          var tmp$_0 = $receiver.readByte();
          var index_0 = index % 4;
          builder.writeByte_s8j3t7$(toByte(tmp$_0 ^ memory.view.getInt8(index_0)));
        }
        buildPacket$result = builder.build();
      } catch (t) {
        if (Kotlin.isType(t, Throwable)) {
          builder.release();
          throw t;
        } else
          throw t;
      }
      tmp$ = buildPacket$result;
    }finally {
      allocator.free_vn6nzs$(memory);
    }
    return tmp$;
  }
  function Coroutine$writeFrame($receiver_0, frame_0, masking_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_0 = void 0;
    this.local$length = void 0;
    this.local$formattedLength = void 0;
    this.local$data = void 0;
    this.local$maskKey = void 0;
    this.local$$receiver = $receiver_0;
    this.local$frame = frame_0;
    this.local$masking = masking_0;
  }
  Coroutine$writeFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeFrame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeFrame.prototype.constructor = Coroutine$writeFrame;
  Coroutine$writeFrame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$length = this.local$frame.data.length;
            var flagsAndOpcode = (this.local$frame.fin ? 1 << 7 : 0) | (this.local$frame.rsv1 ? 1 << 6 : 0) | (this.local$frame.rsv2 ? 1 << 5 : 0) | (this.local$frame.rsv3 ? 1 << 4 : 0) | this.local$frame.frameType.opcode;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.writeByte_s8j3t7$(toByte(flagsAndOpcode), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$length < 126)
              tmp$ = this.local$length;
            else if (this.local$length <= 65535)
              tmp$ = 126;
            else
              tmp$ = 127;
            this.local$formattedLength = tmp$;
            var maskAndLength = (this.local$masking ? 1 << 7 : 0) | this.local$formattedLength;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.writeByte_s8j3t7$(toByte(maskAndLength), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            switch (this.local$formattedLength) {
              case 126:
                this.state_0 = 5;
                this.result_0 = this.local$$receiver.writeShort_mq22fl$(toShort(this.local$length), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 127:
                this.state_0 = 4;
                this.result_0 = this.local$$receiver.writeLong_s8cxhz$(Kotlin.Long.fromInt(this.local$length), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
            }

          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            var array = this.local$frame.data;
            this.local$data = ByteReadPacket(array, 0, array.length, ByteReadPacket$lambda);
            if (this.local$masking === true) {
              this.local$maskKey = Random_0.Default.nextInt();
              this.state_0 = 7;
              this.result_0 = this.local$$receiver.writeInt_za3lpa$(this.local$maskKey, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (this.local$masking === false)
                this.local$tmp$_0 = this.local$data;
              else
                this.local$tmp$_0 = Kotlin.noWhenBranchMatched();
              this.state_0 = 8;
              continue;
            }

          case 7:
            this.local$tmp$_0 = mask(this.local$data, this.local$maskKey);
            this.state_0 = 8;
            continue;
          case 8:
            var maskedData = this.local$tmp$_0;
            this.state_0 = 9;
            this.result_0 = this.local$$receiver.writePacket_3uq2w4$(maskedData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
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
  function writeFrame($receiver_0, frame_0, masking_0, continuation_0, suspended) {
    var instance = new Coroutine$writeFrame($receiver_0, frame_0, masking_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readFrame($receiver_0, maxFrameSize_0, lastOpcode_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_1 = void 0;
    this.local$flagsAndOpcode = void 0;
    this.local$maskAndLength = void 0;
    this.local$length = void 0;
    this.local$maskKey = void 0;
    this.local$$receiver = $receiver_0;
    this.local$maxFrameSize = maxFrameSize_0;
    this.local$lastOpcode = lastOpcode_0;
  }
  Coroutine$readFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readFrame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFrame.prototype.constructor = Coroutine$readFrame;
  Coroutine$readFrame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var tmp$_0, tmp$_1;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readByte(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$flagsAndOpcode = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.readByte(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$maskAndLength = this.result_0;
            var length = this.local$maskAndLength & 127;
            switch (length) {
              case 126:
                this.state_0 = 5;
                this.result_0 = this.local$$receiver.readShort(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 127:
                this.state_0 = 4;
                this.result_0 = this.local$$receiver.readLong(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:
                this.local$tmp$ = Kotlin.Long.fromInt(length);
                this.state_0 = 6;
                continue;
            }

          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 6;
            continue;
          case 5:
            this.local$tmp$ = Kotlin.Long.fromInt(this.result_0).and(L65535);
            this.state_0 = 6;
            continue;
          case 6:
            this.local$length = this.local$tmp$;
            tmp$ = (this.local$maskAndLength & 128) !== 0;
            if (tmp$ === true) {
              this.state_0 = 7;
              this.result_0 = this.local$$receiver.readInt(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              if (tmp$ === false)
                this.local$tmp$_1 = -1;
              else
                this.local$tmp$_1 = Kotlin.noWhenBranchMatched();
              this.state_0 = 8;
              continue;
            }

          case 7:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 8;
            continue;
          case 8:
            this.local$maskKey = this.local$tmp$_1;
            if (this.local$length.toNumber() > 2147483647 || this.local$length.compareTo_11rb$(this.local$maxFrameSize) > 0) {
              throw new FrameTooBigException(this.local$length);
            }

            this.state_0 = 9;
            this.result_0 = this.local$$receiver.readPacket_za3lpa$(this.local$length.toInt(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var data = this.result_0;
            if (this.local$maskKey === -1)
              tmp$_0 = data;
            else
              tmp$_0 = mask(data, this.local$maskKey);
            var maskedData = tmp$_0;
            var new_0 = this.local$flagsAndOpcode & 15;
            var opcode = new_0 === 0 ? this.local$lastOpcode : new_0;
            tmp$_1 = FrameType$Companion_getInstance().get_za3lpa$(opcode);
            if (tmp$_1 == null) {
              throw IllegalStateException_init('Unsupported opcode: ' + opcode);
            }

            var frameType = tmp$_1;
            return Frame$Companion_getInstance().byType_da1xm4$((this.local$flagsAndOpcode & 128) !== 0, frameType, readBytes(maskedData), (this.local$flagsAndOpcode & 64) !== 0, (this.local$flagsAndOpcode & 32) !== 0, (this.local$flagsAndOpcode & 16) !== 0);
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
  function readFrame($receiver_0, maxFrameSize_0, lastOpcode_0, continuation_0, suspended) {
    var instance = new Coroutine$readFrame($receiver_0, maxFrameSize_0, lastOpcode_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var xor = defineInlineFunction('ktor-ktor-websockets-js-legacy.io.ktor.websocket.xor_34yeqm$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver, other) {
      return toByte($receiver ^ other);
    };
  }));
  var flagAt = defineInlineFunction('ktor-ktor-websockets-js-legacy.io.ktor.websocket.flagAt_wndlt3$', function ($receiver, at) {
    return $receiver ? 1 << at : 0;
  });
  function WebSocketExtensionFactory() {
  }
  WebSocketExtensionFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebSocketExtensionFactory',
    interfaces: []
  };
  function WebSocketExtension() {
  }
  WebSocketExtension.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebSocketExtension',
    interfaces: []
  };
  function WebSocketExtensionsConfig() {
    this.installers_0 = ArrayList_init();
    this.rcv_0 = [false, false, false];
  }
  function WebSocketExtensionsConfig$install$lambda($receiver) {
    return Unit;
  }
  function WebSocketExtensionsConfig$install$lambda_0(closure$extension, closure$config) {
    return function () {
      return closure$extension.install_oh3mgy$(closure$config);
    };
  }
  WebSocketExtensionsConfig.prototype.install_bhsgl$ = function (extension, config) {
    if (config === void 0)
      config = WebSocketExtensionsConfig$install$lambda;
    this.checkConflicts_0(extension);
    this.installers_0.add_11rb$(WebSocketExtensionsConfig$install$lambda_0(extension, config));
  };
  WebSocketExtensionsConfig.prototype.build = function () {
    var $receiver = this.installers_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item());
    }
    return destination;
  };
  WebSocketExtensionsConfig.prototype.checkConflicts_0 = function (extensionFactory) {
    var hasConflict = extensionFactory.rsv1 && this.rcv_0[1];
    hasConflict = hasConflict || (extensionFactory.rsv2 && this.rcv_0[2]);
    hasConflict = hasConflict || (extensionFactory.rsv3 && this.rcv_0[3]);
    if (!!hasConflict) {
      var message = 'Failed to install extension. Please check configured extensions for conflicts.';
      throw IllegalStateException_init(message.toString());
    }
  };
  WebSocketExtensionsConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebSocketExtensionsConfig',
    interfaces: []
  };
  function WebSocketExtensionHeader(name, parameters) {
    this.name = name;
    this.parameters = parameters;
  }
  function WebSocketExtensionHeader$parseParameters$lambda(it) {
    var equalsIndex = indexOf(it, 61);
    if (equalsIndex < 0)
      return to(it, '');
    var key = substring(it, until(0, equalsIndex));
    var tmp$;
    if ((equalsIndex + 1 | 0) < it.length) {
      var startIndex = equalsIndex + 1 | 0;
      tmp$ = it.substring(startIndex);
    } else
      tmp$ = '';
    var value = tmp$;
    return to(key, value);
  }
  WebSocketExtensionHeader.prototype.parseParameters = function () {
    return map(asSequence(this.parameters), WebSocketExtensionHeader$parseParameters$lambda);
  };
  WebSocketExtensionHeader.prototype.toString = function () {
    return this.name + ' ' + this.parametersToString_0();
  };
  WebSocketExtensionHeader.prototype.parametersToString_0 = function () {
    return this.parameters.isEmpty() ? '' : ', ' + joinToString(this.parameters, ',');
  };
  WebSocketExtensionHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebSocketExtensionHeader',
    interfaces: []
  };
  function parseWebSocketExtensions(value) {
    var $receiver = split(value, [';']);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var extension = split(item, [',']);
      var $receiver_0 = first(extension);
      var tmp$_1;
      var name = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
      var $receiver_1 = drop(extension, 1);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        var tmp$_3;
        destination_0.add_11rb$(trim(Kotlin.isCharSequence(tmp$_3 = item_0) ? tmp$_3 : throwCCE()).toString());
      }
      var parameters = destination_0;
      tmp$_0.call(destination, new WebSocketExtensionHeader(name, parameters));
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function Coroutine$send_q1ubw4$($this, frame_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$frame = frame_0;
  }
  Coroutine$send_q1ubw4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_q1ubw4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_q1ubw4$.prototype.constructor = Coroutine$send_q1ubw4$;
  Coroutine$send_q1ubw4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.outgoing.send_11rb$(this.local$frame, this);
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
  WebSocketSession.prototype.send_q1ubw4$ = function (frame_0, continuation_0, suspended) {
    var instance = new Coroutine$send_q1ubw4$(this, frame_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WebSocketSession.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebSocketSession',
    interfaces: [CoroutineScope]
  };
  function extension($receiver, extension) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = extensionOrNull($receiver, extension)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Extension ' + extension + ' not found.').toString());
    }
    return tmp$_0;
  }
  function extensionOrNull($receiver, extension) {
    var tmp$;
    var $receiver_0 = $receiver.extensions;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.factory.key === extension.key) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) == null || Kotlin.isType(tmp$, WebSocketExtension) ? tmp$ : null;
  }
  function send($receiver, content, continuation) {
    return $receiver.send_q1ubw4$(Frame$Frame$Text_init_0(content), continuation);
  }
  function send_0($receiver, content, continuation) {
    return $receiver.send_q1ubw4$(Frame$Frame$Binary_init(true, content), continuation);
  }
  function Coroutine$close($receiver_0, reason_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$$receiver = $receiver_0;
    this.local$reason = reason_0;
  }
  Coroutine$close.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$close.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$close.prototype.constructor = Coroutine$close;
  Coroutine$close.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$reason === void 0)
              this.local$reason = CloseReason_init(CloseReason$Codes$NORMAL_getInstance(), '');
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.send_q1ubw4$(Frame$Frame$Close_init(this.local$reason), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.flush(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var _ = this.exception_0;
            if (!Kotlin.isType(_, Throwable))
              throw _;
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
  function close_0($receiver_0, reason_0, continuation_0, suspended) {
    var instance = new Coroutine$close($receiver_0, reason_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$close_0($receiver_0, cause_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$cause = cause_0;
  }
  Coroutine$close_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$close_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$close_0.prototype.constructor = Coroutine$close_0;
  Coroutine$close_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$cause == null) {
              this.state_0 = 3;
              this.result_0 = close_0(this.local$$receiver, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              this.result_0 = closeExceptionally(this.local$$receiver, this.local$cause, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
          case 3:
            this.state_0 = 4;
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
  function close_1($receiver_0, cause_0, continuation_0, suspended) {
    var instance = new Coroutine$close_0($receiver_0, cause_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$closeExceptionally($receiver_0, cause_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$cause = cause_0;
  }
  Coroutine$closeExceptionally.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$closeExceptionally.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$closeExceptionally.prototype.constructor = Coroutine$closeExceptionally;
  Coroutine$closeExceptionally.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.local$cause, CancellationException))
              tmp$ = CloseReason_init(CloseReason$Codes$NORMAL_getInstance(), '');
            else
              tmp$ = CloseReason_init(CloseReason$Codes$INTERNAL_ERROR_getInstance(), this.local$cause.toString());
            var reason = tmp$;
            this.state_0 = 2;
            this.result_0 = close_0(this.local$$receiver, reason, this);
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
  function closeExceptionally($receiver_0, cause_0, continuation_0, suspended) {
    var instance = new Coroutine$closeExceptionally($receiver_0, cause_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Frame$Companion_getInstance();
    if (disposableHandle === void 0)
      disposableHandle = NonDisposableHandle_getInstance();
    if (rsv1 === void 0)
      rsv1 = false;
    if (rsv2 === void 0)
      rsv2 = false;
    if (rsv3 === void 0)
      rsv3 = false;
    this.fin = fin;
    this.frameType = frameType;
    this.data = data;
    this.disposableHandle = disposableHandle;
    this.rsv1 = rsv1;
    this.rsv2 = rsv2;
    this.rsv3 = rsv3;
  }
  function Frame$Binary(fin, data, rsv1, rsv2, rsv3) {
    if (rsv1 === void 0)
      rsv1 = false;
    if (rsv2 === void 0)
      rsv2 = false;
    if (rsv3 === void 0)
      rsv3 = false;
    Frame.call(this, fin, FrameType$BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  Frame$Binary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binary',
    interfaces: [Frame]
  };
  function Frame$Frame$Binary_init(fin, data, $this) {
    $this = $this || Object.create(Frame$Binary.prototype);
    Frame$Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Frame$Frame$Binary_init_0(fin, packet, $this) {
    $this = $this || Object.create(Frame$Binary.prototype);
    Frame$Frame$Binary_init(fin, readBytes(packet), $this);
    return $this;
  }
  function Frame$Text(fin, data, rsv1, rsv2, rsv3) {
    if (rsv1 === void 0)
      rsv1 = false;
    if (rsv2 === void 0)
      rsv2 = false;
    if (rsv3 === void 0)
      rsv3 = false;
    Frame.call(this, fin, FrameType$TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  Frame$Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [Frame]
  };
  function Frame$Frame$Text_init(fin, data, $this) {
    $this = $this || Object.create(Frame$Text.prototype);
    Frame$Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Frame$Frame$Text_init_0(text, $this) {
    $this = $this || Object.create(Frame$Text.prototype);
    var charset;
    var toByteArray$result;
    toByteArray$break: do {
      charset = charsets.Charsets.UTF_8;
      if (charset != null ? charset.equals(charsets.Charsets.UTF_8) : null) {
        toByteArray$result = encodeToByteArray(text);
        break toByteArray$break;
      }
      toByteArray$result = encodeToByteArray_0(charset.newEncoder(), text, 0, text.length);
    }
     while (false);
    Frame$Frame$Text_init(true, toByteArray$result, $this);
    return $this;
  }
  function Frame$Frame$Text_init_1(fin, packet, $this) {
    $this = $this || Object.create(Frame$Text.prototype);
    Frame$Frame$Text_init(fin, readBytes(packet), $this);
    return $this;
  }
  function Frame$Close(data) {
    Frame.call(this, true, FrameType$CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  Frame$Close.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Close',
    interfaces: [Frame]
  };
  function Frame$Frame$Close_init(reason, $this) {
    $this = $this || Object.create(Frame$Close.prototype);
    var buildPacket$result;
    var builder = new BytePacketBuilder();
    try {
      writeShort(builder, reason.code);
      writeText(builder, reason.message);
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    Frame$Frame$Close_init_0(buildPacket$result, $this);
    return $this;
  }
  function Frame$Frame$Close_init_0(packet, $this) {
    $this = $this || Object.create(Frame$Close.prototype);
    Frame$Close.call($this, readBytes(packet));
    return $this;
  }
  function Frame$Frame$Close_init_1($this) {
    $this = $this || Object.create(Frame$Close.prototype);
    Frame$Close.call($this, Frame$Companion_getInstance().Empty_0);
    return $this;
  }
  function Frame$Ping(data) {
    Frame.call(this, true, FrameType$PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  Frame$Ping.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ping',
    interfaces: [Frame]
  };
  function Frame$Frame$Ping_init(packet, $this) {
    $this = $this || Object.create(Frame$Ping.prototype);
    Frame$Ping.call($this, readBytes(packet));
    return $this;
  }
  function Frame$Pong(data, disposableHandle) {
    if (disposableHandle === void 0)
      disposableHandle = NonDisposableHandle_getInstance();
    Frame.call(this, true, FrameType$PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  Frame$Pong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pong',
    interfaces: [Frame]
  };
  function Frame$Frame$Pong_init(packet, $this) {
    $this = $this || Object.create(Frame$Pong.prototype);
    Frame$Pong.call($this, readBytes(packet), NonDisposableHandle_getInstance());
    return $this;
  }
  Frame.prototype.toString = function () {
    return 'Frame ' + this.frameType + ' (fin=' + this.fin + ', buffer len = ' + this.data.length + ')';
  };
  Frame.prototype.copy = function () {
    return Frame$Companion_getInstance().byType_da1xm4$(this.fin, this.frameType, this.data.slice(), this.rsv1, this.rsv2, this.rsv3);
  };
  function Frame$Companion() {
    Frame$Companion_instance = this;
    this.Empty_0 = new Int8Array(0);
  }
  Frame$Companion.prototype.byType_da1xm4$ = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    switch (frameType.name) {
      case 'BINARY':
        return new Frame$Binary(fin, data, rsv1, rsv2, rsv3);
      case 'TEXT':
        return new Frame$Text(fin, data, rsv1, rsv2, rsv3);
      case 'CLOSE':
        return new Frame$Close(data);
      case 'PING':
        return new Frame$Ping(data);
      case 'PONG':
        return new Frame$Pong(data, NonDisposableHandle_getInstance());
      default:
        return Kotlin.noWhenBranchMatched();
    }
  };
  Frame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Frame$Companion_instance = null;
  function Frame$Companion_getInstance() {
    if (Frame$Companion_instance === null) {
      new Frame$Companion();
    }
    return Frame$Companion_instance;
  }
  Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function RawWebSocket(input, output, maxFrameSize, masking, coroutineContext) {
    if (maxFrameSize === void 0)
      maxFrameSize = L2147483647;
    if (masking === void 0)
      masking = false;
    return new RawWebSocketCommon(input, output, maxFrameSize, masking, coroutineContext);
  }
  Object.defineProperty(CloseReason$Codes, 'NORMAL', {
    get: CloseReason$Codes$NORMAL_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'GOING_AWAY', {
    get: CloseReason$Codes$GOING_AWAY_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'PROTOCOL_ERROR', {
    get: CloseReason$Codes$PROTOCOL_ERROR_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'CANNOT_ACCEPT', {
    get: CloseReason$Codes$CANNOT_ACCEPT_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'CLOSED_ABNORMALLY', {
    get: CloseReason$Codes$CLOSED_ABNORMALLY_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'NOT_CONSISTENT', {
    get: CloseReason$Codes$NOT_CONSISTENT_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'VIOLATED_POLICY', {
    get: CloseReason$Codes$VIOLATED_POLICY_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'TOO_BIG', {
    get: CloseReason$Codes$TOO_BIG_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'NO_EXTENSION', {
    get: CloseReason$Codes$NO_EXTENSION_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'INTERNAL_ERROR', {
    get: CloseReason$Codes$INTERNAL_ERROR_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'SERVICE_RESTART', {
    get: CloseReason$Codes$SERVICE_RESTART_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'TRY_AGAIN_LATER', {
    get: CloseReason$Codes$TRY_AGAIN_LATER_getInstance
  });
  Object.defineProperty(CloseReason$Codes, 'Companion', {
    get: CloseReason$Codes$Companion_getInstance
  });
  CloseReason.Codes = CloseReason$Codes;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$websocket = package$ktor.websocket || (package$ktor.websocket = {});
  package$websocket.CloseReason_init_dy9ulh$ = CloseReason_init;
  package$websocket.CloseReason = CloseReason;
  package$websocket.DefaultWebSocketSession = DefaultWebSocketSession;
  package$websocket.DefaultWebSocketSession_f6qnbq$ = DefaultWebSocketSession_0;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  Object.defineProperty(DefaultWebSocketSessionImpl, 'Companion', {
    get: DefaultWebSocketSessionImpl$Companion_getInstance
  });
  package$websocket.DefaultWebSocketSessionImpl = DefaultWebSocketSessionImpl;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$websocket.readText_xv7s0w$ = readText;
  package$websocket.readBytes_q8vmvx$ = readBytes_0;
  package$websocket.readReason_7mwy0p$ = readReason;
  Object.defineProperty(package$websocket, 'NonDisposableHandle', {
    get: NonDisposableHandle_getInstance
  });
  package$websocket.FrameTooBigException = FrameTooBigException;
  Object.defineProperty(FrameType, 'TEXT', {
    get: FrameType$TEXT_getInstance
  });
  Object.defineProperty(FrameType, 'BINARY', {
    get: FrameType$BINARY_getInstance
  });
  Object.defineProperty(FrameType, 'CLOSE', {
    get: FrameType$CLOSE_getInstance
  });
  Object.defineProperty(FrameType, 'PING', {
    get: FrameType$PING_getInstance
  });
  Object.defineProperty(FrameType, 'PONG', {
    get: FrameType$PONG_getInstance
  });
  Object.defineProperty(FrameType, 'Companion', {
    get: FrameType$Companion_getInstance
  });
  package$websocket.FrameType = FrameType;
  package$websocket.ponger_dyn73m$ = ponger;
  package$websocket.pinger_mrfxsy$ = pinger;
  package$websocket.RawWebSocketCommon = RawWebSocketCommon;
  $$importsForInline$$['ktor-ktor-websockets-js-legacy'] = _;
  package$websocket.writeFrame_prkzdf$ = writeFrame;
  package$websocket.readFrame_yq6x8g$ = readFrame;
  package$websocket.xor_34yeqm$ = xor;
  package$websocket.flagAt_wndlt3$ = flagAt;
  package$websocket.WebSocketExtensionFactory = WebSocketExtensionFactory;
  package$websocket.WebSocketExtension = WebSocketExtension;
  package$websocket.WebSocketExtensionsConfig = WebSocketExtensionsConfig;
  package$websocket.WebSocketExtensionHeader = WebSocketExtensionHeader;
  package$websocket.parseWebSocketExtensions_61zpoe$ = parseWebSocketExtensions;
  package$websocket.WebSocketSession = WebSocketSession;
  package$websocket.extension_5979nv$ = extension;
  package$websocket.extensionOrNull_5979nv$ = extensionOrNull;
  package$websocket.send_ryst5t$ = send;
  package$websocket.send_634u1v$ = send_0;
  package$websocket.close_d9la3o$ = close_0;
  package$websocket.close_sjmroz$ = close_1;
  package$websocket.closeExceptionally_jp8kky$ = closeExceptionally;
  Frame.Binary_init_3eyok5$ = Frame$Frame$Binary_init;
  Frame.Binary_init_cqnnqj$ = Frame$Frame$Binary_init_0;
  Frame.Binary = Frame$Binary;
  Frame.Text_init_3eyok5$ = Frame$Frame$Text_init;
  Frame.Text_init_61zpoe$ = Frame$Frame$Text_init_0;
  Frame.Text_init_cqnnqj$ = Frame$Frame$Text_init_1;
  Frame.Text = Frame$Text;
  Frame.Close_init_becdtx$ = Frame$Frame$Close_init;
  Frame.Close_init_3uq2w4$ = Frame$Frame$Close_init_0;
  Frame.Close_init = Frame$Frame$Close_init_1;
  Frame.Close = Frame$Close;
  Frame.Ping_init_3uq2w4$ = Frame$Frame$Ping_init;
  Frame.Ping = Frame$Ping;
  Frame.Pong_init_3uq2w4$ = Frame$Frame$Pong_init;
  Frame.Pong = Frame$Pong;
  Object.defineProperty(Frame, 'Companion', {
    get: Frame$Companion_getInstance
  });
  package$websocket.Frame = Frame;
  package$websocket.RawWebSocket_14dpj0$ = RawWebSocket;
  DefaultWebSocketSession.prototype.send_q1ubw4$ = WebSocketSession.prototype.send_q1ubw4$;
  DefaultWebSocketSessionImpl.prototype.send_q1ubw4$ = DefaultWebSocketSession.prototype.send_q1ubw4$;
  DefaultWebSocketSessionImpl.prototype.start_wwqcjq$ = DefaultWebSocketSession.prototype.start_wwqcjq$;
  RawWebSocketCommon.prototype.send_q1ubw4$ = WebSocketSession.prototype.send_q1ubw4$;
  IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
  OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
  NORMAL_CLOSE = CloseReason_init(CloseReason$Codes$NORMAL_getInstance(), 'OK');
  PongerCoroutineName = new CoroutineName('ws-ponger');
  PingerCoroutineName = new CoroutineName('ws-pinger');
  Kotlin.defineModule('ktor-ktor-websockets-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets-js-legacy.js.map
