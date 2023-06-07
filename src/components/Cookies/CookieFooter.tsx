import { Grid, Stack, Typography } from "@mui/material";
import { CookieFooterText } from "./CookieConstants/CookieConstant";
import {
  AcceptCookieButton,
  GridCenter,
  GridColMidPad,
  ManageCookieButton,
} from "./CookiesStyling/CookieStylingOverlays";
import { TextLowPad } from "../../GeneralStyling/Texts";
import { FC } from "react";
import { RouteLink } from "../../GeneralStyling/Overlays";
import { CookieIconStyled } from "../../GeneralStyling/IconStyles";

type AcceptCookie = {
  setIsAccepted: (value: boolean) => void;
};

const CookieFooter: FC<AcceptCookie> = (props): JSX.Element => {
  const ShowFooter = () => {
    props.setIsAccepted(false);
  };
  return (
    <Grid container sx={{ backgroundColor: "#E5E5E5" }}>
      <GridCenter item xs={6}>
        <CookieIconStyled fontSize="large" />
        <TextLowPad variant="h6">Fresh Cookie Update</TextLowPad>
      </GridCenter>
      <GridColMidPad item xs={6}>
        <Typography>{CookieFooterText}</Typography>
        <Stack direction="row">
          <RouteLink to="/manage-cookie">
            <ManageCookieButton variant="outlined">
              Manage Your cookies
            </ManageCookieButton>
          </RouteLink>
          <AcceptCookieButton
            color="inherit"
            variant="contained"
            onClick={ShowFooter}
          >
            Accept all cookies
          </AcceptCookieButton>
        </Stack>
      </GridColMidPad>
    </Grid>
  );
};

export default CookieFooter;
