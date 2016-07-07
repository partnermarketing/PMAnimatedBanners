import Loader from '../../src/loader';

describe('loader', function () {

  let loader, init, configRan, initRan;

  beforeAll(() => {

    window.pmAnimatedBannersConfig = () => {
      configRan = true;
    };

    window.init = init = function() {
      initRan = true;
    };
    
    window.stage = {
      on: () => {},
      children: []
    };

    loader = new Loader();
    window.init();

  });

  it('should overwrite window.init method', () => {
    expect(init !== window.init).toEqual(true);
  });

  it('should chain animate cc init method', () => {
    expect(initRan).toEqual(true);
  });

  it('should call pmAnimatedBannersConfig', () => {
    expect(configRan).toEqual(true);
  });

});