
pxprfct = {}

pxprfct.LOG = function(msg){
	if(!msg){
		return;
	}else{
		console.log(msg);
	}
}

pxprfct.browserSupport = function(canvas){
	pxprfct.LOG('canvas.getContext', canvas);
	if (canvas.getContext){
		return true;
	}else{
		return false;
	}
}

pxprfct.canvasID = function(id){
	var canvas = document.getElementById(id);
	pxprfct.browserSupport(canvas);
	if(canvas){
		return canvas;
	}else{
		return false;
	}
}

pxprfct.retangle = function(rect, fillColor, line, lineColor){
	canvas = document.getElementById("myRectangle");
	context = canvas.getContext("2d");
	context.beginPath();
	context.rect(rect[0], rect[1], rect[2], rect[3]);
	context.fillStyle = fillColor;
	context.fill();
	context.lineWidth = line;
	context.strokeStyle = lineColor;
	context.stroke();
}

pxprfct.circle = function(args){
	this.canvasID=args.id;
    this.rad= args.radius;
    this.fill=args.fillStyle;
    this.line=args.lineWidth;
    this.stroke=args.strokeStyle;
    this.cenX = args.centerX;
    this.cenY = args.centerY;
    this.canContext;
    this.setCircle= function () {
        var canvas = document.getElementById(this.canvasID);
		var context = canvas.getContext('2d');
		var centerX = this.cenX;
		var centerY = this.cenY;
		var radius = this.rad;
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI,true);
		context.fillStyle = this.fill;
		context.fill();
		context.lineWidth = this.line;
		context.strokeStyle = this.stroke;
		context.stroke();
		context.closePath();
		this.canContext = context
		//return this;
    };

    this.movecircle = function(cenX, cenY) {
    	// this.canContext.moveTo(cenX, cenY);
    	// this.setCircle();

    	var prevX = this.cenX;
    	var prevY = this.cenY;
    	console.log('prevX' + prevX + ' - prevY ' + prevY);
    	console.log('cenX' + cenX + ' - cenY ' + cenY);
    	this.canContext.clearRect(prevX-prevX,prevY-prevY,prevX+prevY,prevY+prevX);
    	//this.canContext.translate(cenX,cenY);
    	this.cenX = cenX;
    	this.cenY = cenY;
    	console.log('this.cenX' + this.cenX + ' - this.cenY ' + this.cenY);
  //   	this.canContext.beginPath();
		// this.canContext.arc(cenX, cenY, this.radius, 0, 2 * Math.PI,true);
		// this.canContext.closePath();

    	// //this.canContext.fillRect(cenY, cenY, 0, 0);
    	// // setTimeout(function(){
    	this.setCircle();
    	// },105);
    	//this.canContext.fill();
    	//this.canContext.stroke();
    		
    }

    this.changeradius = function(radius){
    	this.rad = radius;
    	this.canContext.clearRect(0,0,1000,1000);
    	this.canContext.fillRect(cenY, cenY, cenY, cenX);
    	//this.setCircle();
    }

    return this
}
////app function


var circleAttr1 = {id:'mainCanvas', radius:10, centerX:0, centerY:0, fillStyle:'#ccc', lineWidth:2, strokeStyle:'black'}
var myCircle1 = new pxprfct.circle(circleAttr1);
myCircle1.setCircle();


var circleAttr2 = {id:'mainCanvas', radius:100, centerX:1000, centerY:300, fillStyle:'#999', lineWidth:2, strokeStyle:'black'}
var myCircle2 = new pxprfct.circle(circleAttr2);
myCircle2.setCircle();

var cirAnim1 = 0
function animateCirOne(){
	if(cirAnim1 <= 1450){
		cirAnim1 += 1
	}
	myCircle1.movecircle(cirAnim1, cirAnim1);
	//myCircle1.changeradius(cirAnim1);
}

var cirAnim2 = 1000
function animateCirTwo(){
	if(cirAnim2 >= 0){
		cirAnim2 -= 1
		myCircle2.movecircle(cirAnim2, circleAttr2.centerY);
	}else{
		return
	}
}



window.requestAnimationFrame(animateCirTwo);

// var animateTrigger = setInterval(function(){
// 	//animateCirOne();
//animateCirTwo();
// },1);

// setTimeout(function(){
// 	clearInterval(animateTrigger);
// },20000);
//  "blue";


console.log('myCircle1', myCircle1);
console.log('myCircle2', myCircle2);