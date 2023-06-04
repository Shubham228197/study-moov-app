import { Paper } from "@mui/material";
import FooterIconMob from '../MainMobileView/FooterIconMob'
import FooterText from "../MainComponent/MainPage/FooterText";
import image from "../../FigmaImages/confetti_1-removebg-preview.png";
import { FormSecondaryText, BoldTextCenter } from "../../GeneralStyling/Texts";
import {
  ConfettiImage,
  ConfettiImageContainer,
} from "./MobileStyling/MobileStylingOverlays";
import MobNavTextBlack from "./MobNavTextBlack";

const ConsultationResult = () => (
  <>
    <Paper elevation={8}>
      <MobNavTextBlack />
      <ConfettiImageContainer>
        <ConfettiImage src={image} alt="confetti" />
        <BoldTextCenter variant="h5">
          Thank you! Your application has been sent
        </BoldTextCenter>
        <FormSecondaryText variant="body1">
          We will call you back as soon as possible to arrange a consultation.
        </FormSecondaryText>
      </ConfettiImageContainer>
    </Paper>
    <FooterIconMob />
    <FooterText />
  </>
);

export default ConsultationResult;
