/** @format */
import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineFlag,
  AiOutlineEdit,
  AiOutlineFileAdd,
} from "react-icons/ai";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

import { FaRegShareSquare } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Popover from "@material-ui/core/Popover";
import { Navbar, Header } from "../../Components";
import Badge from "@material-ui/core/Badge";
import { Forum } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useParams } from "react-router";
import { acourse } from "../../Api/CourseApi";
import CourseRating from "../../Components/course/Rating";
import { tCourse } from "../../util/types";
import Curi from "./SectionView";
import { Stream } from "@cloudflare/stream-react";
interface Props {
  cid: String;
}
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
  middleSection: {
    padding: "0 2%",
    backgroundColor: "#fff",
    border: "1px solid #efefef",
  },
  middleSecTitle: {
    fontSize: 30,
    width: "100%",
    padding: "1% 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPrimaryColor: {
    color: "#0087E4",
    fontSize: 14,
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
  noteText: {
    fontSize: 14,
    color: "#727272",
  },
}));
const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);

const Classroom: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const [notes, setNotes] = useState<string[]>([]);
  const [note, setNote] = useState<string>();
  const { cid } = useParams<{ cid?: string }>();
  const [course, setCourse] = useState<tCourse | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  useEffect(() => {
    acourse(cid).then((data) => {
      setCourse(data?.data);
    });
  }, [cid]);
  const [videLink] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  const [videoThumbnail] = useState(
    "https://www.wowmakers.com/blog/wp-content/uploads/2019/02/Video-thumbnail.jpg"
  );

  // const [videLink] = useState(
  //   "https://videodelivery.net/60e48816049c482b833d40e922f303c8/manifest/video.m3u8"
  // );
  // const [videoThumbnail] = useState(
  //   "https://videodelivery.net/60e48816049c482b833d40e922f303c8/thumbnails/thumbnail.jpg"
  // );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const addNotes = (note: string) => {
  //   notes.push(note);
  //   setNotes(notes);
  //   handleClose();
  // };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const curriculum = course?.curriculum;
  return (
    <div className={classes.classRoom}>
      <Header />
      <Navbar />

      <Container>
        <div className={classes.hero}>
          <p className={classes.heroTitle}>{course?.courseName}</p>
        </div>
        <Grid container>
          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Paper elevation={3}>
              <div className={classes.sideNav}>
                {curriculum && <Curi curriculum={curriculum} />}
                {/* <ul className={classes.sideNavItems}>
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
                </ul> */}
              </div>
            </Paper>
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={6}>
            <Paper className={classes.middleSection}>
              <div className={classes.middleSecTitle}>
                <CourseRating value={5} read={true} />
                <div>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <Forum />
                    </StyledBadge>
                  </IconButton>
                </div>
              </div>
              <div>
                <Stream controls src={videLink} />

                <div className={classes.videoBar}>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
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

                {/* <div style={{ display: "flex", padding: "1%" }}>
                  <div style={{ flex: 1 }}>
                    <select className={classes.langDropdown}>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div> */}

                <div style={{ display: "flex", padding: "1%", gap: "10px" }}>
                  <p>0:03</p>
                  <Typography variant="body1">{course?.brief}</Typography>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid item sm={12} xs={12} md={3} lg={3}>
            <Paper elevation={3} className={classes.noteInnerSec}>
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
                    rows={4}
                    cols={30}
                    className="_desInput"
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add Note..."
                    style={{ display: "block" }}
                  ></textarea>
                  <Button className={classes.addNoteBtn}>ADD</Button>
                </div>
              </Popover>
              <Typography className={classes.noteText}>
                Click the "Save Note" button when you want to capture a screen.
                You can also highlighted and save lines from the transcript
                below. Add your own notes to anthing you've captured
              </Typography>
              {notes.map((val, i) => {
                return <div className="_noteDiv1">{val}</div>;
              })}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Classroom;
