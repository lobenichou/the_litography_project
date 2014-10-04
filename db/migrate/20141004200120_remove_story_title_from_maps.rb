class RemoveStoryTitleFromMaps < ActiveRecord::Migration
  def change
    remove_column :maps, :story_title, :string
  end
end
