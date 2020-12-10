import withStyles from '@material-ui/core/styles/withStyles';
import { TextField } from '@material-ui/core';

const CustomTextField = withStyles({
  root: {
    color: '#573e8c',
    '& .MuiFormLabel-root': {
      color: '#573e8c'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#573e8c'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#573e8c'
    }
  },
})(TextField);

export default CustomTextField;
