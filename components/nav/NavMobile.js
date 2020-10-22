import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Drawer, Hidden } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Navigation from './Navigation';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  burgerContainer: {
    zIndex: 1000,
  },
  fullList: {
    width: 'auto',
  },
  toolbar: {
    textAlign: 'center',
    position: 'relative',
    backgroundColor: 'white',
    color: '#333',
  },
  navName: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: '3px'
  }
});

const NavMobile = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <Hidden mdUp>

      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.burgerContainer} onClick={toggleDrawer('left', true)}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </div>
          <Link href="/">
            <p className={classes.navName}>Joshua Worley</p>
          </Link>
          {/* <img className={classes.logo} src="/ikigai-light.svg" /> */}
        </Toolbar>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        <Navigation />
      </Drawer>
    </Hidden>
  );
}


export default NavMobile;