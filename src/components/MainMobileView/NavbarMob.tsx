import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import image from '../../figma_Images/vadim-sherbakov-darked-mob.jpg'
import React from "react";

const NavbarMob = () => {
  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "transparent",
        boxShadow: "none",
        backgroundImage:
          `url(${image})`,
          backgroundSize: 'cover',
      }}
    >
      <Toolbar sx={{ border: "1px solid black" }}>
        <Stack direction="column" sx={{ textAlign: "center", padding: "10px" }}>
          <Typography sx={{ margin: "10px 30px" }}>Study &gt; Moov</Typography>
          <Typography variant="h4">
            Study abroad in the UK, Switzerland and Austria
          </Typography>
          <Typography sx={{ margin: "10px 30px" }}>
            Official representative of more than 300 educational institutions
            around the world
          </Typography>
          <Button variant="contained" sx={{ margin: "10px" }}>
            Select University
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMob;
