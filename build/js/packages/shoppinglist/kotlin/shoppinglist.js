(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-core-js-legacy', 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy', 'ktor-ktor-client-content-negotiation-js-legacy', 'ktor-ktor-serialization-kotlinx-json-js-legacy', 'ktor-ktor-client-core-js-legacy', 'ktor-ktor-http-js-legacy', 'kotlinx-coroutines-core', 'react', 'kotlin-react-core', 'kotlin-react-dom', 'kotlin-csstype', 'kotlin-react', 'kotlin-emotion', 'react-router-dom', 'react-router', 'react-dom/client'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-js-legacy'), require('Kotlin-DateTime-library-kotlinx-datetime-js-legacy'), require('ktor-ktor-client-content-negotiation-js-legacy'), require('ktor-ktor-serialization-kotlinx-json-js-legacy'), require('ktor-ktor-client-core-js-legacy'), require('ktor-ktor-http-js-legacy'), require('kotlinx-coroutines-core'), require('react'), require('kotlin-react-core'), require('kotlin-react-dom'), require('kotlin-csstype'), require('kotlin-react'), require('kotlin-emotion'), require('react-router-dom'), require('react-router'), require('react-dom/client'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-legacy' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-legacy' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-client-content-negotiation-js-legacy' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-legacy' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-legacy' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-client-core-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-client-core-js-legacy' was not found. Please, check whether 'ktor-ktor-client-core-js-legacy' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'shoppinglist'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['kotlin-emotion'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'kotlin-emotion' was not found. Please, check whether 'kotlin-emotion' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['react-router'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'react-router' was not found. Please, check whether 'react-router' is loaded prior to 'shoppinglist'.");
    }
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'shoppinglist'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'shoppinglist'.");
    }
    root.shoppinglist = factory(typeof shoppinglist === 'undefined' ? {} : shoppinglist, kotlin, this['kotlinx-serialization-kotlinx-serialization-core-js-legacy'], this['Kotlin-DateTime-library-kotlinx-datetime-js-legacy'], this['ktor-ktor-client-content-negotiation-js-legacy'], this['ktor-ktor-serialization-kotlinx-json-js-legacy'], this['ktor-ktor-client-core-js-legacy'], this['ktor-ktor-http-js-legacy'], this['kotlinx-coroutines-core'], react, this['kotlin-react-core'], this['kotlin-react-dom'], this['kotlin-csstype'], this['kotlin-react'], this['kotlin-emotion'], this['react-router-dom'], this['react-router'], this['react-dom/client']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy, $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy, $module$ktor_ktor_client_content_negotiation_js_legacy, $module$ktor_ktor_serialization_kotlinx_json_js_legacy, $module$ktor_ktor_client_core_js_legacy, $module$ktor_ktor_http_js_legacy, $module$kotlinx_coroutines_core, $module$react, $module$kotlin_react_core, $module$kotlin_react_dom, $module$kotlin_csstype, $module$kotlin_react, $module$kotlin_emotion, $module$react_router_dom, $module$react_router, $module$react_dom_client) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var hashCode = Kotlin.hashCode;
  var equals = Kotlin.equals;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_js_legacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Clock = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.Clock;
  var TimeZone = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.TimeZone;
  var toLocalDateTime = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.toLocalDateTime_pneqz9$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var ContentNegotiation = $module$ktor_ktor_client_content_negotiation_js_legacy.io.ktor.client.plugins.contentnegotiation.ContentNegotiation;
  var json = $module$ktor_ktor_serialization_kotlinx_json_js_legacy.io.ktor.serialization.kotlinx.json.json_mhw46j$;
  var Unit = Kotlin.kotlin.Unit;
  var HttpClient = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.HttpClient_f0veat$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var List = Kotlin.kotlin.collections.List;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var contentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.contentType_41kwpe$;
  var url = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.url_g8iu3v$;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpMethod = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.HttpMethod;
  var HttpStatement_init = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.statement.HttpStatement;
  var throwCCE = Kotlin.throwCCE;
  var reflect = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect;
  var typeInfoImpl = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-utils-js-legacy'].io.ktor.util.reflect.typeInfoImpl_1lvkm8$;
  var Throwable = Error;
  var utils = $module$ktor_ktor_client_core_js_legacy.io.ktor.client.utils;
  var OutgoingContent = $module$ktor_ktor_client_core_js_legacy.$$importsForInline$$['ktor-ktor-http-js-legacy'].io.ktor.http.content.OutgoingContent;
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var useState = $module$react.useState;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var useEffectOnce = $module$kotlin_react_core.react.useEffectOnce_yy86ve$;
  var html = $module$kotlin_react_dom.react.dom.html;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var unboxChar = Kotlin.unboxChar;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var FC = $module$kotlin_react.react.FC_4y0n3r$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var InputType$text = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
  var ButtonType$submit = (/*union*/{submit: 'submit', reset: 'reset', button: 'button'}/*union*/).submit;
  var css = $module$kotlin_emotion.$$importsForInline$$['@emotion/css'].css;
  var InputType$password = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).password;
  var InputType$submit = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).submit;
  var create = $module$kotlin_react.react.create_r7bapy$;
  var createRoot = $module$react_dom_client.createRoot;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function ShoppingListItem(desc, priority) {
    ShoppingListItem$Companion_getInstance();
    this.desc = desc;
    this.priority = priority;
    this.id = hashCode(this.desc);
    this.DateTime = getCurrentDateTime();
  }
  function ShoppingListItem$Companion() {
    ShoppingListItem$Companion_instance = this;
    this.path = '/shoppingList';
  }
  ShoppingListItem$Companion.prototype.serializer = function () {
    return ShoppingListItem$$serializer_getInstance();
  };
  ShoppingListItem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ShoppingListItem$Companion_instance = null;
  function ShoppingListItem$Companion_getInstance() {
    if (ShoppingListItem$Companion_instance === null) {
      new ShoppingListItem$Companion();
    }
    return ShoppingListItem$Companion_instance;
  }
  function ShoppingListItem$$serializer() {
    this.descriptor_72rncu$_0 = new PluginGeneratedSerialDescriptor('ShoppingListItem', this, 4);
    this.descriptor.addElement_ivxn3r$('desc', false);
    this.descriptor.addElement_ivxn3r$('priority', false);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('DateTime', true);
    ShoppingListItem$$serializer_instance = this;
  }
  Object.defineProperty(ShoppingListItem$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_72rncu$_0;
    }
  });
  ShoppingListItem$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.desc);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.priority);
    if (!equals(value.id, hashCode(this.desc)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.id);
    if (!equals(value.DateTime, getCurrentDateTime()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 3))
      output.encodeStringElement_iij8qq$(this.descriptor, 3, value.DateTime);
    output.endStructure_24f42q$(this.descriptor);
  };
  ShoppingListItem$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return ShoppingListItem_init(bitMask0, local0, local1, local2, local3, null);
  };
  ShoppingListItem$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.IntSerializer, internal.StringSerializer];
  };
  ShoppingListItem$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var ShoppingListItem$$serializer_instance = null;
  function ShoppingListItem$$serializer_getInstance() {
    if (ShoppingListItem$$serializer_instance === null) {
      new ShoppingListItem$$serializer();
    }
    return ShoppingListItem$$serializer_instance;
  }
  function ShoppingListItem_init(seen1, desc, priority, id, DateTime, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(ShoppingListItem.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('desc');
    else
      $this.desc = desc;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('priority');
    else
      $this.priority = priority;
    if ((seen1 & 4) === 0)
      $this.id = hashCode($this.desc);
    else
      $this.id = id;
    if ((seen1 & 8) === 0)
      $this.DateTime = getCurrentDateTime();
    else
      $this.DateTime = DateTime;
    return $this;
  }
  ShoppingListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShoppingListItem',
    interfaces: []
  };
  ShoppingListItem.prototype.component1 = function () {
    return this.desc;
  };
  ShoppingListItem.prototype.component2 = function () {
    return this.priority;
  };
  ShoppingListItem.prototype.copy_bm4lxs$ = function (desc, priority) {
    return new ShoppingListItem(desc === void 0 ? this.desc : desc, priority === void 0 ? this.priority : priority);
  };
  ShoppingListItem.prototype.toString = function () {
    return 'ShoppingListItem(desc=' + Kotlin.toString(this.desc) + (', priority=' + Kotlin.toString(this.priority)) + ')';
  };
  ShoppingListItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.desc) | 0;
    result = result * 31 + Kotlin.hashCode(this.priority) | 0;
    return result;
  };
  ShoppingListItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.desc, other.desc) && Kotlin.equals(this.priority, other.priority)))));
  };
  function User(username, password) {
    User$Companion_getInstance();
    this.username = username;
    this.password = password;
    this.userId = hashCode(this.username);
  }
  function User$Companion() {
    User$Companion_instance = this;
    this.path = '/user';
  }
  User$Companion.prototype.serializer = function () {
    return User$$serializer_getInstance();
  };
  User$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var User$Companion_instance = null;
  function User$Companion_getInstance() {
    if (User$Companion_instance === null) {
      new User$Companion();
    }
    return User$Companion_instance;
  }
  function User$$serializer() {
    this.descriptor_5jv2b4$_0 = new PluginGeneratedSerialDescriptor('User', this, 3);
    this.descriptor.addElement_ivxn3r$('username', false);
    this.descriptor.addElement_ivxn3r$('password', false);
    this.descriptor.addElement_ivxn3r$('userId', true);
    User$$serializer_instance = this;
  }
  Object.defineProperty(User$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_5jv2b4$_0;
    }
  });
  User$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.username);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.password);
    if (!equals(value.userId, hashCode(this.username)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 2))
      output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.userId);
    output.endStructure_24f42q$(this.descriptor);
  };
  User$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:
          throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return User_init(bitMask0, local0, local1, local2, null);
  };
  User$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  User$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var User$$serializer_instance = null;
  function User$$serializer_getInstance() {
    if (User$$serializer_instance === null) {
      new User$$serializer();
    }
    return User$$serializer_instance;
  }
  function User_init(seen1, username, password, userId, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(User.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('username');
    else
      $this.username = username;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('password');
    else
      $this.password = password;
    if ((seen1 & 4) === 0)
      $this.userId = hashCode($this.username);
    else
      $this.userId = userId;
    return $this;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.username;
  };
  User.prototype.component2 = function () {
    return this.password;
  };
  User.prototype.copy_puj7f4$ = function (username, password) {
    return new User(username === void 0 ? this.username : username, password === void 0 ? this.password : password);
  };
  User.prototype.toString = function () {
    return 'User(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password)))));
  };
  function getCurrentDateTime() {
    var currentMoment = Clock.System.now();
    var currentDate = toLocalDateTime(currentMoment, TimeZone.Companion.currentSystemDefault()).date;
    var day = currentDate.dayOfMonth.toString();
    var month = currentDate.monthNumber.toString();
    var year = currentDate.year.toString();
    var currentTime = take(toLocalDateTime(currentMoment, TimeZone.Companion.currentSystemDefault()).time.toString(), 8);
    return day + '/' + month + '/' + year + ' ' + currentTime;
  }
  function get$lambda($receiver) {
    return Unit;
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function delete$lambda($receiver) {
    return Unit;
  }
  function put$lambda($receiver) {
    return Unit;
  }
  var endpoint;
  function jsonClient$lambda$lambda($receiver) {
    json($receiver);
    return Unit;
  }
  function jsonClient$lambda($receiver) {
    $receiver.install_dq2y33$(ContentNegotiation.Plugin, jsonClient$lambda$lambda);
    return Unit;
  }
  var jsonClient;
  function Coroutine$getShoppingList(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$getShoppingList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getShoppingList.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getShoppingList.prototype.constructor = Coroutine$getShoppingList;
  Coroutine$getShoppingList.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = jsonClient;
            var urlString = endpoint + ShoppingListItem$Companion_getInstance().path;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            get$lambda($receiver_1);
            $receiver_1.method = HttpMethod.Companion.Get;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            var tmp$_2;
            var tmp$_3 = this.result_0.call;
            var tmp$_4 = reflect.JsType;
            var tmp$_0_1 = getKClass(List);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(ShoppingListItem), [], false))], false);
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
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_2 = this.result_0, List) ? tmp$_2 : throwCCE();
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
  function getShoppingList(continuation_0, suspended) {
    var instance = new Coroutine$getShoppingList(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$addShoppingListItem(shoppingListItem_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$shoppingListItem = shoppingListItem_0;
  }
  Coroutine$addShoppingListItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addShoppingListItem.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addShoppingListItem.prototype.constructor = Coroutine$addShoppingListItem;
  Coroutine$addShoppingListItem.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = jsonClient;
            var urlString = endpoint + ShoppingListItem$Companion_getInstance().path;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            contentType($receiver_1, ContentType.Application.Json);
            if (this.local$shoppingListItem == null) {
              $receiver_1.body = utils.EmptyContent;
              $receiver_1.bodyType = null;
            } else if (Kotlin.isType(this.local$shoppingListItem, OutgoingContent)) {
              $receiver_1.body = this.local$shoppingListItem;
              $receiver_1.bodyType = null;
            } else {
              $receiver_1.body = this.local$shoppingListItem;
              var tmp$ = reflect.JsType;
              var tmp$_0 = getKClass(ShoppingListItem);
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(getKClass(ShoppingListItem), [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver_1.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }

            $receiver_1.method = HttpMethod.Companion.Post;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function addShoppingListItem(shoppingListItem_0, continuation_0, suspended) {
    var instance = new Coroutine$addShoppingListItem(shoppingListItem_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$deleteShoppingListItem(shoppingListItem_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$shoppingListItem = shoppingListItem_0;
  }
  Coroutine$deleteShoppingListItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$deleteShoppingListItem.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$deleteShoppingListItem.prototype.constructor = Coroutine$deleteShoppingListItem;
  Coroutine$deleteShoppingListItem.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = jsonClient;
            var urlString = endpoint + ShoppingListItem$Companion_getInstance().path + ('/' + this.local$shoppingListItem.id);
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            delete$lambda($receiver_1);
            $receiver_1.method = HttpMethod.Companion.Delete;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function deleteShoppingListItem(shoppingListItem_0, continuation_0, suspended) {
    var instance = new Coroutine$deleteShoppingListItem(shoppingListItem_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$editShoppingListItem(shoppingListItem_0, updatedItem_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$shoppingListItem = shoppingListItem_0;
    this.local$updatedItem = updatedItem_0;
  }
  Coroutine$editShoppingListItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$editShoppingListItem.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$editShoppingListItem.prototype.constructor = Coroutine$editShoppingListItem;
  Coroutine$editShoppingListItem.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = jsonClient;
            var urlString = endpoint + ShoppingListItem$Companion_getInstance().path + ('/' + this.local$shoppingListItem.id);
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            contentType($receiver_1, ContentType.Application.Json);
            if (this.local$updatedItem == null) {
              $receiver_1.body = utils.EmptyContent;
              $receiver_1.bodyType = null;
            } else if (Kotlin.isType(this.local$updatedItem, OutgoingContent)) {
              $receiver_1.body = this.local$updatedItem;
              $receiver_1.bodyType = null;
            } else {
              $receiver_1.body = this.local$updatedItem;
              var tmp$ = reflect.JsType;
              var tmp$_0 = getKClass(ShoppingListItem);
              var tryGetType$result;
              tryGetType$break: do {
                try {
                  tryGetType$result = createKType(getKClass(ShoppingListItem), [], false);
                } catch (cause) {
                  if (Kotlin.isType(cause, Throwable)) {
                    tryGetType$result = null;
                    break tryGetType$break;
                  } else
                    throw cause;
                }
              }
               while (false);
              $receiver_1.bodyType = typeInfoImpl(tmp$, tmp$_0, tryGetType$result);
            }

            $receiver_1.method = HttpMethod.Companion.Put;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function editShoppingListItem(shoppingListItem_0, updatedItem_0, continuation_0, suspended) {
    var instance = new Coroutine$editShoppingListItem(shoppingListItem_0, updatedItem_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$getUserList(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$getUserList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getUserList.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getUserList.prototype.constructor = Coroutine$getUserList;
  Coroutine$getUserList.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = jsonClient;
            var urlString = endpoint + User$Companion_getInstance().path;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            get$lambda($receiver_1);
            $receiver_1.method = HttpMethod.Companion.Get;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            var tmp$_2;
            var tmp$_3 = this.result_0.call;
            var tmp$_4 = reflect.JsType;
            var tmp$_0_1 = getKClass(List);
            var tryGetType$result_0;
            tryGetType$break: do {
              try {
                tryGetType$result_0 = createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(User), [], false))], false);
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
            this.result_0 = tmp$_3.body_qi9ur9$(typeInfoImpl(tmp$_4, tmp$_0_1, tryGetType$result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_2 = this.result_0, List) ? tmp$_2 : throwCCE();
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
  function getUserList(continuation_0, suspended) {
    var instance = new Coroutine$getUserList(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$addUserItem(user_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$addUserItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addUserItem.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addUserItem.prototype.constructor = Coroutine$addUserItem;
  Coroutine$addUserItem.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = jsonClient;
            var urlString = endpoint + User$Companion_getInstance().path;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, urlString);
            contentType($receiver_1, ContentType.Application.Json);
            $receiver_1.method = HttpMethod.Companion.Post;
            this.state_0 = 2;
            this.result_0 = (new HttpStatement_init($receiver_1, $receiver)).execute(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  function addUserItem(user_0, continuation_0, suspended) {
    var instance = new Coroutine$addUserItem(user_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  var scope;
  function Coroutine$App$lambda$lambda$lambda(closure$shoppingList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$shoppingList = closure$shoppingList_0;
  }
  Coroutine$App$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$App$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$App$lambda$lambda$lambda.prototype.constructor = Coroutine$App$lambda$lambda$lambda;
  Coroutine$App$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getShoppingList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this = this.local$closure$shoppingList;
            var value = this.result_0;
            $this[1](value);
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
  function App$lambda$lambda$lambda(closure$shoppingList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$App$lambda$lambda$lambda(closure$shoppingList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function App$lambda$lambda(closure$shoppingList) {
    return function ($receiver) {
      launch(scope, void 0, void 0, App$lambda$lambda$lambda(closure$shoppingList));
      return Unit;
    };
  }
  function App$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Full-Stack Shopping List');
    return Unit;
  }
  function Coroutine$App$lambda$lambda$lambda$lambda(closure$cartItem_0, closure$shoppingList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$cartItem = closure$cartItem_0;
    this.local$closure$shoppingList = closure$shoppingList_0;
  }
  Coroutine$App$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$App$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$App$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$App$lambda$lambda$lambda$lambda;
  Coroutine$App$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = addShoppingListItem(this.local$closure$cartItem, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = getShoppingList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $this = this.local$closure$shoppingList;
            var value = this.result_0;
            $this[1](value);
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
  function App$lambda$lambda$lambda$lambda(closure$cartItem_0, closure$shoppingList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$App$lambda$lambda$lambda$lambda(closure$cartItem_0, closure$shoppingList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function App$lambda$lambda$lambda_0(closure$shoppingList) {
    return function (input) {
      var tmp$ = replace(input, '!', '');
      var tmp$_0;
      var count = 0;
      tmp$_0 = iterator(input);
      while (tmp$_0.hasNext()) {
        var element = unboxChar(tmp$_0.next());
        if (unboxChar(toBoxedChar(element)) === 33)
          count = count + 1 | 0;
      }
      var cartItem = new ShoppingListItem(tmp$, count);
      launch(scope, void 0, void 0, App$lambda$lambda$lambda$lambda(cartItem, closure$shoppingList));
      return Unit;
    };
  }
  function App$lambda$lambda_1(closure$shoppingList) {
    return function ($receiver) {
      $receiver.onSubmit = App$lambda$lambda$lambda_0(closure$shoppingList);
      return Unit;
    };
  }
  function App$lambda$lambda_2($receiver) {
    $receiver.id = 'p-text';
    $receiver.unaryPlus_pdl1vz$('Here is your shopping list');
    return Unit;
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.className = 'fa fa-trash';
    return Unit;
  }
  function Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item_0, closure$shoppingList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
    this.local$closure$shoppingList = closure$shoppingList_0;
  }
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = deleteShoppingListItem(this.local$closure$item, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = getShoppingList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $this = this.local$closure$shoppingList;
            var value = this.result_0;
            $this[1](value);
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
  function App$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item_0, closure$shoppingList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item_0, closure$shoppingList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$shoppingList) {
    return function (it) {
      launch(scope, void 0, void 0, App$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item, closure$shoppingList));
      return Unit;
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda(closure$item, closure$shoppingList) {
    return function ($receiver) {
      $receiver.invoke_gax9jq$(html.ReactHTML.i, App$lambda$lambda$lambda$lambda$lambda$lambda);
      $receiver.onClick = App$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$shoppingList);
      return Unit;
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.className = 'fa fa-pencil';
    return Unit;
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$selectedEditItem) {
    return function (it) {
      var $this = closure$selectedEditItem;
      var value = closure$item;
      $this[1](value);
      return Unit;
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$selectedEditItem) {
    return function ($receiver) {
      $receiver.invoke_gax9jq$(html.ReactHTML.i, App$lambda$lambda$lambda$lambda$lambda$lambda_1);
      $receiver.onClick = App$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$selectedEditItem);
      return Unit;
    };
  }
  function Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item_0, closure$cartItem_0, closure$shoppingList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
    this.local$closure$cartItem = closure$cartItem_0;
    this.local$closure$shoppingList = closure$shoppingList_0;
  }
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = editShoppingListItem(this.local$closure$item, this.local$closure$cartItem, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = getShoppingList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var $this = this.local$closure$shoppingList;
            var value = this.result_0;
            $this[1](value);
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
  function App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item_0, closure$cartItem_0, closure$shoppingList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item_0, closure$cartItem_0, closure$shoppingList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$item, closure$shoppingList, closure$selectedEditItem) {
    return function (input) {
      var tmp$ = replace(input, '!', '');
      var tmp$_0;
      var count = 0;
      tmp$_0 = iterator(input);
      while (tmp$_0.hasNext()) {
        var element = unboxChar(tmp$_0.next());
        if (unboxChar(toBoxedChar(element)) === 33)
          count = count + 1 | 0;
      }
      var cartItem = new ShoppingListItem(tmp$, count);
      launch(scope, void 0, void 0, App$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, cartItem, closure$shoppingList));
      closure$selectedEditItem[1](null);
      return Unit;
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_1(closure$item, closure$shoppingList, closure$selectedEditItem) {
    return function ($receiver) {
      $receiver.onSubmit = App$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$item, closure$shoppingList, closure$selectedEditItem);
      return Unit;
    };
  }
  function App$lambda$lambda$lambda$lambda$lambda_2(closure$item) {
    return function ($receiver) {
      $receiver.className = 'font-small';
      $receiver.unaryPlus_pdl1vz$(' DateTime: ' + closure$item.DateTime);
      return Unit;
    };
  }
  function App$lambda$lambda$lambda$lambda_0(closure$item, closure$selectedEditItem, closure$shoppingList) {
    return function ($receiver) {
      if (!equals(closure$item, closure$selectedEditItem[0])) {
        $receiver.invoke_gax9jq$(html.ReactHTML.p, App$lambda$lambda$lambda$lambda$lambda(closure$item, closure$shoppingList));
        $receiver.invoke_gax9jq$(html.ReactHTML.p, App$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$selectedEditItem));
      }
      $receiver.key = closure$item.toString();
      if (equals(closure$item, closure$selectedEditItem[0])) {
        $receiver.invoke_gax9jq$(editComponent, App$lambda$lambda$lambda$lambda$lambda_1(closure$item, closure$shoppingList, closure$selectedEditItem));
      } else {
        $receiver.unaryPlus_pdl1vz$('[' + closure$item.priority + '] ' + closure$item.desc + '  || ');
        $receiver.invoke_gax9jq$(html.ReactHTML.p, App$lambda$lambda$lambda$lambda$lambda_2(closure$item));
      }
      return Unit;
    };
  }
  function App$lambda$lambda_3(closure$shoppingList, closure$selectedEditItem) {
    return function ($receiver) {
      var $receiver_0 = sortedWith(closure$shoppingList[0], new Comparator(compareByDescending$lambda(getPropertyCallableRef('priority', 1, function ($receiver) {
        return $receiver.priority;
      }))));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$selectedEditItem_0 = closure$selectedEditItem;
        var closure$shoppingList_0 = closure$shoppingList;
        $receiver.invoke_gax9jq$(html.ReactHTML.li, App$lambda$lambda$lambda$lambda_0(element, closure$selectedEditItem_0, closure$shoppingList_0));
      }
      return Unit;
    };
  }
  function App$lambda($receiver, it) {
    var shoppingList = useState(emptyList());
    var selectedEditItem = useState(null);
    useEffectOnce(App$lambda$lambda(shoppingList));
    $receiver.invoke_gax9jq$(html.ReactHTML.h1, App$lambda$lambda_0);
    $receiver.invoke_gax9jq$(inputComponent, App$lambda$lambda_1(shoppingList));
    $receiver.invoke_gax9jq$(html.ReactHTML.p, App$lambda$lambda_2);
    $receiver.invoke_gax9jq$(html.ReactHTML.ul, App$lambda$lambda_3(shoppingList, selectedEditItem));
    return Unit;
  }
  var App;
  function inputComponent$lambda$lambda(closure$setText, closure$props, closure$text) {
    return function (it) {
      it.preventDefault();
      closure$setText('');
      closure$props.onSubmit(closure$text);
      return Unit;
    };
  }
  function inputComponent$lambda$lambda_0(closure$setText) {
    return function (it) {
      closure$setText(it.target.value);
      return Unit;
    };
  }
  function inputComponent$lambda$lambda$lambda(closure$changeHandler, closure$text) {
    return function ($receiver) {
      $receiver.type = InputType$text;
      $receiver.onChange = closure$changeHandler;
      $receiver.value = closure$text;
      return Unit;
    };
  }
  function inputComponent$lambda$lambda_1(closure$submitHandler, closure$changeHandler, closure$text) {
    return function ($receiver) {
      $receiver.id = 'input-form';
      $receiver.onSubmit = closure$submitHandler;
      $receiver.invoke_gax9jq$(html.ReactHTML.input, inputComponent$lambda$lambda$lambda(closure$changeHandler, closure$text));
      return Unit;
    };
  }
  function inputComponent$lambda($receiver, props) {
    var tmp$ = useState('');
    var text = tmp$[0];
    var setText = tmp$[1];
    var submitHandler = inputComponent$lambda$lambda(setText, props, text);
    var changeHandler = inputComponent$lambda$lambda_0(setText);
    $receiver.invoke_gax9jq$(html.ReactHTML.form, inputComponent$lambda$lambda_1(submitHandler, changeHandler, text));
    return Unit;
  }
  var inputComponent;
  var scope_0;
  function editComponent$lambda$lambda(closure$setText, closure$props, closure$text) {
    return function (it) {
      it.preventDefault();
      closure$setText('');
      closure$props.onSubmit(closure$text);
      return Unit;
    };
  }
  function editComponent$lambda$lambda_0(closure$setText) {
    return function (it) {
      closure$setText(it.target.value);
      return Unit;
    };
  }
  function editComponent$lambda$lambda$lambda$lambda($receiver) {
    $receiver.className = 'fa fa-floppy-o';
    return Unit;
  }
  function editComponent$lambda$lambda$lambda($receiver) {
    $receiver.type = ButtonType$submit;
    $receiver.invoke_gax9jq$(html.ReactHTML.i, editComponent$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function editComponent$lambda$lambda$lambda_0(closure$changeHandler, closure$text) {
    return function ($receiver) {
      $receiver.type = InputType$text;
      $receiver.onChange = closure$changeHandler;
      $receiver.value = closure$text;
      return Unit;
    };
  }
  function editComponent$lambda$lambda_1(closure$submitHandler, closure$changeHandler, closure$text) {
    return function ($receiver) {
      $receiver.id = 'edit-form';
      $receiver.onSubmit = closure$submitHandler;
      $receiver.invoke_gax9jq$(html.ReactHTML.button, editComponent$lambda$lambda$lambda);
      $receiver.invoke_gax9jq$(html.ReactHTML.input, editComponent$lambda$lambda$lambda_0(closure$changeHandler, closure$text));
      return Unit;
    };
  }
  function editComponent$lambda($receiver, props) {
    var tmp$ = useState('');
    var text = tmp$[0];
    var setText = tmp$[1];
    var submitHandler = editComponent$lambda$lambda(setText, props, text);
    var changeHandler = editComponent$lambda$lambda_0(setText);
    $receiver.invoke_gax9jq$(html.ReactHTML.form, editComponent$lambda$lambda_1(submitHandler, changeHandler, text));
    return Unit;
  }
  var editComponent;
  var scope_1;
  function Login$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Please Log In');
    return Unit;
  }
  function Login$lambda$lambda$lambda($receiver) {
    $receiver.invoke_gax9jq$(html.ReactHTML.h1, Login$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function Login$lambda$lambda$lambda$lambda_0(input, input2) {
    console.log(input);
    console.log(input2);
    return Unit;
  }
  function Login$lambda$lambda$lambda_0($receiver) {
    $receiver.onSubmit = Login$lambda$lambda$lambda$lambda_0;
    return Unit;
  }
  function Login$lambda$lambda($receiver) {
    var $receiver_0 = {};
    $receiver_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
    $receiver_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
    $receiver_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
    $receiver.className = css($receiver_0);
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Login$lambda$lambda$lambda);
    $receiver.invoke_gax9jq$(loginComponent, Login$lambda$lambda$lambda_0);
    return Unit;
  }
  function Login$lambda($receiver, it) {
    $receiver.invoke_gax9jq$(html.ReactHTML.div, Login$lambda$lambda);
    return Unit;
  }
  var Login;
  function loginComponent$lambda$lambda(closure$setPass, closure$setUsername, closure$props, closure$username, closure$pass) {
    return function (it) {
      it.preventDefault();
      closure$setPass('');
      closure$setUsername('');
      closure$props.onSubmit(closure$username, closure$pass);
      return Unit;
    };
  }
  function loginComponent$lambda$lambda_0(closure$setUsername) {
    return function (it) {
      closure$setUsername(it.target.value);
      return Unit;
    };
  }
  function loginComponent$lambda$lambda_1(closure$setPass) {
    return function (it) {
      closure$setPass(it.target.value);
      return Unit;
    };
  }
  function loginComponent$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('login');
    return Unit;
  }
  function loginComponent$lambda$lambda$lambda$lambda(closure$changeHandler, closure$username) {
    return function ($receiver) {
      $receiver.type = InputType$text;
      $receiver.onChange = closure$changeHandler;
      $receiver.name = 'name';
      $receiver.value = closure$username;
      return Unit;
    };
  }
  function loginComponent$lambda$lambda$lambda(closure$changeHandler, closure$username) {
    return function ($receiver) {
      $receiver.htmlFor = 'name';
      $receiver.unaryPlus_pdl1vz$('Name:');
      $receiver.invoke_gax9jq$(html.ReactHTML.input, loginComponent$lambda$lambda$lambda$lambda(closure$changeHandler, closure$username));
      return Unit;
    };
  }
  function loginComponent$lambda$lambda$lambda$lambda_0(closure$changeHandle, closure$pass) {
    return function ($receiver) {
      $receiver.type = InputType$password;
      $receiver.onChange = closure$changeHandle;
      $receiver.name = 'password';
      $receiver.value = closure$pass;
      return Unit;
    };
  }
  function loginComponent$lambda$lambda$lambda_0(closure$changeHandle, closure$pass) {
    return function ($receiver) {
      $receiver.htmlFor = 'password';
      $receiver.unaryPlus_pdl1vz$('Password:');
      $receiver.invoke_gax9jq$(html.ReactHTML.input, loginComponent$lambda$lambda$lambda$lambda_0(closure$changeHandle, closure$pass));
      return Unit;
    };
  }
  function loginComponent$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.type = InputType$submit;
    $receiver.className = 'btn';
    $receiver.value = 'LOGIN';
    return Unit;
  }
  function loginComponent$lambda$lambda$lambda_1($receiver) {
    $receiver.invoke_gax9jq$(html.ReactHTML.input, loginComponent$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function loginComponent$lambda$lambda_3(closure$submitHandler, closure$changeHandler, closure$username, closure$changeHandle, closure$pass) {
    return function ($receiver) {
      $receiver.onSubmit = closure$submitHandler;
      $receiver.invoke_gax9jq$(html.ReactHTML.label, loginComponent$lambda$lambda$lambda(closure$changeHandler, closure$username));
      $receiver.invoke_gax9jq$(html.ReactHTML.label, loginComponent$lambda$lambda$lambda_0(closure$changeHandle, closure$pass));
      $receiver.invoke_gax9jq$(html.ReactHTML.div, loginComponent$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  function loginComponent$lambda($receiver, props) {
    var tmp$ = useState('');
    var username = tmp$[0];
    var setUsername = tmp$[1];
    var tmp$_0 = useState('');
    var pass = tmp$_0[0];
    var setPass = tmp$_0[1];
    var submitHandler = loginComponent$lambda$lambda(setPass, setUsername, props, username, pass);
    var changeHandler = loginComponent$lambda$lambda_0(setUsername);
    var changeHandle = loginComponent$lambda$lambda_1(setPass);
    $receiver.invoke_gax9jq$(html.ReactHTML.h2, loginComponent$lambda$lambda_2);
    $receiver.invoke_gax9jq$(html.ReactHTML.form, loginComponent$lambda$lambda_3(submitHandler, changeHandler, username, changeHandle, pass));
    return Unit;
  }
  var loginComponent;
  function Application$lambda$lambda$lambda$lambda($receiver) {
    $receiver.path = '/login';
    $receiver.element = create(Login);
    return Unit;
  }
  function Application$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.path = '/';
    $receiver.element = create(App);
    return Unit;
  }
  function Application$lambda$lambda$lambda($receiver) {
    $receiver.invoke_gax9jq$($module$react_router.Route, Application$lambda$lambda$lambda$lambda);
    $receiver.invoke_gax9jq$($module$react_router.Route, Application$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function Application$lambda$lambda($receiver) {
    $receiver.invoke_gax9jq$($module$react_router.Routes, Application$lambda$lambda$lambda);
    return Unit;
  }
  function Application$lambda($receiver, it) {
    $receiver.invoke_gax9jq$($module$react_router_dom.BrowserRouter, Application$lambda$lambda);
    return Unit;
  }
  var Application;
  function main() {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = document.getElementById('root')) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init("Couldn't find container!".toString());
    }
    var container = tmp$_0;
    createRoot(container).render(create(Application));
  }
  Object.defineProperty(ShoppingListItem, 'Companion', {
    get: ShoppingListItem$Companion_getInstance
  });
  Object.defineProperty(ShoppingListItem, '$serializer', {
    get: ShoppingListItem$$serializer_getInstance
  });
  _.ShoppingListItem_init_gvujw7$ = ShoppingListItem_init;
  _.ShoppingListItem = ShoppingListItem;
  Object.defineProperty(User, 'Companion', {
    get: User$Companion_getInstance
  });
  Object.defineProperty(User, '$serializer', {
    get: User$$serializer_getInstance
  });
  _.User_init_bmpwe9$ = User_init;
  _.User = User;
  _.getCurrentDateTime = getCurrentDateTime;
  Object.defineProperty(_, 'endpoint', {
    get: function () {
      return endpoint;
    }
  });
  Object.defineProperty(_, 'jsonClient', {
    get: function () {
      return jsonClient;
    }
  });
  $$importsForInline$$['ktor-ktor-client-core-js-legacy'] = $module$ktor_ktor_client_core_js_legacy;
  _.getShoppingList = getShoppingList;
  _.addShoppingListItem_lsukc9$ = addShoppingListItem;
  _.deleteShoppingListItem_lsukc9$ = deleteShoppingListItem;
  _.editShoppingListItem_b2gtvw$ = editShoppingListItem;
  _.getUserList = getUserList;
  _.addUserItem_1kpnv$ = addUserItem;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  $$importsForInline$$['kotlin-csstype'] = $module$kotlin_csstype;
  Object.defineProperty(_, 'App', {
    get: function () {
      return App;
    }
  });
  Object.defineProperty(_, 'inputComponent', {
    get: function () {
      return inputComponent;
    }
  });
  Object.defineProperty(_, 'editComponent', {
    get: function () {
      return editComponent;
    }
  });
  $$importsForInline$$['kotlin-emotion'] = $module$kotlin_emotion;
  Object.defineProperty(_, 'Login', {
    get: function () {
      return Login;
    }
  });
  Object.defineProperty(_, 'loginComponent', {
    get: function () {
      return loginComponent;
    }
  });
  Object.defineProperty(_, 'Application', {
    get: function () {
      return Application;
    }
  });
  _.main = main;
  ShoppingListItem$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  User$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  endpoint = window.location.origin;
  jsonClient = HttpClient(jsonClient$lambda);
  scope = MainScope();
  App = FC(App$lambda);
  inputComponent = FC(inputComponent$lambda);
  scope_0 = MainScope();
  editComponent = FC(editComponent$lambda);
  scope_1 = MainScope();
  Login = FC(Login$lambda);
  loginComponent = FC(loginComponent$lambda);
  Application = FC(Application$lambda);
  main();
  Kotlin.defineModule('shoppinglist', _);
  return _;
}));

//# sourceMappingURL=shoppinglist.js.map
