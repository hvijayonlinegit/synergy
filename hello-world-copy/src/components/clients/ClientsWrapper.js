import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Material Imports
import Grid from '@material-ui/core/Grid';
import { Paper} from '@material-ui/core';
// component imports
import ClientList from './ClientList'
import ClientDetails from './ClientDetails';
import RequirementList from '../requirements/RequirementList'
import CandidateList from '../candidates/CandidateList'
import RequirementDetails from '../requirements/RequirementDetails'
import CandidateDetails from '../candidates/CandidatesDetails'
import DocumentsList from '../documents/DocumentsList'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
    padding: theme.spacing.unit * 1,
    color: theme.palette.text.secondary,
    marginBottom:'10px',
    marginTop: '10px'
    }
});

class ExampleGrid extends React.Component {

    state = {
        expanded: null,
        path:''
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {

        const { classes } = this.props;
        const clients = this.props.clients;
        const requirements= this.props.moreinfo.requirements;
        return (
                <div className={classes.root}>
                   {
                       (this.props.path !== 'requirements' && this.props.path !== 'candidates' && this.props.path !== 'Documents' )?
                       <Paper className={classes.paper}>
                            <Grid container spacing={0} className={classes.gridHeight}>
                                <Grid item   md ={3}sm={4}>
                                    <ClientList 
                                        clients={clients}
                                        onRequirements={this.handleRequirements}
                                        onDelete={this.handleDeleteClient}
                                        onMoreInfo={this.props.onMoreInfo}
                                        handleModalOpen={this.props.handleModalOpen}
                                        handleClientEdit={this.props.onEdit}
                                    />
                                </Grid>
                                <Grid  item  md={9} sm={8}>
                                    <ClientDetails updateClient = {this.props.updateClient} moreinfo={this.props.moreinfo} editMode={this.props.editMode}></ClientDetails>
                                </Grid>
                            </Grid>
                        </Paper>:
                        <div></div>
                   } 
                    {(this.props.path !== 'candidates'&& this.props.path !== 'Documents')?<Paper className={classes.paper}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={3}>
                            <RequirementList
                                requirements={requirements}
                                selectedclient = {this.props.moreinfo.client}
                                onRequirements={this.props.onRequirements}
                                onDelete={this.handleDeleteClient}
                                onMoreInfo={this.props.onMoreInfo}
                                handleReqModalOpen={this.props.handleReqModalOpen}
                            />
                            </Grid>
                            <Grid  item xs={12} sm={9}>
                                <RequirementDetails 
                                    updateRequirement = {this.props.updateRequirement}
                                    requirement={this.props.reqmoreinfo.requirement}
                                    ></RequirementDetails>
                            </Grid>
                        </Grid>
                    </Paper>:<div></div>
                    }
                    {this.props.path !== 'Documents'?<Paper className={classes.paper}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={3}>
                            <CandidateList
                                candidates={this.props.reqmoreinfo.candidates}
                                selectedRequirement = {this.props.reqmoreinfo.requirement}
                                onCandidates={this.props.onCandidates}
                                onDelete={this.handleDeleteClient}
                                onMoreInfo={this.props.onMoreInfo}
                                handleCadModalOpen={this.props.handleCadModalOpen}
                            />
                            </Grid>
                            <Grid  item xs={12} sm={9}>
                            <CandidateDetails 
                                updateCandidate= {this.props.updateCandidate} 
                                candidate={this.props.candmoreinfo.candidate}
                                ></CandidateDetails>
                            </Grid>
                        </Grid>
                    </Paper>:<div></div>}
                    <Paper className={classes.paper}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12}>
                            <DocumentsList
                                selectedCandidate={this.props.candmoreinfo.candidate}
                                documents={this.props.docmoreinfo.documents}
                                filelink={this.props.docmoreinfo.filelink}
                                onDocuments={this.props.onDocuments}
                                onFilechange={this.props.onFilechange}
                                onUpload={this.props.onUpload}
                                onDelete={this.handleDeleteClient}
                                onMoreInfo={this.props.onMoreInfo}
                                />  
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            );
    }
}

ExampleGrid.propTypes = {
    clients: PropTypes.object.isRequired,
    onRequirements: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMoreInfo: PropTypes.func.isRequired,
    moreinfo: PropTypes.object.isRequired,
    editMode: PropTypes.bool.isRequired,
    reqmoreinfo: PropTypes.object.isRequired,
    candmoreinfo: PropTypes.object.isRequired,
    docmoreinfo:PropTypes.object.isRequired,
    onCandidates: PropTypes.func.isRequired,
    onDocuments:PropTypes.func.isRequired,
    onUpload:PropTypes.func.isRequired,
    onFilechange:PropTypes.func.isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    handleReqModalOpen: PropTypes.func.isRequired,
    handleCadModalOpen: PropTypes.func.isRequired,
    updateClient: PropTypes.func.isRequired,
    updateRequirement: PropTypes.func.isRequired,
    updateCandidate: PropTypes.func.isRequired,
    path:PropTypes.object.isRequired,
};

export default withStyles(styles)(ExampleGrid);
