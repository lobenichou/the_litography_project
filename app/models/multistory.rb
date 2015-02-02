class Multistory < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode
  before_create :published_post
  before_update :published_post_update

  has_many :parts

  has_many :multicollections
  has_many :litographers, through: :multicollections
  accepts_nested_attributes_for :multicollections, allow_destroy: true
  has_attached_file :book_cover, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :book_cover, :content_type => /\Aimage\/.*\Z/
  has_attached_file :feature_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :feature_image, :content_type => /\Aimage\/.*\Z/

  # def is_published?
  #   self.published == true
  # end


  def published_post
    if self.published == true
     self.published_at = Time.now
   end
 end

  def published_post_update
    if self.published == true && self.published_at == nil
     self.published_at = Time.now
   end
 end

  # Rails Admin Config

  rails_admin do
    field :title
    field :headline
    field :published
    field :parts
    field :address
    field :litographers
    field :book_cover
    field :feature_image
    field :visual
    field :writing
    field :multimedia
    field :sound
    list do
      field :published_at
      field :title
      field :headline
      field :parts
      field :published
      field :feature_image do
        formatted_value do
          bindings[:view].tag(:img, { :src => bindings[:object].image.url }) << value
        end
      end
      field :book_cover do
        formatted_value do
          bindings[:view].tag(:img, { :src => bindings[:object].image.url }) << value
        end
      end
    end
  end
end
