import React from "react";
import { Header, Navbar } from "./../../Components";
import { makeStyles } from "@material-ui/core/styles";
import { Badge, Container, Grid, Link } from "@material-ui/core";
import {
  Close,
  ExpandMore,
  Language,
  MessageOutlined,
} from "@material-ui/icons";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "#f2f2f2",
  },
  hero: {
    backgroundImage: `url(${"https://dummyimage.com/1200x200/000/000"})`,
    height: 150,
    padding: "1%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  headerTitle: {
    backgroundColor: "#f2f2f2",
    display: "inline-block",
    fontSize: 30,
    lineHeight: "2.5rem",
  },
  boxTitle: {
    fontSize: 20,
    padding: "1% 0",
  },
  classesBox: {
    padding: "2%",
    backgroundColor: "#fff",
  },
  boxHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 2%",
  },
  cardBox: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #c9c7c7",
    minHeight: "320px",
    borderRadius: 4,
    maxWidth: 250,
    width: "100%",
  },
  cardBody: {
    padding: "0 2%",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 500,
  },
  date: {
    color: "#adabab",
    fontSize: 16,
  },
  notification: {
    padding: "0 2%",
  },
  notiTitle: {
    color: "#0087e4",
    lineHeight: 1,
    fontWeight: 500,
  },
  notiBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  notiBodyBar: {
    display: "flex",
    gap: "5px",
    paddingBottom: "2%",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
  },
  accordin: {
    border: "1px solid #f2f2f2",
  },
  accordinHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "3%",
    borderRadius: 4,
    background: "linear-gradient(to bottom, #fff 0%, #f2f2f2  100%)",
  },
  accordinBody: {
    display: "block",
    padding: "4%",
    margin: "2%",
    border: "1px solid #f2f2f2",
  },
  accordinTitle: {
    fontSize: 16,
    flex: 1,
  },
  accordinDetail: {
    fontWeight: 500,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Home() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.home}>
      <Header />
      <Navbar />

      <Container>
        <div className={classes.hero}>
          <p className={classes.headerTitle}>Horace Learning</p>
        </div>
        <br />
        <div>
          <Grid container spacing={5}>
            <Grid item sm={12} md={6} lg={6}>
              <div className={classes.classesBox}>
                <div className={classes.boxHeader}>
                  <p className={classes.boxTitle}>My Classes</p> <ExpandMore />
                </div>

                <AppBar
                  position="static"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  elevation={0}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Pinned" {...a11yProps(1)} />
                    <Tab label="2021 Summer" {...a11yProps(2)} />
                    <Tab label="2021 Spring" {...a11yProps(3)} />
                    <Tab label="2020 Summer" {...a11yProps(4)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <div className={classes.cardBox}>
                    <div className={classes.card}>
                      <img
                        src="https://dummyimage.com/300x150/000/fff"
                        alt=""
                        width="100%"
                      />
                      <div className={classes.cardBody}>
                        <h2 className={classes.cardTitle}>
                          INFA 610 9040 Foundations of Information Security and
                          Assurance (2015)
                        </h2>
                        <p className={classes.date}>
                          Starts May 18, 2021 at 11:00pm
                        </p>
                        <br />
                        <Badge badgeContent={4} color="primary">
                          <MessageOutlined />
                        </Badge>
                        <br />
                        <br />
                      </div>
                    </div>

                    <div className={classes.card}>
                      <img
                        src="https://dummyimage.com/300x150/000/fff"
                        alt=""
                        width="100%"
                      />
                      <div className={classes.cardBody}>
                        <h2 className={classes.cardTitle}>
                          INFA 610 9040 Foundations of Information Security and
                          Assurance (2015)
                        </h2>
                        <p className={classes.date}>
                          Starts May 18, 2021 at 11:00pm
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                  Item Five
                </TabPanel>

                <div className={classes.boxHeader}>
                  <Link href="">View All Courses (2)</Link>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <div className={classes.classesBox}>
                <div className={classes.boxHeader}>
                  <p className={classes.boxTitle}>Announcement</p>
                  <ExpandMore />
                </div>
                <div className={classes.notification}>
                  <h2 className={classes.notiTitle}>
                    Important Changes to the Classroom Navigation Bar
                  </h2>
                  <div className={classes.notiExpand}>
                    <div className={classes.notiBody}>
                      <Close />
                    </div>
                    <div className={classes.notiBodyBar}>
                      <p>Posted May 12, 2021 12:01 AM</p> <Language />{" "}
                      <p>Global</p>
                    </div>
                    <div className={classes.notiBodyContent}>
                      <p className={classes.paragraph}>
                        Effective May 12, learners and faculty may notice
                        changes to the navigation bar in UMGC classrooms, These
                        changes are designed to enhance learner navigation and
                        experience and they were implemented based on learner
                        and faculity feedback.
                      </p>
                      <p className={classes.paragraph}>
                        Effective May 12, learners and faculty may notice
                        changes to the navigation bar in UMGC classrooms, These
                        changes are designed to enhance learner navigation and
                        experience and they were implemented based on learner
                        and faculity feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item sm={12} md={6} lg={6}>
              <div className={classes.classesBox}>
                <div className={classes.boxHeader}>
                  <p className={classes.boxTitle}>Calender</p> <ExpandMore />
                </div>
                <div className={classes.accordin}>
                  <div className={classes.accordinHeader}>
                    <h2 className={classes.accordinTitle}>
                      Wednesday, May 12, 2021
                    </h2>
                    <ExpandMore />
                  </div>
                  <div className={classes.accordinBody}>
                    <p className={classes.accordinDetail}>
                      There is no events to display.
                    </p>
                  </div>
                </div>

                <div className={classes.accordin}>
                  <div className={classes.accordinHeader}>
                    <h2 className={classes.accordinTitle}>Upcoming Events</h2>
                    <ExpandMore />
                  </div>
                  <div className={classes.accordinBody} display={false}>
                    <p className={classes.accordinDetail}>
                      There is no events to display.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6} lg={6}></Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Home;
