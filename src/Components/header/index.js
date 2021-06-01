import React from "react";
import { Container, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Apps,
  EmailOutlined,
  Forum,
  Home,
  NotificationsOutlined,
} from "@material-ui/icons";
import Logo from "./../../Assets/logo-horace.png";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: "1px solid #f2f2f2",
    backgroundColor: '#fff'
  },
  headerItems: {
    display: "flex",
    padding: "1% 0",
  },
  leftSide: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  profileBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  navItem: {
    padding: "10px",
  },
  icon: {
    fontSize: 30,
  },
  rightBorder: {
    borderRight: "2px dotted #828282",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container>
        <div className={classes.headerItems}>
          <div className={classes.leftSide}>
            <div className={clsx(classes.navItem, classes.rightBorder)}>
              <Home className={classes.icon} />
            </div>

            <div className={clsx(classes.navItem)}>
              <img src={Logo} alt="" width="200" />
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={clsx(classes.navItem, classes.rightBorder)}>
              <Apps className={classes.icon} />
            </div>

            <div className={clsx(classes.navItem)}>
              <EmailOutlined className={classes.icon} />
            </div>

            <div className={clsx(classes.navItem)}>
              <Forum className={classes.icon} />
            </div>

            <div className={clsx(classes.navItem)}>
              <NotificationsOutlined className={classes.icon} />
            </div>

            <div className={classes.profileBox}>
              <div className={clsx(classes.navItem, classes.rightBorder)}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </div>
              <div className={clsx(classes.navItem)}>
                <p>BabaFemi Adigun</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
