import React, { Component, Fragment } from 'react'
import BaseForm from './baseForm'
import { validateForm } from '../utils/'
import { getModel, redirect } from './commonUtils'
import { forgotPassword } from './methods'
import Card from 'react-bootstrap/Card';

class ForgotPassword extends Component {
  constructor () {
    super()
    this.state = {
      emailSent: false,
      errors: []
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
      hideSignInLink
    } = defaults

    const {
      errors,
      emailSent
    } = this.state

    const model = this.getModel()

    return (
      <Card className="shadow-lg">
        <Card.Header className="p-5">
          <BaseForm
            context={this}
            currentState={currentState}
            values={model}
            defaults={defaults}
            onSubmit={this.onSubmit}
            errors={errors}
          />

          {emailSent && <p className='email-sent'>{texts.forgotPwdSubmitSuccess}</p>}

          {!hideSignInLink && (
            <a className='signIn-link d-block mt-3' onMouseDown={this.redirectToSignIn} href=''>
              <small>{texts.links.toSignIn}</small>
            </a>
          )}
        </Card.Header>
      </Card>
    )
  }

  onSubmit = () => {
    // Validate form
    if (!validateForm(this.getModel(), this)) return

    this.sentPasswordResetLink()
  }

  sentPasswordResetLink = () => {
    // Send a reset link to the desired email

    forgotPassword({ email: this.state.email }, err => {
      if (err) {
        this.setState({ errors: [{ _id: '__globals', errStr: err.reason }], emailSent: false })
      } else {
        this.setState({ errors: [], emailSent: true })
      }

      this.props.defaults.onSubmitHook(err, this.props.currentState)
    })
  }

  redirectToSignIn = () => {
    this.redirect('signIn', this.props.defaults.redirects.toSignIn)
  }
}

export default ForgotPassword
