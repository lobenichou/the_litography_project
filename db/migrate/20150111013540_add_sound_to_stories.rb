class AddSoundToStories < ActiveRecord::Migration
  def change
    add_column :stories, :sound, :boolean
  end
end
