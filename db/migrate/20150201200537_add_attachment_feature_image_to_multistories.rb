class AddAttachmentFeatureImageToMultistories < ActiveRecord::Migration
  def self.up
    change_table :multistories do |t|
      t.attachment :feature_image
    end
  end

  def self.down
    remove_attachment :multistories, :feature_image
  end
end
