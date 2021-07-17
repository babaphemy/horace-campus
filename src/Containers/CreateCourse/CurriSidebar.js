import React from "react";
import { makeStyles, Checkbox, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
}));
const CurriSidebar = () => {
  const classes = useStyles();
  return (
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
  );
};

export default CurriSidebar;
