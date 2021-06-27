import React, { FunctionComponent, useContext, useState } from "react";
import { Button, IconButton, TextField } from "@material-ui/core";
import Video from "@material-ui/icons/VideoLibrary";
import { UserContext } from "../../Context/UserProvider";
import { tCourse, tCurriculum, tLecture, tSection } from "../../util/types";
import Course from "../Course/Course";
import { COURSE_ADD } from "../../Context/Actions";
interface Props {
  change: () => void;
  sid: number;
}
const Addlecture: FunctionComponent<Props> = (props: Props) => {
  const [state, dispatch] = useContext(UserContext);
  const [title, setTitle] = useState<string>("");
  const { change, sid } = props;
  const _upload = () => {
    // add lecture to course and dispatch
    const c = state.course;
    const imCourse: tCourse = { ...state.course };
    const l: tLecture = { title, video: "" };
    let sx = imCourse?.curriculum?.section?.find((s) => s.sid === sid);
    const ix = imCourse?.curriculum?.section?.findIndex((r) => r.sid === sid);
    const currLectures = sx?.lecture || [];
    const addL = [...currLectures, l];
    if (sx) {
      sx.lecture = addL;
    }
    if (ix) {
      c.curriculum.section[ix] = sx;
    }
    console.log(JSON.stringify(c));
    dispatch({ type: COURSE_ADD, data: c });
    change();
  };
  const _change = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <div>
      <form>
        <TextField placeholder="Title" onChange={_change} />
        <div>
          <p>Drag and drop or browse to upload file</p>
          <IconButton>
            <Video />
          </IconButton>
        </div>
      </form>
      <Button color="primary" variant="outlined" onClick={_upload}>
        Submit
      </Button>
    </div>
  );
};

export default Addlecture;
