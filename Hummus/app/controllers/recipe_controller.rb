class RecipeController < ApplicationController
  
layout 'standard';

   def list
    @recipe = Recipe.all
   end
   
   def show
     @recipe = Recipe.find(params[:id])
   end
   
   def new
     @recipe = Recipe.new
   end
   
   def create
     @recipe = Recipe.new(recipe_params)
  
     if @recipe.save
        redirect_to :action => 'list'
     else
        render :action => 'new'
     end
   end
   
   def recipe_params
     params.require(:recipe).permit(:name, :instructions, :ingredients, :made)
   end
   
   def edit
     @recipe = Recipe.find(params[:id])
   end
   
   def update
     @recipe = Recipe.find(params[:id])
  
       if @recipe.update_attributes(recipe_param)
          redirect_to :action => 'show', :id => @recipe
       else
          render :action => 'edit'
       end
   end
   
   def delete
     Recipe.find(params[:id]).destroy
     redirect_to :action => 'list'
   end
end
