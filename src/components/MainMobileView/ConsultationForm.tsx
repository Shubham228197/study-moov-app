import { FormControl, FormGroup, FormControlLabel } from "@mui/material";
import {
  CheckboxLabel,
  FormHeading,
} from "../MainComponent/MainStyling/MainTextStyles";
import {
  CheckBox,
  FormFields,
} from "../MainComponent/MainStyling/MainOverlayStyles";
import { FormSubmit } from "../../GeneralStyling/Buttons";
import { FormTnC } from "../../GeneralConstants/Constants";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import FooterText from "../MainComponent/MainPage/FooterText";
import { PaperMidPad } from "./MobileStyling/MobileStylingOverlays";
import { CenterTextHighMar } from "../../GeneralStyling/Texts";

export const FieldStyle = {
  style: {
    borderRadius: "10px",
    border: "1px solid black",
  },
};

const ConsultationForm = () => {
  return (
    <>
      <PaperMidPad elevation={8}>
        <CenterTextHighMar>Study &gt; Moov</CenterTextHighMar>
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
      </PaperMidPad>
      <FooterIcon />
      <FooterText />
    </>
  );
};

export default ConsultationForm;
