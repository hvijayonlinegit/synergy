import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import CommonPage from './CommonPage'
class DocumentsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path:''
    };
  }
  componentWillMount(){
    this.props.candmoreinfoactions.loadDocuments();
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

DocumentsPage.propTypes = {
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
    candmoreinfoactions: bindActionCreators(candmoreinfoActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (DocumentsPage);
