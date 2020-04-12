import React from 'react'
import PropTypes from 'prop-types'

const Errors = ({ errors }) => {
  return errors.map((err, i) => (
    <small key={i} className="d-block text-danger mt-2">
      {err.errStr}
    </small>
  ))
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default Errors
