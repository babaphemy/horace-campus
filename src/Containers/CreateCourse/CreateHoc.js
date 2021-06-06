import React, { useState } from "react";
import { AppBar, makeStyles, Tab, Tabs, Box } from "@material-ui/core";
import Target from "./Target";
import Curriculum from "./Curriculum";
import Preview from "./Preview";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const _change = (ev, val) => {
    setValue(val);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={_change} aria-bale="crete-course-tabs">
          <Tab label="Target" {...a11yprops(0)} />
          <Tab label="Curriculum" {...a11yprops(1)} />
          <Tab label="Preview" {...a11yprops(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Target />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Curriculum />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Preview />
      </TabPanel>
    </div>
  );
};

export default CreateHoc;
