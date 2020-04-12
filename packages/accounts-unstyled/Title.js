import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text }) => {
  return (
    <div className="text-muted text-center mb-3">
      <small>{text}</small>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
