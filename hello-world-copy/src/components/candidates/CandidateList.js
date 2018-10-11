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

import {white, blue500} from '@material-ui/core/colors/';
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
        content: '"Candidates"',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        boxSizing: 'border-box',
        padding: '1px 1px',
        color: 'green',
        marginRight: '10px'
    },
}
});

class NestedList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: 0,search:''};
}
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }
  handleMoreinfo(documentslink , n, index ){
    this.setState({indexOfClickedItem: index});
    this.props.onCandidates(documentslink, n);
  }
  render() {
    const { classes, to } = this.props;
    const styles = {
      listItem: {
        paddingTop: '2px',
        paddingBottom: '2px',
    },
    listItemClicked: {
      paddingTop: '2px',
      paddingBottom: '2px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      //borderLeft: '12px solid #000000',
      background: '#0000004a',
      color: '#fff',
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
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      if(isEmpty(this.props.candidates)){
        return (
          // <Loader fullPage loading={true} />
          <div> </div>
        );
      }
    else{
      // sort the list to show recently added candidate at the top
      let sortedCandidates = this.props.candidates.candidates.sort(
        (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      //Apply search filters to search by name or id for the candidate list
      let filteredCandidates= sortedCandidates.filter(
        (candidate) =>{
          const id = candidate._links.self.href.split('/').pop(-1);
          let fullName = candidate.firstname+ ' ' +candidate.lastname;
          if(fullName.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1){
            return true;
          }
          if(id.indexOf(this.state.search)!== -1){
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
            <Tooltip title="Add a Candidate" classes={{ tooltip: classes.lightTooltip }}>
              {/* <Button variant="fab" mini color="primary" aria-label="Add" className={classes.button} onClick={() => this.props.handleCadModalOpen(this.props.selectedRequirement._links.self.href)} > */}
                <AddIcon color="primary"  onClick={() => this.props.handleCadModalOpen(this.props.selectedRequirement._links.self.href)} />
              {/* </Button> */}
            </Tooltip>
        <List component="div" disablePadding className={classes.root}>
            {
              filteredCandidates.map((n,index) => {
                let documentsLink = '';
                if (n._links) { documentsLink = n._links.document.href }

                let boundMoreInfo = this.handleMoreinfo.bind(this, documentsLink, n, index);
                
                return(
                    <ListItem button  to={to} style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  key= {index} divider= {true} onClick={boundMoreInfo} >
                      <ListItemText primary={n._links.self.href.split('/').pop(-1)} />
                      <ListItemText primary={n.firstname+ ' ' +n.lastname} />
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
  candidates: PropTypes.object.isRequired,
  selectedRequirement: PropTypes.object.isRequired,
  onCandidates: PropTypes.func.isRequired,
  handleCadModalOpen: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
