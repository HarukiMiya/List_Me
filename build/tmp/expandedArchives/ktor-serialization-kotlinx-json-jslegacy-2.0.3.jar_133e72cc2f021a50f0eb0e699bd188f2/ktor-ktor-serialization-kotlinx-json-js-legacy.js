(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-serialization-kotlinx-serialization-json-js-legacy', 'ktor-ktor-http-js-legacy', 'ktor-ktor-serialization-kotlinx-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-json-js-legacy'), require('ktor-ktor-http-js-legacy'), require('ktor-ktor-serialization-kotlinx-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-legacy'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-legacy'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-http-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-legacy'. Its dependency 'ktor-ktor-http-js-legacy' was not found. Please, check whether 'ktor-ktor-http-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-legacy'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-legacy'. Its dependency 'ktor-ktor-serialization-kotlinx-js-legacy' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-js-legacy' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-legacy'.");
    }
    root['ktor-ktor-serialization-kotlinx-json-js-legacy'] = factory(typeof this['ktor-ktor-serialization-kotlinx-json-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-json-js-legacy'], kotlin, this['kotlinx-serialization-kotlinx-serialization-json-js-legacy'], this['ktor-ktor-http-js-legacy'], this['ktor-ktor-serialization-kotlinx-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy, $module$ktor_ktor_http_js_legacy, $module$ktor_ktor_serialization_kotlinx_js_legacy) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_js_legacy.kotlinx.serialization.json.Json_x26noe$;
  var ContentType = $module$ktor_ktor_http_js_legacy.io.ktor.http.ContentType;
  var serialization = $module$ktor_ktor_serialization_kotlinx_js_legacy.io.ktor.serialization.kotlinx.serialization_15409d$;
  function DefaultJson$lambda($receiver) {
    $receiver.encodeDefaults = true;
    $receiver.isLenient = true;
    $receiver.allowSpecialFloatingPointValues = true;
    $receiver.allowStructuredMapKeys = true;
    $receiver.prettyPrint = false;
    $receiver.useArrayPolymorphism = false;
    return Unit;
  }
  var DefaultJson;
  function json($receiver, json, contentType) {
    if (json === void 0)
      json = DefaultJson;
    if (contentType === void 0)
      contentType = ContentType.Application.Json;
    serialization($receiver, contentType, json);
  }
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$serialization = package$ktor.serialization || (package$ktor.serialization = {});
  var package$kotlinx = package$serialization.kotlinx || (package$serialization.kotlinx = {});
  var package$json = package$kotlinx.json || (package$kotlinx.json = {});
  Object.defineProperty(package$json, 'DefaultJson', {
    get: function () {
      return DefaultJson;
    }
  });
  package$json.json_mhw46j$ = json;
  DefaultJson = Json(void 0, DefaultJson$lambda);
  Kotlin.defineModule('ktor-ktor-serialization-kotlinx-json-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-json-js-legacy.js.map
