import { Grid, Stack, Typography } from "@mui/material";
import {
  ProgramDegreeDetails,
  ProgramOffers,
} from "./MobileConstant/MobileConstant";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  BoxBoldHighPadNoLR,
  BoxCenterButton,
  ButtonCap,
  ButtonNoPad,
  ProgramDetailsContainer,
  SubmitAppLargeButton,
} from "./MobileStyling/MobileStylingOverlays";
import MobNavTextBlue from "./MobNavTextBlue";

const ProgramDetails = () => {
  let Program = "Bachelor";
  return (
    <>
      <MobNavTextBlue />
      <BoxBoldHighPadNoLR>
        <ButtonNoPad size="small">
          <KeyboardArrowLeftIcon color="disabled" />
        </ButtonNoPad>
        Vienne University
      </BoxBoldHighPadNoLR>
      <Stack direction="row" sx={{ backgroundColor: "#ebe0e0" }}>
        {ProgramOffers.map((item) => (
          <ButtonCap key={item.id}>{item.value}</ButtonCap>
        ))}
      </Stack>
      <Grid container sx={{ padding: "15px" }}>
        <Grid item xs={12}>
          <Typography>Speciality</Typography>
          <Typography variant="h4">{Program} of Design</Typography>
        </Grid>
        {ProgramDegreeDetails.map((item) => (
          <>
            <ProgramDetailsContainer item xs={6} key={item.id}>
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
