class Story < ActiveRecord::Base
  before_create :published_post
  before_update :published_post_update

  has_many :collections
  has_many :litographers, through: :collections
  accepts_nested_attributes_for :collections, allow_destroy: true
  geocoded_by :address
  after_validation :geocode

  validates :address, :presence => true, if: :is_published?
  validates :litographers, :presence => true, if: :is_published?
  validates :title, :presence => true, if: :is_published?
  validates :headline, :presence => true, if: :is_published?
  validates :book_cover, :presence => true,  if: :is_published?

  # validates :feature_image, :presence => true, if: :is_published?
  has_attached_file :book_cover, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :book_cover, :content_type => /\Aimage\/.*\Z/
  has_attached_file :feature_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :feature_image, :content_type => /\Aimage\/.*\Z/



  def is_published?
    self.published == true
  end


  def published_post
    if self.published == true
     self.published_at = Time.now
   end
 end

  def published_post_update
    if self.published == true && self.published_at == "null"
     self.published_at = Time.now
   end
 end

  # Rails Admin Config

  rails_admin do
    field :title
    field :headline
    field :published
    field :published_at
    field :litographers
    field :address
    field :text, :ck_editor
    field :audio
    field :book_cover
    field :feature_image
    field :has_header
    field :visual
    field :writing
    field :multimedia
    field :sound
    list do
      field :title
      field :headline
      field :address
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