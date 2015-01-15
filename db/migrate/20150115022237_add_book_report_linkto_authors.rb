class AddBookReportLinktoAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :book_report_link, :string
  end
end
