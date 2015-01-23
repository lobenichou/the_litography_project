class RemoveLitographerIdFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :litographer_id, :integer
  end
end
