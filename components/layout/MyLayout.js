import { useEffect, useState } from 'react'
import NavDesktop from '../nav/NavDesktop';
import NavMobile from '../nav/NavMobile';
import { Grid, Hidden } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import fetchContent from '../../contentful/fetchContent'
import Footer from './Footer'

// GA
import React from 'react';
import { initGA, logPageView } from '../../utils/analytics';

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
      margin: `${theme.navHeight.md} 0 0`,
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
    async function getResume() {
      const resume = await fetchContent({
        type: 'resume'
      })
      setResumeLink({
        resume: resume[0].fields.english["en-US"].fields.file["en-US"].url,
        shokumukeireki: resume[0].fields.shokumukeireki["en-US"].fields.file["en-US"].url
      })    
    }
    getResume()
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
        'link': contentfulData.resume
      },
      {
        'name': '職務経歴書',
        'link': contentfulData.shokumukeireki
      },
    ]
  : null}
  

  return (
    <>
      <Hidden smUp>
        <NavMobile navItems={navItems} />
      </Hidden>
      <div className={classes.root}>
        <Hidden xsDown>
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
      {
        contentfulDataCheck ?
          <Footer navItems={navItems}/>
        : 
      null}
    </>
  );
}


export default Layout;