import React, { FunctionComponent, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../Api/UserApi";
import { useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import { USER_ADD } from "../../Context/Actions";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login: FunctionComponent = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(UserContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  const [err, setError] = useState<string>("");
  const history = useHistory();
  useEffect(() => {
    "token" in state.user && history.push("home");
  }, [state, history]);
  const _change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    id === "email" ? setEmail(value) : setPass(value);
  };
  const _login = () => {
    email &&
      password &&
      userLogin({ email, password })
        .then((res) => {
          res?.data && dispatch({ type: USER_ADD, data: res?.data });
          "token" in res?.data && history.push("home");
        })
        .catch(() => setError("Login failed!, please retry"));
  };
  return (
    <User title="Login">
      <Typography variant="caption" color="error">
        {err}
      </Typography>
      <div className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={_change}
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
              autoComplete="current-password"
              onChange={_change}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" />}
              label="Remember me on this computer."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={_login}
        >
          Login
        </Button>
        <Grid container justify="space-between">
          <Grid item>
            <Link to="signup">
              <Typography variant="body2">New User? Sign up</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="forgot">
              <Typography variant="body2">Forgot Password?</Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </User>
  );
};

export default Login;
