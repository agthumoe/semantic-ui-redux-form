import React from 'react';
import PropTypes from 'prop-types';
import { Form, TextArea } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { required } from './validation';

const renderField = (fields) => {
  const {
    placeholder,
    id,
    input,
    label,
    meta: { touched, error },
    className,
    disabled,
    size,
    readOnly,
    handleOnChange,
  } = fields;
  return (
    <Form.Field className={className} error={touched && error && true}>
      {label && (
      <label htmlFor={id}>
        {label}
        <small>{touched && error ? `* ( ${error} )` : undefined}</small>
      </label>
      )}
      <TextArea
        {...input}
        disabled={disabled}
        id={id}
        onChange={(event, data) => {
          if (typeof handleOnChange === 'function') {
            handleOnChange(event, data);
          }
          input.onChange(event);
        }}
        placeholder={placeholder}
        readOnly={readOnly}
        size={size || undefined}
      />
    </Form.Field>
  );
};

const TextAreaField = ({
  name,
  label,
  placeholder,
  isRequired,
  id,
  disabled,
  readOnly,
  size,
  validate,
  onChange,
  className,
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
      handleOnChange={onChange}
      id={id}
      label={label}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      size={size}
      validate={newValidator}
    />
  );
};

TextAreaField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'mini',
    'small',
    'large',
    'big',
    'huge',
    'massive',
    'normal',
  ]),
  validate: PropTypes.arrayOf(PropTypes.func),
  onChange: PropTypes.func,
};

TextAreaField.defaultProps = {
  validate: [],
  label: '',
  className: '',
  disabled: false,
  isRequired: false,
  readOnly: false,
  onChange: null,
  placeholder: '',
  size: null,
};

export default TextAreaField;
