import { Stack, Toolbar } from "@mui/material";
import { GlobeIcon, GreaterThanIcon } from "../../GeneralStyling/IconStyles";
import {
  CapBlackButton,
  CookieNavSelect,
  TranspNavNoShadow,
} from "./CookiesStyling/CookieStylingOverlays";
import { MontBoldTextLarge } from "./CookiesStyling/CookieStylingText";
import { NavtitleSubheading } from "../MainComponent/MainStyling/MainTextStyles";
import { SelectCount } from "../MainComponent/MainStyling/HomepageOverlayStyles";
import { BoldBlueSpan, ContactNumber } from "../../GeneralStyling/Texts";
import { NavMidOptions } from "./CookiesStyling/CookieStylingOverlays";
import { RouteLink } from "../../GeneralStyling/Overlays";
import { CallBackButton } from "../../GeneralStyling/Buttons";

const CookieNavbar = () => {
  const handleDial = () => {
    const phoneNumber = "+7 495 284-44-23"; // Replace with your desired phone number
    const link = `tel:${phoneNumber}`;
    window.location.href = link;
  };
  return (
    <TranspNavNoShadow>
      <Toolbar>
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <MontBoldTextLarge>
            <RouteLink to="/">
              Study
              <GreaterThanIcon />
              <BoldBlueSpan>Moov</BoldBlueSpan>
            </RouteLink>
            <NavtitleSubheading>Education is Austria</NavtitleSubheading>
          </MontBoldTextLarge>
          <NavMidOptions direction="row">
            <CookieNavSelect name="Service">
              <option value="services">Services</option>
            </CookieNavSelect>
            <CookieNavSelect name="Countries">
              <option value="country">Countries</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Austria">Austria</option>
              <option value="USA">USA</option>
            </CookieNavSelect>
            <CookieNavSelect name="Programs">
              <option value="program">Programs</option>
              <option value="Bachelor">Bachelor's</option>
              <option value="Master">Master's</option>
              <option value="Under 18">Under 18</option>
            </CookieNavSelect>
            <CapBlackButton>Contacts</CapBlackButton>
            <CapBlackButton>Blog</CapBlackButton>
          </NavMidOptions>
        </Stack>
        <Stack direction="row" spacing={2}>
          <ContactNumber>+7 495 284-44-23</ContactNumber>
          <CallBackButton variant="contained" onClick={handleDial}>
            Call Back
          </CallBackButton>
          <Stack direction="row">
            <GlobeIcon />
            <SelectCount name="countries">
              <option value="Russia">Russian</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Austria">Austria</option>
              <option value="USA">USA</option>
            </SelectCount>
          </Stack>
        </Stack>
      </Toolbar>
    </TranspNavNoShadow>
  );
};
export default CookieNavbar;
