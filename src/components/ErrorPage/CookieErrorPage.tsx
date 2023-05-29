import React from "react";
import CookieNavbar from "../Cookies/CookieNavbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import { langVariations } from "./ErrorPageConstant/constant";
import MultiLang from "./MultiLang";
import CookieFooter from "../Cookies/CookieFooter";
import {
  GridCenterLowMargin,
  GridColummn,
  HomePageButton,
  MultiLanguBox,
} from "./Styling/ErrorPageStylingOverlays";
import {
  BoldText,
  CenterBoldText,
  HomeButtonText,
  MultiLangHeading,
} from "./Styling/ErrorPageStylingText";

const CookieErrorPage = () => {
  return (
    <div style={{ backgroundColor: "#f2efce" }}>
      <CookieNavbar />
      <Box>
        <CenterBoldText variant="h4">404 ERROR: Page Not Found</CenterBoldText>
        <Grid container>
          <GridColummn item xs={6}>
            {langVariations.map((lines) => (
              <BoldText variant="h5">{lines}</BoldText>
            ))}
          </GridColummn>
          <GridCenterLowMargin item xs={6}>
            <HomePageButton size="large">
              <HomeButtonText variant="h5">to Home Page</HomeButtonText>
            </HomePageButton>
          </GridCenterLowMargin>
        </Grid>
        <MultiLanguBox>
          <MultiLangHeading variant="h4">
            This is an example of visualization of a record in different
            languages.
          </MultiLangHeading>
          <MultiLang />
        </MultiLanguBox>
      </Box>
      <CookieFooter />
    </div>
  );
};

export default CookieErrorPage;