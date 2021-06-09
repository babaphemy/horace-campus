/** @format */
import React from "react";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

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
  },
  boxTitle: {
    fontWeight: 400,
  },
  detailContainer: {
    padding: "2%",
  },
  infoText: {
    margin: "2% 0",
  },
  questionBox: {
    marginBottom: "4%",
  },
}));

export default function Target(props) {
  const classes = useStyles();
  const history = useHistory();
  const _submit = () => {
    history.push("create-course2");
  };

  return (
    <div className={classes.createCourse}>
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
                onClick={_submit}
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
                <h1 className={classes.boxTitle}>Target your students</h1>
              </div>
              <div className={classes.detailContainer}>
                <p className={classes.infoText}>
                  The description you write here will help students decide if
                  your course is the one for them:
                </p>

                <div className={classes.questionBox}>
                  <p>What will students learn in your course?</p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    placeholder="Example: low-light photography"
                  />

                  <Button color="primary"> + Add an Answer</Button>
                </div>

                <div className={classes.questionBox}>
                  <p>Are they any course requirements or prerequisites?</p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    placeholder="Example: Be able to read sheet music"
                  />

                  <Button color="primary"> + Add an Answer</Button>
                </div>

                <div className={classes.questionBox}>
                  <p>Who are your target students?</p>
                  <TextField
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    placeholder="Example: Beginner Python developers curious about data science"
                  />

                  <Button color="primary"> + Add an Answer</Button>
                </div>
                <Button
                  style={{ float: "right" }}
                  variant="contained"
                  color="primary"
                  onClick={() => props.nextTab(null, 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
