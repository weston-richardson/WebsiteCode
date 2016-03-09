/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 2

   Author:  Weston Richardson
   Date:    June 25, 2011

   Filename: slideshow.js


   Global Variables:
  
   scrollButton
      References the scrolling button in the slide show

   diffX
      Stores the horizontal distance in pixels between the
      mouse pointer when the scrolling button is clicked
      and the left edge of the scrolling button.

   Functions List:

   setup()
      Initializes the contents of the Web page. Creates
      event handlers for the mouse and keyboard events

   grabIt(e)
      "Grabs" the scrolling button to set up the
       horizontal scrolling of the slide show

   moveIt(e)
      Moves the scrolling button horizontally through
      the scrollbar

   showSlide(x)
      Shows the image corresponding the to the x coordinate
      on the scrollbar

   dropIt(e)
      Drops the scrolling button after the user releases the
      mouse button

   keyShow(e)
      Uses the left and right arrow keys to move the scrolling
      button through the scrollbar

*/

var scrollButton;
var diffX;
window.onload = setup;

/*
The purpose of this function is to setup the window on load.
*/
function setup(){
   scrollButton = document.getElementById("button");
   scrollButton.style.top = getStyle(scrollButton, "top");
   scrollButton.style.left = getStyle(scrollButton, "left");
   scrollButton.style.cursor = "pointer";
   addEvent(scrollButton, "mousedown", grabIt, false);
   addEvent(document, "keydown", keyShow, false);
}
/*
The purpose of this function is to "grab" the scrollButton object and add events to it.
*/
function grabIt(e){
   var evt = e || window.event;
   var mouseX = evt.clientX;
   diffX = parseInt(scrollButton.style.left) - mouseX;
   addEvent(scrollButton, "mousemove", moveIt, false);
   addEvent(scrollButton, "mouseup", dropIt, false);
}
/*
The purpose of this function is to move the scrollButton across the page using the mouse, and send the current value to the showSlide function.
*/
function moveIt(e){
   var evt = e || window.event;
   var mouseX = evt.clientX;
   var buttonPosX = mouseX + diffX;
   showSlide(buttonPosX);
}
/*
The purpose of this function is to change the current picture.
*/
function showSlide(x) {
   if(x < 20){
	x=20;
      }
   else if(x > 299) {
	x=299;
      }
  scrollButton.style.left = x + "px";
   var i = Math.round((x-20)/31)
   document.photo.src = ("image" + i + ".jpg");
}
/*
The purpose of this function is to "let go of" the scrollButton and remove the moveIt function from it.
*/
function dropIt(e){
   removeEvent(scrollButton, "mousemove", moveIt, false);
}
/*
The purpose of this function is to move the scrollButton across the page using the arrow keys, and send the current value to the showSlide function.
*/
function keyShow(e){
   var evt = e || window.event;
   var key = evt.keyCode;
   var buttonPosX = parseInt(scrollButton.style.left)
   if (key == 37){
	buttonPosX = buttonPosX - 31;
	}
   else if (key == 39){
	buttonPosX = buttonPosX + 31;
	}
 showSlide(buttonPosX);

}
