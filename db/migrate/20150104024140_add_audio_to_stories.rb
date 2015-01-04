class AddAudioToStories < ActiveRecord::Migration
  def change
    add_column :stories, :audio, :string
  end
end
