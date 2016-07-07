import Layer from './layer';

/**
 * Loader class, entry point to the API
 */
export default class Loader {

  /**
   * constructor method, assigned empty layers array and remaps
   * window.init method for chaning to animate CC initiation
   *
   * @return {void} void
   */
  constructor() {
    // Set empty layers array
    this.layers = [];

    // Extend window.init method as defined by animate CC
    this._init = window.init;
    window.init = this.init.bind(this);
  }

  /**
   * initialise method, chain for animate CC initialise method
   *
   * @return {void} void
   */
  init() {
    // Invoke animate CC init method
    this._init();

    // Bind stage click events
    this.bindEvents();

    // Load config to import users template data
    if (window.pmAnimatedBannersConfig) pmAnimatedBannersConfig(this);
  }

  /**
   * Event binding method, binds click events to stage to identify which
   * child layer has been clicked.
   *
   * @return {Void} void
   */
  bindEvents() {
    // Track stage click events
    stage.on('click', (e) => {
      // Calculate which child layers of loader were clicked
      const clickedLayers = this.layers.filter(
        layer => stage.getObjectsUnderPoint(e.stageX, e.stageY, 0).indexOf(layer.shape) > -1
      );

      // Fire the layers click method
      clickedLayers.forEach(layer => layer.clicked());
    });
  }

  /**
   * Data mapping method, main API method to be used by designer when customising
   * an animated banner. Will map data into layers and render them to canvas
   *
   * @param  {Object} data [the designers data rules as defined in the config]
   * @return {Void} void
   */
  map(data) {
    // Get createjs shape from designer reference
    const shape = stage.children[data.reference] || stage.children[0][data.reference];
    if (data.reference === 'stage') {
      // Create new layer for entire stage
      const stageLayer = new Layer(data, stage);
      stage.on('click', stageLayer.clicked.bind(stageLayer));
    } else if (shape) {
      // Create new layer
      this.layers.push(new Layer(data, shape));
    }
  }

}
