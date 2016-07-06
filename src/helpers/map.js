let map = {

  image: (shape, data) => {

    var image = new Image();
    image.src = data.image;
    image.onload = function (e) {

      var origWidth = image.width,
        origHeight = image.height,
        containerWidth = shape.getBounds() ? shape.getBounds().width : shape.nominalBounds.width,
        containerHeight = shape.getBounds() ? shape.getBounds().height : shape.nominalBounds.height,
        scale = origWidth > origHeight ? ((100 / origWidth) * containerWidth) / 100 : ((100 / origHeight) * containerHeight) / 100,
        bitmap = shape.addChild(new createjs.Bitmap(e.target)),
        xAxis = 0,
        yAxis = 0;

      if(data.horizontalAlign) {
        // xAxis = 
      }

      bitmap.setTransform(xAxis, yAxis, scale, scale);
      stage.update();

    };

  },

  text: (shape, data) => {
    // console.log(shape.getBounds());
    // console.log(shape.getBounds());
    shape.text = data.text;
    stage.update();

  }

};

export default map;