import React from 'react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';
import { Field as ReduxField } from 'redux-form';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const renderField = (fields) => {
  const {
    label,
    className,
    id,
    meta: { touched, error },
    input,
    handleOnChange,
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
        value={input.value ? `${input.value.from} - ${input.value.to}` : ''}
        onChange={(event, data) => {
          const normalized = { from: '', to: '' };
          if (data && data.value) {
            const [from, to] = data.value.split(' - ');
            normalized.from = from;
            normalized.to = to;
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

const DateRangeField = ({
  onChange, ...rest
}) => (
  <ReduxField
    {...rest}
    handleOnChange={onChange}
    component={renderField}
  />
);

DateRangeField.propTypes = {
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

DateRangeField.defaultProps = {
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

export default DateRangeField;
