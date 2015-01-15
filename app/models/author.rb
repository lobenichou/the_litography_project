class Author < ActiveRecord::Base
  has_attached_file :avatar,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :avatar,
    content_type: /\Aimage\/.*\Z/

  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :bio, :presence => true
  validates :avatar, :presence => true

  def to_s
  "#{first_name} #{last_name}"
  end


end
