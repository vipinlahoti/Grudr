import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormComponent from './FormComponent';

class FormGroup extends Component {
  render() {
    return (
      <div className="form-section">
        {this.props.name === 'default' ? null : <h3 className="form-section-heading">{this.props.label}</h3>}
        {this.props.fields.map(field => <FormComponent key={field.name} {...field} updateCurrentValue={this.props.updateCurrentValue} />)}
      </div>
    )
  }
}

FormGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  order: PropTypes.number,
  fields: PropTypes.array,
  updateCurrentValue: PropTypes.func
}

export default FormGroup;
