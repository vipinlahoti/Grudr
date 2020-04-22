import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime';

class DateTime extends Component {
  componentWillMount() {
    this.context.addToAutofilledValues({[this.props.name]: this.props.value || new Date()});
  }

  render() {
    return (
      <div className="form-group row">
        <label className="control-label col-sm-3">{this.props.label}</label>
        <div className="col-sm-9">
          <DateTimePicker
            value={this.props.value || new Date()}
            // newDate argument is a Moment object given by react-datetime
            onChange={newDate => { this.context.addToAutofilledValues({[this.props.name]: newDate._d}) }}
            format={'x'}
            inputProps={{name: this.props.name}}
          />
        </div>
      </div>
    );
  }
}

DateTime.propTypes = {
  control: PropTypes.any,
  datatype: PropTypes.any,
  group: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
};

DateTime.contextTypes = {
  addToAutofilledValues: PropTypes.func,
  updateCurrentValue: PropTypes.func,
};

export default DateTime;
