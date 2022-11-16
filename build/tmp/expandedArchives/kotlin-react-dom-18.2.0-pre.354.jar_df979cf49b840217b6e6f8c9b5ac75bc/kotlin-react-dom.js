(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-dom'.");
    }
    if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react-dom'.");
    }
    root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], kotlin, this['kotlin-react-core']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var get_onChange = defineInlineFunction('kotlin-react-dom.react.dom.get_onChange_ubhhge$', function ($receiver) {
    return $receiver.onChange;
  });
  var set_onChange = defineInlineFunction('kotlin-react-dom.react.dom.set_onChange_pfklab$', function ($receiver, value) {
    $receiver.onChange = value;
  });
  var get_ariaActiveDescendant = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaActiveDescendant_jwhqjp$', function ($receiver) {
    return $receiver['aria-activedescendant'];
  });
  var set_ariaActiveDescendant = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaActiveDescendant_khicw7$', function ($receiver, value) {
    $receiver['aria-activedescendant'] = value;
  });
  var get_ariaAtomic = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaAtomic_jwhqjp$', function ($receiver) {
    return $receiver['aria-atomic'];
  });
  var set_ariaAtomic = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaAtomic_yn11c0$', function ($receiver, value) {
    $receiver['aria-atomic'] = value;
  });
  var get_ariaAutoComplete = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaAutoComplete_jwhqjp$', function ($receiver) {
    return $receiver['aria-autocomplete'];
  });
  var set_ariaAutoComplete = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaAutoComplete_i2msty$', function ($receiver, value) {
    $receiver['aria-autocomplete'] = value;
  });
  var get_ariaBusy = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaBusy_jwhqjp$', function ($receiver) {
    return $receiver['aria-busy'];
  });
  var set_ariaBusy = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaBusy_yn11c0$', function ($receiver, value) {
    $receiver['aria-busy'] = value;
  });
  var get_ariaChecked = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaChecked_jwhqjp$', function ($receiver) {
    return $receiver['aria-checked'];
  });
  var set_ariaChecked = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaChecked_eamw7b$', function ($receiver, value) {
    $receiver['aria-checked'] = value;
  });
  var get_ariaColCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaColCount_jwhqjp$', function ($receiver) {
    return $receiver['aria-colcount'];
  });
  var set_ariaColCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaColCount_l0htmh$', function ($receiver, value) {
    $receiver['aria-colcount'] = value;
  });
  var get_ariaColIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaColIndex_jwhqjp$', function ($receiver) {
    return $receiver['aria-colindex'];
  });
  var set_ariaColIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaColIndex_l0htmh$', function ($receiver, value) {
    $receiver['aria-colindex'] = value;
  });
  var get_ariaColSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaColSpan_jwhqjp$', function ($receiver) {
    return $receiver['aria-colspan'];
  });
  var set_ariaColSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaColSpan_l0htmh$', function ($receiver, value) {
    $receiver['aria-colspan'] = value;
  });
  var get_ariaControls = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaControls_jwhqjp$', function ($receiver) {
    return $receiver['aria-controls'];
  });
  var set_ariaControls = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaControls_khicw7$', function ($receiver, value) {
    $receiver['aria-controls'] = value;
  });
  var get_ariaCurrent = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaCurrent_jwhqjp$', function ($receiver) {
    return $receiver['aria-current'];
  });
  var set_ariaCurrent = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaCurrent_7xn0s5$', function ($receiver, value) {
    $receiver['aria-current'] = value;
  });
  var get_ariaDescribedBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDescribedBy_jwhqjp$', function ($receiver) {
    return $receiver['aria-describedby'];
  });
  var set_ariaDescribedBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDescribedBy_khicw7$', function ($receiver, value) {
    $receiver['aria-describedby'] = value;
  });
  var get_ariaDetails = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDetails_jwhqjp$', function ($receiver) {
    return $receiver['aria-details'];
  });
  var set_ariaDetails = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDetails_khicw7$', function ($receiver, value) {
    $receiver['aria-details'] = value;
  });
  var get_ariaDisabled = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDisabled_jwhqjp$', function ($receiver) {
    return $receiver['aria-disabled'];
  });
  var set_ariaDisabled = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDisabled_yn11c0$', function ($receiver, value) {
    $receiver['aria-disabled'] = value;
  });
  var get_ariaDropEffect = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaDropEffect_jwhqjp$', function ($receiver) {
    return $receiver['aria-dropeffect'];
  });
  var set_ariaDropEffect = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaDropEffect_sfm5rm$', function ($receiver, value) {
    $receiver['aria-dropeffect'] = value;
  });
  var get_ariaErrorMessage = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaErrorMessage_jwhqjp$', function ($receiver) {
    return $receiver['aria-errormessage'];
  });
  var set_ariaErrorMessage = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaErrorMessage_khicw7$', function ($receiver, value) {
    $receiver['aria-errormessage'] = value;
  });
  var get_ariaExpanded = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaExpanded_jwhqjp$', function ($receiver) {
    return $receiver['aria-expanded'];
  });
  var set_ariaExpanded = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaExpanded_yn11c0$', function ($receiver, value) {
    $receiver['aria-expanded'] = value;
  });
  var get_ariaFlowTo = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaFlowTo_jwhqjp$', function ($receiver) {
    return $receiver['aria-flowto'];
  });
  var set_ariaFlowTo = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaFlowTo_khicw7$', function ($receiver, value) {
    $receiver['aria-flowto'] = value;
  });
  var get_ariaGrabbed = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaGrabbed_jwhqjp$', function ($receiver) {
    return $receiver['aria-grabbed'];
  });
  var set_ariaGrabbed = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaGrabbed_yn11c0$', function ($receiver, value) {
    $receiver['aria-grabbed'] = value;
  });
  var get_ariaHasPopup = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaHasPopup_jwhqjp$', function ($receiver) {
    return $receiver['aria-haspopup'];
  });
  var set_ariaHasPopup = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaHasPopup_uqke5c$', function ($receiver, value) {
    $receiver['aria-haspopup'] = value;
  });
  var get_ariaHidden = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaHidden_jwhqjp$', function ($receiver) {
    return $receiver['aria-hidden'];
  });
  var set_ariaHidden = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaHidden_yn11c0$', function ($receiver, value) {
    $receiver['aria-hidden'] = value;
  });
  var get_ariaInvalid = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaInvalid_jwhqjp$', function ($receiver) {
    return $receiver['aria-invalid'];
  });
  var set_ariaInvalid = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaInvalid_5u7qh5$', function ($receiver, value) {
    $receiver['aria-invalid'] = value;
  });
  var get_ariaKeyShortcuts = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaKeyShortcuts_jwhqjp$', function ($receiver) {
    return $receiver['aria-keyshortcuts'];
  });
  var set_ariaKeyShortcuts = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaKeyShortcuts_khicw7$', function ($receiver, value) {
    $receiver['aria-keyshortcuts'] = value;
  });
  var get_ariaLabel = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLabel_jwhqjp$', function ($receiver) {
    return $receiver['aria-label'];
  });
  var set_ariaLabel = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLabel_khicw7$', function ($receiver, value) {
    $receiver['aria-label'] = value;
  });
  var get_ariaLabelledBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLabelledBy_jwhqjp$', function ($receiver) {
    return $receiver['aria-labelledby'];
  });
  var set_ariaLabelledBy = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLabelledBy_khicw7$', function ($receiver, value) {
    $receiver['aria-labelledby'] = value;
  });
  var get_ariaLevel = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLevel_jwhqjp$', function ($receiver) {
    return $receiver['aria-level'];
  });
  var set_ariaLevel = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLevel_l0htmh$', function ($receiver, value) {
    $receiver['aria-level'] = value;
  });
  var get_ariaLive = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaLive_jwhqjp$', function ($receiver) {
    return $receiver['aria-live'];
  });
  var set_ariaLive = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaLive_qrgxga$', function ($receiver, value) {
    $receiver['aria-live'] = value;
  });
  var get_ariaModal = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaModal_jwhqjp$', function ($receiver) {
    return $receiver['aria-modal'];
  });
  var set_ariaModal = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaModal_yn11c0$', function ($receiver, value) {
    $receiver['aria-modal'] = value;
  });
  var get_ariaMultiline = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaMultiline_jwhqjp$', function ($receiver) {
    return $receiver['aria-multiline'];
  });
  var set_ariaMultiline = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaMultiline_yn11c0$', function ($receiver, value) {
    $receiver['aria-multiline'] = value;
  });
  var get_ariaMultiSelectable = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaMultiSelectable_jwhqjp$', function ($receiver) {
    return $receiver['aria-multiselectable'];
  });
  var set_ariaMultiSelectable = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaMultiSelectable_yn11c0$', function ($receiver, value) {
    $receiver['aria-multiselectable'] = value;
  });
  var get_ariaOrientation = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaOrientation_jwhqjp$', function ($receiver) {
    return $receiver['aria-orientation'];
  });
  var set_ariaOrientation = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaOrientation_re6d0e$', function ($receiver, value) {
    $receiver['aria-orientation'] = value;
  });
  var get_ariaOwns = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaOwns_jwhqjp$', function ($receiver) {
    return $receiver['aria-owns'];
  });
  var set_ariaOwns = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaOwns_khicw7$', function ($receiver, value) {
    $receiver['aria-owns'] = value;
  });
  var get_ariaPlaceholder = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaPlaceholder_jwhqjp$', function ($receiver) {
    return $receiver['aria-placeholder'];
  });
  var set_ariaPlaceholder = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaPlaceholder_khicw7$', function ($receiver, value) {
    $receiver['aria-placeholder'] = value;
  });
  var get_ariaPosInSet = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaPosInSet_jwhqjp$', function ($receiver) {
    return $receiver['aria-posinset'];
  });
  var set_ariaPosInSet = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaPosInSet_l0htmh$', function ($receiver, value) {
    $receiver['aria-posinset'] = value;
  });
  var get_ariaPressed = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaPressed_jwhqjp$', function ($receiver) {
    return $receiver['aria-pressed'];
  });
  var set_ariaPressed = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaPressed_vu2rkc$', function ($receiver, value) {
    $receiver['aria-pressed'] = value;
  });
  var get_ariaReadOnly = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaReadOnly_jwhqjp$', function ($receiver) {
    return $receiver['aria-readonly'];
  });
  var set_ariaReadOnly = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaReadOnly_yn11c0$', function ($receiver, value) {
    $receiver['aria-readonly'] = value;
  });
  var get_ariaRelevant = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRelevant_jwhqjp$', function ($receiver) {
    return $receiver['aria-relevant'];
  });
  var set_ariaRelevant = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRelevant_jj6h3f$', function ($receiver, value) {
    $receiver['aria-relevant'] = value;
  });
  var get_ariaRequired = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRequired_jwhqjp$', function ($receiver) {
    return $receiver['aria-required'];
  });
  var set_ariaRequired = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRequired_yn11c0$', function ($receiver, value) {
    $receiver['aria-required'] = value;
  });
  var get_ariaRoleDescription = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRoleDescription_jwhqjp$', function ($receiver) {
    return $receiver['aria-roledescription'];
  });
  var set_ariaRoleDescription = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRoleDescription_khicw7$', function ($receiver, value) {
    $receiver['aria-roledescription'] = value;
  });
  var get_ariaRowCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRowCount_jwhqjp$', function ($receiver) {
    return $receiver['aria-rowcount'];
  });
  var set_ariaRowCount = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRowCount_l0htmh$', function ($receiver, value) {
    $receiver['aria-rowcount'] = value;
  });
  var get_ariaRowIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRowIndex_jwhqjp$', function ($receiver) {
    return $receiver['aria-rowindex'];
  });
  var set_ariaRowIndex = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRowIndex_l0htmh$', function ($receiver, value) {
    $receiver['aria-rowindex'] = value;
  });
  var get_ariaRowSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaRowSpan_jwhqjp$', function ($receiver) {
    return $receiver['aria-rowspan'];
  });
  var set_ariaRowSpan = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaRowSpan_l0htmh$', function ($receiver, value) {
    $receiver['aria-rowspan'] = value;
  });
  var get_ariaSelected = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaSelected_jwhqjp$', function ($receiver) {
    return $receiver['aria-selected'];
  });
  var set_ariaSelected = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaSelected_yn11c0$', function ($receiver, value) {
    $receiver['aria-selected'] = value;
  });
  var get_ariaSetSize = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaSetSize_jwhqjp$', function ($receiver) {
    return $receiver['aria-setsize'];
  });
  var set_ariaSetSize = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaSetSize_l0htmh$', function ($receiver, value) {
    $receiver['aria-setsize'] = value;
  });
  var get_ariaSort = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaSort_jwhqjp$', function ($receiver) {
    return $receiver['aria-sort'];
  });
  var set_ariaSort = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaSort_qrliq4$', function ($receiver, value) {
    $receiver['aria-sort'] = value;
  });
  var get_ariaValueMax = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueMax_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuemax'];
  });
  var set_ariaValueMax = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueMax_rnvw1z$', function ($receiver, value) {
    $receiver['aria-valuemax'] = value;
  });
  var get_ariaValueMin = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueMin_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuemin'];
  });
  var set_ariaValueMin = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueMin_rnvw1z$', function ($receiver, value) {
    $receiver['aria-valuemin'] = value;
  });
  var get_ariaValueNow = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueNow_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuenow'];
  });
  var set_ariaValueNow = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueNow_rnvw1z$', function ($receiver, value) {
    $receiver['aria-valuenow'] = value;
  });
  var get_ariaValueText = defineInlineFunction('kotlin-react-dom.react.dom.aria.get_ariaValueText_jwhqjp$', function ($receiver) {
    return $receiver['aria-valuetext'];
  });
  var set_ariaValueText = defineInlineFunction('kotlin-react-dom.react.dom.aria.set_ariaValueText_khicw7$', function ($receiver, value) {
    $receiver['aria-valuetext'] = value;
  });
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  Object.defineProperty(ReactHTML.prototype, 'a', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_a', function () {
      return 'a';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'abbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_abbr', function () {
      return 'abbr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'address', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_address', function () {
      return 'address';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'area', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_area', function () {
      return 'area';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'article', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_article', function () {
      return 'article';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'aside', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_aside', function () {
      return 'aside';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'audio', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_audio', function () {
      return 'audio';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'b', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_b', function () {
      return 'b';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'base', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_base', function () {
      return 'base';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'bdi', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_bdi', function () {
      return 'bdi';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'bdo', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_bdo', function () {
      return 'bdo';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'big', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_big', function () {
      return 'big';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'blockquote', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_blockquote', function () {
      return 'blockquote';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'body', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_body', function () {
      return 'body';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'br', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_br', function () {
      return 'br';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'button', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_button', function () {
      return 'button';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'canvas', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_canvas', function () {
      return 'canvas';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'caption', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_caption', function () {
      return 'caption';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'cite', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_cite', function () {
      return 'cite';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'code', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_code', function () {
      return 'code';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'col', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_col', function () {
      return 'col';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'colgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_colgroup', function () {
      return 'colgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'data', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_data', function () {
      return 'data';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'datalist', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_datalist', function () {
      return 'datalist';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dd', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dd', function () {
      return 'dd';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'del', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_del', function () {
      return 'del';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'details', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_details', function () {
      return 'details';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dfn', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dfn', function () {
      return 'dfn';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dialog', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dialog', function () {
      return 'dialog';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'div', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_div', function () {
      return 'div';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dl', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dl', function () {
      return 'dl';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dt', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_dt', function () {
      return 'dt';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'em', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_em', function () {
      return 'em';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'embed', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_embed', function () {
      return 'embed';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'fieldset', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_fieldset', function () {
      return 'fieldset';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'figcaption', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_figcaption', function () {
      return 'figcaption';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'figure', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_figure', function () {
      return 'figure';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'footer', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_footer', function () {
      return 'footer';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'form', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_form', function () {
      return 'form';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h1', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h1', function () {
      return 'h1';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h2', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h2', function () {
      return 'h2';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h3', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h3', function () {
      return 'h3';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h4', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h4', function () {
      return 'h4';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h5', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h5', function () {
      return 'h5';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h6', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_h6', function () {
      return 'h6';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'head', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_head', function () {
      return 'head';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'header', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_header', function () {
      return 'header';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'hgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_hgroup', function () {
      return 'hgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'hr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_hr', function () {
      return 'hr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'html', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_html', function () {
      return 'html';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'i', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_i', function () {
      return 'i';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'iframe', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_iframe', function () {
      return 'iframe';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'img', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_img', function () {
      return 'img';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'input', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_input', function () {
      return 'input';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ins', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ins', function () {
      return 'ins';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'kbd', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_kbd', function () {
      return 'kbd';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'keygen', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_keygen', function () {
      return 'keygen';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'label', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_label', function () {
      return 'label';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'legend', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_legend', function () {
      return 'legend';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'li', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_li', function () {
      return 'li';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'link', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_link', function () {
      return 'link';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'main', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_main', function () {
      return 'main';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'map', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_map', function () {
      return 'map';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'mark', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_mark', function () {
      return 'mark';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'menu', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_menu', function () {
      return 'menu';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'menuitem', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_menuitem', function () {
      return 'menuitem';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'meta', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_meta', function () {
      return 'meta';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'meter', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_meter', function () {
      return 'meter';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'nav', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_nav', function () {
      return 'nav';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'noscript', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_noscript', function () {
      return 'noscript';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'object', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_object', function () {
      return 'object';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ol', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ol', function () {
      return 'ol';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'optgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_optgroup', function () {
      return 'optgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'option', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_option', function () {
      return 'option';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'output', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_output', function () {
      return 'output';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'p', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_p', function () {
      return 'p';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'param', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_param', function () {
      return 'param';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'picture', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_picture', function () {
      return 'picture';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'pre', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_pre', function () {
      return 'pre';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'progress', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_progress', function () {
      return 'progress';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'q', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_q', function () {
      return 'q';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'rp', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_rp', function () {
      return 'rp';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'rt', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_rt', function () {
      return 'rt';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ruby', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ruby', function () {
      return 'ruby';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 's', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_s', function () {
      return 's';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'samp', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_samp', function () {
      return 'samp';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'slot', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_slot', function () {
      return 'slot';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'script', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_script', function () {
      return 'script';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'section', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_section', function () {
      return 'section';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'select', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_select', function () {
      return 'select';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'small', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_small', function () {
      return 'small';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'source', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_source', function () {
      return 'source';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'span', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_span', function () {
      return 'span';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'strong', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_strong', function () {
      return 'strong';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'style', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_style', function () {
      return 'style';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'sub', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_sub', function () {
      return 'sub';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'summary', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_summary', function () {
      return 'summary';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'sup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_sup', function () {
      return 'sup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'table', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_table', function () {
      return 'table';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'template', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_template', function () {
      return 'template';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tbody', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tbody', function () {
      return 'tbody';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'td', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_td', function () {
      return 'td';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'textarea', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_textarea', function () {
      return 'textarea';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tfoot', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tfoot', function () {
      return 'tfoot';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'th', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_th', function () {
      return 'th';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'thead', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_thead', function () {
      return 'thead';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'time', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_time', function () {
      return 'time';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'title', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_title', function () {
      return 'title';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_tr', function () {
      return 'tr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'track', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_track', function () {
      return 'track';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'u', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_u', function () {
      return 'u';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ul', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_ul', function () {
      return 'ul';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'var', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_var', function () {
      return 'var';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'video', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_video', function () {
      return 'video';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'wbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_wbr', function () {
      return 'wbr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'webview', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.html.ReactHTML.get_webview', function () {
      return 'webview';
    })
  });
  ReactHTML.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactHTML',
    interfaces: []
  };
  var ReactHTML_instance = null;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance === null) {
      new ReactHTML();
    }
    return ReactHTML_instance;
  }
  function ReactSVG() {
    ReactSVG_instance = this;
  }
  Object.defineProperty(ReactSVG.prototype, 'svg', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_svg', function () {
      return 'svg';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'animate', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_animate', function () {
      return 'animate';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'animateMotion', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_animateMotion', function () {
      return 'animateMotion';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'animateTransform', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_animateTransform', function () {
      return 'animateTransform';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'circle', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_circle', function () {
      return 'circle';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'clipPath', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_clipPath', function () {
      return 'clipPath';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'defs', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_defs', function () {
      return 'defs';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'desc', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_desc', function () {
      return 'desc';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'ellipse', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_ellipse', function () {
      return 'ellipse';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feBlend', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feBlend', function () {
      return 'feBlend';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feColorMatrix', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feColorMatrix', function () {
      return 'feColorMatrix';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feComponentTransfer', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feComponentTransfer', function () {
      return 'feComponentTransfer';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feComposite', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feComposite', function () {
      return 'feComposite';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feConvolveMatrix', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feConvolveMatrix', function () {
      return 'feConvolveMatrix';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDiffuseLighting', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDiffuseLighting', function () {
      return 'feDiffuseLighting';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDisplacementMap', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDisplacementMap', function () {
      return 'feDisplacementMap';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDistantLight', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDistantLight', function () {
      return 'feDistantLight';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feDropShadow', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feDropShadow', function () {
      return 'feDropShadow';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFlood', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFlood', function () {
      return 'feFlood';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncA', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncA', function () {
      return 'feFuncA';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncB', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncB', function () {
      return 'feFuncB';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncG', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncG', function () {
      return 'feFuncG';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feFuncR', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feFuncR', function () {
      return 'feFuncR';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feGaussianBlur', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feGaussianBlur', function () {
      return 'feGaussianBlur';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feImage', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feImage', function () {
      return 'feImage';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feMerge', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feMerge', function () {
      return 'feMerge';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feMergeNode', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feMergeNode', function () {
      return 'feMergeNode';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feMorphology', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feMorphology', function () {
      return 'feMorphology';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feOffset', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feOffset', function () {
      return 'feOffset';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'fePointLight', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_fePointLight', function () {
      return 'fePointLight';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feSpecularLighting', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feSpecularLighting', function () {
      return 'feSpecularLighting';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feSpotLight', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feSpotLight', function () {
      return 'feSpotLight';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feTile', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feTile', function () {
      return 'feTile';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'feTurbulence', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_feTurbulence', function () {
      return 'feTurbulence';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'filter', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_filter', function () {
      return 'filter';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'foreignObject', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_foreignObject', function () {
      return 'foreignObject';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'g', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_g', function () {
      return 'g';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'image', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_image', function () {
      return 'image';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'line', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_line', function () {
      return 'line';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'linearGradient', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_linearGradient', function () {
      return 'linearGradient';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'marker', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_marker', function () {
      return 'marker';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'mask', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_mask', function () {
      return 'mask';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'metadata', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_metadata', function () {
      return 'metadata';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'mpath', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_mpath', function () {
      return 'mpath';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'path', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_path', function () {
      return 'path';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'pattern', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_pattern', function () {
      return 'pattern';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'polygon', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_polygon', function () {
      return 'polygon';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'polyline', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_polyline', function () {
      return 'polyline';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'radialGradient', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_radialGradient', function () {
      return 'radialGradient';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'rect', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_rect', function () {
      return 'rect';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'stop', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_stop', function () {
      return 'stop';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'switch', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_switch', function () {
      return 'switch';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'symbol', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_symbol', function () {
      return 'symbol';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'text', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_text', function () {
      return 'text';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'textPath', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_textPath', function () {
      return 'textPath';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'tspan', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_tspan', function () {
      return 'tspan';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'use', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_use', function () {
      return 'use';
    })
  });
  Object.defineProperty(ReactSVG.prototype, 'view', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.svg.ReactSVG.get_view', function () {
      return 'view';
    })
  });
  ReactSVG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactSVG',
    interfaces: []
  };
  var ReactSVG_instance = null;
  function ReactSVG_getInstance() {
    if (ReactSVG_instance === null) {
      new ReactSVG();
    }
    return ReactSVG_instance;
  }
  function FormEncType() {
    FormEncType_instance = this;
    this.applicationFormUrlEncoded = 'application/x-www-form-urlencoded';
    this.multipartFormData = 'multipart/form-data';
    this.textPlain = 'text/plain';
  }
  FormEncType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FormEncType',
    interfaces: []
  };
  var FormEncType_instance = null;
  function FormEncType_getInstance() {
    if (FormEncType_instance === null) {
      new FormEncType();
    }
    return FormEncType_instance;
  }
  function FormMethod() {
    FormMethod_instance = this;
    this.get = 'get';
    this.post = 'post';
  }
  FormMethod.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FormMethod',
    interfaces: []
  };
  var FormMethod_instance = null;
  function FormMethod_getInstance() {
    if (FormMethod_instance === null) {
      new FormMethod();
    }
    return FormMethod_instance;
  }
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.get_onChange_ubhhge$ = get_onChange;
  package$dom.set_onChange_pfklab$ = set_onChange;
  var package$aria = package$dom.aria || (package$dom.aria = {});
  package$aria.get_ariaActiveDescendant_jwhqjp$ = get_ariaActiveDescendant;
  package$aria.set_ariaActiveDescendant_khicw7$ = set_ariaActiveDescendant;
  package$aria.get_ariaAtomic_jwhqjp$ = get_ariaAtomic;
  package$aria.set_ariaAtomic_yn11c0$ = set_ariaAtomic;
  package$aria.get_ariaAutoComplete_jwhqjp$ = get_ariaAutoComplete;
  package$aria.set_ariaAutoComplete_i2msty$ = set_ariaAutoComplete;
  package$aria.get_ariaBusy_jwhqjp$ = get_ariaBusy;
  package$aria.set_ariaBusy_yn11c0$ = set_ariaBusy;
  package$aria.get_ariaChecked_jwhqjp$ = get_ariaChecked;
  package$aria.set_ariaChecked_eamw7b$ = set_ariaChecked;
  package$aria.get_ariaColCount_jwhqjp$ = get_ariaColCount;
  package$aria.set_ariaColCount_l0htmh$ = set_ariaColCount;
  package$aria.get_ariaColIndex_jwhqjp$ = get_ariaColIndex;
  package$aria.set_ariaColIndex_l0htmh$ = set_ariaColIndex;
  package$aria.get_ariaColSpan_jwhqjp$ = get_ariaColSpan;
  package$aria.set_ariaColSpan_l0htmh$ = set_ariaColSpan;
  package$aria.get_ariaControls_jwhqjp$ = get_ariaControls;
  package$aria.set_ariaControls_khicw7$ = set_ariaControls;
  package$aria.get_ariaCurrent_jwhqjp$ = get_ariaCurrent;
  package$aria.set_ariaCurrent_7xn0s5$ = set_ariaCurrent;
  package$aria.get_ariaDescribedBy_jwhqjp$ = get_ariaDescribedBy;
  package$aria.set_ariaDescribedBy_khicw7$ = set_ariaDescribedBy;
  package$aria.get_ariaDetails_jwhqjp$ = get_ariaDetails;
  package$aria.set_ariaDetails_khicw7$ = set_ariaDetails;
  package$aria.get_ariaDisabled_jwhqjp$ = get_ariaDisabled;
  package$aria.set_ariaDisabled_yn11c0$ = set_ariaDisabled;
  package$aria.get_ariaDropEffect_jwhqjp$ = get_ariaDropEffect;
  package$aria.set_ariaDropEffect_sfm5rm$ = set_ariaDropEffect;
  package$aria.get_ariaErrorMessage_jwhqjp$ = get_ariaErrorMessage;
  package$aria.set_ariaErrorMessage_khicw7$ = set_ariaErrorMessage;
  package$aria.get_ariaExpanded_jwhqjp$ = get_ariaExpanded;
  package$aria.set_ariaExpanded_yn11c0$ = set_ariaExpanded;
  package$aria.get_ariaFlowTo_jwhqjp$ = get_ariaFlowTo;
  package$aria.set_ariaFlowTo_khicw7$ = set_ariaFlowTo;
  package$aria.get_ariaGrabbed_jwhqjp$ = get_ariaGrabbed;
  package$aria.set_ariaGrabbed_yn11c0$ = set_ariaGrabbed;
  package$aria.get_ariaHasPopup_jwhqjp$ = get_ariaHasPopup;
  package$aria.set_ariaHasPopup_uqke5c$ = set_ariaHasPopup;
  package$aria.get_ariaHidden_jwhqjp$ = get_ariaHidden;
  package$aria.set_ariaHidden_yn11c0$ = set_ariaHidden;
  package$aria.get_ariaInvalid_jwhqjp$ = get_ariaInvalid;
  package$aria.set_ariaInvalid_5u7qh5$ = set_ariaInvalid;
  package$aria.get_ariaKeyShortcuts_jwhqjp$ = get_ariaKeyShortcuts;
  package$aria.set_ariaKeyShortcuts_khicw7$ = set_ariaKeyShortcuts;
  package$aria.get_ariaLabel_jwhqjp$ = get_ariaLabel;
  package$aria.set_ariaLabel_khicw7$ = set_ariaLabel;
  package$aria.get_ariaLabelledBy_jwhqjp$ = get_ariaLabelledBy;
  package$aria.set_ariaLabelledBy_khicw7$ = set_ariaLabelledBy;
  package$aria.get_ariaLevel_jwhqjp$ = get_ariaLevel;
  package$aria.set_ariaLevel_l0htmh$ = set_ariaLevel;
  package$aria.get_ariaLive_jwhqjp$ = get_ariaLive;
  package$aria.set_ariaLive_qrgxga$ = set_ariaLive;
  package$aria.get_ariaModal_jwhqjp$ = get_ariaModal;
  package$aria.set_ariaModal_yn11c0$ = set_ariaModal;
  package$aria.get_ariaMultiline_jwhqjp$ = get_ariaMultiline;
  package$aria.set_ariaMultiline_yn11c0$ = set_ariaMultiline;
  package$aria.get_ariaMultiSelectable_jwhqjp$ = get_ariaMultiSelectable;
  package$aria.set_ariaMultiSelectable_yn11c0$ = set_ariaMultiSelectable;
  package$aria.get_ariaOrientation_jwhqjp$ = get_ariaOrientation;
  package$aria.set_ariaOrientation_re6d0e$ = set_ariaOrientation;
  package$aria.get_ariaOwns_jwhqjp$ = get_ariaOwns;
  package$aria.set_ariaOwns_khicw7$ = set_ariaOwns;
  package$aria.get_ariaPlaceholder_jwhqjp$ = get_ariaPlaceholder;
  package$aria.set_ariaPlaceholder_khicw7$ = set_ariaPlaceholder;
  package$aria.get_ariaPosInSet_jwhqjp$ = get_ariaPosInSet;
  package$aria.set_ariaPosInSet_l0htmh$ = set_ariaPosInSet;
  package$aria.get_ariaPressed_jwhqjp$ = get_ariaPressed;
  package$aria.set_ariaPressed_vu2rkc$ = set_ariaPressed;
  package$aria.get_ariaReadOnly_jwhqjp$ = get_ariaReadOnly;
  package$aria.set_ariaReadOnly_yn11c0$ = set_ariaReadOnly;
  package$aria.get_ariaRelevant_jwhqjp$ = get_ariaRelevant;
  package$aria.set_ariaRelevant_jj6h3f$ = set_ariaRelevant;
  package$aria.get_ariaRequired_jwhqjp$ = get_ariaRequired;
  package$aria.set_ariaRequired_yn11c0$ = set_ariaRequired;
  package$aria.get_ariaRoleDescription_jwhqjp$ = get_ariaRoleDescription;
  package$aria.set_ariaRoleDescription_khicw7$ = set_ariaRoleDescription;
  package$aria.get_ariaRowCount_jwhqjp$ = get_ariaRowCount;
  package$aria.set_ariaRowCount_l0htmh$ = set_ariaRowCount;
  package$aria.get_ariaRowIndex_jwhqjp$ = get_ariaRowIndex;
  package$aria.set_ariaRowIndex_l0htmh$ = set_ariaRowIndex;
  package$aria.get_ariaRowSpan_jwhqjp$ = get_ariaRowSpan;
  package$aria.set_ariaRowSpan_l0htmh$ = set_ariaRowSpan;
  package$aria.get_ariaSelected_jwhqjp$ = get_ariaSelected;
  package$aria.set_ariaSelected_yn11c0$ = set_ariaSelected;
  package$aria.get_ariaSetSize_jwhqjp$ = get_ariaSetSize;
  package$aria.set_ariaSetSize_l0htmh$ = set_ariaSetSize;
  package$aria.get_ariaSort_jwhqjp$ = get_ariaSort;
  package$aria.set_ariaSort_qrliq4$ = set_ariaSort;
  package$aria.get_ariaValueMax_jwhqjp$ = get_ariaValueMax;
  package$aria.set_ariaValueMax_rnvw1z$ = set_ariaValueMax;
  package$aria.get_ariaValueMin_jwhqjp$ = get_ariaValueMin;
  package$aria.set_ariaValueMin_rnvw1z$ = set_ariaValueMin;
  package$aria.get_ariaValueNow_jwhqjp$ = get_ariaValueNow;
  package$aria.set_ariaValueNow_rnvw1z$ = set_ariaValueNow;
  package$aria.get_ariaValueText_jwhqjp$ = get_ariaValueText;
  package$aria.set_ariaValueText_khicw7$ = set_ariaValueText;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  var package$html = package$dom.html || (package$dom.html = {});
  Object.defineProperty(package$html, 'ReactHTML', {
    get: ReactHTML_getInstance
  });
  var package$svg = package$dom.svg || (package$dom.svg = {});
  Object.defineProperty(package$svg, 'ReactSVG', {
    get: ReactSVG_getInstance
  });
  Object.defineProperty(package$html, 'FormEncType', {
    get: FormEncType_getInstance
  });
  Object.defineProperty(package$html, 'FormMethod', {
    get: FormMethod_getInstance
  });
  Kotlin.defineModule('kotlin-react-dom', _);
  return _;
}));
