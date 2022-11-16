(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-js-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-ktor-client-js-js-legacy'.");
    }
    root['ktor-ktor-client-js-js-legacy'] = factory(typeof this['ktor-ktor-client-js-js-legacy'] === 'undefined' ? {} : this['ktor-ktor-client-js-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('ktor-ktor-client-js-js-legacy', _);
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-js-js-legacy.js.map
