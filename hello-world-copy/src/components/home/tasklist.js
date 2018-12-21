import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import TaskIcon from '@material-ui/icons/AssignmentOutlined'
import ReportsIcon from '@material-ui/icons/DashboardRounded'
import Chip from '@material-ui/core/Chip';
import { browserHistory} from 'react-router';
// import Divider from '@material-ui/core/Divider';
// import Avatar from '@material-ui/core/Avatar';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    minHeight: '100vh',
    maxHeight: '100vh'
  },
  nested: {
    // paddingLeft: theme.spacing.unit * 4,
  },
  tasks:{
      backgroundColor: 'lightGreen',
      marginLeft: '15px'
  },
  reports:{
    backgroundColor: 'lightBlue',
    marginLeft: '15px'
},
marginCustom:{
    marginBottom:'20px'
}
});

class TaskList extends React.Component {
  state = {
    opentask: true,
    open: true,
    indexOfClickedItem: 0,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open}));
  };
  handleTaskClick = () => {
    this.setState(state => ({ opentask: !state.opentask }));
  };
  handleClientClick=() => {
    this.setState({indexOfClickedItem: 0});
    browserHistory.push(`/CreateNewClient`);
  };
  handleclientsdash=() =>{
    this.setState({indexOfClickedItem: 0});
      browserHistory.push('/clientsdash')
      
  }

  render() {
    const { classes } = this.props;
   
    const styles = {
        listItem: {
          paddingBottom: '2px',
          paddingTop: '2px',
      },
      
      listItemClicked: {
        paddingTop: '2px',
        paddingBottom: '2px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: '3px solid lightgreen',
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
      },
     
      };

    return (
      <List
        component="nav"
        // subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        className={classes.root}
      >
      
        <ListItem button disableGutters className={classes.marginCustom}  onClick={this.handleClick}>
         <Chip 
         icon={<ReportsIcon />}
         label={
          <ListItemText  primary="Reports" /> } deleteIcon={ <ExpandLess />} className={classes.reports} variant="outlined"  />
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List  component="div" disablePadding>
            <ListItem button  className={classes.nested} style= {this.state.indexOfClickedItem === 0 ? styles.listItemClicked : styles.listItem} onClick={this.handleclientsdash}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Clients" />
            </ListItem>
            
            <ListItem button  className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Requirement" />
            </ListItem>
            <ListItem button   className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Candidates" />
            </ListItem>
          </List>
        </Collapse>
        {/* <li>
                <Divider  />
            </li> */}
        <ListItem button disableGutters  className={classes.marginCustom} onClick={this.handleTaskClick}>
        <Chip 
         icon={
              <TaskIcon />
          }
         label={<div>
             <ListItemText  primary="Tasks" /></div>} className={classes.tasks} variant="outlined" />
          {/* {this.state.opentask ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem>
        <Collapse in={this.state.opentask} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button   className={classes.nested} onClick={this.handleClientClick}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Create Client" />
            </ListItem>
            <ListItem button  className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset  primary="Create Requirement" />
            </ListItem>
            <ListItem button   className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Create Candidate" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskList);