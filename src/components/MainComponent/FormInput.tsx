import { FormGroup, FormControlLabel } from "@mui/material";
import {
  Formbox,
  FormContainer,
  FormFields,
  CheckBox,
} from "../../styling/main/MainOverlayStyles";
import { FormHeading, CheckboxLabel } from "../../styling/main/MainTextStyles";
import { FormSubmit } from "../../styling/Buttons/ButtonStyles";
import { FormTnC } from "../../constants/constants";

const FieldStyle = {
  style: {
    borderRadius: "10px",
    border: "1px solid black",
  },
};

const FormInput = () => {
  return (
    <Formbox elevation={15}>
      <FormContainer>
        <FormHeading>To get a consultation</FormHeading>
        <FormGroup>
          <FormFields placeholder="Name" InputProps={FieldStyle} />
          <FormFields placeholder="E-mail" InputProps={FieldStyle} />
          <FormFields placeholder="+7 905 XXX XX XXX" InputProps={FieldStyle} />
          <FormControlLabel
            label={<CheckboxLabel>{FormTnC}</CheckboxLabel>}
            value="TnC"
            control={<CheckBox />}
          />
        </FormGroup>
        <FormSubmit variant="contained">Submit your application</FormSubmit>
      </FormContainer>
    </Formbox>
  );
};

export default FormInput;
