class AddAttachmentFeatureImageToParts < ActiveRecord::Migration
  def self.up
    change_table :parts do |t|
      t.attachment :feature_image
    end
  end

  def self.down
    remove_attachment :parts, :feature_image
  end
end
