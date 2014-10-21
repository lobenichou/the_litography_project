class Api::V1::EventsController < ApplicationController

  def index
    # Gets all the events from the database and make them available via GET at /api/v1/stories
    @events = Event.all

  end

end