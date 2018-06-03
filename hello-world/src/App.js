import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Accounts from './AccountsTable'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }
  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }
  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft:  0
      }
    };
    return (
      <div className="App">
      <Header styles={styles.header}
              handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}>Header</Header>
        <Accounts />
      </div>
    );
  }
}

export default App;
