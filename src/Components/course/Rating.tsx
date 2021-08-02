import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FunctionComponent } from "react";
interface Props {
  read: boolean;
  value: number;
}
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});
const CourseRating: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const { read, value } = props;
  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        readOnly={read}
      />
    </div>
  );
};

export default CourseRating;
