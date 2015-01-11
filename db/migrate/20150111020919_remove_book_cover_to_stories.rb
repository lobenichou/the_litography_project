class RemoveBookCoverToStories < ActiveRecord::Migration
  def change
    remove_column :stories, :book_cover, :string
  end
end
