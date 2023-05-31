import { Grid, Stack, Typography } from "@mui/material";
import { ProgramDegreeDetails, ProgramOffers } from "./MobileConstant/MobileConstant";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { CenterTextHighPad } from "./MobileStyling/MobileStylingText";
import {
  BoxBoldHighPadNoLR,
  BoxCenterButton,
  ButtonCap,
  ButtonNoPad,
  ProgramDetailsContainer,
  SubmitAppLargeButton,
} from "./MobileStyling/MobileStylingOverlays";

const ProgramDetails = () => {
  let Program = "Bachelor";
  return (
    <>
      <CenterTextHighPad bgcolor="#ebe0e0">Study &gt; Moov</CenterTextHighPad>
      <BoxBoldHighPadNoLR>
        <ButtonNoPad size="small">
          <KeyboardArrowLeftIcon color="disabled" />
        </ButtonNoPad>
        Vienne University
      </BoxBoldHighPadNoLR>
      <Stack direction="row" sx={{ backgroundColor: "#ebe0e0" }}>
        {ProgramOffers.map((item) => (
          <ButtonCap>{item.value}</ButtonCap>
        ))}
      </Stack>
      <Grid container sx={{ padding: "15px" }}>
        <Grid item xs={12}>
          <Typography>Speciality</Typography>
          <Typography variant="h4">{Program} of Design</Typography>
        </Grid>
        {ProgramDegreeDetails.map((item) => (
          <>
            <ProgramDetailsContainer item xs={6}>
              <Typography>{item.title}</Typography>
              <Typography>{item.value}</Typography>
            </ProgramDetailsContainer>
          </>
        ))}
        <BoxCenterButton>
          <SubmitAppLargeButton size="large" variant="contained">
            Submit Your Application
          </SubmitAppLargeButton>
        </BoxCenterButton>
      </Grid>
    </>
  );
};

export default ProgramDetails;
