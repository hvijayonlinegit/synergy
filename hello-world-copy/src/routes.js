import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import ClientsPage from './containers/ClientsPage';
import Step from './containers/Stepper';
import RequirementsPage from './containers/RequirementsPage';
import CandidatesPage from './containers/CandidatesPage';
import RequireAuth from './containers/auth/require_auth';
import Signin from './containers/auth/signin';
import Signout from './containers/auth/signout';
import Signup from './containers/auth/signup';
import ServerErrorPage from './common/ServerErrorPage'
import RequireAdminAccess from './common/RequireAdminAccess'
import DocumentUpload from './components/documents/DocumentUpload';
import DocumentsPage from './containers/DocumentsPage'
import HomePage from './containers/HomePage'
import SimpleLineChart from './containers/SimpleLineChart'
export default (
  <div>
    <Switch>
      <Route path="/" component={App}>
        <Route exact path="/Home" component={HomePage}>
            <Route exact path="/clientsdash" component={SimpleLineChart} />
            <Route exact path="/CreateNewClient" component={Step} />
        </Route>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/clients" component={RequireAuth(ClientsPage)} >
        </Route>
        <Route path="/requirements" component = {RequirementsPage}></Route>
        <Route path="/candidates" component = {CandidatesPage}></Route>
        <Route path="/employees" component = {CandidatesPage}></Route>
        <Route path="/documents" component = {DocumentsPage}></Route>
      </Route> 
      <Route path="/upload" component = {DocumentUpload}></Route>
      <Route path="/500" component={ServerErrorPage}/>
      <Route path="/adminaccess" component ={RequireAdminAccess}/>
    </Switch>
  </div>
);
