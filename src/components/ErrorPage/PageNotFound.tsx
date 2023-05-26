import React from "react";
import MainNavbar from "../MainComponent/MainNavbar";
import PNF404 from "../../figma_Images/PNF404-removebg.png";
import { Box, Stack, Typography } from "@mui/material";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";

const PageNotFound = () => {
  return (
    <div>
      <MainNavbar />
      <Box sx={{ display: "flex", justifyContent: 'center', padding: '5%' }}>
        <img src={PNF404} alt="404-Error" />
        <Stack justifyContent='center' padding={5}>
          <Typography variant="h6" color="#d1cac9">
            Az oldal nem találhatót
          </Typography>
          <Typography variant="h5" color="#ada8a6">
            Сторінка не знайдена
          </Typography>
          <Typography variant="h4" color="#6e6a69">
            Seite nicht gefunden
          </Typography>
          <Typography variant="h3">Page not found</Typography>
          <Typography variant="h4" color="#6e6a69">
            Pagina non trovata
          </Typography>
          <Typography variant="h5" color="#ada8a6">
            Página no encontrada
          </Typography>
          <Typography variant="h6" color="#d1cac9">
            Η σελίδα δεν βρέθηκε
          </Typography>
        </Stack>
      </Box>
      <FooterIcon/>
      <FooterText/>
    </div>
  );
};

export default PageNotFound;
