import { Paper } from "@mui/material";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";
import image from "../../figma_Images/confetti_1-removebg-preview.png";
import { FormSecondaryText } from "../../styling/main/MainTextStyles";
import { CenterBoldText, CenterTextHighMar } from "./Styling/MobileStylingText";
import {
  BoxCenter,
  ConfettiImage,
  ConfettiImageContainer,
} from "./Styling/MobileStylingOverlays";

const ConsultationResult = () => {
  return (
    <>
      <Paper elevation={8}>
        <CenterTextHighMar>Study &gt; Moov</CenterTextHighMar>
        <ConfettiImageContainer>
          <ConfettiImage src={image} alt="confetti" />
          <CenterBoldText variant="h5">
            Thank you! Your application has been sent
          </CenterBoldText>
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
