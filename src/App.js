import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  Classroom,
  Course,
  CreateCourse,
  CreateCourse2,
} from "./Containers";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/classroom" component={Classroom} />
          <Route exact path="/course" component={Course} />
          <Route exact path="/create-course" component={CreateCourse} />
          <Route exact path="/create-course2" component={CreateCourse2} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;
