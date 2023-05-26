import React from "react";
import CookieAccordianPage from "./CookieAccordianPage";
import { Box, Typography } from "@mui/material";
import MainNavbar from "../MainComponent/MainNavbar";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import CookieFooter from "./CookieFooter";

const CookieManagement = () => {
  return (
    <div>
      <MainNavbar />
      <Box sx={{margin: '30px'}}>
        <Typography variant="h5" sx={{fontWeight: 'bold', padding: '10px 0px'}}>Manage your cookies</Typography>
        <Typography>
          Essential cookies are always on. You have the option to turn off other
          cookie types.
        </Typography>
      </Box>
      <CookieAccordianPage />
      <FooterIcon />
      <CookieFooter />
    </div>
  );
};

export default CookieManagement;
