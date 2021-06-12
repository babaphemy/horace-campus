/** @format */
import React from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CurriSidebar from "./CurriSidebar";

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
