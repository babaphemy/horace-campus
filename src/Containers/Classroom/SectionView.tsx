import React, { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { tCurriculum, tSection } from "../../util/types";
import { useState } from "react";
interface Props {
  curriculum: tCurriculum;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const SectionView: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const [selected, setSel] = useState<tSection | null>(null);
  const { curriculum } = props;

  const handleClick = (sl: tSection) => {
    setSel(sl);
  };
  const changeVideo = (video: string) => {
    console.log("changed", video);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Curriculum
        </ListSubheader>
      }
      className={classes.root}
    >
      {curriculum.section.map((c, index) => (
        <div key={index + c.title}>
          <ListItem key={index} button onClick={() => handleClick(c)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={c.title} />
            {c.title === selected?.title ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={c.title === selected?.title}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {c.lecture?.map((l, idx) => (
                <ListItem key={l.title + idx} button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    primary={l.title}
                    onClick={() => changeVideo(l.title)}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};
export default SectionView;
