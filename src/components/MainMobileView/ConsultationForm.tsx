import {
  Paper,
  FormControl,
  FormGroup,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";
import { CheckboxLabel, FormHeading } from "../../styling/main/MainTextStyles";
import { CheckBox, FormFields } from "../../styling/main/MainOverlayStyles";
import { FormSubmit } from "../../styling/Buttons/ButtonStyles";
import { FormTnC } from "../../constants/constants";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";

const FieldStyle = {
  style: {
    borderRadius: "10px",
    border: "1px solid black",
  },
};
const ConsultationForm = () => {
  return (
    <>
      <Paper elevation={8} sx={{ padding: "10px" }}>
        <Typography sx={{ margin: "20px", textAlign: "center" }}>
          Study &gt; Moov
        </Typography>
        <FormControl>
          <FormHeading>Book a consultation</FormHeading>
          <FormGroup>
            <FormFields placeholder="Name" InputProps={FieldStyle} />
            <FormFields placeholder="E-mail" InputProps={FieldStyle} />
            <FormFields
              placeholder="+7 905 XXX XX XXX"
              InputProps={FieldStyle}
            />
            <FormControlLabel
              label={<CheckboxLabel>{FormTnC}</CheckboxLabel>}
              value="TnC"
              control={<CheckBox />}
            />
          </FormGroup>
          <FormSubmit variant="contained">Submit your application</FormSubmit>
        </FormControl>
      </Paper>
      <Box sx={{ textAlign: "center" }}>
        <FooterIcon />
        <FooterText />
      </Box>
    </>
  );
};

export default ConsultationForm;
