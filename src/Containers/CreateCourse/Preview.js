import { Button } from "@material-ui/core";
import React from "react";

const Preview = (props) => {
  return (
    <div>
      <h1>Preview</h1>
      <Button
        style={{ float: "right" }}
        variant="contained"
        color="primary"
        onClick={() => props.nextTab(null, 10)}
      >
        Submit
      </Button>
    </div>
  );
};

export default Preview;
