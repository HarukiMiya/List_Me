(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-browser'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-browser'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-browser'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-browser'.");
    }
    root['kotlin-browser'] = factory(typeof this['kotlin-browser'] === 'undefined' ? {} : this['kotlin-browser'], kotlin, this['kotlin-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var get_ANIMATION_CANCEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ANIMATION_CANCEL_pikjst$', function ($receiver) {
    return 'animationcancel';
  });
  var get_ANIMATION_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ANIMATION_END_pikjst$', function ($receiver) {
    return 'animationend';
  });
  var get_ANIMATION_ITERATION = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ANIMATION_ITERATION_pikjst$', function ($receiver) {
    return 'animationiteration';
  });
  var get_ANIMATION_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ANIMATION_START_pikjst$', function ($receiver) {
    return 'animationstart';
  });
  var get_CANCEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CANCEL_9qx1pt$', function ($receiver) {
    return 'cancel';
  });
  var get_FINISH = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FINISH_9qx1pt$', function ($receiver) {
    return 'finish';
  });
  var get_AUDIO_PROCESS = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_AUDIO_PROCESS_9qx1pt$', function ($receiver) {
    return 'audioprocess';
  });
  var get_BEFORE_UNLOAD = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_BEFORE_UNLOAD_hyygvm$', function ($receiver) {
    return 'beforeunload';
  });
  var get_DATA_AVAILABLE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DATA_AVAILABLE_9qx1pt$', function ($receiver) {
    return 'dataavailable';
  });
  var get_COPY = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_COPY_gdefzs$', function ($receiver) {
    return 'copy';
  });
  var get_CUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CUT_gdefzs$', function ($receiver) {
    return 'cut';
  });
  var get_PASTE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PASTE_gdefzs$', function ($receiver) {
    return 'paste';
  });
  var get_CLOSE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CLOSE_jawzny$', function ($receiver) {
    return 'close';
  });
  var get_COMPOSITION_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_COMPOSITION_END_jhdeqx$', function ($receiver) {
    return 'compositionend';
  });
  var get_COMPOSITION_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_COMPOSITION_START_jhdeqx$', function ($receiver) {
    return 'compositionstart';
  });
  var get_COMPOSITION_UPDATE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_COMPOSITION_UPDATE_jhdeqx$', function ($receiver) {
    return 'compositionupdate';
  });
  var get_DEVICE_MOTION = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DEVICE_MOTION_9qx1pt$', function ($receiver) {
    return 'devicemotion';
  });
  var get_DEVICE_ORIENTATION = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DEVICE_ORIENTATION_9qx1pt$', function ($receiver) {
    return 'deviceorientation';
  });
  var get_DRAG = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DRAG_sqmuo8$', function ($receiver) {
    return 'drag';
  });
  var get_DRAG_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DRAG_END_sqmuo8$', function ($receiver) {
    return 'dragend';
  });
  var get_DRAG_ENTER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DRAG_ENTER_sqmuo8$', function ($receiver) {
    return 'dragenter';
  });
  var get_DRAG_LEAVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DRAG_LEAVE_sqmuo8$', function ($receiver) {
    return 'dragleave';
  });
  var get_DRAG_OVER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DRAG_OVER_sqmuo8$', function ($receiver) {
    return 'dragover';
  });
  var get_DRAG_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DRAG_START_sqmuo8$', function ($receiver) {
    return 'dragstart';
  });
  var get_DROP = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DROP_sqmuo8$', function ($receiver) {
    return 'drop';
  });
  var get_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ERROR_lzhrwe$', function ($receiver) {
    return 'error';
  });
  var get_ABORT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ABORT_9qx1pt$', function ($receiver) {
    return 'abort';
  });
  var get_REMOVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_REMOVE_9qx1pt$', function ($receiver) {
    return 'remove';
  });
  var get_ENDED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ENDED_9qx1pt$', function ($receiver) {
    return 'ended';
  });
  var get_PROCESS_OR_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PROCESS_OR_ERROR_9qx1pt$', function ($receiver) {
    return 'processorerror';
  });
  var get_STATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_STATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'statechange';
  });
  var get_FULLSCREEN_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FULLSCREEN_CHANGE_9qx1pt$', function ($receiver) {
    return 'fullscreenchange';
  });
  var get_FULLSCREEN_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FULLSCREEN_ERROR_9qx1pt$', function ($receiver) {
    return 'fullscreenerror';
  });
  var get_POINTER_LOCK_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_LOCK_CHANGE_9qx1pt$', function ($receiver) {
    return 'pointerlockchange';
  });
  var get_POINTER_LOCK_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_LOCK_ERROR_9qx1pt$', function ($receiver) {
    return 'pointerlockerror';
  });
  var get_READY_STATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_READY_STATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'readystatechange';
  });
  var get_VISIBILITY_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_VISIBILITY_CHANGE_9qx1pt$', function ($receiver) {
    return 'visibilitychange';
  });
  var get_ERROR_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ERROR_9qx1pt$', function ($receiver) {
    return 'error';
  });
  var get_OPEN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_OPEN_9qx1pt$', function ($receiver) {
    return 'open';
  });
  var get_LOADING = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOADING_9qx1pt$', function ($receiver) {
    return 'loading';
  });
  var get_LOADING_DONE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOADING_DONE_9qx1pt$', function ($receiver) {
    return 'loadingdone';
  });
  var get_LOADING_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOADING_ERROR_9qx1pt$', function ($receiver) {
    return 'loadingerror';
  });
  var get_CAN_PLAY = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CAN_PLAY_9qx1pt$', function ($receiver) {
    return 'canplay';
  });
  var get_CAN_PLAY_THROUGH = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CAN_PLAY_THROUGH_9qx1pt$', function ($receiver) {
    return 'canplaythrough';
  });
  var get_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CHANGE_9qx1pt$', function ($receiver) {
    return 'change';
  });
  var get_CLOSE_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CLOSE_9qx1pt$', function ($receiver) {
    return 'close';
  });
  var get_CUE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CUE_CHANGE_9qx1pt$', function ($receiver) {
    return 'cuechange';
  });
  var get_DURATION_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DURATION_CHANGE_9qx1pt$', function ($receiver) {
    return 'durationchange';
  });
  var get_EMPTIED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_EMPTIED_9qx1pt$', function ($receiver) {
    return 'emptied';
  });
  var get_INPUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_INPUT_9qx1pt$', function ($receiver) {
    return 'input';
  });
  var get_INVALID = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_INVALID_9qx1pt$', function ($receiver) {
    return 'invalid';
  });
  var get_LOAD = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOAD_9qx1pt$', function ($receiver) {
    return 'load';
  });
  var get_LOADED_DATA = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOADED_DATA_9qx1pt$', function ($receiver) {
    return 'loadeddata';
  });
  var get_LOADED_METADATA = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOADED_METADATA_9qx1pt$', function ($receiver) {
    return 'loadedmetadata';
  });
  var get_LOAD_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOAD_START_9qx1pt$', function ($receiver) {
    return 'loadstart';
  });
  var get_PAUSE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PAUSE_9qx1pt$', function ($receiver) {
    return 'pause';
  });
  var get_PLAY = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PLAY_9qx1pt$', function ($receiver) {
    return 'play';
  });
  var get_PLAYING = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PLAYING_9qx1pt$', function ($receiver) {
    return 'playing';
  });
  var get_RATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_RATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'ratechange';
  });
  var get_RESET = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_RESET_9qx1pt$', function ($receiver) {
    return 'reset';
  });
  var get_SCROLL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SCROLL_9qx1pt$', function ($receiver) {
    return 'scroll';
  });
  var get_SEEKED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SEEKED_9qx1pt$', function ($receiver) {
    return 'seeked';
  });
  var get_SEEKING = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SEEKING_9qx1pt$', function ($receiver) {
    return 'seeking';
  });
  var get_SELECT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SELECT_9qx1pt$', function ($receiver) {
    return 'select';
  });
  var get_SELECTION_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SELECTION_CHANGE_9qx1pt$', function ($receiver) {
    return 'selectionchange';
  });
  var get_SELECT_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SELECT_START_9qx1pt$', function ($receiver) {
    return 'selectstart';
  });
  var get_STALLED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_STALLED_9qx1pt$', function ($receiver) {
    return 'stalled';
  });
  var get_SUSPEND = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SUSPEND_9qx1pt$', function ($receiver) {
    return 'suspend';
  });
  var get_TIME_UPDATE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TIME_UPDATE_9qx1pt$', function ($receiver) {
    return 'timeupdate';
  });
  var get_TOGGLE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TOGGLE_9qx1pt$', function ($receiver) {
    return 'toggle';
  });
  var get_VOLUME_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_VOLUME_CHANGE_9qx1pt$', function ($receiver) {
    return 'volumechange';
  });
  var get_WAITING = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WAITING_9qx1pt$', function ($receiver) {
    return 'waiting';
  });
  var get_WEBKIT_ANIMATION_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WEBKIT_ANIMATION_END_9qx1pt$', function ($receiver) {
    return 'webkitanimationend';
  });
  var get_WEBKIT_ANIMATION_ITERATION = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WEBKIT_ANIMATION_ITERATION_9qx1pt$', function ($receiver) {
    return 'webkitanimationiteration';
  });
  var get_WEBKIT_ANIMATION_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WEBKIT_ANIMATION_START_9qx1pt$', function ($receiver) {
    return 'webkitanimationstart';
  });
  var get_WEBKIT_TRANSITION_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WEBKIT_TRANSITION_END_9qx1pt$', function ($receiver) {
    return 'webkittransitionend';
  });
  var get_ORIENTATION_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ORIENTATION_CHANGE_9qx1pt$', function ($receiver) {
    return 'orientationchange';
  });
  var get_WAITING_FOR_KEY = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WAITING_FOR_KEY_9qx1pt$', function ($receiver) {
    return 'waitingforkey';
  });
  var get_ENTER_PICTURE_IN_PICTURE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ENTER_PICTURE_IN_PICTURE_9qx1pt$', function ($receiver) {
    return 'enterpictureinpicture';
  });
  var get_LEAVE_PICTURE_IN_PICTURE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LEAVE_PICTURE_IN_PICTURE_9qx1pt$', function ($receiver) {
    return 'leavepictureinpicture';
  });
  var get_BLOCKED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_BLOCKED_9qx1pt$', function ($receiver) {
    return 'blocked';
  });
  var get_SUCCESS = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SUCCESS_9qx1pt$', function ($receiver) {
    return 'success';
  });
  var get_COMPLETE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_COMPLETE_9qx1pt$', function ($receiver) {
    return 'complete';
  });
  var get_DEVICE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DEVICE_CHANGE_9qx1pt$', function ($receiver) {
    return 'devicechange';
  });
  var get_KEY_STATUSES_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_KEY_STATUSES_CHANGE_9qx1pt$', function ($receiver) {
    return 'keystatuseschange';
  });
  var get_RESUME = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_RESUME_9qx1pt$', function ($receiver) {
    return 'resume';
  });
  var get_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_START_9qx1pt$', function ($receiver) {
    return 'start';
  });
  var get_STOP = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_STOP_9qx1pt$', function ($receiver) {
    return 'stop';
  });
  var get_SOURCE_CLOSE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SOURCE_CLOSE_9qx1pt$', function ($receiver) {
    return 'sourceclose';
  });
  var get_SOURCE_ENDED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SOURCE_ENDED_9qx1pt$', function ($receiver) {
    return 'sourceended';
  });
  var get_SOURCE_OPEN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SOURCE_OPEN_9qx1pt$', function ($receiver) {
    return 'sourceopen';
  });
  var get_MUTE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MUTE_9qx1pt$', function ($receiver) {
    return 'mute';
  });
  var get_UNMUTE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UNMUTE_9qx1pt$', function ($receiver) {
    return 'unmute';
  });
  var get_CLICK = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CLICK_9qx1pt$', function ($receiver) {
    return 'click';
  });
  var get_SHOW = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SHOW_9qx1pt$', function ($receiver) {
    return 'show';
  });
  var get_PAYMENT_METHOD_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PAYMENT_METHOD_CHANGE_9qx1pt$', function ($receiver) {
    return 'paymentmethodchange';
  });
  var get_RESOURCE_TIMING_BUFFER_FULL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_RESOURCE_TIMING_BUFFER_FULL_9qx1pt$', function ($receiver) {
    return 'resourcetimingbufferfull';
  });
  var get_RESIZE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_RESIZE_9qx1pt$', function ($receiver) {
    return 'resize';
  });
  var get_BUFFERED_AMOUNT_LOW = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_BUFFERED_AMOUNT_LOW_9qx1pt$', function ($receiver) {
    return 'bufferedamountlow';
  });
  var get_CONNECTION_STATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CONNECTION_STATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'connectionstatechange';
  });
  var get_ICE_CANDIDATE_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ICE_CANDIDATE_ERROR_9qx1pt$', function ($receiver) {
    return 'icecandidateerror';
  });
  var get_ICE_CONNECTION_STATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ICE_CONNECTION_STATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'iceconnectionstatechange';
  });
  var get_ICE_GATHERING_STATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ICE_GATHERING_STATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'icegatheringstatechange';
  });
  var get_NEGOTIATION_NEEDED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_NEGOTIATION_NEEDED_9qx1pt$', function ($receiver) {
    return 'negotiationneeded';
  });
  var get_SIGNALING_STATE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SIGNALING_STATE_CHANGE_9qx1pt$', function ($receiver) {
    return 'signalingstatechange';
  });
  var get_CONNECT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CONNECT_9qx1pt$', function ($receiver) {
    return 'connect';
  });
  var get_CONNECTING = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CONNECTING_9qx1pt$', function ($receiver) {
    return 'connecting';
  });
  var get_DISCONNECT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DISCONNECT_9qx1pt$', function ($receiver) {
    return 'disconnect';
  });
  var get_CONTROLLER_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CONTROLLER_CHANGE_9qx1pt$', function ($receiver) {
    return 'controllerchange';
  });
  var get_UPDATE_FOUND = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UPDATE_FOUND_9qx1pt$', function ($receiver) {
    return 'updatefound';
  });
  var get_UPDATE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UPDATE_9qx1pt$', function ($receiver) {
    return 'update';
  });
  var get_UPDATE_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UPDATE_END_9qx1pt$', function ($receiver) {
    return 'updateend';
  });
  var get_UPDATE_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UPDATE_START_9qx1pt$', function ($receiver) {
    return 'updatestart';
  });
  var get_ADD_SOURCE_BUFFER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ADD_SOURCE_BUFFER_9qx1pt$', function ($receiver) {
    return 'addsourcebuffer';
  });
  var get_REMOVE_SOURCE_BUFFER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_REMOVE_SOURCE_BUFFER_9qx1pt$', function ($receiver) {
    return 'removesourcebuffer';
  });
  var get_VOICES_CHANGED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_VOICES_CHANGED_9qx1pt$', function ($receiver) {
    return 'voiceschanged';
  });
  var get_ENTER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ENTER_9qx1pt$', function ($receiver) {
    return 'enter';
  });
  var get_EXIT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_EXIT_9qx1pt$', function ($receiver) {
    return 'exit';
  });
  var get_AFTER_PRINT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_AFTER_PRINT_9qx1pt$', function ($receiver) {
    return 'afterprint';
  });
  var get_BEFORE_PRINT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_BEFORE_PRINT_9qx1pt$', function ($receiver) {
    return 'beforeprint';
  });
  var get_LANGUAGE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LANGUAGE_CHANGE_9qx1pt$', function ($receiver) {
    return 'languagechange';
  });
  var get_OFFLINE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_OFFLINE_9qx1pt$', function ($receiver) {
    return 'offline';
  });
  var get_ONLINE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ONLINE_9qx1pt$', function ($receiver) {
    return 'online';
  });
  var get_UNLOAD = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UNLOAD_9qx1pt$', function ($receiver) {
    return 'unload';
  });
  var get_WEBKIT_FULLSCREEN_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WEBKIT_FULLSCREEN_CHANGE_9qx1pt$', function ($receiver) {
    return 'webkitfullscreenchange';
  });
  var EventType = defineInlineFunction('kotlin-browser.org.w3c.dom.events.EventType_1k4oxk$', function (value) {
    return value;
  });
  var get_BLUR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_BLUR_cvivbr$', function ($receiver) {
    return 'blur';
  });
  var get_FOCUS = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FOCUS_cvivbr$', function ($receiver) {
    return 'focus';
  });
  var get_FOCUS_IN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FOCUS_IN_cvivbr$', function ($receiver) {
    return 'focusin';
  });
  var get_FOCUS_OUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FOCUS_OUT_cvivbr$', function ($receiver) {
    return 'focusout';
  });
  var get_FORM_DATA = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_FORM_DATA_9qx1pt$', function ($receiver) {
    return 'formdata';
  });
  var get_GAMEPAD_CONNECTED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_GAMEPAD_CONNECTED_9qx1pt$', function ($receiver) {
    return 'gamepadconnected';
  });
  var get_GAMEPAD_DISCONNECTED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_GAMEPAD_DISCONNECTED_9qx1pt$', function ($receiver) {
    return 'gamepaddisconnected';
  });
  var get_HASH_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_HASH_CHANGE_g7dk26$', function ($receiver) {
    return 'hashchange';
  });
  var get_VERSION_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_VERSION_CHANGE_9qx1pt$', function ($receiver) {
    return 'versionchange';
  });
  var get_UPGRADENEEDED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UPGRADENEEDED_9qx1pt$', function ($receiver) {
    return 'upgradeneeded';
  });
  var get_BEFORE_INPUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_BEFORE_INPUT_d0a22x$', function ($receiver) {
    return 'beforeinput';
  });
  var get_KEY_DOWN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_KEY_DOWN_6z7tp2$', function ($receiver) {
    return 'keydown';
  });
  var get_KEY_PRESS = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_KEY_PRESS_6z7tp2$', function ($receiver) {
    return 'keypress';
  });
  var get_KEY_UP = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_KEY_UP_6z7tp2$', function ($receiver) {
    return 'keyup';
  });
  var get_ENCRYPTED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ENCRYPTED_gkl5oo$', function ($receiver) {
    return 'encrypted';
  });
  var get_MESSAGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MESSAGE_tbqvta$', function ($receiver) {
    return 'message';
  });
  var get_CHANGE_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CHANGE_1hjjxm$', function ($receiver) {
    return 'change';
  });
  var get_ADD_TRACK = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ADD_TRACK_nw9krx$', function ($receiver) {
    return 'addtrack';
  });
  var get_REMOVE_TRACK = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_REMOVE_TRACK_nw9krx$', function ($receiver) {
    return 'removetrack';
  });
  var get_MESSAGE_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MESSAGE_2qn269$', function ($receiver) {
    return 'message';
  });
  var get_MESSAGE_ERROR = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MESSAGE_ERROR_2qn269$', function ($receiver) {
    return 'messageerror';
  });
  var get_AUX_CLICK = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_AUX_CLICK_2t9ip0$', function ($receiver) {
    return 'auxclick';
  });
  var get_CLICK_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CLICK_2t9ip0$', function ($receiver) {
    return 'click';
  });
  var get_CONTEXT_MENU = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CONTEXT_MENU_2t9ip0$', function ($receiver) {
    return 'contextmenu';
  });
  var get_DBL_CLICK = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DBL_CLICK_2t9ip0$', function ($receiver) {
    return 'dblclick';
  });
  var get_MOUSE_DOWN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_DOWN_2t9ip0$', function ($receiver) {
    return 'mousedown';
  });
  var get_MOUSE_ENTER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_ENTER_2t9ip0$', function ($receiver) {
    return 'mouseenter';
  });
  var get_MOUSE_LEAVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_LEAVE_2t9ip0$', function ($receiver) {
    return 'mouseleave';
  });
  var get_MOUSE_MOVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_MOVE_2t9ip0$', function ($receiver) {
    return 'mousemove';
  });
  var get_MOUSE_OUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_OUT_2t9ip0$', function ($receiver) {
    return 'mouseout';
  });
  var get_MOUSE_OVER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_OVER_2t9ip0$', function ($receiver) {
    return 'mouseover';
  });
  var get_MOUSE_UP = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_MOUSE_UP_2t9ip0$', function ($receiver) {
    return 'mouseup';
  });
  var get_PAGE_HIDE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PAGE_HIDE_7bouc8$', function ($receiver) {
    return 'pagehide';
  });
  var get_PAGE_SHOW = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PAGE_SHOW_7bouc8$', function ($receiver) {
    return 'pageshow';
  });
  var get_GOT_POINTER_CAPTURE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_GOT_POINTER_CAPTURE_h2otr5$', function ($receiver) {
    return 'gotpointercapture';
  });
  var get_LOST_POINTER_CAPTURE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOST_POINTER_CAPTURE_h2otr5$', function ($receiver) {
    return 'lostpointercapture';
  });
  var get_POINTER_CANCEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_CANCEL_h2otr5$', function ($receiver) {
    return 'pointercancel';
  });
  var get_POINTER_DOWN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_DOWN_h2otr5$', function ($receiver) {
    return 'pointerdown';
  });
  var get_POINTER_ENTER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_ENTER_h2otr5$', function ($receiver) {
    return 'pointerenter';
  });
  var get_POINTER_LEAVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_LEAVE_h2otr5$', function ($receiver) {
    return 'pointerleave';
  });
  var get_POINTER_MOVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_MOVE_h2otr5$', function ($receiver) {
    return 'pointermove';
  });
  var get_POINTER_OUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_OUT_h2otr5$', function ($receiver) {
    return 'pointerout';
  });
  var get_POINTER_OVER = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_OVER_h2otr5$', function ($receiver) {
    return 'pointerover';
  });
  var get_POINTER_UP = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POINTER_UP_h2otr5$', function ($receiver) {
    return 'pointerup';
  });
  var get_POP_STATE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_POP_STATE_xk0fg$', function ($receiver) {
    return 'popstate';
  });
  var get_ABORT_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ABORT_p7pypr$', function ($receiver) {
    return 'abort';
  });
  var get_ERROR_1 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ERROR_p7pypr$', function ($receiver) {
    return 'error';
  });
  var get_LOAD_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOAD_p7pypr$', function ($receiver) {
    return 'load';
  });
  var get_LOAD_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOAD_END_p7pypr$', function ($receiver) {
    return 'loadend';
  });
  var get_LOAD_START_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_LOAD_START_p7pypr$', function ($receiver) {
    return 'loadstart';
  });
  var get_PROGRESS = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_PROGRESS_p7pypr$', function ($receiver) {
    return 'progress';
  });
  var get_TIMEOUT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TIMEOUT_p7pypr$', function ($receiver) {
    return 'timeout';
  });
  var get_REJECTION_HANDLED = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_REJECTION_HANDLED_bd0sw2$', function ($receiver) {
    return 'rejectionhandled';
  });
  var get_UNHANDLED_REJECTION = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_UNHANDLED_REJECTION_bd0sw2$', function ($receiver) {
    return 'unhandledrejection';
  });
  var get_TONE_CHANGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TONE_CHANGE_9qx1pt$', function ($receiver) {
    return 'tonechange';
  });
  var get_DATA_CHANNEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_DATA_CHANNEL_9qx1pt$', function ($receiver) {
    return 'datachannel';
  });
  var get_ICE_CANDIDATE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ICE_CANDIDATE_9qx1pt$', function ($receiver) {
    return 'icecandidate';
  });
  var get_TRACK = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TRACK_9qx1pt$', function ($receiver) {
    return 'track';
  });
  var get_SECURITY_POLICY_VIOLATION = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SECURITY_POLICY_VIOLATION_9qx1pt$', function ($receiver) {
    return 'securitypolicyviolation';
  });
  var get_STORAGE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_STORAGE_ve7mq3$', function ($receiver) {
    return 'storage';
  });
  var get_SUBMIT = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_SUBMIT_9qx1pt$', function ($receiver) {
    return 'submit';
  });
  var get_TOUCH_CANCEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TOUCH_CANCEL_h3sxfr$', function ($receiver) {
    return 'touchcancel';
  });
  var get_TOUCH_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TOUCH_END_h3sxfr$', function ($receiver) {
    return 'touchend';
  });
  var get_TOUCH_MOVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TOUCH_MOVE_h3sxfr$', function ($receiver) {
    return 'touchmove';
  });
  var get_TOUCH_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TOUCH_START_h3sxfr$', function ($receiver) {
    return 'touchstart';
  });
  var get_ADD_TRACK_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ADD_TRACK_oy8wxx$', function ($receiver) {
    return 'addtrack';
  });
  var get_REMOVE_TRACK_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_REMOVE_TRACK_oy8wxx$', function ($receiver) {
    return 'removetrack';
  });
  var get_TRANSITION_CANCEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TRANSITION_CANCEL_nxjr0k$', function ($receiver) {
    return 'transitioncancel';
  });
  var get_TRANSITION_END = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TRANSITION_END_nxjr0k$', function ($receiver) {
    return 'transitionend';
  });
  var get_TRANSITION_RUN = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TRANSITION_RUN_nxjr0k$', function ($receiver) {
    return 'transitionrun';
  });
  var get_TRANSITION_START = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_TRANSITION_START_nxjr0k$', function ($receiver) {
    return 'transitionstart';
  });
  var get_ABORT_1 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ABORT_xgp1gj$', function ($receiver) {
    return 'abort';
  });
  var get_RESIZE_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_RESIZE_xgp1gj$', function ($receiver) {
    return 'resize';
  });
  var get_WHEEL = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_WHEEL_e8d6cm$', function ($receiver) {
    return 'wheel';
  });
  var get_fonts = defineInlineFunction('kotlin-browser.org.w3c.dom.get_fonts_4wc2mh$', function ($receiver) {
    return $receiver.fonts;
  });
  var createElement = defineInlineFunction('kotlin-browser.org.w3c.dom.createElement_ngpmlw$', function ($receiver, tagName) {
    return $receiver.createElement(tagName);
  });
  function HTML() {
    HTML_instance = this;
  }
  Object.defineProperty(HTML.prototype, 'a', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_a', function () {
      return 'a';
    })
  });
  Object.defineProperty(HTML.prototype, 'abbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_abbr', function () {
      return 'abbr';
    })
  });
  Object.defineProperty(HTML.prototype, 'address', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_address', function () {
      return 'address';
    })
  });
  Object.defineProperty(HTML.prototype, 'area', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_area', function () {
      return 'area';
    })
  });
  Object.defineProperty(HTML.prototype, 'article', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_article', function () {
      return 'article';
    })
  });
  Object.defineProperty(HTML.prototype, 'aside', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_aside', function () {
      return 'aside';
    })
  });
  Object.defineProperty(HTML.prototype, 'audio', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_audio', function () {
      return 'audio';
    })
  });
  Object.defineProperty(HTML.prototype, 'b', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_b', function () {
      return 'b';
    })
  });
  Object.defineProperty(HTML.prototype, 'base', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_base', function () {
      return 'base';
    })
  });
  Object.defineProperty(HTML.prototype, 'bdi', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_bdi', function () {
      return 'bdi';
    })
  });
  Object.defineProperty(HTML.prototype, 'bdo', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_bdo', function () {
      return 'bdo';
    })
  });
  Object.defineProperty(HTML.prototype, 'big', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_big', function () {
      return 'big';
    })
  });
  Object.defineProperty(HTML.prototype, 'blockquote', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_blockquote', function () {
      return 'blockquote';
    })
  });
  Object.defineProperty(HTML.prototype, 'body', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_body', function () {
      return 'body';
    })
  });
  Object.defineProperty(HTML.prototype, 'br', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_br', function () {
      return 'br';
    })
  });
  Object.defineProperty(HTML.prototype, 'button', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_button', function () {
      return 'button';
    })
  });
  Object.defineProperty(HTML.prototype, 'canvas', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_canvas', function () {
      return 'canvas';
    })
  });
  Object.defineProperty(HTML.prototype, 'caption', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_caption', function () {
      return 'caption';
    })
  });
  Object.defineProperty(HTML.prototype, 'cite', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_cite', function () {
      return 'cite';
    })
  });
  Object.defineProperty(HTML.prototype, 'code', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_code', function () {
      return 'code';
    })
  });
  Object.defineProperty(HTML.prototype, 'col', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_col', function () {
      return 'col';
    })
  });
  Object.defineProperty(HTML.prototype, 'colgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_colgroup', function () {
      return 'colgroup';
    })
  });
  Object.defineProperty(HTML.prototype, 'data', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_data', function () {
      return 'data';
    })
  });
  Object.defineProperty(HTML.prototype, 'datalist', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_datalist', function () {
      return 'datalist';
    })
  });
  Object.defineProperty(HTML.prototype, 'dd', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_dd', function () {
      return 'dd';
    })
  });
  Object.defineProperty(HTML.prototype, 'del', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_del', function () {
      return 'del';
    })
  });
  Object.defineProperty(HTML.prototype, 'details', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_details', function () {
      return 'details';
    })
  });
  Object.defineProperty(HTML.prototype, 'dfn', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_dfn', function () {
      return 'dfn';
    })
  });
  Object.defineProperty(HTML.prototype, 'dialog', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_dialog', function () {
      return 'dialog';
    })
  });
  Object.defineProperty(HTML.prototype, 'div', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_div', function () {
      return 'div';
    })
  });
  Object.defineProperty(HTML.prototype, 'dl', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_dl', function () {
      return 'dl';
    })
  });
  Object.defineProperty(HTML.prototype, 'dt', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_dt', function () {
      return 'dt';
    })
  });
  Object.defineProperty(HTML.prototype, 'em', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_em', function () {
      return 'em';
    })
  });
  Object.defineProperty(HTML.prototype, 'embed', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_embed', function () {
      return 'embed';
    })
  });
  Object.defineProperty(HTML.prototype, 'fieldset', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_fieldset', function () {
      return 'fieldset';
    })
  });
  Object.defineProperty(HTML.prototype, 'figcaption', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_figcaption', function () {
      return 'figcaption';
    })
  });
  Object.defineProperty(HTML.prototype, 'figure', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_figure', function () {
      return 'figure';
    })
  });
  Object.defineProperty(HTML.prototype, 'footer', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_footer', function () {
      return 'footer';
    })
  });
  Object.defineProperty(HTML.prototype, 'form', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_form', function () {
      return 'form';
    })
  });
  Object.defineProperty(HTML.prototype, 'h1', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_h1', function () {
      return 'h1';
    })
  });
  Object.defineProperty(HTML.prototype, 'h2', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_h2', function () {
      return 'h2';
    })
  });
  Object.defineProperty(HTML.prototype, 'h3', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_h3', function () {
      return 'h3';
    })
  });
  Object.defineProperty(HTML.prototype, 'h4', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_h4', function () {
      return 'h4';
    })
  });
  Object.defineProperty(HTML.prototype, 'h5', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_h5', function () {
      return 'h5';
    })
  });
  Object.defineProperty(HTML.prototype, 'h6', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_h6', function () {
      return 'h6';
    })
  });
  Object.defineProperty(HTML.prototype, 'head', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_head', function () {
      return 'head';
    })
  });
  Object.defineProperty(HTML.prototype, 'header', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_header', function () {
      return 'header';
    })
  });
  Object.defineProperty(HTML.prototype, 'hgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_hgroup', function () {
      return 'hgroup';
    })
  });
  Object.defineProperty(HTML.prototype, 'hr', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_hr', function () {
      return 'hr';
    })
  });
  Object.defineProperty(HTML.prototype, 'html', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_html', function () {
      return 'html';
    })
  });
  Object.defineProperty(HTML.prototype, 'i', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_i', function () {
      return 'i';
    })
  });
  Object.defineProperty(HTML.prototype, 'iframe', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_iframe', function () {
      return 'iframe';
    })
  });
  Object.defineProperty(HTML.prototype, 'img', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_img', function () {
      return 'img';
    })
  });
  Object.defineProperty(HTML.prototype, 'input', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_input', function () {
      return 'input';
    })
  });
  Object.defineProperty(HTML.prototype, 'ins', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_ins', function () {
      return 'ins';
    })
  });
  Object.defineProperty(HTML.prototype, 'kbd', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_kbd', function () {
      return 'kbd';
    })
  });
  Object.defineProperty(HTML.prototype, 'keygen', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_keygen', function () {
      return 'keygen';
    })
  });
  Object.defineProperty(HTML.prototype, 'label', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_label', function () {
      return 'label';
    })
  });
  Object.defineProperty(HTML.prototype, 'legend', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_legend', function () {
      return 'legend';
    })
  });
  Object.defineProperty(HTML.prototype, 'li', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_li', function () {
      return 'li';
    })
  });
  Object.defineProperty(HTML.prototype, 'link', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_link', function () {
      return 'link';
    })
  });
  Object.defineProperty(HTML.prototype, 'main', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_main', function () {
      return 'main';
    })
  });
  Object.defineProperty(HTML.prototype, 'map', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_map', function () {
      return 'map';
    })
  });
  Object.defineProperty(HTML.prototype, 'mark', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_mark', function () {
      return 'mark';
    })
  });
  Object.defineProperty(HTML.prototype, 'menu', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_menu', function () {
      return 'menu';
    })
  });
  Object.defineProperty(HTML.prototype, 'menuitem', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_menuitem', function () {
      return 'menuitem';
    })
  });
  Object.defineProperty(HTML.prototype, 'meta', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_meta', function () {
      return 'meta';
    })
  });
  Object.defineProperty(HTML.prototype, 'meter', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_meter', function () {
      return 'meter';
    })
  });
  Object.defineProperty(HTML.prototype, 'nav', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_nav', function () {
      return 'nav';
    })
  });
  Object.defineProperty(HTML.prototype, 'noscript', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_noscript', function () {
      return 'noscript';
    })
  });
  Object.defineProperty(HTML.prototype, 'object', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_object', function () {
      return 'object';
    })
  });
  Object.defineProperty(HTML.prototype, 'ol', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_ol', function () {
      return 'ol';
    })
  });
  Object.defineProperty(HTML.prototype, 'optgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_optgroup', function () {
      return 'optgroup';
    })
  });
  Object.defineProperty(HTML.prototype, 'option', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_option', function () {
      return 'option';
    })
  });
  Object.defineProperty(HTML.prototype, 'output', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_output', function () {
      return 'output';
    })
  });
  Object.defineProperty(HTML.prototype, 'p', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_p', function () {
      return 'p';
    })
  });
  Object.defineProperty(HTML.prototype, 'param', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_param', function () {
      return 'param';
    })
  });
  Object.defineProperty(HTML.prototype, 'picture', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_picture', function () {
      return 'picture';
    })
  });
  Object.defineProperty(HTML.prototype, 'pre', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_pre', function () {
      return 'pre';
    })
  });
  Object.defineProperty(HTML.prototype, 'progress', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_progress', function () {
      return 'progress';
    })
  });
  Object.defineProperty(HTML.prototype, 'q', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_q', function () {
      return 'q';
    })
  });
  Object.defineProperty(HTML.prototype, 'rp', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_rp', function () {
      return 'rp';
    })
  });
  Object.defineProperty(HTML.prototype, 'rt', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_rt', function () {
      return 'rt';
    })
  });
  Object.defineProperty(HTML.prototype, 'ruby', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_ruby', function () {
      return 'ruby';
    })
  });
  Object.defineProperty(HTML.prototype, 's', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_s', function () {
      return 's';
    })
  });
  Object.defineProperty(HTML.prototype, 'samp', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_samp', function () {
      return 'samp';
    })
  });
  Object.defineProperty(HTML.prototype, 'slot', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_slot', function () {
      return 'slot';
    })
  });
  Object.defineProperty(HTML.prototype, 'script', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_script', function () {
      return 'script';
    })
  });
  Object.defineProperty(HTML.prototype, 'section', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_section', function () {
      return 'section';
    })
  });
  Object.defineProperty(HTML.prototype, 'select', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_select', function () {
      return 'select';
    })
  });
  Object.defineProperty(HTML.prototype, 'small', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_small', function () {
      return 'small';
    })
  });
  Object.defineProperty(HTML.prototype, 'source', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_source', function () {
      return 'source';
    })
  });
  Object.defineProperty(HTML.prototype, 'span', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_span', function () {
      return 'span';
    })
  });
  Object.defineProperty(HTML.prototype, 'strong', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_strong', function () {
      return 'strong';
    })
  });
  Object.defineProperty(HTML.prototype, 'style', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_style', function () {
      return 'style';
    })
  });
  Object.defineProperty(HTML.prototype, 'sub', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_sub', function () {
      return 'sub';
    })
  });
  Object.defineProperty(HTML.prototype, 'summary', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_summary', function () {
      return 'summary';
    })
  });
  Object.defineProperty(HTML.prototype, 'sup', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_sup', function () {
      return 'sup';
    })
  });
  Object.defineProperty(HTML.prototype, 'table', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_table', function () {
      return 'table';
    })
  });
  Object.defineProperty(HTML.prototype, 'template', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_template', function () {
      return 'template';
    })
  });
  Object.defineProperty(HTML.prototype, 'tbody', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_tbody', function () {
      return 'tbody';
    })
  });
  Object.defineProperty(HTML.prototype, 'td', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_td', function () {
      return 'td';
    })
  });
  Object.defineProperty(HTML.prototype, 'textarea', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_textarea', function () {
      return 'textarea';
    })
  });
  Object.defineProperty(HTML.prototype, 'tfoot', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_tfoot', function () {
      return 'tfoot';
    })
  });
  Object.defineProperty(HTML.prototype, 'th', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_th', function () {
      return 'th';
    })
  });
  Object.defineProperty(HTML.prototype, 'thead', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_thead', function () {
      return 'thead';
    })
  });
  Object.defineProperty(HTML.prototype, 'time', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_time', function () {
      return 'time';
    })
  });
  Object.defineProperty(HTML.prototype, 'title', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_title', function () {
      return 'title';
    })
  });
  Object.defineProperty(HTML.prototype, 'tr', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_tr', function () {
      return 'tr';
    })
  });
  Object.defineProperty(HTML.prototype, 'track', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_track', function () {
      return 'track';
    })
  });
  Object.defineProperty(HTML.prototype, 'u', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_u', function () {
      return 'u';
    })
  });
  Object.defineProperty(HTML.prototype, 'ul', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_ul', function () {
      return 'ul';
    })
  });
  Object.defineProperty(HTML.prototype, 'var', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_var', function () {
      return 'var';
    })
  });
  Object.defineProperty(HTML.prototype, 'video', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_video', function () {
      return 'video';
    })
  });
  Object.defineProperty(HTML.prototype, 'wbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_wbr', function () {
      return 'wbr';
    })
  });
  Object.defineProperty(HTML.prototype, 'webview', {
    configurable: true,
    get: defineInlineFunction('kotlin-browser.org.w3c.dom.HTML.get_webview', function () {
      return 'webview';
    })
  });
  HTML.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HTML',
    interfaces: []
  };
  var HTML_instance = null;
  function HTML_getInstance() {
    if (HTML_instance === null) {
      new HTML();
    }
    return HTML_instance;
  }
  var TagName = defineInlineFunction('kotlin-browser.org.w3c.dom.TagName_evuobd$', function (tagName) {
    return tagName;
  });
  var Worker_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.Worker_5mgx3h$', wrapFunction(function () {
    var Worker_init = Worker;
    return function (scriptURL) {
      return new Worker_init(scriptURL);
    };
  }));
  var Worker_1 = defineInlineFunction('kotlin-browser.org.w3c.dom.Worker_irknw6$', wrapFunction(function () {
    var Worker_init = Worker;
    return function (scriptURL, options) {
      return new Worker_init(scriptURL, options);
    };
  }));
  var apply_KT_52211_workaround = defineInlineFunction('kotlin-browser.org.w3c.dom.clipboard.apply_KT_52211_workaround_e84pm3$', function ($receiver) {
    return $receiver;
  });
  var write = defineInlineFunction('kotlin-browser.org.w3c.dom.clipboard.write_n2z0dp$', function ($receiver, data) {
    return $receiver.write(data);
  });
  var ClipboardItemDataType = defineInlineFunction('kotlin-browser.org.w3c.dom.clipboard.ClipboardItemDataType_61zpoe$', function (value) {
    return value;
  });
  var ClipboardItemDataType_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.clipboard.ClipboardItemDataType_6d4z4r$', function (value) {
    return value;
  });
  var CustomEvent_0 = defineInlineFunction('kotlin-browser.org.w3c.dom.events.CustomEvent_9gorr6$', wrapFunction(function () {
    var CustomEvent_init = CustomEvent;
    return function (type, init) {
      return new CustomEvent_init(type, init);
    };
  }));
  var get_ACTIVE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_ACTIVE_j9a611$', function ($receiver) {
    var $receiver_0 = {};
    $receiver_0.passive = false;
    return $receiver_0;
  });
  var get_CAPTURE = defineInlineFunction('kotlin-browser.org.w3c.dom.events.get_CAPTURE_j9a611$', function ($receiver) {
    var $receiver_0 = {};
    $receiver_0.capture = true;
    return $receiver_0;
  });
  function addEventHandler($receiver, type, handler) {
    return addEventHandler_0($receiver, type, undefined, handler);
  }
  function addEventHandler$lambda(closure$type, closure$handler, closure$options, this$addEventHandler) {
    return function () {
      this$addEventHandler.removeEventListener(closure$type, closure$handler, closure$options);
      return Unit;
    };
  }
  function addEventHandler_0($receiver, type, options, handler) {
    $receiver.addEventListener(type, handler, options);
    return addEventHandler$lambda(type, handler, options, $receiver);
  }
  function get_signal($receiver) {
    return $receiver.signal;
  }
  function set_signal($receiver, value) {
    $receiver.signal = value;
  }
  var package$org = _.org || (_.org = {});
  var package$w3c = package$org.w3c || (package$org.w3c = {});
  var package$dom = package$w3c.dom || (package$w3c.dom = {});
  var package$events = package$dom.events || (package$dom.events = {});
  package$events.EventType_1k4oxk$ = EventType;
  $$importsForInline$$['kotlin-browser'] = _;
  package$events.get_ANIMATION_CANCEL_pikjst$ = get_ANIMATION_CANCEL;
  package$events.get_ANIMATION_END_pikjst$ = get_ANIMATION_END;
  package$events.get_ANIMATION_ITERATION_pikjst$ = get_ANIMATION_ITERATION;
  package$events.get_ANIMATION_START_pikjst$ = get_ANIMATION_START;
  package$events.get_CANCEL_9qx1pt$ = get_CANCEL;
  package$events.get_FINISH_9qx1pt$ = get_FINISH;
  package$events.get_AUDIO_PROCESS_9qx1pt$ = get_AUDIO_PROCESS;
  package$events.get_BEFORE_UNLOAD_hyygvm$ = get_BEFORE_UNLOAD;
  package$events.get_DATA_AVAILABLE_9qx1pt$ = get_DATA_AVAILABLE;
  package$events.get_COPY_gdefzs$ = get_COPY;
  package$events.get_CUT_gdefzs$ = get_CUT;
  package$events.get_PASTE_gdefzs$ = get_PASTE;
  package$events.get_CLOSE_jawzny$ = get_CLOSE;
  package$events.get_COMPOSITION_END_jhdeqx$ = get_COMPOSITION_END;
  package$events.get_COMPOSITION_START_jhdeqx$ = get_COMPOSITION_START;
  package$events.get_COMPOSITION_UPDATE_jhdeqx$ = get_COMPOSITION_UPDATE;
  package$events.get_DEVICE_MOTION_9qx1pt$ = get_DEVICE_MOTION;
  package$events.get_DEVICE_ORIENTATION_9qx1pt$ = get_DEVICE_ORIENTATION;
  package$events.get_DRAG_sqmuo8$ = get_DRAG;
  package$events.get_DRAG_END_sqmuo8$ = get_DRAG_END;
  package$events.get_DRAG_ENTER_sqmuo8$ = get_DRAG_ENTER;
  package$events.get_DRAG_LEAVE_sqmuo8$ = get_DRAG_LEAVE;
  package$events.get_DRAG_OVER_sqmuo8$ = get_DRAG_OVER;
  package$events.get_DRAG_START_sqmuo8$ = get_DRAG_START;
  package$events.get_DROP_sqmuo8$ = get_DROP;
  package$events.get_ERROR_lzhrwe$ = get_ERROR;
  package$events.get_ABORT_9qx1pt$ = get_ABORT;
  package$events.get_REMOVE_9qx1pt$ = get_REMOVE;
  package$events.get_ENDED_9qx1pt$ = get_ENDED;
  package$events.get_PROCESS_OR_ERROR_9qx1pt$ = get_PROCESS_OR_ERROR;
  package$events.get_STATE_CHANGE_9qx1pt$ = get_STATE_CHANGE;
  package$events.get_FULLSCREEN_CHANGE_9qx1pt$ = get_FULLSCREEN_CHANGE;
  package$events.get_FULLSCREEN_ERROR_9qx1pt$ = get_FULLSCREEN_ERROR;
  package$events.get_POINTER_LOCK_CHANGE_9qx1pt$ = get_POINTER_LOCK_CHANGE;
  package$events.get_POINTER_LOCK_ERROR_9qx1pt$ = get_POINTER_LOCK_ERROR;
  package$events.get_READY_STATE_CHANGE_9qx1pt$ = get_READY_STATE_CHANGE;
  package$events.get_VISIBILITY_CHANGE_9qx1pt$ = get_VISIBILITY_CHANGE;
  package$events.get_ERROR_9qx1pt$ = get_ERROR_0;
  package$events.get_OPEN_9qx1pt$ = get_OPEN;
  package$events.get_LOADING_9qx1pt$ = get_LOADING;
  package$events.get_LOADING_DONE_9qx1pt$ = get_LOADING_DONE;
  package$events.get_LOADING_ERROR_9qx1pt$ = get_LOADING_ERROR;
  package$events.get_CAN_PLAY_9qx1pt$ = get_CAN_PLAY;
  package$events.get_CAN_PLAY_THROUGH_9qx1pt$ = get_CAN_PLAY_THROUGH;
  package$events.get_CHANGE_9qx1pt$ = get_CHANGE;
  package$events.get_CLOSE_9qx1pt$ = get_CLOSE_0;
  package$events.get_CUE_CHANGE_9qx1pt$ = get_CUE_CHANGE;
  package$events.get_DURATION_CHANGE_9qx1pt$ = get_DURATION_CHANGE;
  package$events.get_EMPTIED_9qx1pt$ = get_EMPTIED;
  package$events.get_INPUT_9qx1pt$ = get_INPUT;
  package$events.get_INVALID_9qx1pt$ = get_INVALID;
  package$events.get_LOAD_9qx1pt$ = get_LOAD;
  package$events.get_LOADED_DATA_9qx1pt$ = get_LOADED_DATA;
  package$events.get_LOADED_METADATA_9qx1pt$ = get_LOADED_METADATA;
  package$events.get_LOAD_START_9qx1pt$ = get_LOAD_START;
  package$events.get_PAUSE_9qx1pt$ = get_PAUSE;
  package$events.get_PLAY_9qx1pt$ = get_PLAY;
  package$events.get_PLAYING_9qx1pt$ = get_PLAYING;
  package$events.get_RATE_CHANGE_9qx1pt$ = get_RATE_CHANGE;
  package$events.get_RESET_9qx1pt$ = get_RESET;
  package$events.get_SCROLL_9qx1pt$ = get_SCROLL;
  package$events.get_SEEKED_9qx1pt$ = get_SEEKED;
  package$events.get_SEEKING_9qx1pt$ = get_SEEKING;
  package$events.get_SELECT_9qx1pt$ = get_SELECT;
  package$events.get_SELECTION_CHANGE_9qx1pt$ = get_SELECTION_CHANGE;
  package$events.get_SELECT_START_9qx1pt$ = get_SELECT_START;
  package$events.get_STALLED_9qx1pt$ = get_STALLED;
  package$events.get_SUSPEND_9qx1pt$ = get_SUSPEND;
  package$events.get_TIME_UPDATE_9qx1pt$ = get_TIME_UPDATE;
  package$events.get_TOGGLE_9qx1pt$ = get_TOGGLE;
  package$events.get_VOLUME_CHANGE_9qx1pt$ = get_VOLUME_CHANGE;
  package$events.get_WAITING_9qx1pt$ = get_WAITING;
  package$events.get_WEBKIT_ANIMATION_END_9qx1pt$ = get_WEBKIT_ANIMATION_END;
  package$events.get_WEBKIT_ANIMATION_ITERATION_9qx1pt$ = get_WEBKIT_ANIMATION_ITERATION;
  package$events.get_WEBKIT_ANIMATION_START_9qx1pt$ = get_WEBKIT_ANIMATION_START;
  package$events.get_WEBKIT_TRANSITION_END_9qx1pt$ = get_WEBKIT_TRANSITION_END;
  package$events.get_ORIENTATION_CHANGE_9qx1pt$ = get_ORIENTATION_CHANGE;
  package$events.get_WAITING_FOR_KEY_9qx1pt$ = get_WAITING_FOR_KEY;
  package$events.get_ENTER_PICTURE_IN_PICTURE_9qx1pt$ = get_ENTER_PICTURE_IN_PICTURE;
  package$events.get_LEAVE_PICTURE_IN_PICTURE_9qx1pt$ = get_LEAVE_PICTURE_IN_PICTURE;
  package$events.get_BLOCKED_9qx1pt$ = get_BLOCKED;
  package$events.get_SUCCESS_9qx1pt$ = get_SUCCESS;
  package$events.get_COMPLETE_9qx1pt$ = get_COMPLETE;
  package$events.get_DEVICE_CHANGE_9qx1pt$ = get_DEVICE_CHANGE;
  package$events.get_KEY_STATUSES_CHANGE_9qx1pt$ = get_KEY_STATUSES_CHANGE;
  package$events.get_RESUME_9qx1pt$ = get_RESUME;
  package$events.get_START_9qx1pt$ = get_START;
  package$events.get_STOP_9qx1pt$ = get_STOP;
  package$events.get_SOURCE_CLOSE_9qx1pt$ = get_SOURCE_CLOSE;
  package$events.get_SOURCE_ENDED_9qx1pt$ = get_SOURCE_ENDED;
  package$events.get_SOURCE_OPEN_9qx1pt$ = get_SOURCE_OPEN;
  package$events.get_MUTE_9qx1pt$ = get_MUTE;
  package$events.get_UNMUTE_9qx1pt$ = get_UNMUTE;
  package$events.get_CLICK_9qx1pt$ = get_CLICK;
  package$events.get_SHOW_9qx1pt$ = get_SHOW;
  package$events.get_PAYMENT_METHOD_CHANGE_9qx1pt$ = get_PAYMENT_METHOD_CHANGE;
  package$events.get_RESOURCE_TIMING_BUFFER_FULL_9qx1pt$ = get_RESOURCE_TIMING_BUFFER_FULL;
  package$events.get_RESIZE_9qx1pt$ = get_RESIZE;
  package$events.get_BUFFERED_AMOUNT_LOW_9qx1pt$ = get_BUFFERED_AMOUNT_LOW;
  package$events.get_CONNECTION_STATE_CHANGE_9qx1pt$ = get_CONNECTION_STATE_CHANGE;
  package$events.get_ICE_CANDIDATE_ERROR_9qx1pt$ = get_ICE_CANDIDATE_ERROR;
  package$events.get_ICE_CONNECTION_STATE_CHANGE_9qx1pt$ = get_ICE_CONNECTION_STATE_CHANGE;
  package$events.get_ICE_GATHERING_STATE_CHANGE_9qx1pt$ = get_ICE_GATHERING_STATE_CHANGE;
  package$events.get_NEGOTIATION_NEEDED_9qx1pt$ = get_NEGOTIATION_NEEDED;
  package$events.get_SIGNALING_STATE_CHANGE_9qx1pt$ = get_SIGNALING_STATE_CHANGE;
  package$events.get_CONNECT_9qx1pt$ = get_CONNECT;
  package$events.get_CONNECTING_9qx1pt$ = get_CONNECTING;
  package$events.get_DISCONNECT_9qx1pt$ = get_DISCONNECT;
  package$events.get_CONTROLLER_CHANGE_9qx1pt$ = get_CONTROLLER_CHANGE;
  package$events.get_UPDATE_FOUND_9qx1pt$ = get_UPDATE_FOUND;
  package$events.get_UPDATE_9qx1pt$ = get_UPDATE;
  package$events.get_UPDATE_END_9qx1pt$ = get_UPDATE_END;
  package$events.get_UPDATE_START_9qx1pt$ = get_UPDATE_START;
  package$events.get_ADD_SOURCE_BUFFER_9qx1pt$ = get_ADD_SOURCE_BUFFER;
  package$events.get_REMOVE_SOURCE_BUFFER_9qx1pt$ = get_REMOVE_SOURCE_BUFFER;
  package$events.get_VOICES_CHANGED_9qx1pt$ = get_VOICES_CHANGED;
  package$events.get_ENTER_9qx1pt$ = get_ENTER;
  package$events.get_EXIT_9qx1pt$ = get_EXIT;
  package$events.get_AFTER_PRINT_9qx1pt$ = get_AFTER_PRINT;
  package$events.get_BEFORE_PRINT_9qx1pt$ = get_BEFORE_PRINT;
  package$events.get_LANGUAGE_CHANGE_9qx1pt$ = get_LANGUAGE_CHANGE;
  package$events.get_OFFLINE_9qx1pt$ = get_OFFLINE;
  package$events.get_ONLINE_9qx1pt$ = get_ONLINE;
  package$events.get_UNLOAD_9qx1pt$ = get_UNLOAD;
  package$events.get_WEBKIT_FULLSCREEN_CHANGE_9qx1pt$ = get_WEBKIT_FULLSCREEN_CHANGE;
  package$events.get_BLUR_cvivbr$ = get_BLUR;
  package$events.get_FOCUS_cvivbr$ = get_FOCUS;
  package$events.get_FOCUS_IN_cvivbr$ = get_FOCUS_IN;
  package$events.get_FOCUS_OUT_cvivbr$ = get_FOCUS_OUT;
  package$events.get_FORM_DATA_9qx1pt$ = get_FORM_DATA;
  package$events.get_GAMEPAD_CONNECTED_9qx1pt$ = get_GAMEPAD_CONNECTED;
  package$events.get_GAMEPAD_DISCONNECTED_9qx1pt$ = get_GAMEPAD_DISCONNECTED;
  package$events.get_HASH_CHANGE_g7dk26$ = get_HASH_CHANGE;
  package$events.get_VERSION_CHANGE_9qx1pt$ = get_VERSION_CHANGE;
  package$events.get_UPGRADENEEDED_9qx1pt$ = get_UPGRADENEEDED;
  package$events.get_BEFORE_INPUT_d0a22x$ = get_BEFORE_INPUT;
  package$events.get_KEY_DOWN_6z7tp2$ = get_KEY_DOWN;
  package$events.get_KEY_PRESS_6z7tp2$ = get_KEY_PRESS;
  package$events.get_KEY_UP_6z7tp2$ = get_KEY_UP;
  package$events.get_ENCRYPTED_gkl5oo$ = get_ENCRYPTED;
  package$events.get_MESSAGE_tbqvta$ = get_MESSAGE;
  package$events.get_CHANGE_1hjjxm$ = get_CHANGE_0;
  package$events.get_ADD_TRACK_nw9krx$ = get_ADD_TRACK;
  package$events.get_REMOVE_TRACK_nw9krx$ = get_REMOVE_TRACK;
  package$events.get_MESSAGE_2qn269$ = get_MESSAGE_0;
  package$events.get_MESSAGE_ERROR_2qn269$ = get_MESSAGE_ERROR;
  package$events.get_AUX_CLICK_2t9ip0$ = get_AUX_CLICK;
  package$events.get_CLICK_2t9ip0$ = get_CLICK_0;
  package$events.get_CONTEXT_MENU_2t9ip0$ = get_CONTEXT_MENU;
  package$events.get_DBL_CLICK_2t9ip0$ = get_DBL_CLICK;
  package$events.get_MOUSE_DOWN_2t9ip0$ = get_MOUSE_DOWN;
  package$events.get_MOUSE_ENTER_2t9ip0$ = get_MOUSE_ENTER;
  package$events.get_MOUSE_LEAVE_2t9ip0$ = get_MOUSE_LEAVE;
  package$events.get_MOUSE_MOVE_2t9ip0$ = get_MOUSE_MOVE;
  package$events.get_MOUSE_OUT_2t9ip0$ = get_MOUSE_OUT;
  package$events.get_MOUSE_OVER_2t9ip0$ = get_MOUSE_OVER;
  package$events.get_MOUSE_UP_2t9ip0$ = get_MOUSE_UP;
  package$events.get_PAGE_HIDE_7bouc8$ = get_PAGE_HIDE;
  package$events.get_PAGE_SHOW_7bouc8$ = get_PAGE_SHOW;
  package$events.get_GOT_POINTER_CAPTURE_h2otr5$ = get_GOT_POINTER_CAPTURE;
  package$events.get_LOST_POINTER_CAPTURE_h2otr5$ = get_LOST_POINTER_CAPTURE;
  package$events.get_POINTER_CANCEL_h2otr5$ = get_POINTER_CANCEL;
  package$events.get_POINTER_DOWN_h2otr5$ = get_POINTER_DOWN;
  package$events.get_POINTER_ENTER_h2otr5$ = get_POINTER_ENTER;
  package$events.get_POINTER_LEAVE_h2otr5$ = get_POINTER_LEAVE;
  package$events.get_POINTER_MOVE_h2otr5$ = get_POINTER_MOVE;
  package$events.get_POINTER_OUT_h2otr5$ = get_POINTER_OUT;
  package$events.get_POINTER_OVER_h2otr5$ = get_POINTER_OVER;
  package$events.get_POINTER_UP_h2otr5$ = get_POINTER_UP;
  package$events.get_POP_STATE_xk0fg$ = get_POP_STATE;
  package$events.get_ABORT_p7pypr$ = get_ABORT_0;
  package$events.get_ERROR_p7pypr$ = get_ERROR_1;
  package$events.get_LOAD_p7pypr$ = get_LOAD_0;
  package$events.get_LOAD_END_p7pypr$ = get_LOAD_END;
  package$events.get_LOAD_START_p7pypr$ = get_LOAD_START_0;
  package$events.get_PROGRESS_p7pypr$ = get_PROGRESS;
  package$events.get_TIMEOUT_p7pypr$ = get_TIMEOUT;
  package$events.get_REJECTION_HANDLED_bd0sw2$ = get_REJECTION_HANDLED;
  package$events.get_UNHANDLED_REJECTION_bd0sw2$ = get_UNHANDLED_REJECTION;
  package$events.get_TONE_CHANGE_9qx1pt$ = get_TONE_CHANGE;
  package$events.get_DATA_CHANNEL_9qx1pt$ = get_DATA_CHANNEL;
  package$events.get_ICE_CANDIDATE_9qx1pt$ = get_ICE_CANDIDATE;
  package$events.get_TRACK_9qx1pt$ = get_TRACK;
  package$events.get_SECURITY_POLICY_VIOLATION_9qx1pt$ = get_SECURITY_POLICY_VIOLATION;
  package$events.get_STORAGE_ve7mq3$ = get_STORAGE;
  package$events.get_SUBMIT_9qx1pt$ = get_SUBMIT;
  package$events.get_TOUCH_CANCEL_h3sxfr$ = get_TOUCH_CANCEL;
  package$events.get_TOUCH_END_h3sxfr$ = get_TOUCH_END;
  package$events.get_TOUCH_MOVE_h3sxfr$ = get_TOUCH_MOVE;
  package$events.get_TOUCH_START_h3sxfr$ = get_TOUCH_START;
  package$events.get_ADD_TRACK_oy8wxx$ = get_ADD_TRACK_0;
  package$events.get_REMOVE_TRACK_oy8wxx$ = get_REMOVE_TRACK_0;
  package$events.get_TRANSITION_CANCEL_nxjr0k$ = get_TRANSITION_CANCEL;
  package$events.get_TRANSITION_END_nxjr0k$ = get_TRANSITION_END;
  package$events.get_TRANSITION_RUN_nxjr0k$ = get_TRANSITION_RUN;
  package$events.get_TRANSITION_START_nxjr0k$ = get_TRANSITION_START;
  package$events.get_ABORT_xgp1gj$ = get_ABORT_1;
  package$events.get_RESIZE_xgp1gj$ = get_RESIZE_0;
  package$events.get_WHEEL_e8d6cm$ = get_WHEEL;
  package$dom.get_fonts_4wc2mh$ = get_fonts;
  package$dom.createElement_ngpmlw$ = createElement;
  package$dom.TagName_evuobd$ = TagName;
  Object.defineProperty(package$dom, 'HTML', {
    get: HTML_getInstance
  });
  package$dom.Worker_5mgx3h$ = Worker_0;
  package$dom.Worker_irknw6$ = Worker_1;
  var package$clipboard = package$dom.clipboard || (package$dom.clipboard = {});
  package$clipboard.apply_KT_52211_workaround_e84pm3$ = apply_KT_52211_workaround;
  package$clipboard.write_n2z0dp$ = write;
  package$clipboard.ClipboardItemDataType_61zpoe$ = ClipboardItemDataType;
  package$clipboard.ClipboardItemDataType_6d4z4r$ = ClipboardItemDataType_0;
  package$events.CustomEvent_9gorr6$ = CustomEvent_0;
  $$importsForInline$$['kotlin-js'] = $module$kotlin_js;
  package$events.get_ACTIVE_j9a611$ = get_ACTIVE;
  package$events.get_CAPTURE_j9a611$ = get_CAPTURE;
  package$events.addEventHandler_8jemr3$ = addEventHandler;
  package$events.addEventHandler_1c36z0$ = addEventHandler_0;
  var package$fetch = package$w3c.fetch || (package$w3c.fetch = {});
  package$fetch.get_signal_1oz7jp$ = get_signal;
  package$fetch.set_signal_eq7v35$ = set_signal;
  Kotlin.defineModule('kotlin-browser', _);
  return _;
}));
