import { withStyles } from '@material-ui/styles';
import { Grid, TextField, Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core/';


const styles = theme => ({
  root: {
    margin: '40px 0 0'
  },
  inputWrapper: {
    maxWidth: '400px',
    margin: '0 0 40px'
  },
  buttonWrapper: {
    margin: '64px 0 0'
  },
  normalizeGridItem: {
    padding: '0 !important'
  },
  input: {
    margin: '0'
  }
});


class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      name: '', 
      email: '', 
      message: '',
      messageSent: '',
      displaySubmit: true,
    }
  }


  handleChange = prop => event => {
    this.setState({
      ...this.state,
      [prop]: event.target.value
    });
    // console.log('state', this.state);
  };


  getData() {
    const formData = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    return formData;
  }


  componentDidMount() {
    const theForm = document.getElementById('contact-form');
    this.waitForForm(theForm);
  }


  waitForForm(form) {
    if(typeof form !== 'undefined') {
      this.addSubmitListener(form);
    } else {
      this.waitForForm(document.getElementById('contact-form'));
    }
  }

  addSubmitListener(theForm) {
    // console.log('add listener');

    theForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = this.getData();
      this.submitStatus = 'PENDING';
      fetch(`https://usebasin.com/f/157e96a3e6e6.json`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json'
        }
      }).then(res => {
        res
          .json()
          .then(data => {
              this.state.messageSent = data.success;
              this.setState({
                ...this.state,
                displaySubmit: false,
              });
          });
      });
      setTimeout(() => {
        this.submitStatus = 'OK'
      }, 500)

    });
  }

  displaySubmit() {
    if (this.state.displaySubmit) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }



  render() {
    const { classes } = this.props;
    const submitButton = <Button variant="contained" type="submit" label="Submit" value="Send">Submit</Button>;
    const thankYouMessage = <p>Thank you for your message! I'll get back to you as soon as I can :)</p>;

    return (
      <form
        className={classes.root}
        noValidate
        id="contact-form"
        autoComplete="off"
        // onSubmit={this.handleSubmit()}
        >
          <Grid container spacing={4} className={classes.root}>
            <Grid item xs={12} className={classes.normalizeGridItem}>

              <Grid item xs={12} className={classes.normalizeGridItem}>
                <div className={classes.inputWrapper}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input
                      id="name-input"
                      aria-describedby="name-helper-text"
                      className={classes.input}
                      placeholder="Tyler Durden"
                      onChange={this.handleChange('name')}
                      fullWidth/>
                    <FormHelperText id="name-helper-text">Please enter your name.</FormHelperText>
                  </FormControl>
                </div>
              </Grid>

              <div className={classes.inputWrapper}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email-input">Email address</InputLabel>
                  <Input
                    id="email-input"
                    aria-describedby="email-helper-text"
                    className={classes.input}
                    onChange={this.handleChange('email')}
                    placeholder="tyler@fightclub.com"/>
                  <FormHelperText id="email-helper-text">Please enter your email address.</FormHelperText>
                </FormControl>
              </div>

              <div className={classes.inputWrapper}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="message-input">Message</InputLabel>
                  <Input
                    id="message-input"
                    aria-describedby="message-helper-text"
                    onChange={this.handleChange('message')}
                    className={classes.input}
                    multiline
                    rowsMax="8"
                    fullWidth/>
                  <FormHelperText id="message-helper-text">What would you like to talk about? :)</FormHelperText>
                </FormControl>
              </div>

              <Grid item xs={12} className={classes.normalizeGridItem}>
                <div className={classes.buttonWrapper}>
                  {this.state.displaySubmit ? submitButton : thankYouMessage}
                </div>
              </Grid>

            </Grid>
          </Grid>
        </form>



    );
  }
}


export default withStyles(styles)(ContactForm);