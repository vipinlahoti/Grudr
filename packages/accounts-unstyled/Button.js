import React from 'react'
import PropTypes from 'prop-types'

class AccountsButton extends React.Component {
  /* Default accounts-react button element */

  render () {
    const { onClick, text, social } = this.props

    return (
      <Grudr.components.Button onClick={onClick} className={ social ? 'social-btn btn-white ' + social : 'btn-block'}>
        {social ? text[0].toUpperCase() + text.substr(1) : text}
      </Grudr.components.Button>
    )
  }
}

AccountsButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AccountsButton
