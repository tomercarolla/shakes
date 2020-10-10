(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"shake_atlas_1", frames: [[0,0,400,400],[0,402,400,400],[0,804,400,400],[0,1206,400,400],[0,1608,400,400],[402,0,400,400],[402,402,400,400],[402,804,400,400],[402,1206,400,400],[402,1608,400,400],[804,0,400,400],[804,402,400,400],[804,804,400,400],[804,1206,400,400],[804,1608,400,400],[1206,0,400,400],[1206,402,400,400]]},
		{name:"shake_atlas_2", frames: [[0,0,823,1175],[825,0,400,400],[1227,0,400,400],[1629,0,400,400],[825,402,400,400],[1227,402,400,400],[1629,402,400,400],[825,804,400,400],[1227,804,400,400],[1629,804,400,400],[0,1177,400,400],[402,1177,400,400],[804,1206,400,400],[1206,1206,400,400],[1608,1206,400,400],[0,1579,400,400],[402,1579,400,400],[804,1608,400,400],[1206,1608,400,400],[1608,1608,400,400]]},
		{name:"shake_atlas_3", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_4", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_5", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_6", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_7", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_8", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_9", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_10", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_11", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_12", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_13", frames: [[0,0,1364,1364]]},
		{name:"shake_atlas_14", frames: [[0,0,1364,1364]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1raspberryblurberry = function() {
	this.initialize(ss["shake_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1raspberryblurberry_gray = function() {
	this.initialize(ss["shake_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2pineapleapplecucumberkiwimint = function() {
	this.initialize(ss["shake_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2pineapleapplecucumberkiwimint_gray = function() {
	this.initialize(ss["shake_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3melonapplemint = function() {
	this.initialize(ss["shake_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3melonapplemint_gray = function() {
	this.initialize(ss["shake_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4bananapineaplechia = function() {
	this.initialize(ss["shake_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4bananapineaplechia_gray = function() {
	this.initialize(ss["shake_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5bananamelonmango = function() {
	this.initialize(ss["shake_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5bananamelonmango_gray = function() {
	this.initialize(ss["shake_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6bananaberrys = function() {
	this.initialize(ss["shake_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6bananaberrys_gray = function() {
	this.initialize(ss["shake_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.appledisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.applehover = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.applenormal = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bananadisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bananahover = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.banananormal = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.burrydisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.burryhover = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.burrynormal = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.chiadisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.chiahover = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.chianormal = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cucumberdisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cucumberhover = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cucumbernormal = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.kiwidisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.kiwihover = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.kiwinormal = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mangodisabled = function() {
	this.initialize(ss["shake_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mangohover = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mangonormal = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.melondisabled = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.melonhover = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.melonnormal = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mintdisabled = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.minthover = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mintnormal = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.petelblackdisabled = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.petelblackhover = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.petelblacknormal = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.peteldisabled = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.petelhover = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.petelnormal = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.pineappledisabled = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.pineapplehover = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pineapplenormal = function() {
	this.initialize(ss["shake_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.textFrame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shake_frame_ai
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.4112,0.4112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textFrame, new cjs.Rectangle(0,0,338.4,483.2), null);


(lib.shake6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.text = new cjs.Text("ירוק ובריא", "normal 700 200px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 283;
	this.text.lineWidth = 771;
	this.text.parent = this;
	this.text.setTransform(708.6,1244.6);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib._2pineapleapplecucumberkiwimint();

	this.instance_1 = new lib._2pineapleapplecucumberkiwimint_gray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364,1527.4);


(lib.shake5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.text = new cjs.Text("חגיגה ביער", "normal 700 200px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 283;
	this.text.lineWidth = 777;
	this.text.parent = this;
	this.text.setTransform(650.9,1262.5);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib._1raspberryblurberry();

	this.instance_1 = new lib._1raspberryblurberry_gray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364,1545.3);


(lib.shake4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.text = new cjs.Text("הכי קלאסי", "normal 700 200px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 283;
	this.text.lineWidth = 647;
	this.text.parent = this;
	this.text.setTransform(646.1,1287.75);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib._5bananamelonmango();

	this.instance_1 = new lib._5bananamelonmango_gray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364,1676.8);


(lib.shake3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.text = new cjs.Text("שמש צהובה", "normal 700 200px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 283;
	this.text.lineWidth = 728;
	this.text.parent = this;
	this.text.setTransform(677.35,1190.95);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib._4bananapineaplechia();

	this.instance_1 = new lib._4bananapineaplechia_gray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364,1473.8);


(lib.shake2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.text = new cjs.Text("ירוק מרענן", "normal 700 200px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 283;
	this.text.lineWidth = 796;
	this.text.parent = this;
	this.text.setTransform(682.3,1267);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib._3melonapplemint();

	this.instance_1 = new lib._3melonapplemint_gray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364,1636.8);


(lib.shake1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// text
	this.text = new cjs.Text("פינוק סגול", "normal 700 200px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 283;
	this.text.lineWidth = 642;
	this.text.parent = this;
	this.text.setTransform(688.7,1258);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.instance = new lib._6bananaberrys();

	this.instance_1 = new lib._6bananaberrys_gray();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1364,1603.4);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.petelhover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pineapplehover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.minthover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.melonhover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mangohover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kiwihover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cucumberhover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.chiahover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,400,400), null);


(lib.plus200calai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// text
	this.text = new cjs.Text("'מעל 200 קל", "normal 400 3px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 4;
	this.text.lineWidth = 20;
	this.text.parent = this;
	this.text.setTransform(21.9,44.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah1AnIAAhNIDrAAIAABNg");
	this.shape.setTransform(21.875,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDE5C2").s().p("AhrAmQgKAAAAgIIAAg7QAAgIAKAAIDYAAQAJAAAAAIIAAA7QAAAIgJAAg");
	this.shape_1.setTransform(21.75,45.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7B780").s().p("AhrAmQgKAAAAgIIAAg7QAAgIAKAAIDYAAQAJAAAAAIIAAA7QAAAIgJAAg");
	this.shape_2.setTransform(21.75,45.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,41.7,23.700000000000003,10.799999999999997);


(lib.minus200calai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// text
	this.text = new cjs.Text("'עד 200 קל", "normal 400 3px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 4;
	this.text.lineWidth = 16;
	this.text.parent = this;
	this.text.setTransform(17.55,43.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiAnIAAhNIDFAAIAABNg");
	this.shape.setTransform(17.6,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDE5C2").s().p("AhaAmQgIAAAAgIIAAg7QAAgIAIAAIC2AAQAHAAAAAIIAAA7QAAAIgHAAg");
	this.shape_1.setTransform(17.475,44.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7B780").s().p("AhaAmQgIAAAAgIIAAg7QAAgIAIAAIC2AAQAHAAAAAIIAAA7QAAAIgHAAg");
	this.shape_2.setTransform(17.475,44.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,41,20,10.700000000000003);


(lib.matokai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// text
	this.text = new cjs.Text("מתוק", "normal 400 3px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 4;
	this.text.lineWidth = 14;
	this.text.parent = this;
	this.text.setTransform(18.25,44.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaAnIAAhNIC1AAIAABNg");
	this.shape.setTransform(17.925,45.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDE5C2").s().p("AhSAmQgHAAAAgIIAAg7QAAgIAHAAICmAAQAGAAAAAIIAAA7QAAAIgGAAg");
	this.shape_1.setTransform(18.025,45.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7B780").s().p("AhRAmQgHAAAAgIIAAg7QAAgIAHAAICjAAQAHAAAAAIIAAA7QAAAIgHAAg");
	this.shape_2.setTransform(17.975,45.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,41.8,18.4,10.5);


(lib.hamutzai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// text
	this.text = new cjs.Text("חמוץ", "normal 400 3px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 4;
	this.text.lineWidth = 14;
	this.text.parent = this;
	this.text.setTransform(18.25,44.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaAnIAAhNIC1AAIAABNg");
	this.shape.setTransform(17.925,45.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDE5C2").s().p("AhSAmQgHAAAAgIIAAg7QAAgIAHAAICmAAQAGAAAAAIIAAA7QAAAIgGAAg");
	this.shape_1.setTransform(18.025,45.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7B780").s().p("AhRAmQgHAAAAgIIAAg7QAAgIAHAAICjAAQAHAAAAAIIAAA7QAAAIgHAAg");
	this.shape_2.setTransform(17.975,45.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,41.8,18.4,10.5);


(lib.border = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// botton_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AiCAlIAAAAIgDAAIgBAAIAAgBIgBAAIgBAAIgBgBIgBAAIAAgBIAAAAIgBgFIABgDQABAAgBAAIgBgCIAAgEIAAAAIAAgFIAAgBIgBgCIABgCIAAgBIgBAAIABgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgEIABgBIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgCIACAAIAAAEIAAAFIAAABIABACIgBABIAAABIABACIAAABIABARIAHAAIABAAIAGAAQAGgCAAACQAAABgTAAIgBAAIAIAAIAXAAIACAAIAAABIAAABQABAAAAgBQAAAAAAAAQAAAAAAABQABAAAAAAIAAABIgCAAIAAAAIgDgBIgCABIAAABIgBgBIAAAAIgBAAIgBgBIAAABIgBAAIAAAAIgCABIgBgBQAAgBABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIAAAAIgBABIABABIgCgBIgCgBIAAAAIAAABIAAABIgBgBIAAAAIAAAAQAAABgBAAIgBgBIAAABIgBgBIAAAAIAAAAIAAABIgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAABIAAAAIgBAAIAAAAIgBABIgBAAIAAAAIgBAAgAiLABIABABIABAAIgBgBIAAgBIgBABgAhHAkIgBAAIgCAAIgCgBIAAABIgBAAIAAAAIgBgBQgBAAABABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBgBIABAAIACgBIgFAAIgEgBIBcgBIAKgBIAEAAIgDABIgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABgBgBABIgBAAIABAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBAAIgBAAIgBAAQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAgBAAIAAAAIgBABIgBAAQABgBgBABIgBAAIAAgCIAAgBIAAABQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAgBIgBAAIAAABIAAgBIgBAAIAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAAAIgCAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAABIgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBAAIgBAAIAAAAIgBABIAAAAIgBAAIAAAAQABgBgBAAIgBABIAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAABAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAABABIgBAAIgBAAQgBAAAAAAQABgBgBAAIgBABIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBABAAAAIgCABQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgFAAIgBAAQgBABAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBABIgCgBIAAAAIgCAAIgBAAIgCABIgDAAIAAgBIAAAAIgBAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIAAAAIgDABIgCAAIAAgBIgCAAIAAABIgEAAIAAgBQgBAAAAABIABABIgDgBgAAHAhIABAAIgCgBIABABgAASAiIgBAAQAAAAAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAIADgCIADAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAgBAAAAIAHAAIABAAIADAAIABAAIAAABQAAAAAAAAQAAAAAAABQABAAAAAAQABAAABAAQABgBgBABIAAABIAAAAIgCgBIgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAABAAAAIgBABIABAAIgBAAIAAgBIgBAAIgBAAQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAAAAAIgCAAIgCAAIgHAAIABABIADAAIgBABIgCgBIgBABIgBAAIgBAAIAAAAgAAeAiQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIABAAIAAABIgBAAIgBAAgAAaAiIgBgBIACAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBAAgAhlAiIAAgBIgBAAIABAAIAAAAIABABIgBAAgAAxAiQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIABAAIgFAAIACgBIABAAIACAAQABAAAAABIAAAAIAAABIgBABgAB8AgIAAAAIgBgBQAAAAAAgBQgBAAABAAQAAAAAAAAQABAAAAAAIADAAIABAAIABAAIADAAIADAAIACABIgEAAIAAAAIACABIAAAAIgCABQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgDgBQgBAAgBAAQAAAAAAAAQgBABABAAQAAAAAAABIAAAAIgCAAIAAAAgABxAhIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIACAAIABgBIAAAAIABABIgBABIAAAAgAB0AgIgBAAIAAgBIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAgABYAgIABAAQABAAgBAAgAhyAgIAAAAIAIgBIACAAQAAAAAAABQABAAAAAAQgBAAAAAAQAAAAgBAAgAAnAfIADAAIACAAIAAAAIgCABIgCAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAgAAMAeIABAAQABAAgBAAIgCABIABgBgAAAAeIADAAIAHAAQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgGABIgFgBgAAhAeIAAgBIACABIgCABIAAgBgAAZAeIgCAAIgCAAIACAAIAHAAIAAAAIgEAAIAAABIgBgBgABKAdIABAAIgBABgACKAdIAAgBIgBgBIgBgDQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIABAAQAAAAAAgBIABgBQABAAAAABIAAAEIgBADQgBAAABAAgABqAdIAAAAIABAAIAAAAgABdAdIAAAAIABAAgAB7AdQAAgBABAAQABAAgBABIAAAAIgBAAgACKATIgBAAQAAAAAAgBIAAgDIAAgBIAAAAIAAgBIAAgDIABgRIAAgCIAAgDIABgCIAAgBIAAAAIgBgBIABAAIAAgBQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIgBgBIAAAAIAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIABgDQgBAAAAABQAAABAAgBIABgCIAAgBIAAAAIAAgBQAAgBgBAAIAAAAIABAAIAAgBIAAgBQgBABAAgBIAAgCIAAgBIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAABIAAgBIABACIAAACIgBAFIAAABQAAAAAAABIAAAFIAAACQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIgBAVIgBABIAAAAIAAAAIAAAHIAAAAQACACgDADIAAABIAAgBgAiKgDQAAgBAAAAQgBgBAAAAQAAAAAAABQAAAAAAABIgBAAIAAgCIABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBgBAAIAAAAIAAgBIAAgBIAAgBIgBgBQAAAAABgBQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAgGIAAAAIABgBIABAAIABABIAAADIAAACIAAAEIAAABIAAABIABAFIAAACgAiLgcIAAgBIAAAAIABAAIAAABIgBAAIAAAAgAiAgdQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIACAAIAAABIgBAAIgBABIgBgBgAhrgdIgGAAIAAgBIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAQAAAAABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBIADAAIAGAAIADAAIABAAIACAAIAWgBQAUAAAAABIAAgBIAGAAIAHAAIAAABQABAAgBAAIgBAAIgBAAIgDAAIgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBIgBABIgBAAIgDABIgRAAIgLAAIgEAAIgEAAIAAgBIgDABIAAAAIgBAAIgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgDgBgAhigdIAAAAIABAAIAAAAgAh5gdIgBAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABgAgugeIAAAAIAAAAIABAAIgBgBIgBAAIAEAAIAEgBIAEAAIABABIABAAIgBAAIgFAAQgBAAABABIABAAIgFAAIABAAIAAgBIgBABIgBAAIgCAAIAAAAgAAEgeIAAgBIABAAIABABIgBAAIgBAAgAAygfIgBAAIgCAAIgBAAIgBgBIAAAAIAAAAIAAgBIACAAIABAAIABAAIAIAAIABAAIAAABIABABIgCAAIgBAAIgBAAIgBAAIgBAAIgBAAIgCAAIAAAAIAAAAgAAogfIgBAAIAAAAIgCAAIACgBIACABIgBAAIAAAAIAAAAgAASgfIgGAAIABAAIABAAIACAAIgCgBIgFAAIgBAAIAGgBIACABIABABIACAAIAAAAIgBAAgAh2gfIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAgBAAgAAjgfIgBgBIgBgBIABAAIAAAAIABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBgBIAAABIAAABIgBAAgAAfggIAAAAIABAAIgBABgAAoggIgCgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADAAIABAAIABAAIgCABIgBAAIgCAAgAg6ggIACAAQADgBACAAQACgBAAAAQABAAgBABQgBAAgCABIgDAAgAgVghIABAAIAAAAIgCABIABgBgAByghIAAAAQABABgBAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAgABQgiQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAIgDABIAAAAIgBgBgACAgiIAAgBIACAAIAAABIgCABIgBAAIABgBgAAUgiIABAAQABAAgBABgAB+giIABAAIgBAAIAAAAgAA5gjIACAAIgCABgAB2gkIABAAIABAAIACAAIgCABIgCgBg");
	this.shape.setTransform(18.075,46.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(3.9,42.8,28.4,7.400000000000006), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.burryhover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bananahover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.petelblackhover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.applehover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,400,400), null);


(lib.raspberry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("פטל אדום", "normal 700 110px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 156;
	this.text.lineWidth = 363;
	this.text.parent = this;
	this.text.setTransform(189.45,297.6);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(15).to({lineHeight:124.9},0).wait(1));

	// Layer_1
	this.instance = new lib.petelnormal();

	this.instance_1 = new lib.peteldisabled();

	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,592.3);


(lib.pinapple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("אננס", "normal 700 120px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 171;
	this.text.lineWidth = 343;
	this.text.parent = this;
	this.text.setTransform(222.35,373.7,1,1,-14.9992);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.pineapplenormal();
	this.instance.setTransform(0,-4);

	this.instance_1 = new lib.pineappledisabled();
	this.instance_1.setTransform(0,-4);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(198.2,193.1,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:198.6,y:194.85},0).wait(1).to({rotation:7.4995,x:199.1,y:196.6},0).wait(1).to({rotation:11.2492,x:199.55,y:198.3},0).wait(1).to({rotation:14.9989,x:200,y:200.05},0).wait(1).to({rotation:7.2551,y:200},0).wait(1).to({rotation:-0.4888,x:200.05},0).wait(1).to({rotation:-8.2326,y:199.95},0).wait(1).to({rotation:-15.9765,x:200},0).wait(1).to({rotation:-23.7203,y:200},0).wait(1).to({rotation:-18.878},0).wait(1).to({rotation:-14.0357,x:200.05},0).wait(1).to({rotation:-9.1933},0).wait(1).to({rotation:-4.351,x:200,y:199.95},0).wait(1).to({rotation:0.4913,y:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-63.5,527.1,646.8);


(lib.mint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("נענע", "normal 700 110px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 156;
	this.text.lineWidth = 274;
	this.text.parent = this;
	this.text.setTransform(171.6,353.15);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.mintnormal();

	this.instance_1 = new lib.mintdisabled();

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,554.5);


(lib.melon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("מלון", "normal 700 130px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 183;
	this.text.lineWidth = 295;
	this.text.parent = this;
	this.text.setTransform(193,400.25);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.melonnormal();

	this.instance_1 = new lib.melondisabled();

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,629.6999999999999);


(lib.mango = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("מנגו", "normal 700 140px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 199;
	this.text.lineWidth = 263;
	this.text.parent = this;
	this.text.setTransform(231.25,394.8);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.mangonormal();

	this.instance_1 = new lib.mangodisabled();

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:7.5024,y:200},0).wait(1).to({rotation:0.0059},0).wait(1).to({rotation:-7.4906},0).wait(1).to({rotation:-14.9871},0).wait(1).to({rotation:-22.4836,x:200.05,y:199.95},0).wait(1).to({rotation:-18.0381,x:200},0).wait(1).to({rotation:-13.5926,y:200},0).wait(1).to({rotation:-9.1471,y:199.95},0).wait(1).to({rotation:-4.7017,x:200.05,y:200},0).wait(1).to({rotation:-0.2562,y:199.95},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-61.2,522.5,626.5);


(lib.kiwi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// kiwi
	this.text = new cjs.Text("קיווי", "normal 700 110px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 156;
	this.text.lineWidth = 291;
	this.text.parent = this;
	this.text.setTransform(200.05,362.7);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(15).to({y:349.1},0).wait(1));

	// Layer_1
	this.instance = new lib.kiwinormal();

	this.instance_1 = new lib.kiwidisabled();

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,614.8);


(lib.cucumber = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("מלפפון", "normal 700 110px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 156;
	this.text.lineWidth = 274;
	this.text.parent = this;
	this.text.setTransform(212.5,299.9);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.cucumbernormal();

	this.instance_1 = new lib.cucumberdisabled();

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,515.3);


(lib.chia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("צ'יה", "normal 700 120px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 171;
	this.text.lineWidth = 514;
	this.text.parent = this;
	this.text.setTransform(175.4,288.5);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.chianormal();

	this.instance_1 = new lib.chiadisabled();

	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.7,-44.9,528.7,503.9);


(lib.bluebarry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("אוכמניות", "normal 700 120px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 171;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(205.4,289.85);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.burrynormal();

	this.instance_1 = new lib.burrydisabled();

	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,607);


(lib.banana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("בננה", "normal 700 130px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 185;
	this.text.lineWidth = 262;
	this.text.parent = this;
	this.text.setTransform(187.3,359.8);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.banananormal();

	this.instance_1 = new lib.bananadisabled();

	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,621.6999999999999);


(lib.braspberry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("פטל שחור", "normal 700 140px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 199;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(207.2,357.8);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.petelblacknormal();

	this.instance_1 = new lib.petelblackdisabled();

	this.instance_2 = new lib.Symbol11();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:3.7497,x:199.95},0).wait(1).to({rotation:7.4995,x:200,y:200.05},0).wait(1).to({rotation:11.2492,y:200},0).wait(1).to({rotation:14.9989,y:200.05},0).wait(1).to({rotation:8.999,x:199.95},0).wait(1).to({rotation:2.9991,x:200},0).wait(1).to({rotation:-3.0007,x:200.05,y:200},0).wait(1).to({rotation:-9.0006},0).wait(1).to({rotation:-15.0005,x:200},0).wait(1).to({rotation:-12.0004,x:200.05},0).wait(1).to({rotation:-9.0003},0).wait(1).to({rotation:-6.0002,x:200},0).wait(1).to({rotation:-3.0001,x:200.05},0).wait(1).to({rotation:0,x:200},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-44.9,489.9,719.5);


(lib.apple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// text
	this.text = new cjs.Text("תפוח", "normal 700 150px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 213;
	this.text.lineWidth = 436;
	this.text.parent = this;
	this.text.setTransform(219.35,382.75);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// Layer_1
	this.instance = new lib.applenormal();

	this.instance_1 = new lib.appledisabled();

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(200,200,1,1,0,0,0,200,200);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({rotation:4.9946},0).wait(1).to({rotation:9.9892,x:199.95},0).wait(1).to({rotation:14.9837,x:200},0).wait(1).to({rotation:19.9783,x:199.95,y:200.05},0).wait(1).to({rotation:11.6316,x:200,y:200},0).wait(1).to({rotation:3.2849,x:199.95},0).wait(1).to({rotation:-5.0617,x:200,y:199.95},0).wait(1).to({rotation:-13.4084,x:200.05},0).wait(1).to({rotation:-21.7551},0).wait(1).to({rotation:-17.4571,y:200},0).wait(1).to({rotation:-13.159,y:199.95},0).wait(1).to({rotation:-8.861,x:200},0).wait(1).to({rotation:-4.5629},0).wait(1).to({rotation:-0.2649,y:200},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-59.8,519.6999999999999,697.3);


// stage content:
(lib.shake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		var matok = false; //מנקה פילטר של קלוריות
		var hamutz = false; //מנקה פילטר של טעם
		var plus200cal = false;
		var minus200cal = false;
		addListenerToAll(); //מפעיל את הפונקציה שמקשיבה לפעולות העכבר לכולם
		addClickToAll(); //קריאה לפונקצית לחיצה על עכבר לכולם
		
		function addListenerToAll() {
			//פליי לכולם
			self.apple.addEventListener("rollover", appleIn);
			self.blackberry.addEventListener("rollover", blackberryIn);
			self.banana.addEventListener("rollover", bananaIn);
			self.blueberry.addEventListener("rollover", blueberryIn);
			self.chia.addEventListener("rollover", chiaIn);
			self.cucumber.addEventListener("rollover", cucumberIn);
			self.kiwi.addEventListener("rollover", kiwiIn);
			self.mango.addEventListener("rollover", mangoIn);
			self.melon.addEventListener("rollover", melonIn);
			self.mint.addEventListener("rollover", mintIn);
			self.pineapple.addEventListener("rollover", pineappleIn);
			self.raspberry.addEventListener("rollover", raspberryIn);
			self.shake1.addEventListener("rollover", shake1In);
			self.shake2.addEventListener("rollover", shake2In);
			self.shake3.addEventListener("rollover", shake3In);
			self.shake4.addEventListener("rollover", shake4In);
			self.shake5.addEventListener("rollover", shake5In);
			self.shake6.addEventListener("rollover", shake6In);
			self.matokBtn.addEventListener("rollover", matokBtn_over);
			self.hamutzBtn.addEventListener("rollover", hamutzBtn_over);
			self.plus200calBtn.addEventListener("rollover", plus200calBtn_over);
			self.minus200calBtn.addEventListener("rollover", minus200calBtn_over);
		
			//יוצא לכולם
			self.apple.addEventListener("rollout", fruitOut);
			self.blackberry.addEventListener("rollout", fruitOut);
			self.banana.addEventListener("rollout", fruitOut);
			self.blueberry.addEventListener("rollout", fruitOut);
			self.chia.addEventListener("rollout", fruitOut);
			self.cucumber.addEventListener("rollout", fruitOut);
			self.kiwi.addEventListener("rollout", fruitOut);
			self.mango.addEventListener("rollout", fruitOut);
			self.melon.addEventListener("rollout", fruitOut);
			self.mint.addEventListener("rollout", fruitOut);
			self.pineapple.addEventListener("rollout", fruitOut);
			self.raspberry.addEventListener("rollout", fruitOut);
			self.shake1.addEventListener("rollout", shake1Out);
			self.shake2.addEventListener("rollout", shake2Out);
			self.shake3.addEventListener("rollout", shake3Out);
			self.shake4.addEventListener("rollout", shake4Out);
			self.shake5.addEventListener("rollout", shake5Out);
			self.shake6.addEventListener("rollout", shake6Out);
			self.matokBtn.addEventListener("rollout", matokBtn_out);
			self.hamutzBtn.addEventListener("rollout", hamutzBtn_out);
			self.plus200calBtn.addEventListener("rollout", plus200calBtn_out);
			self.minus200calBtn.addEventListener("rollout", minus200calBtn_out);
		
		}
		
		function addClickToAll() {
			//self.shake1.addEventListener("click", shake1click);
			self.matokBtn.addEventListener("click", matokFilterToggle);
			self.hamutzBtn.addEventListener("click", hamutzFilterToggle);
			self.plus200calBtn.addEventListener("click", plus200calFilterToggle);
			self.minus200calBtn.addEventListener("click", minus200calFilterToggle);
		}
		
		function disabledMouse() {
			self.apple.mouseEnabled = false;
			self.blackberry.mouseEnabled = false;
			self.banana.mouseEnabled = false;
			self.blueberry.mouseEnabled = false;
			self.chia.mouseEnabled = false;
			self.cucumber.mouseEnabled = false;
			self.kiwi.mouseEnabled = false;
			self.mango.mouseEnabled = false;
			self.melon.mouseEnabled = false;
			self.mint.mouseEnabled = false;
			self.pineapple.mouseEnabled = false;
			self.raspberry.mouseEnabled = false;
		
			self.shake1.mouseEnabled = false;
			self.shake2.mouseEnabled = false;
			self.shake3.mouseEnabled = false;
			self.shake4.mouseEnabled = false;
			self.shake5.mouseEnabled = false;
			self.shake6.mouseEnabled = false;
		}
		
		function enableMouse() {
			self.apple.mouseEnabled = true;
			self.blackberry.mouseEnabled = true;
			self.banana.mouseEnabled = true;
			self.blueberry.mouseEnabled = true;
			self.chia.mouseEnabled = true;
			self.cucumber.mouseEnabled = true;
			self.kiwi.mouseEnabled = true;
			self.mango.mouseEnabled = true;
			self.melon.mouseEnabled = true;
			self.mint.mouseEnabled = true;
			self.pineapple.mouseEnabled = true;
			self.raspberry.mouseEnabled = true;
		
			self.shake1.mouseEnabled = true;
			self.shake2.mouseEnabled = true;
			self.shake3.mouseEnabled = true;
			self.shake4.mouseEnabled = true;
			self.shake5.mouseEnabled = true;
			self.shake6.mouseEnabled = true;
		}
		
		//פונקציה שמאפירה את כולם
		function disableFruits() {
			self.apple.gotoAndStop(1);
			self.blackberry.gotoAndStop(1);
			self.banana.gotoAndStop(1);
			self.blueberry.gotoAndStop(1);
			self.chia.gotoAndStop(1);
			self.cucumber.gotoAndStop(1);
			self.kiwi.gotoAndStop(1);
			self.mango.gotoAndStop(1);
			self.melon.gotoAndStop(1);
			self.mint.gotoAndStop(1);
			self.pineapple.gotoAndStop(1);
			self.raspberry.gotoAndStop(1);
		}
		
		//פונקציה שמציגה את כולם בצבעוני
		function enableFruits() {
			self.apple.gotoAndStop(0);
			self.blackberry.gotoAndStop(0);
			self.banana.gotoAndStop(0);
			self.blueberry.gotoAndStop(0);
			self.chia.gotoAndStop(0);
			self.cucumber.gotoAndStop(0);
			self.kiwi.gotoAndStop(0);
			self.mango.gotoAndStop(0);
			self.melon.gotoAndStop(0);
			self.mint.gotoAndStop(0);
			self.pineapple.gotoAndStop(0);
			self.raspberry.gotoAndStop(0);
		}
		
		//פונקציה שמאפירה את כל השייקים
		function disableShake() {
			self.shake1.gotoAndStop(2);
			self.shake2.gotoAndStop(2);
			self.shake3.gotoAndStop(2);
			self.shake4.gotoAndStop(2);
			self.shake5.gotoAndStop(2);
			self.shake6.gotoAndStop(2);
		}
		
		//פונקציה שמדליקה את כל השייקים
		function enableShake() {
			self.shake1.gotoAndStop(0);
			self.shake2.gotoAndStop(0);
			self.shake3.gotoAndStop(0);
			self.shake4.gotoAndStop(0);
			self.shake5.gotoAndStop(0);
			self.shake6.gotoAndStop(0);
		}
		
		//פונקציה ליציאת עכבר מכל הפירות
		function fruitOut() {
			if (matok == true) {
				matokOn();
			} else if (hamutz == true) {
				hamutzOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר לתפוח
		function appleIn() {
			disableFruits(); //תאפיר את כולם
			self.apple.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake2.gotoAndStop(1); //תציג רק את שייק 2 בצבעוני
			self.shake6.gotoAndStop(1); //תציג רק את שייק 6 בצבעוני
		
			if (hamutz == true || minus200cal == true) {
				self.shake2.gotoAndStop(1);
				self.shake6.gotoAndStop(1);
			}
		}
		
		//פונקציה למעבר עכבר פטל שחור
		function blackberryIn() {
			disableFruits(); //תאפיר את כולם
			self.blackberry.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
		
			if ((matok == true && plus200cal == true) || (matok == false && plus200cal == true)) {
				self.shake1.gotoAndStop(1);
				self.shake5.gotoAndStop(2);
			} else if ((matok == false && minus200cal == true) || (matok == true && minus200cal == true)) {
				self.shake1.gotoAndStop(2);
				self.shake5.gotoAndStop(1);
			} else {
				self.shake1.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
				self.shake5.gotoAndStop(1); //תציג רק את שייק 5 בצבעוני
			}
		}
		
		//פונקציה למעבר עכבר בננה
		function bananaIn() {
			disableFruits(); //תאפיר את כולם
			self.banana.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake1.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			self.shake3.gotoAndStop(1); //תציג רק את שייק 3 בצבעוני
			self.shake4.gotoAndStop(1); //תציג רק את שייק 4 בצבעוני
		
			if (matok == true) {
				self.shake5.gotoAndStop(2);
			}
		}
		
		//פונקציה למעבר עכבר אוכמניות
		function blueberryIn() {
			disableFruits(); //תאפיר את כולם
			self.blueberry.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
		
			if ((matok == true && plus200cal == true) || (matok == false && plus200cal == true)) {
				self.shake1.gotoAndStop(1);
				self.shake5.gotoAndStop(2);
			} else if ((matok == false && minus200cal == true) || (matok == true && minus200cal == true)) {
				self.shake1.gotoAndStop(2);
				self.shake5.gotoAndStop(1);
			} else {
				self.shake1.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
				self.shake5.gotoAndStop(1); //תציג רק את שייק 5 בצבעוני
			}
		}
		
		//פונקציה למעבר עכבר ציה
		function chiaIn() {
			disableFruits(); //תאפיר את כולם
			self.chia.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake3.gotoAndStop(1); //תציג רק את שייק 3 בצבעוני
		}
		
		//פונקציה למעבר עכבר מלפפון
		function cucumberIn() {
			disableFruits(); //תאפיר את כולם
			self.cucumber.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake6.gotoAndStop(1); //תציג רק את שייק 6 בצבעוני
		}
		
		//פונקציה למעבר עכבר קיוי
		function kiwiIn() {
			disableFruits(); //תאפיר את כולם
			self.kiwi.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake6.gotoAndStop(1); //תציג רק את שייק 6 בצבעוני
		}
		
		//פונקציה למעבר עכבר מנגו
		function mangoIn() {
			disableFruits(); //תאפיר את כולם
			self.mango.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake4.gotoAndStop(1); //תציג רק את שייק 4 בצבעוני
		}
		
		//פונקציה למעבר עכבר מלון
		function melonIn() {
			disableFruits(); //תאפיר את כולם
			self.melon.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
		
			self.shake2.gotoAndStop(1); //תציג רק את שייק 4 בצבעוני
			self.shake4.gotoAndStop(1); //תציג רק את שייק 4 בצבעוני
		
			if (matok == true || plus200cal == true) {
				self.shake4.gotoAndStop(1); //אם מתוק דלוק, מלון לא ישפיע על שייק 2
				self.shake2.gotoAndStop(2);
			}
		
			if (hamutz == true || minus200cal == true) {
				self.shake2.gotoAndStop(1); //אם מתוק דלוק, מלון לא ישפיע על שייק 2
				self.shake4.gotoAndStop(2);
			}
		}
		
		//פונקציה למעבר עכבר נענע
		function mintIn() {
			disableFruits(); //תאפיר את כולם
			self.mint.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			self.shake2.gotoAndStop(1); //תציג רק את שייק 2 בצבעוני
		}
		
		//פונקציה למעבר עכבר אננס
		function pineappleIn() {
			disableFruits(); //תאפיר את כולם
			self.pineapple.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
		
			if (matok == true || plus200cal == true) {
				self.shake3.gotoAndStop(1);
			} else if (hamutz == true || minus200cal == true) {
				self.shake6.gotoAndStop(1);
			} else {
				self.shake3.gotoAndStop(1);
				self.shake6.gotoAndStop(1);
			}
		}
		
		//פונקציה למעבר עכבר טפל
		function raspberryIn() {
			disableFruits(); //תאפיר את כולם
			self.raspberry.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
		
			if ((matok == true && plus200cal == true) || (matok == false && plus200cal == true)) {
				self.shake1.gotoAndStop(1);
				self.shake5.gotoAndStop(2);
			} else if ((matok == false && minus200cal == true) || (matok == true && minus200cal == true)) {
				self.shake1.gotoAndStop(2);
				self.shake5.gotoAndStop(1);
			} else {
				self.shake1.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
				self.shake5.gotoAndStop(1); //תציג רק את שייק 5 בצבעוני
			}
		}
		
		//פונקציה למעבר עכבר על שייק 1
		function shake1In() {
			disableShake(); //תאפיר את כולם
			self.shake1.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			self.blackberry.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.raspberry.gotoAndStop(2);
			self.blueberry.gotoAndStop(2);
			self.banana.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 1
		function shake1Out() {
			self.shake1.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 2
		function shake2In() {
			disableShake(); //תאפיר את כולם
			self.shake2.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			self.melon.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.apple.gotoAndStop(2);
			self.mint.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 2
		function shake2Out() {
			self.shake2.gotoAndStop(0);
		
			if (hamutz == true) {
				hamutzOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 3
		function shake3In() {
			disableShake(); //תאפיר את כולם
			self.shake3.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			self.pineapple.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.banana.gotoAndStop(2);
			self.chia.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 3
		function shake3Out() {
			self.shake3.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 4
		function shake4In() {
			disableShake(); //תאפיר את כולם
			self.shake4.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			self.mango.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.banana.gotoAndStop(2);
			self.melon.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 4
		function shake4Out() {
			self.shake4.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 5
		function shake5In() {
			disableShake(); //תאפיר את כולם
			self.shake5.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			self.blackberry.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.raspberry.gotoAndStop(2);
			self.blueberry.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 5
		function shake5Out() {
			self.shake5.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 6
		function shake6In() {
			disableShake(); //תאפיר את כולם
			self.shake6.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			self.cucumber.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.kiwi.gotoAndStop(2);
			self.pineapple.gotoAndStop(2);
			self.apple.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 6
		function shake6Out() {
			self.shake6.gotoAndStop(0);
		
			if (hamutz == true) {
				hamutzOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else {
				enableShake();
				enableFruits();
			}
		}
		
		function matokBtn_over() {
			self.matokBtn.gotoAndStop(1);
		
			if (matok == true) {
				self.matokBtn.gotoAndStop(2);
			}
		}
		
		function matokBtn_out() {
			self.matokBtn.gotoAndStop(0);
		
			if (matok == true) {
				self.matokBtn.gotoAndStop(2);
			}
		}
		
		function hamutzBtn_over() {
			self.hamutzBtn.gotoAndStop(1);
		
			if (hamutz == true) {
				self.hamutzBtn.gotoAndStop(2);
			}
		}
		
		function hamutzBtn_out() {
			self.hamutzBtn.gotoAndStop(0);
		
			if (hamutz == true) {
				self.hamutzBtn.gotoAndStop(2);
			}
		}
		
		function plus200calBtn_over() {
			self.plus200calBtn.gotoAndStop(1);
		
			if (plus200cal == true) {
				self.plus200calBtn.gotoAndStop(2);
			}
		}
		
		function plus200calBtn_out() {
			self.plus200calBtn.gotoAndStop(0);
		
			if (plus200cal == true) {
				self.plus200calBtn.gotoAndStop(2);
			}
		}
		
		function minus200calBtn_over() {
			self.minus200calBtn.gotoAndStop(1);
		
			if (minus200cal == true) {
				self.minus200calBtn.gotoAndStop(2);
			}
		}
		
		function minus200calBtn_out() {
			self.minus200calBtn.gotoAndStop(0);
		
			if (minus200cal == true) {
				self.minus200calBtn.gotoAndStop(2);
			}
		}
		
		function matokFilterToggle() {
			if (matok == false) {
				matokOn();
			} else {
				matok = false;
		
				if (plus200cal == true) {
					plus200calOn();
				} else if (minus200cal == true) {
					minus200calOn();
				} else {
					isHamutzEnabled();
					self.matokBtn.gotoAndStop(0);
					enableShake();
				}
			}
		}
		
		function hamutzFilterToggle() {
			if (hamutz == false) {
				hamutzOn();
			} else {
				hamutz = false;
		
				if (plus200cal == true) {
					plus200calOn();
				} else if (minus200cal == true) {
					minus200calOn();
				} else {
					isMatokEnabled();
					self.hamutzBtn.gotoAndStop(0);
					enableFruits();
					enableShake();
				}
			}
		}
		
		function plus200calFilterToggle() {
			if (plus200cal == false) {
				plus200calOn();
			} else {
				plus200cal = false;
		
				if (hamutz == true) {
					hamutzOn();
				} else if (matok == true) {
					matokOn();
				} else {
					isMinus200calEnabled();
					self.plus200calBtn.gotoAndStop(0);
					enableFruits();
					enableMouse();
					enableShake();
				}
			}
		}
		
		function minus200calFilterToggle() {
			if (minus200cal == false) {
				minus200calOn();
			} else {
				minus200cal = false;
		
				if (hamutz == true) {
					hamutzOn();
				} else if (matok == true) {
					matokOn();
				} else {
					isMinus200calDisabled();
					self.minus200calBtn.gotoAndStop(0);
					enableShake();
					enableFruits();
					enableMouse();
				}
			}
		}
		
		function matokOn() {
			matok = true;
			hamutz = false;
			self.hamutzBtn.gotoAndStop(0);
			self.matokBtn.gotoAndStop(2);
			disableShake();
		
			if (minus200cal == true) {
				minus200Matok();
				self.shake5.gotoAndStop(1);
				self.shake1.gotoAndStop(2);
				self.shake3.gotoAndStop(2);
				self.shake4.gotoAndStop(2);
			} else {
		
				if (plus200cal == true) {
					self.shake5.gotoAndStop(2);
				} else {
					self.shake5.gotoAndStop(1);
				}
		
				self.shake1.gotoAndStop(1);
				self.shake3.gotoAndStop(1);
				self.shake4.gotoAndStop(1);
		
				// if matok is true this fruits doesnt works
				isHamutzDisabled();
		
				isMatokEnabled();
			}
		}
		
		function hamutzOn() {
			hamutz = true;
			matok = false;
			self.matokBtn.gotoAndStop(0);
			self.hamutzBtn.gotoAndStop(2);
			disableShake();
		
			if (plus200cal == true) {
				more200Hamutz();
			} else if (minus200cal == true) {
				self.shake2.gotoAndStop(1);
				self.shake6.gotoAndStop(1);
		
				//
				isMatokDisabled();
		
				isHamutzEnabled();
			} else {
				self.shake2.gotoAndStop(1);
				self.shake6.gotoAndStop(1);
		
				//
				isMatokDisabled();
		
				isHamutzEnabled();
			}
		}
		
		function plus200calOn() {
			plus200cal = true;
			minus200cal = false;
			self.minus200calBtn.gotoAndStop(0);
			self.plus200calBtn.gotoAndStop(2);
			disableShake();
		
			if (hamutz == true) {
				more200Hamutz();
			} else {
				self.shake1.gotoAndStop(1);
				self.shake3.gotoAndStop(1);
				self.shake4.gotoAndStop(1);
		
				// if pluss200cal is true this shakes and fruits doesnt works
				isMinus200calDisabled();
		
				isPlus200calEnabled();
			}
		}
		
		function minus200calOn() {
			minus200cal = true;
			plus200cal = false;
			self.minus200calBtn.gotoAndStop(2);
			self.plus200calBtn.gotoAndStop(0);
			disableShake();
		
			if (matok == true) {
				minus200Matok();
			} else if (hamutz == true) {
				minus200Hamutz();
			} else{
				self.shake2.gotoAndStop(1);
				self.shake5.gotoAndStop(1);
				self.shake6.gotoAndStop(1);
		
				// if minus200cal is true this shakes and fruits doesnt works
				isPlus200calDisabled();
		
				isMinus200calEnabled();
			}
		}
		
		function isPlus200calEnabled() {
			self.shake1.mouseEnabled = true;
			self.shake3.mouseEnabled = true;
			self.shake4.mouseEnabled = true;
		
			//
			enableFruits();
			self.kiwi.gotoAndStop(1);
			self.apple.gotoAndStop(1);
			self.cucumber.gotoAndStop(1);
			self.mint.gotoAndStop(1);
			self.kiwi.mouseEnabled = false;
			self.apple.mouseEnabled = false;
			self.cucumber.mouseEnabled = false;
			self.mint.mouseEnabled = false;
		
		}
		
		function isPlus200calDisabled() {
			self.shake1.mouseEnabled = false;
			self.shake3.mouseEnabled = false;
			self.shake4.mouseEnabled = false;
		
			//
			self.kiwi.gotoAndStop(0);
			self.apple.gotoAndStop(0);
			self.cucumber.gotoAndStop(0);
			self.mint.gotoAndStop(0);
			self.kiwi.mouseEnabled = true;
			self.apple.mouseEnabled = true;
			self.cucumber.mouseEnabled = true;
			self.mint.mouseEnabled = true;
		}
		
		function isMinus200calEnabled() {
			self.shake2.mouseEnabled = true;
			self.shake5.mouseEnabled = true;
			self.shake6.mouseEnabled = true;
		
			//
			enableFruits();
			self.mango.gotoAndStop(1);
			self.banana.gotoAndStop(1);
			self.chia.gotoAndStop(1);
			self.chia.mouseEnabled = false;
			self.mango.mouseEnabled = false;
			self.banana.mouseEnabled = false;
		}
		
		function isMinus200calDisabled() {
			self.shake2.mouseEnabled = false;
			self.shake5.mouseEnabled = false;
			self.shake6.mouseEnabled = false;
		
			//
			self.mango.gotoAndStop(0);
			self.banana.gotoAndStop(0);
			self.chia.gotoAndStop(0);
			self.chia.mouseEnabled = true;
			self.mango.mouseEnabled = true;
			self.banana.mouseEnabled = true;
		}
		
		function isHamutzEnabled() {
			self.shake2.mouseEnabled = true;
			self.shake6.mouseEnabled = true;
			self.apple.mouseEnabled = true;
			self.mint.mouseEnabled = true;
			self.kiwi.mouseEnabled = true;
			self.cucumber.mouseEnabled = true;
			self.pineapple.mouseEnabled = true;
			self.melon.mouseEnabled = true;
		
			//do the fruits colored
			self.apple.gotoAndStop(0);
			self.mint.gotoAndStop(0);
			self.kiwi.gotoAndStop(0);
			self.cucumber.gotoAndStop(0);
			self.pineapple.gotoAndStop(0);
			self.melon.gotoAndStop(0);
		}
		
		function isHamutzDisabled() {
			self.shake2.mouseEnabled = false;
			self.shake6.mouseEnabled = false;
			self.apple.mouseEnabled = false;
			self.mint.mouseEnabled = false;
			self.kiwi.mouseEnabled = false;
			self.cucumber.mouseEnabled = false;
			self.pineapple.mouseEnabled = false;
			self.melon.mouseEnabled = false;
		
			//do the fruits gray
			self.apple.gotoAndStop(1);
			self.mint.gotoAndStop(1);
			self.kiwi.gotoAndStop(1);
			self.cucumber.gotoAndStop(1);
			self.pineapple.gotoAndStop(1);
			self.melon.gotoAndStop(1);
		}
		
		function isMatokEnabled() {
			self.shake1.mouseEnabled = true;
			self.shake3.mouseEnabled = true;
			self.shake4.mouseEnabled = true;
			self.shake5.mouseEnabled = true;
			self.banana.mouseEnabled = true;
			self.chia.mouseEnabled = true;
			self.blackberry.mouseEnabled = true;
			self.raspberry.mouseEnabled = true;
			self.blueberry.mouseEnabled = true;
			self.mango.mouseEnabled = true;
			self.melon.mouseEnabled = true;
			self.pineapple.mouseEnabled = true;
		
			self.banana.gotoAndStop(0);
			self.chia.gotoAndStop(0);
			self.blackberry.gotoAndStop(0);
			self.raspberry.gotoAndStop(0);
			self.blueberry.gotoAndStop(0);
			self.mango.gotoAndStop(0);
			self.melon.gotoAndStop(0);
			self.pineapple.gotoAndStop(0);
		}
		
		function isMatokDisabled() {
			self.shake1.mouseEnabled = false;
			self.shake3.mouseEnabled = false;
			self.shake4.mouseEnabled = false;
			self.shake5.mouseEnabled = false;
			self.banana.mouseEnabled = false;
			self.chia.mouseEnabled = false;
			self.blackberry.mouseEnabled = false;
			self.raspberry.mouseEnabled = false;
			self.blueberry.mouseEnabled = false;
			self.mango.mouseEnabled = false;
			self.melon.mouseEnabled = false;
			self.pineapple.mouseEnabled = false;
		
			self.banana.gotoAndStop(1);
			self.chia.gotoAndStop(1);
			self.blackberry.gotoAndStop(1);
			self.raspberry.gotoAndStop(1);
			self.blueberry.gotoAndStop(1);
			self.mango.gotoAndStop(1);
			self.melon.gotoAndStop(1);
			self.pineapple.gotoAndStop(1);
		}
		
		
		//Multiply Filters Functionality
		
		function more200Hamutz() {
			disableFruits();
			disabledMouse();
			disableShake();
			self.matokBtn.gotoAndStop(0);
		}
		
		function minus200Matok() {
			disableFruits();
			disableShake();
			disabledMouse();
		
			self.shake5.gotoAndStop(1);
			self.shake5.mouseEnabled = true;
			self.blackberry.mouseEnabled = true;
			self.raspberry.mouseEnabled = true;
			self.blueberry.mouseEnabled = true;
			self.blackberry.gotoAndStop(0);
			self.raspberry.gotoAndStop(0);
			self.blueberry.gotoAndStop(0);
		}
		
		function minus200Hamutz() {	
			self.shake2.gotoAndStop(1);
			self.shake6.gotoAndStop(1);
			
			enableFruits();
		
			self.shake5.gotoAndStop(2);
			self.shake5.mouseEnabled = false;
			self.chia.mouseEnabled = false;
			self.mango.mouseEnabled = false;
			self.banana.mouseEnabled = false;
			self.blackberry.mouseEnabled = false;
			self.raspberry.mouseEnabled = false;
			self.blueberry.mouseEnabled = false;
			self.chia.gotoAndStop(1);
			self.mango.gotoAndStop(1);
			self.banana.gotoAndStop(1);
			self.blackberry.gotoAndStop(1);
			self.raspberry.gotoAndStop(1);
			self.blueberry.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.hamutzBtn = new lib.hamutzai();
	this.hamutzBtn.name = "hamutzBtn";
	this.hamutzBtn.setTransform(777.35,-26.25,4.3784,4.3784);

	this.instance = new lib.border();
	this.instance.setTransform(1003.55,-618.5,8.135,16.5558,0,0,0,0.2,-0.1);

	this.minus200calBtn = new lib.minus200calai();
	this.minus200calBtn.name = "minus200calBtn";
	this.minus200calBtn.setTransform(1012,-23.35,4.3784,4.3784);

	this.plus200calBtn = new lib.plus200calai();
	this.plus200calBtn.name = "plus200calBtn";
	this.plus200calBtn.setTransform(1104.3,-25.7,4.3784,4.3784);

	this.matokBtn = new lib.matokai();
	this.matokBtn.name = "matokBtn";
	this.matokBtn.setTransform(866.15,-26.25,4.3784,4.3784);

	this.instance_1 = new lib.textFrame();
	this.instance_1.setTransform(604.85,392.2,1,1.2159,0,0,0,169.2,241.6);

	this.shake5 = new lib.shake5();
	this.shake5.name = "shake5";
	this.shake5.setTransform(1033.1,568,0.1608,0.1608,0,0,0,682.4,682.4);

	this.shake6 = new lib.shake6();
	this.shake6.name = "shake6";
	this.shake6.setTransform(1199.4,558.25,0.1794,0.1794,0,0,0,682.1,682.1);

	this.shake2 = new lib.shake2();
	this.shake2.name = "shake2";
	this.shake2.setTransform(1022.7,305.95,0.1659,0.1659,0,0,0,682.3,682.3);

	this.shake3 = new lib.shake3();
	this.shake3.name = "shake3";
	this.shake3.setTransform(1194.35,314.15,0.175,0.175,0,0,0,682.1,682.1);

	this.shake4 = new lib.shake4();
	this.shake4.name = "shake4";
	this.shake4.setTransform(862.7,562.9,0.1659,0.1659,0,0,0,682.4,682.4);

	this.shake1 = new lib.shake1();
	this.shake1.name = "shake1";
	this.shake1.setTransform(857.7,304.1,0.1732,0.1732,0,0,0,682,682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shake1},{t:this.shake4},{t:this.shake3},{t:this.shake2},{t:this.shake6},{t:this.shake5},{t:this.instance_1},{t:this.matokBtn},{t:this.plus200calBtn},{t:this.minus200calBtn},{t:this.instance},{t:this.hamutzBtn}]}).wait(1));

	// title
	this.instance_2 = new lib.border();
	this.instance_2.setTransform(776.95,-618.5,6.9154,16.5558,0,0,0,0.2,-0.1);

	this.text = new cjs.Text("?מה הטעם שלך", "normal 700 30px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(900.85,114.5);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}

	this.text_1 = new cjs.Text("?יש הגבלה", "normal 700 30px 'Amatic SC'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 44;
	this.text_1.lineWidth = 94;
	this.text_1.parent = this;
	this.text_1.setTransform(1149,114.5);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("?מ ה   ה ש י י ק   ש ל ך", "normal 700 90px 'Amatic SC'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 128;
	this.text_2.lineWidth = 1275;
	this.text_2.parent = this;
	this.text_2.setTransform(640.5,3.1);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_2}]}).wait(1));

	// Layer_1
	this.raspberry = new lib.raspberry();
	this.raspberry.name = "raspberry";
	this.raspberry.setTransform(353.85,363.2,0.331,0.331,0,0,0,200,200.2);

	this.pineapple = new lib.pinapple();
	this.pineapple.name = "pineapple";
	this.pineapple.setTransform(73.5,340.05,0.3328,0.3328,14.9966,0,0,200.5,200.3);

	this.mint = new lib.mint();
	this.mint.name = "mint";
	this.mint.setTransform(20.1,572.9,0.3007,0.3007);

	this.melon = new lib.melon();
	this.melon.name = "melon";
	this.melon.setTransform(220.7,494.6,0.288,0.288,0,0,0,200,200);

	this.mango = new lib.mango();
	this.mango.name = "mango";
	this.mango.setTransform(207.5,347.05,0.2598,0.2598,0,0,0,200.3,200.3);

	this.kiwi = new lib.kiwi();
	this.kiwi.name = "kiwi";
	this.kiwi.setTransform(78.8,499.6,0.308,0.308,0,0,0,200.1,200.1);

	this.cucumber = new lib.cucumber();
	this.cucumber.name = "cucumber";
	this.cucumber.setTransform(222.45,644,0.3204,0.3204,0,0,0,200.1,200.1);

	this.chia = new lib.chia();
	this.chia.name = "chia";
	this.chia.setTransform(353.2,216.3,0.2938,0.2938,0,0,0,200.2,200.3);

	this.blueberry = new lib.bluebarry();
	this.blueberry.name = "blueberry";
	this.blueberry.setTransform(82.9,214.95,0.2875,0.2875,0,0,0,200,200);

	this.banana = new lib.banana();
	this.banana.name = "banana";
	this.banana.setTransform(361.25,499.8,0.294,0.294,0,0,0,200.1,200.1);

	this.blackberry = new lib.braspberry();
	this.blackberry.name = "blackberry";
	this.blackberry.setTransform(209.35,200.8,0.255,0.255,0,0,0,200,200);

	this.apple = new lib.apple();
	this.apple.name = "apple";
	this.apple.setTransform(315.1,592.9,0.2272,0.2272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.apple},{t:this.blackberry},{t:this.banana},{t:this.blueberry},{t:this.chia},{t:this.cucumber},{t:this.kiwi},{t:this.mango},{t:this.melon},{t:this.mint},{t:this.pineapple},{t:this.raspberry}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(632.2,361.1,689.5999999999999,347);
// library properties:
lib.properties = {
	id: '09B57767F5E9854284EA7C135958F993',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/shake_atlas_1.png?1602324519867", id:"shake_atlas_1"},
		{src:"images/shake_atlas_2.png?1602324519867", id:"shake_atlas_2"},
		{src:"images/shake_atlas_3.png?1602324519867", id:"shake_atlas_3"},
		{src:"images/shake_atlas_4.png?1602324519867", id:"shake_atlas_4"},
		{src:"images/shake_atlas_5.png?1602324519867", id:"shake_atlas_5"},
		{src:"images/shake_atlas_6.png?1602324519867", id:"shake_atlas_6"},
		{src:"images/shake_atlas_7.png?1602324519867", id:"shake_atlas_7"},
		{src:"images/shake_atlas_8.png?1602324519867", id:"shake_atlas_8"},
		{src:"images/shake_atlas_9.png?1602324519868", id:"shake_atlas_9"},
		{src:"images/shake_atlas_10.png?1602324519868", id:"shake_atlas_10"},
		{src:"images/shake_atlas_11.png?1602324519868", id:"shake_atlas_11"},
		{src:"images/shake_atlas_12.png?1602324519868", id:"shake_atlas_12"},
		{src:"images/shake_atlas_13.png?1602324519868", id:"shake_atlas_13"},
		{src:"images/shake_atlas_14.png?1602324519868", id:"shake_atlas_14"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['09B57767F5E9854284EA7C135958F993'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;