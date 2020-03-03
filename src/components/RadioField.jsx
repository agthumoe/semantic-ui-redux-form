import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from './validation';

const renderField = (fields) => {
  const {
    name,
    label,
    className,
    id,
    options,
    inline,
    onHandleChange,
    input: { value, onChange },
    meta: { touched, error },
  } = fields;
  return (
    <Form.Field error={touched && error && true} className={className}>
      {label && (
        <label htmlFor={id} className={className}>
          {label}
        </label>
      )}
      <Form.Group inline={inline} grouped={!inline}>
        {options.map((option) => (
          <Form.Radio
            label={option.label}
            name={name}
            value={option.value}
            key={option.value}
            checked={value === option.value}
            onChange={(e, v) => {
              if (typeof onHandleChange === 'function') {
                onHandleChange(e, v);
              }
              onChange(v.value);
            }}
          />
        ))}
      </Form.Group>
    </Form.Field>
  );
};

const RadioField = ({
  validate,
  disabled,
  readOnly,
  onChange,
  isRequired,
  inline,
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
      component={renderField}
      name={name}
      id={id}
      inline={inline}
      label={label}
      className={className}
      validate={newValidator}
      disabled={disabled}
      readOnly={readOnly}
      onHandleChange={onChange}
      options={options}
    />
  );
};

RadioField.propTypes = {
  className: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.func),
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  inline: PropTypes.bool,
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
  className: '',
  validate: [],
  label: '',
  isRequired: false,
  disabled: false,
  readOnly: false,
  inline: true,
  onChange: null,
  options: [],
};

export default RadioField;
