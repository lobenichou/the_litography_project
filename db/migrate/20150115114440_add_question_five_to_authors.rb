class AddQuestionFiveToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :question_five, :string
  end
end
