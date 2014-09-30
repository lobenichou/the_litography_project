class Story < ActiveRecord::Base
  belongs_to :author
  has_many :maps
  has_many :locations, through: :maps


  has_attached_file :media,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :media,
    content_type: /\Aimage\/.*\Z/

  def self.select_options
    descendants.map{ |c| c.to_s }.sort
  end

end
