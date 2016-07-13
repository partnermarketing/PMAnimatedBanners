import Layer from '../../src/layer';

describe('loader', function () {

  let containerSize = {
    width: 100,
    height: 100
  };

  let addChild = (x, y, scaleX, scaleY) => {

  };

  let setTransform = () => {
    // Called in render and is passed x, y and scale for the bitmap which is calculated in calcSize
  };

  let layer1, layer2, layer3, trackingFired, onClickFired;

  beforeAll(() => {

    // Mock createjs lib
    window.createjs = {Bitmap: () => {this.setTransform = setTransform}};
    window.stage = {update: () => {}};
    let shape = {getBounds: () => {return containerSize;},addChild: addChild};

    window.sendCampaignInstanceTrackingEvent = () => {
      trackingFired = true;
    };

    layer1 = new Layer({
      image: 'base/tests/unit/image.jpg', // 400 x 100
      onClick: () => {
        onClickFired = true;
      }
    }, shape);

    layer2 = new Layer({
      image: 'base/tests/unit/image2.jpg' // 100 x 400
    }, shape);

    layer3 = new Layer({
      text: 'foobar',
      link: 'https://partnermarketing.com'
    }, shape);

  });
  
  it('should send animatedBannerClick tracking event when clicked', () => {
    layer1.clicked();
    expect(trackingFired).toEqual(true);
  });
  
  it('should fire onClick when clicked', () => {
    layer1.clicked();
    expect(onClickFired).toEqual(true);
  });

  it('should have resized the original image to fit inside the container in landscape', (done) => {
    spyOn(layer1, "render").and.callFake(function() {
      expect(layer1.data.width).toEqual(100);
      expect(layer1.data.height).toEqual(25);
      done();
    });
  });

  it('should have resized the original image to fit inside the container in portait', () => {
    spyOn(layer2, "render").and.callFake(function() {
      expect(layer1.data.width).toEqual(25);
      expect(layer1.data.height).toEqual(100);
      done();
    });
  });

  it('should align vertical center', () => {

  });

  it('should align vertical top', () => {

  });

  it('should align vertical bottom', () => {

  });

  it('should align horizontal center', () => {

  });

  it('should align horizontal left', () => {

  });

  it('should align horizontal right', () => {

  });

  it('should render bitmap', () => {

  });

  it('should change text', () => {

  });

});