class RemoveTypeFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :type, :string
  end
end
