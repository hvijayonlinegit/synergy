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
import Audit from '../../common/Audit';
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
  header: {
    width: '100%',
    backgroundColor: 'aliceblue',
    padding: '20px',
  },
  card: {
    border: '1px solid lightgrey',
    width: '100%',
    boxShadow: 'none',
    marginBottom: '10px'
  },

});

class CandidateDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitState();
    this.updateCandidate = this.updateCandidate.bind(this);
  }
  getInitState() {
    const { candidate } = this.props.candidate

    return candidate ? candidate : {
      address: '',
      availableFrom: '',
      candidateId: '',
      candidateStatus: '',
      city: '',
      country: '',
      dateOfBirth: '',
      emailAddress: '',
      fatherName: '',
      fax: '',
      firstName: '',
      gender: '',
      hobbies: '',
      lastName: '',
      licenseNumber: '',
      linkedinUrl: '',
      maritalStatus: '',
      middleName: '',
      mobileNumber: '',
      motherName: '',
      nationality: '',
      noticePeriod: '',
      passportNumber: '',
      phoneNumber: '',
      preferredLocation1: '',
      preferredLocation2: '',
      skypeId: '',
      sourceBy: '',
      sourceFrom: '',
      sourceInfo: '',
      sourcing: '',
      state: '',
      visaStatus: '',
      zipCode: '',
      createdBy:'',
			updatedAt:'',
      updatedBy:'',
      createdAt:''
    }
  }
  componentWillReceiveProps(_nextProps) {
    console.log(_nextProps);
    this.setState({
      ..._nextProps.candidate
    })
  }
  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  updateCandidate() {
    // get candidate id
    const id = this.state._links.self.href.split('/').pop(-1);
    //remove unwanted properties from object for update call
    const { 'documents': parentValue, ...candidatewithoutdoc } = this.state;
    const { '_links': parentValue1, ...candidatewithoutlinks } = candidatewithoutdoc;
    //make a action call to update data in db
    this.props.updateCandidate(candidatewithoutlinks, id);
  }

  render() {
    const { classes } = this.props;
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    if (isEmpty(this.props.candidate)) {
      return (
        <MySnackbarContentWrapper
          variant="info"
          className={classes.margin}
          message="There are no Candidate details  to Show , Please add a candidate!"
        />
      );
    }
    else {
      return (
        <div className={classes.root}>
          <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader title='Candidate Info' parentMehod={this.updateCandidate}></CardHeader>
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter Client name"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  className={classes.textField}
                  value={this.state.firstName}
                  onChange={this.handleChange('firstName')}
                  required />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter middleName"
                  name="middleName"
                  label="Middle Name"
                  fullWidth
                  className={classes.textField}
                  value={this.state.middleName}
                  onChange={this.handleChange('middleName')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  className={classes.textField}
                  value={this.state.lastName}
                  onChange={this.handleChange('lastName')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter emailAddress"
                  name="emailAddress"
                  label="Email"
                  fullWidth
                  className={classes.textField}
                  value={this.state.emailAddress}
                  onChange={this.handleChange('emailAddress')}
                  required
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter mobileNumber"
                  name="mobileNumber"
                  label="Mobile Number"
                  fullWidth
                  className={classes.textField}
                  value={this.state.mobileNumber}
                  onChange={this.handleChange('mobileNumber')}

                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  className={classes.textField}
                  value={this.state.phoneNumber}
                  onChange={this.handleChange('phoneNumber')}

                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="country" shrink>Country</InputLabel>
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
                  <InputLabel htmlFor="state" shrink>State</InputLabel>
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
                  placeholder="Enter address"
                  name="address"
                  label="Address"
                  fullWidth
                  className={classes.textField}
                  value={this.state.address}
                  onChange={this.handleChange('address')}

                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter preferredLocation1"
                  name="preferredLocation1"
                  label="Preferred Location1 "
                  fullWidth
                  className={classes.textField}
                  value={this.state.preferredLocation1}
                  onChange={this.handleChange('preferredLocation1')}

                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter preferredLocation2"
                  name="preferredLocation2"
                  label="Preferred Location2 "
                  fullWidth
                  className={classes.textField}
                  value={this.state.preferredLocation2}
                  onChange={this.handleChange('preferredLocation2')}

                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter zipCode"
                  name="zipCode"
                  label="Zip Code "
                  fullWidth
                  className={classes.textField}
                  value={this.state.zipCode}
                  onChange={this.handleChange('zipCode')}

                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter skypeId"
                  name="skypeId"
                  label="Skype Id  "
                  fullWidth
                  className={classes.textField}
                  value={this.state.skypeId}
                  onChange={this.handleChange('skypeId')}

                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter linkedinUrl"
                  name="linkedinUrl"
                  label="Linkedin Id  "
                  fullWidth
                  className={classes.textField}
                  value={this.state.linkedinUrl}
                  onChange={this.handleChange('linkedinUrl')}

                />
                <CardActions>
                </CardActions>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <CardHeader title='Additional Information' parentMehod={this.updateCandidate}></CardHeader>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="sourceFrom" shrink>Sourced From</InputLabel>
                  <NativeSelect
                    value={this.state.sourceFrom}
                    onChange={this.handleChange('sourceFrom')}
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
                  value={this.state.sourceInfo}
                  onChange={this.handleChange('sourceInfo')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter sourcing"
                  name="sourcing"
                  label="Sourcing "
                  fullWidth
                  className={classes.textField}
                  value={this.state.sourcing}
                  onChange={this.handleChange('sourcing')}
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="sourceBy" shrink>Sourced By</InputLabel>
                  <NativeSelect
                    value={this.state.sourceBy}
                    onChange={this.handleChange('sourceBy')}
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
                  value={this.state.availableFrom}
                  onChange={this.handleChange('availableFrom')}
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="noticePeriod" shrink>Notice Period</InputLabel>
                  <NativeSelect
                    value={this.state.noticePeriod}
                    onChange={this.handleChange('noticePeriod')}
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
                  value={this.state.fax}
                  onChange={this.handleChange('fax')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter licenseNumber"
                  name="licenseNumber"
                  label="License No"
                  fullWidth
                  className={classes.textField}
                  value={this.state.licenseNumber}
                  onChange={this.handleChange('licenseNumber')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter passportNumber"
                  name="passportNumber"
                  label="Passport No"
                  fullWidth
                  className={classes.textField}
                  value={this.state.passportNumber}
                  onChange={this.handleChange('passportNumber')}
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="visaStatus" shrink>Visa Status</InputLabel>
                  <NativeSelect
                    value={this.state.visaStatus}
                    onChange={this.handleChange('visaStatus')}
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
                  value={this.state.dateOfBirth}
                  onChange={this.handleChange('dateOfBirth')}
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="candidateStatus" shrink>Candidate Status</InputLabel>
                  <NativeSelect
                    value={this.state.candidateStatus}
                    onChange={this.handleChange('candidateStatus')}
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
                <CardHeader title='Personal Information' parentMehod={this.updateCandidate}></CardHeader>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="gender" shrink>Gender</InputLabel>
                  <NativeSelect
                    value={this.state.gender}
                    onChange={this.handleChange('gender')}
                    input={<Input name="gender" id="gender" />}
                  >
                    <option value="">--Select--</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </NativeSelect>
                </FormControl>
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter fatherName"
                  name="fatherName"
                  label="Father Name "
                  fullWidth
                  className={classes.textField}
                  value={this.state.fatherName}
                  onChange={this.handleChange('fatherName')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter motherName"
                  name="motherName"
                  label="Mother Name "
                  fullWidth
                  className={classes.textField}
                  value={this.state.motherName}
                  onChange={this.handleChange('motherName')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter nationality"
                  name="nationality"
                  label="Nationality  "
                  fullWidth
                  className={classes.textField}
                  value={this.state.nationality}
                  onChange={this.handleChange('nationality')}
                />
                <TextField InputLabelProps={{ shrink: true }}
                  margin="dense"
                  placeholder="Enter hobbies"
                  name="hobbies"
                  label="Hobbies  "
                  fullWidth
                  className={classes.textField}
                  value={this.state.hobbies}
                  onChange={this.handleChange('hobbies')}
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="maritalStatus" shrink>Marital Status</InputLabel>
                  <NativeSelect
                    value={this.state.maritalStatus}
                    onChange={this.handleChange('maritalStatus')}
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
            <Audit createdBy={this.state.createdBy} createdAt={this.state.createdAt} updatedBy={this.state.updatedBy} updatedAt= {this.state.updatedAt}></Audit>
          </form>
        </div>
      );
    }
  }
}

CandidateDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  candidate: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandidateDetails);
