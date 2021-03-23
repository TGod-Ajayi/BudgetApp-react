import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
function NewEntryForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Input
          label="description"
          icon="tags"
          width="12"
          placeholder="new shiny thing"
        />
        <Form.Input
          placeholder="100"
          icon="dollar"
          iconPosition="left"
          label="amount"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
