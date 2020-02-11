import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PageContent from './PageContent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
  heading: {
    margin: '24px 0px 8px 0',
    fontSize: '1em',
    textAlign: 'center',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
      // display: 'none',
    },
  },
  tabBar: {
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 10px -10px gray',
    position: 'fixed',
    top: '56px',
    left: '0',
    [theme.breakpoints.up('md')]: {
      top: '0',
      left: 'initial',
    },
  },
  tabPanel: {
    padding: '64px 0 0',
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static" className={classes.tabBar}>
        <h1 className={classes.heading}>{props.title}</h1>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.links.map((tabItem, i) => { 
            return(
              // <Link href={`${props.baseUrl}${tabItem.slug}`} as={`${props.baseUrl}${tabItem.slug}`}>
                <Tab label={tabItem.post_title} {...a11yProps(i)} key={i}/>
              // </Link>
            );   
          })}
          
        </Tabs>
      </AppBar>
      {/* {props.links.map((tabItem, i) => { 
        return(
          <TabPanel value={value} index={i} key={i}>
            <h1>{tabItem.post_title} <span className={classes.exampleDate}>{tabItem.post_date_formatted}</span></h1>
            <div>
              <div dangerouslySetInnerHTML={{ __html: tabItem.post_content }}></div>
            </div>
          </TabPanel>
        );   
      })} */}
      {props.links.map((tabItem, i) => { 
        return(
          <TabPanel value={value} index={i} key={i} className={classes.tabPanel}>
            <PageContent
              title={tabItem.post_title}
              date={tabItem.post_date_formatted}
              content={tabItem.post_content}
              logo={tabItem.featured_image}
            />
          </TabPanel>
        );   
      })}
    </div>
  );
}