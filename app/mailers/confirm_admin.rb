class ConfirmAdmin < Devise::Mailer
  default from: "lo@thelitographyproject.com"
  helper :application # gives access to all helpers defined within `application_helper`.l`
  include Devise::Mailers::Helpers

  def new_user_waiting_for_approval(self)
    @new_user = self.email
    @url  = 'admins/sign_in'
    mail(to: 'lo@thelitography.com', subject: 'New User')
  end
end
