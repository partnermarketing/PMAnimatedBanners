(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cursor module for controlling hover states in the canvas, will inject
 * custom css rules into the DOM and return methods for changing the
 * cursor.
 *
 * @return {Object} Object literal with methods for setting and getting
 *                  the cursor, accepted cursor types 'pointers' and
 *                  'default'
 */

exports.default = function () {
  // inject css rules into the dom
  (function (head) {
    // set css rules
    var css = '\n      canvas#canvas {\n        cursor: default !important;\n      }\n      canvas#canvas.has-pointer {\n        cursor: pointer !important;\n      }\n    ';
    var style = document.createElement('style');

    // insert css rules to stylesheet
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    // inject to head
    head.appendChild(style);
  })(document.head || document.getElementsByTagName('head')[0]);

  var cursor = void 0;
  return {

    /**
     * set cursor state for canvas
     *
     * @param  {String} state [the cursor state, accepts either 'pointer' or 'default']
     * @return {Void} Void
     */
    set: function set(state) {
      cursor = state;
      if (typeof stage !== 'undefined' && cursor === 'pointer') {
        _util2.default.addClass(stage.canvas, 'has-pointer');
      } else if (typeof stage !== 'undefined') {
        _util2.default.removeClass(stage.canvas, 'has-pointer');
      }
    },

    /**
     * gets cursor state
     *
     * @return {String} the current cursor
     */
    get: function get() {
      return cursor;
    }

  };
}();

},{"./util":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * getPmData method to retrieve users template data from the api
 *
 * @param  {String} type [the type of data, either 'image', 'text', 'colour' or 'link']
 * @param  {String} name [the data reference as defined in the template editor]
 * @return {String} the template data value
 */

exports.default = window.getPmData = function (type, name) {
  // ensure api is accessible
  if (!window.templateData) throw Error('unable to access api');
  // setup data cache
  window.pmDataCache = {};
  var result = void 0;
  // fetch data by type and name
  if (type === 'image') {
    result = templateData.getImageByName(name);
  } else if (type === 'text') {
    result = templateData.getTextByName(name);
  } else if (type === 'colour' || type === 'color') {
    result = templateData.getColoursByName(name);
  } else if (type === 'link') {
    result = templateData.getLinkByName(name);
  }
  // store data in cache
  if (!window.pmDataCache[type]) window.pmDataCache[type] = {};
  window.pmDataCache[type][name] = result;
  return result;
};

},{}],3:[function(require,module,exports){
'use strict';

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interval = setInterval(function () {
  if (typeof stage !== 'undefined') {
    // eslint-disable-next-line no-unused-vars
    var loader = new _loader2.default();
    clearInterval(interval);
  }
}, 1);

},{"./data":2,"./loader":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Layer class, instantiate layers with custom data to render new images/text/links
 * to the canvas. Will work with animate CC object references.
 */

var Layer = function () {

  /**
   * initialise method, assigns properties to layer instance
   * and starts calculation and rendering of layer
   *
   * @param  {Object} data  [the layers data such as shape reference, image/text/link, alignment]
   * @param  {Object} shape [the createjs shape instantiated via animate CC lib]
   * @return {void} void
   */

  function Layer(_data, shape) {
    var _this = this;

    _classCallCheck(this, Layer);

    // Set layer values
    var data = Object.assign(this._defaultData, _data);
    Object.assign(this, { shape: shape, data: data });

    // Calculate dimensions, position and render
    this.calculate().then(function () {
      return _this.render();
    });
  }

  /**
   * calculation method used to asyncronously fetch container and layer
   * dimensions and positions.
   *
   * @return {Promise} [will resolve once layer size and position has been set]
   */


  _createClass(Layer, [{
    key: 'calculate',
    value: function calculate() {
      var _this2 = this;

      // Create and return promise
      return new Promise(function (resolve) {
        // If layer is using an image, fetch src and calculate position and size
        if (_this2.data.image) {
          _this2.calculateSize().then(function () {
            return _this2.calculatePos().then(resolve);
          });

          // If layer is using text or link no need to calculate position or size
        } else {
          resolve();
        }
      });
    }

    /**
     * render method to load data onto the canvas, will handle different data types to
     * determine which way to render the layer.
     *
     * @return {Void} void
     */

  }, {
    key: 'render',
    value: function render() {
      // If rendering an image
      if (this.data.image) {
        // Create bitmap via createjs api
        var bitmap = this.shape.addChild(new createjs.Bitmap(this.imageEl));

        // Transform image for scale and position
        bitmap.setTransform(this.data.pos.x, this.data.pos.y, this.data.scale, this.data.scale);

        // If rendering text
      } else if (this.data.text) {
        // Set shapes text data
        this.shape.text = this.data.text;
      }

      // Update canvas
      stage.update();
    }

    /**
     * Size calculation method, will load an images src and fetch the container and images
     * natrual dimensions, these will be saved to this.data._orig and this.data._container
     *
     * @return {Promise} [will resolve once image src has been retrieved and dimensions calculated]
     */

  }, {
    key: 'calculateSize',
    value: function calculateSize() {
      var _this3 = this;

      // Create image element
      this.imageEl = new Image();
      this.imageEl.src = this.data.image;

      // Create and return promise
      return new Promise(function (resolve) {
        // Load image
        _this3.imageEl.onload = function () {
          // Calculate image dimensions
          var width = _this3.data._orig.width = _this3.imageEl.width;
          var height = _this3.data._orig.height = _this3.imageEl.height;

          // Calculate container dimensions
          var bounds = _this3.shape.getBounds();
          var container = _this3.data._container;
          var cWidth = container.width = bounds ? bounds.width : _this3.shape.nominalBounds.width;
          var cHeight = container.height = bounds ? bounds.height : _this3.shape.nominalBounds.height;

          // Calculate scale
          var scale = void 0;
          if (cWidth >= cHeight) {
            _this3.data.scale = scale = 100 / width * cWidth / 100;
          } else {
            _this3.data.scale = scale = 100 / height * cHeight / 100;
          }

          // Calculate new image dimensions
          _this3.data.width = width * scale;
          _this3.data.height = height * scale;

          if (_this3.data.width > cWidth) {
            _this3.data.scale = scale = 100 / width * cWidth / 100;
          }
          if (_this3.data.height > cHeight) {
            _this3.data.scale = scale = 100 / height * cHeight / 100;
          }

          // Calculate new image dimensions
          _this3.data.width = width * scale;
          _this3.data.height = height * scale;

          resolve(scale);
        };
      });
    }

    /**
     * Position calculation method, will determine the x and y pos relative to the createjs container,
     * this method will depend on this.data.align properties to determine the x and y pos
     *
     * @return {Promise} [will resolve once position has been calculated]
     */

  }, {
    key: 'calculatePos',
    value: function calculatePos() {
      var _this4 = this;

      return new Promise(function (resolve) {
        // Determine X position relative to container based on alignment rules
        if (_this4.data.align.x === 'center') {
          _this4.data.pos.x = (_this4.data._container.width - _this4.data.width) / 2;
        } else if (_this4.data.align.x === 'right') {
          _this4.data.pos.x = _this4.data._container.width - _this4.data.width;
        } else {
          _this4.data.pos.x = 0;
        }

        // Determine Y position relative to container based on alignment rules
        if (_this4.data.align.y === 'center') {
          _this4.data.pos.y = (_this4.data._container.height - _this4.data.height) / 2;
        } else if (_this4.data.align.y === 'bottom') {
          _this4.data.pos.y = _this4.data._container.height - _this4.data.height;
        } else {
          _this4.data.pos.y = 0;
        }

        resolve();
      });
    }

    /**
     * method to be fired when this layer in clicked in the canvas
     *
     * @return {void} [void]
     */

  }, {
    key: 'clicked',
    value: function clicked() {
      // Send click event tracking to api
      if (window.sendCampaignInstanceTrackingEvent) {
        sendCampaignInstanceTrackingEvent('animatedBannerClick');
      }

      // If callback fire it
      if (this.data.onClick) this.data.onClick.apply(this, this.data);

      // If link is defined change location
      if (this.data.link) {
        // TODO: Do some testing on the link first, ensure its valid
        window.location = this.data.link;
      }
    }

    /**
     * Default data values, will be merged with this.data
     *
     * @type {Object}
     */

  }, {
    key: '_defaultData',
    get: function get() {
      return {
        align: {
          x: 'center',
          y: 'center'
        },
        scale: 1,
        width: 0,
        height: 0,
        pos: {
          x: 0,
          y: 0
        },
        _orig: {
          width: 0,
          height: 0
        },
        _container: {
          width: 0,
          height: 0
        }
      };
    }
  }]);

  return Layer;
}();

exports.default = Layer;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _cursor = require('./cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Loader class, entry point to the API
 */

var Loader = function () {

  /**
   * constructor method
   *
   * @return {void} void
   */

  function Loader() {
    _classCallCheck(this, Loader);

    // Set empty layers array
    this.layers = [];

    // Enable mouse hover tracking
    if (stage) {
      stage.enableMouseOver();
      stage.useHandCursor = false;

      // Bind stage click events
      this.bindEvents();
    }

    // Set pause timeout if defined
    if (window.stopMilliseconds) this.setPauseTimeout();

    // Load config to import users template data
    if (window.pmAnimatedBannersConfig) pmAnimatedBannersConfig(this);
  }

  /**
   * Event binding method, binds click events to stage to identify which
   * child layer has been clicked.
   *
   * @return {Void} void
   */


  _createClass(Loader, [{
    key: 'bindEvents',
    value: function bindEvents() {
      var _this = this;

      // Track mouse hover events
      stage.on('stagemousemove', function (e) {
        // Calculate which child layers of loader were clicked
        var clickedLayers = _this.layers.filter(function (layer) {
          return stage.getObjectsUnderPoint(e.stageX, e.stageY, 0).indexOf(layer.shape) > -1;
        });
        // Fire the layers click method
        clickedLayers.forEach(function (layer) {
          if (layer.data.link || layer.data.onClick) {
            _cursor2.default.set('pointer');
          }
        });
        if (clickedLayers.length === 0) {
          _cursor2.default.set('default');
        }
      });

      // Track stage click events
      stage.on('click', function (e) {
        // Calculate which child layers of loader were clicked
        var clickedLayers = _this.layers.filter(function (layer) {
          return stage.getObjectsUnderPoint(e.stageX, e.stageY, 0).indexOf(layer.shape) > -1;
        });

        // Fire the layers click method
        clickedLayers.forEach(function (layer) {
          return layer.clicked();
        });
      });
    }

    /**
     * Pause timeout method, used to pause the animation at a certain point as
     * defined by window.stopMilliseconds
     *
     * @return {Void} void
     */

  }, {
    key: 'setPauseTimeout',
    value: function setPauseTimeout() {
      // Setup timeout
      this.timeout = setTimeout(function () {
        // Get children of stage and stop all
        if (stage && stage.children) {
          for (var i = 0; i < stage.children.length; i++) {
            if ('stop' in stage.children[i]) stage.children[i].stop();
          }
        }
      }, window.stopMilliseconds);
    }

    /**
     * Data mapping method, main API method to be used by designer when customising
     * an animated banner. Will map data into layers and render them to canvas
     *
     * @param  {Object} data [the designers data rules as defined in the config]
     * @return {Void} void
     */

  }, {
    key: 'map',
    value: function map(data) {
      // Get createjs shape from designer reference
      var shape = _util2.default.searchAnimateChildren(stage, data.reference);
      // Keep searching children until no children for each
      if (data.reference === 'stage') {
        // Create new layer for entire stage
        var stageLayer = new _layer2.default(data, stage);
        stage.on('click', stageLayer.clicked.bind(stageLayer));
      } else if (shape) {
        // Create new layer
        this.layers.push(new _layer2.default(data, shape));
      }
    }
  }]);

  return Loader;
}();

exports.default = Loader;

},{"./cursor":1,"./layer":4,"./util":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Utility module for generic methods
 */
var util = {

  /**
   * has class method, will determine if element has a class
   *
   * @param  {Element} el [the element to check]
   * @param  {String} className [the class to look for]
   * @return {Boolean} [if element has class]
   */
  hasClass: function hasClass(el, className) {
    var hasClass = void 0;
    if (el.classList) {
      hasClass = el.classList.contains(className);
    } else {
      hasClass = !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    return hasClass;
  },

  /**
   * add class method, will add a class to an element
   *
   * @param  {Element} el [the element to include class on]
   * @param  {String} className [the class to add]
   * @return {Void} Void
   */
  addClass: function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!undefined.hasClass(el, className)) {
      // eslint-disable-next-line no-param-reassign
      el.className += ' ' + className;
    }
  },

  /**
   * remove class method, will remove a class from an element
   *
   * @param  {Element} el [the element to remove class from]
   * @param  {String} className [the class to remove]
   * @return {Void} Void
   */
  removeClass: function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (undefined.hasClass(el, className)) {
      // eslint-disable-next-line no-param-reassign
      el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
    }
  },

  /**
   * search animate children method, for searching the stage for
   * an animate CC reference
   *
   * @param  {Object} obj [the object to search]
   * @param  {String} prop [the key to search for]
   * @return {Object|Undefined} if found will return the createjs shape
   */
  searchAnimateChildren: function searchAnimateChildren(obj, prop) {
    var match = void 0;
    // Loop children
    if (obj.children) {
      // eslint-disable-next-line no-restricted-syntax
      for (var key in obj.children) {
        // If match found break and return
        if (obj.children[key][prop]) {
          match = obj.children[key][prop];
          break;
          // If no match recursively check this children
        } else if (obj.children[key].children && obj.children[key].children.length !== 0) {
          var nextScan = util.searchAnimateChildren(obj.children[key], prop);
          if (nextScan) {
            match = nextScan;
            break;
          }
        }
      }
    }
    return match;
  }

};

exports.default = util;

},{}]},{},[3]);
