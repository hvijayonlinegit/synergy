import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
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
  afterEle: {
    '&::after':  {
      marginTop: '2px',
      borderTop: '2px solid #698591',
      display: 'block',
      width: '30px',
      content: '""'
    },
},

});

class ClientInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			client: {
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
				zipCode: 0,
				fax: 0,
				email1: '',
				email2: '',
				description: ''
			  },
			saving: false
		};

	}
	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	  };
	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off">
			 <Card className={classes.card}>
			   <CardContent className={classes.content}>
			   <Typography className={classes.afterEle}variant="body1" gutterBottom>
				   Client Information
			   </Typography>
				<TextField
					autoFocus
					margin="dense"
					placeholder="Enter Client name"
					name="name"
					label="Name"
					defaultValue={this.props.client.name}
					onChange={this.props.onChange}
					required />
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-native-helper">Access</InputLabel>
					<NativeSelect
						defaultValue={this.props.client.access}
						onChange={this.props.onChange}
						input={<Input name="access" id="age-native-helper" />}
					>
						<option value="--select--">-- select --</option>
						<option value="myTeam">My Team</option>
						<option value="Private">Private</option>
						<option value="public">Public</option>
					</NativeSelect>
				</FormControl>
					 <FormControl required className={classes.formControl}>
					   <InputLabel htmlFor="name-readonly">Account Owner</InputLabel>
					   <NativeSelect
						 defaultValue={this.props.client.accountOwner}
						 onChange={this.props.onChange}
						 input={<Input name="accountOwner" id="accountOwner" />}
					   >
					   <option  value="--select--">--Select--</option>
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
						 defaultValue={this.props.client.category}
						 onChange={this.props.onChange}
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
					 defaultValue={ this.props.client.websiteAddress }
					 onChange={ this.props.onChange}
					  />
					  <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="status">Status</InputLabel>
					   <NativeSelect
						 defaultValue={ this.props.client.status }
						 onChange={ this.props.onChange}
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
					 defaultValue = { this.props.client.accountCode }
					 onChange={ this.props.onChange}
					 required />
				 <CardActions>
				 </CardActions>
			   </CardContent>
			 </Card>
			 <Card className={classes.card}>
			   <CardContent className={classes.content}>
			   <Typography className={classes.afterEle}variant="body1" gutterBottom>
			   Address Information
			   </Typography>
				 <TextField
					 margin="dense"
					 placeholder="Enter Phone Number "
					 name="phoneNumber1"
					 label="Phone Number1 "
					 defaultValue = { this.props.client.phoneNumber1 }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter phone number  2"
					 name="phoneNumber2"
					 label="Phone Number2"
					 defaultValue = { this.props.client.phoneNumber2 }
					 onChange={ this.props.onChange}
					  />
					 <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="country">Country</InputLabel>
					   <NativeSelect
						  defaultValue = { this.props.client.country }
						 onChange={ this.props.onChange}
						 input={<Input name="country" id="country" />}
					   >
					  	<option value="0">--Select Country--</option>
						<option value="1">United States</option>
					   </NativeSelect>
					  
					 </FormControl>
					 <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="state">State</InputLabel>
					   <NativeSelect
						 defaultValue = { this.props.client.state }
						 onChange={ this.props.onChange}
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
					 defaultValue = { this.props.client.city }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter street name"
					 name="street"
					 label="Street"
					 defaultValue = { this.props.client.street }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter zipCode "
					 name="zipCode"
					 label="Zipcode"
					 defaultValue = { this.props.client.zipCode }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter fax "
					 name="fax"
					 label="Fax"
					 defaultValue = { this.props.client.fax }
					 onChange={ this.props.onChange}
					  />
					  <TextField
					 margin="dense"
					 placeholder="Enter email1 "
					 name="email1"
					 label="Email1"
					 defaultValue = { this.props.client.email1 }
					 onChange={ this.props.onChange}
					  />
					  <TextField
					 margin="dense"
					 placeholder="Enter email2 "
					 name="email2"
					 label="Email2"
					 defaultValue = { this.props.client.email2 }
					 onChange={ this.props.onChange}
					  />
				 <CardActions>
				 </CardActions>
			   </CardContent>
			 </Card>
			 <Card className={classes.card}>
			   <CardContent className={classes.content}>
			   <Typography className={classes.afterEle}variant="body1" gutterBottom>
			   Description
			   </Typography>
					  <TextField
					   id="multiline-static"
					   multiline
					   rows="4"
					   margin="normal"
					   fullWidth
					   name="description"
					   defaultValue = { this.props.client.description }
					 onChange={ this.props.onChange}
					 />
				 <CardActions>
				 </CardActions>
			   </CardContent>
			 </Card>
			 </form>
		)
	}
}
ClientInputForm.propTypes = {
	fullScreen: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	client: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ClientInputForm);
