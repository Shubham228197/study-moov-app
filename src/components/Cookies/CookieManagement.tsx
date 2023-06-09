import CookieAccordianPage from "./CookieAccordianPage";
import { Typography } from "@mui/material";
import MainNavbar from "../MainComponent/MainPage/MainNavbar";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import { Box30margin } from "../../GeneralStyling/Overlays";
import { BoldTextNoLRMidPad } from "./CookiesStyling/CookieStylingText";
import FooterText from "../MainComponent/MainPage/FooterText";

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
      <FooterText />
    </>
  );
};

export default CookieManagement;
