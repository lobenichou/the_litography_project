class Litographer < ActiveRecord::Base
  has_many :collections
  has_many :multicollections
  has_many :stories, through: :collections, :dependent => :destroy
  has_many :multistories, through: :multicollections, :dependent => :destroy
  accepts_nested_attributes_for :collections, allow_destroy: true
  accepts_nested_attributes_for :multicollections, allow_destroy: true

  has_attached_file :avatar,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :avatar,
    content_type: /\Aimage\/.*\Z/

  validates :name, :presence => true
  validates :bio, :presence => true
  validates :avatar, :presence => true

end
