import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import React from "react";
// import { SignUpData } from "./interfaces";
import { useRegisterFormStyles } from "./styles";

export default function SignUp({
  onSubmit,
  formHandleSubmit,
  register,
  errors,
}) {
  const classes = useRegisterFormStyles();

  const termsCheckboxLabel = (
    <div>
      I accept 
    </div>
    
  );
  const termsCheckboxLabel1 = (
    <div>
     My CheckBox 
    </div>
  )
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Communication Hub
        </Typography>
        <form
          className={classes.form}
          onSubmit={formHandleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="employeeId"
                label="employeeId"
                name="employeeId"
                autoComplete="employeeId"
                inputRef={register}
                error={Boolean(errors.employeeId)}
                helperText={errors.employeeId ? errors.employeeId.message : " "}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="messageBody"
                label="Message-Body"
                type="messageBody"
                id="messageBody"
                inputRef={register}
                error={Boolean(errors.messageBody)}
                helperText={errors.messageBody ? errors.messageBody.message : " "}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="termsCheck"
                    name="termsCheck"
                    color="primary"
                    required
                  />
                }
                id="termsCheck"
                name="termsCheck"
                label={termsCheckboxLabel}
                inputRef={register}
              />
              <FormHelperText error>
                {errors.termsCheck ? errors.termsCheck.message : " "}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="termsCheck1"
                    name="termsCheck1"
                    color="primary"
                    required
                  />
                }
                id="termsCheck1"
                name="termsCheck1"
                inputRef={register}
                label={termsCheckboxLabel1}
              />
              <FormHelperText error>
                {errors.termsCheck ? errors.termsCheck.message : " "}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="termsCheck2"
                    name="termsCheck2"
                    color="primary"
                    required
                  />
                }
                id="termsCheck2"
                name="termsCheck2"
                label={termsCheckboxLabel}
                inputRef={register}
              />
              <FormHelperText error>
                {errors.termsCheck ? errors.termsCheck.message : " "}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" id="termsCheck1"
                name="Female"
                inputRef={register} control={<Radio />} label="Female" />
            <FormControlLabel value="male" id="termsCheck1"
                name="Male"
                inputRef={register} control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
