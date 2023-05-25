import {
  Button,
  Grid,
  Typography,
  Tooltip,
  Box,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  CollegeInfoCard,
  CollegeBuildingImage,
  CollegeInfoSection,
  ContentContainer,
  CollegePriceSection,
  VienaaCollegeImage,
} from "../../../styling/main/HomepageOverlayStyles";
import CollegeBuiding from "../../../figma_Images/Rectangle-cropped.jpg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollegeCardMoreDetails from "./CollegeCardMoreDetails";
import { useState } from "react";
import { StarIconLogo, InfoIconLogo } from "../../../styling/Buttons/IconButtons";
import { InfoBullets, InfoPoints } from "../../../styling/main/HomepageTextStyles";
import VienaaImage from "../../../figma_Images/vienna-logo.jpg";
import CollegeFee from "./CollegeFee";
import { CommonButton } from "../../../styling/Buttons/ButtonStyles";

const CollegeCardOpen = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <CollegeInfoCard elevation={6}>
      <Grid container>
        <Grid item xs={2}>
          <CollegeBuildingImage src={CollegeBuiding} alt="CollegeBuilding" />
        </Grid>
        <CollegeInfoSection item xs={7}>
          <ContentContainer>
            <Typography variant="h5">Vienna Veterinary University</Typography>
            <Box>
              <Button
                color="success"
                variant="contained"
                size="small"
                sx={{ borderRadius: "30px" }}
              >
                <StarIconLogo fontSize="small" />
                4.8
                <Tooltip title="University ranking according to Times magazine">
                  <InfoIconLogo fontSize="small" />
                </Tooltip>
              </Button>
              <FmdGoodIcon fontSize="small" />
              Austria, Vienna
            </Box>
            <Stack direction="row">
              <InfoBullets>Programs:</InfoBullets>
              <InfoPoints sx={{ backgroundColor: "#e1e1f1" }}>
                bachelor's degree
              </InfoPoints>
              <InfoPoints sx={{ backgroundColor: "#D9E8F0" }}>
                Master's Degree
              </InfoPoints>
              <InfoPoints sx={{ backgroundColor: "#F8E6F9" }}>
                language classes
              </InfoPoints>
            </Stack>
            <Stack direction="row">
              <InfoBullets>Teaching languages</InfoBullets>
              <InfoBullets>: English, Spanish, Bulgarian, Romanian</InfoBullets>
            </Stack>
            <TextField
              variant="outlined"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <KeyboardArrowDownIcon />
                  </InputAdornment>
                ),
              }}
              value="All programs"
              onClick={handleClick}
            />
          </ContentContainer>
        </CollegeInfoSection>
        <CollegePriceSection item xs={3}>
          <VienaaCollegeImage src={VienaaImage} alt="VinennaUniversityImage" />
          <CollegeFee />
          <CommonButton variant="contained">Quick application</CommonButton>
        </CollegePriceSection>
      </Grid>
      {dropdown && <CollegeCardMoreDetails />}
    </CollegeInfoCard>
  );
};

export default CollegeCardOpen;
