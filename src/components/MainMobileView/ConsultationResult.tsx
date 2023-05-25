import { Box, Paper, Stack, Typography } from "@mui/material";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";
import image from "../../figma_Images/confetti_1-removebg-preview.png";
import {
  FormPrimaryText,
  FormSecondaryText,
} from "../../styling/main/MainTextStyles";

const ConsultationResult = () => {
  return (
    <>
      <Paper elevation={8}>
        <Typography sx={{textAlign: "center", padding: '20px' }}>
          Study &gt; Moov
        </Typography>
        <Stack direction="column" sx={{ padding: "40px 0px 80px 0px" }}>
          <img
            src={image}
            alt="celebration"
            style={{
              maxHeight: "100px",
              maxWidth: "100px",
              display: "flex",
              margin: "20px auto",
            }}
          />
          <FormPrimaryText variant="h5">
            Thank you! Your application has been sent
          </FormPrimaryText>
          <FormSecondaryText variant="body1">
            We will call you back as soon as possible to arrange a consultation.
          </FormSecondaryText>
        </Stack>
      </Paper>
      <Box sx={{ textAlign: "center" }}>
        <FooterIcon />
        <FooterText />
      </Box>
    </>
  );
};

export default ConsultationResult;
