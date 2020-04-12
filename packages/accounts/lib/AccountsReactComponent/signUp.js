import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import AccountsReact from '../AccountsReact';
import BaseForm from './baseForm';
import { validateForm } from '../utils';
import { getModel, redirect } from './commonUtils';
import { createUser, login } from './methods';
import SocialButtons from './socialButtons';
import Card from 'react-bootstrap/Card';

class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      errors: [],
      signUpSuccessful: false
    }

    this.getModel = getModel.bind(this)
    this.redirect = redirect.bind(this)
  }

  render () {
    const {
      currentState,
      defaults
    } = this.props

    const {
      texts,
      hideSignInLink,
      showReCaptcha,
      sendVerificationEmail,
      forbidClientAccountCreation
    } = defaults

    const {
      signUpSuccessful
    } = this.state

    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <BaseForm
            context={this}
            currentState={currentState}
            values={this.getModel()}
            defaults={defaults}
            onSubmit={this.onSubmit}
            errors={this.state.errors}
            showReCaptcha={showReCaptcha}
          />

          {signUpSuccessful && sendVerificationEmail && <p>{texts.info.signUpVerifyEmail}</p>}

          {!hideSignInLink && (
            <a className='signIn-link d-block mt-3' onMouseDown={this.redirectToSignIn} href=''>
              <small>{texts.links.toSignIn}</small>
            </a>
          )}
        </Card.Header>

        {!forbidClientAccountCreation && (
          <Card.Body className="text-center pt-4 pb-5">
            <div className="text-muted text-center mb-3">
              <small>or Signup with</small>
            </div>
            <SocialButtons
              defaults={defaults}
            />
          </Card.Body>
        )}
      </Card>
    )
  }

  onSubmit = () => {
    const model = this.getModel()
    // Validate form
    if (!validateForm(model, this)) { return }

    const {
      username,
      email,
      password,
      confirmPassword, // dont delete so it doesn't get included in profile object.
      ...profile
    } = this.getModel()

    // The user object to insert
    const newUser = {
      username,
      email,
      password: password ? Accounts._hashPassword(password) : '',
      ...profile
    }

    const {
      showReCaptcha,
      preSignupHook,
      onSubmitHook,
      loginAfterSignup
    } = this.props.defaults

    // Add recaptcha field
    if (showReCaptcha) {
      newUser.tempReCaptchaResponse = AccountsReact.config.tempReCaptchaResponse
    }

    preSignupHook(password, newUser)

    createUser(newUser, err => {
      if (err) {
        // validation errors suppose to be inside an array, if string then its a different error
        if (typeof err.reason !== 'string') {
          this.setState({ errors: err.reason })
        } else {
          this.setState({ errors: [{ _id: '__globals', errStr: err.reason }] })
        }
      } else {
        this.setState({ signUpSuccessful: true })

        if (loginAfterSignup) {
          const { password } = this.getModel()
          const { username, email } = newUser

          login(username, email, password, err => {
            if (err) { return } // ?
          })
        }
      }

      onSubmitHook(err, this.props.currentState)
    })
  }

  redirectToSignIn = () => {
    this.redirect('signIn', this.props.defaults.redirects.toSignIn)
  }
}

export default SignUp
