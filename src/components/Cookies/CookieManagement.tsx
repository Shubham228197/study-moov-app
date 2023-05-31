import CookieAccordianPage from "./CookieAccordianPage";
import { Typography } from "@mui/material";
import MainNavbar from "../MainComponent/MainPage/MainNavbar";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import CookieFooter from "./CookieFooter";
import { Box30margin } from "./CookiesStyling/CookieStylingOverlays";
import { BoldTextNoLRMidPad } from "./CookiesStyling/CookieStylingText";

const CookieManagement = () => {
  return (
    <>
      <MainNavbar />
      <Box30margin>
        <BoldTextNoLRMidPad variant="h5">
          Manage your cookies
        </BoldTextNoLRMidPad>
        <Typography>
          Essential cookies are always on. You have the option to turn off other
          cookie types.
        </Typography>
      </Box30margin>
      <CookieAccordianPage />
      <FooterIcon />
      <CookieFooter />
    </>
  );
};

export default CookieManagement;
