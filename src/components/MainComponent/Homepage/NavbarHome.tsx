import TransparentNavbar from "./TransparentNavbar";
import { Box } from "@mui/material";
import BritainFlag from "../../../FigmaImages/great-britain-flag-icon.png";
import ScotlandFlag from "../../../FigmaImages/scotland-flag-icon.png";
import {
  BritainFlagImage,
  ScotlandFlagImage,
  NaviagtionFooter,
} from "../MainStyling/HomepageOverlayStyles";
import { NaviagtionHeading } from "../MainStyling/HomepageTextStyles";
import { CommonButton } from "../../../GeneralStyling/Buttons";
import DarkedCollegeImage from "../../../FigmaImages/vadim-sherbakov-darked.jpg";
import { RouteLink } from "../../../GeneralStyling/Overlays";

const NavbarHome = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${DarkedCollegeImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <TransparentNavbar />
      <Box>
        <BritainFlagImage src={BritainFlag} alt="great-britain-flag-icon" />
      </Box>
      <NaviagtionHeading variant="h2">
        Study abroad in the UK, Switzerland and Austria
      </NaviagtionHeading>
      <NaviagtionFooter>
        <RouteLink to="/consulation">
          <CommonButton variant="contained">Book Consultation</CommonButton>
        </RouteLink>
        <ScotlandFlagImage src={ScotlandFlag} alt="scotland-flag-icon" />
      </NaviagtionFooter>
    </Box>
  );
};

export default NavbarHome;
