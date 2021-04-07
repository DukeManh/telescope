import { createStyles, makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() =>
  createStyles({
    formInputLabel: {
      fontSize: '1.4em',
      color: 'black',
    },
    formControlLabel: {
      fontSize: '.9em',
      height: '10px',
      color: '#474747',
    },
  })
);

type Props = {
  label: string;
};

const CheckBoxInput = ({ label }: Props) => {
  const classes = useStyles();

  return (
    <FormControl required component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={false} name="githubOwnership" />}
          label={
            <h1 className={classes.formControlLabel}>
              I declare that I’m the owner and the maintainer of this GitHub account
            </h1>
          }
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckBoxInput;
