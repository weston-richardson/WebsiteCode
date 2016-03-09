/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 2

   Author: Weston Richardson
   Date:   May 30, 2011

   Function List:
   randInt(lower, upper)
      Used to generate a random integer in the range (lower, upper)

*/

function randInt(lowest, highest){
	var size = (highest - lowest + 1)
	return Math.floor(lowest + size * Math.random())
}