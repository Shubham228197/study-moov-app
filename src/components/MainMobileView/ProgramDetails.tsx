import { Button, Grid, Stack, Typography } from "@mui/material";
import {
  ProgramDegreeDetails,
  ProgramOffers,
} from "./MobileConstant/MobileConstant";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  BoxBoldHighPadNoLR,
  BoxCenterButton,
  ButtonNoPad,
  ProgramDetailsContainer,
  SubmitAppLargeButton,
} from "./MobileStyling/MobileStylingOverlays";
import MobNavTextBlue from "./MobNavTextBlue";
import { StyledToggleButtonGroupV3 } from "../../GeneralConstants/Constants";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

const ProgramDetails = () => {
  const [programChoice, setProgramChoice] = useState("bachelor");
  let ButtonHistory = "";

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    ButtonHistory = programChoice;
    setProgramChoice(newAlignment);
    if (newAlignment === null) {
      setProgramChoice(ButtonHistory);
    }
  };

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
          <StyledToggleButtonGroupV3
            size="small"
            value={programChoice}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ padding: "0px", margin: "0px" }}
          >
            <ToggleButton value={item.value} aria-label={item.label}>
              <Button
                color="inherit"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                {item.title}
              </Button>
            </ToggleButton>
          </StyledToggleButtonGroupV3>
        ))}
      </Stack>
      <Grid container sx={{ padding: "15px" }}>
        <Grid item xs={12}>
          <Typography>Speciality</Typography>
          <Typography variant="h4">Bachelor of Design</Typography>
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
