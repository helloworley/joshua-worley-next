
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: '2em',
    letterSpacing: '8px',

  },
  exampleDate: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '.8em',
  },
  logo: {
    maxWidth: '180px',
    maxHeight: '100px',
  },
  projectIntro: {
    margin: '0 0 64px',
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div id="page-content">
      <div className={classes.projectIntro}>
        <img src={props.logo} className={classes.logo}/>
        {/* <h2 className={classes.title}>{props.title} </h2> */}
        <p className={classes.exampleDate}>{props.date}</p>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </div>
      </div>
  );
}


export default Layout;