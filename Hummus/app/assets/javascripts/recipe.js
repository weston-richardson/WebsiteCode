$('#recipeForm').bind('keypress keydown keyup', function(e){
      if(e.keyCode == 13) { e.preventDefault(); }
   });