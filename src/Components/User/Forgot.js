import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import User from "../../Containers/User/User";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Forgot = () => {
  const classes = useStyles();
  const history = useHistory();
  const _handleButton = () => {
    history.push("home");
  };
  return (
    <User title="Forgot Password?">
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="Email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              autoFocus
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={_handleButton}
        >
          Submit
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/login">
              <Typography variant="body2">
                Already have an account? Login
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </User>
  );
};

export default Forgot;
