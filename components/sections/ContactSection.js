import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading';

const ContactSection = props => {
  const classes = useStyles();

  return (
    <div className={classes.contactSection}>
      <SectionHeading text="Contact" color="white"/>
      <div className={classes.formWrapper}>
        <form action="https://usebasin.com/f/b3b2da236c0c" method="POST">
          <div className={classes.formGrid}>
            <div className={classes.left}>
              <div className={classes.elWrapper}>
                <label for="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Tyler Durden"/>
              </div>
              <div className={classes.elWrapper}>
                <label for="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tyler@fightclub.com"/>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.elWrapper}>
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Hey Josh, I have an awesome idea for an app. Let's make it happen."/>
              </div>
            </div>
          </div>
          <div className={classes.buttonWrapper}>
            <input type="submit" className={classes.submit}/>
          </div>
        </form>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  contactSection: {
    backgroundColor: theme.colors.gray600,
    padding: '60px 20px',
    [theme.breakpoints.up('md')]: {
      padding: '60px 40px',
    }
  },
  formWrapper: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  formGrid: {
    display: 'grid',
    gridColumnGap: '40px',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumnGap: '60px',
    }
  },
  elWrapper: {
    '&:not(:last-of-type)': {
      marginBottom: '40px'
    },
    '&:only-child': {
      marginTop: '40px',
      [theme.breakpoints.up('md')]: {
        marginTop: '0'
      }
    },
    '& label': {
      display: 'block',
      margin: '0 0 10px',
      color: theme.colors.gray100,
      fontFamily: theme.fontFamily.sansSerif,
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },
    '& input': {
      padding: '20px',
      width: '100%',
      backgroundColor: theme.colors.gray500,
      color: theme.colors.gray300,
      fontSize: '16px',
      fontFamily: theme.fontFamily.serif,
      border: 'none'
    },
    '& textarea': {
      padding: '20px',
      width: '100%',
      backgroundColor: theme.colors.gray500,
      color: theme.colors.gray300,
      fontSize: '16px',
      fontFamily: theme.fontFamily.serif,
      border: 'none'
    }
  },
  buttonWrapper: {
    textAlign: 'center',
    marginTop: '40px'
  },
  submit: {
    textTransform:'none',
    backgroundColor: theme.colors.gray100,
    color: theme.colors.whisp,
    padding: '14px 40px',
    borderRadius: '0',
    boxShadow: theme.boxShadows.buttonPrimary,
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '30px',
    fontFamily: theme.fontFamily.sansSerif,
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    backgroundColor: theme.colors.whisp,
    border: `1px solid ${theme.colors.linkGrey}`,
    color: theme.colors.linkGrey,
    '&:hover': {
      backgroundColor: theme.colors.gray600,
      color: theme.colors.gray100,
      border: `1px solid ${theme.colors.gray100}`,
    }
  }
}))

export default ContactSection;