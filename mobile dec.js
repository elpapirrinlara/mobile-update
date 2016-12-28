(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mobile dec_atlas_.png?1481855865890", id:"mobile dec_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"mobile dec_atlas_", frames: [[0,0,1984,1497],[0,1499,1920,1080],[0,2581,1280,1235],[1282,2581,300,424]]}
];


// symbols:



(lib.asteroids = function() {
	this.spriteSheet = ss["mobile dec_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backgroundstars = function() {
	this.spriteSheet = ss["mobile dec_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rocket = function() {
	this.spriteSheet = ss["mobile dec_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.UFO_Pin = function() {
	this.spriteSheet = ss["mobile dec_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZAWIAAgrIAzAAIAAArg");
	this.shape.setTransform(16.7,91.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgWBgIgUgGQgKgDgIgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgEgIgBgLQgDgJAAgLQAAgKADgKQABgKAEgJQADgJAGgHQAFgJAHgGQAHgGAIgFQAJgFAJgDIAVgGQALgBAKAAQAMAAALABIAUAGQAKADAIAFIAPALQAHAHAFAHQAGAIADAIQAEAKABAKQADAJAAALQAAAKgDAKQgBAKgEAJIgJARQgFAHgIAHQgHAHgHAEQgJAGgJADQgKAEgLACQgLABgLAAQgLAAgLgBgAgTg1QgKADgHAIQgHAIgDAKQgEALAAANQAAAMAEAMQADAKAHAJQAHAHAKAEQAJAEAKABQALgBAKgEQAJgEAHgHQAHgJADgKQAEgMAAgMQAAgNgEgLQgDgLgHgHQgHgIgJgDQgKgEgLgBQgKABgJAEg");
	this.shape_1.setTransform(-2.7,84.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhNBeQADgTAAgUIAAhyQgBgTgCgOIAnABIBJAAQAdAAAOgCIAAArQgQgCgbAAIg6AAIAAAlIAvAAQAZAAAQgBIAAAnQgQgBgZAAIgvAAIAAAhQAAAVACASg");
	this.shape_2.setTransform(-26.5,84.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgWBeQgLgCgJgDQgKgCgIgEIgNgKIgKgLIgHgOQgDgHgCgJQgBgIAAgKIAAhKQAAgXgCgLIA4AAQgCALAAAXIAABLQAAALADAHQADAIAFAGQAGAFAIACQAJADAKAAQALAAAJgDQAIgCAGgFQAGgGACgIQADgHAAgLIAAhLQAAgVgCgNIA4AAQgCANAAAVIAABLQAAAKgBAIIgFAQQgEAIgEAGQgFAGgGAFIgOAJQgIAEgJADQgJADgLABQgKABgLAAQgLAAgLgBg");
	this.shape_3.setTransform(-51.5,84.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAAqQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgCIAAAoQgRgCgWABIg3AAIAAAlIBCAAQAbAAAPgBIAAAqQgPgCgcAAg");
	this.shape_4.setTransform(-88.9,84.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_5.setTransform(-114,84.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAYAAARgCIAAArQgRgCgYAAIgdAAIAABwQAAAUACAOg");
	this.shape_6.setTransform(-139.4,84.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgcBeQADgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBwAAQAXAAARgCIAAArQgRgCgXAAIgeAAIAABwQAAAUACAOg");
	this.shape_7.setTransform(-176.1,84.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgbBdQACgMAAgVIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_8.setTransform(-194.6,84.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_9.setTransform(-214.4,84.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgWBeQgLgCgJgDQgKgCgIgEIgNgKIgKgLIgHgOQgDgHgCgJQgBgIAAgKIAAhKQAAgXgCgLIA4AAQgCALAAAXIAABLQAAALADAHQADAIAFAGQAGAFAIACQAJADAKAAQALAAAJgDQAIgCAGgFQAGgGACgIQADgHAAgLIAAhLQAAgVgCgNIA4AAQgCANAAAVIAABLQAAAKgBAIIgFAQQgEAIgEAGQgFAGgGAFIgOAJQgIAEgJADQgJADgLABQgKABgLAAQgLAAgLgBg");
	this.shape_10.setTransform(192.3,48.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgVBfIgVgEQgJgEgJgFQgIgFgHgGQgHgHgFgHQgGgJgDgJQgDgJgCgKQgCgKAAgKQAAgKACgKQACgKADgJQADgJAGgIQAFgHAHgHQAHgGAIgFQAIgFAKgDIAVgFQAKgCALAAQALAAAMACIAUAFQAJADAJAFIAPALQAHAHAFAHQAFAIAEAIQAEAJACAKQACALAAAKQAAAJgCALQgCAKgEAJIgJARQgGAIgGAGQgHAGgJAGQgIAFgKADQgJADgLACQgLACgLAAQgLAAgKgCgAgTg1QgKAEgHAHQgGAIgEALQgDALAAAMQAAAMADAMQAEALAGAHQAHAIAKAFQAJADAKAAQALAAAKgDQAJgFAHgIQAGgHAEgLQADgMABgMQgBgMgDgLQgEgLgGgIQgHgHgJgEQgKgFgLAAQgKAAgJAFg");
	this.shape_11.setTransform(165.4,48.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgbBdQACgQAAgSIAAgpIg8hTIgUgbIBBAAQAEALAJANIAbAtIAcgtQAKgQACgIIBCAAIgVAbIg7BTIAAApQAAASACAQg");
	this.shape_12.setTransform(139.1,48.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAoBdQgFgKgOgSIgvg/QgIgJgLgRQACAOAAASIAAAyQABAWACANIg4AAQACgLAAgZIAAh0QAAgTgCgOIA5AAQADAJAPATIAvBAIATAYQgBgPgBgPIAAg0QAAgVgBgNIA3AAQgCANAAAVIAAB1QAAATACAPg");
	this.shape_13.setTransform(100.2,48.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAArQgQgCgXAAIhCAAIAAAhIA3AAQAUAAATgCIAAAoQgRgBgWAAIg3AAIAAAlIBCAAQAbAAAPgBIAAApQgQgBgbAAg");
	this.shape_14.setTransform(75.7,48.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AApBdQACgMAAgWIAAgrIhVAAIAAArQAAAVACANIg4AAQACgMAAgWIAAh2QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgVgCgMIA4AAQgCANAAAUIAAB2QAAATACAPg");
	this.shape_15.setTransform(50.5,48.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAgBdQgBgKgEgOIgUhCIgHggQgBARgFAPIgTBCQgFAPgBAJIg0AAIgGgZIgqiEIgKgcIA7AAQABAJADAPIARBEIAFAeIAIgeIAUhEIAGgYIAsAAIAGAXIAVBFQAEAKAEAUIACgNIADgSIARhDQADgNABgLIA7AAIgKAcIgqCEQgFASgBAHg");
	this.shape_16.setTransform(20.7,48.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_17.setTransform(-20.3,48.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_18.setTransform(-44.2,48.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAoBdQgGgKgOgSIgtg/QgJgJgKgRQACAOAAASIAAAyQAAAWABANIg3AAQACgLAAgZIAAh0QAAgTgCgOIA4AAQAEAJAPATIAwBAIASAYQgBgPAAgPIAAg0QgBgVgCgNIA4AAQgCANAAAVIAAB1QAAATACAPg");
	this.shape_19.setTransform(-69.6,48.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgbBdQACgLAAgXIAAh2QAAgUgCgNIA3AAQgCANAAAUIAAB2QAAAWACAMg");
	this.shape_20.setTransform(-89.4,48.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AhWBeQACgOAAgUIAAh4QAAgSgCgOIAmABIA4AAQAMAAAVADIAOAFQAHADAEAEIAJAIQAFAGACAFIAEAMIABAOIgCAOQgBAHgCAFQgDAFgEAFQgEAFgFAEQgFAEgGADIgOAFQgWAEgMABIgnAAIAAAdQAAASACAQgAgggGIAkAAQAIAAAFgBQAFgCAEgDQADgDACgEQACgFABgFQgBgHgCgEQgBgEgEgDQgDgEgGgBQgFgBgIgBIgkAAg");
	this.shape_21.setTransform(-107.3,48.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAArQgQgCgXAAIhCAAIAAAhIA3AAQAUAAATgCIAAAoQgRgBgWAAIg3AAIAAAlIBCAAQAbAAAPgBIAAApQgQgBgbAAg");
	this.shape_22.setTransform(-143.5,48.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_23.setTransform(-167.2,48.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgWBfIgUgEQgJgEgJgFQgIgFgHgGQgHgHgFgHQgGgJgDgJQgEgJgCgKQgBgKAAgKQAAgKABgKQACgKAEgJQADgJAGgIQAFgHAHgHQAHgGAJgFQAIgFAJgDIAVgFQAKgCALAAQALAAALACIAVAFQAKADAIAFIAPALQAHAHAFAHQAFAIAEAIQADAJACAKQACALAAAKQAAAJgCALQgCAKgDAJIgJARQgGAIgHAGQgHAGgIAGQgIAFgKADQgJADgLACQgLACgLAAQgKAAgMgCgAgUg1QgJAEgHAHQgHAIgDALQgDALAAAMQAAAMADAMQADALAHAHQAHAIAJAFQAKADAKAAQALAAAKgDQAJgFAHgIQAHgHADgLQAEgMgBgMQABgMgEgLQgDgLgHgIQgHgHgJgEQgKgFgLAAQgKAAgKAFg");
	this.shape_24.setTransform(-192.5,48.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAkBcIhMAAIgnABQACgLAAgWIAAh1QAAgVgCgPIA5AAQgCANgBAXIAABtIA9AAQAeAAAOgBIAAArQgNgCgfAAg");
	this.shape_25.setTransform(-216.1,48.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_26.setTransform(211.5,11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAArQgRgCgWAAIhBAAIAAAhIA2AAQAVAAASgCIAAAoQgRgBgWAAIg2AAIAAAlIBAAAQAbAAAQgBIAAApQgPgBgcAAg");
	this.shape_27.setTransform(188.5,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AhWBeQACgOAAgUIAAh4QAAgSgCgOIAnABIA3AAQAMAAAWADIANAFQAGADAGAEIAJAJQAEAFACAFIAEAMIABAOIgBAOQgCAHgDAGQgCAEgEAFQgEAFgFAEQgFAEgHADIgNAFQgVAFgNAAIgnAAIAAAdQAAASACAQgAgggGIAlAAQAGAAAGgBQAFgCAEgDQAEgDACgEQACgFAAgFQAAgHgCgEQgCgEgEgDQgEgDgFgCQgGgBgGgBIglAAg");
	this.shape_28.setTransform(165.3,11.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAyBdQgDgNgDgMIgHgTIhJAAIgHATQgEANgCAMIg9AAIANgcIA4iFQAGgQACgIIBCAAIAJAYIA4CFIANAcgAAYAMIgYhBIgXBBIAvAAg");
	this.shape_29.setTransform(139.6,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AApBdQACgMAAgWIAAgrIhVAAIAAArQAAAVACANIg4AAQACgMAAgWIAAh2QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgVgCgMIA4AAQgCAMAAAVIAAB2QAAAUACAOg");
	this.shape_30.setTransform(112.9,12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_31.setTransform(87.6,11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgbBdQACgRAAgRIAAgpIg8hTIgUgbIBBAAQAEALAJAMIAbAuIAcgtQAKgQACgIIBCAAIgVAbIg7BTIAAApQAAATACAPg");
	this.shape_32.setTransform(50.2,12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAjBeQgCgMgLgXQgGgQgEgFQgDgFgEgEQgFgDgDgCQgFgCgGABIgbAAIAAAlQAAATADAPIg5AAQACgPABgTIAAh4QgBgSgCgOIAoABIBBAAQAQAAAMADQAMADAJAHQAIAGAFAKQAFAJAAANQgBALgEAKQgDAJgIAHQgEADgGABIgPAFQALADAFAFQAGAEAGANIATAmIANAZgAgpgOIApAAQAKAAAGgFQAHgGAAgKQgBgJgFgFQgHgFgKAAIgpAAg");
	this.shape_33.setTransform(25.2,11.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_34.setTransform(0,11.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAArQgRgCgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgBgWAAIg2AAIAAAlIBAAAQAbAAAQgBIAAApQgQgBgbAAg");
	this.shape_35.setTransform(-23.2,12);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("ABCBdQABgOAAgVIAAgxIACgbIABgPIgMAhIgZA8QgJAXgCAKIgsAAQgBgKgJgYIgZg7IgIgWIgEgLQACAXAAAUIAAAwQAAAWACANIgzAAQACgOAAgVIAAhzQAAgUgCgPIBFAAQADAOAGASIAmBfIAnhfQAHgUACgMIBFAAQgCAOAAAVIAABzQAAAXACAMg");
	this.shape_36.setTransform(-50.3,12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgWBfIgUgEQgJgEgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgEgIgCgLQgBgKAAgKQAAgKABgKQACgKAEgJQADgJAGgIQAFgHAHgHQAHgGAJgFQAIgFAJgDIAVgGQAKgBALAAQALAAALABIAVAGQAKADAIAFIAPALQAHAGAFAIQAFAIAEAIQADAKACAJQACALAAAKQAAAJgCALQgCAKgDAJIgJARQgGAIgHAGQgHAHgIAFQgIAFgKADQgJAEgLABQgLACgLAAQgKAAgMgCgAgUg1QgJAEgHAHQgHAIgDAKQgDAMAAAMQAAAMADAMQADALAHAIQAHAHAJAFQAKADAKAAQALAAAKgDQAJgFAHgHQAHgIADgLQAEgMgBgMQABgMgEgMQgDgLgHgHQgHgHgJgEQgKgFgLAAQgKAAgKAFg");
	this.shape_37.setTransform(-79.1,12);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAArQgRgCgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgBgWAAIg2AAIAAAlIBAAAQAbAAAQgBIAAApQgQgBgbAAg");
	this.shape_38.setTransform(-103.8,12);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgMBgIgVgFQgKgCgIgFQgIgFgHgGQgHgGgGgJQgGgHgEgKQgEgKgCgKQgCgLAAgKQAAgKACgLQACgJAEgKQAEgIAFgIQAFgIAHgGQAHgGAJgFQAIgFAKgDIAVgGQALgBAKAAQAMAAALABQALACAJAEQAJADAIAFQAIAFAHAHIAIAKQAEAGADAIIg1ALQgCgHgDgDIgHgGQgFgEgGgCQgHgCgIAAQgLAAgJAFQgKADgGAIQgHAHgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJADALAAQAKAAAJgCQAJgCAKgEIAAgZIgNAAIgaABIAAgmQAMABAWAAIAVAAQAUAAAOgBQgBAMAAARIAAAZQAAAWABALQgVALgMAEQgMAEgOABQgOACgPAAIgVgBg");
	this.shape_39.setTransform(-128.6,12);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAArQgRgCgWAAIhBAAIAAAhIA2AAQAVAAASgCIAAAoQgRgBgWAAIg2AAIAAAlIBAAAQAbAAAQgBIAAApQgPgBgcAAg");
	this.shape_40.setTransform(-165.2,12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AApBdQACgMAAgWIAAgrIhVAAIAAArQAAAVACANIg4AAQACgMAAgWIAAh2QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgVgCgMIA4AAQgCAMAAAVIAAB2QAAAUACAOg");
	this.shape_41.setTransform(-190.4,12);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_42.setTransform(-215.7,11.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgIgEgKQgEgKgCgKQgCgLAAgKQAAgLACgJQACgKAEgKQAEgIAFgIQAFgHAHgHQAHgGAJgFQAIgFAKgDIAVgGQALgBAKAAQAMAAALABQALACAJAEQAJADAIAFQAIAFAHAGIAIALQAEAGADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIgBQgLABgJAEQgKADgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJADALABQAKgBAJgCQAJgCAKgEIAAgZIgNAAIgaABIAAgmQAMACAWAAIAVAAQAUAAAOgCQgBAMAAARIAAAZQAAAWABALQgVALgMADQgMAEgOACQgOACgPAAIgVgBg");
	this.shape_43.setTransform(230.3,-24.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQABAOABASIAAAyQgBAWACANIg3AAQACgMAAgYIAAh0QAAgTgCgOIA4AAQAFAKAOASIAwBAIASAZQgCgQABgQIAAgzQAAgVgCgNIA3AAQgCANAAAVIAAB2QAAASACAPg");
	this.shape_44.setTransform(204.2,-24.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgbBdQACgMAAgVIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_45.setTransform(184.4,-24.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_46.setTransform(166,-24.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgPBgQgLgCgJgDQgKgDgJgFQgIgEgHgHQgHgGgGgIQgFgIgEgJQgEgKgCgKQgCgLAAgKQAAgKACgLQACgLAEgJQAEgJAGgIQAGgIAHgGQAHgHAIgDQAIgFAKgDQAJgDALgCIAUgBQAMAAAMACQALACAKADQAJAEAIAFQAIAGAHAHQAGAHAEAHQADAHADAKIg2AJQgCgHgDgHQgEgFgFgEQgFgDgHgCQgGgCgJgBQgKABgJAEQgJADgHAIQgGAHgEALQgDALAAANQAAANADALQAEAKAHAJQAGAHAKAEQAJAEAKAAQALAAAJgEQAJgDAGgHQAFgHACgMIA2AHQgDAOgFAJQgFAKgIAHQgGAHgIAEQgIAFgJADQgJADgLACQgKABgMAAQgKAAgLgBg");
	this.shape_47.setTransform(141,-24.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAAqQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgCIAAAoQgRgCgWABIg3AAIAAAlIBCAAQAbAAAPgBIAAAqQgPgCgcAAg");
	this.shape_48.setTransform(116.8,-24.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AAkBcIhNAAIgmABQACgLAAgWIAAh1QAAgVgCgPIA4AAQgCANABAXIAABtIA8AAQAdAAAPgBIAAArQgOgCgeAAg");
	this.shape_49.setTransform(94.9,-24.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AAlBcIhOAAIgmABQACgLAAgWIAAh1QAAgVgCgPIA5AAQgCANAAAXIAABtIA9AAQAcAAAPgBIAAArQgOgCgdAAg");
	this.shape_50.setTransform(73.1,-24.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgGQgHgHgFgIQgFgHgEgKQgEgIgCgLQgCgJAAgLQAAgKACgKQACgKAEgJQAEgJAFgHQAFgJAHgGQAHgGAIgFQAJgFAJgDIAVgGQALgBAKAAQAMAAAKABIAVAGQAJADAJAFIAPALQAHAHAFAHQAGAIADAIQADAKACAKQACAJAAALQAAAKgCAKQgCAKgDAJIgJARQgFAHgIAHQgGAHgIAEQgJAGgJADQgKAEgLACQgLABgLAAQgKAAgMgBgAgUg1QgJADgHAIQgGAIgEAKQgDALgBANQABAMADAMQAEAKAGAJQAHAHAJAEQAKAEAKABQAMgBAJgEQAJgEAHgHQAGgJAEgKQADgMAAgMQAAgNgDgLQgEgLgGgHQgHgIgJgDQgJgEgMgBQgKABgKAEg");
	this.shape_51.setTransform(48,-24.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgPBgQgLgCgJgDQgKgDgJgFQgIgEgHgHQgHgGgGgIQgFgIgEgJQgEgKgCgKQgCgLAAgKQAAgKACgLQACgLAEgJQAEgJAGgIQAGgIAHgGQAHgHAIgDQAIgFAKgDQAJgDALgCIAUgBQAMAAAMACQALACAKADQAJAEAIAFQAIAGAHAHQAGAHAEAHQADAHADAKIg2AJQgCgHgDgHQgEgFgFgEQgFgDgHgCQgGgCgJgBQgKABgJAEQgJADgHAIQgGAHgEALQgDALAAANQAAANADALQAEAKAHAJQAGAHAKAEQAJAEAKAAQALAAAJgEQAJgDAGgHQAFgHACgMIA2AHQgDAOgFAJQgFAKgIAHQgGAHgIAEQgIAFgJADQgJADgLACQgKABgMAAQgKAAgLgBg");
	this.shape_52.setTransform(21.6,-24.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_53.setTransform(-16.1,-24.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAYAAARgCIAAArQgRgCgYAAIgdAAIAABwQAAAUACAOg");
	this.shape_54.setTransform(-39.9,-24.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQABAOAAASIAAAyQAAAWACANIg3AAQACgMAAgYIAAh0QAAgTgCgOIA4AAQAFAKAOASIAwBAIASAZQgCgQABgQIAAgzQAAgVgCgNIA3AAQgCANAAAVIAAB2QAAASACAPg");
	this.shape_55.setTransform(-65.3,-24.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgbBdQACgMAAgVIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_56.setTransform(-85.1,-24.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgGQgHgHgFgIQgFgHgEgKQgEgIgCgLQgCgJAAgLQAAgKACgKQACgKAEgJQAEgJAFgHQAFgJAHgGQAHgGAIgFQAJgFAJgDIAVgGQALgBAKAAQAMAAAKABIAVAGQAJADAJAFIAPALQAHAHAFAHQAGAIADAIQADAKACAKQACAJAAALQAAAKgCAKQgCAKgDAJIgJARQgFAHgIAHQgGAHgIAEQgJAGgJADQgKAEgLACQgLABgLAAQgKAAgMgBgAgUg1QgJADgHAIQgGAIgEAKQgDALgBANQABAMADAMQAEAKAGAJQAHAHAJAEQAKAEAKABQAMgBAJgEQAJgEAHgHQAGgJAEgKQADgMAAgMQAAgNgDgLQgEgLgGgHQgHgIgJgDQgJgEgMgBQgKABgKAEg");
	this.shape_57.setTransform(-105,-24.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AhWBeQACgOAAgUIAAh3QAAgTgCgPIAnABIA2AAQANAAAWAFIANAEQAGADAGAEIAJAJQAEAEACAGIAEAMIABAOIgBAOQgCAHgDAGQgCAEgEAEQgEAGgFAEQgFAEgHADIgNAFQgVAFgNAAIgnAAIAAAcQAAATACAQgAgggFIAlAAQAGAAAGgCQAFgBAEgEQAEgDACgFQACgEAAgGQAAgFgCgFQgCgFgEgDQgEgCgFgCQgGgCgGAAIglAAg");
	this.shape_58.setTransform(-129.9,-24.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_59.setTransform(-166.9,-24.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgQgCgbAAg");
	this.shape_60.setTransform(-190.2,-24.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgIgEgKQgEgKgCgKQgCgLAAgKQAAgLACgJQACgKAEgKQAEgIAFgIQAFgHAHgHQAHgGAJgFQAIgFAKgDIAVgGQALgBAKAAQAMAAALABQALACAJAEQAJADAIAFQAIAFAHAGIAIALQAEAGADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIgBQgLABgJAEQgKADgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJADALABQAKgBAJgCQAJgCAKgEIAAgZIgNAAIgaABIAAgmQAMACAWAAIAVAAQAUAAAOgCQgBAMAAARIAAAZQAAAWABALQgVALgMADQgMAEgOACQgOACgPAAIgVgBg");
	this.shape_61.setTransform(-215,-24.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00FF00").s().p("AggCIIAAiEIhgiLIBLAAIA1BSIA2hSIBMAAIhhCLIAACEgAAKgpIASAbIBLhsIgnAAg");
	this.shape_62.setTransform(83.9,-94.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00FF00").s().p("ABDCMIgOgbIhpAAIgOAbIhIAAICFkXIAKAAICFEXgAB0CAIgfg/IglAAIAeA/IAmAAgAhzCAIAmAAIAdg/IglAAgAAeBBIgehDIAAAAIggBDIA+AAg");
	this.shape_63.setTransform(51.5,-94.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00FF00").s().p("AhbCIIAAkPIBCAAIAADVIB1AAIAAA6gAhLB7IAigfIAAjWIgiAAg");
	this.shape_64.setTransform(22.5,-94.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FF00").s().p("AhkCIIAAkPIBwAAQAUAAARAHQARAHALAMQALANAHAPQAGAQAAASQAAASgHARQgHANgMAMQgMAMgQAGQgQAHgTAAIguAAIAABigAhUB7IAhAAIAAj1IghAAgAgigSIAnAAQANABAIgLQAGgJAAgMQAAgMgGgJQgIgIgNAAIgnAAg");
	this.shape_65.setTransform(-5.1,-94.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00FF00").s().p("AgdCOQgPgDgOgFQgNgGgMgHQgMgJgKgJQgJgKgIgMQgIgLgFgNQgFgNgDgPQgCgPAAgOQAAgNACgPQADgPAFgNQAFgNAIgMQAIgLAJgKQAKgKAMgHQAMgJANgFQAOgGAPgDQAPgCAOAAQAPAAAQACQAOADAOAGQANAFAMAJQALAHAKAKQAKAKAIALQAHAMAFANQAGANACAPQADAPABANQgBAOgDAPQgCAPgGANQgFANgHALQgIAMgKAKQgKAJgLAJQgMAHgNAGQgOAFgOADQgQADgPAAQgOAAgPgDgAhuBFQALAUARANQARAOAUAIQAWAHAXAAQAYAAAVgHQAVgIASgOQAQgOALgTQAMgSAEgXIgjAAQgEAPgJANQgHAMgMAJQgNAJgOAFQgQAFgRAAQgQAAgPgFQgQgFgLgJQgMgJgJgMQgHgNgFgPIgjAAQAEAXAMASgAgfhKQgPAFgKAMQgKALgGAPQgGAPAAAQQAAARAGAPQAGAPAKALQAKALAPAHQAPAGAQAAQASAAAOgGQAOgHAMgLQAJgLAGgPQAFgPAAgRQAAgQgFgPQgGgPgJgLQgMgMgOgFQgOgHgSAAQgQAAgPAHg");
	this.shape_66.setTransform(-54.2,-94.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00FF00").s().p("AghCIIAAjUIg9AAIAAg7IC9AAIAAA7Ig+AAIAADUgAgRB7IAhAAIAAjHIghAAg");
	this.shape_67.setTransform(-85.8,-94.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00FF00").s().p("ABFCMIhDibIhACbIgIAAIh5kXIBGAAIA3CAIAihVIgSgrIBEAAIA2CAIAyiAIBGAAIhyEXgABSAGIARApIBHiuIgjAAgAg4AHIARAmIAhhRIgRgmg");
	this.shape_68.setTransform(-135.5,-93.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00FF00").s().p("AgdCOQgPgDgOgFQgNgGgMgHQgMgJgKgJQgJgKgIgMQgIgLgFgNQgFgNgDgPQgCgPAAgOQAAgNACgPQADgPAFgNQAFgNAIgMQAIgLAJgKQAKgKAMgHQAMgJANgFQAOgGAPgDQAPgCAOAAQAPAAAQACQAPADANAGQANAFALAJQAMAHALAKQAJAKAIALQAHAMAFANQAGANACAPQADAPAAANQAAAOgDAPQgCAPgGANQgFANgHALQgIAMgJAKQgLAJgMAJQgLAHgNAGQgNAFgPADQgQADgPAAQgOAAgPgDgAhuBFQALAUARANQAQAOAVAIQAXAHAWAAQAYAAAVgHQAVgIARgOQARgOALgTQALgSAFgXIgjAAQgEAPgJANQgIAMgLAJQgMAJgPAFQgQAFgRAAQgQAAgQgFQgPgFgMgJQgLgJgJgMQgHgNgFgPIgjAAQAFAXALASgAgghKQgOAFgKAMQgLALgFAPQgGAPAAAQQAAARAGAPQAFAPALALQAKALAOAHQAQAGAQAAQARAAAPgGQAOgHAMgLQAJgLAGgPQAFgPABgRQgBgQgFgPQgGgPgJgLQgMgMgOgFQgPgHgRAAQgQAAgQAHg");
	this.shape_69.setTransform(-176.3,-94.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00FF00").s().p("AA1CIIAAhsIhpAAIAABsIhCAAIAAkPIBCAAIAABrIBpAAIAAhrIBCAAIAAEPgABGB7IAhAAIAAhfIghAAgAhmB7IAhAAIAAhfIghAAg");
	this.shape_70.setTransform(-211.6,-94.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.8,-120.3,483.6,230.1);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UFO_Pin();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-4.4,0.005,0.021);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-4.4,1.5,8.8);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UFO_Pin();
	this.instance.parent = this;
	this.instance.setTransform(-25.9,-111.7,0.173,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-111.7,51.9,223.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.UFO_Pin();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-49.7,0.633,0.528,0,-30,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-144.2,276.5,288.4);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundstars();
	this.instance.parent = this;
	this.instance.setTransform(-480,-320,0.5,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-320,960,640);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundstars();
	this.instance.parent = this;
	this.instance.setTransform(-480,-320,0.5,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-320,960,640);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ABqE7Ih5jBQgYglgSgLQgZgPggAAIgUAAIAAEAIjpAAIAAp1IGAAAQBrAAA5APQA4AQAjAqQAjAqAAA8QAAA1gbAmQgaAmgvAWQgdAPg0AKQApALATAMIAlAhIAhAnIBwC3gAiGg6IBhAAIA7gJQAXgEAPgQQAPgQAAgUQAAgfgXgQQgXgRg+AAIhlAAg");
	this.shape.setTransform(740.1,69.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ak6E7IAAp1IJqAAIAACHImCAAIAABkIFmAAIAAB/IlmAAIAAB8IGNAAIAACPg");
	this.shape_1.setTransform(637,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("Ah5E7Ikbp1IDyAAICmHEICmnEIDrAAIkWJ1g");
	this.shape_2.setTransform(541.2,69.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AjIEkQhTgig0hKQgzhJAAhvQAAiZBmhWQBmhWC2AAQC5AABlBUQBlBVAACZQAABsgsBIQgsBGhTAnQhUAoh9AAQh8AAhTgigAhxiHQgqApAABeQAABgAqAqQAqAqBHAAQBKAAApgpQApgpAAhoQAAhZgqgpQgrgqhHAAQhGABgrAqg");
	this.shape_3.setTransform(446.4,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("Ak6E7IAAp1IJqAAIAACHImCAAIAABkIFmAAIAAB/IlmAAIAAB8IGNAAIAACPg");
	this.shape_4.setTransform(344.5,69.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("ADnE7IAAnfIiSHfIipAAIiSnfIAAHfIi+AAIAAp1IExAAIBzF+IB0l+IExAAIAAJ1g");
	this.shape_5.setTransform(252.1,69.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AClE7IgmhoIkFAAIgkBoIjsAAIEZp1ID6AAIEaJ1gABPBKIhQjhIhSDhICiAAg");
	this.shape_6.setTransform(143.7,69.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AjLEfQhUgmguhMQguhMAAhhQAAhmAyhNQAzhMBhgoQBMgeB/AAQB8AAA9ATQA+ATAoAoQApAnAUA+IjfAhQgOgjgggUQghgSgzgBQhKABguAsQgtAsAABhQABBlAtArQAtAsBRABQAmgBAkgJQAigJAugYIAAg6IiaAAIAAiCIFkAAIAAELQhmA7hPAVQhPAWhsAAQiDAAhUgng");
	this.shape_7.setTransform(48.2,69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,787.6,133.2);


(lib.scoretext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("score ", "bold 70px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 72;
	this.text.lineWidth = 206;
	this.text.parent = this;
	this.text.setTransform(-90.9,-35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-37,210.2,74);


(lib.polistarpoints = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1,3,true).p("AE3AaIkPEgIleijIA3mCIF/hOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA0000").s().p("Ak2CXIA3mCIF/hOIC3FTIkPEgg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AE3AaIkPEgIleijIA3mCIF/hOg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-32.4,64.4,65);


(lib.playbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{playbutton:3});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ag6FaIAAkOIhlmlIB+AAIAlEGIAskGIBwAAIhlGmIAAENg");
	this.shape.setTransform(59.5,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAiFZIgKhgIhFAAIgJBgIhjAAIBZqxIB+AAIBcKxgAANCYIgUkRIgcERIAwAAg");
	this.shape_1.setTransform(14.3,-6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("Ah4FaIAAqzIB3AAIAAJRIB6AAIAABig");
	this.shape_2.setTransform(-27.6,-6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AiSFZIAAqxICOAAQAmAAAbALQAdALATAZQATAbAKAqQAJAqAAA8QAABAgLAsQgLApgUAbQgUAZgcAMQgZALgggBIgaAAIAAD4gAgaACIANAAQAUAAALgYQAIgUAEhVQAAhFgMgcQgKgZgWAAIgMAAg");
	this.shape_3.setTransform(-70.3,-6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("Ag6FaIAAkOIhlmlIB+AAIAlEGIAskGIBwAAIhlGmIAAENg");
	this.shape_4.setTransform(59.5,-6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AAiFZIgKhgIhFAAIgJBgIhjAAIBZqxIB+AAIBcKxgAANCYIgUkRIgcERIAwAAg");
	this.shape_5.setTransform(14.3,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("Ah4FaIAAqzIB3AAIAAJRIB6AAIAABig");
	this.shape_6.setTransform(-27.6,-6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AiSFZIAAqxICOAAQAmAAAbALQAdALATAZQATAbAKAqQAJAqAAA8QAABAgLAsQgLApgUAbQgUAZgcAMQgZALgggBIgaAAIAAD4gAgaACIANAAQAUAAALgYQAIgUAEhVQAAhFgMgcQgKgZgWAAIgMAAg");
	this.shape_7.setTransform(-70.3,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag6FaIAAkOIhlmlIB+AAIAlEGIAskGIBwAAIhlGmIAAENg");
	this.shape_8.setTransform(59.5,-6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAiFZIgKhgIhFAAIgJBgIhjAAIBZqxIB+AAIBcKxgAANCYIgUkRIgcERIAwAAg");
	this.shape_9.setTransform(14.3,-6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ah4FaIAAqzIB3AAIAAJRIB6AAIAABig");
	this.shape_10.setTransform(-27.6,-6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AiSFZIAAqxICOAAQAmAAAbALQAdALATAZQATAbAKAqQAJAqAAA8QAABAgLAsQgLApgUAbQgUAZgcAMQgZALgggBIgaAAIAAD4gAgaACIANAAQAUAAALgYQAIgUAEhVQAAhFgMgcQgKgZgWAAIgMAAg");
	this.shape_11.setTransform(-70.3,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-47,180.3,94);


(lib.Playagainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAVDPIAAgQIAIAAQAcAAAMgIQALgJAEgRIACgpIAAijQAAg3gOgZQgPgZgiAAQgyAAg0A6IAADSQAAApAFAJQAGANALAGQALAGAhAAIAAAQIjHAAIAAgQIAIAAQAfAAALgPQALgQAAgsIAAiUQAAhIgDgQQgEgQgGgFQgIgGgLAAQgMAAgRAGIgHgPIB5gyIATAAIAABWQBHhWA+AAQAhAAAYARQAYAQAOAmQAJAaAAA3IAACqQAAAmAGAOQAFALALAGQALAGAdAAIAAAQg");
	this.shape.setTransform(271.1,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhdE4IAAgQQAdAAAKgGQAKgFAHgNQAFgNAAgmIAAibQAAhBgEgSQgDgOgGgFQgHgGgLAAQgNAAgRAHIgGgQIB3gyIATAAIAAFCQAAAmAGANQAFAMALAGQALAGAcAAIAAAQgAgbjrQgNgNAAgTQAAgSANgMQANgOARAAQASAAANAOQANAMAAASQAAATgNANQgNANgSAAQgRAAgNgNg");
	this.shape_1.setTransform(231.2,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AiaC3QgbgeAAguQAAgdANgWQASgdAtgbQAsgYBmgmIAAgQQAAg8gTgXQgTgWgjAAQgbAAgRAPQgQAPAAATIAAAZQAAAVgKALQgKALgRAAQgQAAgKgLQgLgMAAgUQAAglAnghQAngfBFAAQA0AAAiASQAaAOANAdQAHASAAA7IAACHIADBGQACANAFAEIAMAFIAMgDIAjggIAAAZQgxBBgtABQgVgBgNgPQgNgPAAgjQg8AwgQAHQgYALgaAAQgqAAgbgcgAgrAAQgiATgPAVQgPAWAAAYQAAAgATAVQASAVAZAAQAhAAA1gsIAAiYg");
	this.shape_2.setTransform(195.1,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AipEKQghgWAAgYIAFgVQAHgQAYgdIAsgwQgWgNgKgLQgJgLAAgOQAAgPAMgVQANgUAtgkQglgSgUggQgTghAAgnQAAg8AtgrQAtgrBGAAQA4AAAqAcIBVAAIAWACQACAAACADIADAOIgCAQQgCADgDABIgWABIg0AAQAYAgAAAxQAAA4grAoQgrAohGAAQgeAAgfgJQgUARgGALQgHAMAAAJQAAAHAHAHQAHAHAVADIA+AEIBzAGQApAFAZAZQAYAZAAAkQAAAxgvAsQhEBAhtAAQhVAAg6gmgAiBCXQgKAUAAAQQAAAVAZAQQAsAbBRAAQBPAAAmgbQAmgdAAgfQAAgXgXgKQgXgJhDgCQhhgDg1gHQgVAWgLATgAhHkAQgWAaAAA2QAABFAeAnQAXAdAjAAQAfAAAWgZQAVgaAAg1QAAhGgegoQgWgdghAAQghAAgWAag");
	this.shape_3.setTransform(146.6,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("ABREwIAAgQQAkgCAMgKQAMgKAAgOQAAgUgRgqIgkhVIjlAAIgpBeQgOAiAAASQAAANANALQAMAKArADIAAAQIi7AAIAAgQQAmgHALgKQAWgVAbhBIDSnoIANAAIDPHtQAZA8AVASQAVASAkACIAAAQgABLBIIhijvIhpDvIDLAAg");
	this.shape_4.setTransform(86,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("Ai1EbQgQgPgBgTQAAgTANgLQAMgLAUAAQAPAAAZAKIAWAGQAOAAAPgNQAQgOAPgnIAdhGIiRkuIgUgiIgSgUQgLgHgWgGIAAgQIC7AAIAAAQIgJAAQgUAAgJAJQgKAJAAAMQAAARAOAfIBgDLIBajfQAHgSABgRIgDgMIgMgHIgagEIAAgQICDAAIAAAQQgQACgJAGIgTATIgPAiIiiGQQgXA6gnAeQgnAegjAAQgaAAgRgPg");
	this.shape_5.setTransform(26.2,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AiaC3QgbgeAAguQAAgdANgWQASgdAtgbQAsgYBmgmIAAgQQAAg8gTgXQgTgWgjAAQgbAAgRAPQgQAPAAATIAAAZQAAAVgKALQgKALgRAAQgQAAgKgLQgLgMAAgUQAAglAnghQAngfBFAAQA0AAAiASQAaAOANAdQAHASAAA7IAACHIADBGQACANAFAEIAMAFIAMgDIAjggIAAAZQgxBBgtABQgVgBgNgPQgNgPAAgjQg8AwgQAHQgYALgaAAQgqAAgbgcgAgrAAQgiATgPAVQgPAWAAAYQAAAgATAVQASAVAZAAQAhAAA1gsIAAiYg");
	this.shape_6.setTransform(-19.8,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AhdE4IAAgQQAbAAAKgGQAKgFAGgNQAGgNAAgmIAAlrIgDhUQgDgQgHgGQgHgFgKgBQgMABgRAGIgIgOIB2gyIAUAAIAAIUQAAAmAGAMQAFAMALAHQAMAGAfAAIAAAQg");
	this.shape_7.setTransform(-58.3,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AjiEpIAAgQIAXAAQAlAAARgZQAJgNAAgzIAAl/QAAg4gMgOQgRgTgiAAIgXAAIAAgQIDbAAQBOgBAuASQAuAQAgAnQAfAnABA1QAABKgxAtQgwAshYAAIgtgEIg1gIIAACtQAAA5ANANQAQATAgAAIAXAAIAAAQgAg4j8IAAD3IAqAFIAcACQAuAAAhghQAhgkAAg4QAAgmgPgiQgQghgdgQQgegRgkAAQgVAAgjAJg");
	this.shape_8.setTransform(-102.1,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AAVDPIAAgQIAIAAQAcAAAMgIQALgJAEgRIACgpIAAijQAAg3gOgZQgPgZgiAAQgyAAg0A6IAADSQAAApAFAJQAGANALAGQALAGAhAAIAAAQIjHAAIAAgQIAIAAQAfAAALgPQALgQAAgsIAAiUQAAhIgDgQQgEgQgGgFQgIgGgLAAQgMAAgRAGIgHgPIB5gyIATAAIAABWQBHhWA+AAQAhAAAYARQAYAQAOAmQAJAaAAA3IAACqQAAAmAGAOQAFALALAGQALAGAdAAIAAAQg");
	this.shape_9.setTransform(271.1,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AhdE4IAAgQQAdAAAKgGQAKgFAHgNQAFgNAAgmIAAibQAAhBgEgSQgDgOgGgFQgHgGgLAAQgNAAgRAHIgGgQIB3gyIATAAIAAFCQAAAmAGANQAFAMALAGQALAGAcAAIAAAQgAgbjrQgNgNAAgTQAAgSANgMQANgOARAAQASAAANAOQANAMAAASQAAATgNANQgNANgSAAQgRAAgNgNg");
	this.shape_10.setTransform(231.2,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AiaC3QgbgeAAguQAAgdANgWQASgdAtgbQAsgYBmgmIAAgQQAAg8gTgXQgTgWgjAAQgbAAgRAPQgQAPAAATIAAAZQAAAVgKALQgKALgRAAQgQAAgKgLQgLgMAAgUQAAglAnghQAngfBFAAQA0AAAiASQAaAOANAdQAHASAAA7IAACHIADBGQACANAFAEIAMAFIAMgDIAjggIAAAZQgxBBgtABQgVgBgNgPQgNgPAAgjQg8AwgQAHQgYALgaAAQgqAAgbgcgAgrAAQgiATgPAVQgPAWAAAYQAAAgATAVQASAVAZAAQAhAAA1gsIAAiYg");
	this.shape_11.setTransform(195.1,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AipEKQghgWAAgYIAFgVQAHgQAYgdIAsgwQgWgNgKgLQgJgLAAgOQAAgPAMgVQANgUAtgkQglgSgUggQgTghAAgnQAAg8AtgrQAtgrBGAAQA4AAAqAcIBVAAIAWACQACAAACADIADAOIgCAQQgCADgDABIgWABIg0AAQAYAgAAAxQAAA4grAoQgrAohGAAQgeAAgfgJQgUARgGALQgHAMAAAJQAAAHAHAHQAHAHAVADIA+AEIBzAGQApAFAZAZQAYAZAAAkQAAAxgvAsQhEBAhtAAQhVAAg6gmgAiBCXQgKAUAAAQQAAAVAZAQQAsAbBRAAQBPAAAmgbQAmgdAAgfQAAgXgXgKQgXgJhDgCQhhgDg1gHQgVAWgLATgAhHkAQgWAaAAA2QAABFAeAnQAXAdAjAAQAfAAAWgZQAVgaAAg1QAAhGgegoQgWgdghAAQghAAgWAag");
	this.shape_12.setTransform(146.6,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("ABREwIAAgQQAkgCAMgKQAMgKAAgOQAAgUgRgqIgkhVIjlAAIgpBeQgOAiAAASQAAANANALQAMAKArADIAAAQIi7AAIAAgQQAmgHALgKQAWgVAbhBIDSnoIANAAIDPHtQAZA8AVASQAVASAkACIAAAQgABLBIIhijvIhpDvIDLAAg");
	this.shape_13.setTransform(86,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("Ai1EbQgQgPgBgTQAAgTANgLQAMgLAUAAQAPAAAZAKIAWAGQAOAAAPgNQAQgOAPgnIAdhGIiRkuIgUgiIgSgUQgLgHgWgGIAAgQIC7AAIAAAQIgJAAQgUAAgJAJQgKAJAAAMQAAARAOAfIBgDLIBajfQAHgSABgRIgDgMIgMgHIgagEIAAgQICDAAIAAAQQgQACgJAGIgTATIgPAiIiiGQQgXA6gnAeQgnAegjAAQgaAAgRgPg");
	this.shape_14.setTransform(26.2,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AiaC3QgbgeAAguQAAgdANgWQASgdAtgbQAsgYBmgmIAAgQQAAg8gTgXQgTgWgjAAQgbAAgRAPQgQAPAAATIAAAZQAAAVgKALQgKALgRAAQgQAAgKgLQgLgMAAgUQAAglAnghQAngfBFAAQA0AAAiASQAaAOANAdQAHASAAA7IAACHIADBGQACANAFAEIAMAFIAMgDIAjggIAAAZQgxBBgtABQgVgBgNgPQgNgPAAgjQg8AwgQAHQgYALgaAAQgqAAgbgcgAgrAAQgiATgPAVQgPAWAAAYQAAAgATAVQASAVAZAAQAhAAA1gsIAAiYg");
	this.shape_15.setTransform(-19.8,9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("AhdE4IAAgQQAbAAAKgGQAKgFAGgNQAGgNAAgmIAAlrIgDhUQgDgQgHgGQgHgFgKgBQgMABgRAGIgIgOIB2gyIAUAAIAAIUQAAAmAGAMQAFAMALAHQAMAGAfAAIAAAQg");
	this.shape_16.setTransform(-58.3,-1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("AjiEpIAAgQIAXAAQAlAAARgZQAJgNAAgzIAAl/QAAg4gMgOQgRgTgiAAIgXAAIAAgQIDbAAQBOgBAuASQAuAQAgAnQAfAnABA1QAABKgxAtQgwAshYAAIgtgEIg1gIIAACtQAAA5ANANQAQATAgAAIAXAAIAAAQgAg4j8IAAD3IAqAFIAcACQAuAAAhghQAhgkAAg4QAAgmgPgiQgQghgdgQQgegRgkAAQgVAAgjAJg");
	this.shape_17.setTransform(-102.1,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AAVDPIAAgQIAIAAQAcAAAMgIQALgJAEgRIACgpIAAijQAAg3gOgZQgPgZgiAAQgyAAg0A6IAADSQAAApAFAJQAGANALAGQALAGAhAAIAAAQIjHAAIAAgQIAIAAQAfAAALgPQALgQAAgsIAAiUQAAhIgDgQQgEgQgGgFQgIgGgLAAQgMAAgRAGIgHgPIB5gyIATAAIAABWQBHhWA+AAQAhAAAYARQAYAQAOAmQAJAaAAA3IAACqQAAAmAGAOQAFALALAGQALAGAdAAIAAAQg");
	this.shape_18.setTransform(271.1,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AhdE4IAAgQQAdAAAKgGQAKgFAHgNQAFgNAAgmIAAibQAAhBgEgSQgDgOgGgFQgHgGgLAAQgNAAgRAHIgGgQIB3gyIATAAIAAFCQAAAmAGANQAFAMALAGQALAGAcAAIAAAQgAgbjrQgNgNAAgTQAAgSANgMQANgOARAAQASAAANAOQANAMAAASQAAATgNANQgNANgSAAQgRAAgNgNg");
	this.shape_19.setTransform(231.2,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AiaC3QgbgeAAguQAAgdANgWQASgdAtgbQAsgYBmgmIAAgQQAAg8gTgXQgTgWgjAAQgbAAgRAPQgQAPAAATIAAAZQAAAVgKALQgKALgRAAQgQAAgKgLQgLgMAAgUQAAglAnghQAngfBFAAQA0AAAiASQAaAOANAdQAHASAAA7IAACHIADBGQACANAFAEIAMAFIAMgDIAjggIAAAZQgxBBgtABQgVgBgNgPQgNgPAAgjQg8AwgQAHQgYALgaAAQgqAAgbgcgAgrAAQgiATgPAVQgPAWAAAYQAAAgATAVQASAVAZAAQAhAAA1gsIAAiYg");
	this.shape_20.setTransform(195.1,9.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("AipEKQghgWAAgYIAFgVQAHgQAYgdIAsgwQgWgNgKgLQgJgLAAgOQAAgPAMgVQANgUAtgkQglgSgUggQgTghAAgnQAAg8AtgrQAtgrBGAAQA4AAAqAcIBVAAIAWACQACAAACADIADAOIgCAQQgCADgDABIgWABIg0AAQAYAgAAAxQAAA4grAoQgrAohGAAQgeAAgfgJQgUARgGALQgHAMAAAJQAAAHAHAHQAHAHAVADIA+AEIBzAGQApAFAZAZQAYAZAAAkQAAAxgvAsQhEBAhtAAQhVAAg6gmgAiBCXQgKAUAAAQQAAAVAZAQQAsAbBRAAQBPAAAmgbQAmgdAAgfQAAgXgXgKQgXgJhDgCQhhgDg1gHQgVAWgLATgAhHkAQgWAaAAA2QAABFAeAnQAXAdAjAAQAfAAAWgZQAVgaAAg1QAAhGgegoQgWgdghAAQghAAgWAag");
	this.shape_21.setTransform(146.6,19.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("ABREwIAAgQQAkgCAMgKQAMgKAAgOQAAgUgRgqIgkhVIjlAAIgpBeQgOAiAAASQAAANANALQAMAKArADIAAAQIi7AAIAAgQQAmgHALgKQAWgVAbhBIDSnoIANAAIDPHtQAZA8AVASQAVASAkACIAAAQgABLBIIhijvIhpDvIDLAAg");
	this.shape_22.setTransform(86,-0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("Ai1EbQgQgPgBgTQAAgTANgLQAMgLAUAAQAPAAAZAKIAWAGQAOAAAPgNQAQgOAPgnIAdhGIiRkuIgUgiIgSgUQgLgHgWgGIAAgQIC7AAIAAAQIgJAAQgUAAgJAJQgKAJAAAMQAAARAOAfIBgDLIBajfQAHgSABgRIgDgMIgMgHIgagEIAAgQICDAAIAAAQQgQACgJAGIgTATIgPAiIiiGQQgXA6gnAeQgnAegjAAQgaAAgRgPg");
	this.shape_23.setTransform(26.2,19.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AiaC3QgbgeAAguQAAgdANgWQASgdAtgbQAsgYBmgmIAAgQQAAg8gTgXQgTgWgjAAQgbAAgRAPQgQAPAAATIAAAZQAAAVgKALQgKALgRAAQgQAAgKgLQgLgMAAgUQAAglAnghQAngfBFAAQA0AAAiASQAaAOANAdQAHASAAA7IAACHIADBGQACANAFAEIAMAFIAMgDIAjggIAAAZQgxBBgtABQgVgBgNgPQgNgPAAgjQg8AwgQAHQgYALgaAAQgqAAgbgcgAgrAAQgiATgPAVQgPAWAAAYQAAAgATAVQASAVAZAAQAhAAA1gsIAAiYg");
	this.shape_24.setTransform(-19.8,9.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AhdE4IAAgQQAbAAAKgGQAKgFAGgNQAGgNAAgmIAAlrIgDhUQgDgQgHgGQgHgFgKgBQgMABgRAGIgIgOIB2gyIAUAAIAAIUQAAAmAGAMQAFAMALAHQAMAGAfAAIAAAQg");
	this.shape_25.setTransform(-58.3,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AjiEpIAAgQIAXAAQAlAAARgZQAJgNAAgzIAAl/QAAg4gMgOQgRgTgiAAIgXAAIAAgQIDbAAQBOgBAuASQAuAQAgAnQAfAnABA1QAABKgxAtQgwAshYAAIgtgEIg1gIIAACtQAAA5ANANQAQATAgAAIAXAAIAAAQgAg4j8IAAD3IAqAFIAcACQAuAAAhghQAhgkAAg4QAAgmgPgiQgQghgdgQQgegRgkAAQgVAAgjAJg");
	this.shape_26.setTransform(-102.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.3,-52,465.3,103.7);


(lib.logotext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgGMVQg+AZhJAZQhLAYhHAAQhuAAhAhEQgMgfgIgKQgIgMgEgLQgGgMgCgWQgagmgQgzQgPgygGg1QgGg4AEg0QADg1ALgyQAFgNABgJIADgZQAHghAMgzQAKgpARgeQgJgYAJgeQAKghAKgUIA0iwQAahZARg2QAlh4Aih6QAhh5AaiKIAbgTQAJgEANgEQApAZA0AXQA0AXAkAAQASANAEAHIAHAMQAZAlARAkQARAkgGA8QgNAZgHAAQgMA7gLAhIgXBNQgNAhgQAwQgOArgIA6QgJANgDAMIgSA1QgGAQgLAKQgGBHgPApIgdBXQgZBKgXBUQgVBQgEBkQAMgFAJAAIASAAQAVAAAaAIQBCgrBNgJQBKgIBRgDIA+AAQAdAAAdgFQATANAGACQAGABAKAAQAPAAAMADQAbAeAYANQAXAOAcALQAgAPAPAIQAXAMAWAWIAQB1QAQAZgDAIQAAAWgJALIAFAeQgjAIgLALQgJAIgOAQQgPADgKAAIgPAAQgdAAguAOQg6gZhBAAQgdAAgWADIg1AFQgfAGgXACQgcADgdAAg");
	this.shape.setTransform(417.4,13.5,0.911,0.866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AnNMbQgMgfgIgKQgIgMgEgLQgGgMgCgWQgagmgQgzQgPgygGg1QgGg4AEg0QADg1ALgyQAFgNABgJIADgZIAThUQAKgpARgeQgJgYAJgeQAKghAKgUIA0iwQAahZARg2QAlh4Aih6QAhh5AaiKIAbgTIAWgIQApAZA0AXQA0AXAkAAQASANAEAHIAHAMQAZAlARAkQARAkgGA8QgNAZgHAAQgMA7gLAhIgXBNQgNAhgQAwQgOArgIA6QgJANgDAMIgSA1QgGAQgLAKQgGBHgPApIgdBXQgZBKgXBUQgVBQgEBkQAMgFAJAAIASAAQAVAAAaAIQBCgrBNgJQBKgIBRgDIA+AAQAdAAAdgFQATANAGACQAGABAKAAQAPAAAMADQAbAeAYANQAXAOAcALIAvAXQAXAMAWAWIAQB1QAQAZgDAIQAAAWgJALIAFAeQgjAIgLALQgJAIgOAQQgPADgKAAIgPAAQgdAAguAOQg6gZhBAAQgdAAgWADIg1AFQgfAGgXACQgcADgdAAIgwAQQg+AZhJAZQhLAYhHAAQhuAAhAhEg");
	this.shape_1.setTransform(417.4,13.5,0.911,0.866);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AJbrOQADATgBAKIgEAjQAAAKAFATQguBcg9AjQg+AihGAPIiRAfQhKAQhIA3QgdgOgXAOQgYAOgqgGQgMAQgVAHQgRAGgXAJQAJAYgBAaQgBAaAHARQBNAIBcgLQBegLBagDQADAOgFAEQgEAEACALQAPANAQAVIAfAoQAQAUAQALQAQAMAWgDQAJAVAEAbQADAagJAZQggAbgnAjQgnAigjAVQglAYgsAQQgrAPg1gDIgRAAQgFAAgJgIQgSAOgegGQgfgGgTAOQgYgNgiABQgjABgagLQgjA5gdBCQgeBEgVBHQBLAOAygDQAtgCAxgIIBYgNQAwgHBFADQAsgeA9gKQA9gJAzgWQARAIAOAUIAZAnQANASANANQAMAOAVgDQAJALADAPQACAJADATQADAPAFAIQAGAKANgDQghBagrAwQgsAwg3AYQg4AZhCANQg5AMhcAVQgUAFgNgHQgNgGgQAAQgxANhJALQhJALhGgDQhHgChFgVQhCgUgqg0QgRgTgGgaQgGgagYgNQgCgjgHgsIgNhcQgHgygDgsQgDgvAHglQAGgoAVgiQAVgfgGgoQAKgCADgMQACgNAPADQAPg1AOgoQAMggAUgyIAhhTQASguAOgwQgegjgPgrQgPgpgGgrQgIgxgDgmQgEgpgLgzQAWgpAggZQAegZAngSQAmgQAsgLIBdgYQBdglBBgSQBEgTBDgMQBPgOA9gJQBJgMBdgVQATAYASAAQAJgYAMAJQAMAKgCgZQAXAwAhAeQAiAfAqAWg");
	this.shape_2.setTransform(313.3,13.9,0.911,0.866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkPNRQhHgChFgVQhCgUgqg0QgRgTgGgaQgGgagYgNQgCgjgHgsIgNhcQgHgygDgsQgDgvAHglQAGgoAVgiQAVgfgGgoQAKgCADgMQACgNAPADQAPg1AOgoQAMggAUgyIAhhTQASguAOgwQgegjgPgrQgPgpgGgrQgIgxgDgmQgEgpgLgzQAWgpAggZQAegZAngSQAmgQAsgLIBdgYQBdglBBgSQBEgTBDgMQBPgOA9gJQBJgMBdgVQATAYASAAQAJgYAMAJQAMAKgCgZQAXAwAhAeQAiAfAqAWQADATgBAKIgEAjQAAAKAFATQguBcg9AjQg+AihGAPIiRAfQhKAQhIA3QgdgOgXAOQgYAOgqgGQgMAQgVAHIgoAPQAJAYgBAaQgBAaAHARQBNAIBcgLQBegLBagDQADAOgFAEQgEAEACALQAPANAQAVIAfAoQAQAUAQALQAQAMAWgDQAJAVAEAbQADAagJAZQggAbgnAjQgnAigjAVQglAYgsAQQgrAPg1gDIgRAAQgFAAgJgIQgSAOgegGQgfgGgTAOQgYgNgiABQgjABgagLQgjA5gdBCQgeBEgVBHQBLAOAygDQAtgCAxgIIBYgNQAwgHBFADQAsgeA9gKQA9gJAzgWQARAIAOAUIAZAnQANASANANQAMAOAVgDQAJALADAPIAFAcQADAPAFAIQAGAKANgDQghBagrAwQgsAwg3AYQg4AZhCANQg5AMhcAVQgUAFgNgHQgNgGgQAAQgxANhJALQg5AJg4AAIgegBg");
	this.shape_3.setTransform(313.3,13.9,0.911,0.866);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABkJ0QALBSgSAuQgTAugiAYQgiAXgrADQguACgmgIQgWgngSg4QgRg5gQg+QgShLgJguIgVhqQAKgfAEgsQADgqABgsIADhYQAAgqAFgsQAQhzAehlQAehqARhtQAEgZgHgWQgIgWAEgTQADgLALgDQAKgFACgNQAHgegDgTQgDgTALgcQANgZAPgnQAQgqgEguQASgPATgXQAQgWATgSQAQgQAagPQAXgOAhAAQARAbAGAhIALBCQAGAgALAdQALAcAaARIAAA2QAAAeADAiQACAhAHAZQAJAaARAIQglB3glCLQgjCFgVB7QgWB+gGCGQgFCBATCHg");
	this.shape_4.setTransform(223.7,13.5,0.911,0.866);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("Ah5NOQgWgngSg4QgRg5gQg+QgThLgIguIgWhqQALgfAEgsQADgqABgsIADhYQAAgqAFgsQAQhzAdhlQAehqAShtQAEgZgIgWQgHgWAEgTQACgLALgDQALgFADgNQAGgegDgTQgDgTALgcQANgZAPgnQAQgqgFguQATgPATgXQAQgWATgSQAQgQAZgPQAYgOAhAAQARAbAGAhIALBCQAFAgALAdQAMAcAaARIAAA2QAAAeADAiQACAhAHAZQAJAaAQAIQgkB3gmCLQgiCFgVB7QgXB+gFCGQgGCBAUCHQALBSgSAuQgTAugiAYQgjAXgqADIgVABQgiAAgdgHg");
	this.shape_5.setTransform(223.7,13.5,0.911,0.866);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAbFWQgCAngMAiQgNAigPAfQgUAkgTAYQgQAYgYAaQAGAjgGATQgFASACAjQghBthDAkQhDAlg8g0QgZgVgQgiQgQgigdgJQAGgugNguQgNgvgQgCQgFgxgOhKQgNg8gMhIQgKg+gJhFQgHg9ACg5QACgcgKgVQgKgXgEgbQgJhAADhEQADhBAAhDQAAg5gFhJIgKiFQgFhAAAg1QAAg0AMgfQANghAXgVQAYgVATgYQAxAGAdAsQAcAsgHAlQAvAjAcA5QAbA2ARBHQAQBHAHBMQAGBEAFBUIAJCPQADBBAPAzQBRiPA4hxQA0hvA6hpQA7hqBFhoQBGhoByiIQAVACAPAJIAaAOQAJAEARAFQAPAEAbgFQAHAXAGAQIARA4QAFASAOAlQAGAHgCAOQgDAUAAAGQgBAJAAAJQAAAFALgFQgHAogRAeQgQAeACAsQg2BYg5BRQg9BXg9BdQg+Bgg2BhQg2BkgpByQgLAAgFAIQgFAGgFAMIgKARQgFAIgKAAg");
	this.shape_6.setTransform(154.7,13.3,0.911,0.866);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlFM7QgXgVgRgiQgRgigcgJQAGgugNguQgNgvgQgCQgFgxgOhKQgNg8gMhIQgKg+gJhFQgIg9ADg5QACgcgKgVQgKgXgEgbQgJhAADhEQAEhBAAhDQAAg5gGhJIgKiFQgFhAAAg1QAAg0AMgfQANghAXgVQAYgVATgYQAyAGAbAsQAdAsgGAlQAuAjAcA5QAaA2ASBHQAQBHAHBMQAGBEAFBUIAJCPQADBBAOAzQBSiPA4hxQA0hvA6hpQA7hqBFhoQBFhoBziIQAVACAPAJIAaAOQAIAEASAFQAPAEAbgFIANAnIARA4QAFASAOAlQAFAHgBAOIgDAaIgBASQAAAFALgFQgIAogQAeQgQAeACAsQg2BYg6BRQg8BXg9BdQg+Bgg2BhQg3BkgoByQgMAAgEAIQgFAGgGAMIgKARQgEAIgKAAQgCAngMAiQgNAigPAfQgUAkgSAYQgSAYgXAaQAGAjgGATQgFASACAjQghBthDAkQgcAQgbAAQglAAgkgfg");
	this.shape_7.setTransform(154.7,13.3,0.911,0.866);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABkJ0QALBRgTAvQgTAvgiAXQghAXgrADQguACgmgIQgVgkgTg7QgVhGgMgxQgPg7gNg+QgMg8gIguQAKgiADgpQAEgqABgsIAChYQABgqAFgsQAPhxAehnQAehqARhtQAFgZgIgWQgIgVAFgUQADgKAKgEQALgFACgNQAHgegDgTQgEgTAMgcQAKgVARgrQAQgpgDgvQASgPATgXQAPgTAUgVQAQgQAZgPQAXgOAhAAQASAaAGAiIALBCQAFAgALAdQALAcAbARIAAA2QAAAlACAbQACAeAIAcQAIAaARAIQgkB3glCLQgiB7gXCFQgWCGgFB+QgGCFAUCDg");
	this.shape_8.setTransform(57.7,13.5,0.911,0.866);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("Ah5NOQgVgkgTg7QgVhGgMgxQgPg7gNg+IgUhqQALgiACgpQAFgqAAgsIAChYQABgqAFgsQAPhxAehnQAehqARhtQAFgZgHgWQgJgVAFgUQACgKALgEQAMgFABgNQAHgegDgTQgDgTAKgcQAMgVAQgrQAQgpgDgvQASgPATgXQAPgTATgVQARgQAagPQAWgOAhAAQASAaAGAiIALBCQAGAgALAdQAKAcAbARIAAA2QAAAlACAbQACAeAIAcQAHAaASAIQgkB3glCLQgiB7gXCFQgWCGgGB+QgFCFAUCDQALBRgTAvQgTAvgiAXQgiAXgqADIgVABQgiAAgdgHg");
	this.shape_9.setTransform(57.7,13.5,0.911,0.866);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGMVQg+AZhJAZQhLAYhHAAQhuAAhAhEQgMgfgIgKQgIgMgEgLQgGgMgCgWQgagmgQgzQgPgygGg1QgGg4AEg0QADg1ALgyQAFgNABgJIADgZQALg0AIggQAKgpARgeQgJgYAJgeQAKghAKgUIA0iwQASg+AZhRQAlh4Aih6QAhh5AaiKQAWgQAFgDQAGgCAQgGQAoAZA1AXQA0AXAkAAQASANAEAHIAHAMQAaAmAQAjQARAkgGA8QgNAZgHAAQgMA7gLAhIgXBNQgNAhgQAwQgOArgIA6QgJANgDAMIgSA1QgGAQgLAKQgGBHgPApIgdBXQgZBKgXBUQgVBQgEBkQAMgFAJAAIASAAQAVAAAaAIQBBgrBNgJQBLgIBRgDIA+AAQAeAAAbgFQAVANAFACQAGABAKAAQAPAAAMADQAbAeAYANQAXAOAcALQAgAPAPAIQAYANAVAVIAQB1QAPAYgCAJQAAAWgJALIAFAeQgjAIgLALQgMALgLANQgPADgKAAIgPAAQgdAAguAOQg6gZhBAAQgdAAgWADIg1AFQgfAGgXACQgcADgdAAg");
	this.shape_10.setTransform(-31.8,13.5,0.911,0.866);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AnNMbQgMgfgIgKQgIgMgEgLQgGgMgCgWQgagmgQgzQgPgygGg1QgGg4AEg0QADg1ALgyQAFgNABgJIADgZQALg0AIggQAKgpARgeQgJgYAJgeQAKghAKgUIA0iwQASg+AZhRQAlh4Aih6QAhh5AaiKIAbgTIAWgIQAoAZA1AXQA0AXAkAAQASANAEAHIAHAMQAaAmAQAjQARAkgGA8QgNAZgHAAQgMA7gLAhIgXBNQgNAhgQAwQgOArgIA6QgJANgDAMIgSA1QgGAQgLAKQgGBHgPApIgdBXQgZBKgXBUQgVBQgEBkQAMgFAJAAIASAAQAVAAAaAIQBBgrBNgJQBLgIBRgDIA+AAQAeAAAbgFQAVANAFACQAGABAKAAQAPAAAMADQAbAeAYANQAXAOAcALIAvAXQAYANAVAVIAQB1QAPAYgCAJQAAAWgJALIAFAeQgjAIgLALQgMALgLANQgPADgKAAIgPAAQgdAAguAOQg6gZhBAAQgdAAgWADIg1AFQgfAGgXACQgcADgdAAIgwAQQg+AZhJAZQhLAYhHAAQhuAAhAhEg");
	this.shape_11.setTransform(-31.8,13.5,0.911,0.866);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AIWJKQgNAtgZAyQgaAwgiAkQghAkgrAZQgqAZgvADQgdgJgJgJQgIgJgNgJIgWgRIgbgNIAJgkQAEgVgGgMQgHgNgUgVIgNgRQgIgLgDgGIgmgzIA8gTQA3gUATgdQATgegFhHQgsgLgeAJQglAKgXAIQglANgsAKQgmAKgxAAIhDgFIgWgGQgEgdgFgFQgFgFgDgFQgMgOgMgWQgMgYAHgjQgLgXgCgaQgNAfgHAmIgJAaIgWAGQgFADgCAKQgCAKAAAFIgLAtQgFAHgEADIgJAKQgFAbgGAWIgNAuQgMApgHAdQgHAiACAgIgJAeQgLAQgNAKIgbASQgEAFgIAFIgMAGIgHAeIg9AOQgJACgOAAIgWgCQgWgWgPgSQgNgOgSgPQgUgegCgTIgFgeQgFgRAAgJQgCgMgEgFIgdghIAZgYIACguQAriIAziDQASgvBUjXIBFitQgCgHAAgLQAAgMAEgNQAbg0ANgfIAfhLQARgtATgtQATgrAdgvIAjgTIAQgHQAHgEAMAAIAiAGQA+gkAuhAQAshAAxhaIAWgmIAdAWQAKAIAUAHIAqAPQAqALAiANQAiAOAXAbQANAqACAYQACATAFAYIAMBdQAGAuACA5QAMAyAHAqIAOBbQAKA7AMBDQAKA4ATA8QARAAAFADQAKgFANgDIA0gIIAJAZQACAOAUAOQAdACANANQAMALAMAOQAKAMAIAEIAhARIgSApQgWAxgpAtQgpAtgyAdIADAgQABAOAFASQAHA5AEAmQAEAxgEA0gAhmBzQBCgFA0gHQA0gHBFgQIgiipQgRhXgUhYIgNAbQgsA5gnBHQgoBEgeA/IgaAxQgOAZgLAYQAMgCAOAAQAMAAALgDg");
	this.shape_12.setTransform(-147.6,13.9,0.911,0.866);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("ADpNDQgIgHgNgKIgWgQIgbgOIAJgkQAEgVgGgNQgHgLgUgWIgNgRIgLgRIgmgzIA8gTQA3gUATgdQATgegFhHQgsgKgeAHQglALgXAIQglANgsALQgmAJgxAAIhDgGIgWgFQgEgdgFgFQgFgFgDgEQgMgPgMgWQgMgXAHgkQgLgXgCgZQgNAegHAlIgJAbIgWAGQgFADgCAJQgCALAAAEIgLAuIgJAKIgJAJQgFAcgGAWIgNAuQgMApgHAdQgHAiACAgIgJAeQgLAQgNAKIgbASQgEAFgIAEIgMAHIgHAeIg9AOQgJACgOAAIgWgCQgWgWgPgSQgNgPgSgOQgUgfgCgRIgFgeQgFgSAAgJQgCgMgEgFIgdghIAZgYIACgvQAriHAziDIBmkGIBFitQgCgHAAgLQAAgMAEgNQAbg0ANgfIAfhLIAkhaQATgrAdguIAjgUIAQgGQAHgEAMgBIAiAGQA+gkAuhAQAshAAxhZIAWgmIAdAVQAKAIAUAHIAqAPQAqAMAiAMQAiAOAXAcQANAqACAXQACAUAFAYIAMBcQAGAuACA6QAMAxAHAqIAOBbQAKA7AMBEQAKA3ATA9QARgBAFADQAKgFANgDIA0gIIAJAZQACAOAUANQAdADANANQAMALAMAOQAKAMAIAFIAhAQIgSApQgWAxgpAtQgpAtgyAeIADAfQABAOAFASQAHA5AEAlQAEAygEA0IgFALQgNAsgZAxQgaAxgiAkQghAkgrAZQgqAZgvACQgdgIgJgKgAA1jtQgsA5gnBHQgoBEgeA/IgaAyQgOAYgLAYQAMgCAOAAQAMAAALgDQBCgFA0gHQA0gGBFgSIgiinQgRhXgUhZg");
	this.shape_13.setTransform(-147.6,13.9,0.911,0.866);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AI/E/QANAHACARQABAQgBAKIgzBLQgPAYgFAIQgGALgHAGIgfAfQhdBBhdAwQhgAyhpATQgPAaguAKIhSAVQgHgFgCgIQAAgJgIgEQgDAXgPABQgQACgYgLQgWgLgagRIgsggQgGAMgOAZQgMATgQAHIgggHQgMgCgKAMQgLgHgIgKQgJgLgFgGQgHgIgJgIQgJgHgQgFQAEgJgIgUQgIgUgRgFQAJgRgQgYQgPgagIgeQAEgYADggQABgfAWgFQgBgQgEgMIgIgXQANgOAHgVQAFgRAFgYQADgQAHgaQAGgVAQgPQAQhCAMgnQALgmAEgdQAEgaAIgtQAIgoASg0QgDgkAIgbIARg2QAKgaAFgfQAGgegIgnQgcACgMAUQgMAVgEAgQgQATgXgBQgXgBgSAHQhHghgug+Qgvg9gchSQAUg3AjgkQAjgkAvgZQAvgZA0gQIBkgdQBQgQBNgWQBPgVBYAHQAMgHASgBQAQgBATAAIAjgBQAQgCANgHQALAPASADQAUAEAWASQAYgVAQAMQASAMAOAOQANANAOANQAOALANAAQAPAXAUASQAXAUASATQASATAOAYQANAYAAAeQgCAMAIADQAIACAEAHQADBJgWA1QgVA2gfAsQghAvgkAmQglAogeAtQASAdAcAZIA2AuQAdAZAWAYQAYAbAQAiQADAEAHAFIAMAIQAFAVALAbQAMAcAGAUQAGAXADAQQACASgLAMgADdnTQhkgFhoAbQhlAahDAvQAkAhAhAaQAlAaATAsQBMglA9g6QA8g6AyhHgAD4EcQAGgYAQgOIAfgbQASgOALgPQAMgOgCgdQhAgog1gJQg2gIgwAIQguAJgsAQQgoARguAHQgZBQgUBEQgYBNgXBPQA8gJAzgVQA0gWAsgVQA4gcAjgUQAygbAvgTg");
	this.shape_14.setTransform(-270.5,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhALuQAAgJgJgEQgCAXgQABQgPACgYgLQgWgLgagRIgrggIgWAlQgKATgRAHIgggHQgMgCgKAMQgMgHgHgKIgOgRQgGgIgKgIQgJgHgQgFQAEgJgIgUQgJgUgPgFQAIgRgQgYQgPgagHgeQADgYACggQACgfAXgFQgCgQgFgMIgIgXQAOgOAHgVQAFgRAFgYQACgQAIgaQAGgVAQgPQAQhCAMgnQALgmAEgdIAMhHQAIgoARg0QgCgkAJgbIAQg2QAKgaAFgfQAHgegJgnQgcACgLAUQgNAVgEAgQgQATgXgBQgXgBgSAHQhHghgug+Qgug9gchSQATg3AjgkQAkgkAugZQAvgZA0gQIBkgdQBQgQBOgWQBOgVBYAHQAMgHASgBIAjgBIAjgBQAQgCANgHQALAPASADQAUAEAVASQAZgVAQAMQASAMAOAOIAbAaQANALAOAAQAQAXATASQAXAUASATQASATANAYQAOAYAAAeQgCAMAIADQAIACAEAHQADBJgWA1QgVA2ggAsQggAvgkAmQglAogeAtQATAdAbAZIA1AuQAeAZAWAYQAYAbAQAiIAKAJIAMAIQAGAVAKAbQAMAcAFAUQAIAXABAQQACASgKAMQANAHABARQACAQgCAKIgyBLIgUAgQgGALgHAGIggAfQhcBBhdAwQhgAyhpATQgPAaguAKIhSAVQgHgFgCgIgAB5BiQguAJgsAQQgoARguAHQgZBQgVBEIguCcQA8gJAzgVQA1gWAqgVQA5gcAjgUQAygbAugTQAGgYAQgOIAggbQARgOAMgPQAMgOgCgdQhAgog2gJQgagEgZAAQgaAAgYAEgAARm9QhlAahDAvQAkAhAhAaQAkAaAUAsQBMglA9g6QA8g6AyhHIgggBQhVAAhXAXg");
	this.shape_15.setTransform(-270.5,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("As7LjIAdgbIACg5QA2ijA8icQBIi7Azh+QANghAchFQAVgzATg3QgCgKAAgNQAAgMAFgRQAfg3ASgrQARgmAUg0QAWg8AVgxQAWg1Akg1IAQgbIAYACIATgJQALgEAOAAIAoAIQBJgpA4hNQA3hQA5hrIAbguIAjAbQALAIAYAIIAzATQAwAOArASQArARAZAeIALAZIAQBnQALBMAEAlQAHA8ACBAQAMA6AJA1IATBuQAIA/AQBYQAOBMAVA+QAWAAAFACQAagNAkgDIAcgDIAJAfQAEAIAHAIQAIAJAIAIQAiADASAOQAOANANAQIALAMQAIAIADACIAoATIgWA0QgZA6gxA1QgyA3g+AjQAFAVABAPQACAUADASQAKA6AFA3QAFA9gGA8QgYBKgcA1QgeA3gpAuQgpAtgzAcQgyAdg4ACQgegHgPgMQgLgIgOgNQgTgRgKgFIgdgRIAJgoQAHgWgIgRQgIgQgYgbQgLgKgEgIIg8hTIBJgYQBBgWAXgiQAWgigEhYQg3gNgkAJIhGAVQg0ARgwALQguANg6AAQgiAAgtgIIgZgDIgGgeQAAgFgGgHIgKgNQgIgLgSggQgQgbAJgpQgPgegDghQgKAcgEAOQgCAKgIAeIgJAjIgcAGQgEAEgEAMQgDALACAFIAJAeIgWAZQgFAIgHAFIgLALQgEAegIAbQgHAbgJAcIgVBUQgKArAAAnIgJAkQgKAUgSAMQgUANgMAGQgXAMgIAKIgGAjIghAGQghAJgIACQgMADgQAAIgdgDQgagggRgTQgQgRgWgOIgNgWQgKgWgCgRQgBgPgFgWQgFgjgIgOgAh6AfQgbAvghBDQANgCARAAQAPAAAPgDQBMgFBCgJQBEgIBLgTQgOhTgYh5QgQhRgeiCIgLAbQgzBEg1BaQgzBWghBJg");
	this.shape_16.setTransform(-393.8,-1.9,0.911,0.866);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AEXPrQgLgIgOgNQgTgRgKgFIgdgRIAJgoQAHgWgIgRQgIgQgYgbQgLgKgEgIIg8hTIBJgYQBBgWAXgiQAWgigEhYQg3gNgkAJIhGAVQg0ARgwALQguANg6AAQgiAAgtgIIgZgDIgGgeQAAgFgGgHIgKgNQgIgLgSggQgQgbAJgpQgPgegDghIgOAqIgKAoIgJAjIgcAGQgEAEgEAMQgDALACAFIAJAeIgWAZQgFAIgHAFIgLALQgEAegIAbQgHAbgJAcIgVBUQgKArAAAnIgJAkQgKAUgSAMIggATQgXAMgIAKIgGAjIghAGQghAJgIACQgMADgQAAIgdgDQgagggRgTQgQgRgWgOIgNgWQgKgWgCgRQgBgPgFgWQgFgjgIgOIgigpIAdgbIACg5QA2ijA8icQBIi7Azh+IAphmQAVgzATg3QgCgKAAgNQAAgMAFgRQAfg3ASgrQARgmAUg0QAWg8AVgxQAWg1Akg1IAQgbIAYACIATgJQALgEAOAAIAoAIQBJgpA4hNQA3hQA5hrIAbguIAjAbQALAIAYAIIAzATQAwAOArASQArARAZAeIALAZIAQBnIAPBxQAHA8ACBAQAMA6AJA1IATBuQAIA/AQBYQAOBMAVA+QAWAAAFACQAagNAkgDIAcgDIAJAfQAEAIAHAIIAQARQAiADASAOQAOANANAQIALAMQAIAIADACIAoATIgWA0QgZA6gxA1QgyA3g+AjQAFAVABAPQACAUADASQAKA6AFA3QAFA9gGA8QgYBKgcA1QgeA3gpAuQgpAtgzAcQgyAdg4ACQgegHgPgMgABEkhQgzBEg1BaQgzBWghBJIgCADQgbAvghBDQANgCARAAQAPAAAPgDQBMgFBCgJQBEgIBLgTQgOhTgYh5QgQhRgeiCg");
	this.shape_17.setTransform(-393.8,-1.9,0.911,0.866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470.2,-91.5,940.4,183);


(lib.howtoplayanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgZAWIAAgrIAzAAIAAArg");
	this.shape.setTransform(2.8,93.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgWBgIgUgGQgKgDgIgFQgIgFgHgHQgHgGgFgHQgGgJgDgIQgEgKgBgJQgDgKAAgLQAAgKADgKQABgKAEgJQADgJAGgHQAFgJAHgGQAHgGAIgFQAJgFAJgEIAVgEQALgCAKAAQAMAAALACIAUAEQAKAEAIAFIAPALQAHAGAFAIQAGAIADAJQAEAIABALQADAKAAAKQAAAJgDALQgBAKgEAJIgJARQgFAIgIAGQgHAGgHAFQgJAGgJADQgKAEgLACQgLABgLAAQgLAAgLgBgAgTg2QgKAEgHAIQgHAIgDAKQgEAMAAAMQAAANAEALQADAKAHAIQAHAIAKAEQAJAFAKAAQALAAAKgFQAJgEAHgIQAHgIADgKQAEgLAAgNQAAgMgEgMQgDgKgHgIQgHgIgJgEQgKgDgLAAQgKAAgJADg");
	this.shape_1.setTransform(-16.6,86.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AhNBeQADgTAAgUIAAhyQgBgTgCgOIAnABIBJAAQAdAAAOgCIAAArQgQgCgbAAIg6AAIAAAlIAvAAQAZAAAQgBIAAAnQgQgBgZAAIgvAAIAAAhQAAAVACASg");
	this.shape_2.setTransform(-40.5,86.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgWBeQgLgCgJgDQgKgCgIgEIgNgKIgKgLIgHgOQgDgHgCgJQgBgIAAgKIAAhKQAAgXgCgLIA4AAQgCALAAAXIAABLQAAALADAHQADAIAFAGQAGAFAIACQAJADAKAAQALAAAJgDQAIgCAGgFQAGgGACgIQADgHAAgLIAAhLQAAgVgCgNIA4AAQgCANAAAVIAABLQAAAKgBAIIgFAQQgEAIgEAGQgFAGgGAFIgOAJQgIAEgJADQgJADgLABQgKABgLAAQgLAAgLgBg");
	this.shape_3.setTransform(-65.5,86.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AAmBdIhQAAIgmABQACgNAAgUIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgBIAAApQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgBIAAAnQgRgBgWgBIg3AAIAAAmIBCAAQAbAAAPgCIAAArQgPgCgcAAg");
	this.shape_4.setTransform(-102.8,86.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAmIBVAAIAAgmQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_5.setTransform(-128,86.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAYAAARgCIAAArQgRgCgYAAIgdAAIAABwQAAAUACAOg");
	this.shape_6.setTransform(-153.3,86.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AgcBeQADgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBwAAQAXAAARgCIAAArQgRgCgXAAIgeAAIAABwQAAAUACAOg");
	this.shape_7.setTransform(-190,86.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AgbBdQACgLAAgWIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_8.setTransform(-208.5,86.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FF00").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAmIBVAAIAAgmQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_9.setTransform(-228.4,86.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FF00").s().p("AgWBeQgLgCgJgDQgKgCgIgEIgNgKIgKgLIgHgOQgDgHgCgJQgBgIAAgKIAAhKQAAgXgCgLIA4AAQgCALAAAXIAABLQAAALADAHQADAIAFAGQAGAFAIACQAJADAKAAQALAAAJgDQAIgCAGgFQAGgGACgIQADgHAAgLIAAhLQAAgVgCgNIA4AAQgCANAAAVIAABLQAAAKgBAIIgFAQQgEAIgEAGQgFAGgGAFIgOAJQgIAEgJADQgJADgLABQgKABgLAAQgLAAgLgBg");
	this.shape_10.setTransform(178.4,50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FF00").s().p("AgVBgIgVgFQgJgEgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgDgIgCgLQgCgKAAgKQAAgKACgKQACgKADgJQADgJAGgHQAFgIAHgHQAHgGAIgFQAIgFAKgDIAVgGQAKgBALAAQALAAAMABIAUAGQAJADAJAFIAPALQAHAGAFAIQAFAIAEAIQAEAKACAJQACAKAAALQAAAKgCAKQgCAKgEAJIgJARQgGAHgGAHQgHAHgJAEQgIAGgKADQgJADgLADQgLABgLAAQgLAAgKgBgAgTg1QgKADgHAIQgGAIgEAKQgDALAAANQAAAMADAMQAEAKAGAJQAHAHAKAEQAJAEAKAAQALAAAKgEQAJgEAHgHQAGgJAEgKQADgMABgMQgBgNgDgLQgEgLgGgHQgHgIgJgDQgKgFgLAAQgKAAgJAFg");
	this.shape_11.setTransform(151.4,49.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FF00").s().p("AgbBdQACgQAAgRIAAgqIg8hTIgUgbIBBAAQAEALAJAMIAbAuIAcgtQAKgPACgJIBCAAIgVAbIg7BTIAAAqQAAASACAPg");
	this.shape_12.setTransform(125.1,49.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FF00").s().p("AAoBdQgFgKgOgTIgvg/QgIgIgLgRQACAOAAASIAAAyQABAWACANIg4AAQACgLAAgZIAAh0QAAgTgCgOIA5AAQADAKAPASIAvBAIATAZQgBgQgBgQIAAgzQAAgVgCgNIA4AAQgCANAAAVIAAB2QAAASACAPg");
	this.shape_13.setTransform(86.3,49.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FF00").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgQgBgXAAIhCAAIAAAhIA3AAQAVAAASgCIAAAoQgRgCgWABIg3AAIAAAlIBCAAQAbAAAPgBIAAApQgQgBgbAAg");
	this.shape_14.setTransform(61.7,49.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FF00").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAATACAOg");
	this.shape_15.setTransform(36.6,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FF00").s().p("AAgBdQgBgLgEgNIgUhCIgHggQgBASgFAOIgTBCQgFAPgBAJIg0AAIgGgYIgqiFIgKgcIA7AAQABAKADAOIARBEIAFAeIAIgeIAUhFIAGgXIAsAAIAGAWIAVBGQAEAKAEAUIACgNIADgRIARhEQADgNABgLIA7AAIgKAcIgqCFQgFAQgBAIg");
	this.shape_16.setTransform(6.8,49.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FF00").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_17.setTransform(-34.3,49.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_18.setTransform(-58.1,49.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FF00").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQACAOAAASIAAAyQAAAWABANIg3AAQACgLAAgZIAAh0QAAgTgCgOIA4AAQAEAKAPASIAwBAIASAZQgBgQAAgQIAAgzQgBgVgCgNIA4AAQgCANAAAVIAAB2QAAASACAPg");
	this.shape_19.setTransform(-83.5,49.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FF00").s().p("AgbBdQACgMAAgVIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_20.setTransform(-103.3,49.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FF00").s().p("AhWBeQACgOAAgUIAAh3QAAgTgCgOIAmABIA4AAQAMgBAVAEIAOAFQAHADAEAEIAJAJQAFAFACAFIAEAMIABAOIgCAOQgBAHgCAGQgDAEgEAFQgEAFgFAEQgFAEgGADIgOAFQgWAFgMAAIgnAAIAAAcQAAATACAQgAgggFIAkAAQAIAAAFgCQAFgBAEgEQADgDACgEQACgFABgFQgBgGgCgFQgBgEgEgDQgDgDgGgCQgFgBgIgBIgkAAg");
	this.shape_21.setTransform(-121.2,49.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FF00").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgCIAAAoQgRgCgWABIg3AAIAAAlIBCAAQAbAAAPgBIAAApQgQgBgbAAg");
	this.shape_22.setTransform(-157.4,49.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FF00").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_23.setTransform(-181.2,49.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FF00").s().p("AgWBgIgUgFQgJgEgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgEgIgCgLQgBgKAAgKQAAgKABgKQACgKAEgJQADgJAGgHQAFgIAHgHQAHgGAJgFQAIgFAJgDIAVgGQAKgBALAAQALAAALABIAVAGQAKADAIAFIAPALQAHAGAFAIQAFAIAEAIQADAKACAJQACAKAAALQAAAKgCAKQgCAKgDAJIgJARQgGAHgHAHQgHAHgIAEQgIAGgKADQgJADgLADQgLABgLAAQgKAAgMgBgAgUg1QgJADgHAIQgHAIgDAKQgDALAAANQAAAMADAMQADAKAHAJQAHAHAJAEQAKAEAKAAQALAAAKgEQAJgEAHgHQAHgJADgKQAEgMgBgMQABgNgEgLQgDgLgHgHQgHgIgJgDQgKgFgLAAQgKAAgKAFg");
	this.shape_24.setTransform(-206.5,49.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FF00").s().p("AAkBcIhMAAIgnABQACgLAAgWIAAh1QAAgVgCgPIA5AAQgCANgBAXIAABtIA9AAQAeAAAOgBIAAArQgNgCgfAAg");
	this.shape_25.setTransform(-230.1,49.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FF00").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_26.setTransform(197.6,13.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FF00").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAVAAASgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgPgCgcAAg");
	this.shape_27.setTransform(174.5,13.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FF00").s().p("AhWBeQACgOAAgUIAAh3QAAgTgCgPIAnABIA2AAQANAAAWAFIANAEQAGADAGAEIAJAJQAEAEACAGIAEAMIABAOIgBAOQgCAHgDAGQgCAEgEAEQgEAGgFAEQgFAEgHADIgNAFQgVAFgNAAIgnAAIAAAcQAAATACAQgAgggFIAlAAQAGAAAGgCQAFgBAEgEQAEgDACgFQACgEAAgGQAAgFgCgFQgCgFgEgCQgEgDgFgCQgGgCgGAAIglAAg");
	this.shape_28.setTransform(151.3,13.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FF00").s().p("AAyBdQgDgOgDgKIgHgTIhJAAIgHATQgEAMgCAMIg9AAIANgcIA4iFQAGgPACgJIBCAAIAJAYIA4CFIANAcgAAYAMIgYhBIgXBBIAvAAg");
	this.shape_29.setTransform(125.7,13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00FF00").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_30.setTransform(99,13.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00FF00").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_31.setTransform(73.6,13.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FF00").s().p("AgbBdQACgQAAgRIAAgqIg8hTIgUgbIBBAAQAEALAJAMIAbAuIAcgtQAKgPACgJIBCAAIgVAbIg7BTIAAAqQAAASACAPg");
	this.shape_32.setTransform(36.3,13.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00FF00").s().p("AAjBeQgCgMgLgXQgGgPgEgGQgDgGgEgDQgFgDgDgCQgFgBgGgBIgbAAIAAAlQAAAVADAOIg5AAQACgOABgVIAAh2QgBgTgCgPIAoABIBBAAQAQABAMADQAMAEAJAGQAIAHAFAJQAFAKAAAMQgBAMgEAJQgDAJgIAHQgEADgGABIgPAFQALADAFAEQAGAFAGANIATAmIANAZgAgpgOIApAAQAKAAAGgGQAHgFAAgKQgBgJgFgFQgHgFgKAAIgpAAg");
	this.shape_33.setTransform(11.3,13.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_34.setTransform(-13.9,13.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FF00").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgQgCgbAAg");
	this.shape_35.setTransform(-37.2,13.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FF00").s().p("ABCBdQABgOAAgVIAAgxIACgbIABgQIgMAiIgZA8QgJAXgCAKIgsAAQgBgKgJgXIgZg8IgIgWIgEgLQACAXAAATIAAAxQAAAXACAMIgzAAQACgNAAgWIAAhzQAAgTgCgQIBFAAQADAOAGARIAmBgIAnhgQAHgSACgNIBFAAQgCAOAAAVIAABzQAAAXACAMg");
	this.shape_36.setTransform(-64.3,13.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FF00").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgEgIgCgLQgBgJAAgLQAAgKABgKQACgKAEgJQADgJAGgHQAFgJAHgGQAHgGAJgFQAIgFAJgDIAVgGQAKgBALAAQALAAALABIAVAGQAKADAIAFIAPALQAHAHAFAHQAFAIAEAIQADAKACAKQACAJAAALQAAAKgCAKQgCAKgDAJIgJARQgGAHgHAHQgHAHgIAEQgIAGgKADQgJAEgLACQgLABgLAAQgKAAgMgBgAgUg1QgJADgHAIQgHAIgDAKQgDALAAANQAAAMADAMQADAKAHAJQAHAHAJAEQAKAEAKABQALgBAKgEQAJgEAHgHQAHgJADgKQAEgMgBgMQABgNgEgLQgDgLgHgHQgHgIgJgDQgKgEgLgBQgKABgKAEg");
	this.shape_37.setTransform(-93.1,13.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FF00").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgQgCgbAAg");
	this.shape_38.setTransform(-117.7,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00FF00").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgIgEgKQgEgKgCgKQgCgLAAgKQAAgLACgJQACgKAEgKQAEgIAFgIQAFgHAHgHQAHgGAJgFQAIgFAKgDIAVgGQALgBAKAAQAMAAALABQALACAJAEQAJADAIAFQAIAFAHAGIAIALQAEAGADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIgBQgLABgJAEQgKADgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJADALABQAKgBAJgCQAJgCAKgEIAAgZIgNAAIgaABIAAgmQAMACAWAAIAVAAQAUAAAOgCQgBAMAAARIAAAZQAAAWABALQgVALgMAEQgMADgOACQgOACgPAAIgVgBg");
	this.shape_39.setTransform(-142.6,13.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FF00").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAVAAASgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgPgCgcAAg");
	this.shape_40.setTransform(-179.2,13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00FF00").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_41.setTransform(-204.3,13.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_42.setTransform(-229.7,13.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00FF00").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgJgEgJQgEgJgCgLQgCgLAAgKQAAgKACgKQACgLAEgIQAEgJAFgIQAFgIAHgGQAHgGAJgFQAIgFAKgEIAVgEQALgCAKAAQAMAAALACQALABAJADQAJAEAIAFQAIAFAHAGIAIAMQAEAFADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIAAQgLAAgJADQgKAEgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJAEALAAQAKAAAJgCQAJgDAKgEIAAgaIgNAAIgaABIAAglQAMABAWABIAVAAQAUgBAOgBQgBAMAAAQIAAAaQAAAWABAMQgVAKgMADQgMAFgOABQgOACgPAAIgVgBg");
	this.shape_43.setTransform(216.4,-22.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00FF00").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQABAOAAARIAAAzQAAAWACANIg3AAQACgMAAgXIAAh0QAAgVgCgNIA4AAQAFAKAOASIAwBAIASAYQgCgPABgQIAAgzQAAgUgCgOIA3AAQgCAOAAAUIAAB2QAAASACAPg");
	this.shape_44.setTransform(190.3,-22.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00FF00").s().p("AgbBdQACgLAAgWIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_45.setTransform(170.5,-22.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_46.setTransform(152,-22.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00FF00").s().p("AgPBgQgLgCgJgDQgKgDgJgEQgIgGgHgGQgHgGgGgIQgFgIgEgJQgEgJgCgLQgCgKAAgLQAAgKACgLQACgLAEgIQAEgKAGgIQAGgIAHgHQAHgFAIgEQAIgFAKgDQAJgDALgBQALgCAJAAQAMAAAMACQALABAKAEQAJAEAIAFQAIAGAHAIQAGAGAEAHQADAHADAKIg2AJQgCgIgDgFQgEgGgFgEQgFgDgHgCQgGgCgJAAQgKAAgJADQgJAEgHAIQgGAIgEAKQgDAMAAAMQAAANADALQAEAKAHAIQAGAIAKAEQAJAEAKAAQALAAAJgEQAJgDAGgHQAFgHACgNIA2AIQgDAOgFAJQgFAKgIAHQgGAHgIAFQgIAEgJADQgJADgLACQgKABgMAAQgKAAgLgBg");
	this.shape_47.setTransform(127,-22.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00FF00").s().p("AAmBdIhQAAIgmABQACgNAAgUIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgBIAAApQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgBIAAAnQgRgBgWgBIg3AAIAAAmIBCAAQAbAAAPgCIAAArQgPgCgcAAg");
	this.shape_48.setTransform(102.8,-22.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FF00").s().p("AAkBcIhNAAIgmABQACgLAAgWIAAh1QAAgVgCgPIA4AAQgCANAAAXIAABtIA9AAQAdAAAPgBIAAArQgOgCgeAAg");
	this.shape_49.setTransform(80.9,-22.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00FF00").s().p("AAlBcIhOAAIgmABQACgLAAgWIAAh1QAAgVgCgPIA5AAQgCANAAAXIAABtIA9AAQAcAAAPgBIAAArQgOgCgdAAg");
	this.shape_50.setTransform(59.1,-22.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00FF00").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgHQgHgGgFgHQgFgJgEgIQgEgKgCgJQgCgKAAgLQAAgKACgKQACgKAEgJQAEgJAFgHQAFgJAHgGQAHgGAIgFQAJgFAJgEIAVgEQALgCAKAAQAMAAAKACIAVAEQAJAEAJAFIAPALQAHAGAFAIQAGAIADAJQADAIACALQACAKAAAKQAAAJgCALQgCAKgDAJIgJARQgFAIgIAGQgGAGgIAFQgJAGgJADQgKAEgLACQgLABgLAAQgKAAgMgBgAgUg2QgJAEgHAIQgGAIgEAKQgDAMgBAMQABANADALQAEAKAGAIQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgIQAGgIAEgKQADgLAAgNQAAgMgDgMQgEgKgGgIQgHgIgJgEQgJgDgMAAQgKAAgKADg");
	this.shape_51.setTransform(34,-22.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF00").s().p("AgPBgQgLgCgJgDQgKgDgJgEQgIgGgHgGQgHgGgGgIQgFgIgEgJQgEgJgCgLQgCgKAAgLQAAgKACgLQACgLAEgIQAEgKAGgIQAGgIAHgHQAHgFAIgEQAIgFAKgDQAJgDALgBQALgCAJAAQAMAAAMACQALABAKAEQAJAEAIAFQAIAGAHAIQAGAGAEAHQADAHADAKIg2AJQgCgIgDgFQgEgGgFgEQgFgDgHgCQgGgCgJAAQgKAAgJADQgJAEgHAIQgGAIgEAKQgDAMAAAMQAAANADALQAEAKAHAIQAGAIAKAEQAJAEAKAAQALAAAJgEQAJgDAGgHQAFgHACgNIA2AIQgDAOgFAJQgFAKgIAHQgGAHgIAFQgIAEgJADQgJADgLACQgKABgMAAQgKAAgLgBg");
	this.shape_52.setTransform(7.6,-22.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00FF00").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_53.setTransform(-30,-22.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAYAAARgCIAAArQgRgCgYAAIgdAAIAABwQAAAUACAOg");
	this.shape_54.setTransform(-53.9,-22.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00FF00").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQABAOAAARIAAAzQAAAWACANIg3AAQACgMAAgXIAAh0QAAgVgCgNIA4AAQAFAKAOASIAwBAIASAYQgCgPABgQIAAgzQAAgUgCgOIA3AAQgCAOAAAUIAAB2QAAASACAPg");
	this.shape_55.setTransform(-79.3,-22.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FF00").s().p("AgbBdQACgLAAgWIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_56.setTransform(-99.1,-22.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00FF00").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgHQgHgGgFgHQgFgJgEgIQgEgKgCgJQgCgKAAgLQAAgKACgKQACgKAEgJQAEgJAFgHQAFgJAHgGQAHgGAIgFQAJgFAJgEIAVgEQALgCAKAAQAMAAAKACIAVAEQAJAEAJAFIAPALQAHAGAFAIQAGAIADAJQADAIACALQACAKAAAKQAAAJgCALQgCAKgDAJIgJARQgFAIgIAGQgGAGgIAFQgJAGgJADQgKAEgLACQgLABgLAAQgKAAgMgBgAgUg2QgJAEgHAIQgGAIgEAKQgDAMgBAMQABANADALQAEAKAGAIQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgIQAGgIAEgKQADgLAAgNQAAgMgDgMQgEgKgGgIQgHgIgJgEQgJgDgMAAQgKAAgKADg");
	this.shape_57.setTransform(-119,-22.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF00").s().p("AhWBdQACgNAAgUIAAh3QAAgTgCgPIAnABIA2AAQANAAAWAFIANAEQAGADAGAEIAJAIQAEAFACAGIAEAMIABAOIgBAOQgCAHgDAFQgCAFgEAEQgEAGgFAEQgFAEgHADIgNAGQgVADgNAAIgnAAIAAAdQAAATACAPgAgggFIAlAAQAGgBAGgBQAFgCAEgDQAEgDACgFQACgEAAgGQAAgFgCgFQgCgFgEgDQgEgDgFgBQgGgBgGAAIglAAg");
	this.shape_58.setTransform(-143.9,-22.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00FF00").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_59.setTransform(-180.9,-22.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FF00").s().p("AAmBdIhPAAIgnABQACgNAAgUIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgBIAAApQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgBIAAAnQgRgBgWgBIg2AAIAAAmIBAAAQAbAAAQgCIAAArQgQgCgbAAg");
	this.shape_60.setTransform(-204.1,-22.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00FF00").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgJgEgJQgEgJgCgLQgCgLAAgKQAAgKACgKQACgLAEgIQAEgJAFgIQAFgIAHgGQAHgGAJgFQAIgFAKgEIAVgEQALgCAKAAQAMAAALACQALABAJADQAJAEAIAFQAIAFAHAGIAIAMQAEAFADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIAAQgLAAgJADQgKAEgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJAEALAAQAKAAAJgCQAJgDAKgEIAAgaIgNAAIgaABIAAglQAMABAWABIAVAAQAUgBAOgBQgBAMAAAQIAAAaQAAAWABAMQgVAKgMADQgMAFgOABQgOACgPAAIgVgBg");
	this.shape_61.setTransform(-229,-22.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AggCIIAAiEIhgiLIBLAAIA1BSIA2hSIBMAAIhhCLIAACEgAAKgqIASAcIBLhsIgnAAg");
	this.shape_62.setTransform(70,-85.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("ABDCMIgOgcIhpAAIgOAcIhIAAICFkYIAKAAICFEYgAB0CAIgfhAIglAAIAeBAIAmAAgAhzCAIAmAAIAdhAIglAAgAAeBAIgehDIAAAAIgfBDIA9AAg");
	this.shape_63.setTransform(37.5,-85.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AhbCIIAAkPIBCAAIAADWIB1AAIAAA5gAhLB8IAighIAAjVIgiAAg");
	this.shape_64.setTransform(8.6,-85.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AhkCIIAAkPIBwAAQAUAAARAHQARAHALANQALALAHARQAGAPAAARQAAATgHAQQgHAOgMAMQgMAMgQAGQgQAHgTAAIguAAIAABigAhUB8IAhAAIAAj2IghAAgAgigRIAnAAQANgBAIgJQAGgKAAgNQAAgMgGgHQgIgJgNAAIgnAAg");
	this.shape_65.setTransform(-19.1,-85.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgdCOQgPgCgOgGQgNgFgMgJQgMgIgKgJQgJgKgIgLQgIgMgFgOQgFgMgDgPQgCgPAAgOQAAgNACgPQADgPAFgNQAFgNAIgLQAIgMAJgKQAKgJAMgJQAMgHANgGQAOgFAPgDQAPgDAOAAQAPAAAQADQAOADAOAFQANAGAMAHQALAJAKAJQAKAKAIAMQAHALAFANQAGANACAPQADAPABANQgBAOgDAPQgCAPgGAMQgFAOgHAMQgIALgKAKQgKAJgLAIQgMAJgNAFQgOAGgOACQgQADgPAAQgOAAgPgDgAhuBGQALATARANQARAOAUAIQAWAIAXgBQAYABAVgIQAVgIASgOQAQgOALgSQAMgUAEgWIgjAAQgEAPgJAMQgHANgMAJQgNAJgOAFQgQAFgRAAQgQAAgPgFQgQgFgLgKQgMgIgJgNQgHgMgFgPIgjAAQAEAWAMAUgAgfhLQgPAHgKALQgKAMgGAOQgGAQAAAPQAAARAGAPQAGAOAKAMQAKAMAPAFQAPAHAQAAQASAAAOgHQAOgFAMgMQAJgMAGgOQAFgPAAgRQAAgPgFgQQgGgOgJgMQgMgLgOgHQgOgGgSAAQgQAAgPAGg");
	this.shape_66.setTransform(-68.2,-85.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AghCIIAAjUIg9AAIAAg7IC9AAIAAA7Ig+AAIAADUgAgRB8IAhAAIAAjIIghAAg");
	this.shape_67.setTransform(-99.7,-85.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("ABFCMIhDibIhACbIgIAAIh5kYIBGAAIA3CBIAihVIgSgsIBEAAIA2CBIAyiBIBGAAIhyEYgABSAGIARAoIBHisIgjAAgAg4AHIARAnIAhhRIgRgog");
	this.shape_68.setTransform(-149.4,-84.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgdCOQgPgCgOgGQgNgFgMgJQgMgIgKgJQgJgKgIgLQgIgMgFgOQgFgMgDgPQgCgPAAgOQAAgNACgPQADgPAFgNQAFgNAIgLQAIgMAJgKQAKgJAMgJQAMgHANgGQAOgFAPgDQAPgDAOAAQAPAAAQADQAPADANAFQANAGALAHQAMAJALAJQAJAKAIAMQAHALAFANQAGANACAPQADAPAAANQAAAOgDAPQgCAPgGAMQgFAOgHAMQgIALgJAKQgLAJgMAIQgLAJgNAFQgNAGgPACQgQADgPAAQgOAAgPgDgAhuBGQALATARANQAQAOAVAIQAXAIAWgBQAYABAVgIQAVgIARgOQARgOALgSQALgUAFgWIgjAAQgEAPgJAMQgIANgLAJQgMAJgPAFQgQAFgRAAQgQAAgQgFQgPgFgMgKQgLgIgJgNQgHgMgFgPIgjAAQAFAWALAUgAgghLQgOAHgKALQgLAMgFAOQgGAQAAAPQAAARAGAPQAFAOALAMQAKAMAOAFQAQAHAQAAQARAAAPgHQAOgFAMgMQAJgMAGgOQAFgPABgRQgBgPgFgQQgGgOgJgMQgMgLgOgHQgPgGgRAAQgQAAgQAGg");
	this.shape_69.setTransform(-190.2,-85.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AA1CIIAAhsIhpAAIAABsIhCAAIAAkPIBCAAIAABsIBpAAIAAhsIBCAAIAAEPgABGB8IAhAAIAAhgIghAAgAhmB8IAhAAIAAhgIghAAg");
	this.shape_70.setTransform(-225.5,-85.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgZAWIAAgrIAzAAIAAArg");
	this.shape_71.setTransform(2.8,93.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgWBgIgUgGQgKgDgIgFQgIgFgHgHQgHgGgFgHQgGgJgDgIQgEgKgBgJQgDgKAAgLQAAgKADgKQABgKAEgJQADgJAGgHQAFgJAHgGQAHgGAIgFQAJgFAJgEIAVgEQALgCAKAAQAMAAALACIAUAEQAKAEAIAFIAPALQAHAGAFAIQAGAIADAJQAEAIABALQADAKAAAKQAAAJgDALQgBAKgEAJIgJARQgFAIgIAGQgHAGgHAFQgJAGgJADQgKAEgLACQgLABgLAAQgLAAgLgBgAgTg2QgKAEgHAIQgHAIgDAKQgEAMAAAMQAAANAEALQADAKAHAIQAHAIAKAEQAJAFAKAAQALAAAKgFQAJgEAHgIQAHgIADgKQAEgLAAgNQAAgMgEgMQgDgKgHgIQgHgIgJgEQgKgDgLAAQgKAAgJADg");
	this.shape_72.setTransform(-16.6,86.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhNBeQADgTAAgUIAAhyQgBgTgCgOIAnABIBJAAQAdAAAOgCIAAArQgQgCgbAAIg6AAIAAAlIAvAAQAZAAAQgBIAAAnQgQgBgZAAIgvAAIAAAhQAAAVACASg");
	this.shape_73.setTransform(-40.5,86.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgWBeQgLgCgJgDQgKgCgIgEIgNgKIgKgLIgHgOQgDgHgCgJQgBgIAAgKIAAhKQAAgXgCgLIA4AAQgCALAAAXIAABLQAAALADAHQADAIAFAGQAGAFAIACQAJADAKAAQALAAAJgDQAIgCAGgFQAGgGACgIQADgHAAgLIAAhLQAAgVgCgNIA4AAQgCANAAAVIAABLQAAAKgBAIIgFAQQgEAIgEAGQgFAGgGAFIgOAJQgIAEgJADQgJADgLABQgKABgLAAQgLAAgLgBg");
	this.shape_74.setTransform(-65.5,86.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAmBdIhQAAIgmABQACgNAAgUIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgBIAAApQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgBIAAAnQgRgBgWgBIg3AAIAAAmIBCAAQAbAAAPgCIAAArQgPgCgcAAg");
	this.shape_75.setTransform(-102.8,86.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAmIBVAAIAAgmQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_76.setTransform(-128,86.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAYAAARgCIAAArQgRgCgYAAIgdAAIAABwQAAAUACAOg");
	this.shape_77.setTransform(-153.3,86.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgcBeQADgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBwAAQAXAAARgCIAAArQgRgCgXAAIgeAAIAABwQAAAUACAOg");
	this.shape_78.setTransform(-190,86.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgbBdQACgLAAgWIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_79.setTransform(-208.5,86.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAmIBVAAIAAgmQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_80.setTransform(-228.4,86.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWBeQgLgCgJgDQgKgCgIgEIgNgKIgKgLIgHgOQgDgHgCgJQgBgIAAgKIAAhKQAAgXgCgLIA4AAQgCALAAAXIAABLQAAALADAHQADAIAFAGQAGAFAIACQAJADAKAAQALAAAJgDQAIgCAGgFQAGgGACgIQADgHAAgLIAAhLQAAgVgCgNIA4AAQgCANAAAVIAABLQAAAKgBAIIgFAQQgEAIgEAGQgFAGgGAFIgOAJQgIAEgJADQgJADgLABQgKABgLAAQgLAAgLgBg");
	this.shape_81.setTransform(178.4,50.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgVBgIgVgFQgJgEgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgDgIgCgLQgCgKAAgKQAAgKACgKQACgKADgJQADgJAGgHQAFgIAHgHQAHgGAIgFQAIgFAKgDIAVgGQAKgBALAAQALAAAMABIAUAGQAJADAJAFIAPALQAHAGAFAIQAFAIAEAIQAEAKACAJQACAKAAALQAAAKgCAKQgCAKgEAJIgJARQgGAHgGAHQgHAHgJAEQgIAGgKADQgJADgLADQgLABgLAAQgLAAgKgBgAgTg1QgKADgHAIQgGAIgEAKQgDALAAANQAAAMADAMQAEAKAGAJQAHAHAKAEQAJAEAKAAQALAAAKgEQAJgEAHgHQAGgJAEgKQADgMABgMQgBgNgDgLQgEgLgGgHQgHgIgJgDQgKgFgLAAQgKAAgJAFg");
	this.shape_82.setTransform(151.4,49.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgbBdQACgQAAgRIAAgqIg8hTIgUgbIBBAAQAEALAJAMIAbAuIAcgtQAKgPACgJIBCAAIgVAbIg7BTIAAAqQAAASACAPg");
	this.shape_83.setTransform(125.1,49.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAoBdQgFgKgOgTIgvg/QgIgIgLgRQACAOAAASIAAAyQABAWACANIg4AAQACgLAAgZIAAh0QAAgTgCgOIA5AAQADAKAPASIAvBAIATAZQgBgQgBgQIAAgzQAAgVgCgNIA4AAQgCANAAAVIAAB2QAAASACAPg");
	this.shape_84.setTransform(86.3,49.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgQgBgXAAIhCAAIAAAhIA3AAQAVAAASgCIAAAoQgRgCgWABIg3AAIAAAlIBCAAQAbAAAPgBIAAApQgQgBgbAAg");
	this.shape_85.setTransform(61.7,49.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAATACAOg");
	this.shape_86.setTransform(36.6,49.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAgBdQgBgLgEgNIgUhCIgHggQgBASgFAOIgTBCQgFAPgBAJIg0AAIgGgYIgqiFIgKgcIA7AAQABAKADAOIARBEIAFAeIAIgeIAUhFIAGgXIAsAAIAGAWIAVBGQAEAKAEAUIACgNIADgRIARhEQADgNABgLIA7AAIgKAcIgqCFQgFAQgBAIg");
	this.shape_87.setTransform(6.8,49.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_88.setTransform(-34.3,49.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_89.setTransform(-58.1,49.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQACAOAAASIAAAyQAAAWABANIg3AAQACgLAAgZIAAh0QAAgTgCgOIA4AAQAEAKAPASIAwBAIASAZQgBgQAAgQIAAgzQgBgVgCgNIA4AAQgCANAAAVIAAB2QAAASACAPg");
	this.shape_90.setTransform(-83.5,49.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgbBdQACgMAAgVIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_91.setTransform(-103.3,49.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhWBeQACgOAAgUIAAh3QAAgTgCgOIAmABIA4AAQAMgBAVAEIAOAFQAHADAEAEIAJAJQAFAFACAFIAEAMIABAOIgCAOQgBAHgCAGQgDAEgEAFQgEAFgFAEQgFAEgGADIgOAFQgWAFgMAAIgnAAIAAAcQAAATACAQgAgggFIAkAAQAIAAAFgCQAFgBAEgEQADgDACgEQACgFABgFQgBgGgCgFQgBgEgEgDQgDgDgGgCQgFgBgIgBIgkAAg");
	this.shape_92.setTransform(-121.2,49.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgCIAAAoQgRgCgWABIg3AAIAAAlIBCAAQAbAAAPgBIAAApQgQgBgbAAg");
	this.shape_93.setTransform(-157.4,49.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_94.setTransform(-181.2,49.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgWBgIgUgFQgJgEgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgEgIgCgLQgBgKAAgKQAAgKABgKQACgKAEgJQADgJAGgHQAFgIAHgHQAHgGAJgFQAIgFAJgDIAVgGQAKgBALAAQALAAALABIAVAGQAKADAIAFIAPALQAHAGAFAIQAFAIAEAIQADAKACAJQACAKAAALQAAAKgCAKQgCAKgDAJIgJARQgGAHgHAHQgHAHgIAEQgIAGgKADQgJADgLADQgLABgLAAQgKAAgMgBgAgUg1QgJADgHAIQgHAIgDAKQgDALAAANQAAAMADAMQADAKAHAJQAHAHAJAEQAKAEAKAAQALAAAKgEQAJgEAHgHQAHgJADgKQAEgMgBgMQABgNgEgLQgDgLgHgHQgHgIgJgDQgKgFgLAAQgKAAgKAFg");
	this.shape_95.setTransform(-206.5,49.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAkBcIhMAAIgnABQACgLAAgWIAAh1QAAgVgCgPIA5AAQgCANgBAXIAABtIA9AAQAeAAAOgBIAAArQgNgCgfAAg");
	this.shape_96.setTransform(-230.1,49.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_97.setTransform(197.6,13.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAVAAASgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgPgCgcAAg");
	this.shape_98.setTransform(174.5,13.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhWBeQACgOAAgUIAAh3QAAgTgCgPIAnABIA2AAQANAAAWAFIANAEQAGADAGAEIAJAJQAEAEACAGIAEAMIABAOIgBAOQgCAHgDAGQgCAEgEAEQgEAGgFAEQgFAEgHADIgNAFQgVAFgNAAIgnAAIAAAcQAAATACAQgAgggFIAlAAQAGAAAGgCQAFgBAEgEQAEgDACgFQACgEAAgGQAAgFgCgFQgCgFgEgCQgEgDgFgCQgGgCgGAAIglAAg");
	this.shape_99.setTransform(151.3,13.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAyBdQgDgOgDgKIgHgTIhJAAIgHATQgEAMgCAMIg9AAIANgcIA4iFQAGgPACgJIBCAAIAJAYIA4CFIANAcgAAYAMIgYhBIgXBBIAvAAg");
	this.shape_100.setTransform(125.7,13.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_101.setTransform(99,13.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_102.setTransform(73.6,13.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgbBdQACgQAAgRIAAgqIg8hTIgUgbIBBAAQAEALAJAMIAbAuIAcgtQAKgPACgJIBCAAIgVAbIg7BTIAAAqQAAASACAPg");
	this.shape_103.setTransform(36.3,13.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAjBeQgCgMgLgXQgGgPgEgGQgDgGgEgDQgFgDgDgCQgFgBgGgBIgbAAIAAAlQAAAVADAOIg5AAQACgOABgVIAAh2QgBgTgCgPIAoABIBBAAQAQABAMADQAMAEAJAGQAIAHAFAJQAFAKAAAMQgBAMgEAJQgDAJgIAHQgEADgGABIgPAFQALADAFAEQAGAFAGANIATAmIANAZgAgpgOIApAAQAKAAAGgGQAHgFAAgKQgBgJgFgFQgHgFgKAAIgpAAg");
	this.shape_104.setTransform(11.3,13.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_105.setTransform(-13.9,13.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgQgCgbAAg");
	this.shape_106.setTransform(-37.2,13.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ABCBdQABgOAAgVIAAgxIACgbIABgQIgMAiIgZA8QgJAXgCAKIgsAAQgBgKgJgXIgZg8IgIgWIgEgLQACAXAAATIAAAxQAAAXACAMIgzAAQACgNAAgWIAAhzQAAgTgCgQIBFAAQADAOAGARIAmBgIAnhgQAHgSACgNIBFAAQgCAOAAAVIAABzQAAAXACAMg");
	this.shape_107.setTransform(-64.3,13.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgGQgHgHgFgIQgGgHgDgKQgEgIgCgLQgBgJAAgLQAAgKABgKQACgKAEgJQADgJAGgHQAFgJAHgGQAHgGAJgFQAIgFAJgDIAVgGQAKgBALAAQALAAALABIAVAGQAKADAIAFIAPALQAHAHAFAHQAFAIAEAIQADAKACAKQACAJAAALQAAAKgCAKQgCAKgDAJIgJARQgGAHgHAHQgHAHgIAEQgIAGgKADQgJAEgLACQgLABgLAAQgKAAgMgBgAgUg1QgJADgHAIQgHAIgDAKQgDALAAANQAAAMADAMQADAKAHAJQAHAHAJAEQAKAEAKABQALgBAKgEQAJgEAHgHQAHgJADgKQAEgMgBgMQABgNgEgLQgDgLgHgHQgHgIgJgDQgKgEgLgBQgKABgKAEg");
	this.shape_108.setTransform(-93.1,13.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAmBdIhPAAIgnAAQACgLAAgVIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgQgCgbAAg");
	this.shape_109.setTransform(-117.7,13.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgIgEgKQgEgKgCgKQgCgLAAgKQAAgLACgJQACgKAEgKQAEgIAFgIQAFgHAHgHQAHgGAJgFQAIgFAKgDIAVgGQALgBAKAAQAMAAALABQALACAJAEQAJADAIAFQAIAFAHAGIAIALQAEAGADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIgBQgLABgJAEQgKADgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJADALABQAKgBAJgCQAJgCAKgEIAAgZIgNAAIgaABIAAgmQAMACAWAAIAVAAQAUAAAOgCQgBAMAAARIAAAZQAAAWABALQgVALgMAEQgMADgOACQgOACgPAAIgVgBg");
	this.shape_110.setTransform(-142.6,13.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAmBdIhQAAIgmAAQACgLAAgVIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgCIAAAqQgRgBgWAAIhBAAIAAAhIA2AAQAVAAASgCIAAAoQgRgCgWABIg2AAIAAAlIBAAAQAbAAAQgBIAAAqQgPgCgcAAg");
	this.shape_111.setTransform(-179.2,13.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AApBdQACgNAAgUIAAgsIhVAAIAAAsQAAATACAOIg4AAQACgNAAgUIAAh3QAAgUgCgNIA4AAQgCAOAAATIAAAlIBVAAIAAglQAAgWgCgLIA4AAQgCAMAAAVIAAB3QAAASACAPg");
	this.shape_112.setTransform(-204.3,13.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_113.setTransform(-229.7,13.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgJgEgJQgEgJgCgLQgCgLAAgKQAAgKACgKQACgLAEgIQAEgJAFgIQAFgIAHgGQAHgGAJgFQAIgFAKgEIAVgEQALgCAKAAQAMAAALACQALABAJADQAJAEAIAFQAIAFAHAGIAIAMQAEAFADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIAAQgLAAgJADQgKAEgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJAEALAAQAKAAAJgCQAJgDAKgEIAAgaIgNAAIgaABIAAglQAMABAWABIAVAAQAUgBAOgBQgBAMAAAQIAAAaQAAAWABAMQgVAKgMADQgMAFgOABQgOACgPAAIgVgBg");
	this.shape_114.setTransform(216.4,-22.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQABAOAAARIAAAzQAAAWACANIg3AAQACgMAAgXIAAh0QAAgVgCgNIA4AAQAFAKAOASIAwBAIASAYQgCgPABgQIAAgzQAAgUgCgOIA3AAQgCAOAAAUIAAB2QAAASACAPg");
	this.shape_115.setTransform(190.3,-22.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgbBdQACgLAAgWIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_116.setTransform(170.5,-22.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAXAAIBwAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_117.setTransform(152,-22.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgPBgQgLgCgJgDQgKgDgJgEQgIgGgHgGQgHgGgGgIQgFgIgEgJQgEgJgCgLQgCgKAAgLQAAgKACgLQACgLAEgIQAEgKAGgIQAGgIAHgHQAHgFAIgEQAIgFAKgDQAJgDALgBQALgCAJAAQAMAAAMACQALABAKAEQAJAEAIAFQAIAGAHAIQAGAGAEAHQADAHADAKIg2AJQgCgIgDgFQgEgGgFgEQgFgDgHgCQgGgCgJAAQgKAAgJADQgJAEgHAIQgGAIgEAKQgDAMAAAMQAAANADALQAEAKAHAIQAGAIAKAEQAJAEAKAAQALAAAJgEQAJgDAGgHQAFgHACgNIA2AIQgDAOgFAJQgFAKgIAHQgGAHgIAFQgIAEgJADQgJADgLACQgKABgMAAQgKAAgLgBg");
	this.shape_118.setTransform(127,-22.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAmBdIhQAAIgmABQACgNAAgUIAAh5QAAgSgCgPIAmABIBRAAQAWAAARgBIAAApQgQgBgXAAIhCAAIAAAhIA3AAQAUAAATgBIAAAnQgRgBgWgBIg3AAIAAAmIBCAAQAbAAAPgCIAAArQgPgCgcAAg");
	this.shape_119.setTransform(102.8,-22.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAkBcIhNAAIgmABQACgLAAgWIAAh1QAAgVgCgPIA4AAQgCANAAAXIAABtIA9AAQAdAAAPgBIAAArQgOgCgeAAg");
	this.shape_120.setTransform(80.9,-22.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAlBcIhOAAIgmABQACgLAAgWIAAh1QAAgVgCgPIA5AAQgCANAAAXIAABtIA9AAQAcAAAPgBIAAArQgOgCgdAAg");
	this.shape_121.setTransform(59.1,-22.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgHQgHgGgFgHQgFgJgEgIQgEgKgCgJQgCgKAAgLQAAgKACgKQACgKAEgJQAEgJAFgHQAFgJAHgGQAHgGAIgFQAJgFAJgEIAVgEQALgCAKAAQAMAAAKACIAVAEQAJAEAJAFIAPALQAHAGAFAIQAGAIADAJQADAIACALQACAKAAAKQAAAJgCALQgCAKgDAJIgJARQgFAIgIAGQgGAGgIAFQgJAGgJADQgKAEgLACQgLABgLAAQgKAAgMgBgAgUg2QgJAEgHAIQgGAIgEAKQgDAMgBAMQABANADALQAEAKAGAIQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgIQAGgIAEgKQADgLAAgNQAAgMgDgMQgEgKgGgIQgHgIgJgEQgJgDgMAAQgKAAgKADg");
	this.shape_122.setTransform(34,-22.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPBgQgLgCgJgDQgKgDgJgEQgIgGgHgGQgHgGgGgIQgFgIgEgJQgEgJgCgLQgCgKAAgLQAAgKACgLQACgLAEgIQAEgKAGgIQAGgIAHgHQAHgFAIgEQAIgFAKgDQAJgDALgBQALgCAJAAQAMAAAMACQALABAKAEQAJAEAIAFQAIAGAHAIQAGAGAEAHQADAHADAKIg2AJQgCgIgDgFQgEgGgFgEQgFgDgHgCQgGgCgJAAQgKAAgJADQgJAEgHAIQgGAIgEAKQgDAMAAAMQAAANADALQAEAKAHAIQAGAIAKAEQAJAEAKAAQALAAAJgEQAJgDAGgHQAFgHACgNIA2AIQgDAOgFAJQgFAKgIAHQgGAHgIAFQgIAEgJADQgJADgLACQgKABgMAAQgKAAgLgBg");
	this.shape_123.setTransform(7.6,-22.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgcBfQgPgDgLgGQgKgEgHgHQgHgIgEgJQgDgHgDgOIA2gFQACALAFAGQAFAFAIADQAIACAIAAIANgBIAKgEQAEgDACgDQADgEAAgFQAAgFgDgEQgDgEgFgCQgHgDgegHIgbgGQgIgCgHgFQgGgBgFgFQgFgFgDgFQgDgGgCgGIgBgNQAAgGABgGIAEgLQADgGAFgEIAJgIQAHgFATgGQALgDAWgBQAMAAALABQALACAJADQAJADAIAFQAHAFAFAGQAFAGADAGIAFAPIg3AFQgBgFgCgEQgDgEgEgCQgDgDgGgBIgLgBQgMAAgIAFQgIAFAAAHQAAAFADAEQADADAHADQAFACAdAFQAOADAKADQAKADAIAEQAHAEAFADQAFAEAEAGQADAGACAHQACAGAAAIQAAANgFAKQgEALgKAHQgFAFgHAEIgQAGQgIACgKABIgWABQgPAAgPgCg");
	this.shape_124.setTransform(-30,-22.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAYAAARgCIAAArQgRgCgYAAIgdAAIAABwQAAAUACAOg");
	this.shape_125.setTransform(-53.9,-22.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAoBdQgGgKgOgTIgtg/QgJgIgKgRQABAOAAARIAAAzQAAAWACANIg3AAQACgMAAgXIAAh0QAAgVgCgNIA4AAQAFAKAOASIAwBAIASAYQgCgPABgQIAAgzQAAgUgCgOIA3AAQgCAOAAAUIAAB2QAAASACAPg");
	this.shape_126.setTransform(-79.3,-22.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgbBdQACgLAAgWIAAh3QAAgUgCgNIA3AAQgCAMAAAVIAAB3QAAAUACANg");
	this.shape_127.setTransform(-99.1,-22.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgWBgIgUgGQgJgDgJgFQgIgFgHgHQgHgGgFgHQgFgJgEgIQgEgKgCgJQgCgKAAgLQAAgKACgKQACgKAEgJQAEgJAFgHQAFgJAHgGQAHgGAIgFQAJgFAJgEIAVgEQALgCAKAAQAMAAAKACIAVAEQAJAEAJAFIAPALQAHAGAFAIQAGAIADAJQADAIACALQACAKAAAKQAAAJgCALQgCAKgDAJIgJARQgFAIgIAGQgGAGgIAFQgJAGgJADQgKAEgLACQgLABgLAAQgKAAgMgBgAgUg2QgJAEgHAIQgGAIgEAKQgDAMgBAMQABANADALQAEAKAGAIQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgIQAGgIAEgKQADgLAAgNQAAgMgDgMQgEgKgGgIQgHgIgJgEQgJgDgMAAQgKAAgKADg");
	this.shape_128.setTransform(-119,-22.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhWBdQACgNAAgUIAAh3QAAgTgCgPIAnABIA2AAQANAAAWAFIANAEQAGADAGAEIAJAIQAEAFACAGIAEAMIABAOIgBAOQgCAHgDAFQgCAFgEAEQgEAGgFAEQgFAEgHADIgNAGQgVADgNAAIgnAAIAAAdQAAATACAPgAgggFIAlAAQAGgBAGgBQAFgCAEgDQAEgDACgFQACgEAAgGQAAgFgCgFQgCgFgEgDQgEgDgFgBQgGgBgGAAIglAAg");
	this.shape_129.setTransform(-143.9,-22.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgbBeQACgOAAgUIAAhwIgfAAIgnACIAAgrQAPACAYAAIBvAAQAZAAAQgCIAAArQgQgCgZAAIgdAAIAABwQAAAUACAOg");
	this.shape_130.setTransform(-180.9,-22.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAmBdIhPAAIgnABQACgNAAgUIAAh5QAAgSgCgPIAnABIBQAAQAWAAARgBIAAApQgRgBgWAAIhBAAIAAAhIA2AAQAUAAATgBIAAAnQgRgBgWgBIg2AAIAAAmIBAAAQAbAAAQgCIAAArQgQgCgbAAg");
	this.shape_131.setTransform(-204.1,-22.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgMBgIgVgFQgKgDgIgEQgIgFgHgGQgHgGgGgIQgGgJgEgJQgEgJgCgLQgCgLAAgKQAAgKACgKQACgLAEgIQAEgJAFgIQAFgIAHgGQAHgGAJgFQAIgFAKgEIAVgEQALgCAKAAQAMAAALACQALABAJADQAJAEAIAFQAIAFAHAGIAIAMQAEAFADAIIg1AKQgCgFgDgEIgHgHQgFgDgGgBQgHgCgIAAQgLAAgJADQgKAEgGAHQgHAIgDALQgEALAAANQAAAPAEAMQAEAMAIAHQAHAGAJADQAJAEALAAQAKAAAJgCQAJgDAKgEIAAgaIgNAAIgaABIAAglQAMABAWABIAVAAQAUgBAOgBQgBAMAAAQIAAAaQAAAWABAMQgVAKgMADQgMAFgOABQgOACgPAAIgVgBg");
	this.shape_132.setTransform(-229,-22.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#33FF00").s().p("AggCIIAAiEIhgiLIBLAAIA1BSIA2hSIBMAAIhhCLIAACEgAAKgqIASAcIBLhsIgnAAg");
	this.shape_133.setTransform(70,-85.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#33FF00").s().p("ABDCMIgOgcIhpAAIgOAcIhIAAICFkYIAKAAICFEYgAB0CAIgfhAIglAAIAeBAIAmAAgAhzCAIAmAAIAdhAIglAAgAAeBAIgehDIAAAAIgfBDIA9AAg");
	this.shape_134.setTransform(37.5,-85.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#33FF00").s().p("AhbCIIAAkPIBCAAIAADWIB1AAIAAA5gAhLB8IAighIAAjVIgiAAg");
	this.shape_135.setTransform(8.6,-85.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#33FF00").s().p("AhkCIIAAkPIBwAAQAUAAARAHQARAHALANQALALAHARQAGAPAAARQAAATgHAQQgHAOgMAMQgMAMgQAGQgQAHgTAAIguAAIAABigAhUB8IAhAAIAAj2IghAAgAgigRIAnAAQANgBAIgJQAGgKAAgNQAAgMgGgHQgIgJgNAAIgnAAg");
	this.shape_136.setTransform(-19.1,-85.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#33FF00").s().p("AgdCOQgPgCgOgGQgNgFgMgJQgMgIgKgJQgJgKgIgLQgIgMgFgOQgFgMgDgPQgCgPAAgOQAAgNACgPQADgPAFgNQAFgNAIgLQAIgMAJgKQAKgJAMgJQAMgHANgGQAOgFAPgDQAPgDAOAAQAPAAAQADQAOADAOAFQANAGAMAHQALAJAKAJQAKAKAIAMQAHALAFANQAGANACAPQADAPABANQgBAOgDAPQgCAPgGAMQgFAOgHAMQgIALgKAKQgKAJgLAIQgMAJgNAFQgOAGgOACQgQADgPAAQgOAAgPgDgAhuBGQALATARANQARAOAUAIQAWAIAXgBQAYABAVgIQAVgIASgOQAQgOALgSQAMgUAEgWIgjAAQgEAPgJAMQgHANgMAJQgNAJgOAFQgQAFgRAAQgQAAgPgFQgQgFgLgKQgMgIgJgNQgHgMgFgPIgjAAQAEAWAMAUgAgfhLQgPAHgKALQgKAMgGAOQgGAQAAAPQAAARAGAPQAGAOAKAMQAKAMAPAFQAPAHAQAAQASAAAOgHQAOgFAMgMQAJgMAGgOQAFgPAAgRQAAgPgFgQQgGgOgJgMQgMgLgOgHQgOgGgSAAQgQAAgPAGg");
	this.shape_137.setTransform(-68.2,-85.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#33FF00").s().p("AghCIIAAjUIg9AAIAAg7IC9AAIAAA7Ig+AAIAADUgAgRB8IAhAAIAAjIIghAAg");
	this.shape_138.setTransform(-99.7,-85.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#33FF00").s().p("ABFCMIhDibIhACbIgIAAIh5kYIBGAAIA3CBIAihVIgSgsIBEAAIA2CBIAyiBIBGAAIhyEYgABSAGIARAoIBHisIgjAAgAg4AHIARAnIAhhRIgRgog");
	this.shape_139.setTransform(-149.4,-84.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#33FF00").s().p("AgdCOQgPgCgOgGQgNgFgMgJQgMgIgKgJQgJgKgIgLQgIgMgFgOQgFgMgDgPQgCgPAAgOQAAgNACgPQADgPAFgNQAFgNAIgLQAIgMAJgKQAKgJAMgJQAMgHANgGQAOgFAPgDQAPgDAOAAQAPAAAQADQAPADANAFQANAGALAHQAMAJALAJQAJAKAIAMQAHALAFANQAGANACAPQADAPAAANQAAAOgDAPQgCAPgGAMQgFAOgHAMQgIALgJAKQgLAJgMAIQgLAJgNAFQgNAGgPACQgQADgPAAQgOAAgPgDgAhuBGQALATARANQAQAOAVAIQAXAIAWgBQAYABAVgIQAVgIARgOQARgOALgSQALgUAFgWIgjAAQgEAPgJAMQgIANgLAJQgMAJgPAFQgQAFgRAAQgQAAgQgFQgPgFgMgKQgLgIgJgNQgHgMgFgPIgjAAQAFAWALAUgAgghLQgOAHgKALQgLAMgFAOQgGAQAAAPQAAARAGAPQAFAOALAMQAKAMAOAFQAQAHAQAAQARAAAPgHQAOgFAMgMQAJgMAGgOQAFgPABgRQgBgPgFgQQgGgOgJgMQgMgLgOgHQgPgGgRAAQgQAAgQAGg");
	this.shape_140.setTransform(-190.2,-85.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#33FF00").s().p("AA1CIIAAhsIhpAAIAABsIhCAAIAAkPIBCAAIAABsIBpAAIAAhsIBCAAIAAEPgABGB8IAhAAIAAhgIghAAgAhmB8IAhAAIAAhgIghAAg");
	this.shape_141.setTransform(-225.5,-85.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgaAXIAAgtIA1AAIAAAtg");
	this.shape_142.setTransform(13.3,99.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgXBkQgLgCgKgDQgKgEgJgFQgJgFgHgHQgHgHgFgIQgGgIgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgJQAEgJAGgJQAFgIAHgGQAIgHAIgFQAJgFAKgEQAKgDAMgCQALgCALAAQAMAAAMACQALACAKADQAKAEAJAFQAJAFAHAGQAHAHAGAIQAFAIAEAJQAEAKACAKQACALAAALQAAAKgCALQgCAKgEAKQgEAJgGAJQgFAIgIAHQgHAGgJAGQgIAFgKAEQgLADgLACQgLACgMAAQgLAAgMgCgAgVg4QgKAEgHAIQgHAIgDALQgEAMAAANQAAANAEAMQADALAHAIQAHAJAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgJADgLQAEgMAAgNQAAgNgEgMQgDgLgHgIQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_143.setTransform(-6.9,91.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AhRBjQACgUAAgVIAAh4QAAgUgCgPIAoABIBNAAQAfAAAPgCIAAAtQgRgBgdAAIg9AAIAAAmIAyAAQAbAAARgBIAAApQgRgBgbAAIgyAAIAAAiQAAAXADATg");
	this.shape_144.setTransform(-31.7,91.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgYBiQgLgBgKgDQgKgDgIgEQgIgFgGgFQgGgFgFgHQgEgGgDgJQgDgHgCgJQgBgJAAgKIAAhPQAAgXgCgMIA7AAQgDAMAAAXIAABPQAAAMADAIQADAIAGAGQAGAGAJACQAJACALAAQALAAAJgCQAJgCAGgGQAGgGADgIQADgIAAgMIAAhPQAAgVgCgOIA7AAQgCANAAAWIAABPQAAALgCAJQgCAJgDAHQgDAJgGAGQgEAHgHAFQgHAGgIADQgIAEgKAEIgUADQgLACgLAAQgMAAgMgCg");
	this.shape_145.setTransform(-57.8,92.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoABQACgNAAgWIAAh/QAAgTgCgPIAoABIBVAAQAXAAASgDIAAAtQgRgBgYgBIhFAAIAAAjIA5AAQAWAAATgBIAAApQgSgBgXAAIg5AAIAAAnIBEAAQAcAAARgBIAAAsQgRgCgcAAg");
	this.shape_146.setTransform(-96.6,91.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AArBiQADgOAAgVIAAguIhbAAIAAAuQABAUACAPIg7AAQACgNAAgWIAAh9QAAgVgCgOIA7AAQgCAPgBAUIAAAnIBbAAIAAgnQAAgXgDgMIA7AAQgCANAAAWIAAB9QAAATACAQg");
	this.shape_147.setTransform(-122.8,91.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgcBjQABgPAAgVIAAh1IggAAQgSAAgXACIAAguQAQACAZAAIB2AAQAZAAARgCIAAAuQgRgCgZAAIggAAIAAB1QAAAVACAPg");
	this.shape_148.setTransform(-149.3,91.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgcBjQABgPAAgVIAAh1IgfAAQgUAAgWACIAAguQAQACAZAAIB2AAQAZAAARgCIAAAuQgRgCgZAAIggAAIAAB1QAAAVADAPg");
	this.shape_149.setTransform(-187.4,91.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgcBiQACgNAAgWIAAh9QAAgVgCgOIA5AAQgCANAAAWIAAB9QAAAVACAOg");
	this.shape_150.setTransform(-206.6,91.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AArBiQACgOABgVIAAguIhbAAIAAAuQAAAUADAPIg7AAQACgNAAgWIAAh9QAAgVgCgOIA7AAQgDAPAAAUIAAAnIBbAAIAAgnQgBgXgCgMIA7AAQgCANAAAWIAAB9QAAATACAQg");
	this.shape_151.setTransform(-227.3,91.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgYBjQgLgCgKgDQgKgDgIgEQgIgFgGgFQgGgGgFgGQgEgGgDgJQgDgHgCgJQgBgJAAgKIAAhPQAAgXgCgMIA7AAQgDAMAAAXIAABPQAAAMADAIQADAJAGAFQAGAFAJADQAJADALgBQALABAJgDQAJgDAGgFQAGgFADgJQADgIAAgMIAAhPQAAgVgCgOIA7AAQgCAOAAAVIAABPQAAALgCAJQgCAJgDAHQgDAJgGAGQgEAGgHAGQgHAFgIAEQgIAFgKACIgUAFQgLABgLAAQgMAAgMgBg");
	this.shape_152.setTransform(196.2,54.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgXBkQgLgCgKgDQgKgEgJgFQgJgFgHgHQgHgHgFgIQgGgIgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgJQAEgJAGgJQAFgIAHgGQAIgHAIgFQAJgFAKgEQAKgDAMgCQALgCALAAQAMAAAMACQALACAKADQAKAEAJAFQAJAFAHAGQAHAHAGAIQAFAIAEAJQAEAKACAKQACALAAALQAAAKgCALQgCAKgEAKQgEAJgGAJQgFAIgIAHQgHAGgJAGQgIAFgKAEQgLADgLACQgLACgMAAQgLAAgMgCgAgVg4QgKAEgHAIQgHAIgDALQgEAMAAANQAAANAEAMQADALAHAIQAHAJAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgJADgLQAEgMAAgNQAAgNgEgMQgDgLgHgIQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_153.setTransform(168.1,53.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgcBiQACgSAAgRIAAgsIg/hXQgGgKgPgTIBFAAQAEAMAIANIAdAwIAegwQAKgQACgJIBGAAIgXAdIg+BXIAAAsQAAASADARg");
	this.shape_154.setTransform(140.7,53.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAqBiQgGgLgPgTIgwhCIgUgbQACAPAAASIAAA1QAAAXACAOIg6AAQACgNAAgYIAAh7QAAgUgCgPIA7AAQAFAKAPAUIAyBDQAKALAJAPQgBgQAAgRIAAg2QAAgVgCgPIA6AAQgCAOAAAWIAAB7QAAAUACAQg");
	this.shape_155.setTransform(100.3,53.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoABQACgNAAgWIAAh/QAAgTgCgPIAoABIBVAAQAXAAASgCIAAAsQgSgCgXAAIhFAAIAAAjIA5AAQAWAAATgCIAAAqQgSgCgXABIg5AAIAAAnIBEAAQAcAAARgCIAAAtQgRgCgcAAg");
	this.shape_156.setTransform(74.8,53.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AArBiQACgOABgVIAAguIhbAAIAAAuQAAAUADAPIg7AAQACgNAAgWIAAh9QAAgVgCgOIA7AAQgDAPAAAUIAAAnIBbAAIAAgnQgBgXgCgMIA7AAQgCANAAAWIAAB9QAAATACAQg");
	this.shape_157.setTransform(48.6,53.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAiBiQgCgLgEgPIgVhFQgEgKgDgYQgCATgFAPIgUBFQgFARgBAJIg2AAIgHgaIgsiMIgKgdIA+AAQABAKADAQIASBHIAFAgIAIggIAWhIIAGgZIAvAAIAGAYIAWBJQADAKAFAWIACgOIADgTIARhGQAEgPABgLIA+AAIgLAdIgrCMIgHAag");
	this.shape_158.setTransform(17.5,53.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgdBkQgRgEgLgFQgKgFgHgIQgIgIgEgJQgDgIgDgPIA5gEQABAKAGAIQAFAEAIADQAIAEAJAAQAHgBAHgBQAGgCAEgDQAFgCACgEQACgEAAgFQAAgGgDgEQgDgEgFgCQgHgEgggGQgTgDgJgDQgIgDgIgEQgHgDgFgFIgIgKQgDgGgCgHQgCgGAAgHQAAgHACgGQABgGAEgGQACgFAFgFIAKgJQAIgEAUgHQAKgDAYgCQANAAALADQAMABAJADQAKAEAIAFQAHAFAGAGQAFAGADAHQADAFADALIg6AFQgBgFgDgFQgDgDgEgDQgEgDgGgBQgFgBgGAAQgNgBgIAGQgIAFAAAIQAAAGADADQADADAHADQAFADAeAFIAaAGIATAIQAHADAGAEQAFAFAEAFQADAGACAHQACAIAAAHQAAAOgFALQgFALgJAIQgGAFgHAEQgIAEgJACIgTAEIgXABQgPAAgQgCg");
	this.shape_159.setTransform(-25.2,53.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgdBjQADgPAAgVIAAh1IghAAQgSAAgXACIAAguQAQACAZAAIB1AAQAZAAASgCIAAAuQgSgCgZAAIgeAAIAAB1QAAAVABAPg");
	this.shape_160.setTransform(-50.1,53.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAqBiQgGgLgPgTIgwhCIgUgbQACAPAAASIAAA1QAAAXACAOIg6AAQACgNAAgYIAAh7QAAgUgCgPIA7AAQAFAKAPAUIAyBDQAKALAJAPQgBgQAAgRIAAg2QAAgVgCgPIA6AAQgCAOAAAWIAAB7QAAAUACAQg");
	this.shape_161.setTransform(-76.6,53.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgcBiQACgNAAgWIAAh9QAAgVgCgOIA5AAQgCANAAAWIAAB9QAAAVACAOg");
	this.shape_162.setTransform(-97.2,53.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AhaBiQACgOAAgVIAAh+QAAgTgCgPIAoABIA6AAQANAAAXAEIAOAFIAMAHQAFAEAEAFQAEAFADAGIAEANIABAOIgBAPQgBAHgDAGQgDAFgEAFQgEAFgGAEIgMAIIgOAGQgWAEgOAAIgpAAIAAAeQAAAUACAQgAgigGIAnAAQAHAAAGgCQAFgBAEgEQAEgDACgFQACgEAAgGQAAgHgCgEQgCgFgEgDQgDgDgGgCQgGgBgHAAIgnAAg");
	this.shape_163.setTransform(-115.8,53.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoABQACgNAAgWIAAh/QAAgTgCgPIAoABIBVAAQAXAAASgCIAAAsQgSgCgXAAIhFAAIAAAjIA5AAQAWAAATgCIAAAqQgSgCgXABIg5AAIAAAnIBEAAQAcAAARgCIAAAtQgRgCgcAAg");
	this.shape_164.setTransform(-153.4,53.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgdBkQgRgEgLgFQgKgFgHgIQgIgIgEgJQgDgIgDgPIA5gEQABAKAGAIQAFAEAIADQAIAEAJAAQAHgBAHgBQAGgCAEgDQAFgCACgEQACgEAAgFQAAgGgDgEQgDgEgFgCQgHgEgggGQgTgDgJgDQgIgDgIgEQgHgDgFgFIgIgKQgDgGgCgHQgCgGAAgHQAAgHACgGQABgGAEgGQACgFAFgFIAKgJQAIgEAUgHQAKgDAYgCQANAAALADQAMABAJADQAKAEAIAFQAHAFAGAGQAFAGADAHQADAFADALIg6AFQgBgFgDgFQgDgDgEgDQgEgDgGgBQgFgBgGAAQgNgBgIAGQgIAFAAAIQAAAGADADQADADAHADQAFADAeAFIAaAGIATAIQAHADAGAEQAFAFAEAFQADAGACAHQACAIAAAHQAAAOgFALQgFALgJAIQgGAFgHAEQgIAEgJACIgTAEIgXABQgPAAgQgCg");
	this.shape_165.setTransform(-178.1,53.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgXBkQgLgCgKgDQgKgEgJgFQgJgFgHgHQgHgHgFgIQgGgIgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgJQAEgJAGgJQAFgIAHgGQAIgHAIgFQAJgFAKgEQAKgDAMgCQALgCALAAQAMAAAMACQALACAKADQAKAEAJAFQAJAFAHAGQAHAHAGAIQAFAIAEAJQAEAKACAKQACALAAALQAAAKgCALQgCAKgEAKQgEAJgGAJQgFAIgIAHQgHAGgJAGQgIAFgKAEQgLADgLACQgLACgMAAQgLAAgMgCgAgVg4QgKAEgHAIQgHAIgDALQgEAMAAANQAAANAEAMQADALAHAIQAHAJAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgJADgLQAEgMAAgNQAAgNgEgMQgDgLgHgIQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_166.setTransform(-204.5,53.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAnBhIhRAAIgpABQACgMAAgXIAAh7QAAgXgCgOIA8AAQgDANAAAYIAABzIBBAAQAeAAAPgCIAAAuQgOgCgfAAg");
	this.shape_167.setTransform(-229.1,53.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgdBjQgRgDgLgGQgKgEgHgIQgIgHgEgKQgDgIgDgPIA5gEQABAKAGAIQAFAEAIAEQAIACAJAAQAHAAAHgBQAGgBAEgEQAFgCACgEQACgEAAgFQAAgGgDgEQgDgEgFgCQgHgDgggHQgTgEgJgDQgIgCgIgFQgHgBgFgGIgIgKQgDgGgCgGQgCgHAAgHQAAgHACgGQABgGAEgGQACgFAFgFIAKgJQAIgFAUgGQAKgDAYgBQANAAALACQAMABAJADQAKAEAIAFQAHAFAGAHQAFAFADAHQADAFADALIg6AFQgBgFgDgFQgDgEgEgCQgEgDgGgBQgFgCgGABQgNAAgIAFQgIAFAAAIQAAAGADADQADADAHAEQAFACAeAFIAaAGIATAHQAHAFAGADQAFAEAEAGQADAHACAHQACAHAAAHQAAAOgFALQgFALgJAIQgGAFgHAEQgIAEgJACIgTAEIgXABQgPAAgQgDg");
	this.shape_168.setTransform(216.4,15.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoAAQACgMAAgWIAAh/QAAgTgCgQIAoABIBVAAQAXAAASgBIAAAsQgRgBgYAAIhFAAIAAAiIA5AAQAWAAATgCIAAAqQgSgBgXgBIg5AAIAAAoIBEAAQAdAAAQgCIAAAsQgQgBgdAAg");
	this.shape_169.setTransform(192.4,15.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AhaBiQACgOAAgVIAAh+QAAgTgCgPIAoABIA6AAQANAAAXAEIAOAFIAMAHQAFAEAEAFQAEAFADAGIAEANIABAOIgBAPQgBAHgDAGQgDAFgEAFQgEAFgGAEIgMAIIgOAGQgWAEgOAAIgpAAIAAAeQAAAUACAQgAgigGIAnAAQAHAAAGgCQAFgBAEgEQAEgDACgFQACgEAAgGQAAgHgCgEQgCgFgEgDQgDgDgGgCQgGgBgHAAIgnAAg");
	this.shape_170.setTransform(168.2,15.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AA0BiQgCgPgEgLIgHgUIhMAAIgIAUQgFANgBANIhAAAQAEgIAJgVIA7iMQAHgRACgJIBFAAIAJAaIA7CMIANAdgAAZAMIgZhEIgYBEIAxAAg");
	this.shape_171.setTransform(141.5,15.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAsBiQACgOAAgVIAAguIhaAAIAAAuQAAAUACAPIg7AAQACgNAAgWIAAh9QAAgVgCgOIA7AAQgCAPAAAUIAAAnIBaAAIAAgnQAAgXgCgMIA6AAQgCANAAAWIAAB9QAAATACAQg");
	this.shape_172.setTransform(113.7,15.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgdBjQgRgDgLgGQgKgEgHgIQgIgHgEgKQgDgIgDgPIA5gEQABAKAGAIQAFAEAIAEQAIACAJAAQAHAAAHgBQAGgBAEgEQAFgCACgEQACgEAAgFQAAgGgDgEQgDgEgFgCQgHgDgggHQgTgEgJgDQgIgCgIgFQgHgBgFgGIgIgKQgDgGgCgGQgCgHAAgHQAAgHACgGQABgGAEgGQACgFAFgFIAKgJQAIgFAUgGQAKgDAYgBQANAAALACQAMABAJADQAKAEAIAFQAHAFAGAHQAFAFADAHQADAFADALIg6AFQgBgFgDgFQgDgEgEgCQgEgDgGgBQgFgCgGABQgNAAgIAFQgIAFAAAIQAAAGADADQADADAHAEQAFACAeAFIAaAGIATAHQAHAFAGADQAFAEAEAGQADAHACAHQACAHAAAHQAAAOgFALQgFALgJAIQgGAFgHAEQgIAEgJACIgTAEIgXABQgPAAgQgDg");
	this.shape_173.setTransform(87.2,15.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgcBiQACgSAAgRIAAgsIg/hXQgGgKgPgTIBFAAQAEAMAJANIAcAwIAegwQAKgQACgJIBGAAIgXAdIg+BXIAAAsQAAASADARg");
	this.shape_174.setTransform(48.5,15.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAlBiQgDgMgLgZIgKgVQgEgGgFgEQgEgDgDgCQgFgBgHAAIgcAAIAAAmQAAAWACAOIg6AAQACgOAAgVIAAh9QAAgUgCgPIAoABIBFAAQARAAANADQANAEAJAHQAJAHAFAKQAEAKAAANQAAAMgEAKQgEAKgIAGQgFAEgFABIgQAFQALADAGAFQAGAGAGAMIAUApIANAZgAgrgPIArAAQAKAAAHgGQAHgFAAgLQAAgJgHgGQgGgFgLAAIgrAAg");
	this.shape_175.setTransform(22.4,15.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgdBjQACgPABgVIAAh1IghAAQgSAAgXACIAAguQAQACAZAAIB1AAQAaAAARgCIAAAuQgRgCgaAAIgeAAIAAB1QAAAVABAPg");
	this.shape_176.setTransform(-3.9,15.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoAAQACgMAAgWIAAh/QAAgTgCgQIAoABIBVAAQAXAAASgBIAAAsQgRgBgYAAIhFAAIAAAiIA5AAQAWAAATgCIAAAqQgSgBgXgBIg5AAIAAAoIBEAAQAdAAAQgCIAAAsQgQgBgdAAg");
	this.shape_177.setTransform(-28.1,15.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("ABFBiQACgPAAgWIAAgzIABgdIACgQIgNAjIgaA/QgKAYgCALIguAAQgBgLgKgYIgZg/IgKgXIgEgMQADAZAAAUIAAAzQAAAXACAOIg2AAQACgPAAgWIAAh5QAAgVgCgQIBIAAQADAOAIATIAnBkIAohkQAIgTACgOIBJAAQgCAPAAAWIAAB5QAAAYACANg");
	this.shape_178.setTransform(-56.4,15.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgXBkQgLgCgKgDQgKgEgJgFQgJgFgHgHQgHgHgFgIQgGgIgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgJQAEgJAGgJQAFgIAHgGQAIgHAIgFQAJgFAKgEQAKgDAMgCQALgCALAAQAMAAAMACQALACAKADQAKAEAJAFQAJAFAHAGQAHAHAGAIQAFAIAEAJQAEAKACAKQACALAAALQAAAKgCALQgCAKgEAKQgEAJgGAJQgFAIgIAHQgHAGgJAGQgIAFgKAEQgLADgLACQgLACgMAAQgLAAgMgCgAgVg4QgKAEgHAIQgHAIgDALQgEAMAAANQAAANAEAMQADALAHAIQAHAJAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgJADgLQAEgMAAgNQAAgNgEgMQgDgLgHgIQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_179.setTransform(-86.4,15.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoAAQACgMAAgWIAAh/QAAgTgCgQIAoABIBVAAQAXAAASgBIAAAsQgSgBgXAAIhFAAIAAAiIA5AAQAWAAATgCIAAAqQgSgBgXgBIg5AAIAAAoIBEAAQAcAAARgCIAAAsQgQgBgdAAg");
	this.shape_180.setTransform(-112.1,15.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgNBlIgWgFQgKgDgIgFQgJgFgHgGQgIgHgGgIQgGgJgEgKQgEgKgCgLQgDgMAAgKQAAgLACgLQACgKAEgKQAEgJAGgIQAFgIAIgHQAHgGAJgFQAJgFAKgEQAKgDAMgCQAMgCAKAAQANAAAMACQALABAKAEQAJADAJAGQAIAFAHAHQAFAFAEAGIAHAPIg4ALIgFgKQgDgEgEgDQgGgEgGgCQgHgBgJAAQgLAAgKAEQgKAEgHAHQgHAIgDAMQgEALAAAOQAAAQAEAMQAFANAIAIQAGAGAKADQAKADALAAQALAAAJgCQAKgCAKgEIAAgbIgNAAIgcABIAAgoQANACAXAAIAWAAQAVAAAPgCQgCANAAASIAAAaQAAAXACAMQgWALgMAEQgOAEgOACQgPACgPAAQgLAAgMgBg");
	this.shape_181.setTransform(-138,15.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoAAQACgMAAgWIAAh/QAAgTgCgQIAoABIBVAAQAXAAASgBIAAAsQgSgBgXAAIhFAAIAAAiIA5AAQAWAAATgCIAAAqQgSgBgXgBIg5AAIAAAoIBEAAQAcAAARgCIAAAsQgQgBgdAAg");
	this.shape_182.setTransform(-176,15.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AArBiQACgOAAgVIAAguIhaAAIAAAuQAAAUACAPIg6AAQACgNAAgWIAAh9QAAgVgCgOIA6AAQgCAPAAAUIAAAnIBaAAIAAgnQAAgXgCgMIA7AAQgCANAAAWIAAB9QAAATACAQg");
	this.shape_183.setTransform(-202.2,15.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgcBjQACgPAAgVIAAh1IghAAQgSAAgXACIAAguQAQACAZAAIB1AAQAZAAASgCIAAAuQgSgCgZAAIgfAAIAAB1QAAAVACAPg");
	this.shape_184.setTransform(-228.7,15.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgNBlIgWgFQgKgDgIgFQgJgFgHgGQgIgHgGgIQgGgJgEgKQgEgKgCgLQgDgMAAgKQAAgLACgLQACgKAEgKQAEgJAGgIQAFgIAIgHQAHgGAJgFQAJgFAKgEQAKgDAMgCQAMgCAKAAQANAAAMACQALABAKAEQAJADAJAGQAIAFAHAHQAFAFAEAGIAHAPIg4ALIgFgKQgDgEgEgDQgGgEgGgCQgHgBgJAAQgLAAgKAEQgKAEgHAHQgHAIgDAMQgEALAAAOQAAAQAEAMQAFANAIAIQAGAGAKADQAKADALAAQALAAAJgCQAKgCAKgEIAAgbIgNAAIgcABIAAgoQANACAXAAIAWAAQAVAAAPgCQgCANAAASIAAAaQAAAXACAMQgWALgMAEQgOAEgOACQgPACgPAAQgLAAgMgBg");
	this.shape_185.setTransform(235.9,-22.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAqBiQgGgLgPgTIgwhCIgUgbQACAPAAASIAAA1QAAAXACAOIg6AAQACgNAAgYIAAh7QAAgUgCgPIA7AAQAFAKAPAUIAyBDQAKALAJAPQgBgQAAgRIAAg2QAAgVgCgPIA6AAQgCAOAAAWIAAB7QAAAUACAQg");
	this.shape_186.setTransform(208.6,-22.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgdBiQACgNAAgWIAAh9QAAgVgCgOIA7AAQgCANAAAWIAAB9QAAAVACAOg");
	this.shape_187.setTransform(188.1,-22.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgdBjQACgPAAgVIAAh1IgfAAQgUAAgWACIAAguQAQACAZAAIB1AAQAaAAARgCIAAAuQgRgCgaAAIgeAAIAAB1QAAAVACAPg");
	this.shape_188.setTransform(168.8,-22.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgQBkQgLgBgKgEQgLgDgIgFQgJgFgIgGQgHgGgGgJQgGgIgEgKQgEgKgCgLQgCgLAAgLQAAgLACgLQACgLAEgKQAEgKAHgIQAGgJAIgHQAHgGAJgEQAIgFAKgDQAKgDALgBQALgCAKAAQANAAAMACQAMACAKAEQAKAEAJAFQAIAGAHAIQAGAHAEAHQAEAIADAKIg4AKQgCgIgEgHQgEgFgFgFQgGgDgHgDQgHgBgJAAQgKAAgKAEQgKAEgGAIQgHAIgEALQgDAMAAANQAAANADAMQAEALAHAIQAHAJAKAEQAKAEALAAQALAAAJgEQAKgEAGgHQAGgHACgNIA4AHQgDAPgGAKQgFAKgIAIQgHAHgIAEQgIAFgJADQgKAEgLABQgLACgNAAQgKAAgMgCg");
	this.shape_189.setTransform(142.8,-22.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoABQACgNAAgWIAAh/QAAgTgCgPIAoABIBVAAQAXAAASgCIAAAsQgSgCgXAAIhFAAIAAAjIA5AAQAWAAATgCIAAAqQgSgCgXABIg5AAIAAAnIBFAAQAcAAAQgCIAAAtQgRgCgcAAg");
	this.shape_190.setTransform(117.6,-22.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAnBhIhRAAIgpABQACgMAAgXIAAh7QAAgXgCgOIA8AAQgDANAAAXIAAB0IBBAAQAeAAAPgCIAAAuQgOgCgfAAg");
	this.shape_191.setTransform(94.7,-22.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAnBhIhRAAIgpABQACgMAAgXIAAh7QAAgXgCgOIA8AAQgDANAAAXIAAB0IBBAAQAeAAAPgCIAAAuQgOgCgfAAg");
	this.shape_192.setTransform(72,-22.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgXBkQgLgCgKgDQgKgEgJgFQgJgFgHgHQgHgHgFgIQgGgIgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgJQAEgJAGgJQAFgIAHgGQAIgHAIgFQAJgFAKgEQAKgDAMgCQALgCALAAQAMAAAMACQALACAKADQAKAEAJAFQAJAFAHAGQAHAHAGAIQAFAIAEAJQAEAKACAKQACALAAALQAAAKgCALQgCAKgEAKQgEAJgGAJQgFAIgIAHQgHAGgJAGQgIAFgKAEQgLADgLACQgLACgMAAQgLAAgMgCgAgVg4QgKAEgHAIQgHAIgDALQgEAMAAANQAAANAEAMQADALAHAIQAHAJAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgJADgLQAEgMAAgNQAAgNgEgMQgDgLgHgIQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_193.setTransform(45.9,-22.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgQBkQgLgBgKgEQgLgDgIgFQgJgFgIgGQgHgGgGgJQgGgIgEgKQgEgKgCgLQgCgLAAgLQAAgLACgLQACgLAEgKQAEgKAHgIQAGgJAIgHQAHgGAJgEQAIgFAKgDQAKgDALgBQALgCAKAAQANAAAMACQAMACAKAEQAKAEAJAFQAIAGAHAIQAGAHAEAHQAEAIADAKIg4AKQgCgIgEgHQgEgFgFgFQgGgDgHgDQgHgBgJAAQgKAAgKAEQgKAEgGAIQgHAIgEALQgDAMAAANQAAANADAMQAEALAHAIQAHAJAKAEQAKAEALAAQALAAAJgEQAKgEAGgHQAGgHACgNIA4AHQgDAPgGAKQgFAKgIAIQgHAHgIAEQgIAFgJADQgKAEgLABQgLACgNAAQgKAAgMgCg");
	this.shape_194.setTransform(18.4,-22.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgdBkQgRgEgLgFQgKgFgHgIQgIgIgEgJQgDgIgDgPIA5gEQABAKAGAIQAFAEAIADQAIAEAJAAQAHgBAHgBQAGgCAEgDQAFgCACgEQACgEAAgFQAAgGgDgEQgDgEgFgCQgHgEgggGQgTgDgJgDQgIgDgIgFQgHgCgFgFIgIgKQgDgGgCgHQgCgGAAgHQAAgHACgGQABgGAEgGQACgFAFgFIAKgJQAIgEAUgHQAKgDAYgCQANAAALADQAMABAJADQAKAEAIAFQAHAFAGAGQAFAGADAHQADAFADALIg6AFQgBgFgDgFQgDgDgEgDQgEgDgGgBQgFgBgGAAQgNgBgIAGQgIAFAAAIQAAAGADADQADADAHADQAFADAeAFIAaAGIATAIQAHADAGAEQAFAFAEAFQADAGACAHQACAIAAAHQAAAOgFALQgFALgJAIQgGAFgHAEQgIAEgJACIgTAEIgXABQgPAAgQgCg");
	this.shape_195.setTransform(-20.7,-22.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgdBjQADgPAAgVIAAh1IghAAQgSAAgXACIAAguQAQACAZAAIB1AAQAZAAASgCIAAAuQgSgCgZAAIgeAAIAAB1QAAAVABAPg");
	this.shape_196.setTransform(-45.6,-22.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAqBiQgGgLgPgTIgwhCIgUgbQACAPAAASIAAA1QAAAXACAOIg6AAQACgNAAgYIAAh7QAAgUgCgPIA7AAQAFAKAPAUIAyBDQAKALAJAPQgBgQAAgRIAAg2QAAgVgCgPIA6AAQgCAOAAAWIAAB7QAAAUACAQg");
	this.shape_197.setTransform(-72.1,-22.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgcBiQACgNAAgWIAAh9QAAgVgCgOIA5AAQgCANAAAWIAAB9QAAAVACAOg");
	this.shape_198.setTransform(-92.7,-22.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgXBkQgLgCgKgDQgKgEgJgFQgJgFgHgHQgHgHgFgIQgGgIgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgJQAEgJAGgJQAFgIAHgGQAIgHAIgFQAJgFAKgEQAKgDAMgCQALgCALAAQAMAAAMACQALACAKADQAKAEAJAFQAJAFAHAGQAHAHAGAIQAFAIAEAJQAEAKACAKQACALAAALQAAAKgCALQgCAKgEAKQgEAJgGAJQgFAIgIAHQgHAGgJAGQgIAFgKAEQgLADgLACQgLACgMAAQgLAAgMgCgAgVg4QgKAEgHAIQgHAIgDALQgEAMAAANQAAANAEAMQADALAHAIQAHAJAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgJADgLQAEgMAAgNQAAgNgEgMQgDgLgHgIQgHgIgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_199.setTransform(-113.4,-22.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AhaBiQACgOAAgVIAAh+QAAgTgCgPIAoABIA6AAQANAAAXAEIAOAFIAMAHQAFAEAEAFQAEAFADAGIAEANIABAOIgBAPQgBAHgDAGQgDAFgEAFQgEAFgGAEIgMAIIgOAGQgWAEgOAAIgpAAIAAAeQAAAUACAQgAgigGIAnAAQAHAAAGgCQAFgBAEgEQAEgDACgFQACgEAAgGQAAgHgCgEQgCgFgEgDQgDgDgGgCQgGgBgHAAIgnAAg");
	this.shape_200.setTransform(-139.4,-22.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgcBjQACgPAAgVIAAh1IghAAQgSAAgXACIAAguQAQACAZAAIB1AAQAZAAASgCIAAAuQgSgCgZAAIgfAAIAAB1QAAAVACAPg");
	this.shape_201.setTransform(-177.8,-22.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAoBiIhUAAIgoABQACgNAAgWIAAh/QAAgTgCgPIAoABIBVAAQAXAAASgCIAAAsQgSgCgXAAIhFAAIAAAjIA5AAQAWAAATgCIAAAqQgSgCgXABIg5AAIAAAnIBFAAQAcAAAQgCIAAAtQgQgCgdAAg");
	this.shape_202.setTransform(-202,-22.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgNBlIgWgFQgKgDgIgFQgJgFgHgGQgIgHgGgIQgGgJgEgKQgEgKgCgLQgDgMAAgKQAAgLACgLQACgKAEgKQAEgJAGgIQAFgIAIgHQAHgGAJgFQAJgFAKgEQAKgDAMgCQAMgCAKAAQANAAAMACQALABAKAEQAJADAJAGQAIAFAHAHQAFAFAEAGIAHAPIg4ALIgFgKQgDgEgEgDQgGgEgGgCQgHgBgJAAQgLAAgKAEQgKAEgHAHQgHAIgDAMQgEALAAAOQAAAQAEAMQAFANAIAIQAGAGAKADQAKADALAAQALAAAJgCQAKgCAKgEIAAgbIgNAAIgcABIAAgoQANACAXAAIAWAAQAVAAAPgCQgCANAAASIAAAaQAAAXACAMQgWALgMAEQgOAEgOACQgPACgPAAQgLAAgMgBg");
	this.shape_203.setTransform(-227.9,-22.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#33FF00").s().p("AghCMIAAiHIhjiQIBNAAIA3BVIA4hVIBNAAIhjCQIAACHgAAKgrIAUAcIBMhuIgoAAg");
	this.shape_204.setTransform(78,-84.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#33FF00").s().p("ABFCQIgOgcIhtAAIgOAcIhKAAICJkfIAKAAICKEfgAB3CEIgfhCIgmAAIAeBCIAnAAgAh2CEIAmAAIAehCIgmAAgAAfBCIgfhEIAAAAIghBEIBAAAg");
	this.shape_205.setTransform(44.8,-85);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#33FF00").s().p("AheCMIAAkXIBEAAIAADcIB5AAIAAA7gAhMB/IAhghIAAjbIghAAg");
	this.shape_206.setTransform(15.2,-84.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#33FF00").s().p("AhnCMIAAkXIB0AAQAUAAASAHQAQAHAMANQAMAMAGARQAHAQAAASQAAATgIARQgGAPgNAMQgMALgQAHQgRAHgTAAIgwAAIAABlgAhVB/IAhAAIAAj8IghAAgAgjgSIApAAQAMAAAIgKQAIgJgBgOQABgMgIgIQgHgKgNABIgpAAg");
	this.shape_207.setTransform(-13.2,-84.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#33FF00").s().p("AgfCSQgOgDgOgGQgOgFgMgIQgNgIgKgKQgJgLgJgLQgHgMgGgOQgFgOgDgOQgDgPABgPQgBgOADgPQADgPAFgNQAGgOAHgMQAJgMAJgKQAKgKANgIQAMgIAOgGQAOgGAOgCQAQgDAPAAQAQAAAPADQAPACAOAGQAOAGAMAIQAMAIAKAKQAKAKAIAMQAIAMAFAOQAGANACAPQADAPAAAOQAAAPgDAPQgCAOgGAOQgFAOgIAMQgIALgKALQgKAKgMAIQgMAIgOAFQgOAGgPADQgPADgQAAQgPAAgQgDgAhxBHQALAUARAOQASAOAVAIQAWAIAYAAQAYAAAXgIQAVgIARgOQARgOAMgUQAMgTAEgXIgkAAQgEAPgIANQgJANgMAJQgMAJgQAFQgQAGgRAAQgRAAgPgGQgQgFgMgJQgMgJgJgNQgJgNgEgPIgkAAQAFAXAMATgAgghNQgPAGgLAMQgKAMgGAPQgGAQAAAQQAAARAGAQQAGAPAKAMQALALAPAGQAPAHARAAQASAAAPgHQAPgGALgLQAKgMAGgPQAGgQAAgRQAAgQgGgQQgGgPgKgMQgLgMgPgGQgPgGgSAAQgRAAgPAGg");
	this.shape_208.setTransform(-63.4,-84.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#33FF00").s().p("AgiCMIAAjaIg+AAIAAg9IDBAAIAAA9IhAAAIAADagAgRB/IAiAAIAAjNIgiAAg");
	this.shape_209.setTransform(-95.7,-84.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#33FF00").s().p("ABHCRIhFigIhBCgIgJAAIh8khIBIAAIA5CFIAihYIgSgtIBFAAIA4CEIA0iEIBHAAIh1EhgABUAGIASAqIBJiyIgkAAgAg5AHIARAoIAihTIgRgpg");
	this.shape_210.setTransform(-146.6,-84.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#33FF00").s().p("AgfCSQgOgDgOgGQgOgFgNgIQgMgIgJgKQgLgLgHgLQgIgMgGgOQgFgOgDgOQgDgPABgPQgBgOADgPQADgPAFgNQAGgOAIgMQAHgMALgKQAJgKAMgIQANgIAOgGQAOgGAOgCQAQgDAPAAQAQAAAPADQAPACAOAGQAOAGAMAIQAMAIAKAKQAKAKAIAMQAIAMAFAOQAGANACAPQADAPAAAOQAAAPgDAPQgCAOgGAOQgFAOgIAMQgIALgKALQgKAKgMAIQgMAIgOAFQgOAGgPADQgPADgQAAQgPAAgQgDgAhxBHQALAUARAOQARAOAWAIQAXAIAXAAQAZAAAWgIQAVgIARgOQARgOAMgUQAMgTAEgXIgkAAQgEAPgIANQgJANgMAJQgMAJgQAFQgQAGgRAAQgRAAgPgGQgQgFgMgJQgMgJgJgNQgJgNgEgPIgkAAQAFAXAMATgAgghNQgQAGgKAMQgLAMgFAPQgGAQAAAQQAAARAGAQQAFAPALAMQAKALAQAGQAPAHARAAQASAAAPgHQAPgGALgLQALgMAFgPQAGgQAAgRQAAgQgGgQQgFgPgLgMQgLgMgPgGQgPgGgSAAQgRAAgPAGg");
	this.shape_211.setTransform(-188.4,-84.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#33FF00").s().p("AA3CMIAAhvIhsAAIAABvIhFAAIAAkXIBFAAIAABvIBsAAIAAhvIBEAAIAAEXgABIB/IAiAAIAAhiIgiAAgAhpB/IAjAAIAAhiIgjAAg");
	this.shape_212.setTransform(-224.6,-84.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.7,-111.3,501.7,222.7);


(lib.SpawnSystem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.possibleObjects = [];
		
		this.alpha = 0;
		this.parent.alpha = 0;
		
		setTimeout((function(){
			var inspect = this.parent.children;
			while(inspect.length > 1) {
				// select the right child
				var test = inspect[0];
				if(test === this) { test = inspect[1]; }
				
				// forget it in the main area because we don't need it
				this.parent.removeChild(test);
				
				// save the info we need for a new one
				this.possibleObjects.push({
					libName: getLibName(test),
					scaleX: test.scaleX,
					scaleY: test.scaleY,
					rotation: test.rotation,
					alpha: test.alpha
				});
			}
			
			this.parent.alpha = 1;
		}).bind(this), 1);
		
		this.create = function() {
			// pull out an object
			var source = this.possibleObjects;
			source = source[source.length * Math.random() | 0];
			
			// make one
			var target = new lib[source.libName]();
			
			// set the properties
			for(var n in source) {
				target[n] = source[n];
			}
			
			// position in box
			var bounds = this.nominalBounds;
			var point = this.localToGlobal(
				Math.random() * bounds.width + bounds.x,
				Math.random() * bounds.height + bounds.y
			);
			target.x = point.x;
			target.y = point.y;
		
			return target;
		}
		
		function getLibName(search) {
			for(var n in lib) {
				if(lib[n].prototype === search.__proto__){
					return n;
				}
			}
		
		    return undefined;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// colour
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,153,0,0.2)").s().p("AnpHqIAAkxIPTAAIAAExgAHqC5IvTAAIAAqiIPTAAIAAKigAnpC5g");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// corners
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AFtnpIB9AAIAAB9AnplsIAAh9IB9AAAlsHqIh9AAIAAh9AHqFtIAAB9Ih9AA");
	this.shape_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.goodguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// simply call this function to bump into something
		//		target = what you want to hit i.e. player
		//		cheap = whether it should be less accurate but easier to do (true/false)
		this.hitTestDisplayObject = (function(target, cheap) {
			return hitTestBegin(target, cheap);
		}).bind(this);
		
		////////////////////////////////////////////////////////////
		// let me do the rest
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		makeSurface(this);
		adjSize(this, 1, 1);
		
		var hitTestBegin = (function(target, cheap) {
			//bounds
			var aBounds = globalBounds(this.nominalBounds, this);
			var bBounds = globalBounds(target.nominalBounds, target);	
			
			// do we need to do the deeper hit test
			var intersection = aBounds.intersection(bBounds);
			var hit = !!intersection;
			if(cheap || !hit) {
				return hit;
			}
			
			// work with round sizes
			intersection.width = Math.ceil(intersection.width);
			intersection.height = Math.ceil(intersection.height);
			
			// ensure we're dealing with correct canvas sizes
			adjSize(this, intersection.width, intersection.height);
			adjSize(target, intersection.width, intersection.height);
			
			// paint in
			drawToSurface(this, aBounds, intersection);
			drawToSurface(target, bBounds, intersection);
		
			// intersect
			var gco = this._ctxRef.globalCompositeOperation;
			this._ctxRef.globalCompositeOperation = "source-in";
			this._ctxRef.drawImage(target._surface, 0,0);
			this._ctxRef.globalCompositeOperation = gco;
			
			// test
			var px = this._ctxRef.getImageData(0,0, intersection.width, intersection.height).data;
			var componentCount = px.length;
			for(var alpha = 3; alpha<componentCount; alpha+=4) {
				if(px[alpha]){ return true; }
			}
			
			return false;
		}).bind(this);
		
		function globalBounds(rect, scope) {
			var result = {
				tl: new createjs.Point(rect.x, rect.y),
				tr: new createjs.Point(rect.x + rect.width, rect.y),
				bl: new createjs.Point(rect.x, rect.y + rect.height),
				br: new createjs.Point(rect.x + rect.width, rect.y + rect.height),
			}
			
			// adjusted corners to new bounds
			for(var n in result) {
				scope.localToGlobal(result[n].x, result[n].y, result[n]);
			}
			
			// build into rectangle
			var x = findExtreme(result, true, "x");
			var y = findExtreme(result, true, "y");
			return new createjs.Rectangle(
				x, y,
				findExtreme(result, false, "x") - x,
				findExtreme(result, false, "y") - y
			);
		}
		
		function drawToSurface(dispObj, global, inter) {
			var ctx = dispObj._ctxRef;
			ctx.save();
			var mtx = dispObj.getConcatenatedMatrix();
			ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d,
				mtx.tx - inter.x,
				mtx.ty - inter.y
			);
			dispObj.draw(ctx);
			ctx.restore();
		}
		
		function findExtreme(target, negative, value) {
			var result = undefined;
			
			for(var n in target) {
				var test = target[n][value];
				if(result === undefined) {
					result = test; 
				} else {
					result = (test < result) ^ negative ? result : test;
				}
			}
			return result;
		}
		
		function adjSize(obj, w,h) {
			var s = obj.surface;
			if(!s){ s = makeSurface(obj); }
		
			s.style.width = (s.width = w) + "px";
			s.style.height = (s.height = h) + "px";
		}
		
		function makeSurface(obj) {
			obj._surface = document.createElement("canvas");
			obj._ctxRef = obj._surface.getContext("2d");
			return obj._surface;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.rocket();
	this.instance.parent = this;
	this.instance.setTransform(92.1,-41.3,0.1,0.127,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-81.8,184.1,163.6);


(lib.gamelogorocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rocket();
	this.instance.parent = this;
	this.instance.setTransform(-144,-180,0.225,0.238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-180,288,294.2);


(lib.circledead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AH1AAQAADTiTCVQiTCWjPAAQjOAAiUiWQiSiVAAjTQAAjSCSiWQCUiVDOAAQDPAACTCVQCTCWAADSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F5000C","#FFFFFF","#11090A","#11090A","#080001","#080001","#080001","#BCBABA"],[0,0.855,0.957,0.957,0.969,1,1,1],0,0,0,0,0,52.7).s().p("AliFoQiSiVAAjTQAAjSCSiWQCUiVDOAAQDPAACTCVQCTCWAADSQAADTiTCVQiTCWjPAAQjOAAiUiWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-52,102.4,104.2);


(lib.blackscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhK+Ax/MAAAhj+MCV9AAAMAAABj+g");
	this.shape.setTransform(0,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EhK/gx/MCV/AAAMAAABj/MiV/AAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-321,962,653.3);


(lib.backgroundstarts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundstars();
	this.instance.parent = this;
	this.instance.setTransform(-480,-320,0.5,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-320,960,640);


(lib.asteroids_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.asteroids();
	this.instance.parent = this;
	this.instance.setTransform(-301.8,-204.7,0.304,0.273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.8,-204.7,603.8,409.4);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.howtoplayanimation();
	this.instance.parent = this;
	this.instance.setTransform(27,-8.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.8,-120.3,501.7,229.6);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundstarts();
	this.instance.parent = this;
	this.instance.setTransform(-2.4,-0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("EhLXgyIMCWvAAAMAAABkRMiWvAAAIAAgJ");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-483.4,-321.9,967,644);


(lib.scorechart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scoretext();
	this.instance.parent = this;
	this.instance.setTransform(-48.3,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-66,210.2,74);


(lib.ponintscircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.good=true
	}
	this.frame_7 = function() {
		this.stop();
		
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.circledead();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.08,scaleY:0.08,skewX:180},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-52,102.4,104.2);


(lib.pentagonforpoints = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		this.good =true;
	}
	this.frame_9 = function() {
		this.stop();
		
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.polistarpoints();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150,x:0},6).to({scaleX:0.09,scaleY:0.09,rotation:0,skewX:30,skewY:-150},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-31.5,62.5,63.1);


(lib.logoonlytext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logotext();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-0.3,0.97,1,0,0,0,0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.6,-91,911.2,182);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"transition ":0,pause:59,"transition":60});

	// timeline functions:
	this.frame_58 = function() {
		this.gotoAndStop("pause");
	}
	this.frame_59 = function() {
		this.buttonagain.addEventListener("click",fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("transition")
			
			
		}
	}
	this.frame_84 = function() {
		this.parent.gotoAndStop("gameplay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1).call(this.frame_59).wait(25).call(this.frame_84).wait(1));

	// transtionout
	this.instance = new lib.blackscreen();
	this.instance.parent = this;
	this.instance.setTransform(15,4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({alpha:1},23).to({_off:true},1).wait(1));

	// character 
	this.instance_1 = new lib.gamelogorocket();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-657.4,179.1,1,1,135,0,0,-0.1,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:710.9},59).to({_off:true},1).wait(25));

	// gameovertext
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.9,-45.8,0.368,0.358,0,0,0,393.8,66.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:17.9},53).to({_off:true},1).wait(25));

	// playbutton
	this.buttonagain = new lib.Playagainbutton();
	this.buttonagain.parent = this;
	this.buttonagain.setTransform(-105.9,233.2);
	this.buttonagain._off = true;
	new cjs.ButtonHelper(this.buttonagain, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.buttonagain).wait(59).to({_off:false},0).to({_off:true},1).wait(25));

	// background
	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(28.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(58).to({startPosition:0},0).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-863.3,-290,1375.4,674.9);


(lib.GameMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{again:0,"pause ":118,"transition":120,"playbutton":0});

	// timeline functions:
	this.frame_0 = function() {
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("transition")
			
			
		}
	}
	this.frame_117 = function() {
		this.gotoAndPlay("again");
	}
	this.frame_148 = function() {
		this.parent.gotoAndStop("gameplay");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(117).call(this.frame_117).wait(31).call(this.frame_148).wait(1));

	// transition
	this.instance = new lib.blackscreen();
	this.instance.parent = this;
	this.instance.setTransform(67.1,122.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).to({alpha:1},27).to({_off:true},1).wait(1));

	// playbutton 
	this.button_1 = new lib.playbutton();
	this.button_1.parent = this;
	this.button_1.setTransform(-259.6,128.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.playbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},119).wait(30));

	// logo
	this.instance_1 = new lib.logoonlytext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171.4,-106,0.464,0.753,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},120).wait(29));

	// badguy
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(274.2,-52.1,1,1.076);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,x:409.6,y:572.4},119).to({_off:true},1).wait(29));

	// how to play
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-170.6,332.3);

	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-170.6,332.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},119).to({state:[]},1).wait(29));

	// goodguy
	this.instance_5 = new lib.gamelogorocket();
	this.instance_5.parent = this;
	this.instance_5.setTransform(396.1,302,0.841,0.806,-45,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-563.7,y:278.5},59).to({x:396.1,y:302},1).to({x:-563.7,y:278.5},59).to({_off:true},1).wait(29));

	// background
	this.instance_6 = new lib.backgroundstars();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-413,-207,0.5,0.611);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.2).p("AAAgNIAAAb");
	this.shape.setTransform(549.4,-205.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6}]}).to({state:[]},120).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413,-209.8,965.5,662.4);


(lib.Gamelogotext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"transition ":0,"transition":117,"pause":59});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("click", (function(){
			 this.gotoAndStop("pause");
			
		}).bind(this));
	}
	this.frame_59 = function() {
		this.addEventListener("click", (function(){
			this.gotoAndPlay("transition")
		
		}).bind(this));
	}
	this.frame_140 = function() {
		this.parent.gotoAndStop("gamemenu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(81).call(this.frame_140).wait(1));

	// transtionout
	this.instance = new lib.blackscreen();
	this.instance.parent = this;
	this.instance.setTransform(15,4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({_off:false},0).to({alpha:1},23).wait(1));

	// logosquare
	this.instance_1 = new lib.gamelogorocket();
	this.instance_1.parent = this;
	this.instance_1.setTransform(297.4,475,1.097,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:96.4,y:121.1},29).to({rotation:-33.9},30).wait(1).to({scaleX:1.1,scaleY:1,x:-735.6,y:48.8},28).to({regX:0.1,regY:-0.1,scaleX:1.09,scaleY:1,rotation:102.4,x:-634.9,y:393.1},1).to({regX:0,regY:0,scaleX:1.1,scaleY:1,rotation:89.8,x:-49.6,y:158.7},32).to({_off:true},1).wait(19));

	// logtext
	this.instance_2 = new lib.logoonlytext();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34,-414.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({y:-220.9},30).to({skewX:180,skewY:-179.5,y:-209},29).to({rotation:0.2,skewX:0,skewY:0,y:-220.9},33).to({_off:true},1).wait(19));

	// background
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(15,4);

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},58).to({state:[]},64).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465,-316,960,905.2);


(lib.badguyufo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.good =false;
	}
	this.frame_7 = function() {
		this.stop();
		
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-45,-55.3,1.453,0.94);

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.2,-55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,x:-45.2,y:-55.6},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-160.3,75.4,210.1);


(lib.AsteroidDrift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// asteroids
	this.instance = new lib.asteroids_1();
	this.instance.parent = this;
	this.instance.setTransform(106.6,65,0.969,1.434,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.8,x:-500.2,y:95.2},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.9,-228.6,584.8,586.9);


(lib.scorekeeper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// tell me where the text is going
		this.textTarget = this.score;
		
		// configure the score
		var initialScore = 90;
		this.maxScore = 400;
		this.minScore = 0;
		
		
		
		// configure the look
		this.animationSpeed = 0.60;
		this.thousandDelimiter = " ";
		this.decimalPlaces = 0;
		this.prependString = "";
		this.appendString = "";
		
		// call these when you need them
		this.adjustScore = function(ammount) {
			adjustScore(ammount);
		}
		
		this.setScore = function(newScore) {
			setScore(newScore);
		}
		
		this.getScore = function() {
			return getScore();
		}
		
		////////////////////////////////////////////////////////////
		// let me do the rest
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////
		this._actualScore = this._displayScore = initialScore;
		
		var adjustScore = (function(ammount) {
			setScore(this._actualScore + ammount);
		}).bind(this);
		
		var setScore = (function(newScore) {
			// clmap the value to limits
			this._actualScore = Math.min(this.maxScore, Math.max(this.minScore, newScore));
			
			// animate with a programtic tween if needed
			if(this.animationSpeed > 0){
				createjs.Tween.get(this, {override:true}).to({
					_displayScore: this._actualScore
				}, this.animationSpeed*1000);
			} else {
				this._displayScore = this._actualScore;
			}
		}).bind(this);
		
		var getScore = (function() {
			return this._actualScore;
		}).bind(this);
		
		this.addEventListener("tick", (function(){
			// get correct starting value
			this.decimalPlaces = Math.max(this.decimalPlaces, 0);
			var value = this._displayScore.toFixed(this.decimalPlaces);
			
			// count delimiters
			var thousandTest = this._displayScore;
			var thousandCount = 0;
			while((thousandTest /= 1000) >= 1){ thousandCount++; }
			
			// inject delimiters
			for(var i=0; i<thousandCount; i++){
				var loc = -((this.decimalPlaces?this.decimalPlaces+1:0) + ((i+1) * 3) + i);
				value = value.slice(0, loc) + this.thousandDelimiter + value.slice(loc);
			}
			
			this.textTarget.text = this.prependString + value + this.appendString;
		}).bind(this));
		
		// lie about anim speed during inital set
		var _initAnimSpeed = this.animationSpeed;
		this.animationSpeed = 0;
		setTimeout((function(){ this.animationSpeed = _initAnimSpeed; }).bind(this), 1);
		setScore(initialScore);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.score = new cjs.Text("000000", "70px 'Herculanum'", "#FFFFFF");
	this.score.name = "score";
	this.score.lineHeight = 72;
	this.score.lineWidth = 279;
	this.score.parent = this;
	this.score.setTransform(-139.2,-6);

	this.score_1 = new lib.scorechart();
	this.score_1.parent = this;
	this.score_1.setTransform(0,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.score_1},{t:this.score}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-69.8,282.5,143.4);


(lib.ExampleSpawner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.activeObjects = [];
		
		// call me to make new stuff based upon what you put on my timeline
		this.createAndRememberObject = function() {
			// make a new object
			var newObject = this.spawnBlock.create();
			
			//start keeping track of it
			this.activeObjects.push(newObject);
			
			return newObject;
		}
		
		// call me to stop worrying about stuff
		this.forgetObject = function(target) {
			// see if we have one
			var index = this.activeObjects.indexOf(target);
			
			// -1 means we don't
			if(index == -1){ return; }
		
			// stop tracking it
			this.activeObjects.splice(index, 1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// spawner
	this.spawnBlock = new lib.SpawnSystem();
	this.spawnBlock.parent = this;
	this.spawnBlock.setTransform(946.7,287.2,0.415,6.369,0,0,0,49.8,50);

	this.timeline.addTween(cjs.Tween.get(this.spawnBlock).wait(1));

	// other
	this.instance = new lib.pentagonforpoints();
	this.instance.parent = this;
	this.instance.setTransform(182.1,66.5);

	this.instance_1 = new lib.ponintscircle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.5,86.1);

	this.instance_2 = new lib.badguyufo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(420.6,185.7,1.059,0.419,0,0,0,20.9,0.1);

	this.instance_3 = new lib.badguyufo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(526.5,348.9,1.769,0.851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.9,-25.5,816.3,625.4);


(lib.GamePlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
		var tickCount = 0;
		var stage = this.stage;
		
		var boundTick = handleTick.bind(this);
		this.addEventListener("tick", boundTick);
		
		function handleTick() {
			// move the player
			var localPoint = this.globalToLocal(this.stage.mouseX, this.stage.mouseY);
			
			this.goodguy.x = localPoint.x;
			this.goodguy.y = localPoint.y;
		
			// for every enemy
			for(var i=0; i < this.enemySource.activeObjects.length; i++) {
				var item = this.enemySource.activeObjects[i];
				
				
				
				
				// fall left
				item.x -= 5;
				
				// let the player hit things
				if(this.goodguy.hitTestDisplayObject(item)) {
					if(item.good) {
						this.score.adjustScore(25);
					} else {
						this.score.adjustScore(-25);
					}
					
					this.enemySource.forgetObject(item);
					item.play();
					i--;
				}
				
			}
		
			//game stop if zero //
		if(this.score.getScore()==0) {
		     this.play();
			this.removeEventListener("tick", boundTick);
			
		};
		
			// do things every so often
			tickCount++;
			if(tickCount % 10 == 0) {
				var created = this.enemySource.createAndRememberObject();
				this.addChild(created);
				
				var localPoint = this.globalToLocal(created.x, created.y);
				created.x = localPoint.x;
				created.y = localPoint.y;
			}
		}
		
		//stop after time//
		
		setTimeout((function(){
			
			this.play();
			this.removeEventListener("tick", boundTick);
			
		}).bind(this), 3*60*1000); 
		
		//3 minutes equation3*60*1000///
	}
	this.frame_40 = function() {
		this.score.setScore(90);
		
		//reset everything// 
		
		for(var i=0; i < this.enemySource.activeObjects.length; i++) {
			var item = this.enemySource.activeObjects[i];
				
			this.enemySource.forgetObject(item);
			this.removeChild(item);
			i--;
		}
		
		this.parent.gotoAndStop("gameover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(24).call(this.frame_40).wait(1));

	// transtionout
	this.instance = new lib.blackscreen();
	this.instance.parent = this;
	this.instance.setTransform(78.2,48.9);
	this.instance.alpha = 0.961;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:84.4,y:59.1,alpha:0},15).to({_off:true},1).wait(1).to({_off:false},0).to({x:78.2,y:48.9,alpha:0.961},23).wait(1));

	// objects
	this.enemySource = new lib.ExampleSpawner();
	this.enemySource.parent = this;
	this.enemySource.setTransform(-57.2,-66.6,1,1,0,0,0,189.1,159.6);

	this.timeline.addTween(cjs.Tween.get(this.enemySource).wait(41));

	// asteroids
	this.instance_1 = new lib.AsteroidDrift();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.5,64.8,1,1,0,0,0,106.5,64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

	// pointscounter
	this.score = new lib.scorekeeper();
	this.score.parent = this;
	this.score.setTransform(-230.7,-191.2);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(41));

	// character
	this.goodguy = new lib.goodguy();
	this.goodguy.parent = this;
	this.goodguy.setTransform(-240.7,56.1);

	this.timeline.addTween(cjs.Tween.get(this.goodguy).wait(41));

	// background
	this.instance_2 = new lib.backgroundstarts();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.8,-271.2,1122.7,652.3);


// stage content:
(lib.mobiledec1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{gamelogo:0,gamemenu:1,gameplay:2,gameover:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// gamelogo
	this.instance = new lib.Gamelogotext();
	this.instance.parent = this;
	this.instance.setTransform(465,316.3);

	this.instance_1 = new lib.GameMenu();
	this.instance_1.parent = this;
	this.instance_1.setTransform(413,194.5,1,0.984);

	this.instance_2 = new lib.GamePlay();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,261.1);

	this.instance_3 = new lib.GameOver();
	this.instance_3.parent = this;
	this.instance_3.setTransform(454,289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,320.3,960,905.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;