module RecipeHelper
    def line_break(text)
        text = text.gsub(/;/,"\n")
        simple_format(text)
    end
end
