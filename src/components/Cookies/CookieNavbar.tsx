import { Button, Stack, Toolbar } from "@mui/material";
import {
  GlobeIcon,
  GreaterThanIcon,
} from "../../styling/Buttons/IconButtonStyles";
import {
  CapBlackButton,
  CookieNavSelect,
  TranspNavNoShadow,
} from "./CookiesStyling/CookieStylingOverlays";
import {
  BoldBlueSpan,
  MontBoldTextLarge,
} from "./CookiesStyling/CookieStylingText";
import {
  ContactNumber,
  NavtitleSubheading,
} from "../../styling/main/MainTextStyles";
import { SelectCount } from "../../styling/main/HomepageOverlayStyles";

const CookieNavbar = () => (
  <TranspNavNoShadow>
    <Toolbar>
      <Stack direction="row" sx={{ flexGrow: 1 }}>
        <MontBoldTextLarge>
          Study
          <GreaterThanIcon />
          <BoldBlueSpan>Moov</BoldBlueSpan>
          <NavtitleSubheading>Education is Austria</NavtitleSubheading>
        </MontBoldTextLarge>
        <Stack direction="row" sx={{ padding: "16px 20px" }}>
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
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <ContactNumber>+7 495 284-44-23</ContactNumber>
        <Button variant="contained">Call Back</Button>
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

export default CookieNavbar;
