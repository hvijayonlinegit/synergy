import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Material Imports
import Grid from '@material-ui/core/Grid';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
//Spinner Imports

import ClientList from './ClientList'
import ClientDetails from './ClientDetails';
import RequirementList from '../requirements/RequirementList'
import CandidateList from '../candidates/CandidateList'
import RequirementDetails from '../requirements/RequirementDetails'
import CandidateDetails from '../candidates/CandidatesDetails'
import DocumentsList from '../documents/DocumentsList'
import themes from '../theme'
import { Paper } from '@material-ui/core';
const styles = theme => ({
    
    card: {
        marginTop: '30%',
        marginRight: '10%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    button: {
        backgroundColor: 'lightBlue',
        margin: '10%'
    },
    pos: {
        //backgroundColor: 'lightBlue',
        border: '1px'
    },
    root: {
       // overflow:'auto'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    chippper:{
        boxShadow: '0 1px 6px rgba(32, 33, 36, 0.28)',
       
       // borderRadius: '40px',
        boxSizing: 'border-box',
        overFlow: 'hidden',
        padding: '10px 5px',
        color: theme.palette.primary.contrastText,
        backgroundColor: themes.palette.primary.main,
        //for vertical align
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        maxHeight: '70vh',
        minHeight: '70vh',
        display: 'flex',
        marginLeft: '15px',
        paddingTop: '150px'
    },
    detailsborder: {
        border: '1px solid grey',
        //borderLeft:'5px solid lightgreen'
    },
    detailsbordererror: {
        border: '0.1px dotted black',
        //borderLeft:'5px solid lightgreen'
    },
    detailsborderwarn: {
        border: '1px solid orange',
        //borderLeft:'5px solid lightgreen'
    },
   detailspad :{
    paddingTop: '10px',
   } ,
   beforeEle: {
    '&::before':  {
      marginTop: '2px',
      borderLeft: '2px solid #698591',
      display: 'block',
      width: '30px',
      content: '"Clients"'
    },
},
paperlayout:{
    padding: '40px 20px'
}
    
});

class ExampleGrid extends React.Component {

    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {

        const { classes } = this.props;
        const clients = this.props.clients;
        const requirements= this.props.moreinfo.client.requirements;
        //const documents = this.props.docmoreinfo.candidate.documents;
        return (
            <div className={classes.root}>
                <Grid container spacing={32} className={classes.paperlayout}>
                    
                    <Grid item xs={12} sm={12} >
                    <Paper >
                        {/* <ExpansionPanel expanded={true}  onChange={this.handleChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
                                {/* <div  className={classes.chippper}>Clients</div> */}
                            {/* </ExpansionPanelSummary>
                            <ExpansionPanelDetails   > */}
                                <Grid container spacing={24} className ={classes.detailspad}>
                                    <Grid item xs={8} sm={1} direction="column" >
                                        <div  className={classes.chippper}>Clients</div>
                                    </Grid>
                                    <Grid item xs={8} sm={3} direction="column" className={classes.pos}>
                                    
                                        <ClientList
                                            clients={clients}
                                            onRequirements={this.handleRequirements}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                            handleModalOpen={this.props.handleModalOpen}
                                        />
                                    </Grid>
                                    <Grid item xs={8}direction="column"  sm={8} >
                                        
                                        <ClientDetails moreinfo={this.props.moreinfo} ></ClientDetails>
                                    </Grid>
                                </Grid>
                            {/* </ExpansionPanelDetails>
                        </ExpansionPanel> */}
                        </Paper>
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={12}>
                        <Paper >
                        {/* <ExpansionPanel expanded={true} onChange={this.handleChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
                                {/* <div  className={classes.chippper}></div> */}
                            {/* </ExpansionPanelSummary>
                            <ExpansionPanelDetails> */}
                                <Grid container spacing={24} className ={classes.detailspad}>
                                    <Grid item xs={8} sm={1} direction="column" >
                                        <div  className={classes.chippper}>Requirements</div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} direction="column" className={classes.pos}>
                                    <RequirementList
                                            requirements={requirements}
                                            selectedclient = {this.props.moreinfo.client}
                                            onRequirements={this.props.onRequirements}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                            handleReqModalOpen={this.props.handleReqModalOpen}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8} direction="column"  >
                                        <RequirementDetails 
                                        requirements={this.props.reqmoreinfo.requirement}
                                        ></RequirementDetails>
                                    </Grid>
                                </Grid>
                            {/* </ExpansionPanelDetails>
                        </ExpansionPanel> */}
                        </Paper >
                    </Grid>
                    
                    <Grid item xs={12} sm={12}>
                        <Paper >
                        {/* <ExpansionPanel expanded={true} onChange={this.handleChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
                                {/* <div className={classes.chippper}>Candidates</div> */}

                            {/* </ExpansionPanelSummary>
                            <ExpansionPanelDetails> */}
                                <Grid container spacing={24} className ={classes.detailspad}>
                                    <Grid item xs={8} sm={1} direction="column" >
                                        <div  className={classes.chippper}>Candidates</div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} className={classes.pos}>
                                    <CandidateList
                                            candidates={this.props.reqmoreinfo.requirement.candidates}
                                            selectedRequirement = {this.props.reqmoreinfo.requirement}
                                            onCandidates={this.props.onCandidates}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                            handleCadModalOpen={this.props.handleCadModalOpen}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <CandidateDetails 
                                            candidate={this.props.candmoreinfo.candidate}
                                            ></CandidateDetails>
                                    </Grid>
                                </Grid>
                            {/* </ExpansionPanelDetails>
                        </ExpansionPanel> */}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {/* <ExpansionPanel expanded={true} onChange={this.handleChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <div className={classes.chippper} >Documents</div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails> */}
                            <Paper >
                                <Grid container spacing={24}>
                                     <Grid item xs={8} sm={1} direction="column" >
                                        <div  className={classes.chippper}>Documents</div>
                                    </Grid>
                                    <Grid item xs={12} sm={9} className={classes.pos}>
                                    
                                     <DocumentsList
                                            selectedCandidate={this.props.candmoreinfo.candidate}
                                            documents={this.props.docmoreinfo.documents}
                                            onDocuments={this.props.onDocuments}
                                            onFilechange={this.props.onFilechange}
                                            onUpload={this.props.onUpload}
                                            onDelete={this.handleDeleteClient}
                                            onMoreInfo={this.props.onMoreInfo}
                                    />  
                                    
                                    </Grid>
                                </Grid>
                            {/* </ExpansionPanelDetails>
                        </ExpansionPanel> */}
                        </Paper>
                    </Grid>
                </Grid>
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
    reqmoreinfo: PropTypes.object.isRequired,
    candmoreinfo: PropTypes.object.isRequired,
    docmoreinfo:PropTypes.object.isRequired,
    onCandidates: PropTypes.func.isRequired,
    onDocuments:PropTypes.func.isRequired,
    onUpload:PropTypes.func.isRequired,
    onFilechange:PropTypes.func.isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    handleReqModalOpen: PropTypes.func.isRequired,
    handleCadModalOpen: PropTypes.func.isRequired

};

export default withStyles(styles)(ExampleGrid);
