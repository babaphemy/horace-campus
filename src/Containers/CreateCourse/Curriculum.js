/** @format */
import React, { useContext, useState } from "react";
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

import { Add, ExpandMore } from "@material-ui/icons";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { UserContext } from "../../Context/UserProvider";
import CurriSidebar from "./CurriSidebar";
import Addlecture from "./Addlecture";
import Addquiz from "./Addquiz";
import Addnote from "./Addnote";

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

export default function Curriculum(props) {
  const classes = useStyles();

  const [addSection, setAddSection] = useState(false);
  const [addContent, setAddContent] = useState(false);
  const [contentType, setContentType] = useState(null);
  const [state] = useContext(UserContext);
  const { course } = state;
  const _section = () => {
    setAddSection(true);
  };
  const _handleAddSection = () => {
    setAddSection(false);
  };
  const _addContent = () => {
    setAddContent(true);
  };
  const _contentType = (e) => {
    setContentType(e.target.value);
  };
  console.log(contentType, " kolo nkante");

  return (
    <div className={classes.createCourse}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={2}>
            <CurriSidebar />
          </Grid>
          <Grid item sm={12} lg={10}>
            <br />
            <br />
            <div className={classes.contentContainer}>
              <div className={classes.boxHeader}>
                <h1 className={classes.boxTitle}>Curriculum</h1>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.outlineBtnPrimary}
                >
                  Bulk Uploader
                </Button>
              </div>
              <div className={classes.detailContainer}>
                {course?.curriculum?.section?.map((i, index) => (
                  <div className={classes.stepBox} key={index}>
                    <div className={classes.stepHeader}>
                      <h2 className={classes.secTitle}>
                        Section {index + 1}:{" "}
                      </h2>
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
                    {addContent && (
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
                    {contentType === "Lecture" ? (
                      <Addlecture />
                    ) : contentType === "Quiz" ? (
                      <Addquiz />
                    ) : contentType === "Note" ? (
                      <Addnote />
                    ) : null}
                    <br />
                    <br />
                    {i.lecture.map((j, idx) => (
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
                      <TextField id="sectionName" placeholder="Section Name" />
                      <TextField
                        id="sectionDescription"
                        placeholder="Section Description"
                      />
                      <Button onClick={_handleAddSection}>Submit</Button>
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
}
