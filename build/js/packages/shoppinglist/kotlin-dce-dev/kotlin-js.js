(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js'.");
    }
    root['kotlin-js'] = factory(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var DurationUnit = Kotlin.kotlin.time.DurationUnit;
  function asyncIterator($receiver) {
    return $receiver[Symbol.asyncIterator]();
  }
  function asyncIterator_0($receiver) {
    return $receiver[Symbol.asyncIterator]();
  }
  var get_n = defineInlineFunction('kotlin-js.kotlinx.js.get_n_rcaex3$', wrapFunction(function () {
    var BigInt_0 = BigInt;
    return function ($receiver) {
      return BigInt_0($receiver);
    };
  }));
  var get_n_0 = defineInlineFunction('kotlin-js.kotlinx.js.get_n_pdl1vz$', wrapFunction(function () {
    var BigInt_0 = BigInt;
    return function ($receiver) {
      return BigInt_0($receiver);
    };
  }));
  var unaryMinus = defineInlineFunction('kotlin-js.kotlinx.js.unaryMinus_xvw632$', function ($receiver) {
    return -$receiver;
  });
  var plus = defineInlineFunction('kotlin-js.kotlinx.js.plus_62khwr$', function ($receiver, other) {
    return $receiver + other;
  });
  var minus = defineInlineFunction('kotlin-js.kotlinx.js.minus_62khwr$', function ($receiver, other) {
    return $receiver - other;
  });
  var times = defineInlineFunction('kotlin-js.kotlinx.js.times_62khwr$', function ($receiver, other) {
    return $receiver * other;
  });
  var div = defineInlineFunction('kotlin-js.kotlinx.js.div_62khwr$', function ($receiver, other) {
    return $receiver / other;
  });
  var newInstance = defineInlineFunction('kotlin-js.kotlinx.js.newInstance_2sk2mx$', wrapFunction(function () {
    var newInstance = _.kotlinx.js.newInstance_x7e9z0$;
    return function ($receiver) {
      return newInstance($receiver);
    };
  }));
  function newInstance_0(clazz) {
    return new clazz();
  }
  function iterator($receiver) {
    return new JsIteratorAdapter($receiver);
  }
  function JsIteratorAdapter(source) {
    this.source_0 = source;
    this.lastResult_0 = this.source_0.next();
  }
  JsIteratorAdapter.prototype.next = function () {
    if (!!this.lastResult_0.done) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    var value = this.lastResult_0.value;
    this.lastResult_0 = this.source_0.next();
    return value;
  };
  JsIteratorAdapter.prototype.hasNext = function () {
    return !this.lastResult_0.done;
  };
  JsIteratorAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsIteratorAdapter',
    interfaces: [Iterator]
  };
  function toExponential($receiver) {
    return (new Number($receiver)).toExponential();
  }
  function toExponential_0($receiver, fractionDigits) {
    return (new Number($receiver)).toExponential(fractionDigits);
  }
  function toExponential_1($receiver) {
    return (new Number($receiver)).toExponential();
  }
  function toExponential_2($receiver, fractionDigits) {
    return (new Number($receiver)).toExponential(fractionDigits);
  }
  function JsPair() {
  }
  JsPair.prototype.component1 = defineInlineFunction('kotlin-js.kotlinx.js.JsPair.component1', function () {
    return this[0];
  });
  JsPair.prototype.component2 = defineInlineFunction('kotlin-js.kotlinx.js.JsPair.component2', function () {
    return this[1];
  });
  JsPair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPair',
    interfaces: []
  };
  var JsPair_0 = defineInlineFunction('kotlin-js.kotlinx.js.JsPair_o5fpdy$', function (a, b) {
    return [a, b];
  });
  function JsoDsl() {
  }
  JsoDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsoDsl',
    interfaces: [Annotation]
  };
  function PerformanceMeasureOptions() {
  }
  PerformanceMeasureOptions.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PerformanceMeasureOptions',
    interfaces: []
  };
  function Record() {
  }
  Record.prototype.get_trkh7z$ = defineInlineFunction('kotlin-js.kotlinx.js.Record.get_trkh7z$', function (key) {
    return this[key];
  });
  Record.prototype.set_wuswzg$ = defineInlineFunction('kotlin-js.kotlinx.js.Record.set_wuswzg$', function (key, value) {
    this[key] = value;
  });
  Record.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Record',
    interfaces: []
  };
  function Record_0() {
    return {};
  }
  function Record_1(block) {
    var $receiver = {};
    block($receiver);
    return $receiver;
  }
  var get_MODE = defineInlineFunction('kotlin-js.kotlinx.js.get_MODE_g7idsg$', function ($receiver) {
    return process.env.NODE_ENV;
  });
  var get_PROD = defineInlineFunction('kotlin-js.kotlinx.js.get_PROD_g7idsg$', function ($receiver) {
    return process.env.NODE_ENV === 'production';
  });
  var get_DEV = defineInlineFunction('kotlin-js.kotlinx.js.get_DEV_g7idsg$', function ($receiver) {
    return process.env.NODE_ENV !== 'production';
  });
  var jso = defineInlineFunction('kotlin-js.kotlinx.js.jso_30y1fr$', function () {
    return {};
  });
  var jso_0 = defineInlineFunction('kotlin-js.kotlinx.js.jso_dajwzo$', function (block) {
    var $receiver = {};
    block($receiver);
    return $receiver;
  });
  function setInterval_0(delay, callback) {
    return setInterval(callback, delay.toInt_p6uejw$(DurationUnit.MILLISECONDS));
  }
  function setTimeout_0(delay, callback) {
    return setTimeout(callback, delay.toInt_p6uejw$(DurationUnit.MILLISECONDS));
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$js = package$kotlinx.js || (package$kotlinx.js = {});
  package$js.asyncIterator_k7q9n$ = asyncIterator;
  package$js.asyncIterator_as5l5f$ = asyncIterator_0;
  package$js.get_n_rcaex3$ = get_n;
  package$js.get_n_pdl1vz$ = get_n_0;
  package$js.unaryMinus_xvw632$ = unaryMinus;
  package$js.plus_62khwr$ = plus;
  package$js.minus_62khwr$ = minus;
  package$js.times_62khwr$ = times;
  package$js.div_62khwr$ = div;
  package$js.newInstance_x7e9z0$ = newInstance_0;
  package$js.newInstance_2sk2mx$ = newInstance;
  package$js.iterator_8js8x9$ = iterator;
  package$js.toExponential_s8ev3n$ = toExponential;
  package$js.toExponential_dqglrj$ = toExponential_0;
  package$js.toExponential_yrwdxr$ = toExponential_1;
  package$js.toExponential_j6vyb1$ = toExponential_2;
  package$js.JsPair = JsPair;
  package$js.JsPair_o5fpdy$ = JsPair_0;
  package$js.JsoDsl = JsoDsl;
  package$js.PerformanceMeasureOptions = PerformanceMeasureOptions;
  package$js.Record = Record;
  $$importsForInline$$['kotlin-js'] = _;
  package$js.Record_kz82n3$ = Record_0;
  package$js.Record_a411ad$ = Record_1;
  package$js.get_MODE_g7idsg$ = get_MODE;
  package$js.get_PROD_g7idsg$ = get_PROD;
  package$js.get_DEV_g7idsg$ = get_DEV;
  package$js.jso_30y1fr$ = jso;
  package$js.jso_dajwzo$ = jso_0;
  var package$timers = package$js.timers || (package$js.timers = {});
  package$timers.setInterval_azx1yt$ = setInterval_0;
  package$timers.setTimeout_azx1yt$ = setTimeout_0;
  Kotlin.defineModule('kotlin-js', _);
  return _;
}));
