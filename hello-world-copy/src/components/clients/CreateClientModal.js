import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ClientInputForm from './ClientInputForm'
const styles = theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		overflowY: 'auto',
		maxHeight: '32vh',
		minHeight: '32vh',
		display: 'flex',
		flexWrap: 'wrap',
	},
	appBar: {
		position: 'relative',
	},
	flex: {
		flex: 1,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: theme.spacing.unit * 1,
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 150,
	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
		color: '#fff',
		marginLeft: '1px',
		backgroundColor: '#2196f3',
		'&:hover': {
			backgroundColor: '#1976d2',
		},
	},
	header: {
		width: '100%',
		backgroundColor: 'aliceblue',
		padding: '20px',
	},
	card: {
		border: '1px solid lightgrey',
		width: '100%',
		boxShadow: 'none',
		marginBottom: '10px'
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 150,
	},
	content: {
		padding: '16px'
	},
	afterEle: {
		'&::after': {
			marginTop: '2px',
			borderTop: '2px solid #698591',
			display: 'block',
			width: '30px',
			content: '""'
		},
	},

});
function Transition(props) {
	return <Slide direction="right" {...props} />;
}
class ClientModal extends React.Component {
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
			saving: false
		};

	}
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<Dialog
				open={this.props.open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullScreen
				TransitionComponent={Transition}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton color="inherit" onClick={this.props.close} aria-label="Close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" className={classes.flex}>
							Add a Client
					</Typography>
						<Button color="inherit" onClick={this.props.onSave}>
							save
					</Button>
					</Toolbar>
				</AppBar>
				<DialogContent>
					<ClientInputForm
						client={this.props.client}
						onChange={this.props.onChange}
						onSave={this.props.onSave}
					></ClientInputForm>
				</DialogContent>
			</Dialog>
		)
	}
}
ClientModal.propTypes = {
	fullScreen: PropTypes.bool,
	classes: PropTypes.object.isRequired,
	client: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ClientModal);
