import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

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
class ClientModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			saving: false,
			requirement:{
				access: '',
				accountOwner: '',
				billRate: 0,
				briefDescription: '',
				category: '',
				city: '',
				country: '',
				description: '',
				duration: '',
				employementType: '',
				endClient: '',
				experienceLevel: '',
				interviewType: '',
				localIndicator: '',
				maxResumesAllowed: 0,
				notes: '',
				numberOfOpenings: 0,
				payRate: '',
				posiitonType: '',
				primaryRecruiteer: '',
				projectEndDate: '',
				projectStartDate: '',
				requiredExperience: '',
				requiredSkills: '',
				requirementId: 0,
				requirementTitle: '',
				state: '',
				status: '',
				subCategory: '',
				visaType: '',
				zipCode: ''
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
				<DialogTitle id="alert-dialog-title">{"Add a Requirement"}</DialogTitle>
				<DialogContent>
				<Card className={classes.card}>
               
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                Requirement Information
                </Typography>
				<TextField
						autoFocus
						margin="dense"
						disabled= "true"
						name="id"
						label="Account Id "
						fullWidth
						defaultValue={this.props.requirement.id}
						onChange={this.props.onChange}
					/>
                  <TextField
                      margin="dense"
                      placeholder="Enter Client name"
                      name="requirementTitle"
                      label="Requirement Title"
                      defaultValue = { this.props.requirement.requirementTitle }
                      onChange={this.props.onChange}
                      required />
					  
                      <TextField
                      margin="dense"
                      placeholder="Enter requirementId"
                      name="requirementId"
                      label="Requirement Id"
                      fullWidth
                      defaultValue = { this.props.requirement.requirementId}
                      onChange={this.props.onChange}
                      required />
                      
					  <FormControl required className={classes.formControl}>
					   <InputLabel htmlFor="accountOwner">Account Owner</InputLabel>
					   <NativeSelect
						 defaultValue={this.props.requirement.accountOwner}
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
                        <InputLabel htmlFor="primaryRecruiteer">Primary Recruiter</InputLabel>
                        <NativeSelect
                          defaultValue={this.props.requirement.primaryRecruiteer}
						  onChange={this.props.onChange}
                          input={<Input name="primaryRecruiteer" id="primaryRecruiteer"  />}
                        >
                         <option value="0">--Select--</option>
						 <option value="4939">Srinivas</option>
						 <option value="4940">Ravi Thonger</option>
						 <option value="4941">Francis</option>
						 <option value="4984">Umakanth</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
						<InputLabel htmlFor="access">Access</InputLabel>
						<NativeSelect
							defaultValue={this.props.requirement.access}
							onChange={this.props.onChange}
							input={<Input name="access" id="access" />}
						>
							<option value="--select--">-- select --</option>
							<option value="MyTeam">My Team</option>
							<option value="Private">Private</option>
							<option value="Public">Public</option>
						</NativeSelect>
					</FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">End Client</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.endClient }
                          onChange={this.props.onChange}
                          input={<Input name="endClient" id="endClient" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <TextField
                      margin="dense"
                      placeholder="enter requiredSkills"
                      name="requiredSkills"
                      label="Required Skills"
                      fullWidth
                      defaultValue = { this.props.requirement.requiredSkills}
                      onChange={this.props.onChange}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter requiredExperience"
                      name="requiredExperience"
                      label="Required Experience"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.requiredExperience }
                      onChange={this.props.onChange}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter billRate"
                      name="billRate"
                      label="Bill Rate($)"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.billRate }
                      onChange={this.props.onChange}
                       />
                      <TextField
                      margin="dense"
                      placeholder="Enter payRate"
                      name="payRate"
                      label="Pay Rate($)"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.payRate }
                      onChange={this.props.onChange}
                      required />
                        <FormControl className={classes.formControl}>
					   <InputLabel htmlFor="country">Country</InputLabel>
					   <NativeSelect
						  defaultValue = { this.props.requirement.country }
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
						 defaultValue = { this.props.requirement.state }
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
					 
					 
					 defaultValue = { this.props.requirement.city }
					 onChange={ this.props.onChange}
					  />
					 
					 <TextField
					 margin="dense"
					 placeholder="Enter zipCode "
					 name="zipCode"
					 label="Zipcode"
					 
					 defaultValue = { this.props.requirement.zipCode }
					 onChange={ this.props.onChange}
					  />
                       <TextField
                      margin="dense"
                      placeholder="Enter numberOfOpenings"
                      name="numberOfOpenings"
                      label="Number of Openings"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.numberOfOpenings }
                      onChange={this.props.onChange}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter maxResumesAllowed"
                      name="maxResumesAllowed"
                      label="Maximum Resumes allowed"
                      fullWidth
                      className={classes.textFieldMax}
                      defaultValue = { this.props.requirement.maxResumesAllowed }
                      onChange={this.props.onChange}
                       />
                       <TextField
                      margin="dense"
                      placeholder="Enter localIndicator"
                      name="localIndicator"
                      label="Local Indicator"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.localIndicator }
                      onChange={this.props.onChange}
                       />
                       <TextField
                        id="multiline-static"
                        multiline
						rows="4"
						
                        label=" Brief Description"
                        margin="normal"
						fullWidth
						name="briefDescription"
						defaultValue = { this.props.requirement.briefDescription }
                      onChange={this.props.onChange}
                      />
                      <TextField
                        id="multiline-static"
                        multiline
                        rows="4"
                        label="  Description"
                        margin="normal"
						fullWidth
						name="description"
						defaultValue = { this.props.requirement.description }
                      onChange={this.props.onChange}
                      />
                       
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
              <Card className={classes.card}>
               {/* <CardHeader  subheader="Duration & Type" 
                  > 
                
                 </CardHeader> */}
                 
                <CardContent className={classes.content}>
                <Typography className={classes.afterEle}variant="body1" gutterBottom>
                 Duration & Type
                </Typography>
                  <TextField
                      margin="dense"
                      placeholder="Enter duration"
                      name="duration"
                      label="Duration"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.duration }
                      onChange={this.props.onChange}
                      required />
                      
                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="category">Category</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.category }
                          onChange={this.props.onChange}
                          input={<Input name="category" id="category" />}
                        >
                          <option value="0">--Select--</option>
							<option value="AFI">Accounting/Finance/Insurance</option>
							<option value="ACL">Administrative/Clerical</option>
							<option value="BRM">Banking/Real Estate/Mortgage Professionals</option>
							<option value="BST">Building Construction/Skilled Trades</option>
							<option value="BSM">Business/Strategic Management</option>
							<option value="CDN">Creative/Design</option>
							<option value="CSC">Customer Support/Client Care</option>
							<option value="EW">Editorial/Writing</option>
							<option value="ET">Education/Training</option>
							<option value="EN">Engineering</option>
							<option value="FH">Food Services/Hospitality</option>
							<option value="hr">Human Resources</option>
							<option selected="selected" value="it">Information Technology</option>
							<option value="IMP">Installation/Maintenance/Repair</option>
							<option value="L">Legal</option>
							<option value="LT">Logistics/Transportation</option>
							<option value="MPO">Manufacturing/Production/Operations</option>
							<option value="MP">Marketing/Product</option>
							<option value="MH">Medical/Health</option>
							<option value="O ">Others</option>
							<option value="PPM">Project/Program Management</option>
							<option value="QS">Quality Assurance/Safety</option>
							<option value="R ">Research</option>
							<option value="SRB">Sales/Retail/Business Development</option>
							<option value="SP">Security/Protective Services</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="subCategory">Sub Category</InputLabel>
                        <Select
                          defaultValue={this.props.requirement.subCategory}
                          onChange={this.handleChange}
                          input={<Input name="subCategory" id="subCategory"  />}
                        >
                          <option value="0">--Select--</option>
						  <option value="11754">Computer/Network Security</option>
						  <option value="11772">Database Development/Administration</option>
						  <option value="11774">Desktop Service and Support</option>
						  <option value="11787">Enterprise Software Implementation &amp; Consulting</option>
						  <option value="11848">IT Project Management</option>
						  <option value="11882">Network and Server Administration</option>
						  <option value="11904">General/Other: IT/Software Development</option>
						  <option value="11969">Software/System Architecture</option>
						  <option value="11970">Software/Web Development</option>
						  <option value="11979">Systems Analysis - IT</option>
						  <option value="11987">Telecommunications Administration/Management</option>
						  <option value="11996">Usability/Information Architecture</option>
						  <option value="12005">Web/UI/UX Design</option>
                        </Select>
                       
                      </FormControl>
                      
                      

                       <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="employementType">Employement Type</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.employementType }
                          onChange={this.props.onChange}
                          input={<Input name="employementType" id="employementType" />}
                        >
                         
						<option value="0">--Select--</option>
						<option value="cw">Contract – W2</option>
						<option value="ch">Contract-to-Hire</option>
						<option value="99">Contract-to-Hire-1099</option>
						<option value="hc">Contract-to-Hire-Corp</option>
						<option value="hw">Contract-to-Hire-W2</option>
						<option value="pp">Corp-to-Corp</option>
						<option value="DH">Direct Hire</option>
						<option value="EM">Employee</option>
						<option value="fw">Full time – W2</option>
						<option value="ic">Independent Contractor</option>
						<option value="I ">Intern</option>
						<option value="ot">Others</option>
						<option value="S">Seasonal</option>
						<option value="TC">Temporary / Contract</option>
						<option value="V">Volunteer</option>


                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-helper">Status</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.name }
                          onChange={this.props.onChange}
                          input={<Input name="account_name" id="age-native-helper" />}
                        >
                          <option value="--select--">-- select --</option>
                          <option value={10}>My Team</option>
                          <option value={20}>Private</option>
                          <option value={30}>Public</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="experienceLevel">Experience Level</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.experienceLevel }
                          onChange={this.props.onChange}
                          input={<Input name="experienceLevel" id="experienceLevel" />}
                        >
						<option value="0">--Select--</option>
						<option value="11">Entry Level</option>
						<option value="14">Executive (SVP, VP, Department Head, etc)</option>
						<option value="12">Experienced (Non-Manager)</option>
						<option value="13">Manager (Manager/Supervisor of Staff)</option>
						<option value="15">Senior Executive (President, CFO, etc)</option>
						<option value="16">Student (High School)</option>
						<option value="10">Student (Undergraduate/Graduate)</option>


                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="posiitonType">Position Type</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.posiitonType }
                          onChange={this.props.onChange}
                          input={<Input name="posiitonType" id="posiitonType" />}
                        >
                          <option value="0">--Select--</option>
						<option value="27">Contract</option>
						<option value="28">Contract-to-Hire</option>
						<option value="4">Full Time</option>
						<option value="5">Part Time</option>
						<option value="26">Per Diem</option>
                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="interviewType">Interview Type</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.interviewType }
                          onChange={this.props.onChange}
                          input={<Input name="interviewType" id="interviewType" />}
                        >
							<option value="0">--Select--</option>
							<option value="fa">Face to Face</option>
							<option value="pi">Phone Interview</option>
							<option value="pa">Panel Interview</option>
							<option value="sv">Skype/Video interview</option>


                        </NativeSelect>
                       
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="visaType">Visa Type</InputLabel>
                        <NativeSelect
                          defaultValue={ this.props.requirement.visaType }
                          onChange={this.props.onChange}
                          input={<Input name="visaType" id="visaType" />}
                        >
                          {/* <div id="bk8bx9qti" class="zselect"><span class="zmshead">Please Select</span><ul style="width: 100%; overflow: auto; max-height: 300px; display: none;"><li class="zmsfilter"><input id="search" name="search" type="text" placeholder="Search"></li><li><input name="CP" value="CP" type="checkbox"><span style="width:100%;display:table-cell;">CPT</span></li><li><input name="EA" value="EA" type="checkbox"><span style="width:100%;display:table-cell;">EAD</span></li><li><input name="GE" value="GE" type="checkbox"><span style="width:100%;display:table-cell;">GC-EAD</span></li><li><input name="GC" value="GC" type="checkbox"><span style="width:100%;display:table-cell;">Green Card Holder</span></li><li><input name="H1" value="H1" type="checkbox"><span style="width:100%;display:table-cell;">H1B</span></li><li><input name="OP" value="OP" type="checkbox"><span style="width:100%;display:table-cell;">OPT</span></li><li><input name="US" value="US" type="checkbox"><span style="width:100%;display:table-cell;">US Citizen</span></li><li class="filterResult"></li></ul></div> */}
                        </NativeSelect>
                       
                      </FormControl>
                      <TextField
                      margin="dense"
                      placeholder="Enter projectStartDate"
                      name="projectStartDate"
                      label="Project Start Date"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.projectStartDate }
                      onChange={this.props.onChange}
                       />
                     <TextField
                      margin="dense"
                      placeholder="Enter projectEndDate"
                      name="projectEndDate"
                      label="Project End Date"
                      fullWidth
                      
                      defaultValue = { this.props.requirement.projectEndDate }
                      onChange={this.props.onChange}
                       />
                        <TextField
                        id="multiline-static"
                        multiline
                        rows="4"
                        label="  Notes"
                        margin="normal"
						fullWidth
						name="notes"
						defaultValue = { this.props.requirement.notes }
                      onChange={this.props.onChange}
                      />
                       
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
						onClick={this.props.onSave}> Submit </Button>
				</DialogActions>
			</Dialog>
		)
	}

}
ClientModal.propTypes = {
	requirement: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ClientModal);
