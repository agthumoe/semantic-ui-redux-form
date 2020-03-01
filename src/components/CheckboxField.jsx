import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Checkbox, Form } from 'semantic-ui-react';
import { required } from './validation';

const renderField = (fields) => {
  const {
    label,
    className,
    input,
    toggle,
    disabled,
    slider,
    id,
    readOnly,
    meta: { touched, error },
  } = fields;
  return (
    <Form.Field className={className} error={touched && error && true}>
      <Checkbox
        checked={input.value || false}
        disabled={disabled}
        id={id}
        label={(
          <label htmlFor={id}>
            {label}
            <small>{touched && error ? ` ( ${error} )` : undefined}</small>
          </label>
        )}
        name={input.name}
        onChange={(event, data) => input.onChange(data.checked)}
        readOnly={readOnly}
        slider={slider}
        toggle={toggle}
      />
    </Form.Field>
  );
};

const CheckboxField = ({
  label,
  name,
  id,
  toggle,
  slider,
  disabled,
  isRequired,
  readOnly,
  className,
}) => {
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }
  return (
    <ReduxField
      className={className}
      component={renderField}
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      readOnly={readOnly}
      slider={slider}
      toggle={toggle}
      validate={validate}
    />
  );
};

CheckboxField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  slider: PropTypes.bool,
  toggle: PropTypes.bool,
};

CheckboxField.defaultProps = {
  className: null,
  disabled: false,
  readOnly: false,
  isRequired: false,
  slider: false,
  toggle: false,
};
export default CheckboxField;
