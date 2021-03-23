import React from "react";
import { Button, ButtonGroup } from "semantic-ui-react";

function ButtonSaveOrCancel(props) {
  return (
    <ButtonGroup style={{ marginTop: "2em" }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>Save</Button>
    </ButtonGroup>
  );
}

export default ButtonSaveOrCancel;
