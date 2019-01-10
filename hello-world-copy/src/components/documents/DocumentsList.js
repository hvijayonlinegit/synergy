import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import themes from '../theme'
import { white, blue500 } from '@material-ui/core/colors/';
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
    '&::before': {
      float: 'left',
      content: '"Documents"',
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      boxSizing: 'border-box',
      marginRight: '10px',
      marginTop: '15px',
      // height: '35%',
      // borderRight: '2px solid green',
      padding: '15% 1px',
      borderRadius: '20px',
      color: theme.palette.primary.contrastText,
      backgroundColor: themes.palette.primary.main,
      // [theme.breakpoints.up('md')]: {
      //   marginRight: '10px',
      // },

    },
  },
  infoColor: {
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

class DocumentsList extends React.Component {
  constructor(props) {
    super(props);
    // Initialize a state which contain the index of clicked element (initially -1)
    this.state = { indexOfClickedItem: 0, search: '' };
  }
  // componentWillReceiveProps(_nextProps) {
  //   // const filelink = _nextProps.filelink ? _nextProps.filelink : '';
  //   // console.log('doclink' + filelink);
  //   // this.setState({ filelink: filelink });
  //   //window.location.href(filelink);
  // }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  handleMoreinfo(id, docname, index) {
    this.setState({ indexOfClickedItem: index });
    // this.props.onDocuments(id, docname);
  }
  render() {
    const { classes, to } = this.props;
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

    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
    if (this.props.documents.length === 0 && isEmpty(this.props.selectedCandidate)) {
      return (
        //  <Loader fullPage loading={true} />
        <div className={classes.beforeEle}>
          <div> No Documents  to Show  </div>
        </div>
      )
    }
    else {
      // get the selected candidate link to fetch id from the link later , 
      //we should save the document for the selected candidate.
      let link = '';
      if (this.props.selectedCandidate._links) link = this.props.selectedCandidate._links.self.href;
      console.log('>>>>>>>>>>>>>>>>' + link)
      //Sort the documents to show recently added document at the begining.
      let sortedDocuments = this.props.documents.sort(
        //(a, b) => Number(a.id) - Number(b.id)
      );
      //Apply search filters to search by name or id for the document list
      let filteredDocuments = sortedDocuments.filter(
        (document) => {
          let id = ''
          if (document._links) {
            const selflink = document._links.self.href
            id = selflink.split('/').pop(-1);
          }
          else {
            id = document.id;
          }
          if (document.documentName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
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
          <Tooltip title="Add a Document" classes={{ tooltip: classes.lightTooltip }}>
            <AddIcon color="primary" onClick={() => this.props.handleDocModalOpen(this.props.selectedCandidate._links.self.href)}></AddIcon>
          </Tooltip>

          <List component="div" disablePadding className={classes.root} >
            {
              filteredDocuments.map((n, index) => {
                let id = ''
                let boundMoreInfo
                let displayname = '';
                let docname = ''
                let selectedCandid = link.split('/').pop(-1);
                if (n._links) {
                  const selflink = n._links.self.href
                  id = selflink.split('/').pop(-1);

                  docname = n.documentName;
                  boundMoreInfo = this.handleMoreinfo.bind(this, selectedCandid, docname, index);
                  displayname = id + "   " + n.documentName;
                }
                else {

                  // check why document object is not coming as required when doc uploaded 
                  id = n.id;
                  docname = n.documentName;
                  displayname = id + "   " + n.documentName;
                  boundMoreInfo = this.handleMoreinfo.bind(this, selectedCandid, docname, index);
                }
                return (
                  <ListItem key={n.documentName} button={true} style={this.state.indexOfClickedItem === index ? styles.listItemClicked : styles.listItem} to={to} divider={true} onClick={boundMoreInfo} >
                    <ListItemText primary={displayname} />
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
  documents: PropTypes.array.isRequired,
  // onDocuments: PropTypes.func.isRequired,
  handleDocModalOpen: PropTypes.func.isRequired,
};
export default withStyles(styles)(DocumentsList);
