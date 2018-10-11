import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//Spinner Imports
//import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
  root: {
    maxHeight: '25vh',
    overflow: 'auto',
    minHeight: '25vh',
   },
   button: {
    margin: theme.spacing.unit,
    marginLeft: '20%'
  },
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  beforeEle: {
    '&::before':  {
        display: 'block',
        float:'left',
        content: '"Requirements"',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        boxSizing: 'border-box',
        padding: '1px 1px',
        color: 'blue',
        marginRight: '10px'
    },
  }

});

class NestedList extends React.Component {

  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: 0, search: '' };

  }
  updateSearch(event) {

    this.setState({ search: event.target.value.substr(0, 20) });
  }
  handleMoreinfo(link, n, index) {
    console.log('child method' + n.name);
    this.setState({ indexOfClickedItem: index });
    this.props.onRequirements(link, n);
  }

  render() {
    const { classes } = this.props;
    const styles = {
      listItem: {
        paddingBottom: '5px',
        paddingTop: '5px'
      },
      listItemClicked: {
      //   border: '1px solid red',
      //   //borderBottom: '2px solid gray',
        paddingTop: '5px',
      paddingBottom: '5px',
      //   borderLeft: '12px solid red'
        border: '1px solid rgba(0, 0, 0, 0.12)',
      borderLeft: '12px solid lightgreen',
      boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
      },
    };
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    if (isEmpty(this.props.requirements)) {
      return (
        // <Loader fullPage loading={true} />
        <div> No requirements to Show  </div>
      );
    }
    else {
      let sortedRequirements = this.props.requirements.requirementses.sort(
        (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      let filteredRequirements = sortedRequirements.filter(
        (requirement) => {
          const selflink = requirement._links.self.href
          const id = selflink.split('/').pop(-1);
          if (requirement.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
            return true;
          }
          if (id.indexOf(this.state.search) !== -1) {
            return true;
          }
          return false;
        }

      );

      return (
        <div className={classes.beforeEle}>
          <TextField
            hintText="Search..."
            placeholder="Search..."
            underlineShow={false}

            style={styles.textField}
            value={this.state.search}
            inputStyle={styles.inputStyle}
            hintStyle={styles.hintStyle}
            onChange={this.updateSearch.bind(this)}
          />
          <Tooltip title="Add a Requirement" classes={{ tooltip: classes.lightTooltip }}>
            <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button} onClick={() => this.props.handleReqModalOpen(this.props.selectedclient._links.self.href)}  >
              <AddIcon />
            </Button>
          </Tooltip>
          <List component="div" disablePadding className={classes.root}>
            {
              filteredRequirements.map((n, index) => {
                let link = '';
                if (n._links) { link = n._links.candidates.href }


                const selflink = n._links.self.href
                const id = selflink.split('/').pop(-1);
                let clientid =   id;
                let boundMoreInfo = this.handleMoreinfo.bind(this, link, n, index);
                return (
                  <ListItem button style={this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem} key={id} divider={true} onClick={boundMoreInfo}>
                   <ListItemText  primary= {clientid} />
                    <ListItemText  primary= {n.title}/>
                    
                    {/* <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                      <DeleteIcon />
                    </IconButton> */}
                  </ListItem>
                );
              })
            }
          </List>
        </div>
      );
    }
  }
}
NestedList.propTypes = {
  requirements: PropTypes.object.isRequired,
  selectedclient: PropTypes.object.isRequired,
  onRequirements: PropTypes.func.isRequired,
  handleReqModalOpen: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
