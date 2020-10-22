import { useEffect, useState } from 'react'
import NavDesktop from './nav/NavDesktop';
import NavMobile from './nav/NavMobile';
import { Grid, Hidden } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import client from '../contentful/client'
import fetchContent from '../contentful/fetchContent'

// GA
import React from 'react';
import { initGA, logPageView } from '../utils/analytics';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainerCustomizations: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
    paddingBottom: '0 !important'
  },
  content: {
    margin: '56px 0 0',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      margin: '95px 0 0',
    },
  },
  rightPannel: {
    overflow: 'auto',
    padding: '120px 0 0',
    [theme.breakpoints.up('md')]: {
      padding: '108px 0 0',
      height: '100vh',
    },
  },
  normalizeGridItem: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
}));

const Layout = props => {
  const classes = useStyles()
  const [ contentfulData, setResumeLink ] = useState([])
  const contentfulDataCheck = Object.entries(contentfulData).length !== 0 

  useEffect(() => {
    // code to run on component mount
    // GA
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()

    // get resume link
    async function getResumeLink() {
      const about = await fetchContent('about', '')
      setResumeLink({
        resumeLink: about
      })
    }
    getResumeLink()
    
  }, [])

  let navItems = []
  { contentfulDataCheck ?
    navItems = [
      {
        'name': 'About',
        'link': '/about'
      },
      {
        'name': 'Projects',
        'link': '/projects'
      },
      {
        'name': 'Resume',
        'link': contentfulData.resumeLink[0].fields.resume["en-US"].fields.file["en-US"].url
      }
    ]
  : null}
  

  return (
    <>
      <NavMobile />
      <div className={classes.root}>
        <Hidden smDown>
          {
            contentfulDataCheck ?
            <NavDesktop navItems={navItems} /> 
            : null
          }
        </Hidden>
        <div className={classes.content}>
          {props.children}
        </div>        
      </div>
    </>
  );
}


export default Layout;