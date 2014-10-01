class RemoveMediaFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :media, :string
  end
end
