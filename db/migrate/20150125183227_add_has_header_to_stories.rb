class AddHasHeaderToStories < ActiveRecord::Migration
  def change
    add_column :stories, :has_header, :boolean
  end
end
