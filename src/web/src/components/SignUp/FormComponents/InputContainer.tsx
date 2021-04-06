import { createStyles, makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    inputContainer: {
      display: 'grid',
      alignItems: 'center',
      justifyItems: 'center',
      width: '90%',
      gridTemplateColumns: '80% 20%',
      '& .MuiFormHelperText-root': {
        fontSize: '0.9em',
        color: 'black',
      },
      '& .MuiFormLabel-root': {
        color: 'black',
      },
      '& .MuiInputBase-input.Mui-disabled': {
        marginTop: '16px',
      },
    },
  })
);

type Props = {
  children: ReactNode;
};

const InputContainer = ({ children }: Props) => {
  const classes = useStyles();

  return <div className={classes.inputContainer}>{children}</div>;
};

export default InputContainer;
