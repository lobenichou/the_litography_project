class RemoveLocationFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :location, :string
  end
end
