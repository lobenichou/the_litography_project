class Admin < ActiveRecord::Base
  after_create { |admin| admin.send_reset_password_instructions }
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def password_required?
    new_record? ? false : super
  end

end
