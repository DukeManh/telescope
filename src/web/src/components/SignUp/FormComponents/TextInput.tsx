import { useField } from 'formik';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    formInput: {
      fontSize: '1.1em',
      color: 'black',
    },
    formInputLabel: {
      fontSize: '1.4em',
      color: 'black',
    },
  })
);

const TextInput = (props: TextFieldProps) => {
  const classes = useStyles();

  const { helperText, ...rest } = props;
  const [field, meta] = useField(props as any);

  const renderHelperText = () => (meta.touched && meta.error ? meta.error : helperText || '');

  return (
    <TextField
      InputProps={{
        classes: {
          input: classes.formInput,
        },
      }}
      InputLabelProps={{
        classes: {
          root: classes.formInputLabel,
        },
      }}
      fullWidth
      type="text"
      error={meta.touched && !!meta.error}
      helperText={renderHelperText()}
      {...field}
      {...rest}
    />
  );
};

export default TextInput;
