import Layer from '../../src/layer';

describe('loader', function () {

  let containerSize = {
    width: 100,
    height: 100
  };

  let layer1, layer2, layer3, layer4, layer5, layer6, trackingFired, onClickFired, addChildFired, setTransformFired;

  let addChild = (x, y, scaleX, scaleY) => {
    addChildFired = true;
  };

  let setTransform = () => {
    setTransformFired = true;
  };

  beforeAll(() => {

    // Mock createjs lib
    window.createjs = {Bitmap: () => {this.setTransform = setTransform}};
    window.stage = {update: () => {}, enableMouseOver: () => {}, on: () => {}};
    let shape = {getBounds: () => {return containerSize;},addChild: addChild};

    window.sendCampaignInstanceTrackingEvent = () => {
      trackingFired = true;
    };

    layer1 = new Layer({
      image: 'base/tests/unit/image.jpg', // 400 x 100,
      onClick: () => {
        onClickFired = true;
      }
    }, shape);

    layer2 = new Layer({
      image: 'base/tests/unit/image2.jpg', // 100 x 400
    }, shape);

    layer3 = new Layer({
      text: 'foobar'
    }, shape);

    layer4 = new Layer({
      image: 'base/tests/unit/image3.jpg', // 20 x 20
      align: {
        x: 'center',
        y: 'center'
      },
    }, shape);

    layer5 = new Layer({
      image: 'base/tests/unit/image3.jpg', // 20 x 20
      align: {
        x: 'left',
        y: 'top'
      },
    }, shape);

    layer6 = new Layer({
      image: 'base/tests/unit/image3.jpg', // 20 x 20
      align: {
        x: 'right',
        y: 'bottom'
      },
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
    spyOn(layer1, "render").and.callFake(() => {
      expect(layer1.data.width).toEqual(100);
      expect(layer1.data.height).toEqual(25);
      done();
    });
  });

  it('should have resized the original image to fit inside the container in portait', () => {
    spyOn(layer2, "render").and.callFake(() => {
      expect(layer1.data.width).toEqual(25);
      expect(layer1.data.height).toEqual(100);
      done();
    });
  });

  it('should align vertical center', () => {
    spyOn(layer4, "render").and.callFake(() => {
      expect(this.data.pos.y).toEqual(40);
      done();
    });
  });

  it('should align vertical top', () => {
    spyOn(layer5, "render").and.callFake(() => {
      expect(this.data.pos.y).toEqual(0);
      done();
    });
  });

  it('should align vertical bottom', () => {
    spyOn(layer6, "render").and.callFake(() => {
      expect(this.data.pos.y).toEqual(80);
      done();
    });
  });

  it('should align horizontal center', () => {
    spyOn(layer4, "render").and.callFake(() => {
      expect(this.data.pos.x).toEqual(40);
      done();
    });
  });

  it('should align horizontal left', () => {
    spyOn(layer5, "render").and.callFake(() => {
      expect(this.data.pos.x).toEqual(0);
      done();
    });
  });

  it('should align horizontal right', () => {
    spyOn(layer6, "render").and.callFake(() => {
      expect(this.data.pos.x).toEqual(80);
      done();
    });
  });

  it('should add child to createjs shape', () => {
    spyOn(layer4, "render").and.callFake(() => {
      expect(addChildFired).toEqual(true);
      done();
    });
  });

  it('should render bitmap', () => {
    spyOn(layer4, "render").and.callFake(() => {
      expect(setTransformFired).toEqual(true);
      done();
    });
  });

  it('should change text', () => {
    expect(layer3.shape.text).toEqual('foobar');
  });

});