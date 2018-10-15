import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
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
const styles = theme => ({
    root: {
        width: '100%',
        overflowY:'auto',
        maxHeight: '34vh',
        minHeight: '34vh',
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
    width: 200,
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
  card: {
    border: '1px solid lightgrey',
    width: '100%',
    boxShadow: 'none',
    marginBottom: '10px'
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
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

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
    
      if(isEmpty(this.props.candidate)){
        return (
          <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="There are no Candidate details  to Show , Please add a candidate!"
        />
        );
      }
      else{
        return (
            <div className={classes.root}>
              <form className={classes.container} noValidate autoComplete="off">
              {/* <h4 className={classes.header}>requirement Details: </h4> */}
              <Card className={classes.card}>
               {/* <CardHeader className={classes.hoverEle}  subheader="Client Information" 
                  > 
                
                 </CardHeader> */}
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                    Candidate Info
                </Typography>
                  <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter Client name"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.firstName }
                      onChange={this.props.onChange}
                      required />
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter middleName"
                      name="middleName"
                      label="Middle Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.middleName }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.lastName }
                      onChange={this.props.onChange}
                       />
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter emailAddress"
                      name="emailAddress"
                      label="Email"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.emailAddress }
                      onChange={this.props.onChange}
                      required
                       />
                        <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter mobileNumber"
                      name="mobileNumber"
                      label="Mobile Number"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.mobileNumber }
                      onChange={this.props.onChange}
                      
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.phoneNumber }
                      onChange={this.props.onChange}
                      
                       />
                       <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="country">Country</InputLabel>
					   <NativeSelect
						  value = { this.props.candidate.country }
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
						 value = { this.props.candidate.state }
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
					
					 <TextField InputLabelProps={{ shrink: true }} 
					 margin="dense"
					 placeholder="Enter city name"
					 name="city"
					 label="City"
					 
					 
					 value = { this.props.candidate.city }
					 onChange={ this.props.onChange}
					  />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter address"
                      name="address"
                      label="Address"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.address }
                      onChange={this.props.onChange}
                      
                       />
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter preferredLocation1"
                      name="preferredLocation1"
                      label="Preferred Location1 "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.preferredLocation1 }
                      onChange={this.props.onChange}
                      
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter preferredLocation2"
                      name="preferredLocation2"
                      label="Preferred Location2 "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.preferredLocation2 }
                      onChange={this.props.onChange}
                      
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter zipCode"
                      name="zipCode"
                      label="Zip Code "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.zipCode }
                      onChange={this.props.onChange}
                      
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter skypeId"
                      name="skypeId"
                      label="Skype Id  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.skypeId }
                      onChange={this.props.onChange}
                      
                       />
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter linkedinUrl"
                      name="linkedinUrl"
                      label="Linkedin Id  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.linkedinUrl }
                      onChange={this.props.onChange}
                      
                       />
                    <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                Additional Information
                </Typography>
                <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="sourceFrom">Sourced From</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.sourceFrom }
                          onChange={this.props.onChange}
                          input={<Input name="sourceFrom" id="sourceFrom" />}
                        >
							<option value="0">--Select--</option>
							<option value="ip">Imported By Parser</option>
							<option value="ir">Internal Referral</option>
							<option value="jc">Career Site</option>
							<option value="jcb">CareerBuilder</option>
							<option value="jd">Dice</option>
							<option value="ji">Indeed</option>
							<option value="jm">Monster</option>
							<option value="jn">Naukri</option>
							<option value="jt">Times Job</option>
							<option value="jtf"> TechFetch</option>
							<option value="mr">Mail response to Requirement List</option>
							<option value="na">N/A</option>
							<option value="or">Other</option>
							<option value="rb">Referred By</option>
							<option value="ss">Sub-contractors</option>
							<option value="vd">Vendor</option>

                        </NativeSelect>
                       
                      </FormControl>
                  <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter sourceInfo"
                      name="sourceInfo"
                      label="Source Information "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.sourceInfo }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter sourcing"
                      name="sourcing"
                      label="Sourcing "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.sourcing }
                      onChange={this.props.onChange}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="sourceBy">Sourced By</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.sourceBy }
                          onChange={this.props.onChange}
                          input={<Input name="sourceBy" id="sourceBy" />}
                        >
							<option value="0">--Select--</option>
							<option value="4985">Rahul Akkisetti</option>
							<option value="4984">Umakanth</option>
							<option value="4942"> Meghan Breen</option>
							<option value="4941">Francis</option>
							<option value="4940">Ravi Thonger</option>
							<option value="4939">Srinivas</option>
							<option value="4938"> Sri Bollampally</option>
							<option value="4937">Raj Nettem</option>
							<option value="4936">Asha Richards</option>
							<option value="4935">Admin Admin</option>

                        </NativeSelect>
                       
                      </FormControl>
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter availableFrom"
                      name="availableFrom"
                      label="Available From "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.availableFrom }
                      onChange={this.props.onChange}
                       />
                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="noticePeriod">Notice Period</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.noticePeriod }
                          onChange={this.props.onChange}
                          input={<Input name="noticePeriod" id="noticePeriod" />}
                        >
							<option value="-1">--Select--</option>
							<option value="I">Immediate</option>
							<option value="1W">1 Week</option>
							<option value="2W">2 Weeks</option>
							<option value="1M">1 Month</option>
							<option value="C">Custom</option>

                        </NativeSelect>
                       
                      </FormControl>
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter fax"
                      name="fax"
                      label="Fax"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.fax }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter licenseNumber"
                      name="licenseNumber"
                      label="License No"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.licenseNumber }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter passportNumber"
                      name="passportNumber"
                      label="Passport No"
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.passportNumber }
                      onChange={this.props.onChange}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="visaStatus">Visa Status</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.visaStatus }
                          onChange={this.props.onChange}
                          input={<Input name="visaStatus" id="visaStatus" />}
                        >
                          <option value="0">--Select--</option>
                          <option value="CP">CPT</option>
                          <option value="EA">EAD</option>
                          <option value="GE">GC-EAD</option>
                          <option value="GC">Green Card Holder</option>
                          <option value="H1">H1B</option>
                          <option value="OP">OPT</option>
                          <option value="US">US Citizen</option>
                          <option value="-1">Other</option>

                        </NativeSelect>
                       
                      </FormControl>
                      <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter dateOfBirth"
                      name="dateOfBirth"
                      label="Date of Birth "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.dateOfBirth }
                      onChange={this.props.onChange}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="candidateStatus">Candidate Status</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.candidateStatus }
                          onChange={this.props.onChange}
                          input={<Input name="candidateStatus" id="candidateStatus" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                     
                     
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                	Personal Information
                </Typography>
                <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="gender" shrink>Gender</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.gender }
                          onChange={this.props.onChange}
                          input={<Input name="gender" id="gender" />}
                        >
						<option value="">--Select--</option>
						<option value="Female">Female</option>
						<option value="Male">Male</option>

                        </NativeSelect>
                       
                      </FormControl>
                  <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter fatherName"
                      name="fatherName"
                      label="Father Name "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.fatherName }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter motherName"
                      name="motherName"
                      label="Mother Name "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.motherName }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter nationality"
                      name="nationality"
                      label="Nationality  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.nationality }
                      onChange={this.props.onChange}
                       />
                       <TextField InputLabelProps={{ shrink: true }} 
                      margin="dense"
                      placeholder="Enter hobbies"
                      name="hobbies"
                      label="Hobbies  "
                      fullWidth
                      className={classes.textField}
                      value = { this.props.candidate.hobbies }
                      onChange={this.props.onChange}
                       />
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="maritalStatus" shrink>Marital Status</InputLabel>
                        <NativeSelect
                          value={ this.props.candidate.maritalStatus }
                          onChange={this.props.onChange}
                          input={<Input name="maritalStatus" id="maritalStatus" />}
                        >
                      <option value="">--Select--</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Divorced">Divorced</option>

                        </NativeSelect>
                       
                      </FormControl>
                      
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
             
              </form>
             </div>
            );
      }
    
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  candidate: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
