import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Input, Form } from 'semantic-ui-react';
import { required, number, email } from './validation';

const renderField = (fields) => {
  const {
    id,
    label,
    placeholder,
    type,
    className,
    readOnly,
    disabled,
    fluid,
    icon,
    loading,
    size,
    input,
    meta: { touched, error },
    handleOnChange,
  } = fields;

  return (
    <Form.Field className={className} error={touched && error && true}>
      {label && (
        <label htmlFor={id}>
          {label}
          <small>{touched && error ? ` ( ${error} )` : undefined}</small>
        </label>
      )}
      <Input
        {...input}
        disabled={disabled}
        fluid={fluid}
        icon={icon || undefined}
        id={id}
        loading={loading}
        onChange={(event, data) => {
          if (typeof handleOnChange === 'function') {
            handleOnChange(event, data);
          }
          input.onChange(event);
        }}
        placeholder={placeholder}
        readOnly={readOnly}
        size={size || undefined}
        type={type}
      />
    </Form.Field>
  );
};

const Field = ({
  label,
  name,
  placeholder,
  id,
  type,
  disabled,
  readOnly,
  isRequired,
  className,
  fluid,
  icon,
  loading,
  size,
  validate,
  onChange,
}) => {
  const newValidator = validate.slice();
  if (isRequired) {
    newValidator.push(required);
  }
  if (type === 'number') {
    newValidator.push(number);
  }
  if (type === 'email') {
    newValidator.push(email);
  }
  return (
    <ReduxField
      className={className}
      component={renderField}
      disabled={disabled}
      fluid={fluid}
      handleOnChange={onChange}
      icon={icon}
      id={id}
      label={label}
      loading={loading}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      size={size}
      type={type}
      validate={validate}
    />
  );
};

Field.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'small',
    'large',
    'big',
    'huge',
    'massive',
    'normal',
  ]),
  type: PropTypes.oneOf(['number', 'text', 'password', 'email']),
  validate: PropTypes.arrayOf(PropTypes.func),
};

Field.defaultProps = {
  validate: [],
  label: '',
  className: '',
  type: 'text',
  disabled: false,
  isRequired: false,
  readOnly: false,
  onChange: null,
  placeholder: '',
  fluid: false,
  icon: '',
  size: null,
  loading: false,
};

export default Field;
