import { Typography } from "@mui/material";
import image from "../../FigmaImages/vadim-sherbakov-darked-mob.jpg";
import {
  ButtonMidMar,
  MobNavbar,
  NavToolbar,
  StackCenterMidPad,
} from "./MobileStyling/MobileStylingOverlays";
import { CenterTextHighMar } from "../../GeneralStyling/Texts";
import MobNavTextWhite from "./MobNavTextWhite";
import { RouteLink } from "../../GeneralStyling/Overlays";

const NavbarMob = () => (
  <MobNavbar sx={{ backgroundImage: `url(${image})` }}>
    <NavToolbar>
      <StackCenterMidPad>
        <MobNavTextWhite />
        <Typography variant="h4">
          Study abroad in the UK, Switzerland and Austria
        </Typography>
        <CenterTextHighMar>
          Official representative of more than 300 educational institutions
          around the world
        </CenterTextHighMar>
        <RouteLink to="/form-mob">
          <ButtonMidMar variant="contained">Book Consulation</ButtonMidMar>
        </RouteLink>
      </StackCenterMidPad>
    </NavToolbar>
  </MobNavbar>
);

export default NavbarMob;
