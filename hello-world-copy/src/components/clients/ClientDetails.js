import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import MySnackbarContentWrapper from '../../common/MySnackContent';
import 'react-overlay-loader/styles.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import Audit from '../../common/Audit'
import CardHeader from '../../common/CardDetailsHeader'
import Model from '../../common/model'
const styles = theme => ({
	root: {
		width: '100%',
		overflowY: 'auto',
		maxHeight: '35vh',
		minHeight: '35vh',
		display: 'flex',
		flexWrap: 'wrap',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: theme.spacing.unit * 1,
	},
	card: {
		border: '1px solid lightgrey',
		width: '100%',
		boxShadow: 'none',
		marginBottom: '10px'
	},

	formControl: {
		margin: theme.spacing.unit,
		minWidth: 70
	},
	formControlState:{
		margin: theme.spacing.unit,
		minWidth: 50,
	},
	textFieldMax: {
		margin: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 150,
	  },
	  textFieldEmail: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	  },
	textField: {
		margin: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 100,
	  },
	  textFieldMin: {
		margin: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 80,
	  },
	  adorment: {
		  marginRight: '0'
	  },
	  customselect: {
		  paddingTop: '1px'
	  }
});

class ClientDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getInitState();
		this.updateClient = this.updateClient.bind(this);
	}
	getInitState() {
		const { client } = this.props.moreinfo.client
		return client ? client : Model.client
	}
	componentWillReceiveProps(_nextProps) {
		console.log(_nextProps);
		this.setState({
			..._nextProps.moreinfo.client
		})
	}
	handleChange = name => ({ target: { value } }) =>
		this.setState({
			[name]: value
		})

	updateClient(){
		// get client id
		const id = this.state._links.self.href.split('/').pop(-1);
		//remove unwanted properties from object for update call
		const { 'requirements': parentValue, ...clientwithoutrreq } = this.state;
		const { '_links': parentValue1, ...clientwithoutlinks } = clientwithoutrreq;
		//make a action call to update data in db
		this.props.updateClient(clientwithoutlinks,id);
	}
	render() {
		const { classes } = this.props;
		function isEmpty(obj) {
			return Object.keys(obj).length === 0;
		}

		if (isEmpty(this.props.moreinfo.client)) {
			return (<div>
				<MySnackbarContentWrapper
					variant="info"
					className={classes.margin}
					message="There are no Requirements to Show , Please click/add a requirement!"
				/>
			</div>);
		}
		else {
			return (
				<div className={classes.root}>
					<form className={classes.container} noValidate autoComplete="off">
						<Card className={classes.card}>
							<CardContent >
								<CardHeader parentMehod={this.updateClient}></CardHeader>
								<TextField InputLabelProps={{ shrink: true }}
									margin="dense"
									placeholder="Enter Client name"
									name="name"
									label="Name"
									value={this.state.name}
									onChange={this.handleChange('name')}
									required
									className={classes.textFieldMax}
									
									 />
								<TextField
									margin="dense"
									placeholder="Enter Account Code"
									name="accountCode"
									label="Acct Cd"
									value={this.state.accountCode}
									onChange={this.handleChange('accountCode')}
									required
									className={classes.textFieldMin}
									 />
								<FormControl className={classes.formControl} >
									<InputLabel htmlFor="age-native-helper">Access</InputLabel>
									<NativeSelect
										value={this.state.access}
										onChange={this.handleChange('access')}
										input={<Input name="access" id="age-native-helper"  />}
										className={classes.customselect}
									>
										<option value="--select--">-- select --</option>
										<option value="MyTeam">My Team</option>
										<option value="Private">Private</option>
										<option value="Public">Public</option>
									</NativeSelect>
								</FormControl>
								<FormControl required className={classes.formControl}>
									<InputLabel htmlFor="name-readonly">Account Owner</InputLabel>
									<NativeSelect
										value={this.state.accountOwner}
										defaultValue="4942"
										onChange={this.handleChange('accountOwner')}
										input={<Input name="accountOwner" id="accountOwner" />}
									>
										<option value="--select--">--Select--</option>
										<option value="4942"> Meghan Breen</option>
										<option value="4938"> Sri Bollampally</option>
										<option value="4935">Admin Admin</option>
										<option value="4936">Asha Richards</option>
										<option value="4937">Raj Nettem</option>
									</NativeSelect>
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="category">Category</InputLabel>
									<NativeSelect
										value={this.state.category}
										onChange={this.handleChange('category')}
										input={<Input name="category" id="category" />}
									>
										<option value="0">--Select--</option>
										<option value="cl">Client</option>
										<option value="HV">Hotlist-Vendor</option>
										<option value="im">Implementer</option>
										<option value="sc">Sub-Contract</option>
										<option value="CV">Supplier</option>
										<option value="ve">Vendor</option>
									</NativeSelect>

								</FormControl>
								{/* <TextField
									margin="dense"
									placeholder="Enter city name"
									name="city"
									label="Location"
									value={this.state.city}
									onChange={this.handleChange('city')}
									multiline
									rowsMax="1"
									className={classes.textField}
								/> */}
								
								
								
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="status" shrink>Status</InputLabel>
									<NativeSelect
										value={this.state.status}
										onChange={this.handleChange('status')}
										input={<Input name="status" id="status" />}
									>
									<option value="ac">Active</option>
									<option value="ba">Bad Account</option>
									<option value="cp">Contract Pending</option>
									<option value="ia">In-Active</option>
									<option value="ld">Lead</option>
									</NativeSelect>
								</FormControl>
								
								
								<TextField
									margin="dense"
									InputProps={{
										startAdornment: <InputAdornment  className={classes.adorment} position="start">http://www.</InputAdornment>,
										// endAdornment: <InputAdornment position="end">.com</InputAdornment>,
									  }}
									name="websiteAddress"
									label="Website Address"
									value={this.state.websiteAddress}
									onChange={this.handleChange('websiteAddress')}
									className={classes.textFieldMax}
								/>
								<TextField
									margin="dense"
									placeholder="Enter email1 "
									name="email1"
									label="Email1"
									value={this.state.email1}
									onChange={this.handleChange('email1')}
									className={classes.textFieldEmail}
								/>
								<TextField
									margin="dense"
									placeholder="Enter email2 "
									name="email2"
									label="Email2"
									value={this.state.email2}
									onChange={this.handleChange('email2')}
									className={classes.textFieldEmail}
								/>
								<TextField
									margin="dense"
									placeholder="Enter Phone Number "
									name="phoneNumber1"
									label="Pri. Phone# "
									value={this.state.phoneNumber1}
									onChange={this.handleChange('phoneNumber1')}
									className={classes.textField}
								/>
								{/* <TextField
									margin="dense"
									placeholder="Enter phone number  2"
									name="phoneNumber2"
									label="Sec. Phone#"
									value={this.state.phoneNumber2}
									onChange={this.handleChange('phoneNumber2')}
									className={classes.textField}
								/> */}
								<TextField
									margin="dense"
									placeholder="Enter fax "
									name="fax"
									label="Fax"
									value={this.state.fax}
									onChange={this.handleChange('fax')}
									className={classes.textField}
								/>
								{/* <FormControl className={classes.formControl}>
									<InputLabel htmlFor="country">Country</InputLabel>
									<NativeSelect
										value={this.state.country}
										onChange={this.handleChange('country')}
										input={<Input name="country" id="country" />}
									>
									<option value="0">--Select Country--</option>
									<option value="1">United States</option>
									</NativeSelect>

								</FormControl> */}
								
								<TextField
									margin="dense"
									placeholder="Enter street name"
									name="street"
									label="Street"
									value={this.state.street}
									onChange={this.handleChange('street')}
									className={classes.textFieldMax}
								/>
								<TextField
									margin="dense"
									placeholder="Enter city name"
									name="city"
									label="City"
									value={this.state.city}
									onChange={this.handleChange('city')}
									className={classes.textField}
								/>
								<FormControl className={classes.formControlState}>
									<InputLabel htmlFor="state">State</InputLabel>
									<NativeSelect
										value={this.state.state}
										onChange={this.handleChange('state')}
										input={<Input name="state" id="state" />}
									>
										<option value="0">-- select --</option>
										<option value="AL">AL</option>
										<option value="AK">AK</option>
										<option value="AZ">AZ</option>
										<option value="AR">AR</option>
										<option value="CA">CA</option>
										<option value="CO">CO</option>
										<option value="CT">CT</option>
										<option value="DE">DE</option>
										<option value="DC">DC</option>
										<option value="FL">FL</option>
										<option value="GA">GA</option>
										<option value="HI">HI</option>
										<option value="ID">ID</option>
										<option value="IL">IL</option>
										<option value="IN">IN</option>
										<option value="IA">IA</option>
										<option value="KS">KS</option>
										<option value="KY">KY</option>
										<option value="LA">LA</option>
										<option value="MD">MD</option>
										<option value="MA">MA</option>
										<option value="MI">MI</option>
										<option value="MN">MN</option>
										<option value="MS">MS</option>
										<option value="MO">MO</option>
										<option value="MT">MT</option>
										<option value="NE">NE</option>
										<option value="NV">NV</option>
										<option value="NH">NH</option>
										<option value="NJ">NJ</option>
										<option value="NM">NM</option>
										<option value="NY">NY</option>
										<option value="NC">NC</option>
										<option value="ND">ND</option>
										<option value="OH">OH</option>
										<option value="OK">OK</option>
										<option value="OR">OR</option>
										<option value="PA">PA</option>
										<option value="RI">RI</option>
										<option value="SC">SC</option>
										<option value="SD">SD</option>
										<option value="TN">TN</option>
										<option value="TX">TX</option>
										<option value="UT">UT</option>
										<option value="VT">VT</option>
										<option value="VA">VA</option>
										<option value="WA">WA</option>
										<option value="WV">WV</option>
										<option value="WI">WI</option>
										<option value="WY">WY</option>
									</NativeSelect>
								</FormControl>
								
								<TextField
									margin="dense"
									placeholder="Enter zipCode "
									name="zipCode"
									label="Zipcode"
									value={this.state.zipCode}
									onChange={this.handleChange('zipCode')}
									className={classes.textFieldMin}
								/>
								
								
								<TextField
									id="multiline-static"
									multiline
									rows="4"
									label="Description"
									margin="normal"
									fullWidth
									name="description"
									value={this.state.description}
									onChange={this.handleChange('description')}
								/>
								
								<CardActions>
								</CardActions>
							</CardContent>
						</Card>
						{/* <Card className={classes.card}>
							<CardContent className={classes.content}>
								<CardHeader title='Description' ></CardHeader>
								<TextField
									id="multiline-static"
									multiline
									rows="4"
									margin="normal"
									fullWidth
									name="description"
									value={this.state.description}
									onChange={this.handleChange('description')}
								/>
								<CardActions>
								</CardActions>
							</CardContent>
						</Card> */}
						<Audit createdBy={this.state.createdBy} createdAt={this.state.createdAt} updatedBy={this.state.updatedBy} updatedAt= {this.state.updatedAt}></Audit>
					</form>
				</div>
			);
		}

	}
}

ClientDetails.propTypes = {
	classes: PropTypes.object.isRequired,
	moreinfo: PropTypes.any.isRequired,
	editMode: PropTypes.bool.isRequired,
	updateClient: PropTypes.func.isRequired,
};

export default withStyles(styles)(ClientDetails);
