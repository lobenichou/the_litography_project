class Location < ActiveRecord::Base
  has_many :maps
  has_many :stories, through: :maps

  geocoded_by :address
  after_validation :geocode

  validates :address, :presence => true

def to_s
  "#{address}"
end

def lat_long
  [self.latitude, self.longitude]
end

end
