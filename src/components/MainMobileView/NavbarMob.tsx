import { Toolbar, Typography } from "@mui/material";
import image from "../../figma_Images/vadim-sherbakov-darked-mob.jpg";
import React from "react";
import { ButtonMidMar, MobNavbar, StackCenterMidPad } from "./Styling/MobileStylingOverlays";
import { CenterTextHighMar } from "./Styling/MobileStylingText";

const NavbarMob = () => {
  return (
      <MobNavbar sx={{ backgroundImage: `url(${image})` }}>
        <Toolbar>
          <StackCenterMidPad>
            <CenterTextHighMar>
              Study &gt; Moov
            </CenterTextHighMar>
            <Typography variant="h4">
              Study abroad in the UK, Switzerland and Austria
            </Typography>
            <CenterTextHighMar>
              Official representative of more than 300 educational institutions
              around the world
            </CenterTextHighMar>
            <ButtonMidMar variant="contained">
              Select University
            </ButtonMidMar>
          </StackCenterMidPad>
        </Toolbar>
      </MobNavbar>
  );
};

export default NavbarMob;
