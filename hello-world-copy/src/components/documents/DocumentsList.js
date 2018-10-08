import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import DocumentUpload from './DocumentUpload';

const styles = theme => ({
  root: {
    maxHeight: '37vh',
      overflow: 'auto',
      minHeight: '37vh'
   },
   button: {
    margin: theme.spacing.unit,
  },
  topSection: {
    flexGrow: 1,
  }
});

class NestedList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: -1 , search:''};
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }
  handleMoreinfo(id , docname,token, index ){
    this.setState({indexOfClickedItem: index});
    this.props.onDocuments(id, docname,token);
  }
  render() {
    const {classes, to } = this.props;
    const styles = {
      listItem: {
    },
    listItemClicked: {
      backgroundColor: '#f0f8ff',
      borderBottom: '1px solid red'
    },
    textField:{
      marginTop: '10px'
    }
    };
    
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      if(this.props.documents.length === 0 && isEmpty(this.props.selectedCandidate)){
        return (
          //  <Loader fullPage loading={true} />
          <div>
            
        </div>
        )
      }
    else{
      // get the selected candidate link to fetch id from the link later , 
      //we should save the document for the selected candidate.
      let link='';
      if(this.props.selectedCandidate._links) link=this.props.selectedCandidate._links.self.href;
      
      //Sort the documents to show recently added document at the begining.
      let sortedDocuments = this.props.documents.sort(
        (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      //Apply search filters to search by name or id for the document list
      let filteredDocuments= sortedDocuments.filter(
        (document) =>{
          const selflink= document._links.self.href
          const id = selflink.split('/').pop(-1);
          if(document.documentName.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1){
            return true;
          }
          if(id.indexOf(this.state.search)!== -1){
            return true;
          }
          return false;
        }
  
      );
    return (
      <div>
         <div className={classes.topSection}>
            <Grid container spacing={24}>
              
              <Grid item >
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
              </Grid>
              <Grid item >
                <DocumentUpload selectedCandlink= {link} onUpload={this.props.onUpload}
                onFilechange={this.props.onFilechange}></DocumentUpload>
              </Grid>
            </Grid>
        </div>
        <List component="div" disablePadding className={classes.root} >
            {   
              filteredDocuments.map((n,index) => {
              const selflink= n._links.self.href
              const id = selflink.split('/').pop(-1);
               return(
                  <ListItem button style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  to={to}  divider= {true}  >
                     <ListItemText primary={n.documentName} secondary={id} /> 
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
  selectedCandidate: PropTypes.object.isRequired,
  documents:PropTypes.object.isRequired,
  onDocuments: PropTypes.func.isRequired,
  onUpload:PropTypes.func.isRequired,
  onFilechange:PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
