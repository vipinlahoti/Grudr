import { AccountsReact } from 'meteor/grudr:accounts'

AccountsReact.style(Package['grudr:accounts-unstyled'], true)

AccountsReact.configure({
  defaultState: 'signUp',
  confirmPassword: false,
  showForgotPasswordLink: true,
  showLabels: false,
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
  mapStateToRoute: {
    signIn: '/login',
    signUp: '/register'
  },
  oauth: {
    google: {
      forceApprovalPrompt: true
    }
  }
});
