function getWindowSize(){
	 var windowheight={
	 	y:window.screen.availHeight
		};
	return windowheight;
}

function firstLoad(){
	var size = getWindowSize()
	var browseHeight = size.y;
	var getDiv = document.getElementById('d').style.height;
	var getDiv = getDiv.replace("px","");
	var marginDistance = parseInt((browseHeight-getDiv)/2);
	var marginDistance = marginDistance.toString()+"px";
	document.getElementById('d').style.marginTop=marginDistance
	console.log(window.screen.availHeight)
	console.log(parseInt((browseHeight-getDiv)/2))

}

function getsize(){//浏览器窗口大小改变的时候
    var size = getWindowSize();
    var browseHeight=size.y;
    var getDiv=document.getElementById('d').style.height;
    var getDiv=getDiv.replace("px","");
    var marginDistance=parseInt((browseHeight-getDiv)/2);
    var marginDistance=marginDistance.toString()+"px";
    document.getElementById('d').style.marginTop=marginDistance;
}


