/** @format */
import React, { useState } from "react";
import { Avatar, Button, Container, Grid } from "@material-ui/core";
import clsx from "clsx";

import { AiFillLock, AiFillPlayCircle } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";

import { BsQuestionSquareFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

import { Navbar, Header } from "./../../Components";
import {
  ExpandMore,
  ArrowForwardIos,
  Print,
  Settings,
} from "@material-ui/icons";
import { FaBookOpen } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  course: {
    backgroundColor: "#efefef",
  },
  hero: {
    backgroundImage: `url(${"https://dummyimage.com/1200x200/727272/727272"})`,
    height: 150,
    padding: "1% 2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: "1%",
  },
  heroTitle: {
    fontSize: 40,
    color: "#fff",
    lineHeight: 1,
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: "2%",
  },
  boxHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "2% 4%",
    border: "1px solid  #efefef",
  },
  alertExpand: {
    padding: "2% 4%",
  },
  alert: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "1%",
  },
  alertMessage: {
    color: "#1D71D3",
    fontWeight: 500,
  },
  expand: {
    padding: "2% 4%",
  },
  sectionList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  sectionListItem: {
    fontSize: 18,
    fontWeight: 600,
    backgroundColor: "#efefef",
    padding: "3%",
    cursor: "pointer",
    borderLeft: "4px solid transparent",
  },
  sectionListItemActive: {
    fontSize: 18,
    fontWeight: 600,
    backgroundColor: "#fff",
    padding: "3%",
    cursor: "pointer",
    borderLeft: "4px solid #1D71D3",
  },
  sectionSubList: {
    listStyle: "none",
    backgroundColor: "#efefef",
  },
  sectionSubListHidden: { display: "none" },
  sectionSubListItem: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: "#efefef",
    padding: "3%",
  },
  mainContainer: {
    backgroundColor: "#fff",
    padding: 2,
  },
  mainContainerHeaer: {
    display: "flex",
    backgroundColor: "#efefef",
    padding: "1%",
  },
  textPrimaryColor: {
    color: "#1D71D3",
  },
  iconBlue: {
    color: "#1D71D3",
  },
  iconLabelBlue: {
    color: "#1D71D3",
  },
  mainContainerContent: {
    padding: "2%",
  },
  borderBox: {
    padding: "2%",
    border: "1px solid #efefef",
    borderRadius: 4,
  },
  boxTitle: {
    padding: "1% 0",
  },
  forumButton: {
    width: 200,
    textTransform: "capitalize",
    border: "1px solid #1D71D3",
    color: "#1D71D3",
  },
  infoText: {
    fontSize: 14,
    fontWeight: 500,
  },
  threadInfo: {
    color: "#afafaf",
    fontSize: 14,
    fontWeight: 500,
  },
  avatarBox: {
    display: "flex",
    gap: "5px",
    marginBottom: "2%",
  },
  recomPara: {
    fontSize: 14,
    fontWeight: 500,
  },
  sideNav: {
    padding: "4%",
    backgroundColor: "#fff",
    border: "1px solid  #efefef",
    flex: 1,
    minHeight: "100vh",
  },
  sideNavItems: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: "2%",
  },
  sideBarIcons: {
    padding: 5,
    fontSize: 20,
    border: "1px solid #727272",
    borderRadius: "50px",
  },
}));

export default function Course(props) {
  const classes = useStyles();
  const [isOverview, setIsOverview] = useState(true);
  const [isGrades, setIsGrades] = useState(false);
  const [isNotes, setIsNotes] = useState(false);
  const [isDiscussionFormats, setIsDiscussionFormats] = useState(false);
  const [isMessages, setIsMessages] = useState(false);
  return (
    <div className={classes.course}>
      <Header />
      <Navbar />

      <Container>
        <div className={classes.hero}>
          <p className={classes.heroTitle}>
            INFA 610 9040 Foundations of Information Security and Assurance
            (2215)
          </p>
        </div>

        <Grid container spacing={2}>
          <Grid item sm={12} lg={3}>
            <div>
              <div className={classes.box}>
                <div className={classes.boxHeader}>
                  <h3>Alert</h3> <ExpandMore />
                </div>
                <div className={classes.alertExpand}>
                  <div className={classes.alert}>
                    <TiMessages />
                    <p className={classes.alertMessage}>
                      1 Unread Discussion Posts
                    </p>
                  </div>
                  <div className={classes.alert}>
                    <BsQuestionSquareFill />
                    <p className={classes.alertMessage}>
                      3 Quizes not Attempted
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.box}>
                <div className={classes.boxHeader}>
                  <h3>Section</h3> <ExpandMore />
                </div>
                <div className={classes.expand}>
                  <ul className={classes.sectionList}>
                    <li
                      className={clsx(
                        isOverview
                          ? classes.sectionListItemActive
                          : classes.sectionListItem
                      )}
                      onClick={() => setIsOverview(!isOverview)}
                    >
                      Overview
                    </li>
                    <ul
                      className={clsx(
                        isOverview
                          ? classes.sectionSubList
                          : classes.sectionSubListHidden
                      )}
                    >
                      <li className={classes.sectionSubListItem}>Week 1</li>
                      <li className={classes.sectionSubListItem}>Week 2</li>
                      <li className={classes.sectionSubListItem}>Week 3</li>
                    </ul>
                    <li
                      className={clsx(
                        isGrades
                          ? classes.sectionListItemActive
                          : classes.sectionListItem
                      )}
                      onClick={() => setIsGrades(!isGrades)}
                    >
                      Grades
                    </li>
                    <ul
                      className={clsx(
                        isGrades
                          ? classes.sectionSubList
                          : classes.sectionSubListHidden
                      )}
                    >
                      <li className={classes.sectionSubListItem}>Week 1</li>
                      <li className={classes.sectionSubListItem}>Week 2</li>
                      <li className={classes.sectionSubListItem}>Week 3</li>
                    </ul>
                    <li
                      className={clsx(
                        isNotes
                          ? classes.sectionListItemActive
                          : classes.sectionListItem
                      )}
                      onClick={() => setIsNotes(!isNotes)}
                    >
                      Notes
                    </li>
                    <ul
                      className={clsx(
                        isNotes
                          ? classes.sectionSubList
                          : classes.sectionSubListHidden
                      )}
                    >
                      <li className={classes.sectionSubListItem}>Week 1</li>
                      <li className={classes.sectionSubListItem}>Week 2</li>
                      <li className={classes.sectionSubListItem}>Week 3</li>
                    </ul>
                    <li
                      className={clsx(
                        isDiscussionFormats
                          ? classes.sectionListItemActive
                          : classes.sectionListItem
                      )}
                      onClick={() =>
                        setIsDiscussionFormats(!isDiscussionFormats)
                      }
                    >
                      Discussion Formats
                    </li>
                    <ul
                      className={clsx(
                        isDiscussionFormats
                          ? classes.sectionSubList
                          : classes.sectionSubListHidden
                      )}
                    >
                      <li className={classes.sectionSubListItem}>Week 1</li>
                      <li className={classes.sectionSubListItem}>Week 2</li>
                      <li className={classes.sectionSubListItem}>Week 3</li>
                    </ul>
                    <li
                      className={clsx(
                        isMessages
                          ? classes.sectionListItemActive
                          : classes.sectionListItem
                      )}
                      onClick={() => setIsMessages(!isMessages)}
                    >
                      Messages
                    </li>
                    <ul
                      className={clsx(
                        isMessages
                          ? classes.sectionSubList
                          : classes.sectionSubListHidden
                      )}
                    >
                      <li className={classes.sectionSubListItem}>Week 1</li>
                      <li className={classes.sectionSubListItem}>Week 2</li>
                      <li className={classes.sectionSubListItem}>Week 3</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} lg={9}>
            <div className={classes.mainContainer}>
              <div className={classes.mainContainerHeaer}>
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <p className={classes.textPrimaryColor}>
                    Today and Tommorrow
                  </p>
                  <ArrowForwardIos style={{ fontSize: "12px" }} />
                  <p>INFA 610 Quiz 1 - Availabilty Ends</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <Print className={classes.iconBlue} />
                    <p className={classes.iconLabelBlue}>Print</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <Settings className={classes.iconBlue} />
                    <p className={classes.iconLabelBlue}>Setting</p>
                  </div>
                </div>
              </div>

              <div className={classes.mainContainerContent}>
                <h1>Week 2</h1>
                <p>Java Programming: Build a Recommendation System</p>
                <br />
                <div className={classes.borderBox}>
                  <h3 className={classes.boxTitle}>Week 2</h3>
                  <div style={{ display: "flex" }}>
                    <p className={classes.infoText}>
                      Welcome to course discussion formats! Ask question, delete
                      ideas, and find classmates who share your goals. Browse
                      popular threads below or other forums in the sidebar.
                    </p>
                    <Button className={classes.forumButton}>Go to Forum</Button>
                  </div>
                  <p className={classes.threadInfo}>
                    38 threads Last post 3 months ago
                  </p>
                </div>
                <br />
                <div className={classes.borderBox}>
                  <h3 className={classes.boxTitle}>Simple Recommendations</h3>
                  <div className={classes.avatarBox}>
                    <Avatar>H</Avatar>
                    <Avatar>H</Avatar>
                    <Avatar>H</Avatar>
                    <Avatar>H</Avatar>
                  </div>

                  <p className={classes.recomPara}>
                    Your second step in building a recommonder will focus on
                    making simple recommondation based on the average rankings
                    that a movie recievers. You'll also making sure that each
                    recommended movie has a least a minimal number of user
                    ratings before including....
                  </p>

                  <div>
                    <Button>
                      <ExpandMore className={classes.iconBlue} />
                      <p className={classes.iconLabelBlue}>More</p>
                    </Button>
                  </div>
                </div>
                <br />

                <div className={classes.borderBox}>
                  <h3 className={classes.boxTitle}>Step Two</h3>
                  <ul className={classes.sideNavItems}>
                    <li className={classes.navItem}>
                      <FaBookOpen className={classes.sideBarIcons} />
                      <p>
                        <b>Reading:</b> Module
                      </p>
                      <p>Description</p> <p>10 mint</p>
                    </li>

                    <li className={classes.navItem}>
                      <AiFillPlayCircle className={classes.sideBarIcons} />
                      <p>
                        <b>Video</b> Average Ratings
                      </p>
                      <p>10 mint</p>
                    </li>

                    <li className={classes.navItem}>
                      <FaBookOpen className={classes.sideBarIcons} />
                      <p>
                        <b>Reading:</b> Programming
                      </p>
                      <p>Experice: Step Two</p> <p>10 mint</p>
                    </li>

                    <li className={classes.navItem}>
                      <AiFillLock className={classes.sideBarIcons} />
                      <p>
                        <b>Quiz:</b> Step Two
                      </p>
                      <p>10 questions</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
