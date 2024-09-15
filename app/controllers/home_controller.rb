class HomeController < ApplicationController
    def index
        # @main_categories = Category.take(4)
        @main_categories = Category.all
    end
end