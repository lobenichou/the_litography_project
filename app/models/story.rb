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
  validates :headline, :presence => true
  validates :book_cover, :presence => true
  validates :feature_image, :presence => true
  has_attached_file :book_cover, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :book_cover, :content_type => /\Aimage\/.*\Z/
  has_attached_file :feature_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :feature_image, :content_type => /\Aimage\/.*\Z/

  def self.select_options
    descendants.map{ |c| c.to_s }.sort
  end


  def published_post
    if self.published == true
     self.published_at = Time.now
    end
  end

end
