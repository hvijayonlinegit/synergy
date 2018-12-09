import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import 'react-overlay-loader/styles.css';
import DocumentUpload from './DocumentUpload';

import themes from '../theme'

const styles = theme => ({
  root: {
    maxHeight: '25vh',
    overflow: 'auto',
    minHeight: '25vh',
    width: '55%'
   },
   button: {
    margin: theme.spacing.unit,
    marginLeft: '20%'
  },
  topSection: {
    flexGrow: 1,
    float:'left'
  },
  beforeEle: {
    '&::before':  {
        display: 'block',
        float:'left',
        content: '"Documents"',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        boxSizing: 'border-box',
        marginRight: '10px',
        // height: '35%',
        // borderRight: '2px solid green',
         padding: '2% 1px',
         borderRadius: '20px',
         color: theme.palette.primary.contrastText,
         backgroundColor: themes.palette.primary.main,
    },
}
});

class DocumentsList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: -1 , search:'', filelin:''};
  }
  componentWillReceiveProps(_nextProps) {
    const filelink= _nextProps.filelink?_nextProps.filelink:'';
    console.log('doclink'+filelink);
    this.setState({filelink: filelink});
    //window.location.href(filelink);
	}
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }
  handleMoreinfo(id , docname, index ){
    this.setState({indexOfClickedItem: index});
    this.props.onDocuments(id, docname);
  }
  render() {
    const {classes, to } = this.props;
    const styles = {
      listItem: {
        paddingBottom: '2px',
        paddingTop: '2px'
    },
    listItemClicked: {
      paddingBottom: '2px',
      paddingTop: '2px',
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
          <div className={classes.beforeEle}>
            
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
        
        // (a,b)=> Number(
        //   b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1)
        //   )
      );
      //Apply search filters to search by name or id for the document list
      let filteredDocuments= sortedDocuments.filter(
        (document) =>{
          let id=''
          if(document._links){
            const selflink= document._links.self.href
             id = selflink.split('/').pop(-1);
          }
          else{
            id = document.id;
          }
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
      <div className={classes.beforeEle}>
         <div className={classes.topSection}>
            <a href={this.state.filelink} download > {this.state.filelink}</a>
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
                let id=''
                let boundMoreInfo
                if(n._links){
                  const selflink= n._links.self.href
                   id = selflink.split('/').pop(-1);
                   let selectedCandid= link.split('/').pop(-1);
                   var  docname = n.documentName;
                  boundMoreInfo = this.handleMoreinfo.bind(this, selectedCandid, docname);
                }
                else{
                  id = n.id;
                }
               return(
                  <ListItem  autofocus button style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem}  to={to}  divider= {true} onClick={boundMoreInfo} >
                     <ListItemText primary="Document ID :" secondary={id} /> 
                     <ListItemText primary="File Name :" secondary={n.documentName} /> 
                     <ListItemText primary="File Type" secondary={n.documentType.split('/').pop(-1)} />
                     <ListItemText primary="Attached By" secondary="Asha Richards" />  
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
DocumentsList.propTypes = {
  selectedCandidate: PropTypes.object.isRequired,
  documents:PropTypes.array.isRequired,
  onDocuments: PropTypes.func.isRequired,
  onUpload:PropTypes.func.isRequired,
  onFilechange:PropTypes.func.isRequired,
  filelink:PropTypes.string.isRequired
};
export default withStyles(styles)(DocumentsList);
