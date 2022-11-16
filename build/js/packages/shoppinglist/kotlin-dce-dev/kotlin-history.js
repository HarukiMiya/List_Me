(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-history'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-history'.");
    }
    root['kotlin-history'] = factory(typeof this['kotlin-history'] === 'undefined' ? {} : this['kotlin-history'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('kotlin-history', _);
  return _;
}));
