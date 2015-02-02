class AddAttachmentBookCoverToMultistories < ActiveRecord::Migration
  def self.up
    change_table :multistories do |t|
      t.attachment :book_cover
    end
  end

  def self.down
    remove_attachment :multistories, :book_cover
  end
end
