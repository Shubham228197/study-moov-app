import { Box, Button, Divider, Grid } from "@mui/material";
import GradImage from "../../../FigmaImages/graduation-cap-icon-main.png";
import PencilImage from "../../../FigmaImages/pencil-icon.png";
import BellImage from "../../../FigmaImages/bell-icon.png";
import AppleImage from "../../../FigmaImages/apple-icon.png";
import SandClockImage from "../../../FigmaImages/sandwatch-icon.png";
import {
  CollegeInfoExtended,
  ExtendedInfoButtonContainer,
  UtilityIcons,
} from "../MainStyling/HomepageOverlayStyles";
import { CollegeDegreeDetails } from "../../../GeneralConstants/Constants";
import { GridHighPad } from "../../../GeneralStyling/Overlays";
import { StyledToggleButtonGroupV3 } from "../../../GeneralConstants/Constants";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

const CollegeCardMoreDetails = () => {
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
    <CollegeInfoExtended elevation={6}>
      <ExtendedInfoButtonContainer>
        <StyledToggleButtonGroupV3
          size="small"
          value={programChoice}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{padding: '0px', margin: '0px'}}
        >
          <ToggleButton value="bachelor" aria-label="bachelor-degree">
            <Button color="inherit">Bachelor's degree</Button>
          </ToggleButton>
          <ToggleButton value="master" aria-label="master-degree">
            <Button color="inherit">Master's Degree</Button>
          </ToggleButton>
          <ToggleButton value="under18" aria-label="under18-degree">
            <Button color="inherit">Programs Under 18</Button>
          </ToggleButton>
        </StyledToggleButtonGroupV3>
      </ExtendedInfoButtonContainer>
      <Box>
        <Grid container>
          <GridHighPad item xs={2}>
            <UtilityIcons src={GradImage} alt="Graduation-icon" />
            Program
          </GridHighPad>

          <GridHighPad item xs={2}>
            <UtilityIcons src={PencilImage} alt="Pencil-icon" />
            Submission to
          </GridHighPad>

          <GridHighPad item xs={2}>
            <UtilityIcons src={BellImage} alt="Bell-icon" />
            Start date
          </GridHighPad>

          <GridHighPad item xs={2}>
            <UtilityIcons src={AppleImage} alt="Apple-icon" />
            Age
          </GridHighPad>

          <GridHighPad item xs={2}>
            <UtilityIcons src={SandClockImage} alt="Sand-watch-icon" />
            Price
          </GridHighPad>

          <GridHighPad item xs={2}></GridHighPad>
        </Grid>
        <Divider variant="middle" />

        <Grid container>
          <GridHighPad item xs={2}>
            Bachelor's degree
          </GridHighPad>
          {CollegeDegreeDetails.map((items, index) => (
            <GridHighPad item xs={2} key={index}>
              {items}
            </GridHighPad>
          ))}
          <GridHighPad item xs={2}>
            <Button variant="contained">Submit your application</Button>
          </GridHighPad>
        </Grid>

        <Grid container>
          <GridHighPad item xs={2}>
            Master's Degree
          </GridHighPad>
          {CollegeDegreeDetails.map((items, index) => (
            <GridHighPad item xs={2} key={index}>
              {items}
            </GridHighPad>
          ))}
          <GridHighPad item xs={2}>
            <Button variant="contained">Submit your application</Button>
          </GridHighPad>
        </Grid>

        <Grid container>
          <GridHighPad item xs={2}>
            Bachelor's preparation
          </GridHighPad>
          {CollegeDegreeDetails.map((items, index) => (
            <GridHighPad item xs={2} key={index}>
              {items}
            </GridHighPad>
          ))}
          <GridHighPad item xs={2}>
            <Button variant="contained">Submit your application</Button>
          </GridHighPad>
        </Grid>
      </Box>
    </CollegeInfoExtended>
  );
};

export default CollegeCardMoreDetails;
