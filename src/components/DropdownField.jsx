import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from './validation';

const renderField = (fields) => {
  const {
    id,
    label,
    placeholder,
    loading,
    disabled,
    clearable,
    readOnly,
    className,
    fluid,
    icon,
    search,
    size,
    handleOnSearch,
    handleOnChange,
    handleOnAddNew,
    input,
    multiple,
    data,
    meta: { touched, error },
  } = fields;

  return (
    <Form.Field className={className} error={touched && error && true}>
      {label && (
        <label htmlFor={id}>
          {label}
          <small>{touched && error ? `* ( ${error} )` : undefined}</small>
        </label>
      )}
      <Dropdown
        disabled={disabled}
        fluid={fluid}
        icon={icon}
        id={id}
        clearable={clearable}
        name={input.name}
        loading={loading}
        multiple={multiple}
        onChange={(event, d) => {
          if (typeof handleOnChange === 'function') {
            handleOnChange(event, d);
          }
          if (multiple) {
            input.onChange([...d.value]);
          } else {
            input.onChange(d.value);
          }
        }}
        onSearchChange={(event) => {
          if (typeof handleOnSearch === 'function') {
            handleOnSearch(event.target.value);
          }
        }}
        allowAdditions={typeof handleOnAddNew === 'function'}
        onAddItem={(event, d) => {
          if (typeof handleOnAddNew === 'function') {
            handleOnAddNew(event, d);
          }
        }}
        options={data}
        placeholder={placeholder}
        readOnly={readOnly}
        search={search || typeof handleOnSearch === 'function'}
        selection
        size={size}
        value={multiple ? [...input.value] : input.value}
      />
    </Form.Field>
  );
};

const DropdownField = ({
  validate,
  id,
  clearable,
  name,
  label,
  placeholder,
  isRequired,
  loading,
  disabled,
  readOnly,
  className,
  fluid,
  icon,
  size,
  search,
  data,
  onSearch,
  onAddNew,
  multiple,
  onChange,
}) => {
  const newValidator = validate.slice();
  if (isRequired) {
    newValidator.push(required);
  }

  return (
    <Field
      clearable={clearable}
      className={className}
      component={renderField}
      data={data}
      disabled={disabled}
      fluid={fluid}
      handleOnAddNew={onAddNew}
      handleOnChange={onChange}
      handleOnSearch={onSearch}
      icon={icon}
      id={id}
      label={label}
      loading={loading}
      multiple={multiple}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      search={search}
      size={size}
      validate={newValidator}
    />
  );
};

DropdownField.propTypes = {
  className: PropTypes.string,
  clearable: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.bool,
    ]).isRequired,
  })),
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  loading: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onAddNew: PropTypes.func,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  search: PropTypes.bool,
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

DropdownField.defaultProps = {
  validate: [],
  clearable: false,
  label: '',
  readOnly: false,
  search: false,
  className: '',
  data: [],
  fluid: false,
  icon: 'dropdown',
  loading: false,
  size: 'normal',
  disabled: false,
  isRequired: false,
  multiple: false,
  onChange: null,
  onSearch: null,
  onAddNew: null,
  placeholder: '',
};

export default DropdownField;
