/** @format */
import React, { FunctionComponent, useContext } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import CurriSidebar from "./CurriSidebar";
import { tCourse, tTarget } from "../../util/types";
import { UserContext } from "../../Context/UserProvider";
import { COURSE_ADD } from "../../Context/Actions";

const useStyles = makeStyles((theme) => ({
  createCourse: {
    backgroundColor: "#efefef",
    minHeight: "100vh",
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
  rightSec: {
    display: "flex",
    alignItems: "center",
  },
  whiteBtn: {
    textTransform: "capitalize",
    color: "#fff",
  },
  courseTitle: {
    color: "#fff",
  },
  contentDetail: {
    color: "#fff",
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  boxHeader: {
    padding: "2%",
    borderBottom: "1px solid #727272",
  },
  boxTitle: {
    fontWeight: 400,
  },
  detailContainer: {
    padding: "2%",
  },
  infoText: {
    margin: "2% 0",
  },
  questionBox: {
    marginBottom: "4%",
  },
}));
interface Props {
  nextTab: (e: React.ChangeEvent<{}> | null, val: number) => void;
}
const Target: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  //const [target, setTarget] = useState<tTarget | {}>({});
  const [state, dispatch] = useContext(UserContext);
  const { handleSubmit, control } = useForm();
  const _submit = (d: any) => {
    const t: tTarget = {
      expectation: d.expectation,
      requirements: d.requirements,
      target: d.target,
    };
    const course: tCourse = {
      id: "",
      courseName: d.courseName,
      brief: d.brief,
      target: t,
      createdOn: new Date(),
      updatedOn: new Date(),
    };
    // add target to course
    // dispatch
    dispatch({ type: COURSE_ADD, data: course });
    props.nextTab(null, 1);
    //console.log(target);
  };

  return (
    <div className={classes.createCourse}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <CurriSidebar />
          </Grid>
          <Grid item xs={12} md={10}>
            <br />
            <br />
            <div className={classes.contentContainer}>
              <div className={classes.boxHeader}>
                <h1 className={classes.boxTitle}>Target your students</h1>
              </div>
              <div className={classes.detailContainer}>
                <p className={classes.infoText}>
                  The description you write here will help students decide if
                  your course is the one for them:
                </p>
                <form onSubmit={handleSubmit(_submit)}>
                  <div className={classes.questionBox}>
                    <p>What should we call this course?</p>
                    <Controller
                      name="courseName"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          margin="dense"
                          placeholder="name of my course"
                          error={!!error}
                          helperText={error?.message || null}
                        />
                      )}
                      rules={{ required: "This field is required!" }}
                    />
                    <p>Briefly describe this course </p>
                    <Controller
                      name="brief"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          margin="dense"
                          placeholder="Example: low-light photography"
                          error={!!error}
                          helperText={error?.message || null}
                        />
                      )}
                      rules={{ required: "This field is required!" }}
                    />
                  </div>
                  <div className={classes.questionBox}>
                    <p>What will students learn in your course?</p>
                    <Controller
                      name="expectation"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          margin="dense"
                          placeholder="Example: low-light photography"
                          error={!!error}
                          helperText={error?.message || null}
                        />
                      )}
                      rules={{ required: "This field is required!" }}
                    />
                  </div>
                  <div className={classes.questionBox}>
                    <p>Are they any course requirements or prerequisites?</p>
                    <Controller
                      name="requirements"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          margin="dense"
                          placeholder="Example: Be able to read sheet music"
                        />
                      )}
                    />
                  </div>

                  <div className={classes.questionBox}>
                    <p>Who are your target students?</p>
                    <Controller
                      name="target"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          margin="dense"
                          placeholder="Example: Beginner Python developers curious about data science"
                        />
                      )}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(_submit)}
                  >
                    Next
                  </Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Target;
