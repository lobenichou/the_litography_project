class AddLitographersToStories < ActiveRecord::Migration
  def change
    add_column :stories, :litographer, :string
  end
end
