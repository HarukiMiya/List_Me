(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'ktor-ktor-utils-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('ktor-ktor-utils-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-events-js-legacy'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events-js-legacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-events-js-legacy'.");
    }
    if (typeof this['ktor-ktor-utils-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events-js-legacy'. Its dependency 'ktor-ktor-utils-js-legacy' was not found. Please, check whether 'ktor-ktor-utils-js-legacy' is loaded prior to 'ktor-ktor-events-js-legacy'.");
    }
    root['ktor-ktor-events-js-legacy'] = factory(typeof this['ktor-ktor-events-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-events-js-legacy'], kotlin, this['kotlinx-coroutines-core'], this['ktor-ktor-utils-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$ktor_ktor_utils_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var LinkedListHead = $module$kotlinx_coroutines_core.kotlinx.coroutines.internal.LinkedListHead;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var addSuppressed = Kotlin.kotlin.addSuppressed_oh0dqn$;
  var Throwable = Error;
  var LinkedListNode = $module$kotlinx_coroutines_core.kotlinx.coroutines.internal.LinkedListNode;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var CopyOnWriteHashMap = $module$ktor_ktor_utils_js_legacy.io.ktor.util.collections.CopyOnWriteHashMap;
  Events$HandlerRegistration.prototype = Object.create(LinkedListNode.prototype);
  Events$HandlerRegistration.prototype.constructor = Events$HandlerRegistration;
  function Events() {
    this.handlers_0 = new CopyOnWriteHashMap();
  }
  function Events$subscribe$lambda(it) {
    return new LinkedListHead();
  }
  Events.prototype.subscribe_pxwj6z$ = function (definition, handler) {
    var registration = new Events$HandlerRegistration(handler);
    this.handlers_0.computeIfAbsent_bci5j9$(definition, Events$subscribe$lambda).addLast_l2j9rm$(registration);
    return registration;
  };
  function Events$unsubscribe$lambda(closure$handler) {
    return function (it) {
      if (equals(it.handler, closure$handler))
        it.remove();
      return Unit;
    };
  }
  Events.prototype.unsubscribe_pxwj6z$ = function (definition, handler) {
    var tmp$;
    if ((tmp$ = this.handlers_0.get_trkh7z$(definition)) != null) {
      var cur = tmp$._next;
      while (!equals(cur, tmp$)) {
        if (Kotlin.isType(cur, Events$HandlerRegistration))
          Events$unsubscribe$lambda(handler)(cur);
        cur = cur._next;
      }
    }
  };
  function Events$raise$lambda(closure$value, closure$exception, this$Events) {
    return function (registration) {
      var tmp$, tmp$_0;
      try {
        (typeof (tmp$ = registration.handler) === 'function' ? tmp$ : throwCCE())(closure$value);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (((tmp$_0 = closure$exception.v) != null ? (addSuppressed(tmp$_0, e), Unit) : null) == null) {
            var closure$e = e;
            closure$exception.v = closure$e;
          }
        } else
          throw e;
      }
      return Unit;
    };
  }
  Events.prototype.raise_asioqi$ = function (definition, value) {
    var tmp$, tmp$_0;
    var exception = {v: null};
    if ((tmp$ = this.handlers_0.get_trkh7z$(definition)) != null) {
      var cur = tmp$._next;
      while (!equals(cur, tmp$)) {
        if (Kotlin.isType(cur, Events$HandlerRegistration))
          Events$raise$lambda(value, exception, this)(cur);
        cur = cur._next;
      }
    }
    if ((tmp$_0 = exception.v) != null) {
      throw tmp$_0;
    }
  };
  function Events$HandlerRegistration(handler) {
    LinkedListNode.call(this);
    this.handler = handler;
  }
  Events$HandlerRegistration.prototype.dispose = function () {
    this.remove();
  };
  Events$HandlerRegistration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HandlerRegistration',
    interfaces: [DisposableHandle, LinkedListNode]
  };
  Events.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Events',
    interfaces: []
  };
  function EventDefinition() {
  }
  EventDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventDefinition',
    interfaces: []
  };
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$events = package$ktor.events || (package$ktor.events = {});
  package$events.Events = Events;
  package$events.EventDefinition = EventDefinition;
  Kotlin.defineModule('ktor-ktor-events-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-events-js-legacy.js.map
