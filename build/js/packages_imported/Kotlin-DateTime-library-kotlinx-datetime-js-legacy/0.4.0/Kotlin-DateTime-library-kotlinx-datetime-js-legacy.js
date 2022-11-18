(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', '@js-joda/core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('@js-joda/core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy'.");
    }
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-legacy'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-legacy'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-legacy'], kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['@js-joda/core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$_js_joda_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var TimeSource = Kotlin.kotlin.time.TimeSource;
  var TimeMark = Kotlin.kotlin.time.TimeMark;
  var L3600000000000 = new Kotlin.Long(817405952, 838);
  var L60000000000 = new Kotlin.Long(-129542144, 13);
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var hashCode = Kotlin.hashCode;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var contains = Kotlin.kotlin.ranges.contains_8sy4e8$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var L10 = Kotlin.Long.fromInt(10);
  var ArithmeticException = Kotlin.kotlin.ArithmeticException;
  var uppercaseChar = Kotlin.kotlin.text.uppercaseChar_myv2d0$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var L1000000000 = Kotlin.Long.fromInt(1000000000);
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var L1 = Kotlin.Long.ONE;
  var DurationUnit = Kotlin.kotlin.time.DurationUnit;
  var toDuration = Kotlin.kotlin.time.toDuration_rrkdm6$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException_init_1 = Kotlin.kotlin.RuntimeException_init_dbl4no$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var IllegalArgumentException_init_1 = Kotlin.kotlin.IllegalArgumentException_init_dbl4no$;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var L_3217862419201 = new Kotlin.Long(-931914497, -750);
  var L3093527980800 = new Kotlin.Long(1151527680, 720);
  var L86400000000000 = new Kotlin.Long(-1857093632, 20116);
  var L3 = Kotlin.Long.fromInt(3);
  var L4294967295 = new Kotlin.Long(-1, 0);
  var SerializationException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SerializationException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var createKType = Kotlin.createKType;
  var Long = Kotlin.Long;
  var getKClass = Kotlin.getKClass;
  var buildClassSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.buildClassSerialDescriptor_dowfwv$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.KSerializer;
  var PrimitiveKind = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.PrimitiveKind;
  var PrimitiveSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.descriptors.PrimitiveSerialDescriptor_xytc2a$;
  var Throwable = Error;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.serializer_saj79j$;
  var throwCCE = Kotlin.throwCCE;
  var UnknownFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException_init_za3lpa$;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var AbstractPolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.AbstractPolymorphicSerializer;
  var SealedClassSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.SealedClassSerializer;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.EnumSerializer;
  var toShort = Kotlin.toShort;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var numberToInt = Kotlin.numberToInt;
  var numberToLong = Kotlin.numberToLong;
  var numberToDouble = Kotlin.numberToDouble;
  var Instant$Companion = $module$_js_joda_core.Instant;
  var Duration$Companion = $module$_js_joda_core.Duration;
  var Clock$Companion = $module$_js_joda_core.Clock;
  var OffsetDateTime$Companion = $module$_js_joda_core.OffsetDateTime;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var unboxChar = Kotlin.unboxChar;
  var Comparable = Kotlin.kotlin.Comparable;
  var ChronoUnit$Companion = $module$_js_joda_core.ChronoUnit;
  var toDuration_0 = Kotlin.kotlin.time.toDuration_n769wd$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var LocalDate$Companion = $module$_js_joda_core.LocalDate;
  var LocalDateTime$Companion = $module$_js_joda_core.LocalDateTime;
  var LocalTime$Companion = $module$_js_joda_core.LocalTime;
  var ZoneId$Companion = $module$_js_joda_core.ZoneId;
  var ZoneOffset = $module$_js_joda_core.ZoneOffset;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  DatePeriod.prototype = Object.create(DateTimePeriod.prototype);
  DatePeriod.prototype.constructor = DatePeriod;
  DateTimePeriodImpl.prototype = Object.create(DateTimePeriod.prototype);
  DateTimePeriodImpl.prototype.constructor = DateTimePeriodImpl;
  DateTimeUnit$TimeBased.prototype = Object.create(DateTimeUnit.prototype);
  DateTimeUnit$TimeBased.prototype.constructor = DateTimeUnit$TimeBased;
  DateTimeUnit$DateBased.prototype = Object.create(DateTimeUnit.prototype);
  DateTimeUnit$DateBased.prototype.constructor = DateTimeUnit$DateBased;
  DateTimeUnit$DayBased.prototype = Object.create(DateTimeUnit$DateBased.prototype);
  DateTimeUnit$DayBased.prototype.constructor = DateTimeUnit$DayBased;
  DateTimeUnit$MonthBased.prototype = Object.create(DateTimeUnit$DateBased.prototype);
  DateTimeUnit$MonthBased.prototype.constructor = DateTimeUnit$MonthBased;
  DateTimeArithmeticException.prototype = Object.create(RuntimeException.prototype);
  DateTimeArithmeticException.prototype.constructor = DateTimeArithmeticException;
  IllegalTimeZoneException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalTimeZoneException.prototype.constructor = IllegalTimeZoneException;
  DateTimeFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  DateTimeFormatException.prototype.constructor = DateTimeFormatException;
  DateBasedDateTimeUnitSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  DateBasedDateTimeUnitSerializer.prototype.constructor = DateBasedDateTimeUnitSerializer;
  DateTimeUnitSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  DateTimeUnitSerializer.prototype.constructor = DateTimeUnitSerializer;
  DayOfWeek_0.prototype = Object.create(Enum.prototype);
  DayOfWeek_0.prototype.constructor = DayOfWeek_0;
  Month_0.prototype = Object.create(Enum.prototype);
  Month_0.prototype.constructor = Month_0;
  FixedOffsetTimeZone.prototype = Object.create(TimeZone.prototype);
  FixedOffsetTimeZone.prototype.constructor = FixedOffsetTimeZone;
  function Clock() {
    Clock$Companion_getInstance();
  }
  function Clock$System() {
    Clock$System_instance = this;
  }
  Clock$System.prototype.now = function () {
    return Instant$Companion_getInstance().now();
  };
  Clock$System.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'System',
    interfaces: [Clock]
  };
  var Clock$System_instance = null;
  function Clock$System_getInstance() {
    if (Clock$System_instance === null) {
      new Clock$System();
    }
    return Clock$System_instance;
  }
  function Clock$Companion_0() {
    Clock$Companion_instance = this;
  }
  Clock$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Clock$Companion_instance = null;
  function Clock$Companion_getInstance() {
    if (Clock$Companion_instance === null) {
      new Clock$Companion_0();
    }
    return Clock$Companion_instance;
  }
  Clock.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Clock',
    interfaces: []
  };
  function todayIn($receiver, timeZone) {
    return toLocalDateTime_0($receiver.now(), timeZone).date;
  }
  function asTimeSource$ObjectLiteral(this$asTimeSource) {
    this.this$asTimeSource = this$asTimeSource;
  }
  asTimeSource$ObjectLiteral.prototype.markNow = function () {
    return new InstantTimeMark(this.this$asTimeSource.now(), this.this$asTimeSource);
  };
  asTimeSource$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TimeSource]
  };
  function asTimeSource($receiver) {
    return new asTimeSource$ObjectLiteral($receiver);
  }
  function InstantTimeMark(instant, clock) {
    this.instant_0 = instant;
    this.clock_0 = clock;
  }
  InstantTimeMark.prototype.elapsedNow = function () {
    return this.clock_0.now().minus_2hqr0b$(this.instant_0);
  };
  InstantTimeMark.prototype.plus_cgako$ = function (duration) {
    return new InstantTimeMark(this.instant_0.plus_cgako$(duration), this.clock_0);
  };
  InstantTimeMark.prototype.minus_cgako$ = function (duration) {
    return new InstantTimeMark(this.instant_0.minus_cgako$(duration), this.clock_0);
  };
  InstantTimeMark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstantTimeMark',
    interfaces: [TimeMark]
  };
  function todayAt($receiver, timeZone) {
    return todayIn($receiver, timeZone);
  }
  function DateTimePeriod() {
    DateTimePeriod$Companion_getInstance();
  }
  Object.defineProperty(DateTimePeriod.prototype, 'years', {
    configurable: true,
    get: function () {
      return this.totalMonths / 12 | 0;
    }
  });
  Object.defineProperty(DateTimePeriod.prototype, 'months', {
    configurable: true,
    get: function () {
      return this.totalMonths % 12 | 0;
    }
  });
  Object.defineProperty(DateTimePeriod.prototype, 'hours', {
    configurable: true,
    get: function () {
      return this.totalNanoseconds.div(L3600000000000).toInt();
    }
  });
  Object.defineProperty(DateTimePeriod.prototype, 'minutes', {
    configurable: true,
    get: function () {
      return this.totalNanoseconds.modulo(L3600000000000).div(L60000000000).toInt();
    }
  });
  Object.defineProperty(DateTimePeriod.prototype, 'seconds', {
    configurable: true,
    get: function () {
      return this.totalNanoseconds.modulo(L60000000000).div(Kotlin.Long.fromInt(1000000000)).toInt();
    }
  });
  Object.defineProperty(DateTimePeriod.prototype, 'nanoseconds', {
    configurable: true,
    get: function () {
      return this.totalNanoseconds.modulo(Kotlin.Long.fromInt(1000000000)).toInt();
    }
  });
  DateTimePeriod.prototype.allNonpositive_xq99i7$_0 = function () {
    return this.totalMonths <= 0 && this.days <= 0 && this.totalNanoseconds.toNumber() <= 0 && ((this.totalMonths | this.days) !== 0 || !equals(this.totalNanoseconds, L0));
  };
  DateTimePeriod.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$, tmp$_0;
    if (this.allNonpositive_xq99i7$_0()) {
      $receiver.append_s8itvh$(45);
      tmp$ = -1;
    } else
      tmp$ = 1;
    var sign = tmp$;
    $receiver.append_s8itvh$(80);
    if (this.years !== 0)
      $receiver.append_s8jyv4$(Kotlin.imul(this.years, sign)).append_s8itvh$(89);
    if (this.months !== 0)
      $receiver.append_s8jyv4$(Kotlin.imul(this.months, sign)).append_s8itvh$(77);
    if (this.days !== 0)
      $receiver.append_s8jyv4$(Kotlin.imul(this.days, sign)).append_s8itvh$(68);
    var t = {v: 'T'};
    if (this.hours !== 0) {
      $receiver.append_pdl1vj$(t.v).append_s8jyv4$(Kotlin.imul(this.hours, sign)).append_s8itvh$(72);
      t.v = '';
    }
    if (this.minutes !== 0) {
      $receiver.append_pdl1vj$(t.v).append_s8jyv4$(Kotlin.imul(this.minutes, sign)).append_s8itvh$(77);
      t.v = '';
    }
    if ((this.seconds | this.nanoseconds) !== 0) {
      $receiver.append_pdl1vj$(t.v);
      if (this.seconds !== 0)
        tmp$_0 = Kotlin.imul(this.seconds, sign);
      else if (Kotlin.imul(this.nanoseconds, sign) < 0)
        tmp$_0 = '-0';
      else
        tmp$_0 = '0';
      $receiver.append_s8jyv4$(tmp$_0);
      if (this.nanoseconds !== 0) {
        $receiver.append_s8itvh$(46).append_pdl1vj$(padStart(abs(this.nanoseconds).toString(), 9, 48));
      }
      $receiver.append_s8itvh$(83);
    }
    if ($receiver.length === 1)
      $receiver.append_pdl1vj$('0D');
    return $receiver.toString();
  };
  DateTimePeriod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, DateTimePeriod))
      return false;
    if (this.totalMonths !== other.totalMonths)
      return false;
    if (this.days !== other.days)
      return false;
    if (!equals(this.totalNanoseconds, other.totalNanoseconds))
      return false;
    return true;
  };
  DateTimePeriod.prototype.hashCode = function () {
    var result = this.totalMonths;
    result = (31 * result | 0) + this.days | 0;
    result = (31 * result | 0) + hashCode(this.totalNanoseconds) | 0;
    return result;
  };
  function DateTimePeriod$Companion() {
    DateTimePeriod$Companion_instance = this;
  }
  function DateTimePeriod$Companion$parse$parseException(message, position) {
    throw DateTimeFormatException_init_0('Parse error at char ' + position + ': ' + message);
  }
  function DateTimePeriod$Companion$parse$toIntThrowing(closure$iStart, closure$parseException) {
    return function ($receiver, component) {
      if ($receiver.toNumber() < -2147483648 || $receiver.toNumber() > 2147483647)
        closure$parseException('Value ' + $receiver.toString() + " does not fit into an Int, which is required for component '" + String.fromCharCode(component) + "'", closure$iStart);
      return $receiver.toInt();
    };
  }
  DateTimePeriod$Companion.prototype.parse_61zpoe$ = function (text) {
    var tmp$, tmp$_0;
    var parseException = DateTimePeriod$Companion$parse$parseException;
    var START = 0;
    var AFTER_P = 1;
    var AFTER_YEAR = 2;
    var AFTER_MONTH = 3;
    var AFTER_WEEK = 4;
    var AFTER_DAY = 5;
    var AFTER_T = 6;
    var AFTER_HOUR = 7;
    var AFTER_MINUTE = 8;
    var AFTER_SECOND_AND_NANO = 9;
    var state = START;
    var i = 0;
    var sign = 1;
    var years = 0;
    var months = 0;
    var weeks = 0;
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var nanoseconds = 0;
    while (true) {
      if (i >= text.length) {
        if (state === START)
          parseException("Unexpected end of input; 'P' designator is required", i);
        if (state === AFTER_T)
          parseException("Unexpected end of input; at least one time component is required after 'T'", i);
        var n = Kotlin.Long.fromInt(days).add(Kotlin.Long.fromInt(weeks * 7 | 0));
        if (contains(new IntRange(-2147483648, 2147483647), n))
          tmp$ = n.toInt();
        else
          tmp$ = parseException("The total number of days under 'D' and 'W' designators should fit into an Int", 0);
        var daysTotal = tmp$;
        return DateTimePeriod_0(years, months, daysTotal, hours, minutes, seconds, Kotlin.Long.fromInt(nanoseconds));
      }
      if (state === START) {
        if ((i + 1 | 0) >= text.length && (text.charCodeAt(i) === 43 || text.charCodeAt(i) === 45))
          parseException("Unexpected end of string; 'P' designator is required", i);
        switch (text.charCodeAt(i)) {
          case 43:
          case 45:
            if (text.charCodeAt(i) === 45)
              sign = -1;
            if (text.charCodeAt(i + 1 | 0) !== 80)
              parseException("Expected 'P', got '" + String.fromCharCode(text.charCodeAt(i + 1 | 0)) + "'", i + 1 | 0);
            i = i + 2 | 0;
            break;
          case 80:
            i = i + 1 | 0;
            break;
          default:
            parseException("Expected '+', '-', 'P', got '" + String.fromCharCode(text.charCodeAt(i)) + "'", i);
            break;
        }
        state = AFTER_P;
        continue;
      }
      var localSign = sign;
      var iStart = i;
      tmp$_0 = text.charCodeAt(i);
      switch (tmp$_0) {
        case 43:
        case 45:
          if (text.charCodeAt(i) === 45)
            localSign = localSign * -1 | 0;
          i = i + 1 | 0;
          if (i >= text.length || !(new CharRange(48, 57)).contains_mef7kx$(text.charCodeAt(i)))
            parseException("A number expected after '" + String.fromCharCode(text.charCodeAt(i)) + "'", i);
          break;
        default:
          if (!(new CharRange(48, 57)).contains_mef7kx$(tmp$_0))
            if (tmp$_0 === 84) {
              if (state >= AFTER_T)
                parseException("Only one 'T' designator is allowed", i);
              state = AFTER_T;
              i = i + 1 | 0;
              continue;
            }

          break;
      }
      var number = L0;
      while (i < text.length && (new CharRange(48, 57)).contains_mef7kx$(text.charCodeAt(i))) {
        try {
          number = safeAdd(safeMultiply(number, L10), Kotlin.Long.fromInt(text.charCodeAt(i) - 48));
        } catch (e) {
          if (Kotlin.isType(e, ArithmeticException)) {
            parseException('The number is too large', iStart);
          } else
            throw e;
        }
        i = i + 1 | 0;
      }
      number = number.multiply(Kotlin.Long.fromInt(localSign));
      if (i === text.length)
        parseException('Expected a designator after the numerical value', i);
      var wrongOrder = "Wrong component order: should be 'Y', 'M', 'W', 'D', then designator 'T', then 'H', 'M', 'S'";
      var toIntThrowing = DateTimePeriod$Companion$parse$toIntThrowing(iStart, parseException);
      switch (uppercaseChar(text.charCodeAt(i))) {
        case 89:
          if (state >= AFTER_YEAR)
            parseException(wrongOrder, i);
          state = AFTER_YEAR;
          years = toIntThrowing(number, 89);
          break;
        case 77:
          if (state >= AFTER_T) {
            if (state >= AFTER_MINUTE)
              parseException(wrongOrder, i);
            state = AFTER_MINUTE;
            minutes = toIntThrowing(number, 77);
          } else {
            if (state >= AFTER_MONTH)
              parseException(wrongOrder, i);
            state = AFTER_MONTH;
            months = toIntThrowing(number, 77);
          }

          break;
        case 87:
          if (state >= AFTER_WEEK)
            parseException(wrongOrder, i);
          state = AFTER_WEEK;
          weeks = toIntThrowing(number, 87);
          break;
        case 68:
          if (state >= AFTER_DAY)
            parseException(wrongOrder, i);
          state = AFTER_DAY;
          days = toIntThrowing(number, 68);
          break;
        case 72:
          if (state >= AFTER_HOUR || state < AFTER_T)
            parseException(wrongOrder, i);
          state = AFTER_HOUR;
          hours = toIntThrowing(number, 72);
          break;
        case 83:
          if (state >= AFTER_SECOND_AND_NANO || state < AFTER_T)
            parseException(wrongOrder, i);
          state = AFTER_SECOND_AND_NANO;
          seconds = toIntThrowing(number, 83);
          break;
        case 46:
        case 44:
          i = i + 1 | 0;
          if (i >= text.length)
            parseException("Expected designator 'S' after " + String.fromCharCode(text.charCodeAt(i - 1 | 0)), i);
          var iStartFraction = i;
          while (i < text.length && (new CharRange(48, 57)).contains_mef7kx$(text.charCodeAt(i)))
            i = i + 1 | 0;
          var fractionLength = i - iStartFraction | 0;
          if (fractionLength > 9)
            parseException('Only the nanosecond fractions of a second are supported', iStartFraction);
          var endIndex = i;
          var fractionalPart = text.substring(iStartFraction, endIndex) + repeat('0', 9 - fractionLength | 0);
          nanoseconds = Kotlin.imul(toInt(fractionalPart, 10), localSign);
          if (text.charCodeAt(i) !== 83)
            parseException("Expected the 'S' designator after a fraction", i);
          if (state >= AFTER_SECOND_AND_NANO || state < AFTER_T)
            parseException(wrongOrder, i);
          state = AFTER_SECOND_AND_NANO;
          seconds = toIntThrowing(number, 83);
          break;
        default:
          parseException('Expected a designator after the numerical value', i);
          break;
      }
      i = i + 1 | 0;
    }
  };
  DateTimePeriod$Companion.prototype.serializer = function () {
    return DateTimePeriodIso8601Serializer_getInstance();
  };
  DateTimePeriod$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimePeriod$Companion_instance = null;
  function DateTimePeriod$Companion_getInstance() {
    if (DateTimePeriod$Companion_instance === null) {
      new DateTimePeriod$Companion();
    }
    return DateTimePeriod$Companion_instance;
  }
  DateTimePeriod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimePeriod',
    interfaces: []
  };
  function toDateTimePeriod($receiver) {
    return DateTimePeriod$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function DatePeriod(totalMonths, days) {
    DatePeriod$Companion_getInstance();
    DateTimePeriod.call(this);
    this.totalMonths_c6p82u$_0 = totalMonths;
    this.days_pmwp8g$_0 = days;
  }
  Object.defineProperty(DatePeriod.prototype, 'totalMonths', {
    get: function () {
      return this.totalMonths_c6p82u$_0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'days', {
    get: function () {
      return this.days_pmwp8g$_0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'hours', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'minutes', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'seconds', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'nanoseconds', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(DatePeriod.prototype, 'totalNanoseconds', {
    configurable: true,
    get: function () {
      return L0;
    }
  });
  function DatePeriod$Companion() {
    DatePeriod$Companion_instance = this;
  }
  DatePeriod$Companion.prototype.parse_61zpoe$ = function (text) {
    var period = DateTimePeriod$Companion_getInstance().parse_61zpoe$(text);
    if (Kotlin.isType(period, DatePeriod))
      return period;
    else
      throw DateTimeFormatException_init_0('Period ' + period + ' (parsed from string ' + text + ') is not date-based');
  };
  DatePeriod$Companion.prototype.serializer = function () {
    return DatePeriodIso8601Serializer_getInstance();
  };
  DatePeriod$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DatePeriod$Companion_instance = null;
  function DatePeriod$Companion_getInstance() {
    if (DatePeriod$Companion_instance === null) {
      new DatePeriod$Companion();
    }
    return DatePeriod$Companion_instance;
  }
  DatePeriod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatePeriod',
    interfaces: [DateTimePeriod]
  };
  function DatePeriod_init(years, months, days, $this) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0;
    $this = $this || Object.create(DatePeriod.prototype);
    DatePeriod.call($this, totalMonths(years, months), days);
    return $this;
  }
  function toDatePeriod($receiver) {
    return DatePeriod$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function DateTimePeriodImpl(totalMonths, days, totalNanoseconds) {
    DateTimePeriod.call(this);
    this.totalMonths_cbpdy1$_0 = totalMonths;
    this.days_pge7ot$_0 = days;
    this.totalNanoseconds_rke1ct$_0 = totalNanoseconds;
  }
  Object.defineProperty(DateTimePeriodImpl.prototype, 'totalMonths', {
    get: function () {
      return this.totalMonths_cbpdy1$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'days', {
    get: function () {
      return this.days_pge7ot$_0;
    }
  });
  Object.defineProperty(DateTimePeriodImpl.prototype, 'totalNanoseconds', {
    get: function () {
      return this.totalNanoseconds_rke1ct$_0;
    }
  });
  DateTimePeriodImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimePeriodImpl',
    interfaces: [DateTimePeriod]
  };
  function totalMonths(years, months) {
    var totalMonths = Kotlin.Long.fromInt(years).multiply(Kotlin.Long.fromInt(12)).add(Kotlin.Long.fromInt(months));
    if (contains(new IntRange(-2147483648, 2147483647), totalMonths))
      return totalMonths.toInt();
    else
      throw IllegalArgumentException_init('The total number of months in ' + years + ' years and ' + months + ' months overflows an Int');
  }
  function totalNanoseconds(hours, minutes, seconds, nanoseconds) {
    var tmp$;
    var totalMinutes = Kotlin.Long.fromInt(hours).multiply(Kotlin.Long.fromInt(60)).add(Kotlin.Long.fromInt(minutes));
    var totalMinutesAsSeconds = totalMinutes.multiply(Kotlin.Long.fromInt(60));
    var minutesAndNanosecondsAsSeconds = totalMinutesAsSeconds.add(nanoseconds.div(Kotlin.Long.fromInt(1000000000)));
    var totalSeconds = minutesAndNanosecondsAsSeconds.add(Kotlin.Long.fromInt(seconds));
    try {
      tmp$ = multiplyAndAdd(totalSeconds, L1000000000, nanoseconds.modulo(Kotlin.Long.fromInt(1000000000)));
    } catch (e) {
      if (Kotlin.isType(e, ArithmeticException)) {
        throw IllegalArgumentException_init('The total number of nanoseconds in ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds, and ' + nanoseconds.toString() + ' nanoseconds overflows a Long');
      } else
        throw e;
    }
    return tmp$;
  }
  function buildDateTimePeriod(totalMonths, days, totalNanoseconds) {
    if (totalMonths === void 0)
      totalMonths = 0;
    if (days === void 0)
      days = 0;
    return !equals(totalNanoseconds, L0) ? new DateTimePeriodImpl(totalMonths, days, totalNanoseconds) : new DatePeriod(totalMonths, days);
  }
  function DateTimePeriod_0(years, months, days, hours, minutes, seconds, nanoseconds) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0;
    if (hours === void 0)
      hours = 0;
    if (minutes === void 0)
      minutes = 0;
    if (seconds === void 0)
      seconds = 0;
    if (nanoseconds === void 0)
      nanoseconds = L0;
    return buildDateTimePeriod(totalMonths(years, months), days, totalNanoseconds(hours, minutes, seconds, nanoseconds));
  }
  function toDateTimePeriod_0($receiver) {
    return buildDateTimePeriod(void 0, void 0, $receiver.inWholeNanoseconds);
  }
  function plus($receiver, other) {
    return buildDateTimePeriod(safeAdd_0($receiver.totalMonths, other.totalMonths), safeAdd_0($receiver.days, other.days), safeAdd($receiver.totalNanoseconds, other.totalNanoseconds));
  }
  function plus_0($receiver, other) {
    return new DatePeriod(safeAdd_0($receiver.totalMonths, other.totalMonths), safeAdd_0($receiver.days, other.days));
  }
  function DateTimeUnit() {
    DateTimeUnit$Companion_getInstance();
  }
  function DateTimeUnit$TimeBased(nanoseconds) {
    DateTimeUnit$TimeBased$Companion_getInstance();
    DateTimeUnit.call(this);
    this.nanoseconds = nanoseconds;
    this.unitName_0 = null;
    this.unitScale_0 = null;
    if (!(this.nanoseconds.toNumber() > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.nanoseconds.toString() + ' ns.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (equals(this.nanoseconds.modulo(L3600000000000), L0)) {
      this.unitName_0 = 'HOUR';
      this.unitScale_0 = this.nanoseconds.div(L3600000000000);
    } else if (equals(this.nanoseconds.modulo(L60000000000), L0)) {
      this.unitName_0 = 'MINUTE';
      this.unitScale_0 = this.nanoseconds.div(L60000000000);
    } else if (equals(this.nanoseconds.modulo(Kotlin.Long.fromInt(1000000000)), L0)) {
      this.unitName_0 = 'SECOND';
      this.unitScale_0 = this.nanoseconds.div(Kotlin.Long.fromInt(1000000000));
    } else if (equals(this.nanoseconds.modulo(Kotlin.Long.fromInt(1000000)), L0)) {
      this.unitName_0 = 'MILLISECOND';
      this.unitScale_0 = this.nanoseconds.div(Kotlin.Long.fromInt(1000000));
    } else if (equals(this.nanoseconds.modulo(Kotlin.Long.fromInt(1000)), L0)) {
      this.unitName_0 = 'MICROSECOND';
      this.unitScale_0 = this.nanoseconds.div(Kotlin.Long.fromInt(1000));
    } else {
      this.unitName_0 = 'NANOSECOND';
      this.unitScale_0 = this.nanoseconds;
    }
  }
  DateTimeUnit$TimeBased.prototype.times_za3lpa$ = function (scalar) {
    return new DateTimeUnit$TimeBased(safeMultiply(this.nanoseconds, Kotlin.Long.fromInt(scalar)));
  };
  Object.defineProperty(DateTimeUnit$TimeBased.prototype, 'duration', {
    configurable: true,
    get: function () {
      return toDuration(this.nanoseconds, DurationUnit.NANOSECONDS);
    }
  });
  DateTimeUnit$TimeBased.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, DateTimeUnit$TimeBased) && equals(this.nanoseconds, other.nanoseconds));
  };
  DateTimeUnit$TimeBased.prototype.hashCode = function () {
    return this.nanoseconds.toInt() ^ this.nanoseconds.shiftRight(32).toInt();
  };
  DateTimeUnit$TimeBased.prototype.toString = function () {
    return this.formatToString_a4hdmt$(this.unitScale_0, this.unitName_0);
  };
  function DateTimeUnit$TimeBased$Companion() {
    DateTimeUnit$TimeBased$Companion_instance = this;
  }
  DateTimeUnit$TimeBased$Companion.prototype.serializer = function () {
    return TimeBasedDateTimeUnitSerializer_getInstance();
  };
  DateTimeUnit$TimeBased$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeUnit$TimeBased$Companion_instance = null;
  function DateTimeUnit$TimeBased$Companion_getInstance() {
    if (DateTimeUnit$TimeBased$Companion_instance === null) {
      new DateTimeUnit$TimeBased$Companion();
    }
    return DateTimeUnit$TimeBased$Companion_instance;
  }
  DateTimeUnit$TimeBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeBased',
    interfaces: [DateTimeUnit]
  };
  function DateTimeUnit$DateBased() {
    DateTimeUnit$DateBased$Companion_getInstance();
    DateTimeUnit.call(this);
  }
  function DateTimeUnit$DateBased$Companion() {
    DateTimeUnit$DateBased$Companion_instance = this;
  }
  DateTimeUnit$DateBased$Companion.prototype.serializer = function () {
    return DateBasedDateTimeUnitSerializer_getInstance();
  };
  DateTimeUnit$DateBased$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeUnit$DateBased$Companion_instance = null;
  function DateTimeUnit$DateBased$Companion_getInstance() {
    if (DateTimeUnit$DateBased$Companion_instance === null) {
      new DateTimeUnit$DateBased$Companion();
    }
    return DateTimeUnit$DateBased$Companion_instance;
  }
  DateTimeUnit$DateBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateBased',
    interfaces: [DateTimeUnit]
  };
  function DateTimeUnit$DayBased(days) {
    DateTimeUnit$DayBased$Companion_getInstance();
    DateTimeUnit$DateBased.call(this);
    this.days = days;
    if (!(this.days > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.days + ' days.';
      throw IllegalArgumentException_init(message.toString());
    }
  }
  DateTimeUnit$DayBased.prototype.times_za3lpa$ = function (scalar) {
    return new DateTimeUnit$DayBased(safeMultiply_0(this.days, scalar));
  };
  DateTimeUnit$DayBased.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, DateTimeUnit$DayBased) && this.days === other.days);
  };
  DateTimeUnit$DayBased.prototype.hashCode = function () {
    return this.days ^ 65536;
  };
  DateTimeUnit$DayBased.prototype.toString = function () {
    return (this.days % 7 | 0) === 0 ? this.formatToString_19mbxw$(this.days / 7 | 0, 'WEEK') : this.formatToString_19mbxw$(this.days, 'DAY');
  };
  function DateTimeUnit$DayBased$Companion() {
    DateTimeUnit$DayBased$Companion_instance = this;
  }
  DateTimeUnit$DayBased$Companion.prototype.serializer = function () {
    return DayBasedDateTimeUnitSerializer_getInstance();
  };
  DateTimeUnit$DayBased$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeUnit$DayBased$Companion_instance = null;
  function DateTimeUnit$DayBased$Companion_getInstance() {
    if (DateTimeUnit$DayBased$Companion_instance === null) {
      new DateTimeUnit$DayBased$Companion();
    }
    return DateTimeUnit$DayBased$Companion_instance;
  }
  DateTimeUnit$DayBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayBased',
    interfaces: [DateTimeUnit$DateBased]
  };
  function DateTimeUnit$MonthBased(months) {
    DateTimeUnit$MonthBased$Companion_getInstance();
    DateTimeUnit$DateBased.call(this);
    this.months = months;
    if (!(this.months > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.months + ' months.';
      throw IllegalArgumentException_init(message.toString());
    }
  }
  DateTimeUnit$MonthBased.prototype.times_za3lpa$ = function (scalar) {
    return new DateTimeUnit$MonthBased(safeMultiply_0(this.months, scalar));
  };
  DateTimeUnit$MonthBased.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, DateTimeUnit$MonthBased) && this.months === other.months);
  };
  DateTimeUnit$MonthBased.prototype.hashCode = function () {
    return this.months ^ 131072;
  };
  DateTimeUnit$MonthBased.prototype.toString = function () {
    if ((this.months % 1200 | 0) === 0)
      return this.formatToString_19mbxw$(this.months / 1200 | 0, 'CENTURY');
    else if ((this.months % 12 | 0) === 0)
      return this.formatToString_19mbxw$(this.months / 12 | 0, 'YEAR');
    else if ((this.months % 3 | 0) === 0)
      return this.formatToString_19mbxw$(this.months / 3 | 0, 'QUARTER');
    else
      return this.formatToString_19mbxw$(this.months, 'MONTH');
  };
  function DateTimeUnit$MonthBased$Companion() {
    DateTimeUnit$MonthBased$Companion_instance = this;
  }
  DateTimeUnit$MonthBased$Companion.prototype.serializer = function () {
    return MonthBasedDateTimeUnitSerializer_getInstance();
  };
  DateTimeUnit$MonthBased$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeUnit$MonthBased$Companion_instance = null;
  function DateTimeUnit$MonthBased$Companion_getInstance() {
    if (DateTimeUnit$MonthBased$Companion_instance === null) {
      new DateTimeUnit$MonthBased$Companion();
    }
    return DateTimeUnit$MonthBased$Companion_instance;
  }
  DateTimeUnit$MonthBased.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MonthBased',
    interfaces: [DateTimeUnit$DateBased]
  };
  DateTimeUnit.prototype.formatToString_19mbxw$ = function (value, unit) {
    return value === 1 ? unit : value.toString() + '-' + unit;
  };
  DateTimeUnit.prototype.formatToString_a4hdmt$ = function (value, unit) {
    return equals(value, L1) ? unit : value.toString() + '-' + unit;
  };
  function DateTimeUnit$Companion() {
    DateTimeUnit$Companion_instance = this;
    this.NANOSECOND = new DateTimeUnit$TimeBased(L1);
    this.MICROSECOND = this.NANOSECOND.times_za3lpa$(1000);
    this.MILLISECOND = this.MICROSECOND.times_za3lpa$(1000);
    this.SECOND = this.MILLISECOND.times_za3lpa$(1000);
    this.MINUTE = this.SECOND.times_za3lpa$(60);
    this.HOUR = this.MINUTE.times_za3lpa$(60);
    this.DAY = new DateTimeUnit$DayBased(1);
    this.WEEK = this.DAY.times_za3lpa$(7);
    this.MONTH = new DateTimeUnit$MonthBased(1);
    this.QUARTER = this.MONTH.times_za3lpa$(3);
    this.YEAR = this.MONTH.times_za3lpa$(12);
    this.CENTURY = this.YEAR.times_za3lpa$(100);
  }
  DateTimeUnit$Companion.prototype.serializer = function () {
    return DateTimeUnitSerializer_getInstance();
  };
  DateTimeUnit$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTimeUnit$Companion_instance = null;
  function DateTimeUnit$Companion_getInstance() {
    if (DateTimeUnit$Companion_instance === null) {
      new DateTimeUnit$Companion();
    }
    return DateTimeUnit$Companion_instance;
  }
  DateTimeUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeUnit',
    interfaces: []
  };
  function get_isoDayNumber($receiver) {
    return $receiver.ordinal + 1 | 0;
  }
  var allDaysOfWeek;
  function DayOfWeek(isoDayNumber) {
    if (!(1 <= isoDayNumber && isoDayNumber <= 7)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return allDaysOfWeek.get_za3lpa$(isoDayNumber - 1 | 0);
  }
  function DateTimeArithmeticException() {
    this.name = 'DateTimeArithmeticException';
  }
  DateTimeArithmeticException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeArithmeticException',
    interfaces: [RuntimeException]
  };
  function DateTimeArithmeticException_init($this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException_init($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_0(message, $this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException_init_0(message, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_1(cause, $this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException_init_1(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_2(message, cause, $this) {
    $this = $this || Object.create(DateTimeArithmeticException.prototype);
    RuntimeException.call($this, message, cause);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function IllegalTimeZoneException() {
    this.name = 'IllegalTimeZoneException';
  }
  IllegalTimeZoneException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IllegalTimeZoneException',
    interfaces: [IllegalArgumentException]
  };
  function IllegalTimeZoneException_init($this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException_init_0($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_0(message, $this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException_init(message, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_1(cause, $this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException_init_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_2(message, cause, $this) {
    $this = $this || Object.create(IllegalTimeZoneException.prototype);
    IllegalArgumentException.call($this, message, cause);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function DateTimeFormatException() {
    this.name = 'DateTimeFormatException';
  }
  DateTimeFormatException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateTimeFormatException',
    interfaces: [IllegalArgumentException]
  };
  function DateTimeFormatException_init($this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException_init_0($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_0(message, $this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException_init(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_1(cause, $this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException_init_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_2(message, cause, $this) {
    $this = $this || Object.create(DateTimeFormatException.prototype);
    IllegalArgumentException.call($this, message, cause);
    DateTimeFormatException.call($this);
    return $this;
  }
  function get_isDistantPast($receiver) {
    return $receiver.compareTo_11rb$(Instant$Companion_getInstance().DISTANT_PAST) <= 0;
  }
  function get_isDistantFuture($receiver) {
    return $receiver.compareTo_11rb$(Instant$Companion_getInstance().DISTANT_FUTURE) >= 0;
  }
  function toInstant($receiver) {
    return Instant$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function minus($receiver, period, timeZone) {
    if (!equals(period.totalNanoseconds, Long$Companion$MIN_VALUE)) {
      var negatedPeriod = buildDateTimePeriod(-period.totalMonths | 0, -period.days | 0, period.totalNanoseconds.unaryMinus());
      return plus_3($receiver, negatedPeriod, timeZone);
    } else {
      var negatedPeriod_0 = buildDateTimePeriod(-period.totalMonths | 0, -period.days | 0, period.totalNanoseconds.add(Kotlin.Long.fromInt(1)).unaryMinus());
      return plus_1(plus_3($receiver, negatedPeriod_0, timeZone), DateTimeUnit$Companion_getInstance().NANOSECOND);
    }
  }
  function until($receiver, other, unit) {
    try {
      return multiplyAddAndDivide(other.epochSeconds.subtract($receiver.epochSeconds), L1000000000, Kotlin.Long.fromInt(other.nanosecondsOfSecond - $receiver.nanosecondsOfSecond | 0), unit.nanoseconds);
    } catch (e) {
      if (Kotlin.isType(e, ArithmeticException)) {
        return $receiver.compareTo_11rb$(other) < 0 ? Long$Companion$MAX_VALUE : Long$Companion$MIN_VALUE;
      } else
        throw e;
    }
  }
  function daysUntil($receiver, other, timeZone) {
    return clampToInt(until_0($receiver, other, DateTimeUnit$Companion_getInstance().DAY, timeZone));
  }
  function monthsUntil($receiver, other, timeZone) {
    return clampToInt(until_0($receiver, other, DateTimeUnit$Companion_getInstance().MONTH, timeZone));
  }
  function yearsUntil($receiver, other, timeZone) {
    return clampToInt(until_0($receiver, other, DateTimeUnit$Companion_getInstance().YEAR, timeZone));
  }
  function minus_0($receiver, other, timeZone) {
    return periodUntil(other, $receiver, timeZone);
  }
  function minus_1($receiver, unit, timeZone) {
    return plus_6($receiver, -1, unit, timeZone);
  }
  function plus_1($receiver, unit) {
    return plus_7($receiver, L1, unit);
  }
  function minus_2($receiver, unit) {
    return plus_7($receiver, L_1, unit);
  }
  function plus_2($receiver, value, unit) {
    return plus_7($receiver, Kotlin.Long.fromInt(value), unit);
  }
  function minus_3($receiver, value, unit) {
    return minus_5($receiver, Kotlin.Long.fromInt(value), unit);
  }
  function minus_4($receiver, value, unit, timeZone) {
    if (!equals(value, Long$Companion$MIN_VALUE)) {
      return plus_5($receiver, value.unaryMinus(), unit, timeZone);
    } else {
      return plus_4(plus_5($receiver, value.add(Kotlin.Long.fromInt(1)).unaryMinus(), unit, timeZone), unit, timeZone);
    }
  }
  function minus_5($receiver, value, unit) {
    if (!equals(value, Long$Companion$MIN_VALUE)) {
      return plus_7($receiver, value.unaryMinus(), unit);
    } else {
      return plus_1(plus_7($receiver, value.add(Kotlin.Long.fromInt(1)).unaryMinus(), unit), unit);
    }
  }
  function minus_6($receiver, other, unit, timeZone) {
    return until_0(other, $receiver, unit, timeZone);
  }
  function minus_7($receiver, other, unit) {
    return until(other, $receiver, unit);
  }
  var DISTANT_PAST_SECONDS;
  var DISTANT_FUTURE_SECONDS;
  function toLocalDate($receiver) {
    return LocalDate$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function atTime($receiver, hour, minute, second, nanosecond) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    return LocalDateTime_init($receiver.year, $receiver.monthNumber, $receiver.dayOfMonth, hour, minute, second, nanosecond);
  }
  function atTime_0($receiver, time) {
    return LocalDateTime_init_1($receiver, time);
  }
  function minus_8($receiver, period) {
    if (period.days !== -2147483648 && period.months !== -2147483648) {
      return plus_11($receiver, DatePeriod_init(-period.years | 0, -period.months | 0, -period.days | 0));
    } else {
      return minus_13(minus_13(minus_13($receiver, period.years, DateTimeUnit$Companion_getInstance().YEAR), period.months, DateTimeUnit$Companion_getInstance().MONTH), period.days, DateTimeUnit$Companion_getInstance().DAY);
    }
  }
  function minus_9($receiver, other) {
    return periodUntil_0(other, $receiver);
  }
  function minus_10($receiver, unit) {
    return plus_9($receiver, -1, unit);
  }
  function minus_11($receiver, value, unit) {
    return plus_10($receiver, value.unaryMinus(), unit);
  }
  function toLocalDateTime($receiver) {
    return LocalDateTime$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function toLocalTime($receiver) {
    return LocalTime$Companion_getInstance().parse_61zpoe$($receiver);
  }
  function atDate($receiver, year, monthNumber, dayOfMonth) {
    if (dayOfMonth === void 0)
      dayOfMonth = 0;
    return LocalDateTime_init(year, monthNumber, dayOfMonth, $receiver.hour, $receiver.minute, $receiver.second, $receiver.nanosecond);
  }
  function atDate_0($receiver, year, month, dayOfMonth) {
    if (dayOfMonth === void 0)
      dayOfMonth = 0;
    return LocalDateTime_init_0(year, month, dayOfMonth, $receiver.hour, $receiver.minute, $receiver.second, $receiver.nanosecond);
  }
  function atDate_1($receiver, date) {
    return LocalDateTime_init_1(date, $receiver);
  }
  function get_number($receiver) {
    return $receiver.ordinal + 1 | 0;
  }
  var allMonths;
  function Month(number) {
    if (!(1 <= number && number <= 12)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    return allMonths.get_za3lpa$(number - 1 | 0);
  }
  function offsetIn($receiver, timeZone) {
    return offsetAt(timeZone, $receiver);
  }
  function UtcOffset() {
    return UtcOffset$Companion_getInstance().ZERO;
  }
  function asTimeZone($receiver) {
    return FixedOffsetTimeZone_init($receiver);
  }
  var SECONDS_PER_HOUR;
  var SECONDS_PER_MINUTE;
  var MINUTES_PER_HOUR;
  var HOURS_PER_DAY;
  var SECONDS_PER_DAY;
  var NANOS_PER_ONE;
  var NANOS_PER_MILLI;
  var MILLIS_PER_ONE;
  var NANOS_PER_DAY;
  var NANOS_PER_MINUTE;
  var NANOS_PER_HOUR;
  var MILLIS_PER_DAY;
  function isLeapYear(year) {
    var prolepticYear = Kotlin.Long.fromInt(year);
    return equals(prolepticYear.and(L3), L0) && (!equals(prolepticYear.modulo(Kotlin.Long.fromInt(100)), L0) || equals(prolepticYear.modulo(Kotlin.Long.fromInt(400)), L0));
  }
  function monthLength($receiver, isLeapYear) {
    switch ($receiver) {
      case 2:
        return isLeapYear ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  }
  function clampToInt($receiver) {
    if ($receiver.toNumber() > 2147483647)
      return 2147483647;
    else if ($receiver.toNumber() < -2147483648)
      return -2147483648;
    else
      return $receiver.toInt();
  }
  function safeMultiplyOrZero(a, b) {
    if (equals(b, L_1)) {
      if (equals(a, Long$Companion$MIN_VALUE)) {
        return L0;
      }
      return a.unaryMinus();
    } else if (equals(b, L1))
      return a;
    var total = a.multiply(b);
    if (!equals(total.div(b), a)) {
      return L0;
    }
    return total;
  }
  function multiplyAndDivide(a, b, c) {
    if (equals(a, L0) || equals(b, L0))
      return new DivRemResult(L0, L0);
    var ab = safeMultiplyOrZero(a, b);
    if (!equals(ab, L0))
      return new DivRemResult(ab.div(c), ab.modulo(c));
    if (equals(b, c))
      return new DivRemResult(a, L0);
    if (equals(a, c))
      return new DivRemResult(b, L0);
    var ae = a.toNumber() >= 0 ? L0 : L_1;
    var be = b.toNumber() >= 0 ? L0 : L_1;
    var al = a.and(L4294967295);
    var ah = a.shiftRight(32).and(L4294967295);
    var bl = b.and(L4294967295);
    var bh = b.shiftRight(32).and(L4294967295);
    var w = ae.multiply(bh).add(ah.multiply(be));
    var x = ae.multiply(bl).add(ah.multiply(bh)).add(al.multiply(be));
    var y1 = ah.multiply(bl);
    var y2 = al.multiply(bh);
    var z = al.multiply(bl);
    var r4 = z.and(L4294967295);
    var r3c = y1.and(L4294967295).add(y2.and(L4294967295)).add(z.shiftRight(32).and(L4294967295));
    var r3 = r3c.and(L4294967295);
    var r2c = r3c.shiftRight(32).and(L4294967295).add(x.and(L4294967295)).add(y1.shiftRight(32).and(L4294967295)).add(y2.shiftRight(32).and(L4294967295));
    var r2 = r2c.and(L4294967295);
    var r1 = r2c.shiftRight(32).and(L4294967295).add(x.shiftRight(32).and(L4294967295)).add(w.and(L4294967295));
    var abl = r3.shiftLeft(32).or(r4);
    var abh = r1.shiftLeft(32).or(r2);
    var sign = equals(abh.shiftRight(63).and(L1), L1) ? -1 : 1;
    if (sign === -1) {
      abl = abl.inv().add(Kotlin.Long.fromInt(1));
      abh = abh.inv();
      if (equals(abl, L0))
        abh = abh.add(Kotlin.Long.fromInt(1));
    }
    var q = L0;
    var r = L0;
    for (var bitNo = 127; bitNo >= 0; bitNo--) {
      var nextBit = bitNo < 64 ? abl.shiftRight(bitNo).and(L1) : abh.shiftRight(bitNo - 64 | 0).and(L1);
      r = r.shiftLeft(1).or(nextBit);
      if (r.compareTo_11rb$(c) >= 0 || r.toNumber() < 0) {
        r = r.subtract(c);
        if (bitNo < 63)
          q = q.or(L1.shiftLeft(bitNo));
        else
          throw new ArithmeticException('The result of a multiplication followed by division overflows a long');
      }
    }
    return new DivRemResult(Kotlin.Long.fromInt(sign).multiply(q), Kotlin.Long.fromInt(sign).multiply(r));
  }
  function DivRemResult(q, r) {
    this.q = q;
    this.r = r;
  }
  DivRemResult.prototype.component1 = function () {
    return this.q;
  };
  DivRemResult.prototype.component2 = function () {
    return this.r;
  };
  DivRemResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DivRemResult',
    interfaces: []
  };
  function low(x) {
    return x.and(L4294967295);
  }
  function high(x) {
    return x.shiftRight(32).and(L4294967295);
  }
  function indexBit(value, bit) {
    return value.shiftRight(bit).and(L1);
  }
  function multiplyAddAndDivide(d, n, r, m) {
    var md = d;
    var mr = r;
    if (d.toNumber() > 0 && r.toNumber() < 0) {
      md = md.dec();
      mr = mr.add(n);
    } else if (d.toNumber() < 0 && r.toNumber() > 0) {
      md = md.inc();
      mr = mr.subtract(n);
    }
    if (equals(md, L0)) {
      return mr.div(m);
    }
    var tmp$ = multiplyAndDivide(md, n, m);
    var rd = tmp$.component1()
    , rr = tmp$.component2();
    return safeAdd(rd, safeAdd(mr.div(m), safeAdd(mr.modulo(m), rr).div(m)));
  }
  function multiplyAndAdd(d, n, r) {
    var md = d;
    var mr = r;
    if (d.toNumber() > 0 && r.toNumber() < 0) {
      md = md.dec();
      mr = mr.add(n);
    } else if (d.toNumber() < 0 && r.toNumber() > 0) {
      md = md.inc();
      mr = mr.subtract(n);
    }
    return safeAdd(safeMultiply(md, n), mr);
  }
  function DateTimePeriodComponentSerializer() {
    DateTimePeriodComponentSerializer_instance = this;
    this.descriptor_fnakyv$_0 = buildClassSerialDescriptor('DateTimePeriod', [], DateTimePeriodComponentSerializer$descriptor$lambda);
  }
  Object.defineProperty(DateTimePeriodComponentSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_fnakyv$_0;
    }
  });
  DateTimePeriodComponentSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var years = 0;
      var months = 0;
      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      var nanoseconds = L0;
      loop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case 0:
            years = composite.decodeIntElement_szpzho$(this.descriptor, 0);
            break;
          case 1:
            months = composite.decodeIntElement_szpzho$(this.descriptor, 1);
            break;
          case 2:
            days = composite.decodeIntElement_szpzho$(this.descriptor, 2);
            break;
          case 3:
            hours = composite.decodeIntElement_szpzho$(this.descriptor, 3);
            break;
          case 4:
            minutes = composite.decodeIntElement_szpzho$(this.descriptor, 4);
            break;
          case 5:
            seconds = composite.decodeIntElement_szpzho$(this.descriptor, 5);
            break;
          case 6:
            nanoseconds = composite.decodeLongElement_szpzho$(this.descriptor, 6);
            break;
          case -1:
            break loop;
          default:
            throw SerializationException_init('Unexpected index: ' + index);
        }
      }
      decodeStructure$result = DateTimePeriod_0(years, months, days, hours, minutes, seconds, nanoseconds);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  DateTimePeriodComponentSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      if (value.years !== 0)
        composite.encodeIntElement_ptg7oe$(this.descriptor, 0, value.years);
      if (value.months !== 0)
        composite.encodeIntElement_ptg7oe$(this.descriptor, 1, value.months);
      if (value.days !== 0)
        composite.encodeIntElement_ptg7oe$(this.descriptor, 2, value.days);
      if (value.hours !== 0)
        composite.encodeIntElement_ptg7oe$(this.descriptor, 3, value.hours);
      if (value.minutes !== 0)
        composite.encodeIntElement_ptg7oe$(this.descriptor, 4, value.minutes);
      if (value.seconds !== 0)
        composite.encodeIntElement_ptg7oe$(this.descriptor, 5, value.seconds);
      if (value.nanoseconds !== 0)
        composite.encodeLongElement_j0o2mv$(this.descriptor, 6, Kotlin.Long.fromInt(value.nanoseconds));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  function DateTimePeriodComponentSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('years', descriptor, annotations, true);
    var annotations_0;
    annotations_0 = emptyList();
    var tmp$_0;
    var descriptor_0 = (Kotlin.isType(tmp$_0 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_0 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('months', descriptor_0, annotations_0, true);
    var annotations_1;
    annotations_1 = emptyList();
    var tmp$_1;
    var descriptor_1 = (Kotlin.isType(tmp$_1 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_1 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('days', descriptor_1, annotations_1, true);
    var annotations_2;
    annotations_2 = emptyList();
    var tmp$_2;
    var descriptor_2 = (Kotlin.isType(tmp$_2 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_2 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('hours', descriptor_2, annotations_2, true);
    var annotations_3;
    annotations_3 = emptyList();
    var tmp$_3;
    var descriptor_3 = (Kotlin.isType(tmp$_3 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_3 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('minutes', descriptor_3, annotations_3, true);
    var annotations_4;
    annotations_4 = emptyList();
    var tmp$_4;
    var descriptor_4 = (Kotlin.isType(tmp$_4 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_4 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('seconds', descriptor_4, annotations_4, true);
    var elementName = 'nanoseconds';
    var annotations_5;
    annotations_5 = emptyList();
    var tmp$_5;
    var descriptor_5 = (Kotlin.isType(tmp$_5 = serializer(createKType(getKClass(Long), [], false)), KSerializer) ? tmp$_5 : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName, descriptor_5, annotations_5, true);
    return Unit;
  }
  DateTimePeriodComponentSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateTimePeriodComponentSerializer',
    interfaces: [KSerializer]
  };
  var DateTimePeriodComponentSerializer_instance = null;
  function DateTimePeriodComponentSerializer_getInstance() {
    if (DateTimePeriodComponentSerializer_instance === null) {
      new DateTimePeriodComponentSerializer();
    }
    return DateTimePeriodComponentSerializer_instance;
  }
  function DateTimePeriodIso8601Serializer() {
    DateTimePeriodIso8601Serializer_instance = this;
    this.descriptor_43lmxe$_0 = PrimitiveSerialDescriptor('DateTimePeriod', PrimitiveKind.STRING);
  }
  Object.defineProperty(DateTimePeriodIso8601Serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_43lmxe$_0;
    }
  });
  DateTimePeriodIso8601Serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return DateTimePeriod$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
  };
  DateTimePeriodIso8601Serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  DateTimePeriodIso8601Serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateTimePeriodIso8601Serializer',
    interfaces: [KSerializer]
  };
  var DateTimePeriodIso8601Serializer_instance = null;
  function DateTimePeriodIso8601Serializer_getInstance() {
    if (DateTimePeriodIso8601Serializer_instance === null) {
      new DateTimePeriodIso8601Serializer();
    }
    return DateTimePeriodIso8601Serializer_instance;
  }
  function DatePeriodComponentSerializer() {
    DatePeriodComponentSerializer_instance = this;
    this.descriptor_rhn6r8$_0 = buildClassSerialDescriptor('DatePeriod', [], DatePeriodComponentSerializer$descriptor$lambda);
  }
  DatePeriodComponentSerializer.prototype.unexpectedNonzero_0 = function (fieldName, value) {
    if (!equals(value, L0)) {
      throw SerializationException_init('DatePeriod should have non-date components be zero, but got ' + value.toString() + " in '" + fieldName + "'");
    }
  };
  DatePeriodComponentSerializer.prototype.unexpectedNonzero_1 = function (fieldName, value) {
    this.unexpectedNonzero_0(fieldName, Kotlin.Long.fromInt(value));
  };
  Object.defineProperty(DatePeriodComponentSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rhn6r8$_0;
    }
  });
  DatePeriodComponentSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var years = 0;
      var months = 0;
      var days = 0;
      loop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case 0:
            years = composite.decodeIntElement_szpzho$(this.descriptor, 0);
            break;
          case 1:
            months = composite.decodeIntElement_szpzho$(this.descriptor, 1);
            break;
          case 2:
            days = composite.decodeIntElement_szpzho$(this.descriptor, 2);
            break;
          case 3:
            this.unexpectedNonzero_1('hours', composite.decodeIntElement_szpzho$(this.descriptor, 3));
            break;
          case 4:
            this.unexpectedNonzero_1('minutes', composite.decodeIntElement_szpzho$(this.descriptor, 4));
            break;
          case 5:
            this.unexpectedNonzero_1('seconds', composite.decodeIntElement_szpzho$(this.descriptor, 5));
            break;
          case 6:
            this.unexpectedNonzero_0('nanoseconds', composite.decodeLongElement_szpzho$(this.descriptor, 6));
            break;
          case -1:
            break loop;
          default:
            throw SerializationException_init('Unexpected index: ' + index);
        }
      }
      decodeStructure$result = DatePeriod_init(years, months, days);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  DatePeriodComponentSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      if (value.years !== 0)
        composite.encodeIntElement_ptg7oe$(DateTimePeriodComponentSerializer_getInstance().descriptor, 0, value.years);
      if (value.months !== 0)
        composite.encodeIntElement_ptg7oe$(DateTimePeriodComponentSerializer_getInstance().descriptor, 1, value.months);
      if (value.days !== 0)
        composite.encodeIntElement_ptg7oe$(DateTimePeriodComponentSerializer_getInstance().descriptor, 2, value.days);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  function DatePeriodComponentSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('years', descriptor, annotations, true);
    var annotations_0;
    annotations_0 = emptyList();
    var tmp$_0;
    var descriptor_0 = (Kotlin.isType(tmp$_0 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_0 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('months', descriptor_0, annotations_0, true);
    var annotations_1;
    annotations_1 = emptyList();
    var tmp$_1;
    var descriptor_1 = (Kotlin.isType(tmp$_1 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_1 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('days', descriptor_1, annotations_1, true);
    var annotations_2;
    annotations_2 = emptyList();
    var tmp$_2;
    var descriptor_2 = (Kotlin.isType(tmp$_2 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_2 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('hours', descriptor_2, annotations_2, true);
    var annotations_3;
    annotations_3 = emptyList();
    var tmp$_3;
    var descriptor_3 = (Kotlin.isType(tmp$_3 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_3 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('minutes', descriptor_3, annotations_3, true);
    var annotations_4;
    annotations_4 = emptyList();
    var tmp$_4;
    var descriptor_4 = (Kotlin.isType(tmp$_4 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_4 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('seconds', descriptor_4, annotations_4, true);
    var elementName = 'nanoseconds';
    var annotations_5;
    annotations_5 = emptyList();
    var tmp$_5;
    var descriptor_5 = (Kotlin.isType(tmp$_5 = serializer(createKType(getKClass(Long), [], false)), KSerializer) ? tmp$_5 : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName, descriptor_5, annotations_5, true);
    return Unit;
  }
  DatePeriodComponentSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DatePeriodComponentSerializer',
    interfaces: [KSerializer]
  };
  var DatePeriodComponentSerializer_instance = null;
  function DatePeriodComponentSerializer_getInstance() {
    if (DatePeriodComponentSerializer_instance === null) {
      new DatePeriodComponentSerializer();
    }
    return DatePeriodComponentSerializer_instance;
  }
  function DatePeriodIso8601Serializer() {
    DatePeriodIso8601Serializer_instance = this;
    this.descriptor_a91yyj$_0 = PrimitiveSerialDescriptor('DatePeriod', PrimitiveKind.STRING);
  }
  Object.defineProperty(DatePeriodIso8601Serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_a91yyj$_0;
    }
  });
  DatePeriodIso8601Serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var period = DateTimePeriod$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
    if (Kotlin.isType(period, DatePeriod))
      return period;
    else
      throw SerializationException_init(period.toString() + ' is not a date-based period');
  };
  DatePeriodIso8601Serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  DatePeriodIso8601Serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DatePeriodIso8601Serializer',
    interfaces: [KSerializer]
  };
  var DatePeriodIso8601Serializer_instance = null;
  function DatePeriodIso8601Serializer_getInstance() {
    if (DatePeriodIso8601Serializer_instance === null) {
      new DatePeriodIso8601Serializer();
    }
    return DatePeriodIso8601Serializer_instance;
  }
  function TimeBasedDateTimeUnitSerializer() {
    TimeBasedDateTimeUnitSerializer_instance = this;
    this.descriptor_nfwovp$_0 = buildClassSerialDescriptor('TimeBased', [], TimeBasedDateTimeUnitSerializer$descriptor$lambda);
  }
  Object.defineProperty(TimeBasedDateTimeUnitSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_nfwovp$_0;
    }
  });
  TimeBasedDateTimeUnitSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeLongElement_j0o2mv$(this.descriptor, 0, value.nanoseconds);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  TimeBasedDateTimeUnitSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var seen = {v: false};
    var nanoseconds = {v: L0};
    var descriptor = this.descriptor;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      if (composite.decodeSequentially()) {
        nanoseconds.v = composite.decodeLongElement_szpzho$(this.descriptor, 0);
        seen.v = true;
      } else {
        loop: while (true) {
          var elementIndex = composite.decodeElementIndex_24f42q$(this.descriptor);
          switch (elementIndex) {
            case 0:
              nanoseconds.v = composite.decodeLongElement_szpzho$(this.descriptor, 0);
              seen.v = true;
              break;
            case -1:
              break loop;
            default:
              throw UnknownFieldException_init(elementIndex);
          }
        }
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    if (!seen.v)
      throw MissingFieldException_init('nanoseconds');
    return new DateTimeUnit$TimeBased(nanoseconds.v);
  };
  function TimeBasedDateTimeUnitSerializer$descriptor$lambda($receiver) {
    var elementName = 'nanoseconds';
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(getKClass(Long), [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName, descriptor, annotations, false);
    return Unit;
  }
  TimeBasedDateTimeUnitSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TimeBasedDateTimeUnitSerializer',
    interfaces: [KSerializer]
  };
  var TimeBasedDateTimeUnitSerializer_instance = null;
  function TimeBasedDateTimeUnitSerializer_getInstance() {
    if (TimeBasedDateTimeUnitSerializer_instance === null) {
      new TimeBasedDateTimeUnitSerializer();
    }
    return TimeBasedDateTimeUnitSerializer_instance;
  }
  function DayBasedDateTimeUnitSerializer() {
    DayBasedDateTimeUnitSerializer_instance = this;
    this.descriptor_vgvkc2$_0 = buildClassSerialDescriptor('DayBased', [], DayBasedDateTimeUnitSerializer$descriptor$lambda);
  }
  Object.defineProperty(DayBasedDateTimeUnitSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vgvkc2$_0;
    }
  });
  DayBasedDateTimeUnitSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeIntElement_ptg7oe$(this.descriptor, 0, value.days);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  DayBasedDateTimeUnitSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var seen = {v: false};
    var days = {v: 0};
    var descriptor = this.descriptor;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      if (composite.decodeSequentially()) {
        days.v = composite.decodeIntElement_szpzho$(this.descriptor, 0);
        seen.v = true;
      } else {
        loop: while (true) {
          var elementIndex = composite.decodeElementIndex_24f42q$(this.descriptor);
          switch (elementIndex) {
            case 0:
              days.v = composite.decodeIntElement_szpzho$(this.descriptor, 0);
              seen.v = true;
              break;
            case -1:
              break loop;
            default:
              throw UnknownFieldException_init(elementIndex);
          }
        }
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    if (!seen.v)
      throw MissingFieldException_init('days');
    return new DateTimeUnit$DayBased(days.v);
  };
  function DayBasedDateTimeUnitSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('days', descriptor, annotations, false);
    return Unit;
  }
  DayBasedDateTimeUnitSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DayBasedDateTimeUnitSerializer',
    interfaces: [KSerializer]
  };
  var DayBasedDateTimeUnitSerializer_instance = null;
  function DayBasedDateTimeUnitSerializer_getInstance() {
    if (DayBasedDateTimeUnitSerializer_instance === null) {
      new DayBasedDateTimeUnitSerializer();
    }
    return DayBasedDateTimeUnitSerializer_instance;
  }
  function MonthBasedDateTimeUnitSerializer() {
    MonthBasedDateTimeUnitSerializer_instance = this;
    this.descriptor_wstnx2$_0 = buildClassSerialDescriptor('MonthBased', [], MonthBasedDateTimeUnitSerializer$descriptor$lambda);
  }
  Object.defineProperty(MonthBasedDateTimeUnitSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_wstnx2$_0;
    }
  });
  MonthBasedDateTimeUnitSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeIntElement_ptg7oe$(this.descriptor, 0, value.months);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  MonthBasedDateTimeUnitSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var seen = {v: false};
    var months = {v: 0};
    var descriptor = this.descriptor;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      if (composite.decodeSequentially()) {
        months.v = composite.decodeIntElement_szpzho$(this.descriptor, 0);
        seen.v = true;
      } else {
        loop: while (true) {
          var elementIndex = composite.decodeElementIndex_24f42q$(this.descriptor);
          switch (elementIndex) {
            case 0:
              months.v = composite.decodeIntElement_szpzho$(this.descriptor, 0);
              seen.v = true;
              break;
            case -1:
              break loop;
            default:
              throw UnknownFieldException_init(elementIndex);
          }
        }
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    if (!seen.v)
      throw MissingFieldException_init('months');
    return new DateTimeUnit$MonthBased(months.v);
  };
  function MonthBasedDateTimeUnitSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('months', descriptor, annotations, false);
    return Unit;
  }
  MonthBasedDateTimeUnitSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MonthBasedDateTimeUnitSerializer',
    interfaces: [KSerializer]
  };
  var MonthBasedDateTimeUnitSerializer_instance = null;
  function MonthBasedDateTimeUnitSerializer_getInstance() {
    if (MonthBasedDateTimeUnitSerializer_instance === null) {
      new MonthBasedDateTimeUnitSerializer();
    }
    return MonthBasedDateTimeUnitSerializer_instance;
  }
  function DateBasedDateTimeUnitSerializer() {
    DateBasedDateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    this.impl_0 = new SealedClassSerializer('kotlinx.datetime.DateTimeUnit.DateBased', getKClass(DateTimeUnit$DateBased), [getKClass(DateTimeUnit$DayBased), getKClass(DateTimeUnit$MonthBased)], [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance()]);
  }
  DateBasedDateTimeUnitSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$ = function (decoder, klassName) {
    return this.impl_0.findPolymorphicSerializerOrNull_ca6uye$(decoder, klassName);
  };
  DateBasedDateTimeUnitSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$ = function (encoder, value) {
    return this.impl_0.findPolymorphicSerializerOrNull_kjsxpj$(encoder, value);
  };
  Object.defineProperty(DateBasedDateTimeUnitSerializer.prototype, 'baseClass', {
    configurable: true,
    get: function () {
      return getKClass(DateTimeUnit$DateBased);
    }
  });
  Object.defineProperty(DateBasedDateTimeUnitSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.impl_0.descriptor;
    }
  });
  DateBasedDateTimeUnitSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateBasedDateTimeUnitSerializer',
    interfaces: [AbstractPolymorphicSerializer]
  };
  var DateBasedDateTimeUnitSerializer_instance = null;
  function DateBasedDateTimeUnitSerializer_getInstance() {
    if (DateBasedDateTimeUnitSerializer_instance === null) {
      new DateBasedDateTimeUnitSerializer();
    }
    return DateBasedDateTimeUnitSerializer_instance;
  }
  function DateTimeUnitSerializer() {
    DateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    this.impl_0 = new SealedClassSerializer('kotlinx.datetime.DateTimeUnit', getKClass(DateTimeUnit), [getKClass(DateTimeUnit$DayBased), getKClass(DateTimeUnit$MonthBased), getKClass(DateTimeUnit$TimeBased)], [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance(), TimeBasedDateTimeUnitSerializer_getInstance()]);
  }
  DateTimeUnitSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$ = function (decoder, klassName) {
    return this.impl_0.findPolymorphicSerializerOrNull_ca6uye$(decoder, klassName);
  };
  DateTimeUnitSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$ = function (encoder, value) {
    return this.impl_0.findPolymorphicSerializerOrNull_kjsxpj$(encoder, value);
  };
  Object.defineProperty(DateTimeUnitSerializer.prototype, 'baseClass', {
    configurable: true,
    get: function () {
      return getKClass(DateTimeUnit);
    }
  });
  Object.defineProperty(DateTimeUnitSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.impl_0.descriptor;
    }
  });
  DateTimeUnitSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateTimeUnitSerializer',
    interfaces: [AbstractPolymorphicSerializer]
  };
  var DateTimeUnitSerializer_instance = null;
  function DateTimeUnitSerializer_getInstance() {
    if (DateTimeUnitSerializer_instance === null) {
      new DateTimeUnitSerializer();
    }
    return DateTimeUnitSerializer_instance;
  }
  function DayOfWeekSerializer() {
    DayOfWeekSerializer_instance = this;
    this.impl_0 = new EnumSerializer('Month', DayOfWeek$values());
  }
  Object.defineProperty(DayOfWeekSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.impl_0.descriptor;
    }
  });
  DayOfWeekSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.impl_0.deserialize_bq71mq$(decoder);
  };
  DayOfWeekSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    this.impl_0.serialize_55azsf$(encoder, value);
  };
  DayOfWeekSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DayOfWeekSerializer',
    interfaces: [KSerializer]
  };
  var DayOfWeekSerializer_instance = null;
  function DayOfWeekSerializer_getInstance() {
    if (DayOfWeekSerializer_instance === null) {
      new DayOfWeekSerializer();
    }
    return DayOfWeekSerializer_instance;
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.descriptor_unvol$_0 = PrimitiveSerialDescriptor('Instant', PrimitiveKind.STRING);
  }
  Object.defineProperty(InstantIso8601Serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_unvol$_0;
    }
  });
  InstantIso8601Serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return Instant$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
  };
  InstantIso8601Serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  InstantIso8601Serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InstantIso8601Serializer',
    interfaces: [KSerializer]
  };
  var InstantIso8601Serializer_instance = null;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance === null) {
      new InstantIso8601Serializer();
    }
    return InstantIso8601Serializer_instance;
  }
  function InstantComponentSerializer() {
    InstantComponentSerializer_instance = this;
    this.descriptor_bvgg44$_0 = buildClassSerialDescriptor('Instant', [], InstantComponentSerializer$descriptor$lambda);
  }
  Object.defineProperty(InstantComponentSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_bvgg44$_0;
    }
  });
  InstantComponentSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var epochSeconds = null;
      var nanosecondsOfSecond = 0;
      loop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case 0:
            epochSeconds = composite.decodeLongElement_szpzho$(this.descriptor, 0);
            break;
          case 1:
            nanosecondsOfSecond = composite.decodeIntElement_szpzho$(this.descriptor, 1);
            break;
          case -1:
            break loop;
          default:
            throw SerializationException_init('Unexpected index: ' + index);
        }
      }
      if (epochSeconds == null)
        throw MissingFieldException_init('epochSeconds');
      decodeStructure$result = Instant$Companion_getInstance().fromEpochSeconds_yhmem3$(epochSeconds, nanosecondsOfSecond);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  InstantComponentSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeLongElement_j0o2mv$(this.descriptor, 0, value.epochSeconds);
      if (value.nanosecondsOfSecond !== 0) {
        composite.encodeIntElement_ptg7oe$(this.descriptor, 1, value.nanosecondsOfSecond);
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  function InstantComponentSerializer$descriptor$lambda($receiver) {
    var elementName = 'epochSeconds';
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(getKClass(Long), [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName, descriptor, annotations, false);
    var elementName_0 = 'nanosecondsOfSecond';
    var annotations_0;
    annotations_0 = emptyList();
    var tmp$_0;
    var descriptor_0 = (Kotlin.isType(tmp$_0 = serializer(createKType(getKClass(Long), [], false)), KSerializer) ? tmp$_0 : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName_0, descriptor_0, annotations_0, true);
    return Unit;
  }
  InstantComponentSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InstantComponentSerializer',
    interfaces: [KSerializer]
  };
  var InstantComponentSerializer_instance = null;
  function InstantComponentSerializer_getInstance() {
    if (InstantComponentSerializer_instance === null) {
      new InstantComponentSerializer();
    }
    return InstantComponentSerializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.descriptor_gul6mb$_0 = PrimitiveSerialDescriptor('LocalDate', PrimitiveKind.STRING);
  }
  Object.defineProperty(LocalDateIso8601Serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_gul6mb$_0;
    }
  });
  LocalDateIso8601Serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return LocalDate$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
  };
  LocalDateIso8601Serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  LocalDateIso8601Serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalDateIso8601Serializer',
    interfaces: [KSerializer]
  };
  var LocalDateIso8601Serializer_instance = null;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance === null) {
      new LocalDateIso8601Serializer();
    }
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateComponentSerializer() {
    LocalDateComponentSerializer_instance = this;
    this.descriptor_ogm9ac$_0 = buildClassSerialDescriptor('LocalDate', [], LocalDateComponentSerializer$descriptor$lambda);
  }
  Object.defineProperty(LocalDateComponentSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ogm9ac$_0;
    }
  });
  LocalDateComponentSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var year = null;
      var month = null;
      var day = null;
      loop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case 0:
            year = composite.decodeIntElement_szpzho$(this.descriptor, 0);
            break;
          case 1:
            month = composite.decodeShortElement_szpzho$(this.descriptor, 1);
            break;
          case 2:
            day = composite.decodeShortElement_szpzho$(this.descriptor, 2);
            break;
          case -1:
            break loop;
          default:
            throw SerializationException_init('Unexpected index: ' + index);
        }
      }
      if (year == null)
        throw MissingFieldException_init('year');
      if (month == null)
        throw MissingFieldException_init('month');
      if (day == null)
        throw MissingFieldException_init('day');
      decodeStructure$result = LocalDate_init(year, month, day);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  LocalDateComponentSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeIntElement_ptg7oe$(this.descriptor, 0, value.year);
      composite.encodeShortElement_l83pjl$(this.descriptor, 1, toShort(value.monthNumber));
      composite.encodeShortElement_l83pjl$(this.descriptor, 2, toShort(value.dayOfMonth));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  function LocalDateComponentSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('year', descriptor, annotations, false);
    var annotations_0;
    annotations_0 = emptyList();
    var tmp$_0;
    var descriptor_0 = (Kotlin.isType(tmp$_0 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_0 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('month', descriptor_0, annotations_0, false);
    var annotations_1;
    annotations_1 = emptyList();
    var tmp$_1;
    var descriptor_1 = (Kotlin.isType(tmp$_1 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_1 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('day', descriptor_1, annotations_1, false);
    return Unit;
  }
  LocalDateComponentSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalDateComponentSerializer',
    interfaces: [KSerializer]
  };
  var LocalDateComponentSerializer_instance = null;
  function LocalDateComponentSerializer_getInstance() {
    if (LocalDateComponentSerializer_instance === null) {
      new LocalDateComponentSerializer();
    }
    return LocalDateComponentSerializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.descriptor_5wjs3u$_0 = PrimitiveSerialDescriptor('LocalDateTime', PrimitiveKind.STRING);
  }
  Object.defineProperty(LocalDateTimeIso8601Serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_5wjs3u$_0;
    }
  });
  LocalDateTimeIso8601Serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return LocalDateTime$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
  };
  LocalDateTimeIso8601Serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  LocalDateTimeIso8601Serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalDateTimeIso8601Serializer',
    interfaces: [KSerializer]
  };
  var LocalDateTimeIso8601Serializer_instance = null;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance === null) {
      new LocalDateTimeIso8601Serializer();
    }
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalDateTimeComponentSerializer() {
    LocalDateTimeComponentSerializer_instance = this;
    this.descriptor_ddgcnl$_0 = buildClassSerialDescriptor('LocalDateTime', [], LocalDateTimeComponentSerializer$descriptor$lambda);
  }
  Object.defineProperty(LocalDateTimeComponentSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ddgcnl$_0;
    }
  });
  LocalDateTimeComponentSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var year = null;
      var month = null;
      var day = null;
      var hour = null;
      var minute = null;
      var second = 0;
      var nanosecond = 0;
      loop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case 0:
            year = composite.decodeIntElement_szpzho$(this.descriptor, 0);
            break;
          case 1:
            month = composite.decodeShortElement_szpzho$(this.descriptor, 1);
            break;
          case 2:
            day = composite.decodeShortElement_szpzho$(this.descriptor, 2);
            break;
          case 3:
            hour = composite.decodeShortElement_szpzho$(this.descriptor, 3);
            break;
          case 4:
            minute = composite.decodeShortElement_szpzho$(this.descriptor, 4);
            break;
          case 5:
            second = composite.decodeShortElement_szpzho$(this.descriptor, 5);
            break;
          case 6:
            nanosecond = composite.decodeIntElement_szpzho$(this.descriptor, 6);
            break;
          case -1:
            break loop;
          default:
            throw SerializationException_init('Unexpected index: ' + index);
        }
      }
      if (year == null)
        throw MissingFieldException_init('year');
      if (month == null)
        throw MissingFieldException_init('month');
      if (day == null)
        throw MissingFieldException_init('day');
      if (hour == null)
        throw MissingFieldException_init('hour');
      if (minute == null)
        throw MissingFieldException_init('minute');
      decodeStructure$result = LocalDateTime_init(year, month, day, hour, minute, second, nanosecond);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  LocalDateTimeComponentSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeIntElement_ptg7oe$(this.descriptor, 0, value.year);
      composite.encodeShortElement_l83pjl$(this.descriptor, 1, toShort(value.monthNumber));
      composite.encodeShortElement_l83pjl$(this.descriptor, 2, toShort(value.dayOfMonth));
      composite.encodeShortElement_l83pjl$(this.descriptor, 3, toShort(value.hour));
      composite.encodeShortElement_l83pjl$(this.descriptor, 4, toShort(value.minute));
      if (value.second !== 0 || value.nanosecond !== 0) {
        composite.encodeShortElement_l83pjl$(this.descriptor, 5, toShort(value.second));
        if (value.nanosecond !== 0) {
          composite.encodeIntElement_ptg7oe$(this.descriptor, 6, value.nanosecond);
        }
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  function LocalDateTimeComponentSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('year', descriptor, annotations, false);
    var annotations_0;
    annotations_0 = emptyList();
    var tmp$_0;
    var descriptor_0 = (Kotlin.isType(tmp$_0 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_0 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('month', descriptor_0, annotations_0, false);
    var annotations_1;
    annotations_1 = emptyList();
    var tmp$_1;
    var descriptor_1 = (Kotlin.isType(tmp$_1 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_1 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('day', descriptor_1, annotations_1, false);
    var annotations_2;
    annotations_2 = emptyList();
    var tmp$_2;
    var descriptor_2 = (Kotlin.isType(tmp$_2 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_2 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('hour', descriptor_2, annotations_2, false);
    var annotations_3;
    annotations_3 = emptyList();
    var tmp$_3;
    var descriptor_3 = (Kotlin.isType(tmp$_3 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_3 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('minute', descriptor_3, annotations_3, false);
    var annotations_4;
    annotations_4 = emptyList();
    var tmp$_4;
    var descriptor_4 = (Kotlin.isType(tmp$_4 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_4 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('second', descriptor_4, annotations_4, true);
    var elementName = 'nanosecond';
    var annotations_5;
    annotations_5 = emptyList();
    var tmp$_5;
    var descriptor_5 = (Kotlin.isType(tmp$_5 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_5 : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName, descriptor_5, annotations_5, true);
    return Unit;
  }
  LocalDateTimeComponentSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalDateTimeComponentSerializer',
    interfaces: [KSerializer]
  };
  var LocalDateTimeComponentSerializer_instance = null;
  function LocalDateTimeComponentSerializer_getInstance() {
    if (LocalDateTimeComponentSerializer_instance === null) {
      new LocalDateTimeComponentSerializer();
    }
    return LocalDateTimeComponentSerializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.descriptor_f5ul8c$_0 = PrimitiveSerialDescriptor('LocalTime', PrimitiveKind.STRING);
  }
  Object.defineProperty(LocalTimeIso8601Serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_f5ul8c$_0;
    }
  });
  LocalTimeIso8601Serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return LocalTime$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
  };
  LocalTimeIso8601Serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  LocalTimeIso8601Serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalTimeIso8601Serializer',
    interfaces: [KSerializer]
  };
  var LocalTimeIso8601Serializer_instance = null;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance === null) {
      new LocalTimeIso8601Serializer();
    }
    return LocalTimeIso8601Serializer_instance;
  }
  function LocalTimeComponentSerializer() {
    LocalTimeComponentSerializer_instance = this;
    this.descriptor_vrwyv7$_0 = buildClassSerialDescriptor('LocalTime', [], LocalTimeComponentSerializer$descriptor$lambda);
  }
  Object.defineProperty(LocalTimeComponentSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vrwyv7$_0;
    }
  });
  LocalTimeComponentSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      var hour = null;
      var minute = null;
      var second = 0;
      var nanosecond = 0;
      loop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case 0:
            hour = composite.decodeShortElement_szpzho$(this.descriptor, 0);
            break;
          case 1:
            minute = composite.decodeShortElement_szpzho$(this.descriptor, 1);
            break;
          case 2:
            second = composite.decodeShortElement_szpzho$(this.descriptor, 2);
            break;
          case 3:
            nanosecond = composite.decodeIntElement_szpzho$(this.descriptor, 3);
            break;
          case -1:
            break loop;
          default:
            throw SerializationException_init('Unexpected index: ' + index);
        }
      }
      if (hour == null)
        throw MissingFieldException_init('hour');
      if (minute == null)
        throw MissingFieldException_init('minute');
      decodeStructure$result = LocalTime_init(hour, minute, second, nanosecond);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  LocalTimeComponentSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    var ex = null;
    try {
      composite.encodeShortElement_l83pjl$(this.descriptor, 0, toShort(value.hour));
      composite.encodeShortElement_l83pjl$(this.descriptor, 1, toShort(value.minute));
      if (value.second !== 0 || value.nanosecond !== 0) {
        composite.encodeShortElement_l83pjl$(this.descriptor, 2, toShort(value.second));
        if (value.nanosecond !== 0) {
          composite.encodeIntElement_ptg7oe$(this.descriptor, 3, value.nanosecond);
        }
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        ex = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if (ex == null)
        composite.endStructure_24f42q$(descriptor);
    }
  };
  function LocalTimeComponentSerializer$descriptor$lambda($receiver) {
    var annotations;
    annotations = emptyList();
    var tmp$;
    var descriptor = (Kotlin.isType(tmp$ = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    $receiver.element_vxrguq$('hour', descriptor, annotations, false);
    var annotations_0;
    annotations_0 = emptyList();
    var tmp$_0;
    var descriptor_0 = (Kotlin.isType(tmp$_0 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_0 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('minute', descriptor_0, annotations_0, false);
    var annotations_1;
    annotations_1 = emptyList();
    var tmp$_1;
    var descriptor_1 = (Kotlin.isType(tmp$_1 = serializer(createKType(PrimitiveClasses$shortClass, [], false)), KSerializer) ? tmp$_1 : throwCCE()).descriptor;
    $receiver.element_vxrguq$('second', descriptor_1, annotations_1, true);
    var elementName = 'nanosecond';
    var annotations_2;
    annotations_2 = emptyList();
    var tmp$_2;
    var descriptor_2 = (Kotlin.isType(tmp$_2 = serializer(createKType(PrimitiveClasses$intClass, [], false)), KSerializer) ? tmp$_2 : throwCCE()).descriptor;
    $receiver.element_vxrguq$(elementName, descriptor_2, annotations_2, true);
    return Unit;
  }
  LocalTimeComponentSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalTimeComponentSerializer',
    interfaces: [KSerializer]
  };
  var LocalTimeComponentSerializer_instance = null;
  function LocalTimeComponentSerializer_getInstance() {
    if (LocalTimeComponentSerializer_instance === null) {
      new LocalTimeComponentSerializer();
    }
    return LocalTimeComponentSerializer_instance;
  }
  function MonthSerializer() {
    MonthSerializer_instance = this;
    this.impl_0 = new EnumSerializer('Month', Month$values());
  }
  Object.defineProperty(MonthSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.impl_0.descriptor;
    }
  });
  MonthSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.impl_0.deserialize_bq71mq$(decoder);
  };
  MonthSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    this.impl_0.serialize_55azsf$(encoder, value);
  };
  MonthSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MonthSerializer',
    interfaces: [KSerializer]
  };
  var MonthSerializer_instance = null;
  function MonthSerializer_getInstance() {
    if (MonthSerializer_instance === null) {
      new MonthSerializer();
    }
    return MonthSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.descriptor_6fjhe9$_0 = PrimitiveSerialDescriptor('TimeZone', PrimitiveKind.STRING);
  }
  Object.defineProperty(TimeZoneSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_6fjhe9$_0;
    }
  });
  TimeZoneSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return TimeZone$Companion_getInstance().of_61zpoe$(decoder.decodeString());
  };
  TimeZoneSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.id);
  };
  TimeZoneSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TimeZoneSerializer',
    interfaces: [KSerializer]
  };
  var TimeZoneSerializer_instance = null;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance === null) {
      new TimeZoneSerializer();
    }
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.descriptor_hmmi1m$_0 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', PrimitiveKind.STRING);
  }
  Object.defineProperty(FixedOffsetTimeZoneSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_hmmi1m$_0;
    }
  });
  FixedOffsetTimeZoneSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var zone = TimeZone$Companion_getInstance().of_61zpoe$(decoder.decodeString());
    if (Kotlin.isType(zone, FixedOffsetTimeZone)) {
      return zone;
    } else {
      throw SerializationException_init("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  FixedOffsetTimeZoneSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.id);
  };
  FixedOffsetTimeZoneSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FixedOffsetTimeZoneSerializer',
    interfaces: [KSerializer]
  };
  var FixedOffsetTimeZoneSerializer_instance = null;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance === null) {
      new FixedOffsetTimeZoneSerializer();
    }
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.descriptor_3pq4rh$_0 = PrimitiveSerialDescriptor('UtcOffset', PrimitiveKind.STRING);
  }
  Object.defineProperty(UtcOffsetSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_3pq4rh$_0;
    }
  });
  UtcOffsetSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return UtcOffset$Companion_getInstance().parse_61zpoe$(decoder.decodeString());
  };
  UtcOffsetSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  UtcOffsetSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UtcOffsetSerializer',
    interfaces: [KSerializer]
  };
  var UtcOffsetSerializer_instance = null;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance === null) {
      new UtcOffsetSerializer();
    }
    return UtcOffsetSerializer_instance;
  }
  function toJSDate($receiver) {
    return new Date($receiver.toEpochMilliseconds().toNumber());
  }
  function toKotlinInstant($receiver) {
    return Instant$Companion_getInstance().fromEpochMilliseconds_s8cxhz$(Kotlin.Long.fromNumber($receiver.getTime()));
  }
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DayOfWeek_initFields() {
    DayOfWeek_initFields = function () {
    };
    DayOfWeek$MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek$TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek$WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek$THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek$FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek$SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek$SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var DayOfWeek$MONDAY_instance;
  function DayOfWeek$MONDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$MONDAY_instance;
  }
  var DayOfWeek$TUESDAY_instance;
  function DayOfWeek$TUESDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$TUESDAY_instance;
  }
  var DayOfWeek$WEDNESDAY_instance;
  function DayOfWeek$WEDNESDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$WEDNESDAY_instance;
  }
  var DayOfWeek$THURSDAY_instance;
  function DayOfWeek$THURSDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$THURSDAY_instance;
  }
  var DayOfWeek$FRIDAY_instance;
  function DayOfWeek$FRIDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$FRIDAY_instance;
  }
  var DayOfWeek$SATURDAY_instance;
  function DayOfWeek$SATURDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$SATURDAY_instance;
  }
  var DayOfWeek$SUNDAY_instance;
  function DayOfWeek$SUNDAY_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$SUNDAY_instance;
  }
  DayOfWeek_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayOfWeek',
    interfaces: [Enum]
  };
  function DayOfWeek$values() {
    return [DayOfWeek$MONDAY_getInstance(), DayOfWeek$TUESDAY_getInstance(), DayOfWeek$WEDNESDAY_getInstance(), DayOfWeek$THURSDAY_getInstance(), DayOfWeek$FRIDAY_getInstance(), DayOfWeek$SATURDAY_getInstance(), DayOfWeek$SUNDAY_getInstance()];
  }
  DayOfWeek_0.values = DayOfWeek$values;
  function DayOfWeek$valueOf(name) {
    switch (name) {
      case 'MONDAY':
        return DayOfWeek$MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek$TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek$WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek$THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek$FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek$SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek$SUNDAY_getInstance();
      default:
        throwISE('No enum constant kotlinx.datetime.DayOfWeek.' + name);
    }
  }
  DayOfWeek_0.valueOf_61zpoe$ = DayOfWeek$valueOf;
  function toDayOfWeek($receiver) {
    return DayOfWeek(numberToInt($receiver.value()));
  }
  function Instant(value) {
    Instant$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  Object.defineProperty(Instant.prototype, 'epochSeconds', {
    configurable: true,
    get: function () {
      return numberToLong(this.value_8be2vx$.epochSecond());
    }
  });
  Object.defineProperty(Instant.prototype, 'nanosecondsOfSecond', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.nano());
    }
  });
  Instant.prototype.toEpochMilliseconds = function () {
    return this.epochSeconds.multiply(Kotlin.Long.fromInt(1000)).add(Kotlin.Long.fromInt(this.nanosecondsOfSecond / 1000000 | 0));
  };
  Instant.prototype.plus_cgako$ = function (duration) {
    var seconds = duration.inWholeSeconds;
    var nanoseconds = duration.nanosecondsComponent;
    var tmp$;
    try {
      tmp$ = new Instant(this.plusFix_coldnx$(seconds.toNumber(), nanoseconds));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e))
          throw e;
        tmp$ = seconds.toNumber() > 0 ? Instant$Companion_getInstance().MAX_8be2vx$ : Instant$Companion_getInstance().MIN_8be2vx$;
      } else
        throw e;
    }
    return tmp$;
  };
  Instant.prototype.plusFix_coldnx$ = function (seconds, nanos) {
    var newSeconds = numberToDouble(this.value_8be2vx$.epochSecond()) + seconds;
    var newNanos = numberToDouble(this.value_8be2vx$.nano()) + nanos;
    return Instant$Companion.ofEpochSecond(newSeconds, newNanos);
  };
  Instant.prototype.minus_cgako$ = function (duration) {
    return this.plus_cgako$(duration.unaryMinus());
  };
  Instant.prototype.minus_2hqr0b$ = function (other) {
    var diff = Duration$Companion.between(other.value_8be2vx$, this.value_8be2vx$);
    return toDuration_0(numberToDouble(diff.seconds()), DurationUnit.SECONDS).plus_cgako$(toDuration_0(numberToDouble(diff.nano()), DurationUnit.NANOSECONDS));
  };
  Instant.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  Instant.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, Instant) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  Instant.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  Instant.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  function Instant$Companion_0() {
    Instant$Companion_instance = this;
    this.DISTANT_PAST = new Instant(Instant$Companion.ofEpochSecond(DISTANT_PAST_SECONDS, 999999999));
    this.DISTANT_FUTURE = new Instant(Instant$Companion.ofEpochSecond(DISTANT_FUTURE_SECONDS, 0));
    this.MIN_8be2vx$ = new Instant(Instant$Companion.MIN);
    this.MAX_8be2vx$ = new Instant(Instant$Companion.MAX);
  }
  Instant$Companion_0.prototype.now = function () {
    return new Instant(Clock$Companion.systemUTC().instant());
  };
  Instant$Companion_0.prototype.fromEpochMilliseconds_s8cxhz$ = function (epochMilliseconds) {
    try {
      return this.fromEpochSeconds_3pjtqy$(epochMilliseconds.div(Kotlin.Long.fromInt(1000)), epochMilliseconds.modulo(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000000)));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e))
          throw e;
        return epochMilliseconds.toNumber() > 0 ? this.MAX_8be2vx$ : this.MIN_8be2vx$;
      } else
        throw e;
    }
  };
  Instant$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new Instant(OffsetDateTime$Companion.parse(this.fixOffsetRepresentation_0(isoString)).toInstant());
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  Instant$Companion_0.prototype.fixOffsetRepresentation_0 = function (isoString) {
    var time = indexOf(isoString, 84, void 0, true);
    if (time === -1)
      return isoString;
    var indexOfLast$result;
    indexOfLast$break: do {
      var tmp$;
      tmp$ = reversed(get_indices(isoString)).iterator();
      while (tmp$.hasNext()) {
        var index = tmp$.next();
        var c = toBoxedChar(isoString.charCodeAt(index));
        if (unboxChar(c) === 43 || unboxChar(c) === 45) {
          indexOfLast$result = index;
          break indexOfLast$break;
        }
      }
      indexOfLast$result = -1;
    }
     while (false);
    var offset = indexOfLast$result;
    if (offset < time)
      return isoString;
    var separator = indexOf(isoString, 58, offset);
    return separator !== -1 ? isoString : isoString + ':00';
  };
  Instant$Companion_0.prototype.fromEpochSeconds_3pjtqy$ = function (epochSeconds, nanosecondAdjustment) {
    if (nanosecondAdjustment === void 0)
      nanosecondAdjustment = L0;
    try {
      var other = L1000000000;
      var q = nanosecondAdjustment.div(other);
      if (nanosecondAdjustment.xor(other).toNumber() < 0 && !equals(q.multiply(other), nanosecondAdjustment)) {
        q = q.dec();
      }
      var secs = safeAdd(epochSeconds, q);
      var other_0 = L1000000000;
      var r = nanosecondAdjustment.modulo(other_0);
      var nos = r.add(other_0.and(r.xor(other_0).and(r.or(r.unaryMinus())).shiftRight(63))).toInt();
      return new Instant(Instant$Companion.ofEpochSecond(secs, nos));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e) && !Kotlin.isType(e, ArithmeticException))
          throw e;
        return epochSeconds.toNumber() > 0 ? this.MAX_8be2vx$ : this.MIN_8be2vx$;
      } else
        throw e;
    }
  };
  Instant$Companion_0.prototype.fromEpochSeconds_yhmem3$ = function (epochSeconds, nanosecondAdjustment) {
    try {
      return new Instant(Instant$Companion.ofEpochSecond(epochSeconds, nanosecondAdjustment));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e))
          throw e;
        return epochSeconds.toNumber() > 0 ? this.MAX_8be2vx$ : this.MIN_8be2vx$;
      } else
        throw e;
    }
  };
  Instant$Companion_0.prototype.serializer = function () {
    return InstantIso8601Serializer_getInstance();
  };
  Instant$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Instant$Companion_instance = null;
  function Instant$Companion_getInstance() {
    if (Instant$Companion_instance === null) {
      new Instant$Companion_0();
    }
    return Instant$Companion_instance;
  }
  Instant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Instant',
    interfaces: [Comparable]
  };
  function plus_3($receiver, period, timeZone) {
    try {
      var thisZdt = $receiver.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$);
      var $receiver_0 = period.totalMonths !== 0 ? thisZdt.plusMonths(period.totalMonths) : thisZdt;
      var $receiver_1 = period.days !== 0 ? $receiver_0.plusDays(period.days) : $receiver_0;
      var $receiver_2 = period.hours !== 0 ? $receiver_1.plusHours(period.hours) : $receiver_1;
      var $receiver_3 = period.minutes !== 0 ? $receiver_2.plusMinutes(period.minutes) : $receiver_2;
      var $receiver_4 = period.seconds !== 0 ? $receiver_3.plusSeconds(period.seconds) : $receiver_3;
      return new Instant((period.nanoseconds !== 0 ? $receiver_4.plusNanos(period.nanoseconds) : $receiver_4).toInstant());
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function atZone($receiver, zone) {
    return $receiver.value_8be2vx$.atZone(zone.zoneId_8be2vx$);
  }
  function checkZone($receiver, zone) {
    $receiver.atZone(zone.zoneId_8be2vx$);
    return $receiver;
  }
  function plus_4($receiver, unit, timeZone) {
    return plus_6($receiver, 1, unit, timeZone);
  }
  function plus_5($receiver, value, unit, timeZone) {
    var tmp$;
    try {
      var thisZdt = atZone($receiver, timeZone);
      if (Kotlin.isType(unit, DateTimeUnit$TimeBased))
        tmp$ = checkZone(plus_7($receiver, value, unit).value_8be2vx$, timeZone);
      else if (Kotlin.isType(unit, DateTimeUnit$DayBased))
        tmp$ = thisZdt.plusDays(value.toNumber() * unit.days).toInstant();
      else if (Kotlin.isType(unit, DateTimeUnit$MonthBased))
        tmp$ = thisZdt.plusMonths(value.toNumber() * unit.months).toInstant();
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return new Instant(tmp$);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function plus_6($receiver, value, unit, timeZone) {
    var tmp$;
    try {
      var thisZdt = atZone($receiver, timeZone);
      if (Kotlin.isType(unit, DateTimeUnit$TimeBased))
        tmp$ = checkZone(plus_7($receiver, Kotlin.Long.fromInt(value), unit).value_8be2vx$, timeZone);
      else if (Kotlin.isType(unit, DateTimeUnit$DayBased))
        tmp$ = thisZdt.plusDays(value * unit.days).toInstant();
      else if (Kotlin.isType(unit, DateTimeUnit$MonthBased))
        tmp$ = thisZdt.plusMonths(value * unit.months).toInstant();
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return new Instant(tmp$);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function minus_12($receiver, value, unit, timeZone) {
    return value === -2147483648 ? plus_5($receiver, Kotlin.Long.fromInt(value).unaryMinus(), unit, timeZone) : plus_6($receiver, -value | 0, unit, timeZone);
  }
  function plus_7($receiver, value, unit) {
    try {
      var f = multiplyAndDivide(value, unit.nanoseconds, L1000000000);
      var d = f.component1()
      , r = f.component2();
      return new Instant($receiver.plusFix_coldnx$(d.toNumber(), r.toInt()));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e)) {
          throw e;
        }
        return value.toNumber() > 0 ? Instant$Companion_getInstance().MAX_8be2vx$ : Instant$Companion_getInstance().MIN_8be2vx$;
      } else
        throw e;
    }
  }
  function periodUntil($receiver, other, timeZone) {
    try {
      var thisZdt = $receiver.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$);
      var otherZdt = other.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$);
      var months = numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.MONTHS));
      thisZdt = thisZdt.plusMonths(months);
      var days = numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.DAYS));
      thisZdt = thisZdt.plusDays(days);
      var nanoseconds = numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.NANOS));
      return buildDateTimePeriod(numberToInt(months), numberToInt(days), Kotlin.Long.fromNumber(nanoseconds));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        else
          throw e;
      } else
        throw e;
    }
  }
  function until_0($receiver, other, unit, timeZone) {
    try {
      var thisZdt = atZone($receiver, timeZone);
      var otherZdt = atZone(other, timeZone);
      if (Kotlin.isType(unit, DateTimeUnit$TimeBased))
        return until($receiver, other, unit);
      else if (Kotlin.isType(unit, DateTimeUnit$DayBased))
        return Kotlin.Long.fromNumber(numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.DAYS)) / unit.days);
      else if (Kotlin.isType(unit, DateTimeUnit$MonthBased))
        return Kotlin.Long.fromNumber(numberToDouble(thisZdt.until(otherZdt, ChronoUnit$Companion.MONTHS)) / unit.months);
      else
        return Kotlin.noWhenBranchMatched();
    } catch (e) {
      if (Kotlin.isType(e, ArithmeticException)) {
        return $receiver.compareTo_11rb$(other) < 0 ? Long$Companion$MAX_VALUE : Long$Companion$MIN_VALUE;
      } else if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        else
          throw e;
      } else
        throw e;
    }
  }
  function toStringWithOffset($receiver, offset) {
    return OffsetDateTime$Companion.ofInstant($receiver.value_8be2vx$, offset.zoneOffset_8be2vx$).toString();
  }
  function isJodaArithmeticException($receiver) {
    return $receiver.name == 'ArithmeticException';
  }
  function isJodaDateTimeException($receiver) {
    return $receiver.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException($receiver) {
    return $receiver.name == 'DateTimeParseException';
  }
  function LocalDate(value) {
    LocalDate$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  function LocalDate$Companion_0() {
    LocalDate$Companion_instance = this;
    this.MIN_8be2vx$ = new LocalDate(LocalDate$Companion.MIN);
    this.MAX_8be2vx$ = new LocalDate(LocalDate$Companion.MAX);
  }
  LocalDate$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new LocalDate(LocalDate$Companion.parse(isoString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  LocalDate$Companion_0.prototype.fromEpochDays_za3lpa$ = function (epochDays) {
    try {
      return new LocalDate(LocalDate$Companion.ofEpochDay(epochDays));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  LocalDate$Companion_0.prototype.serializer = function () {
    return LocalDateIso8601Serializer_getInstance();
  };
  LocalDate$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalDate$Companion_instance = null;
  function LocalDate$Companion_getInstance() {
    if (LocalDate$Companion_instance === null) {
      new LocalDate$Companion_0();
    }
    return LocalDate$Companion_instance;
  }
  Object.defineProperty(LocalDate.prototype, 'year', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.year());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'monthNumber', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.monthValue());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'month', {
    configurable: true,
    get: function () {
      return toMonth(this.value_8be2vx$.month());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'dayOfMonth', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfMonth());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'dayOfWeek', {
    configurable: true,
    get: function () {
      return toDayOfWeek(this.value_8be2vx$.dayOfWeek());
    }
  });
  Object.defineProperty(LocalDate.prototype, 'dayOfYear', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfYear());
    }
  });
  LocalDate.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, LocalDate) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  LocalDate.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  LocalDate.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  LocalDate.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  LocalDate.prototype.toEpochDays = function () {
    return numberToInt(this.value_8be2vx$.toEpochDay());
  };
  LocalDate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalDate',
    interfaces: [Comparable]
  };
  function LocalDate_init(year, monthNumber, dayOfMonth, $this) {
    $this = $this || Object.create(LocalDate.prototype);
    var tmp$;
    try {
      tmp$ = LocalDate$Companion.of(year, monthNumber, dayOfMonth);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        throw e;
      } else
        throw e;
    }
    LocalDate.call($this, tmp$);
    return $this;
  }
  function LocalDate_init_0(year, month, dayOfMonth, $this) {
    $this = $this || Object.create(LocalDate.prototype);
    LocalDate_init(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function plus_8($receiver, unit) {
    return plusNumber($receiver, 1, unit);
  }
  function plus_9($receiver, value, unit) {
    return plusNumber($receiver, value, unit);
  }
  function minus_13($receiver, value, unit) {
    return plusNumber($receiver, -value | 0, unit);
  }
  function plus_10($receiver, value, unit) {
    return plusNumber($receiver, value, unit);
  }
  function plusNumber($receiver, value, unit) {
    var tmp$;
    try {
      if (Kotlin.isType(unit, DateTimeUnit$DayBased))
        tmp$ = $receiver.value_8be2vx$.plusDays(numberToDouble(value) * unit.days);
      else if (Kotlin.isType(unit, DateTimeUnit$MonthBased))
        tmp$ = $receiver.value_8be2vx$.plusMonths(numberToDouble(value) * unit.months);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      return new LocalDate(tmp$);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (!isJodaDateTimeException(e) && !isJodaArithmeticException(e))
          throw e;
        throw DateTimeArithmeticException_init_2('The result of adding ' + value.toString() + ' of ' + unit + ' to ' + $receiver + ' is out of LocalDate range.', e);
      } else
        throw e;
    }
  }
  function plus_11($receiver, period) {
    try {
      var $receiver_0 = $receiver.value_8be2vx$;
      var $receiver_1 = period.totalMonths !== 0 ? $receiver_0.plusMonths(period.totalMonths) : $receiver_0;
      return new LocalDate(period.days !== 0 ? $receiver_1.plusDays(period.days) : $receiver_1);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e) || isJodaArithmeticException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function periodUntil_0($receiver, other) {
    var startD = $receiver.value_8be2vx$;
    var endD = other.value_8be2vx$;
    var months = numberToInt(startD.until(endD, ChronoUnit$Companion.MONTHS));
    startD = startD.plusMonths(months);
    var days = numberToInt(startD.until(endD, ChronoUnit$Companion.DAYS));
    return new DatePeriod(months, days);
  }
  function until_1($receiver, other, unit) {
    if (Kotlin.isType(unit, DateTimeUnit$MonthBased))
      return monthsUntil_0($receiver, other) / unit.months | 0;
    else if (Kotlin.isType(unit, DateTimeUnit$DayBased))
      return daysUntil_0($receiver, other) / unit.days | 0;
    else
      return Kotlin.noWhenBranchMatched();
  }
  function daysUntil_0($receiver, other) {
    return numberToInt($receiver.value_8be2vx$.until(other.value_8be2vx$, ChronoUnit$Companion.DAYS));
  }
  function monthsUntil_0($receiver, other) {
    return numberToInt($receiver.value_8be2vx$.until(other.value_8be2vx$, ChronoUnit$Companion.MONTHS));
  }
  function yearsUntil_0($receiver, other) {
    return numberToInt($receiver.value_8be2vx$.until(other.value_8be2vx$, ChronoUnit$Companion.YEARS));
  }
  function LocalDateTime(value) {
    LocalDateTime$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  Object.defineProperty(LocalDateTime.prototype, 'year', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.year());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'monthNumber', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.monthValue());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'month', {
    configurable: true,
    get: function () {
      return toMonth(this.value_8be2vx$.month());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'dayOfMonth', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfMonth());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'dayOfWeek', {
    configurable: true,
    get: function () {
      return toDayOfWeek(this.value_8be2vx$.dayOfWeek());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'dayOfYear', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.dayOfYear());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'hour', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.hour());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'minute', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.minute());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'second', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.second());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'nanosecond', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.nano());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'date', {
    configurable: true,
    get: function () {
      return new LocalDate(this.value_8be2vx$.toLocalDate());
    }
  });
  Object.defineProperty(LocalDateTime.prototype, 'time', {
    configurable: true,
    get: function () {
      return new LocalTime(this.value_8be2vx$.toLocalTime());
    }
  });
  LocalDateTime.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, LocalDateTime) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  LocalDateTime.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  LocalDateTime.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  LocalDateTime.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  function LocalDateTime$Companion_0() {
    LocalDateTime$Companion_instance = this;
    this.MIN_8be2vx$ = new LocalDateTime(LocalDateTime$Companion.MIN);
    this.MAX_8be2vx$ = new LocalDateTime(LocalDateTime$Companion.MAX);
  }
  LocalDateTime$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new LocalDateTime(LocalDateTime$Companion.parse(isoString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  LocalDateTime$Companion_0.prototype.serializer = function () {
    return LocalDateTimeIso8601Serializer_getInstance();
  };
  LocalDateTime$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalDateTime$Companion_instance = null;
  function LocalDateTime$Companion_getInstance() {
    if (LocalDateTime$Companion_instance === null) {
      new LocalDateTime$Companion_0();
    }
    return LocalDateTime$Companion_instance;
  }
  LocalDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalDateTime',
    interfaces: [Comparable]
  };
  function LocalDateTime_init(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond, $this) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    $this = $this || Object.create(LocalDateTime.prototype);
    var tmp$;
    try {
      tmp$ = LocalDateTime$Companion.of(year, monthNumber, dayOfMonth, hour, minute, second, nanosecond);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        throw e;
      } else
        throw e;
    }
    LocalDateTime.call($this, tmp$);
    return $this;
  }
  function LocalDateTime_init_0(year, month, dayOfMonth, hour, minute, second, nanosecond, $this) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    $this = $this || Object.create(LocalDateTime.prototype);
    LocalDateTime_init(year, get_number(month), dayOfMonth, hour, minute, second, nanosecond, $this);
    return $this;
  }
  function LocalDateTime_init_1(date, time, $this) {
    $this = $this || Object.create(LocalDateTime.prototype);
    LocalDateTime.call($this, LocalDateTime$Companion.of(date.value_8be2vx$, time.value_8be2vx$));
    return $this;
  }
  function LocalTime(value) {
    LocalTime$Companion_getInstance();
    this.value_8be2vx$ = value;
  }
  Object.defineProperty(LocalTime.prototype, 'hour', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.hour());
    }
  });
  Object.defineProperty(LocalTime.prototype, 'minute', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.minute());
    }
  });
  Object.defineProperty(LocalTime.prototype, 'second', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.second());
    }
  });
  Object.defineProperty(LocalTime.prototype, 'nanosecond', {
    configurable: true,
    get: function () {
      return numberToInt(this.value_8be2vx$.nano());
    }
  });
  LocalTime.prototype.toSecondOfDay = function () {
    return numberToInt(this.value_8be2vx$.toSecondOfDay());
  };
  LocalTime.prototype.toMillisecondOfDay = function () {
    return numberToInt(numberToDouble(this.value_8be2vx$.toNanoOfDay()) / 1000000);
  };
  LocalTime.prototype.toNanosecondOfDay = function () {
    return numberToLong(this.value_8be2vx$.toNanoOfDay());
  };
  LocalTime.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, LocalTime) && equals(this.value_8be2vx$, other.value_8be2vx$));
  };
  LocalTime.prototype.hashCode = function () {
    return numberToInt(this.value_8be2vx$.hashCode());
  };
  LocalTime.prototype.toString = function () {
    return this.value_8be2vx$.toString();
  };
  LocalTime.prototype.compareTo_11rb$ = function (other) {
    return numberToInt(this.value_8be2vx$.compareTo(other.value_8be2vx$));
  };
  function LocalTime$Companion_0() {
    LocalTime$Companion_instance = this;
    this.MIN_8be2vx$ = new LocalTime(LocalTime$Companion.MIN);
    this.MAX_8be2vx$ = new LocalTime(LocalTime$Companion.MAX);
  }
  LocalTime$Companion_0.prototype.parse_61zpoe$ = function (isoString) {
    try {
      return new LocalTime(LocalTime$Companion.parse(isoString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  LocalTime$Companion_0.prototype.fromSecondOfDay_za3lpa$ = function (secondOfDay) {
    try {
      return new LocalTime(LocalTime$Companion.ofSecondOfDay(secondOfDay, 0));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw IllegalArgumentException_init_1(e);
      } else
        throw e;
    }
  };
  LocalTime$Companion_0.prototype.fromMillisecondOfDay_za3lpa$ = function (millisecondOfDay) {
    try {
      return new LocalTime(LocalTime$Companion.ofNanoOfDay(millisecondOfDay * 1000000.0));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw IllegalArgumentException_init_1(e);
      } else
        throw e;
    }
  };
  LocalTime$Companion_0.prototype.fromNanosecondOfDay_s8cxhz$ = function (nanosecondOfDay) {
    try {
      return new LocalTime(LocalTime$Companion.ofNanoOfDay(nanosecondOfDay.toNumber()));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw IllegalArgumentException_init_1(e);
      } else
        throw e;
    }
  };
  LocalTime$Companion_0.prototype.serializer = function () {
    return LocalTimeIso8601Serializer_getInstance();
  };
  LocalTime$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LocalTime$Companion_instance = null;
  function LocalTime$Companion_getInstance() {
    if (LocalTime$Companion_instance === null) {
      new LocalTime$Companion_0();
    }
    return LocalTime$Companion_instance;
  }
  LocalTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalTime',
    interfaces: [Comparable]
  };
  function LocalTime_init(hour, minute, second, nanosecond, $this) {
    if (second === void 0)
      second = 0;
    if (nanosecond === void 0)
      nanosecond = 0;
    $this = $this || Object.create(LocalTime.prototype);
    var tmp$;
    try {
      tmp$ = LocalTime$Companion.of(hour, minute, second, nanosecond);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        throw e;
      } else
        throw e;
    }
    LocalTime.call($this, tmp$);
    return $this;
  }
  function Month_0(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$JANUARY_instance = new Month_0('JANUARY', 0);
    Month$FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month$MARCH_instance = new Month_0('MARCH', 2);
    Month$APRIL_instance = new Month_0('APRIL', 3);
    Month$MAY_instance = new Month_0('MAY', 4);
    Month$JUNE_instance = new Month_0('JUNE', 5);
    Month$JULY_instance = new Month_0('JULY', 6);
    Month$AUGUST_instance = new Month_0('AUGUST', 7);
    Month$SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month$OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month$NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month$DECEMBER_instance = new Month_0('DECEMBER', 11);
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
  Month_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$JANUARY_getInstance(), Month$FEBRUARY_getInstance(), Month$MARCH_getInstance(), Month$APRIL_getInstance(), Month$MAY_getInstance(), Month$JUNE_getInstance(), Month$JULY_getInstance(), Month$AUGUST_getInstance(), Month$SEPTEMBER_getInstance(), Month$OCTOBER_getInstance(), Month$NOVEMBER_getInstance(), Month$DECEMBER_getInstance()];
  }
  Month_0.values = Month$values;
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
        throwISE('No enum constant kotlinx.datetime.Month.' + name);
    }
  }
  Month_0.valueOf_61zpoe$ = Month$valueOf;
  function toMonth($receiver) {
    return Month(numberToInt($receiver.value()));
  }
  function TimeZone(zoneId) {
    TimeZone$Companion_getInstance();
    this.zoneId_8be2vx$ = zoneId;
  }
  Object.defineProperty(TimeZone.prototype, 'id', {
    configurable: true,
    get: function () {
      return this.zoneId_8be2vx$.id();
    }
  });
  TimeZone.prototype.toLocalDateTime_68x792$ = function ($receiver) {
    return toLocalDateTime_0($receiver, this);
  };
  TimeZone.prototype.toInstant_uchmsb$ = function ($receiver) {
    return toInstant_0($receiver, this);
  };
  TimeZone.prototype.equals = function (other) {
    return this === other || (Kotlin.isType(other, TimeZone) && equals(this.zoneId_8be2vx$, other.zoneId_8be2vx$));
  };
  TimeZone.prototype.hashCode = function () {
    return numberToInt(this.zoneId_8be2vx$.hashCode());
  };
  TimeZone.prototype.toString = function () {
    return this.zoneId_8be2vx$.toString();
  };
  function TimeZone$Companion() {
    TimeZone$Companion_instance = this;
    this.UTC = asTimeZone(new UtcOffset_0(ZoneOffset.UTC));
  }
  TimeZone$Companion.prototype.currentSystemDefault = function () {
    return this.ofZone_0(ZoneId$Companion.systemDefault());
  };
  TimeZone$Companion.prototype.of_61zpoe$ = function (zoneId) {
    try {
      return this.ofZone_0(ZoneId$Companion.of(zoneId));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  TimeZone$Companion.prototype.ofZone_0 = function (zoneId) {
    var tmp$;
    if (Kotlin.isType(zoneId, ZoneOffset))
      return FixedOffsetTimeZone_init(new UtcOffset_0(zoneId));
    else if (zoneId.rules().isFixedOffset()) {
      return new FixedOffsetTimeZone(new UtcOffset_0(Kotlin.isType(tmp$ = zoneId.normalized(), ZoneOffset) ? tmp$ : throwCCE()), zoneId);
    } else
      return new TimeZone(zoneId);
  };
  Object.defineProperty(TimeZone$Companion.prototype, 'availableZoneIds', {
    configurable: true,
    get: function () {
      return toSet(ZoneId$Companion.getAvailableZoneIds());
    }
  });
  TimeZone$Companion.prototype.serializer = function () {
    return TimeZoneSerializer_getInstance();
  };
  TimeZone$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeZone$Companion_instance = null;
  function TimeZone$Companion_getInstance() {
    if (TimeZone$Companion_instance === null) {
      new TimeZone$Companion();
    }
    return TimeZone$Companion_instance;
  }
  TimeZone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeZone',
    interfaces: []
  };
  function FixedOffsetTimeZone(offset, zoneId) {
    FixedOffsetTimeZone$Companion_getInstance();
    TimeZone.call(this, zoneId);
    this.offset = offset;
  }
  Object.defineProperty(FixedOffsetTimeZone.prototype, 'totalSeconds', {
    configurable: true,
    get: function () {
      return this.offset.totalSeconds;
    }
  });
  function FixedOffsetTimeZone$Companion() {
    FixedOffsetTimeZone$Companion_instance = this;
  }
  FixedOffsetTimeZone$Companion.prototype.serializer = function () {
    return FixedOffsetTimeZoneSerializer_getInstance();
  };
  FixedOffsetTimeZone$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FixedOffsetTimeZone$Companion_instance = null;
  function FixedOffsetTimeZone$Companion_getInstance() {
    if (FixedOffsetTimeZone$Companion_instance === null) {
      new FixedOffsetTimeZone$Companion();
    }
    return FixedOffsetTimeZone$Companion_instance;
  }
  FixedOffsetTimeZone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedOffsetTimeZone',
    interfaces: [TimeZone]
  };
  function FixedOffsetTimeZone_init(offset, $this) {
    $this = $this || Object.create(FixedOffsetTimeZone.prototype);
    FixedOffsetTimeZone.call($this, offset, offset.zoneOffset_8be2vx$);
    return $this;
  }
  function toLocalDateTime_0($receiver, timeZone) {
    try {
      return new LocalDateTime(LocalDateTime$Companion.ofInstant($receiver.value_8be2vx$, timeZone.zoneId_8be2vx$));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function toLocalDateTime_1($receiver, offset) {
    try {
      return new LocalDateTime(LocalDateTime$Companion.ofInstant($receiver.value_8be2vx$, offset.zoneOffset_8be2vx$));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_1(e);
        throw e;
      } else
        throw e;
    }
  }
  function offsetAt($receiver, instant) {
    return new UtcOffset_0($receiver.zoneId_8be2vx$.rules().offsetOfInstant(instant.value_8be2vx$));
  }
  function toInstant_0($receiver, timeZone) {
    return new Instant($receiver.value_8be2vx$.atZone(timeZone.zoneId_8be2vx$).toInstant());
  }
  function toInstant_1($receiver, offset) {
    return new Instant($receiver.value_8be2vx$.toInstant(offset.zoneOffset_8be2vx$));
  }
  function atStartOfDayIn($receiver, timeZone) {
    return new Instant($receiver.value_8be2vx$.atStartOfDay(timeZone.zoneId_8be2vx$).toInstant());
  }
  function UtcOffset_0(zoneOffset) {
    UtcOffset$Companion_getInstance();
    this.zoneOffset_8be2vx$ = zoneOffset;
  }
  Object.defineProperty(UtcOffset_0.prototype, 'totalSeconds', {
    configurable: true,
    get: function () {
      return numberToInt(this.zoneOffset_8be2vx$.totalSeconds());
    }
  });
  UtcOffset_0.prototype.hashCode = function () {
    return numberToInt(this.zoneOffset_8be2vx$.hashCode());
  };
  UtcOffset_0.prototype.equals = function (other) {
    return Kotlin.isType(other, UtcOffset_0) && equals(this.zoneOffset_8be2vx$, other.zoneOffset_8be2vx$);
  };
  UtcOffset_0.prototype.toString = function () {
    return this.zoneOffset_8be2vx$.toString();
  };
  function UtcOffset$Companion() {
    UtcOffset$Companion_instance = this;
    this.ZERO = new UtcOffset_0(ZoneOffset.UTC);
  }
  UtcOffset$Companion.prototype.parse_61zpoe$ = function (offsetString) {
    try {
      return new UtcOffset_0(ZoneOffset.of(offsetString));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_1(e);
        throw e;
      } else
        throw e;
    }
  };
  UtcOffset$Companion.prototype.serializer = function () {
    return UtcOffsetSerializer_getInstance();
  };
  UtcOffset$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UtcOffset$Companion_instance = null;
  function UtcOffset$Companion_getInstance() {
    if (UtcOffset$Companion_instance === null) {
      new UtcOffset$Companion();
    }
    return UtcOffset$Companion_instance;
  }
  UtcOffset_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UtcOffset',
    interfaces: []
  };
  function UtcOffset_1(hours, minutes, seconds) {
    if (hours === void 0)
      hours = null;
    if (minutes === void 0)
      minutes = null;
    if (seconds === void 0)
      seconds = null;
    try {
      if (hours != null)
        return new UtcOffset_0(ZoneOffset.ofHoursMinutesSeconds(hours, minutes != null ? minutes : 0, seconds != null ? seconds : 0));
      else if (minutes != null)
        return new UtcOffset_0(ZoneOffset.ofHoursMinutesSeconds(minutes / 60 | 0, minutes % 60 | 0, seconds != null ? seconds : 0));
      else {
        return new UtcOffset_0(ZoneOffset.ofTotalSeconds(seconds != null ? seconds : 0));
      }
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_1(e);
        else
          throw e;
      } else
        throw e;
    }
  }
  function safeAdd(a, b) {
    var sum = a.add(b);
    if (a.xor(sum).toNumber() < 0 && a.xor(b).toNumber() >= 0) {
      throw new ArithmeticException('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function safeAdd_0(a, b) {
    var sum = a + b | 0;
    if ((a ^ sum) < 0 && (a ^ b) >= 0) {
      throw new ArithmeticException('Addition overflows Int range: ' + a + ' + ' + b);
    }
    return sum;
  }
  function safeMultiply(a, b) {
    if (equals(b, L_1)) {
      if (equals(a, Long$Companion$MIN_VALUE)) {
        throw new ArithmeticException('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.unaryMinus();
    } else if (equals(b, L0))
      return L0;
    else if (equals(b, L1))
      return a;
    var total = a.multiply(b);
    if (!equals(total.div(b), a)) {
      throw new ArithmeticException('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeMultiply_0(a, b) {
    var result = Kotlin.Long.fromInt(a).multiply(Kotlin.Long.fromInt(b));
    if (result.toNumber() > 2147483647 || result.toNumber() < -2147483648)
      throw new ArithmeticException('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.toInt();
  }
  Object.defineProperty(Clock, 'System', {
    get: Clock$System_getInstance
  });
  Object.defineProperty(Clock, 'Companion', {
    get: Clock$Companion_getInstance
  });
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$datetime = package$kotlinx.datetime || (package$kotlinx.datetime = {});
  package$datetime.Clock = Clock;
  package$datetime.todayIn_1ah20$ = todayIn;
  package$datetime.asTimeSource_xpgd4t$ = asTimeSource;
  package$datetime.todayAt_1ah20$ = todayAt;
  Object.defineProperty(DateTimePeriod, 'Companion', {
    get: DateTimePeriod$Companion_getInstance
  });
  package$datetime.DateTimePeriod = DateTimePeriod;
  package$datetime.toDateTimePeriod_pdl1vz$ = toDateTimePeriod;
  Object.defineProperty(DatePeriod, 'Companion', {
    get: DatePeriod$Companion_getInstance
  });
  package$datetime.DatePeriod_init_qt1dr2$ = DatePeriod_init;
  package$datetime.DatePeriod = DatePeriod;
  package$datetime.toDatePeriod_pdl1vz$ = toDatePeriod;
  package$datetime.buildDateTimePeriod_s31238$ = buildDateTimePeriod;
  package$datetime.DateTimePeriod_m758o9$ = DateTimePeriod_0;
  package$datetime.toDateTimePeriod_aq13tz$ = toDateTimePeriod_0;
  package$datetime.plus_jwzr1d$ = plus;
  package$datetime.plus_tx0vy1$ = plus_0;
  Object.defineProperty(DateTimeUnit$TimeBased, 'Companion', {
    get: DateTimeUnit$TimeBased$Companion_getInstance
  });
  DateTimeUnit.TimeBased = DateTimeUnit$TimeBased;
  Object.defineProperty(DateTimeUnit$DateBased, 'Companion', {
    get: DateTimeUnit$DateBased$Companion_getInstance
  });
  DateTimeUnit.DateBased = DateTimeUnit$DateBased;
  Object.defineProperty(DateTimeUnit$DayBased, 'Companion', {
    get: DateTimeUnit$DayBased$Companion_getInstance
  });
  DateTimeUnit.DayBased = DateTimeUnit$DayBased;
  Object.defineProperty(DateTimeUnit$MonthBased, 'Companion', {
    get: DateTimeUnit$MonthBased$Companion_getInstance
  });
  DateTimeUnit.MonthBased = DateTimeUnit$MonthBased;
  Object.defineProperty(DateTimeUnit, 'Companion', {
    get: DateTimeUnit$Companion_getInstance
  });
  package$datetime.DateTimeUnit = DateTimeUnit;
  package$datetime.get_isoDayNumber_uz2bg$ = get_isoDayNumber;
  package$datetime.DayOfWeek_za3lpa$ = DayOfWeek;
  package$datetime.DateTimeArithmeticException_init = DateTimeArithmeticException_init;
  package$datetime.DateTimeArithmeticException_init_61zpoe$ = DateTimeArithmeticException_init_0;
  package$datetime.DateTimeArithmeticException_init_tcv7n7$ = DateTimeArithmeticException_init_1;
  package$datetime.DateTimeArithmeticException_init_ldd2zj$ = DateTimeArithmeticException_init_2;
  package$datetime.DateTimeArithmeticException = DateTimeArithmeticException;
  package$datetime.IllegalTimeZoneException_init = IllegalTimeZoneException_init;
  package$datetime.IllegalTimeZoneException_init_61zpoe$ = IllegalTimeZoneException_init_0;
  package$datetime.IllegalTimeZoneException_init_tcv7n7$ = IllegalTimeZoneException_init_1;
  package$datetime.IllegalTimeZoneException_init_ldd2zj$ = IllegalTimeZoneException_init_2;
  package$datetime.IllegalTimeZoneException = IllegalTimeZoneException;
  package$datetime.DateTimeFormatException_init = DateTimeFormatException_init;
  package$datetime.DateTimeFormatException_init_61zpoe$ = DateTimeFormatException_init_0;
  package$datetime.DateTimeFormatException_init_tcv7n7$ = DateTimeFormatException_init_1;
  package$datetime.DateTimeFormatException_init_ldd2zj$ = DateTimeFormatException_init_2;
  package$datetime.DateTimeFormatException = DateTimeFormatException;
  package$datetime.get_isDistantPast_68x792$ = get_isDistantPast;
  package$datetime.get_isDistantFuture_68x792$ = get_isDistantFuture;
  package$datetime.toInstant_pdl1vz$ = toInstant;
  package$datetime.minus_ate4tl$ = minus;
  package$datetime.until_4mzg8a$ = until;
  package$datetime.daysUntil_9wlul4$ = daysUntil;
  package$datetime.monthsUntil_9wlul4$ = monthsUntil;
  package$datetime.yearsUntil_9wlul4$ = yearsUntil;
  package$datetime.minus_9wlul4$ = minus_0;
  package$datetime.minus_e83fbu$ = minus_1;
  package$datetime.plus_9yt9w7$ = plus_1;
  package$datetime.minus_9yt9w7$ = minus_2;
  package$datetime.plus_291rn$ = plus_2;
  package$datetime.minus_291rn$ = minus_3;
  package$datetime.minus_bt8zc9$ = minus_4;
  package$datetime.minus_ct4b52$ = minus_5;
  package$datetime.minus_ur76pz$ = minus_6;
  package$datetime.minus_4mzg8a$ = minus_7;
  Object.defineProperty(package$datetime, 'DISTANT_PAST_SECONDS_8be2vx$', {
    get: function () {
      return DISTANT_PAST_SECONDS;
    }
  });
  Object.defineProperty(package$datetime, 'DISTANT_FUTURE_SECONDS_8be2vx$', {
    get: function () {
      return DISTANT_FUTURE_SECONDS;
    }
  });
  package$datetime.toLocalDate_pdl1vz$ = toLocalDate;
  package$datetime.atTime_ebpinu$ = atTime;
  package$datetime.atTime_w2p94e$ = atTime_0;
  package$datetime.minus_eceoxz$ = minus_8;
  package$datetime.minus_w2evkf$ = minus_9;
  package$datetime.minus_hqt0ow$ = minus_10;
  package$datetime.minus_aiqgot$ = minus_11;
  package$datetime.toLocalDateTime_pdl1vz$ = toLocalDateTime;
  package$datetime.toLocalTime_pdl1vz$ = toLocalTime;
  package$datetime.atDate_a4j7xn$ = atDate;
  package$datetime.atDate_b2186l$ = atDate_0;
  package$datetime.atDate_ovo374$ = atDate_1;
  package$datetime.get_number_wjkdkl$ = get_number;
  package$datetime.Month_za3lpa$ = Month;
  package$datetime.offsetIn_pneqz9$ = offsetIn;
  package$datetime.UtcOffset = UtcOffset;
  package$datetime.asTimeZone_kmpidw$ = asTimeZone;
  var package$internal = package$datetime.internal || (package$datetime.internal = {});
  Object.defineProperty(package$internal, 'SECONDS_PER_HOUR_8be2vx$', {
    get: function () {
      return SECONDS_PER_HOUR;
    }
  });
  Object.defineProperty(package$internal, 'SECONDS_PER_MINUTE_8be2vx$', {
    get: function () {
      return SECONDS_PER_MINUTE;
    }
  });
  Object.defineProperty(package$internal, 'MINUTES_PER_HOUR_8be2vx$', {
    get: function () {
      return MINUTES_PER_HOUR;
    }
  });
  Object.defineProperty(package$internal, 'HOURS_PER_DAY_8be2vx$', {
    get: function () {
      return HOURS_PER_DAY;
    }
  });
  Object.defineProperty(package$internal, 'SECONDS_PER_DAY_8be2vx$', {
    get: function () {
      return SECONDS_PER_DAY;
    }
  });
  Object.defineProperty(package$internal, 'NANOS_PER_ONE_8be2vx$', {
    get: function () {
      return NANOS_PER_ONE;
    }
  });
  Object.defineProperty(package$internal, 'NANOS_PER_MILLI_8be2vx$', {
    get: function () {
      return NANOS_PER_MILLI;
    }
  });
  Object.defineProperty(package$internal, 'MILLIS_PER_ONE_8be2vx$', {
    get: function () {
      return MILLIS_PER_ONE;
    }
  });
  Object.defineProperty(package$internal, 'NANOS_PER_DAY_8be2vx$', {
    get: function () {
      return NANOS_PER_DAY;
    }
  });
  Object.defineProperty(package$internal, 'NANOS_PER_MINUTE_8be2vx$', {
    get: function () {
      return NANOS_PER_MINUTE;
    }
  });
  Object.defineProperty(package$internal, 'NANOS_PER_HOUR_8be2vx$', {
    get: function () {
      return NANOS_PER_HOUR;
    }
  });
  Object.defineProperty(package$internal, 'MILLIS_PER_DAY_8be2vx$', {
    get: function () {
      return MILLIS_PER_DAY;
    }
  });
  package$internal.isLeapYear_kcn2v3$ = isLeapYear;
  package$internal.monthLength_4agm3v$ = monthLength;
  package$internal.clampToInt_nzsbcz$ = clampToInt;
  package$internal.safeMultiplyOrZero_cfj5zr$ = safeMultiplyOrZero;
  $$importsForInline$$['Kotlin-DateTime-library-kotlinx-datetime-js-legacy'] = _;
  package$internal.multiplyAndDivide_e84ct6$ = multiplyAndDivide;
  package$internal.DivRemResult = DivRemResult;
  package$internal.multiplyAddAndDivide_ukqtct$ = multiplyAddAndDivide;
  package$internal.multiplyAndAdd_e84ct6$ = multiplyAndAdd;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy;
  var package$serializers = package$datetime.serializers || (package$datetime.serializers = {});
  Object.defineProperty(package$serializers, 'DateTimePeriodComponentSerializer', {
    get: DateTimePeriodComponentSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DateTimePeriodIso8601Serializer', {
    get: DateTimePeriodIso8601Serializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DatePeriodComponentSerializer', {
    get: DatePeriodComponentSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DatePeriodIso8601Serializer', {
    get: DatePeriodIso8601Serializer_getInstance
  });
  Object.defineProperty(package$serializers, 'TimeBasedDateTimeUnitSerializer', {
    get: TimeBasedDateTimeUnitSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DayBasedDateTimeUnitSerializer', {
    get: DayBasedDateTimeUnitSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'MonthBasedDateTimeUnitSerializer', {
    get: MonthBasedDateTimeUnitSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DateBasedDateTimeUnitSerializer', {
    get: DateBasedDateTimeUnitSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DateTimeUnitSerializer', {
    get: DateTimeUnitSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'DayOfWeekSerializer', {
    get: DayOfWeekSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'InstantIso8601Serializer', {
    get: InstantIso8601Serializer_getInstance
  });
  Object.defineProperty(package$serializers, 'InstantComponentSerializer', {
    get: InstantComponentSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'LocalDateIso8601Serializer', {
    get: LocalDateIso8601Serializer_getInstance
  });
  Object.defineProperty(package$serializers, 'LocalDateComponentSerializer', {
    get: LocalDateComponentSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'LocalDateTimeIso8601Serializer', {
    get: LocalDateTimeIso8601Serializer_getInstance
  });
  Object.defineProperty(package$serializers, 'LocalDateTimeComponentSerializer', {
    get: LocalDateTimeComponentSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'LocalTimeIso8601Serializer', {
    get: LocalTimeIso8601Serializer_getInstance
  });
  Object.defineProperty(package$serializers, 'LocalTimeComponentSerializer', {
    get: LocalTimeComponentSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'MonthSerializer', {
    get: MonthSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'TimeZoneSerializer', {
    get: TimeZoneSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'FixedOffsetTimeZoneSerializer', {
    get: FixedOffsetTimeZoneSerializer_getInstance
  });
  Object.defineProperty(package$serializers, 'UtcOffsetSerializer', {
    get: UtcOffsetSerializer_getInstance
  });
  package$datetime.toJSDate_68x792$ = toJSDate;
  package$datetime.toKotlinInstant_t5kl13$ = toKotlinInstant;
  Object.defineProperty(DayOfWeek_0, 'MONDAY', {
    get: DayOfWeek$MONDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'TUESDAY', {
    get: DayOfWeek$TUESDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'WEDNESDAY', {
    get: DayOfWeek$WEDNESDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'THURSDAY', {
    get: DayOfWeek$THURSDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'FRIDAY', {
    get: DayOfWeek$FRIDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'SATURDAY', {
    get: DayOfWeek$SATURDAY_getInstance
  });
  Object.defineProperty(DayOfWeek_0, 'SUNDAY', {
    get: DayOfWeek$SUNDAY_getInstance
  });
  package$datetime.DayOfWeek = DayOfWeek_0;
  package$datetime.toDayOfWeek_f70szd$ = toDayOfWeek;
  Object.defineProperty(Instant, 'Companion', {
    get: Instant$Companion_getInstance
  });
  package$datetime.Instant = Instant;
  package$datetime.plus_ate4tl$ = plus_3;
  package$datetime.plus_e83fbu$ = plus_4;
  package$datetime.plus_bt8zc9$ = plus_5;
  package$datetime.plus_lr12qk$ = plus_6;
  package$datetime.minus_lr12qk$ = minus_12;
  package$datetime.plus_ct4b52$ = plus_7;
  package$datetime.periodUntil_9wlul4$ = periodUntil;
  package$datetime.until_ur76pz$ = until_0;
  package$datetime.toStringWithOffset_901ls8$ = toStringWithOffset;
  package$datetime.isJodaArithmeticException_fg6mcf$ = isJodaArithmeticException;
  package$datetime.isJodaDateTimeException_fg6mcf$ = isJodaDateTimeException;
  package$datetime.isJodaDateTimeParseException_fg6mcf$ = isJodaDateTimeParseException;
  Object.defineProperty(LocalDate, 'Companion', {
    get: LocalDate$Companion_getInstance
  });
  package$datetime.LocalDate_init_qt1dr2$ = LocalDate_init;
  package$datetime.LocalDate_init_9eppsw$ = LocalDate_init_0;
  package$datetime.LocalDate = LocalDate;
  package$datetime.plus_hqt0ow$ = plus_8;
  package$datetime.plus_kmbsh2$ = plus_9;
  package$datetime.minus_kmbsh2$ = minus_13;
  package$datetime.plus_aiqgot$ = plus_10;
  package$datetime.plus_eceoxz$ = plus_11;
  package$datetime.periodUntil_w2evkf$ = periodUntil_0;
  package$datetime.until_79yxjp$ = until_1;
  package$datetime.daysUntil_w2evkf$ = daysUntil_0;
  package$datetime.monthsUntil_w2evkf$ = monthsUntil_0;
  package$datetime.yearsUntil_w2evkf$ = yearsUntil_0;
  Object.defineProperty(LocalDateTime, 'Companion', {
    get: LocalDateTime$Companion_getInstance
  });
  package$datetime.LocalDateTime_init_ui44o2$ = LocalDateTime_init;
  package$datetime.LocalDateTime_init_3msazk$ = LocalDateTime_init_0;
  package$datetime.LocalDateTime_init_fmux91$ = LocalDateTime_init_1;
  package$datetime.LocalDateTime = LocalDateTime;
  Object.defineProperty(LocalTime, 'Companion', {
    get: LocalTime$Companion_getInstance
  });
  package$datetime.LocalTime_init_tjonv8$ = LocalTime_init;
  package$datetime.LocalTime = LocalTime;
  Object.defineProperty(Month_0, 'JANUARY', {
    get: Month$JANUARY_getInstance
  });
  Object.defineProperty(Month_0, 'FEBRUARY', {
    get: Month$FEBRUARY_getInstance
  });
  Object.defineProperty(Month_0, 'MARCH', {
    get: Month$MARCH_getInstance
  });
  Object.defineProperty(Month_0, 'APRIL', {
    get: Month$APRIL_getInstance
  });
  Object.defineProperty(Month_0, 'MAY', {
    get: Month$MAY_getInstance
  });
  Object.defineProperty(Month_0, 'JUNE', {
    get: Month$JUNE_getInstance
  });
  Object.defineProperty(Month_0, 'JULY', {
    get: Month$JULY_getInstance
  });
  Object.defineProperty(Month_0, 'AUGUST', {
    get: Month$AUGUST_getInstance
  });
  Object.defineProperty(Month_0, 'SEPTEMBER', {
    get: Month$SEPTEMBER_getInstance
  });
  Object.defineProperty(Month_0, 'OCTOBER', {
    get: Month$OCTOBER_getInstance
  });
  Object.defineProperty(Month_0, 'NOVEMBER', {
    get: Month$NOVEMBER_getInstance
  });
  Object.defineProperty(Month_0, 'DECEMBER', {
    get: Month$DECEMBER_getInstance
  });
  package$datetime.Month = Month_0;
  package$datetime.toMonth_2t0w74$ = toMonth;
  Object.defineProperty(TimeZone, 'Companion', {
    get: TimeZone$Companion_getInstance
  });
  package$datetime.TimeZone = TimeZone;
  Object.defineProperty(FixedOffsetTimeZone, 'Companion', {
    get: FixedOffsetTimeZone$Companion_getInstance
  });
  package$datetime.FixedOffsetTimeZone_init_7jf5ff$ = FixedOffsetTimeZone_init;
  package$datetime.FixedOffsetTimeZone = FixedOffsetTimeZone;
  package$datetime.toLocalDateTime_pneqz9$ = toLocalDateTime_0;
  package$datetime.toLocalDateTime_901ls8$ = toLocalDateTime_1;
  package$datetime.offsetAt_ox64o1$ = offsetAt;
  package$datetime.toInstant_qewd0w$ = toInstant_0;
  package$datetime.toInstant_pkn23k$ = toInstant_1;
  package$datetime.atStartOfDayIn_c1x0l9$ = atStartOfDayIn;
  Object.defineProperty(UtcOffset_0, 'Companion', {
    get: UtcOffset$Companion_getInstance
  });
  package$datetime.UtcOffset = UtcOffset_0;
  package$datetime.UtcOffset_fcxw8v$ = UtcOffset_1;
  package$internal.safeAdd_cfj5zr$ = safeAdd;
  package$internal.safeAdd_6xvm5r$ = safeAdd_0;
  package$internal.safeMultiply_cfj5zr$ = safeMultiply;
  package$internal.safeMultiply_6xvm5r$ = safeMultiply_0;
  InstantTimeMark.prototype.hasNotPassedNow = TimeMark.prototype.hasNotPassedNow;
  InstantTimeMark.prototype.hasPassedNow = TimeMark.prototype.hasPassedNow;
  allDaysOfWeek = asList(DayOfWeek$values());
  DISTANT_PAST_SECONDS = L_3217862419201;
  DISTANT_FUTURE_SECONDS = L3093527980800;
  allMonths = asList(Month$values());
  SECONDS_PER_HOUR = 3600;
  SECONDS_PER_MINUTE = 60;
  MINUTES_PER_HOUR = 60;
  HOURS_PER_DAY = 24;
  SECONDS_PER_DAY = 86400;
  NANOS_PER_ONE = 1000000000;
  NANOS_PER_MILLI = 1000000;
  MILLIS_PER_ONE = 1000;
  NANOS_PER_DAY = L86400000000000;
  NANOS_PER_MINUTE = L60000000000;
  NANOS_PER_HOUR = L3600000000000;
  MILLIS_PER_DAY = 86400000;
  Kotlin.defineModule('Kotlin-DateTime-library-kotlinx-datetime-js-legacy', _);
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-legacy.js.map
