import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MySnackbarContentWrapper from '../../common/MySnackContent';
import 'react-overlay-loader/styles.css';
import Audit from '../../common/Audit'
import CardHeader from '../../common/CardDetailsHeader'
import Model from '../../common/model'
const styles = theme => ({
	root: {
		width: '100%',
		overflowY: 'auto',
		maxHeight: '35vh',
		minHeight: '35vh',
		display: 'flex',
		flexWrap: 'wrap',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: theme.spacing.unit * 1,
	},
	card: {
		border: '1px solid lightgrey',
		width: '100%',
		boxShadow: 'none',
		marginBottom: '10px'
	},

	formControl: {
		margin: theme.spacing.unit,
		minWidth: 70
	},
	formControlState:{
		margin: theme.spacing.unit,
		minWidth: 50,
	},
	textFieldMax: {
		margin: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 150,
	  },
	  textFieldEmail: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	  },
	textField: {
		margin: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 100,
	  },
	  textFieldMin: {
		margin: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 80,
	  },
	  adorment: {
		  marginRight: '0'
	  },
	  customselect: {
		  paddingTop: '1px'
	  }
});

class DocumentDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getInitState();
		this.updateDocument = this.updateDocument.bind(this);
	}
	getInitState() {
		const { document } = this.props.documentsMoreinfo.document
		return document ? document : Model.document
	}
	componentWillReceiveProps(_nextProps) {
		console.log(_nextProps);
		this.setState({
			..._nextProps.documentsMoreinfo.document
		})
	}
	handleChange = name => ({ target: { value } }) =>
		this.setState({
			[name]: value
		})

	updateDocument(){
		// get Document id
		const id = this.state._links.self.href.split('/').pop(-1);
		//remove unwanted properties from object for update call
		const { 'requirements': parentValue, ...documentwithoutrreq } = this.state;
		const { '_links': parentValue1, ...documentwithoutlinks } = documentwithoutrreq;
		//make a action call to update data in db
		this.props.updateDocument(documentwithoutlinks,id);
	}
	render() {
		const { classes } = this.props;
		function isEmpty(obj) {
			return Object.keys(obj).length === 0;
		}

		if (isEmpty(this.props.documentsMoreinfo.document)) {
			return (<div>
				<MySnackbarContentWrapper
					variant="info"
					className={classes.margin}
					message="There are no Requirements to Show , Please click/add a requirement!"
				/>
			</div>);
		}
		else {
			return (
				<div className={classes.root}>
					<form className={classes.container} noValidate autoComplete="off">
						<Card className={classes.card}>
							<CardContent >
								<CardHeader parentMehod={this.updateDocument}></CardHeader>
								<TextField InputLabelProps={{ shrink: true }}
									margin="dense"
									//placeholder="Enter Document name"
									name="name"
									label="Name"
									value={this.state.name || ''}
									onChange={this.handleChange('name')}
									required
									className={classes.textFieldMax}
									
									 />
								<TextField
									margin="dense"
									placeholder="Enter Account Code"
									name="type"
									label="Type"
									value={this.state.type || ''}
									onChange={this.handleChange('type')}
									required
									className={classes.textFieldMin}
									 />
								
								<TextField
									margin="dense"
									name="issueDate"
									label="issueDate"
									value={this.state.issueDate || ''}
									onChange={this.handleChange('issueDate')}
									className={classes.textFieldMax}
								/>
								<TextField
									margin="dense"
									//placeholder="Enter email1 "
									name="expiryDate"
									label="expiryDate"
									value={this.state.expiryDate || ''}
									onChange={this.handleChange('expiryDate')}
									className={classes.textFieldEmail}
								/>
								<TextField
									margin="dense"
									placeholder="Enter email2 "
									name="email2"
									label="Email2"
									value={this.state.email2}
									onChange={this.handleChange('email2')}
									className={classes.textFieldEmail}
								/>
								<TextField
									margin="dense"
									
									name="attachedBy"
									label="Attached By"
									value={this.state.attachedBy}
									onChange={this.handleChange('attachedBy')}
									className={classes.textField}
								/>
								
								<TextField
									margin="dense"
									placeholder="Enter fax "
									name="updatedBY"
									label="Updated BY"
									value={this.state.updatedBY || ''}
									onChange={this.handleChange('updatedBY')}
									className={classes.textField}
								/>
								
								
								<TextField
									margin="dense"
									placeholder="Enter street name"
									name="documentOwner "
									label="Document Owner"
									value={this.state.documentOwner || ''}
									onChange={this.handleChange('documentOwner')}
									className={classes.textFieldMax}
								/>
								
								
								<TextField
									id="multiline-static"
									multiline
									rows="4"
									label="Notes"
									margin="normal"
									fullWidth
									name="notes"
									value={this.state.notes || ''}
									onChange={this.handleChange('notes')}
								/>
								
								<CardActions>
								</CardActions>
							</CardContent>
						</Card>
						<Audit createdBy={this.state.createdBy} createdAt={this.state.createdAt} updatedBy={this.state.updatedBy} updatedAt= {this.state.updatedAt}></Audit>
					</form>
				</div>
			);
		}

	}
}

DocumentDetails.propTypes = {
	classes: PropTypes.object.isRequired,
	documentsMoreinfo:PropTypes.array.isRequired,
	updateDocument: PropTypes.func.isRequired,
};

export default withStyles(styles)(DocumentDetails);
