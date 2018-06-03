import React from 'react';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import SvgIcon from '@material-ui/core/SvgIcon';
const SearchBox = () => {

  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {


      borderRadius: 2,
      height: 35
    },
    inputStyle: {

      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,

    }
  };

  return (
    <div>
      <IconButton style={styles.iconButton} >
        Search
      </IconButton>
      <TextField
        hintText="Search..."
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;
