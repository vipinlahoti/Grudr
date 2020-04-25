import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FRC from 'formsy-react-components';
import DateTime from './DateTime.jsx';

// import Utils from './utils.js';
const Checkbox = FRC.Checkbox;
// const CheckboxGroup = FRC.CheckboxGroup;
const Input = FRC.Input;
const RadioGroup = FRC.RadioGroup;
const Select = FRC.Select;
const Textarea = FRC.Textarea;

class FormComponent extends Component {
  handleBlur = () => {
    // see https://facebook.github.io/react/docs/more-about-refs.html
    if (this.formControl !== null) {
      this.props.updateCurrentValue(this.props.name, this.formControl.getValue());
    }
  }

  renderComponent() {
    // see https://facebook.github.io/react/warnings/unknown-prop.html
    const { control, group, updateCurrentValue, document, ...rest } = this.props; // eslint-disable-line

    const base = this.props.control === 'function' ? this.props : rest;

    const properties = {
      ...base,
      onBlur: this.handleBlur,
      ref: (ref) => this.formControl = ref
    };

    // if control is a React component, use it
    if (typeof this.props.control === 'function') {
      return <this.props.control {...properties} document={document} />

    } else { // else pick a predefined component
      switch (this.props.control) {
        case 'text':
          return <Input type="text" {...properties} />;
        case 'textarea':
          return <Textarea      {...properties} />;
        case 'checkbox':
          return <Checkbox      {...properties} />;
        // note: checkboxgroup cause React refs error
        case 'checkboxgroup':
          return <CheckboxGroup  {...properties} />;
        case 'radiogroup':
          return <RadioGroup    {...properties} />;
        case 'select':
          return <Select        {...properties} />;
        case 'datetime':
          return <DateTime      {...properties} />;
        default:
          return <Input type="text" {...properties} />;
      }
    
    }
  }

  render() {
    return (
      <div className={"input-" + this.props.name}>
        {this.props.beforeComponent ? this.props.beforeComponent : null}
        {this.renderComponent()}
        {this.props.afterComponent ? this.props.afterComponent : null}
      </div>
    )
  }

}

FormComponent.propTypes = {
  document: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  prefilledValue: PropTypes.any,
  options: PropTypes.any,
  control: PropTypes.any,
  datatype: PropTypes.any,
  disabled: PropTypes.bool,
  updateCurrentValue: PropTypes.func
}

export default FormComponent;

//-------------------------------------//

// having the CheckboxGroup component in this file prevents a weird bug
import FormHelpers from './component';
import Row from './row';

class CheckboxGroup extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  }

  static defaultProps = {
    label: '',
    help: null
  }

  changeCheckbox() {
    let value = [];
    this.props.options.forEach(function(option, key) {
      if (this.refs['element-' + key].checked) {
        value.push(option.value);
      }
    }.bind(this));

    this.setValue(value);
    this.props.onChange(this.props.name, value);
  }

  renderElement() {
    let _this = this;
    let controls = this.props.options.map(function(checkbox, key) {
      let checked = (_this.getValue().indexOf(checkbox.value) !== -1);
      let disabled = _this.isFormDisabled() || checkbox.disabled || _this.props.disabled;
      return (
        <div className="checkbox" key={key}>
          <label>
            <input
              ref={'element-' + key}
              checked={checked}
              type="checkbox"
              value={checkbox.value}
              onChange={_this.changeCheckbox}
              disabled={disabled}
            />
            {checkbox.label}
          </label>
        </div>
      )
    });

    return controls;
  }

  render() {

    if (FormHelpers.getLayout() === 'elementOnly') {
      return (
        <div>{this.renderElement()}</div>
      )
    }

    return (
      <Row {...FormHelpers.getRowProperties()} fakeLabel={true}>
        {this.renderElement()}
        
        
      </Row>
    )
  }
}
