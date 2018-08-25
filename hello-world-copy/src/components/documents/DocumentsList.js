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
});

class NestedList extends React.Component {
  
  handleMoreinfo(id , docname,token ){
    this.props.onDocuments(id, docname,token);
    // this.download();
    
  }
  // download() {
  //   // fake server request, getting the file url as response
  //   setTimeout(() => {
  //     const response = {
  //       file: 'http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso',
  //     };
  //     // server sent the url to the file!
  //     // now, let's download:
  //     window.location.href = response.file;
  //     // you could also do:
  //      //window.open(response.file);
  //   }, 100);
  // }
  
  render() {
    const { classes, to } = this.props;
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
      if(isEmpty(this.props.candidate.documents)){
        return (
          // <Loader fullPage loading={true} />
          <div> </div>
        );
      }
    else{
    return (
        <List component="div" disablePadding>
            {
                this.props.candidate.documents.map(n => {
                  let id = n.key.split('/',1);
                  var  docname = n.key.split('/').pop();
                  let token = localStorage.getItem('token');
                  let boundMoreInfo = this.handleMoreinfo.bind(this, id, docname,token);
                return(
                  
                  <ListItem button  to={to} activeclassname={classes.active}  divider= {true} onClick={boundMoreInfo} >
                     <ListItemText primary={n.bucketName} secondary={n.key} /> 
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
  candidate: PropTypes.object.isRequired,
  onDocuments: PropTypes.func.isRequired
};
export default withStyles(styles)(NestedList);
