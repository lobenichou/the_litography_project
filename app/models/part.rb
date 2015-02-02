class Part < ActiveRecord::Base
  belongs_to :multistory

  geocoded_by :address
  after_validation :geocode
  has_attached_file :feature_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :feature_image, :content_type => /\Aimage\/.*\Z/

   rails_admin do
    field :audio
    field :feature_image
    field :part_number
    field :part_name
    field :address
    field :text, :ck_editor
    list do
      field :part_name
      field :audio
      field :part_number
      field :address
    end
  end

end
