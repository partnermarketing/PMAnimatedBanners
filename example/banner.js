(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 20,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.reader_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#354A5D").s().p("AjAqQQANgDAMAHQAMAHADAOIFXTfQAEAOgHAMQgGAMgNAEg");
	this.shape.setTransform(91.8,69.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#37CA74").s().p("AgeAgQgVgJgFgTIgCgEQAAgFAMgEIBWgaQAFgBAFABQAEABACACIABAEQAFATgNARQgMASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_1.setTransform(90.3,131.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgCIBXgaQAEgBAFABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_2.setTransform(71.1,137.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E64E44").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgBIBWgbQAMgDAEAGIABAEQAFATgNARQgNATgXAGQgLAEgIAAQgNAAgLgFg");
	this.shape_3.setTransform(51.8,142.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgCgEQAAgBAEgDQADgDAFgBIBWgbIAKAAQAEABABACIACAEQAFATgNARQgNATgXAGQgLADgIAAQgMAAgMgEg");
	this.shape_4.setTransform(87.2,121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgCIBXgaQAEgBAFABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_5.setTransform(68,126.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#97A3A4").s().p("AgeAfQgVgIgFgTIgCgEQAAgFAMgEIBWgaQAFgBAFABQAEABABACIACAEQAFATgNARQgNASgXAHQgLADgHAAQgNAAgMgFg");
	this.shape_6.setTransform(48.7,131.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgBgEQAAgBADgDQADgDAFgCIBXgaQAFgBAEABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_7.setTransform(83.9,110.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgCgEQAAgBAEgDQADgDAFgCIBWgaQAFgBAFABQAEABABACIACAEQAFATgNARQgNASgXAHQgLAEgIAAQgMAAgMgFg");
	this.shape_8.setTransform(81,100.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#97A3A4").s().p("AgeAfQgVgIgFgTIgBgEQgBgFAMgEIBWgaQAFgBAFABQAEABACACIABAEQAFATgNARQgNASgXAHQgLADgIAAQgMAAgMgFg");
	this.shape_9.setTransform(64.8,115.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#97A3A4").s().p("AgeAfQgVgIgFgUIgBgDQgBgFAMgEIBXgaQAEgBAFABQAEABACACIABAEQAFATgMARQgNASgYAHQgLADgHAAQgNAAgMgFg");
	this.shape_10.setTransform(61.8,105.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgBgEQAAgBADgDQADgDAFgCIBXgaQAFgBAEABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_11.setTransform(45.4,120.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#97A3A4").s().p("AgeAgQgVgJgFgTIgCgEQAAgFAMgEIBWgaQAFgBAFABQAEABABACIACAEQAFATgNARQgMASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_12.setTransform(42.5,110.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37CA74").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgBIBWgbQAMgDAEAGIABAEQAFATgMARQgNATgYAGQgLAEgIAAQgMAAgMgFg");
	this.shape_13.setTransform(77.7,88.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37CA74").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgCIBXgaIAJAAQAEABACACIABAEQAFATgMARQgNATgYAGQgLADgIAAQgMAAgMgEg");
	this.shape_14.setTransform(74.8,78.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37CA74").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgCIBXgaQAFgBAEABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_15.setTransform(58.5,94.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#37CA74").s().p("AgeAgQgVgJgFgTIgBgEQAAgBADgDQADgDAFgCIBXgaQAFgBAEABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_16.setTransform(55.6,84.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F19B2C").s().p("AgeAgQgVgJgFgTIgBgEQgBgBAEgDQADgDAFgCIBXgaQAFgBAEABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_17.setTransform(39.2,99.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E64E44").s().p("AgeAgQgVgJgFgTIgBgEQAAgBADgDQADgDAFgCIBXgaQAFgBAEABQAEABACACIABAEQAFATgMARQgNASgYAHQgLAEgIAAQgMAAgMgFg");
	this.shape_18.setTransform(36.2,89.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#19303E").s().p("AhhAVIC/g2IAEAMIi/A3g");
	this.shape_19.setTransform(61.9,56.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19303E").s().p("Ah2AcIDphEIAEAOIjqBCg");
	this.shape_20.setTransform(58.7,53.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19303E").s().p("AhqAYIDSg8IADANIjSA8g");
	this.shape_21.setTransform(58.6,49.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#19303E").s().p("Ah2AcIDphDIAEAMIjpBDg");
	this.shape_22.setTransform(56.2,45.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#19303E").s().p("AhpAYIDPg8IAEANIjPA8g");
	this.shape_23.setTransform(56.5,41.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A8B7B7").s().p("AkxByQgMgHgEgNQgDgNAGgNQAHgLANgFIJCinQANgFAMAHQANAHADANQAEAOgGAMQgHALgNAFIpCCoIgKABQgIAAgIgEg");
	this.shape_24.setTransform(34.2,13.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#97A3A4").s().p("Al1AvQgIgcAOgWQANgZAcgIII7ipQAcgIAZAOQAZANAIAcIAtChIq7DOg");
	this.shape_25.setTransform(37.7,20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDF2F3").s().p("AkmhVIHwiSIBeE9InxCSg");
	this.shape_26.setTransform(46.8,53.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#19303E").s().p("AjCEPQgRgJgFgTIhllUIACAAQgBgQAJgNQAKgNAPgFIG6iCQAQgFAPAGQAOAGAIAOIACgBIBkFUQAGATgJARQgJARgTAGIm6CCQgHACgHAAQgLAAgLgGg");
	this.shape_27.setTransform(46.9,54);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#354A5D").s().p("AhqMKQgagQgJgeImDzoQgJgeANgbQANgbAbgIII8ipQAbgIAaAQQAaAQAJAeIFhTxQAJAfgNAbQgNAbgcAIIoZCfQgJACgJAAQgSAAgRgKg");
	this.shape_28.setTransform(53.5,78.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#19303E").s().p("ACRKEIlgz6QgDgJADgJIA2gPQAHAHACAIIFgT7QAEAMgGALIgvAOQgKgHgEgNg");
	this.shape_29.setTransform(88,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.1,157.8);


(lib.logoBG_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwyIcIAAw3MAhlAAAIAAQ3g");
	this.shape.setTransform(107.6,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27,215.1,108);


(lib.learnMore_btn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD9426").s().p("Ag3AzQgEgQgIgRIgIgOQgCgEACgEQANgWAHgYICEAAIgBBlg");
	this.shape.setTransform(136.7,23.9,0.701,0.701);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD9426").s().p("Ah1CvQgegMgSgaQgTgbABghQAAgNAHgUQAGgQAGgJQAGgJAAgKQAAgKgGgJQgTgiAAgYQABggASgbQATgbAegMIEsACIgBBfIiPgBQgGgBgEAEQgGADAAAGQgFAYgOAZQgFAJAAAJQAAALAFAJQATAiAAAYQgBAhgSAbQgQAagfAMg");
	this.shape_1.setTransform(129.2,23.8,0.701,0.701);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD9426").s().p("Ah7AVIAAgqIDTABQAQAAAKAKQAKAKAAAOIAAAIg");
	this.shape_2.setTransform(133.4,8,0.701,0.701);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD9426").s().p("AhVAvQAUgSALgZQALgXABgbICAAAIgBBdg");
	this.shape_3.setTransform(136,32.9,0.701,0.701);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD9426").s().p("AhXAVQgPAAgLgLQgKgKAAgOIAAgHID3ABIAAAqg");
	this.shape_4.setTransform(113.7,39.7,0.701,0.701);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FD9426").s().p("AhVAvIABheICqABQgUASgLAZQgLAXgBAcg");
	this.shape_5.setTransform(111.1,14.8,0.701,0.701);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FD9426").s().p("ABYAWIjTgBIAAgqID3ABIAAAIQAAANgKALQgKAKgOAAIgCAAg");
	this.shape_6.setTransform(133.3,39.8,0.701,0.701);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FD9426").s().p("Ah7AVIAAgJQAAgNAKgJQALgLAPAAIDTABIAAAqg");
	this.shape_7.setTransform(113.9,7.9,0.701,0.701);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FD9426").s().p("AhMAzIABhlICDAAQAGAZAOAWQACADgCAEIgIAPQgIARgEAPg");
	this.shape_8.setTransform(110.5,23.8,0.701,0.701);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FD9426").s().p("AhUAuIAAhcICAAAQABA2ApAng");
	this.shape_9.setTransform(111.1,32.8,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105,6.3,37.2,35.1);


(lib.entrustDatacardLogo_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#752F88").s().p("AjaB+IAAj7IDah/IDbB/IAAD7IjbB/gAijheIAAC9ICjBfICkhfIAAi9Iikhfg");
	this.shape.setTransform(-5.9,-7.4,0.405,0.405);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B32584").s().p("AhsA/IAAh9IBsg/IBtA/IAAB9IhtA/gAg1geIAAA9IA1AfIA2gfIAAg9Ig2gfg");
	this.shape_1.setTransform(-5.9,-7.4,0.405,0.405);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AAcAQIAAgUIgKAMIAAAAIgKgMIAAAUIgIAAIAAgfIAJAAIAJAOIAJgOIAJAAIAAAfgAgYAQIAAgYIgLAAIAAgHIAeAAIAAAHIgLAAIAAAYg");
	this.shape_2.setTransform(147.9,-12.3,0.405,0.405);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AhRBsQgegcAAguIAAgCQABgsAdgcQAcgaAoAAQAmAAAaAeIAAhgIA8AAIAAEGIg8AAIAAgcQgZAggnAAQgoAAgcgagAgigFQgQAOAAAXIAAACQAAAXAQAQQAPAOATAAQAWAAAPgOQAOgQAAgXIAAgCQAAgXgOgNQgPgPgWAAQgTAAgPAOg");
	this.shape_3.setTransform(140.4,-7.6,0.405,0.405);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("Ag/BiIAAjAIA9AAIAAAnQASgsAwACIAAA5IgEAAQgeAAgRARQgPASAAAgIAABHg");
	this.shape_4.setTransform(132.3,-6.3,0.405,0.405);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AhLBUQgVgQAAgcIAAgBQAAgeAYgOQAWgPAngBQAYAAAaAJIAAgDQAAgkgrAAQgcAAgfALIgPgrQAngQApAAQAxAAAXAXQAXAUAAAqIAABuIg6AAIAAgVQgYAZgmAAQggAAgUgQgAgbASQgLAGAAAOIAAAAQAAALAJAHQAJAFAPAAQATABANgKQANgKAAgOIAAgKQgRgHgVAAQgSgBgLAIg");
	this.shape_5.setTransform(123.5,-6.2,0.405,0.405);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AhCBHQgggdABgqIAAAAQgBgpAggdQAggeAuAAQA2AAAfAhIglAkQgWgVgaAAQgUAAgPAPQgPAPAAAWIAAAAQAAAWAPAQQAPAPAWAAQAZAAAYgVIAkAhQgSASgRAIQgXAJgdABQgugBgggdg");
	this.shape_6.setTransform(114.5,-6.2,0.405,0.405);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AhLBUQgVgQgBgcIAAgBQAAgeAZgOQAWgPAogBQAXAAAbAJIAAgDQAAgkgsAAQgbAAggALIgPgrQAngQAqAAQAvAAAZAXQAWAVAAApIAABuIg6AAIAAgVQgYAZgnAAQgfAAgUgQgAgbASQgLAGAAAOIAAAAQAAALAJAHQAJAFAPAAQATABANgKQANgKAAgOIAAgKQgQgHgXAAQgRgBgLAIg");
	this.shape_7.setTransform(104.9,-6.2,0.405,0.405);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgYBvQgRgOAAggIAAhbIgaAAIAAgvIAaAAIAAgxIA7AAIAAAxIAxAAIAAAvIgxAAIAABSQAAASASABQARAAANgIIAAAtQgUALgbAAQgcAAgPgMg");
	this.shape_8.setTransform(96.9,-7.1,0.405,0.405);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AhLBUQgVgQAAgcIAAgBQAAgeAYgOQAWgPAngBQAYAAAaAJIAAgDQAAgkgrAAQgcAAgfALIgPgrQAngQApAAQAxAAAXAXQAXAUAAAqIAABuIg6AAIAAgVQgYAZgmAAQggAAgUgQgAgbASQgLAGAAAOIAAAAQAAALAJAHQAJAFAPAAQATABANgKQANgKAAgOIAAgKQgRgHgVAAQgSgBgLAIg");
	this.shape_9.setTransform(88.8,-6.2,0.405,0.405);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("Ah/B+IAAj7IBtAAQA/AAAqAkQApAkAAA1IAAAAQAAA2gpAkQgqAkg/AAgAhBBMIAvAAQAkAAAXgVQAXgVAAgiIAAAAQAAgggXgVQgYgWgjAAIgvAAg");
	this.shape_10.setTransform(78.3,-7.4,0.405,0.405);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgYBvQgRgOAAggIAAhbIgZAAIAAgvIAZAAIAAgxIA6AAIAAAxIAzAAIAAAvIgzAAIAABSQAAASAUABQAQAAAOgIIAAAtQgVALgbAAQgcAAgPgMg");
	this.shape_11.setTransform(63.5,-7.1,0.405,0.405);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AhVBHIAaglQAjAYAeAAQAZAAABgPIAAgBQgBgIgNgFIgcgJQgdgIgPgKQgUgNAAgZIAAgBQAAgdAXgRQAVgQAgAAQAqAAAlAXIgXAmQgigSgYAAQgTAAAAANIAAABQgBAHANAGIAdAKQAdAJAOAKQAVANAAAYIAAAAQAAAfgYARQgVAPgkAAQgxAAgpgdg");
	this.shape_12.setTransform(56.2,-6.2,0.405,0.405);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AhNBPQgTgTAAgiIAAh7IA8AAIAABqQAAAoAkAAQAQAAALgKQAJgLABgTIAAhqIA8AAIAADAIg8AAIAAgcQgbAfgiAAQgiAAgTgTg");
	this.shape_13.setTransform(47.2,-6.1,0.405,0.405);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("Ag/BiIAAjAIA8AAIAAAnQATgsAwACIAAA5IgEAAQgeAAgRARQgQASAAAgIAABHg");
	this.shape_14.setTransform(39.4,-6.3,0.405,0.405);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgYBvQgRgOAAggIAAhbIgaAAIAAgvIAaAAIAAgxIA7AAIAAAxIAxAAIAAAvIgxAAIAABSQAAASATABQAQAAAOgIIAAAtQgWALgaAAQgcAAgPgMg");
	this.shape_15.setTransform(32.1,-7.1,0.405,0.405);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AAkBiIAAhqQAAgngkAAQgPAAgKAKQgLAKAAATIAABqIg8AAIAAjAIA8AAIAAAcQAagfAjAAQAiAAATATQATATAAAiIAAB7g");
	this.shape_16.setTransform(24,-6.3,0.405,0.405);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AhoB+IAAj7IDPAAIAAAxIiTAAIAAA0ICCAAIAAAvIiCAAIAAA2ICVAAIAAAxg");
	this.shape_17.setTransform(13.7,-7.4,0.405,0.405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-17.7,164.3,20.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg8JAK8IAA13MB4TAAAIAAV3g");
	this.shape.setTransform(385,70);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjMAZIAAgxIGZAAIAAAxg");
	this.shape.setTransform(20.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,5.2);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAYIgMgVIgFAIIAAANIgMAAIgBgvIAMAAIABAUIANgUIANAAIgQATIATAcg");
	this.shape.setTransform(21.9,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIAYIgRghIABAQIAAARIgLAAIAAgvIAMAAIAMAXIAFAKIAAAAIgCgQIAAgRIALAAIABAvg");
	this.shape_1.setTransform(14.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAYIgDgMIgOABIgDALIgMAAIAQgvIAMAAIARAvgAgFAEIAJAAIgEgTIAAAAg");
	this.shape_2.setTransform(8.2,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAYIgBgvIASAAQASAAgBAMQAAAJgIACQALAAAAAJQABAPgUAAgAgHAQIAHAAQAIAAAAgHQAAgGgIAAIgHAAgAgHgDIAGAAQAGAAAAgGQAAgGgGAAIgGAAg");
	this.shape_3.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,5.1);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAYIAAgMIgUAAIAAgIIASgaIANgBIAAAbIAGAAIAAAIIgGAAIAAAMgAAAgFIgHAJIAJAAIAAgRg");
	this.shape.setTransform(74.9,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRARIAFgHQAGAFAFAAQAHAAAAgIQAAgHgGAAQgEAAgEADIgFgDIABgXIAbAAIAAAJIgRABIAAAJQACgCABAAQAHAAAEAEQAFACAAAHQABAHgGAGQgFAEgHAAQgKAAgHgHg");
	this.shape_1.setTransform(70.6,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLASQgFgGAAgMQgBgKAFgHQAFgGAHgBQASAAAAAYQAAAZgSAAQgGAAgFgHgAgFAAQAAAQAFAAQAHAAAAgQQAAgPgHAAQgFAAAAAPg");
	this.shape_2.setTransform(66.5,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLASQgFgGAAgMQgBgKAFgHQAFgGAHgBQASAAAAAYQAAAZgSAAQgGAAgFgHgAgFAAQAAAQAFAAQAHAAAAgQQgBgOgGgBQgGABABAOg");
	this.shape_3.setTransform(62.3,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPATIAGgHQADADAEAAQAIAAABgPQgEAGgEAAQgPAAAAgNQgBgIAFgEQAFgEAHAAQAGAAAFAFQAGAHABALQAAALgHAHQgFAGgHAAQgJAAgFgFgAgGgHQAAAHAGAAQADAAADgFQgBgKgFAAQgGAAAAAIg");
	this.shape_4.setTransform(54.7,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQASIAHgGQACADAFAAQAIABABgQQgEAGgEgBQgPAAgBgNQAAgHAFgEQAFgFAHABQAGgBAFAGQAGAGABAMQAAALgHAHQgFAGgHAAQgIABgHgHgAgGgIQAAAIAGgBQADAAADgEQgBgKgFAAQgGAAAAAHg");
	this.shape_5.setTransform(50.5,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMASQgFgHAAgLQAAgYARABQAHgBAFAHQAFAGAAALQABALgFAHQgFAGgIAAQgHAAgFgGgAgGAAQAAAQAGAAQAGAAAAgQQAAgPgGAAQgGAAAAAPg");
	this.shape_6.setTransform(46.4,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAAQAAgYARABQAHgBAFAHQAFAGAAALQABALgFAHQgFAGgIAAQgRAAAAgYgAgGAAQAAAQAGAAQAGAAAAgQQAAgOgGAAQgGAAAAAOg");
	this.shape_7.setTransform(42.2,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPATIAFgHQAFADADAAQAJAAgBgPQgDAGgFAAQgPAAAAgNQABgIAEgEQAFgEAHAAQAGAAAGAFQAFAHAAALQAAALgFAHQgGAGgHAAQgJAAgFgFgAgGgHQAAAHAGAAQADAAADgFQgBgKgFAAQgGAAAAAIg");
	this.shape_8.setTransform(34.6,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRASIAGgIQAFAFAGABQAGgBAAgGQAAgHgMABIAAgGQAKAAAAgGQAAgGgEAAQgEAAgGAFIgFgHQAHgHAIAAQAQABAAANQAAAGgIAEQAKABAAAJQAAAHgGADQgFAFgHAAQgKgBgHgGg");
	this.shape_9.setTransform(30.3,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAVQgFgEAAgGQAAgHAIgEIAAAAQgGgDAAgHQgBgGAFgEQAEgDAGgBQAOABABANQAAAGgGAEIAAAAQAIADAAAIQABAFgFAEQgFAFgIAAQgGAAgFgEgAgGAKQAAAGAGABQAHAAAAgHQgBgDgIgFQgEAFAAADgAAAgQQgEABAAAFQAAAEAHADQADgDAAgDQAAgHgFAAIgBAAg");
	this.shape_10.setTransform(26.2,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAVQgFgEAAgGQAAgHAIgEQgGgDgBgHQAAgOAPAAQAOAAABAOQAAAGgHAEIABAAQAIADAAAIQAAAFgFAEQgEAFgIAAQgGAAgFgEgAgGAKQAAAHAGAAQAHAAgBgGQAAgEgIgFQgEAFAAADgAgEgKQAAAEAHADQADgEAAgCQAAgHgGAAQgEABAAAFg");
	this.shape_11.setTransform(22,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAYQAAgXALgOIgVAAIAAgJIAhgBIAAAHQgIAKgDAHQgCAHgBAQg");
	this.shape_12.setTransform(14.5,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKATQgGgHgBgLQAAgMAGgGQAGgHAHABQAJgBAFAGIgGAHQgCgEgGABQgIAAAAAOQAEgEAEAAQAPAAAAAMQABAHgFAFQgFAFgHgBQgGABgFgGgAgFAGQABAKAEAAQAHAAAAgIQAAgHgHAAQgCAAgDAFg");
	this.shape_13.setTransform(10.3,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRARIAFgHQAFAFAGAAQAHAAAAgHQAAgIgGAAQgEAAgEACIgFgCIABgXIAbAAIAAAJIgRAAIAAAJQACgBABAAQAHAAAEAEQAFACAAAHQABAIgGAEQgFAFgHAAQgKAAgHgHg");
	this.shape_14.setTransform(6,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAYIAAgGIAQgQQAEgEAAgFQAAgHgFAAQgFAAgEAFIgHgGQAIgIAJAAQAOAAABAQQAAAHgPAQIAIgBIAKAAIAAAJg");
	this.shape_15.setTransform(1.8,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.8,5.2);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai9iBIArgvIFQEyIgrAvg");
	this.shape_1.setTransform(19,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.1,35.6);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAOIAIgIIgPgMIAEgFIAdgJIAKAKIgSARIAEADIgFAHIgDgEIgGAIgAgIgFIAHAFIAKgKIAAgBg");
	this.shape.setTransform(53.1,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQASQgHgHgBgJIAIgCQABAHAEAEQAGAFAEgFQADgFgDgFQgCgBgFgBIgCgFIAPgQIAUASIgGAFIgNgKIgGAGIAEACQALAIgJALQgFAFgFAAQgHAAgFgFg");
	this.shape_1.setTransform(50.1,46.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOARQgNgMAQgPQAOgRANALQAMAMgQAPQgJAKgHAAQgFAAgFgEgAgDgDQgKAJAEAFQAGAEAIgLQAKgJgFgFIgDgBQgFAAgFAIg");
	this.shape_2.setTransform(47.2,43.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAXQgGgBgGgFQgIgIAAgIIAJgBQAAAGAEAEQAGAFADgEQADgFgIgGIAFgGQAHAGAEgDQADgDgEgEQgEgDgFAAIAAgJQAKABAFAFQAFAFABAGQABAFgEACQgEAFgIgDIAAABQAFAIgGAGQgDAEgDAAIgCAAg");
	this.shape_3.setTransform(44.1,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAXQgGAAgGgFQgHgHgBgKIAIgBQABAHAEADQAFAGAGgGQACgEgDgGQgDAAgEgBIgCgFIAPgQIAUASIgGAEIgNgJIgGAFIAEADQALAIgJALQgFAFgEAAIgBAAg");
	this.shape_4.setTransform(39.2,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPARQgFgFAAgIQABgGAIgIQAOgRAMALQANAMgQAPQgKAKgGAAQgGAAgFgEgAgDgDQgLAKAFAEQAFAEAIgLQAKgJgEgFIgEgBQgEAAgFAIg");
	this.shape_5.setTransform(36.3,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAOIAGgIIgOgMIAEgFIAegJIAKAKIgSARIADAEIgFAGIgDgEIgGAIgAgIgFIAHAFIAKgKIAAgBg");
	this.shape_6.setTransform(33.5,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOARQgNgMAQgPQAOgRAMALQAMAMgPAPQgIAIgFACIgDAAQgGAAgEgEgAgDgDQgLAJAFAFQAFAEAIgLQALgJgFgFIgDgBQgFAAgFAIg");
	this.shape_7.setTransform(30.5,28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAEIAGgFIAIAGIAPgRIgGgGIAEgGQAFAEAHACIAGAFIgXAZIAEAGIgEAHg");
	this.shape_8.setTransform(25,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDAWQgGAAgFgFQgFgFgBgGQgBgGADgCQAFgFAJADIAAgBQgCgHAEgFQAHgJALAKQALAKgJAHQgEAFgHgCIAAABQADAIgFAGQgEADgDAAIgBAAgAgKACQgEAFAFAEQAFAFADgEQABgDgDgJQgEAAgDACgAADgKQgDADAFAHQAEAAACgCQAEgFgEgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABg");
	this.shape_9.setTransform(22.4,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDAXQgGgBgFgFQgIgIAAgIIAIgBQABAHAEADQAGAFADgEQACgFgHgGIAFgGQAHAGADgDQAEgDgEgEQgDgDgHAAIABgJQAIAAAHAGQALALgIAHQgFAFgHgDIgBAAQAFAJgFAGQgDAEgDAAIgDAAg");
	this.shape_10.setTransform(19.4,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAXQgGAAgGgFQgHgHgBgKIAIgBQABAHAEADQAFAGAFgGQADgEgDgGQgDAAgEgBIgCgFIAPgQIAUASIgGAEIgNgJIgGAFIAEADQALAIgJALQgFAFgEAAIgBAAg");
	this.shape_11.setTransform(16.7,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOARQgNgMAQgPQAOgRAMALQANAMgQAPQgIAIgFACIgDAAQgGAAgEgEgAgDgDQgLAJAFAFQAFAEAIgLQALgJgFgFIgDgBQgFAAgFAIg");
	this.shape_12.setTransform(11.5,10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAXQgGgBgFgFQgIgHAAgJIAIgBQABAHAEADQAFAFAEgEQACgFgHgGIAFgGQAGAGAFgDQADgDgEgEQgDgDgHAAIABgJQAIAAAHAGQAMAMgJAGQgFAFgHgDIgBABQAGAIgGAGQgEAEgCAAIgDAAg");
	this.shape_13.setTransform(8.4,7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAOIAHgIIgPgMIAFgFIAdgJIALAKIgSARIAEAEIgGAGIgDgEIgHAIgAgIgFIAHAFIAKgLg");
	this.shape_14.setTransform(5.9,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXACIAEgCQAaAAAEgEQAFgFgFgFQgEgDgGABIAAgJQAKABAGAFQAMALgKAJQgFAFgUACIALALIgFAHg");
	this.shape_15.setTransform(2.5,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.4,51.7);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAWIAEgWIgJABIgIAJIgIgHIAdghIAJAIIgMAOIABAAIAVgEIAJAIIgXAEIgGAeg");
	this.shape_16.setTransform(16.5,15.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAWIAIgjIgUAYIgIgHIAdghIAJAIIgKAiIAAABIALgOIALgKIAHAHIgdAhg");
	this.shape_17.setTransform(11.7,11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBASIADgKIgJgIIgKAEIgIgFIApgYIAJAJIgUAqgAAAgEIAGAFIAJgQIAAAAg");
	this.shape_18.setTransform(6.6,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLATIgNgMIAdggIAMALQAOAMgIAHQgGAFgHgDQAGAIgGAHQgEAEgFAAQgEAAgIgHgAgLAIIAFAFQAGAGADgFQAEgEgHgGIgCgEgAABgEIADADQAGAEAEgDQADgDgFgFIgEgEg");
	this.shape_19.setTransform(2.6,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,18.8);


(lib.box_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#762B8A").ss(2,1,1).p("EA4yAHCMhxjAAAIAAuDMBxjAAAg");
	this.shape.setTransform(363.5,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E9EF").s().p("Eg4xAHCIAAuDMBxjAAAIAAODg");
	this.shape_1.setTransform(363.5,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,729,92);


(lib.blueBG_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4876C1").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.logo2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.learnMore_btn("synched",0);
	this.instance.setTransform(-29.8,11.8,1,1,0,0,0,75.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.2,35.1);


(lib.hand_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFFFF").s().p("AkhhjICSi0IGxFaIirDWg");
	this.shape.setTransform(134.4,123.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFC3C7").s().p("Al0gLIEelkIHLE7IlSGkg");
	this.shape_1.setTransform(142.8,115);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCA27D").s().p("AgqAMIACgFIAogIIAsgLIABAFIgtAJIgsALg");
	this.shape_2.setTransform(63.4,109.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCA27D").s().p("AAigJIBlgSIADALIhlAQQhHALg9ANQAAgCgSACIgYAEQA6gUBxgRg");
	this.shape_3.setTransform(42.1,83.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCA27D").s().p("AAagIIBKgSIABAIIhKASQhEANgdAJQgBgCgMADIgRADQApgQBVgSg");
	this.shape_4.setTransform(52.3,96.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3B292").s().p("AhcIaQgigQgGgiQgDgSAHgSIhFAQQgsAKgjgRQgigQgGgiQgDgUAKgVQAJgVAUgQIhVAUQgsAKgjgRQgjgRgFghQgEgZAOgYQAOgXAbgQIhCAPQgsAKgjgRQgjgRgFgiQgFghAbgfQAbgfAsgKIDAgfQDagoCAgxIABgBIgEgBIC8hAIgBgFQgZg0gVgyQgqhjAGgwQAAgrAJgrQAJgpAggZQAkgbAkAUQASAJAIAZQAFAQACAdQABAdAQAnIAfBHQARAkApAkQAYAVAxAoQCjBmAEEQQAMAvgYAyIABAEQgGBBgyAoQgZAVg7AXQidA/ixAdIiQARQgQADgQAAQgZAAgWgKg");
	this.shape_5.setTransform(71.8,65.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F19B2C").s().p("AichwIAfgiIEbECIggAjg");
	this.shape_6.setTransform(89.1,52.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FD9426").s().p("AgZgBQAFgKAAgFIACgCQAEAAALgGIAdAaIgWAXg");
	this.shape_7.setTransform(42.1,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FD9426").s().p("Ag0AwIgRgQQgFgJACgKQABgKAHgGQAFgFAMgEQAGgCACgHQACgMAGgGQAHgIAKgCQAKgCAHADIBGA+IgUAWIghgeQgDgDgDADQgGAEgIADQgGACgCAHQgCAMgFAGQgKALgNAAQgHAAgHgDg");
	this.shape_8.setTransform(40,27.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FD9426").s().p("AgegUIAKgKIAvArQAEAEAAAEQAAAFgDADIgCACg");
	this.shape_9.setTransform(45.3,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FD9426").s().p("AgdgKQARAAAMgNIAeAZIgUAWg");
	this.shape_10.setTransform(38.9,34.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FD9426").s().p("AgagMQgDgDgBgFQAAgEADgEIACgCIA4AzIgJAKg");
	this.shape_11.setTransform(29.7,29.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FD9426").s().p("AgdgBIAUgWIAnAiQgSAAgMANg");
	this.shape_12.setTransform(36.1,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FD9426").s().p("AAPAZIgvgrIAKgKIA3AzIgBACQgEADgEAAIgCABQgDAAgEgEg");
	this.shape_13.setTransform(35.9,35.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FD9426").s().p("AgggWIABgCQAEgEAEAAQAFAAADADIAwArIgKALg");
	this.shape_14.setTransform(39.1,19.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FD9426").s().p("AgZgBIAWgXIAdAaQgFAJAAAGIgCACIgPAHg");
	this.shape_15.setTransform(32.9,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FD9426").s().p("AgXgGIAUgWIAbAcQgLALABASg");
	this.shape_16.setTransform(30.2,26.8);

	this.instance = new lib.Path_1();
	this.instance.setTransform(29.2,58.6,1,1,0,0,0,19,17.8);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(54.4,20.7,1,1,0,0,0,9.7,9.3);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(47.2,58.2,1,1,0,0,0,27.7,25.8);
	this.instance_2.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A8B7B7").s().p("AiAAcQACgHAEgEIBQhVQAHgHAKgBQAKAAAHAHICBB4QAMALgFAPg");
	this.shape_17.setTransform(82.6,65.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D0541A").s().p("AApBoIiTiIQgDgEgBgFQAAgFADgDIAyg2QADgEAFAAQAFAAAEADICTCJQADAEABAFQAAAEgDAEIgxA2QgEAEgFAAQgFAAgEgEg");
	this.shape_18.setTransform(65.2,89.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#97A3A4").s().p("AAIB6IiAh6QgIgFAAgKQgBgLAHgHIBQhXQAHgHAKAAQAKgBAHAIICBB4QAHAGABAKQABAKgHAHIhQBYQgHAHgKABQgKgBgIgGg");
	this.shape_19.setTransform(82.6,71.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E9EF").s().p("ABiIPIpzo/QgTgRgBgZQgCgaAQgSIFhmFQAQgTAZAAQAagBASASIJzI+QASASACAZQACAZgQASIlhGGQgQASgZABIgCAAQgZAAgRgRg");
	this.shape_20.setTransform(55.1,54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.1,151.9);


(lib.entrustLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoBG_gfx("synched",0);
	this.instance.setTransform(125,61,1,1,0,0,0,125,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.1,108);


(lib.cardHand_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.setTransform(26.4,80,1,1,0,0,0,12,2.6);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFFFF").s().p("ArPCaIUvoWIBwEMI1AHtg");
	this.shape.setTransform(208.5,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFC3C7").s().p("AsGArIUvoWIDeIRI1RHGg");
	this.shape_1.setTransform(214,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2B191").s().p("ACgESQg7gBisgaQiRgVhXAKQhBAHg1gLQhFgOgSgqQgWg0AuglQAmgfA4gEQAmgDBmAGQBfAFAxgGQA9gHAFg4QAFg6g/gWQgugQjAABQjTABgXgDQASgsA/g1QBWhIBaACIE8ALQEQAKBdAGQBDAEA1BsQAOAdAaA8QAYAyATAYQgUBGg6A8QhuBzjRAAIgOAAg");
	this.shape_2.setTransform(103.9,80.7);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(34.9,127,1,1,0,0,0,20.5,2.6);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(51.7,101.6,1,1,0,0,0,38.4,2.6);
	this.instance_2.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A8B7B7").s().p("Ah2BFIgBh8QAAgKAIgIQAHgHAMAAIC8gBQAQAAAIAPIjqCUQgDgGgBgHg");
	this.shape_3.setTransform(85.9,101.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEF3F4").s().p("AhzAwQgFgEAAgFIgBhMQAAgFAFgEQADgEAGAAIDXAAQAFAAAEAEQAEADAAAFIAABMQABAGgEADQgEAEgFAAIjXAAQgGAAgDgDg");
	this.shape_4.setTransform(86.3,124.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97A3A4").s().p("AhvBRQgIgHAAgLIgCh8QAAgLAIgHQAIgHALAAIC8gBQALAAAIAIQAHAHABALIABB8QAAAKgIAIQgHAGgLAAIi9ABQgLAAgHgHg");
	this.shape_5.setTransform(86.1,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A4559").s().p("AnuFHQgTgSgBgaIgKosQAAgaATgSQATgTAcAAIOKgIQAbgBAUATQAUASAAAaIAKIsQAAAagTASQgTATgcAAIuKAJQgbAAgUgTg");
	this.shape_6.setTransform(52.5,104.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291.6,138.8);


// stage content:
(lib.entrustaniban = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_234 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(234).call(this.frame_234).wait(1));

	// Click Tag
	this.instance = new lib.Symbol1();
	this.instance.setTransform(347.9,79.9,1.075,2.274,0,0,0,384.9,70);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg4oAG9MBxbAAAIAAt5MhxlAAAIAAN5");
	this.shape.setTransform(363.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(235));

	// Logo
	this.instance_1 = new lib.entrustDatacardLogo_gfx("synched",0);
	this.instance_1.setTransform(663.3,150.5,1,1,0,0,0,97,12.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).wait(1).to({regX:67.3,regY:-7.4,x:633.6,y:114},0).wait(1).to({y:97},0).wait(1).to({y:80.1},0).wait(1).to({y:63.2},0).wait(1).to({y:68.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Logo BG
	this.logo = new lib.entrustLogo();
	this.logo.setTransform(84,-70.5,0.79,0.796,0,0,0,107.5,54);
	this.logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(194).to({_off:false},0).wait(1).to({scaleX:0.79,x:83.9,y:-41.6},0).wait(1).to({scaleX:0.79,x:83.8,y:-12.7},0).wait(1).to({x:83.7,y:16.2},0).wait(1).to({scaleX:0.79,x:83.6,y:45},0).wait(1).to({scaleY:0.82,y:44.9},0).wait(36));

	// CTA 1
	this.text = new cjs.Text("GET OUR FREE EMV MIGRATION\nBEST PRACTICES EBOOK TODAY!", "15px 'Arial'", "#0B3154");
	this.text.lineHeight = 15;
	this.text.setTransform(209.8,-54.4,1.166,1.166);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(227).to({_off:false},0).wait(1).to({x:208.8,y:-26.4},0).wait(1).to({x:207.8,y:1.6},0).wait(1).to({x:206.8,y:29.6},0).wait(1).to({y:24.6},0).wait(4));

	// CTA 1
	this.text_1 = new cjs.Text("UPGRADE YOUR EXISTING\nENTRUST DATACARD SYSTEM", "15px 'Arial'", "#0B3154");
	this.text_1.lineHeight = 15;
	this.text_1.setTransform(208.8,-55.9,1.166,1.166);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(199).to({_off:false},0).wait(1).to({x:207.7,y:-27.9},0).wait(1).to({x:206.7,y:0.1},0).wait(1).to({x:205.7,y:28.2},0).wait(1).to({y:23.2},0).wait(25).to({y:40.4},0).wait(1).to({y:57.7},0).wait(1).to({y:74.9},0).wait(1).to({y:92.2},0).wait(4));

	// BTN TXT
	this.instance_2 = new lib.logo2("synched",0);
	this.instance_2.setTransform(832.6,31.8,1,1,0,0,0,3.7,17.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(201).to({_off:false},0).wait(1).to({regX:18.6,x:793.4},0).wait(1).to({x:739.4},0).wait(1).to({x:685.3},0).wait(1).to({x:631.2},0).wait(1).to({x:636.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Logo BG
	this.instance_3 = new lib.logoBG_gfx("synched",0);
	this.instance_3.setTransform(663,-49.1,1,1,0,0,0,125,34);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(194).to({_off:false},0).wait(1).to({regX:107.5,regY:27,x:645.5,y:-29.4},0).wait(1).to({y:-2.6},0).wait(1).to({y:24.1},0).wait(1).to({y:50.9},0).wait(1).to({y:46.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 14
	this.instance_4 = new lib.box_gfx();
	this.instance_4.setTransform(362.4,44,1,1,0,0,0,363.4,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).wait(1).to({regX:363.5,x:362.5,y:45.3},0).wait(1).to({y:46.5},0).wait(1).to({y:47.8},0).wait(1).to({y:49},0).wait(1).to({y:44},0).wait(36));

	// Layer 12
	this.instance_5 = new lib.reader_gfx();
	this.instance_5.setTransform(306.5,-94.5,0.999,0.999,-27.6,0,0,55.6,79);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({_off:false},0).wait(1).to({regY:78.9,scaleX:1,scaleY:1,rotation:-22.2,x:307.8,y:-78.4},0).wait(1).to({rotation:-16.6,x:309,y:-62.1},0).wait(1).to({rotation:-11.1,x:310.2,y:-45.8},0).wait(1).to({rotation:-5.5,x:311.5,y:-29.5},0).wait(1).to({rotation:0,y:-34.6},0).wait(41).to({y:7.9},0).wait(1).to({y:50.5},0).wait(1).to({y:92.9},0).wait(1).to({y:135.5},0).wait(1).to({y:178},0).to({_off:true},1).wait(35));

	// Entrust
	this.text_2 = new cjs.Text("MAKE THE TRANSITION", "23px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 244;
	this.text_2.setTransform(91.5,-73.5);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(144).to({_off:false},0).wait(1).to({x:91.8,y:-49.2},0).wait(1).to({x:92,y:-24.9},0).wait(1).to({x:92.3,y:-0.5},0).wait(1).to({x:92.6,y:23.8},0).wait(1).to({y:18.8},0).wait(46).to({y:61.3},0).wait(1).to({y:103.8},0).wait(1).to({y:146.4},0).wait(1).to({y:188.9},0).wait(1).to({y:231.4},0).to({_off:true},1).wait(35));

	// Server Testing
	this.text_3 = new cjs.Text("TO EMV", "32px 'Arial'", "#FFFFFF");
	this.text_3.lineHeight = 32;
	this.text_3.lineWidth = 359;
	this.text_3.setTransform(406.1,-53.9);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(144).to({_off:false},0).wait(1).to({y:-32.4},0).wait(1).to({y:-10.9},0).wait(1).to({y:10.5},0).wait(1).to({y:32},0).wait(1).to({y:27},0).wait(46).to({y:69.5},0).wait(1).to({y:112},0).wait(1).to({y:154.6},0).wait(1).to({y:197.1},0).wait(1).to({y:239.6},0).to({_off:true},1).wait(35));

	// Thumbs Up
	this.instance_6 = new lib.hand_gfx();
	this.instance_6.setTransform(337.5,170.5,0.998,0.998,-35.6,0,0,90,76.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).wait(1).to({regY:75.9,scaleX:1,scaleY:1,rotation:-28.6,x:337.7,y:144.5},0).wait(1).to({rotation:-21.4,x:337.9,y:118.8},0).wait(1).to({rotation:-14.3,x:338.2,y:93.1},0).wait(1).to({rotation:-7.1,x:338.5,y:67.3},0).wait(1).to({rotation:0,y:72.4},0).wait(54).to({scaleX:0.97,scaleY:0.97,rotation:6.1,x:344.1,y:81.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:12.2,x:349.7,y:90.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:18.2,x:355.3,y:100},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:24.3,x:361,y:109.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:30.4,x:366.5,y:118.4},0).wait(8).to({x:364,y:112},0).wait(1).to({x:361.4,y:105.6},0).wait(1).to({x:358.9,y:99.2},0).wait(1).to({x:356.4,y:92.8},0).wait(1).to({x:353.8,y:86.4},0).wait(31).to({y:128.9},0).wait(1).to({y:171.4},0).wait(1).to({y:213.9},0).wait(1).to({y:256.4},0).wait(1).to({y:299},0).to({_off:true},1).wait(35));

	// Server Testing
	this.text_4 = new cjs.Text("while providing customers\nwith peace of mind", "20px 'Arial'", "#FFFFFF");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 359;
	this.text_4.setTransform(406.1,-59.9);
	this.text_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(79).to({_off:false},0).wait(1).to({y:-38.4},0).wait(1).to({y:-16.9},0).wait(1).to({y:4.5},0).wait(1).to({y:26},0).wait(1).to({y:21},0).wait(61).to({x:405.9,y:40},0).wait(1).to({x:405.7,y:59},0).wait(1).to({x:405.5,y:78},0).wait(1).to({x:405.3,y:97},0).wait(1).to({x:405.1,y:116},0).to({_off:true},1).wait(85));

	// Entrust
	this.text_5 = new cjs.Text("EMV cards help\nreduce the risk\nof payment fraud", "20px 'Arial'", "#FFFFFF");
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 244;
	this.text_5.setTransform(55.5,-81.5);
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(69).to({_off:false},0).wait(1).to({x:55.8,y:-57.2},0).wait(1).to({x:56,y:-32.9},0).wait(1).to({x:56.3,y:-8.5},0).wait(1).to({x:56.6,y:15.8},0).wait(1).to({y:10.8},0).wait(71).to({x:56.4,y:29.8},0).wait(1).to({x:56.2,y:48.8},0).wait(1).to({x:56,y:67.8},0).wait(1).to({x:55.8,y:86.8},0).wait(1).to({x:55.6,y:105.8},0).to({_off:true},1).wait(85));

	// Background
	this.instance_7 = new lib.blueBG_gfx();
	this.instance_7.setTransform(125.5,37,1,1,0,0,0,126.5,127);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).wait(1).to({regX:364,regY:45,x:363,y:-27.2},0).wait(1).to({y:-9.4},0).wait(1).to({y:8.4},0).wait(1).to({y:26.2},0).wait(1).to({y:44},0).wait(121).to({x:362.8,y:63},0).wait(1).to({x:362.6,y:82},0).wait(1).to({x:362.4,y:101},0).wait(1).to({x:362.2,y:120},0).wait(1).to({x:362,y:139},0).to({_off:true},1).wait(35));

	// Reader Front
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#354A5D").s().p("Ap6BxQgFAAgEgEQgEgDAAgFIAAjJQAAgEAEgEQAEgEAFAAIT1AAQAFAAAEAEQAEAEAAAEIAADJQAAAFgEADQgEAEgFAAg");
	this.shape_1.setTransform(317.2,75.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56636F").s().p("Ap6BxQgFAAgEgEQgEgDAAgGIAAjHQAAgFAEgEQAEgEAFAAIT1AAQAFAAAEAEQAEAEAAAFIAADHQAAAFgEAEQgEAEgFAAg");
	this.shape_2.setTransform(317.2,73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},75).wait(160));

	// Hand / Card
	this.instance_8 = new lib.cardHand_gfx("synched",0);
	this.instance_8.setTransform(-133.7,7.4,1,1,0,0,0,145.8,69.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(1).to({x:-98.8},0).wait(1).to({x:-63.9},0).wait(1).to({x:-28.9},0).wait(1).to({x:5.9},0).wait(1).to({x:40.9},0).wait(1).to({x:75.8},0).wait(1).to({x:110.7},0).wait(1).to({x:145.5},0).wait(1).to({x:180.4},0).wait(1).to({x:215.3},0).wait(1).to({x:250.2},0).wait(1).to({x:285.1},0).wait(1).to({x:320},0).wait(1).to({x:354.9},0).wait(1).to({x:389.8},0).wait(1).to({x:424.7},0).wait(1).to({x:459.6},0).wait(1).to({x:494.5},0).wait(1).to({x:529.4},0).wait(1).to({x:564.3},0).wait(1).to({x:599.2},0).wait(1).to({x:634.1},0).wait(1).to({x:669},0).wait(1).to({x:703.9},0).wait(1).to({x:738.8},0).wait(1).to({x:773.7},0).wait(1).to({x:808.6},0).wait(1).to({x:843.5},0).wait(1).to({x:878.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(160));

	// Reader Back
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#354A5D").s().p("AroBRQgEAAgFgEQgDgEAAgFIAAiHQAAgFADgEQAFgDAEAAIXRAAQAFAAAEADQADAEAAAFIAACHQAAAFgDAEQgEAEgFAAg");
	this.shape_3.setTransform(319.5,90.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#19303E").s().p("Ap6CJQgFAAgEgEQgEgFAAgHIAAjyQAAgGAEgFQAEgEAFAAIT1AAQAFAAAEAEQAEAFAAAGIAADyQAAAHgEAFQgEAEgFAAg");
	this.shape_4.setTransform(322.6,73.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56636F").s().p("Ap6CJQgFAAgEgFQgEgEAAgGIAAjyQAAgHAEgEQAEgFAFAAIT1AAQAFAAAEAFQAEAEAAAHIAADyQAAAGgEAEQgEAFgFAAg");
	this.shape_5.setTransform(322.6,70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},75).wait(160));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("EhNJALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_5 = new cjs.Graphics().p("EhKbALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_6 = new cjs.Graphics().p("EhHsALOIAA2bMB9+AAAIAAWbg");
	var mask_graphics_7 = new cjs.Graphics().p("EhE+ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_8 = new cjs.Graphics().p("EhCQALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg/hALOIAA2bMB9+AAAIAAWbg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg+/ALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_39 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_41 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_42 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_43 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_44 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_55 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_56 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_57 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_60 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_61 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_67 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_68 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_71 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg9LALOIAA2bMB9/AAAIAAWbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:-493.8,y:53.9}).wait(1).to({graphics:mask_graphics_5,x:-476.4,y:53.9}).wait(1).to({graphics:mask_graphics_6,x:-459,y:53.9}).wait(1).to({graphics:mask_graphics_7,x:-441.5,y:53.9}).wait(1).to({graphics:mask_graphics_8,x:-424.1,y:53.9}).wait(1).to({graphics:mask_graphics_9,x:-406.7,y:53.9}).wait(1).to({graphics:mask_graphics_10,x:-375.3,y:53.9}).wait(1).to({graphics:mask_graphics_11,x:-340.4,y:53.9}).wait(1).to({graphics:mask_graphics_12,x:-305.6,y:53.9}).wait(1).to({graphics:mask_graphics_13,x:-270.7,y:53.9}).wait(1).to({graphics:mask_graphics_14,x:-235.8,y:53.9}).wait(1).to({graphics:mask_graphics_15,x:-201,y:53.9}).wait(1).to({graphics:mask_graphics_16,x:-166.1,y:53.9}).wait(1).to({graphics:mask_graphics_17,x:-131.3,y:53.9}).wait(1).to({graphics:mask_graphics_18,x:-96.4,y:53.9}).wait(1).to({graphics:mask_graphics_19,x:-61.5,y:53.9}).wait(1).to({graphics:mask_graphics_20,x:-26.7,y:53.9}).wait(1).to({graphics:mask_graphics_21,x:8.1,y:53.9}).wait(1).to({graphics:mask_graphics_22,x:43,y:53.9}).wait(1).to({graphics:mask_graphics_23,x:77.9,y:53.9}).wait(1).to({graphics:mask_graphics_24,x:112.7,y:53.9}).wait(1).to({graphics:mask_graphics_25,x:147.6,y:53.9}).wait(1).to({graphics:mask_graphics_26,x:182.4,y:53.9}).wait(1).to({graphics:mask_graphics_27,x:217.3,y:53.9}).wait(1).to({graphics:mask_graphics_28,x:252.2,y:53.9}).wait(1).to({graphics:mask_graphics_29,x:287,y:53.9}).wait(1).to({graphics:mask_graphics_30,x:321.9,y:53.9}).wait(1).to({graphics:mask_graphics_31,x:356.7,y:53.9}).wait(1).to({graphics:mask_graphics_32,x:391.6,y:53.9}).wait(1).to({graphics:mask_graphics_33,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_34,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_35,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_36,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_37,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_38,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_39,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_40,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_41,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_42,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_43,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_44,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_45,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_46,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_47,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_48,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_49,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_50,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_51,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_52,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_53,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_54,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_55,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_56,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_57,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_58,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_59,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_60,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_61,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_62,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_63,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_64,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_65,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_66,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_67,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_68,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_69,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_70,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_71,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_72,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_73,x:414.9,y:53.9}).wait(1).to({graphics:mask_graphics_74,x:414.9,y:53.9}).wait(161));

	// Ready to Txt
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003D76").s().p("AgHBBQgDgDAAgFQAAgFADgDQADgCAEAAQADAAADACQAEAEAAAEQAAAFgDADQgEADgDAAQgEAAgDgDgAgBAhIABgKIABgLIAHgSIAGgPQACgHAAgGQAAgKgFgJQgGgIgJAAQgIAAgFAEQgGAEAAAEQAAADAEAEQAEAFAAAEQAAADgCACQgCADgEAAQgEAAgDgEQgDgEAAgGQAAgKAJgJQAIgJAQAAQAPAAAKAJQAJAHAAAPQAAANgOATQgRASgCATg");
	this.shape_6.setTransform(622,58.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003D76").s().p("AAvBDIhXhsIAABMQAAAQAFAGQADACALACIAAADIgvAAIAAgDQAMgCAEgEQADgEAAgQIAAhWIgCgEQgFgEgDgCQgDgBgGAAIAAgEIAiAAIBLBeIAAhBQAAgQgFgFQgDgDgLgBIAAgEIAvAAIAAAEQgLABgEAFQgEAEAAAPIAABog");
	this.shape_7.setTransform(610,58.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003D76").s().p("AgtAyQgTgUAAgeQAAgfAUgTQASgRAagBQAaABATARQAUATAAAfQAAAggVATQgSASgaAAQgbgBgSgSgAgdgtQgNAPAAAeQAAAfANAPQANAPAQAAQASAAAMgPQAMgPAAgfQABgfgNgPQgNgPgRAAQgQABgNAPg");
	this.shape_8.setTransform(595.6,58.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003D76").s().p("AgcBCIAAgEQAMgBAEgDQADgCAAgMIAAhXQAAgLgDgDQgEgDgMgBIAAgEIA5AAIAAAEQgMABgEADQgDADAAALIAABXQAAAMADACQAEADAMABIAAAEg");
	this.shape_9.setTransform(585,58.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003D76").s().p("AgbBCIAAgEQAMgBAEgDQADgDAAgNIAAhiIgLAAQgRAAgGAFQgGAEgDAQIgFAAIABgiIBvAAIABAiIgEAAQgEgQgFgEQgGgFgRAAIgLAAIAABkQAAAMADACQAEADAMABIAAAEg");
	this.shape_10.setTransform(575.6,58.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003D76").s().p("AgrAuQgGgLAAgTIAAg8QAAgLgEgDQgDgDgMgBIAAgEIA5AAIAAAEQgLAAgEAEQgDADAAALIAAA+QAAAPAEAJQAIAQAVAAQAYAAAIgQQAFgJAAgUIAAgyQAAgQgEgEQgEgEgLgBIAAgEIAvAAIAAAEQgMABgDAEQgEAFAAAPIAAAyQAAAVgGAMQgMAVggAAQgfAAgMgVg");
	this.shape_11.setTransform(562.3,58.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIA4AAIAAAEQgLABgDADQgEADAAAKIAABeQAAADABACQABABAAAAQAAAAABABQAAAAABAAQABAAABAAIAFABIAIAAQAaAAAJgEQAKgFAIgSIAFAAIgJAjg");
	this.shape_12.setTransform(549,58.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003D76").s().p("AgtAyQgTgUAAgeQAAgfAUgTQASgRAagBQAaABATARQAUATAAAfQAAAggVATQgSASgaAAQgbgBgSgSgAgdgtQgNAPAAAeQAAAfANAPQANAPAQAAQASAAAMgPQANgPgBgfQAAgfgMgPQgNgPgRAAQgQABgNAPg");
	this.shape_13.setTransform(535.7,58.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003D76").s().p("AgPBBIgMgEQgDAAgBADIgCAEIgEAAIgGgqIAEAAQAFANAHAIQAMAOAQAAQAJAAAHgGQAHgGAAgLQAAgKgHgHQgFgFgMgJIgRgIQgIgFgFgFQgIgKAAgLQAAgPAKgKQAKgKARAAQAEAAAKADIALADQAEAAABgBIACgFIAFAAIAEAqIgFAAQgFgTgLgIQgKgHgJAAQgIAAgGAFQgGAEAAAJQAAAIAEAFQAFAGAKAGIAQALQAQAIAHAIQAGAJAAAMQAAAPgLALQgMAKgTAAQgHAAgKgDg");
	this.shape_14.setTransform(522.8,58.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003D76").s().p("AgbBCIAAgEQAMgBAEgDQADgDAAgNIAAhiIgLAAQgRAAgGAFQgGAEgDAQIgFAAIABgiIBvAAIABAiIgEAAQgEgQgFgEQgGgFgRAAIgLAAIAABkQAAAMADACQAEADAMABIAAAEg");
	this.shape_15.setTransform(506.3,58.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003D76").s().p("AAvBDIhXhsIAABMQAAAQAFAGQADACALACIAAADIgvAAIAAgDQAMgCAEgEQADgEAAgQIAAhWIgCgEQgFgEgDgCQgDgBgGAAIAAgEIAiAAIBLBeIAAhBQAAgQgFgFQgDgDgLgBIAAgEIAvAAIAAAEQgLABgEAFQgEAEAAAPIAABog");
	this.shape_16.setTransform(493,58.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIBoAAIABAdIgFAAQgDgNgFgEQgFgEgRAAIgaAAQgEAAgBACQgBABAAAEIAAAsIAdAAQANAAADgDQAEgEACgMIAEAAIAAAsIgEAAQgDgLgDgEQgEgEgMAAIgdAAIAAAyQAAAGAEABQADABARAAQAVAAAJgEQAKgFAIgRIAFAAIgJAig");
	this.shape_17.setTransform(479.7,58.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003D76").s().p("AAdBCIAAgEQAMgBADgDQADgEAAgMIAAhYIgxBwIgDAAIgyhrIAABNQAAARAFAFQADADAKABIAAAEIgvAAIAAgEQANgBADgFQAEgEAAgQIAAhPQAAgLgDgDQgEgDgMgBIAAgEIAnAAIAsBiIAthiIAoAAIAAAEQgLABgDADQgEADAAALIAABXQAAALAEADQADADALABIAAAEg");
	this.shape_18.setTransform(464.6,58.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003D76").s().p("AgcBCIAAgEQAOgBADgDQADgDAAgNIAAgjIgagkQgOgUgFgGQgGgFgHgBIAAgEIA4AAIAAAEQgHAAgEABQgDABAAAFIAAADIADAFIAbArIAdgsIACgEIABgDQAAgFgFgBIgJgBIAAgEIArAAIAAAEQgGAAgEAEQgIAFgJAOIgeArIAAAnQAAAMAEADQAEACANABIAAAEg");
	this.shape_19.setTransform(448.7,58.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003D76").s().p("AASBDIAAgEIALgCQACgBAAgEIgBgFIgCgIIgIgUIgzAAIgJAYIgBAHQAAAFADACIAKACIAAAEIgnAAIAAgEQAHgBAEgFQAEgFAJgWIAqhgIACAAIAxBvQAGAMACACQAEADAGABIAAAEgAAQAPIgUg1IgYA1IAsAAg");
	this.shape_20.setTransform(434.3,58.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003D76").s().p("AgzBCIAAgEQALgBADgDQADgEAAgMIAAhVQAAgKgDgEQgDgDgLgBIAAgEIAzAAQAZAAAOAKQANAKAAAQQAAAVgPAIQgPAIgWAAIgGAAIgIAAIAAAkQAAALAEADQADADAKABIAAAEgAgNg4QgBABAAAEIAAAzIAHAAIADAAQAMAAAIgCQAOgHAAgTQAAgTgQgGQgIgEgLAAQgGAAgCABg");
	this.shape_21.setTransform(421.6,58.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIBoAAIABAdIgFAAQgDgNgFgEQgFgEgRAAIgaAAQgEAAgBACQgBABAAAEIAAAsIAdAAQANAAADgDQAEgEACgMIAEAAIAAAsIgEAAQgDgLgDgEQgEgEgMAAIgdAAIAAAyQAAAGAEABQADABARAAQAVAAAJgEQAKgFAIgRIAFAAIgJAig");
	this.shape_22.setTransform(571.2,40.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003D76").s().p("AACBDIgwhsQgGgOgEgDQgDgEgIgBIAAgDIA2AAIAAADIgLABQgEACAAAFIABAHIAHAPIAdBDIAchJIADgIIABgGQAAgGgFgCIgJgCIAAgDIApAAIAAADQgHACgDACQgEAEgFALIgsBvg");
	this.shape_23.setTransform(557.9,40.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003D76").s().p("AgcBCIAAgEQAMgBAEgDQADgCAAgMIAAhXQAAgLgDgDQgEgDgMgBIAAgEIA5AAIAAAEQgMABgEADQgDADAAALIAABXQAAAMADACQAEADAMABIAAAEg");
	this.shape_24.setTransform(547.4,40.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003D76").s().p("AgbBCIAAgEQAMgBAEgDQADgDAAgNIAAhiIgLAAQgRAAgGAFQgGAEgDAQIgFAAIABgiIBvAAIABAiIgEAAQgEgQgFgEQgGgFgRAAIgLAAIAABkQAAAMADACQAEADAMABIAAAEg");
	this.shape_25.setTransform(537.9,40.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003D76").s().p("AgqAwQgRgTAAgdQAAgbASgUQAUgVAdABQALAAALACIANAEQADAAACgCQADgCABgCIAEAAIACAtIgFAAQgEgOgGgIQgNgQgUAAQgTAAgOARQgNAQAAAcQAAAaAOARQAOAPATAAQAQAAANgHQAIgEAJgJIADAEQgGAIgKAGQgRALgUAAQgeABgTgVg");
	this.shape_26.setTransform(525.2,40.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIBoAAIABAdIgFAAQgDgNgFgEQgFgEgRAAIgaAAQgEAAgBACQgBABAAAEIAAAsIAdAAQANAAADgDQAEgEACgMIAEAAIAAAsIgEAAQgDgLgDgEQgEgEgMAAIgdAAIAAAyQAAAGAEABQADABARAAQAVAAAJgEQAKgFAIgRIAFAAIgJAig");
	this.shape_27.setTransform(512.5,40.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003D76").s().p("Ag0BCIAAgEQAMgBADgDQADgDAAgNIAAhVQAAgLgEgDQgDgDgLgBIAAgEIBpAAIAAAdIgFAAQgCgOgGgDQgGgEgQAAIgaAAQgEAAgBABQgBACAAAEIAAAsIAbAAQANAAADgDQAEgEACgMIAFAAIAAAsIgFAAQgCgLgEgEQgDgEgNAAIgbAAIAAAsQAAALADADQAEADAJABIAAAEg");
	this.shape_28.setTransform(500.9,40.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003D76").s().p("Ag0BCIAAgEQAMgBADgDQADgDAAgNIAAhVQAAgLgEgDQgDgDgLgBIAAgEIBpAAIAAAdIgFAAQgCgOgGgDQgGgEgQAAIgaAAQgEAAgBABQgBACAAAEIAAAsIAbAAQANAAADgDQAEgEACgMIAFAAIAAAsIgFAAQgCgLgEgEQgDgEgNAAIgbAAIAAAsQAAALADADQAEADAJABIAAAEg");
	this.shape_29.setTransform(489.8,40.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIBoAAIABAdIgFAAQgDgNgFgEQgFgEgRAAIgaAAQgEAAgBACQgBABAAAEIAAAsIAdAAQANAAADgDQAEgEACgMIAEAAIAAAsIgEAAQgDgLgDgEQgEgEgMAAIgdAAIAAAyQAAAGAEABQADABARAAQAVAAAJgEQAKgFAIgRIAFAAIgJAig");
	this.shape_30.setTransform(478.1,40.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003D76").s().p("AgbBCIAAgEQAMgBAEgDQADgDAAgNIAAhiIgLAAQgRAAgGAFQgGAEgDAQIgFAAIABgiIBvAAIABAiIgEAAQgEgQgFgEQgGgFgRAAIgLAAIAABkQAAAMADACQAEADAMABIAAAEg");
	this.shape_31.setTransform(460.8,40.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003D76").s().p("AgPBBIgMgEQgDAAgBADIgCAEIgEAAIgGgqIAEAAQAFANAHAIQAMAOAQAAQAJAAAHgGQAHgGAAgLQAAgKgHgHQgFgFgMgJIgRgIQgIgFgFgFQgIgKAAgLQAAgPAKgKQAKgKARAAQAEAAAKADIALADQAEAAABgBIACgFIAFAAIAEAqIgFAAQgFgTgLgIQgKgHgJAAQgIAAgGAFQgGAEAAAJQAAAIAEAFQAFAGAKAGIAQALQAQAIAHAIQAGAJAAAMQAAAPgLALQgMAKgTAAQgHAAgKgDg");
	this.shape_32.setTransform(449,40.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003D76").s().p("AgtAyQgTgUAAgeQAAgfAUgTQASgRAagBQAbABASARQAUATAAAfQAAAggVATQgSASgaAAQgbgBgSgSgAgdgtQgMAPAAAeQAAAfAMAPQAMAPARAAQASAAAMgPQAMgPAAgfQABgfgNgPQgNgPgRAAQgRABgMAPg");
	this.shape_33.setTransform(436.5,40.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003D76").s().p("AgqAwQgRgTAAgdQAAgbASgUQAUgVAdABQALAAALACIANAEQADAAACgCQADgCABgCIAEAAIACAtIgFAAQgEgOgGgIQgNgQgUAAQgTAAgOARQgNAQAAAcQAAAaAOARQAOAPATAAQAQAAANgHQAIgEAJgJIADAEQgGAIgKAGQgRALgUAAQgeABgTgVg");
	this.shape_34.setTransform(422.6,40.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIBoAAIABAdIgFAAQgDgNgFgEQgFgEgRAAIgaAAQgEAAgBACQgBABAAAEIAAAsIAdAAQANAAADgDQAEgEACgMIAEAAIAAAsIgEAAQgDgLgDgEQgEgEgMAAIgdAAIAAAyQAAAGAEABQADABARAAQAVAAAJgEQAKgFAIgRIAFAAIgJAig");
	this.shape_35.setTransform(599.5,22.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003D76").s().p("AAgBCIgwg+IgKABIAAAnQABALADADQADADAMABIAAAEIg4AAIAAgEQAMgBACgDQAEgEAAgMIAAhVQAAgKgEgEQgDgDgLgBIAAgEIA3AAQAQAAALAFQAXAIAAAWQgBAPgJAIQgKAHgRACIApAzQAEAEAEACQAEACAGABIAAAEgAgYg4QgCABAAAFIAAAxQAXgBAGgDQARgHgBgSQABgRgOgHQgHgDgMAAQgJAAgCABg");
	this.shape_36.setTransform(586.8,22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003D76").s().p("AgtAyQgTgUAAgeQAAgfAUgTQASgRAagBQAbABASARQAUATAAAfQAAAggUATQgTASgaAAQgbgBgSgSgAgdgtQgMAPAAAeQAAAfAMAPQAMAPARAAQASAAAMgPQAMgPAAgfQAAgfgMgPQgNgPgRAAQgRABgMAPg");
	this.shape_37.setTransform(572.9,22.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003D76").s().p("AAdBCIAAgEQAMgBADgDQADgEAAgMIAAhYIgxBwIgDAAIgyhrIAABNQAAARAFAFQADADAKABIAAAEIgvAAIAAgEQANgBADgFQAEgEAAgQIAAhPQAAgLgDgDQgEgDgMgBIAAgEIAnAAIAsBiIAthiIAoAAIAAAEQgLABgDADQgEADAAALIAABXQAAALAEADQADADALABIAAAEg");
	this.shape_38.setTransform(556.7,22.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003D76").s().p("AgJAUQAJgFACgGQAEgHgBgCIAAgBIgCAAIgFAAQgEAAgDgDQgDgCgBgGQAAgEADgDQADgEAGAAQAFAAAFAFQAEAFAAAIQABAIgIAJQgGAIgHAEg");
	this.shape_39.setTransform(541.5,29.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIBoAAIABAdIgFAAQgDgNgFgEQgFgEgRAAIgaAAQgEAAgBACQgBABAAAEIAAAsIAdAAQANAAADgDQAEgEACgMIAEAAIAAAsIgEAAQgDgLgDgEQgEgEgMAAIgdAAIAAAyQAAAGAEABQADABARAAQAVAAAJgEQAKgFAIgRIAFAAIgJAig");
	this.shape_40.setTransform(531.9,22.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003D76").s().p("Ag5BCIAAgEQALgBADgDQAEgDAAgLIAAhXQAAgLgEgDQgDgDgLgBIAAgEIA4AAIAAAEQgLABgDADQgEADAAAKIAABeQAAADABACQABABAAAAQAAAAABABQAAAAABAAQABAAABAAIAFABIAIAAQAaAAAJgEQAKgFAIgSIAFAAIgJAjg");
	this.shape_41.setTransform(519.7,22.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003D76").s().p("AgzBCIAAgEQALgBADgDQADgEAAgMIAAhVQAAgKgDgEQgDgDgLgBIAAgEIAzAAQAZAAAOAKQANAKAAAQQAAAVgPAIQgPAIgWAAIgGAAIgIAAIAAAkQAAALAEADQADADAKABIAAAEgAgNg4QgBABAAAEIAAAzIAHAAIADAAQAMAAAIgCQAOgHAAgTQAAgTgQgGQgIgEgLAAQgGAAgCABg");
	this.shape_42.setTransform(508.1,22.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003D76").s().p("AAdBCIAAgEQAMgBADgDQADgEAAgMIAAhYIgxBwIgDAAIgyhrIAABNQAAARAFAFQADADAKABIAAAEIgvAAIAAgEQANgBADgFQAEgEAAgQIAAhPQAAgLgDgDQgEgDgMgBIAAgEIAnAAIAsBiIAthiIAoAAIAAAEQgLABgDADQgEADAAALIAABXQAAALAEADQADADALABIAAAEg");
	this.shape_43.setTransform(493.5,22.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003D76").s().p("AgcBCIAAgEQAMgBAEgDQADgCAAgMIAAhXQAAgLgDgDQgEgDgMgBIAAgEIA5AAIAAAEQgMABgEADQgDADAAALIAABXQAAAMADACQAEADAMABIAAAEg");
	this.shape_44.setTransform(481.4,22.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003D76").s().p("AgPBBIgMgEQgDAAgBADIgCAEIgEAAIgGgqIAEAAQAFANAHAIQAMAOAQAAQAJAAAHgGQAHgGAAgLQAAgKgHgHQgFgFgMgJIgRgIQgIgFgFgFQgIgKAAgLQAAgPAKgKQAKgKARAAQAEAAAKADIALADQAEAAABgBIACgFIAFAAIAEAqIgFAAQgFgTgLgIQgKgHgJAAQgIAAgGAFQgGAEAAAJQAAAIAEAFQAFAGAKAGIAQALQAQAIAHAIQAGAJAAAMQAAAPgLALQgMAKgTAAQgHAAgKgDg");
	this.shape_45.setTransform(472.3,22.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003D76").s().p("AASBDIAAgEIALgCQACgBABgEIgBgFIgDgIIgIgUIgzAAIgJAYIgBAHQAAAFADACIAKACIAAAEIgnAAIAAgEQAHgBAEgFQAEgFAJgWIAqhgIACAAIAxBvQAFAMAEACQACADAHABIAAAEgAAQAPIgUg1IgYA1IAsAAg");
	this.shape_46.setTransform(454.8,22.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003D76").s().p("AgtAyQgTgUAAgeQAAgfAUgTQASgRAagBQAaABATARQAUATAAAfQAAAggVATQgSASgaAAQgbgBgSgSgAgdgtQgNAPAAAeQAAAfANAPQANAPAQAAQASAAAMgPQANgPgBgfQABgfgNgPQgNgPgRAAQgQABgNAPg");
	this.shape_47.setTransform(435.4,22.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003D76").s().p("AgbBCIAAgEQAMgBAEgDQADgDAAgNIAAhiIgLAAQgRAAgGAFQgGAEgDAQIgFAAIABgiIBvAAIABAiIgEAAQgEgQgFgEQgGgFgRAAIgLAAIAABkQAAAMADACQAEADAMABIAAAEg");
	this.shape_48.setTransform(422,22.6);

	this.intro = new cjs.Text("READY TO\nMAKE THE\nTRANSITION", "20px 'Times'", "#003D76");
	this.intro.name = "intro";
	this.intro.lineHeight = 18;
	this.intro.lineWidth = 244;
	this.intro.setTransform(68.1,11.2);

	this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.intro.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.intro},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},4).to({state:[]},71).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(298.2,-34.3,827.7,318.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;