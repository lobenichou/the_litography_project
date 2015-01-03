class Api::V1::StoriesController < ApplicationController

  def index
    # Gets all the story from the database and make them available via GET at /api/v1/stories
    @stories = Story.all
  end

  def show
    @story = Story.find(params[:id])
  end

end