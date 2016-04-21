class RecipeController < ApplicationController
layout 'standard'
   def admin
    @recipes = Recipe.all
   end
   
   def list
    @recipes = Recipe.all
   end
   
   def show
     @recipe = Recipe.find(params[:id])
     @image = Image.find(params[:imageId])
   end
   
   def show_admin
       @recipe = Recipe.find(params[:id])
       @image = Image.find(params[:imageId])
   end
   
   def new
       @recipe = Recipe.new
       @images = Image.all
   end
   
   def recipe_params
     params.require(:recipes).permit(:id, :name, :instructions, :ingredients, :made, :imageId)
   end
   
   def create
     @recipe = Recipe.new(recipe_params)
  
     if @recipe.save
        redirect_to :action => 'admin'
     else
        @images = Image.all
        render :action => 'new'
     end
   end
   
   def edit
     @recipe = Recipe.find(params[:id])
     @images = Image.all
   end
   
   def recipe_param
     params.require(:recipe).permit(:id, :name, :instructions, :ingredients, :made, :imageId)
   end
    
   def update
     @recipe = Recipe.find(params[:id])
  
       if @recipe.update_attributes(recipe_param)
          redirect_to :action => 'admin'
       else
          @images = Image.all
          render :action => 'edit'
       end
   end
   
   def delete
     Recipe.find(params[:id]).destroy 
     redirect_to :action => 'admin'
   end
   
   def show_image
       @image = Image.find(params[:id])
   end
end
