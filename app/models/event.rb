class Event < ActiveRecord::Base
  geocoded_by :location
  after_validation :geocode
  validates_presence_of :event_date, :event_time
  before_validation :convert_date


  def convert_date
    new_date = (self.event_date).to_s
    Time.zone.parse(new_date).utc
  end
end
