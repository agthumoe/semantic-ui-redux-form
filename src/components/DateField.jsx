import React from 'react';
import PropTypes from 'prop-types';
import { DateInput } from 'semantic-ui-calendar-react';
import { Field as ReduxField } from 'redux-form';
import { Form } from 'semantic-ui-react';
import moment from 'moment';
import { required } from './validation';

const renderField = (fields) => {
  const {
    id,
    label,
    className,
    meta: { touched, error },
    input,
    handleOnChange,
    dateFormat,
    ...rest
  } = fields;
  return (
    <Form.Field className={className}>
      {label && (
        <label htmlFor={id}>
          {label}
          <small>{touched && error ? `* ( ${error} )` : undefined}</small>
        </label>
      )}
      <DateInput
        {...rest}
        {...input}
        dateFormat={dateFormat}
        id={id}
        animation="fade"
        onChange={(event, data) => {
          const normalised = moment(data.value, dateFormat);
          if (typeof handleOnChange === 'function') {
            handleOnChange(event, normalised);
          }
          input.onChange(normalised);
        }}
        value={moment.isMoment(input.value) ? input.value.format(dateFormat) : input.value}
      />
    </Form.Field>
  );
};

const DateField = ({
  isRequired, validate, onChange, ...rest
}) => {
  const newValidator = validate.slice();
  if (isRequired) {
    newValidator.push(required);
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

DateField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  popupPosition: PropTypes.oneOf([
    'top left',
    'top right',
    'bottom left',
    'bottom right',
    'right center',
    'left center',
    'top center',
    'bottom center',
  ]),
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
  validate: PropTypes.arrayOf(PropTypes.func),
};

DateField.defaultProps = {
  validate: [],
  label: '',
  className: '',
  disabled: false,
  isRequired: false,
  readOnly: false,
  onChange: null,
  placeholder: '',
  fluid: false,
  icon: '',
  size: null,
  popupPosition: 'top left',
};

export default DateField;
