import React, { useContext, useState } from "react";
import { AppBar, makeStyles, Tab, Tabs, Box, Button } from "@material-ui/core";
import { Settings, ArrowBackIos } from "@material-ui/icons";
import Target from "./Target";
import Curriculum from "./Curriculum";
import Preview from "./Preview";
import { Header, Navbar } from "../../Components";
import { UserContext } from "../../Context/UserProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  whiteBtn: {
    textTransform: "capitalize",
    color: "#fff",
  },
}));
function a11yprops(index) {
  return {
    id: `createhoc-tab-${index}`,
    "aria-controls": `createhoc-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`createhoc-tabpanel-${index}`}
      aria-labelledby={`creatrehoc-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
const CreateHoc = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [state] = useContext(UserContext);
  const { course } = state;
  const _change = (ev, val) => {
    if (val === 10) {
      alert("done");
    } else {
      setValue(val);
    }
  };
  return (
    <div className={classes.root}>
      <Header />
      <Navbar />
      <AppBar position="static">
        <Tabs value={value} onChange={_change} aria-label="create-course tabs">
          <Tab label="Target" {...a11yprops(0)} />
          <Tab label="Curriculum" {...a11yprops(1)} />
          <Tab label="Preview" {...a11yprops(2)} />
        </Tabs>
      </AppBar>
      <div className={classes.bar}>
        <div className={classes.leftSec}>
          {value > 0 && (
            <Button
              className={classes.whiteBtn}
              onClick={() => _change(null, value - 1)}
            >
              <ArrowBackIos /> Back
            </Button>
          )}

          <h3 className={classes.courseTitle}>{course?.courseName}</h3>
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
      <TabPanel value={value} index={0}>
        <Target nextTab={_change} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Curriculum nextTab={_change} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Preview />
      </TabPanel>
    </div>
  );
};

export default CreateHoc;
