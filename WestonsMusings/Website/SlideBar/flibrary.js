/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 2

   Author:   Weston Richardson
   Date:     June 25, 2011
   Filename: flibrary.js



   Functions List:

   getStyle(object, styleName)
      Returns the computed style value for a specified styleName applied to
      an object.

   addEvent(object, evName, fnName, cap)
      Assigns an event handers to object where evName is the name of the event,
      fnName is the name of the function, and cap is the capture phase.
      This function works for both the IE and W3C event models.
   
   removeEvent(object, evName, fnName, cap)  
      Removes an event handers from object where evName is the name of the event,
      fnName is the name of the function, and cap is the capture phase.
      This function works for both the IE and W3C event models.

*/

/*
The purpose of this function is to add event handlers and functions to objects.
*/
function addEvent(object, evName, fnName, cap){
   if (object.attachEvent){
	object.attachEvent("on" + evName, fnName);
      }
   else if(object.addEventListener){
	object.addEventListener(evName, fnName, cap);
      }
}
/*
The purpose of this function is the remove event handlers and functions from objects.
*/
function removeEvent(object, evName, fnName, cap){

   if (object.detachEvent){
	object.detachEvent("on" + evName, fnName);
      }
   else if(object.removeEventListener){
	object.removeEventListener(evName, fnName, cap);
      }
}

function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null).getPropertyValue(styleName);
   } else if (object.currentStyle) {
      return object.currentStyle[styleName]
   }
}