/** @format */
import React, { FunctionComponent, useContext, useState } from "react";
import {
  Button,
  Container,
  Grid,
  FormControlLabel,
  Switch,
  TextField,
  FormControl,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { AiFillPlayCircle, AiFillFileAdd } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { Add, ExpandMore } from "@material-ui/icons";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { UserContext } from "../../Context/UserProvider";
import CurriSidebar from "./CurriSidebar";
import Addlecture from "./Addlecture";
import Addquiz from "./Addquiz";
import Addnote from "./Addnote";
import { tCurriculum, tLecture, tSection } from "../../util/types";
import { COURSE_ADD } from "../../Context/Actions";

const useStyles = makeStyles((theme) => ({
  createCourse: {
    backgroundColor: "#efefef",
    minHeight: "100vh",
  },
  bar: {
    display: "flex",
    alignItems: "center",
    padding: "6px 1%",
    backgroundColor: "#1D71D3",
  },
  leftSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 4,
  },
  rightSec: {
    display: "flex",
    alignItems: "center",
  },
  whiteBtn: {
    textTransform: "capitalize",
    color: "#fff",
  },
  courseTitle: {
    color: "#fff",
  },
  contentDetail: {
    color: "#fff",
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  boxHeader: {
    padding: "2%",
    borderBottom: "1px solid #727272",
    display: "flex",
    alignItem: "center",
  },
  boxTitle: {
    fontWeight: 400,
    flex: 1,
  },
  detailContainer: {
    padding: "2%",
  },
  outlineBtnPrimary: {
    color: "#1D71D3",
    textTransform: "none",
  },
  stepBox: {
    border: "1px solid #727272",
    backgroundColor: "#efefef",
    borderRadius: 4,
    padding: "1%",
  },
  stepHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  secTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  contentModal: {
    border: "1px solid #727272",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid #727272",
    padding: "1%",
  },
  lefttSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 4,
  },
  videoContainer: {
    padding: "1%",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    borderBottom: "1px solid #727272",
  },
}));
interface Props {
  nextTab: (ev: React.ChangeEvent<{}> | null, val: number) => void;
}

const Curriculum: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const [addSection, setAddSection] = useState(false);
  const [addContent, setAddContent] = useState(false);
  const [currSection, setSection] = useState<number>(1);
  const [contentType, setContentType] = useState<string | null>(null);
  const [state, dispatch] = useContext(UserContext);
  const { course } = state;
  const _section = () => {
    setAddSection(true);
  };
  const { handleSubmit, control } = useForm();

  const _handleAddSection = (d: tSection) => {
    const sx = course?.curriculum?.section || [];
    d.sid = sx.length + 1;
    sx.push(d);
    const imCourse = { ...course };
    const curi: tCurriculum = imCourse?.curriculum || { section: sx };
    imCourse.curriculum = curi;
    dispatch({ type: COURSE_ADD, data: imCourse });
    // store to database
  };
  const _addContent = () => {
    setAddContent(true);
  };
  const submitContent = () => {
    setSection((c) => c + 1);
    setAddContent(true);
  };
  const _contentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentType(e.target.value);
  };

  return (
    <div className={classes.createCourse}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={2}>
            <CurriSidebar />
          </Grid>
          <Grid item sm={12} md={10}>
            <br />
            <br />
            <div className={classes.contentContainer}>
              <div className={classes.boxHeader}>
                <h1 className={classes.boxTitle}>Curriculum</h1>
                {/* <Button
                  variant="outlined"
                  color="primary"
                  className={classes.outlineBtnPrimary}
                >
                  Bulk Uploader
                </Button> */}
              </div>
              <div className={classes.detailContainer}>
                {course?.curriculum?.section
                  ?.sort((a: tSection, b: tSection) => a.sid > b.sid)
                  .map((i: tSection, index: number) => (
                    <div className={classes.stepBox} key={index}>
                      <div className={classes.stepHeader}>
                        <h2 className={classes.secTitle}>Section {i.sid}:</h2>
                        <AiFillFileAdd />
                        <p>{i.title}</p>
                        {!addContent && (
                          <Button
                            color="primary"
                            variant="outlined"
                            className={classes.outlineBtnPrimary}
                            startIcon={<Add />}
                            onClick={_addContent}
                          >
                            Add Content
                          </Button>
                        )}
                      </div>
                      {addContent && currSection === i.sid && (
                        <FormControl component="fieldset">
                          <RadioGroup
                            row
                            name="content"
                            value={contentType}
                            onChange={_contentType}
                          >
                            <FormControlLabel
                              value="Lecture"
                              control={<Radio />}
                              label="Lecture"
                            />
                            <FormControlLabel
                              value="Slide"
                              control={<Radio />}
                              label="Slide"
                            />
                            <FormControlLabel
                              value="Quiz"
                              control={<Radio />}
                              label="Quiz"
                            />
                            <FormControlLabel
                              value="Note"
                              control={<Radio />}
                              label="Note"
                            />
                          </RadioGroup>
                        </FormControl>
                      )}
                      {contentType === "Lecture" && currSection === i.sid ? (
                        <Addlecture change={submitContent} sid={i.sid} />
                      ) : contentType === "Quiz" && currSection === i.sid ? (
                        <Addquiz />
                      ) : contentType === "Note" && currSection === i.sid ? (
                        <Addnote />
                      ) : null}
                      <br />
                      <br />
                      {i.lecture?.map((j: tLecture, idx: number) => (
                        <div className={classes.contentModal} key={j.title}>
                          <div className={classes.modalHeader}>
                            <div className={classes.lefttSide}>
                              <IoIosCheckmarkCircle />
                              <p>Lecture {idx + 1}:</p>
                              <AiFillPlayCircle />
                              <p>{j.title}</p>
                            </div>
                            <ExpandMore />
                          </div>
                          <div className={classes.videoContainer}>
                            <div>
                              <video width="160" height="100" controls>
                                <source src={j.video} type="video/mp4" />
                              </video>
                            </div>
                            <div style={{ flex: 1 }}>
                              <h4>arithmetic101.mp4</h4>
                              <h4>02:40</h4>
                              <h4>Edit Content</h4>
                            </div>
                            <div style={{ justifyContent: "flex-end" }}>
                              <Button
                                color="primary"
                                variant="contained"
                                // className={classes.outlineBtnPrimary}
                                disableElevation
                              >
                                Preview
                                <ExpandMore />
                              </Button>
                              <br />
                              <FormControlLabel
                                value="start"
                                control={<Switch color="primary" />}
                                label="Downloadable:"
                                labelPlacement="start"
                              />
                            </div>
                          </div>
                          {/* <div style={{ padding: "1%" }}>
                      <Button
                        color="primary"
                        variant="outlined"
                        className={classes.outlineBtnPrimary}
                        startIcon={<Add />}
                      >
                        Description
                      </Button>
                      <br />
                      <Button
                        color="primary"
                        variant="outlined"
                        className={classes.outlineBtnPrimary}
                        startIcon={<Add />}
                      >
                        Resources
                      </Button>
                    </div> */}
                        </div>
                      ))}
                    </div>
                  ))}

                <br />
                <br />
                {!addSection && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={_section}
                  >
                    Add Section
                  </Button>
                )}

                <div>
                  {addSection && (
                    <form>
                      <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, value },
                          fieldState: { error },
                        }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={value}
                            onChange={onChange}
                            margin="dense"
                            placeholder="Example: low-light photography"
                            error={!!error}
                            helperText={error?.message || null}
                          />
                        )}
                        rules={{ required: "This field is required!" }}
                      />
                      <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, value },
                          fieldState: { error },
                        }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={value}
                            onChange={onChange}
                            margin="dense"
                            placeholder="Example: low-light photography"
                            error={!!error}
                            helperText={error?.message || null}
                          />
                        )}
                        rules={{ required: "This field is required!" }}
                      />
                      <Button onClick={handleSubmit(_handleAddSection)}>
                        Submit
                      </Button>
                    </form>
                  )}
                </div>
              </div>
              <Button
                style={{ float: "right" }}
                variant="contained"
                color="primary"
                onClick={() => props.nextTab(null, 2)}
              >
                Next
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Curriculum;
