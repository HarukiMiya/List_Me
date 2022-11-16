(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-csstype'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-csstype'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-csstype'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-csstype'.");
    }
    root['kotlin-csstype'] = factory(typeof this['kotlin-csstype'] === 'undefined' ? {} : this['kotlin-csstype'], kotlin, this['kotlin-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function AdvancedPseudosRuleBuilder() {
  }
  AdvancedPseudosRuleBuilder.prototype.cue_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.cue_di08o2$', function (selector, block) {
    var $receiver = '::cue(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.cue_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.cue_3dp6ds$', function (selector, block) {
    var $receiver = '::cue(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.cueRegion_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.cueRegion_di08o2$', function (selector, block) {
    var $receiver = '::cue-region(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.cueRegion_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.cueRegion_3dp6ds$', function (selector, block) {
    var $receiver = '::cue-region(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.part_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.part_di08o2$', function (selector, block) {
    var $receiver = '::part(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.part_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.part_3dp6ds$', function (selector, block) {
    var $receiver = '::part(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.slotted_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.slotted_di08o2$', function (selector, block) {
    var $receiver = '::slotted(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.slotted_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.slotted_3dp6ds$', function (selector, block) {
    var $receiver = '::slotted(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.dir_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.dir_di08o2$', function (selector, block) {
    var $receiver = ':dir(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.dir_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.dir_3dp6ds$', function (selector, block) {
    var $receiver = ':dir(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.has_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.has_di08o2$', function (selector, block) {
    var $receiver = ':has(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.has_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.has_3dp6ds$', function (selector, block) {
    var $receiver = ':has(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.host_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.host_di08o2$', function (selector, block) {
    var $receiver = ':host(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.host_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.host_3dp6ds$', function (selector, block) {
    var $receiver = ':host(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.hostContext_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.hostContext_di08o2$', function (selector, block) {
    var $receiver = ':host-context(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.hostContext_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.hostContext_3dp6ds$', function (selector, block) {
    var $receiver = ':host-context(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.is_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.is_di08o2$', function (selector, block) {
    var $receiver = ':is(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.is_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.is_3dp6ds$', function (selector, block) {
    var $receiver = ':is(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.lang_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.lang_di08o2$', function (selector, block) {
    var $receiver = ':lang(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.lang_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.lang_3dp6ds$', function (selector, block) {
    var $receiver = ':lang(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.not_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.not_di08o2$', function (selector, block) {
    var $receiver = ':not(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.not_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.not_3dp6ds$', function (selector, block) {
    var $receiver = ':not(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthChild_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthChild_di08o2$', function (selector, block) {
    var $receiver = ':nth-child(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthChild_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthChild_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-child(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthLastChild_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthLastChild_di08o2$', function (selector, block) {
    var $receiver = ':nth-last-child(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthLastChild_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthLastChild_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-last-child(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthLastOfType_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthLastOfType_di08o2$', function (selector, block) {
    var $receiver = ':nth-last-of-type(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthLastOfType_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-last-of-type(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthOfType_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthOfType_di08o2$', function (selector, block) {
    var $receiver = ':nth-of-type(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.nthOfType_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.nthOfType_3dp6ds$', function (selector, block) {
    var $receiver = ':nth-of-type(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.where_di08o2$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.where_di08o2$', function (selector, block) {
    var $receiver = ':where(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.prototype.where_3dp6ds$ = defineInlineFunction('kotlin-csstype.csstype.AdvancedPseudosRuleBuilder.where_3dp6ds$', function (selector, block) {
    var $receiver = ':where(' + selector + ')';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  AdvancedPseudosRuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AdvancedPseudosRuleBuilder',
    interfaces: [RuleBuilder]
  };
  var get_deg = defineInlineFunction('kotlin-csstype.csstype.get_deg_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'deg';
  });
  var get_rad = defineInlineFunction('kotlin-csstype.csstype.get_rad_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'rad';
  });
  var get_grad = defineInlineFunction('kotlin-csstype.csstype.get_grad_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'grad';
  });
  var get_turn = defineInlineFunction('kotlin-csstype.csstype.get_turn_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'turn';
  });
  var stop = defineInlineFunction('kotlin-csstype.csstype.stop_e7h89k$', function (color, value) {
    return color.toString() + ' ' + value;
  });
  var stop_0 = defineInlineFunction('kotlin-csstype.csstype.stop_al1dvi$', function (color, from, to) {
    return color.toString() + ' ' + from + ' ' + to;
  });
  var Border = defineInlineFunction('kotlin-csstype.csstype.Border_iqydjd$', function (width, style) {
    return width.toString() + ' ' + style;
  });
  var Border_0 = defineInlineFunction('kotlin-csstype.csstype.Border_3d6msd$', function (width, style, color) {
    return width.toString() + ' ' + style + ' ' + color;
  });
  var BoxShadow = defineInlineFunction('kotlin-csstype.csstype.BoxShadow_5yfhwy$', function (offsetX, offsetY, color) {
    return offsetX.toString() + ' ' + offsetY + ' ' + color;
  });
  var BoxShadow_0 = defineInlineFunction('kotlin-csstype.csstype.BoxShadow_7li1st$', function (offsetX, offsetY, blurRadius, color) {
    return offsetX.toString() + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
  });
  var BoxShadow_1 = defineInlineFunction('kotlin-csstype.csstype.BoxShadow_h3gmi6$', function (offsetX, offsetY, blurRadius, spreadRadius, color) {
    return offsetX.toString() + ' ' + offsetY + ' ' + blurRadius + ' ' + spreadRadius + ' ' + color;
  });
  var BoxShadow_2 = defineInlineFunction('kotlin-csstype.csstype.BoxShadow_m9lanr$', function (inset, offsetX, offsetY, color) {
    return inset.toString() + ' ' + offsetX + ' ' + offsetY + ' ' + color;
  });
  var BoxShadow_3 = defineInlineFunction('kotlin-csstype.csstype.BoxShadow_8jq0yu$', function (inset, offsetX, offsetY, blurRadius, color) {
    return inset.toString() + ' ' + offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
  });
  var BoxShadow_4 = defineInlineFunction('kotlin-csstype.csstype.BoxShadow_z76sdl$', function (inset, offsetX, offsetY, blurRadius, spreadRadius, color) {
    return inset.toString() + ' ' + offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + spreadRadius + ' ' + color;
  });
  var ClassName = defineInlineFunction('kotlin-csstype.csstype.ClassName_61zpoe$', function (value) {
    return value;
  });
  var Color = defineInlineFunction('kotlin-csstype.csstype.Color_61zpoe$', function (value) {
    return value;
  });
  var rgb = defineInlineFunction('kotlin-csstype.csstype.rgb_qt1dr2$', function (red, green, blue) {
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  });
  var rgba = defineInlineFunction('kotlin-csstype.csstype.rgba_gb4hak$', function (red, green, blue, alpha) {
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  });
  var blur = defineInlineFunction('kotlin-csstype.csstype.blur_3p81yu$', function (value) {
    return 'blur(' + value.toString() + ')';
  });
  var blur_0 = defineInlineFunction('kotlin-csstype.csstype.blur_gtm6y1$', function (value) {
    return 'blur(' + value + ')';
  });
  var brightness = defineInlineFunction('kotlin-csstype.csstype.brightness_3p81yu$', function (value) {
    return 'brightness(' + value.toString() + ')';
  });
  var brightness_0 = defineInlineFunction('kotlin-csstype.csstype.brightness_vlilcb$', function (value) {
    return 'brightness(' + value + ')';
  });
  var contrast = defineInlineFunction('kotlin-csstype.csstype.contrast_3p81yu$', function (value) {
    return 'contrast(' + value.toString() + ')';
  });
  var contrast_0 = defineInlineFunction('kotlin-csstype.csstype.contrast_vlilcb$', function (value) {
    return 'contrast(' + value + ')';
  });
  var dropShadow = defineInlineFunction('kotlin-csstype.csstype.dropShadow_74z8hg$', function (offsetX, offsetY) {
    return 'drop-shadow(' + offsetX + ' ' + offsetY + ')';
  });
  var dropShadow_0 = defineInlineFunction('kotlin-csstype.csstype.dropShadow_oc1yrt$', function (offsetX, offsetY, blurRadius) {
    return 'drop-shadow(' + offsetX + ' ' + offsetY + ' ' + blurRadius + ')';
  });
  var dropShadow_1 = defineInlineFunction('kotlin-csstype.csstype.dropShadow_7li1st$', function (offsetX, offsetY, blurRadius, color) {
    return 'drop-shadow(' + offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color + ')';
  });
  var grayscale = defineInlineFunction('kotlin-csstype.csstype.grayscale_3p81yu$', function (value) {
    return 'grayscale(' + value.toString() + ')';
  });
  var grayscale_0 = defineInlineFunction('kotlin-csstype.csstype.grayscale_vlilcb$', function (value) {
    return 'grayscale(' + value + ')';
  });
  var hueRotate = defineInlineFunction('kotlin-csstype.csstype.hueRotate_3p81yu$', function (value) {
    return 'hue-rotate(' + value.toString() + ')';
  });
  var hueRotate_0 = defineInlineFunction('kotlin-csstype.csstype.hueRotate_pffem$', function (value) {
    return 'hue-rotate(' + value + ')';
  });
  var invert = defineInlineFunction('kotlin-csstype.csstype.invert_3p81yu$', function (value) {
    return 'invert(' + value.toString() + ')';
  });
  var invert_0 = defineInlineFunction('kotlin-csstype.csstype.invert_vlilcb$', function (value) {
    return 'invert(' + value + ')';
  });
  var opacity = defineInlineFunction('kotlin-csstype.csstype.opacity_3p81yu$', function (value) {
    return 'opacity(' + value.toString() + ')';
  });
  var opacity_0 = defineInlineFunction('kotlin-csstype.csstype.opacity_vlilcb$', function (value) {
    return 'opacity(' + value + ')';
  });
  var saturate = defineInlineFunction('kotlin-csstype.csstype.saturate_3p81yu$', function (value) {
    return 'saturate(' + value.toString() + ')';
  });
  var saturate_0 = defineInlineFunction('kotlin-csstype.csstype.saturate_vlilcb$', function (value) {
    return 'saturate(' + value + ')';
  });
  var sepia = defineInlineFunction('kotlin-csstype.csstype.sepia_3p81yu$', function (value) {
    return 'sepia(' + value.toString() + ')';
  });
  var sepia_0 = defineInlineFunction('kotlin-csstype.csstype.sepia_vlilcb$', function (value) {
    return 'sepia(' + value + ')';
  });
  var Flex = defineInlineFunction('kotlin-csstype.csstype.Flex_gpu9uj$', function (grow, basis) {
    return grow.toString() + ' ' + basis;
  });
  var Flex_0 = defineInlineFunction('kotlin-csstype.csstype.Flex_cvolmm$', function (grow, shrink) {
    return grow.toString() + ' ' + shrink;
  });
  var Flex_1 = defineInlineFunction('kotlin-csstype.csstype.Flex_ty7qba$', function (grow, shrink, basis) {
    return grow.toString() + ' ' + shrink + ' ' + basis;
  });
  var linearGradient = defineInlineFunction('kotlin-csstype.csstype.linearGradient_fsqlv8$', function (stops) {
    return 'linear-gradient(' + stops + ')';
  });
  var linearGradient_0 = defineInlineFunction('kotlin-csstype.csstype.linearGradient_ap9qgm$', function (angle, stops) {
    return 'linear-gradient(' + angle + ',' + stops + ')';
  });
  var repeatingLinearGradient = defineInlineFunction('kotlin-csstype.csstype.repeatingLinearGradient_fsqlv8$', function (stops) {
    return 'repeating-linear-gradient(' + stops + ')';
  });
  var repeatingLinearGradient_0 = defineInlineFunction('kotlin-csstype.csstype.repeatingLinearGradient_ap9qgm$', function (angle, stops) {
    return 'repeating-linear-gradient(' + angle + ',' + stops + ')';
  });
  var fitContent = defineInlineFunction('kotlin-csstype.csstype.fitContent_gtm6y1$', function (value) {
    return 'fit-content(' + value + ')';
  });
  var minmax = defineInlineFunction('kotlin-csstype.csstype.minmax_uxkyhg$', function (min, max) {
    return 'minmax(' + min + ',' + max + ')';
  });
  var repeat = defineInlineFunction('kotlin-csstype.csstype.repeat_qtq3gd$', function (times, value) {
    return 'repeat(' + times + ',' + value + ')';
  });
  var repeat_0 = defineInlineFunction('kotlin-csstype.csstype.repeat_cs0tka$', function (repeat, value) {
    return 'repeat(' + repeat + ',' + value + ')';
  });
  var get_fr = defineInlineFunction('kotlin-csstype.csstype.get_fr_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'fr';
  });
  var ident = defineInlineFunction('kotlin-csstype.csstype.ident_61zpoe$', function (value) {
    return value;
  });
  var Inset = defineInlineFunction('kotlin-csstype.csstype.Inset_cd43o4$', function (vertical, horizontal) {
    return vertical.toString() + ' ' + horizontal;
  });
  var Inset_0 = defineInlineFunction('kotlin-csstype.csstype.Inset_vqvp2e$', function (top, horizontal, bottom) {
    return top.toString() + ' ' + horizontal + ' ' + bottom;
  });
  var Inset_1 = defineInlineFunction('kotlin-csstype.csstype.Inset_lt5830$', function (top, right, bottom, left) {
    return top.toString() + ' ' + right + ' ' + bottom + ' ' + left;
  });
  var integer = defineInlineFunction('kotlin-csstype.csstype.integer_za3lpa$', function (value) {
    return value;
  });
  var get_ch = defineInlineFunction('kotlin-csstype.csstype.get_ch_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'ch';
  });
  var get_em = defineInlineFunction('kotlin-csstype.csstype.get_em_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'em';
  });
  var get_ex = defineInlineFunction('kotlin-csstype.csstype.get_ex_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'ex';
  });
  var get_rem = defineInlineFunction('kotlin-csstype.csstype.get_rem_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'rem';
  });
  var get_vh = defineInlineFunction('kotlin-csstype.csstype.get_vh_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vh';
  });
  var get_vw = defineInlineFunction('kotlin-csstype.csstype.get_vw_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vw';
  });
  var get_vmin = defineInlineFunction('kotlin-csstype.csstype.get_vmin_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vmin';
  });
  var get_vmax = defineInlineFunction('kotlin-csstype.csstype.get_vmax_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'vmax';
  });
  var get_px = defineInlineFunction('kotlin-csstype.csstype.get_px_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'px';
  });
  var get_cm = defineInlineFunction('kotlin-csstype.csstype.get_cm_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'cm';
  });
  var get_mm = defineInlineFunction('kotlin-csstype.csstype.get_mm_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'mm';
  });
  var get_in = defineInlineFunction('kotlin-csstype.csstype.get_in_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'in';
  });
  var get_pc = defineInlineFunction('kotlin-csstype.csstype.get_pc_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'pc';
  });
  var get_pt = defineInlineFunction('kotlin-csstype.csstype.get_pt_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'pt';
  });
  var unaryMinus = defineInlineFunction('kotlin-csstype.csstype.unaryMinus_oablfs$', function ($receiver) {
    return '-' + $receiver;
  });
  var plus = defineInlineFunction('kotlin-csstype.csstype.plus_3df375$', function ($receiver, other) {
    return 'calc(' + $receiver + ' + ' + other + ')';
  });
  var minus = defineInlineFunction('kotlin-csstype.csstype.minus_3df375$', function ($receiver, other) {
    return 'calc(' + $receiver + ' - ' + other + ')';
  });
  var times = defineInlineFunction('kotlin-csstype.csstype.times_tzejxs$', function ($receiver, other) {
    return 'calc(' + $receiver.toString() + ' * ' + other + ')';
  });
  var div = defineInlineFunction('kotlin-csstype.csstype.div_u8gwjm$', function ($receiver, other) {
    return 'calc(' + $receiver + ' / ' + other.toString() + ')';
  });
  var stop_1 = defineInlineFunction('kotlin-csstype.csstype.stop_96hpqn$', function (color, value) {
    return color.toString() + ' ' + value;
  });
  var stop_2 = defineInlineFunction('kotlin-csstype.csstype.stop_ig7ojy$', function (color, from, to) {
    return color.toString() + ' ' + from + ' ' + to;
  });
  var Margin = defineInlineFunction('kotlin-csstype.csstype.Margin_cd43o4$', function (vertical, horizontal) {
    return vertical.toString() + ' ' + horizontal;
  });
  var Margin_0 = defineInlineFunction('kotlin-csstype.csstype.Margin_vqvp2e$', function (top, horizontal, bottom) {
    return top.toString() + ' ' + horizontal + ' ' + bottom;
  });
  var Margin_1 = defineInlineFunction('kotlin-csstype.csstype.Margin_lt5830$', function (top, right, bottom, left) {
    return top.toString() + ' ' + right + ' ' + bottom + ' ' + left;
  });
  var clamp = defineInlineFunction('kotlin-csstype.csstype.clamp_oc1yrt$', function (min, value, max) {
    return 'clamp(' + min + ',' + value + ',' + max + ')';
  });
  var max = defineInlineFunction('kotlin-csstype.csstype.max_tiucce$', function (values) {
    return 'max(' + values + ')';
  });
  var min = defineInlineFunction('kotlin-csstype.csstype.min_tiucce$', function (values) {
    return 'min(' + values + ')';
  });
  var number = defineInlineFunction('kotlin-csstype.csstype.number_14dthe$', function (value) {
    return value;
  });
  var Outline = defineInlineFunction('kotlin-csstype.csstype.Outline_iqydjd$', function (width, style) {
    return width.toString() + ' ' + style;
  });
  var Outline_0 = defineInlineFunction('kotlin-csstype.csstype.Outline_3d6msd$', function (width, style, color) {
    return width.toString() + ' ' + style + ' ' + color;
  });
  var Padding = defineInlineFunction('kotlin-csstype.csstype.Padding_74z8hg$', function (vertical, horizontal) {
    return vertical.toString() + ' ' + horizontal;
  });
  var Padding_0 = defineInlineFunction('kotlin-csstype.csstype.Padding_oc1yrt$', function (top, horizontal, bottom) {
    return top.toString() + ' ' + horizontal + ' ' + bottom;
  });
  var Padding_1 = defineInlineFunction('kotlin-csstype.csstype.Padding_qj55nw$', function (top, right, bottom, left) {
    return top.toString() + ' ' + right + ' ' + bottom + ' ' + left;
  });
  var get_pct = defineInlineFunction('kotlin-csstype.csstype.get_pct_rcaex3$', function ($receiver) {
    return $receiver.toString() + '%';
  });
  function PseudosRuleBuilder() {
  }
  PseudosRuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PseudosRuleBuilder',
    interfaces: [SimplePseudosRuleBuilder, AdvancedPseudosRuleBuilder]
  };
  var attr = defineInlineFunction('kotlin-csstype.csstype.attr_61zpoe$', function (name) {
    return 'attr(' + name + ')';
  });
  var env = defineInlineFunction('kotlin-csstype.csstype.env_dfle7a$', function (id) {
    return 'env(' + id + ')';
  });
  var env_0 = defineInlineFunction('kotlin-csstype.csstype.env_pxgti8$', function (id, fallback) {
    return 'env(' + id + ',' + fallback + ')';
  });
  var url = defineInlineFunction('kotlin-csstype.csstype.url_61zpoe$', function (value) {
    return 'url(' + value + ')';
  });
  function RuleBuilder() {
  }
  RuleBuilder.prototype.fontFace_yquot6$ = defineInlineFunction('kotlin-csstype.csstype.RuleBuilder.fontFace_yquot6$', function (block) {
    var tmp$ = '@font-face';
    var $receiver = {};
    block($receiver);
    this[tmp$] = $receiver;
  });
  RuleBuilder.prototype.invoke_jd9v5t$ = defineInlineFunction('kotlin-csstype.csstype.RuleBuilder.invoke_jd9v5t$', function ($receiver, block) {
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  RuleBuilder.prototype.invoke_q2lmn$ = defineInlineFunction('kotlin-csstype.csstype.RuleBuilder.invoke_q2lmn$', function ($receiver, block) {
    var $receiver_0 = '.' + $receiver;
    var $receiver_1 = {};
    block($receiver_1);
    this[$receiver_0] = $receiver_1;
  });
  RuleBuilder.prototype.invoke_thkxg3$ = defineInlineFunction('kotlin-csstype.csstype.RuleBuilder.invoke_thkxg3$', function ($receiver, block) {
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  RuleBuilder.prototype.and_w57i78$ = defineInlineFunction('kotlin-csstype.csstype.RuleBuilder.and_w57i78$', function (className, block) {
    var $receiver = '&.' + className;
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  RuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuleBuilder',
    interfaces: []
  };
  var Selector = defineInlineFunction('kotlin-csstype.csstype.Selector_61zpoe$', function (syntax) {
    return syntax;
  });
  function SimplePseudosRuleBuilder() {
  }
  SimplePseudosRuleBuilder.prototype.after_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.after_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this['::after'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.backdrop_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.backdrop_oh3mgy$', function (block) {
    var $receiver = '::backdrop';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.before_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.before_oh3mgy$', function (block) {
    var $receiver = '::before';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.cue_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.cue_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this['::cue'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.cueRegion_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.cueRegion_oh3mgy$', function (block) {
    var $receiver = '::cue-region';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.firstLetter_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstLetter_oh3mgy$', function (block) {
    var $receiver = '::first-letter';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.firstLine_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstLine_oh3mgy$', function (block) {
    var $receiver = '::first-line';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.grammarError_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.grammarError_oh3mgy$', function (block) {
    var $receiver = '::grammar-error';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.marker_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.marker_oh3mgy$', function (block) {
    var $receiver = '::marker';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.placeholder_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.placeholder_oh3mgy$', function (block) {
    var $receiver = '::placeholder';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.selection_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.selection_oh3mgy$', function (block) {
    var $receiver = '::selection';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.spellingError_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.spellingError_oh3mgy$', function (block) {
    var $receiver = '::spelling-error';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.targetText_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.targetText_oh3mgy$', function (block) {
    var $receiver = '::target-text';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.active_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.active_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':active'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.anyLink_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.anyLink_oh3mgy$', function (block) {
    var $receiver = ':any-link';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.blank_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.blank_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':blank'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.checked_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.checked_oh3mgy$', function (block) {
    var $receiver = ':checked';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.current_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.current_oh3mgy$', function (block) {
    var $receiver = ':current';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.default_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.default_oh3mgy$', function (block) {
    var $receiver = ':default';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.defined_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.defined_oh3mgy$', function (block) {
    var $receiver = ':defined';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.disabled_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.disabled_oh3mgy$', function (block) {
    var $receiver = ':disabled';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.empty_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.empty_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':empty'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.enabled_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.enabled_oh3mgy$', function (block) {
    var $receiver = ':enabled';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.first_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.first_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':first'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.firstChild_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstChild_oh3mgy$', function (block) {
    var $receiver = ':first-child';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.firstOfType_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.firstOfType_oh3mgy$', function (block) {
    var $receiver = ':first-of-type';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.focus_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.focus_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':focus'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.focusVisible_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.focusVisible_oh3mgy$', function (block) {
    var $receiver = ':focus-visible';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.focusWithin_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.focusWithin_oh3mgy$', function (block) {
    var $receiver = ':focus-within';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.fullscreen_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.fullscreen_oh3mgy$', function (block) {
    var $receiver = ':fullscreen';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.future_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.future_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':future'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.hover_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.hover_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':hover'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.inRange_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.inRange_oh3mgy$', function (block) {
    var $receiver = ':in-range';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.indeterminate_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.indeterminate_oh3mgy$', function (block) {
    var $receiver = ':indeterminate';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.invalid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.invalid_oh3mgy$', function (block) {
    var $receiver = ':invalid';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.lastChild_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.lastChild_oh3mgy$', function (block) {
    var $receiver = ':last-child';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.lastOfType_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.lastOfType_oh3mgy$', function (block) {
    var $receiver = ':last-of-type';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.left_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.left_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':left'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.link_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.link_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':link'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.localLink_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.localLink_oh3mgy$', function (block) {
    var $receiver = ':local-link';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.nthCol_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.nthCol_oh3mgy$', function (block) {
    var $receiver = ':nth-col';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.nthLastCol_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.nthLastCol_oh3mgy$', function (block) {
    var $receiver = ':nth-last-col';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.onlyChild_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.onlyChild_oh3mgy$', function (block) {
    var $receiver = ':only-child';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.onlyOfType_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.onlyOfType_oh3mgy$', function (block) {
    var $receiver = ':only-of-type';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.optional_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.optional_oh3mgy$', function (block) {
    var $receiver = ':optional';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.outOfRange_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.outOfRange_oh3mgy$', function (block) {
    var $receiver = ':out-of-range';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.past_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.past_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':past'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.paused_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.paused_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':paused'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.pictureInPicture_oh3mgy$', function (block) {
    var $receiver = ':picture-in-picture';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.placeholderShown_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.placeholderShown_oh3mgy$', function (block) {
    var $receiver = ':placeholder-shown';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.readOnly_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.readOnly_oh3mgy$', function (block) {
    var $receiver = ':read-only';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.readWrite_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.readWrite_oh3mgy$', function (block) {
    var $receiver = ':read-write';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.required_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.required_oh3mgy$', function (block) {
    var $receiver = ':required';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.right_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.right_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':right'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.root_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.root_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':root'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.scope_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.scope_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':scope'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.target_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.target_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':target'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.targetWithin_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.targetWithin_oh3mgy$', function (block) {
    var $receiver = ':target-within';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.userInvalid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.userInvalid_oh3mgy$', function (block) {
    var $receiver = ':user-invalid';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.userValid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.userValid_oh3mgy$', function (block) {
    var $receiver = ':user-valid';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.prototype.valid_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.valid_oh3mgy$', function (block) {
    var $receiver = {};
    block($receiver);
    this[':valid'] = $receiver;
  });
  SimplePseudosRuleBuilder.prototype.visited_oh3mgy$ = defineInlineFunction('kotlin-csstype.csstype.SimplePseudosRuleBuilder.visited_oh3mgy$', function (block) {
    var $receiver = ':visited';
    var $receiver_0 = {};
    block($receiver_0);
    this[$receiver] = $receiver_0;
  });
  SimplePseudosRuleBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SimplePseudosRuleBuilder',
    interfaces: [RuleBuilder]
  };
  var string = defineInlineFunction('kotlin-csstype.csstype.string_61zpoe$', function (value) {
    return value;
  });
  var TextShadow = defineInlineFunction('kotlin-csstype.csstype.TextShadow_74z8hg$', function (offsetX, offsetY) {
    return offsetX.toString() + ' ' + offsetY;
  });
  var TextShadow_0 = defineInlineFunction('kotlin-csstype.csstype.TextShadow_5yfhwy$', function (offsetX, offsetY, color) {
    return offsetX.toString() + ' ' + offsetY + ' ' + color;
  });
  var TextShadow_1 = defineInlineFunction('kotlin-csstype.csstype.TextShadow_oc1yrt$', function (offsetX, offsetY, blurRadius) {
    return offsetX.toString() + ' ' + offsetY + ' ' + blurRadius;
  });
  var TextShadow_2 = defineInlineFunction('kotlin-csstype.csstype.TextShadow_7li1st$', function (offsetX, offsetY, blurRadius, color) {
    return offsetX.toString() + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
  });
  var get_ms = defineInlineFunction('kotlin-csstype.csstype.get_ms_rcaex3$', function ($receiver) {
    return $receiver.toString() + 'ms';
  });
  var get_s = defineInlineFunction('kotlin-csstype.csstype.get_s_rcaex3$', function ($receiver) {
    return $receiver.toString() + 's';
  });
  var matrix = defineInlineFunction('kotlin-csstype.csstype.matrix_9wz194$', function (a, b, c, d, tx, ty) {
    return 'matrix(' + a.toString() + ',' + b.toString() + ',' + c.toString() + ',' + d.toString() + ',' + tx.toString() + ',' + ty.toString() + ')';
  });
  var matrix3d = defineInlineFunction('kotlin-csstype.csstype.matrix3d_gpuzsk$', function (a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    return 'matrix3d(' + a1.toString() + ',' + b1.toString() + ',' + c1.toString() + ',' + d1.toString() + ',' + a2.toString() + ',' + b2.toString() + ',' + c2.toString() + ',' + d2.toString() + ',' + a3.toString() + ',' + b3.toString() + ',' + c3.toString() + ',' + d3.toString() + ',' + a4.toString() + ',' + b4.toString() + ',' + c4.toString() + ',' + d4.toString() + ')';
  });
  var perspective = defineInlineFunction('kotlin-csstype.csstype.perspective_gtm6y1$', function (d) {
    return 'perspective(' + d + ')';
  });
  var rotate = defineInlineFunction('kotlin-csstype.csstype.rotate_pffem$', function (a) {
    return 'rotate(' + a + ')';
  });
  var rotate3d = defineInlineFunction('kotlin-csstype.csstype.rotate3d_3p81yu$', function (a) {
    return 'rotate3d(' + a.toString() + ')';
  });
  var rotate3d_0 = defineInlineFunction('kotlin-csstype.csstype.rotate3d_6943j4$', function (x, y, z, a) {
    return 'rotate3d(' + x.toString() + ',' + y.toString() + ',' + z.toString() + ',' + a + ')';
  });
  var rotatex = defineInlineFunction('kotlin-csstype.csstype.rotatex_pffem$', function (a) {
    return 'rotatex(' + a + ')';
  });
  var rotatey = defineInlineFunction('kotlin-csstype.csstype.rotatey_pffem$', function (a) {
    return 'rotatey(' + a + ')';
  });
  var rotatez = defineInlineFunction('kotlin-csstype.csstype.rotatez_pffem$', function (a) {
    return 'rotatez(' + a + ')';
  });
  var scale = defineInlineFunction('kotlin-csstype.csstype.scale_3p81yu$', function (sx) {
    return 'scale(' + sx.toString() + ')';
  });
  var scale_0 = defineInlineFunction('kotlin-csstype.csstype.scale_z8e4lc$', function (sx, sy) {
    return 'scale(' + sx.toString() + ',' + sy.toString() + ')';
  });
  var scale3d = defineInlineFunction('kotlin-csstype.csstype.scale3d_a2j3zq$', function (sx, sy, sz) {
    return 'scale3d(' + sx.toString() + ',' + sy.toString() + ',' + sz.toString() + ')';
  });
  var scalex = defineInlineFunction('kotlin-csstype.csstype.scalex_3p81yu$', function (sx) {
    return 'scalex(' + sx.toString() + ')';
  });
  var scaley = defineInlineFunction('kotlin-csstype.csstype.scaley_3p81yu$', function (sy) {
    return 'scaley(' + sy.toString() + ')';
  });
  var scalez = defineInlineFunction('kotlin-csstype.csstype.scalez_3p81yu$', function (sz) {
    return 'scalez(' + sz.toString() + ')';
  });
  var skew = defineInlineFunction('kotlin-csstype.csstype.skew_pffem$', function (ax) {
    return 'skew(' + ax + ')';
  });
  var skew_0 = defineInlineFunction('kotlin-csstype.csstype.skew_pbq8q0$', function (ax, ay) {
    return 'skew(' + ax + ',' + ay + ')';
  });
  var skewx = defineInlineFunction('kotlin-csstype.csstype.skewx_pffem$', function (a) {
    return 'skewx(' + a + ')';
  });
  var skewy = defineInlineFunction('kotlin-csstype.csstype.skewy_pffem$', function (a) {
    return 'skewy(' + a + ')';
  });
  var translate = defineInlineFunction('kotlin-csstype.csstype.translate_gtm6y1$', function (tx) {
    return 'translate(' + tx + ')';
  });
  var translate_0 = defineInlineFunction('kotlin-csstype.csstype.translate_74z8hg$', function (tx, ty) {
    return 'translate(' + tx + ',' + ty + ')';
  });
  var translate3d = defineInlineFunction('kotlin-csstype.csstype.translate3d_oc1yrt$', function (tx, ty, tz) {
    return 'translate3d(' + tx + ',' + ty + ',' + tz + ')';
  });
  var translatex = defineInlineFunction('kotlin-csstype.csstype.translatex_gtm6y1$', function (tx) {
    return 'translatex(' + tx + ')';
  });
  var translatey = defineInlineFunction('kotlin-csstype.csstype.translatey_gtm6y1$', function (ty) {
    return 'translatey(' + ty + ')';
  });
  var translatez = defineInlineFunction('kotlin-csstype.csstype.translatez_gtm6y1$', function (tz) {
    return 'translatez(' + tz + ')';
  });
  function GridTemplateAreas$lambda(it) {
    return "'" + it + "'";
  }
  function GridTemplateAreas(values) {
    return joinToString(values, '\n', void 0, void 0, void 0, void 0, GridTemplateAreas$lambda);
  }
  function GridTemplateAreas$lambda_0(it) {
    return "'" + joinToString(it, ' ') + "'";
  }
  function GridTemplateAreas_0(values) {
    return joinToString(values, '\n', void 0, void 0, void 0, void 0, GridTemplateAreas$lambda_0);
  }
  function PropertiesBuilder() {
  }
  PropertiesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertiesBuilder',
    interfaces: [PseudosRuleBuilder, RuleBuilder]
  };
  function array(values) {
    return joinToString(values, ' ');
  }
  var fallback = defineInlineFunction('kotlin-csstype.csstype.fallback_jurz7g$', function (values) {
    return values;
  });
  var important = defineInlineFunction('kotlin-csstype.csstype.important_issdgt$', function (value) {
    return value.toString() + ' !important';
  });
  function many(values) {
    return joinToString(values, ',');
  }
  var get_sx = defineInlineFunction('kotlin-csstype.csstype.get_sx_69myuy$', function ($receiver) {
    return $receiver.style;
  });
  var sx = defineInlineFunction('kotlin-csstype.csstype.sx_u8mu0d$', function ($receiver, block) {
    block($receiver.style);
  });
  $$importsForInline$$['kotlin-csstype'] = _;
  var package$csstype = _.csstype || (_.csstype = {});
  package$csstype.AdvancedPseudosRuleBuilder = AdvancedPseudosRuleBuilder;
  package$csstype.get_deg_rcaex3$ = get_deg;
  package$csstype.get_rad_rcaex3$ = get_rad;
  package$csstype.get_grad_rcaex3$ = get_grad;
  package$csstype.get_turn_rcaex3$ = get_turn;
  package$csstype.stop_e7h89k$ = stop;
  package$csstype.stop_al1dvi$ = stop_0;
  package$csstype.Border_iqydjd$ = Border;
  package$csstype.Border_3d6msd$ = Border_0;
  package$csstype.BoxShadow_5yfhwy$ = BoxShadow;
  package$csstype.BoxShadow_7li1st$ = BoxShadow_0;
  package$csstype.BoxShadow_h3gmi6$ = BoxShadow_1;
  package$csstype.BoxShadow_m9lanr$ = BoxShadow_2;
  package$csstype.BoxShadow_8jq0yu$ = BoxShadow_3;
  package$csstype.BoxShadow_z76sdl$ = BoxShadow_4;
  package$csstype.ClassName_61zpoe$ = ClassName;
  package$csstype.Color_61zpoe$ = Color;
  package$csstype.rgb_qt1dr2$ = rgb;
  package$csstype.rgba_gb4hak$ = rgba;
  package$csstype.blur_3p81yu$ = blur;
  package$csstype.blur_gtm6y1$ = blur_0;
  package$csstype.brightness_3p81yu$ = brightness;
  package$csstype.brightness_vlilcb$ = brightness_0;
  package$csstype.contrast_3p81yu$ = contrast;
  package$csstype.contrast_vlilcb$ = contrast_0;
  package$csstype.dropShadow_74z8hg$ = dropShadow;
  package$csstype.dropShadow_oc1yrt$ = dropShadow_0;
  package$csstype.dropShadow_7li1st$ = dropShadow_1;
  package$csstype.grayscale_3p81yu$ = grayscale;
  package$csstype.grayscale_vlilcb$ = grayscale_0;
  package$csstype.hueRotate_3p81yu$ = hueRotate;
  package$csstype.hueRotate_pffem$ = hueRotate_0;
  package$csstype.invert_3p81yu$ = invert;
  package$csstype.invert_vlilcb$ = invert_0;
  package$csstype.opacity_3p81yu$ = opacity;
  package$csstype.opacity_vlilcb$ = opacity_0;
  package$csstype.saturate_3p81yu$ = saturate;
  package$csstype.saturate_vlilcb$ = saturate_0;
  package$csstype.sepia_3p81yu$ = sepia;
  package$csstype.sepia_vlilcb$ = sepia_0;
  package$csstype.Flex_gpu9uj$ = Flex;
  package$csstype.Flex_cvolmm$ = Flex_0;
  package$csstype.Flex_ty7qba$ = Flex_1;
  package$csstype.linearGradient_fsqlv8$ = linearGradient;
  package$csstype.linearGradient_ap9qgm$ = linearGradient_0;
  package$csstype.repeatingLinearGradient_fsqlv8$ = repeatingLinearGradient;
  package$csstype.repeatingLinearGradient_ap9qgm$ = repeatingLinearGradient_0;
  package$csstype.fitContent_gtm6y1$ = fitContent;
  package$csstype.minmax_uxkyhg$ = minmax;
  package$csstype.repeat_qtq3gd$ = repeat;
  package$csstype.repeat_cs0tka$ = repeat_0;
  package$csstype.get_fr_rcaex3$ = get_fr;
  package$csstype.ident_61zpoe$ = ident;
  package$csstype.Inset_cd43o4$ = Inset;
  package$csstype.Inset_vqvp2e$ = Inset_0;
  package$csstype.Inset_lt5830$ = Inset_1;
  package$csstype.integer_za3lpa$ = integer;
  package$csstype.get_ch_rcaex3$ = get_ch;
  package$csstype.get_em_rcaex3$ = get_em;
  package$csstype.get_ex_rcaex3$ = get_ex;
  package$csstype.get_rem_rcaex3$ = get_rem;
  package$csstype.get_vh_rcaex3$ = get_vh;
  package$csstype.get_vw_rcaex3$ = get_vw;
  package$csstype.get_vmin_rcaex3$ = get_vmin;
  package$csstype.get_vmax_rcaex3$ = get_vmax;
  package$csstype.get_px_rcaex3$ = get_px;
  package$csstype.get_cm_rcaex3$ = get_cm;
  package$csstype.get_mm_rcaex3$ = get_mm;
  package$csstype.get_in_rcaex3$ = get_in;
  package$csstype.get_pc_rcaex3$ = get_pc;
  package$csstype.get_pt_rcaex3$ = get_pt;
  package$csstype.unaryMinus_oablfs$ = unaryMinus;
  package$csstype.plus_3df375$ = plus;
  package$csstype.minus_3df375$ = minus;
  package$csstype.times_tzejxs$ = times;
  package$csstype.div_u8gwjm$ = div;
  package$csstype.stop_96hpqn$ = stop_1;
  package$csstype.stop_ig7ojy$ = stop_2;
  package$csstype.Margin_cd43o4$ = Margin;
  package$csstype.Margin_vqvp2e$ = Margin_0;
  package$csstype.Margin_lt5830$ = Margin_1;
  package$csstype.clamp_oc1yrt$ = clamp;
  package$csstype.max_tiucce$ = max;
  package$csstype.min_tiucce$ = min;
  package$csstype.number_14dthe$ = number;
  package$csstype.Outline_iqydjd$ = Outline;
  package$csstype.Outline_3d6msd$ = Outline_0;
  package$csstype.Padding_74z8hg$ = Padding;
  package$csstype.Padding_oc1yrt$ = Padding_0;
  package$csstype.Padding_qj55nw$ = Padding_1;
  package$csstype.get_pct_rcaex3$ = get_pct;
  package$csstype.PseudosRuleBuilder = PseudosRuleBuilder;
  package$csstype.attr_61zpoe$ = attr;
  package$csstype.env_dfle7a$ = env;
  package$csstype.env_pxgti8$ = env_0;
  package$csstype.url_61zpoe$ = url;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  package$csstype.Selector_61zpoe$ = Selector;
  package$csstype.RuleBuilder = RuleBuilder;
  package$csstype.SimplePseudosRuleBuilder = SimplePseudosRuleBuilder;
  package$csstype.string_61zpoe$ = string;
  package$csstype.TextShadow_74z8hg$ = TextShadow;
  package$csstype.TextShadow_5yfhwy$ = TextShadow_0;
  package$csstype.TextShadow_oc1yrt$ = TextShadow_1;
  package$csstype.TextShadow_7li1st$ = TextShadow_2;
  package$csstype.get_ms_rcaex3$ = get_ms;
  package$csstype.get_s_rcaex3$ = get_s;
  package$csstype.matrix_9wz194$ = matrix;
  package$csstype.matrix3d_gpuzsk$ = matrix3d;
  package$csstype.perspective_gtm6y1$ = perspective;
  package$csstype.rotate_pffem$ = rotate;
  package$csstype.rotate3d_3p81yu$ = rotate3d;
  package$csstype.rotate3d_6943j4$ = rotate3d_0;
  package$csstype.rotatex_pffem$ = rotatex;
  package$csstype.rotatey_pffem$ = rotatey;
  package$csstype.rotatez_pffem$ = rotatez;
  package$csstype.scale_3p81yu$ = scale;
  package$csstype.scale_z8e4lc$ = scale_0;
  package$csstype.scale3d_a2j3zq$ = scale3d;
  package$csstype.scalex_3p81yu$ = scalex;
  package$csstype.scaley_3p81yu$ = scaley;
  package$csstype.scalez_3p81yu$ = scalez;
  package$csstype.skew_pffem$ = skew;
  package$csstype.skew_pbq8q0$ = skew_0;
  package$csstype.skewx_pffem$ = skewx;
  package$csstype.skewy_pffem$ = skewy;
  package$csstype.translate_gtm6y1$ = translate;
  package$csstype.translate_74z8hg$ = translate_0;
  package$csstype.translate3d_oc1yrt$ = translate3d;
  package$csstype.translatex_gtm6y1$ = translatex;
  package$csstype.translatey_gtm6y1$ = translatey;
  package$csstype.translatez_gtm6y1$ = translatez;
  package$csstype.GridTemplateAreas_w6gonw$ = GridTemplateAreas;
  package$csstype.GridTemplateAreas_jucvi9$ = GridTemplateAreas_0;
  package$csstype.PropertiesBuilder = PropertiesBuilder;
  package$csstype.array_jurz7g$ = array;
  package$csstype.fallback_jurz7g$ = fallback;
  package$csstype.important_issdgt$ = important;
  package$csstype.many_jurz7g$ = many;
  package$csstype.get_sx_69myuy$ = get_sx;
  package$csstype.sx_u8mu0d$ = sx;
  AdvancedPseudosRuleBuilder.prototype.fontFace_yquot6$ = RuleBuilder.prototype.fontFace_yquot6$;
  AdvancedPseudosRuleBuilder.prototype.invoke_jd9v5t$ = RuleBuilder.prototype.invoke_jd9v5t$;
  AdvancedPseudosRuleBuilder.prototype.invoke_q2lmn$ = RuleBuilder.prototype.invoke_q2lmn$;
  AdvancedPseudosRuleBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  AdvancedPseudosRuleBuilder.prototype.and_w57i78$ = RuleBuilder.prototype.and_w57i78$;
  SimplePseudosRuleBuilder.prototype.fontFace_yquot6$ = RuleBuilder.prototype.fontFace_yquot6$;
  SimplePseudosRuleBuilder.prototype.invoke_jd9v5t$ = RuleBuilder.prototype.invoke_jd9v5t$;
  SimplePseudosRuleBuilder.prototype.invoke_q2lmn$ = RuleBuilder.prototype.invoke_q2lmn$;
  SimplePseudosRuleBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  SimplePseudosRuleBuilder.prototype.and_w57i78$ = RuleBuilder.prototype.and_w57i78$;
  PseudosRuleBuilder.prototype.cue_di08o2$ = AdvancedPseudosRuleBuilder.prototype.cue_di08o2$;
  PseudosRuleBuilder.prototype.cue_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.cue_3dp6ds$;
  PseudosRuleBuilder.prototype.cue_oh3mgy$ = SimplePseudosRuleBuilder.prototype.cue_oh3mgy$;
  PseudosRuleBuilder.prototype.cueRegion_di08o2$ = AdvancedPseudosRuleBuilder.prototype.cueRegion_di08o2$;
  PseudosRuleBuilder.prototype.cueRegion_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.cueRegion_3dp6ds$;
  PseudosRuleBuilder.prototype.cueRegion_oh3mgy$ = SimplePseudosRuleBuilder.prototype.cueRegion_oh3mgy$;
  PseudosRuleBuilder.prototype.part_di08o2$ = AdvancedPseudosRuleBuilder.prototype.part_di08o2$;
  PseudosRuleBuilder.prototype.part_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.part_3dp6ds$;
  PseudosRuleBuilder.prototype.slotted_di08o2$ = AdvancedPseudosRuleBuilder.prototype.slotted_di08o2$;
  PseudosRuleBuilder.prototype.slotted_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.slotted_3dp6ds$;
  PseudosRuleBuilder.prototype.dir_di08o2$ = AdvancedPseudosRuleBuilder.prototype.dir_di08o2$;
  PseudosRuleBuilder.prototype.dir_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.dir_3dp6ds$;
  PseudosRuleBuilder.prototype.has_di08o2$ = AdvancedPseudosRuleBuilder.prototype.has_di08o2$;
  PseudosRuleBuilder.prototype.has_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.has_3dp6ds$;
  PseudosRuleBuilder.prototype.host_di08o2$ = AdvancedPseudosRuleBuilder.prototype.host_di08o2$;
  PseudosRuleBuilder.prototype.host_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.host_3dp6ds$;
  PseudosRuleBuilder.prototype.hostContext_di08o2$ = AdvancedPseudosRuleBuilder.prototype.hostContext_di08o2$;
  PseudosRuleBuilder.prototype.hostContext_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.hostContext_3dp6ds$;
  PseudosRuleBuilder.prototype.is_di08o2$ = AdvancedPseudosRuleBuilder.prototype.is_di08o2$;
  PseudosRuleBuilder.prototype.is_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.is_3dp6ds$;
  PseudosRuleBuilder.prototype.lang_di08o2$ = AdvancedPseudosRuleBuilder.prototype.lang_di08o2$;
  PseudosRuleBuilder.prototype.lang_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.lang_3dp6ds$;
  PseudosRuleBuilder.prototype.not_di08o2$ = AdvancedPseudosRuleBuilder.prototype.not_di08o2$;
  PseudosRuleBuilder.prototype.not_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.not_3dp6ds$;
  PseudosRuleBuilder.prototype.nthChild_di08o2$ = AdvancedPseudosRuleBuilder.prototype.nthChild_di08o2$;
  PseudosRuleBuilder.prototype.nthChild_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthChild_3dp6ds$;
  PseudosRuleBuilder.prototype.nthLastChild_di08o2$ = AdvancedPseudosRuleBuilder.prototype.nthLastChild_di08o2$;
  PseudosRuleBuilder.prototype.nthLastChild_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthLastChild_3dp6ds$;
  PseudosRuleBuilder.prototype.nthLastOfType_di08o2$ = AdvancedPseudosRuleBuilder.prototype.nthLastOfType_di08o2$;
  PseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$;
  PseudosRuleBuilder.prototype.nthOfType_di08o2$ = AdvancedPseudosRuleBuilder.prototype.nthOfType_di08o2$;
  PseudosRuleBuilder.prototype.nthOfType_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.nthOfType_3dp6ds$;
  PseudosRuleBuilder.prototype.where_di08o2$ = AdvancedPseudosRuleBuilder.prototype.where_di08o2$;
  PseudosRuleBuilder.prototype.where_3dp6ds$ = AdvancedPseudosRuleBuilder.prototype.where_3dp6ds$;
  PseudosRuleBuilder.prototype.fontFace_yquot6$ = AdvancedPseudosRuleBuilder.prototype.fontFace_yquot6$;
  PseudosRuleBuilder.prototype.invoke_jd9v5t$ = AdvancedPseudosRuleBuilder.prototype.invoke_jd9v5t$;
  PseudosRuleBuilder.prototype.invoke_q2lmn$ = AdvancedPseudosRuleBuilder.prototype.invoke_q2lmn$;
  PseudosRuleBuilder.prototype.invoke_thkxg3$ = AdvancedPseudosRuleBuilder.prototype.invoke_thkxg3$;
  PseudosRuleBuilder.prototype.and_w57i78$ = AdvancedPseudosRuleBuilder.prototype.and_w57i78$;
  PseudosRuleBuilder.prototype.after_oh3mgy$ = SimplePseudosRuleBuilder.prototype.after_oh3mgy$;
  PseudosRuleBuilder.prototype.backdrop_oh3mgy$ = SimplePseudosRuleBuilder.prototype.backdrop_oh3mgy$;
  PseudosRuleBuilder.prototype.before_oh3mgy$ = SimplePseudosRuleBuilder.prototype.before_oh3mgy$;
  PseudosRuleBuilder.prototype.firstLetter_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstLetter_oh3mgy$;
  PseudosRuleBuilder.prototype.firstLine_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstLine_oh3mgy$;
  PseudosRuleBuilder.prototype.grammarError_oh3mgy$ = SimplePseudosRuleBuilder.prototype.grammarError_oh3mgy$;
  PseudosRuleBuilder.prototype.marker_oh3mgy$ = SimplePseudosRuleBuilder.prototype.marker_oh3mgy$;
  PseudosRuleBuilder.prototype.placeholder_oh3mgy$ = SimplePseudosRuleBuilder.prototype.placeholder_oh3mgy$;
  PseudosRuleBuilder.prototype.selection_oh3mgy$ = SimplePseudosRuleBuilder.prototype.selection_oh3mgy$;
  PseudosRuleBuilder.prototype.spellingError_oh3mgy$ = SimplePseudosRuleBuilder.prototype.spellingError_oh3mgy$;
  PseudosRuleBuilder.prototype.targetText_oh3mgy$ = SimplePseudosRuleBuilder.prototype.targetText_oh3mgy$;
  PseudosRuleBuilder.prototype.active_oh3mgy$ = SimplePseudosRuleBuilder.prototype.active_oh3mgy$;
  PseudosRuleBuilder.prototype.anyLink_oh3mgy$ = SimplePseudosRuleBuilder.prototype.anyLink_oh3mgy$;
  PseudosRuleBuilder.prototype.blank_oh3mgy$ = SimplePseudosRuleBuilder.prototype.blank_oh3mgy$;
  PseudosRuleBuilder.prototype.checked_oh3mgy$ = SimplePseudosRuleBuilder.prototype.checked_oh3mgy$;
  PseudosRuleBuilder.prototype.current_oh3mgy$ = SimplePseudosRuleBuilder.prototype.current_oh3mgy$;
  PseudosRuleBuilder.prototype.default_oh3mgy$ = SimplePseudosRuleBuilder.prototype.default_oh3mgy$;
  PseudosRuleBuilder.prototype.defined_oh3mgy$ = SimplePseudosRuleBuilder.prototype.defined_oh3mgy$;
  PseudosRuleBuilder.prototype.disabled_oh3mgy$ = SimplePseudosRuleBuilder.prototype.disabled_oh3mgy$;
  PseudosRuleBuilder.prototype.empty_oh3mgy$ = SimplePseudosRuleBuilder.prototype.empty_oh3mgy$;
  PseudosRuleBuilder.prototype.enabled_oh3mgy$ = SimplePseudosRuleBuilder.prototype.enabled_oh3mgy$;
  PseudosRuleBuilder.prototype.first_oh3mgy$ = SimplePseudosRuleBuilder.prototype.first_oh3mgy$;
  PseudosRuleBuilder.prototype.firstChild_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstChild_oh3mgy$;
  PseudosRuleBuilder.prototype.firstOfType_oh3mgy$ = SimplePseudosRuleBuilder.prototype.firstOfType_oh3mgy$;
  PseudosRuleBuilder.prototype.focus_oh3mgy$ = SimplePseudosRuleBuilder.prototype.focus_oh3mgy$;
  PseudosRuleBuilder.prototype.focusVisible_oh3mgy$ = SimplePseudosRuleBuilder.prototype.focusVisible_oh3mgy$;
  PseudosRuleBuilder.prototype.focusWithin_oh3mgy$ = SimplePseudosRuleBuilder.prototype.focusWithin_oh3mgy$;
  PseudosRuleBuilder.prototype.fullscreen_oh3mgy$ = SimplePseudosRuleBuilder.prototype.fullscreen_oh3mgy$;
  PseudosRuleBuilder.prototype.future_oh3mgy$ = SimplePseudosRuleBuilder.prototype.future_oh3mgy$;
  PseudosRuleBuilder.prototype.hover_oh3mgy$ = SimplePseudosRuleBuilder.prototype.hover_oh3mgy$;
  PseudosRuleBuilder.prototype.inRange_oh3mgy$ = SimplePseudosRuleBuilder.prototype.inRange_oh3mgy$;
  PseudosRuleBuilder.prototype.indeterminate_oh3mgy$ = SimplePseudosRuleBuilder.prototype.indeterminate_oh3mgy$;
  PseudosRuleBuilder.prototype.invalid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.invalid_oh3mgy$;
  PseudosRuleBuilder.prototype.lastChild_oh3mgy$ = SimplePseudosRuleBuilder.prototype.lastChild_oh3mgy$;
  PseudosRuleBuilder.prototype.lastOfType_oh3mgy$ = SimplePseudosRuleBuilder.prototype.lastOfType_oh3mgy$;
  PseudosRuleBuilder.prototype.left_oh3mgy$ = SimplePseudosRuleBuilder.prototype.left_oh3mgy$;
  PseudosRuleBuilder.prototype.link_oh3mgy$ = SimplePseudosRuleBuilder.prototype.link_oh3mgy$;
  PseudosRuleBuilder.prototype.localLink_oh3mgy$ = SimplePseudosRuleBuilder.prototype.localLink_oh3mgy$;
  PseudosRuleBuilder.prototype.nthCol_oh3mgy$ = SimplePseudosRuleBuilder.prototype.nthCol_oh3mgy$;
  PseudosRuleBuilder.prototype.nthLastCol_oh3mgy$ = SimplePseudosRuleBuilder.prototype.nthLastCol_oh3mgy$;
  PseudosRuleBuilder.prototype.onlyChild_oh3mgy$ = SimplePseudosRuleBuilder.prototype.onlyChild_oh3mgy$;
  PseudosRuleBuilder.prototype.onlyOfType_oh3mgy$ = SimplePseudosRuleBuilder.prototype.onlyOfType_oh3mgy$;
  PseudosRuleBuilder.prototype.optional_oh3mgy$ = SimplePseudosRuleBuilder.prototype.optional_oh3mgy$;
  PseudosRuleBuilder.prototype.outOfRange_oh3mgy$ = SimplePseudosRuleBuilder.prototype.outOfRange_oh3mgy$;
  PseudosRuleBuilder.prototype.past_oh3mgy$ = SimplePseudosRuleBuilder.prototype.past_oh3mgy$;
  PseudosRuleBuilder.prototype.paused_oh3mgy$ = SimplePseudosRuleBuilder.prototype.paused_oh3mgy$;
  PseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$ = SimplePseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$;
  PseudosRuleBuilder.prototype.placeholderShown_oh3mgy$ = SimplePseudosRuleBuilder.prototype.placeholderShown_oh3mgy$;
  PseudosRuleBuilder.prototype.readOnly_oh3mgy$ = SimplePseudosRuleBuilder.prototype.readOnly_oh3mgy$;
  PseudosRuleBuilder.prototype.readWrite_oh3mgy$ = SimplePseudosRuleBuilder.prototype.readWrite_oh3mgy$;
  PseudosRuleBuilder.prototype.required_oh3mgy$ = SimplePseudosRuleBuilder.prototype.required_oh3mgy$;
  PseudosRuleBuilder.prototype.right_oh3mgy$ = SimplePseudosRuleBuilder.prototype.right_oh3mgy$;
  PseudosRuleBuilder.prototype.root_oh3mgy$ = SimplePseudosRuleBuilder.prototype.root_oh3mgy$;
  PseudosRuleBuilder.prototype.scope_oh3mgy$ = SimplePseudosRuleBuilder.prototype.scope_oh3mgy$;
  PseudosRuleBuilder.prototype.target_oh3mgy$ = SimplePseudosRuleBuilder.prototype.target_oh3mgy$;
  PseudosRuleBuilder.prototype.targetWithin_oh3mgy$ = SimplePseudosRuleBuilder.prototype.targetWithin_oh3mgy$;
  PseudosRuleBuilder.prototype.userInvalid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.userInvalid_oh3mgy$;
  PseudosRuleBuilder.prototype.userValid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.userValid_oh3mgy$;
  PseudosRuleBuilder.prototype.valid_oh3mgy$ = SimplePseudosRuleBuilder.prototype.valid_oh3mgy$;
  PseudosRuleBuilder.prototype.visited_oh3mgy$ = SimplePseudosRuleBuilder.prototype.visited_oh3mgy$;
  PropertiesBuilder.prototype.fontFace_yquot6$ = RuleBuilder.prototype.fontFace_yquot6$;
  PropertiesBuilder.prototype.invoke_jd9v5t$ = RuleBuilder.prototype.invoke_jd9v5t$;
  PropertiesBuilder.prototype.invoke_q2lmn$ = RuleBuilder.prototype.invoke_q2lmn$;
  PropertiesBuilder.prototype.invoke_thkxg3$ = RuleBuilder.prototype.invoke_thkxg3$;
  PropertiesBuilder.prototype.and_w57i78$ = RuleBuilder.prototype.and_w57i78$;
  PropertiesBuilder.prototype.cue_di08o2$ = PseudosRuleBuilder.prototype.cue_di08o2$;
  PropertiesBuilder.prototype.cue_3dp6ds$ = PseudosRuleBuilder.prototype.cue_3dp6ds$;
  PropertiesBuilder.prototype.cue_oh3mgy$ = PseudosRuleBuilder.prototype.cue_oh3mgy$;
  PropertiesBuilder.prototype.cueRegion_di08o2$ = PseudosRuleBuilder.prototype.cueRegion_di08o2$;
  PropertiesBuilder.prototype.cueRegion_3dp6ds$ = PseudosRuleBuilder.prototype.cueRegion_3dp6ds$;
  PropertiesBuilder.prototype.cueRegion_oh3mgy$ = PseudosRuleBuilder.prototype.cueRegion_oh3mgy$;
  PropertiesBuilder.prototype.part_di08o2$ = PseudosRuleBuilder.prototype.part_di08o2$;
  PropertiesBuilder.prototype.part_3dp6ds$ = PseudosRuleBuilder.prototype.part_3dp6ds$;
  PropertiesBuilder.prototype.slotted_di08o2$ = PseudosRuleBuilder.prototype.slotted_di08o2$;
  PropertiesBuilder.prototype.slotted_3dp6ds$ = PseudosRuleBuilder.prototype.slotted_3dp6ds$;
  PropertiesBuilder.prototype.dir_di08o2$ = PseudosRuleBuilder.prototype.dir_di08o2$;
  PropertiesBuilder.prototype.dir_3dp6ds$ = PseudosRuleBuilder.prototype.dir_3dp6ds$;
  PropertiesBuilder.prototype.has_di08o2$ = PseudosRuleBuilder.prototype.has_di08o2$;
  PropertiesBuilder.prototype.has_3dp6ds$ = PseudosRuleBuilder.prototype.has_3dp6ds$;
  PropertiesBuilder.prototype.host_di08o2$ = PseudosRuleBuilder.prototype.host_di08o2$;
  PropertiesBuilder.prototype.host_3dp6ds$ = PseudosRuleBuilder.prototype.host_3dp6ds$;
  PropertiesBuilder.prototype.hostContext_di08o2$ = PseudosRuleBuilder.prototype.hostContext_di08o2$;
  PropertiesBuilder.prototype.hostContext_3dp6ds$ = PseudosRuleBuilder.prototype.hostContext_3dp6ds$;
  PropertiesBuilder.prototype.is_di08o2$ = PseudosRuleBuilder.prototype.is_di08o2$;
  PropertiesBuilder.prototype.is_3dp6ds$ = PseudosRuleBuilder.prototype.is_3dp6ds$;
  PropertiesBuilder.prototype.lang_di08o2$ = PseudosRuleBuilder.prototype.lang_di08o2$;
  PropertiesBuilder.prototype.lang_3dp6ds$ = PseudosRuleBuilder.prototype.lang_3dp6ds$;
  PropertiesBuilder.prototype.not_di08o2$ = PseudosRuleBuilder.prototype.not_di08o2$;
  PropertiesBuilder.prototype.not_3dp6ds$ = PseudosRuleBuilder.prototype.not_3dp6ds$;
  PropertiesBuilder.prototype.nthChild_di08o2$ = PseudosRuleBuilder.prototype.nthChild_di08o2$;
  PropertiesBuilder.prototype.nthChild_3dp6ds$ = PseudosRuleBuilder.prototype.nthChild_3dp6ds$;
  PropertiesBuilder.prototype.nthLastChild_di08o2$ = PseudosRuleBuilder.prototype.nthLastChild_di08o2$;
  PropertiesBuilder.prototype.nthLastChild_3dp6ds$ = PseudosRuleBuilder.prototype.nthLastChild_3dp6ds$;
  PropertiesBuilder.prototype.nthLastOfType_di08o2$ = PseudosRuleBuilder.prototype.nthLastOfType_di08o2$;
  PropertiesBuilder.prototype.nthLastOfType_3dp6ds$ = PseudosRuleBuilder.prototype.nthLastOfType_3dp6ds$;
  PropertiesBuilder.prototype.nthOfType_di08o2$ = PseudosRuleBuilder.prototype.nthOfType_di08o2$;
  PropertiesBuilder.prototype.nthOfType_3dp6ds$ = PseudosRuleBuilder.prototype.nthOfType_3dp6ds$;
  PropertiesBuilder.prototype.where_di08o2$ = PseudosRuleBuilder.prototype.where_di08o2$;
  PropertiesBuilder.prototype.where_3dp6ds$ = PseudosRuleBuilder.prototype.where_3dp6ds$;
  PropertiesBuilder.prototype.after_oh3mgy$ = PseudosRuleBuilder.prototype.after_oh3mgy$;
  PropertiesBuilder.prototype.backdrop_oh3mgy$ = PseudosRuleBuilder.prototype.backdrop_oh3mgy$;
  PropertiesBuilder.prototype.before_oh3mgy$ = PseudosRuleBuilder.prototype.before_oh3mgy$;
  PropertiesBuilder.prototype.firstLetter_oh3mgy$ = PseudosRuleBuilder.prototype.firstLetter_oh3mgy$;
  PropertiesBuilder.prototype.firstLine_oh3mgy$ = PseudosRuleBuilder.prototype.firstLine_oh3mgy$;
  PropertiesBuilder.prototype.grammarError_oh3mgy$ = PseudosRuleBuilder.prototype.grammarError_oh3mgy$;
  PropertiesBuilder.prototype.marker_oh3mgy$ = PseudosRuleBuilder.prototype.marker_oh3mgy$;
  PropertiesBuilder.prototype.placeholder_oh3mgy$ = PseudosRuleBuilder.prototype.placeholder_oh3mgy$;
  PropertiesBuilder.prototype.selection_oh3mgy$ = PseudosRuleBuilder.prototype.selection_oh3mgy$;
  PropertiesBuilder.prototype.spellingError_oh3mgy$ = PseudosRuleBuilder.prototype.spellingError_oh3mgy$;
  PropertiesBuilder.prototype.targetText_oh3mgy$ = PseudosRuleBuilder.prototype.targetText_oh3mgy$;
  PropertiesBuilder.prototype.active_oh3mgy$ = PseudosRuleBuilder.prototype.active_oh3mgy$;
  PropertiesBuilder.prototype.anyLink_oh3mgy$ = PseudosRuleBuilder.prototype.anyLink_oh3mgy$;
  PropertiesBuilder.prototype.blank_oh3mgy$ = PseudosRuleBuilder.prototype.blank_oh3mgy$;
  PropertiesBuilder.prototype.checked_oh3mgy$ = PseudosRuleBuilder.prototype.checked_oh3mgy$;
  PropertiesBuilder.prototype.current_oh3mgy$ = PseudosRuleBuilder.prototype.current_oh3mgy$;
  PropertiesBuilder.prototype.default_oh3mgy$ = PseudosRuleBuilder.prototype.default_oh3mgy$;
  PropertiesBuilder.prototype.defined_oh3mgy$ = PseudosRuleBuilder.prototype.defined_oh3mgy$;
  PropertiesBuilder.prototype.disabled_oh3mgy$ = PseudosRuleBuilder.prototype.disabled_oh3mgy$;
  PropertiesBuilder.prototype.empty_oh3mgy$ = PseudosRuleBuilder.prototype.empty_oh3mgy$;
  PropertiesBuilder.prototype.enabled_oh3mgy$ = PseudosRuleBuilder.prototype.enabled_oh3mgy$;
  PropertiesBuilder.prototype.first_oh3mgy$ = PseudosRuleBuilder.prototype.first_oh3mgy$;
  PropertiesBuilder.prototype.firstChild_oh3mgy$ = PseudosRuleBuilder.prototype.firstChild_oh3mgy$;
  PropertiesBuilder.prototype.firstOfType_oh3mgy$ = PseudosRuleBuilder.prototype.firstOfType_oh3mgy$;
  PropertiesBuilder.prototype.focus_oh3mgy$ = PseudosRuleBuilder.prototype.focus_oh3mgy$;
  PropertiesBuilder.prototype.focusVisible_oh3mgy$ = PseudosRuleBuilder.prototype.focusVisible_oh3mgy$;
  PropertiesBuilder.prototype.focusWithin_oh3mgy$ = PseudosRuleBuilder.prototype.focusWithin_oh3mgy$;
  PropertiesBuilder.prototype.fullscreen_oh3mgy$ = PseudosRuleBuilder.prototype.fullscreen_oh3mgy$;
  PropertiesBuilder.prototype.future_oh3mgy$ = PseudosRuleBuilder.prototype.future_oh3mgy$;
  PropertiesBuilder.prototype.hover_oh3mgy$ = PseudosRuleBuilder.prototype.hover_oh3mgy$;
  PropertiesBuilder.prototype.inRange_oh3mgy$ = PseudosRuleBuilder.prototype.inRange_oh3mgy$;
  PropertiesBuilder.prototype.indeterminate_oh3mgy$ = PseudosRuleBuilder.prototype.indeterminate_oh3mgy$;
  PropertiesBuilder.prototype.invalid_oh3mgy$ = PseudosRuleBuilder.prototype.invalid_oh3mgy$;
  PropertiesBuilder.prototype.lastChild_oh3mgy$ = PseudosRuleBuilder.prototype.lastChild_oh3mgy$;
  PropertiesBuilder.prototype.lastOfType_oh3mgy$ = PseudosRuleBuilder.prototype.lastOfType_oh3mgy$;
  PropertiesBuilder.prototype.left_oh3mgy$ = PseudosRuleBuilder.prototype.left_oh3mgy$;
  PropertiesBuilder.prototype.link_oh3mgy$ = PseudosRuleBuilder.prototype.link_oh3mgy$;
  PropertiesBuilder.prototype.localLink_oh3mgy$ = PseudosRuleBuilder.prototype.localLink_oh3mgy$;
  PropertiesBuilder.prototype.nthCol_oh3mgy$ = PseudosRuleBuilder.prototype.nthCol_oh3mgy$;
  PropertiesBuilder.prototype.nthLastCol_oh3mgy$ = PseudosRuleBuilder.prototype.nthLastCol_oh3mgy$;
  PropertiesBuilder.prototype.onlyChild_oh3mgy$ = PseudosRuleBuilder.prototype.onlyChild_oh3mgy$;
  PropertiesBuilder.prototype.onlyOfType_oh3mgy$ = PseudosRuleBuilder.prototype.onlyOfType_oh3mgy$;
  PropertiesBuilder.prototype.optional_oh3mgy$ = PseudosRuleBuilder.prototype.optional_oh3mgy$;
  PropertiesBuilder.prototype.outOfRange_oh3mgy$ = PseudosRuleBuilder.prototype.outOfRange_oh3mgy$;
  PropertiesBuilder.prototype.past_oh3mgy$ = PseudosRuleBuilder.prototype.past_oh3mgy$;
  PropertiesBuilder.prototype.paused_oh3mgy$ = PseudosRuleBuilder.prototype.paused_oh3mgy$;
  PropertiesBuilder.prototype.pictureInPicture_oh3mgy$ = PseudosRuleBuilder.prototype.pictureInPicture_oh3mgy$;
  PropertiesBuilder.prototype.placeholderShown_oh3mgy$ = PseudosRuleBuilder.prototype.placeholderShown_oh3mgy$;
  PropertiesBuilder.prototype.readOnly_oh3mgy$ = PseudosRuleBuilder.prototype.readOnly_oh3mgy$;
  PropertiesBuilder.prototype.readWrite_oh3mgy$ = PseudosRuleBuilder.prototype.readWrite_oh3mgy$;
  PropertiesBuilder.prototype.required_oh3mgy$ = PseudosRuleBuilder.prototype.required_oh3mgy$;
  PropertiesBuilder.prototype.right_oh3mgy$ = PseudosRuleBuilder.prototype.right_oh3mgy$;
  PropertiesBuilder.prototype.root_oh3mgy$ = PseudosRuleBuilder.prototype.root_oh3mgy$;
  PropertiesBuilder.prototype.scope_oh3mgy$ = PseudosRuleBuilder.prototype.scope_oh3mgy$;
  PropertiesBuilder.prototype.target_oh3mgy$ = PseudosRuleBuilder.prototype.target_oh3mgy$;
  PropertiesBuilder.prototype.targetWithin_oh3mgy$ = PseudosRuleBuilder.prototype.targetWithin_oh3mgy$;
  PropertiesBuilder.prototype.userInvalid_oh3mgy$ = PseudosRuleBuilder.prototype.userInvalid_oh3mgy$;
  PropertiesBuilder.prototype.userValid_oh3mgy$ = PseudosRuleBuilder.prototype.userValid_oh3mgy$;
  PropertiesBuilder.prototype.valid_oh3mgy$ = PseudosRuleBuilder.prototype.valid_oh3mgy$;
  PropertiesBuilder.prototype.visited_oh3mgy$ = PseudosRuleBuilder.prototype.visited_oh3mgy$;
  Kotlin.defineModule('kotlin-csstype', _);
  return _;
}));
