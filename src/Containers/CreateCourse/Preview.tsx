import React, { FunctionComponent } from "react";
import { Button, Typography } from "@material-ui/core";

import { demoCourse } from "../../util/mockData";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { AiFillPlayCircle } from "react-icons/ai";
import { ExpandMore } from "@material-ui/icons";
import { tLecture, tSection } from "../../util/types";
import { makeStyles } from "@material-ui/core";
interface Props {
  nextTab: (a: any, b: number) => void;
}
const useStyles = makeStyles((theme) => {});
const Preview: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const { courseName, author, target, curriculum } = demoCourse;
  // const renderTree = (nodes: tSection) => (
  //   <TreeItem key={nodes.sid} nodeId={nodes.sid.toString()} label={nodes.title}>
  //     {Array.isArray(nodes.lecture) ? (
  //       nodes.lecture.map((node) => renderTree(node))
  //     ) : (
  //       <p>Whala</p>
  //     )}
  //   </TreeItem>
  // );
  return (
    <div>
      <h1>Preview</h1>
      <Typography variant="h3">{courseName}</Typography>
      <Typography variant="body1">{`by ${author}`}</Typography>
      <Typography variant="body2">{`for ${target.target}`}</Typography>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {curriculum?.section?.map((i: tSection, index: number) => (
          <div key={index}>
            <div>
              <h2>Section {i.sid}:</h2>

              <p>{i.title}</p>
            </div>

            <br />
            <br />
            {i.lecture?.map((j: tLecture, idx: number) => (
              <div key={j.title}>
                <div>
                  <div>
                    <p>Lecture {idx + 1}:</p>
                    <AiFillPlayCircle />
                    <p>{j.title}</p>
                  </div>
                  <ExpandMore />
                </div>
                <div>
                  <div>
                    <video width="160" height="100" controls>
                      <source src={j.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* {curriculum?.section.map((c) => renderTree(c))} */}
      </TreeView>

      <Button
        style={{ float: "right" }}
        variant="contained"
        color="primary"
        onClick={() => props.nextTab(null, 10)}
      >
        Submit
      </Button>
    </div>
  );
};

export default Preview;
