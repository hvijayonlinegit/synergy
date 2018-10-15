import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Save from '@material-ui/icons/Save';
// import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import MySnackbarContentWrapper from '../../common/MySnackContent';
//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        overflowY:'auto',
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
      '&:hover':{
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
    '&::after':  {
      marginTop: '2px',
      borderTop: '2px solid #698591',
      display: 'block',
      width: '30px',
      content: '""'
    },
},
});



class TextFields extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			//client: this.props.moreinfo.client,
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
    
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
      }
    
      if(isEmpty(this.props.moreinfo.client.requirements)){
        return (<div>
           {/* <Loader fullPage loading={true} /> */}

          <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="There are no Requirements to Show , Please click/add a requirement!"
        />
           </div>);
      }
      else{
        const selflink= this.props.moreinfo.client._links.self.href
        const id = selflink.split('/').pop(-1);
        console.log('details' +id);
        return (
            <div className={classes.root}>
              <form className={classes.container} noValidate autoComplete="off">
             
              <Card className={classes.card}>
			  {/* <CardHeader className={classes.hoverEle}  subheader="Client Information" 
				 > 
			   
				</CardHeader> */}
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
          //defaultValue={this.state.client.name}
					value={this.props.moreinfo.client.name}
					onChange={this.props.onChange}
					required />
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-native-helper">Access</InputLabel>
					<NativeSelect
						//value={ this.props.moreinfo.client.name }
						value={this.props.moreinfo.client.access}
						onChange={this.props.onChange}
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
						 value={this.props.moreinfo.client.accountOwner}
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
						 value={this.props.moreinfo.client.category}
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
					 
					 
					 value={ this.props.moreinfo.client.websiteAddress }
					 onChange={ this.props.onChange}
					  />
					
					  <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="status" shrink>Status</InputLabel>
					   <NativeSelect
						 value={ this.props.moreinfo.client.status }
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
					 
					 
					 value = { this.props.moreinfo.client.accountCode }
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
					 
					 
					 value = { this.props.moreinfo.client.phoneNumber1 }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter phone number  2"
					 name="phoneNumber2"
					 label="Phone Number2"
					 
					 
					 value = { this.props.moreinfo.client.phoneNumber2 }
					 onChange={ this.props.onChange}
					  />
					 <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="country">Country</InputLabel>
					   <NativeSelect
						  value = { this.props.moreinfo.client.country }
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
						 value = { this.props.moreinfo.client.state }
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
					 
					 
					 value = { this.props.moreinfo.client.city }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter street name"
					 name="street"
					 label="Street"
					 
					 value = { this.props.moreinfo.client.street }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter zipCode "
					 name="zipCode"
					 label="Zipcode"
					 
					 value = { this.props.moreinfo.client.zipCode }
					 onChange={ this.props.onChange}
					  />
					 <TextField
					 margin="dense"
					 placeholder="Enter fax "
					 name="fax"
					 label="Fax"
					 
					 
					 value = { this.props.moreinfo.client.fax }
					 onChange={ this.props.onChange}
					  />
					  <TextField
					 margin="dense"
					 placeholder="Enter email1 "
					 name="email1"
					 label="Email1"
					 
					 
					 value = { this.props.moreinfo.client.email1 }
					 onChange={ this.props.onChange}
					  />
					  <TextField
					 margin="dense"
					 placeholder="Enter email2 "
					 name="email2"
					 label="Email2"
					 
					 
					 value = { this.props.moreinfo.client.email2 }
					 onChange={ this.props.onChange}
					  />
				 <CardActions>
				 </CardActions>
			   </CardContent>
			 </Card>
			 <Card className={classes.card}>
			  {/* <CardHeader subheader="Description"
				 > 
			   
				</CardHeader> */}
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
					   value = { this.props.moreinfo.client.description }
					 onChange={ this.props.onChange}
					 />
				 <CardActions>
				 </CardActions>
			   </CardContent>
			 </Card>
              {/* <div className={classes.padder}>
             
              <TextField
                     margin="dense"
                     placeholder="Enter Client name"
                     name="account_name"
                     label="Account Name"
                     fullWidth
                     className={classes.textField}
                     value = { this.props.moreinfo.client.name }
                     onChange={ this.handleChange('name')}
                     required />
                
                
                <TextField
                        id="name"
                        label="phone"
                        className={classes.textField}
                        value={ this.props.moreinfo.client.phone }
                        onChange={ this.handleChange('name')} 
                        margin="normal"
                    />
                
                <TextField
                     margin="dense"
                     placeholder="Enter Client type"
                     name="account_type"
                     label="address"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.moreinfo.client.address }
                     onChange={ this.handleChange('name')} />
                    
                    <TextField
                     margin="dense"
                     placeholder="Enter Client team"
                     name="account_team"
                     label="Team"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.moreinfo.client.team }
                     onChange={ this.handleChange('name')}  />
                    <TextField
                     margin="dense"
                     placeholder="Enter Client Address"
                     name="account_address"
                     label="type"
                     fullWidth
                     className={classes.textField}
                     value={ this.props.moreinfo.client.type }
                     onChange={ this.handleChange('name')}  />
                     
               </div> */}
               {/* <Button variant="contained"  className={classes.button}>
                            Update
                    </Button>
                    <Button variant="contained" size="small" className={classes.button}>
                            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                            Save
                        </Button> */}
              </form>
                {/* <Button variant="contained" value= {id } className={classes.button} onClick={() => this.props.handleReqModalOpen(id)}>
                  Add requirement
                </Button> */}
             </div>
            );
      }
    
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  moreinfo: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
 
};

export default withStyles(styles)(TextFields);
