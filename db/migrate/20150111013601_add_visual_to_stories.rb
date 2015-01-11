class AddVisualToStories < ActiveRecord::Migration
  def change
    add_column :stories, :visual, :boolean
  end
end
