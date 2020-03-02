import React from 'react';
import PropTypes from 'prop-types';
import { DateTimeInput } from 'semantic-ui-calendar-react';
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
    appendCurrentTime,
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
      <DateTimeInput
        {...rest}
        {...input}
        dateTimeFormat={dateFormat}
        animation="fade"
        value={input.value ? moment(input.value).format(dateFormat) : ''}
        onChange={(event, data) => {
          let normalisedDate = null;
          if (data && data.value) {
            normalisedDate = moment(data.value, dateFormat);
          }
          if (typeof handleOnChange === 'function') {
            handleOnChange(event, normalisedDate);
          }
          input.onChange(normalisedDate);
        }}
        onBlur={() => input.onBlur(input.value)}
      />
    </Form.Field>
  );
};

const DateTimeField = ({
  dateFormat,
  isRequired,
  validate,
  onChange,
  ...rest
}) => {
  const newValidator = validate.slice();
  let timeFormat = '24';
  if (dateFormat) {
    if (dateFormat.includes('a')) {
      timeFormat = 'ampm';
    } else if (dateFormat.includes('A')) {
      timeFormat = 'AMPM';
    }
  }
  if (isRequired) {
    newValidator.push(required);
  }
  return (
    <ReduxField
      {...rest}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      validate={newValidator}
      handleOnChange={onChange}
      component={renderField}
    />
  );
};

DateTimeField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  icon: PropTypes.string,
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
  dateFormat: PropTypes.string,
  appendCurrentTime: PropTypes.bool,
};

DateTimeField.defaultProps = {
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
  dateFormat: 'DD-MM-YYYY hh:mm A',
  appendCurrentTime: false,
};

export default DateTimeField;
