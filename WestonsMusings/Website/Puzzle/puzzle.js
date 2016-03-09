/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 4
   Case Problem 2

   Author:    Weston Richardson
   Date:      June 12, 2011

   Filename:  puzzle.js

   -------------------------------------------------------------
   Function List:
   setPuzzle()
      Initializes event handlers for the cells within the Hanjie
      table. 

   changeColor()
      Toggles the background color of the active cell between
      black and white

   showSolution()
      Shows the solution of the Hanjie puzzle

   hideSolution()
      Hides the solution of the Hanjie puzzle

   checkSolution()
      Checks the user's solution of the Hanjie puzzle

   uncheckSolution()
      Restores the user's solution of the Hanjie puzzle
      to its original state

   -------------------------------------------------------------
   Global Variable List:

   allCells
      An object variable referencing all of the clickable cells
      within the Hanjie puzzle


   -------------------------------------------------------------
*/

window.onload = setPuzzle;

	var allCells
/*
The purpose of the setPuzzle function is to set the value of the allCells variable and to add event handlers to all of the cells within the puzzle.
*/
	function setPuzzle() 
		 {
		var puzzleTable = document.getElementById("puzzleCells");
	
		allCells = puzzleCells.getElementsByTagName("td");

			for(i=0; i < allCells.length; i++) {
				allCells[i].style.backgroundColor = "white";
				allCells[i].onclick = changeColor;
				}

			solution.onclick = showSolution;
			hide.onclick = hideSolution;
			check.onclick = checkSolution;
			uncheck.onclick = uncheckSolution;
		}
/*
The purpose of the changeColor function is to toggle the background color of the active cell between black and white.
*/
	function changeColor()
		{

		(this.style.backgroundColor == "black") ? this.style.backgroundColor = "white" : this.style.backgroundColor = "black";
			
		}
/*
The purpose of the showSolution function is to reveal the hidden solution to the hanjie puzzle.
*/
	function showSolution()
		{
			allCells = puzzleCells.getElementsByTagName("td");
			for(i=0; i < allCells.length; i++) { 
				if(allCells[i].className == "dark")
				{
					allCells[i].style.backgroundColor = "black";
				}
				else
				{
					allCells[i].style.backgroundColor = "white";
				}
			}
		}
/*
The purpose of the hideSolution function is to reset the hanjie puzzle, hiding the solution and any guesses made by the user.
*/
	function hideSolution()
		{
			allCells = puzzleCells.getElementsByTagName("td");
			for(i=0; i < allCells.length; i++) {
				allCells[i].style.backgroundColor = "white";
				}
		}
/*
The purpose of the checkSolution function is to check whether the user's solution matches the actual solution of the hanjie puzzle. The function displays all incorrectly clicked cells as red, and counts the number of cells that should be clicked but aren't.
*/
	function checkSolution()
		{
			allCells = puzzleCells.getElementsByTagName("td");
			var checkCount = 0;
			for(i=0; i < allCells.length; i++) 
			{
				if(allCells[i].style.backgroundColor == "black" && allCells[i].className != "dark")
				{
				
					allCells[i].style.backgroundColor = "red";
				}
				else if (allCells[i].style.backgroundColor == "white" && allCells[i].className == "dark")
				{
				
					checkCount += 1;
					
				}
				
			}
			document.hanjieForm.checkCount.value = checkCount;
		}
/*
The purpose of the uncheckSolution function is to hide the results of checkSolution function.
*/
	function uncheckSolution()
		{
			allCells = puzzleCells.getElementsByTagName("td");
			for(i=0; i < allCells.length; i++) 
			{
				if(allCells[i].style.backgroundColor == "red")
				{
				
					allCells[i].style.backgroundColor = "black";
				}
			}
			document.hanjieForm.checkCount.value = null;
		}

