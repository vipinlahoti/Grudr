import { AccountsReact } from 'meteor/grudr:accounts'

AccountsReact.configure({
  defaultState: 'signUp',
  confirmPassword: false,
  showForgotPasswordLink: true,
  showPlaceholders: false,
  enableEnrollAccount: false,
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
