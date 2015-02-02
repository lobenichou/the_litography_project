class Collection < ActiveRecord::Base
  belongs_to :litographer
  belongs_to :story
end
