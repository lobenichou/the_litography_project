class AddAttachmentFeatureImageToStories < ActiveRecord::Migration
  def self.up
    change_table :stories do |t|
      t.attachment :feature_image
    end
  end

  def self.down
    remove_attachment :stories, :feature_image
  end
end
