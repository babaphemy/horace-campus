import React from "react";
import {
  Avatar,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";

import { Copyright } from "../../Components/User/Signup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: 1,
    borderRadius: 10,
    padding: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const User = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        {children}
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default User;
