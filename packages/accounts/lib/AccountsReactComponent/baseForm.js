/* eslint key-spacing:0 padded-blocks: 0 */
import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { handleInputChange } from './commonUtils'

class BaseForm extends Component {
  constructor (props) {
    super()
    this.handleInputChange = handleInputChange.bind(props.context)
  }

  componentDidMount () {
    // We must explicitly rerender recaptcha on every mount
    if (this.props.showReCaptcha) { // will be available only for signup form.
      let reCaptchaParams = this.props.defaults.reCaptcha || Meteor.settings.public.reCaptcha

      setTimeout(() => {
        window.grecaptcha.render('recaptcha-container',
          { ...reCaptchaParams,
            callback: window.reCaptchaCallback
          },
        )
      }, 1)
    }
  }

  render () {
    // State specifics
    const {
      currentState,
      values,
      defaults,
      onSubmit,
      errors
    } = this.props

    // Defaults
    const {
      texts,
      showReCaptcha,
      confirmPassword
    } = defaults

    const _fields = defaults.fields[currentState]
    const fields  = confirmPassword ? _fields : _fields.filter(field => field._id !== 'confirmPassword')

    // texts
    const title  = texts.title[currentState]
    const button = texts.button[currentState]

    // Global errors
    const globalErrors = errors ? errors.filter(errField => errField._id === '__globals') : []
    return (
      <Grudr.components.Forms onSubmit={(e) => e.preventDefault()} className={`ar-${currentState}`}>

        {/* Title  */}
        {title && <Grudr.components.Title text={title} />}

        {/* Fields  */}
        <div className='ar-fields'>
          {fields.map((f, i) => {

            let Field = Grudr.components.InputField // Defaults to input
            switch (f.type) {
              case 'select': Field = Grudr.components.SelectField; break;
              case 'radio':  Field = Grudr.components.RadioField;  break;
            }

            const props = {
              key: i,
              values,
              defaults,
              onChange: this.handleInputChange,
              error: errors ? errors.find((errField) => errField._id === f._id) : [],
              ...f
            }

            if (this.shouldFocusFirstInput(i)) {
              props.focusInput = true
            }

            return React.createElement(Field, props)
          })}
        </div>

        {showReCaptcha && <div id='recaptcha-container' />}

        {/* Submit Button  */}
        <Grudr.components.AccountsButton onClick={onSubmit} text={button} />


        {/* Errors Message  */}
        <div className='ar-errors'>
          {globalErrors.length > 0 && <Grudr.components.Errors errors={globalErrors} />}
        </div>

      </Grudr.components.Forms>
    )
  }

  shouldFocusFirstInput = index => {
    return this.props.defaults.focusFirstInput && index === 0
  }
}

BaseForm.propTypes = {
  context: PropTypes.object.isRequired,
  currentState: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  defaults: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired
}

export default BaseForm
