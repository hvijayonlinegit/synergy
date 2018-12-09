import React from 'react'

import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as moreinfoActions from '../actions/moreinfoActions';
import CommonPage from './CommonPage';

class RequirementsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path:''
      }
    };
  
  componentWillMount(){
    this.props.moreinfoactions.loadRequirements();
  }
  componentWillReceiveProps(_nextProps) {
    const path= _nextProps.location.pathname.split('/').pop(-1)?_nextProps.location.pathname.split('/').pop(-1):'';
		this.setState({path:path});
	}
  
  render() {
    return (
      <CommonPage path ={this.state.path}></CommonPage>
    );
  }
}

RequirementsPage.propTypes = {
  children: PropTypes.object,
  actions: PropTypes.object,
  moreinfoactions: PropTypes.object,
  reqmoreinfoactions: PropTypes.object,
  candmoreinfoactions: PropTypes.object,
  docmoreinfoactions:PropTypes.object
 };

function mapStateToProps(state) {
  return {
    clients: state.clients,
    moreinfo : state.moreinfo,
    reqmoreinfo : state.reqmoreinfo,
    candmoreinfo : state.candmoreinfo,
    docmoreinfo : state.docmoreinfo,

  };
}
function mapDispatchToProps(dispatch) {
  return {
    moreinfoactions: bindActionCreators(moreinfoActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (RequirementsPage);
