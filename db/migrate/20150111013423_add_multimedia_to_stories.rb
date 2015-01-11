class AddMultimediaToStories < ActiveRecord::Migration
  def change
    add_column :stories, :multimedia, :boolean
  end
end
