class RemoveLitographersFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :litographer, :string
  end
end
