(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-io-js-legacy', 'kotlinx-coroutines-core', 'kotlinx-atomicfu'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-io-js-legacy'), require('kotlinx-coroutines-core'), require('kotlinx-atomicfu'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    if (typeof this['ktor-ktor-io-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'ktor-ktor-io-js-legacy' was not found. Please, check whether 'ktor-ktor-io-js-legacy' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-legacy'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils-js-legacy'.");
    }
    root['ktor-ktor-utils-js-legacy'] = factory(typeof this['ktor-ktor-utils-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-utils-js-legacy'], kotlin, this['ktor-ktor-io-js-legacy'], this['kotlinx-coroutines-core'], this['kotlinx-atomicfu']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_io_js_legacy, $module$kotlinx_coroutines_core, $module$kotlinx_atomicfu) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toChar = Kotlin.toChar;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var writeText = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.writeText_t153jy$;
  var concatToString = Kotlin.kotlin.text.concatToString_wlitf7$;
  var readBytes = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_xc9h3n$;
  var charsets = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets;
  var String_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.String_xge8xe$;
  var unboxChar = Kotlin.unboxChar;
  var readBytes_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readBytes_7wsnj1$;
  var readAvailable = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.readAvailable_ja303r$;
  var toByte = Kotlin.toByte;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var BytePacketBuilder_init = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.BytePacketBuilder;
  var Throwable = Error;
  var get_lastIndex = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var L4096 = Kotlin.Long.fromInt(4096);
  var ByteChannel = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel_6taknv$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var awaitAll = $module$kotlinx_coroutines_core.kotlinx.coroutines.awaitAll_60afti$;
  var close = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.close_x5qia6$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var ByteChannel_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.ByteChannel;
  var addSuppressedInternal = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.core.addSuppressedInternal_oh0dqn$;
  var toShort = Kotlin.toShort;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var MutableMap$MutableEntry = Kotlin.kotlin.collections.MutableMap.MutableEntry;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Map = Kotlin.kotlin.collections.Map;
  var charArray = Kotlin.charArray;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var println_0 = Kotlin.kotlin.io.println;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.AbstractCoroutineContextElement;
  var CoroutineExceptionHandler = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineExceptionHandler;
  var concatToString_0 = Kotlin.kotlin.text.concatToString_355ntz$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var encodeToByteArray = Kotlin.kotlin.text.encodeToByteArray_pdl1vz$;
  var encodeToByteArray_0 = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.charsets.encodeToByteArray_fj4osb$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var Set = Kotlin.kotlin.collections.Set;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var fill = Kotlin.kotlin.collections.fill_6mk3ue$;
  var L0 = Kotlin.Long.ZERO;
  var fill_0 = Kotlin.kotlin.collections.fill_tpuxuu$;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_2p08ub$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var single = Kotlin.kotlin.collections.single_7wnvza$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var IOException = $module$ktor_ktor_io_js_legacy.io.ktor.utils.io.errors.IOException;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var atomic = $module$kotlinx_atomicfu.kotlinx.atomicfu.atomic$ref$1;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var getKClass = Kotlin.getKClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var List = Kotlin.kotlin.collections.List;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var single_0 = Kotlin.kotlin.collections.single_2p1efm$;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toShort_0 = Kotlin.kotlin.text.toShort_pdl1vz$;
  var single_1 = Kotlin.kotlin.text.single_gw00vp$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var toMap_0 = Kotlin.kotlin.collections.toMap_abgq59$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Comparable = Kotlin.kotlin.Comparable;
  var throwUPAE = Kotlin.throwUPAE;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Any = Object;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var SuspendFunction2 = Function;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var recoverStackTrace = $module$kotlinx_coroutines_core.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
  var getCallableRef = Kotlin.getCallableRef;
  var coroutines_0 = Kotlin.kotlin.coroutines;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var asDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.asDeferred_t11jrl$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var primitiveArrayConcat = Kotlin.primitiveArrayConcat;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  ChannelIOException.prototype = Object.create(IOException.prototype);
  ChannelIOException.prototype.constructor = ChannelIOException;
  ChannelWriteException.prototype = Object.create(ChannelIOException.prototype);
  ChannelWriteException.prototype.constructor = ChannelWriteException;
  ChannelReadException.prototype = Object.create(ChannelIOException.prototype);
  ChannelReadException.prototype.constructor = ChannelReadException;
  DataConversionException.prototype = Object.create(Exception.prototype);
  DataConversionException.prototype.constructor = DataConversionException;
  WeekDay.prototype = Object.create(Enum.prototype);
  WeekDay.prototype.constructor = WeekDay;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  InvalidDateStringException.prototype = Object.create(IllegalStateException.prototype);
  InvalidDateStringException.prototype.constructor = InvalidDateStringException;
  PluginName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  PluginName.prototype.constructor = PluginName;
  PluginsTrace.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  PluginsTrace.prototype.constructor = PluginsTrace;
  PluginTraceElement$PluginEvent.prototype = Object.create(Enum.prototype);
  PluginTraceElement$PluginEvent.prototype.constructor = PluginTraceElement$PluginEvent;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  LockFreeLinkedListNode$CondAddOp.prototype = Object.create(AtomicOp.prototype);
  LockFreeLinkedListNode$CondAddOp.prototype.constructor = LockFreeLinkedListNode$CondAddOp;
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype = Object.create(AtomicDesc.prototype);
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype.constructor = LockFreeLinkedListNode$AbstractAtomicDesc;
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype = Object.create(LockFreeLinkedListNode$AbstractAtomicDesc.prototype);
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype.constructor = LockFreeLinkedListNode$describeRemove$ObjectLiteral;
  LockFreeLinkedListNode$AddLastDesc.prototype = Object.create(LockFreeLinkedListNode$AbstractAtomicDesc.prototype);
  LockFreeLinkedListNode$AddLastDesc.prototype.constructor = LockFreeLinkedListNode$AddLastDesc;
  LockFreeLinkedListNode$RemoveFirstDesc.prototype = Object.create(LockFreeLinkedListNode$AbstractAtomicDesc.prototype);
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.constructor = LockFreeLinkedListNode$RemoveFirstDesc;
  LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp.prototype = Object.create(OpDescriptor.prototype);
  LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp.prototype.constructor = LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp;
  LockFreeLinkedListHead.prototype = Object.create(LockFreeLinkedListNode.prototype);
  LockFreeLinkedListHead.prototype.constructor = LockFreeLinkedListHead;
  DebugPipelineContext.prototype = Object.create(PipelineContext.prototype);
  DebugPipelineContext.prototype.constructor = DebugPipelineContext;
  InvalidPhaseException.prototype = Object.create(Throwable.prototype);
  InvalidPhaseException.prototype.constructor = InvalidPhaseException;
  PipelinePhaseRelation$After.prototype = Object.create(PipelinePhaseRelation.prototype);
  PipelinePhaseRelation$After.prototype.constructor = PipelinePhaseRelation$After;
  PipelinePhaseRelation$Before.prototype = Object.create(PipelinePhaseRelation.prototype);
  PipelinePhaseRelation$Before.prototype.constructor = PipelinePhaseRelation$Before;
  PipelinePhaseRelation$Last.prototype = Object.create(PipelinePhaseRelation.prototype);
  PipelinePhaseRelation$Last.prototype.constructor = PipelinePhaseRelation$Last;
  SuspendFunctionGun.prototype = Object.create(PipelineContext.prototype);
  SuspendFunctionGun.prototype.constructor = SuspendFunctionGun;
  InvalidTimestampException.prototype = Object.create(IllegalStateException.prototype);
  InvalidTimestampException.prototype.constructor = InvalidTimestampException;
  NetworkAddress$ObjectLiteral.prototype = Object.create(NetworkAddress.prototype);
  NetworkAddress$ObjectLiteral.prototype.constructor = NetworkAddress$ObjectLiteral;
  UnresolvedAddressException.prototype = Object.create(IllegalArgumentException.prototype);
  UnresolvedAddressException.prototype.constructor = UnresolvedAddressException;
  function InternalAPI() {
  }
  InternalAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalAPI',
    interfaces: [Annotation]
  };
  function KtorExperimentalAPI() {
  }
  KtorExperimentalAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KtorExperimentalAPI',
    interfaces: [Annotation]
  };
  function PublicAPICandidate(version) {
    this.version = version;
  }
  PublicAPICandidate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PublicAPICandidate',
    interfaces: [Annotation]
  };
  function KtorDsl() {
  }
  KtorDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KtorDsl',
    interfaces: [Annotation]
  };
  function AttributeKey(name) {
    this.name = name;
    if (this.name.length === 0) {
      throw IllegalStateException_init("Name can't be blank");
    }
  }
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.name;
  };
  AttributeKey.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, AttributeKey) ? tmp$_0 : throwCCE();
    if (!equals(this.name, other.name))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return hashCode(this.name);
  };
  AttributeKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeKey',
    interfaces: []
  };
  function Attributes() {
  }
  Attributes.prototype.get_yzaw86$ = function (key) {
    var tmp$;
    tmp$ = this.getOrNull_yzaw86$(key);
    if (tmp$ == null) {
      throw IllegalStateException_init('No instance for key ' + key);
    }
    return tmp$;
  };
  Attributes.prototype.take_yzaw86$ = function (key) {
    var $receiver = this.get_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes.prototype.takeOrNull_yzaw86$ = function (key) {
    var $receiver = this.getOrNull_yzaw86$(key);
    this.remove_yzaw86$(key);
    return $receiver;
  };
  Attributes.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Attributes',
    interfaces: []
  };
  function putAll($receiver, other) {
    var tmp$;
    tmp$ = other.allKeys.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      $receiver.put_uuntuo$(Kotlin.isType(tmp$_0 = element, AttributeKey) ? tmp$_0 : throwCCE(), other.get_yzaw86$(element));
    }
  }
  var BASE64_ALPHABET;
  var BASE64_MASK;
  var BASE64_MASK_INT;
  var BASE64_PAD;
  var BASE64_INVERSE_ALPHABET;
  function encodeBase64($receiver) {
    var buildPacket$result;
    var builder = new BytePacketBuilder_init();
    try {
      writeText(builder, $receiver);
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return encodeBase64_1(buildPacket$result);
  }
  function encodeBase64_0($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    var array = $receiver;
    var position = 0;
    var writeOffset = {v: 0};
    var charArray = Kotlin.charArray((($receiver.length * 8 | 0) / 6 | 0) + 3 | 0);
    while ((position + 3 | 0) <= array.length) {
      var first = array[position];
      var second = array[position + 1 | 0];
      var third = array[position + 2 | 0];
      position = position + 3 | 0;
      var chunk = (first & 255) << 16 | (second & 255) << 8 | third & 255;
      for (var index = 3; index >= 0; index--) {
        var char = chunk >> (6 * index | 0) & 63;
        charArray[tmp$ = writeOffset.v, writeOffset.v = tmp$ + 1 | 0, tmp$] = BASE64_ALPHABET.charCodeAt(char);
      }
    }
    var remaining = array.length - position | 0;
    if (remaining === 0)
      return concatToString(charArray, 0, writeOffset.v);
    if (remaining === 1) {
      tmp$_0 = (array[position] & 255) << 16 | 0 | 0;
    } else {
      tmp$_0 = (array[position] & 255) << 16 | (array[position + 1 | 0] & 255) << 8 | 0;
    }
    var chunk_0 = tmp$_0;
    var padSize = ((3 - remaining | 0) * 8 | 0) / 6 | 0;
    for (var index_0 = 3; index_0 >= padSize; index_0--) {
      var char_0 = chunk_0 >> (6 * index_0 | 0) & 63;
      charArray[tmp$_1 = writeOffset.v, writeOffset.v = tmp$_1 + 1 | 0, tmp$_1] = BASE64_ALPHABET.charCodeAt(char_0);
    }
    for (var index_1 = 0; index_1 < padSize; index_1++) {
      var tmp$_2;
      charArray[tmp$_2 = writeOffset.v, writeOffset.v = tmp$_2 + 1 | 0, tmp$_2] = BASE64_PAD;
    }
    return concatToString(charArray, 0, writeOffset.v);
  }
  function encodeBase64_1($receiver) {
    return encodeBase64_0(readBytes($receiver));
  }
  function decodeBase64String($receiver) {
    return String_0(decodeBase64Bytes($receiver), void 0, void 0, charsets.Charsets.UTF_8);
  }
  function decodeBase64Bytes($receiver) {
    var buildPacket$result;
    var builder = new BytePacketBuilder_init();
    try {
      var dropLastWhile$result;
      dropLastWhile$break: do {
        for (var index = get_lastIndex($receiver); index >= 0; index--) {
          if (!(unboxChar(toBoxedChar($receiver.charCodeAt(index))) === BASE64_PAD)) {
            dropLastWhile$result = $receiver.substring(0, index + 1 | 0);
            break dropLastWhile$break;
          }
        }
        dropLastWhile$result = '';
      }
       while (false);
      writeText(builder, dropLastWhile$result);
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return readBytes_0(decodeBase64Bytes_0(buildPacket$result));
  }
  function decodeBase64Bytes_0($receiver) {
    var buildPacket$result;
    var builder = new BytePacketBuilder_init();
    try {
      var tmp$, tmp$_0;
      var data = new Int8Array(4);
      while ($receiver.remaining.toNumber() > 0) {
        var read = readAvailable($receiver, data);
        var tmp$_1, tmp$_0_0;
        var index = 0;
        var accumulator = 0;
        for (tmp$_1 = 0; tmp$_1 !== data.length; ++tmp$_1) {
          var element = data[tmp$_1];
          var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
          accumulator = accumulator | toByte(toByte(BASE64_INVERSE_ALPHABET[element & 255]) & BASE64_MASK) << ((3 - index_0 | 0) * 6 | 0);
        }
        var chunk = accumulator;
        tmp$ = data.length - 2 | 0;
        tmp$_0 = data.length - read | 0;
        for (var index_1 = tmp$; index_1 >= tmp$_0; index_1--) {
          var origin = chunk >> (8 * index_1 | 0) & 255;
          builder.writeByte_s8j3t7$(toByte(origin));
        }
      }
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return buildPacket$result;
  }
  var toBase64 = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.toBase64_8e50z4$', function ($receiver) {
    return BASE64_ALPHABET.charCodeAt($receiver);
  });
  var fromBase64 = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.fromBase64_nugvp3$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function ($receiver) {
      return toByte(toByte(BASE64_INVERSE_ALPHABET[$receiver & 255]) & BASE64_MASK);
    };
  }));
  var CHUNK_BUFFER_SIZE;
  function Coroutine$split$lambda$lambda$lambda(closure$first_0, closure$chunk_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$first = closure$first_0;
    this.local$closure$chunk = closure$chunk_0;
  }
  Coroutine$split$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$split$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$split$lambda$lambda$lambda.prototype.constructor = Coroutine$split$lambda$lambda$lambda;
  Coroutine$split$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$first.writePacket_3uq2w4$(this.local$closure$chunk.copy(), this);
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
  function split$lambda$lambda$lambda(closure$first_0, closure$chunk_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$split$lambda$lambda$lambda(closure$first_0, closure$chunk_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$split$lambda$lambda$lambda_0(closure$second_0, closure$chunk_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$second = closure$second_0;
    this.local$closure$chunk = closure$chunk_0;
  }
  Coroutine$split$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$split$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$split$lambda$lambda$lambda_0.prototype.constructor = Coroutine$split$lambda$lambda$lambda_0;
  Coroutine$split$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$second.writePacket_3uq2w4$(this.local$closure$chunk.copy(), this);
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
  function split$lambda$lambda$lambda_0(closure$second_0, closure$chunk_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$split$lambda$lambda$lambda_0(closure$second_0, closure$chunk_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$split$lambda(this$split_0, closure$first_0, closure$second_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 14;
    this.local$this$split = this$split_0;
    this.local$closure$first = closure$first_0;
    this.local$closure$second = closure$second_0;
    this.local$$receiver = void 0;
    this.local$closed = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$split$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$split$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$split$lambda.prototype.constructor = Coroutine$split$lambda;
  Coroutine$split$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.exceptionState_0 = 9;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$this$split.isClosedForRead) {
              this.state_0 = 7;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$split.readRemaining_s8cxhz$(CHUNK_BUFFER_SIZE, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$$receiver = this.result_0;
            var tmp$_0;
            this.local$closed = false;
            this.exceptionState_0 = 4;
            var closure$first = this.local$closure$first;
            var closure$second = this.local$closure$second;
            this.state_0 = 3;
            this.result_0 = awaitAll(listOf([async(this.local$$receiver_0, void 0, void 0, split$lambda$lambda$lambda(closure$first, this.local$$receiver)), async(this.local$$receiver_0, void 0, void 0, split$lambda$lambda$lambda_0(closure$second, this.local$$receiver))]), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$_0 = this.result_0;
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 4:
            this.finallyPath_0 = [9];
            this.exceptionState_0 = 5;
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
          case 5:
            this.exceptionState_0 = 9;
            if (!this.local$closed) {
              this.local$$receiver.close();
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.state_0 = 1;
            continue;
          case 7:
            var tmp$_1;
            if ((tmp$ = this.local$this$split.closedCause) != null) {
              throw tmp$;
            } else
              tmp$_1 = null;
            this.exceptionState_0 = 14;
            this.finallyPath_0 = [8];
            this.state_0 = 12;
            this.$returnValue = tmp$_1;
            continue;
          case 8:
            return this.$returnValue;
          case 9:
            this.finallyPath_0 = [14];
            this.exceptionState_0 = 12;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$this$split.cancel_dbl4no$(cause);
              this.local$closure$first.cancel_dbl4no$(cause);
              this.exceptionState_0 = 14;
              this.finallyPath_0 = [10];
              this.state_0 = 12;
              this.$returnValue = this.local$closure$second.cancel_dbl4no$(cause);
              continue;
            } else {
              throw cause;
            }

          case 10:
            return this.$returnValue;
          case 11:
            this.finallyPath_0 = [13];
            this.state_0 = 12;
            continue;
          case 12:
            this.exceptionState_0 = 14;
            close(this.local$closure$first);
            close(this.local$closure$second);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 13:
            return;
          case 14:
            throw this.exception_0;
          default:
            this.state_0 = 14;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 14) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function split$lambda(this$split_0, closure$first_0, closure$second_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$split$lambda(this$split_0, closure$first_0, closure$second_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function split$lambda_0(closure$first, closure$second) {
    return function (it) {
      if (it == null)
        return;
      closure$first.cancel_dbl4no$(it);
      closure$second.cancel_dbl4no$(it);
      return Unit;
    };
  }
  function split($receiver, coroutineScope) {
    var first = ByteChannel(true);
    var second = ByteChannel(true);
    launch(coroutineScope, void 0, void 0, split$lambda($receiver, first, second)).invokeOnCompletion_f05bi3$(split$lambda_0(first, second));
    return to(first, second);
  }
  function Coroutine$copyToBoth$lambda(this$copyToBoth_0, closure$first_0, closure$second_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 21;
    this.local$this$copyToBoth = this$copyToBoth_0;
    this.local$closure$first = closure$first_0;
    this.local$closure$second = closure$second_0;
    this.local$$receiver = void 0;
    this.local$closed = void 0;
    this.local$closure$first_0 = void 0;
    this.local$closure$second_0 = void 0;
    this.local$this$copyToBoth_0 = void 0;
    this.local$block$result = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$copyToBoth$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$copyToBoth$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$copyToBoth$lambda.prototype.constructor = Coroutine$copyToBoth$lambda;
  Coroutine$copyToBoth$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.exceptionState_0 = 16;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$this$copyToBoth.isClosedForRead || (this.local$closure$first.isClosedForWrite && this.local$closure$second.isClosedForWrite)) {
              this.state_0 = 13;
              continue;
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$copyToBoth.readRemaining_s8cxhz$(CHUNK_BUFFER_SIZE, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$$receiver = this.result_0;
            var tmp$_0;
            this.local$closed = false;
            this.exceptionState_0 = 10;
            this.local$closure$first_0 = this.local$closure$first;
            this.local$closure$second_0 = this.local$closure$second;
            this.local$this$copyToBoth_0 = this.local$this$copyToBoth;
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            this.result_0 = this.local$closure$first_0.writePacket_3uq2w4$(this.local$$receiver.copy(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$closure$second_0.writePacket_3uq2w4$(this.local$$receiver.copy(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$block$result = this.result_0;
            this.exceptionState_0 = 10;
            this.state_0 = 8;
            continue;
          case 6:
            this.exceptionState_0 = 10;
            var cause_0 = this.exception_0;
            if (Kotlin.isType(cause_0, Throwable)) {
              this.local$this$copyToBoth_0.cancel_dbl4no$(cause_0);
              this.local$closure$first_0.close_dbl4no$(cause_0);
              this.local$block$result = this.local$closure$second_0.close_dbl4no$(cause_0);
              this.exceptionState_0 = 6;
              this.state_0 = 9;
              continue;
            } else {
              throw cause_0;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            if (!false) {
              this.state_0 = 9;
              continue;
            }

            this.state_0 = 3;
            continue;
          case 9:
            tmp$_0 = this.local$block$result;
            this.exceptionState_0 = 16;
            this.finallyPath_0 = [12];
            this.state_0 = 11;
            continue;
          case 10:
            this.finallyPath_0 = [16];
            this.exceptionState_0 = 11;
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
          case 11:
            this.exceptionState_0 = 16;
            if (!this.local$closed) {
              this.local$$receiver.close();
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 12:
            this.state_0 = 1;
            continue;
          case 13:
            if (Kotlin.isType(this.local$$receiver_0, ByteChannel_0)) {
              if ((tmp$ = this.local$$receiver_0.closedCause) != null) {
                throw tmp$;
              }
              this.exceptionState_0 = 21;
              this.finallyPath_0 = [14];
              this.state_0 = 19;
              this.$returnValue = Unit;
              continue;
            } else {
              this.state_0 = 15;
              continue;
            }

          case 14:
            return this.$returnValue;
          case 15:
            this.exceptionState_0 = 21;
            this.finallyPath_0 = [20];
            this.state_0 = 19;
            continue;
          case 16:
            this.finallyPath_0 = [21];
            this.exceptionState_0 = 19;
            var cause = this.exception_0;
            if (Kotlin.isType(cause, Throwable)) {
              this.local$closure$first.close_dbl4no$(cause);
              this.exceptionState_0 = 21;
              this.finallyPath_0 = [17];
              this.state_0 = 19;
              this.$returnValue = this.local$closure$second.close_dbl4no$(cause);
              continue;
            } else {
              throw cause;
            }

          case 17:
            return this.$returnValue;
          case 18:
            this.finallyPath_0 = [20];
            this.state_0 = 19;
            continue;
          case 19:
            this.exceptionState_0 = 21;
            close(this.local$closure$first);
            close(this.local$closure$second);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 20:
            return Unit;
          case 21:
            throw this.exception_0;
          default:
            this.state_0 = 21;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 21) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function copyToBoth$lambda(this$copyToBoth_0, closure$first_0, closure$second_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$copyToBoth$lambda(this$copyToBoth_0, closure$first_0, closure$second_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function copyToBoth$lambda_0(closure$first, closure$second) {
    return function (it) {
      if (it == null)
        return;
      closure$first.close_dbl4no$(it);
      closure$second.close_dbl4no$(it);
      return Unit;
    };
  }
  function copyToBoth($receiver, first, second) {
    launch(coroutines.GlobalScope, coroutines.Dispatchers.Unconfined, void 0, copyToBoth$lambda($receiver, first, second)).invokeOnCompletion_f05bi3$(copyToBoth$lambda_0(first, second));
  }
  function Coroutine$toByteArray($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$toByteArray.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toByteArray.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toByteArray.prototype.constructor = Coroutine$toByteArray;
  Coroutine$toByteArray.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readRemaining_s8cxhz$(void 0, this);
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
  function toByteArray($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$toByteArray($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function readShort($receiver, offset) {
    var result = ($receiver[offset] & 255) << 8 | $receiver[offset + 1 | 0] & 255;
    return toShort(result);
  }
  function CaseInsensitiveMap() {
    this.delegate_0 = LinkedHashMap_init();
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.delegate_0.size;
    }
  });
  CaseInsensitiveMap.prototype.containsKey_11rb$ = function (key) {
    return this.delegate_0.containsKey_11rb$(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.containsValue_11rc$ = function (value) {
    return this.delegate_0.containsValue_11rc$(value);
  };
  CaseInsensitiveMap.prototype.get_11rb$ = function (key) {
    return this.delegate_0.get_11rb$(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  CaseInsensitiveMap.prototype.clear = function () {
    this.delegate_0.clear();
  };
  CaseInsensitiveMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.delegate_0.put_xwzc9p$(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      this.put_xwzc9p$(key, value);
    }
  };
  CaseInsensitiveMap.prototype.remove_11rb$ = function (key) {
    return this.delegate_0.remove_11rb$(caseInsensitive(key));
  };
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda($receiver) {
    return $receiver.content;
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0($receiver) {
    return caseInsensitive($receiver);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return new DelegatingMutableSet(this.delegate_0.keys, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$keys$lambda_0);
    }
  });
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda($receiver) {
    return new Entry($receiver.key.content, $receiver.value);
  }
  function CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0($receiver) {
    return new Entry(caseInsensitive($receiver.key), $receiver.value);
  }
  Object.defineProperty(CaseInsensitiveMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return new DelegatingMutableSet(this.delegate_0.entries, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda, CaseInsensitiveMap$get_CaseInsensitiveMap$entries$lambda_0);
    }
  });
  Object.defineProperty(CaseInsensitiveMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.delegate_0.values;
    }
  });
  CaseInsensitiveMap.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, CaseInsensitiveMap))
      return false;
    return equals(other.delegate_0, this.delegate_0);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  CaseInsensitiveMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveMap',
    interfaces: [MutableMap]
  };
  function Entry(key, value) {
    this.key_3iz5qv$_0 = key;
    this.value_p1xw47$_0 = value;
  }
  Object.defineProperty(Entry.prototype, 'key', {
    get: function () {
      return this.key_3iz5qv$_0;
    }
  });
  Object.defineProperty(Entry.prototype, 'value', {
    get: function () {
      return this.value_p1xw47$_0;
    },
    set: function (value) {
      this.value_p1xw47$_0 = value;
    }
  });
  Entry.prototype.setValue_11rc$ = function (newValue) {
    this.value = newValue;
    return this.value;
  };
  Entry.prototype.hashCode = function () {
    return 527 + hashCode(ensureNotNull(this.key)) + hashCode(ensureNotNull(this.value)) | 0;
  };
  Entry.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Map$Entry))
      return false;
    return equals(other.key, this.key) && equals(other.value, this.value);
  };
  Entry.prototype.toString = function () {
    return this.key.toString() + '=' + this.value;
  };
  Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: [MutableMap$MutableEntry]
  };
  function CaseInsensitiveSet() {
    this.backingMap_0 = new CaseInsensitiveMap();
  }
  CaseInsensitiveSet.prototype.add_11rb$ = function (element) {
    var $receiver = this.backingMap_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(element)) {
      return false;
    }
    this.backingMap_0.put_xwzc9p$(element, true);
    return true;
  };
  Object.defineProperty(CaseInsensitiveSet.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.backingMap_0.size;
    }
  });
  CaseInsensitiveSet.prototype.remove_11rb$ = function (element) {
    return this.backingMap_0.remove_11rb$(element) === true;
  };
  CaseInsensitiveSet.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    var added = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (this.add_11rb$(element)) {
        added = true;
      }
    }
    return added;
  };
  CaseInsensitiveSet.prototype.clear = function () {
    this.backingMap_0.clear();
  };
  CaseInsensitiveSet.prototype.removeAll_brywnq$ = function (elements) {
    return this.backingMap_0.keys.removeAll_brywnq$(elements);
  };
  CaseInsensitiveSet.prototype.retainAll_brywnq$ = function (elements) {
    return this.backingMap_0.keys.retainAll_brywnq$(elements);
  };
  CaseInsensitiveSet.prototype.contains_11rb$ = function (element) {
    var $receiver = this.backingMap_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(element);
  };
  CaseInsensitiveSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.backingMap_0.keys.containsAll_brywnq$(elements);
  };
  CaseInsensitiveSet.prototype.isEmpty = function () {
    return this.backingMap_0.isEmpty();
  };
  CaseInsensitiveSet.prototype.iterator = function () {
    return this.backingMap_0.keys.iterator();
  };
  CaseInsensitiveSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveSet',
    interfaces: [MutableSet]
  };
  function CaseInsensitiveSet_init(initial, $this) {
    $this = $this || Object.create(CaseInsensitiveSet.prototype);
    CaseInsensitiveSet.call($this);
    addAll($this, initial);
    return $this;
  }
  function isLowerCase($receiver) {
    return String.fromCharCode($receiver).toLowerCase().charCodeAt(0) === $receiver;
  }
  function toCharArray($receiver) {
    var tmp$;
    var array = charArray($receiver.length, null);
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var value = unboxChar(toBoxedChar($receiver.charCodeAt(i)));
      array[i] = value;
    }
    return array;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  CoroutineExceptionHandler$ObjectLiteral.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineExceptionHandler$ObjectLiteral.prototype.constructor = CoroutineExceptionHandler$ObjectLiteral;
  function CoroutineExceptionHandler$ObjectLiteral(closure$handler, key) {
    this.closure$handler = closure$handler;
    AbstractCoroutineContextElement.call(this, key);
  }
  CoroutineExceptionHandler$ObjectLiteral.prototype.handleException_1ur55u$ = function (context, exception) {
    this.closure$handler(context, exception);
  };
  CoroutineExceptionHandler$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CoroutineExceptionHandler, AbstractCoroutineContextElement]};
  function printDebugTree($receiver, offset) {
    if (offset === void 0)
      offset = 0;
    println(repeat(' ', offset) + toString($receiver));
    var tmp$;
    tmp$ = $receiver.children.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      printDebugTree(element, offset + 2 | 0);
    }
    if (offset === 0)
      println_0();
  }
  function SilentSupervisor$lambda(f, f_0) {
    return Unit;
  }
  function SilentSupervisor(parent) {
    if (parent === void 0)
      parent = null;
    return SupervisorJob(parent).plus_1fupul$(new CoroutineExceptionHandler$ObjectLiteral(SilentSupervisor$lambda, CoroutineExceptionHandler.Key));
  }
  var digits;
  var NONCE_SIZE_IN_BYTES;
  function hex(bytes) {
    var tmp$, tmp$_0;
    var result = Kotlin.charArray(bytes.length * 2 | 0);
    var resultIndex = 0;
    var digits_0 = digits;
    for (var index = 0; index < bytes.length; index++) {
      var b = bytes[index] & 255;
      result[tmp$ = resultIndex, resultIndex = tmp$ + 1 | 0, tmp$] = digits_0[b >> 4];
      result[tmp$_0 = resultIndex, resultIndex = tmp$_0 + 1 | 0, tmp$_0] = digits_0[b & 15];
    }
    return concatToString_0(result);
  }
  function hex_0(s) {
    var result = new Int8Array(s.length / 2 | 0);
    for (var idx = 0; idx < result.length; idx++) {
      var srcIdx = idx * 2 | 0;
      var high = toInt(String.fromCharCode(s.charCodeAt(srcIdx)), 16) << 4;
      var low = toInt(String.fromCharCode(s.charCodeAt(srcIdx + 1 | 0)), 16);
      result[idx] = toByte(high | low);
    }
    return result;
  }
  function generateNonce(size) {
    var buildPacket$result;
    var builder = new BytePacketBuilder_init();
    try {
      while (builder.size < size) {
        writeText(builder, generateNonce_0());
      }
      buildPacket$result = builder.build();
    } catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        builder.release();
        throw t;
      } else
        throw t;
    }
    return readBytes(buildPacket$result, size);
  }
  function Digest() {
  }
  Digest.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Digest',
    interfaces: []
  };
  function build($receiver, bytes, continuation) {
    $receiver.plusAssign_fqrh44$(bytes);
    return $receiver.build(continuation);
  }
  function build_0($receiver, string, charset, continuation) {
    if (charset === void 0)
      charset = charsets.Charsets.UTF_8;
    var toByteArray$result;
    toByteArray$break: do {
      if (charset != null ? charset.equals(charsets.Charsets.UTF_8) : null) {
        toByteArray$result = encodeToByteArray(string);
        break toByteArray$break;
      }
      toByteArray$result = encodeToByteArray_0(charset.newEncoder(), string, 0, string.length);
    }
     while (false);
    $receiver.plusAssign_fqrh44$(toByteArray$result);
    return $receiver.build(continuation);
  }
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_0 = delegate;
    this.convertTo_0 = convertTo;
    this.convert_0 = convert;
    this.size_uukmxx$_0 = this.delegate_0.size;
  }
  DelegatingMutableSet.prototype.convert_9xhtru$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convert_0(item));
    }
    return destination;
  };
  DelegatingMutableSet.prototype.convertTo_9xhuij$ = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.convertTo_0(item));
    }
    return destination;
  };
  Object.defineProperty(DelegatingMutableSet.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_uukmxx$_0;
    }
  });
  DelegatingMutableSet.prototype.add_11rb$ = function (element) {
    return this.delegate_0.add_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.addAll_brywnq$ = function (elements) {
    return this.delegate_0.addAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.clear = function () {
    this.delegate_0.clear();
  };
  DelegatingMutableSet.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.removeAll_brywnq$ = function (elements) {
    return this.delegate_0.removeAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.retainAll_brywnq$ = function (elements) {
    return this.delegate_0.retainAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.contains_11rb$(this.convert_0(element));
  };
  DelegatingMutableSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.delegate_0.containsAll_brywnq$(this.convert_9xhtru$(elements));
  };
  DelegatingMutableSet.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  function DelegatingMutableSet$iterator$ObjectLiteral(this$DelegatingMutableSet) {
    this.this$DelegatingMutableSet = this$DelegatingMutableSet;
    this.delegateIterator = this$DelegatingMutableSet.delegate_0.iterator();
  }
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.delegateIterator.hasNext();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.next = function () {
    return this.this$DelegatingMutableSet.convertTo_0(this.delegateIterator.next());
  };
  DelegatingMutableSet$iterator$ObjectLiteral.prototype.remove = function () {
    this.delegateIterator.remove();
  };
  DelegatingMutableSet$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  DelegatingMutableSet.prototype.iterator = function () {
    return new DelegatingMutableSet$iterator$ObjectLiteral(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    if (other == null || !Kotlin.isType(other, Set))
      return false;
    var elements = this.convertTo_9xhuij$(this.delegate_0);
    var tmp$ = other.containsAll_brywnq$(elements);
    if (tmp$) {
      tmp$ = elements.containsAll_brywnq$(other);
    }
    return tmp$;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return this.convertTo_9xhuij$(this.delegate_0).toString();
  };
  DelegatingMutableSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatingMutableSet',
    interfaces: [MutableSet]
  };
  function Identity() {
    Identity_instance = this;
  }
  Identity.prototype.encode_40pv3p$ = function ($receiver, source) {
    return source;
  };
  Identity.prototype.decode_40pv3p$ = function ($receiver, source) {
    return source;
  };
  Identity.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Identity',
    interfaces: [Encoder]
  };
  var Identity_instance = null;
  function Identity_getInstance() {
    if (Identity_instance === null) {
      new Identity();
    }
    return Identity_instance;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Encoder',
    interfaces: []
  };
  function Hash() {
    Hash_instance = this;
  }
  Hash.prototype.combine_jiburq$ = function (objects) {
    return hashCode(toList(objects));
  };
  Hash.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Hash',
    interfaces: []
  };
  var Hash_instance = null;
  function Hash_getInstance() {
    if (Hash_instance === null) {
      new Hash();
    }
    return Hash_instance;
  }
  function HashFunction() {
  }
  HashFunction.prototype.update_mj6st8$ = function (input, offset, length, callback$default) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = input.length;
    callback$default ? callback$default(input, offset, length) : this.update_mj6st8$$default(input, offset, length);
  };
  HashFunction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HashFunction',
    interfaces: []
  };
  function digest($receiver, input, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = input.length;
    $receiver.update_mj6st8$(input, offset, length);
    return $receiver.digest();
  }
  function leftRotate($receiver, bitCount) {
    return $receiver << bitCount | $receiver >>> 32 - bitCount;
  }
  function Sha1() {
    this.messageLength_0 = L0;
    this.unprocessed_0 = new Int8Array(64);
    this.unprocessedLimit_0 = 0;
    this.words_0 = new Int32Array(80);
    this.h0_0 = 1732584193;
    this.h1_0 = -271733879;
    this.h2_0 = -1732584194;
    this.h3_0 = 271733878;
    this.h4_0 = -1009589776;
  }
  Sha1.prototype.update_mj6st8$$default = function (input, offset, length) {
    this.messageLength_0 = this.messageLength_0.add(Kotlin.Long.fromInt(length));
    var pos = offset;
    var limit = pos + length | 0;
    var unprocessed = this.unprocessed_0;
    var unprocessedLimit = this.unprocessedLimit_0;
    if (unprocessedLimit > 0) {
      if ((unprocessedLimit + length | 0) < 64) {
        arrayCopy(input, unprocessed, unprocessedLimit, pos, limit);
        this.unprocessedLimit_0 = unprocessedLimit + length | 0;
        return;
      }
      var consumeByteCount = 64 - unprocessedLimit | 0;
      arrayCopy(input, unprocessed, unprocessedLimit, pos, pos + consumeByteCount | 0);
      this.processChunk_0(unprocessed, 0);
      this.unprocessedLimit_0 = 0;
      pos = pos + consumeByteCount | 0;
    }
    while (pos < limit) {
      var nextPos = pos + 64 | 0;
      if (nextPos > limit) {
        arrayCopy(input, unprocessed, 0, pos, limit);
        this.unprocessedLimit_0 = limit - pos | 0;
        return;
      }
      this.processChunk_0(input, pos);
      pos = nextPos;
    }
  };
  Sha1.prototype.processChunk_0 = function (input, pos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var words = this.words_0;
    var currentPosition = pos;
    for (var w = 0; w < 16; w++) {
      words[w] = (input[tmp$ = currentPosition, currentPosition = tmp$ + 1 | 0, tmp$] & 255) << 24 | (input[tmp$_0 = currentPosition, currentPosition = tmp$_0 + 1 | 0, tmp$_0] & 255) << 16 | (input[tmp$_1 = currentPosition, currentPosition = tmp$_1 + 1 | 0, tmp$_1] & 255) << 8 | input[tmp$_2 = currentPosition, currentPosition = tmp$_2 + 1 | 0, tmp$_2] & 255;
    }
    for (var w_0 = 16; w_0 < 80; w_0++) {
      words[w_0] = leftRotate(words[w_0 - 3 | 0] ^ words[w_0 - 8 | 0] ^ words[w_0 - 14 | 0] ^ words[w_0 - 16 | 0], 1);
    }
    var a = this.h0_0;
    var b = this.h1_0;
    var c = this.h2_0;
    var d = this.h3_0;
    var e = this.h4_0;
    for (var i = 0; i < 80; i++) {
      if (i < 20) {
        var f = d ^ b & (c ^ d);
        var k = 1518500249;
        tmp$_3 = leftRotate(a, 5) + f + e + k + words[i] | 0;
      } else if (i < 40) {
        var f_0 = b ^ c ^ d;
        var k_0 = 1859775393;
        tmp$_3 = leftRotate(a, 5) + f_0 + e + k_0 + words[i] | 0;
      } else if (i < 60) {
        var f_1 = b & c | b & d | c & d;
        var k_1 = -1894007588;
        tmp$_3 = leftRotate(a, 5) + f_1 + e + k_1 + words[i] | 0;
      } else {
        var f_2 = b ^ c ^ d;
        var k_2 = -899497514;
        tmp$_3 = leftRotate(a, 5) + f_2 + e + k_2 + words[i] | 0;
      }
      var a2 = tmp$_3;
      e = d;
      d = c;
      c = leftRotate(b, 30);
      b = a;
      a = a2;
    }
    this.h0_0 = this.h0_0 + a | 0;
    this.h1_0 = this.h1_0 + b | 0;
    this.h2_0 = this.h2_0 + c | 0;
    this.h3_0 = this.h3_0 + d | 0;
    this.h4_0 = this.h4_0 + e | 0;
  };
  Sha1.prototype.digest = function () {
    var tmp$;
    var unprocessed = this.unprocessed_0;
    var unprocessedLimit = this.unprocessedLimit_0;
    var messageLengthBits = this.messageLength_0.multiply(Kotlin.Long.fromInt(8));
    unprocessed[tmp$ = unprocessedLimit, unprocessedLimit = tmp$ + 1 | 0, tmp$] = toByte(128);
    if (unprocessedLimit > 56) {
      fill(unprocessed, 0, unprocessedLimit, 64);
      this.processChunk_0(unprocessed, 0);
      fill(unprocessed, 0, 0, unprocessedLimit);
    } else {
      fill(unprocessed, 0, unprocessedLimit, 56);
    }
    unprocessed[56] = toByte(messageLengthBits.shiftRightUnsigned(56).toInt());
    unprocessed[57] = toByte(messageLengthBits.shiftRightUnsigned(48).toInt());
    unprocessed[58] = toByte(messageLengthBits.shiftRightUnsigned(40).toInt());
    unprocessed[59] = toByte(messageLengthBits.shiftRightUnsigned(32).toInt());
    unprocessed[60] = toByte(messageLengthBits.shiftRightUnsigned(24).toInt());
    unprocessed[61] = toByte(messageLengthBits.shiftRightUnsigned(16).toInt());
    unprocessed[62] = toByte(messageLengthBits.shiftRightUnsigned(8).toInt());
    unprocessed[63] = toByte(messageLengthBits.toInt());
    this.processChunk_0(unprocessed, 0);
    var a = this.h0_0;
    var b = this.h1_0;
    var c = this.h2_0;
    var d = this.h3_0;
    var e = this.h4_0;
    this.reset_0();
    return new Int8Array([toByte(a >> 24), toByte(a >> 16), toByte(a >> 8), toByte(a), toByte(b >> 24), toByte(b >> 16), toByte(b >> 8), toByte(b), toByte(c >> 24), toByte(c >> 16), toByte(c >> 8), toByte(c), toByte(d >> 24), toByte(d >> 16), toByte(d >> 8), toByte(d), toByte(e >> 24), toByte(e >> 16), toByte(e >> 8), toByte(e)]);
  };
  Sha1.prototype.reset_0 = function () {
    this.messageLength_0 = L0;
    fill(this.unprocessed_0, 0);
    this.unprocessedLimit_0 = 0;
    fill_0(this.words_0, 0);
    this.h0_0 = 1732584193;
    this.h1_0 = -271733879;
    this.h2_0 = -1732584194;
    this.h3_0 = 271733878;
    this.h4_0 = -1009589776;
  };
  Sha1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sha1',
    interfaces: [HashFunction]
  };
  function NonceManager() {
  }
  NonceManager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NonceManager',
    interfaces: []
  };
  function GenerateOnlyNonceManager() {
    GenerateOnlyNonceManager_instance = this;
  }
  GenerateOnlyNonceManager.prototype.newNonce = function (continuation) {
    return generateNonce_0();
  };
  GenerateOnlyNonceManager.prototype.verifyNonce_61zpoe$ = function (nonce, continuation) {
    return true;
  };
  GenerateOnlyNonceManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GenerateOnlyNonceManager',
    interfaces: [NonceManager]
  };
  var GenerateOnlyNonceManager_instance = null;
  function GenerateOnlyNonceManager_getInstance() {
    if (GenerateOnlyNonceManager_instance === null) {
      new GenerateOnlyNonceManager();
    }
    return GenerateOnlyNonceManager_instance;
  }
  function AlwaysFailNonceManager() {
    AlwaysFailNonceManager_instance = this;
  }
  AlwaysFailNonceManager.prototype.newNonce = function (continuation) {
    throw UnsupportedOperationException_init('This manager should never be used');
  };
  AlwaysFailNonceManager.prototype.verifyNonce_61zpoe$ = function (nonce, continuation) {
    throw UnsupportedOperationException_init('This manager should never be used');
  };
  AlwaysFailNonceManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AlwaysFailNonceManager',
    interfaces: [NonceManager]
  };
  var AlwaysFailNonceManager_instance = null;
  function AlwaysFailNonceManager_getInstance() {
    if (AlwaysFailNonceManager_instance === null) {
      new AlwaysFailNonceManager();
    }
    return AlwaysFailNonceManager_instance;
  }
  function get_length($receiver) {
    return coerceAtLeast($receiver.endInclusive.subtract($receiver.start).add(Kotlin.Long.fromInt(1)), L0);
  }
  function contains($receiver, other) {
    return other.start.compareTo_11rb$($receiver.start) >= 0 && other.endInclusive.compareTo_11rb$($receiver.endInclusive) <= 0;
  }
  function StringValues() {
    StringValues$Companion_getInstance();
  }
  function StringValues$Companion() {
    StringValues$Companion_instance = this;
    this.Empty = new StringValuesImpl();
  }
  StringValues$Companion.prototype.build_o7hlrk$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.StringValues.Companion.build_o7hlrk$', wrapFunction(function () {
    var StringValuesBuilderImpl_init = _.io.ktor.util.StringValuesBuilderImpl;
    return function (caseInsensitiveName, builder) {
      if (caseInsensitiveName === void 0)
        caseInsensitiveName = false;
      var $receiver = new StringValuesBuilderImpl_init(caseInsensitiveName);
      builder($receiver);
      return $receiver.build();
    };
  }));
  StringValues$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StringValues$Companion_instance = null;
  function StringValues$Companion_getInstance() {
    if (StringValues$Companion_instance === null) {
      new StringValues$Companion();
    }
    return StringValues$Companion_instance;
  }
  StringValues.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValues.prototype.contains_61zpoe$ = function (name) {
    return this.getAll_61zpoe$(name) != null;
  };
  StringValues.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.getAll_61zpoe$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValues.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var k = element.key;
      var v = element.value;
      body(k, v);
    }
  };
  StringValues.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StringValues',
    interfaces: []
  };
  function StringValuesBuilder() {
  }
  StringValuesBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StringValuesBuilder',
    interfaces: []
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.caseInsensitiveName_xvy381$_0 = caseInsensitiveName;
    this.name = name;
    this.values = values;
  }
  Object.defineProperty(StringValuesSingleImpl.prototype, 'caseInsensitiveName', {
    get: function () {
      return this.caseInsensitiveName_xvy381$_0;
    }
  });
  StringValuesSingleImpl.prototype.getAll_61zpoe$ = function (name) {
    return equals_0(this.name, name, this.caseInsensitiveName) ? this.values : null;
  };
  function StringValuesSingleImpl$entries$ObjectLiteral(this$StringValuesSingleImpl) {
    this.key_tykvjz$_0 = this$StringValuesSingleImpl.name;
    this.value_jfkgsx$_0 = this$StringValuesSingleImpl.values;
  }
  Object.defineProperty(StringValuesSingleImpl$entries$ObjectLiteral.prototype, 'key', {
    configurable: true,
    get: function () {
      return this.key_tykvjz$_0;
    }
  });
  Object.defineProperty(StringValuesSingleImpl$entries$ObjectLiteral.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.value_jfkgsx$_0;
    }
  });
  StringValuesSingleImpl$entries$ObjectLiteral.prototype.toString = function () {
    return this.key + '=' + this.value;
  };
  StringValuesSingleImpl$entries$ObjectLiteral.prototype.equals = function (other) {
    return Kotlin.isType(other, Map$Entry) && equals(other.key, this.key) && equals(other.value, this.value);
  };
  StringValuesSingleImpl$entries$ObjectLiteral.prototype.hashCode = function () {
    return hashCode(this.key) ^ hashCode(this.value);
  };
  StringValuesSingleImpl$entries$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Map$Entry]
  };
  StringValuesSingleImpl.prototype.entries = function () {
    return setOf(new StringValuesSingleImpl$entries$ObjectLiteral(this));
  };
  StringValuesSingleImpl.prototype.isEmpty = function () {
    return false;
  };
  StringValuesSingleImpl.prototype.names = function () {
    return setOf(this.name);
  };
  StringValuesSingleImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesSingleImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  StringValuesSingleImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesSingleImpl.prototype.forEach_ubvtmq$ = function (body) {
    body(this.name, this.values);
  };
  StringValuesSingleImpl.prototype.get_61zpoe$ = function (name) {
    return equals_0(name, this.name, this.caseInsensitiveName) ? firstOrNull(this.values) : null;
  };
  StringValuesSingleImpl.prototype.contains_61zpoe$ = function (name) {
    return equals_0(name, this.name, this.caseInsensitiveName);
  };
  StringValuesSingleImpl.prototype.contains_puj7f4$ = function (name, value) {
    return equals_0(name, this.name, this.caseInsensitiveName) && this.values.contains_11rb$(value);
  };
  StringValuesSingleImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValuesSingleImpl',
    interfaces: [StringValues]
  };
  function StringValuesImpl(caseInsensitiveName, values) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (values === void 0)
      values = emptyMap();
    this.caseInsensitiveName_w2tiaf$_0 = caseInsensitiveName;
    this.values = null;
    var newMap = this.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init();
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      var size = value.size;
      var list = ArrayList_init(size);
      for (var index = 0; index < size; index++) {
        list.add_11rb$(value.get_za3lpa$(index));
      }
      newMap.put_xwzc9p$(key, list);
    }
    this.values = newMap;
  }
  Object.defineProperty(StringValuesImpl.prototype, 'caseInsensitiveName', {
    get: function () {
      return this.caseInsensitiveName_w2tiaf$_0;
    }
  });
  StringValuesImpl.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesImpl.prototype.getAll_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name);
  };
  StringValuesImpl.prototype.contains_61zpoe$ = function (name) {
    return this.listForKey_6rkiov$_0(name) != null;
  };
  StringValuesImpl.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.listForKey_6rkiov$_0(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesImpl.prototype.names = function () {
    return unmodifiable(this.values.keys);
  };
  StringValuesImpl.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesImpl.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesImpl.prototype.forEach_ubvtmq$ = function (body) {
    var tmp$;
    tmp$ = this.values.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var value = tmp$_0.value;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.listForKey_6rkiov$_0 = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName + ') ' + this.entries();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, StringValues))
      return false;
    if (this.caseInsensitiveName !== other.caseInsensitiveName)
      return false;
    return entriesEquals(this.entries(), other.entries());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.entries(), 31 * hashCode(this.caseInsensitiveName) | 0);
  };
  StringValuesImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValuesImpl',
    interfaces: [StringValues]
  };
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    if (caseInsensitiveName === void 0)
      caseInsensitiveName = false;
    if (size === void 0)
      size = 8;
    this.caseInsensitiveName_h70hy2$_0 = caseInsensitiveName;
    this.values = this.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init_0(size);
  }
  Object.defineProperty(StringValuesBuilderImpl.prototype, 'caseInsensitiveName', {
    get: function () {
      return this.caseInsensitiveName_h70hy2$_0;
    }
  });
  StringValuesBuilderImpl.prototype.getAll_61zpoe$ = function (name) {
    return this.values.get_11rb$(name);
  };
  StringValuesBuilderImpl.prototype.contains_61zpoe$ = function (name) {
    var $receiver = this.values;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name);
  };
  StringValuesBuilderImpl.prototype.contains_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.contains_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilderImpl.prototype.names = function () {
    return this.values.keys;
  };
  StringValuesBuilderImpl.prototype.isEmpty = function () {
    return this.values.isEmpty();
  };
  StringValuesBuilderImpl.prototype.entries = function () {
    return unmodifiable(this.values.entries);
  };
  StringValuesBuilderImpl.prototype.set_puj7f4$ = function (name, value) {
    this.validateValue_61zpoe$(value);
    var list = this.ensureListForKey_vzb69e$_0(name);
    list.clear();
    list.add_11rb$(value);
  };
  StringValuesBuilderImpl.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getAll_61zpoe$(name)) != null ? firstOrNull(tmp$) : null;
  };
  StringValuesBuilderImpl.prototype.append_puj7f4$ = function (name, value) {
    this.validateValue_61zpoe$(value);
    this.ensureListForKey_vzb69e$_0(name).add_11rb$(value);
  };
  function StringValuesBuilderImpl$appendAll$lambda(this$StringValuesBuilderImpl) {
    return function (name, values) {
      this$StringValuesBuilderImpl.appendAll_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilderImpl.prototype.appendAll_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  function StringValuesBuilderImpl$appendMissing$lambda(this$StringValuesBuilderImpl) {
    return function (name, values) {
      this$StringValuesBuilderImpl.appendMissing_poujtz$(name, values);
      return Unit;
    };
  }
  StringValuesBuilderImpl.prototype.appendMissing_hb0ubp$ = function (stringValues) {
    stringValues.forEach_ubvtmq$(StringValuesBuilderImpl$appendMissing$lambda(this));
  };
  StringValuesBuilderImpl.prototype.appendAll_poujtz$ = function (name, values) {
    var list = this.ensureListForKey_vzb69e$_0(name);
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.validateValue_61zpoe$(element);
      list.add_11rb$(element);
    }
  };
  StringValuesBuilderImpl.prototype.appendMissing_poujtz$ = function (name, values) {
    var tmp$, tmp$_0;
    var existing = (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? toSet(tmp$) : null) != null ? tmp$_0 : emptySet();
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = values.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (!existing.contains_11rb$(element))
        destination.add_11rb$(element);
    }
    this.appendAll_poujtz$(name, destination);
  };
  StringValuesBuilderImpl.prototype.remove_61zpoe$ = function (name) {
    this.values.remove_11rb$(name);
  };
  StringValuesBuilderImpl.prototype.removeKeysWithNoEntries = function () {
    var tmp$;
    var $receiver = this.values;
    var destination = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = $receiver.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.value.isEmpty()) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    tmp$ = destination.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.key;
      this.remove_61zpoe$(k);
    }
  };
  StringValuesBuilderImpl.prototype.remove_puj7f4$ = function (name, value) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.values.get_11rb$(name)) != null ? tmp$.remove_11rb$(value) : null) != null ? tmp$_0 : false;
  };
  StringValuesBuilderImpl.prototype.clear = function () {
    this.values.clear();
  };
  StringValuesBuilderImpl.prototype.build = function () {
    return new StringValuesImpl(this.caseInsensitiveName, this.values);
  };
  StringValuesBuilderImpl.prototype.validateName_61zpoe$ = function (name) {
  };
  StringValuesBuilderImpl.prototype.validateValue_61zpoe$ = function (value) {
  };
  StringValuesBuilderImpl.prototype.ensureListForKey_vzb69e$_0 = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.values.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = ArrayList_init_0();
      this.validateName_61zpoe$(name);
      this.values.put_xwzc9p$(name, $receiver);
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  StringValuesBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringValuesBuilderImpl',
    interfaces: [StringValuesBuilder]
  };
  function valuesOf(pairs, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    return new StringValuesImpl(caseInsensitiveKey, toMap(asList(pairs)));
  }
  function valuesOf_0(name, value, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    return new StringValuesSingleImpl(caseInsensitiveKey, name, listOf_0(value));
  }
  function valuesOf_1(name, values, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    return new StringValuesSingleImpl(caseInsensitiveKey, name, values);
  }
  function valuesOf_2() {
    return StringValues$Companion_getInstance().Empty;
  }
  function valuesOf_3(map, caseInsensitiveKey) {
    if (caseInsensitiveKey === void 0)
      caseInsensitiveKey = false;
    var size = map.size;
    if (size === 1) {
      var entry = single(map.entries);
      return new StringValuesSingleImpl(caseInsensitiveKey, entry.key, toList_0(entry.value));
    }
    var values = caseInsensitiveKey ? caseInsensitiveMap() : LinkedHashMap_init_0(size);
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      values.put_xwzc9p$(element.key, toList_0(element.value));
    }
    return new StringValuesImpl(caseInsensitiveKey, values);
  }
  function toMap_1($receiver) {
    var $receiver_0 = $receiver.entries();
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.key, toList_0(element.value));
    }
    return destination;
  }
  function flattenEntries($receiver) {
    var $receiver_0 = $receiver.entries();
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = element.value;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function flattenForEach$lambda(closure$block) {
    return function (name, items) {
      var tmp$;
      tmp$ = items.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$block(name, element);
      }
      return Unit;
    };
  }
  function flattenForEach($receiver, block) {
    $receiver.forEach_ubvtmq$(flattenForEach$lambda(block));
  }
  function filter($receiver, keepEmpty, predicate) {
    if (keepEmpty === void 0)
      keepEmpty = false;
    var entries = $receiver.entries();
    var values = $receiver.caseInsensitiveName ? caseInsensitiveMap() : LinkedHashMap_init_0(entries.size);
    var tmp$;
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = element.value;
      var destination = ArrayList_init(element.value.size);
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (predicate(element.key, element_0))
          destination.add_11rb$(element_0);
      }
      var list = destination;
      var tmp$_1 = keepEmpty;
      if (!tmp$_1) {
        tmp$_1 = !list.isEmpty();
      }
      if (tmp$_1) {
        values.put_xwzc9p$(element.key, list);
      }
    }
    return new StringValuesImpl($receiver.caseInsensitiveName, values);
  }
  function appendFiltered$lambda(closure$predicate, closure$keepEmpty, this$appendFiltered) {
    return function (name, value) {
      var destination = ArrayList_init(value.size);
      var tmp$;
      tmp$ = value.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (closure$predicate(name, element))
          destination.add_11rb$(element);
      }
      var list = destination;
      var tmp$_0 = closure$keepEmpty;
      if (!tmp$_0) {
        tmp$_0 = !list.isEmpty();
      }
      if (tmp$_0) {
        this$appendFiltered.appendAll_poujtz$(name, list);
      }
      return Unit;
    };
  }
  function appendFiltered($receiver, source, keepEmpty, predicate) {
    if (keepEmpty === void 0)
      keepEmpty = false;
    source.forEach_ubvtmq$(appendFiltered$lambda(predicate, keepEmpty, $receiver));
  }
  function appendAll($receiver, builder) {
    var tmp$;
    tmp$ = builder.entries().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var name = element.key;
      var values = element.value;
      $receiver.appendAll_poujtz$(name, values);
    }
    return $receiver;
  }
  function appendIfNameAbsent($receiver, name, value) {
    block$break: do {
      if ($receiver.contains_61zpoe$(name))
        break block$break;
      $receiver.append_puj7f4$(name, value);
    }
     while (false);
    return $receiver;
  }
  function appendIfNameAndValueAbsent($receiver, name, value) {
    block$break: do {
      if ($receiver.contains_puj7f4$(name, value))
        break block$break;
      $receiver.append_puj7f4$(name, value);
    }
     while (false);
    return $receiver;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return (seed * 31 | 0) + hashCode(entries) | 0;
  }
  function escapeHTML($receiver) {
    var text = $receiver;
    if (text.length === 0)
      return text;
    var $receiver_0 = StringBuilder_init($receiver.length);
    var tmp$;
    tmp$ = text.length;
    for (var idx = 0; idx < tmp$; idx++) {
      var ch = text.charCodeAt(idx);
      switch (ch) {
        case 39:
          $receiver_0.append_pdl1vj$('&#x27;');
          break;
        case 34:
          $receiver_0.append_pdl1vj$('&quot;');
          break;
        case 38:
          $receiver_0.append_pdl1vj$('&amp;');
          break;
        case 60:
          $receiver_0.append_pdl1vj$('&lt;');
          break;
        case 62:
          $receiver_0.append_pdl1vj$('&gt;');
          break;
        default:
          $receiver_0.append_s8itvh$(ch);
          break;
      }
    }
    return $receiver_0.toString();
  }
  var chomp = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.chomp_xxkbvm$', wrapFunction(function () {
    var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
    var to = Kotlin.kotlin.to_ujzrz7$;
    return function ($receiver, separator, onMissingDelimiter) {
      var tmp$;
      var idx = indexOf($receiver, separator);
      if (idx === -1)
        tmp$ = onMissingDelimiter();
      else {
        var tmp$_0 = $receiver.substring(0, idx);
        var startIndex = idx + 1 | 0;
        tmp$ = to(tmp$_0, $receiver.substring(startIndex));
      }
      return tmp$;
    };
  }));
  function toLowerCasePreservingASCIIRules($receiver) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = get_indices($receiver);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
        var it = toBoxedChar($receiver.charCodeAt(index));
        if (toLowerCasePreservingASCII(unboxChar(it)) !== unboxChar(it)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var firstIndex = indexOfFirst$result;
    if (firstIndex === -1) {
      return $receiver;
    }
    var original = $receiver;
    var $receiver_0 = StringBuilder_init($receiver.length);
    var tmp$_3;
    $receiver_0.append_ezbsdh$(original, 0, firstIndex);
    tmp$_3 = get_lastIndex(original);
    for (var index_0 = firstIndex; index_0 <= tmp$_3; index_0++) {
      $receiver_0.append_s8itvh$(toLowerCasePreservingASCII(original.charCodeAt(index_0)));
    }
    return $receiver_0.toString();
  }
  function toUpperCasePreservingASCIIRules($receiver) {
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = get_indices($receiver);
      tmp$_0 = tmp$.first;
      tmp$_1 = tmp$.last;
      tmp$_2 = tmp$.step;
      for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
        var it = toBoxedChar($receiver.charCodeAt(index));
        if (toUpperCasePreservingASCII(unboxChar(it)) !== unboxChar(it)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var firstIndex = indexOfFirst$result;
    if (firstIndex === -1) {
      return $receiver;
    }
    var original = $receiver;
    var $receiver_0 = StringBuilder_init($receiver.length);
    var tmp$_3;
    $receiver_0.append_ezbsdh$(original, 0, firstIndex);
    tmp$_3 = get_lastIndex(original);
    for (var index_0 = firstIndex; index_0 <= tmp$_3; index_0++) {
      $receiver_0.append_s8itvh$(toUpperCasePreservingASCII(original.charCodeAt(index_0)));
    }
    return $receiver_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    if ((new CharRange(65, 90)).contains_mef7kx$(ch))
      return toChar(ch + 32);
    else if ((new CharRange(0, 127)).contains_mef7kx$(ch))
      return ch;
    else {
      return String.fromCharCode(ch).toLowerCase().charCodeAt(0);
    }
  }
  function toUpperCasePreservingASCII(ch) {
    if ((new CharRange(97, 122)).contains_mef7kx$(ch))
      return toChar(ch - 32);
    else if ((new CharRange(0, 127)).contains_mef7kx$(ch))
      return ch;
    else {
      return String.fromCharCode(ch).toLowerCase().charCodeAt(0);
    }
  }
  function caseInsensitive($receiver) {
    return new CaseInsensitiveString($receiver);
  }
  function CaseInsensitiveString(content) {
    this.content = content;
    this.hash_0 = hashCode(this.content.toLowerCase());
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    return ((tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = other, CaseInsensitiveString) ? tmp$ : null) != null ? tmp$_0.content : null) != null ? equals_0(tmp$_1, this.content, true) : null) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.hash_0;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.content;
  };
  CaseInsensitiveString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveString',
    interfaces: []
  };
  function get_rootCause($receiver) {
    var rootCause = $receiver;
    while ((rootCause != null ? rootCause.cause : null) != null) {
      rootCause = rootCause.cause;
    }
    return rootCause;
  }
  function ChannelIOException(message, exception) {
    IOException.call(this, message, exception);
    this.name = 'ChannelIOException';
  }
  ChannelIOException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelIOException',
    interfaces: [IOException]
  };
  function ChannelWriteException(message, exception) {
    if (message === void 0)
      message = 'Cannot write to a channel';
    ChannelIOException.call(this, message, exception);
    this.name = 'ChannelWriteException';
  }
  ChannelWriteException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelWriteException',
    interfaces: [ChannelIOException]
  };
  function ChannelReadException(message, exception) {
    if (message === void 0)
      message = 'Cannot read from a channel';
    ChannelIOException.call(this, message, exception);
    this.name = 'ChannelReadException';
  }
  ChannelReadException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelReadException',
    interfaces: [ChannelIOException]
  };
  function Coroutine$toByteArray_0($receiver_0, limit_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$limit = limit_0;
  }
  Coroutine$toByteArray_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toByteArray_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toByteArray_0.prototype.constructor = Coroutine$toByteArray_0;
  Coroutine$toByteArray_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$limit === void 0)
              this.local$limit = 2147483647;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readRemaining_s8cxhz$(Kotlin.Long.fromInt(this.local$limit), this);
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
  function toByteArray_0($receiver_0, limit_0, continuation_0, suspended) {
    var instance = new Coroutine$toByteArray_0($receiver_0, limit_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var use = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.cio.use_wxabi2$', wrapFunction(function () {
    var Throwable = Error;
    var close = _.$$importsForInline$$['ktor-ktor-io-js-legacy'].io.ktor.utils.io.close_x5qia6$;
    return function ($receiver, block) {
      try {
        block($receiver);
      } catch (cause) {
        if (Kotlin.isType(cause, Throwable)) {
          $receiver.close_dbl4no$(cause);
          throw cause;
        } else
          throw cause;
      }
      finally {
        close($receiver);
      }
    };
  }));
  function sharedListOf(values) {
    return mutableListOf(values.slice());
  }
  function sharedMap(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 8;
    return LinkedHashMap_init_0(initialCapacity);
  }
  function sharedList() {
    return ArrayList_init_0();
  }
  var INITIAL_CAPACITY;
  function ConcurrentSet$ObjectLiteral() {
    this.delegate_0 = new ConcurrentMap();
  }
  ConcurrentSet$ObjectLiteral.prototype.add_11rb$ = function (element) {
    if (this.delegate_0.containsKey_11rb$(element))
      return false;
    this.delegate_0.put_xwzc9p$(element, Unit);
    return true;
  };
  ConcurrentSet$ObjectLiteral.prototype.addAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.add_11rb$(element)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  ConcurrentSet$ObjectLiteral.prototype.clear = function () {
    this.delegate_0.clear();
  };
  ConcurrentSet$ObjectLiteral.prototype.iterator = function () {
    return this.delegate_0.keys.iterator();
  };
  ConcurrentSet$ObjectLiteral.prototype.remove_11rb$ = function (element) {
    return this.delegate_0.remove_11rb$(element) != null;
  };
  ConcurrentSet$ObjectLiteral.prototype.removeAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.remove_11rb$(element)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  ConcurrentSet$ObjectLiteral.prototype.retainAll_brywnq$ = function (elements) {
    var tmp$;
    var removeList = LinkedHashSet_init();
    tmp$ = this.delegate_0.keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      if (!elements.contains_11rb$(key))
        removeList.add_11rb$(key);
    }
    return this.removeAll_brywnq$(removeList);
  };
  Object.defineProperty(ConcurrentSet$ObjectLiteral.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.delegate_0.size;
    }
  });
  ConcurrentSet$ObjectLiteral.prototype.contains_11rb$ = function (element) {
    return this.delegate_0.containsKey_11rb$(element);
  };
  ConcurrentSet$ObjectLiteral.prototype.containsAll_brywnq$ = function (elements) {
    return elements.containsAll_brywnq$(this.delegate_0.keys);
  };
  ConcurrentSet$ObjectLiteral.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  ConcurrentSet$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableSet]
  };
  function ConcurrentSet() {
    return new ConcurrentSet$ObjectLiteral();
  }
  function CopyOnWriteHashMap() {
    this.current_0 = atomic(emptyMap());
  }
  CopyOnWriteHashMap.prototype.put_wuswzg$ = function (key, value) {
    do {
      var old = this.current_0.kotlinx$atomicfu$value;
      if (old.get_11rb$(key) === value)
        return value;
      var copy = HashMap_init(old);
      var replaced = copy.put_xwzc9p$(key, value);
      if (this.current_0.atomicfu$compareAndSet(old, copy))
        return replaced;
    }
     while (true);
  };
  CopyOnWriteHashMap.prototype.get_trkh7z$ = function (key) {
    return this.current_0.kotlinx$atomicfu$value.get_11rb$(key);
  };
  CopyOnWriteHashMap.prototype.set_wuswzg$ = function (key, value) {
    this.put_wuswzg$(key, value);
  };
  CopyOnWriteHashMap.prototype.remove_trkh7z$ = function (key) {
    do {
      var old = this.current_0.kotlinx$atomicfu$value;
      if (old.get_11rb$(key) == null)
        return null;
      var copy = HashMap_init(old);
      var removed = copy.remove_11rb$(key);
      if (this.current_0.atomicfu$compareAndSet(old, copy))
        return removed;
    }
     while (true);
  };
  CopyOnWriteHashMap.prototype.computeIfAbsent_bci5j9$ = function (key, producer) {
    var tmp$;
    do {
      var old = this.current_0.kotlinx$atomicfu$value;
      if ((tmp$ = old.get_11rb$(key)) != null) {
        return tmp$;
      }
      var copy = HashMap_init(old);
      var newValue = producer(key);
      copy.put_xwzc9p$(key, newValue);
      if (this.current_0.atomicfu$compareAndSet(old, copy))
        return newValue;
    }
     while (true);
  };
  CopyOnWriteHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CopyOnWriteHashMap',
    interfaces: []
  };
  function ConversionService() {
  }
  ConversionService.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ConversionService',
    interfaces: []
  };
  function DefaultConversionService() {
    DefaultConversionService_instance = this;
  }
  DefaultConversionService.prototype.toValues_s8jyv4$ = function (value) {
    var tmp$;
    if (value == null) {
      return emptyList();
    }
    var converted = platformDefaultToValues(value);
    if (converted != null) {
      return converted;
    }
    if (Kotlin.isType(value, Iterable)) {
      var destination = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = value.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var list = this.toValues_s8jyv4$(element);
        addAll(destination, list);
      }
      tmp$ = destination;
    } else {
      var klass = Kotlin.getKClassFromExpression(value);
      if (equals(klass, PrimitiveClasses$intClass) || equals(klass, PrimitiveClasses$floatClass) || equals(klass, PrimitiveClasses$doubleClass) || equals(klass, getKClass(Long)) || equals(klass, PrimitiveClasses$shortClass) || equals(klass, getKClass(Char)) || equals(klass, PrimitiveClasses$booleanClass) || equals(klass, PrimitiveClasses$stringClass))
        tmp$ = listOf_0(value.toString());
      else
        throw new DataConversionException('Class ' + klass + ' is not supported in default data conversion service');
    }
    return tmp$;
  };
  DefaultConversionService.prototype.fromValues_59mc7m$ = function (values, type) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (values.isEmpty()) {
      return null;
    }
    if (((tmp$ = type.type) != null ? tmp$.equals(getKClass(List)) : null) || ((tmp$_0 = type.type) != null ? tmp$_0.equals(getKClass(MutableList)) : null)) {
      var argumentType = Kotlin.isType(tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = type.kotlinType) != null ? tmp$_1.arguments : null) != null ? single_0(tmp$_2) : null) != null ? tmp$_3.type : null) != null ? tmp$_4.classifier : null, KClass) ? tmp$_5 : null;
      if (argumentType != null) {
        var destination = ArrayList_init(collectionSizeOrDefault(values, 10));
        var tmp$_6;
        tmp$_6 = values.iterator();
        while (tmp$_6.hasNext()) {
          var item = tmp$_6.next();
          destination.add_11rb$(this.fromValue_hqvncd$(item, argumentType));
        }
        return destination;
      }
    }
    if (values.isEmpty())
      throw new DataConversionException('There are no values when trying to construct single value ' + type);
    else if (values.size > 1)
      throw new DataConversionException('There are multiple values when trying to construct single value ' + type);
    else
      return this.fromValue_hqvncd$(single_0(values), type.type);
  };
  DefaultConversionService.prototype.fromValue_hqvncd$ = function (value, klass) {
    var converted = this.convertPrimitives_0(klass, value);
    if (converted != null) {
      return converted;
    }
    var platformConverted = platformDefaultFromValues(value, klass);
    if (platformConverted != null) {
      return platformConverted;
    }
    this.throwConversionException_0(klass.toString());
  };
  DefaultConversionService.prototype.convertPrimitives_0 = function (klass, value) {
    if (equals(klass, PrimitiveClasses$intClass))
      return toInt_0(value);
    else if (equals(klass, PrimitiveClasses$floatClass)) {
      return toDouble(value);
    } else if (equals(klass, PrimitiveClasses$doubleClass))
      return toDouble(value);
    else if (equals(klass, getKClass(Long)))
      return toLong(value);
    else if (equals(klass, PrimitiveClasses$shortClass))
      return toShort_0(value);
    else if (equals(klass, getKClass(Char)))
      return toBoxedChar(single_1(value));
    else if (equals(klass, PrimitiveClasses$booleanClass))
      return toBoolean(value);
    else if (equals(klass, PrimitiveClasses$stringClass))
      return value;
    else
      return null;
  };
  DefaultConversionService.prototype.throwConversionException_0 = function (typeName) {
    throw new DataConversionException('Type ' + typeName + ' is not supported in default data conversion service');
  };
  DefaultConversionService.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultConversionService',
    interfaces: [ConversionService]
  };
  var DefaultConversionService_instance = null;
  function DefaultConversionService_getInstance() {
    if (DefaultConversionService_instance === null) {
      new DefaultConversionService();
    }
    return DefaultConversionService_instance;
  }
  function DataConversionException(message) {
    if (message === void 0)
      message = 'Invalid data format';
    Exception_init(message, this);
    this.name = 'DataConversionException';
  }
  DataConversionException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataConversionException',
    interfaces: [Exception]
  };
  function DataConversion(configuration) {
    this.converters_0 = toMap_0(configuration.converters_8be2vx$);
  }
  DataConversion.prototype.fromValues_59mc7m$ = function (values, type) {
    var tmp$;
    if (values.isEmpty()) {
      return null;
    }
    var converter = (tmp$ = this.converters_0.get_11rb$(type.type)) != null ? tmp$ : DefaultConversionService_getInstance();
    return converter.fromValues_59mc7m$(values, type);
  };
  DataConversion.prototype.toValues_s8jyv4$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? Kotlin.getKClassFromExpression(value) : null;
    if (tmp$ == null) {
      return emptyList();
    }
    var type = tmp$;
    var converter = (tmp$_0 = this.converters_0.get_11rb$(type)) != null ? tmp$_0 : DefaultConversionService_getInstance();
    return converter.toValues_s8jyv4$(value);
  };
  function DataConversion$Configuration() {
    this.converters_8be2vx$ = LinkedHashMap_init();
  }
  DataConversion$Configuration.prototype.convert_4lsooh$ = function (type, convertor) {
    this.converters_8be2vx$.put_xwzc9p$(type, convertor);
  };
  DataConversion$Configuration.prototype.convert_s23p0t$ = function (type, configure) {
    var tmp$, tmp$_0;
    var klass = Kotlin.isType(tmp$ = type.classifier, KClass) ? tmp$ : throwCCE();
    var $receiver = new DelegatingConversionService$Configuration(klass);
    configure($receiver);
    var configuration = $receiver;
    var service = new DelegatingConversionService(klass, configuration.decoder_8be2vx$, (tmp$_0 = configuration.encoder_8be2vx$) == null || typeof tmp$_0 === 'function' ? tmp$_0 : throwCCE());
    this.convert_4lsooh$(klass, service);
  };
  DataConversion$Configuration.prototype.convert_ttunxk$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.converters.DataConversion.Configuration.convert_ttunxk$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    return function (T_0, isT, configure) {
      this.convert_s23p0t$(getReifiedTypeParameterKType(T_0), configure);
    };
  }));
  DataConversion$Configuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Configuration',
    interfaces: []
  };
  DataConversion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataConversion',
    interfaces: [ConversionService]
  };
  function DelegatingConversionService(klass, decoder, encoder) {
    this.klass_0 = klass;
    this.decoder_0 = decoder;
    this.encoder_0 = encoder;
  }
  DelegatingConversionService.prototype.fromValues_59mc7m$ = function (values, type) {
    var tmp$;
    tmp$ = this.decoder_0;
    if (tmp$ == null) {
      throw IllegalStateException_init("Decoder was not specified for type '" + this.klass_0 + "'");
    }
    var currentDecoder = tmp$;
    return currentDecoder(values);
  };
  DelegatingConversionService.prototype.toValues_s8jyv4$ = function (value) {
    var tmp$;
    tmp$ = this.encoder_0;
    if (tmp$ == null) {
      throw IllegalStateException_init("Encoder was not specified for type '" + this.klass_0 + "'");
    }
    var currentDecoder = tmp$;
    return currentDecoder(value);
  };
  function DelegatingConversionService$Configuration(klass) {
    this.klass_8be2vx$ = klass;
    this.decoder_8be2vx$ = null;
    this.encoder_8be2vx$ = null;
  }
  DelegatingConversionService$Configuration.prototype.decode_kkstt8$ = function (converter) {
    if (this.decoder_8be2vx$ != null)
      throw IllegalStateException_init("Decoder has already been set for type '" + this.klass_8be2vx$ + "'");
    this.decoder_8be2vx$ = converter;
  };
  DelegatingConversionService$Configuration.prototype.encode_eske4k$ = function (converter) {
    if (this.encoder_8be2vx$ != null)
      throw IllegalStateException_init("Encoder has already been set for type '" + this.klass_8be2vx$ + "'");
    this.encoder_8be2vx$ = converter;
  };
  DelegatingConversionService$Configuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Configuration',
    interfaces: []
  };
  DelegatingConversionService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelegatingConversionService',
    interfaces: [ConversionService]
  };
  function WeekDay(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WeekDay_initFields() {
    WeekDay_initFields = function () {
    };
    WeekDay$MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay$TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay$WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay$THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay$FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay$SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay$SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    WeekDay$Companion_getInstance();
  }
  var WeekDay$MONDAY_instance;
  function WeekDay$MONDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$MONDAY_instance;
  }
  var WeekDay$TUESDAY_instance;
  function WeekDay$TUESDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$TUESDAY_instance;
  }
  var WeekDay$WEDNESDAY_instance;
  function WeekDay$WEDNESDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$WEDNESDAY_instance;
  }
  var WeekDay$THURSDAY_instance;
  function WeekDay$THURSDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$THURSDAY_instance;
  }
  var WeekDay$FRIDAY_instance;
  function WeekDay$FRIDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$FRIDAY_instance;
  }
  var WeekDay$SATURDAY_instance;
  function WeekDay$SATURDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$SATURDAY_instance;
  }
  var WeekDay$SUNDAY_instance;
  function WeekDay$SUNDAY_getInstance() {
    WeekDay_initFields();
    return WeekDay$SUNDAY_instance;
  }
  function WeekDay$Companion() {
    WeekDay$Companion_instance = this;
  }
  WeekDay$Companion.prototype.from_za3lpa$ = function (ordinal) {
    return WeekDay$values()[ordinal];
  };
  WeekDay$Companion.prototype.from_61zpoe$ = function (value) {
    var tmp$;
    var tmp$_0;
    var $receiver = WeekDay$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (equals(element.value, value)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid day of week: ' + value).toString());
    }
    return tmp$_0;
  };
  WeekDay$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WeekDay$Companion_instance = null;
  function WeekDay$Companion_getInstance() {
    WeekDay_initFields();
    if (WeekDay$Companion_instance === null) {
      new WeekDay$Companion();
    }
    return WeekDay$Companion_instance;
  }
  WeekDay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeekDay',
    interfaces: [Enum]
  };
  function WeekDay$values() {
    return [WeekDay$MONDAY_getInstance(), WeekDay$TUESDAY_getInstance(), WeekDay$WEDNESDAY_getInstance(), WeekDay$THURSDAY_getInstance(), WeekDay$FRIDAY_getInstance(), WeekDay$SATURDAY_getInstance(), WeekDay$SUNDAY_getInstance()];
  }
  WeekDay.values = WeekDay$values;
  function WeekDay$valueOf(name) {
    switch (name) {
      case 'MONDAY':
        return WeekDay$MONDAY_getInstance();
      case 'TUESDAY':
        return WeekDay$TUESDAY_getInstance();
      case 'WEDNESDAY':
        return WeekDay$WEDNESDAY_getInstance();
      case 'THURSDAY':
        return WeekDay$THURSDAY_getInstance();
      case 'FRIDAY':
        return WeekDay$FRIDAY_getInstance();
      case 'SATURDAY':
        return WeekDay$SATURDAY_getInstance();
      case 'SUNDAY':
        return WeekDay$SUNDAY_getInstance();
      default:
        throwISE('No enum constant io.ktor.util.date.WeekDay.' + name);
    }
  }
  WeekDay.valueOf_61zpoe$ = WeekDay$valueOf;
  function Month(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month$FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month$MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month$APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month$MAY_instance = new Month('MAY', 4, 'May');
    Month$JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month$JULY_instance = new Month('JULY', 6, 'Jul');
    Month$AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month$SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month$OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month$NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month$DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Month$Companion_getInstance();
  }
  var Month$JANUARY_instance;
  function Month$JANUARY_getInstance() {
    Month_initFields();
    return Month$JANUARY_instance;
  }
  var Month$FEBRUARY_instance;
  function Month$FEBRUARY_getInstance() {
    Month_initFields();
    return Month$FEBRUARY_instance;
  }
  var Month$MARCH_instance;
  function Month$MARCH_getInstance() {
    Month_initFields();
    return Month$MARCH_instance;
  }
  var Month$APRIL_instance;
  function Month$APRIL_getInstance() {
    Month_initFields();
    return Month$APRIL_instance;
  }
  var Month$MAY_instance;
  function Month$MAY_getInstance() {
    Month_initFields();
    return Month$MAY_instance;
  }
  var Month$JUNE_instance;
  function Month$JUNE_getInstance() {
    Month_initFields();
    return Month$JUNE_instance;
  }
  var Month$JULY_instance;
  function Month$JULY_getInstance() {
    Month_initFields();
    return Month$JULY_instance;
  }
  var Month$AUGUST_instance;
  function Month$AUGUST_getInstance() {
    Month_initFields();
    return Month$AUGUST_instance;
  }
  var Month$SEPTEMBER_instance;
  function Month$SEPTEMBER_getInstance() {
    Month_initFields();
    return Month$SEPTEMBER_instance;
  }
  var Month$OCTOBER_instance;
  function Month$OCTOBER_getInstance() {
    Month_initFields();
    return Month$OCTOBER_instance;
  }
  var Month$NOVEMBER_instance;
  function Month$NOVEMBER_getInstance() {
    Month_initFields();
    return Month$NOVEMBER_instance;
  }
  var Month$DECEMBER_instance;
  function Month$DECEMBER_getInstance() {
    Month_initFields();
    return Month$DECEMBER_instance;
  }
  function Month$Companion() {
    Month$Companion_instance = this;
  }
  Month$Companion.prototype.from_za3lpa$ = function (ordinal) {
    return Month$values()[ordinal];
  };
  Month$Companion.prototype.from_61zpoe$ = function (value) {
    var tmp$;
    var tmp$_0;
    var $receiver = Month$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (equals(element.value, value)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Invalid month: ' + value).toString());
    }
    return tmp$_0;
  };
  Month$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Month.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$JANUARY_getInstance(), Month$FEBRUARY_getInstance(), Month$MARCH_getInstance(), Month$APRIL_getInstance(), Month$MAY_getInstance(), Month$JUNE_getInstance(), Month$JULY_getInstance(), Month$AUGUST_getInstance(), Month$SEPTEMBER_getInstance(), Month$OCTOBER_getInstance(), Month$NOVEMBER_getInstance(), Month$DECEMBER_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'JANUARY':
        return Month$JANUARY_getInstance();
      case 'FEBRUARY':
        return Month$FEBRUARY_getInstance();
      case 'MARCH':
        return Month$MARCH_getInstance();
      case 'APRIL':
        return Month$APRIL_getInstance();
      case 'MAY':
        return Month$MAY_getInstance();
      case 'JUNE':
        return Month$JUNE_getInstance();
      case 'JULY':
        return Month$JULY_getInstance();
      case 'AUGUST':
        return Month$AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month$SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month$OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month$NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month$DECEMBER_getInstance();
      default:
        throwISE('No enum constant io.ktor.util.date.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    GMTDate$Companion_getInstance();
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.dayOfWeek = dayOfWeek;
    this.dayOfMonth = dayOfMonth;
    this.dayOfYear = dayOfYear;
    this.month = month;
    this.year = year;
    this.timestamp = timestamp;
  }
  GMTDate.prototype.compareTo_11rb$ = function (other) {
    return this.timestamp.compareTo_11rb$(other.timestamp);
  };
  function GMTDate$Companion() {
    GMTDate$Companion_instance = this;
    this.START = GMTDate_0(L0);
  }
  GMTDate$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GMTDate$Companion_instance = null;
  function GMTDate$Companion_getInstance() {
    if (GMTDate$Companion_instance === null) {
      new GMTDate$Companion();
    }
    return GMTDate$Companion_instance;
  }
  GMTDate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GMTDate',
    interfaces: [Comparable]
  };
  GMTDate.prototype.component1 = function () {
    return this.seconds;
  };
  GMTDate.prototype.component2 = function () {
    return this.minutes;
  };
  GMTDate.prototype.component3 = function () {
    return this.hours;
  };
  GMTDate.prototype.component4 = function () {
    return this.dayOfWeek;
  };
  GMTDate.prototype.component5 = function () {
    return this.dayOfMonth;
  };
  GMTDate.prototype.component6 = function () {
    return this.dayOfYear;
  };
  GMTDate.prototype.component7 = function () {
    return this.month;
  };
  GMTDate.prototype.component8 = function () {
    return this.year;
  };
  GMTDate.prototype.component9 = function () {
    return this.timestamp;
  };
  GMTDate.prototype.copy_j9f46j$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    return new GMTDate(seconds === void 0 ? this.seconds : seconds, minutes === void 0 ? this.minutes : minutes, hours === void 0 ? this.hours : hours, dayOfWeek === void 0 ? this.dayOfWeek : dayOfWeek, dayOfMonth === void 0 ? this.dayOfMonth : dayOfMonth, dayOfYear === void 0 ? this.dayOfYear : dayOfYear, month === void 0 ? this.month : month, year === void 0 ? this.year : year, timestamp === void 0 ? this.timestamp : timestamp);
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + Kotlin.toString(this.seconds) + (', minutes=' + Kotlin.toString(this.minutes)) + (', hours=' + Kotlin.toString(this.hours)) + (', dayOfWeek=' + Kotlin.toString(this.dayOfWeek)) + (', dayOfMonth=' + Kotlin.toString(this.dayOfMonth)) + (', dayOfYear=' + Kotlin.toString(this.dayOfYear)) + (', month=' + Kotlin.toString(this.month)) + (', year=' + Kotlin.toString(this.year)) + (', timestamp=' + Kotlin.toString(this.timestamp)) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.minutes) | 0;
    result = result * 31 + Kotlin.hashCode(this.hours) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfWeek) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfMonth) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfYear) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    result = result * 31 + Kotlin.hashCode(this.timestamp) | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.minutes, other.minutes) && Kotlin.equals(this.hours, other.hours) && Kotlin.equals(this.dayOfWeek, other.dayOfWeek) && Kotlin.equals(this.dayOfMonth, other.dayOfMonth) && Kotlin.equals(this.dayOfYear, other.dayOfYear) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.year, other.year) && Kotlin.equals(this.timestamp, other.timestamp)))));
  };
  function plus($receiver, milliseconds) {
    return GMTDate_0($receiver.timestamp.add(milliseconds));
  }
  function minus($receiver, milliseconds) {
    return GMTDate_0($receiver.timestamp.subtract(milliseconds));
  }
  function plus_0($receiver, duration) {
    return GMTDate_0($receiver.timestamp.add(duration.inWholeMilliseconds));
  }
  function minus_0($receiver, duration) {
    return GMTDate_0($receiver.timestamp.subtract(duration.inWholeMilliseconds));
  }
  function truncateToSeconds($receiver) {
    return GMTDate_1($receiver.seconds, $receiver.minutes, $receiver.hours, $receiver.dayOfMonth, $receiver.month, $receiver.year);
  }
  function GMTDateParser(pattern) {
    GMTDateParser$Companion_getInstance();
    this.pattern_0 = pattern;
    if (!(this.pattern_0.length > 0)) {
      var message = "Date parser pattern shouldn't be empty.";
      throw IllegalStateException_init(message.toString());
    }
  }
  GMTDateParser.prototype.parse_61zpoe$ = function (dateString) {
    var builder = new GMTDateBuilder();
    var start = 0;
    var current = this.pattern_0.charCodeAt(start);
    var chunkStart = 0;
    var index = 1;
    try {
      while (index < this.pattern_0.length) {
        if (this.pattern_0.charCodeAt(index) === current) {
          index = index + 1 | 0;
          continue;
        }
        var chunkEnd = chunkStart + index - start | 0;
        var tmp$ = current;
        var startIndex = chunkStart;
        this.handleToken_0(builder, tmp$, dateString.substring(startIndex, chunkEnd));
        chunkStart = chunkEnd;
        start = index;
        current = this.pattern_0.charCodeAt(index);
        index = index + 1 | 0;
      }
      if (chunkStart < dateString.length) {
        var tmp$_0 = current;
        var startIndex_0 = chunkStart;
        this.handleToken_0(builder, tmp$_0, dateString.substring(startIndex_0));
      }
    } catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        throw new InvalidDateStringException(dateString, chunkStart, this.pattern_0);
      } else
        throw _;
    }
    return builder.build();
  };
  GMTDateParser.prototype.handleToken_0 = function ($receiver, type, chunk) {
    loop_label: switch (type) {
      case 115:
        $receiver.seconds = toInt_0(chunk);
        break loop_label;
      case 109:
        $receiver.minutes = toInt_0(chunk);
        break loop_label;
      case 104:
        $receiver.hours = toInt_0(chunk);
        break loop_label;
      case 100:
        $receiver.dayOfMonth = toInt_0(chunk);
        break loop_label;
      case 77:
        $receiver.month = Month$Companion_getInstance().from_61zpoe$(chunk);
        break loop_label;
      case 89:
        $receiver.year = toInt_0(chunk);
        break loop_label;
      case 122:
        if (!equals(chunk, 'GMT')) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }

        break loop_label;
      case 42:
        break loop_label;
      default:
        var all$result;
        all$break: do {
          var tmp$;
          tmp$ = iterator(chunk);
          while (tmp$.hasNext()) {
            var element = unboxChar(tmp$.next());
            if (!(unboxChar(toBoxedChar(element)) === type)) {
              all$result = false;
              break all$break;
            }
          }
          all$result = true;
        }
         while (false);
        if (!all$result) {
          var message_0 = 'Check failed.';
          throw IllegalStateException_init(message_0.toString());
        }

        break loop_label;
    }
  };
  function GMTDateParser$Companion() {
    GMTDateParser$Companion_instance = this;
    this.SECONDS = toBoxedChar(115);
    this.MINUTES = toBoxedChar(109);
    this.HOURS = toBoxedChar(104);
    this.DAY_OF_MONTH = toBoxedChar(100);
    this.MONTH = toBoxedChar(77);
    this.YEAR = toBoxedChar(89);
    this.ZONE = toBoxedChar(122);
    this.ANY = toBoxedChar(42);
  }
  GMTDateParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GMTDateParser$Companion_instance = null;
  function GMTDateParser$Companion_getInstance() {
    if (GMTDateParser$Companion_instance === null) {
      new GMTDateParser$Companion();
    }
    return GMTDateParser$Companion_instance;
  }
  GMTDateParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GMTDateParser',
    interfaces: []
  };
  function GMTDateBuilder() {
    this.seconds = null;
    this.minutes = null;
    this.hours = null;
    this.dayOfMonth = null;
    this.month_i1app7$_0 = this.month_i1app7$_0;
    this.year = null;
  }
  Object.defineProperty(GMTDateBuilder.prototype, 'month', {
    configurable: true,
    get: function () {
      if (this.month_i1app7$_0 == null)
        return throwUPAE('month');
      return this.month_i1app7$_0;
    },
    set: function (month) {
      this.month_i1app7$_0 = month;
    }
  });
  GMTDateBuilder.prototype.build = function () {
    return GMTDate_1(ensureNotNull(this.seconds), ensureNotNull(this.minutes), ensureNotNull(this.hours), ensureNotNull(this.dayOfMonth), this.month, ensureNotNull(this.year));
  };
  GMTDateBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GMTDateBuilder',
    interfaces: []
  };
  function InvalidDateStringException(data, at, pattern) {
    IllegalStateException_init('Failed to parse date string: ' + '"' + data + '"' + ' at index ' + at + '. Pattern: ' + '"' + pattern + '"', this);
    this.name = 'InvalidDateStringException';
  }
  InvalidDateStringException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidDateStringException',
    interfaces: [IllegalStateException]
  };
  function Coroutine$initContextInDebugMode$lambda(closure$block_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
  }
  Coroutine$initContextInDebugMode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initContextInDebugMode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initContextInDebugMode$lambda.prototype.constructor = Coroutine$initContextInDebugMode$lambda;
  Coroutine$initContextInDebugMode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this);
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
  function initContextInDebugMode$lambda(closure$block_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$initContextInDebugMode$lambda(closure$block_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$initContextInDebugMode(block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$block = block_0;
  }
  Coroutine$initContextInDebugMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initContextInDebugMode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initContextInDebugMode.prototype.constructor = Coroutine$initContextInDebugMode;
  Coroutine$initContextInDebugMode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!IntellijIdeaDebugDetector_getInstance().isDebuggerConnected) {
              this.state_0 = 2;
              this.result_0 = this.local$block(this);
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
            return this.result_0;
          case 3:
            this.result_0 = this.context;
            var debugContext = this.result_0.plus_1fupul$(new PluginsTrace());
            this.state_0 = 4;
            this.result_0 = withContext(debugContext, initContextInDebugMode$lambda(this.local$block), this);
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
  function initContextInDebugMode(block_0, continuation_0, suspended) {
    var instance = new Coroutine$initContextInDebugMode(block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$addToContextInDebugMode$lambda(closure$block_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
  }
  Coroutine$addToContextInDebugMode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addToContextInDebugMode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addToContextInDebugMode$lambda.prototype.constructor = Coroutine$addToContextInDebugMode$lambda;
  Coroutine$addToContextInDebugMode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this);
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
  function addToContextInDebugMode$lambda(closure$block_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$addToContextInDebugMode$lambda(closure$block_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$addToContextInDebugMode(pluginName_0, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$pluginName = pluginName_0;
    this.local$block = block_0;
  }
  Coroutine$addToContextInDebugMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addToContextInDebugMode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addToContextInDebugMode.prototype.constructor = Coroutine$addToContextInDebugMode;
  Coroutine$addToContextInDebugMode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!IntellijIdeaDebugDetector_getInstance().isDebuggerConnected) {
              this.state_0 = 2;
              this.result_0 = this.local$block(this);
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
            return this.result_0;
          case 3:
            this.result_0 = this.context;
            var debugContext = this.result_0.plus_1fupul$(new PluginName(this.local$pluginName));
            this.state_0 = 4;
            this.result_0 = withContext(debugContext, addToContextInDebugMode$lambda(this.local$block), this);
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
  function addToContextInDebugMode(pluginName_0, block_0, continuation_0, suspended) {
    var instance = new Coroutine$addToContextInDebugMode(pluginName_0, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function useContextElementInDebugMode(key, action, continuation) {
    var tmp$;
    if (!IntellijIdeaDebugDetector_getInstance().isDebuggerConnected)
      return;
    if ((tmp$ = continuation.context.get_j3r2sn$(key)) != null) {
      action(tmp$);
    }
  }
  function PluginName(pluginName) {
    PluginName$Key_getInstance();
    AbstractCoroutineContextElement.call(this, PluginName$Key_getInstance());
    this.pluginName = pluginName;
  }
  function PluginName$Key() {
    PluginName$Key_instance = this;
  }
  PluginName$Key.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Key',
    interfaces: [CoroutineContext$Key]
  };
  var PluginName$Key_instance = null;
  function PluginName$Key_getInstance() {
    if (PluginName$Key_instance === null) {
      new PluginName$Key();
    }
    return PluginName$Key_instance;
  }
  PluginName.prototype.toString = function () {
    return 'PluginName(' + this.pluginName + ')';
  };
  PluginName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PluginName',
    interfaces: [AbstractCoroutineContextElement]
  };
  PluginName.prototype.component1 = function () {
    return this.pluginName;
  };
  PluginName.prototype.copy_61zpoe$ = function (pluginName) {
    return new PluginName(pluginName === void 0 ? this.pluginName : pluginName);
  };
  PluginName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pluginName) | 0;
    return result;
  };
  PluginName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pluginName, other.pluginName))));
  };
  function PluginsTrace(eventOrder) {
    PluginsTrace$Key_getInstance();
    if (eventOrder === void 0) {
      eventOrder = ArrayList_init_0();
    }
    AbstractCoroutineContextElement.call(this, PluginsTrace$Key_getInstance());
    this.eventOrder = eventOrder;
  }
  function PluginsTrace$Key() {
    PluginsTrace$Key_instance = this;
  }
  PluginsTrace$Key.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Key',
    interfaces: [CoroutineContext$Key]
  };
  var PluginsTrace$Key_instance = null;
  function PluginsTrace$Key_getInstance() {
    if (PluginsTrace$Key_instance === null) {
      new PluginsTrace$Key();
    }
    return PluginsTrace$Key_instance;
  }
  PluginsTrace.prototype.toString = function () {
    return 'PluginsTrace(' + joinToString(this.eventOrder) + ')';
  };
  PluginsTrace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PluginsTrace',
    interfaces: [AbstractCoroutineContextElement]
  };
  PluginsTrace.prototype.component1 = function () {
    return this.eventOrder;
  };
  PluginsTrace.prototype.copy_t16olz$ = function (eventOrder) {
    return new PluginsTrace(eventOrder === void 0 ? this.eventOrder : eventOrder);
  };
  PluginsTrace.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.eventOrder) | 0;
    return result;
  };
  PluginsTrace.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.eventOrder, other.eventOrder))));
  };
  function PluginTraceElement(pluginName, handler, event) {
    this.pluginName = pluginName;
    this.handler = handler;
    this.event = event;
  }
  function PluginTraceElement$PluginEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PluginTraceElement$PluginEvent_initFields() {
    PluginTraceElement$PluginEvent_initFields = function () {
    };
    PluginTraceElement$PluginEvent$STARTED_instance = new PluginTraceElement$PluginEvent('STARTED', 0);
    PluginTraceElement$PluginEvent$FINISHED_instance = new PluginTraceElement$PluginEvent('FINISHED', 1);
  }
  var PluginTraceElement$PluginEvent$STARTED_instance;
  function PluginTraceElement$PluginEvent$STARTED_getInstance() {
    PluginTraceElement$PluginEvent_initFields();
    return PluginTraceElement$PluginEvent$STARTED_instance;
  }
  var PluginTraceElement$PluginEvent$FINISHED_instance;
  function PluginTraceElement$PluginEvent$FINISHED_getInstance() {
    PluginTraceElement$PluginEvent_initFields();
    return PluginTraceElement$PluginEvent$FINISHED_instance;
  }
  PluginTraceElement$PluginEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PluginEvent',
    interfaces: [Enum]
  };
  function PluginTraceElement$PluginEvent$values() {
    return [PluginTraceElement$PluginEvent$STARTED_getInstance(), PluginTraceElement$PluginEvent$FINISHED_getInstance()];
  }
  PluginTraceElement$PluginEvent.values = PluginTraceElement$PluginEvent$values;
  function PluginTraceElement$PluginEvent$valueOf(name) {
    switch (name) {
      case 'STARTED':
        return PluginTraceElement$PluginEvent$STARTED_getInstance();
      case 'FINISHED':
        return PluginTraceElement$PluginEvent$FINISHED_getInstance();
      default:
        throwISE('No enum constant io.ktor.util.debug.plugins.PluginTraceElement.PluginEvent.' + name);
    }
  }
  PluginTraceElement$PluginEvent.valueOf_61zpoe$ = PluginTraceElement$PluginEvent$valueOf;
  PluginTraceElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PluginTraceElement',
    interfaces: []
  };
  PluginTraceElement.prototype.component1 = function () {
    return this.pluginName;
  };
  PluginTraceElement.prototype.component2 = function () {
    return this.handler;
  };
  PluginTraceElement.prototype.component3 = function () {
    return this.event;
  };
  PluginTraceElement.prototype.copy_rpxg1q$ = function (pluginName, handler, event) {
    return new PluginTraceElement(pluginName === void 0 ? this.pluginName : pluginName, handler === void 0 ? this.handler : handler, event === void 0 ? this.event : event);
  };
  PluginTraceElement.prototype.toString = function () {
    return 'PluginTraceElement(pluginName=' + Kotlin.toString(this.pluginName) + (', handler=' + Kotlin.toString(this.handler)) + (', event=' + Kotlin.toString(this.event)) + ')';
  };
  PluginTraceElement.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pluginName) | 0;
    result = result * 31 + Kotlin.hashCode(this.handler) | 0;
    result = result * 31 + Kotlin.hashCode(this.event) | 0;
    return result;
  };
  PluginTraceElement.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pluginName, other.pluginName) && Kotlin.equals(this.handler, other.handler) && Kotlin.equals(this.event, other.event)))));
  };
  var UNDECIDED;
  var SUCCESS;
  var FAILURE;
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  function Symbol(symbol) {
    this.symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return this.symbol;
  };
  Symbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Symbol',
    interfaces: []
  };
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OpDescriptor',
    interfaces: []
  };
  var NO_DECISION;
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_6g93vj$_0 = atomic(NO_DECISION);
  }
  Object.defineProperty(AtomicOp.prototype, 'isDecided', {
    configurable: true,
    get: function () {
      return this._consensus_6g93vj$_0.kotlinx$atomicfu$value !== NO_DECISION;
    }
  });
  AtomicOp.prototype.tryDecide_s8jyv4$ = function (decision) {
    if (!(decision !== NO_DECISION)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    return this._consensus_6g93vj$_0.atomicfu$compareAndSet(NO_DECISION, decision);
  };
  AtomicOp.prototype.decide_6ronsh$_0 = function (decision) {
    return this.tryDecide_s8jyv4$(decision) ? decision : this._consensus_6g93vj$_0.kotlinx$atomicfu$value;
  };
  AtomicOp.prototype.perform_s8jyv4$ = function (affected) {
    var tmp$, tmp$_0;
    var decision = this._consensus_6g93vj$_0.kotlinx$atomicfu$value;
    if (decision === NO_DECISION) {
      decision = this.decide_6ronsh$_0(this.prepare_11rb$((tmp$ = affected) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE()));
    }
    this.complete_19pj23$((tmp$_0 = affected) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicOp',
    interfaces: [OpDescriptor]
  };
  function AtomicDesc() {
  }
  AtomicDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicDesc',
    interfaces: []
  };
  function LockFreeLinkedListNode() {
    this._next_4goumf$_0 = atomic(this);
    this._prev_4i0clj$_0 = atomic(this);
    this._removedRef_x8yew7$_0 = atomic(null);
  }
  LockFreeLinkedListNode.prototype.removed_kopcah$_0 = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this._removedRef_x8yew7$_0.kotlinx$atomicfu$value) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = new Removed(this);
      this._removedRef_x8yew7$_0.kotlinx$atomicfu$value = $receiver;
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  };
  function LockFreeLinkedListNode$CondAddOp(newNode) {
    AtomicOp.call(this);
    this.newNode = newNode;
    this.oldNext = null;
  }
  LockFreeLinkedListNode$CondAddOp.prototype.complete_19pj23$ = function (affected, failure) {
    var success = failure == null;
    var update = success ? this.newNode : this.oldNext;
    if (update != null && affected._next_4goumf$_0.atomicfu$compareAndSet(this, update)) {
      if (success)
        this.newNode.finishAdd_yi7cqu$_0(ensureNotNull(this.oldNext));
    }
  };
  LockFreeLinkedListNode$CondAddOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CondAddOp',
    interfaces: [AtomicOp]
  };
  LockFreeLinkedListNode.prototype.makeCondAddOp_nf3cwc$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListNode.makeCondAddOp_nf3cwc$', wrapFunction(function () {
    var internal = _.io.ktor.util.internal;
    var LockFreeLinkedListNode$CondAddOp = _.io.ktor.util.internal.LockFreeLinkedListNode.CondAddOp;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype = Object.create(LockFreeLinkedListNode$CondAddOp.prototype);
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype.constructor = LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral;
    function LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral(closure$condition, newNode) {
      this.closure$condition = closure$condition;
      LockFreeLinkedListNode$CondAddOp.call(this, newNode);
    }
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype.prepare_11rb$ = function (affected) {
      return this.closure$condition() ? null : internal.CONDITION_FALSE;
    };
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [LockFreeLinkedListNode$CondAddOp]
    };
    return function (node, condition) {
      return new LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral(condition, node);
    };
  }));
  Object.defineProperty(LockFreeLinkedListNode.prototype, 'isRemoved', {
    configurable: true,
    get: function () {
      return Kotlin.isType(this.next, Removed);
    }
  });
  Object.defineProperty(LockFreeLinkedListNode.prototype, 'next', {
    configurable: true,
    get: function () {
      var $receiver = this._next_4goumf$_0;
      while (true) {
        var next = $receiver.kotlinx$atomicfu$value;
        if (!Kotlin.isType(next, OpDescriptor))
          return next;
        next.perform_s8jyv4$(this);
      }
    }
  });
  Object.defineProperty(LockFreeLinkedListNode.prototype, 'nextNode', {
    configurable: true,
    get: function () {
      return unwrap(this.next);
    }
  });
  Object.defineProperty(LockFreeLinkedListNode.prototype, 'prev', {
    configurable: true,
    get: function () {
      var $receiver = this._prev_4i0clj$_0;
      while (true) {
        var prev = $receiver.kotlinx$atomicfu$value;
        var tmp$;
        if (Kotlin.isType(prev, Removed))
          return prev;
        Kotlin.isType(tmp$ = prev, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        if (prev.next === this)
          return prev;
        this.correctPrev_c793db$_0(prev, null);
      }
    }
  });
  Object.defineProperty(LockFreeLinkedListNode.prototype, 'prevNode', {
    configurable: true,
    get: function () {
      return unwrap(this.prev);
    }
  });
  LockFreeLinkedListNode.prototype.addOneIfEmpty_4m99wv$ = function (node) {
    node._prev_4i0clj$_0.kotlinx$atomicfu$value = this;
    node._next_4goumf$_0.kotlinx$atomicfu$value = this;
    while (true) {
      var next = this.next;
      if (next !== this)
        return false;
      if (this._next_4goumf$_0.atomicfu$compareAndSet(this, node)) {
        node.finishAdd_yi7cqu$_0(this);
        return true;
      }
    }
  };
  LockFreeLinkedListNode.prototype.addLast_4m99wv$ = function (node) {
    var tmp$;
    while (true) {
      var prev = Kotlin.isType(tmp$ = this.prev, LockFreeLinkedListNode) ? tmp$ : throwCCE();
      if (prev.addNext_jl4ux8$(node, this))
        return;
    }
  };
  LockFreeLinkedListNode.prototype.describeAddLast_dbtjul$ = function (node) {
    return new LockFreeLinkedListNode$AddLastDesc(this, node);
  };
  LockFreeLinkedListNode.prototype.addLastIf_nf3cwc$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListNode.addLastIf_nf3cwc$', wrapFunction(function () {
    var LockFreeLinkedListNode = _.io.ktor.util.internal.LockFreeLinkedListNode;
    var throwCCE = Kotlin.throwCCE;
    var internal = _.io.ktor.util.internal;
    var LockFreeLinkedListNode$CondAddOp = _.io.ktor.util.internal.LockFreeLinkedListNode.CondAddOp;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype = Object.create(LockFreeLinkedListNode$CondAddOp.prototype);
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype.constructor = LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral;
    function LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral(closure$condition, newNode) {
      this.closure$condition = closure$condition;
      LockFreeLinkedListNode$CondAddOp.call(this, newNode);
    }
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype.prepare_11rb$ = function (affected) {
      return this.closure$condition() ? null : internal.CONDITION_FALSE;
    };
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [LockFreeLinkedListNode$CondAddOp]
    };
    return function (node, condition) {
      var tmp$;
      var condAdd = new LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral(condition, node);
      while (true) {
        var prev = Kotlin.isType(tmp$ = this.prev, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        switch (prev.tryCondAddNext_1kddb5$(node, this, condAdd)) {
          case 1:
            return true;
          case 2:
            return false;
        }
      }
    };
  }));
  LockFreeLinkedListNode.prototype.addLastIfPrev_1y5rwb$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListNode.addLastIfPrev_1y5rwb$', wrapFunction(function () {
    var LockFreeLinkedListNode = _.io.ktor.util.internal.LockFreeLinkedListNode;
    var throwCCE = Kotlin.throwCCE;
    return function (node, predicate) {
      var tmp$;
      while (true) {
        var prev = Kotlin.isType(tmp$ = this.prev, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        if (!predicate(prev))
          return false;
        if (prev.addNext_jl4ux8$(node, this))
          return true;
      }
    };
  }));
  LockFreeLinkedListNode.prototype.addLastIfPrevAndIf_3xg5qw$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListNode.addLastIfPrevAndIf_3xg5qw$', wrapFunction(function () {
    var LockFreeLinkedListNode = _.io.ktor.util.internal.LockFreeLinkedListNode;
    var throwCCE = Kotlin.throwCCE;
    var internal = _.io.ktor.util.internal;
    var LockFreeLinkedListNode$CondAddOp = _.io.ktor.util.internal.LockFreeLinkedListNode.CondAddOp;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype = Object.create(LockFreeLinkedListNode$CondAddOp.prototype);
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype.constructor = LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral;
    function LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral(closure$condition, newNode) {
      this.closure$condition = closure$condition;
      LockFreeLinkedListNode$CondAddOp.call(this, newNode);
    }
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.prototype.prepare_11rb$ = function (affected) {
      return this.closure$condition() ? null : internal.CONDITION_FALSE;
    };
    LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [LockFreeLinkedListNode$CondAddOp]
    };
    return function (node, predicate, condition) {
      var tmp$;
      var condAdd = new LockFreeLinkedListNode$makeCondAddOp$ObjectLiteral(condition, node);
      while (true) {
        var prev = Kotlin.isType(tmp$ = this.prev, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        if (!predicate(prev))
          return false;
        switch (prev.tryCondAddNext_1kddb5$(node, this, condAdd)) {
          case 1:
            return true;
          case 2:
            return false;
        }
      }
    };
  }));
  LockFreeLinkedListNode.prototype.addNext_jl4ux8$ = function (node, next) {
    node._prev_4i0clj$_0.kotlinx$atomicfu$value = this;
    node._next_4goumf$_0.kotlinx$atomicfu$value = next;
    if (!this._next_4goumf$_0.atomicfu$compareAndSet(next, node))
      return false;
    node.finishAdd_yi7cqu$_0(next);
    return true;
  };
  LockFreeLinkedListNode.prototype.tryCondAddNext_1kddb5$ = function (node, next, condAdd) {
    node._prev_4i0clj$_0.kotlinx$atomicfu$value = this;
    node._next_4goumf$_0.kotlinx$atomicfu$value = next;
    condAdd.oldNext = next;
    if (!this._next_4goumf$_0.atomicfu$compareAndSet(next, condAdd))
      return 0;
    return condAdd.perform_s8jyv4$(this) == null ? 1 : 2;
  };
  LockFreeLinkedListNode.prototype.remove = function () {
    var tmp$;
    while (true) {
      var next = this.next;
      if (Kotlin.isType(next, Removed)) {
        return false;
      }
      if (next === this)
        return false;
      var removed = (Kotlin.isType(tmp$ = next, LockFreeLinkedListNode) ? tmp$ : throwCCE()).removed_kopcah$_0();
      if (this._next_4goumf$_0.atomicfu$compareAndSet(next, removed)) {
        this.finishRemove_9l75il$_0(next);
        return true;
      }
    }
  };
  LockFreeLinkedListNode.prototype.helpRemove = function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = this.next, Removed) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      throw IllegalStateException_init('Must be invoked on a removed node'.toString());
    }
    var removed = tmp$_1;
    this.finishRemove_9l75il$_0(removed.ref);
  };
  function LockFreeLinkedListNode$describeRemove$ObjectLiteral(this$LockFreeLinkedListNode) {
    this.this$LockFreeLinkedListNode = this$LockFreeLinkedListNode;
    LockFreeLinkedListNode$AbstractAtomicDesc.call(this);
    this._originalNext_0 = atomic(null);
  }
  Object.defineProperty(LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype, 'affectedNode', {
    configurable: true,
    get: function () {
      return this.this$LockFreeLinkedListNode;
    }
  });
  Object.defineProperty(LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype, 'originalNext', {
    configurable: true,
    get: function () {
      return this._originalNext_0.kotlinx$atomicfu$value;
    }
  });
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype.failure_37rl8k$ = function (affected, next) {
    return Kotlin.isType(next, Removed) ? ALREADY_REMOVED : null;
  };
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype.onPrepare_jl4ux8$ = function (affected, next) {
    this._originalNext_0.atomicfu$compareAndSet(null, next);
    return null;
  };
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype.updatedNext_jl4ux8$ = function (affected, next) {
    return next.removed_kopcah$_0();
  };
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.prototype.finishOnSuccess_jl4ux8$ = function (affected, next) {
    this.this$LockFreeLinkedListNode.finishRemove_9l75il$_0(next);
  };
  LockFreeLinkedListNode$describeRemove$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [LockFreeLinkedListNode$AbstractAtomicDesc]
  };
  LockFreeLinkedListNode.prototype.describeRemove = function () {
    if (this.isRemoved)
      return null;
    return new LockFreeLinkedListNode$describeRemove$ObjectLiteral(this);
  };
  LockFreeLinkedListNode.prototype.removeFirstOrNull = function () {
    var tmp$;
    while (true) {
      var first = Kotlin.isType(tmp$ = this.next, LockFreeLinkedListNode) ? tmp$ : throwCCE();
      if (first === this)
        return null;
      if (first.remove())
        return first;
      first.helpDelete();
    }
  };
  LockFreeLinkedListNode.prototype.describeRemoveFirst = function () {
    return new LockFreeLinkedListNode$RemoveFirstDesc(this);
  };
  LockFreeLinkedListNode.prototype.removeFirstIfIsInstanceOf_287e2$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListNode.removeFirstIfIsInstanceOf_287e2$', wrapFunction(function () {
    var LockFreeLinkedListNode = _.io.ktor.util.internal.LockFreeLinkedListNode;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      while (true) {
        var first = Kotlin.isType(tmp$ = this.next, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        if (first === this)
          return null;
        if (!isT(first))
          return null;
        if (first.remove())
          return first;
        first.helpDelete();
      }
    };
  }));
  LockFreeLinkedListNode.prototype.removeFirstIfIsInstanceOfOrPeekIf_14urrv$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListNode.removeFirstIfIsInstanceOfOrPeekIf_14urrv$', wrapFunction(function () {
    var LockFreeLinkedListNode = _.io.ktor.util.internal.LockFreeLinkedListNode;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, predicate) {
      var tmp$;
      while (true) {
        var first = Kotlin.isType(tmp$ = this.next, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        if (first === this)
          return null;
        if (!isT(first))
          return null;
        if (predicate(first))
          return first;
        if (first.remove())
          return first;
        first.helpDelete();
      }
    };
  }));
  function LockFreeLinkedListNode$AddLastDesc(queue, node) {
    LockFreeLinkedListNode$AbstractAtomicDesc.call(this);
    this.queue = queue;
    this.node = node;
    if (!(this.node._next_4goumf$_0.kotlinx$atomicfu$value === this.node && this.node._prev_4i0clj$_0.kotlinx$atomicfu$value === this.node)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this._affectedNode_k6zrii$_0 = atomic(null);
  }
  LockFreeLinkedListNode$AddLastDesc.prototype.takeAffectedNode_wwbkgf$ = function (op) {
    var tmp$;
    while (true) {
      var prev = Kotlin.isType(tmp$ = this.queue._prev_4i0clj$_0.kotlinx$atomicfu$value, LockFreeLinkedListNode) ? tmp$ : throwCCE();
      var next = prev._next_4goumf$_0.kotlinx$atomicfu$value;
      if (next === this.queue)
        return prev;
      if (next === op)
        return prev;
      if (Kotlin.isType(next, OpDescriptor)) {
        next.perform_s8jyv4$(prev);
        continue;
      }
      var affected = this.queue.correctPrev_c793db$_0(prev, op);
      if (affected != null)
        return affected;
    }
  };
  Object.defineProperty(LockFreeLinkedListNode$AddLastDesc.prototype, 'affectedNode', {
    configurable: true,
    get: function () {
      return this._affectedNode_k6zrii$_0.kotlinx$atomicfu$value;
    }
  });
  Object.defineProperty(LockFreeLinkedListNode$AddLastDesc.prototype, 'originalNext', {
    configurable: true,
    get: function () {
      return this.queue;
    }
  });
  LockFreeLinkedListNode$AddLastDesc.prototype.retry_37rl8k$ = function (affected, next) {
    return next !== this.queue;
  };
  LockFreeLinkedListNode$AddLastDesc.prototype.onPrepare_jl4ux8$ = function (affected, next) {
    this._affectedNode_k6zrii$_0.atomicfu$compareAndSet(null, affected);
    return null;
  };
  LockFreeLinkedListNode$AddLastDesc.prototype.updatedNext_jl4ux8$ = function (affected, next) {
    this.node._prev_4i0clj$_0.atomicfu$compareAndSet(this.node, affected);
    this.node._next_4goumf$_0.atomicfu$compareAndSet(this.node, this.queue);
    return this.node;
  };
  LockFreeLinkedListNode$AddLastDesc.prototype.finishOnSuccess_jl4ux8$ = function (affected, next) {
    this.node.finishAdd_yi7cqu$_0(this.queue);
  };
  LockFreeLinkedListNode$AddLastDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddLastDesc',
    interfaces: [LockFreeLinkedListNode$AbstractAtomicDesc]
  };
  function LockFreeLinkedListNode$RemoveFirstDesc(queue) {
    LockFreeLinkedListNode$AbstractAtomicDesc.call(this);
    this.queue = queue;
    this._affectedNode_sdwxx1$_0 = atomic(null);
    this._originalNext_jl15jt$_0 = atomic(null);
  }
  Object.defineProperty(LockFreeLinkedListNode$RemoveFirstDesc.prototype, 'result', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = ensureNotNull(this.affectedNode)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.takeAffectedNode_wwbkgf$ = function (op) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.queue.next, LockFreeLinkedListNode) ? tmp$ : throwCCE();
  };
  Object.defineProperty(LockFreeLinkedListNode$RemoveFirstDesc.prototype, 'affectedNode', {
    configurable: true,
    get: function () {
      return this._affectedNode_sdwxx1$_0.kotlinx$atomicfu$value;
    }
  });
  Object.defineProperty(LockFreeLinkedListNode$RemoveFirstDesc.prototype, 'originalNext', {
    configurable: true,
    get: function () {
      return this._originalNext_jl15jt$_0.kotlinx$atomicfu$value;
    }
  });
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.failure_37rl8k$ = function (affected, next) {
    return affected === this.queue ? LIST_EMPTY : null;
  };
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.validatePrepared_11rb$ = function (node) {
    return true;
  };
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.retry_37rl8k$ = function (affected, next) {
    if (!Kotlin.isType(next, Removed))
      return false;
    affected.helpDelete();
    return true;
  };
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.onPrepare_jl4ux8$ = function (affected, next) {
    var tmp$;
    if (!!Kotlin.isType(affected, LockFreeLinkedListHead)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!this.validatePrepared_11rb$((tmp$ = affected) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE()))
      return REMOVE_PREPARED;
    this._affectedNode_sdwxx1$_0.atomicfu$compareAndSet(null, affected);
    this._originalNext_jl15jt$_0.atomicfu$compareAndSet(null, next);
    return null;
  };
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.updatedNext_jl4ux8$ = function (affected, next) {
    return next.removed_kopcah$_0();
  };
  LockFreeLinkedListNode$RemoveFirstDesc.prototype.finishOnSuccess_jl4ux8$ = function (affected, next) {
    affected.finishRemove_9l75il$_0(next);
  };
  LockFreeLinkedListNode$RemoveFirstDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RemoveFirstDesc',
    interfaces: [LockFreeLinkedListNode$AbstractAtomicDesc]
  };
  function LockFreeLinkedListNode$AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype.takeAffectedNode_wwbkgf$ = function (op) {
    return ensureNotNull(this.affectedNode);
  };
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype.failure_37rl8k$ = function (affected, next) {
    return null;
  };
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype.retry_37rl8k$ = function (affected, next) {
    return false;
  };
  function LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp(next, op, desc) {
    OpDescriptor.call(this);
    this.next = next;
    this.op = op;
    this.desc = desc;
  }
  LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp.prototype.perform_s8jyv4$ = function (affected) {
    var tmp$;
    Kotlin.isType(tmp$ = affected, LockFreeLinkedListNode) ? tmp$ : throwCCE();
    var decision = this.desc.onPrepare_jl4ux8$(affected, this.next);
    if (decision != null) {
      if (decision === REMOVE_PREPARED) {
        var removed = this.next.removed_kopcah$_0();
        if (affected._next_4goumf$_0.atomicfu$compareAndSet(this, removed)) {
          affected.helpDelete();
        }
      } else {
        this.op.tryDecide_s8jyv4$(decision);
        affected._next_4goumf$_0.atomicfu$compareAndSet(this, this.next);
      }
      return decision;
    }
    var update = this.op.isDecided ? this.next : this.op;
    affected._next_4goumf$_0.atomicfu$compareAndSet(this, update);
    return null;
  };
  LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrepareOp',
    interfaces: [OpDescriptor]
  };
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype.prepare_3zx8rp$ = function (op) {
    var tmp$, tmp$_0;
    while (true) {
      var affected = this.takeAffectedNode_wwbkgf$(op);
      var next = affected._next_4goumf$_0.kotlinx$atomicfu$value;
      if (next === op)
        return null;
      if (op.isDecided)
        return null;
      if (Kotlin.isType(next, OpDescriptor)) {
        next.perform_s8jyv4$(affected);
        continue;
      }
      var failure = this.failure_37rl8k$(affected, next);
      if (failure != null)
        return failure;
      if (this.retry_37rl8k$(affected, next))
        continue;
      var prepareOp = new LockFreeLinkedListNode$AbstractAtomicDesc$PrepareOp(Kotlin.isType(tmp$ = next, LockFreeLinkedListNode) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = op, AtomicOp) ? tmp$_0 : throwCCE(), this);
      if (affected._next_4goumf$_0.atomicfu$compareAndSet(next, prepareOp)) {
        var prepFail = prepareOp.perform_s8jyv4$(affected);
        if (prepFail === REMOVE_PREPARED)
          continue;
        return prepFail;
      }
    }
  };
  LockFreeLinkedListNode$AbstractAtomicDesc.prototype.complete_o9ybpj$ = function (op, failure) {
    var tmp$, tmp$_0;
    var success = failure == null;
    var tmp$_1;
    if ((tmp$ = this.affectedNode) != null)
      tmp$_1 = tmp$;
    else {
      if (!!success) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }
      return;
    }
    var affectedNode = tmp$_1;
    var tmp$_2;
    if ((tmp$_0 = this.originalNext) != null)
      tmp$_2 = tmp$_0;
    else {
      if (!!success) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }
      return;
    }
    var originalNext = tmp$_2;
    var update = success ? this.updatedNext_jl4ux8$(affectedNode, originalNext) : originalNext;
    if (affectedNode._next_4goumf$_0.atomicfu$compareAndSet(op, update)) {
      if (success)
        this.finishOnSuccess_jl4ux8$(affectedNode, originalNext);
    }
  };
  LockFreeLinkedListNode$AbstractAtomicDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractAtomicDesc',
    interfaces: [AtomicDesc]
  };
  LockFreeLinkedListNode.prototype.finishAdd_yi7cqu$_0 = function (next) {
    var $receiver = next._prev_4i0clj$_0;
    while (true) {
      var nextPrev = $receiver.kotlinx$atomicfu$value;
      var tmp$;
      if (Kotlin.isType(nextPrev, Removed) || this.next !== next)
        return;
      if (next._prev_4i0clj$_0.atomicfu$compareAndSet(nextPrev, this)) {
        if (Kotlin.isType(this.next, Removed)) {
          next.correctPrev_c793db$_0(Kotlin.isType(tmp$ = nextPrev, LockFreeLinkedListNode) ? tmp$ : throwCCE(), null);
        }
        return;
      }
    }
  };
  LockFreeLinkedListNode.prototype.finishRemove_9l75il$_0 = function (next) {
    this.helpDelete();
    next.correctPrev_c793db$_0(unwrap(this._prev_4i0clj$_0.kotlinx$atomicfu$value), null);
  };
  LockFreeLinkedListNode.prototype.markPrev_yz7oyt$_0 = function () {
    var $receiver = this._prev_4i0clj$_0;
    while (true) {
      var prev = $receiver.kotlinx$atomicfu$value;
      var tmp$;
      if (Kotlin.isType(prev, Removed))
        return prev.ref;
      var removedPrev = (prev === this ? this.findHead_cgj9ge$_0() : Kotlin.isType(tmp$ = prev, LockFreeLinkedListNode) ? tmp$ : throwCCE()).removed_kopcah$_0();
      if (this._prev_4i0clj$_0.atomicfu$compareAndSet(prev, removedPrev))
        return prev;
    }
  };
  LockFreeLinkedListNode.prototype.findHead_cgj9ge$_0 = function () {
    var cur = this;
    while (true) {
      if (Kotlin.isType(cur, LockFreeLinkedListHead))
        return cur;
      cur = cur.nextNode;
      if (!(cur !== this)) {
        var message = 'Cannot loop to this while looking for list head';
        throw IllegalStateException_init(message.toString());
      }
    }
  };
  LockFreeLinkedListNode.prototype.helpDelete = function () {
    var tmp$, tmp$_0;
    var last = null;
    var prev = this.markPrev_yz7oyt$_0();
    var next = (Kotlin.isType(tmp$ = this._next_4goumf$_0.kotlinx$atomicfu$value, Removed) ? tmp$ : throwCCE()).ref;
    while (true) {
      var nextNext = next.next;
      if (Kotlin.isType(nextNext, Removed)) {
        next.markPrev_yz7oyt$_0();
        next = nextNext.ref;
        continue;
      }
      var prevNext = prev.next;
      if (Kotlin.isType(prevNext, Removed)) {
        if (last != null) {
          prev.markPrev_yz7oyt$_0();
          last._next_4goumf$_0.atomicfu$compareAndSet(prev, prevNext.ref);
          prev = last;
          last = null;
        } else {
          prev = unwrap(prev._prev_4i0clj$_0.kotlinx$atomicfu$value);
        }
        continue;
      }
      if (prevNext !== this) {
        last = prev;
        prev = Kotlin.isType(tmp$_0 = prevNext, LockFreeLinkedListNode) ? tmp$_0 : throwCCE();
        if (prev === next)
          return;
        continue;
      }
      if (prev._next_4goumf$_0.atomicfu$compareAndSet(this, next))
        return;
    }
  };
  LockFreeLinkedListNode.prototype.correctPrev_c793db$_0 = function (_prev, op) {
    var tmp$;
    var prev = _prev;
    var last = null;
    while (true) {
      var prevNext = prev._next_4goumf$_0.kotlinx$atomicfu$value;
      if (prevNext === op)
        return prev;
      if (Kotlin.isType(prevNext, OpDescriptor)) {
        prevNext.perform_s8jyv4$(prev);
        continue;
      }
      if (Kotlin.isType(prevNext, Removed)) {
        if (last !== null) {
          prev.markPrev_yz7oyt$_0();
          last._next_4goumf$_0.atomicfu$compareAndSet(prev, prevNext.ref);
          prev = last;
          last = null;
        } else {
          prev = unwrap(prev._prev_4i0clj$_0.kotlinx$atomicfu$value);
        }
        continue;
      }
      var oldPrev = this._prev_4i0clj$_0.kotlinx$atomicfu$value;
      if (Kotlin.isType(oldPrev, Removed))
        return null;
      if (prevNext !== this) {
        last = prev;
        prev = Kotlin.isType(tmp$ = prevNext, LockFreeLinkedListNode) ? tmp$ : throwCCE();
        continue;
      }
      if (oldPrev === prev)
        return null;
      if (this._prev_4i0clj$_0.atomicfu$compareAndSet(oldPrev, prev)) {
        if (!Kotlin.isType(prev._prev_4i0clj$_0.kotlinx$atomicfu$value, Removed))
          return null;
      }
    }
  };
  LockFreeLinkedListNode.prototype.validateNode_hn3bin$ = function (prev, next) {
    if (!(prev === this._prev_4i0clj$_0.kotlinx$atomicfu$value)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!(next === this._next_4goumf$_0.kotlinx$atomicfu$value)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
  };
  LockFreeLinkedListNode.prototype.toString = function () {
    return toString(Kotlin.getKClassFromExpression(this).simpleName) + '@' + hashCode(this);
  };
  LockFreeLinkedListNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LockFreeLinkedListNode',
    interfaces: []
  };
  function Removed(ref) {
    this.ref = ref;
  }
  Removed.prototype.toString = function () {
    return 'Removed[' + this.ref + ']';
  };
  Removed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Removed',
    interfaces: []
  };
  function unwrap($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return (tmp$_2 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver, Removed) ? tmp$ : null) != null ? tmp$_0.ref : null) != null ? tmp$_2 : Kotlin.isType(tmp$_1 = $receiver, LockFreeLinkedListNode) ? tmp$_1 : throwCCE();
  }
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  Object.defineProperty(LockFreeLinkedListHead.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return this.next === this;
    }
  });
  LockFreeLinkedListHead.prototype.forEach_wd4hdg$ = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.internal.LockFreeLinkedListHead.forEach_wd4hdg$', wrapFunction(function () {
    var LockFreeLinkedListNode = _.io.ktor.util.internal.LockFreeLinkedListNode;
    var throwCCE = Kotlin.throwCCE;
    var equals = Kotlin.equals;
    return function (T_0, isT, block) {
      var tmp$;
      var cur = Kotlin.isType(tmp$ = this.next, LockFreeLinkedListNode) ? tmp$ : throwCCE();
      while (!equals(cur, this)) {
        if (isT(cur))
          block(cur);
        cur = cur.nextNode;
      }
    };
  }));
  LockFreeLinkedListHead.prototype.remove = function () {
    throw UnsupportedOperationException_init_0();
  };
  LockFreeLinkedListHead.prototype.describeRemove = function () {
    throw UnsupportedOperationException_init_0();
  };
  LockFreeLinkedListHead.prototype.validate_8be2vx$ = function () {
    var tmp$, tmp$_0;
    var prev = this;
    var cur = Kotlin.isType(tmp$ = this.next, LockFreeLinkedListNode) ? tmp$ : throwCCE();
    while (!equals(cur, this)) {
      var next = cur.nextNode;
      cur.validateNode_hn3bin$(prev, next);
      prev = cur;
      cur = next;
    }
    this.validateNode_hn3bin$(prev, Kotlin.isType(tmp$_0 = this.next, LockFreeLinkedListNode) ? tmp$_0 : throwCCE());
  };
  LockFreeLinkedListHead.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LockFreeLinkedListHead',
    interfaces: [LockFreeLinkedListNode]
  };
  function error($receiver, exception) {
    var tmp$;
    $receiver.error_ldd2zj$((tmp$ = exception.message) != null ? tmp$ : 'Exception of type ' + Kotlin.getKClassFromExpression(exception), exception);
  }
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.interceptors_0 = interceptors;
    this.coroutineContext_hemy3t$_0 = coroutineContext;
    this.subject_is4q2w$_0 = subject;
    this.index_0 = 0;
  }
  Object.defineProperty(DebugPipelineContext.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_hemy3t$_0;
    }
  });
  Object.defineProperty(DebugPipelineContext.prototype, 'subject', {
    configurable: true,
    get: function () {
      return this.subject_is4q2w$_0;
    },
    set: function (subject) {
      this.subject_is4q2w$_0 = subject;
    }
  });
  DebugPipelineContext.prototype.finish = function () {
    this.index_0 = -1;
  };
  DebugPipelineContext.prototype.proceedWith_trkh7z$ = function (subject, continuation) {
    this.subject = subject;
    return this.proceed(continuation);
  };
  DebugPipelineContext.prototype.proceed = function (continuation) {
    var index = this.index_0;
    if (index < 0)
      return this.subject;
    if (index >= this.interceptors_0.size) {
      this.finish();
      return this.subject;
    }
    return this.proceedLoop_0(continuation);
  };
  DebugPipelineContext.prototype.execute_trkh7z$ = function (initial, continuation) {
    this.index_0 = 0;
    this.subject = initial;
    return this.proceed(continuation);
  };
  function Coroutine$proceedLoop_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$index = void 0;
    this.local$interceptors = void 0;
  }
  Coroutine$proceedLoop_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$proceedLoop_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$proceedLoop_0.prototype.constructor = Coroutine$proceedLoop_0;
  Coroutine$proceedLoop_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$index = this.$this.index_0;
            if (this.local$index === -1) {
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$interceptors = this.$this.interceptors_0;
            if (this.local$index >= this.local$interceptors.size) {
              this.$this.finish();
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var executeInterceptor = this.local$interceptors.get_za3lpa$(this.local$index);
            this.$this.index_0 = this.local$index + 1 | 0;
            this.state_0 = 5;
            this.result_0 = (Kotlin.isType(tmp$ = executeInterceptor, SuspendFunction2) ? tmp$ : throwCCE())(this.$this, this.$this.subject, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return this.$this.subject;
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
  DebugPipelineContext.prototype.proceedLoop_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$proceedLoop_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DebugPipelineContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DebugPipelineContext',
    interfaces: [PipelineContext]
  };
  function PhaseContent(phase, relation, interceptors) {
    PhaseContent$Companion_getInstance();
    this.phase = phase;
    this.relation = relation;
    this.interceptors_0 = interceptors;
    this.shared = true;
  }
  Object.defineProperty(PhaseContent.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return this.interceptors_0.isEmpty();
    }
  });
  Object.defineProperty(PhaseContent.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.interceptors_0.size;
    }
  });
  PhaseContent.prototype.addInterceptor_g7ktxf$ = function (interceptor) {
    if (this.shared) {
      this.copyInterceptors_0();
    }
    this.interceptors_0.add_11rb$(interceptor);
  };
  PhaseContent.prototype.addTo_nenlhb$ = function (destination) {
    var tmp$;
    var interceptors = this.interceptors_0;
    if (Kotlin.isType(destination, ArrayList)) {
      destination.ensureCapacity_za3lpa$(destination.size + interceptors.size | 0);
    }
    tmp$ = interceptors.size;
    for (var index = 0; index < tmp$; index++) {
      destination.add_11rb$(interceptors.get_za3lpa$(index));
    }
  };
  PhaseContent.prototype.addTo_659igw$ = function (destination) {
    if (this.isEmpty)
      return;
    if (destination.isEmpty) {
      destination.interceptors_0 = this.sharedInterceptors();
      destination.shared = true;
      return;
    }
    if (destination.shared) {
      destination.copyInterceptors_0();
    }
    this.addTo_nenlhb$(destination.interceptors_0);
  };
  PhaseContent.prototype.sharedInterceptors = function () {
    this.shared = true;
    return this.interceptors_0;
  };
  PhaseContent.prototype.copiedInterceptors = function () {
    var $receiver = ArrayList_init_0();
    $receiver.addAll_brywnq$(this.interceptors_0);
    return $receiver;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.phase.name + '`, ' + this.size + ' handlers';
  };
  PhaseContent.prototype.copyInterceptors_0 = function () {
    this.interceptors_0 = this.copiedInterceptors();
    this.shared = false;
  };
  function PhaseContent$Companion() {
    PhaseContent$Companion_instance = this;
    this.SharedArrayList = ArrayList_init_0();
  }
  PhaseContent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PhaseContent$Companion_instance = null;
  function PhaseContent$Companion_getInstance() {
    if (PhaseContent$Companion_instance === null) {
      new PhaseContent$Companion();
    }
    return PhaseContent$Companion_instance;
  }
  PhaseContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhaseContent',
    interfaces: []
  };
  function PhaseContent_init(phase, relation, $this) {
    $this = $this || Object.create(PhaseContent.prototype);
    var tmp$;
    PhaseContent.call($this, phase, relation, Kotlin.isType(tmp$ = PhaseContent$Companion_getInstance().SharedArrayList, MutableList) ? tmp$ : throwCCE());
    if (!PhaseContent$Companion_getInstance().SharedArrayList.isEmpty()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init(message.toString());
    }
    return $this;
  }
  function Coroutine$execute$lambda(closure$context_0, this$execute_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$context = closure$context_0;
    this.local$this$execute = this$execute_0;
  }
  Coroutine$execute$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute$lambda.prototype.constructor = Coroutine$execute$lambda;
  Coroutine$execute$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$execute.execute_8pmvt0$(this.local$closure$context, Unit, this);
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
  function execute$lambda(closure$context_0, this$execute_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$execute$lambda(closure$context_0, this$execute_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Pipeline(phases) {
    this.attributes = Attributes_0(true);
    this.developmentMode_pf3u1e$_0 = false;
    this.phasesRaw_hnbfpg$_0 = mutableListOf(phases.slice());
    this.interceptorsQuantity_zh48jz$_0 = 0;
    this._interceptors_8zww1r$_0 = atomic(null);
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  }
  Object.defineProperty(Pipeline.prototype, 'developmentMode', {
    configurable: true,
    get: function () {
      return this.developmentMode_pf3u1e$_0;
    }
  });
  Object.defineProperty(Pipeline.prototype, 'items', {
    configurable: true,
    get: function () {
      var $receiver = this.phasesRaw_hnbfpg$_0;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
        destination.add_11rb$((tmp$_3 = Kotlin.isType(tmp$_0 = item, PipelinePhase) ? tmp$_0 : null) != null ? tmp$_3 : ensureNotNull((tmp$_2 = Kotlin.isType(tmp$_1 = item, PhaseContent) ? tmp$_1 : null) != null ? tmp$_2.phase : null));
      }
      return destination;
    }
  });
  Object.defineProperty(Pipeline.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return this.interceptorsQuantity_zh48jz$_0 === 0;
    }
  });
  Object.defineProperty(Pipeline.prototype, 'interceptors_dzu4x2$_0', {
    configurable: true,
    get: function () {
      return this._interceptors_8zww1r$_0.kotlinx$atomicfu$value;
    },
    set: function (value) {
      this._interceptors_8zww1r$_0.kotlinx$atomicfu$value = value;
    }
  });
  Pipeline.prototype.execute_8pmvt0$ = function (context, subject, continuation) {
    return this.createContext_8mqvkw$_0(context, subject, continuation.context).execute_trkh7z$(subject, continuation);
  };
  Pipeline.prototype.addPhase_cwbx9d$ = function (phase) {
    if (this.hasPhase_ee29uw$_0(phase)) {
      return;
    }
    this.phasesRaw_hnbfpg$_0.add_11rb$(phase);
  };
  Pipeline.prototype.insertPhaseAfter_b9zzbm$ = function (reference, phase) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (this.hasPhase_ee29uw$_0(phase))
      return;
    var index = this.findPhaseIndex_e6azsp$_0(reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    tmp$ = get_lastIndex_0(this.phasesRaw_hnbfpg$_0);
    for (var i = index + 1 | 0; i <= tmp$; i++) {
      tmp$_2 = (tmp$_1 = Kotlin.isType(tmp$_0 = this.phasesRaw_hnbfpg$_0.get_za3lpa$(i), PhaseContent) ? tmp$_0 : null) != null ? tmp$_1.relation : null;
      if (tmp$_2 == null) {
        break;
      }
      var relation = tmp$_2;
      tmp$_5 = (tmp$_4 = Kotlin.isType(tmp$_3 = relation, PipelinePhaseRelation$After) ? tmp$_3 : null) != null ? tmp$_4.relativeTo : null;
      if (tmp$_5 == null) {
        continue;
      }
      var relatedTo = tmp$_5;
      lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
    }
    this.phasesRaw_hnbfpg$_0.add_wxm5ur$(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init(phase, new PipelinePhaseRelation$After(reference)));
  };
  Pipeline.prototype.insertPhaseBefore_b9zzbm$ = function (reference, phase) {
    if (this.hasPhase_ee29uw$_0(phase))
      return;
    var index = this.findPhaseIndex_e6azsp$_0(reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.phasesRaw_hnbfpg$_0.add_wxm5ur$(index, PhaseContent_init(phase, new PipelinePhaseRelation$Before(reference)));
  };
  Pipeline.prototype.intercept_h71y74$ = function (phase, block) {
    var tmp$, tmp$_0;
    tmp$ = this.findPhase_ckbt4l$_0(phase);
    if (tmp$ == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    }
    var phaseContent = tmp$;
    typeof (tmp$_0 = block) === 'function' ? tmp$_0 : throwCCE();
    if (this.tryAddToPhaseFastPath_ysde9t$_0(phase, block)) {
      this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + 1 | 0;
      return;
    }
    phaseContent.addInterceptor_g7ktxf$(block);
    this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + 1 | 0;
    this.resetInterceptorsList_f35ip$_0();
    this.afterIntercepted();
  };
  Pipeline.prototype.afterIntercepted = function () {
  };
  Pipeline.prototype.interceptorsForPhase_cwbx9d$ = function (phase) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = this.phasesRaw_hnbfpg$_0;
    var destination = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (Kotlin.isType(element, PhaseContent))
        destination.add_11rb$(element);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var element_0 = tmp$_3.next();
        if (equals(element_0.phase, phase)) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.sharedInterceptors() : null) == null || Kotlin.isType(tmp$_0, List) ? tmp$_0 : throwCCE()) != null ? tmp$_1 : emptyList();
  };
  Pipeline.prototype.mergePhases_p814o4$ = function (from) {
    var tmp$, tmp$_0, tmp$_1;
    var fromPhases = from.phasesRaw_hnbfpg$_0;
    var toInsert = toMutableList(fromPhases);
    while (!toInsert.isEmpty()) {
      var iterator = toInsert.iterator();
      while (iterator.hasNext()) {
        var fromPhaseOrContent = iterator.next();
        var fromPhase = (tmp$_1 = Kotlin.isType(tmp$ = fromPhaseOrContent, PipelinePhase) ? tmp$ : null) != null ? tmp$_1 : (Kotlin.isType(tmp$_0 = fromPhaseOrContent, PhaseContent) ? tmp$_0 : throwCCE()).phase;
        if (this.hasPhase_ee29uw$_0(fromPhase)) {
          iterator.remove();
        } else {
          var inserted = this.insertRelativePhase_3d2nvs$_0(fromPhaseOrContent, fromPhase);
          if (inserted) {
            iterator.remove();
          }
        }
      }
    }
  };
  Pipeline.prototype.mergeInterceptors_gp87m2$_0 = function (from) {
    if (this.interceptorsQuantity_zh48jz$_0 === 0) {
      this.setInterceptorsListFromAnotherPipeline_5wxuo1$_0(from);
    } else {
      this.resetInterceptorsList_f35ip$_0();
    }
    var fromPhases = from.phasesRaw_hnbfpg$_0;
    var tmp$;
    tmp$ = fromPhases.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var fromPhase = (tmp$_2 = Kotlin.isType(tmp$_0 = element, PipelinePhase) ? tmp$_0 : null) != null ? tmp$_2 : (Kotlin.isType(tmp$_1 = element, PhaseContent) ? tmp$_1 : throwCCE()).phase;
      if (Kotlin.isType(element, PhaseContent) && !element.isEmpty) {
        Kotlin.isType(tmp$_3 = element, PhaseContent) ? tmp$_3 : throwCCE();
        element.addTo_659igw$(ensureNotNull(this.findPhase_ckbt4l$_0(fromPhase)));
        this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + element.size | 0;
      }
    }
  };
  Pipeline.prototype.merge_p814o4$ = function (from) {
    if (this.fastPathMerge_p3ex3$_0(from)) {
      return;
    }
    this.mergePhases_p814o4$(from);
    this.mergeInterceptors_gp87m2$_0(from);
  };
  Pipeline.prototype.resetFrom_p814o4$ = function (from) {
    this.phasesRaw_hnbfpg$_0.clear();
    if (!(this.interceptorsQuantity_zh48jz$_0 === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this.fastPathMerge_p3ex3$_0(from);
  };
  Pipeline.prototype.phaseInterceptors_fv4x26$ = function (phase) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.findPhase_ckbt4l$_0(phase)) != null ? tmp$.sharedInterceptors() : null) != null ? tmp$_0 : emptyList();
  };
  Pipeline.prototype.interceptorsForTests_8be2vx$ = function () {
    var tmp$;
    return (tmp$ = this.interceptors_dzu4x2$_0) != null ? tmp$ : this.cacheInterceptors_dmwwd8$_0();
  };
  Pipeline.prototype.createContext_8mqvkw$_0 = function (context, subject, coroutineContext) {
    return pipelineContextFor(context, this.sharedInterceptorsList_8aep55$_0(), subject, coroutineContext, this.developmentMode);
  };
  Pipeline.prototype.findPhase_ckbt4l$_0 = function (phase) {
    var tmp$, tmp$_0;
    var phasesList = this.phasesRaw_hnbfpg$_0;
    tmp$ = phasesList.size;
    for (var index = 0; index < tmp$; index++) {
      var current = phasesList.get_za3lpa$(index);
      if (current === phase) {
        var content = PhaseContent_init(phase, PipelinePhaseRelation$Last_getInstance());
        phasesList.set_wxm5ur$(index, content);
        return content;
      }
      if (Kotlin.isType(current, PhaseContent) && current.phase === phase) {
        return Kotlin.isType(tmp$_0 = current, PhaseContent) ? tmp$_0 : throwCCE();
      }
    }
    return null;
  };
  Pipeline.prototype.findPhaseIndex_e6azsp$_0 = function (phase) {
    var tmp$;
    var phasesList = this.phasesRaw_hnbfpg$_0;
    tmp$ = phasesList.size;
    for (var index = 0; index < tmp$; index++) {
      var current = phasesList.get_za3lpa$(index);
      if (current === phase || (Kotlin.isType(current, PhaseContent) && current.phase === phase)) {
        return index;
      }
    }
    return -1;
  };
  Pipeline.prototype.hasPhase_ee29uw$_0 = function (phase) {
    var tmp$;
    var phasesList = this.phasesRaw_hnbfpg$_0;
    tmp$ = phasesList.size;
    for (var index = 0; index < tmp$; index++) {
      var current = phasesList.get_za3lpa$(index);
      if (current === phase || (Kotlin.isType(current, PhaseContent) && current.phase === phase)) {
        return true;
      }
    }
    return false;
  };
  Pipeline.prototype.cacheInterceptors_dmwwd8$_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var interceptorsQuantity = this.interceptorsQuantity_zh48jz$_0;
    if (interceptorsQuantity === 0) {
      this.notSharedInterceptorsList_8b94z2$_0(emptyList());
      return emptyList();
    }
    var phases = this.phasesRaw_hnbfpg$_0;
    if (interceptorsQuantity === 1) {
      tmp$ = get_lastIndex_0(phases);
      for (var phaseIndex = 0; phaseIndex <= tmp$; phaseIndex++) {
        tmp$_1 = Kotlin.isType(tmp$_0 = phases.get_za3lpa$(phaseIndex), PhaseContent) ? tmp$_0 : null;
        if (tmp$_1 == null) {
          continue;
        }
        var phaseContent = tmp$_1;
        if (phaseContent.isEmpty)
          continue;
        var interceptors = phaseContent.sharedInterceptors();
        this.setInterceptorsListFromPhase_j6c7c5$_0(phaseContent);
        return interceptors;
      }
    }
    var destination = ArrayList_init_0();
    tmp$_2 = get_lastIndex_0(phases);
    for (var phaseIndex_0 = 0; phaseIndex_0 <= tmp$_2; phaseIndex_0++) {
      tmp$_4 = Kotlin.isType(tmp$_3 = phases.get_za3lpa$(phaseIndex_0), PhaseContent) ? tmp$_3 : null;
      if (tmp$_4 == null) {
        continue;
      }
      var phase = tmp$_4;
      phase.addTo_nenlhb$(destination);
    }
    this.notSharedInterceptorsList_8b94z2$_0(destination);
    return destination;
  };
  Pipeline.prototype.fastPathMerge_p3ex3$_0 = function (from) {
    var tmp$, tmp$_0;
    if (from.phasesRaw_hnbfpg$_0.isEmpty()) {
      return true;
    }
    if (!this.phasesRaw_hnbfpg$_0.isEmpty()) {
      return false;
    }
    var fromPhases = from.phasesRaw_hnbfpg$_0;
    tmp$ = get_lastIndex_0(fromPhases);
    for (var index = 0; index <= tmp$; index++) {
      var fromPhaseOrContent = fromPhases.get_za3lpa$(index);
      if (Kotlin.isType(fromPhaseOrContent, PipelinePhase)) {
        this.phasesRaw_hnbfpg$_0.add_11rb$(fromPhaseOrContent);
        continue;
      }
      if (!Kotlin.isType(fromPhaseOrContent, PhaseContent)) {
        continue;
      }
      Kotlin.isType(tmp$_0 = fromPhaseOrContent, PhaseContent) ? tmp$_0 : throwCCE();
      this.phasesRaw_hnbfpg$_0.add_11rb$(new PhaseContent(fromPhaseOrContent.phase, fromPhaseOrContent.relation, fromPhaseOrContent.sharedInterceptors()));
      continue;
    }
    this.interceptorsQuantity_zh48jz$_0 = this.interceptorsQuantity_zh48jz$_0 + from.interceptorsQuantity_zh48jz$_0 | 0;
    this.setInterceptorsListFromAnotherPipeline_5wxuo1$_0(from);
    return true;
  };
  Pipeline.prototype.sharedInterceptorsList_8aep55$_0 = function () {
    if (this.interceptors_dzu4x2$_0 == null) {
      this.cacheInterceptors_dmwwd8$_0();
    }
    this.interceptorsListShared_q9lih5$_0 = true;
    return ensureNotNull(this.interceptors_dzu4x2$_0);
  };
  Pipeline.prototype.resetInterceptorsList_f35ip$_0 = function () {
    this.interceptors_dzu4x2$_0 = null;
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  };
  Pipeline.prototype.notSharedInterceptorsList_8b94z2$_0 = function (list) {
    this.interceptors_dzu4x2$_0 = list;
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  };
  Pipeline.prototype.setInterceptorsListFromPhase_j6c7c5$_0 = function (phaseContent) {
    this.interceptors_dzu4x2$_0 = phaseContent.sharedInterceptors();
    this.interceptorsListShared_q9lih5$_0 = false;
    this.interceptorsListSharedPhase_9t9y1q$_0 = phaseContent.phase;
  };
  Pipeline.prototype.setInterceptorsListFromAnotherPipeline_5wxuo1$_0 = function (pipeline) {
    this.interceptors_dzu4x2$_0 = pipeline.sharedInterceptorsList_8aep55$_0();
    this.interceptorsListShared_q9lih5$_0 = true;
    this.interceptorsListSharedPhase_9t9y1q$_0 = null;
  };
  Pipeline.prototype.tryAddToPhaseFastPath_ysde9t$_0 = function (phase, block) {
    var currentInterceptors = this.interceptors_dzu4x2$_0;
    if (this.phasesRaw_hnbfpg$_0.isEmpty() || currentInterceptors == null) {
      return false;
    }
    if (this.interceptorsListShared_q9lih5$_0 || !Kotlin.isType(currentInterceptors, MutableList)) {
      return false;
    }
    if (equals(this.interceptorsListSharedPhase_9t9y1q$_0, phase)) {
      currentInterceptors.add_11rb$(block);
      return true;
    }
    if (equals(phase, last(this.phasesRaw_hnbfpg$_0)) || this.findPhaseIndex_e6azsp$_0(phase) === get_lastIndex_0(this.phasesRaw_hnbfpg$_0)) {
      ensureNotNull(this.findPhase_ckbt4l$_0(phase)).addInterceptor_g7ktxf$(block);
      currentInterceptors.add_11rb$(block);
      return true;
    }
    return false;
  };
  Pipeline.prototype.insertRelativePhase_3d2nvs$_0 = function (fromPhaseOrContent, fromPhase) {
    var tmp$, tmp$_0;
    if (fromPhaseOrContent === fromPhase)
      tmp$_0 = PipelinePhaseRelation$Last_getInstance();
    else
      tmp$_0 = (Kotlin.isType(tmp$ = fromPhaseOrContent, PhaseContent) ? tmp$ : throwCCE()).relation;
    var fromPhaseRelation = tmp$_0;
    if (Kotlin.isType(fromPhaseRelation, PipelinePhaseRelation$Last))
      this.addPhase_cwbx9d$(fromPhase);
    else if (Kotlin.isType(fromPhaseRelation, PipelinePhaseRelation$Before) && this.hasPhase_ee29uw$_0(fromPhaseRelation.relativeTo))
      this.insertPhaseBefore_b9zzbm$(fromPhaseRelation.relativeTo, fromPhase);
    else if (Kotlin.isType(fromPhaseRelation, PipelinePhaseRelation$After))
      this.insertPhaseAfter_b9zzbm$(fromPhaseRelation.relativeTo, fromPhase);
    else
      return false;
    return true;
  };
  Pipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pipeline',
    interfaces: []
  };
  function Pipeline_init(phase, interceptors, $this) {
    $this = $this || Object.create(Pipeline.prototype);
    Pipeline.call($this, [phase]);
    var tmp$;
    tmp$ = interceptors.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $this.intercept_h71y74$(phase, element);
    }
    return $this;
  }
  function Coroutine$execute($receiver_0, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$context = context_0;
  }
  Coroutine$execute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$execute.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$execute.prototype.constructor = Coroutine$execute;
  Coroutine$execute.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = initContextInDebugMode(execute$lambda(this.local$context, this.local$$receiver), this);
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
  function execute($receiver_0, context_0, continuation_0, suspended) {
    var instance = new Coroutine$execute($receiver_0, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.pipeline.execute_8vjjyp$', wrapFunction(function () {
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    var Unit = Kotlin.kotlin.Unit;
    var initContextInDebugMode = _.io.ktor.util.debug.initContextInDebugMode_lnyleu$;
    function Coroutine$execute$lambda(closure$context_0, this$execute_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$context = closure$context_0;
      this.local$this$execute = this$execute_0;
    }
    Coroutine$execute$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$execute$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$execute$lambda.prototype.constructor = Coroutine$execute$lambda;
    Coroutine$execute$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$this$execute.execute_8pmvt0$(this.local$closure$context, Unit, this);
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
    function execute$lambda(closure$context_0, this$execute_0) {
      return function (continuation_0, suspended) {
        var instance = new Coroutine$execute$lambda(closure$context_0, this$execute_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function ($receiver, context, continuation) {
      Kotlin.suspendCall(initContextInDebugMode(execute$lambda(context, $receiver), Kotlin.coroutineReceiver()));
    };
  }));
  var intercept = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.pipeline.intercept_1vle7l$', wrapFunction(function () {
    var PipelineContext = _.io.ktor.util.pipeline.PipelineContext;
    var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    function Coroutine$intercept$lambda(typeClosure$TSubject_0, isTSubject_0, closure$block_0, $receiver_0, subject_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$isTSubject = isTSubject_0;
      this.local$closure$block = closure$block_0;
      this.local$$receiver = $receiver_0;
      this.local$subject = subject_0;
    }
    Coroutine$intercept$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$intercept$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$intercept$lambda.prototype.constructor = Coroutine$intercept$lambda;
    Coroutine$intercept$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              var tmp$;
              if (!this.local$isTSubject(this.local$subject)) {
                return;
              } else {
                this.state_0 = 2;
                continue;
              }

            case 1:
              throw this.exception_0;
            case 2:
              var reinterpret = Kotlin.isType(tmp$ = this.local$$receiver, PipelineContext) ? tmp$ : null;
              if (reinterpret != null) {
                this.state_0 = 3;
                this.result_0 = this.local$closure$block(reinterpret, this.local$subject, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.result_0 = null;
                this.state_0 = 4;
                continue;
              }

            case 3:
              this.state_0 = 4;
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
    function intercept$lambda(typeClosure$TSubject_0, isTSubject_0, closure$block_0) {
      return function ($receiver_0, subject_0, continuation_0, suspended) {
        var instance = new Coroutine$intercept$lambda(typeClosure$TSubject_0, isTSubject_0, closure$block_0, $receiver_0, subject_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function (TSubject_0, isTSubject, $receiver, phase, block) {
      $receiver.intercept_h71y74$(phase, intercept$lambda(TSubject_0, isTSubject, block));
    };
  }));
  function PipelineContext(context) {
    this.context = context;
  }
  PipelineContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipelineContext',
    interfaces: [CoroutineScope]
  };
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    if (debugMode === void 0)
      debugMode = false;
    if (debugMode) {
      return new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      return new SuspendFunctionGun(subject, context, interceptors);
    }
  }
  function PipelinePhase(name) {
    this.name = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.name + "')";
  };
  PipelinePhase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipelinePhase',
    interfaces: []
  };
  function InvalidPhaseException(message) {
    Throwable.call(this);
    this.message_qcnek0$_0 = message;
    this.cause_hz8mdu$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'InvalidPhaseException';
  }
  Object.defineProperty(InvalidPhaseException.prototype, 'message', {
    get: function () {
      return this.message_qcnek0$_0;
    }
  });
  Object.defineProperty(InvalidPhaseException.prototype, 'cause', {
    get: function () {
      return this.cause_hz8mdu$_0;
    }
  });
  InvalidPhaseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidPhaseException',
    interfaces: [Throwable]
  };
  function PipelinePhaseRelation() {
  }
  function PipelinePhaseRelation$After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo = relativeTo;
  }
  PipelinePhaseRelation$After.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'After',
    interfaces: [PipelinePhaseRelation]
  };
  function PipelinePhaseRelation$Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo = relativeTo;
  }
  PipelinePhaseRelation$Before.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Before',
    interfaces: [PipelinePhaseRelation]
  };
  function PipelinePhaseRelation$Last() {
    PipelinePhaseRelation$Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  PipelinePhaseRelation$Last.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Last',
    interfaces: [PipelinePhaseRelation]
  };
  var PipelinePhaseRelation$Last_instance = null;
  function PipelinePhaseRelation$Last_getInstance() {
    if (PipelinePhaseRelation$Last_instance === null) {
      new PipelinePhaseRelation$Last();
    }
    return PipelinePhaseRelation$Last_instance;
  }
  PipelinePhaseRelation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipelinePhaseRelation',
    interfaces: []
  };
  function recoverStackTraceBridge(exception, continuation) {
    try {
      return withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return exception;
      } else
        throw _;
    }
  }
  function StackWalkingFailed() {
    StackWalkingFailed_instance = this;
  }
  StackWalkingFailed.prototype.failedToCaptureStackFrame = function () {
    throw IllegalStateException_init(('Failed to capture stack frame. This is usually happens when a coroutine is running so' + ' the frame stack is changing quickly ' + 'and the coroutine debug agent is unable to capture it concurrently.' + ' You may retry running your test to see this particular trace.').toString());
  };
  StackWalkingFailed.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StackWalkingFailed',
    interfaces: []
  };
  var StackWalkingFailed_instance = null;
  function StackWalkingFailed_getInstance() {
    if (StackWalkingFailed_instance === null) {
      new StackWalkingFailed();
    }
    return StackWalkingFailed_instance;
  }
  function StackWalkingFailedFrame() {
    StackWalkingFailedFrame_instance = this;
  }
  Object.defineProperty(StackWalkingFailedFrame.prototype, 'callerFrame', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  StackWalkingFailedFrame.prototype.getStackTraceElement = function () {
    return createStackTraceElement(getKClass(StackWalkingFailed), getCallableRef('failedToCaptureStackFrame', function ($receiver) {
      return $receiver.failedToCaptureStackFrame(), Unit;
    }.bind(null, StackWalkingFailed_getInstance())).callableName, 'StackWalkingFailed.kt', 8);
  };
  Object.defineProperty(StackWalkingFailedFrame.prototype, 'context', {
    configurable: true,
    get: function () {
      return coroutines_0.EmptyCoroutineContext;
    }
  });
  StackWalkingFailedFrame.prototype.resumeWith_tl1gpc$ = function (result) {
    StackWalkingFailed_getInstance().failedToCaptureStackFrame();
  };
  StackWalkingFailedFrame.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StackWalkingFailedFrame',
    interfaces: [Continuation, CoroutineStackFrame]
  };
  var StackWalkingFailedFrame_instance = null;
  function StackWalkingFailedFrame_getInstance() {
    if (StackWalkingFailedFrame_instance === null) {
      new StackWalkingFailedFrame();
    }
    return StackWalkingFailedFrame_instance;
  }
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.blocks_0 = blocks;
    this.continuation_0 = new SuspendFunctionGun$continuation$ObjectLiteral(this);
    this.subject_vl1hkm$_0 = initial;
    this.suspensions_0 = Kotlin.newArray(this.blocks_0.size, null);
    this.lastSuspensionIndex_0 = -1;
    this.index_0 = 0;
  }
  Object.defineProperty(SuspendFunctionGun.prototype, 'coroutineContext', {
    configurable: true,
    get: function () {
      return this.continuation_0.context;
    }
  });
  Object.defineProperty(SuspendFunctionGun.prototype, 'subject', {
    configurable: true,
    get: function () {
      return this.subject_vl1hkm$_0;
    },
    set: function (subject) {
      this.subject_vl1hkm$_0 = subject;
    }
  });
  SuspendFunctionGun.prototype.finish = function () {
    this.index_0 = this.blocks_0.size;
  };
  function SuspendFunctionGun$proceed$lambda(this$SuspendFunctionGun) {
    return function (continuation) {
      if (this$SuspendFunctionGun.index_0 === this$SuspendFunctionGun.blocks_0.size)
        return this$SuspendFunctionGun.subject;
      this$SuspendFunctionGun.addContinuation_0(continuation);
      if (this$SuspendFunctionGun.loop_0(true)) {
        this$SuspendFunctionGun.discardLastRootContinuation_0();
        return this$SuspendFunctionGun.subject;
      }
      return COROUTINE_SUSPENDED;
    };
  }
  SuspendFunctionGun.prototype.proceed = function (continuation) {
    return SuspendFunctionGun$proceed$lambda(this)(continuation);
  };
  SuspendFunctionGun.prototype.proceedWith_trkh7z$ = function (subject, continuation) {
    this.subject = subject;
    return this.proceed(continuation);
  };
  SuspendFunctionGun.prototype.execute_trkh7z$ = function (initial, continuation) {
    this.index_0 = 0;
    if (this.index_0 === this.blocks_0.size)
      return initial;
    this.subject = initial;
    if (this.lastSuspensionIndex_0 >= 0)
      throw IllegalStateException_init('Already started');
    return this.proceed(continuation);
  };
  SuspendFunctionGun.prototype.loop_0 = function (direct) {
    do {
      var currentIndex = this.index_0;
      if (currentIndex === this.blocks_0.size) {
        if (!direct) {
          this.resumeRootWith_0(new Result(this.subject));
          return false;
        }
        return true;
      }
      this.index_0 = currentIndex + 1 | 0;
      var next = this.blocks_0.get_za3lpa$(currentIndex);
      try {
        var result = next(this, this.subject, this.continuation_0);
        if (result === COROUTINE_SUSPENDED)
          return false;
      } catch (cause) {
        if (Kotlin.isType(cause, Throwable)) {
          this.resumeRootWith_0(new Result(createFailure(cause)));
          return false;
        } else
          throw cause;
      }
    }
     while (true);
  };
  SuspendFunctionGun.prototype.resumeRootWith_0 = function (result) {
    var tmp$;
    if (this.lastSuspensionIndex_0 < 0) {
      throw IllegalStateException_init('No more continuations to resume'.toString());
    }
    var next = ensureNotNull(this.suspensions_0[this.lastSuspensionIndex_0]);
    this.suspensions_0[tmp$ = this.lastSuspensionIndex_0, this.lastSuspensionIndex_0 = tmp$ - 1 | 0, tmp$] = null;
    if (!result.isFailure) {
      next.resumeWith_tl1gpc$(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(result.exceptionOrNull()), next);
      next.resumeWith_tl1gpc$(new Result(createFailure(exception)));
    }
  };
  SuspendFunctionGun.prototype.discardLastRootContinuation_0 = function () {
    var tmp$;
    if (this.lastSuspensionIndex_0 < 0)
      throw IllegalStateException_init('No more continuations to resume');
    this.suspensions_0[tmp$ = this.lastSuspensionIndex_0, this.lastSuspensionIndex_0 = tmp$ - 1 | 0, tmp$] = null;
  };
  SuspendFunctionGun.prototype.addContinuation_0 = function (continuation) {
    this.suspensions_0[this.lastSuspensionIndex_0 = this.lastSuspensionIndex_0 + 1 | 0, this.lastSuspensionIndex_0] = continuation;
  };
  function SuspendFunctionGun$continuation$ObjectLiteral(this$SuspendFunctionGun) {
    this.this$SuspendFunctionGun = this$SuspendFunctionGun;
    this.currentIndex = -2147483648;
  }
  Object.defineProperty(SuspendFunctionGun$continuation$ObjectLiteral.prototype, 'callerFrame', {
    configurable: true,
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.peekContinuation_0(), CoroutineStackFrame) ? tmp$ : null;
    }
  });
  SuspendFunctionGun$continuation$ObjectLiteral.prototype.getStackTraceElement = function () {
    return null;
  };
  SuspendFunctionGun$continuation$ObjectLiteral.prototype.peekContinuation_0 = function () {
    var tmp$;
    if (this.currentIndex === -2147483648)
      this.currentIndex = this.this$SuspendFunctionGun.lastSuspensionIndex_0;
    if (this.currentIndex < 0) {
      this.currentIndex = -2147483648;
      return null;
    }
    try {
      tmp$ = this.this$SuspendFunctionGun.suspensions_0[this.currentIndex];
      if (tmp$ == null) {
        return StackWalkingFailedFrame_getInstance();
      }
      var result = tmp$;
      this.currentIndex = this.currentIndex - 1 | 0;
      return result;
    } catch (_) {
      if (Kotlin.isType(_, Throwable)) {
        return StackWalkingFailedFrame_getInstance();
      } else
        throw _;
    }
  };
  Object.defineProperty(SuspendFunctionGun$continuation$ObjectLiteral.prototype, 'context', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = this.this$SuspendFunctionGun.suspensions_0[this.this$SuspendFunctionGun.lastSuspensionIndex_0]) != null ? tmp$.context : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init('Not started'.toString());
      }
      return tmp$_1;
    }
  });
  SuspendFunctionGun$continuation$ObjectLiteral.prototype.resumeWith_tl1gpc$ = function (result) {
    if (result.isFailure) {
      this.this$SuspendFunctionGun.resumeRootWith_0(new Result(createFailure(ensureNotNull(result.exceptionOrNull()))));
      return;
    }
    this.this$SuspendFunctionGun.loop_0(false);
  };
  SuspendFunctionGun$continuation$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CoroutineStackFrame, Continuation]
  };
  SuspendFunctionGun.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SuspendFunctionGun',
    interfaces: [PipelineContext]
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    if (kotlinType === void 0)
      kotlinType = null;
    this.type = type;
    this.reifiedType = reifiedType;
    this.kotlinType = kotlinType;
  }
  TypeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeInfo',
    interfaces: []
  };
  TypeInfo.prototype.component1 = function () {
    return this.type;
  };
  TypeInfo.prototype.component2 = function () {
    return this.reifiedType;
  };
  TypeInfo.prototype.component3 = function () {
    return this.kotlinType;
  };
  TypeInfo.prototype.copy_yupgpq$ = function (type, reifiedType, kotlinType) {
    return new TypeInfo(type === void 0 ? this.type : type, reifiedType === void 0 ? this.reifiedType : reifiedType, kotlinType === void 0 ? this.kotlinType : kotlinType);
  };
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + Kotlin.toString(this.type) + (', reifiedType=' + Kotlin.toString(this.reifiedType)) + (', kotlinType=' + Kotlin.toString(this.kotlinType)) + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.reifiedType) | 0;
    result = result * 31 + Kotlin.hashCode(this.kotlinType) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.reifiedType, other.reifiedType) && Kotlin.equals(this.kotlinType, other.kotlinType)))));
  };
  var tryGetType = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.reflect.tryGetType_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var Throwable = Error;
    return function (T_0, isT) {
      try {
        return getReifiedTypeParameterKType(T_0);
      } catch (cause) {
        if (Kotlin.isType(cause, Throwable)) {
          return null;
        } else
          throw cause;
      }
    };
  }));
  function Attributes_0(concurrent) {
    if (concurrent === void 0)
      concurrent = false;
    return new AttributesJs();
  }
  function AttributesJs() {
    this.map_0 = LinkedHashMap_init();
  }
  AttributesJs.prototype.getOrNull_yzaw86$ = function (key) {
    var tmp$;
    return (tmp$ = this.map_0.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  AttributesJs.prototype.contains_w48dwb$ = function (key) {
    return this.map_0.containsKey_11rb$(key);
  };
  AttributesJs.prototype.put_uuntuo$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  AttributesJs.prototype.remove_yzaw86$ = function (key) {
    this.map_0.remove_11rb$(key);
  };
  AttributesJs.prototype.computeIfAbsent_u4q9l2$ = function (key, block) {
    var tmp$;
    if ((tmp$ = this.map_0.get_11rb$(key)) != null) {
      var tmp$_0;
      return Kotlin.isType(tmp$_0 = tmp$, Any) ? tmp$_0 : throwCCE();
    }
    var $receiver = block();
    this.map_0.put_xwzc9p$(key, $receiver);
    return $receiver;
  };
  Object.defineProperty(AttributesJs.prototype, 'allKeys', {
    configurable: true,
    get: function () {
      return toList_0(this.map_0.keys);
    }
  });
  AttributesJs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributesJs',
    interfaces: [Attributes]
  };
  function unmodifiable($receiver) {
    return $receiver;
  }
  function generateNonce_0() {
    var buffer = new Int8Array(16);
    if (PlatformUtils_getInstance().IS_NODE) {
      get__crypto().randomFillSync(buffer);
    } else {
      get__crypto().getRandomValues(buffer);
    }
    return hex(buffer);
  }
  function Digest$ObjectLiteral(closure$name) {
    this.closure$name = closure$name;
    this.state_0 = ArrayList_init_0();
  }
  Digest$ObjectLiteral.prototype.plusAssign_fqrh44$ = function (bytes) {
    this.state_0.add_11rb$(bytes);
  };
  Digest$ObjectLiteral.prototype.reset = function () {
    this.state_0.clear();
  };
  function Coroutine$build($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$build.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$build.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$build.prototype.constructor = Coroutine$build;
  Coroutine$build.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var iterator = this.$this.state_0.iterator();
            if (!iterator.hasNext())
              throw UnsupportedOperationException_init("Empty collection can't be reduced.");
            var accumulator = iterator.next();
            while (iterator.hasNext()) {
              accumulator = primitiveArrayConcat(accumulator, iterator.next());
            }

            var snapshot = accumulator;
            this.state_0 = 2;
            this.result_0 = asDeferred(get__crypto().subtle.digest(this.$this.closure$name, snapshot)).await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var digestBuffer = this.result_0;
            var digestView = new DataView(digestBuffer);
            var array = new Int8Array(digestView.byteLength);
            var tmp$;
            tmp$ = array.length - 1 | 0;
            for (var i = 0; i <= tmp$; i++) {
              array[i] = digestView.getUint8(i);
            }

            return array;
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
  Digest$ObjectLiteral.prototype.build = function (continuation_0, suspended) {
    var instance = new Coroutine$build(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Digest$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Digest]
  };
  function Digest_0(name) {
    return new Digest$ObjectLiteral(name);
  }
  function _crypto$lambda() {
    if (PlatformUtils_getInstance().IS_NODE) {
      return eval('require')('crypto');
    } else {
      return window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
    }
  }
  var _crypto;
  function get__crypto() {
    return _crypto.value;
  }
  function sha1(bytes) {
    return digest(new Sha1(), bytes);
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp$, tmp$_0;
    this.IS_BROWSER = typeof (tmp$ = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined')) === 'boolean' ? tmp$ : throwCCE();
    this.IS_NODE = typeof (tmp$_0 = (typeof process !== 'undefined' && process.versions != null && process.versions.node != null)) === 'boolean' ? tmp$_0 : throwCCE();
    this.IS_JVM = false;
    this.IS_NATIVE = false;
    this.IS_DEVELOPMENT_MODE = false;
    this.IS_NEW_MM_ENABLED = true;
  }
  PlatformUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PlatformUtils',
    interfaces: []
  };
  var PlatformUtils_instance = null;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance === null) {
      new PlatformUtils();
    }
    return PlatformUtils_instance;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CoroutineStackFrame',
    interfaces: []
  };
  function createStackTraceElement(kClass, methodName, fileName, lineNumber) {
    return new Any();
  }
  function ConcurrentMap(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 32;
    this.delegate_0 = LinkedHashMap_init_0(initialCapacity);
  }
  ConcurrentMap.prototype.computeIfAbsent_kpg1aj$ = function (key, block) {
    if (this.delegate_0.containsKey_11rb$(key))
      return ensureNotNull(this.delegate_0.get_11rb$(key));
    var value = block();
    this.delegate_0.put_xwzc9p$(key, value);
    return value;
  };
  Object.defineProperty(ConcurrentMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.delegate_0.size;
    }
  });
  ConcurrentMap.prototype.containsKey_11rb$ = function (key) {
    return this.delegate_0.containsKey_11rb$(key);
  };
  ConcurrentMap.prototype.containsValue_11rc$ = function (value) {
    return this.delegate_0.containsValue_11rc$(value);
  };
  ConcurrentMap.prototype.get_11rb$ = function (key) {
    return this.delegate_0.get_11rb$(key);
  };
  ConcurrentMap.prototype.isEmpty = function () {
    return this.delegate_0.isEmpty();
  };
  Object.defineProperty(ConcurrentMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.delegate_0.entries;
    }
  });
  Object.defineProperty(ConcurrentMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.delegate_0.keys;
    }
  });
  Object.defineProperty(ConcurrentMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.delegate_0.values;
    }
  });
  ConcurrentMap.prototype.clear = function () {
    this.delegate_0.clear();
  };
  ConcurrentMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.delegate_0.put_xwzc9p$(key, value);
  };
  ConcurrentMap.prototype.putAll_a2k3zr$ = function (from) {
    this.delegate_0.putAll_a2k3zr$(from);
  };
  ConcurrentMap.prototype.remove_11rb$ = function (key) {
    return this.delegate_0.remove_11rb$(key);
  };
  ConcurrentMap.prototype.hashCode = function () {
    return hashCode(this.delegate_0);
  };
  ConcurrentMap.prototype.equals = function (other) {
    if (!Kotlin.isType(other, Map))
      return false;
    return equals(other, this.delegate_0);
  };
  ConcurrentMap.prototype.toString = function () {
    return 'ConcurrentMapJs by ' + this.delegate_0;
  };
  ConcurrentMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConcurrentMap',
    interfaces: [MutableMap]
  };
  function platformDefaultFromValues(value, klass) {
    return null;
  }
  function platformDefaultToValues(value) {
    return null;
  }
  function GMTDate_0(timestamp) {
    if (timestamp === void 0)
      timestamp = null;
    var tmp$, tmp$_0;
    var date = (tmp$_0 = (tmp$ = timestamp != null ? timestamp.toNumber() : null) != null ? new Date(tmp$) : null) != null ? tmp$_0 : new Date();
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var dayOfWeek = WeekDay$Companion_getInstance().from_za3lpa$((date.getUTCDay() + 6 | 0) % 7);
    var month = Month$Companion_getInstance().from_za3lpa$(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), Kotlin.Long.fromNumber(date.getTime()));
  }
  function GMTDate_1(seconds, minutes, hours, dayOfMonth, month, year) {
    var timestamp = Kotlin.Long.fromNumber(Date.UTC(year, month.ordinal, dayOfMonth, hours, minutes, seconds));
    return GMTDate_0(timestamp);
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init('Invalid date timestamp exception: ' + timestamp.toString(), this);
    this.name = 'InvalidTimestampException';
  }
  InvalidTimestampException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidTimestampException',
    interfaces: [IllegalStateException]
  };
  function getTimeMillis() {
    return Kotlin.Long.fromNumber((new Date()).getTime());
  }
  function IntellijIdeaDebugDetector() {
    IntellijIdeaDebugDetector_instance = this;
    this.isDebuggerConnected = false;
  }
  IntellijIdeaDebugDetector.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntellijIdeaDebugDetector',
    interfaces: []
  };
  var IntellijIdeaDebugDetector_instance = null;
  function IntellijIdeaDebugDetector_getInstance() {
    if (IntellijIdeaDebugDetector_instance === null) {
      new IntellijIdeaDebugDetector();
    }
    return IntellijIdeaDebugDetector_instance;
  }
  function initCauseBridge($receiver, cause) {
  }
  function KtorSimpleLogger$ObjectLiteral() {
  }
  KtorSimpleLogger$ObjectLiteral.prototype.error_61zpoe$ = function (message) {
    console.error(message);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.error_ldd2zj$ = function (message, cause) {
    console.error(message + ', cause: ' + cause);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.warn_61zpoe$ = function (message) {
    console.warn(message);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.warn_ldd2zj$ = function (message, cause) {
    console.warn(message + ', cause: ' + cause);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.info_61zpoe$ = function (message) {
    console.info(message);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.info_ldd2zj$ = function (message, cause) {
    console.info(message + ', cause: ' + cause);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.debug_61zpoe$ = function (message) {
    console.info('DEBUG: ' + message);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.debug_ldd2zj$ = function (message, cause) {
    console.info('DEBUG: ' + message + ', cause: ' + cause);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.trace_61zpoe$ = function (message) {
    console.info('TRACE: ' + message);
  };
  KtorSimpleLogger$ObjectLiteral.prototype.trace_ldd2zj$ = function (message, cause) {
    console.info('TRACE: ' + message + ', cause: ' + cause);
  };
  KtorSimpleLogger$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Logger]
  };
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$ObjectLiteral();
  }
  function Logger() {
  }
  Logger.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Logger',
    interfaces: []
  };
  function NetworkAddress(hostname, port, address) {
    this.hostname_8be2vx$ = hostname;
    this.port_8be2vx$ = port;
    this.address_8be2vx$ = address;
  }
  NetworkAddress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NetworkAddress',
    interfaces: []
  };
  function get_hostname($receiver) {
    return $receiver.hostname_8be2vx$;
  }
  function get_port($receiver) {
    return $receiver.port_8be2vx$;
  }
  function NetworkAddress$ObjectLiteral(hostname, port, address) {
    NetworkAddress.call(this, hostname, port, address);
  }
  NetworkAddress$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NetworkAddress]
  };
  function NetworkAddress_0(hostname, port) {
    return new NetworkAddress$ObjectLiteral(hostname, port, hostname);
  }
  function UnresolvedAddressException() {
    IllegalArgumentException_init(this);
    this.name = 'UnresolvedAddressException';
  }
  UnresolvedAddressException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnresolvedAddressException',
    interfaces: [IllegalArgumentException]
  };
  function withCause($receiver, cause) {
    return $receiver;
  }
  function Type() {
  }
  Type.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Type',
    interfaces: []
  };
  function JsType() {
    JsType_instance = this;
  }
  JsType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsType',
    interfaces: [Type]
  };
  var JsType_instance = null;
  function JsType_getInstance() {
    if (JsType_instance === null) {
      new JsType();
    }
    return JsType_instance;
  }
  var typeInfo = defineInlineFunction('ktor-ktor-utils-js-legacy.io.ktor.util.reflect.typeInfo_287e2$', wrapFunction(function () {
    var reflect = _.io.ktor.util.reflect;
    var getKClass = Kotlin.getKClass;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var typeInfoImpl = _.io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
    var Throwable = Error;
    return function (T_0, isT) {
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
      return typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
    };
  }));
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function instanceOf($receiver, type) {
    return type.isInstance_s8jyv4$($receiver);
  }
  function get_platformType($receiver) {
    return JsType_getInstance();
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$util = package$ktor.util || (package$ktor.util = {});
  package$util.InternalAPI = InternalAPI;
  package$util.KtorExperimentalAPI = KtorExperimentalAPI;
  package$util.PublicAPICandidate = PublicAPICandidate;
  package$util.KtorDsl = KtorDsl;
  package$util.AttributeKey = AttributeKey;
  package$util.Attributes = Attributes;
  package$util.putAll_orn3b7$ = putAll;
  $$importsForInline$$['ktor-ktor-io-js-legacy'] = $module$ktor_ktor_io_js_legacy;
  package$util.encodeBase64_pdl1vz$ = encodeBase64;
  $$importsForInline$$['ktor-ktor-utils-js-legacy'] = _;
  package$util.encodeBase64_964n91$ = encodeBase64_0;
  package$util.encodeBase64_mlrm9h$ = encodeBase64_1;
  package$util.decodeBase64String_pdl1vz$ = decodeBase64String;
  package$util.decodeBase64Bytes_pdl1vz$ = decodeBase64Bytes;
  package$util.decodeBase64Bytes_mlrm9h$ = decodeBase64Bytes_0;
  package$util.toBase64_8e50z4$ = toBase64;
  package$util.fromBase64_nugvp3$ = fromBase64;
  package$util.split_o3z30d$ = split;
  package$util.copyToBoth_xeww6r$ = copyToBoth;
  package$util.toByteArray_3dmw3p$ = toByteArray;
  package$util.readShort_mrm5p$ = readShort;
  package$util.CaseInsensitiveMap = CaseInsensitiveMap;
  package$util.CaseInsensitiveSet_init_upaayv$ = CaseInsensitiveSet_init;
  package$util.CaseInsensitiveSet = CaseInsensitiveSet;
  package$util.isLowerCase_myv2d0$ = isLowerCase;
  package$util.toCharArray_pdl1vz$ = toCharArray;
  package$util.caseInsensitiveMap_30y1fr$ = caseInsensitiveMap;
  package$util.printDebugTree_7ru2wg$ = printDebugTree;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$util.SilentSupervisor_5dx9e$ = SilentSupervisor;
  Object.defineProperty(package$util, 'NONCE_SIZE_IN_BYTES_8be2vx$', {
    get: function () {
      return NONCE_SIZE_IN_BYTES;
    }
  });
  package$util.hex_fqrh44$ = hex;
  package$util.hex_61zpoe$ = hex_0;
  package$util.generateNonce_za3lpa$ = generateNonce;
  package$util.Digest = Digest;
  package$util.build_1mpr19$ = build;
  package$util.build_v179cf$ = build_0;
  package$util.DelegatingMutableSet = DelegatingMutableSet;
  Object.defineProperty(package$util, 'Identity', {
    get: Identity_getInstance
  });
  package$util.Encoder = Encoder;
  Object.defineProperty(package$util, 'Hash', {
    get: Hash_getInstance
  });
  package$util.HashFunction = HashFunction;
  package$util.digest_7uhtiw$ = digest;
  package$util.Sha1 = Sha1;
  package$util.NonceManager = NonceManager;
  Object.defineProperty(package$util, 'GenerateOnlyNonceManager', {
    get: GenerateOnlyNonceManager_getInstance
  });
  Object.defineProperty(package$util, 'AlwaysFailNonceManager', {
    get: AlwaysFailNonceManager_getInstance
  });
  package$util.get_length_37ivyf$ = get_length;
  package$util.contains_9p7nab$ = contains;
  Object.defineProperty(StringValues, 'Companion', {
    get: StringValues$Companion_getInstance
  });
  package$util.StringValues = StringValues;
  package$util.StringValuesBuilder = StringValuesBuilder;
  package$util.StringValuesSingleImpl = StringValuesSingleImpl;
  package$util.StringValuesImpl = StringValuesImpl;
  package$util.StringValuesBuilderImpl = StringValuesBuilderImpl;
  package$util.valuesOf_4scrhc$ = valuesOf;
  package$util.valuesOf_qz9155$ = valuesOf_0;
  package$util.valuesOf_shkbj6$ = valuesOf_1;
  package$util.valuesOf = valuesOf_2;
  package$util.valuesOf_bntsah$ = valuesOf_3;
  package$util.toMap_vr6bp2$ = toMap_1;
  package$util.flattenEntries_vr6bp2$ = flattenEntries;
  package$util.flattenForEach_vel9bh$ = flattenForEach;
  package$util.filter_ksha00$ = filter;
  package$util.appendFiltered_af8oy2$ = appendFiltered;
  package$util.appendAll_k10e8h$ = appendAll;
  package$util.appendIfNameAbsent_4vr5rd$ = appendIfNameAbsent;
  package$util.appendIfNameAndValueAbsent_4vr5rd$ = appendIfNameAndValueAbsent;
  package$util.escapeHTML_pdl1vz$ = escapeHTML;
  package$util.chomp_xxkbvm$ = chomp;
  package$util.toLowerCasePreservingASCIIRules_pdl1vz$ = toLowerCasePreservingASCIIRules;
  package$util.toUpperCasePreservingASCIIRules_pdl1vz$ = toUpperCasePreservingASCIIRules;
  package$util.caseInsensitive_7efafi$ = caseInsensitive;
  package$util.CaseInsensitiveString = CaseInsensitiveString;
  package$util.get_rootCause_dbl4o4$ = get_rootCause;
  var package$cio = package$util.cio || (package$util.cio = {});
  package$cio.ChannelIOException = ChannelIOException;
  package$cio.ChannelWriteException = ChannelWriteException;
  package$cio.ChannelReadException = ChannelReadException;
  package$cio.toByteArray_78elpf$ = toByteArray_0;
  package$cio.use_wxabi2$ = use;
  var package$collections = package$util.collections || (package$util.collections = {});
  package$collections.sharedListOf_i5x0yv$ = sharedListOf;
  package$collections.sharedMap_zhjvlt$ = sharedMap;
  package$collections.sharedList_287e2$ = sharedList;
  Object.defineProperty(package$collections, 'INITIAL_CAPACITY_8be2vx$', {
    get: function () {
      return INITIAL_CAPACITY;
    }
  });
  package$collections.ConcurrentSet_30y1fr$ = ConcurrentSet;
  package$collections.CopyOnWriteHashMap = CopyOnWriteHashMap;
  var package$converters = package$util.converters || (package$util.converters = {});
  package$converters.ConversionService = ConversionService;
  Object.defineProperty(package$converters, 'DefaultConversionService', {
    get: DefaultConversionService_getInstance
  });
  package$converters.DataConversionException = DataConversionException;
  DataConversion.Configuration = DataConversion$Configuration;
  package$converters.DataConversion = DataConversion;
  DelegatingConversionService.Configuration = DelegatingConversionService$Configuration;
  package$converters.DelegatingConversionService = DelegatingConversionService;
  Object.defineProperty(WeekDay, 'MONDAY', {
    get: WeekDay$MONDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'TUESDAY', {
    get: WeekDay$TUESDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'WEDNESDAY', {
    get: WeekDay$WEDNESDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'THURSDAY', {
    get: WeekDay$THURSDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'FRIDAY', {
    get: WeekDay$FRIDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'SATURDAY', {
    get: WeekDay$SATURDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'SUNDAY', {
    get: WeekDay$SUNDAY_getInstance
  });
  Object.defineProperty(WeekDay, 'Companion', {
    get: WeekDay$Companion_getInstance
  });
  var package$date = package$util.date || (package$util.date = {});
  package$date.WeekDay = WeekDay;
  Object.defineProperty(Month, 'JANUARY', {
    get: Month$JANUARY_getInstance
  });
  Object.defineProperty(Month, 'FEBRUARY', {
    get: Month$FEBRUARY_getInstance
  });
  Object.defineProperty(Month, 'MARCH', {
    get: Month$MARCH_getInstance
  });
  Object.defineProperty(Month, 'APRIL', {
    get: Month$APRIL_getInstance
  });
  Object.defineProperty(Month, 'MAY', {
    get: Month$MAY_getInstance
  });
  Object.defineProperty(Month, 'JUNE', {
    get: Month$JUNE_getInstance
  });
  Object.defineProperty(Month, 'JULY', {
    get: Month$JULY_getInstance
  });
  Object.defineProperty(Month, 'AUGUST', {
    get: Month$AUGUST_getInstance
  });
  Object.defineProperty(Month, 'SEPTEMBER', {
    get: Month$SEPTEMBER_getInstance
  });
  Object.defineProperty(Month, 'OCTOBER', {
    get: Month$OCTOBER_getInstance
  });
  Object.defineProperty(Month, 'NOVEMBER', {
    get: Month$NOVEMBER_getInstance
  });
  Object.defineProperty(Month, 'DECEMBER', {
    get: Month$DECEMBER_getInstance
  });
  Object.defineProperty(Month, 'Companion', {
    get: Month$Companion_getInstance
  });
  package$date.Month = Month;
  Object.defineProperty(GMTDate, 'Companion', {
    get: GMTDate$Companion_getInstance
  });
  package$date.GMTDate = GMTDate;
  package$date.plus_e4j7mw$ = plus;
  package$date.minus_e4j7mw$ = minus;
  package$date.plus_dr6f87$ = plus_0;
  package$date.minus_dr6f87$ = minus_0;
  package$date.truncateToSeconds_bcxie9$ = truncateToSeconds;
  Object.defineProperty(GMTDateParser, 'Companion', {
    get: GMTDateParser$Companion_getInstance
  });
  package$date.GMTDateParser = GMTDateParser;
  package$date.GMTDateBuilder = GMTDateBuilder;
  package$date.InvalidDateStringException = InvalidDateStringException;
  var package$debug = package$util.debug || (package$util.debug = {});
  package$debug.initContextInDebugMode_lnyleu$ = initContextInDebugMode;
  package$debug.addToContextInDebugMode_vvrf4k$ = addToContextInDebugMode;
  package$debug.useContextElementInDebugMode_j5t882$ = useContextElementInDebugMode;
  Object.defineProperty(PluginName, 'Key', {
    get: PluginName$Key_getInstance
  });
  var package$plugins = package$debug.plugins || (package$debug.plugins = {});
  package$plugins.PluginName = PluginName;
  Object.defineProperty(PluginsTrace, 'Key', {
    get: PluginsTrace$Key_getInstance
  });
  package$plugins.PluginsTrace = PluginsTrace;
  Object.defineProperty(PluginTraceElement$PluginEvent, 'STARTED', {
    get: PluginTraceElement$PluginEvent$STARTED_getInstance
  });
  Object.defineProperty(PluginTraceElement$PluginEvent, 'FINISHED', {
    get: PluginTraceElement$PluginEvent$FINISHED_getInstance
  });
  PluginTraceElement.PluginEvent = PluginTraceElement$PluginEvent;
  package$plugins.PluginTraceElement = PluginTraceElement;
  var package$internal = package$util.internal || (package$util.internal = {});
  Object.defineProperty(package$internal, 'UNDECIDED', {
    get: function () {
      return UNDECIDED;
    }
  });
  Object.defineProperty(package$internal, 'SUCCESS', {
    get: function () {
      return SUCCESS;
    }
  });
  Object.defineProperty(package$internal, 'FAILURE', {
    get: function () {
      return FAILURE;
    }
  });
  Object.defineProperty(package$internal, 'CONDITION_FALSE', {
    get: function () {
      return CONDITION_FALSE;
    }
  });
  Object.defineProperty(package$internal, 'ALREADY_REMOVED', {
    get: function () {
      return ALREADY_REMOVED;
    }
  });
  Object.defineProperty(package$internal, 'LIST_EMPTY', {
    get: function () {
      return LIST_EMPTY;
    }
  });
  package$internal.OpDescriptor = OpDescriptor;
  package$internal.AtomicOp = AtomicOp;
  package$internal.AtomicDesc = AtomicDesc;
  $$importsForInline$$['kotlinx-atomicfu'] = $module$kotlinx_atomicfu;
  LockFreeLinkedListNode.CondAddOp = LockFreeLinkedListNode$CondAddOp;
  package$internal.LockFreeLinkedListNode = LockFreeLinkedListNode;
  LockFreeLinkedListNode.AddLastDesc = LockFreeLinkedListNode$AddLastDesc;
  LockFreeLinkedListNode.RemoveFirstDesc = LockFreeLinkedListNode$RemoveFirstDesc;
  LockFreeLinkedListNode.AbstractAtomicDesc = LockFreeLinkedListNode$AbstractAtomicDesc;
  package$internal.unwrap_s8jyvk$ = unwrap;
  package$internal.LockFreeLinkedListHead = LockFreeLinkedListHead;
  var package$logging = package$util.logging || (package$util.logging = {});
  package$logging.error_grk6dt$ = error;
  var package$pipeline = package$util.pipeline || (package$util.pipeline = {});
  package$pipeline.DebugPipelineContext = DebugPipelineContext;
  Object.defineProperty(PhaseContent, 'Companion', {
    get: PhaseContent$Companion_getInstance
  });
  package$pipeline.PhaseContent_init_ctf2er$ = PhaseContent_init;
  package$pipeline.PhaseContent = PhaseContent;
  package$pipeline.Pipeline_init_phk9fc$ = Pipeline_init;
  package$pipeline.Pipeline = Pipeline;
  package$pipeline.execute_8vjjyp$ = execute;
  package$pipeline.PipelineContext = PipelineContext;
  package$pipeline.pipelineContextFor_djf7bn$ = pipelineContextFor;
  package$pipeline.PipelinePhase = PipelinePhase;
  package$pipeline.InvalidPhaseException = InvalidPhaseException;
  PipelinePhaseRelation.After = PipelinePhaseRelation$After;
  PipelinePhaseRelation.Before = PipelinePhaseRelation$Before;
  Object.defineProperty(PipelinePhaseRelation, 'Last', {
    get: PipelinePhaseRelation$Last_getInstance
  });
  package$pipeline.PipelinePhaseRelation = PipelinePhaseRelation;
  package$pipeline.recoverStackTraceBridge_5yr8tz$ = recoverStackTraceBridge;
  Object.defineProperty(package$pipeline, 'StackWalkingFailed', {
    get: StackWalkingFailed_getInstance
  });
  Object.defineProperty(package$pipeline, 'StackWalkingFailedFrame', {
    get: StackWalkingFailedFrame_getInstance
  });
  package$pipeline.SuspendFunctionGun = SuspendFunctionGun;
  var package$reflect = package$util.reflect || (package$util.reflect = {});
  package$reflect.TypeInfo = TypeInfo;
  package$util.AttributesJsFn = Attributes_0;
  package$util.AttributesJs = AttributesJs;
  package$util.unmodifiable_cgavii$ = unmodifiable;
  package$util.generateNonce = generateNonce_0;
  package$util.Digest_61zpoe$ = Digest_0;
  package$util.sha1_fqrh44$ = sha1;
  Object.defineProperty(package$util, 'PlatformUtils', {
    get: PlatformUtils_getInstance
  });
  package$util.CoroutineStackFrame = CoroutineStackFrame;
  package$util.createStackTraceElement_svyzhk$ = createStackTraceElement;
  package$collections.ConcurrentMap = ConcurrentMap;
  package$converters.platformDefaultFromValues_van1io$ = platformDefaultFromValues;
  package$converters.platformDefaultToValues_kcmwxo$ = platformDefaultToValues;
  package$date.GMTDate_mts6q2$ = GMTDate_0;
  package$date.GMTDate_qlqxlw$ = GMTDate_1;
  package$date.InvalidTimestampException = InvalidTimestampException;
  package$date.getTimeMillis = getTimeMillis;
  Object.defineProperty(package$debug, 'IntellijIdeaDebugDetector', {
    get: IntellijIdeaDebugDetector_getInstance
  });
  package$internal.initCauseBridge_oh0dqn$ = initCauseBridge;
  package$logging.KtorSimpleLogger_61zpoe$ = KtorSimpleLogger;
  package$logging.Logger = Logger;
  var package$network = package$util.network || (package$util.network = {});
  package$network.NetworkAddress = NetworkAddress;
  package$network.get_hostname_n5o44p$ = get_hostname;
  package$network.get_port_n5o44p$ = get_port;
  package$network.NetworkAddress_bm4lxs$ = NetworkAddress_0;
  package$network.UnresolvedAddressException = UnresolvedAddressException;
  package$pipeline.withCause_6zzckt$ = withCause;
  package$reflect.Type = Type;
  Object.defineProperty(package$reflect, 'JsType', {
    get: JsType_getInstance
  });
  package$reflect.typeInfoImpl_1lvkm8$ = typeInfoImpl;
  package$reflect.instanceOf_lgjw4r$ = instanceOf;
  package$reflect.get_platformType_op6ljc$ = get_platformType;
  Sha1.prototype.update_mj6st8$ = HashFunction.prototype.update_mj6st8$;
  AttributesJs.prototype.get_yzaw86$ = Attributes.prototype.get_yzaw86$;
  AttributesJs.prototype.take_yzaw86$ = Attributes.prototype.take_yzaw86$;
  AttributesJs.prototype.takeOrNull_yzaw86$ = Attributes.prototype.takeOrNull_yzaw86$;
  BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  BASE64_MASK = 63;
  BASE64_MASK_INT = 63;
  BASE64_PAD = 61;
  var array = new Int32Array(256);
  var tmp$;
  tmp$ = array.length - 1 | 0;
  for (var i = 0; i <= tmp$; i++) {
    array[i] = indexOf(BASE64_ALPHABET, toChar(i));
  }
  BASE64_INVERSE_ALPHABET = array;
  CHUNK_BUFFER_SIZE = L4096;
  digits = toCharArray('0123456789abcdef');
  NONCE_SIZE_IN_BYTES = 16;
  INITIAL_CAPACITY = 32;
  UNDECIDED = 0;
  SUCCESS = 1;
  FAILURE = 2;
  CONDITION_FALSE = new Symbol('CONDITION_FALSE');
  ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
  LIST_EMPTY = new Symbol('LIST_EMPTY');
  REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
  NO_DECISION = new Symbol('NO_DECISION');
  _crypto = lazy(_crypto$lambda);
  Kotlin.defineModule('ktor-ktor-utils-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-legacy.js.map
