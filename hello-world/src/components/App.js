import React from 'react';
import {Link, browserHistory} from 'react-router';
import MenuAppBar from './AppBar'
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <MenuAppBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
