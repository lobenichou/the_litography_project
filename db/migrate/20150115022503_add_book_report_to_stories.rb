class AddBookReportToStories < ActiveRecord::Migration
  def change
    add_column :stories, :book_report, :boolean
  end
end
