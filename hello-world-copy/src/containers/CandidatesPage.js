import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
import CommonPage from './CommonPage'
class CandidatesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path:''
    };
  }
  componentWillMount(){
    this.props.reqmoreinfoactions.loadCandidates();
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

CandidatesPage.propTypes = {
  children: PropTypes.object,
  reqmoreinfoactions: PropTypes.object.isRequired,
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
    reqmoreinfoactions: bindActionCreators(reqmoreinfoActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (CandidatesPage);
