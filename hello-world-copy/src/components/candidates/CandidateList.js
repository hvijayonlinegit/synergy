import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

import {white, blue500} from '@material-ui/core/colors/';
//Spinner Imports
//import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

import themes from '../theme';

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
  infoColor:{
    fill: 'green',
    width: '0.75em',
    height: '0.75em'
  },
  beforeEle: {
    '&::before':  {
        display: 'block',
        float:'left',
        content: '"Candidates"',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        boxSizing: 'border-box',
        marginRight: '10px',
        marginTop: '45px',
        // height: '35%',
        // borderRight: '2px solid green',
         padding: '2% 1px',
         borderRadius: '20px',
         color: theme.palette.primary.contrastText,
         backgroundColor: themes.palette.primary.main,
    },
}
});

class CandidatesList extends React.Component {
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
      borderLeft: '12px solid lightgreen',
      //background: '#0000004a',
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
          <div className={classes.beforeEle}>
          </div>
          
        );
      }
    else{
      // Logi to show employees
      let sortedCandidates =[];
      if(this.props.path === 'employees'){

      }else{
        // sort the list to show recently added candidate at the top
       sortedCandidates = this.props.candidates.candidates.sort(
        (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      }
      
      //Apply search filters to search by name or id for the candidate list
      let filteredCandidates= sortedCandidates.filter(
        (candidate) =>{
          const id = candidate._links.self.href.split('/').pop(-1);
          let fullName = candidate.firstName+ ' ' +candidate.lastName;
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
            hinttext="Search..."
            placeholder="Search..."
            underlineshow="false"
            
            style={styles.textField}
            value={this.state.search} 
            inputttyle={styles.inputStyle}
            hintstyle={styles.hintStyle}
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
                let displayName= n._links.self.href.split('/').pop(-1)+ '   '+n.firstName+ ' ' +n.lastName;
                return(
                    <ListItem button  to={to} style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  key= {index} divider= {true} onClick={boundMoreInfo} >
                      <ListItemText primary={displayName} />
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
CandidatesList.propTypes = {
  candidates: PropTypes.any.isRequired,
  selectedRequirement: PropTypes.any.isRequired,
  onCandidates: PropTypes.func.isRequired,
  handleCadModalOpen: PropTypes.func.isRequired,
  path:PropTypes.string.isRequired,
};
export default withStyles(styles)(CandidatesList);
