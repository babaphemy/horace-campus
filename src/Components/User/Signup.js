import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import User from "../../Containers/User/User";
import { Link } from "react-router-dom";
export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © `}
      <Link color="inherit">Horace Learning </Link>
      {new Date().getFullYear()}
      {`.`}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  multilineColor: {
    "&::placeholder": {
      color: "white",
      fontStyle: "italic",
    },
    color: "white",
  },
}));
const Signup = () => {
  const classes = useStyles();
  return (
    <User title="New User">
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              InputProps={{ className: classes.multilineColor }}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              InputProps={{ className: classes.multilineColor }}
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              InputProps={{ className: classes.multilineColor }}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              InputProps={{ className: classes.multilineColor }}
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="login">
              <Typography variant="body2">
                Already have an account? Sign in
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </User>
  );
};

export default Signup;
