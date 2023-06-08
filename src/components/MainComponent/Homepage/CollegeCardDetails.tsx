import {
  Grid,
  Typography,
  Tooltip,
  Box,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  CollegeBuildingImage,
  CollegeInfoCard,
  CollegeInfoSection,
  ContentContainer,
  VienaaCollegeImage,
} from "../MainStyling/HomepageOverlayStyles";
import CollegeBuiding from "../../../FigmaImages/Rectangle-cropped.jpg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollegeCardMoreDetails from "./CollegeCardMoreDetails";
import { FC, useState } from "react";
import { StarIconLogo, InfoIconLogo } from "../../../GeneralStyling/Icons";
import { InfoBullets, InfoPoints } from "../MainStyling/HomepageTextStyles";
import VienaaImage from "../../../FigmaImages/vienna-logo.jpg";
import CollegeFee from "./CollegeFee";
import {
  CommonButton,
  SuperEllipseButton,
} from "../../../GeneralStyling/Buttons";
import { GridMidPad } from "../../../GeneralStyling/Overlays";
import { RouteLink } from "../../../GeneralStyling/Overlays";

type CollegeProfileInfoType = {
  name: string;
  location: string;
  degreeOffered: string[];
  languages: string[];
};
type CollegeCardType = {
  CollegeProfileInfo: CollegeProfileInfoType;
};
const CollegeCardOpen: FC<CollegeCardType> = (props): JSX.Element => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <CollegeInfoCard elevation={6}>
      <Grid container>
        <CollegeBuildingImage
          item
          xs={2}
          sx={{
            backgroundImage: `url(${CollegeBuiding})`,
          }}
        ></CollegeBuildingImage>
        <CollegeInfoSection item xs={7}>
          <ContentContainer>
            <Typography variant="h5">
              {props.CollegeProfileInfo.name}
            </Typography>
            <Box>
              <SuperEllipseButton
                color="success"
                variant="contained"
                size="small"
              >
                <StarIconLogo fontSize="small" />
                4.8
                <Tooltip title="University ranking according to Times magazine">
                  <InfoIconLogo fontSize="small" />
                </Tooltip>
              </SuperEllipseButton>
              <FmdGoodIcon fontSize="small" />
              {props.CollegeProfileInfo.location}
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
              <InfoBullets>
                : {props.CollegeProfileInfo.languages.join(", ")}
              </InfoBullets>
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
        <GridMidPad item xs={3}>
          <VienaaCollegeImage src={VienaaImage} alt="VinennaUniversityImage" />
          <CollegeFee />
          <RouteLink to="/college-profile">
            <CommonButton variant="contained">View University</CommonButton>
          </RouteLink>
        </GridMidPad>
      </Grid>
      {dropdown && <CollegeCardMoreDetails />}
    </CollegeInfoCard>
  );
};

export default CollegeCardOpen;
