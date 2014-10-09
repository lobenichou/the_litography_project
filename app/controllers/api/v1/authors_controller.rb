class Api::V1::AuthorsController < ApplicationController

  def index
    # Gets all the story from the database and make them available via GET at /api/v1/stories
    @authors = Author.all

  end

end