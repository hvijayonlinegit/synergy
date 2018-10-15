import React from 'react'

import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/clientActions';
import * as moreinfoActions from '../actions/moreinfoActions';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as docmoreinfoActions from '../actions/docmoreinfoActions';
import AddRequirementModal from '../components/requirements/CreateRequirementModal'
import AddClientModal from '../components/clients/CreateClientModal'
import ClientsWrapper from '../components/clients/ClientsWrapper';
import AddCandidateModal from '../components/candidates/CreateCandidateModal'
//Spinner Imports
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
class ClientsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client: {
        name: '',
        access: '',
        accountOwner: '',
        category: '',
        websiteAddress: '',
        status: '',
        accountCode: '',
        phoneNumber1: '',
        phoneNumber2: '',
        country: '',
        state: '',
        city: '',
        street: '',
        zipCode: 0,
        fax: 0,
        email1: '',
        email2: '',
        description: ''
      },
      requirement:{
        access: '',
        accountOwner: '',
        billRate: 0,
        briefDescription: '',
        category: '',
        city: '',
        country: '',
        description: '',
        duration: '',
        employementType: '',
        endClient: '',
        experienceLevel: '',
        interviewType: '',
        localIndicator: '',
        maxResumesAllowed: 0,
        notes: '',
        numberOfOpenings: 0,
        payRate: '',
        posiitonType: '',
        primaryRecruiteer: '',
        projectEndDate: '',
        projectStartDate: '',
        requiredExperience: '',
        requiredSkills: '',
        requirementId: 0,
        requirementTitle: '',
        state: '',
        status: '',
        subCategory: '',
        visaType: '',
        zipCode: ''
      },
        candidate:{
          address: '',
          availableFrom: '',
          candidateId: '',
          candidateStatus: '',
          city: '',
          country: '',
          dateOfBirth: '',
          emailAddress: '',
          fatherName: '',
          fax: '',
          firstName: '',
          gender: '',
          hobbies: '',
          lastName: '',
          licenseNumber: '',
          linkedinUrl: '',
          maritalStatus: '',
          middleName: '',
          mobileNumber: '',
          motherName: '',
          nationality: '',
          noticePeriod: '',
          passportNumber: '',
          phoneNumber: '',
          preferredLocation1: '',
          preferredLocation2: '',
          skypeId: '',
          sourceBy: '',
          sourceFrom: '',
          sourceInfo: '',
          sourcing: '',
          state: '',
          visaStatus: '',
          zipCode: ''
        },
      modal: false,
      reqmodal: false,
      cadmodal: false,
      file:null
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.handleReqModalOpen = this.handleReqModalOpen.bind(this);
    this.handleReqModalClose = this.handleReqModalClose.bind(this);
    this.updateReqState = this.updateReqState.bind(this);
    this.saveRequirement = this.saveRequirement.bind(this);

    this.handleCadModalOpen = this.handleCadModalOpen.bind(this);
    this.handleCadModalClose = this.handleCadModalClose.bind(this);
    this.updateCadState = this.updateCadState.bind(this);
    this.saveCandidate = this.saveCandidate.bind(this);
    
    this.redirect = this.redirect.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    
    this.handleRequirements = this.handleRequirements.bind(this);
    this.handleCandidates = this.handleCandidates.bind(this);
    this.handleDocuments = this.handleDocuments.bind(this);
    this.handleDeleteClient = this.handleDeleteClient.bind(this);
    this.handleMoreInfo = this.handleMoreInfo.bind(this);
    this.uploadDocument = this.uploadDocument.bind(this);
    this.onFilechange =this.onFilechange.bind(this);
   
  }
  componentWillMount(){
    this.props.actions.loadClients();
  }
  updateCadState(event) {
    const field = event.target.name;
    const candidate = this.state.candidate;
    console.log(field+event.target.value);
    candidate[field] = event.target.value;
    return this.setState({candidate: candidate});
  }
  updateReqState(event) {
    const field = event.target.name;
    const requirement = this.state.requirement;
    console.log(field+event.target.value);
    requirement[field] = event.target.value;
    return this.setState({requirement: requirement});
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
  saveCandidate(event) {
    event.preventDefault();

    this.props.reqmoreinfoactions.createCandidate(this.state.candidate).then((candidate) => {
     this.setState({ cadmodal: false });
     this.redirect(candidate);
    });

  }
  saveRequirement(event) {
    event.preventDefault();

    this.props.moreinfoactions.createRequirement(this.state.requirement).then((requirement) => {
     this.setState({ reqmodal: false });
     this.redirect(requirement);
    });

  }

  saveCat(event) {
    event.preventDefault();

    this.props.actions.createCat(this.state.client).then((cat) => {
     this.setState({ modal: false });
     this.redirect(cat);
    });

  }
  handleCadModalOpen(link) {
    console.log(id+'viay');
    let id = link.split('/').pop(-1);
    //let req= Object.assign([], this.state.requirement)
    //req.id= id
    let linkarr=[];
    linkarr.push(link);
    this.setState({ candidate:{id:id, requirements:linkarr, requirement_id:id }, cadmodal: true });
  
  }
  handleCadModalClose() {
		this.setState({ cadmodal: false });
  }
  handleReqModalOpen(link) {
    console.log(id+'viay');
    let id = link.split('/').pop(-1);
    //let req= Object.assign([], this.state.requirement)
    //req.id= id
    this.setState({ requirement:{id:id, accounts:link, account_id:id }, reqmodal: true });
  
  }
  handleReqModalClose() {
		this.setState({ reqmodal: false });
  }

	handleModalOpen() {
    this.setState({ modal: true , 
      client: {
        name: '',
        access: '',
        accountOwner: '',
        category: '',
        websiteAddress: '',
        status: '',
        accountCode: '',
        phoneNumber1: '',
        phoneNumber2: '',
        country: '',
        state: '',
        city: '',
        street: '',
        zipCode: 0,
        fax: 0,
        email1: '',
        email2: '',
        description: ''
      },
    });
		
//  browserHistory.push(`/clients/new`);
	}
	handleModalClose() {
		this.setState({ modal: false });
  }
  onFilechange(event){
    this.setState({file:event.target.files[0]})
    
  }
  uploadDocument(event, link){
    event.preventDefault();
   let id = link.split('/').pop(-1);
    console.log('selected candiateid' +id);
    //console.log('id of the candidate'+id)
    this.props.candmoreinfoactions.fileUpload(this.state.file, id);
    //this.setState({file:[]});
  }
  
  handleDocuments(id , client,token, e){
    this.props.docmoreinfoactions.downloadDoc(id,client,token);
  }
  handleCandidates(link ,client, e){
    console.log('onclic'+link);
    this.props.candmoreinfoactions.loadCandMoreinfo(link,client);
    //store.dispatch(loadRequirements(text));
  }
handleRequirements(link ,client, e){
  console.log('onclic'+link);
  this.props.reqmoreinfoactions.loadReqMoreinfo(link,client);
  //store.dispatch(loadRequirements(text));
}
handleDeleteClient(link ,client, e ){
  //alert('Are you sure you want to delete the Client'+ client.name);
  this.props.actions.deleteCat(client, link);
}
handleMoreInfo(link ,client, e ){
  console.log("super parent called");
  this.props.moreinfoactions.loadMoreinfo(link,client);
}
  render() {
    const clients = this.props.clients;
    const moreinfo =this.props.moreinfo;
    const reqmoreinfo = this.props.reqmoreinfo;
    const candmoreinfo = this.props.candmoreinfo;
    return (
      <div >  
         {/* <Loader fullPage loading={this.state.loading} /> */}
          <ClientsWrapper
          clients={clients}
          moreinfo={moreinfo}
          reqmoreinfo={reqmoreinfo}
          candmoreinfo={candmoreinfo}
          docmoreinfo={this.props.docmoreinfo}
          onRequirements={this.handleRequirements}
          onCandidates={this.handleCandidates}
          onDocuments={this.handleDocuments}
          onUpload ={this.uploadDocument}
          onFilechange={this.onFilechange}
          onDelete={this.handleDeleteClient}
          onMoreInfo={this.handleMoreInfo}
          handleModalOpen={this.handleModalOpen}
          handleReqModalOpen={this.handleReqModalOpen}
          handleCadModalOpen={this.handleCadModalOpen}
          children ={this.props.children}
          />
          <AddClientModal
            client={this.state.client}
            onSave={this.saveCat}
            onChange={this.updateCatState}
            open={ this.state.modal }
            close={ this.handleModalClose }
          />
           <AddRequirementModal
            requirement={this.state.requirement}
            onSave={this.saveRequirement}
            onChange={this.updateReqState}
            open={ this.state.reqmodal }
            close={ this.handleReqModalClose }
          /> 
          <AddCandidateModal
            candidate={this.state.candidate}
            onSave={this.saveCandidate}
            onChange={this.updateCadState}
            open={ this.state.cadmodal }
            close={ this.handleCadModalClose }
          /> 
      </div>
    );
  }
}

ClientsPage.propTypes = {
  clients: PropTypes.object.isRequired,
  children: PropTypes.object,
  actions: PropTypes.object.isRequired,
  moreinfoactions: PropTypes.object.isRequired,
  moreinfo: PropTypes.object.isRequired,
  reqmoreinfo: PropTypes.object.isRequired,
  reqmoreinfoactions: PropTypes.object.isRequired,
  candmoreinfo: PropTypes.object.isRequired,
  candmoreinfoactions: PropTypes.object.isRequired,
  docmoreinfoactions:PropTypes.object.isRequired
  

};

function mapStateToProps(state, ownProps) {
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
    moreinfoactions: bindActionCreators(moreinfoActions, dispatch),
    reqmoreinfoactions: bindActionCreators(reqmoreinfoActions, dispatch),
    candmoreinfoactions: bindActionCreators(candmoreinfoActions, dispatch),
    docmoreinfoactions: bindActionCreators(docmoreinfoActions, dispatch )
  };
}
export default connect(mapStateToProps, mapDispatchToProps) (ClientsPage);
