import { createStyles, makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useField, FieldHookConfig } from 'formik';

const useStyles = makeStyles(() =>
  createStyles({
    formInputLabel: {
      fontSize: '1.4em',
      color: 'black',
    },
    formControlLabel: {
      fontSize: '1em',
      color: '#474747',
    },
  })
);

type CheckboxProps = {
  name: string;
  label: string;
};

const CheckBoxInput = (props: CheckboxProps) => {
  const classes = useStyles();

  const { label, name, ...rest } = props;

  const [field, meta] = useField(props);

  return (
    <FormControl {...rest} error={!!meta.error && meta.touched}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...field} />}
          label={<span className={classes.formControlLabel}>{label}</span>}
          name={name}
        />
      </FormGroup>
      <FormHelperText>{meta.error && meta.touched ? meta.error : ''}</FormHelperText>
    </FormControl>
  );
};

export default CheckBoxInput;
