import { Paper } from "@mui/material";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import FooterText from "../MainComponent/MainPage/FooterText";
import image from "../../FigmaImages/confetti_1-removebg-preview.png";
import {
  FormSecondaryText,
  BoldTextCenter,
  CenterTextHighMar,
} from "../../GeneralStyling/Texts";
import { BoxCenter } from "../../GeneralStyling/Overlays";
import {
  ConfettiImage,
  ConfettiImageContainer,
} from "./MobileStyling/MobileStylingOverlays";
const ConsultationResult = () => {
  return (
    <>
      <Paper elevation={8}>
        <CenterTextHighMar>Study &gt; Moov</CenterTextHighMar>
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
      <BoxCenter>
        <FooterIcon />
        <FooterText />
      </BoxCenter>
    </>
  );
};

export default ConsultationResult;
