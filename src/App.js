import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signup from "./Components/User/Signup";
import Login from "./Components/User/Login";
import Forgot from "./Components/User/Forgot";
import {
  Home,
  NotFound,
  Classroom,
  Course,
  CreateCourse,
  CreateCourse2,
} from "./Containers";
import { UserProvider } from "./Context/UserProvider";
import "./Assets/css/styles.css";
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#FA534F",
    },
    primary: {
      main: "#FA534F",
    },
    secondary: {
      main: "#802928",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <section className="App">
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login"></Redirect>
              </Route>
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot" component={Forgot} />
              <Route exact path="/classroom" component={Classroom} />
              <Route exact path="/course" component={Course} />
              <Route exact path="/create-course" component={CreateCourse} />
              <Route exact path="/create-course2" component={CreateCourse2} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </section>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
