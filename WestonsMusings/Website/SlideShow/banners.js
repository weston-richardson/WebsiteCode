/*
   Global Variables
   nextAd
      Used to track the next ad to be displayed in the banner box


   Functions
  
   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   makeBannerAds()
      Create the banner box and stacked collection of banner ads

   changeBannerAd()
      Change the ad displayed in the banner box by changing the stacking
      order of the ads

   moveNextAd(top)
      Move the nextAd object down top pixels from its current location.

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

var nextAd;

addEvent(window, "load", makeBannerAds, false);

/*
The purpose of this function is to create the banner box and stacked collection of banner ads, and is called automatically when the window loads.
*/
function makeBannerAds() {
var bannerBox = document.createElement("div");
bannerBox.id = "bannerBox";
for(i = 0; i < 3; i++) {	
	var bannerAd = document.createElement("div");
		bannerAd.className = "bannerAd";
	var urlLink = document.createElement("a");
		urlLink.href = adsURL[i];
	var bannerImg = document.createElement("img");
		bannerImg.src = "banner" + i + ".jpg"; 
		bannerImg.id = "bannerImg";
		bannerImg.style.zIndex = i;
	bannerBox.appendChild(bannerImg);
	}
document.body.appendChild(bannerBox);

setInterval("changeBannerAd()", 5000);

}

/*
The purpose of this function is to change the ad displayed in the banner box by changing the stacking order of the ads. This function is called every ten seconds from the makeBannerAds function.
*/
function changeBannerAd()  {

var timeDelay; 

for (var i = 0; i < document.getElementById("bannerBox").childNodes.length; i++) {
        document.getElementById("bannerBox").childNodes[i].style.zIndex--;
	 if (document.getElementById("bannerBox").childNodes[i].style.zIndex < 0) {
		document.getElementById("bannerBox").childNodes[i].style.zIndex = 				document.getElementById("bannerBox").childNodes.length;
		document.getElementById("bannerBox").childNodes[i].style.top = "-50px"; 
           	document.getElementById("bannerBox").appendChild(document.getElementById("bannerBox").childNodes[i]); 
		        
	}
    }

    timeDelay = 0;
    for(var i=-50; i<=0; i++)  {
        setTimeout("moveNextAd(" + i + ")", timeDelay);
        timeDelay += 15;  
    }
}

/*
The purpose of this function is to move the current ad's top pixels down from its current location, and is called during the changeBannerAd function.
*/
function moveNextAd(top) {
	document.getElementById("bannerBox").style.top = top + "px";
}
