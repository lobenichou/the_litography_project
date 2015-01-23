class AddAttachmentAvatarToLitographers < ActiveRecord::Migration
  def self.up
    change_table :litographers do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :litographers, :avatar
  end
end
