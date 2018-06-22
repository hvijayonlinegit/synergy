import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
const CustomTableCell = withStyles(theme => ({
  head: {
    //backgroundColor: theme.palette.common.black,
  //  color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});
function CustomizedTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell >name</CustomTableCell>
            <CustomTableCell >Type</CustomTableCell>
            <CustomTableCell >Address</CustomTableCell>
            <CustomTableCell >Phone</CustomTableCell>
            <CustomTableCell >Team</CustomTableCell>
            <CustomTableCell >Requirements</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            props.clients.accountses.map(n => {
              const link= n._links.requirements.href
              let boundClick = props.onRequirements.bind(this, link);

              return (
                <TableRow className={classes.row} key={n._links.self.href} data={n}>
                  <CustomTableCell >{n.name}</CustomTableCell>
                  <CustomTableCell >{n.type}</CustomTableCell>
                  <CustomTableCell >{n.address}</CustomTableCell>
                  <CustomTableCell >{n.phone}</CustomTableCell>
                  <CustomTableCell >{n.team}</CustomTableCell>
                  <CustomTableCell ><Button  className={classes.button} onClick={boundClick}>
                  Requirements
                  </Button> </CustomTableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  clients: PropTypes.object.isRequired,
  onRequirements: PropTypes.func.isRequired,
};

export default withStyles(styles)(CustomizedTable);
