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
  UtilityIcons,
  UtilityContainer,
} from "../MainStyling/HomepageOverlayStyles";
import { CollegeDegreeDetails } from "../../../GeneralConstants/Constants";

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
          
          <UtilityContainer item xs={2}>
            <UtilityIcons src={GradImage} alt="Graduation-icon" />
            Program
          </UtilityContainer>

          <UtilityContainer item xs={2}>
            <UtilityIcons src={PencilImage} alt="Pencil-icon" />
            Submission to
          </UtilityContainer>

          <UtilityContainer item xs={2}>
            <UtilityIcons src={BellImage} alt="Bell-icon" />
            Start date
          </UtilityContainer>

          <UtilityContainer item xs={2}>
            <UtilityIcons src={AppleImage} alt="Apple-icon" />
            Age
          </UtilityContainer>

          <UtilityContainer item xs={2}>
            <UtilityIcons src={SandClockImage} alt="Sand-watch-icon" />
            Price
          </UtilityContainer>

          <UtilityContainer item xs={2}></UtilityContainer>
        </Grid>
        <Divider variant="middle" />

        <Grid container>
          <UtilityContainer item xs={2}>
            Bachelor's degree
          </UtilityContainer>
          {CollegeDegreeDetails.map((items) => (
            <UtilityContainer item xs={2}>
              {items}
            </UtilityContainer>
          ))}
          <UtilityContainer item xs={2}>
            <Button variant="contained">Submit your application</Button>
          </UtilityContainer>
        </Grid>

        <Grid container>
          <UtilityContainer item xs={2}>
            Master's Degree
          </UtilityContainer>
          {CollegeDegreeDetails.map((items) => (
            <UtilityContainer item xs={2}>
              {items}
            </UtilityContainer>
          ))}
          <UtilityContainer item xs={2}>
            <Button variant="contained">Submit your application</Button>
          </UtilityContainer>
        </Grid>

        <Grid container>
          <UtilityContainer item xs={2}>
            Bachelor's preparation
          </UtilityContainer>
          {CollegeDegreeDetails.map((items) => (
            <UtilityContainer item xs={2}>
              {items}
            </UtilityContainer>
          ))}
          <UtilityContainer item xs={2}>
            <Button variant="contained">Submit your application</Button>
          </UtilityContainer>
        </Grid>

      </Box>
    </CollegeInfoExtended>
  );
};

export default CollegeCardMoreDetails;
