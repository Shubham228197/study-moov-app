import TransparentNavbar from "../MainComponent/Homepage/TransparentNavbar";
import CollegeImage from "../../FigmaImages/Harward.jpg";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { CollegeNavbarInfo } from "./CollegeProfileConstant/CollegeProfileConstants";
import { StarIconLogo, InfoIconLogo } from "../../GeneralStyling/Icons";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LightIcon from "../../FigmaImages/College-light-white-80.png";
import BookmarkIcon from "../../FigmaImages/college-bookmark-white-100.png";
import {
  AddressNdRating,
  CollegeNavText,
  CollegeNavbar,
  GridCenterWhite,
  RatingButton,
} from "./CollegeProfileStyling/ProfileStylingOverlays";
import { BoldText } from "../../GeneralStyling/Texts";
import { CommonButton } from "../../GeneralStyling/Buttons";
import { Link } from "react-router-dom";

const CollegeProfileNavbar = () => {
  return (
    <CollegeNavbar
      style={{
        backgroundImage: `url(${CollegeImage})`,
      }}
    >
      <TransparentNavbar />
      <CollegeNavText>
        <Grid container>
          <Grid item xs={6}>
            <BoldText variant="h4">
              <Typography fontSize="small">
                Study in USA / Colleges /
              </Typography>
              Harvard University
            </BoldText>
            <Box>
              <AddressNdRating>
                <RatingButton color="success" variant="contained" size="small">
                  <StarIconLogo fontSize="small" />
                  4.8
                  <Tooltip title="University ranking according to Times magazine">
                    <InfoIconLogo fontSize="small" />
                  </Tooltip>
                </RatingButton>
                <FmdGoodIcon fontSize="small" />
                United States of America, California
              </AddressNdRating>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Link to="/consulation" style={{textDecoration: 'none'}}>
              <CommonButton variant="contained">Free Consultation</CommonButton>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <img
                src={LightIcon}
                alt="Light_Icon"
                style={{ color: "white" }}
              />
              <img src={BookmarkIcon} alt="Book_Icon" />
            </Box>
          </Grid>
        </Grid>
        <Divider light color="white" />
        <GridCenterWhite container>
          {CollegeNavbarInfo.map((info) => (
            <Grid item xs={3}>
              <Typography>{info.title}</Typography>
              <Typography>{info.value}</Typography>
            </Grid>
          ))}
        </GridCenterWhite>
      </CollegeNavText>
    </CollegeNavbar>
  );
};

export default CollegeProfileNavbar;
