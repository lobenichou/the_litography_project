class Author < ActiveRecord::Base


  has_many :stories
  has_attached_file :avatar,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :avatar,
    content_type: /\Aimage\/.*\Z/



  def to_s
  "#{first_name} #{last_name}"
  end


end
