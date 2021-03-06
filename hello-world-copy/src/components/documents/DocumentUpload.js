import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUploadIcon from '@material-ui/icons/CloudUploadSharp';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
     button: {
      margin: theme.spacing.unit,
    },
    lightTooltip: {
      background: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  });
  
class DocumentUpload extends React.Component {
  
  render() {
    const {classes} = this.props;
    return (
      <form  onSubmit={(event) => 
        this.props.onUpload(event, this.props.selectedCandlink
        )}>
        <TextField type="file" multiple required mini onChange={this.props.onFilechange}></TextField>
        <Tooltip  title="Upload Document" classes={{ tooltip: classes.lightTooltip }}>
          <Button type="submit" variant="fab" mini color="primary" aria-label="Upload" className={classes.button} >
            <FileUploadIcon />
          </Button>
        </Tooltip>
      </form>
   )
  }
}
DocumentUpload.propTypes = {
    onUpload:PropTypes.func.isRequired,
    onFilechange:PropTypes.func.isRequired,
    selectedCandlink:PropTypes.object.isRequired
  };
export default withStyles(styles)(DocumentUpload)