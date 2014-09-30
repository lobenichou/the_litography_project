class Map < ActiveRecord::Base
  belongs_to :location
  belongs_to :story
end
