class AddBookReportToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :book_report, :string
  end
end
