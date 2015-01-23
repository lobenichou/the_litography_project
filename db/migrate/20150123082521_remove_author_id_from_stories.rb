class RemoveAuthorIdFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :author_id, :integer
  end
end
