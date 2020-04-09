import React from 'react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';
import { Field as ReduxField } from 'redux-form';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import moment from 'moment';
import { required } from './validation';

const renderField = (fields) => {
  const {
    label,
    className,
    id,
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
      <DatesRangeInput
        {...rest}
        name={input.name}
        id={id}
        dateFormat={dateFormat}
        animation="fade"
        value={
          input.value && (input.value.from || input.value.to)
            ? `${
              input.value.from
                ? moment(input.value.from).format(dateFormat)
                : ''
            } - ${
              input.value.to ? moment(input.value.to).format(dateFormat) : ''
            }`
            : ''
        }
        onChange={(event, data) => {
          const normalized = { from: '', to: '' };
          if (data && data.value) {
            const [from, to] = data.value.split(' - ');
            normalized.from = moment(from, dateFormat).startOf('day');
            normalized.to = to ? moment(to, dateFormat).endOf('day') : '';
          }
          input.onChange(normalized);
          if (typeof handleOnChange === 'function') {
            handleOnChange(normalized);
          }
        }}
      />
    </Form.Field>
  );
};

const DatesRangeField = ({
  validate, isRequired, onChange, ...rest
}) => {
  const newValidator = validate.slice();
  if (isRequired) {
    newValidator.push(required);
  }
  return (
    <ReduxField
      {...rest}
      handleOnChange={onChange}
      component={renderField}
      validate={newValidator}
    />
  );
};

DatesRangeField.propTypes = {
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
  dateFormat: PropTypes.string,
};

DatesRangeField.defaultProps = {
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
  dateFormat: 'DD-MM-YYYY',
};

export default DatesRangeField;
