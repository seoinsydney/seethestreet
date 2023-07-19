import styles from '@/styles/components.module.scss'
import { TextField } from '@mui/material';

const InputBox = ({ label, placeHolder }) => {
  return (
    <div>
        <TextField 
        required
        id="filled-required"
        label={label}
        // defaultValue={placeHolder}
        placeholder={placeHolder}
        // variant="standard"
        multiline="false"
        className={styles.inputBox}
        />
    </div>
  );
};

export default InputBox;