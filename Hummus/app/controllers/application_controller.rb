class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
#  before_action :require_login, only: [:admin, :delete, :edit, :new]
#
#    private
#
#    def require_login
#        unless logged_in?
#            flash[:error] = "You must be an admin to access this section"
#            redirect_to new_login_url # halts request cycle
#        end
#    end

http_basic_authenticate_with :name => "admin", :password => "pass", only: [:admin, :delete, :edit, :new, :update]
end