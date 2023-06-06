import React from "react";
import CookieNavbar from "../Cookies/CookieNavbar";
import { Box, Grid } from "@mui/material";
import { langVariations } from "./ErrorPageConstant/ErrorPageConstant";
import MultiLang from "./MultiLang";
import {
  GridCenterLowMargin,
  GridColumn,
  HomePageButton,
  MultiLanguBox,
} from "./ErrorPageStyling/ErrorPageStylingOverlays";
import {
  CenterBoldTextHighMar,
  HomeButtonText,
  MultiLangHeading,
} from "./ErrorPageStyling/ErrorPageStylingText";
import { BoldText } from "../../GeneralStyling/Texts";
import { RouteLink } from "../../GeneralStyling/Overlays";

const CookieErrorPage = () => {
  return (
    <div style={{ backgroundColor: "#f2efce" }}>
      <CookieNavbar />
      <Box>
        <CenterBoldTextHighMar variant="h4">
          404 ERROR: Page Not Found
        </CenterBoldTextHighMar>
        <Grid container>
          <GridColumn item xs={6}>
            {langVariations.map((lines) => (
              <BoldText variant="h5" key={lines.id}>{lines.value}</BoldText>
            ))}
          </GridColumn>
          <GridCenterLowMargin item xs={6}>
            <HomePageButton size="large">
              <RouteLink to="/cookie">
                <HomeButtonText variant="h5">to Home Page</HomeButtonText>
              </RouteLink>
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
    </div>
  );
};

export default CookieErrorPage;
