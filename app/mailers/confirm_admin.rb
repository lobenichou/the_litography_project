class ConfirmAdmin < Devise::Mailer
  default from: "lo@thelitographyproject.com"
  helper :application # gives access to all helpers defined within `application_helper`.l`
  include Devise::Mailers::Helpers

  def new_user_waiting_for_approval(admin)
    @new_user = admin.email
    @url  = 'admins/sign_in'
    mail(to: 'lo@thelitographyproject.com', subject: 'New User')
  end
end
