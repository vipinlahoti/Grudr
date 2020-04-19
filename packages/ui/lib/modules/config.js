import { AccountsReact } from 'meteor/grudr:accounts'
import { Random } from 'meteor/random';
import Cookies from 'universal-cookie';

AccountsReact.configure({
  // defaultState: 'signUp',
  confirmPassword: false,
  showForgotPasswordLink: true,
  showPlaceholders: false,
  sendVerificationEmail: false,
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL',
  mapStateToRoute: {
    signIn: '/login',
    signUp: '/register'
  },
  redirects: {
    toSignUp: () => {
      window.location.href = '/register';
    },
    toSignIn: () => {
      window.location.href = '/register';
    },
    toForgotPwd: () => {
      window.location.href = '/forgot-password';
    }
  },
  onLoginHook() {
    if (Meteor.isServer) return;

    const cookies = new Cookies({ TTL: Number.MAX_VALUE });
    let clientId = cookies.get('clientId');

    if (!clientId) {
      clientId = Random.secret();
      cookies.set('clientId', clientId, { path: '/' });
    }

    cookies.set('clientId', clientId, { path: '/' });
    window.location.href = '/';

    // Meteor.call('userLoggedIn', clientId, (error, clientId) => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     cookies.set('clientId', clientId, { path: '/' });
    //     window.location.href = '/';
    //   }
    // });

    console.log('onLoginHook', 'cookies: ', cookies, ' clientId: ', clientId);
  },
  onLogoutHook() {
    if (Meteor.isServer) return;

    const cookies = new Cookies({ TTL: Number.MAX_VALUE });
    const clientId = cookies.get('clientId');

    cookies.remove('clientId');
    window.location.href = '/';

    // Meteor.call('userLoggedOut', clientId, error => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     cookies.remove('clientId');
    //   }
    // });

    console.log('onLogoutHook', 'cookies: ', cookies, ' clientId: ', clientId);
  },
  oauth: {
    google: {
      forceApprovalPrompt: true
    },
    facebook: {
      // ...
    }
  }
});
