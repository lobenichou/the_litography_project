class Story < ActiveRecord::Base
  belongs_to :author
  has_many :maps
  has_many :locations, through: :maps
  has_many :images, as: :attachable, :dependent => :destroy
  accepts_nested_attributes_for :images, allow_destroy: true


  def self.select_options
    descendants.map{ |c| c.to_s }.sort
  end

end
