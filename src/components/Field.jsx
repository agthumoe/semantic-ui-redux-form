import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Input, Form } from 'semantic-ui-react';
import { required, number, email } from './validation';

const renderField = (fields) => {
  const {
    id,
    label,
    className,
    icon,
    size,
    input,
    meta: { touched, error },
    handleOnChange,
    ...rest
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
        {...rest}
        {...input}
        icon={icon || undefined}
        onChange={(event, data) => {
          if (typeof handleOnChange === 'function') {
            handleOnChange(event, data);
          }
          input.onChange(event);
        }}
        size={size || undefined}
      />
    </Form.Field>
  );
};

const Field = ({
  type,
  isRequired,
  validate,
  onChange,
  ...rest
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
      {...rest}
      component={renderField}
      handleOnChange={onChange}
      validate={newValidator}
    />
  );
};

Field.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
