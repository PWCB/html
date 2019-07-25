// Some scaling based on wether we're mobile or not
var 
mobile = 0,
bod = document.getElementById('bod'),
header =  document.getElementsByClassName("header")[0],
main = document.getElementsByClassName("main")[0],
side = document.getElementsByClassName("side")[0],
footer =  document.getElementsByClassName("footer")[0],
modal = document.getElementsByClassName("modal")[0],
modalContent = document.getElementsByClassName("modalContent")[0],
videoFrame = document.getElementById('videoFrameId'),
modalOverlay = document.getElementsByClassName("modalOverlay")[0],
fakeScroll = document.getElementsByClassName("fakeScroll")[0],
modalInfo =  document.getElementsByClassName("modalInfo")[0],
infoArrow =  document.getElementsByClassName("infoArrow")[0],
modalTitle =  document.getElementsByClassName("modalTitle")[0],
modalText =  document.getElementsByClassName("modalText")[0],
scrollPos = 100,
scrollTgt = 100,
closer = document.getElementsByClassName("close")[0],
info = document.getElementsByClassName("info")[0],
arrowl =  document.getElementsByClassName("arrowl")[0],
arrowr =  document.getElementsByClassName("arrowr")[0],
itmi = 0,
itmiO = 0,
itmimax = document.querySelectorAll('.itmbtn').length,
itmPic = document.getElementById('itmPic'),
infoY = -2;

var btn = new Array(itmimax);
btn = document.getElementsByClassName("itmbtn");




window.mobileCheck = function(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function insertText(className, txt){
    document.getElementsByClassName(className)[0].innerHTML = txt;
}

function getMouseElement(){
	var x = event.clientX, y = event.clientY;
    return document.elementFromPoint(x, y);
}

function clamp(num, min, max){
	if (num < min){
		num = min;
	}else{
		if (num > max){
			num = max;
		}
	}
	return num;
}


if (mobileCheck()){
	mobile = 1;
	header.style.fontSize = "4vw";
	main.style.fontSize = "32px";
	//side.style.width = "4%";
}else{
	mobile = 0;
	header.style.fontSize = "24px";
	main.style.fontSize = "16px";
	//side.style.width = "16px";
}

// Orientation changes
function getOrientation(){
	if (mobile){
		if (Math.abs(window.orientation) === 90){
			// Landscape
			side.style.width = "3%";
			closer.style.fontSize = "4vw";
			closer.style.top = "12%";
			info.style.fontSize = "4vw";
			infoY = -1;
			info.style.bottom = infoY;
			footer.style.fontSize = "12px";
			arrowl.style.fontSize = "1cm";
			arrowr.style.fontSize = "1cm";
			arrowl.style.left = "2%";
			arrowr.style.right = "2%";
			modalTitle.style.fontSize = "5mm";
			modalText.style.fontSize = "4mm";
		}else{
			// Portrait
			side.style.width = "6%";
			closer.style.fontSize = "8vw";
			closer.style.top = "4%";
			info.style.fontSize = "8vw";
			infoY = -1;
			info.style.bottom = infoY + "cm";
			footer.style.fontSize = "24px";
			arrowl.style.fontSize = "2cm";
			arrowr.style.fontSize = "2cm";
			arrowl.style.left = "0%";
			arrowr.style.right = "0%";
			modalTitle.style.fontSize = "10mm";
			modalText.style.fontSize = "7mm";
		}
	}
	
	info.style.bottom = infoY + clamp(100-scrollPos, 0, 10) + "cm";
};

window.onorientationchange = getOrientation;
window.onload = getOrientation;

window.onmousedown = function(){
	for (i = 0; i < btn.length; i++){
		if (getMouseElement() == btn[i]){
			itmi = i+1;
			scrollTgt = 100;
		}
	}
}

arrowl.onclick = function(){
	itmi--;
	if (itmi <= 0){itmi = itmimax;}
	scrollTgt = 100;
}
arrowr.onclick = function(){
	itmi++;
	if (itmi > itmimax){itmi = 1;}
	scrollTgt = 100;
}


//exit
closer.onclick = function(){
	modal.style.display = "none";
	videoFrame.src = "none";
	//videoFrame.contentWindow.postMessage('{"event":"command","func":"' + 'stopvideo' + '","args":""}', '*');
	itmi = 0;
	scrollTgt = 100;
}

info.onclick = function(){
	if (scrollTgt > 90){
		scrollTgt = 80;
		scrollTgt = clamp(scrollTgt, 0 - ($(modalInfo).outerHeight(true) - $(videoFrame).outerHeight(true))/$(videoFrame).outerHeight(true)*100, 100);
	}else{
		scrollTgt = 100;
	}
}

modal.onclick = function(event){
  if (event.target == modal && event.target != arrowl && event.target != arrowr && event.target != info && iaOn == 0){
    modal.style.display = "none";
	videoFrame.src = "none";
	//videoFrame.contentWindow.postMessage('{"event":"command","func":"' + 'stopvideo' + '","args":""}', '*');
	itmi = 0;
	scrollTgt = 100;
  }
}


var iaOn = 0, startY;
modalInfo.onmousedown = function(){
	if (!mobile){
		iaOn = 1;
		startY = event.clientY;
		modalOverlay.style.zIndex = "6";
	}
}
info.onmousedown = function(){
	if (!mobile){
		iaOn = 1;
		startY = event.clientY;
		modalOverlay.style.zIndex = "6";
	}
}

document.onmousemove = function(){
	if (!mobile){
		if (iaOn){
			scrollTgt += (event.clientY - startY)/7.77;
			startY = event.clientY;
		}
	}
}
document.onmouseup = function(){
	if (modalOverlay.style.zIndex == "6"){
		iaOn = 2;
	}
}

document.onwheel = function(event){
	scrollTgt -= event.deltaY/10;
}

var yprev = 0;

document.ontouchstart = function(){
	yprev = event.touches[0].clientY;
}

document.ontouchmove = function(){
	var y = event.touches[0].clientY;
	scrollTgt += (y-yprev)/(window.innerHeight/window.innerWidth)/7.77;
	//console.log(y-yprev);
	//console.log(window.innerHeight/window.innerWidth);
	yprev = y;
}
/////////////////////////////////////////////////////////////////////////audio muffles when you pull up info
///back scrolling chain scrolling overscroll

////try html5 video
//step event thing----------------------------------
var interval = window.setInterval(step, 16);

function step(){
	if (itmi != itmiO){
		var title = "", txt = "";
		switch(itmi) {
			case 1:
				modal.style.display = "block";
				videoFrame.src = "egg.mp4";
				title = "Good Morning";
				txt = "<br/> Song: Plantasia by Mort Garson";
				break;
			case 2:
				modal.style.display = "block";
				videoFrame.src = "fall.mp4";
				title = "Fall";
				txt = "<br/> Song: Invisible Grid by Small Black";
				break;
			case 3:
				modal.style.display = "block";
				videoFrame.src = "raccoon.mp4";
				title = "Feelin Gud";
				txt = "<br/> Song: Flowers On A Wall by Daisuke Tanabe";
				break;
			case 4:
				modal.style.display = "block";
				videoFrame.src = "tubeguy.mp4";
				title = "Tubeguy";
				txt = "<br/> Song: Tranquility Path by Windows69";
				break;
			case 5:
				modal.style.display = "block";
				videoFrame.src = "roads.mp4";
				title = "";
				txt = "Song: Bjork Stonemilker remix by Forest Swords";
				break;
			case 6:
				modal.style.display = "block";
				videoFrame.src = "hunters.mp4";
				title = "looking for parking";
				txt = "<br/> Song: Ashtray Wasp by Burial";
				break;
			case 7:
				modal.style.display = "block";
				videoFrame.src = "vhs.mp4";
				title = "";
				txt = "Song: Theme From Ernest Borgnine by Squarepusher";
				break;
			case 8:
				modal.style.display = "block";
				videoFrame.src = "fard.mp4";
				title = "A Small Exchange";
				txt = "<br/> Song: I'm Hungryyy... (Kirby 64)";
				break;
			case 9:
				modal.style.display = "block";
				videoFrame.src = "tennis.mp4";
				title = "Tennis Guy";
				txt = "<br/> Song: Parking Lot by me!!";
				break;
			default:
				modal.style.display = "none";
				videoFrame.src = "none";
				modalOverlay.style.zIndex = "0";
				//videoFrame.contentWindow.postMessage('{"event":"command","func":"' + 'stopvideo' + '","args":""}', '*');
				itmi = 0;
		}
		
		if (title == "" && txt == ""){
			insertText("modalTitle", "");
			insertText("modalText", "");
			modalInfo.style.display = "none";
		}else{
			insertText("modalTitle", title);
			insertText("modalText", txt);
			modalInfo.style.display = "block";
		}
		
		if (itmi != 0){
			bod.style.overflow = "hidden";
		}else{
			bod.style.overflow = "auto";
		}
		
		itmiO = itmi;
	}
	
	//tween scroll
	if (scrollPos < scrollTgt-.1 || scrollPos > scrollTgt+.1){
		scrollTgt = clamp(scrollTgt, 0 - ($(modalInfo).outerHeight(true) - $(videoFrame).outerHeight(true))/$(videoFrame).outerHeight(true)*100, 100);
		if (!mobile){scrollPos += (scrollTgt-scrollPos)/10;}
		else{scrollPos += (scrollTgt-scrollPos)/2;}
		modalInfo.style.top = scrollPos + "%";
		
		info.style.bottom = infoY + clamp(100-scrollPos, 0, 10) + "cm";
	}
	
	if (iaOn > 1){
		if (iaOn > 5){modalOverlay.style.zIndex = "0"; iaOn = 0;}else{iaOn++;}
	}
	
}