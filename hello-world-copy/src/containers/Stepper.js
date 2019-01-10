import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper, withStyles } from '@material-ui/core';
import Sample from './Sample'
import SampleList from './SampleList'
import ClientInputForm from '../components/clients/ClientInputForm'
// import RequirementList from '../components/requirements/RequirementList'
import model from '../common/model'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as clientActions from '../actions/clientActions'
import * as moreinfoActions from '../actions/moreinfoActions';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as docmoreinfoActions from '../actions/docmoreinfoActions';
import PropTypes from 'prop-types';
import { browserHistory} from 'react-router';
import { compose } from '../../node_modules/redux';
const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  float: {
      float: 'right'
  },
  paper: {
    width: '100%',
		overflowY: 'auto',
		maxHeight: '50vh',
		minHeight: '50vh',
		display: 'flex',
		flexWrap: 'wrap',
  },
  
});

function getSteps() {
  return ['Create a Client', 'Select a Requirement', 'Create Candiate', 'Upload Documents'];
}

function getStepContent(step, state,updateClientState, requirements) {
  switch (step) {
    case 0:
      return <ClientInputForm
                            client={state}
                            onChange={updateClientState}
                            ></ClientInputForm>;
    case 1:
      return <SampleList requirements= {requirements.requirementses}></SampleList>;
    case 2:
      return <Sample></Sample>;
    default:
      return <Typography variant="headline">Upload Documents and Click Finish to Navigate to Clients Section.</Typography> ;
  }
}

class CustomStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    activeStep: 0,
    skipped: new Set(),
    client: model.client,
  };
  
  this.createClient = this.createClient.bind(this);
  this.updateClientState = this.updateClientState.bind(this);
  }
  componentWillMount() {
    this.props.moreinfoactions.loadRequirements();
  }

   //Clients page functions
   createClient(event) {
    console.log('i am in create client')
    if (this.state.client.name === '') {
    }
    else {
        event.preventDefault();
        this.props.actions.createCat(this.state.client).then(() => {
            this.setState({ modal: false });
        });
    }
}
updateClientState(event) {
  const field = event.target.name;
  const client = this.state.client;
  console.log(field+event.target.value)
  client[field] = event.target.value;
  return this.setState({ client: client });
}
  isStepOptional = step => {
    return step === 2;
  };

  handleNext = (event) => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
      console.log('hi....')
    }
    if(activeStep === 3){
      browserHistory.push('/clients')
    }
    if(activeStep === 0){
      this.createClient(event);
     // this.props.moreinfoactions.loadRequirements();
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
    
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props} className={classes.labelpro}>
                <StepLabel {...labelProps} >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Paper className={classes.paper}>
              <Typography variant="headline" className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              </Paper>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              
              <Typography className={classes.instructions}>{getStepContent(activeStep, this.state.client, this.updateClientState,this.props.moreinfo.requirements)}</Typography>
              <div className={classes.float}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  disabled={activeStep === 1}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Finish and Close Wizard
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CustomStepper.propTypes = {
  classes: PropTypes.object,
};

function mapStateToProps(state) {
  return {
      clients: state.clients,
      moreinfo: state.moreinfo,
      reqmoreinfo: state.reqmoreinfo,
      candmoreinfo: state.candmoreinfo,
      docmoreinfo: state.docmoreinfo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(clientActions, dispatch),
      moreinfoactions: bindActionCreators(moreinfoActions, dispatch),
      reqmoreinfoactions: bindActionCreators(reqmoreinfoActions, dispatch),
      candmoreinfoactions: bindActionCreators(candmoreinfoActions, dispatch),
      docmoreinfoactions: bindActionCreators(docmoreinfoActions, dispatch)
  };
}
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
) (CustomStepper);