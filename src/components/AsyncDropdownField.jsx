import React, { useState, useEffect } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import _ from 'lodash';
import { required } from './validation';

const renderField = (fields) => {
  const {
    id,
    label,
    placeholder,
    loading,
    disabled,
    readOnly,
    className,
    fluid,
    icon,
    multiple,
    size,
    search,
    handleOnSearch,
    handleOnChange,
    input,
    data,
    allowAdditions,
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
        allowAdditions={allowAdditions}
        disabled={disabled}
        fluid={fluid}
        icon={icon}
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
        onSearchChange={(e, v) => {
          handleOnSearch(e, v);
        }}
        options={data}
        placeholder={placeholder}
        readOnly={readOnly}
        search={!!search}
        selection
        size={size}
        value={input.value}
      />
    </Form.Field>
  );
};

const AsnycDropdownField = ({
  validate,
  id,
  name,
  label,
  placeholder,
  isRequired,
  disabled,
  readOnly,
  className,
  fluid,
  icon,
  size,
  search,
  multiple,
  searchBy,
  onSearch,
  onAddNew,
  onChange,
  keyFieldName,
  valueFieldName,
  textFieldName,
  apiKey,
  api,
}) => {
  const newValidator = validate.slice();
  if (isRequired) {
    newValidator.push(required);
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setData(
          _.map(response, (x) => ({
            key: x[keyFieldName],
            text: x[textFieldName],
            value: x[valueFieldName],
          })),
        );
      });
  }, [keyFieldName, textFieldName, valueFieldName, api]);

  return (
    <Field
      allowAdditions={typeof onAddNew === 'function'}
      className={className}
      component={renderField}
      data={data}
      disabled={disabled}
      fluid={fluid}
      handleOnAddNew={onAddNew}
      handleOnChange={onChange}
      handleOnSearch={(e, v) => {
        if (typeof onSearch === 'function') {
          onSearch(e, v);
        }
        if (searchBy && e.target.value) {
          setLoading(true);
          const headers = new Headers();
          if (apiKey) {
            headers.append('Authorization', `Bearer ${apiKey}`);
          }
          fetch(`${api}?${searchBy}=${e.target.value}`, {
            headers,
          })
            .then((response) => response.json())
            .then((response) => {
              setLoading(false);
              setData(
                _.map(response, (x) => ({
                  key: x[keyFieldName],
                  text: x[textFieldName],
                  value: x[valueFieldName],
                })),
              );
            });
        }
      }}
      icon={icon}
      id={id}
      label={label}
      loading={loading}
      multiple={multiple}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      search={search || searchBy || false}
      size={size}
      validate={newValidator}
    />
  );
};

AsnycDropdownField.propTypes = {
  api: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  keyFieldName: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onAddNew: PropTypes.func,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  search: PropTypes.bool,
  searchBy: PropTypes.string,
  size: PropTypes.oneOf([
    'mini',
    'small',
    'large',
    'big',
    'huge',
    'massive',
    'normal',
  ]),
  textFieldName: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.func),
  valueFieldName: PropTypes.string,
  apiKey: PropTypes.string,
};

AsnycDropdownField.defaultProps = {
  validate: [],
  label: '',
  readOnly: false,
  className: '',
  fluid: false,
  search: false,
  multiple: false,
  icon: 'dropdown',
  size: 'normal',
  disabled: false,
  isRequired: false,
  onAddNew: null,
  onChange: null,
  onSearch: null,
  searchBy: null,
  placeholder: '',
  keyFieldName: 'key',
  textFieldName: 'text',
  valueFieldName: 'value',
  apiKey: null,
};

export default AsnycDropdownField;
