import React from 'react';
import { useState } from 'react'
import { AppBar, Toolbar, Drawer, Hidden } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import LogoHorizontal from '../assets/LogoHorizontal'
import LogoVertical from '../assets/LogoVertical'
import Socials from '../assets/Socials'
import Link from 'next/link'

const useStyles = makeStyles( theme => ({
  burgerContainer: {
    zIndex: 1000,
  },
  fullList: {
    width: 'auto',
  },
  appBar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: '1000'
  },
  toolbar: {
    textAlign: 'center',
    position: 'relative',
    padding: '0 10px',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)  grayscale(0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
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
    width: '100%',
  },
  icon: {
    color: theme.colors.gray600,
    '&:hover': {
      color: theme.colors.meta,
      transition: '1s',
    }
  },
  navSheet: {
    padding: '80px 20px',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)  grayscale(0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    width: '100vw',
    position: 'fixed',
    transition: 'top .5s',
    zIndex: '2000',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.open': {
      top: '0',
    },
    '&.closed': {
      top: '-100vh',
    }
  },
  list: {
    margin: '30px 0',
    padding: '0',
    textAlign: 'center'
  },
  listItem: {
    listStyle: 'none',
    marginBottom: '15px'
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
    color: theme.colors.gray600,
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  linksWrapper: {
    marginTop: '30px'
  },
  socialsWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  clear: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    color: theme.colors.gray600
  }
}));

const styles = {
  '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)  grayscale(0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
}

const NavMobile = props => {
  const classes = useStyles();
  const [ toggleNav, setToggleNav] = useState('Mobile Nav');

  const handleChange = event => {
    setToggleNav( !toggleNav )
  }

  return (
    <>
      <div className={classes.appBar}>
        <div className={classes.toolbar}>
          <div className={classes.toolbarInner}>
              <LogoHorizontal />
              <div className={classes.burgerContainer} onClick={handleChange}>
                <IconButton edge="start" color="inherit" aria-label="menu" >
                  <MenuIcon className={classes.icon} />
                </IconButton>
              </div>
            </div>
        </div>
      </div>
          

      <div className={`${classes.navSheet} ${toggleNav ? 'closed' : 'open'}`} id="navigation">
        
        <ClearIcon className={classes.clear} onClick={handleChange}/>
        <div className={classes.navSheetInner}>
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
      </div>
    </>
  );
}


export default NavMobile;