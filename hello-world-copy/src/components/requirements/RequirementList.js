import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { white, blue500 } from '@material-ui/core/colors/';
//Spinner Imports
//import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import themes from '../theme'
const styles = theme => ({
  root: {
    maxHeight: '28vh',
    overflow: 'auto',
    minHeight: '28vh',
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
    '&::before': {
      display: 'block',
      float: 'left',
      content: '"Requirements"',
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      boxSizing: 'border-box',
      marginRight: '10px',
      marginTop: '40px',
      // height: '35%',
      // borderRight: '2px solid green',
      padding: '2% 1px',
      borderRadius: '20px',
      color: theme.palette.primary.contrastText,
      backgroundColor: themes.palette.primary.main,
    },
  },
});

class RequirementsList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: 0, search: '' };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  handleMoreinfo(link,selectedClientLink, selectedRequirement, index) {
    console.log('child method' + selectedClientLink);
    this.setState({ indexOfClickedItem: index });
    this.props.onRequirements(link,selectedClientLink, selectedRequirement);
  }
  render() {
    const { classes } = this.props;
    const styles = {
      listItem: {
        paddingBottom: '2px',
        paddingTop: '2px'
      },
      listItemClicked: {
        paddingTop: '2px',
        paddingBottom: '2px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: '12px solid lightgreen',
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
      },
      textField: {
        color: white,
        backgroundColor: blue500,
        borderRadius: 2,
        height: 35,
        marginBottom: '5%'
      },
    };

    if (this.props.requirements.length === 0) {
      return (
        // <Loader fullPage loading={true} />
        <div className={classes.beforeEle}>
          <div> No requirements to Show  </div>
        </div>
      );
    }
    else {
      let sortedRequirements = this.props.requirements.requirementses.sort(
        (a, b) => Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      let filteredRequirements = sortedRequirements.filter(
        (requirement) => {
          const selflink = requirement._links.self.href
          const id = selflink.split('/').pop(-1);
          if (requirement.requirementTitle.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
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
            hinttext="Search..."
            placeholder="Search..."
            underlineshow="false"
            style={styles.textField}
            value={this.state.search}
            inputstyle={styles.inputStyle}
            hintstyle={styles.hintStyle}
            onChange={this.updateSearch.bind(this)}
          />
          <Tooltip title="Add a Requirement" classes={{ tooltip: classes.lightTooltip }}>
            <AddIcon color="primary" onClick={() => this.props.handleReqModalOpen(this.props.selectedclient._links.self.href)} />
          </Tooltip>
          <List component="div" disablePadding className={classes.root}>
            {
              filteredRequirements.map((selectedRequirement, index) => {
                let link = '';
                let selectedClientLink= '';
                if (selectedRequirement._links) { link = selectedRequirement._links.candidates.href;
                  selectedClientLink=selectedRequirement._links.accounts.href; }
                const selflink = selectedRequirement._links.self.href
                const id = selflink.split('/').pop(-1);
                let clientid = id+"   "+selectedRequirement.requirementTitle;
                let boundMoreInfo = this.handleMoreinfo.bind(this, link,selectedClientLink, selectedRequirement, index);
                return (
                  <ListItem key= {id} button style={this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem} key={id} divider={true} onClick={boundMoreInfo}>
                    <ListItemText primary={clientid} />
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
RequirementsList.propTypes = {
  requirements: PropTypes.any.isRequired,
  selectedclient: PropTypes.any.isRequired,
  onRequirements: PropTypes.func.isRequired,
  handleReqModalOpen: PropTypes.func.isRequired
};
export default withStyles(styles)(RequirementsList);
