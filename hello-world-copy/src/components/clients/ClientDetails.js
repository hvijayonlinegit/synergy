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
import Audit from '../../common/Audit'
import CardHeader from '../../common/CardDetailsHeader'
const styles = theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
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
		minWidth: 150,
	},
	content: {
		padding: '16px'
	},
});

class ClientDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getInitState();
		this.updateClient = this.updateClient.bind(this);
	}
	getInitState() {
		const { client } = this.props.moreinfo.client
		
		return client ? client : {
			name: '',
			access: '',
			accountOwner: '',
			category: '',
			websiteAddress: '',
			status: '',
			accountCode: '',
			phoneNumber1: '',
			phoneNumber2: '',
			country: '',
			state: '',
			city: '',
			street: '',
			zipCode: '',
			fax: '',
			email1: '',
			email2: '',
			description: '',
			createdBy:'',
			updatedAt:'',
			updatedBy:'',
			createdAt:''
		}
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
				{/* <Loader fullPage loading={true} /> */}

				<MySnackbarContentWrapper
					variant="info"
					className={classes.margin}
					message="There are no Requirements to Show , Please click/add a requirement!"
				/>
			</div>);
		}
		else {
			const selflink = this.props.moreinfo.client._links.self.href
			
			const id = selflink.split('/').pop(-1);
			
			console.log('details' + id);
			return (
				<div className={classes.root}>
					<form className={classes.container} noValidate autoComplete="off">
					
						<Card className={classes.card}>
							<CardContent className={classes.content}>
								<CardHeader title='Client Information' parentMehod={this.updateClient}></CardHeader>
								<TextField
									type="input"
									margin="dense"
									placeholder="Enter Client name"
									name="name"
									label="Name"
									value={this.state.name}
									onChange={this.handleChange('name')}
									required />
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="age-native-helper">Access</InputLabel>
									<NativeSelect
										value={this.state.access}
										onChange={this.handleChange('access')}
										input={<Input name="access" id="age-native-helper" />}
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
								<TextField
									margin="dense"
									placeholder="http://www."
									name="websiteAddress"
									label="Website Address"
									value={this.state.websiteAddress}
									onChange={this.handleChange('websiteAddress')}
								/>
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
									placeholder="Enter Account Code"
									name="accountCode"
									label="Account Code"
									value={this.state.accountCode}
									onChange={this.handleChange('accountCode')}
									required />
								<CardActions>
								</CardActions>
							</CardContent>
						</Card>
						<Card className={classes.card}>
							<CardContent className={classes.content}>
								<CardHeader title='Address Information' parentMehod={this.updateClient}></CardHeader>
								<TextField
									margin="dense"
									placeholder="Enter Phone Number "
									name="phoneNumber1"
									label="Phone Number1 "
									value={this.state.phoneNumber1}
									onChange={this.handleChange('phoneNumber1')}
								/>
								<TextField
									margin="dense"
									placeholder="Enter phone number  2"
									name="phoneNumber2"
									label="Phone Number2"
									value={this.state.phoneNumber2}
									onChange={this.handleChange('phoneNumber2')}
								/>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="country">Country</InputLabel>
									<NativeSelect
										value={this.state.country}
										onChange={this.handleChange('country')}
										input={<Input name="country" id="country" />}
									>
									<option value="0">--Select Country--</option>
									<option value="1">United States</option>
									</NativeSelect>

								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="state">State</InputLabel>
									<NativeSelect
										value={this.state.state}
										onChange={this.handleChange('state')}
										input={<Input name="state" id="state" />}
									>
										<option value="0">--Select State--</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansa</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</NativeSelect>
								</FormControl>
								<TextField
									margin="dense"
									placeholder="Enter city name"
									name="city"
									label="City"
									value={this.state.city}
									onChange={this.handleChange('city')}
								/>
								<TextField
									margin="dense"
									placeholder="Enter street name"
									name="street"
									label="Street"
									value={this.state.street}
									onChange={this.handleChange('street')}
								/>
								<TextField
									margin="dense"
									placeholder="Enter zipCode "
									name="zipCode"
									label="Zipcode"
									value={this.state.zipCode}
									onChange={this.handleChange('zipCode')}
								/>
								<TextField
									margin="dense"
									placeholder="Enter fax "
									name="fax"
									label="Fax"
									value={this.state.fax}
									onChange={this.handleChange('fax')}
								/>
								<TextField
									margin="dense"
									placeholder="Enter email1 "
									name="email1"
									label="Email1"
									value={this.state.email1}
									onChange={this.handleChange('email1')}
								/>
								<TextField
									margin="dense"
									placeholder="Enter email2 "
									name="email2"
									label="Email2"
									value={this.state.email2}
									onChange={this.handleChange('email2')}
								/>
								<CardActions>
								</CardActions>
							</CardContent>
						</Card>
						<Card className={classes.card}>
							<CardContent className={classes.content}>
								<CardHeader title='Description' parentMehod={this.updateClient}></CardHeader>
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
						</Card>
						<Audit createdBy={this.state.createdBy} createdAt={this.state.createdAt} updatedBy={this.state.updatedBy} updatedAt= {this.state.updatedAt}></Audit>
					</form>
				</div>
			);
		}

	}
}

ClientDetails.propTypes = {
	classes: PropTypes.object.isRequired,
	moreinfo: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	editMode: PropTypes.object.isRequired,
	updateClient: PropTypes.func.isRequired,
};

export default withStyles(styles)(ClientDetails);
