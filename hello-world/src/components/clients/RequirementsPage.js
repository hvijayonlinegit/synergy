import React from 'react'

import {connect} from 'react-redux'
import {Link, browserHistory} from 'react-router'
import RequirementsList from './RequirementsList'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ClientsExpansion from './ClientsExpansion'
import AddClientModal from './CreateClientModal'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import as from './clientspage.css'
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/catActions';
class RequirementsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requirement: {account_name: '', account_type: '', account_phone: '', account_team: '', account_address: ''},
      modal: false
    //  requirement: ''
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.redirect = this.redirect.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    this.handleCandidates = this.handleCandidates.bind(this);
  }

  updateCatState(event) {
    const field = event.target.name;
    const client = this.state.client;
    console.log(field+event.target.value);
    client[field] = event.target.value;
    return this.setState({client: client});
  }

  redirect(client) {
    browserHistory.push(`/clients`);
  }

  saveCat(event) {
    event.preventDefault();

    this.props.actions.createCat(this.state.client).then((cat) => {
     this.setState({ modal: false });
     this.redirect(cat);
    });

  }

	handleModalOpen() {
		this.setState({ modal: true });
//  browserHistory.push(`/clients/new`);
	}
	handleModalClose() {
		this.setState({ modal: false });
	}

handleCandidates(text , e){
  console.log('onclic'+text);
  this.props.actions.loadCandidates(text);
  //store.dispatch(loadRequirements(text));
}
  render() {
    const requirements = this.props.requirements;
    return (
      <div className="col-md-12">
          <Hidden mdUp >
            <div className="col-md-4">
                <h3> Mobile View </h3>
                <ClientsExpansion requirements={requirements} />
            </div>
            <Button variant="fab" color="primary" aria-label="add" style={{ position: 'fixed', bottom: 50, right: 50 }} onClick={ this.handleModalOpen } >
              <AddIcon />
            </Button>
            <AddClientModal
              client={this.state.client}
              onSave={this.saveCat}
              onChange={this.updateCatState}
              open={ this.state.modal }
              close={ this.handleModalClose }
            />
          </Hidden>
          <Hidden smDown>
            <div className="col-md-4" >
              <h3> Desktop View</h3>
              <RequirementsList requirements={requirements}  onCandidates={this.handleCandidates}/>
            </div>
          </Hidden>
          <div className="col-md-8">
            {this.props.children}
          </div>

      </div>
    );
  }
}

RequirementsPage.propTypes = {
  requirements: PropTypes.object.isRequired,
  children: PropTypes.object,
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,

};

function mapStateToProps(state, ownProps) {
  return {
    requirements: state.requirements
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (RequirementsPage);
