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
  constructor(data, shape) {

    // Set layer values
    data = Object.assign(this._defaultData, data);
    Object.assign(this, {shape, data});

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
      if(this.data.image) {
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
    if(this.data.image) {

      // Create bitmap via createjs api
      var bitmap = this.shape.addChild(new createjs.Bitmap(this.imageEl));

      // Transform image for scale and position
      bitmap.setTransform(this.data.pos.x, this.data.pos.y, this.data.scale, this.data.scale);

    // If rendering text
    } else if(this.data.text) {

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
  calculateSize() {

    // Create image element
    this.imageEl = new Image();
    this.imageEl.src = this.data.image;

    // Create and return promise
    return new Promise(resolve => {

      // Load image
      this.imageEl.onload = e => {

        // Calculate image dimensions
        var width = this.data._orig.width = this.imageEl.width;
        var height = this.data._orig.height = this.imageEl.height;

        // Calculate container dimensions
        var cWidth = this.data._container.width = this.shape.getBounds() ? this.shape.getBounds().width : this.shape.nominalBounds.width;
        var cHeight = this.data._container.height = this.shape.getBounds() ? this.shape.getBounds().height : this.shape.nominalBounds.height;

        // Calculate scale
        var scale = this.data.scale = width > height ? ((100 / width) * cWidth) / 100 : ((100 / height) * cHeight) / 100;

        // Calculate new image dimensions
        this.data.width = width * scale;
        this.data.height = height * scale;

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
  calculatePos() {

    return new Promise(resolve => {

      // Determine position relative to container based on alignment rules
      this.data.pos.x = this.data.align.x === 'center' ? (this.data._container.width - this.data.width) / 2 : (this.data.align.x === 'right' ? this.data._container.width - this.data.width : 0);
      this.data.pos.y = this.data.align.y === 'center' ? (this.data._container.height - this.data.height) / 2 : (this.data.align.y === 'bottom' ? this.data._container.height - this.data.height : 0);
      
      resolve();

    });

  }

  /**
   * method to be fired when this layer in clicked in the canvas
   * 
   * @return {void} [void]
   */
  clicked() {

    // If callback fire it
    if(this.data.onClick) this.data.onClick.apply(this, this.data);

    // If link is defined change location
    if(this.data.link) {

      // TODO: Do some testing on the link first, ensure its valid
      window.location = this.data.link;

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
      },
    }
  }

};