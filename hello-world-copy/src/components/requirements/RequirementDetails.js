import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import MySnackbarContentWrapper from '../../common/MySnackContent';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Audit from '../../common/Audit'
import CardHeader from '../../common/CardDetailsHeader'
const styles = theme => ({
  root: {
    width: '100%',
    overflowY: 'auto',
    maxHeight: '34vh',
    minHeight: '34vh',
    display: 'flex',
    flexWrap: 'wrap',
  },
  emptyroot: {
    width: '100%',
    overflowY: 'auto',
    maxHeight: '27vh',
    minHeight: '27vh',
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 1,
  },
  textFieldMax: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
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

});
class RequirementDetails extends React.Component {

  constructor(props) {
		super(props);
		this.state = this.getInitState();
		this.updateRequirement = this.updateRequirement.bind(this);
	}
	getInitState() {
		const { requirement } = this.props.requirement
		
		return requirement ? requirement : {
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
        zipCode: '',
        createdBy:'',
			  updatedAt:'',
        updatedBy:'',
        createdAt:'',
		}
	}
	componentWillReceiveProps(_nextProps) {
		console.log(_nextProps);
		this.setState({
			..._nextProps.requirement
		})
	}
	handleChange = name => ({ target: { value } }) =>
		this.setState({
			[name]: value
		})

	updateRequirement(){
		// get requirement id
		const id = this.state._links.self.href.split('/').pop(-1);
		//remove unwanted properties from object for update call
		const { 'candidates': parentValue, ...requirementwithoutcand } = this.state;
		const { '_links': parentValue1, ...requirementwithoutlinks } = requirementwithoutcand;
		//make a action call to update data in db
		this.props.updateRequirement(requirementwithoutlinks,id);
	}
  render() {
    const { classes } = this.props;
    if (this.props.requirement.requirementTitle === undefined) {
      return (
        <div>
          <MySnackbarContentWrapper
            variant="info"
            className={classes.margin}
            message="There are no Requirements to Show , Please click/add a requirement!"
          />
          <div className={classes.emptyroot}>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className={classes.root}>
          <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader title='Requirement Information' parentMehod={this.updateRequirement}></CardHeader>
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter Client name"
                  name="requirementTitle"
                  label="Requirement Title"
                  value={this.state.requirementTitle}
									onChange={this.handleChange('requirementTitle')}
                  required />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter requirementId"
                  name="requirementId"
                  label="Requirement Id"
                  value={this.state.requirementId}
									onChange={this.handleChange('requirementId')}
                  required />
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="accountOwner">Account Owner</InputLabel>
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
                  <InputLabel htmlFor="primaryRecruiteer">Primary Recruiter</InputLabel>
                  <NativeSelect
                    value={this.state.primaryRecruiteer}
                    onChange={this.handleChange('primaryRecruiteer')}
                    input={<Input name="primaryRecruiteer" id="primaryRecruiteer" />}
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
                    value={this.state.access}
                    onChange={this.handleChange('access')}
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
                    value={this.state.endClient}
                    onChange={this.handleChange('endClient')}
                    input={<Input name="endClient" id="endClient" />}
                  >
                    <option value="--select--">-- select --</option>
                    <option value={10}>My Team</option>
                    <option value={20}>Private</option>
                    <option value={30}>Public</option>
                  </NativeSelect>

                </FormControl>
                <TextField  InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="enter requiredSkills"
                  name="requiredSkills"
                  label="Required Skills"
                  fullWidth
                  value={this.state.requiredSkills}
                  onChange={this.handleChange('requiredSkills')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter requiredExperience"
                  name="requiredExperience"
                  label="Required Experience"
                  fullWidth
                  value={this.state.requiredExperience}
                  onChange={this.handleChange('requiredExperience')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter billRate"
                  name="billRate"
                  label="Bill Rate($)"
                  fullWidth
                  value={this.state.billRate}
                  onChange={this.handleChange('billRate')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter payRate"
                  name="payRate"
                  label="Pay Rate($)"
                  fullWidth
                  value={this.state.payRate}
                  onChange={this.handleChange('payRate')}
                  required />
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
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter city name"
                  name="city"
                  label="City"
                  value={this.state.city}
                  onChange={this.handleChange('city')}
                  />

                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter zipCode "
                  name="zipCode"
                  label="Zipcode"
                  value={this.state.zipCode}
                  onChange={this.handleChange('zipCode')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter numberOfOpenings"
                  name="numberOfOpenings"
                  label="Number of Openings"
                  fullWidth
                  value={this.state.numberOfOpenings}
                  onChange={this.handleChange('numberOfOpenings')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter maxResumesAllowed"
                  name="maxResumesAllowed"
                  label="Maximum Resumes allowed"
                  fullWidth
                  className={classes.textFieldMax}
                  value={this.state.maxResumesAllowed}
                  onChange={this.handleChange('maxResumesAllowed')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter localIndicator"
                  name="localIndicator"
                  label="Local Indicator"
                  fullWidth
                  value={this.state.localIndicator}
                  onChange={this.handleChange('localIndicator')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  id="multiline-static"
                  multiline
                  rows="4"
                  label=" Brief Description"
                  margin="normal"
                  fullWidth
                  name="briefDescription"
                  value={this.state.briefDescription}
                  onChange={this.handleChange('briefDescription')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  id="multiline-static"
                  multiline
                  rows="4"
                  label="  Description"
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
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader title='Duration & Type' ></CardHeader>
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter duration"
                  name="duration"
                  label="Duration"
                  fullWidth
                  value={this.state.duration}
                  onChange={this.handleChange('duration')}
                  required />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <NativeSelect
                    value={this.state.category}
                    onChange={this.handleChange('category')}
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
                     value={this.state.subCategory}
                     onChange={this.handleChange('subCategory')}
                    input={<Input name="subCategory" id="subCategory" />}
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
                    value={this.state.employementType}
                    onChange={this.handleChange('employementType')}
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
                    value={this.state.status}
                    onChange={this.handleChange('status')}
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
                    value={this.state.experienceLevel}
                    onChange={this.handleChange('experienceLevel')}
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
                    value={this.state.posiitonType}
                    onChange={this.handleChange('posiitonType')}
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
                    value={this.state.interviewType}
                    onChange={this.handleChange('interviewType')}
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
                    value={this.state.visaType}
                    onChange={this.handleChange('visaType')}
                    input={<Input name="visaType" id="visaType" />}
                  >
                  </NativeSelect>
                </FormControl>
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter projectStartDate"
                  name="projectStartDate"
                  label="Project Start Date"
                  fullWidth
                  value={this.state.projectStartDate}
                  onChange={this.handleChange('projectStartDate')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter projectEndDate"
                  name="projectEndDate"
                  label="Project End Date"
                  fullWidth
                  value={this.state.projectEndDate}
                  onChange={this.handleChange('projectEndDate')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  id="multiline-static"
                  multiline
                  rows="4"
                  label="  Notes"
                  margin="normal"
                  fullWidth
                  name="notes"
                  value={this.state.notes}
                  onChange={this.handleChange('notes')}
                />
                <CardActions>
                </CardActions>
              </CardContent>
            </Card>
            {/* Audit for last created and last modified */}
            <Audit createdBy={this.state.createdBy} createdAt={this.state.createdAt} updatedBy={this.state.updatedBy} updatedAt= {this.state.updatedAt}></Audit>
          </form>
        </div>
      );
    }
  }
}
RequirementDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  requirement: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequirementDetails);
