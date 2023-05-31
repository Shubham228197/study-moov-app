import { Grid, Stack, Typography } from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";
import { CookieFooterText } from "./CookieConstants/CookieConstant";
import {
  AcceptCookieButton,
  GridCenter,
  GridColMidPad,
  ManageCookieButton,
} from "./CookiesStyling/CookieStylingOverlays";
import { TextLowPad } from "../../GeneralStyling/Texts";

const CookieFooter = () => (
  <Grid container sx={{ backgroundColor: "#E5E5E5" }}>
    <GridCenter item xs={6}>
      <CookieIcon fontSize="large" sx={{ padding: "5px" }} />
      <TextLowPad variant="h6">Fresh Cookie Update</TextLowPad>
    </GridCenter>
    <GridColMidPad item xs={6}>
      <Typography>{CookieFooterText}</Typography>
      <Stack direction="row">
        <ManageCookieButton variant="outlined">
          Manage Your cookies
        </ManageCookieButton>
        <AcceptCookieButton color="inherit" variant="contained">
          Accept all cookies
        </AcceptCookieButton>
      </Stack>
    </GridColMidPad>
  </Grid>
);

export default CookieFooter;
