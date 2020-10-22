import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Drawer, Hidden } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import LogoHorizontal from '../LogoHorizontal'
import NavMobileSheet from './NavMobileSheet'

const useStyles = makeStyles( theme => ({
  list: {
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
    backgroundColor: theme.colors.abyss,
    color: '#333',
    alignItems: 'center'
  },
  toolbarInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  drawer: {
    height: '400px',
    width: '100%'
  },
  icon: {
    color: theme.colors.whisp,
    '&:hover': {
      color: theme.colors.meta,
      transition: '1s',
    }
  },
}));

const NavMobile = props => {
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

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarInner}>
            <LogoHorizontal />
            <div className={classes.burgerContainer} onClick={toggleDrawer('left', true)}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon className={classes.icon} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)} className={classes.drawer}>
        <NavMobileSheet navItems={props.navItems} />
      </Drawer>
    </>
  );
}


export default NavMobile;