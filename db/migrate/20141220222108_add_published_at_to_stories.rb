class AddPublishedAtToStories < ActiveRecord::Migration
  def change
    add_column :stories, :published_at, :datetime
  end
end
