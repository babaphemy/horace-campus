/** @format */
import React from "react";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { AiFillPlayCircle, AiFillFileAdd } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";

import { Settings, ArrowBackIos, Add, ExpandMore } from "@material-ui/icons";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
  sideBarSteps: {
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 10,
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    margin: "8px 0",
  },
  checkBox: {
    margin: 0,
    padding: 0,
  },
  itemName: {
    color: "#727272",
    fontWeight: 400,
  },
  submitBtn: {
    backgroundColor: "#1D71D3",
    textTransform: "capitalize",
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

  return (
    <div className={classes.createCourse}>
      <div className={classes.bar}>
        <div className={classes.leftSec}>
          <Button className={classes.whiteBtn}>
            <ArrowBackIos /> Back to course
          </Button>
          <h3 className={classes.courseTitle}>
            JavaScript for Modern Web Development
          </h3>
          <Button className={classes.whiteBtn}>Darft</Button>
          <p className={classes.contentDetail}>
            3min of video content uploaded
          </p>
        </div>
        <div className={classes.rightSec}>
          <Button className={classes.whiteBtn}>Save</Button>
          <Settings style={{ color: "#fff" }} />
        </div>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={2}>
            <div
              style={{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className={classes.sideBarSteps}>
                <h1 className={classes.stepTitle}>Plan your course</h1>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Checkbox color="primary" className={classes.checkBox} />
                    <p className={classes.itemName}>Target your students</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox
                      color="primary"
                      defaultChecked
                      className={classes.checkBox}
                    />
                    <p className={classes.itemName}>Course Structure</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox
                      color="primary"
                      defaultChecked
                      className={classes.checkBox}
                    />
                    <p className={classes.itemName}>Step & Test Video</p>
                  </li>
                </ul>
              </div>

              <div className={classes.sideBarSteps}>
                <h1 className={classes.stepTitle}>Create you content</h1>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Checkbox
                      color="primary"
                      defaultChecked
                      className={classes.checkBox}
                    />
                    <p className={classes.itemName}>Flim & edit</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox color="primary" className={classes.checkBox} />
                    <p className={classes.itemName}>Curriculum</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox color="primary" className={classes.checkBox} />
                    <p className={classes.itemName}>Caption (optional)</p>
                  </li>
                </ul>
              </div>

              <div className={classes.sideBarSteps}>
                <h1 className={classes.stepTitle}>Publish your course</h1>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Checkbox color="primary" className={classes.checkBox} />
                    <p className={classes.itemName}>Course landing page</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox color="primary" className={classes.checkBox} />
                    <p className={classes.itemName}>Pricing</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox
                      color="primary"
                      defaultChecked
                      className={classes.checkBox}
                    />
                    <p className={classes.itemName}>Promotions</p>
                  </li>

                  <li className={classes.listItem}>
                    <Checkbox
                      color="primary"
                      defaultChecked
                      className={classes.checkBox}
                    />
                    <p className={classes.itemName}>Course messages</p>
                  </li>
                </ul>
              </div>

              <Button
                color="primary"
                variant="contained"
                disableElevation
                className={classes.submitBtn}
              >
                Submit For Review
              </Button>
            </div>
          </Grid>
          <Grid item sm={12} lg={10}>
            <br />
            <br />
            <div className={classes.contentContainer}>
              <div className={classes.boxHeader}>
                <h1 className={classes.boxTitle}>Cirriculum</h1>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.outlineBtnPrimary}
                >
                  Bulk Uploader
                </Button>
              </div>
              <div className={classes.detailContainer}>
                <div className={classes.stepBox}>
                  <div className={classes.stepHeader}>
                    <h2 className={classes.secTitle}>Section 1: </h2>
                    <AiFillFileAdd />
                    <p>Intrdocution</p>
                  </div>
                  <br />
                  <br />
                  <div className={classes.contentModal}>
                    <div className={classes.modalHeader}>
                      <div className={classes.lefttSide}>
                        <IoIosCheckmarkCircle />
                        <p>Lecture 1:</p>
                        <AiFillPlayCircle />
                        <p>Intrdocution</p>
                      </div>
                      <ExpandMore />
                    </div>
                    <div className={classes.videoContainer}>
                      <div>
                        <video width="160" height="100" controls>
                          <source
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            type="video/mp4"
                          />
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
                    <div style={{ padding: "1%" }}>
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
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <div className={classes.stepBox}>
                  <div className={classes.stepHeader}>
                    <h2 className={classes.secTitle}>Section 2: </h2>
                    <AiFillFileAdd />
                    <p>Getting Started</p>
                  </div>
                  <br />
                  <br />
                  <div className={classes.contentModal}>
                    <div className={classes.modalHeader}>
                      <div className={classes.lefttSide}>
                        <IoIosCheckmarkCircle />
                        <p>Lecture 2:</p>
                        <AiFillPlayCircle />
                        <p>Requirements</p>
                      </div>
                      <ExpandMore />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
