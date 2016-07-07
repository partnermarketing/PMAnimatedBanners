import Layer from './layer';

export default class Loader {

  constructor() {
    
    this.layers = [];

    var init = window.init;
    window.init = () => {
      init();
      this.stage = stage;
      this.bindEvents();
      if(window.pmAnimatedBannersConfig) pmAnimatedBannersConfig(this);
    };

  }

  bindEvents() {
    this.stage.on('click', (e) => {
      var clickedLayers = this.layers.filter((layer) => {
        return this.stage.getObjectsUnderPoint(e.stageX, e.stageY, 0).indexOf(layer.shape) > -1;
      });
      clickedLayers.forEach(layer => layer.clicked());
    });
  }

  map(data) {

    let shape = stage.children[data.reference] || stage.children[0][data.reference];
    if(shape) {
      this.layers.push(new Layer(data, shape));
    }

  }

}