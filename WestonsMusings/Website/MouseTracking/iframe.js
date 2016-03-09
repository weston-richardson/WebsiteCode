/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 10
   Case Problem 2

   Author:   Weston Richardson
   Date:     July 31, 2011

   Filename: iframe.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   setupFrame()
      Sets up the inline frame by adding the custom index property
      and onmouseover and onmouseout event handlers

   writeFrame()
      Writes the title and summary text to the document in the inline
      frame

   clearFrame()
      Clears the title and summary text from the document in the inline
      frame

*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


/* Add new code below */

window.onload = setupFrame;

/*
The purpose of this function is to create an array with called allAreas and run through its contents, applying a custom property and event handlers to each.
*/
function setupFrame() 
{
	var allAreas = document.getElementsByTagName("area");
	
	for (i=0; i<allAreas.length; i++)
	{
		allAreas[i].index = i;

		addEvent(allAreas[i], "mouseover", writeFrame, false);
		addEvent(allAreas[i], "mouseout", clearFrame, false);
	}
}

/*
The purpose of this function is when a part of the brain is hovered over to fill the frame with the corresponding information.
*/
function writeFrame()
{
	var areaIndex = this.index;

	var frameWin = document.getElementById("parts");
	var frameDoc = frameWin.contentWindow.document;

	frameDoc.getElementById("docTitle").innerHTML = title[areaIndex];
	frameDoc.getElementById("docSummary").innerHTML = summary[areaIndex];
}

/*
The purpose of this function is when the mouse is taken off the brain to erase the contents of the frame.
*/
function clearFrame()
{
	var areaIndex = this.index;
	var frameWin = document.getElementById("parts");
	var frameDoc = frameWin.contentWindow.document;

	frameDoc.getElementById("docTitle").innerHTML = "";
	frameDoc.getElementById("docSummary").innerHTML = "";
}