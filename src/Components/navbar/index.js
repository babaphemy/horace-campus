import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore, Menu } from "@material-ui/icons";
import "./styles.css";

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
              <a href="#">
                Help
                <label title="toggle menu" for="about">
                  <ExpandMore />
                </label>
                <input type="checkbox" id="about" />
              </a>
              <ul class="menu-dropdown">
                <li>
                  <a href="">Help</a>
                </li>
                <li>
                  <a href="">Help</a>
                </li>
                <li class="menu-hasdropdown menu-hasflyout">
                  <a href="">Help</a>
                </li>
              </ul>
            </li>

            <li class="menu-hasdropdown">
              <a href="#">
                Resources
                <label title="toggle menu" for="about">
                  <ExpandMore />
                </label>
                <input type="checkbox" id="about" />
              </a>
              <ul class="menu-dropdown">
                <li>
                  <a href="">Resources</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
                <li class="menu-hasdropdown menu-hasflyout">
                  <a href="">Resources</a>
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
