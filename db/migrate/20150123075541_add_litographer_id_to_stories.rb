class AddLitographerIdToStories < ActiveRecord::Migration
  def change
    add_column :stories, :litographer_id, :integer
  end
end
