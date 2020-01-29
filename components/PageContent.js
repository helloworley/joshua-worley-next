
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div id="page-content">
      <h1>{props.title} <span className={classes.exampleDate}>{props.date}</span></h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </div>
      </div>
  );
}


export default Layout;