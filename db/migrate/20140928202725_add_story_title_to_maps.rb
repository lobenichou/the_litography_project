class AddStoryTitleToMaps < ActiveRecord::Migration
  def change
    add_column :maps, :story_title, :string
  end
end
