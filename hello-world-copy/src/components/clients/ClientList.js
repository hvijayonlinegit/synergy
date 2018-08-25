import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
  active: {
    backgroundColor: 'red',
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
});

class NestedList extends React.Component {
  
  handleMoreinfo(link , n ){
    console.log('child method'+ n.name);
    this.props.onMoreInfo(link, n);
  }
  
  render() {
    const { classes, to } = this.props;
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      if(isEmpty(this.props.clients)){
        return (
          <Loader fullPage loading={true} />
        );
      }
    else{
    return (
        <List component="div" disablePadding>
            {
                this.props.clients.accountses.map(n => {
                const link= n._links.requirements.href
                //let boundClick = this.props.onRequirements.bind(this, link);
                const selflink= n._links.self.href
                const id = selflink.split('/').pop(-1);
                let clientid= "client id: " +id;
                //let boundDeleteClick = this.props.onDelete.bind(this, selflink, n);
                let boundMoreInfo = this.handleMoreinfo.bind(this, link, n);
                return(
                  
                  <ListItem button  to={to} activeclassname={classes.menuItem} key= {id} divider= {true} onClick={boundMoreInfo} >
                    <ListItemText primary={n.name} secondary={clientid} />
                  </ListItem>
                );
              })
            }
          </List>
      );
    }
  }
}
NestedList.propTypes = {
  clients: PropTypes.object.isRequired,
  onMoreInfo: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
