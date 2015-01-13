class AddHeadlineToStories < ActiveRecord::Migration
  def change
    add_column :stories, :headline, :string
  end
end
