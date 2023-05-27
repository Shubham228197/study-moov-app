import TransparentNavbar from "../MainComponent/Homepage/TransparentNavbar";
import CollegeImage from "../../figma_Images/Harward.jpg";
import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { CollegeNavbarInfo } from "./CollegeProfileConstants";
import { StarIconLogo, InfoIconLogo } from "../../styling/Buttons/IconButtons";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LightIcon from "../../figma_Images/College-light-white-80.png";
import BookmarkIcon from "../../figma_Images/college-bookmark-white-100.png";

const CollegeProfileNavbar = () => {
  return (
    <div style={{ backgroundImage: `url(${CollegeImage})`, color: "white", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <TransparentNavbar />
      <Stack padding='20% 80px 40px 80px'>
        <Grid container>
          <Grid item xs={6}> 
            <Typography variant="h4" fontWeight="bold">
            <Typography fontSize="small">Study in USA / Colleges /</Typography>
              Harvard University
            </Typography>
            <Box>
              <Box sx={{ fontSize: "small", margin: "10px 0px" }}>
                <Button
                  color="success"
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: "30px", padding: "0px" }}
                >
                  <StarIconLogo fontSize="small" />
                  4.8
                  <Tooltip title="University ranking according to Times magazine">
                    <InfoIconLogo fontSize="small" />
                  </Tooltip>
                </Button>
                <FmdGoodIcon fontSize="small" />
                United States of America, California
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">Free Conssultation</Button>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <img src={LightIcon} alt="Light_Icon" style={{color: 'white'}}/>
              <img src={BookmarkIcon} alt="Book_Icon" />
            </Box>
          </Grid>
        </Grid>
        <Divider light color="white" />
        <Grid container sx={{ color: "white", textAlign: 'center' }}>
          {CollegeNavbarInfo.map((info) => (
            <Grid item xs={3}>
              <Typography>{info.title}</Typography>
              <Typography>{info.value}</Typography>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default CollegeProfileNavbar;
