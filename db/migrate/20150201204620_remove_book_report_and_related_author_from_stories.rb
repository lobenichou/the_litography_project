class RemoveBookReportAndRelatedAuthorFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :book_report, :boolean
    remove_column :stories, :related_author, :string
  end
end
