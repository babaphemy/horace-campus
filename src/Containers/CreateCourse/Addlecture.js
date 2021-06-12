import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import Video from "@material-ui/icons/VideoLibrary";

const Addlecture = () => {
  return (
    <div>
      <form>
        <TextField placeholder="Title" />
        <div>
          <p>Drag and drop or browse to upload file</p>
          <IconButton>
            <Video />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default Addlecture;
