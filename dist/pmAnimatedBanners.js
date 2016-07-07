(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _loader2.default();

},{"./loader":3}],2:[function(require,module,exports){
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
          var scale = _this3.data.scale = width > height ? 100 / width * cWidth / 100 : 100 / height * cHeight / 100;

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
      if (sendCampaignInstanceTrackingEvent) sendCampaignInstanceTrackingEvent('animatedBannerView');

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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Loader class, entry point to the API
 */

var Loader = function () {

  /**
   * initialise method, assigns empty layer array and
   * remaps window.init method to override animate CC
   * callback with our own.
   *
   * @return {void} void
   */

  function Loader() {
    var _this = this;

    _classCallCheck(this, Loader);

    // Set empty layers array
    this.layers = [];

    // Extend window.init method as defined by animate CC
    var init = window.init;
    window.init = function () {
      // Invoke animate CC init method
      init();

      // Set stage local to this instance
      _this.stage = stage;

      // Bind stage click events
      _this.bindEvents();

      // Load config to import users template data
      if (window.pmAnimatedBannersConfig) pmAnimatedBannersConfig(_this);
    };
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
      var _this2 = this;

      // Track stage click events
      this.stage.on('click', function (e) {
        // Calculate which child layers of loader were clicked
        var clickedLayers = _this2.layers.filter(function (layer) {
          return _this2.stage.getObjectsUnderPoint(e.stageX, e.stageY, 0).indexOf(layer.shape) > -1;
        });

        // Fire the layers click method
        clickedLayers.forEach(function (layer) {
          return layer.clicked();
        });
      });
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
      var shape = stage.children[data.reference] || stage.children[0][data.reference];
      if (shape) {
        // Create new layer
        this.layers.push(new _layer2.default(data, shape));
      }
    }
  }]);

  return Loader;
}();

exports.default = Loader;

},{"./layer":2}]},{},[1]);
