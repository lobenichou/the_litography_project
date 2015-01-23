class AddRelatedAuthorsToStories < ActiveRecord::Migration
  def change
    add_column :stories, :related_author, :string
  end
end
