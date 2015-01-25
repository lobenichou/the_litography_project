class Story < ActiveRecord::Base
  before_save :published_post
  belongs_to :litographer, :inverse_of => :stories
  has_many :maps
  has_many :locations, through: :maps, :dependent => :destroy
  has_many :images, as: :attachable, :dependent => :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
  accepts_nested_attributes_for :maps, allow_destroy: true

  validates :litographer, :presence => true, if: :is_published?
  validates :title, :presence => true, if: :is_published?
  validates :headline, :presence => true, if: :is_published?
  validates :book_cover, :presence => true,  if: :is_book_report?

  # validates :feature_image, :presence => true, if: :is_published?
  has_attached_file :book_cover, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :book_cover, :content_type => /\Aimage\/.*\Z/
  has_attached_file :feature_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "missing.png"
  validates_attachment_content_type :feature_image, :content_type => /\Aimage\/.*\Z/

  def is_book_report?
    self.book_report == false && self.published == true
  end

  def is_published?
    self.published == true
  end

  def self.select_options
    descendants.map{ |c| c.to_s }.sort
  end


  def published_post
    if self.published == true
     self.published_at = Time.now
   end
 end

  # Rails Admin Config

  rails_admin do
    field :title
    field :headline
    field :book_report
    field :published
    field :litographer
    field :related_author
    field :text, :ck_editor
    field :audio
    field :locations
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
      field :book_report
      field :published
      field :author
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