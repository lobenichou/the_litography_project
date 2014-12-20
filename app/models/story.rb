class Story < ActiveRecord::Base
  before_save :published_post
  belongs_to :author
  has_many :maps
  has_many :locations, through: :maps, :dependent => :destroy
  has_many :images, as: :attachable, :dependent => :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
  accepts_nested_attributes_for :maps, allow_destroy: true
  validates :title, :presence => true
  validates :author, :presence => true
  validates :title, :presence => true
  validates :type, :presence => true


  def self.select_options
    descendants.map{ |c| c.to_s }.sort
  end


  def published_post
    if self.published == true
     self.published_at = Time.now
    end
  end

end
