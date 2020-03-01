import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Options from './Options';
import { required } from './validation';

const renderField = (fields) => {
  const {
    name,
    label,
    className,
    id,
    options,
    input: { value, onChange, ...rest },
    meta: { touched, error },
  } = fields;
  return (
    <Form.Field className={className} error={touched && error && true}>
      <label className={className} htmlFor={id}>
        {label}
      </label>
      <Options
        className={className}
        label={label}
        name={name}
        onChange={onChange}
        options={options}
        value={value}
        {...rest}
        id={id}
      />
    </Form.Field>
  );
};

const RadioField = ({
  validate,
  disabled,
  readOnly,
  onChange,
  isRequired,
  label,
  name,
  id,
  className,
  options,
}) => {
  const newValidator = validate.slice();
  if (isRequired) {
    newValidator.push(required);
  }
  return (
    <Field
      className={className}
      component={renderField}
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      onHandleChange={onChange}
      options={options}
      readOnly={readOnly}
      validate={newValidator}
    />
  );
};

RadioField.propTypes = {
  validate: PropTypes.arrayOf(PropTypes.func),
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ]).isRequired,
    }),
  ),
};

RadioField.defaultProps = {
  validate: [],
  label: '',
  isRequired: false,
  disabled: false,
  readOnly: false,
  onChange: null,
  options: [],
};

export default RadioField;
