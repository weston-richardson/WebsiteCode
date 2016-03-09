/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 5
   Case Problem 4

   Filename: valid.js
   Author: CPT 238 - Final Exam Project
   Date:   5/2/2011

   Functions List:

   initForm()
      Initiates the Web form for use by the customer

   calcCost()
      Calculates the cost of the customer order

   validLengths()
      Validates that empty values have been entered for required
      fields

   testLength(field)
      Tests the length of the text string in the specified field

   validPatterns()
      Validates that the field values match their regular expressions

   testPattern(field, reg)
      Tests a text string against a specified regular expression

   validCNum()
      Tests that the specified credit card number passes the Luhn formula

   validateForm()
      Performs a validation test on all of the fields in the form


*/

/*
The validation logic as it is currently coded changes the color style on field descriptive text when as error is detected. 
You need to change the validation process so that the background color of the input fields are changed to yellow when the field does not validate correctly. 
It needs to be changed back to white when the input field validates correctly. 
The descriptive text for input fields should no longer be used to identify validation errors.

In the current validation logic, the text for field 4 is highlighted (red) when invalid selections are specified in any of the input fields 1, 2 and/or 3. 
This should be changed so that the input fields 1, 2 or 3 (select elements) are highlighted (the input field background color set to yellow) corresponding to the input field or input fields that have not had a valid selection chosen for it.

If the input fields 1, 2 and/or 3 have had validation errors, the selection of a valid selection should immediately revalidate the field so the yellow background is removed. 
You should not have to click the submit button for the validation error to be reset once a valid value is selected.
*/


window.onload = initForm;
var wform;
var productIndex = 1;
var qtyIndex = 1;
var shipIndex = 1;

function initForm() {
   wform = document.forms[0];
   wform.product.onchange = calcCost;
   wform.qty.onchange = calcCost;
   wform.shipping.onchange = calcCost;
   wform.onsubmit = validateForm;
}

function calcCost() {
   productIndex = wform.product.selectedIndex;
   productCost = parseFloat(wform.product.options[productIndex].value);
   if(productIndex !== 0) 
	{
		wform.product.style.backgroundColor = "white";
	}
   qtyIndex = wform.qty.selectedIndex;
   qtyVal = parseFloat(wform.qty.options[qtyIndex].value);
   if(qtyIndex !== 0) 
	{
		wform.qty.style.backgroundColor = "white";
	}
   shipIndex = wform.shipping.selectedIndex;
   shipVal = parseFloat(wform.shipping.options[shipIndex].value);
   if(shipIndex !== 0) 
	{
		wform.shipping.style.backgroundColor = "white";
	}
   if (productIndex != 0 && qtyIndex != 0 && shipIndex != 0) {
      wform.total.value = "$"+(productCost*qtyVal+shipVal).toFixed(2);
   }
}


function validLengths() {
   var isValid = true;
   
   if (testLength(wform.total)== false) isValid = false;
   if (testLength(wform.fname)== false) isValid = false;
   if (testLength(wform.lname)== false) isValid=false;
   if (testLength(wform.address)== false) isValid=false;
   if (testLength(wform.phone)== false) isValid=false;
   if (testLength(wform.cholder)== false) isValid=false;
   if (testLength(wform.cnum)== false) isValid=false;
  
   return isValid;
}

function testLength(field) {
   var isValid = true;
   if (field.value.length == 0) {
	if(field.id != "total") 
	{

		document.getElementById(field.id).style.backgroundColor = "yellow";
	}
	else 
	{
		wform.product.style.backgroundColor = "yellow";
		wform.qty.style.backgroundColor = "yellow";
		wform.shipping.style.backgroundColor = "yellow";

		product2 = wform.product;
		pIndex = product2.selectedIndex;
		productItem = product2.options[pIndex].value;
		if(product2.selectedIndex !== 0) 
		{
			wform.product.style.backgroundColor = "white";
		}
		qty2 = wform.qty;
		qIndex = qty2.selectedIndex;
		qtyItem = qty2.options[qIndex].value;
		if(qty2.selectedIndex !== 0) 
		{
			wform.qty.style.backgroundColor = "white";
		}
		shipping2 = wform.shipping;
		sIndex = shipping2.selectedIndex;
		shippingItem = shipping2.options[sIndex].value;
		if(shipping2.selectedIndex !== 0) 
		{
			wform.shipping.style.backgroundColor = "white";
		}


	}
      isValid = false;
   } else {
	document.getElementById(field.id).style.backgroundColor = "white";
   }
   return isValid;
}

function validPatterns() {
   var isValid = true;

   phonereg = /^\(?\d{3}[\)-]?\s?\d{3}[\s-]?\d{4}$/;
   if (testPattern(wform.phone, phonereg) == false) isValid = false;

   creditType = wform.ccard.selectedIndex;
   switch (creditType) {
      case 0: cregx = /^3[47]\d{13}$/; break;
      case 1: cregx = /^30[0-5]\d{11}$|^3[68]\d{12}$/; break;
      case 2: cregx = /^6011\d{12}$/; break;
      case 3: cregx = /^5[1-5]\d{14}$/; break;
      case 4: cregx = /^4(\d{12}|\d{15})$/; break;
   }  

   if (testPattern(wform.cnum, cregx) == false) isValid = false;

   return isValid;
}


function testPattern(field, reg) {
   var isValid = true;

   wsregx = /\s/g;
   var fv =field.value.replace(wsregx,"");
   if (reg.test(fv) == false) {
      isValid = false;
	if (field.id != "total")
	{
	document.getElementById(field.id).style.backgroundColor = "yellow";
	}
   } else {
	document.getElementById(field.id).style.backgroundColor = "white";
   }
   return isValid;
}

function validCNum() {
   var isValid = true;

   wsregx = /\s/g;
   var fv = wform.cnum.value.replace(wsregx,"");

   if (luhn(fv)==false) {
      isValid = false;
       document.getElementById("cnumLab").style.color="red";
	//document.getElementById("cnum").style.backgroundColor = "yellow";
   } else {
       document.getElementById("cnumLab").style.color="black";
	//document.getElementById("chum").style.backgroundColor = "white";
   }

   return isValid;
}


function validateForm() {

   var vLengths = validLengths();
   var vPatterns = validPatterns();
   var vCNum = validCNum();
   var vForm = vLengths && vPatterns && vCNum;

   if (!vForm) {
      alert("Check the highlighted items in the form for missing/invalid data");
      return false;
   } else {
      return true;
   }
}