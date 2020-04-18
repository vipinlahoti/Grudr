import Grudr from 'meteor/grudr:lib';
import React from 'react'
import PropTypes from 'prop-types'

const GrudrErrors = ({ errors }) => {
  console.log('errors', errors)
  return errors.map((err, i) => (
    <small key={i} className="d-block text-danger mt-2">
      {err.errStr}
    </small>
  ))
}

GrudrErrors.propTypes = {
  errors: PropTypes.array.isRequired
}

Grudr.registerComponent('Errors', GrudrErrors);
