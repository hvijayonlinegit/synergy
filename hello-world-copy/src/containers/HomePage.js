import React from 'react';
import { withStyles } from '@material-ui/core/styles';
//Material Imports
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import TaskList from '../components/home/tasklist'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    color: theme.palette.text.secondary,
    marginBottom: '10px',
    minHeight: '90vh'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  border: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitState();
  }
  getInitState() {
    const { userdetails } = this.props.userdetails ? this.props.userdetails : '';
    return userdetails;
  }
  componentWillReceiveProps(_nextProps) {
    console.log(_nextProps);
    this.setState({
      ..._nextProps.userdetails
    })
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { classes } = this.props;
   
    let user = localStorage.getItem('currentUser');
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.capitalize} >Welcome Back {user} </Typography>
          <Grid container spacing={0} >
            <Grid item md={2} sm={3}>
              <TaskList></TaskList>
            </Grid>
            <Grid item md={10} sm={9} className={classes.border}>
              {this.props.children}
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HomePage);