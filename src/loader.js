import mappings from './helpers/map';

export default class Loader {

  constructor(stage) {

    this.stage = stage;

    var init = window.init;
    window.init = () => {
      init();
      if(window.pmAnimatedBannersConfig) pmAnimatedBannersConfig(this);
    };

  }

  map(data) {

    if(stage.children[0][data.reference]) {
      if(data.image) {
        mappings.image(stage.children[0][data.reference], data);
      } else if(data.text) {
        mappings.text(stage.children[0][data.reference], data);
      }
    }

  }

}