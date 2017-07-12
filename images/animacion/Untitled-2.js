(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1080,
	height: 400,
	fps: 24,
	color: "#18BC9C",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Path_2.png", id:"Path_2"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Path_2 = function() {
	this.initialize(img.Path_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,321);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape.setTransform(39.2,40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("Ah3BtQgXgVAAgeQAAgcARgSQAQgRAtgIIBEgPQAQgFASgHQgBgRgGgIQgIgHgSAAQgWAAgMAIQgJAFgFAQIhcgJQAGgYAJgOQAKgNASgLQANgGAXgFQAYgDAbAAQAoAAAaAEQAaAFARAQQAMAKAIAUQAHASAAASIAABsQAAARACAKQACAKAIAQIhaAAIgHgPIgDgPQgTARgTAJQgWAJgiABQgsgBgYgUgAgCASQgcAIgJAHQgIAJAAAJQAAALAIAIQAIAHAQAAQAPAAANgIQANgIAGgLQAGgLAAgSIAAgPQgUAHgUAFg");
	this.shape_1.setTransform(15.3,45.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AgYClQgQgJgJgTQgHgSgBgqIAAhVIgjAAIAAhGIAjAAIAAguIBegxIAABfIA1AAIAABGIg1AAIAABVQAAARADAFQAEAHAMABQALgBATgGIAHBCQgjAIgfAAQgiAAgRgJg");
	this.shape_2.setTransform(-11.4,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_3.setTransform(-30.1,40.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AhlCbQgcgXAAglIABgNIBcAKQAEANAHAFQALAIAOAAQAUAAAKgMQAKgLAAgbIAAgmQgOARgOAHQgUAMgZAAQgyAAgfgrQgWgdAAgzQAAg6AcgfQAdgeAtAAQAdAAARAKQATAJAQAXIAAglIBaAAIAADpIAAALQAAAYgKAVQgKAVgRANQgQAOgZAFQgaAGghAAQhJAAgcgWgAgdheQgLANAAAfQAAAbALANQALALASAAQARAAAMgLQAMgOAAgbQAAgbgMgPQgNgOgQAAQgTAAgKANg");
	this.shape_4.setTransform(-54.7,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_5.setTransform(-78.1,40.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AicCrIAAlVICcAAQAuAAAdAMQAcANATAYQATAXAIAgQAJAfgBAjQABA1gMAfQgOAegVAVQgXAUgaAHQgiAJgcAAgAgyBdIAaAAQAfAAAOgHQAOgIAIgSQAIgSAAgqQAAg0gSgUQgRgVgoAAIgaAAg");
	this.shape_6.setTransform(-104,40.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("Ah3BtQgXgVAAgeQAAgcARgSQAQgRAtgIIBEgPQAPgFATgHQgBgRgGgIQgIgHgSAAQgWAAgMAIQgJAFgFAQIhcgJQAGgYAKgOQAJgNASgLQANgGAXgFQAYgDAbAAQAoAAAaAEQAaAFARAQQAMAKAIAUQAHASAAASIAABsQAAARACAKQACAKAIAQIhaAAIgHgPIgDgPQgTARgTAJQgXAJghABQgsgBgYgUgAgCASQgdAIgHAHQgJAJAAAJQAAALAJAIQAHAHAPAAQAQAAANgIQANgIAGgLQAGgLAAgSIAAgPQgUAHgUAFg");
	this.shape_7.setTransform(-155.4,45.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("ABzB/IAAiMQAAgRgHgIQgJgNgOAAQgRAAgKAMQgLAMAAAbIAAB/IhdAAIAAiHQAAgRgCgGQgDgJgIgGQgHgFgKAAQgRAAgLAMQgKAMAAAbIAAB/IhgAAIAAj3IBZAAIAAAkQAUgXATgJQAUgKAcAAQAdAAAQALQARAKALAVQAXgYASgJQATgJAbAAQAoAAAWAYQAXAYAAAyIAACbg");
	this.shape_8.setTransform(-195.4,44.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AhgB/IAAj3IBZAAIAAApQALgbAOgKQANgKAUAAQAVAAAZANIgdBEQgRgHgKAAQgTAAgKAQQgNAWAAA5IAABUg");
	this.shape_9.setTransform(-230.4,44.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AhgBjQgtglAAg+QAAg2AmglQAmgmBBABQBKAAAmArQAeAjAAAyQAAA4gmAlQgmAlhCAAQg7AAglgfgAggguQgOAPAAAfQAAAhAOAQQANAQATAAQAUAAANgPQANgQABgiQgBgggNgPQgNgQgTAAQgUAAgNARg");
	this.shape_10.setTransform(-259.1,45.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("Ag9CuIAAixIgkAAIAAhGIAkAAIAAgLQAAgPACgSQAEgTAJgLQAJgMAQgHQARgHAdAAQAZAAAwAGIgKA5QgSgCgLAAQgMAAgGAEQgGAEgCAKQgBAFAAAQIAtAAIAABGIgtAAIAACxg");
	this.shape_11.setTransform(-282.8,40.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("Ah3BtQgXgVAAgeQAAgcARgSQARgRAsgIIBEgPQAQgFASgHQAAgRgIgIQgHgHgTAAQgUAAgNAIQgIAFgGAQIhbgJQAFgYAJgOQAKgNASgLQAOgGAWgFQAYgDAbAAQAoAAAaAEQAaAFARAQQAMAKAIAUQAHASAAASIAABsQAAARACAKQADAKAHAQIhaAAIgHgPIgDgPQgTARgTAJQgWAJgiABQgsgBgYgUgAgCASQgcAIgJAHQgHAJgBAJQABALAHAIQAJAHAPAAQAPAAAMgIQAOgIAGgLQAFgLABgSIAAgPQgUAHgUAFg");
	this.shape_12.setTransform(-309,45.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgYClQgQgJgJgTQgHgSAAgqIAAhVIgkAAIAAhGIAkAAIAAguIBdgxIAABfIA0AAIAABGIg0AAIAABVQAAARADAFQAEAHAMABQALgBATgGIAHBCQgkAIgeAAQgiAAgRgJg");
	this.shape_13.setTransform(-335.7,40.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("Ah3BtQgXgVAAgeQAAgcARgSQAQgRAtgIIBEgPQAPgFATgHQgBgRgGgIQgIgHgSAAQgWAAgMAIQgJAFgFAQIhcgJQAGgYAKgOQAJgNASgLQANgGAXgFQAYgDAbAAQAoAAAaAEQAaAFARAQQAMAKAIAUQAHASAAASIAABsQAAARACAKQACAKAIAQIhaAAIgHgPIgDgPQgTARgTAJQgXAJghABQgsgBgYgUgAgCASQgdAIgHAHQgJAJAAAJQAAALAJAIQAHAHAPAAQAQAAANgIQANgIAGgLQAGgLAAgSIAAgPQgUAHgUAFg");
	this.shape_14.setTransform(-361.5,45.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape_15.setTransform(-385.6,40.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AiQCrIAAlVICuAAQA6AAAdAbQAcAcAAAyQAAA0gfAbQgfAehAAAIg5AAIAAB/gAgmgYIAaAAQAdAAAMgKQANgLAAgRQAAgQgLgLQgLgLgbAAIgfAAg");
	this.shape_16.setTransform(-410.1,40.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("Ah3BtQgXgUAAgfQAAgcARgSQAQgRAtgIIBEgQQAQgEARgHQABgRgIgIQgHgHgTAAQgUAAgNAHQgIAGgGAQIhbgJQAFgYAJgOQAKgNASgKQAOgHAWgFQAXgDAbAAQApAAAaAEQAaAFARAQQANAKAHATQAHATAAASIAABsQAAASACAJQADALAHAPIhaAAIgHgOIgDgQQgTARgTAJQgWAJgiABQgtAAgXgVgAgCASQgcAIgJAHQgHAJgBAJQABALAHAHQAJAIAPAAQAPgBAMgHQAOgIAGgLQAFgLAAgSIAAgPQgTAHgUAFg");
	this.shape_17.setTransform(372.4,-32.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AhgB/IAAj3IBZAAIAAApQALgbAOgKQANgKAUAAQAVAAAZANIgdBEQgRgHgKAAQgTAAgKAQQgNAWAAA5IAABUg");
	this.shape_18.setTransform(347,-32.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgXClQgRgJgIgTQgJgSAAgqIAAhVIgjAAIAAhHIAjAAIAAgtIBegxIAABeIA1AAIAABHIg1AAIAABWQAAAQADAFQAEAHANABQAKAAATgHIAHBCQgjAIgfAAQgiAAgQgJg");
	this.shape_19.setTransform(323.6,-36.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AheBuQgdgTgIgkIBfgJQAGARAKAHQALAHAPAAQAUAAAKgIQAIgGAAgJQAAgKgKgGQgIgEgfgGQgygJgTgHQgUgHgNgQQgNgRAAgWQAAgZAOgSQAOgSAZgJQAagIApAAQArgBAWAIQAVAGAOAOQAOAOAJAZIhaAJQgEgMgIgGQgLgHgOAAQgQAAgHAFQgIAHAAAIQAAAIAJAFQAKAFAdAEQAwAFAXAKQAXAKANAPQAMASAAAVQAAAVgNAVQgNAVgcALQgcAMgwABQhDAAgdgUg");
	this.shape_20.setTransform(298.1,-32.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AhNB0QgcgOgTgfQgTgeABgpQAAg4AlgkQAlglBCABQA0gBAfARQAeAQAQAfQAQAeAAAwIAAAKIi8AAQACAXAKAMQAOAQAUAAQAOgBAMgGQAIgFAKgLIBdAIQgWAmgeAQQgeAQg4ABQgwAAgdgOgAgjg2QgIAMgCAWIBbAAQgCgcgMgMQgNgMgTAAQgVAAgOASg");
	this.shape_21.setTransform(267.8,-32.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AhrBnQgXgXAAgxIAAidIBgAAIAACHQAAAYAJAKQAIAJAQAAQAPAAALgNQALgNAAggIAAh4IBfAAIAAD3IhZAAIAAgoQgUAZgUAKQgTALgdAAQgoAAgVgYg");
	this.shape_22.setTransform(235.6,-31.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("ABACrIh/i6IAAC6IhkAAIAAlVIBjAAICAC8IAAi8IBkAAIAAFVg");
	this.shape_23.setTransform(199.7,-36.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("Ah2BtQgYgUAAgfQAAgcARgSQARgRAsgIIBEgQQAPgEASgHQAAgRgGgIQgIgHgSAAQgVAAgMAHQgKAGgFAQIhcgJQAGgYAKgOQAJgNATgKQANgHAXgFQAWgDAbAAQApAAAaAEQAaAFASAQQAMAKAHATQAHATAAASIAABsQAAASACAJQADALAHAPIhaAAIgHgOIgDgQQgTARgSAJQgYAJghABQgtAAgWgVgAgBASQgeAIgHAHQgJAJABAJQgBALAJAHQAHAIAPAAQAQgBANgHQANgIAGgLQAGgLgBgSIAAgPQgTAHgTAFg");
	this.shape_24.setTransform(147.7,-32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("Ah3BtQgXgUAAgfQAAgcARgSQAQgRAtgIIBEgQQAQgEASgHQAAgRgIgIQgHgHgTAAQgUAAgNAHQgIAGgGAQIhbgJQAFgYAJgOQAKgNASgKQAOgHAWgFQAXgDAcAAQAoAAAaAEQAaAFARAQQANAKAHATQAHATAAASIAABsQAAASACAJQADALAHAPIhaAAIgHgOIgDgQQgTARgTAJQgWAJgiABQgsAAgYgVgAgCASQgcAIgJAHQgHAJgBAJQABALAHAHQAJAIAPAAQAPgBAMgHQAOgIAGgLQAFgLABgSIAAgPQgUAHgUAFg");
	this.shape_25.setTransform(99.7,-32.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AhsCHQgbgmAAg3QgBg9AeggQAeghAtAAQAXAAAQAHQASAIAOAPIAAh3IBgAAIAAFWIhZAAIAAglQgTAXgPAIQgTALgZAAQgzAAgagngAgdAAQgLANAAAgQAAAfAMAOQALAPARAAQARAAALgPQANgPAAgfQAAgegNgOQgMgNgRAAQgQAAgMANg");
	this.shape_26.setTransform(67.1,-36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_27.setTransform(43.7,-36.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AAjB/IAAiHQAAgYgIgJQgJgKgQAAQgPAAgLANQgLANAAAgIAAB4IhfAAIAAj3IBYAAIAAAoQAVgYAUgLQATgLAcAAQAoAAAXAYQAWAXAAAyIAACcg");
	this.shape_28.setTransform(19.7,-32.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AhNB0QgcgOgTgfQgSgeAAgpQAAg4AlgkQAlglBCABQA0gBAfARQAeAQAQAfQAQAeABAwIAAAKIi9AAQACAXAKAMQAOAQAUAAQAOgBAMgGQAJgFAJgLIBdAIQgVAmgfAQQgeAQg4ABQgwAAgdgOgAgig2QgJAMgCAWIBbAAQgCgcgMgMQgMgMgUAAQgUAAgOASg");
	this.shape_29.setTransform(-12.2,-32.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AgqB8Ihnj3IBjAAIAuCcIAzicIBgAAIhqD3g");
	this.shape_30.setTransform(-41.6,-32.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AAjB/IAAiHQAAgYgIgJQgJgKgQAAQgPAAgLANQgLANAAAgIAAB4IhfAAIAAj3IBZAAIAAAoQATgYAVgLQASgLAeAAQAoAAAWAYQAWAXAAAyIAACcg");
	this.shape_31.setTransform(-71,-32.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AhNB0QgdgOgSgfQgSgeAAgpQgBg4AmgkQAlglBCABQAzgBAgARQAfAQAQAfQAQAeAAAwIAAAKIi+AAQADAXAKAMQAOAQAUAAQAOgBANgGQAHgFAKgLIBdAIQgWAmgeAQQgeAQg4ABQgxAAgcgOgAgig2QgJAMgDAWIBdAAQgDgcgMgMQgMgMgUAAQgVAAgNASg");
	this.shape_32.setTransform(-103,-32.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_33.setTransform(-127.1,-36.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AidCrIAAlVIDEAAQAyAAAbAYQAaAZAAAkQAAAfgTAVQgMAPgZAIQAlAJASAUQARAWAAAhQAAAagMAWQgNAVgVAMQgOAIgaAEQgkAEgMAAgAgyBhIA0AAQAbAAAMgJQALgKAAgQQAAgQgLgJQgLgJgcAAIg0AAgAgygkIAuAAQAXAAAKgIQAJgJAAgQQAAgPgJgIQgKgJgWAAIgvAAg");
	this.shape_34.setTransform(-153,-36.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("Ah2BtQgYgUAAgfQAAgcARgSQARgRAsgIIBEgQQAQgEARgHQABgRgIgIQgHgHgTAAQgVAAgLAHQgJAGgGAQIhbgJQAFgYAJgOQAKgNATgKQANgHAXgFQAWgDAbAAQApAAAaAEQAaAFASAQQALAKAIATQAHATAAASIAABsQAAASACAJQACALAIAPIhaAAIgHgOIgDgQQgTARgSAJQgYAJghABQgtAAgWgVgAgBASQgeAIgIAHQgHAJAAAJQAAALAHAHQAJAIAOAAQAQgBAMgHQAOgIAGgLQAFgLAAgSIAAgPQgTAHgTAFg");
	this.shape_35.setTransform(-204.4,-32.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape_36.setTransform(-228.5,-36.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AAjB/IAAiHQAAgYgIgJQgJgKgQAAQgPAAgLANQgLANAAAgIAAB4IhfAAIAAj3IBYAAIAAAoQAUgYAVgLQATgLAcAAQApAAAWAYQAWAXAAAyIAACcg");
	this.shape_37.setTransform(-268.4,-32.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("Ah2BtQgYgUAAgfQAAgcARgSQAQgRAtgIIBEgQQAPgEASgHQAAgRgGgIQgIgHgSAAQgVAAgMAHQgKAGgFAQIhcgJQAGgYAKgOQAJgNATgKQAMgHAYgFQAXgDAaAAQApAAAaAEQAaAFASAQQAMAKAHATQAHATAAASIAABsQAAASACAJQACALAIAPIhaAAIgHgOIgDgQQgTARgSAJQgYAJghABQgsAAgXgVgAgBASQgeAIgHAHQgJAJABAJQgBALAJAHQAHAIAPAAQAQgBANgHQANgIAGgLQAGgLgBgSIAAgPQgTAHgTAFg");
	this.shape_38.setTransform(-300.4,-32.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AhtCHQgbgmAAg3QABg9AdggQAdghAvAAQAWAAAQAHQASAIAOAPIAAh3IBhAAIAAFWIhaAAIAAglQgSAXgQAIQgTALgZAAQgzAAgbgngAgdAAQgLANAAAgQAAAfALAOQAMAPARAAQAQAAANgPQAMgPgBgfQABgegMgOQgNgNgRAAQgRAAgLANg");
	this.shape_39.setTransform(-333,-36.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("AhNB0QgcgOgTgfQgSgeAAgpQAAg4AlgkQAlglBCABQA0gBAfARQAeAQAQAfQAQAeABAwIAAAKIi9AAQACAXAKAMQAOAQAUAAQAOgBAMgGQAJgFAJgLIBdAIQgVAmgfAQQgeAQg4ABQgwAAgdgOgAgig2QgJAMgCAWIBbAAQgCgcgMgMQgMgMgUAAQgUAAgOASg");
	this.shape_40.setTransform(-380.3,-32.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("Ag0CrIAAkAIhsAAIAAhVIFBAAIAABVIhsAAIAAEAg");
	this.shape_41.setTransform(-410.9,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.2,-74.5,860.4,149);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#225460").s().p("AgbBFIAAiJIA3AAIAACJg");
	this.shape.setTransform(-65.8,28.1,6.644,6.644);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA621").s().p("AgQA7IAAh0IAhAAIAAB0g");
	this.shape_1.setTransform(-35.2,29.3,6.644,6.644);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBtQgIAAgPgHIgPgHIAAhdIASgMQATgQAJgLQAKgMAMggQAKgbACAAQAOAAADAUIABATIgMAwIA2AAQAMAAAGAJQADAFAAAFIgLBYQgCAPgLAFIgLADg");
	this.shape_2.setTransform(30.6,-1.5,6.644,6.644);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-74,169.5,148.1);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AhgBjQgtglAAg9QAAg3AmgmQAmgkBBgBQBKAAAmAsQAfAjAAAyQAAA4gnAlQglAkhDAAQg7ABglgfgAgggvQgOAQAAAfQAAAiAOAPQANAQATAAQAUAAANgQQANgPABgiQgBgfgNgQQgNgQgTAAQgUAAgNAQg");
	this.shape.setTransform(261.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AhtCHQgbgmAAg4QABg8AdggQAdghAvAAQAWAAAQAIQASAHAOAPIAAh3IBhAAIAAFVIhaAAIAAgkQgSAXgQAJQgTAKgZAAQgzAAgbgngAgdAAQgLANAAAgQAAAfALAOQAMAOARAAQAQAAANgOQAMgOgBghQABgdgMgOQgNgNgRAAQgRAAgLANg");
	this.shape_1.setTransform(228.6,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_2.setTransform(205.2,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AiHCuIAAlWIBZAAIAAAmQASgYAPgIQATgLAaAAQAyAAAbAmQAcAmgBA5QAAA8gdAgQgeAhgtAAQgXAAgQgHQgSgIgPgPIAAB3gAgchZQgMAOAAAhQAAAdANANQAMAOARAAQARAAAKgOQAMgLAAgiQAAgegMgOQgMgOgRAAQgPAAgNAOg");
	this.shape_3.setTransform(181.8,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("Ah3BtQgXgUAAgfQAAgcARgTQAQgQAtgJIBEgPQAQgEASgHQAAgSgIgHQgHgHgTAAQgUAAgNAHQgIAHgGAQIhbgKQAFgYAJgNQAKgOASgLQAOgHAWgDQAXgFAcAAQAoABAaAFQAaAEARAPQANALAHATQAHAUAAARIAABsQAAASACAKQADAKAHAPIhaAAIgHgPIgDgQQgTATgTAHQgWALgigBQgsABgYgVgAgCATQgcAHgJAIQgHAHgBAKQABALAHAIQAJAGAPAAQAPABAMgIQAOgIAGgLQAFgLABgSIAAgPQgUAHgUAGg");
	this.shape_4.setTransform(148.8,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AAwCrIg2hpQgLgUgIgGQgMgIgOAAIgKAAIAACLIhrAAIAAlVICwAAQAwAAAbAIQAaAJAQAXQAPAWAAAhQAAAdgMAVQgMAUgVALQgNAIgZAGQAUAGAIAGQAGAEALAOQAMAOADAIIA0BjgAg9gfIAtAAQAHAAATgFQAKgCAIgJQAGgIAAgMQAAgQgLgJQgKgJgbAAIgvAAg");
	this.shape_5.setTransform(115.9,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("Ah8CpIgIhDQAVAHAZAAQARAAAKgIQALgHAHgVIhoj3IBkAAIAyCnIAvinIBeAAIhiEIQgRAugSAQQgXAWgyAAQgVABgrgGg");
	this.shape_6.setTransform(64.9,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape_7.setTransform(26,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_8.setTransform(10.1,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("Ag4B6QgbgHgTgQQgTgRgLgXQgKgVAAglQAAgkANgaQAJgTARgPQARgPARgHQAcgMAqAAQA9AAAgAXQAgAVAMAqIhZAMQgEgQgMgIQgLgIgTAAQgVAAgPAQQgOASAAAgQAAAfAOAPQAPARAUgBQATAAANgJQAMgKAHgTIBaAKQgHAcgRAVQgRAVgbALQgbALgpAAQglABgagIg");
	this.shape_9.setTransform(-13.8,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("Ah2BtQgYgUAAgfQAAgcARgTQARgQAsgJIBEgPQAQgEARgHQABgSgIgHQgHgHgSAAQgVAAgMAHQgKAHgFAQIhbgKQAFgYAKgNQAJgOATgLQANgHAXgDQAWgFAbAAQApABAaAFQAaAEASAPQAMALAHATQAHAUAAARIAABsQAAASACAKQADAKAHAPIhaAAIgHgPIgDgQQgTATgSAHQgYALghgBQgtABgWgVgAgBATQgdAHgIAIQgIAHAAAKQAAALAIAIQAHAGAPAAQAQABAMgIQAOgIAGgLQAGgLgBgSIAAgPQgTAHgTAGg");
	this.shape_10.setTransform(-45.9,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AiCCrIAAlVIEFAAIAABJIiaAAIAAA8ICDAAIAABEIiDAAIAACMg");
	this.shape_11.setTransform(-76,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgxA1QAbgNAKgMQAKgNABgPIgwAAIAAheIBjAAIAABOQAAAqgSAZQgRAZgqATg");
	this.shape_12.setTransform(-116.7,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AheBuQgdgUgIgjIBfgJQAGARAKAHQALAIAPgBQAUABAKgJQAIgGAAgJQAAgKgKgGQgIgEgfgGQgygJgTgHQgUgHgNgQQgNgRAAgWQAAgaAOgRQAOgSAZgJQAagJApAAQArABAWAGQAVAHAOAOQAOAOAJAZIhaAJQgEgMgIgFQgLgIgOAAQgQAAgHAGQgIAGAAAHQAAAJAJAGQAKAEAdAEQAwAFAXAKQAXAJANAQQAMASAAAVQAAAWgNAUQgNAUgcANQgcAMgwgBQhDAAgdgTg");
	this.shape_13.setTransform(-139.6,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("Ah3BtQgXgUAAgfQAAgcARgTQARgQAsgJIBEgPQAQgEASgHQAAgSgIgHQgHgHgTAAQgUAAgNAHQgIAHgGAQIhbgKQAFgYAJgNQAKgOASgLQAOgHAWgDQAYgFAbAAQAoABAaAFQAaAEARAPQAMALAIATQAHAUAAARIAABsQAAASACAKQADAKAHAPIhaAAIgHgPIgDgQQgTATgTAHQgXALghgBQgsABgYgVgAgCATQgcAHgJAIQgHAHgBAKQABALAHAIQAJAGAPAAQAPABAMgIQAOgIAGgLQAFgLABgSIAAgPQgUAHgUAGg");
	this.shape_14.setTransform(-169.9,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape_15.setTransform(-194,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_16.setTransform(-210,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AiCCrIAAlVIEFAAIAABJIiaAAIAAA8ICDAAIAABEIiDAAIAACMg");
	this.shape_17.setTransform(-233.3,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AAjB/IAAiHQAAgYgJgJQgIgKgQAAQgPAAgLANQgLANAAAgIAAB4IhfAAIAAj3IBYAAIAAAoQAVgYAUgLQATgLAcAAQAoAAAXAYQAWAXAAAyIAACcg");
	this.shape_18.setTransform(-281.9,6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_19.setTransform(-306,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("Ah0CPQgighgFg0IBmgHQADAZAKANQARAVAcAAQAXAAAMgLQAMgLAAgOQAAgNgMgLQgLgKgpgKQhGgPgegYQgdgaAAgpQAAgaAPgYQAPgXAfgOQAfgNAzAAQBCAAAjAYQAiAZAHA1IhkAGQgEgXgMgLQgNgKgVAAQgSAAgKAIQgJAHAAAMQgBAIAJAHQAHAGAcAGQBDAPAfAQQAeAPAOAVQANAWAAAcQAAAigSAbQgSAcghAPQghAOgyAAQhVAAgigig");
	this.shape_20.setTransform(-331.4,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.6,-35.8,701.3,71.7);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AhgB/IAAj3IBZAAIAAApQALgbAOgKQANgKAUAAQAVAAAZANIgdBEQgRgHgKAAQgTAAgKAQQgNAWAAA5IAABUg");
	this.shape.setTransform(296.8,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("Ah3BtQgXgVAAgeQAAgcARgSQAQgRAtgIIBEgPQAPgFATgHQgBgRgGgIQgIgHgSAAQgWAAgMAIQgJAFgFAQIhcgJQAGgYAKgOQAJgNATgLQAMgGAYgFQAXgDAbAAQAoAAAaAEQAaAFARAQQAMAKAIAUQAHASAAASIAABsQAAARACAKQACAKAIAQIhaAAIgHgPIgDgPQgTARgTAJQgXAJghABQgsgBgYgUgAgBASQgeAIgHAHQgJAJABAJQgBALAJAIQAHAHAPAAQAQAAANgIQANgIAGgLQAGgLAAgSIAAgPQgUAHgTAFg");
	this.shape_1.setTransform(268.1,45.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AhlCbQgcgXAAglIABgNIBcAKQAEANAHAFQALAIAOAAQAUAAAKgMQAKgLAAgbIAAgmQgOARgOAHQgUAMgZAAQgyAAgfgrQgWgdAAgzQAAg6AcgfQAdgeAtAAQAdAAARAKQATAJAQAXIAAglIBaAAIAADpIAAALQAAAYgKAVQgKAVgRANQgQAOgZAFQgaAGghAAQhJAAgcgWgAgdheQgLANAAAfQAAAbALANQALALASAAQARAAAMgLQAMgOAAgbQAAgbgMgPQgNgOgQAAQgTAAgKANg");
	this.shape_2.setTransform(235.4,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AhgBjQgtglAAg+QAAg2AmglQAmgmBBABQBKAAAmArQAfAjAAAyQAAA4gnAlQglAlhDAAQg7AAglgfgAggguQgOAPAAAfQAAAhAOAQQANAQATAAQAUAAANgPQANgQABgiQgBgggNgPQgNgQgTAAQgUAAgNARg");
	this.shape_3.setTransform(204,45.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AA5CrIAAiLIhyAAIAACLIhqAAIAAlVIBqAAIAAB4IByAAIAAh4IBrAAIAAFVg");
	this.shape_4.setTransform(168,40.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AhsBnQgWgXAAgxIAAidIBgAAIAACHQAAAYAIAKQAJAJAQAAQAPAAALgNQAKgNAAggIAAh4IBgAAIAAD3IhZAAIAAgoQgUAZgUAKQgSALgeAAQgnAAgXgYg");
	this.shape_5.setTransform(116,45.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgYClQgQgJgJgTQgHgSgBgqIAAhVIgjAAIAAhGIAjAAIAAguIBegxIAABfIA1AAIAABGIg1AAIAABVQAAARADAFQAEAHAMABQALgBATgGIAHBCQgjAIgfAAQgiAAgRgJg");
	this.shape_6.setTransform(89.4,40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AhNB0QgcgPgTgeQgTgeAAgpQAAg5AmgjQAlglBCABQA0gBAeARQAfAQAQAfQAQAeABAwIAAAKIi9AAQACAXAKAMQAOAPAUAAQAOAAAMgGQAIgFAJgLIBeAJQgVAlgfARQgeAQg4AAQgwAAgdgOgAgig2QgJALgCAXIBbAAQgCgcgMgMQgNgMgTAAQgVAAgNASg");
	this.shape_7.setTransform(46.8,45.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AhtCIQgbgnAAg4QAAg7AeghQAeghAtAAQAXAAAQAHQASAIAOAPIAAh3IBhAAIAAFWIhaAAIAAgmQgSAYgQAIQgTALgZAAQgzAAgbgmgAgdAAQgLANAAAhQAAAeALAOQAMAOARAAQAQAAANgOQAMgPgBgfQABgegMgOQgNgNgRAAQgQAAgMANg");
	this.shape_8.setTransform(14.1,40.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AhtCIQgbgnAAg4QABg7AdghQAdghAvAAQAVAAARAHQASAIAOAPIAAh3IBhAAIAAFWIhaAAIAAgmQgTAYgPAIQgTALgZAAQgzAAgbgmgAgdAAQgLANAAAhQAAAeALAOQAMAOARAAQARAAAMgOQALgPABgfQgBgegLgOQgNgNgRAAQgRAAgLANg");
	this.shape_9.setTransform(-33.9,40.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("Ah2BtQgYgVAAgeQAAgcARgSQARgRAsgIIBEgPQAQgFARgHQABgRgIgIQgHgHgSAAQgVAAgMAIQgKAFgFAQIhbgJQAFgYAKgOQAJgNATgLQANgGAXgFQAWgDAbAAQApAAAaAEQAaAFASAQQAMAKAHAUQAHASAAASIAABsQAAARACAKQADAKAHAQIhaAAIgHgPIgDgPQgTARgSAJQgYAJghABQgtgBgWgUgAgBASQgdAIgIAHQgIAJAAAJQAAALAIAIQAHAHAPAAQAQAAAMgIQAOgIAGgLQAGgLgBgSIAAgPQgTAHgTAFg");
	this.shape_10.setTransform(-65.2,45.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AhtCIQgbgnAAg4QABg7AdghQAdghAvAAQAVAAARAHQASAIAOAPIAAh3IBgAAIAAFWIhZAAIAAgmQgSAYgQAIQgTALgZAAQgzAAgbgmgAgdAAQgLANAAAhQAAAeAMAOQALAOARAAQARAAALgOQAMgPABgfQgBgegMgOQgMgNgRAAQgRAAgLANg");
	this.shape_11.setTransform(-97.9,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_12.setTransform(-121.3,40.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AhsCIQgbgnAAg4QAAg7AdghQAeghAtAAQAXAAAQAHQASAIAOAPIAAh3IBgAAIAAFWIhZAAIAAgmQgTAYgPAIQgTALgZAAQgzAAgagmgAgdAAQgLANAAAhQAAAeAMAOQALAOARAAQARAAALgOQAMgPAAgfQAAgegMgOQgMgNgRAAQgQAAgMANg");
	this.shape_13.setTransform(-145.9,40.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AhgBjQguglAAg+QAAg2AnglQAngmBAABQBKAAAmArQAeAjABAyQgBA4glAlQgnAlhCAAQg7AAglgfgAggguQgOAPAAAfQAAAhAOAQQANAQATAAQAUAAAOgPQANgQgBgiQABgggNgPQgOgQgUAAQgSAAgOARg");
	this.shape_14.setTransform(-177.3,45.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("ABzB/IAAiMQAAgRgHgIQgJgNgOAAQgRAAgKAMQgLAMAAAbIAAB/IhdAAIAAiHQAAgRgCgGQgDgJgIgGQgHgFgKAAQgRAAgLAMQgKAMAAAbIAAB/IhgAAIAAj3IBZAAIAAAkQAUgXATgJQAUgKAcAAQAdAAAQALQARAKALAVQAXgYASgJQATgJAbAAQAoAAAWAYQAXAYAAAyIAACbg");
	this.shape_15.setTransform(-217.2,44.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AhgBjQguglAAg+QAAg2AnglQAngmBAABQBJAAAnArQAeAjAAAyQABA4gmAlQgmAlhDAAQg7AAglgfgAggguQgOAPAAAfQAAAhAOAQQANAQATAAQAUAAAOgPQAMgQAAgiQAAgggMgPQgOgQgUAAQgSAAgOARg");
	this.shape_16.setTransform(-257.3,45.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("Ag4B7QgbgIgTgRQgTgQgLgWQgKgXAAglQAAgjANgbQAJgSARgPQARgPARgHQAcgLAqAAQA9AAAgAVQAgAWAMAqIhZAMQgEgQgMgIQgLgIgTAAQgVAAgPARQgOARAAAgQAAAfAOAQQAPAQAUAAQATAAANgKQAMgJAHgVIBaALQgHAcgRAVQgRAVgbALQgbAMgpAAQglgBgagGg");
	this.shape_17.setTransform(-289.2,45.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("Ah2BtQgYgUAAgfQAAgcARgSQARgRAsgIIBEgQQAQgEARgHQABgRgIgIQgHgHgTAAQgVAAgLAHQgJAGgGAQIhbgJQAFgYAJgOQAKgNATgKQANgHAXgFQAWgDAbAAQApAAAaAEQAaAFASAQQALAKAIATQAHATAAASIAABsQAAASACAJQACALAIAPIhaAAIgHgOIgDgQQgTARgSAJQgYAJghABQgtAAgWgVgAgBASQgeAIgIAHQgHAJAAAJQAAALAHAHQAJAIAOAAQAQgBAMgHQAOgIAGgLQAFgLAAgSIAAgPQgTAHgTAFg");
	this.shape_18.setTransform(335.2,-32.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape_19.setTransform(311.1,-36.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AhNB0QgdgOgSgfQgSgegBgpQAAg4AmgkQAlglBCABQAzgBAfARQAfAQARAfQAPAeAAAwIAAAKIi9AAQADAXAKAMQANAQAVAAQAOgBAMgGQAJgFAIgLIBfAIQgWAmgfAQQgeAQg4ABQgxAAgcgOgAgjg2QgIAMgDAWIBdAAQgDgcgMgMQgMgMgUAAQgVAAgOASg");
	this.shape_20.setTransform(271.2,-32.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AhsCHQgbgmAAg3QgBg9AeggQAeghAtAAQAXAAAQAHQASAIAOAPIAAh3IBgAAIAAFWIhZAAIAAglQgTAXgPAIQgTALgZAAQgzAAgagngAgdAAQgLANAAAgQAAAfAMAOQALAPARAAQARAAALgPQANgPAAgfQAAgegNgOQgMgNgRAAQgQAAgMANg");
	this.shape_21.setTransform(238.5,-36.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AheBuQgdgTgIgkIBfgJQAGARAKAHQALAHAPAAQAUAAAKgIQAIgGAAgJQAAgKgKgGQgIgEgfgGQgygJgTgHQgUgHgNgQQgNgRAAgWQAAgZAOgSQAOgSAZgJQAagIApAAQArgBAWAIQAVAGAOAOQAOAOAJAZIhaAJQgEgMgIgGQgLgHgOAAQgQAAgHAFQgIAHAAAIQAAAIAJAFQAKAFAdAEQAwAFAXAKQAXAKANAPQAMASAAAVQAAAVgNAVQgNAVgcALQgcAMgwABQhDAAgdgUg");
	this.shape_22.setTransform(208.2,-32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AhNB0QgcgOgTgfQgSgeAAgpQAAg4AlgkQAlglBCABQAzgBAgARQAfAQAQAfQAQAeAAAwIAAAKIi+AAQADAXAKAMQAOAQAUAAQAOgBANgGQAHgFAKgLIBdAIQgWAmgeAQQgeAQg4ABQgwAAgdgOgAgig2QgJAMgDAWIBdAAQgDgcgMgMQgMgMgUAAQgUAAgOASg");
	this.shape_23.setTransform(177.9,-32.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AhtCHQgbgmAAg3QABg9AdggQAdghAvAAQAVAAARAHQASAIAOAPIAAh3IBhAAIAAFWIhaAAIAAglQgTAXgPAIQgTALgZAAQgzAAgbgngAgdAAQgLANAAAgQAAAfALAOQAMAPARAAQARAAAMgPQALgPABgfQgBgegLgOQgNgNgRAAQgRAAgLANg");
	this.shape_24.setTransform(145.2,-36.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AhgBjQgtglAAg+QAAg2AmgmQAmglBBABQBKAAAmArQAfAjAAAyQAAA5gnAkQglAlhDAAQg7gBglgegAgggvQgOAQAAAfQAAAhAOAQQANAQATAAQAUAAANgPQANgQABgiQgBgfgNgQQgNgQgTAAQgUAAgNAQg");
	this.shape_25.setTransform(97.8,-32.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgXClQgRgJgIgTQgJgSAAgqIAAhVIgjAAIAAhHIAjAAIAAgtIBegxIAABeIA1AAIAABHIg1AAIAABWQAAAQADAFQAEAHANABQAKAAATgHIAHBCQgjAIgfAAQgiAAgQgJg");
	this.shape_26.setTransform(71.2,-36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AheBuQgdgTgIgkIBfgJQAGARAKAHQALAHAPAAQAUAAAKgIQAIgGAAgJQAAgKgKgGQgIgEgfgGQgygJgTgHQgUgHgNgQQgNgRAAgWQAAgZAOgSQAOgSAZgJQAagIApAAQArgBAWAIQAVAGAOAOQAOAOAJAZIhaAJQgEgMgIgGQgLgHgOAAQgQAAgHAFQgIAHAAAIQAAAIAJAFQAKAFAdAEQAwAFAXAKQAXAKANAPQAMASAAAVQAAAVgNAVQgNAVgcALQgcAMgwABQhDAAgdgUg");
	this.shape_27.setTransform(45.6,-32.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AhNB0QgcgOgTgfQgTgeAAgpQAAg4AmgkQAlglBCABQA0gBAeARQAfAQAQAfQAQAeAAAwIAAAKIi8AAQACAXAKAMQAOAQAUAAQAOgBAMgGQAJgFAIgLIBeAIQgWAmgeAQQgeAQg4ABQgwAAgdgOgAgjg2QgIAMgCAWIBbAAQgCgcgMgMQgNgMgTAAQgVAAgOASg");
	this.shape_28.setTransform(15.3,-32.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AhgBjQgtglAAg+QAAg2AmgmQAmglBBABQBKAAAmArQAeAjAAAyQAAA5gmAkQgmAlhCAAQg7gBglgegAgggvQgOAQAAAfQAAAhAOAQQANAQATAAQAUAAANgPQANgQABgiQgBgfgNgQQgNgQgTAAQgUAAgNAQg");
	this.shape_29.setTransform(-32.8,-32.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AhtCHQgbgmAAg3QABg9AdggQAdghAvAAQAVAAARAHQASAIAOAPIAAh3IBhAAIAAFWIhaAAIAAglQgTAXgPAIQgTALgZAAQgzAAgbgngAgdAAQgLANAAAgQAAAfALAOQAMAPARAAQARAAAMgPQALgPABgfQgBgegLgOQgNgNgRAAQgRAAgLANg");
	this.shape_30.setTransform(-65.4,-36.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AhgBjQgtglAAg+QgBg2AngmQAmglBBABQBKAAAmArQAfAjgBAyQAAA5gmAkQgmAlhCAAQg7gBglgegAgggvQgOAQAAAfQAAAhAOAQQANAQATAAQAUAAANgPQAOgQAAgiQAAgfgOgQQgNgQgTAAQgUAAgNAQg");
	this.shape_31.setTransform(-96.8,-32.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgzCrIAAkAIhtAAIAAhVIFBAAIAABVIhtAAIAAEAg");
	this.shape_32.setTransform(-126.9,-36.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFEFE").s().p("Ah3BtQgXgUAAgfQAAgcARgSQAQgRAtgIIBEgQQAQgEARgHQABgRgIgIQgHgHgTAAQgUAAgNAHQgIAGgGAQIhbgJQAFgYAJgOQAKgNASgKQAOgHAWgFQAXgDAbAAQApAAAaAEQAaAFARAQQANAKAHATQAHATAAASIAABsQAAASACAJQADALAHAPIhaAAIgHgOIgDgQQgTARgTAJQgWAJgiABQgtAAgXgVgAgCASQgcAIgJAHQgHAJgBAJQABALAHAHQAJAIAPAAQAPgBAMgHQAOgIAGgLQAFgLAAgSIAAgPQgTAHgUAFg");
	this.shape_33.setTransform(-176.1,-32.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("Ah7B8IAAg+IB4h3IhuAAIAAhCIDlAAIAAA4Ih8B+ICEAAIAABBg");
	this.shape_34.setTransform(-205.6,-32.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AguCrIAAj3IBdAAIAAD3gAguhpIAAhBIBdAAIAABBg");
	this.shape_35.setTransform(-226.9,-36.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AguCrIAAlVIBdAAIAAFVg");
	this.shape_36.setTransform(-242.9,-36.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("Ah2BtQgYgUAAgfQAAgcARgSQARgRAsgIIBEgQQAQgEARgHQAAgRgHgIQgHgHgSAAQgVAAgMAHQgKAGgFAQIhbgJQAFgYAKgOQAJgNATgKQANgHAXgFQAWgDAbAAQApAAAaAEQAaAFASAQQAMAKAHATQAHATAAASIAABsQAAASACAJQADALAHAPIhaAAIgHgOIgDgQQgTARgSAJQgYAJghABQgtAAgWgVgAgBASQgdAIgIAHQgIAJAAAJQAAALAIAHQAHAIAPAAQAQgBAMgHQAOgIAGgLQAGgLgBgSIAAgPQgTAHgTAFg");
	this.shape_37.setTransform(-266.8,-32.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AhNB0QgcgOgTgfQgTgeAAgpQAAg4AmgkQAlglBCABQA0gBAeARQAfAQAQAfQAQAeAAAwIAAAKIi8AAQACAXAKAMQAOAQAUAAQAOgBAMgGQAIgFAJgLIBeAIQgWAmgeAQQgeAQg4ABQgwAAgdgOgAgjg2QgIAMgCAWIBbAAQgCgcgMgMQgNgMgTAAQgVAAgOASg");
	this.shape_38.setTransform(-298.8,-32.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AAwCrIg2hpQgLgUgIgGQgMgIgOAAIgKAAIAACLIhrAAIAAlVICwAAQAwAAAbAIQAaAJAQAXQAPAWAAAhQAAAdgMAVQgMAUgVALQgNAIgZAGQAUAGAIAGQAGAEALAOQAMAOADAIIA0BjgAg9gfIAtAAQAHAAATgFQAKgCAIgJQAGgIAAgMQAAgQgLgJQgKgJgbAAIgvAAg");
	this.shape_39.setTransform(-330.5,-36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.4,-74.5,787,149);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgyBIQgTgOgGgXIArgHQADANAJAHQAIAGANAAQARAAAJgGQAGgEAAgIQAAgFgDgDQgEgDgLgDQgzgLgOgKQgTgLAAgYQAAgVARgPQAQgOAkAAQAgAAAQALQAQALAHAVIgpAIQgDgKgHgFQgIgFgMAAQgQAAgIAFQgFADAAAGQAAAEAEADQAGAFAhAIQAjAIAOALQANAKAAAUQAAAXgTAQQgTAQglAAQgfAAgUgNg");
	this.shape.setTransform(34.8,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("Ag7A5QgQgWAAgiQAAgnAVgXQAWgXAgAAQAjAAAVAYQAVAYgBAwIhrAAQABATAKALQAKALANAAQAKAAAHgGQAHgFAEgNIArAIQgIAYgSAMQgSAMgbAAQgpAAgVgcgAgVgpQgJALAAARIA/AAQAAgSgKgKQgJgKgNAAQgMAAgKAKg");
	this.shape_1.setTransform(17.5,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgGBtQgJgEgEgHQgFgFgCgMQgBgHAAgXIAAhGIgUAAIAAgjIAUAAIAAggIAqgZIAAA5IAdAAIAAAjIgdAAIAABAQAAAVABADQAAADADADQADACAFAAQAGAAALgFIAEAiQgPAGgTABQgMgBgIgDg");
	this.shape_2.setTransform(3.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgUBxIAAijIApAAIAACjgAgUhHIAAgpIApAAIAAApg");
	this.shape_3.setTransform(-6.1,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("ABNBUIAAhdQAAgYgFgHQgGgJgMAAQgJAAgJAFQgHAGgEAKQgEALAAAVIAABQIgpAAIAAhYQAAgYgDgIQgCgGgEgEQgGgDgIAAQgKAAgIAFQgIAFgDAKQgEALAAAVIAABRIgrAAIAAijIAnAAIAAAWQAWgaAeAAQAPABANAGQAJAHAIAMQAKgMAMgHQANgGAOgBQATAAAMAIQANAHAGAOQAFALgBAXIAABog");
	this.shape_4.setTransform(-24.7,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("Ag9BIQgPgOAAgVQABgOAGgLQAHgLAMgEQAMgGAWgEQAdgGALgFIAAgEQAAgMgFgGQgHgFgPAAQgMAAgGAFQgHAEgEALIgngHQAHgXAPgMQARgLAgAAQAbAAAOAHQAOAGAHALQAFALAAAcIgBAxQABAVACALQACAKAFAMIgrAAIgEgNIgBgFQgMALgMAFQgKAFgPAAQgaAAgOgNgAAAAJQgSAEgFAEQgJAGAAAJQAAAJAHAHQAGAHALAAQAJAAALgIQAJgGACgIQABgGAAgQIAAgIQgIADgQADg");
	this.shape_5.setTransform(-47.5,32.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("Ag0BUIAAijIApAAIAAAXQAKgQAGgFQAIgGALAAQAPABAOAHIgOAmQgLgGgJAAQgJAAgHAEQgEAFgEANQgDAOAAAnIAAA0g");
	this.shape_6.setTransform(-61.3,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgGBtQgJgEgEgHQgFgFgCgMQgBgHAAgXIAAhGIgUAAIAAgjIAUAAIAAggIAqgZIAAA5IAdAAIAAAjIgdAAIAABAQAAAVABADQAAADADADQADACAFAAQAGAAALgFIAEAiQgPAGgTABQgMgBgIgDg");
	this.shape_7.setTransform(-74,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgyBIQgTgOgGgXIArgHQADANAJAHQAIAGANAAQARAAAJgGQAGgEAAgIQAAgFgDgDQgEgDgLgDQgzgLgOgKQgTgLAAgYQAAgVARgPQAQgOAkAAQAgAAAQALQAQALAHAVIgpAIQgDgKgHgFQgIgFgMAAQgQAAgIAFQgFADAAAGQAAAEAEADQAGAFAhAIQAjAIAOALQANAKAAAUQAAAXgTAQQgTAQglAAQgfAAgUgNg");
	this.shape_8.setTransform(68.3,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("Ag7A5QgQgWAAgiQAAgnAVgXQAWgXAgAAQAjAAAVAYQAVAYgBAwIhrAAQABATAKALQAKALANAAQAKAAAHgGQAHgFAEgNIArAIQgIAYgSAMQgSAMgbAAQgpAAgVgcgAgVgpQgJALAAARIA/AAQAAgSgKgKQgJgKgNAAQgMAAgKAKg");
	this.shape_9.setTransform(50.9,-9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgGBtQgJgEgEgHQgFgFgCgMQgBgHAAgXIAAhGIgUAAIAAgjIAUAAIAAggIAqgZIAAA5IAdAAIAAAjIgdAAIAABAQAAAUABAEQAAAEADACQADACAFAAQAGAAALgFIAEAiQgPAGgTABQgMgBgIgDg");
	this.shape_10.setTransform(37,-12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AAfBTIAAhTQAAgZgDgIQgDgIgGgEQgGgEgJgBQgJABgKAGQgIAGgDALQgEAJAAAaIAABKIgrAAIAAiiIAoAAIAAAYQAVgcAfAAQAOABAMAFQANAEAFAJQAGAIADAKQACAKAAAUIAABjg");
	this.shape_11.setTransform(22.1,-9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("Ag7A5QgQgWAAgiQAAgnAVgXQAWgXAgAAQAjAAAVAYQAVAYgBAwIhrAAQABATAKALQAKALANAAQAKAAAHgGQAHgFAEgNIArAIQgIAYgSAMQgSAMgbAAQgpAAgVgcgAgVgpQgJALAAARIA/AAQAAgSgKgKQgJgKgNAAQgMAAgKAKg");
	this.shape_12.setTransform(3.4,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgUBxIAAijIApAAIAACjgAgUhHIAAgpIApAAIAAApg");
	this.shape_13.setTransform(-9.6,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgwBMQgOgHgGgNQgFgNAAgXIAAhnIArAAIAABMQAAAhADAHQACAJAGAEQAHAFAJgBQAJAAAJgFQAJgGADgJQAEgKAAghIAAhGIArAAIAACjIgoAAIAAgYQgJANgPAHQgNAHgQABQgQAAgNgIg");
	this.shape_14.setTransform(-23.8,-9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("Ag4BnQgRgPAAgWIAAgFIAyAGQABAJAEADQAHAFALAAQARAAAIgFQAGgEADgHQACgGAAgOIAAgYQgTAagcAAQghAAgUgcQgPgWAAgfQAAgpAUgWQAUgWAeAAQAcAAAUAbIAAgXIApAAIAACRQAAAdgFAPQgFAOgJAIQgIAJgPAEQgOAFgWAAQgoAAgSgOgAgYhGQgKAMAAAZQAAAaAKAKQAKAMAOAAQAPAAALgMQALgLAAgYQAAgagLgMQgKgNgQAAQgOAAgKANg");
	this.shape_15.setTransform(-43.6,-6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgUBxIAAijIApAAIAACjgAgUhHIAAgpIApAAIAAApg");
	this.shape_16.setTransform(-57.2,-12.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AgyBIQgTgOgGgXIArgHQADANAJAHQAIAGANAAQARAAAJgGQAGgEAAgIQAAgFgDgDQgEgDgLgDQgzgLgOgKQgTgLAAgYQAAgVARgPQAQgOAkAAQAgAAAQALQAQALAHAVIgpAIQgDgKgHgFQgIgFgMAAQgQAAgIAFQgFADAAAGQAAAEAEADQAGAFAhAIQAjAIAOALQANAKAAAUQAAAXgTAQQgTAQglAAQgfAAgUgNg");
	this.shape_17.setTransform(-70.9,-9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AgyBIQgTgOgGgXIArgHQADANAJAHQAIAGANAAQARAAAJgGQAGgEAAgIQAAgFgDgDQgEgDgLgDQgzgLgOgKQgTgLAAgYQAAgVARgPQAQgOAkAAQAgAAAQALQAQALAHAVIgpAIQgDgKgHgFQgIgFgMAAQgQAAgIAFQgFADAAAGQAAAEAEADQAGAFAhAIQAjAIAOALQANAKAAAUQAAAXgTAQQgTAQglAAQgfAAgUgNg");
	this.shape_18.setTransform(75.3,-51.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgpBLQgVgKgLgUQgKgTgBgbQABgVAKgVQALgUAUgLQATgKAXAAQAkAAAYAYQAYAYAAAkQAAAkgYAZQgYAYgkAAQgVAAgUgKgAgbgkQgMANAAAXQAAAYAMANQALANAQAAQAQAAAMgNQALgNAAgYQAAgXgLgNQgMgNgQAAQgQAAgLANg");
	this.shape_19.setTransform(57.3,-51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgUBxIAAjhIApAAIAADhg");
	this.shape_20.setTransform(43.2,-54.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("Ag9BIQgPgOAAgVQAAgOAHgLQAGgLAMgEQAMgGAXgEQAdgGAMgFIAAgEQAAgMgHgGQgGgFgPAAQgMAAgGAFQgGAEgFALIgngHQAHgXAPgMQARgLAgAAQAbAAAPAHQANAGAHALQAFALAAAcIgBAxQAAAVADALQACAKAGAMIgrAAIgFgNIgBgFQgLALgNAFQgLAFgOAAQgZAAgPgNgAAAAJQgSAEgGAEQgIAGAAAJQAAAJAGAHQAIAHAKAAQAKAAAKgIQAJgGACgIQABgGABgQIAAgIQgJADgQADg");
	this.shape_21.setTransform(21.2,-51.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AhIBSIAAgiIA+hFIAUgZIgSABIg6AAIAAgkICGAAIAAAfIg/BHIgUAYIAUgBIBEAAIAAAmg");
	this.shape_22.setTransform(4.3,-51.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgUBxIAAiiIApAAIAACigAgUhIIAAgoIApAAIAAAog");
	this.shape_23.setTransform(-7.9,-54.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AgUBxIAAjhIApAAIAADhg");
	this.shape_24.setTransform(-16.7,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("Ag9BIQgOgOAAgVQgBgOAHgLQAHgLALgEQAMgGAXgEQAcgGAMgFIAAgEQABgMgHgGQgGgFgPAAQgLAAgHAFQgGAEgEALIgogHQAGgXARgMQAQgLAgAAQAbAAAPAHQAOAGAFALQAGALAAAcIAAAxQAAAVACALQACAKAGAMIgsAAIgDgNIgCgFQgMALgMAFQgLAFgOAAQgaAAgOgNgAAAAJQgSAEgGAEQgIAGAAAJQAAAJAGAHQAIAHAKAAQAKAAALgIQAHgGADgIQABgGAAgQIAAgIQgIADgQADg");
	this.shape_25.setTransform(-29.9,-51.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("Ag7A5QgQgWAAgiQAAgnAVgXQAWgXAgAAQAjAAAVAYQAVAYgBAwIhrAAQABATAKALQAKALANAAQAKAAAHgGQAHgFAEgNIArAIQgIAYgSAMQgSAMgbAAQgpAAgVgcgAgVgpQgJALAAARIA/AAQAAgSgKgKQgJgKgNAAQgMAAgKAKg");
	this.shape_26.setTransform(-47.7,-51.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AAvBxIghgxQgQgbgHgGQgGgHgHgDQgIgCgPAAIgKAAIAABeIguAAIAAjhIBhAAQAiAAARAGQAQAGAKAQQAKAQAAAUQAAAZgPARQgPAOgeAFQAPAJAKAKQAJAKARAaIAcAtgAg3gQIAiAAQAfAAAIgDQAJgDAEgHQAFgGAAgLQAAgLgGgHQgGgHgLgCIgggBIgkAAg");
	this.shape_27.setTransform(-66.8,-54.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AKyQrQi+gQiFg9QiKg/iBiQQguADg2AAQjtAAjahJQjThGiiiBQijiBhZimQhcitAAi7QAAi9BcitQBZinCjiBQCiiADThHQDahJDtAAQDuAADaBJQDTBHCiCAQCiCBBaCnQBcCtAAC9QAAETi/DnQi7Dik0BvQAYAnAYAcQBCBNCFB4QBDA8A1AsQgaACgdAAQgyAAg7gFg");
	this.shape_28.setTransform(0,0,0.881,0.881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-94.4,206.7,188.9);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7764C").s().p("Ag+A/QgbgbABgkQgBgjAbgbQAagbAkAAQAkAAAbAbQAaAbABAjQgBAkgaAbQgbAagkAAQgkAAgagag");
	this.shape.setTransform(0,0,0.701,0.701);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7764C").s().p("ACJJ5QgLgEgDgLIkdzKQgCgIAFgHQAEgHAIgCQAJgCAHAEQAHAFACAIIEdTKQACAIgFAHQgEAHgIACIgFABIgGgBg");
	this.shape_1.setTransform(-9.8,-43.8,0.701,0.701);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7764C").s().p("AoPEuQgIgPAEgQQAEgQAPgIIPZoyQAPgJAQAFQAQAEAIAPQAJAOgFAQQgEARgPAIIvZIyQgKAFgKAAQgXAAgMgUg");
	this.shape_2.setTransform(-37,21.4,0.701,0.701);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7764C").s().p("AFEEDIq/moQgTgLgGgWQgFgWAMgUQALgTAWgGQAWgFAUAMIK+GoQATALAGAWQAFAWgLAUQgRAageAAQgQAAgMgIg");
	this.shape_3.setTransform(27.8,17.6,0.701,0.701);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363A40").s().p("AAvB0Ih2jZQgCgEAAgDQAAgJAIgEQAFgDAGACQAGACACAFIB2DaQACADgBADQAAAJgHAEQgDACgEAAQgIAAgEgIg");
	this.shape_4.setTransform(-49.4,-90.9,0.701,0.701);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#363A40").s().p("AhxgzIAPgZIDUCAIgPAZg");
	this.shape_5.setTransform(-88.4,-53.8,0.701,0.701);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#363A40").s().p("Ah8ALQgGAAgEgEQgEgEAAgEQAAgGAEgEQAFgFAGABID4AFQAGAAAEAEQAEAEAAAEIAAABQAAAFgEAFQgFAEgGAAg");
	this.shape_6.setTransform(-103.4,-2.2,0.701,0.701);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#363A40").s().p("Ah5BDIgBgHQAAgJAHgEIDZh3QAFgDAGACQAGACADAFIABAHQAAAJgHADIjZB3QgDACgEAAQgIAAgFgHg");
	this.shape_7.setTransform(-90.6,50,0.701,0.701);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#363A40").s().p("AhFB0QgHgFAAgIQAAgEACgDIB/jVIAYAPIh/DVQgEAHgIAAQgFAAgCgCg");
	this.shape_8.setTransform(-53.3,89,0.701,0.701);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#363A40").s().p("AgBCLQgFAAgFgEQgEgFAAgGIAEj3QAAgHAEgDQAEgFAEAAQAGAAAFAFQAEADAAAHIgED4QAAAFgEAFQgFAEgDAAg");
	this.shape_9.setTransform(-1.4,103.4,0.701,0.701);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#363A40").s().p("AhIhhQgBgDAAgEQAAgIAHgEQAFgDAGACQAGABADAFIB4DYIgZAOg");
	this.shape_10.setTransform(50.6,89.9,0.701,0.701);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#363A40").s().p("ABkBLIjVh9QgIgEAAgIQAAgFACgCQAEgFAFgCQAGgCAFADIDWB+QAGAEAAAIQAAAEgBADQgEAIgJgBQgEAAgDgCg");
	this.shape_11.setTransform(89.1,52.6,0.701,0.701);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#363A40").s().p("Ah7ANQgHAAgEgEQgEgEAAgFQAAgFAEgEQAEgFAHAAID4ACQAFAAAFAFQAEAEAAAEQAAAGgEAEQgFAEgGAAg");
	this.shape_12.setTransform(103.5,0.7,0.701,0.701);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#363A40").s().p("AhyAxIDXh6IAOAZIjXB6g");
	this.shape_13.setTransform(89.9,-51.3,0.701,0.701);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#363A40").s().p("AhFB4QgGgEgBgIQABgEABgDIB8jWQADgGAFgBQAGgCAGADQAGAFABAIIgCAHIh8DWQgEAHgIAAg");
	this.shape_14.setTransform(51.9,-89.5,0.701,0.701);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#363A40").s().p("AAFBCQgDAAgBgEIgJh7IgBAAQAAgEAEAAQAEAAABAEIAJB6IAAABQABAEgFAAg");
	this.shape_15.setTransform(-9.1,-101.5,0.701,0.701);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#363A40").s().p("AAGA+IgTh6IAAAAQAAgEADAAIADAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIATB6IAAAAQAAAEgEAAIAAABQgEAAAAgEg");
	this.shape_16.setTransform(-16.6,-100.5,0.701,0.701);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#363A40").s().p("AgRg7IAIgCIAbB4IgHACg");
	this.shape_17.setTransform(-24.1,-99,0.701,0.701);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#363A40").s().p("AAPA9Iglh2IAAgBQAAgDADgBQAEgCABAFIAlB1IAAABQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIgCABQgDAAgBgDg");
	this.shape_18.setTransform(-31.4,-96.9,0.701,0.701);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#363A40").s().p("AAUA7IguhyIAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAEgCABAEIAuByIAAACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgCABQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_19.setTransform(-38.6,-94.3,0.701,0.701);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#363A40").s().p("AAgA2IhGhlIgBgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgCADADIBGBlIABACQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_20.setTransform(-58.6,-83.3,0.701,0.701);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#363A40").s().p("AAkAzIhNhfIgCgDQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQADgDADADIBNBfIABADIgBADIgDABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_21.setTransform(-64.7,-78.7,0.701,0.701);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#363A40").s().p("AAoAwIhVhZIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQACgCADACIBVBZIABADIgBADIgDABg");
	this.shape_22.setTransform(-70.3,-73.7,0.701,0.701);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#363A40").s().p("AAsAtIhchSIgBgDIABgDQADgDADADIBbBSQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABIgBACQAAABAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_23.setTransform(-75.7,-68.2,0.701,0.701);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#363A40").s().p("AAvApIhhhKQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgCQADgDACACIBiBLQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAADQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_24.setTransform(-80.5,-62.4,0.701,0.701);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#363A40").s().p("AA2AdIhwgyIADgIIBwAzQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAACQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_25.setTransform(-92.3,-42.9,0.701,0.701);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#363A40").s().p("Ag7gRQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIABgCQABgEAEACIB0AqQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_26.setTransform(-95.3,-35.9,0.701,0.701);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#363A40").s().p("Ag6gMQgDAAAAgEIAAgBQABgEAEABIB2AiIgCAHg");
	this.shape_27.setTransform(-97.9,-28.7,0.701,0.701);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363A40").s().p("Ag7gHQgDAAAAgEIAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABABIB4AYIgCAIg");
	this.shape_28.setTransform(-99.7,-21.3,0.701,0.701);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#363A40").s().p("AA9AMIh7gPQgDAAAAgEIAAAAQABgFAEABIB6APQAEAAAAAEIAAABQgBADgEAAg");
	this.shape_29.setTransform(-100.9,-13.8,0.701,0.701);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#363A40").s().p("AhBAGIAAgBQAAgEADAAIB7gJQAFAAAAADIAAABQAAAEgEAAIh7AJQgEAAAAgDg");
	this.shape_30.setTransform(-101.5,9,0.701,0.701);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#363A40").s().p("Ag8AOQgDAAgCgDIAAgBQAAgDAEgBIB6gTQADgBACAFIAAAAQAAADgEABIh6ATg");
	this.shape_31.setTransform(-100.5,16.6,0.701,0.701);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363A40").s().p("Ag8ATQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgBgBQAAgDAEgBIB3gcQAEgBABAEIABABQAAADgEABIh4Acg");
	this.shape_32.setTransform(-99,24,0.701,0.701);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363A40").s().p("Ag+AUIAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBABAAIB1glQAEgBABAEIAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBABIh2AlQgDAAgBgDg");
	this.shape_33.setTransform(-96.9,31.4,0.701,0.701);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363A40").s().p("Ag8AZIAAgBQgBgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIByguQAEgCACAEIAAACQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABIhyAtIgBABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_34.setTransform(-94.3,38.5,0.701,0.701);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#363A40").s().p("Ag1AmIgBgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIBkhGQAEgCACADIABACQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIhlBHIgCABIgDgCg");
	this.shape_35.setTransform(-83.3,58.6,0.701,0.701);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#363A40").s().p("AgyAqIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIBfhNQAEgDACADIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIhfBOIgDABQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_36.setTransform(-78.7,64.6,0.701,0.701);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#363A40").s().p("AguAtQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIACgEIBYhVIAGAGIhYBVIgEACQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_37.setTransform(-73.7,70.3,0.701,0.701);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#363A40").s().p("AgrAxQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgDIBShbQADgDACADQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBACIhSBcIgDABg");
	this.shape_38.setTransform(-68.3,75.6,0.701,0.701);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#363A40").s().p("AgnA0IgCgDIABgDIBLhiIAHAGIhMBhQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_39.setTransform(-62.5,80.5,0.701,0.701);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363A40").s().p("AgbA8QAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIAzhwQACgEAEACQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABIAAACIgzBwQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_40.setTransform(-42.9,92.4,0.701,0.701);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#363A40").s().p("AgYA6IAphzQABgEAEABQABAAABABQAAAAABABQAAAAAAABQAAAAAAABIgqB1g");
	this.shape_41.setTransform(-35.9,95.2,0.701,0.701);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#363A40").s().p("AgRBAQgBgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAhh4QABgEAEACQADABAAADIAAABIghB2QAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_42.setTransform(-28.7,97.7,0.701,0.701);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#363A40").s().p("AgNBBQAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIAAgBIAYh5QAAgEAFABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABIAAABIgYB5QAAADgEAAg");
	this.shape_43.setTransform(-21.3,99.6,0.701,0.701);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#363A40").s().p("AgHBCQgEAAAAgEIAAgBIAPh6QABgEADAAQAEABAAADIAAABIgPB6QAAAEgEAAg");
	this.shape_44.setTransform(-13.8,100.9,0.701,0.701);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#363A40").s().p("AAAA+IgHh7QABgEADAAQADAAAAADIAHB8IAAAAQABADgFABQgDAAAAgEg");
	this.shape_45.setTransform(6.3,101.7,0.701,0.701);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#363A40").s().p("AAIBCQgEAAAAgEIgPh6IAAgBQAAgDADgBQAFAAAAAEIAPB6IAAABQAAAEgDAAg");
	this.shape_46.setTransform(13.8,100.9,0.701,0.701);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#363A40").s().p("AAMBBQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgZh5IAAgBQAAgEAEAAQADgBABAEIAYB5IABABQAAADgEABg");
	this.shape_47.setTransform(21.3,99.6,0.701,0.701);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#363A40").s().p("AANA9Ighh3IgBgBQAAgDADgBQAFgBAAAEIAiB4QAAAAAAABQAAABAAAAQgBAAAAABQgBAAgBAAIgBABQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_48.setTransform(28.7,97.7,0.701,0.701);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#363A40").s().p("AASA8Igrh1QAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAEgBABADIArB0IAAABQAAABAAABQgBAAAAAAQAAABgBAAQAAABgBAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_49.setTransform(35.9,95.3,0.701,0.701);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#363A40").s().p("AAfA2IhFhmIAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQADgDACAEIBFBlIABADIgCADIgDABQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_50.setTransform(57.4,84.1,0.701,0.701);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#363A40").s().p("AAjAzIhMhgIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgCAEADIBMBgIABADQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgDABg");
	this.shape_51.setTransform(63.5,79.6,0.701,0.701);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#363A40").s().p("AAnAwIhThaIgBgDIABgCQADgDADADIBTBaIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_52.setTransform(69.3,74.7,0.701,0.701);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#363A40").s().p("AArAtIhahTIgCgDIACgDQADgDACADIBaBTQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBADIgDABg");
	this.shape_53.setTransform(74.6,69.3,0.701,0.701);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#363A40").s().p("AgygjIAFgGIBgBMIgFAHg");
	this.shape_54.setTransform(79.6,63.6,0.701,0.701);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#363A40").s().p("AA2AeIhvgzQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBQABgEAEACIBwAzQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_55.setTransform(92.4,43,0.701,0.701);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#363A40").s().p("AA5AZIh0gqQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIABgBQABgEAEABIBzArQADABAAADIAAABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_56.setTransform(95.3,36,0.701,0.701);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#363A40").s().p("AA7AVIh3ghQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgBQABgEAFABIB2AhQADABAAADIgBACQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_57.setTransform(97.7,28.8,0.701,0.701);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#363A40").s().p("AA9ARIh6gYQgDgBAAgDIAAgBQACgEADABIB5AYQADABAAADIAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_58.setTransform(99.6,21.4,0.701,0.701);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#363A40").s().p("AA9AMIh6gPQgEAAAAgEIAAgBQAAgDAFAAIB6APQAEABAAADIAAABQgBADgDAAg");
	this.shape_59.setTransform(100.9,14,0.701,0.701);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#363A40").s().p("Ag9AKQgEAAAAgEQAAgEADAAIB7gLQAFAAAAADIAAABQAAAEgEAAIh7ALg");
	this.shape_60.setTransform(101.4,-10.2,0.701,0.701);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#363A40").s().p("Ag8APQgEAAAAgDIgBgBQAAgDAEgBIB5gUQAEgBABAEIAAABQAAADgDABIh5AUg");
	this.shape_61.setTransform(100.3,-17.8,0.701,0.701);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#363A40").s().p("Ag/AQIAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABgBIB3gdQAEgBABAEIAAABQAAADgDABIh3AdIgBAAQgDAAgBgDg");
	this.shape_62.setTransform(98.7,-25.2,0.701,0.701);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#363A40").s().p("Ag+AVIAAgBQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIB0gmQAFgCABAEIAAABQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAIh2AnQgCAAgCgDg");
	this.shape_63.setTransform(96.6,-32.5,0.701,0.701);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#363A40").s().p("Ag7AZIAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIBygvIADAHIhyAwIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_64.setTransform(93.8,-39.6,0.701,0.701);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#363A40").s().p("AgzAiIBjhJIAEAGIhjBJg");
	this.shape_65.setTransform(81.9,-60.6,0.701,0.701);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#363A40").s().p("AgxArIgBgDIABgDIBdhQQADgCADADIABACQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIhdBRIgDABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_66.setTransform(77.2,-66.5,0.701,0.701);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#363A40").s().p("AguAvQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIBXhXQADgCACACQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABIhWBXQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_67.setTransform(72,-72.1,0.701,0.701);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#363A40").s().p("AgqAyIgCgDIACgDIBPhdQADgDADADQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIAAACIhQBeQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_68.setTransform(66.4,-77.3,0.701,0.701);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#363A40").s().p("AgmA2QgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgCIBIhjQACgDAEACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgBADIhIBjQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_69.setTransform(60.5,-82,0.701,0.701);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#363A40").s().p("AgYA9QgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIABgCIAuhyQABgDAEABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABIAAABIgvByQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_70.setTransform(39.4,-93.9,0.701,0.701);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#363A40").s().p("AgUA/QgDgBAAgDIABgBIAlh1QABgEAEABQADABAAADIgmB2QAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_71.setTransform(32.3,-96.6,0.701,0.701);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#363A40").s().p("AgPBAQgDgBAAgDIAAgBIAdh3QABgEAEABQADABAAADIAAABIgdB3QgBADgDAAg");
	this.shape_72.setTransform(25,-98.8,0.701,0.701);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#363A40").s().p("AgKBCQgEgBAAgDIABgBIAUh6QAAgEAEABQADABAAADIAAABIgTB5QgBAEgDAAg");
	this.shape_73.setTransform(17.6,-100.4,0.701,0.701);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#363A40").s().p("AgFBCQgEgBAAgDIAAAAIAKh7QABgEAEAAQAEABAAADIgLB7QAAAEgEAAg");
	this.shape_74.setTransform(10.1,-101.4,0.701,0.701);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#363A40").s().p("AgICHQgFgEAAgGIAAj4QAAgGAFgEQADgFAFAAQAFAAAFAFQAEAEAAAGIAAD4QAAAGgEAEQgFAEgFAAQgFAAgDgEg");
	this.shape_75.setTransform(0,-103.5,0.701,0.701);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#363A40").s().p("ArBaHQlFiKj7j7Qj7j7iKlGQiPlQAAlxQAAlwCPlQQCKlGD7j7QD7j7FFiKQFSiPFvABQFwgBFRCPQFGCKD7D7QD7D7CKFGQCPFQAAFwQAAFxiPFQQiKFGj7D7Qj7D7lGCKQlRCOlwABQlvgBlSiOgAqD32QkqB+jlDlQjnDmh9EpQiDE0AAFQQAAFRCDEzQB9EqDnDlQDlDnEqB9QE0CDFPAAQFQAAE1iDQEph9DljnQDmjlB+kqQCDkzAAlRQAAlQiDk0Qh+kpjmjmQjljlkph+Qk1iDlQAAQlPAAk0CDg");
	this.shape_76.setTransform(0,0,0.701,0.701);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7F4F4").s().p("AqiY/Qk4iEjwjwQjwjwiEk4QiJlCAAlhQAAlgCJlDQCEk3DwjwQDwjxE4iDQFCiJFgAAQFhAAFDCJQE3CDDwDxQDxDwCDE3QCJFDAAFgQAAFhiJFCQiDE4jxDwQjwDxk3CDQlDCJlhAAQlgAAlCiJg");
	this.shape_77.setTransform(0,0,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-127.2,254.5,254.5);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgvBWQgXgMgNgXQgMgWAAgeQAAgYAMgYQANgXAVgMQAXgMAaAAQAqAAAbAcQAbAcAAAoQAAApgbAcQgcAcgpAAQgYAAgXgLgAgfgpQgNAPAAAaQAAAbANAPQANAPASAAQASAAAOgPQANgPAAgbQAAgagNgPQgOgPgSAAQgSAAgNAPg");
	this.shape.setTransform(31.8,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("Ag7BfIAAi5IAtAAIAAAbQANgTAHgGQAJgGAMAAQARAAAQAJIgPArQgOgIgKAAQgKAAgIAGQgFAFgEAPQgEAQAAAtIAAA6g");
	this.shape_1.setTransform(15.1,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AhDBBQgTgZAAgnQAAgsAYgbQAYgaAmAAQAnAAAYAcQAZAcgCA1Ih5AAQABAXALAMQALAMAPAAQAMAAAIgGQAHgHAFgOIAxAIQgKAcgUAOQgUAOgfAAQgvAAgXgggAgYgvQgLANABAUIBHAAQAAgVgLgMQgKgLgPAAQgPgBgKAMg");
	this.shape_2.setTransform(-3.5,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAjBfIAAhfQAAgcgDgJQgDgJgHgGQgJgEgIAAQgLAAgLAHQgKAIgDALQgEAKAAAeIAABVIgxAAIAAi5IAuAAIAAAbQAXgfAkAAQAQAAAOAGQAMAFAIAKQAGAIAEAMQADAOAAAUIAAByg");
	this.shape_3.setTransform(-24.3,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgXCAIAAi4IAvAAIAAC4gAgXhRIAAguIAvAAIAAAug");
	this.shape_4.setTransform(-40.3,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AhrCAIAAj/IBgAAQAcAAASAEQAWAHASASQAPAPAJAaQAIAZAAAiQAAAggIAXQgJAcgSARQgOAOgXAHQgSAGgagBgAg3BVIAnAAQATAAALgDQANgCAIgJQAIgHAGgRQAEgQAAgfQAAgdgEgPQgGgQgKgJQgIgJgQgDQgJgDgfAAIgYAAg");
	this.shape_5.setTransform(-57.9,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AhOCAIgEgnQAJACALAAQASAAAIgKQAIgJAEgQIhHi6IA1AAIAqCDIAtiDIAzAAIhODTQgIARgEAIQgGAHgGAHQgIAFgLADQgLADgOAAQgOAAgOgDg");
	this.shape_6.setTransform(75.9,-8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgvBVQgYgMgMgWQgMgWAAgeQAAgYAMgYQANgXAWgMQAWgMAaAAQAqAAAbAcQAbAcAAAoQAAAqgbAbQgbAcgqAAQgXAAgYgMgAgfgpQgNAPAAAaQAAAbANAPQANAPASAAQATAAANgPQANgQAAgaQAAgagNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_7.setTransform(45.1,-12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AhaCCIAAj/IAuAAIAAAbQAJgOAQgJQAPgJARAAQAgABAXAZQAXAaAAAtQAAAtgXAaQgXAaghAAQgNAAgNgHQgMgFgOgPIAABdgAgdhMQgMANAAAcQAAAgANANQANAOAPAAQARAAAMgNQALgNAAgeQAAgegMgOQgLgPgRAAQgRAAgMAPg");
	this.shape_8.setTransform(23.6,-8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("ABXBfIAAhpQAAgbgFgJQgGgLgPABQgJgBgLAHQgJAHgEAMQgEANAAAXIAABaIgvAAIAAhlQAAgagDgIQgDgJgFgEQgGgDgJAAQgKgBgLAHQgIAGgFALQgEANAAAYIAABbIgxAAIAAi5IAuAAIAAAaQAYgeAiAAQASAAANAHQALAHAIAQQANgQAOgHQAOgHAQAAQAWAAANAJQAPAIAGAQQAGANAAAaIAAB1g");
	this.shape_9.setTransform(-4,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AhDBBQgTgZAAgnQAAgsAYgbQAZgaAlAAQAnAAAYAcQAZAcgCA2Ih5AAQABAWALAMQALAMAPAAQAMAAAIgGQAHgHAFgOIAxAIQgKAcgUAOQgUAOgfAAQgvAAgXgggAgYgvQgLANABAUIBHAAQAAgVgLgMQgKgLgPAAQgPgBgKAMg");
	this.shape_10.setTransform(-30.1,-12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgXCAIAAi4IAvAAIAAC4gAgXhRIAAguIAvAAIAAAug");
	this.shape_11.setTransform(-45,-15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgYCAIAAjUIhNAAIAAgrIDLAAIAAArIhMAAIAADUg");
	this.shape_12.setTransform(-60.3,-15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AhGBSQgQgQAAgYQAAgPAHgOQAIgMANgEQAPgHAZgFQAhgGANgGIAAgFQAAgOgHgGQgHgGgSAAQgMgBgJAGQgGAEgFAOIgtgIQAIgcASgMQATgNAkAAQAfAAAQAHQAQAJAHAMQAGAMABAgIgBA3QAAAbACAKQAEAPAFAKIgxAAIgGgUQgOAMgOAGQgMAGgQAAQgdAAgRgPgAAAALQgVAEgGAFQgKAGAAALQAAAKAIAIQAIAHAMAAQALAAAMgJQAJgGADgKQACgIAAgQIAAgKQgJAEgTAEg");
	this.shape_13.setTransform(36.7,-55.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("Ag7BfIAAi5IAuAAIAAAaQAMgSAHgGQAKgGALAAQARAAAQAJIgQArQgMgIgKAAQgKAAgIAGQgFAFgFAPQgDARAAAsIAAA6g");
	this.shape_14.setTransform(21.1,-55.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("Ag7BfIAAi5IAuAAIAAAaQAKgRAJgHQAKgGAMAAQARAAAPAJIgQArQgMgIgKAAQgLAAgHAGQgFAFgEAPQgFARAAAsIAAA6g");
	this.shape_15.setTransform(7.1,-55.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgvBWQgYgNgMgWQgMgWAAgeQAAgYAMgYQANgXAWgMQAWgMAaAAQAqAAAbAcQAbAcAAAoQAAAqgcAbQgaAcgqAAQgXAAgYgLgAgfgpQgNAPAAAaQAAAbANAPQANAPASAAQATAAANgPQANgOAAgcQAAgbgNgOQgNgPgTAAQgSAAgNAPg");
	this.shape_16.setTransform(-12.3,-55.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AAjCAIAAhjQAAgdgCgGQgEgHgGgFQgJgFgJAAQgKAAgLAGQgJAGgEALQgFALAAAYIAABdIgxAAIAAj/IAxAAIAABeQAXgcAgAAQASABANAGQAOAGAGAKQAIAKACALQACALAAAZIAABtg");
	this.shape_17.setTransform(-34.3,-58.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("ABICAIgWg6IhlAAIgWA6Ig3AAIBlj/IA1AAIBnD/gAgjAaIBEAAIgiheg");
	this.shape_18.setTransform(-58.4,-58.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AJiOwQiogOh2g2Qh7g4hxh/QgsADgsAAQjSAAjBhAQi6g/iPhyQiQhxhPiUQhRiZAAilQAAinBRiZQBPiUCQhyQCPhyC6g+QDBhBDSAAQDSAADBBBQC7A+CPByQCQByBPCUQBRCYAACoQAAD0ipDMQikDHkRBjQAUAhAWAaQA7BEB2BqQA6A1AvAnQgWABgZAAQgsAAg2gEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-94.8,207.6,189.7);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB7D86").s().p("AhBAbQgJgLgEgOIgDgLQAkgSA/gOQAggHAZgEIAEANQAEAQgCAOQgGAsg5AOQgQAEgMAAQgkAAgTgag");
	this.shape.setTransform(-1.2,-1.5,2.084,2.084,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-9.5,34.5,19.1);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgFAAQgBgEAGgBQAFAAABAFQAAAFgGABIAAAAQgEAAgBgGg");
	this.shape.setTransform(-28.8,-28.3,1.705,1.705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AgFAAQgBgEAGgBQAFgBABAGQABAFgGABIgBAAQgEAAgBgGg");
	this.shape_1.setTransform(-27.7,-24.6,1.705,1.705);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AAbCVQigh3g1jlIBFgVIANAvQAUA7AcA1QBaCmCZAsIgIBIQhHgNhRg7g");
	this.shape_2.setTransform(0,4.2,1.705,1.705);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AgfABIA9gPIACAOIg7APg");
	this.shape_3.setTransform(-26.1,-32.1,1.705,1.705);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDDBBB").s().p("AgdADQgCgbAZgFQAWgEAKAaQAEALAAAOIg1ANQgGgOAAgOg");
	this.shape_4.setTransform(-26.8,-36.7,1.705,1.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-42,64,84);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84B9BD").s().p("AB3CGQgcgIgDgHQgBgCADgcIgHgBQgMAAgRAOIgDADIgQALQgJAFgJAAQgIAAgJgEQAMgTAVgKIAGgDQgBgCgNgBIhuABIgEgBIgmABQgZgDgCgNQgBgFADgGQAMgUAWgDQgOgSASgOIAEgBQAJgJAKgXIASgqQAZg1AjgHQAHgCAGAAQAKAAAQAEQAAAGgGALQgIANgPAXIgYAfIAFAAQAYAAAOADQAUAEgdAJQARAPAQAAQAHAAAKgDIATgCQAJAAAHACQAWAFgFAPIgLAdIADAAQAGAAAHgDIALgEQAEAAAFADQACAKgFAFQgCADgKAEQgOAGABAMQAEAEAbAFQAXAIgHAXIgGAWQgFAKgKAAQgEAAgJgDg");
	this.shape.setTransform(7.1,-13.8,0.138,0.138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#84B9BD").s().p("AAQAhQhzgOggAFQADgTB4gVQBzgWAZAJQgLA+hkAAIgFAAg");
	this.shape_1.setTransform(-13.9,-29.7,0.138,0.138);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#84B9BD").s().p("AgjAAIAegaQAHABAbAKQAYAJAIgBQgSAagmAFQgrABgWACQADgIAWgTg");
	this.shape_2.setTransform(-15.3,-26.7,0.138,0.138);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#84B9BD").s().p("AhMAtQgKgCgVAIQgWAIgLgCQAIgQASgPQAOgMAGgUQAEgOANgSQAQgWAEgIQAWAFgCAXQARACAAABQgCAGAdALQAFACArAAQAcgBgHAVQAhgDAfAKQABAmg4gOQg8gYgIAAQgIACACAIQACALgEADQgOABgbASQgbAQgRABQgDgLADgNg");
	this.shape_3.setTransform(-9.6,-24.6,0.138,0.138);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#84B9BD").s().p("AEVD3QgpgFgdADQgPgVgmgNQgugQgMgKQACgNAOgDQgOgMg7geQg7gggBAIQgBAPg7AOQg1AMgagCQgFgWAZgRQAVgPAVgBQAZgBAkgEIA9gIQAEgGgPgKQgPgMAAgHQAugMAYgiQAagog8gNQgLgCgUgNQgKgIgUAGQgYAJgMABQgWADAEgWQAVABAWgJQgegQgjgNQg3gWgLAHQACAEAUAHQAOAIgZAKQgPAGgXgGQgQgEgFACQgJACgCAPQg/gChlAMQgeAEgIgGIgGgEQgFAAgOAEQgyAQgRgTQADgOAXgCQAcgDAFgFQgQgGggAEQgSADgNgBQAGgWAWgCQgOglBJggQA1gXA6gIQgJAMgYANQgZANgJAKQABAMAPALQATANAFAIQgJAMgPAAQAZAHASgTQgBgIgOgBQgOgBgCgGQAFgRASABQgGgIgJgEQACgPASgGQAKgDAVAAQgJgHgLADQAqgaAlgJQA0gMAcAbQgKATgSARQAJAFAKgBQAFgBALgFQALgFAHgBQALgBAMAJQAAgmBNgBQBEgBAbATQgOAPgVAFQAIADARgGQASgEAHABQALACACAQQAOgdAfAWQALAIAEAJQAEAJgIABQACAHAYgHQAigKAJgBQAcgCAMACQATACADAMQgTALgZAFQALADASgEIAcgHQAZgEAQAPQAPANg1AAQADAGAIACIARABQAQAAAFADQAIADgBANQghADgfgLQgEADAJAFQAJAHgCAFQgLgEgJAIQASAKBRANQBEALAQAZQgLAOgRgGQALAHAVgCIAggFQAJALALABQAVACAMAEQAcAIgJANQgIANgYgDQgHAEAGAGQAHAHgGADQgKAAgSAEIgcAEQgGAFAFAMQAHAOgCAFQgRABgRgaQgWgigIgGQgVgRghAAQgegBgfAMQABAHAMAFQAJAFgCALQgUAGgQgOQgFAGA5AjQA4AiAQAAQgBALgLgDQAJAMAUAMQAPANgEAXQgKAAgGgEQACABgBATQAAASgBAFQgPAAgKgQQgOgVgJgGQgDgCguADQgxADgcgGQBOASAMAGQAgAPAAAqIhFgJg");
	this.shape_4.setTransform(-4.1,-27.3,0.138,0.138);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#84B9BD").s().p("AguAXQgBghAggNQAbgMAjAMQADAhgjAOQgPAGgNAAQgQAAgRgHg");
	this.shape_5.setTransform(-4.9,-27.7,0.138,0.138);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#84B9BD").s().p("AjSAnIALgOQAAgDgIABQgIAAAAgJQA9gYAqgCQgFAGgRAFQgQACgFAIQAHgHAhgCQAlAAAGgCQAPgGAYgEQAYgEAMgGQCFgyBQAXIghAVQgQAKgRAEQgYAHgOACQgYADgLgPQgJAOgWAFQgRAGgVAAQgnAAhFAWQhNAYgiADQgDgMAEgGg");
	this.shape_6.setTransform(-8.9,-31,0.138,0.138);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#84B9BD").s().p("Ag8AdQAAgSAYgDQANgBAWACQgFgDgOgMQgPgOAGgBQAbgRAfABQANAOATACQAGAcg2AVQgZAKgTAAQgSAAgLgJg");
	this.shape_7.setTransform(-20.1,-27,0.138,0.138);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#84B9BD").s().p("AgnAAQgBgYAlAGQARAEAaAJQAFARgrAHIgMABQgcAAgBgUg");
	this.shape_8.setTransform(0.3,8.2,0.138,0.138);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#84B9BD").s().p("AgcAiQgbAEgXgGQgcACgPgBQgagBAEgdQAPgFAdAHQAcAIAPgGQADABgzgzQAFgRAsADIA7AGQAggDAqATQArATAYAaQgBATgUACQgKABgkgFQhDgKgFApQgWgDgMgVg");
	this.shape_9.setTransform(-3,7.8,0.138,0.138);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#84B9BD").s().p("AgaALQgYgMAEgJQADgHAVAAQA2gCAPAaQADAMgXAAQgTAAgigIg");
	this.shape_10.setTransform(-6.7,8.2,0.138,0.138);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#84B9BD").s().p("ABQBCQAOgJADgEQgHgEgcgIQgTgFgHgPQgIgTgVgCQgggEgIgEIg5gRQgegIgEgXQgiAUgWALQgpAUgOgDQgNgWAdgYQAXgTAYgHQAbgHAlAGQAuAIAOgBQASAAAdAQQAiAUANAEQAmALAJAWQA5AKAaAMQAEAEgDAFQgFAHAAAEQAdgBAPAEQAXAIABAYQgbAEg5AAQg2AAgdAFQgCgNAJgGg");
	this.shape_11.setTransform(-8.1,6,0.138,0.138);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#84B9BD").s().p("AAvBAIiDgsQACgRASAFQgJgLgXgGQgegJgGgEQADgIAIgBQAGAAAMADQAOADAFgBQgFgQgggDQgggCgHgOQABgOAPACQAFAAATAHQADgBgGgEQgIgFADgFQAPACAiAYQAiAXAAAGQAFgJgJgHQABgDAkAMQAeAKAKAFQAYAMAEgIIADgEQACAAAGADQAOAIARANQAVATABAKQAQgCANAUQAHAJAEAJQABALgWAAQgbAAhBgSg");
	this.shape_12.setTransform(20,-26.4,0.138,0.138);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#84B9BD").s().p("AhBAGQAlgMBSgZIAAAAIgCAAQAEgBARgGQAPgGAHAAIAPgFIgFAFQAAACAJAEQAKADAEgBIgzAUQgfAOgQALQgTAAgfAHQgjAHgdAJQgBADgEAAIgBAAQgFACgDAAQgPAFgOAIQgDgSBBgag");
	this.shape_13.setTransform(-10.1,-32.1,0.138,0.138);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#84B9BD").s().p("AgCAAQAFgDAEABQgEADgGADQgHgCAIgCg");
	this.shape_14.setTransform(-8.2,-32.9,0.138,0.138);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#84B9BD").s().p("AkuA5QAygKA/gJQgKgIglAEQgpAIgLAAQACgTA/gMQAwgJAeAAQgHgEgkABQggABgNACQAKAFgHADQgDACgMACQAEgDABgGQABgFgEABQAMgIAUgGIgSACQAhgWBCgOIBogUQBugZBRgLQBogIBuACIANAAQgkAEhtAVQhfARgOgBQALAIANgEQgVAKgqACQgtACgTAGQAMAEAXgEQAagFALABQgHAPgkANQgeALgVACQgNABgLAGQgOAKgMADQgQAEgiADQgiACgQAEQAXAGAqgGQAzgJAPABQgRAdg6AEIhWAGQhBAUgyAHQgNACgqANQgkALgSAAQgGggBfgVgAimgYIAogGIAggGQgYAAgwAMg");
	this.shape_15.setTransform(-4.8,-32.8,0.138,0.138);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#84B9BD").s().p("AgGABQgFgdgEgOQAQAPAGASQAGANADAjQgJgHAAALQgIgPgFgbg");
	this.shape_16.setTransform(32.6,-8.9,0.138,0.138);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#84B9BD").s().p("AgHgVQAEgEADADIAIAuQgOgYgBgVg");
	this.shape_17.setTransform(33.5,-7.3,0.138,0.138);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#84B9BD").s().p("AD+F9QgOgDAPgQIg8gNQAIgOAQgFQgBgDgUgCIgXgDIgEAMQgEALgPgDQgGgKAJgGQgwALgjgDQAYgNgXgCQgQAAgBgRQgbgBgSgDQgegHAQgPQgDAAgIgFQgIgFgBgDQgIgMgTAHQgaAJgPgEQgGgvAIgdQgDgDgRgDQgTgDgCgCIgPgKIgFgOQgRgOgKgOQgXgcAfAAQgSgEABgJQAEgRgBgPQgtgHgSgVQgRgWAyAAQgFgEgXgBQgYAAgHgJIAMgHQgVAFAMgVQAAgDARgOQALgJgMgDQANgHAwgFQAmgKgHgdQgBgDgIACIgKAAQgFgCAAgFQAEgGAHACQgdgIgagDQAQAEAUALQgMAag3AIQg1AJgPgQQgDgDANgaQANgcAQACQgFgJgLgCQARgOAgAFQAPACAiALQAVAGAEAAQADgBgEgFIgBgEQAAgCAHACQgJgNgegGIgxgKIABgDQAOgCgDgDQgIgCgDAHQgZACgggEQgjgEAOgGIASAAQgFgFgIABQAIgKANgCQgJgIgMAEQgDgCATgCIAUAAQgTgOgUgCQAHgGAJgBQgQgEgNACIghAHQgEgCASgRQATgRAAgBQg0gohKAHIhAAGQgoAEgggEQADgIgPgPQgPgNgFACQgHABgMgDQAEgIANgBQAIgBAQABIASABQgXgNgcABQAXgMAggEQATgBApAAQAtABAVgDQEvAVEeBfQEmBfEFClQgLAFgZAFIgWACQgLAGgUgFQgIgBgWgHQgOAKABAWQADAfgCAHQgUAAgQgMIACAnQABAiACAEQgdABgmgQQgrgVgagJQAPAIABAQQgMAGgQgCQARAOAMAOQgOAHgPgEQATARAVALQgHAXgPAFIgdAEQAMAGgBAOQgMAEgLAAQAEAIAYAXQANAMgJAbQgIAYAGAIIAOARIgSAUQAGgEABACQAEACgFAQQgNAFgYgBQgZgBgNAFIglgIg");
	this.shape_18.setTransform(9.1,-28.9,0.138,0.138);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#84B9BD").s().p("AgKBFQgagLgPgYQAcAFgSgnQgVgxADgGQAIAAAMAGQAMAGAIAAQgEgLgMgBQAHgLANgJQAPgDAgAoQAhAmgXACQAWAfgFAUQgEASgWAEIgNACQgPAAgPgIg");
	this.shape_19.setTransform(26.3,-18.4,0.138,0.138);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#84B9BD").s().p("ADFP+QgCghAXhGQAWhCgHgpQgQAVgbAHIgFghQgCgVgJgJIhJA2Qg8AsgIgFQgWgOgVAHQgOAFgYATQgaAUgOAEQgXAGgXgUQgqgggWgTQgnghgIgYQAGgfgmgsQgkgoAMgXQgcAFgNgYQgNgVAHgaQADgOgKgfQgIgYATgXQASgWAJhhQABgRgDgmQgEgrgHgLQgGgGgKADQABgFgEgqQgDgbAOgOQALgLAPgkQANgdAYgLQABggAYghQAegmAGgRQAGgTAZgUQAigbAHgIQASgVgGgmQgHgmAMgQQAJgMAJggQAHgYAYgSQAkgaACgqQADgqgfgkQg0AKgCgfIgDgeQgEgSgSgKQAGgPADghQAEgggDgPIgRg7QgMgtACgMQAVgUBFASQA8ARAfAZQALgSgJgtQgIgogNgTIg2g9QgngqACgVIAlAGQANADASAOQgCgWgKgVQAKgBAIAMQAGAJADABQAGADAIgHQADgBALgZQAIgQASAJQgCgNAFgNQAEgMAIgHQCDDzBLEMIgBgCQgIgPgVg4QgSgsgRgYQgQANgIATQgYgMgUgUQgJAGAFArQAFAjgkgEQgIAcgMAbQAGAKAJANQAEAKgIAMIgUAsQgLAWgcgCQgVgBgMADQgZAGAJARQAOAdA1AAQA2AAgEgMQASgRASgGQAUgHAZAGIAnALQAZAGAKgJQAiADgEBHIgCAyQABAXAJACQASADAZAzQAqExgiE0QgjE3hvEkg");
	this.shape_20.setTransform(29.4,-2.1,0.138,0.138);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#84B9BD").s().p("ABHCuQgYgMgPgGQgHAHADAJQgWgPgVAAQADgEAKgkQALAHAOAEQgFgJgYgNQgXgLgBgSQAJAAALgEQgFgIgLgYQAOgHAMAHQABgRgrgrQgogoAQgRQgGgIgDAMQgEALAFAFQgOgDgNgtQgLgigCgZQADACAFACQgIgNAAgPQAeARAVAPQgDALgMABQAIAOAZAVQAQANACAjIAiAvQAXAbAMATIAlAxQAYAfAIATQACAHABAWQACAYgBADQgWgEgWgKg");
	this.shape_21.setTransform(28,-18.3,0.138,0.138);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#84B9BD").s().p("AgHACQgEgTAJgPQAMAbgCAmQgLgKgEgVg");
	this.shape_22.setTransform(32.5,-10,0.138,0.138);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#84B9BD").s().p("AADgOQAQgBAGAIQgIAHgoAPg");
	this.shape_23.setTransform(-25.4,-22.9,0.138,0.138);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#84B9BD").s().p("AjaB+QgLgMgXgDQgXgDAJgJIASgTQABgYAEgGIATgaQAHgMAAgHIAxgrIATgCQAWgCASAJQAXAMAPABQAUADAzgVQAzgUAAgEQALgHARgTQAQgPAQgDQACAAgCAKQgBAKAJAAQAYgsAEgEQATgWAgACIADAcQAAAOgLAKQAOAIAZgGQAcgGAMAEQAFAPghAMQgqAQgFAFQAEAEAOgKQAOgKAIAIQgQAVgdAOQgaAMgdACQgPABgcARQgaARgOgDQgxApgyAaQg1AagcgBQAKgUASgMQgGgDgGADQAHgMANgIQgGgHgtAwQgrArgGAMIgZgdg");
	this.shape_24.setTransform(-20.3,-25.3,0.138,0.138);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#84B9BD").s().p("AnxLyQgLgGgEgLQAUALAWgrQAFgKgJgKQgOgZAFACQAMAFACgOQgFAAADg/QACg/AEgFQALgLgIgoQgFgZgKgbQg9gkg4gWQhIgdgkgfQgQgNgagpQgZgmgWgQQgKgagWgdQgHgJgjgnQgWgXgQgcIgdgMQgQgIgHgMQAUAAgNgPQgUgZABgKQAGgJAcgOQAWgLAAgUQgCADgSgCIgUgCQgYgJAPgoQAVgrACgJQgLgiAgAGQAPgBAEgOQAEgOANgBQgKgBAXgSQAcgWACgCQAGgMgDgkIgGg0QgBgLgPgVQgNgUABgMQAGgPARgFQAGgFgKgKQgLgLAHgFQAPADAJANQACgQALgMQALgNAPgCQAIgBAGgYQAGgbAEgEQAOgQAcgDIAygGQAEgFgKgXQgLgZABgGQgVgFgQAIQgUAJgPAAQALAUAFATIgfABQgIgBgNgKQgbgUgOgFQgMgFgOABQgKAAgRgFQgVgGgEgJQAAgYgSgHQgXgJgGgPQAGARgagOQAagMA4gWQAJAMAUAXQAUAVAIAKQAYgCA9gMQA4gIAfAOQAXAKANAWQABACAtAcQAbARgmAKQgLACAEAOQADANAHABQAIgIAXgEQAYgEAJgIQgPgBgBgLQgBgKAKgHQANgIAIAQIAOAZQAngGARAbQALASANABIAkgDQAPgCAoASQAhAOAVgOQAVgPAigEQAkgFAVANQABAJgKACQgNADgCACQALANAUgRQAZgWAQACQgBACgCAZQgCATgLACQATAFANAPQgUAPgMARQApgGAjARQAsAVgJAvQAhgEBBAYQATAHARgEQAYgGAOABQAgADAfAKQAgALAYAQQAnAbAGAHQAHAJARAsQABAFAZAZQAUAUgHAMQgKAQgmAeQghAagJAaQAagCAWgOQAIgFAagXQAHAAAdgGQAUgFANALQgCANgFALQAVgNAUAAQAWAAALAPQAngGAZAMQAcANgEAeQAMAAAUgSQATgQAQADIA7AMQAgAFAbgCQAXgCAaASQAPAKAaAWQAMAIA3gEQAtgEAHAZQAPAygxA1QgnArg+AdQgKATglAMIg/AQQgIAPAQAuQAPAsgJAOIgkA8QgWAigaAXQgfAbgrABQg1gEgnAFQgLAShIAoQg8AhgEApQgCAWguAkQgvAkgbgBIADgCQgKAFgSASQgTASgHADQgjASg3gFQhGgHgVAEQANgCAJAHIARAMQhjAJhkAAQioAAipgXg");
	this.shape_25.setTransform(2.3,23.6,0.138,0.138);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#84B9BD").s().p("AATXkQgQgLACgKQAFgSgCgGQgJgGglgzQglgygCAAQgBAMhFgWIhRgaQgFgDg6g+QgqgtgeABQgLAAgZALQgVALgPgEQgWgEgZgOIgsgaIhPgvQgxgdgjgKQgIgSgYgUQgbgXgHgNQgKgQADgZQAEgbgIgQQgmhPgMgTQgjg8gmgVQgDgcgFgLQgHgRgVgPQgNgOgVhAQgUg4gIgOQgTgigigJQgDAhANAhQAHAUAXAoQAHALAOAmQAPAhAPAGQAFAjAJAcQAOAoAQABQAAAFATAjQAMAggagBQgHgXgfgnQgbgigDgfQgDgXgogbQgngZACgcQAgAGgUgrIggg6QgLgYgRg4QgRg2gLgXQgIgRgUgHQgSgHgGgXIgchfQgQg2gGgpQgFgjAGgvQACgYALg5QABgTAGgdIAJgyQACgHgBgvQgBgmAHgKQAFgHgPgWIgUgdQgFgGAKgzQAMg4gDgOQAGg+gDgHQgJAEgCAUQgCATgKAEQADgWAKgdQAQgygKAFQABgKgvgKQgtgJAIgVQgIgIhDgBQBujcCgjKIADgEQALgPAGgFQANgKAYgJIAhgMIAfgNQAYgKAIgBQACgGgKgLQgJgJAFgFQAjAEASAqQAGANAIgDQAKgDAageQAXgZAwgiQA8gsAQAMIgkAfQAagEA0ggQAugdAjABIAAACQBahqA1AdQAOAHA3gVQAYgJAugVQgEgWAggHQAagGAVAHIgKAYQgCAOAUgDQAGgIgDgMQgCgJAQgMIAjgRQAYgMAHgNQgDgBgKADQgIADgEgBQgGgBAAgHIAcgMQAbgLAAgFQgKAAgcAFQgeAGgOgBQgXgCAHgMQAOgOABgGQgKADgGgHQAKgHAYgXQATgTAPgGQARgIAUgDQAdgEgEASQgDAPAMAEQASAFAGAIQgDAHgRAEQgOAFACAMQAFABARgGQAOgEAGgBQALgBAGAHQgLAFAEAPQAEARgEAHQAHgFASgUQARgRANgEQAkgNgKAbQgFAOgPAVQARAaATgCQARgBAVgXQAVgVAMgaQAUgFAQgLQgzgKAxgSQAygRAgAHQALADAVACQAPAEgDARQgCANgHACQgFABgLgEQgGgCgLgBQgMAAgEAEQgHAUAkANQAgAMgYAbQgfAjgpgGIgZgKQgPgHgLAKQAbAAAJAYQg9gGgyAOQAYAIgGAKQgCADgeAWQgYASghgCQgTgCgngNQgEALAwAGIA5AGQgMAjghAUQghAVgjgMQALAXgRAAQgcgFgRgCQgNAAgQAHQgMAGgHAHQA3AOACAFQADAHg0ASQAOgBgeAdQgjAiAAACQgCALgmAWQgpAYgFAKQgIASAJAXQAKAbAagBQAcgBAOAmQANAigKAQQAFgHAOABQASAAADgBIAdgPQATgLAMACQAWAEAXAWIAmAkQAeAXA8ACQBZADAJACQAWAFADAgQABAOgEApQgDAZAIARQAIASAYALIAeAdQARARAPgOQAEgEAYgKQANgFACgbQABgKgGgVQgGgWAAgJQgBgRgMgTQgLgRADgUQAzgJAsgPQBBgWAMgYQAQghgigkQgXgZgrgXQgfgQAMgNQAZgZACgKQAGgDAFgLIAHgRQgMgQAEgUQgPAEgNgIQAPgYARgTQgSgGgBgOQgCgNAMgNQAMgNAYAJIAnASQAUAFAYgKIArgVQAXgIAeAPQAQAJAgAVQgGAXA4AGQA1AGgGALQgOAUAAADQAAAFAHAZQAFAYgNALQgMAMACAFQAeARALgEQAHgCALgGQAIgBAJASQAGAMA3gRQA3gRADgLQARg/A0AZQATAKANARQAMARgEAIQgHAMArAaQAZAPgJAFQgPAIABACQAoAMgLAWQgEAIgJABQgLACgJgKQgDASAYAJIAjANQARANgBAVIgBAdQAVgJA4AGQA6AHAIAQQgPANgQAHQAYgEALAQIAMATQAmgUALAhQAFASAEAlQAIASgQASQgQASgZACQgoADggABQgQAUgKAKQgQAQgRAFQggAKgvgJQhKgNgLgBQgUgBgoAJQgtAKgMABQgmgIgHAnQgLAUgSAFIglAMQgVALgYAUQgfAaAAAOQAHgDAbgBQAXgBAEgEQAvghAsgOQARgGAngQQAhgKATARQAbAZgkARQgeANgggBIAiAGQAZAEACACQgJAUgLAQQADgBANAVQAOAYAIADIAWAIQAIAEAIAMQAJABAbgBQAigCARAGQAAgHgPgtQgLgkAMgOQAngxAbB7QASgCAGAGQAFAGgHAKQgHALgQAGQgRAHgSgEQgCAHAJAEQAIAEgDAIIhZADQgxACgRAiIg4AfQgjASgEgeQgCgSAhgXQAegVgCgHQABAGgqAFIguAFQgEACABAFQABAFghANIgbAOQgRAIgMABQgEAHgFARQgGAOgJADQgeAKgPAMQgSAQgEAYQAFALAPABQARACAGAGQAAAXgLAFQgHADgdgDQgTAShIgrQhHgqgVAYQAKgBAPBAQAPA+gHASQgHAPgbgBQgHgBgfgHQgDAMATAaQARAYgKASQgdA3gGgOQABgDgGADQgJADgCgBQgCAIASAfQAUAgAAAMQgBAAgVAOQgWAOgEAEQAdAPgkAPQgRAHgpgDQgrgDgRAGQgQAFABArQACAtgRAJQgcAQgOARQgPATgJAgQgGAUAQA4QAJAgAYBIQAmCGg/AIQgLACgVgnQgVgnADgUQgigTgDgxQgDg2gMgLQgSgZgIgIQgNgOgUAOQgNAKgJgNQgKgNADgXIgaAOQgWAKgIgCQgPgEgKAAQgOgBgNAGIgegJQgWgHgQAJQAGASgKARQATAGABASQgMAJgMgIIgTgRQgDAZgdgJQgcgIgIgTQgOgBg7gXQg4gVgWABQAAAagPAmQgPAngQAMQgaAUAFApQAGAvgNAUQgZAkAFBCQAFA+AZAoQAIAMAGAfQAGAfAGAMQAMAVAVgCQAagDANAKQAMAJATACQALAAAagCQAigEAQAEQgCgKAPgVQARgYACgKQACgcADgKQAEgOAXgHQAmgLAzAAQBGAAgYAmQgYApgOBEQgPBLgSAkQAbADAigBIA+gDQAkgBAaARQAPAKAdAbQAMAJgJA1QgEAcgKAoQgGAgAbAlQg3AVgbAMg");
	this.shape_26.setTransform(-11.8,-7.7,0.138,0.138);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#415F79").s().p("EgMzAkqQnZill3lUQl3lUjSnGQjMm3gYnmQgYnkCfnJQCmnZFSl3QFUl2HHjUQG3jLHmgYQHkgYHJCfQHZClF3FUQF2FTDTHHQDNG3AYHmQAYHkigHJQilHZlUF2QlUF4nGDTQm3DMnmAYQg/ADg9AAQmjAAmOiLg");
	this.shape_27.setTransform(0,0,0.138,0.138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-34.3,68.7,68.7);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB5DHIgxABQAEgjAEg8QAFg8AAgZQAAgVgIgNQgJgNgQgGQgPgGgTAAQgXgBgSAJQgSAHgNAPQgKALgGAXQgIAZgCA0QgCAZgCBJIgsgBIgxABIAIhgIAIiGIAFipIAvABIAugBIgGBHIgEBSQAJgOAIgHQAGgHAIgGQAKgGAIgEIAWgIQAKgDAPgBQAOgCAPAAQAbAAAZAFQAZAGARANQASANAHATQAGARAAATIgBAlIgICAIgBAvIgugBg");
	this.shape.setTransform(150.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABuDbIgvAAIAFhQIAEgwIACg3QgOARgKAIQgKAJgOAHQgOAHgPAEQgRAEgTAAQgdAAgagKQgZgKgUgTQgSgTgKgaQgJgYAAgcQAAgnARglQARglAegWQAegWApgIQAogJAuAAQAYAAAeACQAeACAwAHQgPCYgGESIguAAgAgeiQQgcAOgOAbQgPAcAAAhQAAAVAJASQAHAPATALQARAKAWAAQARAAAQgHQARgIANgPQANgNAGgUQAEgMACgYQADgZACg9QgZgGgVAAQgkAAgcAOg");
	this.shape_1.setTransform(108.3,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4CUQghgIgagUQgYgUgNgeQgMgdAAghQABgiAOgiQAOgiAZgVQAYgWAggIQAggJAhAAQAhgBAdAIQAdAIAVAQQAUARAKAYQAMAYAAAdQAAAOgEAPIjqAAIgBAPQABAUAHAQQAIAQANAMQAPAMATAFQASAGATgBQAWABAbgFQAZgFAjgKIgLA+QgjAHgXACQgZACgYAAQgoABghgIgAgNhlQgNADgLAIQgKAHgHAJQgGAJgEAJQgDAHgDAPICUAAIgBgVIgDgPQgEgIgGgIQgGgGgHgEQgJgFgJgCQgKgCgMgBQgMAAgMAFg");
	this.shape_2.setTransform(70.1,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADPCXIgxABIAFhPIAEhDQACgYAAgSQAAgUgIgLQgHgKgLgFQgLgFgOAAQgOAAgMAFQgMAFgKAMQgKAKgGAQQgFAPgDAYQgCAbgCArIgCBSIgqgBIgwABQADgXAEhFQAEhEAAgZQAAgMgCgJQgDgJgHgIQgGgIgKgEQgJgEgMAAQgXAAgRAOQgRANgIAXQgIAWgDBAQgEBAAAAnIgsgBIgvABQAEgyAFhjQAFhhAAgyIAsAAIArAAIgDAvQALgNAIgJQAJgJANgHQAOgHASgEQASgFATAAQAPAAANACQAOADAJAEQALAFAIAGQAIAGAFAHQAGAHAGAOIANgRQAGgHAKgHQAKgHAMgGQAMgFAQgCQAPgDAQAAQAcAAAZAIQAZAIAOATQAOASAAAaQAAAPgCAbIgFBXQgEA+AAAhIgqgBg");
	this.shape_3.setTransform(21.8,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFDJIgyABQAFgsACgeQADgvACg9QADg7ABg3IAtAAIAvAAQgFAzgCAsQgDAugBA8IgCBfIgtgBgAAIiSIgtABIABguIAAgKIAtABIAvgBIgBARIgCAnIgtgBg");
	this.shape_4.setTransform(-16.3,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpDCQgsgMgkgaQgigbgRgmQgPglAAguQAAguATgqQATgpAkgcQAjgcAwgOQAvgPA0AAQA1AAA9AMIACAlIADAeQgkgIgYgDQgZgDgVgBQgjAAggAKQgdAJgZAWQgYAUgNAdQgNAeAAAeQAAAmAQAeQAQAfAkASQAhATA1AAQAwAABEgSQgHAjgGAjQgkAGgeACQgfACgWAAQgwAAgqgMg");
	this.shape_5.setTransform(-46.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHDHIgwABQAFgyAGiAQAHh/ACheIAtABIAugBIgHBrIgMDtIgBA3IgrgBg");
	this.shape_6.setTransform(-92.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAADHIhpAAIhAABIAKhxIAGh/IAFh2IAAgpICjABIA+AAIBdgBIgEBAIgegCIgjAAIgugBIg+ABIgtAAIgFBpIBXABIBogDIgEA/IhjgCQgkABg4ACIgFBtIAjAAIBFAAIBGgBIAugDIgEBBIiWgBg");
	this.shape_7.setTransform(-121.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.2,-36.1,322.5,72.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCDaQgRgCgRgEQgFgsgDgUQAcAOAZAAQAIAAAHgCQAIgCAIgEIAJgGQAEgFAIgLIAOgYQAEgJAFgPIg9iwIgth/IAtABIAogBIAMAqIAcBcIATBAIAGAkIAPgpIAghSIAchGIAQgpIAoABIAqgBIhwD7IgyBwQgKAWgHAMQgIAJgJAIQgJAHgKAFQgMAFgPAEQgRAEgRgBIgbgBg");
	this.shape.setTransform(-4.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-36.1,44.1,72.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADHIhfAAIg7ABIAJhxIAGh/IADh2IAAgpICVABIA5AAIBVgBIgEBAIgcgCIgfAAIgqgBIg4ABIgpAAIgFBpIBPABIBfgDQgCAbgCAkIhZgCQgiABgzACIgEBtIAfAAIA/AAIBAgBIAqgDQgDAigBAfIiIgBg");
	this.shape.setTransform(89.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAADHIhfAAIg7ABIAJhxIAGh/IADh2IAAgpICWABIA4AAIBVgBIgEBAIgcgCIgfAAIgqgBIg4ABIgpAAIgFBpIBPABIBfgDQgDAbgBAkIhZgCQgiABgzACIgEBtIAfAAIA/AAIA/gBIArgDQgDAigBAfIiIgBg");
	this.shape_1.setTransform(52.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACDDHIg3ABIgWgnIg0hQIg+hkIgwhQIgICvIgDB8IgogBIgrABQAFg1ADhCIAHiNQAEhOAAg9IA6ABIAygBQAiA6A4BdQA6BbAkA9IALkOIAAghIAqABIApgBIgHBsIgJC2IgEBtIg0gBg");
	this.shape_2.setTransform(10.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAADHIhgAAIg5ABIAIhxIAGh/IAEh2IAAgpICUABIA5AAIBUgBIgDBAIgcgCIggAAIgpgBIg4ABIgpAAIgFBpIBPABIBfgDQgCAbgCAkIhagCQghABgzACIgEBtIAfAAIA/AAIBAgBIAqgDQgDAigBAfIiIgBg");
	this.shape_3.setTransform(-31.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhjCRQgYgKgLgVQgMgVAAgWQAAgNAFgNQAEgMAJgKQAIgKAOgKQANgIAZgJQAagIAqgKIAVgFIATgHQAHgDAGgFQAFgFADgGQACgFAAgGQAAgMgHgIQgIgIgMgDQgMgCgOAAQgzgBhBAaIAFgeIAEgZQAogKAegEQAdgDAcAAQAggBAbAIQAbAHAPARQAQARAAAeQAAARgFBDQgFBDgBBKIgpgBIgpABQADgkADgvIADhHIgQAJIgOAFIgZAIIgcAJQgLAEgJAFQgJAEgGAGQgGAGgDAHQgDAGAAAIQAAAMAHAJQAHAJALAEQALADAPAAIASgBQAKgCASgGQgHARgIAiQgTADgMAAIgXABQglAAgXgKg");
	this.shape_4.setTransform(-83.3,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGDHIgtABQAFgyAGiAQAHh/ABheIApABIAqgBIgHBrIgKDtIgBA3IgngBg");
	this.shape_5.setTransform(-106.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-36.1,234.2,72.3);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrDHQgGgBgEgFIhchzQgEgFgDAAQgFABgEAFIg1BTQgDAFgDAAQgEgBgBgGIhblcQgCgGADgDQADgCAFADIE/CoQAGACAAAEQgBADgFADIhjAkQgGACgBAFQgCAFAEAFIBhBvQAEAEgBAGQAAAHgFADIgjAcQgEADgEAAIgDAAg");
	this.shape.setTransform(16.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.7,39.9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxaKgIAA0AQgCgQAHgPQAPggAtAAMAgyAAAQAvAAAOAgQAHAPgCAQIAAUAg");
	mask.setTransform(111.6,67.3);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFD1D3").s().p("AhpNNIAA6ZIDTAAIAAaZg");
	this.shape.setTransform(10.6,84.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,169.1);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4QMuQgqAAgmgOQgngQgegcQgfgcgQgmQgPgkAAgnIAAzNQAAgnAPgkQAQglAfgdQAegdAngPQAmgPAqAAMAwgAAAQAqAAAmAPQAnAPAfAdQAeAdARAlQAPAkAAAnIAATNQAAAngPAkQgRAlgeAdQgfAdgnAPQgmAOgqAAg");
	mask.setTransform(176.5,81.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E9E9").s().p("Ah9ANIAAgZID7AAIAAAZg");
	this.shape.setTransform(46.7,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E9").s().p("AijANIAAgZIFHAAIAAAZg");
	this.shape_1.setTransform(46.7,78.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E9E9").s().p("AijANIAAgZIFHAAIAAAZg");
	this.shape_2.setTransform(46.7,73.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E9E9").s().p("AijCUIAAknIFHAAIAAEng");
	this.shape_3.setTransform(46.7,54.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFD1D3").s().p("AjTG2IAAtrIGnAAIAANrg");
	this.shape_4.setTransform(46.7,76.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFD1D3").s().p("AiCAIIAAgPIEFAAIAAAPg");
	this.shape_5.setTransform(287,39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CFD1D3").s().p("AhdBjIAAjFIC8AAIAADFg");
	this.shape_6.setTransform(315.9,41.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CFD1D3").s().p("AiCAIIAAgPIEFAAIAAAPg");
	this.shape_7.setTransform(287,35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CFD1D3").s().p("AiCAIIAAgPIEFAAIAAAPg");
	this.shape_8.setTransform(287,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9E9E9").s().p("AkoDhIAAnBIJQAAIAAHBg");
	this.shape_9.setTransform(293.8,113.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CFD1D3").s().p("AkoAwIAAhfIJQAAIAABfg");
	this.shape_10.setTransform(293.8,86.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E9E9E9").s().p("AknDhIAAnBIJPAAIAAHBg");
	this.shape_11.setTransform(301.1,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CFD1D3").s().p("AknAwIAAhfIJPAAIAABfg");
	this.shape_12.setTransform(301.1,22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E9E9E9").s().p("ApQHsIAAvXISiAAIAAPXg");
	this.shape_13.setTransform(81.4,76.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CFD1D3").s().p("ApQAwIAAhfISiAAIAABfg");
	this.shape_14.setTransform(81.4,22.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,17.8,308.8,118.5);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AhrDXIAAmtIDWAAIAAGtg");
	this.shape.setTransform(104.4,90.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("AhrC4IAAlvIDWAAIAAFvg");
	this.shape_1.setTransform(104.4,130.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B9B9B").s().p("AiSHeIAAu7IEYAAIAABKIjJAAIAAMeIDWAAIAABTg");
	this.shape_2.setTransform(100.4,109.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("An0RyQgdAAgWgVQgVgVAAgeMAAAghUQAAgdAVgVQAWgVAdAAIQpAAIAAJoIkaAAIAAO7IEiAAIAALAg");
	this.shape_3.setTransform(57.4,113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.2,227.7);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6D6E").s().p("AhEBmIAAjMICJAAIAAAZIhtAAIAAA/IBeAAIAAAXIheAAIAABdg");
	this.shape.setTransform(49.3,165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6D6E").s().p("AhEBmIAAjMICJAAIAAAZIhtAAIAAA/IBeAAIAAAXIheAAIAABdg");
	this.shape_1.setTransform(31.7,165);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6D6E").s().p("AgyBcQgXgOgMgYQgMgZAAgbQAAgxAcgdQAbgdAqAAQAcAAAXANQAXAOAMAZQAMAYAAAdQAAAfgNAZQgMAYgXANQgYANgaAAQgcAAgWgOgAgwg9QgVATAAAsQAAAmAUAWQAUAUAdABQAeAAAUgWQAUgVAAgoQAAgXgJgTQgIgTgQgKQgRgLgUABQgbgBgVAVg");
	this.shape_2.setTransform(11.3,165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6D6E").s().p("AA0BnIhqigIAACgIgaAAIAAjMIAcAAIBqCgIAAigIAaAAIAADMg");
	this.shape_3.setTransform(38.4,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6D6E").s().p("AgyBcQgXgOgMgZQgMgYAAgbQAAgxAcgdQAbgdAqAAQAcAAAXAOQAXANAMAYQAMAZAAAdQAAAfgNAZQgMAZgXANQgYAMgaAAQgcAAgWgOgAgwg+QgVAUAAAsQAAAmAUAVQAUAWAdgBQAeAAAUgVQAUgVAAgoQAAgYgJgSQgIgTgQgKQgRgKgUAAQgbAAgVATg");
	this.shape_4.setTransform(16.9,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-4.1,61.6,187.5);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393768").s().p("Aj0BSQgiAAgZgYQgYgZAAghQAAghAYgYQAZgYAiAAII8AAIAACjg");
	this.shape.setTransform(32.8,67);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F4493").s().p("ABCGbQg+AAgpgrQgrgsAAg9IAAi7IhdAAQguABggghQggggAAgsIAAl6II3AAIAAM1g");
	this.shape_1.setTransform(37.2,116.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6D6E").s().p("AhoElIAAngQAAgrAfgfQAfgfAqAAQArAAAfAfQAfAfAAArIAAHgg");
	this.shape_2.setTransform(29,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#393768").s().p("AAMB4IgCgBQgcAAgVgVQgVgVAAgfIAAilIB5AAIAADvg");
	this.shape_3.setTransform(59.5,169.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AgYhrIABABIAwAAIAADVQgkhfgNh3g");
	this.shape_4.setTransform(63.1,192.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.7,203.2);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F7F7F").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAfAAAqQAAArgfAfQgeAfgsAAQgqAAgfgfg");
	this.shape.setTransform(77.9,119.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("AlKBZQA7iMBthuQBthtCLg9QCTg/CggBIAABjQmXADjmFYQhIBsgtCBQgXBBgIArQAAigA+iTg");
	this.shape_1.setTransform(76.1,79.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABWKoQiLg9hthuQhthug7iNQg+iUAAieQAIgrAXhBQAtiBBIhtQDmlZGXgDIAAXNQiggBiTg+gAg3h6QgfAeAAAsQAAAsAfAcQAfAfApABQAsgBAfgfQAfgcAAgsQAAgsgfgeQgfgggsAAQgpAAgfAgg");
	this.shape_2.setTransform(76.1,124.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E5").s().p("AmsR8Qg9AAgsgrQgrgrAAg+IAA/PQAAg9ArgsQAsgrA9gBIPtAAIAAGTQihABiSA/QiNA8htBuQhrBtg8CPQg9CSgBCfQABCgA9CUQA8CNBrBuQBtBuCNA9QCSA+ChABIAAE1g");
	this.shape_3.setTransform(57.8,114.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AmsBfQg9AAgsgsQgrgrAAg8IAAgqQACA7ApAoQAsArA9AAIPtAAIAAAvg");
	this.shape_4.setTransform(57.8,224.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,234.5);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AmDl5IEjhGIHkE5Io5JGg");
	this.shape.setTransform(38.9,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.7,89.6);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AmDiGIHlk5IEiBGIjOM5g");
	this.shape.setTransform(38.9,44.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.7,89.6);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AhfDOQgfgCgKgZIgtmAIFrFiQg5APhAAPQh1AbgjAAIgEAAg");
	this.shape.setTransform(18.3,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,41.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMHkQhFgUhGhEQg8g6guhLQguhMgQgyQgUhCANhGQAShfBlheQBJhECIhTQCchgCNgmQCvgwBoA3QAYAMAgBCQANAZAeBKQBKCxhBC1QhCC8i7BxQh9BMhmAeQhDAVg9AAQgwAAgqgNg");
	this.shape.setTransform(52.5,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,99.4);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFHVQjAgbh7iSQg2hBgOgTQgsg7gBgbQAAh2B6iEQBkhtCdhfQCKhUBcghQCBguBfAcQBEAUAyAxQAlAlAuBMQAuBLAYBQQAcBfgNBEQgTBkhaBdQhJBMh+BNQiXBbicAAQgmAAgmgFg");
	this.shape.setTransform(56.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,112.5,95);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4D0D6").s().p("AgKGuQgxgOgygnIg6qNQBAg0BqhBQAigWAzgbIBPNrQguAKgrAAQgvAAgpgNg");
	this.shape.setTransform(16.8,44.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.6,88.7);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4D0D6").s().p("AhdmlQAvgWAugSIBeNyQg2AagwAPg");
	this.shape.setTransform(9.4,46.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,92.6);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4D0D6").s().p("AhuFqIg3pjQBQhFBhg8QArgaAigTIBNNOIghABQiDAAhwg+g");
	this.shape.setTransform(16.7,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.3,85);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4D0D6").s().p("AhZmcQA0gaApgQIBWN0Qg2ASgyAHg");
	this.shape_1.setTransform(9,45.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,91.1);


(lib.Path_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADMAUQDMATAAAbQAAAbjMAUQjMAUkfAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEfAADMAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgbDMgTQDLgUEfAAQEgAADMAUQDLATAAAbQAAAcjLATQjMAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.5);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADNAUQDLATAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgbDMgTQDLgUEfAAQEgAADLAUQDMATAAAbQAAAcjMATQjLAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.5);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlFENQiviwAAj3QAAibBKiGIOfLcQhRBKhmAoQhqAphyAAQj3AAiwivg");
	this.shape_1.setTransform(50.2,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.4,89);


(lib.Path_1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgbDMgTQDLgUEfAAQEgAADLAUQDMATAAAbQAAAcjMATQjLAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.5);


(lib.Path_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrAvQjLgUAAgbQAAgbDLgTQDMgUEfAAQEfAADMAUQDMATAAAbQAAAbjMAUQjMAUkfAAQkfAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEfAADMAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrAvQjLgTAAgcQAAgbDLgTQDMgUEfAAQEgAADLAUQDMATAAAbQAAAcjMATQjLAUkgAAQkfAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.5);


(lib.Path_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrAvQjLgTAAgcQAAgbDLgTQDMgUEfAAQEgAADLAUQDMATAAAbQAAAcjMATQjLAUkgAAQkfAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.5);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrAvQjLgUAAgbQAAgbDLgTQDMgUEfAAQEfAADMAUQDMATAAAbQAAAbjMAUQjMAUkfAAQkfAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADMAUQDMATAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADMAUQDMATAAAbQAAAbjMAUQjMAUkfAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgbDMgTQDLgUEfAAQEgAADLAUQDMATAAAbQAAAcjMATQjLAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.5);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrAvQjLgTAAgcQAAgaDLgUQDMgUEfAAQEfAADMAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkfAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDMgUEeAAQEgAADMAUQDLAUAAAaQAAAcjLATQjNAUkfAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgbDMgTQDLgUEfAAQEgAADLAUQDMATAAAbQAAAcjMATQjLAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.5);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgTAAgcQAAgbDMgTQDLgUEfAAQEgAADMAUQDLATAAAbQAAAcjLATQjMAUkgAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.5);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADMAUQDMATAAAbQAAAbjMAUQjMAUkfAAQkfAAjLgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,13.6);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADMATQDLAUAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADMATQDLAUAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.Path_1_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADNAUQDLATAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape_1.setTransform(69.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,13.6);


(lib.CompoundPath_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCDgLQC9gPEAAAQEBAAC8APQCEALAqAQQAZAJAAAPQAAARgZAJQgqAPiEALQi8APkBAAQkAAAi9gPgAmJgWQiUAKg2AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCEgKQC4gQEEAAQEFAAC4AQQCEAKAqAQQAZAJAAAPQAAARgZAJQgqAPiEALQiyAPkLAAQkKAAiygPgAmJgWQiUAKg2AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9AzQiDgKgqgQQgagJAAgQQAAgQAagJQAqgPCDgLQCzgPEKAAQEKAACzAPQCEALArAPQAYAJAAAQQAAAQgYAJQgrAQiEAKQi4AQkFAAQkEAAi5gQgAmJgWQiVAJg2ANQA2ANCVAKQCsAMDdAAQDeAACsgMQCUgKA2gNQg2gNiUgJQisgMjeAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCDgLQC9gPEAAAQEBAAC8APQCEALAqAQQAZAJAAAPQAAARgZAJQgqAPiEALQi8APkBAAQkAAAi9gPgAmJgWQiUAKg2AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgQAZgJQAqgPCEgLQC8gPEAAAQEBAAC9APQCDALAqAPQAZAJAAAQQAAARgZAJQgqAPiDALQi9APkBAAQkAAAi8gPgAmJgWQiUAJg2ANQA1ANCVAKQCrAMDeAAQDgAACqgMQCVgKA2gNQg2gNiVgJQirgMjfAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgPQgagJAAgRQAAgPAagJQAqgQCDgLQC9gPEAAAQEBAAC8APQCEALArAQQAYAJAAAPQAAARgYAJQgrAPiEALQi8APkBAAQkAAAi9gPgAmJgWQiUAKg3AMQA3AOCUAJQCrAMDeAAQDeAACsgMQCUgJA2gOQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8AzQiEgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCEgKQCygPEKgBQEKABC0APQCDAKAqAQQAZAIAAAQQAAARgZAIQgqAQiDAKQi0APkKABQkKgBiygPgAmJgWQiUAKg2AMQA2ANCUAKQCrALDeAAQDfAACrgLQCVgKA2gNQg3gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8AzQiEgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCEgKQCygPEKgBQEKABC0APQCDAKAqAQQAZAIAAAQQAAARgZAIQgqAQiDAKQi0APkKABQkKgBiygPgAmJgWQiUAJg2ANQA2ANCUAKQCrALDeAAQDfAACrgLQCVgKA2gNQg2gNiVgJQirgMjfABQjegBirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCEgLQC8gPEAAAQEBAAC9APQCDALAqAQQAZAJAAAPQAAARgZAJQgqAPiDALQi9APkBAAQkAAAi8gPgAmJgWQiVAKg1AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCVgJA2gOQg2gMiVgKQiqgMjgAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCDgLQC9gPEAAAQEBAAC8APQCEALAqAQQAZAJAAAPQAAARgZAJQgqAPiEALQi8APkBAAQkAAAi9gPgAmJgWQiVAKg1AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg1gMiVgKQirgMjfAAQjfAAiqAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgQQgagJAAgQQAAgQAagJQAqgPCDgLQC9gPEAAAQEBAAC8APQCEALArAPQAYAJAAAQQAAAQgYAJQgrAQiEALQi8APkBAAQkAAAi9gPgAmJgWQiVAJg2ANQA2ANCVAKQCqAMDfAAQDfAACrgMQCVgKA1gNQg2gNiUgJQisgMjeAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9AzQiDgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCDgKQC0gPEJgBQELABCyAPQCEAKAqAQQAZAIAAAQQAAARgZAIQgqAQiEAKQiyAPkLABQkJgBi0gPgAmJgWQiUAJg2ANQA2ANCUAKQCrALDeAAQDfAACrgLQCUgKA2gNQg2gNiUgJQirgMjfABQjegBirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCEgKQC4gQEEAAQEFAAC5AQQCDAKAqAQQAZAJAAAPQAAARgZAJQgqAPiDALQi0APkKAAQkKAAiygPgAmJgWQiUAKg2AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCVgJA2gOQg3gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCEgKQC4gQEEAAQEFAAC4AQQCEAKAqAQQAZAJAAAPQAAARgZAJQgqAPiEALQiyAPkLAAQkKAAiygPgAmJgWQiUAKg2AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8AzQiEgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCEgKQCygPEKgBQELABCyAPQCEAKAqAQQAZAIAAAQQAAARgZAIQgqAQiEAKQiyAPkLABQkKgBiygPgAmJgWQiUAJg2ANQA2ANCUAKQCrALDeAAQDfAACrgLQCUgKA2gNQg2gNiUgJQirgMjfABQjegBirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgQQgZgJAAgQQAAgQAZgJQAqgPCEgLQC8gPEAAAQEBAAC8APQCEALAqAPQAZAJAAAQQAAAQgZAJQgqAQiEALQi8APkBAAQkAAAi8gPgAmJgWQiUAJg2ANQA1ANCVAKQCqAMDfAAQDfAACrgMQCVgKA1gNQg2gNiUgJQirgMjfAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9AzQiDgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCDgKQC0gPEJgBQELABCyAPQCEAKAqAQQAZAIAAAQQAAARgZAIQgqAQiEAKQiyAPkLABQkJgBi0gPgAmJgWQiUAJg3ANQA3ANCUAKQCrALDeAAQDfAACrgLQCUgKA2gNQg2gNiUgJQirgMjfABQjegBirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgQQgZgJAAgQQAAgQAZgJQAqgPCEgLQC8gPEAAAQEBAAC9APQCDALAqAPQAZAJAAAQQAAAQgZAJQgqAQiDALQi9APkBAAQkAAAi8gPgAmJgWQiUAJg2ANQA2ANCUAKQCsAMDdAAQDeAACsgMQCUgKA2gNQg2gNiUgJQirgMjfAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCEgLQC8gPEAAAQEBAAC9APQCDALAqAQQAZAJAAAPQAAARgZAJQgqAPiDALQi9APkBAAQkAAAi8gPgAmJgWQiVAKg1AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg1gMiVgKQiqgMjgAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8AzQiEgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCEgKQCygPEKgBQEKABC0APQCDAKAqAQQAZAIAAAQQAAARgZAIQgqAQiDAKQi0APkKABQkKgBiygPgAmJgWQiUAKg2AMQA2ANCUAKQCrALDeAAQDfAACrgLQCUgKA2gNQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCDgLQC9gPEAAAQEBAAC8APQCEALAqAQQAZAJAAAPQAAARgZAJQgqAPiEALQi8APkBAAQkAAAi9gPgAmJgWQiUAKg2AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg2gMiUgKQisgMjeAAQjdAAisAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9AzQiDgKgqgQQgZgIAAgRQAAgQAZgIQAqgQCDgKQC0gPEJgBQELABCyAPQCEAKAqAQQAZAIAAAQQAAARgZAIQgqAQiEAKQiyAPkLABQkJgBi0gPgAmJgWQiUAJg2ANQA2ANCUAKQCrALDeAAQDfAACrgLQCUgKA2gNQg2gNiUgJQirgMjfABQjegBirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.4);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am9A0QiDgLgqgPQgagJAAgRQAAgPAagJQAqgQCDgLQC9gPEAAAQEBAAC8APQCEALArAQQAYAJAAAPQAAARgYAJQgrAPiEALQi8APkBAAQkAAAi9gPgAmJgWQiVAKg2AMQA2AOCVAJQCrAMDeAAQDeAACsgMQCUgJA2gOQg1gMiVgKQirgMjfAAQjfAAiqAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnSA9QiIgNgtgUQgagLAAgRQAAgQAagLQAugUCHgNQDGgTEMAAQENAADGATQCHANAuAUQAaALAAAQQAAARgaALQguAUiHANQjGATkNAAQkMAAjGgTgAmygfQigAOgpARQApASCgAOQC5AQD5AAQD6AAC4gQQChgOApgSQgpgRihgOQi5gQj5AAQj5AAi5AQg");
	this.shape.setTransform(67.5,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,16.1);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnSA9QiHgNgugUQgagLAAgRQAAgRAagKQAtgUCIgNQDAgTESAAQESAADBATQCHANAuAUQAaAKAAARQAAARgaALQguAUiHANQjGASkNABQkMgBjGgSgAmygfQigAOgpARQApARCgAOQC5ARD5gBQD5ABC5gRQChgOApgRQgpgRihgOQi4gPj6AAQj6AAi4APg");
	this.shape.setTransform(67.5,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,16);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgQQgZgJAAgQQAAgQAZgJQAqgPCEgLQC8gPEAAAQEBAAC8APQCEALAqAPQAZAJAAAQQAAAQgZAJQgqAQiEALQi8APkBAAQkAAAi8gPgAmJgWQiUAJg2ANQA2ANCUAKQCsAMDdAAQDeAACsgMQCUgKA2gNQg2gNiUgJQirgMjfAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgQQgZgJAAgQQAAgQAZgJQAqgPCEgLQC8gPEAAAQEBAAC8APQCEALAqAPQAZAJAAAQQAAAQgZAJQgqAQiEALQi8APkBAAQkAAAi8gPgAmJgWQiUAJg2ANQA2ANCUAKQCsAMDdAAQDeAACsgMQCUgKA2gNQg2gNiUgJQirgMjfAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am8A0QiEgLgqgPQgZgJAAgRQAAgPAZgJQAqgQCEgLQC8gPEAAAQEBAAC9APQCDALAqAQQAZAJAAAPQAAARgZAJQgqAPiDALQi9APkBAAQkAAAi8gPgAmJgWQiVAKg1AMQA2AOCUAJQCrAMDeAAQDfAACrgMQCUgJA2gOQg1gMiVgKQiqgMjgAAQjeAAirAMg");
	this.shape.setTransform(64.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,13.5);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAED37").s().p("AlWDWQhbgEhBgIQA9gXBXgYQBLgVBKgRQBOgSBggRIgbglQgyhIglg7Ig+hnIB1gLQCSgOCPgCQAxgBBiACQBVADBAAHQg0AWhXAcQhJAXhEARQhRAUhQARIAdAoQA1BKAiA5IBABpIh5AJQioALiJAAIgPAAQg/AAhMgEg");
	this.shape.setTransform(-173.5,-63.6,0.445,0.445);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED37").s().p("AiaC9QArgbBWgwIAWgMQhThVhBhMIhThlIDqhdIBCgWQAogOAagIQCdgwB1gRQhgBUiKBbQgYAPgkAXIg9AmIgSAJQBVBXBBBNIBWBoIj4BaQhbAfgvANQikAvh8ARQBmhTCVhcg");
	this.shape_1.setTransform(-4.7,-96.5,0.445,0.445);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED37").s().p("AhZIrQAjh4AghbQAihoA2iHIhDABQiPgBhjgGIi2gMIBOiUQBljEBpipQAxhPBDhhQBGhmA5hEQgPBfgdByQgfB5gbBSQgZBZgyCJIBKgBQCOABBiAGIC7ALIhTCYQhwDLhxCvQgzBOhIBpQhRBug6BDQATheAkh8g");
	this.shape_2.setTransform(6.3,69.5,0.445,0.445);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED37").s().p("AnwFPQh/gGhjgOQBZgjB9gnQB8gkBcgWQB0gcCIgbIgmg5QhQh7gvhVIhaigICqgRQDTgVDRgEQBZgCB8ADQB9AGBaALQhRAkh5AoQh3AohUAXQhhAciJAfIAqA+QBOB4AxBXIBcCkIivANQjpASjRAAIgPAAQhYAAh5gGg");
	this.shape_3.setTransform(176.3,-76.2,0.445,0.445);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AgVBUIAAinIAqAAIAACng");
	this.shape_4.setTransform(-63.4,-107,0.445,0.445);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AgVBUIAAinIAqAAIAACng");
	this.shape_5.setTransform(-134.8,-107,0.445,0.445);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AssAMIAAgXIZZAAIAAAXg");
	this.shape_6.setTransform(-99.6,-106.8,0.445,0.445);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_7.setTransform(-78.9,-141,0.445,0.445);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_8.setTransform(-92.7,-141,0.445,0.445);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_9.setTransform(-106.5,-141,0.445,0.445);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_10.setTransform(-120.3,-141,0.445,0.445);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_11.setTransform(-78.9,-86,0.445,0.445);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_12.setTransform(-92.7,-86,0.445,0.445);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_13.setTransform(-106.5,-86,0.445,0.445);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_14.setTransform(-120.3,-86,0.445,0.445);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6D6E").s().p("AlJAyIAAhjIKTAAIAABjg");
	this.shape_15.setTransform(-81,-96.5,0.445,0.445);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6D6E").s().p("AlJAyIAAhjIKTAAIAABjg");
	this.shape_16.setTransform(-118.2,-96.5,0.445,0.445);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2F2F2").s().p("AgYBEQAAgQAGgXQAHgXALgUQAKgWANgPIhDAAIAAgQIBZAAIAAANQgNAOgOAYQgNAWgFAYQgFASgBAUg");
	this.shape_17.setTransform(-75.2,-120.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2F2F2").s().p("AgYBEQAAgQAGgXQAHgXALgUQAKgWANgPIhDAAIAAgQIBZAAIAAANQgNAOgOAYQgNAWgFAYQgFASgBAUg");
	this.shape_18.setTransform(-86,-120.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2F2F2").s().p("AgeA8QgMgLgCgSIARgCQADAPAHAGQAHAHAKAAQAKAAAJgJQAIgIAAgNQAAgLgIgIQgHgIgMAAQgDAAgHACIACgNIACAAQAJAAAJgFQAJgGAAgMQAAgJgHgHQgGgGgIAAQgKAAgHAGQgGAHgCAMIgRgDQADgRALgJQALgKARAAQAJAAAKAFQAJAFAFAIQAFAJAAAJQAAAJgEAIQgFAHgKAFQANADAGAHQAHAJAAANQAAASgNANQgNANgTAAQgSAAgMgLg");
	this.shape_19.setTransform(-96.9,-120.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AAIBFIAAhrQgGAGgIAGQgKAGgIADIAAgRQAOgGAKgKQAKgKAEgIIALAAIAACJg");
	this.shape_20.setTransform(-108.5,-120.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F2F2F2").s().p("AgeA4QgOgRAAgnQAAgXAFgPQAFgQALgIQAKgIANAAQALAAAJAFQAIAEAFAJQAGAIADAMQADANAAATQAAAYgFAPQgFAPgKAIQgKAJgPAAQgSAAgMgPgAgRguQgJANAAAhQgBAiAJALQAIAMAKAAQALAAAJgMQAHgLABgiQgBghgHgLQgJgMgLAAQgLAAgGAKg");
	this.shape_21.setTransform(-118.6,-120.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6E6D6E").s().p("ArrC5IAAlxIXXAAIAAFxg");
	this.shape_22.setTransform(-99.6,-120.6,0.445,0.445);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2F2F2").s().p("AmGOdQi0hMiLiLQiLiLhMi0QhQi7AAjMQAAjLBQi7QBMizCLiMQCLiLC0hMQC7hPDLAAQDMAAC7BPQC0BMCLCLQCLCMBMCzQBPC7AADLQAADMhPC7QhMC0iLCLQiLCLi0BMQi7BPjMAAQjLAAi7hPg");
	this.shape_23.setTransform(-99.1,-113.5,0.445,0.445);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AmQO3Qi6hOiPiPQiPiPhOi6QhRi/AAjSQAAjRBRjAQBOi5CPiPQCPiPC6hPQDAhRDQAAQDRAADABRQC6BPCPCPQCPCPBPC5QBQDAAADRQAADShQC/QhPC6iPCPQiPCPi6BOQjABSjRAAQjQAAjAhSg");
	this.shape_24.setTransform(-99.1,-113.5,0.445,0.445);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F2F2F2").s().p("AmlPoQjDhTiWiWQiXiWhSjDQhVjKAAjcQAAjbBVjKQBSjCCXiWQCWiXDDhSQDJhWDcAAQDdAADJBWQDDBSCWCXQCWCWBTDCQBVDKAADbQAADchVDKQhTDDiWCWQiWCWjDBTQjJBUjdABQjcgBjJhUg");
	this.shape_25.setTransform(-99.1,-113.5,0.445,0.445);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AmzQJQjKhVibibQibichVjJQhYjQAAjkQAAjiBYjRQBVjJCbibQCbicDKhVQDQhYDjAAQDkAADQBYQDJBVCcCcQCaCbBWDJQBYDRAADiQAADkhYDQQhWDJiaCcQicCbjJBVQjQBYjkAAQjjAAjQhYg");
	this.shape_26.setTransform(-99.1,-113.5,0.445,0.445);

	this.instance = new lib.Group_2();
	this.instance.setTransform(67,-119.2,0.445,0.445,0,0,0,60.4,117.1);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(93.2,-119.6,0.445,0.445,0,0,0,31.2,92.4);
	this.instance_1.alpha = 0.5;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6E6D6E").s().p("AgdAtIAAhZIA7AAIAAALIgvAAIAAAcIApAAIAAAJIgpAAIAAApg");
	this.shape_27.setTransform(101.1,-87.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6E6D6E").s().p("AgdAtIAAhZIA7AAIAAALIgvAAIAAAcIApAAIAAAJIgpAAIAAApg");
	this.shape_28.setTransform(93.2,-87.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6E6D6E").s().p("AgVApQgLgHgFgKQgFgLAAgMQAAgVAMgNQAMgNASAAQAMAAALAGQAKAGAFALQAFALAAAMQAAAOgFALQgGALgKAFQgKAGgMAAQgLAAgKgGgAgUgbQgKAJAAATQAAAQAJAKQAJAJAMAAQANAAAJgJQAJgKAAgRQAAgKgEgIQgEgIgHgFQgHgEgJAAQgLAAgJAIg");
	this.shape_29.setTransform(84.2,-87.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6E6D6E").s().p("AAXAtIguhGIAABGIgMAAIAAhZIANAAIAuBGIAAhGIAMAAIAABZg");
	this.shape_30.setTransform(96.2,-154.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6E6D6E").s().p("AgVApQgLgHgFgKQgFgLAAgMQAAgVAMgNQAMgNASAAQAMAAALAGQAKAGAFALQAFALAAAMQAAAOgFALQgGALgKAFQgKAGgMAAQgLAAgKgGgAgUgbQgKAJAAATQAAAQAJAKQAJAJAMAAQANAAAJgJQAJgKAAgRQAAgKgEgIQgEgIgHgFQgHgEgJAAQgLAAgJAIg");
	this.shape_31.setTransform(86.7,-154.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AjXA8IAAh3IGvAAIAAB3g");
	this.shape_32.setTransform(91.4,-118.6,0.445,0.445);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F2F2F2").s().p("AjXDXIAAmtIGvAAIAAGtg");
	this.shape_33.setTransform(91.4,-130.9,0.445,0.445);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B5B5B5").s().p("AjXDYIAAmvIGvAAIAAGvg");
	this.shape_34.setTransform(91.4,-114.5,0.445,0.445);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9B9B9B").s().p("AkhHeIAAu7IJDAAIAAO7g");
	this.shape_35.setTransform(91.2,-122.5,0.445,0.445);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B5B5B5").ss(1.3).p("AQ9P4QAAAcgUAUQgUAUgdAAI/vAAQgcAAgVgUQgUgUAAgcIAA/vQAAgcAUgUQAVgUAcAAIfvAAQAdAAAUAUQAUAUAAAcg");
	this.shape_36.setTransform(90.8,-120.6,0.445,0.445);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("AwpRyQgeAAgWgVQgUgVAAgeMAAAghTQgBgeAVgVQAWgVAeAAMAhTAAAQAfAAAUAVQAVAVAAAeMAAAAhTQAAAegVAVQgUAVgfAAg");
	this.shape_37.setTransform(90.8,-120.6,0.445,0.445);

	this.instance_2 = new lib.Group_0();
	this.instance_2.setTransform(80.2,66.2,0.445,0.445,0,0,0,35.3,104.7);
	this.instance_2.alpha = 0.5;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#393768").s().p("ApMBSQgiAAgYgYQgYgYAAgiQAAggAYgZQAYgYAiAAISZAAQAiAAAYAYQAYAZAAAgQAAAigYAYQgYAYgiAAg");
	this.shape_38.setTransform(94.2,49.4,0.445,0.445);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3F4493").s().p("AjoHEQg+AAgrgrQgrgrAAg+IAAi6IhdAAQguAAggghQggggAAgtIAAnLISPAAIAAHLQAAAtggAgQggAhguAAIhdAAIAAC6QAAA+grArQgsArg9AAg");
	this.shape_39.setTransform(94.2,69.5,0.445,0.445);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6E6D6E").s().p("AhJFmQgfgfAAgsIAAo1QAAgsAfgfQAfgfAqAAQArAAAfAfQAfAfAAAsIAAI1QAAAsgfAfQgfAfgrAAQgqAAgfgfg");
	this.shape_40.setTransform(111.2,36.9,0.445,0.445);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6E6D6E").s().p("AhJFmQgfgfAAgsIAAo1QAAgsAfgfQAegfArAAQArAAAfAfQAfAfAAAsIAAI1QAAAsgfAfQgfAfgrAAQgrAAgegfg");
	this.shape_41.setTransform(77.3,36.9,0.445,0.445);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#393768").s().p("Ag/E7QgfAAgWgWQgVgVAAgfIAAnhQAAgeAVgWQAWgWAfAAIB/AAQAfAAAWAWQAVAWAAAeIAAHhQAAAfgVAVQgWAWgfAAg");
	this.shape_42.setTransform(94.2,86.3,0.445,0.445);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#424242").s().p("AiZEIQhyhGhEh8QhaijAAj3ICUAAQAAFlDJB4QBkA+CMgIQBwgGBRgrIBFCDQg7AfhJASQhNAThQAAQiiAAiAhNg");
	this.shape_43.setTransform(109.9,109.8,0.445,0.445);

	this.instance_3 = new lib.Group();
	this.instance_3.setTransform(68.8,12.1,0.445,0.445,0,0,0,60.3,120);
	this.instance_3.alpha = 0.5;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7F7F7F").s().p("AhJBKQgfgfAAgrQAAgrAfgeQAegfArAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgrAAgegfg");
	this.shape_44.setTransform(110.6,11.6,0.445,0.445);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7F7F7F").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAfAAAqQAAArgfAfQgeAfgsAAQgqAAgfgfg");
	this.shape_45.setTransform(76.6,11.6,0.445,0.445);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B5B5B5").s().p("AL6EgQguiDhIhsQjolamcABQmbgBjoFaQhIBsguCDQgXBBgIArQAAihA+iTQA8iNBvhuQBthuCOg8QCUg/CgAAQChAACTA/QCPA8BuBuQBuBuA8CNQA+CTAAChQgIgrgXhBg");
	this.shape_46.setTransform(93.6,-6,0.445,0.445);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("Ak0LbQiOg8hthuQhvhug8iOQg+iUAAihQAAigA+iTQA8iPBvhuQBthuCOg8QCUg+CgAAQChAACTA+QCPA8BuBuQBuBuA8CPQA+CTAACgQAAChg+CUQg9COhtBuQhuBuiPA8QiTA+ihAAQigAAiUg+g");
	this.shape_47.setTransform(93.6,11.6,0.445,0.445);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6E6E5").s().p("AvnR8Qg+AAgrgrQgrgsAAg9IAA/PQAAg+ArgrQArgsA+AAIfPAAQA9AAAsAsQArArAAA+IAAfPQAAA9grAsQgsArg9AAg");
	this.shape_48.setTransform(93,9.6,0.445,0.445);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s().p("AvnR9Qg+AAgrgsQgrgrAAg+IAA/PQAAg9ArgsQArgrA+AAIfPAAQA9AAAsArQArAsAAA9IAAfPQAAA+grArQgsAsg9AAg");
	this.shape_49.setTransform(93,11.6,0.445,0.445);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("ALRYyQgHgFgCgIIhllEIzFAAIhkFEQgDAIgHAFQgGAEgJAAIgHgBQgKgDgFgJQgFgJADgKIHG21IAAinIp/AAQgJAAgHgGQgHgGgCgJQgCgJAFgIQAEgIAIgDIKJkXIAAllIp/AAQgJAAgHgGQgHgGgCgJQgCgIAEgIQAFgIAIgEIKQkmIEWngQAHgMANAAQAPAAAHAMIEVHgIKQEmQAIAEAFAIQAEAIgCAIQgCAJgHAGQgHAGgJAAIp/AAIAAFlIKJEXQAIADAFAIQAEAIgCAJQgCAJgHAGQgHAGgJAAIp/AAIAACnIHGW1QADAKgFAJQgFAJgKADIgHABQgJAAgGgEgAHlSuInliwInkCwIPJAAgAJOSeIhik8ImdCDIH/C5gApNSeIIAi5ImeiDgAmwNAIGwCIIGxiIImxirgAHVMXIhUkOIk6ByIGOCcgAnUMXIGOicIk6hygAlWHjIFWB9IFXh9IlXjSgAFlGwIhbkoIjWBtIExC7gAlkGwIEyi7IjWhtgAj+BVID+CBID/iBIAAibIn9AAgAM2h5IoEjfIAADfIIEAAgADJh5IjJhtIjIBtIGRAAgAs1h5IIEAAIAAjfgAA1kCIDKBtIAAjbgAj+iVIDKhtIjKhugAjlmcIDlB8IDmh8IjmiNgAAxpHIDOB/IAAj5gAj+nIIDPh/IjPh6gAjmruIDmCJIDniJIgKgFIm5AAgAM6smIoIjpIAADpIIIAAgAAyuTIC5BtIAUAAIAAjkgACHsmIiHhQIiGBQIENAAgAj+smIAUAAIC5htIjNh3gAs5smIIIAAIAAjpgAAAuxIC6hrIlzAAgADtxPIjtmbIjsGbIHZAAg");
	this.shape_50.setTransform(-106.5,34.5,0.445,0.445);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#CCCCCC").ss(1.3).p("AKXFyQiWgYjwhpQnfjSnFmS");
	this.shape_51.setTransform(-177.5,14.1,0.445,0.445);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CCCCCC").ss(1.3).p("AP5FmQlegZmthmQtYjNmKmB");
	this.shape_52.setTransform(-110.1,14.6,0.445,0.445);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#CCCCCC").ss(1.3).p("AP5DkQhNALiBAIQkAAOj/gXQsuhKnzmg");
	this.shape_53.setTransform(-110.1,-10.1,0.445,0.445);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CCCCCC").ss(1.3).p("AKUDiQgnAJhGADQiLAIiYgaQnmhTmzl5");
	this.shape_54.setTransform(-177.4,-10.7,0.445,0.445);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#CCCCCC").ss(1.3).p("ANHBLQjPAsk6gDQpwgFoTjj");
	this.shape_55.setTransform(-143.8,-37.9,0.445,0.445);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2F2F2").s().p("AHBPhIg/jNIsDAAIg/DNQgEAMgLAAIgFgBQgGgDgDgFQgEgGACgGIEfubIAAhpImUAAQgFAAgFgEQgEgDgCgGQAAgFACgGQADgFAFgCIGaiwIAAjiImUAAQgFAAgFgDQgEgEgCgFQgCgMAMgHIGei5ICwkvQAEgIAIABQAJgBAEAIICwEvIGeC5QAMAHgCAMQgEAMgMAAImUAAIAADiIGaCwQAGACACAFQADAGgBAFQgBAGgFADQgFAEgFAAImUAAIAABpIEeObQADAGgEAGQgCAFgHADIgEABQgMAAgEgMgAEyL1IkyhvIkxBvIJjAAgAF1LqIg/jHIkEBSIFDB1gAlzLqIFDh1IkFhSgAkQINIEQBXIERhXIkRhrgAEoH0Ig1irIjGBIID7BjgAknH0ID7hjIjGhIgAjYExIDYBPIDZhPIjZiFgADiEQIg6i6IiHBEIDBB2gAjgEQIDBh2IiIhEgAigA1ICgBSIChhSIAAhhIlBAAgAIHhMIlGiMIAACMIFGAAgAB/hMIh/hFIh+BFID9AAgAoGhMIFGAAIAAiMgAAhijICABFIAAiKgAigheIB/hFIh/hFgAiQkEICQBPICRhPIiRhagAAflwICCBQIAAidgAigkgICChQIiChNgAiQnZICQBXICShXIgGgEIkXAAgAIKn9IlJiSIAACSIFJAAgAAfpCIB1BFIANAAIAAiQgABVn9IhVgyIhUAyICpAAgAign9IANAAIB1hFIiChLgAoJn9IFJAAIAAiSgAAApUIB2hEIjqAAgACWq4IiWkEIiUEEIEqAAg");
	this.shape_56.setTransform(-181.1,0.6,0.445,0.445);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CCCCCC").ss(1.3).p("AqWFyIBpgZQCIgmCWhCQHfjSHEmS");
	this.shape_57.setTransform(-35.6,14.1,0.445,0.445);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CCCCCC").ss(1.3).p("Av4FmIDlgZQEagmEMhAQNYjNGKmB");
	this.shape_58.setTransform(-102.9,14.6,0.445,0.445);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CCCCCC").ss(1.3).p("Av4DkIDNATQEBAOD/gXQMuhKHymg");
	this.shape_59.setTransform(-102.9,-10.1,0.445,0.445);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CCCCCC").ss(1.3).p("AqWDiIBtAMQCLAICYgaQHmhTGzl5");
	this.shape_60.setTransform(-35.6,-10.7,0.445,0.445);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CCCCCC").ss(1.3).p("AtGBLICPAWQC2AVDDgCQJxgFISjj");
	this.shape_61.setTransform(-69.2,-37.9,0.445,0.445);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2F2F2").s().p("AHBPhIg/jMIsDAAIg/DMQgEAMgLAAIgFgCQgHgBgDgGQgDgGACgGIEfubIAAhpImUAAQgFAAgFgDQgEgFgBgFQgDgNAMgFIGaiwIAAjhImUAAQgFAAgFgEQgEgEgBgGQgDgMAMgGIGfi5ICvkvQAEgHAIAAQAJAAAEAHICvEvIGfC5QAMAGgDAMQgBAGgEAEQgFAEgFAAImUAAIAADhIGaCwQAFACADAFQACAFgBAGQgBAFgEAFQgFADgFAAImUAAIAABpIEfObQACAGgDAGQgDAGgHABIgFACQgLAAgEgMgAEyL1IkyhwIkxBwIJjAAgAF1LqIg+jHIkGBSIFEB1gAl0LqIFEh1IkGhSgAkQINIEQBWIERhWIkRhrgAEoH0Ig1irIjGBIID7BjgAknH0ID7hjIjGhIgAjYEwIDYBQIDZhQIjZiEgADhEQIg6i6IiHBFIDBB1gAjgEQIDBh1IiIhFgAigA1ICgBSIChhSIAAhhIlBAAgAIHhNIlGiMIAACMIFGAAgAB/hNIh/hEIh+BEID9AAgAoGhNIFGAAIAAiMgAAhijICABFIAAiKgAigheICAhFIiAhFgAiQkEICQBPICRhPIiRhagAAelwICDBQIAAidgAigkgICChQIiChNgAiRnZICRBWICShWIgHgDIkVAAgAIKn8IlJiTIAACTIFJAAgAAfpBIB1BFIANAAIAAiQgABVn8IhVgzIhUAzICpAAgAign8IANAAIB1hFIiChLgAoJn8IFJAAIAAiTgAAApVIB1hDIjpAAgACVq4IiVkEIiUEEIEpAAg");
	this.shape_62.setTransform(-31.9,0.6,0.445,0.445);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhBBNQgQgPAAgXQAAgPAHgLQAHgMANgEQANgGAYgFQAfgGAMgGIAAgEQAAgOgGgFQgHgFgQAAQgNAAgHAEQgHAFgEAMIgqgIQAHgZASgMQARgMAiAAQAdAAAPAHQAPAHAHAMQAGALAAAeIgBA0QAAAXADALQACALAGANIguAAIgFgOIgBgFQgMAMgOAFQgLAGgPAAQgcAAgPgOgAAAAKQgTAEgGAEQgJAGAAAKQAAAKAHAHQAHAIALAAQALAAALgJQAJgGACgKQACgFAAgRIAAgJQgJADgRAEg");
	this.shape_63.setTransform(117,154.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWB4IAAisIAsAAIAACsgAgWhNIAAgrIAsAAIAAArg");
	this.shape_64.setTransform(103,151.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ag8BuQgSgQAAgYIAAgFIA1AGQACAKAEADQAHAFAMAAQASAAAJgFQAGgEADgIQACgGABgQIAAgZQgVAcgeAAQgjAAgVgeQgQgXAAghQAAgsAVgYQAVgXAgAAQAeAAAWAdIAAgYIArAAIAACaQAAAggGAPQgFAPgIAJQgKAIgPAGQgQAEgYAAQgqABgTgPgAgahLQgLANAAAaQAAAcALALQALANAPAAQAQAAALgNQANgMAAgaQAAgbgMgNQgLgNgRAAQgPAAgLANg");
	this.shape_65.setTransform(87.5,157.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ag3BZIAAitIArAAIAAAYQALgRAHgFQAIgGAMAAQAPAAAPAJIgOAoQgMgIgKABQgKgBgHAGQgEAFgEAOQgEAOAAArIAAA2g");
	this.shape_66.setTransform(72.3,154.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag/A9QgSgYAAglQAAgpAXgYQAXgZAjAAQAlAAAXAaQAWAagBAzIhyAAQAAAUALAMQALAMAOgBQALAAAHgFQAIgHADgNIAvAIQgJAZgTAOQgUANgdAAQgrAAgWgegAgWgsQgKAMAAASIBDAAQAAgUgKgKQgKgKgOAAQgOgBgJALg");
	this.shape_67.setTransform(54.9,154.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAhBZIAAhZQAAgbgDgIQgDgIgGgFQgHgEgKAAQgKAAgJAGQgKAHgDALQgEAKAAAcIAABPIguAAIAAitIArAAIAAAZQAXgdAhAAQAPAAANAGQAMAFAHAIQAGAJADALQACALAAAUIAABrg");
	this.shape_68.setTransform(35.3,154.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhaB4IAAjwICxAAIAAApIiBAAIAAA2IB4AAIAAAnIh4AAIAABCICFAAIAAAog");
	this.shape_69.setTransform(14.1,151.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag/A9QgSgYAAglQAAgpAXgYQAXgZAjAAQAlAAAXAaQAWAagBAzIhyAAQAAAUALAMQALAMAOgBQALAAAHgFQAIgHADgNIAvAIQgJAZgTAOQgUANgdAAQgrAAgWgegAgWgsQgKAMAAASIBDAAQAAgUgKgKQgKgKgOAAQgOgBgJALg");
	this.shape_70.setTransform(-16.5,154.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag+BiQgWgYAAgsQAAgqAVgYQAVgXAgAAQAbAAAVAYIAAhXIAvAAIAADwIgrAAIAAgZQgLAPgOAHQgPAIgNAAQgegBgVgYgAgagKQgLALAAAaQAAAcAIANQALASASAAQAQAAALgOQAMgNAAgbQAAgfgLgLQgLgNgRAAQgPAAgLANg");
	this.shape_71.setTransform(-36.4,151.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag/A9QgSgYAAglQAAgpAXgYQAXgZAjAAQAlAAAXAaQAWAagBAzIhyAAQAAAUALAMQALAMAOgBQALAAAHgFQAIgHADgNIAvAIQgJAZgTAOQgUANgdAAQgrAAgWgegAgWgsQgKAMAAASIBDAAQAAgUgKgKQgKgKgOAAQgOgBgJALg");
	this.shape_72.setTransform(-65.3,154.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYCbIgRgEIAIgnIAGABIAGAAQAHAAAEgDQAFgDACgEQABgFAAgVIAAilIAsAAIAACnQAAAigEAOQgEANgNAJQgNAHgRAAIgPgBgAgChwIAAgrIAsAAIAAArg");
	this.shape_73.setTransform(-81.2,154.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag/A9QgSgYAAglQAAgpAXgYQAXgZAjAAQAlAAAXAaQAWAagBAzIhyAAQAAAUALAMQALAMAOgBQALAAAHgFQAIgHADgNIAvAIQgJAZgTAOQgUANgdAAQgrAAgWgegAgWgsQgKAMAAASIBDAAQAAgUgKgKQgKgKgOAAQgOgBgJALg");
	this.shape_74.setTransform(-93.5,154.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhUB6IAAjvIArAAIAAAZQAIgNAPgIQAPgIAPAAQAfAAAUAXQAWAYAAArQAAAqgWAYQgVAZgfAAQgMAAgMgGQgLgGgNgOIAABYgAgbhIQgLANAAAaQAAAeAMAMQALAOAPAAQAQAAALgNQAKgLAAgeQABgbgMgNQgLgOgPAAQgPAAgMANg");
	this.shape_75.setTransform(-112.5,157.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag1BNQgVgPgGgZIAugHQADANAJAIQAJAGAPABQASAAAJgHQAGgFAAgIQAAgFgDgEQgEgDgMgCQg2gMgPgLQgVgMAAgZQAAgXASgPQASgQAmAAQAiAAARALQASAMAGAXIgrAIQgDgKgIgGQgIgFgNAAQgSAAgIAFQgFAEAAAFQAAAFAFAEQAGAEAjAJQAlAJAPAMQAOAKAAAWQAAAZgUAQQgUASgnAAQgiAAgVgOg");
	this.shape_76.setTransform(-133.2,154.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag/A9QgSgYAAglQAAgpAXgYQAXgZAjAAQAlAAAXAaQAWAagBAzIhyAAQAAAUALAMQALAMAOgBQALAAAHgFQAIgHADgNIAvAIQgJAZgTAOQgUANgdAAQgrAAgWgegAgWgsQgKAMAAASIBDAAQAAgUgKgKQgKgKgOAAQgOgBgJALg");
	this.shape_77.setTransform(-151.7,154.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AhkB4IAAjwIBZAAQAdAAAPAFQAWAHAPAPQAPARAIAXQAIAXAAAgQAAAdgHAXQgKAagQAQQgNAMgWAIQgQAEgZAAgAgzBQIAkAAQATAAAJgCQAMgEAIgHQAIgGAFgRQAEgQAAgcQAAgbgEgPQgFgOgJgJQgJgIgOgDQgJgCgdgBIgWAAg");
	this.shape_78.setTransform(-172.8,151.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_3},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_2},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_1},{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.4,-171.2,416.9,342.6);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BSQgXgPgHgbIAygIQADAPALAIQAJAHAQAAQAUAAAJgHQAHgFAAgJQAAgFgEgEQgEgDgNgDQg6gOgQgLQgXgOAAgbQAAgYATgRQAUgQAoAAQAlAAAUAMQATAMAGAZIgvAJQgCgLgJgGQgIgGgPABQgTgBgJAGQgFAEgBAGQABAFAEAEQAIAFAlAJQAoAJAQAOQAQALAAAYQAAAagWATQgVASgrABQglgBgWgQg");
	this.shape.setTransform(195.2,152.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBWQgYgLgMgXQgMgXAAgfQAAgYAMgYQAMgXAXgNQAXgMAaABQAqAAAcAcQAbAbAAAqQAAApgbAdQgcAcgqABQgYgBgYgMgAgfgqQgOAPAAAbQAAAbAOAQQANAPASgBQATABAOgPQANgQAAgbQAAgbgNgPQgOgPgTAAQgSAAgNAPg");
	this.shape_1.setTransform(174.4,152.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHB+QgKgGgFgHQgGgHgCgMQgBgJAAgbIAAhQIgXAAIAAgoIAXAAIAAglIAwgeIAABDIAiAAIAAAoIgiAAIAABLQAAAWABAFQABADAEACQADADAFAAQAHAAANgFIAEAnQgRAIgWAAQgOAAgJgEg");
	this.shape_2.setTransform(157.1,149.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAguAZgZQAYgaApAAQAjgBAUAPQAUAPAJAeIgxAJQgCgPgKgHQgIgHgOgBQgRABgLANQgMANAAAeQAAAfAMAPQALAOASgBQANABAKgJQAJgIAEgUIAxAJQgIAhgWASQgWASgkAAQgogBgYgag");
	this.shape_3.setTransform(141.2,152.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAguAYgaQAZgbAmABQAoAAAYAcQAZAbgBA3Ih8AAQABAXALAMQAMANAPAAQAMAAAIgGQAIgHAEgOIAyAIQgKAcgUAOQgVAPgfAAQgwgBgXgggAgYgwQgLANAAAUIBJAAQgBgVgKgMQgLgMgPAAQgPAAgKAMg");
	this.shape_4.setTransform(120.4,152.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPCCIgFgoQAMADAKAAQARAAAIgKQAJgLAEgQIhIi8IA2AAIArCFIAsiFIA0AAIhDC1IgMAhQgGAQgHAJQgFAJgGAFQgIAGgLADQgMADgOAAQgOAAgOgDg");
	this.shape_5.setTransform(100.1,156.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBWQgYgLgMgXQgMgXAAgfQAAgYAMgYQAMgXAXgNQAXgMAaABQAqAAAcAcQAbAbAAAqQAAApgbAdQgcAcgqABQgYgBgYgMgAgfgqQgOAPAAAbQAAAbAOAQQANAPASgBQATABAOgPQANgQAAgbQAAgbgNgPQgOgPgTAAQgSAAgNAPg");
	this.shape_6.setTransform(79,152.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BgIAAi7IAuAAIAAAbQANgTAHgGQAKgGAMAAQARAAAQAJIgQAsQgNgJgLAAQgKAAgHAGQgFAGgFAPQgEAPAAAvIAAA6g");
	this.shape_7.setTransform(62.1,152.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhjCCIAAkDIBVAAQAuAAAPAEQAWAGAPATQAQAUAAAfQAAAYgJARQgJAOgNAKQgOAJgOADQgTAEghAAIgjAAIAABigAgugLIAdAAQAdAAALgEQAKgEAGgJQAGgIAAgMQAAgOgIgKQgJgJgMgCQgKgCgaAAIgaAAg");
	this.shape_8.setTransform(41.8,149.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAguAYgaQAZgbAmABQAoAAAYAcQAZAbgBA3Ih8AAQABAXALAMQAMANAPAAQAMAAAIgGQAIgHAEgOIAyAIQgKAcgUAOQgVAPgfAAQgwgBgXgggAgYgwQgLANAAAUIBJAAQgBgVgKgMQgLgMgPAAQgPAAgKAMg");
	this.shape_9.setTransform(8.7,152.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBqQgYgbAAguQAAgvAWgYQAYgZAiAAQAeAAAXAaIAAhfIAyAAIAAEEIgvAAIAAgcQgLAQgQAJQgQAHgOABQghgBgWgagAgcgLQgMAMAAAcQAAAfAJANQALATAUAAQASAAAMgOQAMgOAAgeQAAgggMgNQgMgPgSAAQgQAAgMAPg");
	this.shape_10.setTransform(-12.8,149.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkBgIAAhgQAAgdgEgJQgDgJgHgFQgHgFgKAAQgLAAgLAHQgKAHgEAMQgEAMAAAdIAABWIgyAAIAAi7IAvAAIAAAcQAYggAkAAQARAAANAGQAOAFAHAKQAHAJADAMQADAMAAAWIAABzg");
	this.shape_11.setTransform(-44.8,152.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwB7QgYgMgMgXQgMgWAAghQAAgZAMgVQAMgYAXgMQAXgMAaAAQAqAAAcAcQAbAbAAApQAAArgbAcQgcAdgqAAQgYAAgYgMgAgfgGQgOANAAAdQAAAcAOAPQANAPASAAQATAAAOgPQANgPAAgdQAAgcgNgNQgOgPgTAAQgSAAgNAPgAgYhQIAYg2IA3AAIgxA2g");
	this.shape_12.setTransform(-67.1,149.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYCCIAAi7IAxAAIAAC7gAgYhTIAAguIAxAAIAAAug");
	this.shape_13.setTransform(-83.4,149.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAguAZgZQAYgaApAAQAjgBAUAPQAVAPAJAeIgyAJQgCgPgKgHQgIgHgOgBQgRABgLANQgMANAAAeQAAAfAMAPQALAOASgBQAOABAJgJQAJgIAEgUIAxAJQgIAhgVASQgWASglAAQgogBgYgag");
	this.shape_14.setTransform(-98.3,152.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhbCEIAAkDIAvAAIAAAcQAJgPAPgJQAQgIARAAQAhAAAXAZQAXAaAAAuQAAAugXAaQgYAbghAAQgNAAgNgHQgNgGgOgPIAABfgAgdhOQgMAPAAAbQAAAgAMAOQANAPAQAAQASAAALgOQAMgMAAggQAAgegMgOQgMgPgRAAQgRAAgMAOg");
	this.shape_15.setTransform(-119.4,156.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAguAYgaQAZgbAmABQAoAAAYAcQAZAbgBA3Ih8AAQABAXALAMQAMANAPAAQAMAAAIgGQAIgHAEgOIAyAIQgKAcgUAOQgVAPgfAAQgwgBgXgggAgYgwQgLANAAAUIBJAAQgBgVgKgMQgLgMgPAAQgPAAgKAMg");
	this.shape_16.setTransform(-141.4,152.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAguAZgZQAYgaApAAQAjgBAUAPQAUAPAJAeIgxAJQgCgPgKgHQgIgHgOgBQgRABgLANQgMANAAAeQAAAfAMAPQALAOASgBQANABAKgJQAJgIAEgUIAxAJQgIAhgWASQgWASgkAAQgogBgYgag");
	this.shape_17.setTransform(-161.2,152.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAguAYgaQAZgbAmABQAoAAAYAcQAZAbgBA3Ih8AAQABAXALAMQAMANAPAAQAMAAAIgGQAIgHAEgOIAyAIQgKAcgUAOQgVAPgfAAQgwgBgXgggAgYgwQgLANAAAUIBJAAQgBgVgKgMQgLgMgPAAQgPAAgKAMg");
	this.shape_18.setTransform(-182,152.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA2CCIgmg5QgTgegHgIQgIgIgIgDQgIgDgSAAIgLAAIAABtIg1AAIAAkDIBvAAQAoAAATAHQATAHALASQAMASAAAXQAAAegRATQgSARgiAFQAQAKAMAMQALAMATAeIAgAzgAg/gTIAmAAQAlAAAJgDQAJgDAGgIQAFgIAAgMQAAgNgGgIQgIgIgMgCQgHgBgeAAIgpAAg");
	this.shape_19.setTransform(-203.9,149.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A0A0A0").s().p("Egh2ABzIAAjlMBDsAAAIAADlg");
	this.shape_20.setTransform(-73.8,117,0.481,0.481);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D4D4D4").s().p("Ah7DHQgKAAgHg6QgHg7AAhSQAAhRAHg6QAHg7AKAAID3AAQAJAAAIA7QAHA6AABRQAABSgHA7QgIA6gJAAg");
	this.shape_21.setTransform(-1.7,105,0.481,0.481);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D7D7D").s().p("AiHCIQg5g4AAhQQAAhOA5g5QA4g5BPAAQBQAAA4A5QA5A5AABOQAABQg5A4Qg5A5hPAAQhPAAg4g5g");
	this.shape_22.setTransform(-74,47.1,0.481,0.481);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4D4D4").s().p("A9MThQgvAAgqgWQgogWgYglMA+hglwQAqAyABBEMAAAAiWQgBBMg0A1Qg1A0hLAAg");
	this.shape_23.setTransform(-73.2,47.8,0.481,0.481);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3F1F2").s().p("A8+UDQhMAAg2g2Qg2g2AAhMMAAAgiVQAAhMA2g2QA2g2BMAAMA59AAAQBNAAA1A2QA2A2AABMMAAAAiVQAABMg2A2Qg1A2hNAAg");
	this.shape_24.setTransform(-74,46.2,0.481,0.481);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D4D4D4").s().p("Ah7DHQgKAAgHg6QgHg6AAhTQAAhRAHg6QAHg7AKAAID3AAQAKAAAHA7QAHA7AABQQAABSgHA7QgHA6gKAAg");
	this.shape_25.setTransform(-144.9,105,0.481,0.481);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#525154").s().p("Ah0BpQg8gagIgxQgIgvAwgsQAxgrBNgNQBKgNA8AaQA8AaAIAxQAJAvgxArQgxAshMANQgYAEgXAAQgwAAgogRg");
	this.shape_26.setTransform(51.1,-28.2,0.481,0.481);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AhIFYQgnAAgbgaQgbgZAAgkIAAoBQAAgkAbgZQAbgaAnAAICRAAQAmAAAcAaQAbAZAAAkIAAIBQAAAkgbAZQgcAagmAAg");
	this.shape_27.setTransform(106,-79.4,0.481,0.481);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3F1F2").s().p("Ax/MPQAAq/DhmLQEJnTItAAQJaAAFEFEQFKFKAAJxIhcAAQAApOkvkxQkpkqo0AAQoPgBkMG6QjsGDgBKLg");
	this.shape_28.setTransform(49.6,-112.9,0.481,0.481);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#525154").s().p("AkgAdIIuiGIATBNIovCGg");
	this.shape_29.setTransform(67.4,-31.7,0.481,0.481);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#525154").s().p("AlWFIIJnrEIBGA1IpnLEg");
	this.shape_30.setTransform(94.5,-51.4,0.481,0.481);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373A3C").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_31.setTransform(37.1,92.6,0.481,0.481);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C3C2C0").s().p("AC8PCIAAAAIkgqjIBtitIlFAAIhRv3IAAgBIAGgDQARgJANgDQBlgXB9gNQBRgIAggBIABAAIBJFYIAAABIFaYrIgwAAIAAAAg");
	this.shape_32.setTransform(20.2,46.3,0.481,0.481);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("AyOOoIAAgBICjqGQCYpeKjlxQDRh0DuhOQB3gnBNgQIABADIEMHuIGuVdIABABg");
	this.shape_33.setTransform(-21.2,47.6,0.481,0.481);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDFEFF").s().p("AmDmcIFQgbIG3EqIo5JGg");
	this.shape_34.setTransform(31.2,20.4,0.481,0.481);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C3C2C0").s().p("AlmOyIAAAAIgkAAIAAAAIgDAAIAAAAIFo4uIAAgBIBGk0IABAAICbAnQCYAoA5AXIAAABIhPPhIlFAAIBsCtIkVJuIAAAAg");
	this.shape_35.setTransform(79.9,47.1,0.481,0.481);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDFEFF").s().p("AmGiGIGuk4IFfBiIjUMbg");
	this.shape_36.setTransform(68.7,20.1,0.481,0.481);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373A3C").s().p("Aw3OqIAAgBIGh1NIgFoFIBZAVQBqAbBvAmQGoCSEyDkQG2FIBxG+ICgKAIAAABg");
	this.shape_37.setTransform(116.5,47.5,0.481,0.481);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2F3132").s().p("AyMOlIAAgBIChqAQCTpLKBlvQDPh2DthTQCDgtBmgXIAFgBIEOHwIGsVYIAAABg");
	this.shape_38.setTransform(-21.2,47.7,0.481,0.481);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ED8A60").s().p("AjbLGIAAAAIBn2KIAAgBIDpAAIAAACIBnWJIAAAAg");
	this.shape_39.setTransform(50.3,58.4,0.481,0.481);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ED8A60").s().p("AhFBzQgQAAgNgFQgOgFgDgHIhQiZQgMgXAOgSQAPgSAhAAIEjAAQAhAAAPASQAOASgMAXIhQCZQgDAHgOAFQgOAFgQAAg");
	this.shape_40.setTransform(50.3,19.7,0.481,0.481);

	this.instance = new lib.Path_14();
	this.instance.setTransform(73.1,22.4,0.481,0.481,0,0,0,43.6,49.7);
	this.instance.alpha = 0.109;

	this.instance_1 = new lib.Path_15();
	this.instance_1.setTransform(35.2,22.4,0.481,0.481,0,0,0,43.7,49.7);
	this.instance_1.alpha = 0.109;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDFEFF").s().p("AkJMkIkKwqIAAAAIgGgaIAAAAIh4njIBdgFIAAAAIF2gTIABAAICcgIIABABIAggBIJIAaIAAgBIBKAEIh3HkIgBABIkRRFg");
	this.shape_41.setTransform(49.9,53.9,0.481,0.481);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D3AF96").s().p("AmfhfQABgdgCgcIgDgWQDnBuDzgtQB7gWBMgsQgVCZBbByQAuA5AyAcg");
	this.shape_42.setTransform(54,-7.2,0.481,0.481);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQAMAAAKAJQAJAKAAALQAAANgJAJQgKAJgMAAQgLAAgKgJg");
	this.shape_43.setTransform(76.5,-85.8,0.481,0.481);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#554F4E").s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");
	this.shape_44.setTransform(75.1,-84.6,0.481,0.481);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F6EFE5").s().p("AinBBQgbgUgYgZIgSgUIASgTQAYgZAbgVQBWhCBRABQBSgBBWBCQArAhAaAgQgaAggrAhQhWBChSABQhRgBhWhCg");
	this.shape_45.setTransform(75.1,-84.6,0.481,0.481);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3F464A").s().p("AyvGsQgIiYAJieIAKh+IgyCZQgcoEDjkEQBHhRBYgtQAsgXAegHQBTj6FIhRQCkgpCTAJQhJAegYAnQgHALgBAMQgBAFABAEQHbgnEfCKQCPBFAwBMQDLBaB7CxQA+BYAVBGQBICkgDEeQgBCQgQBvQgHhPgRhUIgPhDQgDFshWFSQgrCogrBgQgCg6AGiNQAGieAAhUQgBk+hPjqQhKjcjTgMQhCgEhIASIg6ATQh0BIh7AuIhkAcQkgBEkzh9QhggnhWg2IhDgvQlAEVgIItQgDCtAdC1QAOBbAPA3QiyjugZnmg");
	this.shape_46.setTransform(49.7,-115.5,0.481,0.481);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BA9674").s().p("AAAAcQgVACgSgSQgQADgRAAQghgCgCgPIALgTQATgPAlAWIALAKQAPAIAOAAQAPAAAOgIQAIgFAEgFQAkgWATAPQAKAHACAMQgCAPghACIghgDQgRAQgTAAIgEAAg");
	this.shape_47.setTransform(49.1,-58.7,0.481,0.481);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F598A0").s().p("AiOBIQhXhGgdhJIIFAAQgTAugfAkQgeAlgkAYg");
	this.shape_48.setTransform(49.1,-32.3,0.481,0.481);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E44D65").s().p("AivBJQhdhNgiiAQgCgEAEgEQACgFAGAAIJJAAQAFAAADAEQAEAFgCAEQghCBhdBNQhVBHhcABQhagBhVhIgAifA8QBOBABRABQBTgBBOhAQBVhEAih0IovAAQAjBzBVBFg");
	this.shape_49.setTransform(49.1,-32.5,0.481,0.481);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AisAuQhOhOguhkIJQAAQgzB3gyA0QhPBWh7AIIgHAAQhIAAhWhXg");
	this.shape_50.setTransform(49.2,-32.3,0.481,0.481);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVAWQgJgKAAgMQAAgMAJgJQAKgJALAAQANAAAJAJQAJAKAAALQAAAMgJAKQgJAJgNAAQgLAAgKgJg");
	this.shape_51.setTransform(24.1,-85.7,0.481,0.481);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#554F4E").s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagaAkAAQAlAAAaAaQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");
	this.shape_52.setTransform(22.8,-84.4,0.481,0.481);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F6EFE5").s().p("AinBCQgagVgZgZIgSgUIASgTQAZgZAagVQBWhCBRAAQBRAABXBCQArAhAaAgQgaAggrAiQhXBBhRABQhRgBhWhBg");
	this.shape_53.setTransform(22.8,-84.4,0.481,0.481);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#65594D").s().p("AEoA/IjqgxQg+gNg+ANIjqAxQgUAEgOgRQgIgLAAgQQgDgXBZgbQAtgNAtgIQA1gKAmgCQBSgHBiAMIB4AVQB2AbgIAeQAAAQgJALQgKAOgQAAIgIgBg");
	this.shape_54.setTransform(76.5,-99.3,0.481,0.481);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#65594D").s().p("AEoA/IjqgxQg+gNg+ANIjqAxQgUAEgOgRQgIgLAAgQQgDgXBZgbQAtgNAtgIQA0gKAngCQBSgHBiAMIB4AVQB2AbgIAeQAAAPgJAMQgKAOgQAAIgIgBg");
	this.shape_55.setTransform(21.9,-99.3,0.481,0.481);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DEBC9F").s().p("AB2VcQi8huiSjKQiSjLhQkIQhUkRAAktQAAkzBPkUQBNkNCNjNQCPjPC9hyQDFh2DigGMAAAAuXIgHAAQjRAAjAhwg");
	this.shape_56.setTransform(24.5,-82.9,0.481,0.481);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EFD5B9").s().p("AmWVXQi7hxiRjNQiQjNhPkLQhTkUAAktQAAktBTkTQBPkLCQjNQCRjNC7hxQDDh1DTAAQDUAADCB1QC8BxCQDNQCRDNBPELQBTETAAEtQAAEthTEUQhPELiRDNQiQDNi8BxQjCB1jUAAQjTAAjDh1g");
	this.shape_57.setTransform(49.4,-82.9,0.481,0.481);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EED4B9").s().p("AgQENQg3gCgbhTQgYhMAEh2QAJkGBkAEQA4ACAmBRQAnBQgEBtQgEBygmBMQgmBLg2AAIgCAAg");
	this.shape_58.setTransform(102.5,-85.3,0.481,0.481);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DCBA9F").s().p("AhNDCQgmhMgEhyQgDhtAmhQQAmhRA4gCQBkgEAJEGQAEB2gYBLQgbBUg3ACIgCAAQg1AAgnhLg");
	this.shape_59.setTransform(-5.3,-83.9,0.481,0.481);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DCBA9F").s().p("AgpEyIu1APIFijjQDMheAvipQAOg1gDg3IgFgsIKkAAIgGAsQgDA2AOA2QAvCpDNBeIG1Dkg");
	this.shape_60.setTransform(52,-0.4,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_1},{t:this.instance},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-170.9,459,341.9);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BSQgXgPgHgbIAygIQAEAPAJAHQAKAIAQAAQATAAAKgHQAHgFAAgJQAAgFgEgEQgEgEgNgDQg6gNgQgLQgXgNAAgbQAAgZAUgRQATgQApAAQAlAAASAMQATANAHAZIgvAIQgDgLgIgGQgJgGgOAAQgTAAgJAGQgFAEAAAGQAAAFAFAEQAGAFAmAJQAoAJAQAOQAQALAAAYQAAAagWASQgWATgqAAQglAAgWgQg");
	this.shape.setTransform(202.7,134.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBWQgYgLgMgXQgMgXAAgeQAAgZAMgYQAMgXAXgMQAWgMAbAAQAqAAAbAbQAcAcAAAqQAAAqgcAcQgcAcgpAAQgYAAgYgMgAgggqQgMAPAAAbQAAAbAMAPQAOAPASAAQATAAANgPQANgPABgbQgBgbgNgPQgNgPgTAAQgSAAgOAPg");
	this.shape_1.setTransform(182,134.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHB9QgLgFgFgHQgFgHgCgNQgBgIAAgbIAAhQIgXAAIAAgoIAXAAIAAgmIAwgdIAABDIAiAAIAAAoIgiAAIAABKQAAAXABAEQABAEADACQAEADAFAAQAHAAANgFIAEAnQgRAHgWABQgOgBgJgEg");
	this.shape_2.setTransform(164.8,131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAgtAZgaQAZgaAoAAQAiAAAVAOQAUAPAJAfIgxAJQgDgPgIgIQgJgHgOAAQgRAAgLANQgLANAAAeQAAAgALANQALAOARAAQAPAAAJgIQAJgIAEgUIAxAJQgIAigWARQgVARglAAQgnAAgZgag");
	this.shape_3.setTransform(148.8,134.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAgtAZgbQAYgaAmAAQAoAAAYAbQAZAcgBA4Ih7AAQAAAWAMAMQALANAPAAQAMAAAIgHQAIgGAEgOIAyAIQgJAbgVAPQgVAOgfAAQgvAAgYgggAgYgvQgLAMAAAUIBJAAQAAgWgLgLQgLgLgPAAQgOAAgLAMg");
	this.shape_4.setTransform(128.1,134.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPCBIgFgnQAMADAKAAQARAAAIgLQAJgKAEgQIhIi7IA1AAIAsCEIAsiEIA0AAIhDC0IgMAhQgHAQgGAJQgFAJgGAFQgIAFgLADQgMADgOAAQgOAAgOgDg");
	this.shape_5.setTransform(107.8,137.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBWQgZgLgMgXQgMgXAAgeQAAgZAMgYQANgXAWgMQAWgMAbAAQArAAAaAbQAcAcAAAqQAAAqgcAcQgcAcgpAAQgYAAgXgMgAgfgqQgOAPAAAbQAAAbAOAPQANAPASAAQATAAANgPQAOgPAAgbQAAgbgOgPQgNgPgTAAQgSAAgNAPg");
	this.shape_6.setTransform(86.8,134.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BgIAAi7IAvAAIAAAbQAMgTAHgGQAKgGAMAAQARAAAQAJIgQAsQgMgIgLgBQgLAAgHAHQgFAFgEAPQgFAPAAAuIAAA7g");
	this.shape_7.setTransform(70,133.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhjCCIAAkDIBVAAQAuAAAPAEQAWAGAPAUQAPATAAAfQAAAYgJARQgIAOgNAKQgOAJgOADQgSAEgiAAIgjAAIAABigAgugKIAdAAQAdAAALgFQAKgEAGgIQAGgKAAgLQAAgOgJgJQgHgKgOgCQgJgCgaAAIgaAAg");
	this.shape_8.setTransform(49.8,130.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAgtAZgbQAYgaAmAAQAoAAAYAbQAZAcgBA4Ih7AAQAAAWAMAMQALANAPAAQAMAAAIgHQAIgGAEgOIAyAIQgJAbgVAPQgVAOgfAAQgvAAgYgggAgYgvQgLAMAAAUIBJAAQAAgWgLgLQgLgLgPAAQgOAAgLAMg");
	this.shape_9.setTransform(16.7,134.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBqQgXgaAAgvQAAguAXgZQAWgZAjAAQAeAAAXAaIAAheIAyAAIAAEDIgvAAIAAgcQgLAQgQAIQgQAIgOAAQggAAgYgagAgcgLQgMAMAAAcQAAAeAJAOQAMAUATAAQASAAAMgPQAMgPAAgdQAAghgMgMQgMgOgSAAQgQAAgMAOg");
	this.shape_10.setTransform(-4.8,130.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkBgIAAhgQAAgdgEgJQgDgJgHgFQgIgFgKAAQgKAAgKAHQgLAHgEAMQgEAMABAdIAABWIgzAAIAAi7IAuAAIAAAcQAZggAkAAQAQAAAOAGQAOAGAHAJQAHAJADAMQACAMAAAVIAAB0g");
	this.shape_11.setTransform(-36.6,133.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwB6QgYgLgMgXQgMgXAAggQAAgZAMgWQANgXAWgMQAWgMAbAAQAqAAAbAbQAcAcAAApQAAArgcAcQgcAcgpAAQgYAAgYgMgAgfgGQgOANAAAcQAAAcAOAPQANAPASAAQATAAANgPQAOgPAAgcQAAgcgOgNQgNgPgTAAQgSAAgNAPgAgXhQIAXg1IA3AAIgxA1g");
	this.shape_12.setTransform(-58.9,130.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXCCIAAi7IAvAAIAAC7gAgXhSIAAgvIAvAAIAAAvg");
	this.shape_13.setTransform(-75.1,130.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAgtAZgaQAZgaAoAAQAiAAAVAOQAUAPAJAfIgxAJQgDgPgIgIQgJgHgOAAQgRAAgLANQgLANAAAeQAAAgALANQALAOARAAQAPAAAJgIQAJgIAEgUIAxAJQgIAigWARQgVARglAAQgnAAgZgag");
	this.shape_14.setTransform(-90,134.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhGBSQgRgQAAgYQAAgQAHgMQAIgNAOgFQAOgGAagFQAhgHANgGIAAgFQAAgOgHgGQgHgGgSAAQgNAAgIAFQgHAFgFANIgtgIQAIgbASgNQATgNAlAAQAfAAARAIQAQAHAHANQAGAMAAAgIAAA5QAAAZACALQADAMAGAOIgxAAIgFgPIgCgGQgNANgOAGQgNAGgQAAQgeAAgQgQgAAAALQgVAEgGAEQgKAHAAALQAAAKAIAIQAHAIAMAAQAMAAAMgJQAJgHADgKQACgGAAgSIAAgKIgcAIg");
	this.shape_15.setTransform(-110.5,134.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRB8QgQgIgLgQIAAAcIgvAAIAAkDIAyAAIAABeQAXgaAeAAQAjAAAWAZQAXAZAAAsQAAAxgXAaQgXAaghAAQgOAAgQgIgAgdgLQgMAMAAAcQAAAeAJAOQANAUAUAAQAQAAAMgPQAMgOAAgeQAAghgMgMQgMgOgRAAQgRAAgMAOg");
	this.shape_16.setTransform(-131.3,130.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwBWQgXgLgNgXQgMgXAAgeQAAgZAMgYQAMgXAXgMQAWgMAbAAQArAAAbAbQAbAcAAAqQAAAqgbAcQgcAcgqAAQgYAAgYgMgAgggqQgNAPABAbQgBAbANAPQAOAPASAAQATAAAOgPQANgPgBgbQABgbgNgPQgOgPgTAAQgSAAgOAPg");
	this.shape_17.setTransform(-154,134.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BgIAAi7IAvAAIAAAbQAMgTAHgGQAKgGAMAAQARAAAQAJIgQAsQgMgIgLgBQgLAAgHAHQgFAFgEAPQgFAPAAAuIAAA7g");
	this.shape_18.setTransform(-170.9,133.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhbCEIAAkDIAvAAIAAAcQAJgOAQgKQAPgIARAAQAhAAAXAaQAXAZAAAvQAAAtgXAaQgXAbghAAQgOgBgNgGQgMgGgPgPIAABfgAgdhOQgMAPAAAcQAAAfANAOQAMAPAQAAQASAAALgPQAMgLAAggQAAgegMgPQgMgOgRAAQgRAAgMAOg");
	this.shape_19.setTransform(-190,137.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABJCCIgXg7IhmAAIgVA7Ig4AAIBlkDIA2AAIBoEDgAgkAbIBFAAIghhfg");
	this.shape_20.setTransform(-214.9,130.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#292929").p("AAAlbQiPAAhmBmQhmBmAACPQAACQBmBmQBmBmCPAAQCQAABmhmQBmhmAAiQQAAiPhmhmQhmhmiQAAgADeh1IjdFLIgBABQAAAEgFAFIgDACQgDADgDAAQgCACgEABIgFACIgJABIgIgBQgKgCgGgFIgFgEIgHgHIiVjDQgLgOADgQQACgSAOgLQAOgLASADQASACALAOIBxCSIC6kZQAKgPASgEQARgEAPAKQAQAKADASQAEASgKAPg");
	this.shape_21.setTransform(92.9,-123.6,0.479,0.479);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3FB65D").s().p("Aj1D2QhmhmAAiQQAAiPBmhmQBmhmCPAAQCQAABmBmQBmBmAACPQAACQhmBmQhmBmiQAAQiPAAhmhmgAjTgmQgOALgCASQgDAQALAOICVDDIAHAHIAFAEQAGAFAKACIAIABIAJgBIAFgCQAEgBACgCQADAAADgDIADgCQAFgFAAgEIABgBIDdlLQAKgPgEgSQgDgSgQgKQgPgKgRAEQgSAEgKAPIi6EZIhxiSQgLgOgSgCIgGgBQgOAAgMAJg");
	this.shape_22.setTransform(92.9,-123.6,0.479,0.479);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373A3C").s().p("AuKhVIbZkVIBFG4I8REeQgkjiAXjfg");
	this.shape_23.setTransform(-49.1,-64.5,0.479,0.479);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#626A7A").s().p("AumgsIcRkeIA8F+I7iEXQhMi4gfi/g");
	this.shape_24.setTransform(-47.1,-44.9,0.479,0.479);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373A3C").s().p("AtsCKIbZkUIAAACI7ZETg");
	this.shape_25.setTransform(-50.6,-75.3,0.479,0.479);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3F444A").s().p("AhtHSQgegWgGgkIh2ruQgGgkAWgeQAVgeAlgGIDpglQAkgGAeAWQAeAWAGAkIB2LuQAGAkgWAeQgVAeglAGIjpAlIgPABQgcAAgXgRg");
	this.shape_26.setTransform(3.5,-63.6,0.479,0.479);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFEEDE").s().p("Ag3BdQgIgFgBgJIgZiJQgCgJAFgHQAGgIAIgBIAZgFQAdgIAXAAQAMAAAGACQAnALASAmQAJASACARQACAvgcAbIgeARIhKAQIgEAAQgHAAgFgEg");
	this.shape_27.setTransform(75.3,-84.9,0.479,0.479);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7CEA4").s().p("AoxFiQgUgMgWADIg9AKIhYonQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAIBogQQANgDAKgHQAtgcB1gsIAFgCQBGghBzgcQA5gOArgHIKzhSQBdgPAzALQAOADALAJQAqAiAOA3QAJAjgDAhIgCAMQgQA1gwAcIguASIj+AhQhQAJhfAlQhBAagoAYQh/BMgUBDQgGAUAFATIADAQIlJFPg");
	this.shape_28.setTransform(46,-68.8,0.479,0.479);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ED8A60").s().p("AqwFUQgcgBglgPQhKgcgtg9INoo/INpI/QgtA9hLAcIhBAQg");
	this.shape_29.setTransform(94.7,-76.1,0.479,0.479);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D7764C").s().p("AkdJYQhLgcgug9Qg0hFgIhrIAAu3IOkIpIqvKoQgcgCgkgPg");
	this.shape_30.setTransform(72.3,-89.3,0.479,0.479);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D7764C").s().p("AnSg/IOlopIAAO3QgHBqg1BGQguA9hLAcIhBARg");
	this.shape_31.setTransform(117,-89.3,0.479,0.479);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3E3E3").s().p("AiKC7QgfgCgJgZIgDgYIAAlDIFrF2IjWABQhRAAgZgBg");
	this.shape_32.setTransform(122.2,-142,0.479,0.479);

	this.instance = new lib.Path_10();
	this.instance.setTransform(123.3,-141.3,0.479,0.479,0,0,0,21.3,22.8);
	this.instance.alpha = 0.199;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AJyOwIzhAAIAAAAQguAAgfgbQghgaAAgnIAA6oQAAgmAhgaQAfgbAuAAIThAAQAsAAAhAbQAfAaAAAmIgBayQgDAjgfAXQggAYgpAAg");
	this.shape_33.setTransform(95.7,-105.8,0.479,0.479);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ED8A60").s().p("AqhOwQhsAAhLhWQhMhWgBh7IAAu+QAAhYFjjmQDbiOEjidQAdgQAhgBQAdgBAcAPQEqCgDcCMQFsDnABBZIAAO+QgBB7hMBWQhMBWhrAAg");
	this.shape_34.setTransform(94.7,-104.8,0.479,0.479);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7CEA4").s().p("Ak1H9QgegLgbgPIkUi7IFJlMQAFAXAMAVQAhA8A/AdQA+AeBEgNIEAgvQA+gGAcgZQAOgNABgLIAvlMIExjOIh/KVQgPBPg9AxQgYATgdARIgYAMInyDJQgmAPgqAAQgtAAgxgSg");
	this.shape_35.setTransform(59.2,-60.4,0.479,0.479);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C3997D").s().p("ABFjRQBqhbB2hUIBfhEIBpLcIvZCtQDQlnFhkvg");
	this.shape_36.setTransform(53.9,-68.7,0.479,0.479);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C6C5C5").s().p("A+wC6MA9FgGvIAdBAMg9CAGrg");
	this.shape_37.setTransform(-77.5,23.4,0.479,0.479);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#717171").s().p("Ag0ATIgwgTQgVgJAWgCIBugMQAUgDAVAJIAxASQAVAIgXADIhrAMIgMABQgRAAgPgGg");
	this.shape_38.setTransform(-0.7,19.6,0.479,0.479);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#717171").s().p("Ag7AVIgzgVQgVgJAagCIB8gPQAXgDASAJIAzAVQAVAIgZADIh8APIgLABQgRAAgOgHg");
	this.shape_39.setTransform(-49.3,25.2,0.479,0.479);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#717171").s().p("Ag0AeQgIgBg9gdQgLgFACgDQADgDAPgCIBQgJQBMgIAIABQAJABA8AcQAMAFgCADQgDADgPACIhSAJQhEAIgNAAIgCAAg");
	this.shape_40.setTransform(-104.3,31.5,0.479,0.479);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#717171").s().p("AgvAdQgJgBg7gcQgMgEABgDQABgEAQgBIBRgJQBEgIAIABQAMACA5AaQAXAKgfADIhAAHIgOACQg/AHgMAAIgDAAg");
	this.shape_41.setTransform(-81.4,28.9,0.479,0.479);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#717171").s().p("AghAaQgMgCg6gYQgMgEABgDQACgDANgCIBEgHQA7gHAIABQAJACA6AXQAZAKgdACIhDAIIhBAGIAAAAg");
	this.shape_42.setTransform(-19.5,21.8,0.479,0.479);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#717171").s().p("Ag+AgQgJgBg8gfQgUgJAegEICZgRQAjgDASAJQAKAFAQALQAXAIAEACQAJAIgcADIhcALQhJAIgOAAIgCAAg");
	this.shape_43.setTransform(-140.9,35.7,0.479,0.479);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#717171").s().p("AhRAYIgvgYQgTgJAdgEIBagKQBPgIAHABQALABA6AdIACAAQATAKgbADIhNAJIhIAJIgRABQgVAAgPgIg");
	this.shape_44.setTransform(-128.5,34.3,0.479,0.479);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#717171").s().p("AglAaQgIgBg5gZQgOgDABgEQAAgDAQgCIBFgIQA9gGAGABQALABA6AYQAMAFgCADQgBADgOABIhFAIQg1AGgNAAIgDAAg");
	this.shape_45.setTransform(-29.1,22.9,0.479,0.479);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#717171").s().p("AgcAYQgIgBg9gXQgVgJAXgCIBlgMQAYgCAUAIIAwASQAVAHgWADIg0AGIgKABQgxAGgLAAIgDAAg");
	this.shape_46.setTransform(17.2,17.5,0.479,0.479);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#717171").s().p("AgsAdQgLgCg7gbIgEAAQgQgJAYgDICFgPQAYgDASAJIAzAVQAVAKgcACIhGAJIhSAIIgBAAg");
	this.shape_47.setTransform(-70.5,27.6,0.479,0.479);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#717171").s().p("AgmAbQgIgBg8gaIgCAAQgVgIAYgDIB7gOQAYgDARAJIAzAUQAUAJgZACIhAAIQhFAHgJAAIgBAAg");
	this.shape_48.setTransform(-39.1,24,0.479,0.479);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#717171").s().p("AgrAcQgJgBg9gbQgKgEABgDQABgDANgBIBNgJQBDgIAHACQALABA7AZIACABQAJAEgBADQgBADgMABIhPAKQg6AGgNAAIgDAAg");
	this.shape_49.setTransform(-59.7,26.4,0.479,0.479);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#717171").s().p("Ag3AeQgKgBg8gdQgLgFADgDQADgDAQgCIBYgKQBJgIAIABQAMACA4AbQAMAFgBAEQgCADgSACIhUAKQhCAIgPAAIgEgBg");
	this.shape_50.setTransform(-116.2,32.9,0.479,0.479);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#717171").s().p("AgeAYQgIgBg8gXQgWgIAXgDIBBgHQA4gGAHABQAIABA8AWQAMAFgBADQAAACgMACIg1AGIgLABQgxAFgMAAIgDAAg");
	this.shape_51.setTransform(8.3,18.6,0.479,0.479);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#717171").s().p("Ag0ATIgzgUQgKgEABgDQAAgCAMgCIBEgHQA2gHATADQASADAuAVQAJAEAAACQgBADgKABIhzANIgLABQgPAAgOgGg");
	this.shape_52.setTransform(-9.9,20.7,0.479,0.479);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#717171").s().p("AhAAhQgKgCg5geQgMgFADgDQADgFAUgCIBbgKQBSgJAJABQAKACA6AeQAWAKghAEIhNAJIgRACQhLAIgOAAIgDAAg");
	this.shape_53.setTransform(-153.9,37.2,0.479,0.479);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#717171").s().p("AhIAWIgwgWQgVgJAdgDICLgQQAbgDATAKIAwAVQAVAJgbADIiJARIgQABQgTAAgPgIg");
	this.shape_54.setTransform(-92.8,30.2,0.479,0.479);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#717171").s().p("Ag1AkIhggsQgMgGACgEQABgDAPgCICSgUQAagEAVAKIBlAuQAVAKgaADIiSAVIgOACQgVAAgSgJg");
	this.shape_55.setTransform(-48.9,44,0.479,0.479);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#717171").s().p("AhFAoIhegwQgNgHAEgEQADgEASgCICogXQAcgEAUALIBjAyQAWALgcAEIiuAYIgQACQgVAAgQgKg");
	this.shape_56.setTransform(-108.2,52.1,0.479,0.479);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#717171").s().p("Ag4AlIhggtQgYgMAhgEICTgUQAbgEAWAKIBkAvQAWAKgcAEIiWAWIgOABQgWAAgRgJg");
	this.shape_57.setTransform(-60.9,45.6,0.479,0.479);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#717171").s().p("Ag4AnIhkgxQgVgKAegEICagVQAdgEAVALIBiAuQAYALgeAFIiaAWIgPABQgUAAgQgIg");
	this.shape_58.setTransform(-73.3,47.3,0.479,0.479);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#717171").s().p("AhIApIhegxQgLgHACgEQACgEASgCICsgYQAhgEAXAMIBeAxQAYAMgkAGIiqAYIgRABQgXAAgRgKg");
	this.shape_59.setTransform(-122.5,54.1,0.479,0.479);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#717171").s().p("AgwAkIhigsQgYgLAegDICNgUQAZgDAWAKIBjArQAXALgYAEIiSAUIgLABQgUAAgRgIg");
	this.shape_60.setTransform(-37.2,42.3,0.479,0.479);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#717171").s().p("AgtAjIhigrQgMgGABgDQACgDAOgCICIgTQAbgEAXALQAqAUA0AVQAbAMgcADIiMAUIgKABQgTAAgRgIg");
	this.shape_61.setTransform(-25.8,40.8,0.479,0.479);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#717171").s().p("AgoAgIhggoQgXgKAZgDICAgSQAVgDAYAKIBgAoQANAFAAAEQgBADgOACIh7ARIgMABQgUAAgSgIg");
	this.shape_62.setTransform(6.5,36.3,0.479,0.479);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#717171").s().p("AgiAfIhjgnQgVgJAXgDIB8gRQATgDAUAJIBkAnQAWAKgVADIh6ARIgLABQgQAAgSgIg");
	this.shape_63.setTransform(38.2,32,0.479,0.479);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#717171").s().p("AgoAfIhegnQgWgJAXgDICBgRQATgDAXAJIBgAnQAYAKgZADIh5ARIgNABQgUAAgTgIg");
	this.shape_64.setTransform(4.1,31.9,0.479,0.479);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#717171").s().p("AgoAgIhjgqQgJgEABgCQAAgDALgBICIgRQAVgDAUAIIBhApQAWAKgbADIiCAQIgLABQgRAAgPgHg");
	this.shape_65.setTransform(-22.3,30.4,0.479,0.479);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#717171").s().p("AhJAoIhcgwQgWgNAhgEICsgWQAhgEAWALIBcAwQAYANgkAEIimAXQgLABgJAAQgYAAgQgJg");
	this.shape_66.setTransform(-130.6,49.6,0.479,0.479);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#717171").s().p("AgrAgIhegpQgLgFABgCQABgDANgCICHgQQAWgDAUAJIBeAoQALAEgBADQgBAEgMABIiHARIgLAAQgRAAgPgGg");
	this.shape_67.setTransform(-36.3,27.5,0.479,0.479);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#717171").s().p("AgyAhIhcgqQgLgFACgDQACgDAPgCICJgQQAbgDAVAKIBcAnQAVALgbADIiJARIgNABQgUAAgRgHg");
	this.shape_68.setTransform(-58.5,30.1,0.479,0.479);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#717171").s().p("Ag4AkIhfgtQgXgLAfgEIBMgJIBGgKQAggEAZAMIBbAqQAZANgfADIiUAVIgQABQgVAAgQgJg");
	this.shape_69.setTransform(-74.3,42.2,0.479,0.479);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#717171").s().p("Ag4AnIhhgvQgagMAggEICVgWQAdgEAYAMIBkAvQAXAKgbAFIiYAXIgQABQgVAAgSgJg");
	this.shape_70.setTransform(-56.6,50.5,0.479,0.479);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#717171").s().p("AglAgIhggnQgNgGABgDQABgDAOgCIA7gIIBAgJQAWgDAWAKIBgAnQAZAKgXADIh+ASIgJAAQgTAAgSgHg");
	this.shape_71.setTransform(16.7,34.9,0.479,0.479);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#717171").s().p("Ag1AiIhcgpQgZgMAegDICMgTQAcgEAWALIBgArQAYAKgdAEIiLATIgPABQgWAAgSgJg");
	this.shape_72.setTransform(-50.3,39,0.479,0.479);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#717171").s().p("AhAAiIhWgqQgMgGABgEQACgDARgCICZgSQAfgEAXALIBXAqQAZAMgkAEIiTASIgSABQgXAAgRgJg");
	this.shape_73.setTransform(-106.6,35.9,0.479,0.479);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#717171").s().p("AhJAmIhZgvQgWgLAkgEICogUQAhgEAXAMQAcAQA5AcQAYAMgiAEIioAVIgRABQgYAAgPgIg");
	this.shape_74.setTransform(-147,40.7,0.479,0.479);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#717171").s().p("AgcAgIhngoQgVgJAVgDIB3gRQAVgDAXAKIBiAmQAZAKgZADIh0ARIgMABQgOAAgQgHg");
	this.shape_75.setTransform(46.3,35.7,0.479,0.479);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#717171").s().p("AgjAeIhfgmQgKgFgBgCQAAgEALgBIB+gPQATgDAVAJIBfAlQAWAJgYADIh7AQIgIABQgRAAgQgHg");
	this.shape_76.setTransform(8.4,26.6,0.479,0.479);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#717171").s().p("AgkAfIhggnQgXgKAagDIB5gPQAWgDAWAJIBgAmQAMAFgBADQAAADgMACIh5AQIgLABQgSAAgRgHg");
	this.shape_77.setTransform(14.1,30.5,0.479,0.479);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#717171").s().p("Ag0AhIhbgpQgYgLAdgDICOgSQAagDAUAJIBhArQATAJgYADIiOATIgPABQgUAAgRgIg");
	this.shape_78.setTransform(-55.6,34.6,0.479,0.479);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#717171").s().p("AgwAiIhggrQgWgKAbgDICLgSQAbgEAWALIBeApQAaALgdAEIiLASIgNABQgTAAgRgIg");
	this.shape_79.setTransform(-38.9,37.5,0.479,0.479);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#717171").s().p("AglAcIhagkQgXgJAagDIB3gOQAUgDAWAKIBaAjQALAFABADQABADgMABIh5APIgKAAQgRAAgRgHg");
	this.shape_80.setTransform(4.7,22.6,0.479,0.479);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#717171").s().p("AgpAdIhaglQgXgKAcgDIA8gHQAqgEASgDQAbgEAYAMIBVAiQAaALgbADIh7APIgKABQgUAAgRgIg");
	this.shape_81.setTransform(-15.3,25,0.479,0.479);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#717171").s().p("AhIArIhggzQgYgMAhgGICwgYQAegFAUALIBoA2QAUALgdAEIhZANIABAAIhVANQgLACgKAAQgWAAgSgKg");
	this.shape_82.setTransform(-113.8,58.8,0.479,0.479);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#717171").s().p("AgrAeIhaglQgNgGACgDQABgEAOgBIB8gQQAZgDAWAKIBcAmQAYAKgaADIh/AQIgKABQgUAAgSgIg");
	this.shape_83.setTransform(-11.8,29.1,0.479,0.479);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#717171").s().p("AghAhIhngqQgVgJAVgDIB/gSQAUgDAYAJIBmAqQALAEAAAEQAAADgLABIh/ATIgLABQgQAAgQgIg");
	this.shape_84.setTransform(25.9,38.6,0.479,0.479);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#717171").s().p("AglAfIhfgnQgXgKAZgDIB+gPQAVgDAVAJIBgAnQAVAJgWACIiAARIgKABQgQAAgQgHg");
	this.shape_85.setTransform(-1.6,27.9,0.479,0.479);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#717171").s().p("Ag6AhIhZgqQgWgKAegDICTgSQAcgDAVAKIBZApQAaALggADIiRASIgPACQgVAAgRgJg");
	this.shape_86.setTransform(-81.9,33,0.479,0.479);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#717171").s().p("AgrAiIhigrQgWgKAZgDICHgSQAZgEAZALIBdAoQANAGAAADQgBAEgOACIiFATIgMABQgTAAgRgIg");
	this.shape_87.setTransform(-14.7,39.3,0.479,0.479);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#717171").s().p("AgtAhIhggpQgXgLAcgDICIgRQAXgEAWAKIBiAqQAVAJgZAEIiJASIgMABQgTAAgQgIg");
	this.shape_88.setTransform(-27.7,36,0.479,0.479);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#717171").s().p("AgsAgIhegoQgNgFACgEQACgDAOgCICBgQQAZgEAXALIBeAnQANAGgBADQgCADgOACIiAASIgKAAQgVAAgTgIg");
	this.shape_89.setTransform(-16.8,34.6,0.479,0.479);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#717171").s().p("AgoAgIhggoQgXgKAbgDIB/gRQAXgDAZALIBcAmQAOAGgCADQgBADgPACIh9ARIgKABQgTAAgRgIg");
	this.shape_90.setTransform(-6.2,33.2,0.479,0.479);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#717171").s().p("AgfAbIhdgkQgVgIAVgCIBxgOQAYgDAXAKIBYAhQAXAKgXADIhxANIgLABQgPAAgQgHg");
	this.shape_91.setTransform(23.7,20.3,0.479,0.479);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#717171").s().p("Ag3AkIhgguQgUgJAbgDICcgUQAWgDAUAJIBiAtQAUALgcADIiWATIgOABQgTAAgQgHg");
	this.shape_92.setTransform(-79.4,37.6,0.479,0.479);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#717171").s().p("AgzAjIhhgsQgVgKAcgDICUgTQAYgDAVAJIBgAsQALAFgCADQAAADgOACIiVATIgOABQgRAAgOgHg");
	this.shape_93.setTransform(-67.3,36.1,0.479,0.479);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#717171").s().p("AgvAhIhfgpQgXgLAcgDICJgRQAbgDAXAKIBcAoQAYALgdADIiKASIgMABQgTAAgPgIg");
	this.shape_94.setTransform(-44.2,33.2,0.479,0.479);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#717171").s().p("AguAgIhcgoQgYgKAbgEICHgQQAZgDAWAKIBcAnQAYALgdADIiDARIgMABQgTAAgSgIg");
	this.shape_95.setTransform(-33.1,31.8,0.479,0.479);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#717171").s().p("AghAeIhignQgUgIAUgDIB7gQQAUgDAXAKIBfAmQAXAJgWACIh6ARIgJAAQgQAAgRgHg");
	this.shape_96.setTransform(23.9,29.2,0.479,0.479);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#717171").s().p("AghAcIhdgkQgWgJAZgCIB0gOQAWgDAUAJIBcAjQAVAJgWADIh0AOIgKABQgRAAgQgHg");
	this.shape_97.setTransform(14.3,21.4,0.479,0.479);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#717171").s().p("Ag2AhIhZgpQgMgGACgDQACgDAQgCICJgQQAegFAZAMQAlASAyAVQAZALggAEIiKARIgPABQgVAAgRgIg");
	this.shape_98.setTransform(-70.1,31.5,0.479,0.479);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#717171").s().p("AhIAoIhcgxQgWgMAjgEICsgVQAegEAVALIBcAvQAXANgiADIitAXIgQABQgVAAgPgIg");
	this.shape_99.setTransform(-139,45.1,0.479,0.479);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#717171").s().p("AgvAfIhcgoQgMgFACgDQACgDAOgCICFgPQAcgEAWALIBYAlQAaAMggADIiEAQIgNABQgTAAgPgIg");
	this.shape_100.setTransform(-47.3,28.8,0.479,0.479);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#717171").s().p("AgkAcIhagjQgMgGAAgDQAAgDAMgBIB2gPQAWgCAVAJIBeAkQAWAJgYADIhzAPIgMABQgTAAgRgIg");
	this.shape_101.setTransform(18.1,25.4,0.479,0.479);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#717171").s().p("AgkAdIhfgmQgLgFACgCQABgDAMgBIB6gOQAWgEAXAKIBaAkQAXAJgXADIh9APIgJABQgRAAgPgHg");
	this.shape_102.setTransform(-5.2,23.8,0.479,0.479);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#717171").s().p("Ag8AmIhhgwQgUgJAcgEICigUQAegEAWALIBdAtQAVAKgeAEIiiAVIgPABQgTAAgNgHg");
	this.shape_103.setTransform(-104.5,40.8,0.479,0.479);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#717171").s().p("AgzAnIhkgvQgYgLAdgEICTgVQAcgEAVAKIBmAvQAMAFgBAEQgBAEgOACIiWAWIgNABQgTAAgRgIg");
	this.shape_104.setTransform(-44.1,48.7,0.479,0.479);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#717171").s().p("Ag5AmIhigvQgWgLAfgEICcgUQAcgEAVAKIBfAuQAZAMgeADIifAWIgPABQgSAAgOgIg");
	this.shape_105.setTransform(-86.8,43.8,0.479,0.479);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#717171").s().p("AggAhIhkgpQgZgKAZgDIB5gRQAVgDAVAJIBnApQAXAJgXADIg9AJIg8AJIgLABQgQAAgSgHg");
	this.shape_106.setTransform(36.2,37.1,0.479,0.479);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#717171").s().p("AhEApIhhgxQgYgNAhgEICogYQAfgFAYAMIBjAyQAXAMgeAFIioAZIgTABQgWAAgSgKg");
	this.shape_107.setTransform(-99.5,56.7,0.479,0.479);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#717171").s().p("Ag+AqIhjgyQgYgMAggFICigXQAegFAYANIBkAxQALAGgBAEQgBAEgPACIimAYIgQABQgVAAgQgIg");
	this.shape_108.setTransform(-85.7,54.7,0.479,0.479);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#717171").s().p("AgkAjQhOghgagLQgKgFAAgDQACgDALgCIBCgIIBCgJQAXgEAYAKIBgAoQAYALgWADIiMAUIgHAAQgPAAgOgGg");
	this.shape_109.setTransform(-3.9,37.8,0.479,0.479);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#717171").s().p("AhEAiIhWgrQgUgLAegDICagTQAdgDAUAJIBeAtQAXALgfADIiRATQgLACgLAAQgaAAgUgKg");
	this.shape_110.setTransform(-91.7,39.1,0.479,0.479);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#717171").s().p("Ag4AjIhdgrQgagMAlgDIBJgIIBMgJQAcgEAWALIBbAqQAVAKgcAEIibATIgMAAQgTAAgPgHg");
	this.shape_111.setTransform(-94.1,34.4,0.479,0.479);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#717171").s().p("AgsAeIhcgmQgLgFACgDQABgDAOgCICAgPQAYgDAUAJIBfAnQAUAJgYADIiDAQIgKABQgTAAgRgIg");
	this.shape_112.setTransform(-25.7,26.2,0.479,0.479);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#717171").s().p("Ag2AkIhggtQgVgKAbgDICQgTQAhgFAbANIBZAoQAaAMghAFIiOATIgQABQgVAAgRgIg");
	this.shape_113.setTransform(-62.2,40.6,0.479,0.479);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#717171").s().p("AhRAqIhhgvQgNgHACgEQACgEARgCIDCgcQAigEAYAMIBhAuQAZANghAEIjCAdIgRACQgWAAgTgKg");
	this.shape_114.setTransform(-70.9,52.6,0.479,0.479);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#717171").s().p("AgvAgIhfglQgagKAZgDICOgVQAWgDAaALIBfAkQANAFABAEQAAADgMABIiOAVIgLACQgSAAgUgJg");
	this.shape_115.setTransform(56.9,34.2,0.479,0.479);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#717171").s().p("AhHAhIhbgkQgYgJAZgDIC6gXQAZgDAYAKIBVAgQAPAGABADQAAAEgOACIhbALIheAMIgMABQgRAAgSgHg");
	this.shape_116.setTransform(29.9,23.9,0.479,0.479);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#717171").s().p("AiKAtIhZgtQgXgMAhgEIErglQAigEAWAMIBYAtQANAFgCAEQgDAEgSACIkpAmIgSACQgWAAgRgKg");
	this.shape_117.setTransform(-121.3,42.9,0.479,0.479);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#717171").s().p("AiOAyIhegxQgNgFACgEQADgEARgCIE6grQAggEAYAMIBfAwQAXAKgeAEIk9AtIgRABQgVAAgSgJg");
	this.shape_118.setTransform(-90.3,49.7,0.479,0.479);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#717171").s().p("AhfAkIhZgkQgPgFABgDQAAgDAPgCIBzgOIBzgQQAYgDAXAKIBdAkQAZAJgYADIjpAgIgLABQgTAAgUgJg");
	this.shape_119.setTransform(37.2,27.5,0.479,0.479);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#717171").s().p("AjGAyIhPgqQgTgIACgEQACgDAdgDIDMgYIDEgYQAogFAaAPIBSAqQAYAKggAEImiAzIgQABQgYAAgRgKg");
	this.shape_120.setTransform(-126.5,38.3,0.479,0.479);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#717171").s().p("AjkA7IhXgvQgQgIADgEQADgDAWgCIHVg9QAmgFAbAOIBXAtQAaAMgiACIngBBIgRABQgYAAgRgJg");
	this.shape_121.setTransform(-108.3,46.7,0.479,0.479);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#717171").s().p("AnPBsQgLgCgXgKIhRgmQgYgMABgDQABgEAegEIPqiLQAXgEAKACQAKABAWAJIBRAjQAZALgBADQAAADgZADIvrCTQgTACgLAAIgHAAg");
	this.shape_122.setTransform(-8.5,43.6,0.479,0.479);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#717171").s().p("AkPDhQgpgHgegOIidhLIk4iTQgxgXAEgNQADgOA6gIIPNiTQA0gHApAGQAqAFAzAXIG5C+QAeALAEAEQAWAQgEAJQgFAJgiAGIv1CyQgPABgPAAQgXAAgXgDg");
	this.shape_123.setTransform(1.5,57.7,0.479,0.479);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F7F4F4").s().p("A/f12MA9LgAtMAB0Am1Mg8vAGSg");
	this.shape_124.setTransform(-82.1,-46.8,0.479,0.479);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A1A1A1").s().p("A+5ZeQgggdgCgvMgCdgwIQgCgvAdghQAcghArAAMA/AgAQQAgAAAYAdQAYAcACAoMAB8ApsQACAogVAfQgVAfggAEMg+gAG3IgKABQgkAAgbgag");
	this.shape_125.setTransform(-83.1,-46.8,0.479,0.479);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C6C5C5").s().p("A+jZlQgygZgGhGMgCcgwJQgCg5A3gdQAqgWA4AAIAIADMA+CgAFQAiAAAWATQAYAWACAmMAB8ApsQACAogVAfQgVAfggADMg93AG9IgcACQglAAgbgNg");
	this.shape_126.setTransform(-85.7,-46.4,0.479,0.479);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("A15H/QhBgJgogWIt/n9QgegRAOgQQAOgQAzgGMA5qgGuQAhgDAtAGQAuAHAgANINzFpQAnAQAFAPQAGAPggAGMg5eAJNQgbAFgeAAQgdAAgggFg");
	this.shape_127.setTransform(-46.9,40,0.479,0.479);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EAEAEA").s().p("AxnL8QhHgKgsgYI79vmQgigTAQgSQAQgRA3gGMA+agG2QAkgEAyAHQAyAHAjAOIcbLWQArAQAFAPQAGARgjAGMg+2ALVQgeAGghAAQgfAAgkgFg");
	this.shape_128.setTransform(-31.2,49.7,0.479,0.479);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C6C5C5").s().p("AxyL8QhIgKgsgYI79vmQgcgTALhIIAQhFMA/RgFSQAjgEAyAHQAyAHAjAOIdcJ0IAGBIQgCBHgiAFMg/GALZQgeAGghAAQgfAAgjgFg");
	this.shape_129.setTransform(-31.4,55.9,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-152.2,457.8,304.5);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BTQgXgQgHgbIAygIQADAPAKAIQAKAHAQAAQATAAAKgHQAHgFAAgIQAAgGgEgEQgEgDgNgDQg6gOgRgLQgWgNAAgcQAAgYATgRQAUgRApAAQAlAAATANQATAMAHAZIgwAJQgDgLgIgGQgJgGgOAAQgTAAgJAGQgGAEAAAGQAAAFAFAEQAHAFAnAJQAoAJAPAOQAQALAAAYQAAAagWATQgVATgrAAQglAAgWgQg");
	this.shape.setTransform(207.5,177);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBXQgYgMgMgXQgNgXAAgeQAAgZANgYQAMgXAXgNQAWgMAbAAQAqAAAcAcQAbAcABAqQgBAqgbAcQgcAdgqAAQgZAAgXgMgAgggqQgNAPAAAbQAAAcANAPQAOAPASAAQATAAAOgPQANgPAAgcQAAgbgNgPQgOgPgTAAQgSAAgOAPg");
	this.shape_1.setTransform(186.7,177);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGB+QgMgFgFgHQgFgIgCgMQgBgJAAgaIAAhRIgYAAIAAgoIAYAAIAAgmIAwgdIAABDIAiAAIAAAoIgiAAIAABKQAAAYABAEQABADADADQAEACAFAAQAHAAANgEIAFAnQgSAHgWAAQgOAAgIgEg");
	this.shape_2.setTransform(169.4,173.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAguAZgaQAZgaAoAAQAjAAAUAPQAVAPAJAfIgyAIQgCgOgJgIQgJgHgOAAQgRAAgLANQgLANAAAeQAAAgALAOQALAOARAAQAPAAAJgIQAJgJAEgUIAxAJQgIAigVARQgWASglAAQgoAAgYgbg");
	this.shape_3.setTransform(153.3,177);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAgtAZgbQAYgbAmAAQAoAAAZAcQAYAcgBA4Ih8AAQABAWAMANQALAMAPAAQAMAAAIgGQAIgHAFgOIAyAIQgKAcgVAOQgVAPgfAAQgwAAgXghgAgYgwQgLAMAAAVIBJAAQAAgWgLgLQgLgLgPAAQgOAAgLALg");
	this.shape_4.setTransform(132.5,177);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQCCIgEgnQAMACAJAAQASAAAIgKQAJgLAEgPIhIi9IA1AAIAsCFIAsiFIA0AAIhDC1IgMAhQgHARgGAIQgFAJgGAGQgIAFgLADQgMADgOAAQgPAAgOgDg");
	this.shape_5.setTransform(112.1,180.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBXQgYgMgMgXQgNgXAAgeQAAgZANgYQAMgXAXgNQAXgMAaAAQAqAAAcAcQAbAcAAAqQAAAqgbAcQgcAdgqAAQgYAAgYgMgAgggqQgNAPAAAbQAAAcANAPQAOAPASAAQAUAAANgPQANgPAAgcQAAgbgNgPQgNgPgUAAQgSAAgOAPg");
	this.shape_6.setTransform(91,177);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BgIAAi8IAvAAIAAAbQAMgSAIgHQAJgFAMAAQARAAAQAJIgPAsQgNgIgLAAQgLAAgHAFQgFAGgFAPQgDAQAAAuIAAA6g");
	this.shape_7.setTransform(74.1,176.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhjCCIAAkEIBVAAQAvAAAOAFQAXAFAPAUQAPATAAAgQAAAYgJARQgJAOgNAJQgOAKgNADQgUAEghgBIgjAAIAABjgAgugLIAdAAQAeAAAKgEQAKgEAHgJQAFgJAAgMQABgNgJgKQgJgJgNgDQgJgBgagBIgaAAg");
	this.shape_8.setTransform(53.8,173.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBCQgTgaAAgnQAAgtAZgbQAYgbAmAAQAoAAAZAcQAYAcgBA4Ih8AAQABAWAMANQALAMAPAAQAMAAAIgGQAIgHAFgOIAyAIQgKAcgVAOQgVAPgfAAQgwAAgXghgAgYgwQgLAMAAAVIBJAAQAAgWgLgLQgLgLgPAAQgOAAgLALg");
	this.shape_9.setTransform(20.6,177);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBqQgXgaAAgvQAAgvAWgZQAXgZAjAAQAeAAAXAbIAAhfIAyAAIAAEEIguAAIAAgcQgMARgQAIQgQAIgOAAQghAAgXgbgAgcgLQgMAMAAAcQAAAfAIANQANAUATAAQASAAAMgPQAMgPAAgdQAAghgMgMQgLgOgTAAQgQAAgMAOg");
	this.shape_10.setTransform(-1,173.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhEBqQgXgaAAgvQAAgvAWgZQAXgZAjAAQAeAAAXAbIAAhfIAyAAIAAEEIguAAIAAgcQgMARgQAIQgQAIgOAAQghAAgXgbgAgcgLQgMAMAAAcQAAAfAIANQANAUATAAQASAAAMgPQAMgPAAgdQAAghgMgMQgLgOgTAAQgQAAgMAOg");
	this.shape_11.setTransform(-33.6,173.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhHBTQgRgQAAgZQAAgQAIgMQAIgNAOgFQANgGAbgFQAhgHANgGIAAgFQAAgOgHgGQgHgGgSAAQgNAAgIAFQgHAFgFANIgugIQAIgbATgOQATgNAlAAQAfAAARAIQAQAIAHAMQAHAMAAAhIgBA5QAAAZADAMQACAMAHANIgyAAIgFgPIgCgFQgNAMgOAGQgNAHgRAAQgdAAgRgQgAAAALQgVAEgHAFQgJAGAAALQAAALAHAHQAIAIAMAAQAMAAAMgJQAJgHADgJQACgHAAgSIAAgKIgcAIg");
	this.shape_12.setTransform(-54.5,177);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEBqQgXgaAAgvQAAgvAWgZQAXgZAjAAQAeAAAXAbIAAhfIAyAAIAAEEIguAAIAAgcQgMARgQAIQgQAIgOAAQghAAgXgbgAgcgLQgMAMAAAcQAAAfAIANQANAUATAAQASAAAMgPQAMgPAAgdQAAghgMgMQgLgOgTAAQgQAAgMAOg");
	this.shape_13.setTransform(-76.3,173.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYCCIAAi8IAwAAIAAC8gAgYhTIAAgvIAwAAIAAAvg");
	this.shape_14.setTransform(-92,173.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYCCIAAkEIAxAAIAAEEg");
	this.shape_15.setTransform(-102.2,173.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYCCIAAi8IAxAAIAAC8gAgYhTIAAgvIAxAAIAAAvg");
	this.shape_16.setTransform(-112.4,173.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRB8QgQgIgLgQIAAAcIgvAAIAAkEIAyAAIAABfQAXgbAeAAQAjAAAXAZQAWAZAAAtQAAAxgXAaQgXAbghAAQgOAAgQgJgAgdgLQgMAMAAAcQAAAeAJAOQANAUAUAAQAQAAAMgOQAMgPAAgeQAAghgMgMQgMgOgRAAQgRAAgMAOg");
	this.shape_17.setTransform(-128.2,173.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXCCIAAi8IAvAAIAAC8gAgXhTIAAgvIAvAAIAAAvg");
	this.shape_18.setTransform(-144.9,173.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGB+QgMgFgEgHQgGgIgCgMQgCgJABgaIAAhRIgYAAIAAgoIAYAAIAAgmIAwgdIAABDIAiAAIAAAoIgiAAIAABKQAAAYABAEQABADADADQAEACAFAAQAHAAANgEIAFAnQgSAHgWAAQgOAAgIgEg");
	this.shape_19.setTransform(-156.1,173.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/BIQgZgaAAguQAAguAZgaQAZgaAoAAQAjAAAUAPQAVAPAJAfIgyAIQgCgOgJgIQgJgHgOAAQgRAAgLANQgLANAAAeQAAAgALAOQALAOARAAQAPAAAJgIQAJgJAEgUIAxAJQgIAigVARQgWASglAAQgoAAgYgbg");
	this.shape_20.setTransform(-172.2,177);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhHBTQgRgQAAgZQAAgQAIgMQAIgNAOgFQANgGAbgFQAhgHANgGIAAgFQAAgOgHgGQgHgGgSAAQgNAAgIAFQgHAFgFANIgugIQAIgbATgOQATgNAlAAQAfAAARAIQAQAIAHAMQAHAMAAAhIgBA5QAAAZADAMQACAMAHANIgyAAIgFgPIgCgFQgNAMgOAGQgNAHgRAAQgdAAgRgQgAAAALQgVAEgHAFQgJAGAAALQAAALAHAHQAIAIAMAAQAMAAAMgJQAJgHADgJQACgHAAgSIAAgKIgcAIg");
	this.shape_21.setTransform(-192.8,177);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhYCCIAAkEICxAAIAAAsIh8AAIAAA/IBrAAIAAAqIhrAAIAABvg");
	this.shape_22.setTransform(-213.7,173.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3A3A3A").s().p("AghACQgTgwAEgEQADgDAuAXIAxAYIg/A5IgUgxg");
	this.shape_23.setTransform(-149.6,13.6,0.482,0.482);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBC892").s().p("AhUADQg6iMAGgFQAGgGCGBHICGBHIijCVQgehFgdhHg");
	this.shape_24.setTransform(-145.2,18.1,0.482,0.482);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#669FA6").s().p("AO3RFQgJgFgJgKMgeTghIIA6g1IAEAEIABABMAePAhDQAJAJAEAKQAEAJgEADIgqAnIgDABQgEAAgFgDg");
	this.shape_25.setTransform(-95.2,72.7,0.482,0.482);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#79BFC6").s().p("AO2Q8QABgNgJgKMgePghDIgBgBIgFgEIAxgsIAGAEMAePAhDQAJAKgBANQAAANgJAIIgwAsQAIgIAAgMg");
	this.shape_26.setTransform(-92.8,71,0.482,0.482);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3E444C").s().p("AOJR1QgNAAgJgKMgePghDIgEgGICkiWIAGAEMAePAhDQAJAKgBANQAAANgJAIIh5BvQgJAHgLAAIgCAAg");
	this.shape_27.setTransform(-95.6,72.7,0.482,0.482);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#535962").s().p("AlJIfQiGhBheh0QhJiOABihQAAkTDDjFQDFjEETAAQCaAACLBDQCFBBBdB0QBKCNAACiQAAEUjFDEQjEDEkTAAQibAAiJhDg");
	this.shape_28.setTransform(93.9,-78.6,0.482,0.482);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#40444B").s().p("AkjJaQiFhBhehzQhIhZgmhpQgohuAAh2QAAkUDEjEQDEjEEUAAQDAAACiBmQCeBiBUCmQBJCNAAChQAAEVjEDEQjEDEkVAAQiZAAiKhDg");
	this.shape_29.setTransform(92.1,-81.4,0.482,0.482);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFEFE").s().p("Ak6LrQiSg9hwhwQhxhxg+iRQg/iYAAikQAAijA/iXQA+iSBxhwQBwhwCSg+QCWhACkAAQClAACWBAQCSA+BxBwQBwBwA9CSQBACXAACjQAACkhACYQg+CRhvBxQhxBwiSA9QiWBAilAAQikAAiWhAg");
	this.shape_30.setTransform(92.1,-81.4,0.482,0.482);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFEFE").s().p("Ai2BpQgrAAgfgeQgegfAAgrQAAgqAfgfQAgggAsAAIHAAAQAIAAAFAFQAFAGAAAIIAAC9QAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAg");
	this.shape_31.setTransform(40.9,-81.3,0.482,0.482);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BBBBBD").s().p("AhoONIyoyyIeDpqIKeKcIgEAhQgiDqh2DSQhxDLiyCZQixCajaBTQjhBVjtAAg");
	this.shape_32.setTransform(92.5,-62,0.482,0.482);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A1A1A1").s().p("AqOJpIhQhRIBhADQDvABDhhWQDYhTCxiaQCxiZByjJQB1jSAjjsIAEghIBEBEQgoD3h9DZQh6DRi6CfQi7CejjBXQjrBYj6AAg");
	this.shape_33.setTransform(122.9,-44,0.482,0.482);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag6VwQkUgMj4hyQjwhui3i/Qi4i/hkj1Qhnj9AAkUQAAkZBukDQBqj6DBjBQDBjBD6hqQEDhuEZAAQEbAAEDBuQD6BqDADBQDBDBBqD6QBuEDAAEZQAABpgPBhIgEAYIhEhEQAJhMAAhSQAAkJhnj1Qhkjsi2i2Qi3i2jshkQj0hokLAAQkJAAj1BoQjsBki2C2Qi3C2hkDsQhnD1AAEJQAAEABeDqQBaDkCoCzQCnC0DbBqQDjBuD+ATIBQBRg");
	this.shape_34.setTransform(92.1,-81.4,0.482,0.482);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7E8E9").s().p("Ag5VJQkKgMjxhvQjphqizi6Qiyi7hijtQhlj2AAkMQAAkSBqj8QBnjzC8i7QC7i8DzhmQD8hrESAAQETAAD7BrQD0BmC8C8QC7C7BmDzQBrD8AAESQAABigPBiQgjDyh2DYQh0DRi1CdQi1CfjhBWQjoBZj7AAIg5gBg");
	this.shape_35.setTransform(92.1,-81.4,0.482,0.482);

	this.instance = new lib.Path_6();
	this.instance.setTransform(95.3,39.8,0.482,0.482,0,0,0,11.8,48.1);
	this.instance.alpha = 0.512;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(84.5,41.5,0.482,0.482,0,0,0,19.4,45.1);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(28.7,81.2,0.482,0.482,0,0,0,12.2,49);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(17.4,82.9,0.482,0.482,0,0,0,19,46.2);
	this.instance_3.alpha = 0.512;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(93.7,39,0.482,0.482,0,0,0,59,50);
	this.instance_4.alpha = 0.379;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(27,80.5,0.482,0.482,0,0,0,55.2,52.1);
	this.instance_5.alpha = 0.379;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3F444A").s().p("AvwPHQgmghhNhYQhAhKgngYQgMgIgqANQgsANgMgGQgegQgfhGQgbg9gEgjQgCgUANgMQAGgFAhgTQBPgrA9hTQDCkJGYi6QDLheClgpQAwhBBfg5QBeg6BNgNIBPhRQBkhiBvhWQFikUFEgzQBmgQBLgxQAfgVAIgDQARgHAQALQAeAUApA0QAwA8AAAhQABAOggAhQgfAgABAOQAEAtAkBbQArBtAMAxQAzDPiZCuQi8DUkJBFQkMBGiwh+QgxgnhLhGQhLhHgegYQhshWhUAyIgaAQQhUA1AbCGQAHAlAdBjQAeBkAMA+QAdDWi4DOQi3DLkVBGQhAAQg6AAQiTAAhzhlgAmGgNQhWAGhoAkQgwASgvAWIgsAWQgzAbgjAVQhrBChAA0QiHBvgWByQgNBFAUBCQAQAzAuBLQA/BpBTA/QAyAnAxAPQBRAYBigWQAWgEAcgJQAygPA2gaQA0gZA+glQC7hyBCi8QBBi3hKiwQgehKgNgZQgghDgYgMQg3gbhLAAIghACgAMls0QgsAQgzAaIguAZQgiATgrAaQhkA8hPBFQhcBPgyBOQg7BZABBRQAAAbAsA7QAOATA2BBQA9BHBRArQCABGCXgJQAXgBAVgDQA0gIA1gRQBEgXA/gmQB+hLBJhMQBZhdAThkQAOhGgchfQgYhQguhLQgvhMglglQgxgxhEgUQgkgKgpAAQhJAAhYAhg");
	this.shape_36.setTransform(55.1,58,0.482,0.482);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F444A").s().p("A3aFfIfUtCQA6gYA9gBIMQgMQAagBAXANQAXAOALAXQALAZgHAXQgJAegnAWQgPAJgZAEQgWADgUgBIqigxQhTgFhKAjI+JOAg");
	this.shape_37.setTransform(59.8,67.9,0.482,0.482);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3F444A").s().p("AwFSWQgZgEgRgWQgQgUgCgaQgCgaAMgYIFkq6QAbg2AwgqIZf2YIBrCoI52U5QhBA1gfBMIj8JyQgIATgNASQgOAUgOAKQggAWgaAAIgKgBg");
	this.shape_38.setTransform(68,63.1,0.482,0.482);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D8D7D7").s().p("AhGA7QgHgIAQgXQAQgYAegXQAbgYAagMQAagLAHAIQAHAIgQAYQgQAXgeAXQgbAYgaAMQgPAHgIAAQgHAAgDgEg");
	this.shape_39.setTransform(-6,86.4,0.482,0.482);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3E444C").s().p("AAIEzIlMi2QgIgEgCgJQgCgIAEgHIA8hmQADgHAJgCQAIgCAIAEIDTBxIDimPQAEgIAJgCQAIgCAHAEIBoA7QAIAEACAJQACAIgEAHIjuGfIAAAAIgQAdIgBAAIgqBLQgEAHgIACIgGABQgFAAgFgDg");
	this.shape_40.setTransform(-72.4,54,0.482,0.482);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3E444C").s().p("AAIEzIlMi2QgIgEgCgIQgCgJAEgHIA7hlQAEgIAJgCQAIgCAHAEIDUBxIDjmPQAEgIAIgCQAIgCAIAEIBnA7QAIAEACAJQACAIgEAHIjtGfIgBAAIgQAdIAAABIgrBKQgEAHgJACIgFABQgFAAgFgDg");
	this.shape_41.setTransform(-88.8,-2.7,0.482,0.482);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3E444C").s().p("AAIEzIlMi2QgIgEgCgJQgCgIAEgHIA8hmQADgHAJgCQAIgDAHAFIDUBxIDimQQAFgHAIgCQAIgCAIAEIBnA7QAHAEADAIQACAIgEAIIjtGeIAAABIgRAdIgBAAIgqBKQgEAIgJACIgFABQgFAAgFgDg");
	this.shape_42.setTransform(-105.9,-61.9,0.482,0.482);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BBBBBD").s().p("ApVDPQgLgLgFgTQgFgSADgPQADgPAKgDISclUQAKgDAKALQALALAFASQAGATgEAPQgDAPgKADIycFUIgEABQgIAAgIgJg");
	this.shape_43.setTransform(-28,-28.4,0.482,0.482);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BBBBBD").s().p("ApbDRQgLgLgGgTQgFgSADgPQAEgPAKgDISnlYQAKgCALALQALAKAFATQAGASgEAPQgDAPgKADIyoFYIgEAAQgHAAgJgIg");
	this.shape_44.setTransform(-23.6,-11.9,0.482,0.482);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BBBBBD").s().p("Aq7DsQgMgKgFgTQgGgSAFgPQAFgQALgDIVhmOQALgDAMALQANAKAFATQAFASgEAQQgEAPgMADI1hGNIgGABQgJAAgJgIg");
	this.shape_45.setTransform(-30.5,-18.5,0.482,0.482);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BBBBBD").s().p("Aq5DyQgNgNgGgWQgHgWAEgRQAEgSAMgEIVhmNQALgDANANQAMANAHAWQAHAVgEASQgEASgMAEI1hGNIgFAAQgJAAgKgKg");
	this.shape_46.setTransform(-11.8,46.2,0.482,0.482);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BBBBBD").s().p("Aq5DyQgNgNgGgWQgHgVAEgSQAEgSAMgEIVhmNQALgDANANQAMANAHAWQAGAWgDARQgEASgMAEI1hGNIgFAAQgJAAgKgKg");
	this.shape_47.setTransform(-14.4,37.4,0.482,0.482);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BBBBBD").s().p("Aq5D0QgMgOgHgXQgHgXAEgSQADgTAMgDIVhmNQALgEANAOQANAOAHAXQAHAXgEASQgEATgLADI1hGNIgFABQgJAAgLgLg");
	this.shape_48.setTransform(-45.2,-69.1,0.482,0.482);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BBBBBD").s().p("ApSDWQgLgOgHgXQgHgXADgSQACgSAKgDISZlUQAKgCALAOQAMAOAHAXQAHAXgDASQgCASgKADIyZFTIgEABQgIAAgKgMg");
	this.shape_49.setTransform(-42.5,-78.7,0.482,0.482);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#50585F").s().p("ArBA1IHwiJQgfgXgTggQgVgigFgoQgJhNAwg9QAwg+BNgKQBNgJA7AwQA+AwAJBNQAGAxgTAuIIRiUIBoFyI0bFvgAhwleQgvAFgeAmQgdAmAFAvQAGAwAmAdQAmAdAvgGQAvgFAegmQAbgmgGgvQgGgwgjgdQgggYgmAAIgPABg");
	this.shape_50.setTransform(-80.6,-123.3,0.482,0.482);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E7E8E9").s().p("A1s+hIYXm2MATCBD5I4XG2g");
	this.shape_51.setTransform(-89.5,-7.1,0.482,0.482);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Egh5gbGMAwxgNsMATCBD5MgwxANsg");
	this.shape_52.setTransform(-51.8,-17.7,0.482,0.482);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D7764C").s().p("EglFgdJMA1mgPCMAUlBJVMg1mAPCg");
	this.shape_53.setTransform(-51.5,-16.5,0.482,0.482);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#659FA6").s().p("EgVsAzYQqAkPnunuQnunukPqAQkYqXAArWQAArUEYqXQEPqBHunuQHunuKAkPQKXkYLVAAQLVAAKXEYQKBEPHuHuQHuHuEPKBQEYKXAALUQAALWkYKXQkPKAnuHuQnuHuqBEPQqXEYrVAAQrVAAqXkYg");
	this.shape_54.setTransform(0,-23.2,0.482,0.482);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.3,-195.2,478.1,390.4);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F444A").s().p("Ag7BHQgegagDgmQgDglAZgdQAageAmgDQAlgDAdAZQAeAaADAmQADAlgZAdQgaAegmADIgHAAQghAAgagWg");
	this.shape.setTransform(3.1,-109.8,0.358,0.358);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F4F4").s().p("AhIH7IljjUQgngXgUgpQgUgoAEgtQADghASgeIFtpjIJsFzIltJiQghA3g+AQQgVAFgTAAQgnAAglgWg");
	this.shape_1.setTransform(-18.9,-83.1,0.358,0.358);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F4F4").s().p("AjvMnIljjUQg3ghgQg+QgQg/Ahg3IKjxuQAhg3A+gQQA/gPA3AgIFjDUQA3AhAQA+QAQA/ghA3IqjRuQghA3g+AQQgUAFgUAAQgpAAglgWg");
	this.shape_2.setTransform(-12.9,-93.8,0.358,0.358);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F444A").s().p("A58toIXnAAIcSQ1ImOKcg");
	this.shape_3.setTransform(-81.5,-108.8,0.358,0.358);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626A7A").s().p("A8qtqMAsQAAAINEHzIrpTig");
	this.shape_4.setTransform(-75.3,-108.7,0.358,0.358);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0D0AA").s().p("A02ZbQhBgXhbhDQi2iIiCjeQh6jQAUlPQAHh2AbijIAtkAQARhjAdhjQAlh4AchrIpPkHIJ9wOID9C6QEHDGA1A3IBUgcQBvgfCBgLQGdgjG4CuICMgTQCwgVCxgKQI3ggFuBWIAeAEQAlAIAiASQBvA6AwCJIgBAaQgFAegSAWQg3BIifglQg+gThpgXQjTgsjbgMQhNgHhbAHQi4ANhIBEIgNANQgKAPANAQQArAyEHAhIBfAHQB3ALB2AQQF6AyDlBQQDmBQCtC+QBWBfAoBPIAOAdQAOAjAGAlQARB4hPBTQgKAehIgPQiPgdk4jfQhVg9iDhEQkHiJjogeQhDgVhWgMQitgYheAwIgOALQgPAOACARQAGA1CnA6IELBqQEZBzBCA0IA3AbQBGAjBIAwQDoCZCuDXIApBKQAuBaAdBWQBbEQh7ByQgkAdg3gCQhtgFhbieQgUhNgyhoQhjjPiUiEQhbg9hrhDQjViIhSgiQgbgMgcgPQiJhLgRgHQhzgzhcAGQgJABgKADQgWAHgLAOQgmAtBHBkQA3BOAdBcQAcBbgBBgIABBgQgBA+gRAwQg5ChhKBzQgvBKgvAtQgRARgLAOQgrA2g+AqQhjBCh5AQQgwgYgkguQhGhcBKhuQAsgoAvg6QBjh0AdhYQAfhGgRheQgji7jzh2QkTiEh3gTQg8gJhGAHQgiADh5ATQg7AAhWAcQiqA2iCCJQgWAYgTAwIgdBWQgvCEgEA/QgKCQBpB0IBYB3QBYB9gBAmQgBBBgDAVQgGAsgTAbQgqA7iEAAIgfgBg");
	this.shape_5.setTransform(56.6,-54.9,0.358,0.358);

	this.instance = new lib.CompoundPath_18();
	this.instance.setTransform(-50.5,72.5,0.358,0.358,0,0,0,68.6,8.4);
	this.instance.alpha = 0.41;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_6.setTransform(-51.2,71.9,0.358,0.358);

	this.instance_1 = new lib.Path_1_18();
	this.instance_1.setTransform(-50.5,72.8,0.358,0.358,0,0,0,73.8,7.7);
	this.instance_1.alpha = 0.109;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_7.setTransform(-51.2,75.8,0.358,0.358);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAXiWATQiUASjmAGIinACQkfAAjLgUg");
	this.shape_8.setTransform(-51.2,75.8,0.358,0.358);

	this.instance_2 = new lib.CompoundPath_17();
	this.instance_2.setTransform(-52.8,80,0.358,0.358,0,0,0,68,8.3);
	this.instance_2.alpha = 0.41;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7BE42").s().p("AnqAwQjMgVAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAbjMAVQjLATkgAAQkfAAjLgTg");
	this.shape_9.setTransform(-53.5,79.4,0.358,0.358);

	this.instance_3 = new lib.Path_1_17();
	this.instance_3.setTransform(-52.8,80.3,0.358,0.358,0,0,0,73.5,7.8);
	this.instance_3.alpha = 0.109;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2B163").s().p("AnqBYQjMgTAAgcIAAiUIVtAAIAACUQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_10.setTransform(-53.5,83.3,0.358,0.358);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC86D").s().p("AnqBYQjMgTAAgcIAAiUIVtAAIAACUQAAAXiWASQiUASjmAGQhIAChfAAQkeAAjMgUg");
	this.shape_11.setTransform(-53.5,83.3,0.358,0.358);

	this.instance_4 = new lib.CompoundPath_16();
	this.instance_4.setTransform(-51,87.5,0.358,0.358,0,0,0,69,8.3);
	this.instance_4.alpha = 0.41;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgVQDLgTEfAAQEgAADMATQDLAVAAAaQAAAcjLATQjMAUkgAAQkfAAjLgUg");
	this.shape_12.setTransform(-51.7,86.9,0.358,0.358);

	this.instance_5 = new lib.Path_1_16();
	this.instance_5.setTransform(-51,87.8,0.358,0.358,0,0,0,73.2,7.8);
	this.instance_5.alpha = 0.109;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2B163").s().p("AnqBZQjMgVAAgcIAAiTIVtAAIAACTQAAAcjMAVQjLATkgAAQkfAAjLgTg");
	this.shape_13.setTransform(-51.7,90.8,0.358,0.358);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC86D").s().p("AnqBZQjMgVAAgcIAAiTIVtAAIAACTQAAAYiXASQiUASjlAGQhIAChfAAQkfAAjLgTg");
	this.shape_14.setTransform(-51.7,90.8,0.358,0.358);

	this.instance_6 = new lib.CompoundPath_15();
	this.instance_6.setTransform(-55.3,94.1,0.358,0.358,0,0,0,68.2,8.3);
	this.instance_6.alpha = 0.41;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_15.setTransform(-55.9,93.5,0.358,0.358);

	this.instance_7 = new lib.Path_1_15();
	this.instance_7.setTransform(-55.3,94.4,0.358,0.358,0,0,0,73.2,7.5);
	this.instance_7.alpha = 0.109;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_16.setTransform(-55.9,97.4,0.358,0.358);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiUATjmAFIinACQkfAAjLgUg");
	this.shape_17.setTransform(-55.9,97.4,0.358,0.358);

	this.instance_8 = new lib.CompoundPath_14();
	this.instance_8.setTransform(-49.7,101.3,0.358,0.358,0,0,0,69.2,8.5);
	this.instance_8.alpha = 0.41;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7BE42").s().p("AnrAvQjLgTAAgcQAAgaDLgUQDNgUEeAAQEgAADMAUQDLAUAAAaQAAAcjLATQjNAUkfAAQkeAAjNgUg");
	this.shape_18.setTransform(-50.5,100.7,0.358,0.358);

	this.instance_9 = new lib.Path_1_14();
	this.instance_9.setTransform(-49.7,101.5,0.358,0.358,0,0,0,74.5,7.7);
	this.instance_9.alpha = 0.109;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjMAUkfAAQkfAAjLgUg");
	this.shape_19.setTransform(-50.5,104.6,0.358,0.358);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAXiWATQiUASjnAGIimACQkfAAjLgUg");
	this.shape_20.setTransform(-50.5,104.6,0.358,0.358);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7BE42").s().p("Am7AkQi4gPAAgVQAAgUC4gPQC4gPEDAAQEEAAC4APQC4APAAAUQAAAVi4APQi4APkEAAQkDAAi4gPg");
	this.shape_21.setTransform(-43.4,106.7,0.358,0.358);

	this.instance_10 = new lib.CompoundPath_1_1();
	this.instance_10.setTransform(-42.5,107.5,0.358,0.358,0,0,0,71.5,9.2);
	this.instance_10.alpha = 0.41;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADMAUQDMATAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_22.setTransform(-43.4,107.1,0.358,0.358);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_23.setTransform(-43.4,110.7,0.358,0.358);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAYiWARQiUASjmAGQhIAChfAAQkfAAjLgUg");
	this.shape_24.setTransform(-43.4,110.7,0.358,0.358);

	this.instance_11 = new lib.CompoundPath_2_1();
	this.instance_11.setTransform(-47.5,114,0.358,0.358,0,0,0,68.5,7.8);
	this.instance_11.alpha = 0.41;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_25.setTransform(-48.1,113.5,0.358,0.358);

	this.instance_12 = new lib.Path_9_0();
	this.instance_12.setTransform(-47.5,114.4,0.358,0.358,0,0,0,73.4,7.7);
	this.instance_12.alpha = 0.109;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_26.setTransform(-48.1,117.4,0.358,0.358);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiTASjnAGIinACQkfAAjLgUg");
	this.shape_27.setTransform(-48.2,117.4,0.358,0.358);

	this.instance_13 = new lib.CompoundPath_3_1();
	this.instance_13.setTransform(-33.7,120,0.358,0.358,0,0,0,68.9,7.7);
	this.instance_13.alpha = 0.41;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADNAUQDLATAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape_28.setTransform(-34.5,119.5,0.358,0.358);

	this.instance_14 = new lib.Path_13_0();
	this.instance_14.setTransform(-33.7,120.3,0.358,0.358,0,0,0,74.5,7);
	this.instance_14.alpha = 0.109;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjMAUkgAAQkfAAjLgUg");
	this.shape_29.setTransform(-34.5,123.3,0.358,0.358);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiVASjmAGQhHAChfAAQkfAAjLgUg");
	this.shape_30.setTransform(-34.5,123.3,0.358,0.358);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7BE42").s().p("Am7AkQi4gPgBgVQABgUC4gPQC4gPEDAAQEEAAC4APQC4APAAAUQAAAVi4APQi4APkEAAQkDAAi4gPg");
	this.shape_31.setTransform(-45.8,125.8,0.358,0.358);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEC86D").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDMgUEeAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_32.setTransform(-45.8,125.9,0.358,0.358);

	this.instance_15 = new lib.Path_18_0();
	this.instance_15.setTransform(-45,126.9,0.358,0.358,0,0,0,73.5,7.7);
	this.instance_15.alpha = 0.109;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjNAUkfAAQkeAAjMgUg");
	this.shape_33.setTransform(-45.8,129.8,0.358,0.358);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAXiXATQiTASjnAGIimACQkeAAjMgUg");
	this.shape_34.setTransform(-45.8,129.8,0.358,0.358);

	this.instance_16 = new lib.CompoundPath_4_1();
	this.instance_16.setTransform(-42.5,132.9,0.358,0.358,0,0,0,69.3,8);
	this.instance_16.alpha = 0.41;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_35.setTransform(-43.4,132.2,0.358,0.358);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7BE42").s().p("AnqAwQjMgVAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAbjMAVQjLATkgAAQkfAAjLgTg");
	this.shape_36.setTransform(-43.4,132.5,0.358,0.358);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_37.setTransform(-43.4,136.1,0.358,0.358);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiVASjlAGQhIAChfAAQkeAAjMgUg");
	this.shape_38.setTransform(-43.4,136.1,0.358,0.358);

	this.instance_17 = new lib.CompoundPath_13();
	this.instance_17.setTransform(38.1,46.1,0.358,0.358,0,0,0,69.3,8.3);
	this.instance_17.alpha = 0.41;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_39.setTransform(37.2,45.5,0.358,0.358);

	this.instance_18 = new lib.Path_1_13();
	this.instance_18.setTransform(38.1,46.1,0.358,0.358,0,0,0,73.9,6.9);
	this.instance_18.alpha = 0.109;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjNAUkfAAQkeAAjMgUg");
	this.shape_40.setTransform(37.2,49.4,0.358,0.358);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiXASQiTASjmAGIinACQkeAAjMgUg");
	this.shape_41.setTransform(37.2,49.4,0.358,0.358);

	this.instance_19 = new lib.CompoundPath_12();
	this.instance_19.setTransform(32,53.4,0.358,0.358,0,0,0,68.5,8.3);
	this.instance_19.alpha = 0.41;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_42.setTransform(31.3,53,0.358,0.358);

	this.instance_20 = new lib.Path_1_12();
	this.instance_20.setTransform(32,53.8,0.358,0.358,0,0,0,73.4,7.5);
	this.instance_20.alpha = 0.109;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjNAUkfAAQkeAAjMgUg");
	this.shape_43.setTransform(31.3,56.8,0.358,0.358);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiXASQiTATjnAFQhHAChfAAQkeAAjMgUg");
	this.shape_44.setTransform(31.3,56.8,0.358,0.358);

	this.instance_21 = new lib.CompoundPath_11();
	this.instance_21.setTransform(35.1,61.3,0.358,0.358,0,0,0,68.9,7.5);
	this.instance_21.alpha = 0.41;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7BE42").s().p("AnrAvQjLgTAAgcQAAgaDLgVQDMgTEfAAQEgAADMATQDLAVAAAaQAAAcjLATQjMAUkgAAQkfAAjMgUg");
	this.shape_45.setTransform(34.1,60.8,0.358,0.358);

	this.instance_22 = new lib.Path_1_11();
	this.instance_22.setTransform(35.1,61.6,0.358,0.358,0,0,0,73.6,7.4);
	this.instance_22.alpha = 0.109;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E2B163").s().p("AnrBYQjLgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjMAUkfAAQkfAAjMgUg");
	this.shape_46.setTransform(34.1,64.7,0.358,0.358);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEC86D").s().p("AnrBYQjLgUAAgcIAAiTIVtAAIAACTQAAAYiXASQiVATjlAFQhHAChfAAQkfAAjMgUg");
	this.shape_47.setTransform(34.1,64.7,0.358,0.358);

	this.instance_23 = new lib.CompoundPath_10();
	this.instance_23.setTransform(27.3,67.9,0.358,0.358,0,0,0,68.6,7.5);
	this.instance_23.alpha = 0.41;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7BE42").s().p("AnrAvQjLgTAAgcQAAgaDLgUQDMgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkfAAjMgUg");
	this.shape_48.setTransform(26.5,67.4,0.358,0.358);

	this.instance_24 = new lib.Path_1_10();
	this.instance_24.setTransform(27.3,68.3,0.358,0.358,0,0,0,73.8,7.8);
	this.instance_24.alpha = 0.109;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjMAUkgAAQkfAAjLgUg");
	this.shape_49.setTransform(26.5,71.3,0.358,0.358);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAXiWATQiUASjnAGIimACQkfAAjLgUg");
	this.shape_50.setTransform(26.5,71.3,0.358,0.358);

	this.instance_25 = new lib.CompoundPath_9();
	this.instance_25.setTransform(33.7,75.6,0.358,0.358,0,0,0,67.6,7);
	this.instance_25.alpha = 0.41;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_51.setTransform(33.1,75.2,0.358,0.358);

	this.instance_26 = new lib.Path_1_9();
	this.instance_26.setTransform(33.7,76,0.358,0.358,0,0,0,73.2,7.5);
	this.instance_26.alpha = 0.109;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_52.setTransform(33.1,79.1,0.358,0.358);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiUASjmAGIinACQkfAAjLgUg");
	this.shape_53.setTransform(33.1,79.1,0.358,0.358);

	this.instance_27 = new lib.CompoundPath_8();
	this.instance_27.setTransform(30.4,83.3,0.358,0.358,0,0,0,68.9,8);
	this.instance_27.alpha = 0.41;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADNAUQDLATAAAbQAAAbjLAUQjNAUkfAAQkfAAjLgUg");
	this.shape_54.setTransform(29.6,82.7,0.358,0.358);

	this.instance_28 = new lib.Path_1_8();
	this.instance_28.setTransform(30.4,83.7,0.358,0.358,0,0,0,74,8.1);
	this.instance_28.alpha = 0.109;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAbjLAUQjMAUkgAAQkfAAjLgUg");
	this.shape_55.setTransform(29.6,86.6,0.358,0.358);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAXiWATQiUASjnAFQhQAChWAAQkfAAjLgUg");
	this.shape_56.setTransform(29.6,86.6,0.358,0.358);

	this.instance_29 = new lib.CompoundPath_7();
	this.instance_29.setTransform(26.3,90,0.358,0.358,0,0,0,68.8,7.8);
	this.instance_29.alpha = 0.41;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgaDMgVQDLgTEfAAQEgAADLATQDMAVAAAaQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_57.setTransform(25.4,89.3,0.358,0.358);

	this.instance_30 = new lib.Path_1_7();
	this.instance_30.setTransform(26.3,90.3,0.358,0.358,0,0,0,74,8.3);
	this.instance_30.alpha = 0.109;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E2B163").s().p("AnqBYQjMgTAAgdIAAiTIVtAAIAACTQAAAdjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_58.setTransform(25.4,93.2,0.358,0.358);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEC86D").s().p("AnqBYQjMgTAAgdIAAiTIVtAAIAACTQAAAYiWASQiVASjlAGQhIAChfAAQkeAAjMgUg");
	this.shape_59.setTransform(25.4,93.2,0.358,0.358);

	this.instance_31 = new lib.CompoundPath_6();
	this.instance_31.setTransform(31.5,97,0.358,0.358,0,0,0,68.5,8);
	this.instance_31.alpha = 0.41;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7BE42").s().p("AnqAwQjMgVAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAVAAAaQAAAbjMAVQjLATkgAAQkfAAjLgTg");
	this.shape_60.setTransform(30.7,96.6,0.358,0.358);

	this.instance_32 = new lib.Path_1_6();
	this.instance_32.setTransform(31.5,97.5,0.358,0.358,0,0,0,73.6,7.7);
	this.instance_32.alpha = 0.109;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAbjLAUQjNAUkfAAQkfAAjLgUg");
	this.shape_61.setTransform(30.7,100.4,0.358,0.358);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAXiWASQiUASjmAGIinACQkeAAjMgUg");
	this.shape_62.setTransform(30.7,100.4,0.358,0.358);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F7BE42").s().p("Am7AkQi4gPAAgVQAAgUC4gPQC4gPEDAAQEEAAC4APQC4APAAAUQAAAVi4APQi4APkEAAQkDAAi4gPg");
	this.shape_63.setTransform(37.9,102.6,0.358,0.358);

	this.instance_33 = new lib.CompoundPath_1_0();
	this.instance_33.setTransform(38.7,103.3,0.358,0.358,0,0,0,71.8,9.1);
	this.instance_33.alpha = 0.41;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEgAADLAUQDMAUAAAaQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_64.setTransform(37.9,102.9,0.358,0.358);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_65.setTransform(37.9,106.5,0.358,0.358);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAXiWATQiUATjmAFIinACQkfAAjLgUg");
	this.shape_66.setTransform(37.9,106.5,0.358,0.358);

	this.instance_34 = new lib.CompoundPath_2_0();
	this.instance_34.setTransform(34,110,0.358,0.358,0,0,0,68.3,8.3);
	this.instance_34.alpha = 0.41;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAcjMATQjLAUkgAAQkfAAjLgUg");
	this.shape_67.setTransform(33.1,109.3,0.358,0.358);

	this.instance_35 = new lib.Path_9();
	this.instance_35.setTransform(34,110.3,0.358,0.358,0,0,0,73.9,7.7);
	this.instance_35.alpha = 0.109;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjMAUkfAAQkeAAjMgUg");
	this.shape_68.setTransform(33.1,113.2,0.358,0.358);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiVASjlAGQhIAChfAAQkeAAjMgUg");
	this.shape_69.setTransform(33.1,113.2,0.358,0.358);

	this.instance_36 = new lib.CompoundPath_3_0();
	this.instance_36.setTransform(47.8,115.9,0.358,0.358,0,0,0,68.6,7.7);
	this.instance_36.alpha = 0.41;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDMgUEeAAQEgAADMAUQDLAUAAAaQAAAcjLATQjNAUkfAAQkeAAjMgUg");
	this.shape_70.setTransform(46.8,115.3,0.358,0.358);

	this.instance_37 = new lib.Path_13();
	this.instance_37.setTransform(47.8,116.2,0.358,0.358,0,0,0,73.8,8.3);
	this.instance_37.alpha = 0.109;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape_71.setTransform(46.8,119.2,0.358,0.358);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEC86D").s().p("AnrBYQjLgUAAgcIAAiTIVtAAIAACTQAAAXiWATQiUATjnAFIimACQkeAAjNgUg");
	this.shape_72.setTransform(46.8,119.2,0.358,0.358);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F7BE42").s().p("Am7AkQi4gPAAgVQAAgUC4gPQC4gPEDAAQEEAAC4APQC4APAAAUQAAAVi4APQi5APkDAAQkDAAi4gPg");
	this.shape_73.setTransform(35.5,121.7,0.358,0.358);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FEC86D").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADMATQDLAUAAAbQAAAbjLAUQjMAUkgAAQkfAAjLgUg");
	this.shape_74.setTransform(35.5,121.7,0.358,0.358);

	this.instance_38 = new lib.Path_18();
	this.instance_38.setTransform(36.3,122.8,0.358,0.358,0,0,0,73.8,8);
	this.instance_38.alpha = 0.109;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E2B163").s().p("AnqBYQjMgTAAgcIAAiUIVtAAIAACUQAAAcjMATQjMAUkfAAQkeAAjMgUg");
	this.shape_75.setTransform(35.5,125.6,0.358,0.358);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FEC86D").s().p("AnqBYQjMgTAAgcIAAiUIVtAAIAACUQAAAXiWASQiUASjnAGQhHAChfAAQkeAAjMgUg");
	this.shape_76.setTransform(35.5,125.6,0.358,0.358);

	this.instance_39 = new lib.CompoundPath_4_0();
	this.instance_39.setTransform(38.7,128.7,0.358,0.358,0,0,0,68.3,7.7);
	this.instance_39.alpha = 0.41;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADMAUQDMATAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_77.setTransform(37.9,128.1,0.358,0.358);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgUQDLgTEfAAQEgAADLATQDMAUAAAbQAAAbjMAUQjLAUkgAAQkfAAjLgUg");
	this.shape_78.setTransform(37.9,128.4,0.358,0.358);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E2B163").s().p("AnqBZQjMgVAAgcIAAiTIVtAAIAACTQAAAcjMAVQjLATkgAAQkfAAjLgTg");
	this.shape_79.setTransform(37.9,132,0.358,0.358);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FEC86D").s().p("AnqBZQjMgVAAgcIAAiTIVtAAIAACTQAAAZiWARQiUASjmAGQhIAChfAAQkfAAjLgTg");
	this.shape_80.setTransform(37.9,132,0.358,0.358);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E2B163").s().p("AgfErIAAhWQhIgEhCgcIAAhsQAlASAuANQAqANAjABQAagBANgGQANgHAAgPQAAgLgJgHQgKgJgWgJQgQgIgogPQgpgPgagRQgZgTgMgXQgMgZAAgjQABg1AigfQAjgeBFgHIAAhJIBCAAIAABIQBBAEBBAcIgnBdQhDgfg3AAQgYABgLAFQgLAHAAANQAAAJAIAIQAHAGATAKQAWAKAdAKQBDAYAfAdQAeAfgBAwQABA3gjAjQgjAihCAIIAABYg");
	this.shape_81.setTransform(36.9,7.4,0.358,0.358);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FBED9B").s().p("AkPEQQhxhxAAifQAAieBxhxQBxhxCeAAQCfAABxBxQBxBxAACeQAACfhxBxQhxBxifAAQieAAhxhxg");
	this.shape_82.setTransform(36.9,7,0.358,0.358);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E2B163").s().p("AkgEhQh4h4AAipQAAioB4h4QB4h4CoAAQCpAAB4B4QB4B4AACoQAACph4B4Qh4B4ipAAQioAAh4h4g");
	this.shape_83.setTransform(36.3,7,0.358,0.358);

	this.instance_40 = new lib.Path_3_1();
	this.instance_40.setTransform(33.7,13.3,0.358,0.358,0,0,0,54.4,45.8);
	this.instance_40.alpha = 0.109;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FBED9B").s().p("AmRGSQininAAjrQAAjqCninQCninDqAAQDrAACnCnQCnCngBDqQABDrinCnQinCnjrAAQjqAAiningAmCmCQihChAADhQAADjChCgQChChDhAAQDiAACiihQCgigAAjjQAAjhigihQihihjjAAQjhAAihChg");
	this.shape_84.setTransform(36.3,7,0.358,0.358);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7BE42").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");
	this.shape_85.setTransform(36.3,7,0.358,0.358);

	this.instance_41 = new lib.CompoundPath_5();
	this.instance_41.setTransform(116,84.6,0.358,0.358,0,0,0,68.9,7.3);
	this.instance_41.alpha = 0.41;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgaDMgVQDLgTEfAAQEgAADMATQDLAVAAAaQAAAbjLAUQjMAUkgAAQkfAAjLgUg");
	this.shape_86.setTransform(115.1,84.2,0.358,0.358);

	this.instance_42 = new lib.Path_1_5();
	this.instance_42.setTransform(116,84.9,0.358,0.358,0,0,0,74.2,7.4);
	this.instance_42.alpha = 0.109;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjNAUkfAAQkeAAjMgUg");
	this.shape_87.setTransform(115.1,88,0.358,0.358);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiUASjmAGIinACQkeAAjMgUg");
	this.shape_88.setTransform(115.1,88,0.358,0.358);

	this.instance_43 = new lib.CompoundPath_4();
	this.instance_43.setTransform(107.6,92.2,0.358,0.358,0,0,0,67.8,7.4);
	this.instance_43.alpha = 0.41;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgbDMgUQDLgTEfAAQEgAADMATQDLAVAAAaQAAAcjLATQjMAUkgAAQkfAAjLgUg");
	this.shape_89.setTransform(106.8,91.6,0.358,0.358);

	this.instance_44 = new lib.Path_1_4();
	this.instance_44.setTransform(107.6,92.6,0.358,0.358,0,0,0,73.4,8);
	this.instance_44.alpha = 0.109;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAbjLAUQjNAUkfAAQkeAAjMgUg");
	this.shape_90.setTransform(106.8,95.5,0.358,0.358);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAXiWASQiVASjlAGQhIAChfAAQkeAAjMgUg");
	this.shape_91.setTransform(106.8,95.5,0.358,0.358);

	this.instance_45 = new lib.CompoundPath_3();
	this.instance_45.setTransform(111.4,100.3,0.358,0.358,0,0,0,69,8.5);
	this.instance_45.alpha = 0.41;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgbDMgUQDLgTEfAAQEgAADMATQDLAUAAAbQAAAcjLATQjMAUkgAAQkfAAjLgUg");
	this.shape_92.setTransform(110.3,99.5,0.358,0.358);

	this.instance_46 = new lib.Path_1_3();
	this.instance_46.setTransform(111.4,100.3,0.358,0.358,0,0,0,74.3,7.3);
	this.instance_46.alpha = 0.109;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAbjLAUQjNAUkfAAQkeAAjMgUg");
	this.shape_93.setTransform(110.3,103.4,0.358,0.358);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgbIAAiUIVtAAIAACUQAAAXiWASQiUATjmAFQhIAChfAAQkeAAjMgUg");
	this.shape_94.setTransform(110.3,103.4,0.358,0.358);

	this.instance_47 = new lib.CompoundPath_2();
	this.instance_47.setTransform(117,106.5,0.358,0.358,0,0,0,68.2,7.3);
	this.instance_47.alpha = 0.41;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDLgUEfAAQEfAADNAUQDLAUAAAaQAAAcjLATQjNAUkfAAQkeAAjMgUg");
	this.shape_95.setTransform(116.1,106,0.358,0.358);

	this.instance_48 = new lib.Path_1_2();
	this.instance_48.setTransform(117,106.9,0.358,0.358,0,0,0,73.6,7.7);
	this.instance_48.alpha = 0.109;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjMAUQjMAUkfAAQkeAAjMgUg");
	this.shape_96.setTransform(116.1,109.9,0.358,0.358);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiXASQiTASjnAGIimACQkeAAjMgUg");
	this.shape_97.setTransform(116.1,109.9,0.358,0.358);

	this.instance_49 = new lib.CompoundPath_1();
	this.instance_49.setTransform(116,114.4,0.358,0.358,0,0,0,68.9,7.7);
	this.instance_49.alpha = 0.41;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADNAUQDLATAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape_98.setTransform(115.1,113.8,0.358,0.358);

	this.instance_50 = new lib.Path_1_1();
	this.instance_50.setTransform(116,114.9,0.358,0.358,0,0,0,74.2,8.3);
	this.instance_50.alpha = 0.109;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E2B163").s().p("AnqBYQjMgTAAgcIAAiUIVtAAIAACUQAAAcjLATQjMAUkgAAQkfAAjLgUg");
	this.shape_99.setTransform(115.1,117.7,0.358,0.358);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEC86D").s().p("AnqBYQjMgTAAgcIAAiUIVtAAIAACUQAAAXiWASQiUASjmAGQhIAChfAAQkfAAjLgUg");
	this.shape_100.setTransform(115.1,117.7,0.358,0.358);

	this.instance_51 = new lib.CompoundPath_0();
	this.instance_51.setTransform(113.6,122.2,0.358,0.358,0,0,0,69.3,7.7);
	this.instance_51.alpha = 0.41;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F7BE42").s().p("AnqAvQjMgUAAgbQAAgbDMgTQDMgUEeAAQEfAADNAUQDLATAAAbQAAAbjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape_101.setTransform(112.6,121.6,0.358,0.358);

	this.instance_52 = new lib.Path_1_0();
	this.instance_52.setTransform(113.6,122.5,0.358,0.358,0,0,0,73.6,7.5);
	this.instance_52.alpha = 0.109;

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjMAUkgAAQkfAAjLgUg");
	this.shape_102.setTransform(112.6,125.5,0.358,0.358);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAYiWASQiUASjmAGQhIAChfAAQkfAAjLgUg");
	this.shape_103.setTransform(112.6,125.5,0.358,0.358);

	this.instance_53 = new lib.CompoundPath();
	this.instance_53.setTransform(111.4,129.7,0.358,0.358,0,0,0,69,7.8);
	this.instance_53.alpha = 0.41;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F7BE42").s().p("AnqAvQjMgTAAgcQAAgaDMgUQDMgUEeAAQEgAADMAUQDLAUAAAaQAAAcjLATQjNAUkfAAQkeAAjMgUg");
	this.shape_104.setTransform(110.3,129.1,0.358,0.358);

	this.instance_54 = new lib.Path_1_19();
	this.instance_54.setTransform(111.4,130.1,0.358,0.358,0,0,0,74.3,8.1);
	this.instance_54.alpha = 0.109;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E2B163").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAcjLAUQjMAUkgAAQkeAAjMgUg");
	this.shape_105.setTransform(110.3,133,0.358,0.358);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FEC86D").s().p("AnqBYQjMgUAAgcIAAiTIVtAAIAACTQAAAXiXATQiTASjnAGIimACQkfAAjLgUg");
	this.shape_106.setTransform(110.3,133,0.358,0.358);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.instance_54},{t:this.shape_104},{t:this.instance_53},{t:this.shape_103},{t:this.shape_102},{t:this.instance_52},{t:this.shape_101},{t:this.instance_51},{t:this.shape_100},{t:this.shape_99},{t:this.instance_50},{t:this.shape_98},{t:this.instance_49},{t:this.shape_97},{t:this.shape_96},{t:this.instance_48},{t:this.shape_95},{t:this.instance_47},{t:this.shape_94},{t:this.shape_93},{t:this.instance_46},{t:this.shape_92},{t:this.instance_45},{t:this.shape_91},{t:this.shape_90},{t:this.instance_44},{t:this.shape_89},{t:this.instance_43},{t:this.shape_88},{t:this.shape_87},{t:this.instance_42},{t:this.shape_86},{t:this.instance_41},{t:this.shape_85},{t:this.shape_84},{t:this.instance_40},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_39},{t:this.shape_76},{t:this.shape_75},{t:this.instance_38},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_37},{t:this.shape_70},{t:this.instance_36},{t:this.shape_69},{t:this.shape_68},{t:this.instance_35},{t:this.shape_67},{t:this.instance_34},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_33},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_32},{t:this.shape_60},{t:this.instance_31},{t:this.shape_59},{t:this.shape_58},{t:this.instance_30},{t:this.shape_57},{t:this.instance_29},{t:this.shape_56},{t:this.shape_55},{t:this.instance_28},{t:this.shape_54},{t:this.instance_27},{t:this.shape_53},{t:this.shape_52},{t:this.instance_26},{t:this.shape_51},{t:this.instance_25},{t:this.shape_50},{t:this.shape_49},{t:this.instance_24},{t:this.shape_48},{t:this.instance_23},{t:this.shape_47},{t:this.shape_46},{t:this.instance_22},{t:this.shape_45},{t:this.instance_21},{t:this.shape_44},{t:this.shape_43},{t:this.instance_20},{t:this.shape_42},{t:this.instance_19},{t:this.shape_41},{t:this.shape_40},{t:this.instance_18},{t:this.shape_39},{t:this.instance_17},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_16},{t:this.shape_34},{t:this.shape_33},{t:this.instance_15},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_14},{t:this.shape_28},{t:this.instance_13},{t:this.shape_27},{t:this.shape_26},{t:this.instance_12},{t:this.shape_25},{t:this.instance_11},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_10},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_9},{t:this.shape_18},{t:this.instance_8},{t:this.shape_17},{t:this.shape_16},{t:this.instance_7},{t:this.shape_15},{t:this.instance_6},{t:this.shape_14},{t:this.shape_13},{t:this.instance_5},{t:this.shape_12},{t:this.instance_4},{t:this.shape_11},{t:this.shape_10},{t:this.instance_3},{t:this.shape_9},{t:this.instance_2},{t:this.shape_8},{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.9,-140,282,280.1);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgBAGQgGgDACgEQADgGAEACQAHADgDAEQgCAEgEAAIgBAAg");
	this.shape.setTransform(32.2,54.2,1.557,1.42,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AgBAGQgGgDADgEQADgHADAEQAGACgCAEQgCAEgDAAIgCAAg");
	this.shape_1.setTransform(35.1,52.4,1.557,1.42,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AhXhJQAWguAygrIArghIAVA8QiQBdBXBhQApAxBJAfIgoA9Qjih9BJiQg");
	this.shape_2.setTransform(41.8,29.3,1.557,1.42,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AgVAWIAegzIAOAGIggA1g");
	this.shape_3.setTransform(28.1,52.9,1.557,1.42,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDDBBB").s().p("AgJAeIgbgOIAcgwIAbAIQAaANgNAYQgJAUgTAAQgFAAgIgDg");
	this.shape_4.setTransform(24.3,54.3,1.557,1.42,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F423A").s().p("AgFAdQgIgJgEgPQgFgNADgNQACgMAIgCQAIgCAHAJQAIAJAEAPQAFAOgDAMQgCAMgIACIgEABQgGAAgFgIg");
	this.shape_5.setTransform(-29.3,-46.3,1.557,1.42,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F423A").s().p("AgFAdQgIgJgEgPQgFgNADgNQACgMAIgCQAIgCAHAJQAIAJAEAPQAFAOgDAMQgCAMgIACIgEABQgGAAgFgIg");
	this.shape_6.setTransform(5.1,-37.2,1.557,1.42,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F423A").s().p("AkZB5QhKj7CZgHQgBgdAXgnQAng+BUgdQA+gWA6AFQANABBGAPQAoAKAagNQAigQAmg8IARA2QAMBCgSA4Qg5C1lWAZIAKB2QgNgJgOgCQgdgEgCAiQgCAnAbgDQANgBAOgJIgTBSQgYBYgdAmQhIiCglh+g");
	this.shape_7.setTransform(8.5,-52.5,1.557,1.42,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#808080").s().p("AgEANQgGgCgDgGQgCgFADgFQACgFAGgDQAEgCAGACQAGADACAGQACAEgCAFQgDAGgGADIgFABIgEgCg");
	this.shape_8.setTransform(-21.4,37.8,1.557,1.42,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#808080").s().p("AgFAOQgGgDgCgGQgCgFACgEQADgHAGgBQAEgDAFADQAGACADAGQACAEgDAGQgCAFgGADIgFABIgFgBg");
	this.shape_9.setTransform(-22,28.9,1.557,1.42,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B35730").s().p("AgfA6IAHhjIgVgSIALgjIArgGIAVAXIgQAdIAgBUIghBBg");
	this.shape_10.setTransform(-19.7,8.8,1.557,1.42,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#808080").s().p("AgUA5IgFg0Ig6gIIgShZIDLC5g");
	this.shape_11.setTransform(-6,9.9,1.557,1.42,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AA0h5IASBcIgyAUIATBDIhsBAg");
	this.shape_12.setTransform(-32.9,5.8,1.557,1.42,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("Aiig/IFFg6Ih7Dzg");
	this.shape_13.setTransform(-15.5,5.8,1.557,1.42,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AisGfIhSgSIAei6QAAiCgbieQgWh+gghyICvgiIDLC6IB7j0IAvgIQAmCagBCeQgBB5gcDIIg+CYIAigUQAogNAfAlQAnAwhSgIIhbgRIAji0IgEhyQgdAHg5AFQhwALiIgLIgdBqIgzCSIApgPQAugGAZAwQAMAagoAAQgOAAgTgDg");
	this.shape_14.setTransform(-10.5,46.7,1.557,1.42,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDDBBB").s().p("AkVAlQAJj4CvgzQDehCBhD9QAxB9ADCMIoQBXQgfhzAEh9g");
	this.shape_15.setTransform(-4.3,-36.2,1.557,1.42,0,0,180);

	this.instance = new lib.Path_2_2();
	this.instance.setTransform(-16.7,105.7,1.557,1.42,0,0,180,39.5,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-106.1,116.7,212.3);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#415168").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQADAAAEADQADADAAADQAAAEgDADQgEADgDAAQgDAAgDgDg");
	this.shape.setTransform(0,-8.5,0.126,0.126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E2E2").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(0,-8.5,0.126,0.126);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0C2C4").s().p("A0DAPQgmAAgggPIgYgOMArDAAAQgIAIgQAGQgfAPgmAAg");
	this.shape_2.setTransform(0,8.8,0.126,0.126);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AhBAaIAAgzICDAAIAAAzg");
	this.shape_3.setTransform(-16.6,8.3,0.126,0.126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4F4F4").s().p("AhBAaIAAgzICDAAIAAAzg");
	this.shape_4.setTransform(16.6,8.3,0.126,0.126);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E5DA").s().p("A1iAaIAAgzMArFAAAIAAAzg");
	this.shape_5.setTransform(0,8.3,0.126,0.126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FC9062").s().p("Av8JiQgJAAgGgGQgFgGgBgHIAAycQABgJAFgGQAGgFAJAAIf6AAQAIAAAGAFQAFAGABAJIAAScQgBAIgFAFQgGAGgIAAg");
	this.shape_6.setTransform(0,-0.3,0.126,0.126);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.4,0.3,0.126,0.126,0,0,0,118.7,73.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#113754").s().p("AxaKgIAA0AIAFgfQAOggAuAAMAgyAAAQAuAAAPAgQAHAPgCAQIAAUAg");
	this.shape_7.setTransform(0,-0.4,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-9,34.9,18);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg+fA+gMAAAh8/MB8/AAAMAAAB8/g");
	mask_1.setTransform(400,400);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD708").s().p("AiADCQgVAAgPgOQgPgPAAgVIAsilIAAh6QAAgWANgOQANgOASAAIC2AAQATAAANAOQANAOgBAWIAAB6IAsClQAAAVgOAPQgPAOgUAAg");
	this.shape.setTransform(133.3,345.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAeQgJgBgEgFQgFgGACgIIAFgTQACgIAHgFQAHgHAIAAIBOAAQAIAAAFAHQAFAFgCAIIgFATQgCAIgHAGQgHAFgIABg");
	this.shape_1.setTransform(89.5,362.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAeQgJgBgEgFQgFgGACgIIAFgTQACgIAHgFQAHgHAIAAIBOAAQAIAAAFAHQAFAFgCAIIgFATQgCAIgHAGQgHAFgIABg");
	this.shape_2.setTransform(73.3,362.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtAeQgJgBgEgFQgFgGACgIIAFgTQACgIAHgFQAHgHAIAAIBOAAQAIAAAFAHQAFAFgCAIIgFATQgCAIgHAGQgHAFgIABg");
	this.shape_3.setTransform(57.5,362.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguAeQgIAAgEgHQgFgFACgIIAFgTQACgIAHgGQAHgFAIgBIBOAAQAJABAEAFQAFAGgCAIIgFATQgCAIgHAFQgHAHgJAAg");
	this.shape_4.setTransform(91.9,351.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguAeQgIAAgEgHQgFgFACgIIAFgTQACgIAHgGQAHgFAIgBIBOAAQAJABAEAFQAFAGgCAIIgFATQgCAIgHAFQgHAHgJAAg");
	this.shape_5.setTransform(75.7,351.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAeQgIAAgEgHQgFgFACgIIAFgTQACgIAHgGQAHgFAIgBIBOAAQAJABAEAFQAFAGgCAIIgFATQgCAIgHAFQgHAHgJAAg");
	this.shape_6.setTransform(59.9,351.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAeQgJAAgFgHQgEgFACgIIAFgTQACgIAHgGQAHgFAIgBIBPAAQAIABAEAFQAFAGgCAIIgFATQgCAIgHAFQgIAHgIAAg");
	this.shape_7.setTransform(94.3,341.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguAeQgIAAgEgHQgFgFACgIIAFgTQACgIAHgGQAHgFAJgBIBNAAQAJABAFAFQAEAGgCAIIgFATQgCAIgHAFQgIAHgHAAg");
	this.shape_8.setTransform(78.1,341.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAeQgIAAgEgHQgFgFACgIIAFgTQACgIAHgGQAHgFAJgBIBNAAQAJABAFAFQAEAGgCAIIgFATQgCAIgHAFQgIAHgHAAg");
	this.shape_9.setTransform(62.3,341.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAD708").s().p("ApcA2QgUAAgPgPQgOgOAAgVIAAg5IUbAAIAAA5QAAAVgOAOQgPAPgUAAg");
	this.shape_10.setTransform(107.1,377.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E84423").s().p("AqNDGIBklmQAFgRANgKQANgKARAAIPzAAQARAAANAKQAOALAEAQIBkFmg");
	this.shape_11.setTransform(107.1,352.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1DE00").s().p("AsIArIAAhVIYRAAIAABVg");
	this.shape_12.setTransform(670.6,128.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E84423").s().p("AhGD6IAAnzICNAAIAAHzg");
	this.shape_13.setTransform(670.6,25.1);

	this.instance = new lib.Path_2();
	this.instance.setTransform(481,133);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E84423").s().p("As9GfQAAipBBiaQA/iTBzhzQBzhzCVg/QCahCCoAAQCoAACaBCQCVA/BzBzQBzBzA/CTQBCCaAACpg");
	this.shape_14.setTransform(670.6,82.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_15.setTransform(547.4,295.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_16.setTransform(540.2,284.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_17.setTransform(546.1,289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_18.setTransform(538,295);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_19.setTransform(520.4,295);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_20.setTransform(527.8,293.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_21.setTransform(534.5,289.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_22.setTransform(530,284.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#909939").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_23.setTransform(521,287.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AFBF47").s().p("AiHBRQgUAAgPgPQgPgPAAgUIAAg9QAAgUAPgPQAPgPAUAAIEPAAQAUAAAPAPQAPAPAAAUIAAA9QAAAUgPAPQgPAPgUAAg");
	this.shape_24.setTransform(534.5,289.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiqAYIAAgvIEqAAIArAXIAAAYg");
	this.shape_25.setTransform(463.9,295.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAzIgIgCIABgMIAGACQAEAAADgBIAEgEQACgBADgHIABgDIgUhJIAOABIALAsIADAPIAEgOIAUgoIANABIgjBEIgHAQQgEAGgFACQgDACgFAAIgCAAg");
	this.shape_26.setTransform(497.2,205.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASAlIgBgJQgIAFgHACQgEABgHgBQgMgBgGgGQgGgHABgJQABgFADgEQADgDAEgCQAEgCAFgBIALAAQANgBAIgBIAAgDQABgIgDgDQgFgFgJgBQgGgBgFADQgFADgCAHIgMgDQADgIAEgEQAEgEAHgCQAIgCAHABQAJABAFADQAGADACAEQADADAAAFIAAALIgCAPIgBAWQAAAEACAEgAAAADIgLABQgDABgCADQgCACgBADQAAAFADAEQAEADAHABQAFABAFgCQAGgDAEgFQACgEABgIIABgEIgTACg");
	this.shape_27.setTransform(493.1,203.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAxIABgJQgIAKgLgCQgJgBgGgFQgHgGgDgJQgDgJABgLQABgJAFgIQAEgIAIgEQAIgEAHABQAGAAAFAEQAFADACAFIAEgkIAMABIgKBigAgNgKQgGAGgBANQgCAOAFAHQAFAHAIABQAGABAGgGQAHgGABgNQACgOgFgHQgFgHgIgBIgBAAQgGAAgGAFg");
	this.shape_28.setTransform(493.2,202.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAlQgOgBgJgLQgIgLABgQQACgUANgJQAKgHALACQAQABAIALQAJALgCAPQgCAOgFAIQgFAIgJADQgGACgHAAIgDAAgAgMgVQgHAHgBAOQgCAMAGAHQAGAHAIABQAHABAHgGQAHgGABgOQACgMgFgIQgGgHgJgBIgCAAQgGAAgGAFg");
	this.shape_29.setTransform(485.4,202.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AACAxQgFgBgEgCIgEgGQgBgEABgLIAEgoIgJAAIABgKIAJABIACgSIALgGIgDAZIANACIgBAJIgNgBIgDAoQAAAFAAACIABACIAEACIAFAAIABALIgFAAIgEAAg");
	this.shape_30.setTransform(479.8,201.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAcgTIgjAwIgUg5");
	this.shape_31.setTransform(484.5,227.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAPhkIgdDJ");
	this.shape_32.setTransform(485.3,220.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E84423").s().p("AgTA0QgWgIgKgWQgJgVAJgUQAIgWAWgJQAVgKAUAJQAWAJAJAVQAKAVgJAVQgIAVgWAKQgLAEgLAAQgJAAgKgEg");
	this.shape_33.setTransform(652.9,237);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CFD1D3").s().p("AgagsIBZAkIh9A1g");
	this.shape_34.setTransform(658.3,272.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AkfBoICKlaIG1CuIhmEAIhbgkIgkBbg");
	this.shape_35.setTransform(646,252.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FAD708").s().p("AgZAxQgVgLgHgWQgGgVALgUQALgVAWgHQAVgGAUAKQAVALAHAXQAHAUgMAVQgLAVgWAHQgJACgHAAQgMAAgNgHg");
	this.shape_36.setTransform(539.7,223.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CFD1D3").s().p("AgtgfIBbgcIg/B3g");
	this.shape_37.setTransform(565.7,249);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AkJhuIHDiIIBQEHIheAdIAcBdIllBsg");
	this.shape_38.setTransform(543.7,241.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#96D2C7").s().p("AgKA3QgWgEgOgUQgMgTAEgVQAEgXAUgOQATgNAWAFQAXAFANATQANATgFAWQgFAXgTANQgOAJgRAAIgKgBg");
	this.shape_39.setTransform(479.9,243.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CFD1D3").s().p("AglguIBeASIhxBMg");
	this.shape_40.setTransform(491.9,278.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("AkLCTIBJluIHOBcIg2EOIhggTIgTBgg");
	this.shape_41.setTransform(476.2,261.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9B7D54").s().p("A0zIdIAAw5MApoAAAIAAQ5g");
	this.shape_42.setTransform(574,243.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#665A48").s().p("A2NKGIAA0LMAsbAAAIAAULg");
	this.shape_43.setTransform(574,243.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CFD1D3").s().p("AgVgPIAGgGIAlAlIgGAGg");
	this.shape_44.setTransform(689.8,383.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CFD1D3").s().p("AgVAQIAlglIAGAGIglAlg");
	this.shape_45.setTransform(689.8,383.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#444444").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_46.setTransform(689.8,383.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#606264").s().p("AgmAmQgQgQAAgWQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAWgQAQQgRARgWAAQgWAAgQgRg");
	this.shape_47.setTransform(689.8,383.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#444444").s().p("ACFC/QgHgGAAgJIAAjbIgrAAQgJABgGgHQgGgFgBgJQgCgWgIgXQgRgsgiAAQghAAgRAsQgIAXgCAWQAAAJgHAFQgGAHgJgBIgrAAIAADbQAAAJgHAGQgGAHgKAAQgJAAgGgHQgHgGAAgJIAAjwQAAgKAHgGQAGgHAJAAIAuAAQAIgsAWgdQAcglAsAAQAsAAAdAlQAWAdAIAsIAtAAQAKAAAGAHQAHAGAAAKIAADwQAAAJgHAGQgGAHgKAAQgJAAgGgHg");
	this.shape_48.setTransform(689.8,395.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E84423").s().p("AqVBWQADhHAxgwQAagZAhgOQAhgNAiAAIPHAAQAiAAAhANQAhAOAaAZQAxAxADBGgAB2gbQgMAMAAAPQAAAQAMAMQAMAMARAAQAQAAAMgMQAMgMAAgQQAAgPgMgMQgMgMgQAAQgRAAgMAMgAiugbQgMAMAAAPQAAAQAMAMQAMAMAQAAQARAAAMgMQALgMAAgQQAAgPgLgMQgMgMgRAAQgQAAgMAMg");
	this.shape_49.setTransform(689.8,413.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("AC9ASQgOgXglgEQgGgBg4AAQgMAAgTgCIgggCQgLgBgLAHIgXANIgNAJQgEACgJgDQgHgCgMgKQgLgHgJgCQgIgBgSgBQgRgBgJgCQgYgGgPAEQgPADgTAPQgMAKgFAAQgEAAgPgIIgRgJQgKgFgJAAQgVADgdAZIgNgTQgJgKgIgCQgGgCgJABIgOACQgVACggAAIg2gBIgUgCQgNgCgHABQgFAAgXAOQgWAQABACQgFgGgbgOQgegSAAAJIAAgtIUrAAIAAAsQgWgDgOAHIgVAKIgVANQgZgZgYgBIhKAAQgkgCgQABQgdABgWAIQgTAFgfAQQgVAOgJAAIAAgWQgdAHgrAmQgFgUgMgSgApXATIAAAAIAAAAg");
	this.shape_50.setTransform(689.8,427.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CFD1D3").s().p("AlkALIAAgVILJAAIAAAVg");
	this.shape_51.setTransform(689,515.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CFD1D3").s().p("AlkALIAAgVILJAAIAAAVg");
	this.shape_52.setTransform(689,508.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CFD1D3").s().p("AlkALIAAgVILJAAIAAAVg");
	this.shape_53.setTransform(689,500.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CFD1D3").s().p("AlkALIAAgVILJAAIAAAVg");
	this.shape_54.setTransform(689,493.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CFD1D3").s().p("AlkALIAAgVILJAAIAAAVg");
	this.shape_55.setTransform(689,486.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CFD1D3").s().p("AiJALIAAgUIETAAIAAAUg");
	this.shape_56.setTransform(689,478.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CFD1D3").s().p("AlpAKIAAgTILTAAIAAATg");
	this.shape_57.setTransform(689,470.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#444444").s().p("AgwBXQgSgTgBgaQAAgVALgNQAKgMATgEQgQgHgHgKQgIgLAAgPQAAgWAQgQQAQgPAaAAQAaAAAQAQQARAPAAAXQAAAPgIAKQgHAKgPAHQASAFAKAMQALAOgBATQABAagUATQgSASgeAAQgdAAgTgSgAgdAMQgMAMAAASQABAKAFALQAFAJAKAHQAKAEAKAAQASAAAMgLQALgMAAgRQAAgTgLgMQgNgLgRgBQgRAAgMAMgAgXhJQgJAIAAANQAAAPAJAKQAKAIANABQAOgBAJgIQAKgKAAgNQAAgOgKgJQgJgKgOAAQgNAAgKAKg");
	this.shape_58.setTransform(735,441.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#444444").s().p("AAbAyIgNgWIgKgNIgFgHIgGgCIgHgBIgPAAIAAAtIgOAAIAAhiIArAAQANAAAHACQAHADAEAHQAEAGAAAJQAAAKgHAIQgGAFgPACIAIAFQAGAFAFAIIASAcgAgdgFIAcAAQAHAAAFgCQAFgBADgEQADgFAAgEQAAgIgFgEQgGgFgLABIgdAAg");
	this.shape_59.setTransform(692.1,447);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#444444").s().p("AgkAyIAAhiIBHAAIAAALIg6AAIAAAfIA2AAIAAAKIg2AAIAAAhIA8AAIAAANg");
	this.shape_60.setTransform(682.1,447);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#444444").s().p("AgkAyIAAhiIAkAAQALAAAHADQAGACAEAHQAEAGAAAHQAAAGgDAGQgEAGgHADQAJACAFAGQAFAGAAAIQAAAHgDAHQgDAFgEAEQgFADgGACQgHACgJAAgAgXAlIAXAAIAJAAQAEAAADgDQADgCACgDQACgEAAgFQAAgFgCgFQgDgEgFgBQgFgCgIAAIgXAAgAgXgHIAVAAQAHABAEgCQAFgCADgDQACgDAAgFQAAgGgCgDQgDgEgEgBQgEgCgJAAIgUAAg");
	this.shape_61.setTransform(672.7,447);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#444444").s().p("AgYAtQgLgHgGgMQgFgMAAgNQAAgXANgOQANgOAUAAQANAAAMAGQALAHAGAMQAFAMAAANQAAAPgGAMQgGAMgLAGQgMAGgMAAQgNAAgLgGgAgXgdQgKAKAAAUQAAASAKALQAKAKANAAQAOAAAKgKQAKgLAAgTQAAgLgEgJQgFgJgIgFQgIgFgJAAQgNAAgKAKg");
	this.shape_62.setTransform(662.5,446.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#444444").s().p("AgFAyIAAhXIghAAIAAgLIBNAAIAAALIghAAIAABXg");
	this.shape_63.setTransform(654.1,447);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#444444").s().p("AgWAtQgKgHgFgMQgGgNAAgNQAAgPAGgLQAGgMALgGQALgGAMAAQAPAAAKAHQAKAIAEAOIgNADQgDgLgHgFQgHgFgKAAQgJAAgIAGQgIAFgDAKQgDAJAAAJQAAAMAEAJQADAKAIAEQAIAFAHAAQALAAAIgGQAIgHADgMIANADQgEAQgLAJQgLAIgQAAQgOAAgKgGg");
	this.shape_64.setTransform(648,446.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#444444").s().p("AgYAtQgLgHgGgMQgFgMAAgNQAAgXANgOQANgOAUAAQANAAAMAGQALAHAGAMQAFAMAAANQAAAPgGAMQgGAMgLAGQgMAGgMAAQgNAAgLgGgAgXgdQgKAKAAAUQAAASAKALQAKAKANAAQAOAAAKgKQAKgLAAgTQAAgLgEgJQgFgJgIgFQgIgFgJAAQgNAAgKAKg");
	this.shape_65.setTransform(637.4,446.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#444444").s().p("AgVApQgJgHgBgMIANgCQABAJAGAFQAEAFAHAAQAIAAAGgHQAFgGAAgLQAAgKgFgFQgGgFgIgBQgFABgFADQgFACgDACIgKgCIAJgvIAuAAIAAALIgkAAIgGAaQAJgGAHAAQANAAAKAJQAIAHAAAOQAAANgHAKQgKAMgPAAQgMAAgJgIg");
	this.shape_66.setTransform(657.6,435.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("AAGAxIAAhLIgKAIIgNAHIAAgMQAKgFAHgHQAGgGAEgHIAHAAIAABhg");
	this.shape_67.setTransform(649.5,435.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#444444").s().p("AgVAoQgJgMgBgcQAAgQAFgLQADgKAHgGQAHgFAJAAQAHAAAGADQAHADADAGQAEAGACAJQACAIAAANQABARgEAKQgEALgGAGQgIAGgKAAQgMgBgJgJgAgMggQgGAJAAAXQAAAYAFAIQAHAIAGAAQAIAAAFgIQAHgJgBgXQABgXgHgHQgFgIgIAAQgHAAgFAGg");
	this.shape_68.setTransform(642.4,435.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#444444").s().p("AgfAxQAAgFACgEQACgGAGgHQAFgGAKgJQAOgMAGgGQAGgIgBgHQAAgHgEgFQgGgFgIAAQgGAAgGAFQgFAGAAAJIgMgBQABgOAIgHQAIgIAMAAQAOAAAJAIQAIAIAAAMQAAAFgCAGQgDAGgFAEIgTARIgMANIgFAGIAuAAIAAAMg");
	this.shape_69.setTransform(635.6,435.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E9E9E9").s().p("AjJChIAAlCIGTAAIAAFCg");
	this.shape_70.setTransform(735.7,442.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CFD1D3").s().p("AqVChIAAlCIUrAAIAAFCg");
	this.shape_71.setTransform(689.8,442.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEFEFE").s().p("AqVI1IAAxpIUrAAIAARpg");
	this.shape_72.setTransform(689.8,478.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAD708").s().p("AgXAYQgLgKAAgOQAAgNALgKQAKgLANAAQAOAAALALQAKAKAAANQAAAOgKAKQgLALgOAAQgMAAgLgLg");
	this.shape_73.setTransform(171.9,144.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#444444").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_74.setTransform(174.9,120.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAD708").s().p("Ag7AbIAAg1IB3AAIAAA1g");
	this.shape_75.setTransform(162.6,119.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5B5D5F").s().p("AgzAiQgKAAgHgIQgHgGAAgLIAAgRQAAgLAHgHQAHgHAKAAIBnAAQAKAAAHAHQAHAHAAALIAAARQAAALgHAGQgGAIgLAAg");
	this.shape_76.setTransform(237.5,131.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#444444").s().p("AhIArQgKAAgHgHQgHgIAAgKIAAgkQAAgKAHgHQAHgHAKAAICRAAQAKAAAHAHQAHAHAAAKIAAAkQAAAKgHAIQgIAHgJAAg");
	this.shape_77.setTransform(237.5,131.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E9E9E9").s().p("AgPAPQgGgGAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_78.setTransform(203.4,150.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E9E9E9").s().p("AgXAYQgLgKAAgOQAAgNALgKQAKgLANABQAOgBAKALQALAKAAANQAAAOgLAKQgKALgOAAQgNAAgKgLg");
	this.shape_79.setTransform(196.8,150.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#444444").s().p("Ag+A+QgZgaAAgkQAAgjAZgaQAbgaAjAAQAlAAAZAaQAaAaAAAjQAAAkgaAaQgZAaglAAQgjAAgbgag");
	this.shape_80.setTransform(199.3,153.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5B5D5F").s().p("AhTBUQgigjgBgxQABgvAigkQAkgiAvgBQAxABAjAiQAjAkAAAvQAAAxgjAjQgjAjgxAAQgvAAgkgjg");
	this.shape_81.setTransform(199.3,154);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#606264").s().p("AhmBnQgqgrgBg8QABg7AqgrQArgrA7AAQA8AAArArQArArAAA7QAAA8grArQgrAqg8ABQg7gBgrgqg");
	this.shape_82.setTransform(199.3,154);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5B5D5F").s().p("AiBCCQg2g2AAhMQAAhLA2g2QA2g2BLAAQBMAAA2A2QA2A2AABLQAABMg2A2Qg2A2hMAAQhLAAg2g2g");
	this.shape_83.setTransform(199.3,154);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#444444").s().p("AiVCWQg/g+AAhYQAAhXA/g+QA+g/BXAAQBYAAA+A/QA/A+AABXQAABYg/A+Qg+A/hYAAQhXAAg+g/g");
	this.shape_84.setTransform(199.3,154);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FEFEFE").s().p("AipDRQhHhHAAhkIkwAAIAAkAQAAgYASgSQASgTAZABIPHAAQAZgBASATQASASAAAYIAAEAIkwAAQAABkhHBHQhHBHhjAAQhjAAhGhHg");
	this.shape_85.setTransform(199.3,150.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E84423").s().p("AnjCfQgZAAgSgSQgSgSAAgZIAAkAIEwAAQAABkBHBFQBGBHBjAAQBjAABHhHQBHhFAAhkIEwAAIAAEAQAAAZgSASQgSASgZAAg");
	this.shape_86.setTransform(199.3,169.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F1DE00").s().p("AmDApQgIAAgGgGQgGgGAAgIIAAgpQAAgIAGgGQAFgGAJAAIMHAAQAJAAAFAGQAGAGAAAIIAAApQAAAIgGAGQgGAGgIAAg");
	this.shape_87.setTransform(76.7,551.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#444444").s().p("AlQHQIAAueIKhAAIAAOegACDGOICOAAIAAh1IiOAAgAhFGOICLAAIAAh1IiLAAgAkRGOICOAAIAAh1IiOAAgACDDkICOAAIAAh1IiOAAgAhFDkICLAAIAAh1IiLAAgAkRDkICOAAIAAh1IiOAAgACDA6ICOAAIAAhzIiOAAgAhFA6ICLAAIAAhzIiLAAgAkRA6ICOAAIAAhzIiOAAgACDhuICOAAIAAh1IiOAAgAhFhuICLAAIAAh1IiLAAgAkRhuICOAAIAAh1IiOAAgACDkYICOAAIAAh1IiOAAgAhFkYICLAAIAAh1IiLAAgAkRkYICOAAIAAh1IiOAAg");
	this.shape_88.setTransform(76.8,602.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#444444").s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgWAcAAQAdAAAVAWQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUg");
	this.shape_89.setTransform(112.5,166.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FEFEFE").s().p("AhBBDQgdgcAAgnQAAgmAdgbQAbgcAmAAQAmAAAcAcQAdAbAAAmQAAAngdAcQgcAcgmAAQgmAAgbgcg");
	this.shape_90.setTransform(112.5,166.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FEFEFE").s().p("AiKFnIAArNIEVAAIAALNg");
	this.shape_91.setTransform(112.5,113.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#96D2C7").s().p("AjgJ6IAAzzIHBAAIAATzg");
	this.shape_92.setTransform(112.5,122.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_93.setTransform(125.7,61.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_94.setTransform(123.5,60.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_95.setTransform(121.3,61.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIAUAAIAABzg");
	this.shape_96.setTransform(119.1,60.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAVAAIAABig");
	this.shape_97.setTransform(116.9,61.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_98.setTransform(114.7,60.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_99.setTransform(112.5,61.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_100.setTransform(110.3,60.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_101.setTransform(108.1,61.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_102.setTransform(105.9,60.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAUAAIAABig");
	this.shape_103.setTransform(103.7,61.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_104.setTransform(101.5,60.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAVAAIAABig");
	this.shape_105.setTransform(99.3,61.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_106.setTransform(127.9,60.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_107.setTransform(97.1,60.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#444444").s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgWAcAAQAdAAAVAWQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUg");
	this.shape_108.setTransform(67.5,166.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FEFEFE").s().p("AhBBDQgdgcAAgnQAAgmAdgbQAbgcAmAAQAmAAAcAcQAdAbAAAmQAAAngdAcQgcAcgmAAQgmAAgbgcg");
	this.shape_109.setTransform(67.5,166.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FEFEFE").s().p("AiKFnIAArNIEVAAIAALNg");
	this.shape_110.setTransform(67.5,113.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E84423").s().p("AjgJ6IAAzzIHBAAIAATzg");
	this.shape_111.setTransform(67.5,122.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_112.setTransform(80.7,61.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_113.setTransform(78.5,60.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_114.setTransform(76.3,61.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIAUAAIAABzg");
	this.shape_115.setTransform(74.1,60.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAVAAIAABig");
	this.shape_116.setTransform(71.9,61.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_117.setTransform(69.7,60.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_118.setTransform(67.5,61.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_119.setTransform(65.3,60.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_120.setTransform(63.1,61.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_121.setTransform(60.9,60.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAUAAIAABig");
	this.shape_122.setTransform(58.7,61.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_123.setTransform(56.5,60.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAVAAIAABig");
	this.shape_124.setTransform(54.3,61.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_125.setTransform(82.9,60.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_126.setTransform(52.1,60.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#444444").s().p("AgxAyQgUgVAAgdQAAgcAUgUQAVgWAcAAQAdAAAVAWQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgVgUg");
	this.shape_127.setTransform(22.5,166.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FEFEFE").s().p("AhBBDQgdgcAAgnQAAgmAdgbQAbgcAmAAQAmAAAcAcQAdAbAAAmQAAAngdAcQgcAcgmAAQgmAAgbgcg");
	this.shape_128.setTransform(22.5,166.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FEFEFE").s().p("AiKFnIAArNIEVAAIAALNg");
	this.shape_129.setTransform(22.5,113.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F1DE00").s().p("AjgJ6IAAzzIHBAAIAATzg");
	this.shape_130.setTransform(22.5,122.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_131.setTransform(35.7,61.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_132.setTransform(33.5,60.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAUAAIAABig");
	this.shape_133.setTransform(31.3,61.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_134.setTransform(29.1,60.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAVAAIAABig");
	this.shape_135.setTransform(26.9,61.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_136.setTransform(24.7,60.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_137.setTransform(22.5,61.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_138.setTransform(20.3,60.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEFEFE").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_139.setTransform(18.1,61.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_140.setTransform(15.9,60.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAUAAIAABig");
	this.shape_141.setTransform(13.7,61.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_142.setTransform(11.5,60.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FEFEFE").s().p("AgKAxIAAhiIAVAAIAABig");
	this.shape_143.setTransform(9.3,61.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FEFEFE").s().p("AgKA6IAAhzIAVAAIAABzg");
	this.shape_144.setTransform(37.9,60.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FEFEFE").s().p("AgJA6IAAhzIATAAIAABzg");
	this.shape_145.setTransform(7.1,60.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#444444").s().p("Aj5BGQhngeAAgoQAAgnBngeQBogdCRAAQCSAABoAdQBnAeAAAnQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_146.setTransform(400,934.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#444444").s().p("Aj5BGQhngeAAgoQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_147.setTransform(400,924.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#444444").s().p("Aj5BGQhngdAAgpQAAgnBngeQBogdCRAAQCSAABoAdQBnAeAAAnQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_148.setTransform(400,914.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#444444").s().p("Aj5BGQhngdAAgpQAAgnBngeQBogdCRAAQCSAABoAdQBnAeAAAnQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_149.setTransform(400,904.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#444444").s().p("Aj5BGQhngeAAgoQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_150.setTransform(400,894.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#444444").s().p("Aj5BGQhngdAAgpQAAgnBngeQBogdCRAAQCSAABoAdQBnAeAAAnQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_151.setTransform(400,884.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#444444").s().p("Aj5BGQhngeAAgoQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_152.setTransform(400,874.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#444444").s().p("Aj5BGQhngdAAgpQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_153.setTransform(400,864.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#444444").s().p("Aj5BGQhngeAAgoQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_154.setTransform(400,854.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#444444").s().p("Aj5BGQhngdAAgpQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_155.setTransform(400,844.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#444444").s().p("Aj5BGQhngeAAgoQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_156.setTransform(400,834.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FAD708").s().p("Aj5BGQhngeAAgoQAAgoBngdQBogdCRAAQCSAABoAdQBnAdAAAoQAAAphnAdQhoAdiSAAQiRAAhogdg");
	this.shape_157.setTransform(400,824.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#444444").s().p("Ai5LMQhWg7hDhrQiMjkAAlCQAAlBCMjjQCNjkDFgBQDGABCNDkQCMDjAAFBQAAFCiMDkQiNDjjGAAQhgABhZg+g");
	this.shape_158.setTransform(400,753.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FAD708").s().p("AC6NqIi6gZQhWARhjAIQjFARg1gqQhfhLg6i7QgzijgRjkQgPjIAPjKQANjAAihuQBAjQCRhTQCIhPEIAAQEJAACIBPQCRBTBADQQAiBuANDAQAPDKgPDIQgmH9i3CQQgmAehxAAQgsAAg3gFg");
	this.shape_159.setTransform(400,722.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#444444").s().p("ADJODIjJgaQhdARhrAJQjVARg6grQhnhNg/jAQg3iogSjqQgQjOAPjQQAPjGAlhxQBFjVCdhWQCThREeAAQEfAACTBRQCdBWBFDVQAlBxAPDGQAPDQgQDOQgSDqg3CoQg/DAhnBNQgpAfh4AAQgxAAg9gFg");
	this.shape_160.setTransform(400,711.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#444444").s().p("AAMIPQh8oTgcivQgShtgJiDIgGhsIChAAIAGBsQAHCDASBtQASBtBGE0IBDEhg");
	this.shape_161.setTransform(236.5,815.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#606264").s().p("AgeIPQh/oTgcivQgRhtgKiDIgGhsID6AAIAGBsQAJCDASBtQAcCvB+ITg");
	this.shape_162.setTransform(215.9,815.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FAD708").s().p("AjtBXQgSAAgNgMQgMgOAAgRIAAhWQAAgSAMgNQAOgNARAAIHaAAQATAAANANQANANgBASIAABWQABARgNAOQgNAMgTAAg");
	this.shape_163.setTransform(214.1,753.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#444444").s().p("AitIPQB/oTAcivQARhtAIiDIAGhsIChAAIgGBsQgKCDgRBtQgcCvh9ITg");
	this.shape_164.setTransform(563.5,815.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#606264").s().p("AjaIPQB+oTAdivQARhtAKiDIAFhsID6AAIgGBsQgJCDgSBtQgcCvh/ITg");
	this.shape_165.setTransform(584.1,815.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FAD708").s().p("AjtBXQgSAAgMgMQgNgOgBgRIAAhWQABgSANgNQAMgNASAAIHbAAQARAAANANQANANABASIAABWQgBARgNAOQgMAMgSAAg");
	this.shape_166.setTransform(585.9,753.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#606264").s().p("AwBfuQiZp3iArLQj/2VCBmgQCWnoFVjEQE/i5JuAAQJvAAE/C5QFVDECWHoQCBGgj/WVQiALLiZJ3g");
	this.shape_167.setTransform(400,774.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FAD708").s().p("AwBfvQiZp4iArLQj/2UCBmhQCWnoFVjEQE/i5JuAAQJvAAE/C5QFVDECWHoQCBGhj/WUQiALLiZJ4g");
	this.shape_168.setTransform(400,749.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9B7D54").s().p("AzUBFIAAiJMAmpAAAIAACJg");
	this.shape_169.setTransform(123.7,206.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#665A48").s().p("A0iBFIAAiJMApEAAAIAACJg");
	this.shape_170.setTransform(131.5,192.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#665A48").s().p("AiDPpIAA/RIEHAAIAAfRg");
	this.shape_171.setTransform(716.7,777.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#665A48").s().p("AiDPpIAA/RIEHAAIAAfRg");
	this.shape_172.setTransform(83.8,777.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#665A48").s().p("Eg+fACPIAAkcMB8/AAAIAAEcg");
	this.shape_173.setTransform(400,663.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FEFEFE").s().p("AtqBIIAAiPIbVAAIAACPg");
	this.shape_174.setTransform(552,719.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#9B7D54").s().p("A3pGnIAAtNMAvTAAAIAANNg");
	this.shape_175.setTransform(552,719.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FEFEFE").s().p("AtpBIIAAiPIbTAAIAACPg");
	this.shape_176.setTransform(248.5,719.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#9B7D54").s().p("A3pGnIAAtNMAvTAAAIAANNg");
	this.shape_177.setTransform(248.5,719.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_178.setTransform(73.1,638.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_179.setTransform(70.4,635.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_180.setTransform(70.4,631.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_181.setTransform(70.4,627.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_182.setTransform(73.1,624.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_183.setTransform(70.4,620.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_184.setTransform(70.4,616.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_185.setTransform(70.4,613.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_186.setTransform(73.1,609.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_187.setTransform(70.4,605.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_188.setTransform(70.4,602.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_189.setTransform(70.4,598.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_190.setTransform(73.1,594.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_191.setTransform(70.4,591.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_192.setTransform(70.4,587.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_193.setTransform(70.4,583.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_194.setTransform(73.1,580.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_195.setTransform(70.4,576.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_196.setTransform(70.4,572.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_197.setTransform(70.4,569.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_198.setTransform(73.1,565.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_199.setTransform(70.4,561.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_200.setTransform(70.4,558.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_201.setTransform(70.4,554.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_202.setTransform(73.1,550.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_203.setTransform(70.4,547.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_204.setTransform(70.4,543.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_205.setTransform(70.4,539.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_206.setTransform(73.1,536.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_207.setTransform(70.4,532.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_208.setTransform(70.4,529);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_209.setTransform(70.4,525.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_210.setTransform(73.1,521.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_211.setTransform(70.4,518);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_212.setTransform(70.4,514.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_213.setTransform(70.4,510.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_214.setTransform(73.1,507);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_215.setTransform(70.4,503.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_216.setTransform(70.4,499.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_217.setTransform(70.4,496);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_218.setTransform(73.1,492.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_219.setTransform(70.4,488.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_220.setTransform(70.4,485.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#E84423").p("AgZAAIAzAA");
	this.shape_221.setTransform(70.4,481.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#E84423").ss(2).p("Ag0AAIBpAA");
	this.shape_222.setTransform(73.1,477.7);

	this.instance_1 = new lib.Path_45();
	this.instance_1.setTransform(78.4,558.1,1,1,0,0,0,10.6,84.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F1DE00").s().p("Ag/AWIAKg+IB1ATIgLA+g");
	this.shape_223.setTransform(87.9,629.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FEFEFE").s().p("AAeA1IgEAAIgBgBIgWgDIgBAAIgUgEIgCAAIgWgEIgBAAIgEAAQgJgCgEgGQgFgHACgIIALhHIAYAEIABAAIAWAEIABAAIAUAEIACAAIAWADIABABIAYADIgMBHQgBAIgHAFQgFAEgGAAIgEgBg");
	this.shape_224.setTransform(86.7,637.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E84423").s().p("Ag1IyIgBgBIgWgDIgCAAIgWgEIgBAAIgWgDIgBAAIgYgEICyxXIAXADIACAAIAWAEIABAAIAWADIACABIAWAEIABAAIAYAEIiyRXg");
	this.shape_225.setTransform(96.3,577.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FEFEFE").s().p("Ag6ArIAohoIBIAMIAFBvg");
	this.shape_226.setTransform(105.3,516.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#444444").s().p("AgkApIAhhSQAEgNAPACQAPADABAPIAFBXg");
	this.shape_227.setTransform(107.1,505.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F1DE00").s().p("Ag/gVIB1gTIAKA+Ih0ATg");
	this.shape_228.setTransform(66,629.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FEFEFE").s().p("AgsAyQgGgEgCgJIgMhHIAYgDIABgBIAWgDIABAAIAUgEIACAAIAWgEIABAAIAYgEIALBHQACAHgFAIQgFAGgIACIgEAAIgBAAIgWAEIgCAAIgUAEIgBAAIgWADIgCABIgDAAIgEABQgGAAgFgEg");
	this.shape_229.setTransform(67.1,637.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#96D2C7").s().p("ABZIsIiyxXIABAAICyRXg");
	this.shape_230.setTransform(61,576.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#96D2C7").s().p("AhkopIAXgEICyRXIgXAEg");
	this.shape_231.setTransform(62.2,576.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#665A48").s().p("AhZorIABAAICyRXIgBAAg");
	this.shape_232.setTransform(58.6,577);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#665A48").s().p("AhkopIAXgEICyRXIgXAEg");
	this.shape_233.setTransform(59.8,576.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#96D2C7").s().p("ABYIsIixxXIACAAICxRXg");
	this.shape_234.setTransform(56.3,577.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#96D2C7").s().p("AhjoqIAVgDICyRXIgWAEg");
	this.shape_235.setTransform(57.5,577.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#665A48").s().p("AhZorIACAAICxRXIgBAAg");
	this.shape_236.setTransform(54,577.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#665A48").s().p("AhjopIAWgEICxRXIgWAEg");
	this.shape_237.setTransform(55.1,577.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#96D2C7").s().p("AhkopIAXgEICyRYIgXADg");
	this.shape_238.setTransform(52.7,577.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FEFEFE").s().p("Ag1gxIBIgMIAoBoIh1ATg");
	this.shape_239.setTransform(48.5,516.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#E84423").s().p("AgggiQABgHAFgFQAEgFAHgBQAHgBAGADQAEAEACAFIAgBSIhHAMg");
	this.shape_240.setTransform(46.7,505.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F1DE00").s().p("Ag6gfIB2AAIAAA/Ih2AAg");
	this.shape_241.setTransform(89.8,630.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FEFEFE").s().p("AgmAuQgJAAgFgFQgGgGAAgIIgBhIIB2AAIABBHQAAAJgGAFQgGAGgIAAg");
	this.shape_242.setTransform(89.8,638);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#5B5D5F").s().p("Ag8oyIB3AAIACRlIh2AAg");
	this.shape_243.setTransform(89.7,577);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FEFEFE").s().p("Agkg2IBIAAIAYBsIh3ABg");
	this.shape_244.setTransform(89.6,515.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#96D2C7").s().p("AgkAzIAShWQAFgPANAAQAPAAAEAPIASBWg");
	this.shape_245.setTransform(89.5,504.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#665A48").s().p("AD4JwQkng8jeCVQh6jNhmjuQjNnaBgimQAAgJgHgMQgOgZgkgWIApgKQAugIAVASIALhPIBMAXQAcgcAygkQBjhHBrgoQFVh9EpDzIATABQAYABAVAHQBDAVAMA9QAFAYAZBPQAYBbAEBqQALFIirIhQhng8iUgdg");
	this.shape_246.setTransform(388.9,389.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFE0A1").s().p("AhCCqIBIldIAOAEQAPAGALALQAjAigXBEIgtCAQgQAzABAGQACARgPAVQgKANgOAAQgMAAgPgKg");
	this.shape_247.setTransform(453.5,414.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFE0A1").s().p("AAoCkQgTgRAAgRQAAgHgZgvIhEh2Qgig/AdgoQAJgMAOgJIAMgGICFFKQgPAPgOAAQgLAAgLgJg");
	this.shape_248.setTransform(337.6,415.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E84423").s().p("Ao5HkIDJvHIAzCRQBBCgA8BJQA+BKB6BKQA7AmAwAXIBJgBQBYAFBJAaQDrBSACEMg");
	this.shape_249.setTransform(573,600.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFE0A1").s().p("AD6B+IgSg3QgXhCgXAzQgZA3g/AbIg7APIjhAAIiFi0IBIgiQBPgnAfgZQAagUAgAKQAkALAfgQQAigTAyALQA6AMAMgCQAhgIAkAWQAqAaAoA+QAnA6gRBFQgPA+gdAAQgKAAgLgbg");
	this.shape_250.setTransform(648.4,633.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E84423").s().p("AxLSAQiVnPhan0Qi1vnEhi6QFBjQEgg/QDVgwGYAAQGZAADVAwQEgBAFBDPQEhC6i1PnQhaH0iVHPIxMCkg");
	this.shape_251.setTransform(400,601.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFE0A1").s().p("AmzDTQALgRANgZQAZgyAGglIF8k8IGEE8QAHAlAVAyQAKAZAKARIm0AYg");
	this.shape_252.setTransform(400,452.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#96D2C7").s().p("AgkApQgbgbAAgkQAAgYAMgVIAQAAQA8AIAnB3QgRAJgVgBQgkAAgagbg");
	this.shape_253.setTransform(670.1,635.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FEFEFE").s().p("AkWBnQAVhnCjg7QB8guByAEQgNAVAAAZQAAAmAbAZQAbAbAlAAQAVAAASgJQANAqAGAjg");
	this.shape_254.setTransform(650.4,638.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FEFEFE").ss(4,1,1).p("AlWsCIKrAAIACYF");
	this.shape_255.setTransform(708.4,724.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_256.setTransform(351.2,633.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_257.setTransform(336.5,633.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_258.setTransform(321.8,633.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_259.setTransform(307.2,633.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_260.setTransform(292.5,633.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FEFEFE").s().p("AntAbIAAg1IPcAAIAAA1g");
	this.shape_261.setTransform(234.2,633.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_262.setTransform(175.2,633.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_263.setTransform(160.5,633.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FEFEFE").s().p("Ag5AbIAAg1IBzAAIAAA1g");
	this.shape_264.setTransform(145.8,633.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#96D2C7").s().p("AyoA9IAAh5MAlRAAAIAAB5g");
	this.shape_265.setTransform(248.5,642.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FEFEFE").ss(4,1,1).p("AF2sCIroAAIgDYF");
	this.shape_266.setTransform(94,724.5);

	this.instance_2 = new lib.ClipGroup_0();
	this.instance_2.setTransform(400.6,420,1,1,0,0,0,176.5,81.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FEFEFE").s().p("AtGBPQgWAAgOgPQgPgOAAgWIAAg3QAAgVAPgPQAOgPAWAAIaNAAQAVAAAOAPQAPAPABAVIAAA3QgBAWgPAOQgNAPgWAAg");
	this.shape_267.setTransform(400.5,640.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E9E9E9").s().p("AnUAyIAAhjIOpAAIAABjg");
	this.shape_268.setTransform(400.5,569.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FEFEFE").s().p("AnUGmIAAtLIOpAAIAANLg");
	this.shape_269.setTransform(400.5,606.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E84423").s().p("Ag3A4QgXgYAAggQAAgfAXgYQAYgXAfAAQAgAAAYAXQAXAYAAAfQAAAggXAYQgYAXggAAQgfAAgYgXg");
	this.shape_270.setTransform(559.2,526.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#96D2C7").s().p("A4QMuQgpAAgmgOQgogPgegdQgegcgQgmQgQglAAgmIAAzNQAAgnAQgkQAQglAegdQAegdAogPQAmgPApAAMAwhAAAQApAAAmAPQAnAPAfAdQAeAdAQAlQAQAkAAAnIAATNQAAAmgQAlQgQAmgeAcQgfAdgnAPQgmAOgpAAg");
	this.shape_271.setTransform(400.5,420);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FEFEFE").s().p("A6vSqQgnAAgkgPQglgPgdgdQgdgcgPgmQgPgkAAgnIAA/DQAAgnAPgkQAPglAdgdQAdgdAlgQQAkgOAnAAMA1fAAAQAnAAAkAOQAmAQAcAdQAdAdAPAlQAPAkAAAnIAAfDQAAAngPAkQgPAmgdAcQgcAdgmAPQgkAPgnAAg");
	this.shape_272.setTransform(400.5,444.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#444444").s().p("AiKAPQgGgBgFgEQgEgEAAgGQAAgFAEgEQAFgFAGABIEVAAQAGgBAEAFQAFAEAAAFQAAAGgFAEQgEAEgGABg");
	this.shape_273.setTransform(411,108.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#444444").s().p("AgNBiQgFgGgBgJIAAilQABgJAFgGQAGgGAHAAQAIAAAFAGQAHAGAAAJIAAClQAAAJgHAGQgFAFgIABQgGgBgHgFg");
	this.shape_274.setTransform(397.1,100.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E84423").s().p("AgECOIAAkcQAAgEAEAAQAEAAAAAEIAAEcQAAAFgEABQgEgBAAgFg");
	this.shape_275.setTransform(397.1,123.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#444444").s().p("AgYAYQgKgKABgOQgBgNAKgKQALgLANAAQAOAAAKALQALAKAAANQAAAOgLAKQgKALgOgBQgNABgLgLg");
	this.shape_276.setTransform(360.7,108.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#444444").s().p("AgYAYQgJgKgBgOQABgNAJgKQALgLANAAQAOAAAKALQAKAKAAANQAAAOgKAKQgKALgOgBQgNABgLgLg");
	this.shape_277.setTransform(433.5,108.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#444444").s().p("AgXAYQgKgKAAgOQAAgMAKgLQALgLAMAAQAOAAAKALQALAKAAANQAAAOgLAKQgKALgOgBQgNABgKgLg");
	this.shape_278.setTransform(397.1,145.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#444444").s().p("AgXAZQgKgLAAgOQAAgNAKgKQALgLAMAAQAOAAAKALQALAKAAANQAAAOgLALQgKAJgOABQgNgBgKgJg");
	this.shape_279.setTransform(397.1,72.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FEFEFE").s().p("AlFGzQgtAAggggQgggfAAguIAAqLQAAguAggfQAgggAtAAIKLAAQAtAAAgAgQAgAgAAAtIAAKLQAAAtggAgQggAggtAAg");
	this.shape_280.setTransform(397.1,108.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FAD708").s().p("AlFIrQguAAgqgRQgqgRggghQghghgRgqQgRgqAAgtIAAqLQAAguARgqQASgqAgggQAgghAqgRQAqgRAuAAIKLAAQAuAAAqARQAqARAgAhQAgAgASAqQARAqAAAuIAAKLQAAAtgRAqQgSAqggAhQggAhgqARQgqARguAAg");
	this.shape_281.setTransform(397.1,108.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#9B7D54").s().p("AzUBFIAAiJMAmpAAAIAACJg");
	this.shape_282.setTransform(123.7,404.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#665A48").s().p("A0iBGIAAiLMApEAAAIAACLg");
	this.shape_283.setTransform(131.5,390.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FEFEFE").ss(4,0,1).p("ADzk/IjtAAIAAJ/Ij4AA");
	this.shape_284.setTransform(24.4,414.2);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.instance.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.instance_1.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.instance_2.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.instance_2},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.instance_1},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(15.6,42.1,0.46,0.46,0,0,0,433.7,491.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CED193").s().p("Eg+fAfCMAAAg+DMB8/AAAMAAAA+Dg");
	this.shape.setTransform(0,-92.7,0.46,0.46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5BF39").s().p("Eg+fA+gMAAAh8/MB8/AAAMAAAB8/g");
	this.shape_1.setTransform(0,0,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-184.2,397.3,450.2);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// te dan la bienvenida
	this.instance = new lib.Tween28("synched",0);
	this.instance.setTransform(430.2,223.4,0.017,0.017);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:3.8,regY:3.6,scaleX:0.71,scaleY:0.71,x:430.6,y:188.5},30).to({x:562.3,y:188.4},37).to({x:430.6,y:188.5},32).to({x:-412.2},11).to({_off:true},1).wait(406));

	// Mano del cheque
	this.instance_1 = new lib.Tween27("synched",0);
	this.instance_1.setTransform(-215.1,671.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(454).to({_off:false},0).to({x:327.2,y:317.2},34).wait(53));

	// sin filas
	this.instance_2 = new lib.Tween26("synched",0);
	this.instance_2.setTransform(402.7,474.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(454).to({_off:false},0).to({y:207.3},34).wait(53));

	// Hombre en casa
	this.instance_3 = new lib.Tween25("synched",0);
	this.instance_3.setTransform(1130.4,-296.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(454).to({_off:false},0).to({scaleX:0.81,scaleY:0.81,x:893.8,y:227},34).wait(53));

	// Realiza todo esto desde la comodidad de tu hogar
	this.instance_4 = new lib.Tween24("synched",0);
	this.instance_4.setTransform(1156.4,-123.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(425).to({_off:false},0).to({x:359.9,y:75.2},29).wait(87));

	// despeje de energia
	this.instance_5 = new lib.Tween21("synched",0);
	this.instance_5.setTransform(659.5,602.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(364).to({_off:false},0).to({x:665.5,y:190.7},32).to({startPosition:0},29).to({x:-235.4},29).to({_off:true},1).wait(86));

	// recepcion de proyectos
	this.instance_6 = new lib.Tween20("synched",0);
	this.instance_6.setTransform(613.3,576.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(315).to({_off:false},0).to({x:591.9,y:196.8},14).to({startPosition:0},15).to({scaleX:0.46,scaleY:0.46,x:326.5,y:203.9},25).to({startPosition:0},56).to({x:-574.4},29).to({_off:true},1).wait(86));

	// aprobacion de proyectos
	this.instance_7 = new lib.Tween19("synched",0);
	this.instance_7.setTransform(665.2,594.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(251).to({_off:false},0).to({y:200.3},38).to({regY:0.1,scaleX:1.09,scaleY:1.09,x:650,y:203.4},14).to({regY:0,scaleX:0.45,scaleY:0.45,x:120.5,y:287.1},26).to({startPosition:0},96).to({x:-780.4},29).to({_off:true},1).wait(86));

	// factibilidad de proyectos
	this.instance_8 = new lib.Tween18("synched",0);
	this.instance_8.setTransform(636.5,643.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(196).to({_off:false},0).to({scaleX:0.82,scaleY:0.82,x:594.2,y:195.2},27).to({startPosition:0},28).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,x:106.8,y:91.3},38).to({startPosition:0},136).to({x:-794.1},29).to({_off:true},1).wait(86));

	// realiza los siguientes tramites
	this.instance_9 = new lib.Tween17("synched",0);
	this.instance_9.setTransform(974.3,250.3,0.004,0.004);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180).to({_off:false},0).to({scaleX:1,scaleY:1,x:883.2,y:134.7},17).to({startPosition:0},134).to({_off:true},1).wait(209));

	// mano con dinero
	this.instance_10 = new lib.Tween16("synched",0);
	this.instance_10.setTransform(554.1,-170.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(128).to({_off:false},0).to({y:188.5},6).to({startPosition:0},46).to({x:-260.6},16).to({_off:true},1).wait(344));

	// Reloj
	this.instance_11 = new lib.Tween15("synched",0);
	this.instance_11.setTransform(181,-157.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(128).to({_off:false},0).to({y:201.3},6).to({startPosition:0},46).to({x:-740.6},16).to({_off:true},1).wait(344));

	// Ahorra Tiempo y Dinero
	this.instance_12 = new lib.Tween14("synched",0);
	this.instance_12.setTransform(959.9,230.9,0.148,0.148);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(123).to({_off:false},0).to({scaleX:1,scaleY:1,x:880.6,y:133.4},7).to({startPosition:0},4).to({_off:true},44).wait(363));

	// Hombresito Boca
	this.instance_13 = new lib.Tween13("synched",0);
	this.instance_13.setTransform(1210,273.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({_off:false},0).to({x:1004.8},17).to({startPosition:0},377).to({x:1262.2},18).to({_off:true},1).wait(68));

	// hombresito Brazo
	this.instance_14 = new lib.Tween12("synched",0);
	this.instance_14.setTransform(1154.5,271.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({_off:false},0).to({x:941.2},17).wait(7).to({startPosition:0},0).wait(7).to({regX:25.7,regY:35.1,rotation:16,x:966.5,y:306.2},0).to({regX:25.6,rotation:0},6).to({regX:26.3,regY:35.9,rotation:-16,x:966.6},5).to({regX:26.2,rotation:0,x:966.5},4).to({rotation:16,y:306.1},3).to({regX:26.3,rotation:0,y:306.2},4).to({regY:36,rotation:-16},4).to({rotation:0},4).to({rotation:16},3).to({regX:25.8,regY:35.1,x:966.1,y:305.1},6).to({regX:25.9,rotation:0,x:965.9,y:305},6).to({regX:26.1,regY:35.4,rotation:-16,x:966},5).to({regY:35.5,rotation:0,x:965.8},4).to({regX:26.3,regY:35.6,rotation:16,y:305.1},3).to({regX:26.4,rotation:0,y:305},4).to({regX:26.5,regY:35.8,rotation:-16,y:305.1},4).to({regX:26.6,regY:35.9,scaleX:1,scaleY:1,rotation:0,x:965.7,y:305},4).to({regX:26.7,regY:36,rotation:16},3).to({regX:26.3,scaleX:1,scaleY:1,x:966.5,y:306.2},1).to({regX:25.8,regY:35.1,x:966.1,y:305.1},7).to({regX:25.9,rotation:0,x:965.9,y:305},7).to({regX:26.1,regY:35.4,rotation:-16,x:966},5).to({regY:35.5,rotation:0,x:965.8},4).to({regX:26.3,regY:35.6,rotation:16,y:305.1},3).to({regX:26.4,rotation:0,y:305},4).to({regX:26.5,regY:35.8,rotation:-16,y:305.1},4).to({regX:26.6,regY:35.9,scaleX:1,scaleY:1,rotation:0,x:965.7,y:305},4).to({regX:26.7,regY:36,rotation:16},3).to({regX:26.3,scaleX:1,scaleY:1,x:966.5,y:306.2},1).to({regX:25.8,regY:35.1,x:966.1,y:305.1},8).to({regX:25.9,rotation:0,x:965.9,y:305},6).to({regX:26.1,regY:35.4,rotation:-16,x:966},5).to({regY:35.5,rotation:0,x:965.8},4).to({regX:26.3,regY:35.6,rotation:16,y:305.1},3).to({regX:26.4,rotation:0,y:305},4).to({regX:26.5,regY:35.8,rotation:-16,y:305.1},4).to({regX:26.6,regY:35.9,scaleX:1,scaleY:1,rotation:0,x:965.7,y:305},4).to({regX:26.7,regY:36,rotation:16},3).to({regX:25.8,regY:35.1,x:964.9,y:303.7},4).to({regX:25.9,regY:35.2,rotation:0,x:964.7},6).to({regX:26,regY:35.3,rotation:-16,x:964.6},5).to({regX:26.2,regY:35.5,rotation:0,x:964.7},4).to({regX:26.3,rotation:16,x:964.6},3).to({regX:26.5,regY:35.6,rotation:0,y:303.6},4).to({regX:26.6,regY:35.8,rotation:-16,y:303.7},4).to({regX:26.7,regY:35.9,rotation:0,x:964.5,y:303.6},4).to({regX:26.8,regY:36,rotation:16},3).to({regX:26.7,x:965.7,y:305},1).to({regX:25.8,regY:35.1,x:964.9,y:303.7},8).to({regX:25.9,regY:35.2,rotation:0,x:964.7},6).to({regX:26,regY:35.3,rotation:-16,x:964.6},5).to({regX:26.2,regY:35.5,rotation:0,x:964.7},4).to({regX:26.3,rotation:16,x:964.6},3).to({regX:26.5,regY:35.6,rotation:0,y:303.6},4).to({regX:26.6,regY:35.8,rotation:-16,y:303.7},4).to({regX:26.7,regY:35.9,rotation:0,x:964.5,y:303.6},4).to({regX:26.8,regY:36,rotation:16},3).to({regX:26.7,x:965.7,y:305},1).to({regX:25.8,regY:35.1,x:964.9,y:303.7},4).to({regX:25.9,regY:35.2,rotation:0,x:964.7},6).to({regX:26,regY:35.3,rotation:-16,x:964.6},5).to({regX:26.2,regY:35.5,rotation:0,x:964.7},4).to({regX:26.3,rotation:16,x:964.6},3).to({regX:26.5,regY:35.6,rotation:0,y:303.6},4).to({regX:26.6,regY:35.8,rotation:-16,y:303.7},4).to({regX:26.7,regY:35.9,rotation:0,x:964.5,y:303.6},4).to({regX:26.8,regY:36,rotation:16},3).to({regX:25.8,regY:35.1,x:964.9,y:303.7},1).to({regX:25.9,regY:35.2,rotation:0,x:964.7},6).to({regX:26,regY:35.3,rotation:-16,x:964.6},5).to({regX:26.2,regY:35.5,rotation:0,x:964.7},4).to({regX:26.3,rotation:16,x:964.6},3).to({regX:26.5,regY:35.6,rotation:0,y:303.6},4).to({regX:26.6,regY:35.8,rotation:-16,y:303.7},4).to({regX:26.7,regY:35.9,rotation:0,x:964.5,y:303.6},4).to({regX:26.8,regY:36,rotation:16},3).to({regX:25.8,regY:35.1,x:964.9,y:303.7},1).to({regX:26.2,regY:35.4,rotation:0,x:964.6},6).to({regX:26,regY:35.3,rotation:-16},5).to({regX:26.2,regY:35.5,rotation:0,x:964.7},4).to({regX:26.3,rotation:16,x:964.6},3).to({regX:26.5,regY:35.6,rotation:0,y:303.6},4).to({regX:26.6,regY:35.8,rotation:-16,y:303.7},4).to({regX:26.7,regY:35.9,rotation:0,x:964.5,y:303.6},4).to({regX:26.3,regY:35.4,rotation:16,x:963.6,y:302.7},3).to({regX:26.4,regY:35.6,rotation:-16,y:302.6},5).to({regX:26.7,regY:35.9,rotation:0},4).to({regX:26.8,rotation:16,x:963.5},3).to({regX:27,regY:36.1,scaleX:1,scaleY:1,rotation:0},4).to({regX:27.1,regY:36.3,rotation:-16,x:963.4,y:302.5},4).to({regX:26.7,regY:36,scaleX:1,scaleY:1,rotation:16,x:965.7,y:305},2).to({regX:26.1,regY:35.3,x:1222.5,y:304},18).to({_off:true},1).wait(68));

	// Hombresito Cuerpo
	this.instance_15 = new lib.Tween10("synched",0);
	this.instance_15.setTransform(1226.9,293.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({x:1014.5},17).to({startPosition:0},371).to({startPosition:0},6).to({x:1271.9},18).to({_off:true},1).wait(68));

	// efecto del clic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AgnB9Ih0BbIAyiLIiTAFIB6hSIh6hRICTAFIgyiKIB0BbIAniOIAoCOIB0hbIgyCKICTgFIh6BRIB6BSIiTgFIAyCLIh0hbIgoCNg");
	this.shape.setTransform(-169,584.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(113).to({scaleX:0.7,scaleY:0.7,x:151.7,y:310.3},0).wait(4).to({_off:true},1).wait(423));

	// ruta del mouse
	this.instance_16 = new lib.Path();
	this.instance_16.setTransform(1088.6,580.7,1.745,1.745,0,0,0,16.9,19.9);
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",2,2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:17.7,regY:20.8,x:1084.2,y:572.2},0).wait(1).to({x:1078.5,y:562.2},0).wait(1).to({x:1072.7,y:552.1},0).wait(1).to({x:1066.9,y:542.1},0).wait(1).to({x:1061.2,y:532},0).wait(1).to({x:1055.4,y:522},0).wait(1).to({x:1049.6,y:511.9},0).wait(1).to({x:1043.9,y:501.8},0).wait(1).to({x:1038.1,y:491.8},0).wait(1).to({x:1032.3,y:481.7},0).wait(1).to({x:1026.6,y:471.7},0).wait(1).to({x:1020.8,y:461.6},0).wait(1).to({x:1015.1,y:451.6},0).wait(1).to({x:1009.3,y:441.5},0).wait(1).to({x:1003.5,y:431.5},0).wait(1).to({x:997.8,y:421.4},0).wait(1).to({x:992,y:411.3},0).wait(1).to({x:986.2,y:401.3},0).wait(1).to({x:980.5,y:391.2},0).wait(1).to({x:974.7,y:381.2},0).wait(1).to({x:968.9,y:371.1},0).wait(1).to({x:963.2,y:361.1},0).wait(1).to({x:957.4,y:351},0).wait(1).to({x:949.2,y:349.1},0).wait(1).to({x:941,y:347.1},0).wait(1).to({x:932.8,y:345.2},0).wait(1).to({x:924.7,y:343.2},0).wait(1).to({x:916.5,y:341.3},0).wait(1).to({x:908.3,y:339.4},0).wait(1).to({x:900.1,y:337.4},0).wait(1).to({x:891.9,y:335.5},0).wait(1).to({x:883.7,y:333.6},0).wait(1).to({x:875.6,y:331.6},0).wait(1).to({x:867.4,y:329.7},0).wait(1).to({x:859.2,y:327.7},0).wait(1).to({x:851,y:325.8},0).wait(1).to({x:842.8,y:323.9},0).wait(1).to({x:834.6,y:321.9},0).wait(1).to({x:826.5,y:320},0).wait(1).to({x:818.3,y:318.1},0).wait(1).to({x:810.1,y:316.1},0).wait(1).to({x:801.9,y:314.2},0).wait(1).to({x:793.7,y:312.2},0).wait(1).to({x:785.5,y:310.3},0).wait(1).to({x:776.7,y:310.1},0).wait(1).to({x:767.9,y:309.9},0).wait(1).to({x:759.1,y:309.7},0).wait(1).to({x:750.3,y:309.5},0).wait(1).to({x:741.4,y:309.2},0).wait(1).to({x:732.6,y:309},0).wait(1).to({x:723.8,y:308.8},0).wait(1).to({x:715,y:308.6},0).wait(1).to({x:706.1,y:308.4},0).wait(1).to({x:697.3,y:308.2},0).wait(1).to({x:688.5,y:308},0).wait(1).to({x:679.7,y:307.8},0).wait(1).to({x:670.8,y:307.5},0).wait(1).to({x:662,y:307.3},0).wait(1).to({x:653.2,y:307.1},0).wait(1).to({x:644.4,y:306.9},0).wait(1).to({x:635.5,y:306.7},0).wait(1).to({x:626.7,y:306.5},0).wait(1).to({x:617.9,y:306.3},0).wait(1).to({x:609.1,y:306.1},0).wait(1).to({x:600.2,y:305.8},0).wait(1).to({x:568.1,y:309.2},0).wait(1).to({x:535.9,y:312.6},0).wait(1).to({x:503.8,y:315.9},0).wait(1).to({x:471.6,y:319.3},0).wait(1).to({x:439.5,y:322.7},0).wait(1).to({x:407.3,y:326},0).wait(1).to({x:375.2,y:329.4},0).wait(1).to({x:343,y:332.8},0).wait(1).to({x:310.9,y:336.1},0).wait(1).to({x:278.7,y:339.5},0).wait(1).to({x:246.6,y:342.9},0).wait(1).to({x:214.4,y:346.2},0).wait(1).to({x:182.3,y:349.6},0).wait(46).to({x:154.2,y:349.5},0).wait(1).to({x:126.1,y:349.4},0).wait(1).to({x:98,y:349.3},0).wait(1).to({x:69.9,y:349.2},0).wait(1).to({x:41.8,y:349.1},0).wait(1).to({x:13.7,y:349},0).wait(1).to({x:-14.4,y:348.9},0).wait(1).to({x:-42.5,y:348.8},0).wait(1).to({x:-70.6,y:348.7},0).wait(1).to({x:-98.7,y:348.6},0).wait(1).to({x:-126.9,y:348.5},0).to({_off:true},1).wait(406));

	// mundo en la laptop
	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.setTransform(146.5,317.6,0.016,0.016,0,0,180);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1,skewY:0},18).to({startPosition:0},26).to({startPosition:0},45).to({x:-837.2},11).to({_off:true},1).wait(406));

	// Laptop
	this.instance_18 = new lib.Tween7("synched",0);
	this.instance_18.setTransform(146.5,317.6,0.194,0.194);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(34).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:6.67,scaleY:6.67,x:149.1,y:320.2},18).to({y:320.1},26).to({y:320.2},45).to({x:-834.6},11).to({_off:true},1).wait(406));

	// La ENEE
	this.instance_19 = new lib.Tween1("synched",0);
	this.instance_19.setTransform(860.5,482.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:562.9,y:55.1},33).to({x:556,y:57},1).to({x:554.9},44).to({x:552.3},45).to({x:-544.8},11).to({_off:true},1).wait(406));

	// y
	this.instance_20 = new lib.Tween3("synched",0);
	this.instance_20.setTransform(1139.3,-148.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:388.8,y:57},34).to({x:386.6},44).to({x:384.4},45).to({x:-692.8},11).to({_off:true},1).wait(406));

	// El cimeqh
	this.instance_21 = new lib.Tween5("synched",0);
	this.instance_21.setTransform(697.2,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:172.5,y:57},34).to({x:171.7},44).to({x:171},45).to({x:-846.2},11).to({_off:true},1).wait(406));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(345.7,3.5,1355.7,823.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;