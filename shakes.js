(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"shakes_atlas_1", frames: [[0,0,1383,1974]]},
		{name:"shakes_atlas_2", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_3", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_4", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_5", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_6", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_7", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_8", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_9", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_10", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_11", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_12", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_13", frames: [[0,0,1364,1364]]},
		{name:"shakes_atlas_14", frames: [[1282,0,722,840],[0,0,1280,925],[1282,842,615,958],[0,927,615,958],[617,927,615,958]]},
		{name:"shakes_atlas_15", frames: [[0,946,624,921],[1243,847,624,842],[1231,0,624,845],[0,0,612,944],[614,0,615,906],[626,908,615,905]]},
		{name:"shakes_atlas_16", frames: [[1234,804,615,766],[617,0,615,805],[1234,0,615,802],[0,856,615,807],[0,0,615,854],[617,807,615,700]]},
		{name:"shakes_atlas_17", frames: [[617,0,400,400],[1019,0,400,400],[1421,0,400,400],[617,402,400,400],[1019,402,400,400],[1421,402,400,400],[598,804,400,400],[1000,804,400,400],[1402,804,400,400],[598,1206,400,400],[1000,1206,400,400],[1402,1206,400,400],[482,1608,400,400],[884,1608,400,400],[1286,1608,400,400],[0,0,615,665],[0,1332,480,679],[0,667,596,663]]},
		{name:"shakes_atlas_18", frames: [[1206,1206,122,108],[0,0,400,400],[0,402,400,400],[0,804,400,400],[0,1206,400,400],[0,1608,400,400],[402,0,400,400],[804,0,400,400],[1206,0,400,400],[1608,0,400,400],[402,402,400,400],[402,804,400,400],[402,1206,400,400],[402,1608,400,400],[804,402,400,400],[1206,402,400,400],[1608,402,400,400],[804,804,400,400],[804,1206,400,400],[804,1608,400,400],[1206,804,400,400],[1608,804,400,400]]}
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
	this.initialize(ss["shakes_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1raspberryblurberry = function() {
	this.initialize(ss["shakes_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1raspberryblurberry_gray = function() {
	this.initialize(ss["shakes_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2pineapleapplecucumberkiwimint = function() {
	this.initialize(ss["shakes_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2pineapleapplecucumberkiwimint_gray = function() {
	this.initialize(ss["shakes_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3melonapplemint = function() {
	this.initialize(ss["shakes_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3melonapplemint_gray = function() {
	this.initialize(ss["shakes_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4bananapineaplechia = function() {
	this.initialize(ss["shakes_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4bananapineaplechia_gray = function() {
	this.initialize(ss["shakes_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5bananamelonmango = function() {
	this.initialize(ss["shakes_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5bananamelonmango_gray = function() {
	this.initialize(ss["shakes_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6bananaberrys = function() {
	this.initialize(ss["shakes_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6bananaberrys_gray = function() {
	this.initialize(ss["shakes_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ananasText1 = function() {
	this.initialize(ss["shakes_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.appledisabled = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.applehover = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.applenormal = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bananadisabled = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bananahover = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.banananormal = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bananaText1 = function() {
	this.initialize(ss["shakes_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.burrydisabled = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.burryhover = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.burrynormal = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.chiadisabled = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.chiahover = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.chianormal = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.chiaText1 = function() {
	this.initialize(ss["shakes_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cucumberdisabled = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cucumberhover = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cucumbernormal = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hitLogo = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kiwidisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.kiwihover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.kiwinormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.kiwiText1 = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.mangodisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mangohover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mangonormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mangoText1 = function() {
	this.initialize(ss["shakes_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.melafefeonText1 = function() {
	this.initialize(ss["shakes_atlas_16"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.melondisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.melonhover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.melonnormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.melonText1 = function() {
	this.initialize(ss["shakes_atlas_16"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mintdisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.minthover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mintnormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.nanaText1 = function() {
	this.initialize(ss["shakes_atlas_16"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ochmaniotText1 = function() {
	this.initialize(ss["shakes_atlas_15"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.odot1 = function() {
	this.initialize(ss["shakes_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pagezero = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.petelblackdisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.petelblackhover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.petelblacknormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.peteldisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.petelhover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.petelnormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.peteladomText1 = function() {
	this.initialize(ss["shakes_atlas_17"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.petelshahorText1 = function() {
	this.initialize(ss["shakes_atlas_15"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pineappledisabled = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.pineapplehover = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.pineapplenormal = function() {
	this.initialize(ss["shakes_atlas_18"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.shake1 = function() {
	this.initialize(ss["shakes_atlas_15"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shake2 = function() {
	this.initialize(ss["shakes_atlas_14"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shake3 = function() {
	this.initialize(ss["shakes_atlas_14"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shake4 = function() {
	this.initialize(ss["shakes_atlas_15"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shake5 = function() {
	this.initialize(ss["shakes_atlas_16"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shake6 = function() {
	this.initialize(ss["shakes_atlas_14"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tapuahText1 = function() {
	this.initialize(ss["shakes_atlas_16"]);
	this.gotoAndStop(5);
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
	this.instance.setTransform(0,0,0.2447,0.2447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textFrame, new cjs.Rectangle(0,0,338.5,483.1), null);


(lib.hitLogo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hitLogo();
	this.instance.setTransform(-61,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hitLogo_1, new cjs.Rectangle(-61,-54,122,108), null);


(lib.closeBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("X", "normal 400 50px 'Rubik'");
	this.text.lineHeight = 61;
	this.text.lineWidth = 32;
	this.text.parent = this;
	this.text.setTransform(-16.15,-29.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjrE8IAAp3IHXAAIAAJ3g");
	this.shape.setTransform(0.025,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.closeBtn, new cjs.Rectangle(-23.5,-33.6,47.1,65.2), null);


(lib.shake6_1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("ירוק ובריא", "normal 700 180px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 255;
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


(lib.shake5_1 = function(mode,startPosition,loop,reversed) {
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


(lib.shake4_1 = function(mode,startPosition,loop,reversed) {
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


(lib.shake3_1 = function(mode,startPosition,loop,reversed) {
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


(lib.shake2_1 = function(mode,startPosition,loop,reversed) {
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


(lib.shake1_1 = function(mode,startPosition,loop,reversed) {
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


(lib.odotModal = function(mode,startPosition,loop,reversed) {
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
	this.freepikLink = new cjs.Text("Designed by  freepik/freepik.com", "normal 400 15px 'Rubik'", "#006D6D");
	this.freepikLink.name = "freepikLink";
	this.freepikLink.textAlign = "center";
	this.freepikLink.lineHeight = 18;
	this.freepikLink.lineWidth = 244;
	this.freepikLink.parent = this;
	this.freepikLink.setTransform(-217.95,132.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.freepikLink);
	}

	this.text = new cjs.Text("לתמונות השייקים - צילום ועריכה: עדן אלבז\n:לתמונות המרכיבים - נעשה שימוש במאגר תמונות", "normal 400 15px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 320;
	this.text.parent = this;
	this.text.setTransform(211.95,113.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.closeModal = new lib.closeBtn();
	this.closeModal.name = "closeModal";
	this.closeModal.setTransform(-352.85,-236.65,0.7868,0.7868,0,0,0,0,-1);

	this.telemLink = new cjs.Text("הפקולטה לטכנולוגיות למידה", "normal 400 15px 'Rubik'", "#0A666F");
	this.telemLink.name = "telemLink";
	this.telemLink.textAlign = "right";
	this.telemLink.lineHeight = 18;
	this.telemLink.lineWidth = 178;
	this.telemLink.parent = this;
	this.telemLink.setTransform(-45.55,81.1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.telemLink);
	}

	this.hitLogoBtn = new lib.hitLogo_1();
	this.hitLogoBtn.name = "hitLogoBtn";
	this.hitLogoBtn.setTransform(-135.7,38.35,0.7102,0.7102);

	this.instance = new lib.odot1();
	this.instance.setTransform(-415,-294,0.6603,0.6603);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Ehx1BAnMAAAiBNMDjrAAAMAAACBNg");
	this.shape.setTransform(-8.775,9.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.hitLogoBtn},{t:this.telemLink},{t:this.closeModal},{t:this.text},{t:this.freepikLink}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.odotModal, new cjs.Rectangle(-737.4,-403.6,1457.3,827), null);


(lib.infoText = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// exit
	this.closeBtn = new lib.closeBtn();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.setTransform(524.65,-359.15,0.7459,0.7459);
	this.closeBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(1).to({_off:false},0).wait(24));

	// text
	this.instance = new lib.pagezero();
	this.instance.setTransform(507,-346,1.1772,1.1772);

	this.instance_1 = new lib.ochmaniotText1();
	this.instance_1.setTransform(510,-336,0.9476,0.9476);

	this.instance_2 = new lib.petelshahorText1();
	this.instance_2.setTransform(507,-335,0.9822,0.9822);

	this.closeBtn_1 = new lib.closeBtn();
	this.closeBtn_1.name = "closeBtn_1";
	this.closeBtn_1.setTransform(524.65,-359.15,0.7459,0.7459);

	this.instance_3 = new lib.chiaText1();
	this.instance_3.setTransform(489,-336);

	this.instance_4 = new lib.ananasText1();
	this.instance_4.setTransform(483,-336);

	this.instance_5 = new lib.mangoText1();
	this.instance_5.setTransform(383,-336);

	this.instance_6 = new lib.peteladomText1();
	this.instance_6.setTransform(512,-336);

	this.instance_7 = new lib.kiwiText1();
	this.instance_7.setTransform(490,-343);

	this.instance_8 = new lib.melonText1();
	this.instance_8.setTransform(492,-336);

	this.instance_9 = new lib.bananaText1();
	this.instance_9.setTransform(490,-336);

	this.instance_10 = new lib.nanaText1();
	this.instance_10.setTransform(494,-336);

	this.instance_11 = new lib.melafefeonText1();
	this.instance_11.setTransform(494,-336);

	this.instance_12 = new lib.tapuahText1();
	this.instance_12.setTransform(496,-336);

	this.instance_13 = new lib.shake1();
	this.instance_13.setTransform(514,-336,0.9507,0.9507);

	this.instance_14 = new lib.shake2();
	this.instance_14.setTransform(529,-336,0.9122,0.9122);

	this.instance_15 = new lib.shake3();
	this.instance_15.setTransform(528,-337,0.9106,0.9106);

	this.instance_16 = new lib.shake4();
	this.instance_16.setTransform(510,-336,0.9545,0.9545);

	this.instance_17 = new lib.shake5();
	this.instance_17.setTransform(508,-336,0.9748,0.9748);

	this.instance_18 = new lib.shake6();
	this.instance_18.setTransform(529,-336,0.9139,0.9139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.closeBtn_1},{t:this.instance_2}]},1).to({state:[{t:this.closeBtn_1},{t:this.instance_3}]},1).to({state:[{t:this.closeBtn_1},{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).wait(6));

	// bg
	this.instance_19 = new lib.textFrame();
	this.instance_19.setTransform(793.05,71.55,1.8421,2.0431,0,0,0,169.3,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(383,-421.8,731,1014);


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


(lib.odotai = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("אודות", "normal 400 3px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 4;
	this.text.lineWidth = 14;
	this.text.parent = this;
	this.text.setTransform(18.25,44.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({text:"חמוץ"},0).wait(1));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(18.35,45.8,0.6314,1.0671,0,0,0,18.2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

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
(lib.shakes = function(mode,startPosition,loop,reversed) {
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
		self.modalLayer.visible = false; //מסתיר את המודל
		
		stage.cursor = 'default';
		var odot = false; //הסתרה של רקע כפתור אודות
		var matok = false; //מנקה פילטר של קלוריות
		var hamutz = false; //מנקה פילטר של טעם
		var plus200cal = false; //פילטר מעל 200 קל' מכובה
		var minus200cal = false; //פילטר מתחת ל200 קל' מכובה
		var isTextShow = false; //טקסט אמצעי מוסתר
		addListenerToAll(); //מפעיל את הפונקציה שמקשיבה לפעולות העכבר לכולם
		addClickToAll(); //קריאה לפונקצית לחיצה על עכבר לכולם
		
		function addListenerToAll() {	
			//תקשיב למעבר עכבר לכולם
			self.modalLayer.hitLogoBtn.addEventListener("rollover", goToHitUrlIn);
			self.modalLayer.telemLink.addEventListener("rollover", goToTelemUrlIn);
			self.modalLayer.freepikLink.addEventListener("rollover", goToFreepikUrlIn);
			self.modalLayer.closeModal.addEventListener("rollover", closeOdotIn);
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
			self.odotBtn.addEventListener("rollover", odotBtn_over);
			self.matokBtn.addEventListener("rollover", matokBtn_over);
			self.hamutzBtn.addEventListener("rollover", hamutzBtn_over);
			self.plus200calBtn.addEventListener("rollover", plus200calBtn_over);
			self.minus200calBtn.addEventListener("rollover", minus200calBtn_over);
		
			//תקשיב ליציאה עכבר לכולם
			self.modalLayer.hitLogoBtn.addEventListener("rollout", goToHitUrlOut);
			self.modalLayer.telemLink.addEventListener("rollout", goToTelemUrlOut);
			self.modalLayer.freepikLink.addEventListener("rollout", goToFreepikUrlOut);
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
			self.odotBtn.addEventListener("rollout", odotBtn_out);
			self.matokBtn.addEventListener("rollout", matokBtn_out);
			self.hamutzBtn.addEventListener("rollout", hamutzBtn_out);
			self.plus200calBtn.addEventListener("rollout", plus200calBtn_out);
			self.minus200calBtn.addEventListener("rollout", minus200calBtn_out);
		
		}
		
		function addClickToAll() {
			//תקשיב לקליק עכבר לכולם
			self.odotBtn.addEventListener("click", odotClick);
			self.modalLayer.hitLogoBtn.addEventListener("click", goToHitUrl);
			self.modalLayer.telemLink.addEventListener("click", goToTelemUrl);
			self.modalLayer.freepikLink.addEventListener("click", goToFreepikUrl);
			self.modalLayer.closeModal.addEventListener("click", closeOdot);
			self.infoLabel.closeBtn.addEventListener("click", closeClick);
			self.blueberry.addEventListener("click", blueberryClick);
			self.blackberry.addEventListener("click", blackberryClick);
			self.chia.addEventListener("click", chiaClick);
			self.pineapple.addEventListener("click", pineappleClick);
			self.mango.addEventListener("click", mangoClick);
			self.raspberry.addEventListener("click", raspberryClick);
			self.kiwi.addEventListener("click", kiwiClick);
			self.melon.addEventListener("click", melonClick);
			self.banana.addEventListener("click", bananaClick);
			self.mint.addEventListener("click", mintClick);
			self.cucumber.addEventListener("click", cucumberClick);
			self.apple.addEventListener("click", appleClick);
			self.shake1.addEventListener("click", shake1Click);
			self.shake2.addEventListener("click", shake2Click);
			self.shake3.addEventListener("click", shake3Click);
			self.shake4.addEventListener("click", shake4Click);
			self.shake5.addEventListener("click", shake5Click);
			self.shake6.addEventListener("click", shake6Click);
			self.matokBtn.addEventListener("click", matokFilterToggle);
			self.hamutzBtn.addEventListener("click", hamutzFilterToggle);
			self.plus200calBtn.addEventListener("click", plus200calFilterToggle);
			self.minus200calBtn.addEventListener("click", minus200calFilterToggle);
		}
		
		function removeClickToAll() {
			//מסהיר קליק עכבר לכולם
			self.blueberry.removeEventListener("click", blueberryClick);
			self.blackberry.removeEventListener("click", blackberryClick);
			self.chia.removeEventListener("click", chiaClick);
			self.pineapple.removeEventListener("click", pineappleClick);
			self.mango.removeEventListener("click", mangoClick);
			self.raspberry.removeEventListener("click", raspberryClick);
			self.kiwi.removeEventListener("click", kiwiClick);
			self.melon.removeEventListener("click", melonClick);
			self.banana.removeEventListener("click", bananaClick);
			self.mint.removeEventListener("click", mintClick);
			self.cucumber.removeEventListener("click", cucumberClick);
			self.apple.removeEventListener("click", appleClick);
			self.shake1.removeEventListener("click", shake1Click);
			self.shake2.removeEventListener("click", shake2Click);
			self.shake3.removeEventListener("click", shake3Click);
			self.shake4.removeEventListener("click", shake4Click);
			self.shake5.removeEventListener("click", shake5Click);
			self.shake6.removeEventListener("click", shake6Click);
			self.matokBtn.removeEventListener("click", matokFilterToggle);
			self.hamutzBtn.removeEventListener("click", hamutzFilterToggle);
			self.plus200calBtn.removeEventListener("click", plus200calFilterToggle);
			self.minus200calBtn.removeEventListener("click", minus200calFilterToggle);
		}
		
		function disabledMouse() {
			//מנטרל עכבר לכולם
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
		
		function disableMouseOver() {
			//מנטרל מעבר עכבר לכולם
			self.apple.removeEventListener("rollover", appleIn);
			self.blackberry.removeEventListener("rollover", blackberryIn);
			self.banana.removeEventListener("rollover", bananaIn);
			self.blueberry.removeEventListener("rollover", blueberryIn);
			self.chia.removeEventListener("rollover", chiaIn);
			self.cucumber.removeEventListener("rollover", cucumberIn);
			self.kiwi.removeEventListener("rollover", kiwiIn);
			self.mango.removeEventListener("rollover", mangoIn);
			self.melon.removeEventListener("rollover", melonIn);
			self.mint.removeEventListener("rollover", mintIn);
			self.pineapple.removeEventListener("rollover", pineappleIn);
			self.raspberry.removeEventListener("rollover", raspberryIn);
			self.shake1.removeEventListener("rollover", shake1In);
			self.shake2.removeEventListener("rollover", shake2In);
			self.shake3.removeEventListener("rollover", shake3In);
			self.shake4.removeEventListener("rollover", shake4In);
			self.shake5.removeEventListener("rollover", shake5In);
			self.shake6.removeEventListener("rollover", shake6In);
			self.matokBtn.removeEventListener("rollover", matokBtn_over);
			self.hamutzBtn.removeEventListener("rollover", hamutzBtn_over);
			self.plus200calBtn.removeEventListener("rollover", plus200calBtn_over);
			self.minus200calBtn.removeEventListener("rollover", minus200calBtn_over);
			
			self.apple.removeEventListener("rollout", fruitOut);
			self.blackberry.removeEventListener("rollout", fruitOut);
			self.banana.removeEventListener("rollout", fruitOut);
			self.blueberry.removeEventListener("rollout", fruitOut);
			self.chia.removeEventListener("rollout", fruitOut);
			self.cucumber.removeEventListener("rollout", fruitOut);
			self.kiwi.removeEventListener("rollout", fruitOut);
			self.mango.removeEventListener("rollout", fruitOut);
			self.melon.removeEventListener("rollout", fruitOut);
			self.mint.removeEventListener("rollout", fruitOut);
			self.pineapple.removeEventListener("rollout", fruitOut);
			self.raspberry.removeEventListener("rollout", fruitOut);
			self.shake1.removeEventListener("rollout", shake1Out);
			self.shake2.removeEventListener("rollout", shake2Out);
			self.shake3.removeEventListener("rollout", shake3Out);
			self.shake4.removeEventListener("rollout", shake4Out);
			self.shake5.removeEventListener("rollout", shake5Out);
			self.shake6.removeEventListener("rollout", shake6Out);
			self.matokBtn.removeEventListener("rollout", matokBtn_out);
			self.hamutzBtn.removeEventListener("rollout", hamutzBtn_out);
			self.plus200calBtn.removeEventListener("rollout", plus200calBtn_out);
			self.minus200calBtn.removeEventListener("rollout", minus200calBtn_out);
		}
		
		function enableMouse() {
			//מדליק עכבר לכולם
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
		
		function disableFruits() {
			//פונקציה שמאפירה את כולם
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
		
		function enableFilters() {
			//מפעיל עכבר לפילטרים
			self.matokBtn.mouseEnabled = true;
			self.hamutzBtn.mouseEnabled = true;
			self.plus200calBtn.mouseEnabled = true;
			self.minus200calBtn.mouseEnabled = true;
		}
		
		function disableFilters() {
			//מנטרל עכבר לפילטרים
			self.matokBtn.mouseEnabled = false;
			self.hamutzBtn.mouseEnabled = false;
			self.plus200calBtn.mouseEnabled = false;
			self.minus200calBtn.mouseEnabled = false;
		}
		
		function removeAllFilters() {
			//מאפס פילטרים
			matok = false;
			hamutz = false;
			plus200cal = false;
			minus200cal = false;
			
			self.matokBtn.gotoAndStop(0);
			self.hamutzBtn.gotoAndStop(0);
			self.plus200calBtn.gotoAndStop(0);
			self.minus200calBtn.gotoAndStop(0);
		}
		
		function enableFruits() {
			//פונקציה שמציגה את כולם בצבעוני
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
		
		function resetAll() {
			//מאפס הכל
			enableFruits();
			enableShake();
			enableFilters();
		}
		
		function disableShake() {
			//פונקציה שמאפירה את כל השייקים
			self.shake1.gotoAndStop(2);
			self.shake2.gotoAndStop(2);
			self.shake3.gotoAndStop(2);
			self.shake4.gotoAndStop(2);
			self.shake5.gotoAndStop(2);
			self.shake6.gotoAndStop(2);
		}
		
		function enableShake() {
			//פונקציה שמדליקה את כל השייקים
			self.shake1.gotoAndStop(0);
			self.shake2.gotoAndStop(0);
			self.shake3.gotoAndStop(0);
			self.shake4.gotoAndStop(0);
			self.shake5.gotoAndStop(0);
			self.shake6.gotoAndStop(0);
		}
		
		function fruitOut() {
			//פונקציה ליציאת עכבר מכל הפירות
			stage.cursor = 'default';
			
			if (matok == true) {
				matokOn();
			} else if (hamutz == true) {
				hamutzOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else if (isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר לתפוח
		function appleIn() {
			disableFruits(); //תאפיר את כולם
			self.apple.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			stage.cursor = 'pointer';
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
			stage.cursor = 'pointer';
		
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
			stage.cursor = 'pointer';
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
			stage.cursor = 'pointer';
		
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
			stage.cursor = 'pointer';
			self.shake3.gotoAndStop(1); //תציג רק את שייק 3 בצבעוני
		}
		
		//פונקציה למעבר עכבר מלפפון
		function cucumberIn() {
			disableFruits(); //תאפיר את כולם
			self.cucumber.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			stage.cursor = 'pointer';
			self.shake6.gotoAndStop(1); //תציג רק את שייק 6 בצבעוני
		}
		
		//פונקציה למעבר עכבר קיוי
		function kiwiIn() {
			disableFruits(); //תאפיר את כולם
			self.kiwi.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			stage.cursor = 'pointer';
			self.shake6.gotoAndStop(1); //תציג רק את שייק 6 בצבעוני
		}
		
		//פונקציה למעבר עכבר מנגו
		function mangoIn() {
			disableFruits(); //תאפיר את כולם
			self.mango.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			stage.cursor = 'pointer';
			self.shake4.gotoAndStop(1); //תציג רק את שייק 4 בצבעוני
		}
		
		//פונקציה למעבר עכבר מלון
		function melonIn() {
			disableFruits(); //תאפיר את כולם
			self.melon.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			stage.cursor = 'pointer';
		
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
			stage.cursor = 'pointer';
			self.shake2.gotoAndStop(1); //תציג רק את שייק 2 בצבעוני
		}
		
		//פונקציה למעבר עכבר אננס
		function pineappleIn() {
			disableFruits(); //תאפיר את כולם
			self.pineapple.gotoAndPlay(3); //תציג רק את התפוח מפריים 3
			disableShake(); //תאפיר את כל השייקים
			stage.cursor = 'pointer';
		
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
			stage.cursor = 'pointer';
		
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
			stage.cursor = 'pointer';
			self.blackberry.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.raspberry.gotoAndStop(2);
			self.blueberry.gotoAndStop(2);
			self.banana.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 1
		function shake1Out() {
			stage.cursor = 'default';
			self.shake1.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else if (isTextShow == true) {
				self.shake1.gotoAndStop(1);
			} else if(isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 2
		function shake2In() {
			disableShake(); //תאפיר את כולם
			self.shake2.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			stage.cursor = 'pointer';
			self.melon.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.apple.gotoAndStop(2);
			self.mint.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 2
		function shake2Out() {
			stage.cursor = 'default';
			self.shake2.gotoAndStop(0);
		
			if (hamutz == true) {
				hamutzOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else if (isTextShow == true) {
				self.shake2.gotoAndStop(1);
			} else if(isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 3
		function shake3In() {
			disableShake(); //תאפיר את כולם
			self.shake3.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			stage.cursor = 'pointer';
			self.pineapple.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.banana.gotoAndStop(2);
			self.chia.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 3
		function shake3Out() {
			stage.cursor = 'default';
			self.shake3.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else if (isTextShow == true) {
				self.shake3.gotoAndStop(1);
			} else if(isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 4
		function shake4In() {
			disableShake(); //תאפיר את כולם
			self.shake4.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			stage.cursor = 'pointer';
			self.mango.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.banana.gotoAndStop(2);
			self.melon.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 4
		function shake4Out() {
			stage.cursor = 'default';
			self.shake4.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (plus200cal == true) {
				plus200calOn();
			} else if (isTextShow == true) {
				self.shake4.gotoAndStop(1);
			} else if(isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 5
		function shake5In() {
			disableShake(); //תאפיר את כולם
			self.shake5.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			stage.cursor = 'pointer';
			self.blackberry.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.raspberry.gotoAndStop(2);
			self.blueberry.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 5
		function shake5Out() {
			stage.cursor = 'default';
			self.shake5.gotoAndStop(0);
		
			if (matok == true) {
				matokOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else if (isTextShow == true) {
				self.shake5.gotoAndStop(1);
			} else if(isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		//פונקציה למעבר עכבר על שייק 6
		function shake6In() {
			disableShake(); //תאפיר את כולם
			self.shake6.gotoAndStop(1); //תציג רק את שייק 1 בצבעוני
			disableFruits(); //תאפיר את כל המרכיבים
			stage.cursor = 'pointer';
			self.cucumber.gotoAndStop(2); //תדליק רק את המרכיבים הרלוונטיים
			self.kiwi.gotoAndStop(2);
			self.pineapple.gotoAndStop(2);
			self.apple.gotoAndStop(2);
		}
		
		//פונקציה ליציאת עכבר משייק 6
		function shake6Out() {
			stage.cursor = 'default';
			self.shake6.gotoAndStop(0);
		
			if (hamutz == true) {
				hamutzOn();
			} else if (minus200cal == true) {
				minus200calOn();
			} else if (isTextShow == true) {
				self.shake6.gotoAndStop(1);
			} else if(isTextShow != true) {
				enableShake();
				enableFruits();
			}
		}
		
		function matokBtn_over() {
			//מעבר עכבר פילטר מתוק
			stage.cursor = 'pointer';
			self.matokBtn.gotoAndStop(1);
		
			if (matok == true) {
				self.matokBtn.gotoAndStop(2);
			}
		}
		
		function matokBtn_out() {
			//מעבר עכבר פילטר מתוק
			self.matokBtn.gotoAndStop(0);
		
			if (matok == true) {
				self.matokBtn.gotoAndStop(2);
			}
		}
		
		function odotBtn_over() {
			//מעבר עכבר כפתור אודות
			self.cursor = 'pointer';
			self.odotBtn.gotoAndStop(1);
		
			if (odot == true) {
				self.odotBtn.gotoAndStop(2);
			}
		}
		
		function odotBtn_out() {
			//מעבר עכבר כפתור אודות
			self.odotBtn.gotoAndStop(0);
		
			if (odot == true) {
				self.odotBtn.gotoAndStop(2);
			}
		}
		
		function hamutzBtn_over() {
			//מעבר עכבר פילטר חמות
			stage.cursor = 'pointer';
			self.hamutzBtn.gotoAndStop(1);
		
			if (hamutz == true) {
				self.hamutzBtn.gotoAndStop(2);
			}
		}
		
		function hamutzBtn_out() {
			//מעבר עכבר פילטר חמות
			self.hamutzBtn.gotoAndStop(0);
		
			if (hamutz == true) {
				self.hamutzBtn.gotoAndStop(2);
			}
		}
		
		function plus200calBtn_over() {
			//מעבר עכבר פילטר מעל 200 קל
			stage.cursor = 'pointer';
			self.plus200calBtn.gotoAndStop(1);
		
			if (plus200cal == true) {
				self.plus200calBtn.gotoAndStop(2);
			}
		}
		
		function plus200calBtn_out() {
			//מעבר עכבר פילטר מעל 200 קל
			self.plus200calBtn.gotoAndStop(0);
		
			if (plus200cal == true) {
				self.plus200calBtn.gotoAndStop(2);
			}
		}
		
		function minus200calBtn_over() {
			//מעבר עכבר פילטר מתחת 200 קל
			stage.cursor = 'pointer';
			self.minus200calBtn.gotoAndStop(1);
		
			if (minus200cal == true) {
				self.minus200calBtn.gotoAndStop(2);
			}
		}
		
		function minus200calBtn_out() {
			//מעבר עכבר פילטר מתחת 200 קל
			self.minus200calBtn.gotoAndStop(0);
		
			if (minus200cal == true) {
				self.minus200calBtn.gotoAndStop(2);
			}
		}
		
		function matokFilterToggle() {
			//הפעלה כיבוי פילטר מתוק
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
			//הפעלה כיבוי פילטר חמוץ
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
			//הפעלה כיבוי פילטר + 200 קל
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
			//הפעלה כיבוי פילטר -200 קל
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
			//פונקציה חתוק דלוק
			matok = true;
			hamutz = false;
			self.hamutzBtn.gotoAndStop(0);
			self.matokBtn.gotoAndStop(2);
			disableShake();
			stage.cursor = 'pointer';
		
			if (minus200cal == true) {
				minus200Matok();
				self.shake5.gotoAndStop(1);
				self.shake1.gotoAndStop(2);
				self.shake3.gotoAndStop(2);
				self.shake4.gotoAndStop(2);
			} else {
				stage.cursor = 'default';
				if (plus200cal == true) {
					self.shake5.gotoAndStop(2);
					self.shake5.mouseEnabled = false;
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
			//פונקציה חמוץ דלוק
			hamutz = true;
			matok = false;
			self.matokBtn.gotoAndStop(0);
			self.hamutzBtn.gotoAndStop(2);
			disableShake();
			stage.cursor = 'pointer';
		
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
			//פונקציה +200 דלוק
			plus200cal = true;
			minus200cal = false;
			self.minus200calBtn.gotoAndStop(0);
			self.plus200calBtn.gotoAndStop(2);
			disableShake();
			stage.cursor = 'pointer';
		
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
			//פונקציה -200 דלוק
			minus200cal = true;
			plus200cal = false;
			self.minus200calBtn.gotoAndStop(2);
			self.plus200calBtn.gotoAndStop(0);
			disableShake();
			stage.cursor = 'pointer';
		
			if (matok == true) {
				minus200Matok();
			} else if (hamutz == true) {
				minus200Hamutz();
			} else {
				self.shake2.gotoAndStop(1);
				self.shake5.gotoAndStop(1);
				self.shake6.gotoAndStop(1);
		
				// if minus200cal is true this shakes and fruits doesnt works
				isPlus200calDisabled();
		
				isMinus200calEnabled();
			}
		}
		
		function isPlus200calEnabled() {
			//שייקים ופירות מעבר עכבר פעיל
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
			//שייקים ופירות מעבר עכבר לא פעיל
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
			//שייקים ופירות מעבר עכבר פעיל
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
			//שייקים ופירות מעבר עכבר לא פעיל
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
			//שייקים ופירות מעבר עכבר פעיל
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
			//שייקים ופירות מעבר עכבר לא פעיל
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
			//שייקים ופירות מעבר עכבר פעיל
			self.shake1.mouseEnabled = true;
			self.shake3.mouseEnabled = true;
			self.shake4.mouseEnabled = true;
		
			if (plus200cal == true) {
				self.shake5.gotoAndStop(2);
				self.shake5.mouseEnabled = false;
			} else {
				self.shake5.gotoAndStop(1);
				self.shake5.mouseEnabled = true;
			}
		
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
			//שייקים ופירות מעבר עכבר לא פעיל
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
		
		function odotClick() {
			//פותח מודל
			self.modalLayer.visible = true;
			self.cursor = 'default';
		}
		
		function closeOdot() {
			//סוגר מודל
			self.modalLayer.visible = false;
		}
		
		function goToHitUrl() {
			//פותח לינק חיצוי
			window.open('https://www.hit.ac.il/', '_blank');
		}
		
		function goToTelemUrl() {
			//פותח לינק חיצוי
			window.open('https://www.hit.ac.il/telem/overview', '_blank');
		}
		
		function goToFreepikUrl() {
			//פותח לינק חיצוי
			window.open('https://www.freepik.com/', '_blank');
		}
		
		function closeOdotIn() {
			//פותח לינק חיצוי
			self.cursor = 'pointer';
		}
		
		function goToHitUrlIn() {
			//מעבר עכבר לינק
			self.cursor = 'pointer';
		}
		
		function goToTelemUrlIn() {
			//מעבר עכבר לינק
			self.cursor = 'pointer';
		}
		
		function goToFreepikUrlIn() {
			//מעבר עכבר לינק
			self.cursor = 'pointer';
		}
		
		function goToHitUrlOut() {
			//מעבר עכבר לינק
			self.cursor = 'default';
		}
		
		function goToTelemUrlOut() {
			//מעבר עכבר לינק
			self.cursor = 'default';
		}
		
		function goToFreepikUrlOut() {
			//מעבר עכבר לינק
			self.cursor = 'default';
		}
		
		//Multiply Filters Functionality
		
		function more200Hamutz() {
			//מעל 200 + חמוץ
			disableFruits();
			disabledMouse();
			disableShake();
			self.matokBtn.gotoAndStop(0);
		}
		
		function minus200Matok() {
			//מינוס 200 + מתוק
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
			//מינוס 200 + חמוץ
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
		
		//InfoLabel Functions
		
		function closeClick() {
			//לחיצה הסתרה טקסט אמצעי
			self.infoLabel.gotoAndStop(0);
			isTextShow = false;
			enableShake();
			enableFruits();
			enableMouse();
			enableFilters();
			addListenerToAll();
			addClickToAll();
		}
		
		function blueberryClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(1);
			self.blueberry.gotoAndStop(3);
			self.shake1.gotoAndStop(1);
			self.shake5.gotoAndStop(1);
			self.shake1.mouseEnabled = true;
			self.shake5.mouseEnabled = true;
			self.shake1.addEventListener("click", shake1Click);
			self.shake5.addEventListener("click", shake5Click);
		}
		
		function blackberryClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(2);
			stage.cursor = 'pointer';
			self.blackberry.gotoAndStop(3);
			self.shake1.gotoAndStop(1);
			self.shake5.gotoAndStop(1);
			self.shake1.mouseEnabled = true;
			self.shake5.mouseEnabled = true;
			self.shake1.addEventListener("click", shake1Click);
			self.shake5.addEventListener("click", shake5Click);
		}
		
		function chiaClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(3);
			self.chia.gotoAndStop(3);
			self.shake3.gotoAndStop(1);
			self.shake3.mouseEnabled = true;
			self.shake3.addEventListener("click", shake3Click);
		}
		
		function pineappleClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(4);
			self.pineapple.gotoAndStop(3);
			self.shake3.gotoAndStop(1);
			self.shake6.gotoAndStop(1);
			self.shake3.mouseEnabled = true;
			self.shake6.mouseEnabled = true;
			self.shake3.addEventListener("click", shake3Click);
			self.shake6.addEventListener("click", shake6Click);
		}
		
		function mangoClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(5);
			self.mango.gotoAndStop(3);
			self.shake4.gotoAndStop(1);
			self.shake4.mouseEnabled = true;
			self.shake4.addEventListener("click", shake4Click);
		}
		
		function raspberryClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(6);
			self.raspberry.gotoAndStop(3);
			self.shake1.gotoAndStop(1);
			self.shake5.gotoAndStop(1);
			self.shake1.mouseEnabled = true;
			self.shake5.mouseEnabled = true;
			self.shake1.addEventListener("click", shake1Click);
			self.shake5.addEventListener("click", shake5Click);
		}
		
		function kiwiClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(7);
			self.kiwi.gotoAndStop(3);
			self.shake6.gotoAndStop(1);
			self.shake6.mouseEnabled = true;
			self.shake6.addEventListener("click", shake6Click);
		}
		
		function melonClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(8);
			self.melon.gotoAndStop(3);
			self.shake2.gotoAndStop(1);
			self.shake4.gotoAndStop(1);
			self.shake2.mouseEnabled = true;
			self.shake4.mouseEnabled = true;
			self.shake2.addEventListener("click", shake2Click);
			self.shake4.addEventListener("click", shake4Click);
			
		}
		
		function bananaClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(9);
			self.banana.gotoAndStop(3);
			self.shake1.gotoAndStop(1);
			self.shake3.gotoAndStop(1);
			self.shake4.gotoAndStop(1);
			self.shake1.mouseEnabled = true;
			self.shake3.mouseEnabled = true;
			self.shake4.mouseEnabled = true;
			self.shake1.addEventListener("click", shake1Click);
			self.shake3.addEventListener("click", shake3Click);
			self.shake4.addEventListener("click", shake4Click);
		}
		
		function mintClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(10);
			self.mint.gotoAndStop(3);
			self.shake2.gotoAndStop(1);
			self.shake2.mouseEnabled = true;
			self.shake2.addEventListener("click", shake2Click);
		}
		
		function cucumberClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(11);
			self.cucumber.gotoAndStop(3);
			self.shake6.gotoAndStop(1);
			self.shake6.mouseEnabled = true;
			self.shake6.addEventListener("click", shake6Click);
		}
		
		function appleClick() {
			//לחיצה פרי להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableFruits();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(12);
			self.apple.gotoAndStop(3);
			self.shake2.gotoAndStop(1);
			self.shake6.gotoAndStop(1);
			self.shake2.mouseEnabled = true;
			self.shake6.mouseEnabled = true;
			self.shake2.addEventListener("click", shake2Click);
			self.shake6.addEventListener("click", shake6Click);
		}
		
		function shake1Click() {
			//לחיצה שייק להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableShake();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(13);
			self.shake1.gotoAndStop(1);
			self.blueberry.gotoAndStop(3);
			self.raspberry.gotoAndStop(3);
			self.blackberry.gotoAndStop(3);
			self.banana.gotoAndStop(3);
			self.blueberry.mouseEnabled = true;
			self.raspberry.mouseEnabled = true;
			self.blackberry.mouseEnabled = true;
			self.banana.mouseEnabled = true;
			self.blueberry.addEventListener("click", blueberryClick);
			self.raspberry.addEventListener("click", raspberryClick);
			self.blackberry.addEventListener("click", blackberryClick);
			self.banana.addEventListener("click", bananaClick);
		}
		
		function shake2Click() {
			//לחיצה שייק להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableShake();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(14);
			self.shake2.gotoAndStop(1);
			self.mint.gotoAndStop(3);
			self.melon.gotoAndStop(3);
			self.apple.gotoAndStop(3);
			self.mint.mouseEnabled = true;
			self.melon.mouseEnabled = true;
			self.apple.mouseEnabled = true;
			self.mint.addEventListener("click", mintClick);
			self.melon.addEventListener("click", melonClick);
			self.apple.addEventListener("click", appleClick);
		}
		
		function shake3Click() {
			//לחיצה שייק להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableShake();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(15);
			self.shake3.gotoAndStop(1);
			self.chia.gotoAndStop(3);
			self.pineapple.gotoAndStop(3);
			self.banana.gotoAndStop(3);
			self.chia.mouseEnabled = true;
			self.pineapple.mouseEnabled = true;
			self.banana.mouseEnabled = true;
			self.chia.addEventListener("click", chiaClick);
			self.pineapple.addEventListener("click", pineappleClick);
			self.banana.addEventListener("click", bananaClick);
		}
		
		function shake4Click() {
			//לחיצה שייק להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableShake();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(16);
			self.shake4.gotoAndStop(1);
			self.mango.gotoAndStop(3);
			self.melon.gotoAndStop(3);
			self.banana.gotoAndStop(3);
			self.mango.mouseEnabled = true;
			self.melon.mouseEnabled = true;
			self.banana.mouseEnabled = true;
			self.mango.addEventListener("click", mangoClick);
			self.melon.addEventListener("click", melonClick);
			self.banana.addEventListener("click", bananaClick);
		}
		
		function shake5Click() {
			//לחיצה שייק להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableShake();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(17);
			self.shake5.gotoAndStop(1);
			self.blueberry.gotoAndStop(3);
			self.raspberry.gotoAndStop(3);
			self.blackberry.gotoAndStop(3);
			self.blueberry.mouseEnabled = true;
			self.raspberry.mouseEnabled = true;
			self.blackberry.mouseEnabled = true;
			self.blueberry.addEventListener("click", blueberryClick);
			self.raspberry.addEventListener("click", raspberryClick);
			self.blackberry.addEventListener("click", blackberryClick);
		}
		
		function shake6Click() {
			//לחיצה שייק להופעה טקסט
			isTextShow = true;
			disabledMouse();
			disableMouseOver();
			disableShake();
			disableFilters();
			removeAllFilters();
			self.infoLabel.gotoAndStop(18);
			self.shake6.gotoAndStop(1);
			self.pineapple.gotoAndStop(3);
			self.kiwi.gotoAndStop(3);
			self.cucumber.gotoAndStop(3);
			self.apple.gotoAndStop(3);
			self.pineapple.mouseEnabled = true;
			self.kiwi.mouseEnabled = true;
			self.cucumber.mouseEnabled = true;
			self.apple.mouseEnabled = true;
			self.pineapple.addEventListener("click", pineappleClick);
			self.kiwi.addEventListener("click", kiwiClick);
			self.cucumber.addEventListener("click", cucumberClick);
			self.apple.addEventListener("click", appleClick);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// modal
	this.modalLayer = new lib.odotModal();
	this.modalLayer.name = "modalLayer";
	this.modalLayer.setTransform(647.45,359.3,0.899,0.899,0,0,0,-1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.modalLayer).wait(1));

	// title
	this.text = new cjs.Text("?מ ה   ה ש י י ק   ש ל ך", "normal 700 90px 'Amatic SC'");
	this.text.textAlign = "center";
	this.text.lineHeight = 128;
	this.text.lineWidth = 1275;
	this.text.parent = this;
	this.text.setTransform(640.5,3.1);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// info
	this.odotBtn = new lib.odotai();
	this.odotBtn.name = "odotBtn";
	this.odotBtn.setTransform(72.25,79.7,5.4348,5.4348,0,0,0,18.4,47);

	this.infoLabel = new lib.infoText();
	this.infoLabel.name = "infoLabel";
	this.infoLabel.setTransform(560,419.1,0.5823,0.5823,0,0,0,717.6,84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.infoLabel},{t:this.odotBtn}]}).wait(1));

	// fruits
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

	// filters
	this.text_1 = new cjs.Text("אפשר לסנן את השייקים לפי דברים שמעניינים אותך", "normal 300 21px 'Rubik'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 439;
	this.text_1.parent = this;
	this.text_1.setTransform(1029.35,134.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.instance = new lib.border();
	this.instance.setTransform(775.35,-339.55,7.5496,11.7854,0,0,0,0.3,-0.1);

	this.text_2 = new cjs.Text("?מה הטעם שלך", "normal 700 30px 'Amatic SC'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 44;
	this.text_2.lineWidth = 109;
	this.text_2.parent = this;
	this.text_2.setTransform(912.85,178.5);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("?יש הגבלה", "normal 700 30px 'Amatic SC'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 44;
	this.text_3.lineWidth = 94;
	this.text_3.parent = this;
	this.text_3.setTransform(1149,178.5);
	if(!lib.properties.webfonts['Amatic SC']) {
		lib.webFontTxtInst['Amatic SC'] = lib.webFontTxtInst['Amatic SC'] || [];
		lib.webFontTxtInst['Amatic SC'].push(this.text_3);
	}

	this.hamutzBtn = new lib.hamutzai();
	this.hamutzBtn.name = "hamutzBtn";
	this.hamutzBtn.setTransform(783.35,25.75,4.3784,4.3784);

	this.instance_1 = new lib.border();
	this.instance_1.setTransform(1002.2,-346.25,8.2827,11.9354,0,0,0,0.3,-0.1);

	this.minus200calBtn = new lib.minus200calai();
	this.minus200calBtn.name = "minus200calBtn";
	this.minus200calBtn.setTransform(1012,26.65,4.3784,4.3784);

	this.plus200calBtn = new lib.plus200calai();
	this.plus200calBtn.name = "plus200calBtn";
	this.plus200calBtn.setTransform(1104.3,24.3,4.3784,4.3784);

	this.matokBtn = new lib.matokai();
	this.matokBtn.name = "matokBtn";
	this.matokBtn.setTransform(879.7,25.75,4.3784,4.3784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.matokBtn},{t:this.plus200calBtn},{t:this.minus200calBtn},{t:this.instance_1},{t:this.hamutzBtn},{t:this.text_3},{t:this.text_2},{t:this.instance},{t:this.text_1}]}).wait(1));

	// shakeNew
	this.shake6 = new lib.shake6_1();
	this.shake6.name = "shake6";
	this.shake6.setTransform(1199,577.85,0.1925,0.1925,0,0,0,682.1,682.1);

	this.shake5 = new lib.shake5_1();
	this.shake5.name = "shake5";
	this.shake5.setTransform(1033.95,589.25,0.1696,0.1696,0,0,0,682.4,682.4);

	this.shake4 = new lib.shake4_1();
	this.shake4.name = "shake4";
	this.shake4.setTransform(858.8,582.55,0.1731,0.1731,0,0,0,682.3,682);

	this.shake3 = new lib.shake3_1();
	this.shake3.name = "shake3";
	this.shake3.setTransform(1194.1,354.2,0.1762,0.1762,0,0,0,682.2,682.2);

	this.shake2 = new lib.shake2_1();
	this.shake2.name = "shake2";
	this.shake2.setTransform(1023.15,346,0.1621,0.1621,0,0,0,682,682);

	this.shake1 = new lib.shake1_1();
	this.shake1.name = "shake1";
	this.shake1.setTransform(855.85,345.4,0.1773,0.1773,0,0,0,682.1,682.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shake1},{t:this.shake2},{t:this.shake3},{t:this.shake4},{t:this.shake5},{t:this.shake6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(625.4,347.7,704.9,383.40000000000003);
// library properties:
lib.properties = {
	id: 'D5565A4986BD814294335F6174F75ED7',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/shakes_atlas_1.png?1602434901380", id:"shakes_atlas_1"},
		{src:"images/shakes_atlas_2.png?1602434901380", id:"shakes_atlas_2"},
		{src:"images/shakes_atlas_3.png?1602434901380", id:"shakes_atlas_3"},
		{src:"images/shakes_atlas_4.png?1602434901380", id:"shakes_atlas_4"},
		{src:"images/shakes_atlas_5.png?1602434901380", id:"shakes_atlas_5"},
		{src:"images/shakes_atlas_6.png?1602434901380", id:"shakes_atlas_6"},
		{src:"images/shakes_atlas_7.png?1602434901381", id:"shakes_atlas_7"},
		{src:"images/shakes_atlas_8.png?1602434901381", id:"shakes_atlas_8"},
		{src:"images/shakes_atlas_9.png?1602434901381", id:"shakes_atlas_9"},
		{src:"images/shakes_atlas_10.png?1602434901381", id:"shakes_atlas_10"},
		{src:"images/shakes_atlas_11.png?1602434901381", id:"shakes_atlas_11"},
		{src:"images/shakes_atlas_12.png?1602434901381", id:"shakes_atlas_12"},
		{src:"images/shakes_atlas_13.png?1602434901381", id:"shakes_atlas_13"},
		{src:"images/shakes_atlas_14.png?1602434901381", id:"shakes_atlas_14"},
		{src:"images/shakes_atlas_15.png?1602434901381", id:"shakes_atlas_15"},
		{src:"images/shakes_atlas_16.png?1602434901381", id:"shakes_atlas_16"},
		{src:"images/shakes_atlas_17.png?1602434901382", id:"shakes_atlas_17"},
		{src:"images/shakes_atlas_18.png?1602434901382", id:"shakes_atlas_18"}
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
an.compositions['D5565A4986BD814294335F6174F75ED7'] = {
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