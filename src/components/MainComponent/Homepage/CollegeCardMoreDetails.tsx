import { Box, Button, Divider, Grid } from "@mui/material";
import GradImage from "../../../FigmaImages/graduation-cap-icon-main.png";
import PencilImage from "../../../FigmaImages/pencil-icon.png";
import BellImage from "../../../FigmaImages/bell-icon.png";
import AppleImage from "../../../FigmaImages/apple-icon.png";
import SandClockImage from "../../../FigmaImages/sandwatch-icon.png";
import {
  ExtendedButton,
  ExtendedButtonSelected,
} from "../../../GeneralStyling/Buttons";
import {
  CollegeInfoExtended,
  ExtendedInfoButtonContainer,
  UtilityIcons
} from "../MainStyling/HomepageOverlayStyles";
import { CollegeDegreeDetails } from "../../../GeneralConstants/Constants";
import { GridHighPad } from "../../../GeneralStyling/Overlays";

const CollegeCardMoreDetails = () => {
  return (
    <CollegeInfoExtended elevation={6}>
      <ExtendedInfoButtonContainer>
        <ExtendedButtonSelected>Bachelor's degree</ExtendedButtonSelected>
        <ExtendedButton>Master's Degree</ExtendedButton>
        <ExtendedButton>Programs under 18</ExtendedButton>
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
          {CollegeDegreeDetails.map((items) => (
            <GridHighPad item xs={2}>
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
          {CollegeDegreeDetails.map((items) => (
            <GridHighPad item xs={2}>
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
          {CollegeDegreeDetails.map((items) => (
            <GridHighPad item xs={2}>
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
