import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as clientActions from '../actions/clientActions'
import * as moreinfoActions from '../actions/moreinfoActions';
import * as reqmoreinfoActions from '../actions/reqmoreinfoActions';
import * as candmoreinfoActions from '../actions/candmoreinfoActions';
import * as docmoreinfoActions from '../actions/docmoreinfoActions';
import AddRequirementModal from '../components/requirements/CreateRequirementModal'
import AddClientModal from '../components/clients/CreateClientModal'
import ClientsWrapper from '../components/clients/ClientsWrapper';
import AddCandidateModal from '../components/candidates/CreateCandidateModal'
import SaveAlert from '../common/SaveAlert';
import model from '../common/model'
class CommonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: model.client,
            requirement: model.requirement,
            candidate: model.candidate,
            modal: false,
            reqmodal: false,
            cadmodal: false,
            editMode: false,
            file: null,
            path: '',
            openAlert: false,
            selectedClientId: '',
            saveFor: '',
            selectedReqId: '',
            selectedCandId: '',
        };
        //Clients page functions
        this.createClient = this.createClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.updateClientState = this.updateClientState.bind(this);
        this.updateConfirm = this.updateConfirm.bind(this);
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
        this.handleSaveAlertClose = this.handleSaveAlertClose.bind(this);
        this.handleSaveAlertOpen = this.handleSaveAlertOpen.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleDeleteClient = this.handleDeleteClient.bind(this);

        // Requirements page functions
        this.createRequirement = this.createRequirement.bind(this);
        this.updateReqState = this.updateReqState.bind(this);
        this.updateRequirement = this.updateRequirement.bind(this);
        this.handleReqModalOpen = this.handleReqModalOpen.bind(this);
        this.handleReqModalClose = this.handleReqModalClose.bind(this);
        this.handleRequirements = this.handleRequirements.bind(this);

        // Candidates page functions
        this.handleCadModalOpen = this.handleCadModalOpen.bind(this);
        this.handleCadModalClose = this.handleCadModalClose.bind(this);
        this.updateCadState = this.updateCadState.bind(this);
        this.saveCandidate = this.saveCandidate.bind(this);
        this.updateCandidate = this.updateCandidate.bind(this);
        this.handleCandidates = this.handleCandidates.bind(this);

        // Documents page functions    
        this.handleDocuments = this.handleDocuments.bind(this);
        this.uploadDocument = this.uploadDocument.bind(this);
        this.onFilechange = this.onFilechange.bind(this);
    }

    //Clients page functions
    createClient(event) {
        if (this.state.client.name === '') {
        }
        else {
            event.preventDefault();
            this.props.actions.createCat(this.state.client).then(() => {
                this.setState({ modal: false });
            });
        }
    }
    updateClient(client, id) {
        this.setState({ client: client, selectedClientId: id, saveFor: 'clients' });
        this.handleSaveAlertOpen();
    }
    updateClientState(event) {
        const field = event.target.name;
        const client = this.state.client;
        client[field] = event.target.value;
        return this.setState({ client: client });
    }

    handleDeleteClient(link, client) {
        this.props.actions.deleteCat(client, link);
    }
    handleMoreInfo(link, client, edit) {
        this.props.moreinfoactions.loadMoreinfo(link, client, edit);
    }
    handleModalOpen(n) {
        if (n === 'edit') {
            this.setState({ editMode: true });
        } else {
            this.setState({
                modal: true,
                client: model.client,
            });
        }
    }
    handleModalClose() {
        this.setState({ modal: false });
    }
    // requirement functions
    createRequirement(event) {
        event.preventDefault();
        this.props.moreinfoactions.createRequirement(this.state.requirement).then(() => {
            this.setState({ reqmodal: false });
        });
    }
    updateReqState(event) {
        const field = event.target.name;
        const requirement = this.state.requirement;
        requirement[field] = event.target.value;
        return this.setState({ requirement: requirement });
    }
    updateRequirement(requirement, id) {
        this.setState({ requirement: requirement, selectedReqId: id, saveFor: 'requirements' });
        this.handleSaveAlertOpen();
    }
    handleReqModalOpen(link) {
        let id = link.split('/').pop(-1);
        this.setState({ requirement: { id: id, accounts: link, account_id: id }, reqmodal: true });
    }
    handleReqModalClose() {
        this.setState({ reqmodal: false });
    }
    handleRequirements(link,selectedClientLink, client) {
        this.props.reqmoreinfoactions.loadReqMoreinfo(link, client,selectedClientLink);
       // this.props.reqmoreinfoactions.loadSelectedClient(selectedClientLink);
        
        
    }
    ////////////////////////////////
    // Candidate page functions
    updateCadState(event) {
        const field = event.target.name;
        const candidate = this.state.candidate;
        candidate[field] = event.target.value;
        return this.setState({ candidate: candidate });
    }
    saveCandidate(event) {
        event.preventDefault();
        this.props.reqmoreinfoactions.createCandidate(this.state.candidate).then(() => {
            this.setState({ cadmodal: false });
        });
    }
    updateCandidate(candidate, id) {
        this.setState({ candidate: candidate, selectedCandId: id, saveFor: 'candidates' });
        this.handleSaveAlertOpen();
    }
    handleCadModalOpen(link) {
        let id = link.split('/').pop(-1);
        let linkarr = [];
        linkarr.push(link);
        this.setState({ candidate: { id: id, requirements: linkarr, requirement_id: id }, cadmodal: true });
    }
    handleCadModalClose() {
        this.setState({ cadmodal: false });
    }
    handleCandidates(link, client) {
        this.props.candmoreinfoactions.loadCandMoreinfo(link, client);
    }
    //////////////////////
    ///Document page functions///////
    onFilechange(event) {
        this.setState({ file: event.target.files[0] })

    }
    uploadDocument(event, link) {
        event.preventDefault();
        let id = link.split('/').pop(-1);
        this.props.candmoreinfoactions.fileUpload(this.state.file, id);
    }
    handleDocuments(id, docname) {
        this.props.docmoreinfoactions.downloadDoc(id, docname);
    }
    /// Common functions////
    handleSaveAlertClose() {
        this.setState({ openAlert: false });
    }
    handleSaveAlertOpen() {
        this.setState({ openAlert: true });
    }
    updateConfirm() {
        this.setState({ openAlert: false, });
        if (this.state.saveFor === 'clients') {
            this.props.actions.updateClient(this.state.client, this.state.selectedClientId).then(() => {
            });
        }
        else if (this.state.saveFor === 'requirements') {
            this.props.moreinfoactions.updateRequirement(this.state.requirement, this.state.selectedReqId).then(() => {
            });
        }
        else if (this.state.saveFor === 'candidates') {
            this.props.reqmoreinfoactions.updateCandidate(this.state.candidate, this.state.selectedCandId).then(() => {
            });
        }
        this.setState({ saveFor: '' });
    }
    render() {
        const clients = this.props.clients;
        const moreinfo = this.props.moreinfo;
        const reqmoreinfo = this.props.reqmoreinfo;
        const candmoreinfo = this.props.candmoreinfo;
        return (
            <div >
                <ClientsWrapper
                    clients={clients}
                    moreinfo={moreinfo}
                    reqmoreinfo={reqmoreinfo}
                    candmoreinfo={candmoreinfo}
                    editMode={this.state.editMode}
                    docmoreinfo={this.props.docmoreinfo}
                    onRequirements={this.handleRequirements}
                    onCandidates={this.handleCandidates}
                    onDocuments={this.handleDocuments}
                    onUpload={this.uploadDocument}
                    onFilechange={this.onFilechange}
                    onDelete={this.handleDeleteClient}
                    onMoreInfo={this.handleMoreInfo}
                    handleModalOpen={this.handleModalOpen}
                    handleReqModalOpen={this.handleReqModalOpen}
                    handleCadModalOpen={this.handleCadModalOpen}
                    updateClient={this.updateClient}
                    updateRequirement={this.updateRequirement}
                    updateCandidate={this.updateCandidate}
                    children={this.props.children}
                    path={this.props.path}
                />
                <AddClientModal
                    client={this.state.client}
                    onSave={this.createClient}
                    onChange={this.updateClientState}
                    open={this.state.modal}
                    close={this.handleModalClose}
                />
                <AddRequirementModal
                    requirement={this.state.requirement}
                    onSave={this.createRequirement}
                    onChange={this.updateReqState}
                    open={this.state.reqmodal}
                    close={this.handleReqModalClose}
                />
                <AddCandidateModal
                    candidate={this.state.candidate}
                    onSave={this.saveCandidate}
                    onChange={this.updateCadState}
                    open={this.state.cadmodal}
                    close={this.handleCadModalClose}
                />
                <SaveAlert 
                updateConfirm={this.updateConfirm} 
                open={this.state.openAlert} 
                onClose={this.handleSaveAlertClose} 
                />
            </div>
        );
    }
}
CommonPage.propTypes = {
    clients: PropTypes.any.isRequired,
    children: PropTypes.object,
    actions: PropTypes.object.isRequired,
    moreinfoactions: PropTypes.object.isRequired,
    moreinfo: PropTypes.any.isRequired,
    reqmoreinfo: PropTypes.any.isRequired,
    reqmoreinfoactions: PropTypes.object.isRequired,
    candmoreinfo: PropTypes.any.isRequired,
    candmoreinfoactions: PropTypes.object.isRequired,
    docmoreinfoactions: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        clients: state.clients,
        moreinfo: state.moreinfo,
        reqmoreinfo: state.reqmoreinfo,
        candmoreinfo: state.candmoreinfo,
        docmoreinfo: state.docmoreinfo,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(clientActions, dispatch),
        moreinfoactions: bindActionCreators(moreinfoActions, dispatch),
        reqmoreinfoactions: bindActionCreators(reqmoreinfoActions, dispatch),
        candmoreinfoactions: bindActionCreators(candmoreinfoActions, dispatch),
        docmoreinfoactions: bindActionCreators(docmoreinfoActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CommonPage);
