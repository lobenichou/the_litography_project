class Api::V1::MultistoriesController < ApplicationController

  def index
    # Gets all the story from the database and make them available via GET at /api/v1/multistories
    @multistories = Multistory.all
  end

  def show
    @multistory = Multistory.find(params[:id])
  end

end