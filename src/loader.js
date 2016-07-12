import Layer from './layer';
import cursor from './cursor';

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

    // Enable mouse hover tracking
    stage.enableMouseOver();
    stage.useHandCursor = false;

    // Bind stage click events
    this.bindEvents();

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
  bindEvents() {
    // Track mouse hover events
    stage.on('stagemousemove', (e) => {
      // Calculate which child layers of loader were clicked
      const clickedLayers = this.layers.filter(
        layer => stage.getObjectsUnderPoint(e.stageX, e.stageY, 0).indexOf(layer.shape) > -1
      );
      // Fire the layers click method
      clickedLayers.forEach(layer => {
        if (layer.data.link || layer.data.onClick) {
          cursor.set('pointer');
        }
      });
      if (clickedLayers.length === 0) {
        cursor.set('default');
      }
    });

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
   * Pause timeout method, used to pause the animation at a certain point as
   * defined by window.stopMilliseconds
   *
   * @return {Void} void
   */
  setPauseTimeout() {
    // Setup timeout
    this.timeout = setTimeout(() => {
      // Get children of stage and stop all
      if (stage && stage.children) {
        for (let i = 0; i < stage.children.length; i++) {
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
