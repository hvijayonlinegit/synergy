import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';

class ClientModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
				fullWidth={true}
			>
				<DialogTitle id="alert-dialog-title">{"Add a Candidate"}</DialogTitle>
				<DialogContent>
				<TextField
						autoFocus
						margin="dense"
						disabled= "true"
						name="id"
						label="Account Id "
						fullWidth
						defaultValue={this.props.candidate.requirement_id}
						onChange={this.props.onChange}
					/>
				<TextField
						autoFocus
						margin="dense"
						placeholder="Enter First Name"
						name="firstname"
						label="First Name"
						fullWidth
						defaultValue={this.props.candidate.firstname}
						onChange={this.props.onChange}
					/>
					<TextField
						margin="dense"
						placeholder="Last Name"
						name="lastname"
						label="Last Name"
						fullWidth
						defaultValue={this.props.candidate.lastname}
						onChange={this.props.onChange}
					/>
					<TextField
						margin="dense"
						//placeholder="Enter Client Address"
						name="phonenumber"
						label="Phone Number"
						fullWidth
						defaultValue={this.props.candidate.phonenumber}
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
					/>
					<TextField
						margin="dense"
						label="Email"
						name="emailaddress"
						fullWidth
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.emailaddress} />
					<TextField
						margin="dense"
						label="Overall Experience"
						placeholder="overallexperience"
						name="overallexperience"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.overallexperience} />
					<TextField
						margin="dense"
						label="Relevant Experience"
						placeholder="relevantexperience"
						name="relevantexperience"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.relevantexperience} />
					<TextField
						margin="dense"
						label="Working Status"
						placeholder="workingstatus"
						name="workingstatus"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.workingstatus} />
					<TextField
						margin="dense"
						label="Strengths"
						placeholder="strengths"
						name="strengths"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.strengths} />
					<TextField
						margin="dense"
						label="Avaiability For Interview"
						placeholder="avaiabilityforinterview"
						name="avaiabilityforinterview"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.avaiabilityforinterview} />
					<TextField
						margin="dense"
						label="Availability To Join"
						placeholder="availability to join"
						name="availabilitytojoin"
						fullWidth
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.availabilitytojoin} />
					<TextField
						margin="dense"
						label="Status"
						placeholder="status"
						name="status"
						fullWidth
						onChange={this.props.onChange}
						//errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.status} />
					<TextField
						margin="dense"
						label="Reason"
						placeholder="reason"
						name="reason"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.reason} />
					<TextField
						margin="dense"
						label="Linkedin Url"
						placeholder="linkedinurl"
						name="linkedinurl"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.linkedinurl} />
					<TextField
						margin="dense"
						label="Referrences"
						placeholder="referrences"
						name="referrences"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.referrences} />
					<TextField
						margin="dense"
						label="Vendor Name"
						placeholder="vendorname"
						name="vendorname"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.vendorname} />
					<TextField
						margin="dense"
						label="Vendor Contact"
						placeholder="vendorcontact"
						name="vendorcontact"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.vendorcontact} />
					<TextField
						margin="dense"
						label="Vendor Phone"
						placeholder="vendorphone"
						name="vendorphone"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.vendorphone} />
					<TextField
						margin="dense"
						label="Vendor Email"
						placeholder="vendoremail"
						name="vendoremail"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.vendoremail} />

					<TextField
						margin="dense"
						label="Referred By"
						placeholder="referredby"
						name="referredby"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.referredby} />
					<TextField
						margin="dense"
						label="Primary Skills"
						placeholder="primaryskills"
						name="primaryskills"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.primaryskills} />
					<TextField
						margin="dense"
						label="Secondary Skills"
						placeholder="secondaryskills"
						name="secondaryskills"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.secondaryskills} />
					<TextField
						margin="dense"
						label="Docs Uploaded ?"
						placeholder="docsuploaded"
						name="docsuploaded"
						fullWidth
						onChange={this.props.onChange}
						////errorText={this.state.invalid_url && 'Please enter a valid URL.'}
						defaultValue={this.props.candidate.docsuploaded} />


				</DialogContent>
				<DialogActions>
					<Button
						color="primary"
						onClick={this.props.close}
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
	candidate: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};
export default withMobileDialog()(ClientModal);
