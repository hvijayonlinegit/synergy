import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
//import IconButton from '@material-ui/core/IconButton';
import 'react-overlay-loader/styles.css';
import themes from '../theme'
// import Delete from '@material-ui/icons/Delete';
import {white, blue500} from '@material-ui/core/colors/';
import AddIcon from '@material-ui/icons/Add';
import Info from '@material-ui/icons/Info';

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
        float:'left',
        content: '"Clients"',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        boxSizing: 'border-box',
        marginRight: '10px',
       // height: '35%',
       // borderRight: '2px solid green',
        padding: '15% 1px',
        borderRadius: '20px',
        color: theme.palette.primary.contrastText,
        backgroundColor: themes.palette.primary.main,
        
    },
},
infoColor:{
  fill: 'green',
  width: '0.75em',
  height: '0.75em'
},
arrowPopper: {
  '&[x-placement*="bottom"] $arrowArrow': {
    top: 0,
    left: 0,
    marginTop: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent ${theme.palette.grey[700]} transparent`,
    },
  },
  '&[x-placement*="top"] $arrowArrow': {
    bottom: 0,
    left: 0,
    marginBottom: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '1em 1em 0 1em',
      borderColor: `${theme.palette.grey[700]} transparent transparent transparent`,
    },
  },
  '&[x-placement*="right"] $arrowArrow': {
    left: 0,
    marginLeft: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 1em 1em 0',
      borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`,
    },
  },
  '&[x-placement*="left"] $arrowArrow': {
    right: 0,
    marginRight: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 0 1em 1em',
      borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`,
    },
  },
},
arrowArrow: {
  position: 'absolute',
  fontSize: 7,
  width: '3em',
  height: '3em',
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  },
},
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
  handleMoreinfo(link , n, index ){
    console.log('child method'+ n.name);
    this.setState({indexOfClickedItem: index});
    this.props.onMoreInfo(link, n, false);
  }
  handleModalOpen(){
    this.props.handleModalOpen();
  }
  handleClientEdit(link, n, e){
    console.log('asadadadadadad');
    this.props.onMoreInfo(link, n, true);
  }
  
  render() {
    const { classes, to } = this.props;
    
    const styles = {
      listItem: {
        paddingBottom: '2px',
        paddingTop: '2px'
    },
    editDisplay:{
      display: 'block'
    },
    editHide:{
      display: 'none'
    },
    listItemClicked: {
      
      //borderBottom: '2px solid gray',
     paddingTop: '2px',
        paddingBottom: '2px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
       borderLeft: '12px solid lightgreen',
    //borderLeft: '12px solid #000000',
      //background: '#0000004a',
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
      if(isEmpty(this.props.clients)){
        return (
        //   <Loader fullPage loading={true} />
        <div className={classes.beforeEle}>
            
        </div>
        );
      }
    else{
      // sort the list to show recently added client at the top
      let sortedClients = this.props.clients.accountses.sort(
        (a,b)=> Number(b._links.self.href.split('/').pop(-1)) - Number(a._links.self.href.split('/').pop(-1))
      );
      //Apply search filters to search by name or id for the client list
      let filteredClients= sortedClients.filter(
        (client) =>{
          const selflink= client._links.self.href
          const id = selflink.split('/').pop(-1);
          if(client.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1){
            return true;
          }
          if(id.indexOf(this.state.search)!== -1){
            return true;
          }
          return false;
        }
  
      );
    return (
        <div  className={classes.beforeEle}>
          <TextField
            autoFocus
            hintText="Search..."
            placeholder="Search..."
            underlineShow={false}
            
            style={styles.textField}
            value={this.state.search} 
            inputStyle={styles.inputStyle}
            hintStyle={styles.hintStyle}
            onChange={this.updateSearch.bind(this)}
            />
            <Tooltip title="Add a Client" classes={{ tooltip: classes.lightTooltip }}>
              {/* <Button  mini color="primary" aria-label="Add" className={classes.button} onClick={ this.props.handleModalOpen } > */}
                <AddIcon color="primary"  onClick={ this.props.handleModalOpen }></AddIcon>
              {/* </Button> */}
            </Tooltip>
        {/* <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/> */}
          <List component="div" disablePadding className={classes.root}>
              {
                  filteredClients.map((n,index) => {
                  const link= n._links.requirements.href
                  //let boundClick = this.props.onRequirements.bind(this, link);
                  const selflink= n._links.self.href
                  const id = selflink.split('/').pop(-1);
                 // let clientid= "client id: " +id;
                  //let boundDeleteClick = this.props.onDelete.bind(this, selflink, n);
                  let boundMoreInfo = this.handleMoreinfo.bind(this, link, n, index);
                 // let boundClientEdit = this.handleClientEdit.bind(this, link, n, index);
                  return(
                    <div>
                      
                      <ListItem autoFocus button={true} style= {this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem} to={to}  key= {id} divider= {true} onClick={boundMoreInfo} >
                        {/* <ListItemText primary={n.name} secondary={clientid} /> */}
                        <ListItemText color="inherit" primary= {id}/>
                        <ListItemText  primary= {n.name} />
                          <ListItemSecondaryAction >
                          <Tooltip placement="right-start" 
                              title={
                                <React.Fragment>
                                  <span className={classes.arrowArrow} ref={this.handleArrowRef} />
                                  <div>Contact information :
                                          <p>Phone Number : {n.phoneNumber1}                     </p>
                                          <p>email ID : {n.email1}
                                          </p>
                                  </div>
                                  
                                </React.Fragment>
                              }
                              classes={{ popper: classes.arrowPopper }}
                              PopperProps={{
                                popperOptions: {
                                  modifiers: {
                                    arrow: {
                                      enabled: Boolean(this.state.arrowRef),
                                      element: this.state.arrowRef,
                                    },
                                  },
                                },
                              }}
                              > 
                              <Info className={classes.infoColor}></Info>
                             {/* <IconButton >
                              <Delete />
                            </IconButton> */}
                          </Tooltip>
                        </ListItemSecondaryAction>
                      </ListItem>
                      
                    </div>
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
  clients: PropTypes.object.isRequired,
  onMoreInfo: PropTypes.func.isRequired,
  handleClientEdit:PropTypes.func.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
};
export default withStyles(styles)(NestedList);
