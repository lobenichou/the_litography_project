class Event < ActiveRecord::Base
  geocoded_by :location
  after_validation :geocode
  validates_presence_of :event_date, :event_time


end
