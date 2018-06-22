import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/catActions';
import PropTypes from 'prop-types';

class ClientModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			client: {account_name: '', account_type: '', account_address: '', account_phone: '', account_team: ''},
			saving: false

		};

	}

	render() {

		return (
			<Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
					fullWidth = { true }
        >
          <DialogTitle id="alert-dialog-title">{"Add a Client"}</DialogTitle>
          <DialogContent>
							<TextField
               autoFocus
               margin="dense"
							 placeholder="Enter Client name"
               name="account_name"
               label="Name"
               fullWidth
							 defaultValue={ this.props.client.account_name }
							 onChange={ this.props.onChange}
             />
						 <TextField
							margin="dense"
							placeholder="Account Type"
							name="account_type"
							label="Type"
							fullWidth
							defaultValue={ this.props.client.caccount_type }
							onChange={ this.props.onChange}
						/>
						<TextField
						 margin="dense"
						 placeholder="Enter Client Address"
						 name="account_address"
						 label="Address"
						 fullWidth
						 defaultValue={ this.props.client.account_address }
						 onChange={ this.props.onChange}
						 	errorText={ this.state.invalid_url && 'Please enter a valid URL.' }
					 />
						<TextField
							margin="dense"
							label="Phone Number"
							placeholder="210210210121"
							name="account_phone"
							fullWidth
							onChange={ this.props.onChange}
							errorText={ this.state.invalid_url && 'Please enter a valid URL.' }
							defaultValue={ this.props.client.account_phone } />
						<TextField
							margin="dense"
							label="Team"
							placeholder="Synergy"
							name="account_team"
							fullWidth
							onChange={ this.props.onChange}
							errorText={ this.state.invalid_url && 'Please enter a valid URL.' }
							defaultValue={ this.props.client.account_team } />

          </DialogContent>
          <DialogActions>
						<Button
							color="primary"
							onClick={ this.props.close }
						>Cancel </Button>
						<Button
							color="primary"
							
							onClick={this.props.onSave}> Submit </Button>
          </DialogActions>
        </Dialog>
		)
	}

}
ClientModal.propTypes = {
  client: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withMobileDialog() (ClientModal);
