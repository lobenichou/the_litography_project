class Location < ActiveRecord::Base
  has_many :maps
  has_many :stories, through: :maps
end
