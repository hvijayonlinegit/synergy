import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DocumentUpload from './DocumentUpload'
import PropTypes from 'prop-types';
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
    maxHeight: '32vh',
    minHeight: '32vh',
    display: 'flex',
    flexWrap: 'wrap',

  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  menu: {
    width: 200,
  },

  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    marginLeft: '1px',
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#1976d2',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  header: {
    width: '100%',
    backgroundColor: 'aliceblue',
    padding: '20px',
  },
  padder: {
    paddingLeft: '10px',
  },
  float: {
    float: 'right'
  },
  card: {
    border: '1px solid lightgrey',
    width: '100%',
    boxShadow: 'none',
    marginBottom: '10px'
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  content: {
    padding: '16px'
  },
  afterEle: {
    '&::after': {
      marginTop: '2px',
      borderTop: '2px solid #698591',
      display: 'block',
      width: '30px',
      content: '""'
    },
  },

});
class DocumentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      document: {
        name: '',
        type: '',
        issueDate: '',
        expiryDate: '',
        attachedBy: '',
        updatedBY: '',
        documentOwner: '',
        notes: ''
      }
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">{"Add a Document"}</DialogTitle>
        <DialogContent>
          <Card className={classes.card}>
            {/* <CardHeader className={classes.hoverEle}  subheader="Client Information" 
                  > 
                
                 </CardHeader> */}
            <CardContent className={classes.content}>
              <Typography className={classes.afterEle} variant="body1" gutterBottom>
                document Info
                </Typography>
              <TextField
                margin="dense"
                placeholder="Enter Client name"
                name="name"
                label="name"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.name}
                onChange={this.props.onChange}
                required />
              <TextField
                margin="dense"
                placeholder="Enter middleName"
                name="type"
                label="type"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.type}
                onChange={this.props.onChange}
              />
              <TextField
                margin="dense"
                placeholder="Enter lastName"
                name="issueDate"
                label="issueDate"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.issueDate}
                onChange={this.props.onChange}
              />
              <TextField
                margin="dense"
                placeholder="Enter emailAddress"
                name="expiryDate"
                label="expiryDate"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.expiryDate}
                onChange={this.props.onChange}
                required
              />
              <TextField
                margin="dense"
                placeholder="Enter mobileNumber"
                name="attachedBy"
                label="attachedBy"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.attachedBy}
                onChange={this.props.onChange}

              />
              <TextField
                margin="dense"
                placeholder="Enter phoneNumber"
                name="updatedBY"
                label="updatedBY"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.updatedBY}
                onChange={this.props.onChange}

              />


              <TextField
                margin="dense"
                placeholder="Enter city name"
                name="documentOwner"
                label="documentOwner"


                defaultValue={this.props.document.documentOwner}
                onChange={this.props.onChange}
              />
              <TextField
                margin="dense"
                placeholder="Enter address"
                name="notes"
                label="notes"
                fullWidth
                className={classes.textField}
                defaultValue={this.props.document.notes}
                onChange={this.props.onChange}

              />
              <TextField type="file" multiple required mini onChange={this.props.onFilechange}></TextField>
              
              <CardActions>
              </CardActions>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={this.props.close}
          >Cancel </Button>
          <Button
            color="primary"
            onClick={this.props.onUpload}> Submit </Button>
        </DialogActions>
      </Dialog>
    )
  }

}
DocumentModal.propTypes = {
  document: PropTypes.object.isRequired,
  onUpload: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFilechange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DocumentModal);
