/** @format */
import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import "./../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineFlag,
  AiOutlineEdit,
  AiOutlineFileAdd,
  AiFillPlayCircle,
  AiFillLock,
} from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";

import { FaRegSave, FaRegShareSquare, FaBookOpen } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Popover from "@material-ui/core/Popover";
import { Navbar, Header } from "./../../Components";
import {
  ExpandMore,
  ArrowBackIos,
  ArrowForwardIos,
  Print,
  Settings,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  classRoom: {
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
  sectionHeader: {
    backgroundColor: "#fff",
    padding: "0 3%",
    display: "flex",
    alignItems: "center",
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
  middleSecHeader: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "1%",
    justifyContent: "flex-end",
  },
  middleSection: {
    padding: "0 2%",
    backgroundColor: "#fff",
    border: "1px solid #efefef",
  },
  middleSecTitle: {
    fontSize: 30,
    padding: "1% 0",
  },
  textPrimaryColor: {
    color: "#0087E4",
    fontSize: 14,
  },
  nextPreBtnBox: {
    display: "flex",
  },
  nextPreBtn: {
    backgroundColor: "#fff",
    border: "none",
    color: "#0087E4",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  videoBar: {
    display: "flex",
    padding: "1%",
    borderBottom: "1px solid #efefef",
    flexWrap: "wrap",
  },
  downDropdown: {
    fontSize: 18,
    backgroundColor: "#efefef",
    border: "none",
    padding: "1%",
  },
  langDropdown: {
    fontSize: 18,
    padding: "1%",
    width: 200,
  },
  noteHeader: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "1%",
    gap: 10,
    backgroundColor: "#fff",
  },
  iconBlue: {
    color: "#0087E4",
  },
  iconLabelBlue: {
    color: "#0087E4",
  },
  addNoteBtn: {
    backgroundColor: "blue",
    color: "#fff",
    width: 100,
    textAlign: "center",
  },
  noteInnerSec: {
    padding: "3%",
    border: "1px solid  #efefef",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },
  addNoteBtnContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    padding: "40px 4%",
  },
}));

export default function Classroom(props) {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState();

  const [videLink] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  const [videoThumbnail] = useState(
    "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg"
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addNotes = () => {
    notes.push(note);
    setNotes(notes);
    handleClose();
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.classRoom}>
      <Header />
      <Navbar />

      <Container>
        <div className={classes.hero}>
          <p className={classes.heroTitle}>
            INFA 610 9040 Foundations of Information Security and Assurance
            (2215)
          </p>
        </div>
        <Grid container>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <div>
              <div className={classes.sectionHeader}>
                <h1>Alerts</h1>
                <ExpandMore />
              </div>
              <div className={classes.sideNav}>
                <ul className={classes.sideNavItems}>
                  <li className={classes.navItem}>
                    <FaBookOpen className={classes.sideBarIcons} />
                    <div>
                      <p>
                        <b>Reading:</b> Module
                      </p>
                      <p>Description</p> <p>10 mint</p>
                    </div>
                  </li>

                  <li className={classes.navItem}>
                    <AiFillPlayCircle className={classes.sideBarIcons} />
                    <div>
                      <p>
                        <b>Video:</b> Average Ratings
                      </p>
                      <p>10 mint</p>
                    </div>
                  </li>

                  <li className={classes.navItem}>
                    <FaBookOpen className={classes.sideBarIcons} />
                    <div>
                      <p>
                        <b>Reading:</b> Programming
                      </p>
                      <p>Experice: Step Two</p> <p>10 mint</p>
                    </div>
                  </li>

                  <li className={classes.navItem}>
                    <AiFillLock className={classes.sideBarIcons} />
                    <div>
                      <p>
                        <b>Quiz:</b> Step Two
                      </p>
                      <p>10 mint</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={6}>
            <div className={classes.middleSecHeader}>
              <p className={classes.textPrimaryColor}>Today and Tommorrow </p>
              <ExpandMore /> <p>INFA 610 Quiz 1 - Availabilty Ends</p>
              <div className={classes.nextPreBtnBox}>
                <button className={classes.nextPreBtn}>
                  <ArrowBackIos /> Next
                </button>
                <button className={classes.nextPreBtn}>
                  Previous <ArrowForwardIos />
                </button>
              </div>
            </div>
            <div className={classes.middleSection}>
              <p className={classes.middleSecTitle}>Average Ratings</p>
              <div>
                <Player
                  playsInline
                  poster={videoThumbnail}
                  src={videLink}
                  className="_video"
                />
                <div className={classes.videoBar}>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FaRegSave color="grey" />
                    <span>Save Note</span>
                    <select className={classes.downDropdown}>
                      <option>Download</option>
                      <option>Download</option>
                    </select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FaRegShareSquare color="blue" size="20" />
                    <span>Share</span>
                    <AiOutlineLike size="20" color="grey" />
                    <AiOutlineDislike size="20" color="grey" />
                    <AiOutlineFlag size="20" color="grey" />
                  </div>
                </div>

                <div style={{ display: "flex", padding: "1%" }}>
                  <div style={{ flex: 1 }}>
                    <select className={classes.langDropdown}>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <p>Help Us Translate</p>
                </div>

                <div style={{ display: "flex", padding: "1%", gap: "10px" }}>
                  <p>0:03</p>
                  <p>
                    Hi, let's get some recommondation about movies, The first
                    thing you're going to do is take a list of movies, see if
                    each one has enough recommondation for a meaningful average
                    and, if so
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item sm={12} xs={12} md={3} lg={3}>
            <div className={classes.noteHeader}>
              <div style={{ display: "flex" }}>
                <Print className={classes.iconBlue} />
                <p className={classes.iconLabelBlue}>Print</p>
              </div>
              <div style={{ display: "flex" }}>
                <Settings className={classes.iconBlue} />
                <p className={classes.iconLabelBlue}>Setting</p>
              </div>
            </div>
            <div className={classes.noteInnerSec}>
              <div style={{ display: "flex" }}>
                <p style={{ flex: 1 }}>Notes</p>
                <p>
                  <BsBoxArrowUpRight /> All notes
                </p>
              </div>
              <div className={classes.addNoteBtnContainer}>
                <AiOutlineFileAdd
                  size="40"
                  className="_addIcon"
                  onClick={handleClick}
                />
                <AiOutlineEdit size="40" className="_addIcon" />
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <div className="_popOver" style={{ padding: "1%" }}>
                  <textarea
                    rows="4"
                    cols="30"
                    className="_desInput"
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add Note..."
                    style={{ display: "block" }}
                  ></textarea>
                  <button
                    className={classes.addNoteBtn}
                    onClick={() => addNotes()}
                  >
                    ADD
                  </button>
                </div>
              </Popover>
              <p
                className={classes.notePera}
                style={{ fontSize: 14, color: "#727272" }}
              >
                Click the "Save Note" button when you want to capture a screen.
                You can also highlighted and save lines from the transcript
                below. Add your own notes to anthing you've captured
              </p>
              {notes.map((val, i) => {
                return <div className="_noteDiv1">{val}</div>;
              })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
