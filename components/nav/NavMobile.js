import React from 'react';
import { useState } from 'react'
import { AppBar, Toolbar, Drawer, Hidden } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import LogoHorizontal from '../LogoHorizontal'
import LogoVertical from '../LogoVertical'
import Socials from '../Socials'
import Link from 'next/link'

const useStyles = makeStyles( theme => ({
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
  navSheet: {
    padding: '80px 20px',
    backgroundColor: theme.colors.abyss,
    width: '100vw',
    position: 'fixed',
    transition: '.5s',
    zIndex: '2000',
    '&.open': {
      top: '0',
    },
    '&.closed': {
      top: '-400px',
    }
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '30px 0',
    padding: '0'
  },
  listItem: {
    listStyle: 'none',
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
    color: theme.colors.whisp,
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  linksWrapper: {
    borderTop: `solid 1px ${theme.colors.whisp}`,
    marginTop: '30px'
  },
  socialsWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  skrim: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: '1999',
    transition: '.5s'
  }
}));

const NavMobile = props => {
  const classes = useStyles();
  const [ toggleNav, setToggleNav] = useState('Mobile Nav');

  const handleChange = event => {
    setToggleNav( !toggleNav )
    console.log('state', toggleNav)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarInner}>
            <LogoHorizontal />
            <div className={classes.burgerContainer} onClick={handleChange}>
              <IconButton edge="start" color="inherit" aria-label="menu" >
                <MenuIcon className={classes.icon} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      
      <div className={`${classes.navSheet} ${toggleNav ? 'closed' : 'open'}`} id="navigation">
        <LogoVertical />
        <div className={classes.linksWrapper}>
          <ul className={classes.list}>
            {props.navItems.map(menuItem => (
              <li key={menuItem.name} className={classes.listItem}>
                <Link href={menuItem.link}>
                  <a className={classes.a}>
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={classes.socialsWrapper}>
            <Socials />
          </div>
        </div>
      </div>

      <div className={`${classes.skrim} ${toggleNav ? 'hide' : 'show'}`} id="navigation" onClick={handleChange}>
      </div>
      
    </>
  );
}


export default NavMobile;