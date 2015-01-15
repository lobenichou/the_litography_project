class AddQuestionThreeToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :question_three, :string
  end
end
