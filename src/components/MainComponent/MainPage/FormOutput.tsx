import { Grid } from "@mui/material";
import image from "../../FigmaImages/confetti_1-removebg-preview.png";
import {
  Formbox,
  MessageBox,
  FormImageContainer,
  CrackerImage,
} from "../MainStyling/MainOverlayStyles";
import {
  FormPrimaryText,
  FormSecondaryText,
} from "../MainStyling/MainTextStyles";

const FormOutput = () => {
  return (
    <Formbox elevation={15}>
      <MessageBox>
        <FormImageContainer item xs={12}>
          <CrackerImage src={image} alt="congo_image" />
        </FormImageContainer>
        <Grid item xs={12}>
          <FormPrimaryText variant="h5">
            Thank you! Your application has been sent
          </FormPrimaryText>
        </Grid>
        <Grid item xs={12}>
          <FormSecondaryText variant="body1">
            We will call you back as soon as possible to arrange a consultation.
          </FormSecondaryText>
        </Grid>
      </MessageBox>
    </Formbox>
  );
};

export default FormOutput;
