import { Grid, Stack, Typography } from "@mui/material";
import {
  ProgramDegreeDetails,
  ProgramOffers,
} from "./MobileConstant/MobileConstant";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  BoxBoldHighPadNoLR,
  BoxCenterButton,
  ButtonCptzd,
  ButtonNoPad,
  PrgmListGrid,
  ProgramDetailsContainer,
  SubmitAppLargeButton,
} from "./MobileStyling/MobileStylingOverlays";
import MobNavTextBlue from "./MobNavTextBlue";
import { StyledToggleButtonGroupV3 } from "../../GeneralConstants/Constants";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { UtilityIcons } from "../MainComponent/MainStyling/HomepageOverlayStyles";
import GradCap from "../../FigmaImages/graduation-cap-icon-main.png";
import PencilIcon from "../../FigmaImages/pencil-icon.png";
import BellIcon from "../../FigmaImages/bell-icon.png";
import AppleIcon from "../../FigmaImages/apple-icon.png";
import ClockIcon from "../../FigmaImages/sandwatch-icon.png";
import { RouteLink } from "../../GeneralStyling/Overlays";

const ImageMap = [
  { id: 0, img: GradCap },
  { id: 1, img: PencilIcon },
  { id: 2, img: BellIcon },
  { id: 3, img: AppleIcon },
  { id: 4, img: ClockIcon },
];

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
          >
            <ToggleButton value={item.value} aria-label={item.label}>
              <ButtonCptzd color="inherit" size="small">
                {item.title}
              </ButtonCptzd>
            </ToggleButton>
          </StyledToggleButtonGroupV3>
        ))}
      </Stack>
      <PrgmListGrid container>
        <Grid item xs={12}>
          <Typography>
            <UtilityIcons src={ImageMap[0].img} />
            Speciality
          </Typography>
          <Typography variant="h4">Bachelor of Design</Typography>
        </Grid>
        {ProgramDegreeDetails.map((item) => (
          <>
            <ProgramDetailsContainer item xs={6} key={item.id}>
              <Typography>
                <UtilityIcons src={ImageMap[item.id].img} />
                {item.title}
              </Typography>
              <Typography>{item.value}</Typography>
            </ProgramDetailsContainer>
          </>
        ))}
        <BoxCenterButton>
          <RouteLink to="/formInput-mob">
            <SubmitAppLargeButton size="large" variant="contained">
              Submit Your Application
            </SubmitAppLargeButton>
          </RouteLink>
        </BoxCenterButton>
      </PrgmListGrid>
    </>
  );
};

export default ProgramDetails;
