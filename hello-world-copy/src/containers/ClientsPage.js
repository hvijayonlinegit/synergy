import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/clientActions';
import CommonPage from './CommonPage'
class ClientsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path:''
    };
  }
  componentWillMount(){
    this.props.actions.loadClients();
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
ClientsPage.propTypes = {
  children: PropTypes.object,
  actions: PropTypes.object.isRequired,
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
    actions: bindActionCreators(courseActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (ClientsPage);
