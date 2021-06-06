import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore, Menu } from "@material-ui/icons";
import "./styles.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    borderBottom: "1px solid #f2f2f2",
    backgroundColor: "#fff",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <Container maxWidth="lg">
        <nav role="navigation" class="menu">
          <label for="menu">
            <Menu />
          </label>
          <input type="checkbox" id="menu" />
          <ul>
            <li class="menu-hasdropdown">
              <Link to="#">
                Help
                <label title="toggle menu" for="about">
                  <ExpandMore />
                </label>
                <input type="checkbox" id="about" />
              </Link>
              <ul class="menu-dropdown">
                <li>
                  <Link to="">Help</Link>
                </li>
                <li>
                  <Link to="">Help</Link>
                </li>
                <li class="menu-hasdropdown menu-hasflyout">
                  <Link to="">Help</Link>
                </li>
              </ul>
            </li>

            <li class="menu-hasdropdown">
              <Link to="#">
                Resources
                <label title="toggle menu" for="about">
                  <ExpandMore />
                </label>
                <input type="checkbox" id="about" />
              </Link>
              <ul class="menu-dropdown">
                <li>
                  <Link to="create-course">Create Course</Link>
                </li>
                <li>
                  <Link to="classroom">Classroom</Link>
                </li>
                <li class="menu-hasdropdown menu-hasflyout">
                  <Link to="/">Resources</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
