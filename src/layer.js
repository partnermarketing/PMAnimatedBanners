/**
 * Layer class, instantiate layers with custom data to render new images/text/links
 * to the canvas. Will work with animate CC object references.
 */
export default class Layer {

  /**
   * initialise method, assigns properties to layer instance
   * and starts calculation and rendering of layer
   *
   * @param  {Object} data  [the layers data such as shape reference, image/text/link, alignment]
   * @param  {Object} shape [the createjs shape instantiated via animate CC lib]
   * @return {void} void
   */
  constructor(_data, shape) {
    // Set layer values
    const data = Object.assign(this._defaultData, _data);
    Object.assign(this, { shape, data });

    // Calculate dimensions, position and render
    this.calculate().then(() => this.render());
  }

  /**
   * calculation method used to asyncronously fetch container and layer
   * dimensions and positions.
   *
   * @return {Promise} [will resolve once layer size and position has been set]
   */
  calculate() {
    // Create and return promise
    return new Promise(resolve => {
      // If layer is using an image, fetch src and calculate position and size
      if (this.data.image) {
        this.calculateSize().then(() => this.calculatePos().then(resolve));

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
  render() {
    // If rendering an image
    if (this.data.image) {
      // Clear shape
      this.hidePlaceholders();

      // Create bitmap via createjs api
      const bitmap = this.shape.addChild(new createjs.Bitmap(this.optimiseImageToCanvas()));

      // Transform image for scale and position
      bitmap.setTransform(this.data.pos.x, this.data.pos.y, 1, 1);

    // If rendering text
    } else if (this.data.text) {
      // Set shapes text data
      this.shape.text = this.data.text;
    }

    // Update canvas
    stage.update();
  }

  /**
   * Method for hiding placeholders from the current layer, will locate
   * any animate symbol with a reference starting _pm_placeholder_
   *
   * @return {Void}
   */
  hidePlaceholders() {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in this.shape) {
      if (key.indexOf('_pm_placeholder_') === 0) {
        this.shape[key].visible = false;
        this.shape[key].alpha = 0;
      }
    }
  }

  optimiseImageToCanvas() {
    // Setup options
    const blur = 2;

    // Setup canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const _canvas = document.createElement('canvas');
    const _context = _canvas.getContext('2d');
    canvas.width = _canvas.width = this.imageEl.width;
    canvas.height = _canvas.height = this.imageEl.height;
    context.drawImage(this.imageEl, 0, 0);

    // Calculate ratio
    let ratio;
    if (this.data.width / canvas.width < this.data.height / canvas.height) {
      ratio = this.data.width / canvas.width;
    } else {
      ratio = this.data.height / canvas.height;
    }

    // Render image to canvas
    _context.drawImage(
      canvas, 0, 0,
      canvas.width, canvas.height, 0, 0,
      canvas.width, canvas.height
    );

    // Start duplicating image between canvas while shrinking by blur
    for (let i = 1; i <= blur; i++) {
      // Reset original canvas
      canvas.width = this.imageEl.width * (ratio * blur) / i;
      canvas.height = this.imageEl.height * (ratio * blur) / i;
      context.drawImage(
        _canvas, 0, 0,
        _canvas.width, _canvas.height, 0, 0,
        canvas.width, canvas.height
      );

      // Scale down duplicate
      _canvas.width = this.imageEl.width * (ratio * blur) / i;
      _canvas.height = this.imageEl.height * (ratio * blur) / i;
      _context.drawImage(
        canvas, 0, 0,
        canvas.width, canvas.height, 0, 0,
        _canvas.width, _canvas.height
      );
    }

    // Return optimised canvas
    return canvas;
  }

  /**
   * Size calculation method, will load an images src and fetch the container and images
   * natrual dimensions, these will be saved to this.data._orig and this.data._container
   *
   * @return {Promise} [will resolve once image src has been retrieved and dimensions calculated]
   */
  calculateSize() {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    return (new Promise((resolve, reject) => {
      img.onerror = err => reject(err);
      img.onload = () => resolve(img);
      img.src = this.data.image;
      if (img.complete || typeof img.complete === 'undefined') {
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        img.src = this.data.image;
      }
    }))
    .then(loadedImage => {
      let canvas = document.createElement('CANVAS');
      const ctx = canvas.getContext('2d');
      ctx.drawImage(loadedImage, 0, 0);

      const drawnImage = new Image();
      canvas.width = loadedImage.width;
      canvas.height = loadedImage.height;

      drawnImage.src = canvas.toDataURL();
      canvas = null;

      let promiseResult;
      if (drawnImage.complete || typeof drawnImage.complete === 'undefined') {
        promiseResult = new Promise(resolve => resolve(drawnImage));
      } else {
        promiseResult = new Promise((resolve, reject) => {
          drawnImage.onerror = err => reject(err);
          drawnImage.onload = () => resolve(drawnImage);
        });
      }
      return promiseResult;
    })
    .then(loadedBase64Image => {
      // Calculate image dimensions
      this.imageEl = loadedBase64Image;

      const width = this.data._orig.width = this.imageEl.width;
      const height = this.data._orig.height = this.imageEl.height;

      // Calculate container dimensions
      const bounds = this.shape.nominalBounds;
      const container = this.data._container;
      const cWidth = container.width = bounds ? bounds.width : this.shape.getBounds().width;
      const cHeight = container.height = bounds ? bounds.height : this.shape.getBounds().height;

      // Calculate scale
      let scale;
      if (cWidth >= cHeight) {
        this.data.scale = scale = ((100 / width) * cWidth) / 100;
      } else {
        this.data.scale = scale = ((100 / height) * cHeight) / 100;
      }

      // Calculate new image dimensions
      this.data.width = width * scale;
      this.data.height = height * scale;

      if (this.data.width > cWidth) {
        this.data.scale = scale = ((100 / width) * cWidth) / 100;
      }
      if (this.data.height > cHeight) {
        this.data.scale = scale = ((100 / height) * cHeight) / 100;
      }

      // Calculate new image dimensions
      this.data.width = width * scale;
      this.data.height = height * scale;

      return new Promise(resolve => resolve(scale));
    });
  }

  /**
   * Position calculation method, will determine the x and y pos relative to the createjs container,
   * this method will depend on this.data.align properties to determine the x and y pos
   *
   * @return {Promise} [will resolve once position has been calculated]
   */
  calculatePos() {
    return new Promise(resolve => {
      // Determine X position relative to container based on alignment rules
      if (this.data.align.x === 'center') {
        this.data.pos.x = (this.data._container.width - this.data.width) / 2;
      } else if (this.data.align.x === 'right') {
        this.data.pos.x = this.data._container.width - this.data.width;
      } else {
        this.data.pos.x = 0;
      }

      // Determine Y position relative to container based on alignment rules
      if (this.data.align.y === 'center') {
        this.data.pos.y = (this.data._container.height - this.data.height) / 2;
      } else if (this.data.align.y === 'bottom') {
        this.data.pos.y = this.data._container.height - this.data.height;
      } else {
        this.data.pos.y = 0;
      }

      resolve();
    });
  }

  /**
   * method to be fired when this layer in clicked in the canvas
   *
   * @return {void} [void]
   */
  clicked() {
    // Send click event tracking to api
    if (window.sendCampaignInstanceTrackingEvent) {
      sendCampaignInstanceTrackingEvent('animatedBannerClick');
    }

    // If callback fire it
    if (this.data.onClick) this.data.onClick.apply(this, this.data);

    // If link is defined change location
    if (!window.editMode && this.data.link) {
      window.open(this.data.link, this.data.target);
    }
  }

  /**
   * Default data values, will be merged with this.data
   *
   * @type {Object}
   */
  get _defaultData() {
    return {
      align: {
        x: 'center',
        y: 'center',
      },
      target: '_blank',
      scale: 1,
      width: 0,
      height: 0,
      pos: {
        x: 0,
        y: 0,
      },
      _orig: {
        width: 0,
        height: 0,
      },
      _container: {
        width: 0,
        height: 0,
      },
    };
  }

}
