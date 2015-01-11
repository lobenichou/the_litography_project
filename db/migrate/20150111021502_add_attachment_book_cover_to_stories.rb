class AddAttachmentBookCoverToStories < ActiveRecord::Migration
  def self.up
    change_table :stories do |t|
      t.attachment :book_cover
    end
  end

  def self.down
    remove_attachment :stories, :book_cover
  end
end
