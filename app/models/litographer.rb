class Litographer < ActiveRecord::Base
  has_many :stories, :inverse_of => :litographer
  has_attached_file :avatar,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :avatar,
    content_type: /\Aimage\/.*\Z/

  validates :name, :presence => true
  validates :bio, :presence => true
  validates :avatar, :presence => true

end
