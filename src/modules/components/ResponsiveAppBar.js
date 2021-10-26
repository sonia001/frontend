import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar :{
    height:"90%",
    width:'100%'
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-around`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `home`, path: `/aboutus` },
  { title: `books`, path: `/books` },
  { title: `publish book`, path: `/publishbook` },
  { title: `publish book chapter`, path: `/publishbookchapter` },
  { title: `make payment`, path: `/faq` },
  { title: `contact us`, path: `/faq` }
];

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className ={classes.root} >
      <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
    </Grid>
  );
};

export default Header;
