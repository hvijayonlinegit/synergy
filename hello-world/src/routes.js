import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import ClientsPage from './components/clients/ClientsPage';
import RequirementsPage from './components/clients/RequirementsPage';
import NewClientPage from './components/clients/NewClientPage';
export default (
  <Route path="/" component={App}>
    <Route path="/clients" component={ClientsPage} >
      <Route path="/requirements" component = {RequirementsPage}></Route>
      <Route path="/candidates" component = {ClientsPage}></Route>
    </Route>

    <Route path="/clients/new" component={NewClientPage} />
  </Route>
);
