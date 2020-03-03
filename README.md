# installation

## npm
```
npm install semantic-ui-redux-form
```
## yarn
```
yarn add semantic-ui-redux-form
```

## Prerequisites

1. [Setup Redux](https://redux.js.org/introduction/getting-started)
2. [Setup Redux Form](https://redux-form.com/8.3.0/docs/gettingstarted.md/)
3. [Add React Semantic UI](https://react.semantic-ui.com/usage)

# Examples

```javascript

import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import {
  Field,
  RadioField,
  CheckboxField,
  TextAreaField,
  DropdownField,
  DateField,
  DateTimeField,
  DatesRangeField,
  AsyncDropdownField
} from "semantic-ui-redux-form";

const ExampleForm = props => {
  const { handleSubmit, onFormSubmit } = props;

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <Field
        name="text"
        id="text"
        label="Text"
        placeholder="Text Field"
        isRequired
      />
      <Field
        name="email"
        id="email"
        icon="search"
        label="Email"
        type="email"
        placeholder="Email Field with custom icon"
      />
      <Field
        name="number"
        id="number"
        label="Number"
        disabled
        type="number"
        placeholder="Disabled number field"
      />
      <TextAreaField
        name="textArea"
        id="textArea"
        label="TextArea Field"
        placeholder="Textarea field"
      />
      <DropdownField
        name="dropdownField"
        id="dropdownField"
        data={citydata}
        label="Dropdown Field"
        placeholder="Select Data"
      />
      <DropdownField
        multiple
        name="multiselectField"
        id="multiselectField"
        data={hobbydata}
        label="Multiple Select Field"
        placeholder="Select many data"
      />
      <DateField
        id="dateField"
        label="Date Field"
        name="dateField"
        placeholder="Date Field"
        appendCurrentTime
        isRequired
      />
      <DateTimeField
        name="dateTimeField"
        id="dateTimeField"
        label="Date Time Field"
      />
      <DatesRangeField
        id="datesRangeField"
        label="Dates Range Field"
        name="datesRangeField"
        placeholder="Dates range Field"
      />
      <RadioField
        name="radioField"
        id="radioField"
        label="Radio Field"
        options={[
          { label: "Male", value: "MALE" },
          { label: "Female", value: "FEMALE" },
          { label: "Other", value: "Other" }
        ]}
      />
      <CheckboxField
        name="checkBoxField"
        id="checkBoxField"
        isRequired
        label="Checkbox Field"
      />
      <CheckboxField name="toggle" id="id" label="toggle" toggle />
      <CheckboxField name="slider" id="slider" label="slider" slider />

      <AsnycDropdownField
        id="asyncField"
        name="asyncField"
        label="Async Field"
        keyFieldName="id"
        textFieldName="id"
        valueFieldName="id"
        searchBy="id"
        apiKey="XZTZ20XIWY4YLYU8PNQF"
        api="https://jsonplaceholder.typicode.com/posts"
      />

      <Button type="submit" color="blue">
        Submit
      </Button>
    </Form>
  );
};


```
