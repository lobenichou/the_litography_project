class AddWritingToStories < ActiveRecord::Migration
  def change
    add_column :stories, :writing, :boolean
  end
end
