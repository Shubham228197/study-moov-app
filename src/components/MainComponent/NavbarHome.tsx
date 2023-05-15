import "./styling.css";
import TransparentNavbar from "./TransparentNavbar";
import { Box } from "@mui/material";
import BritainFlag from "../../figma_Images/great-britain-flag-icon.png";
import ScotlandFlag from "../../figma_Images/scotland-flag-icon.png";
import {
  BritainFlagImage,
  ScotlandFlagImage,
  NaviagtionFooter,
} from "../../styling/main/HomepageOverlayStyles";
import { NaviagtionHeading } from "../../styling/main/HomepageTextStyles";
import { CommonButton } from "../../styling/Buttons/ButtonStyles";

const NavbarHome = () => {
  return (
    <div className="image">
      <TransparentNavbar />
      <Box>
        <BritainFlagImage src={BritainFlag} alt="great-britain-flag-icon" />
      </Box>
      <NaviagtionHeading variant="h2">
        Study abroad in the UK, Switzerland and Austria
      </NaviagtionHeading>
      <NaviagtionFooter>
        <CommonButton variant="contained">Select University</CommonButton>
        <ScotlandFlagImage src={ScotlandFlag} alt="scotland-flag-icon" />
      </NaviagtionFooter>
    </div>
  );
};

export default NavbarHome;
