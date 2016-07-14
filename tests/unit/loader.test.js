import Loader from '../../src/loader';

describe('loader', function () {

  let loader, configRan;

  beforeAll(() => {

    window.pmAnimatedBannersConfig = () => {
      configRan = true;
    };

    loader = new Loader();

  });

  it('should call pmAnimatedBannersConfig', () => {
    expect(configRan).toEqual(true);
  });

});