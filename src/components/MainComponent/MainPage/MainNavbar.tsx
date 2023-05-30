import { Toolbar, Stack } from "@mui/material";
import {
  Navtitle,
  NavSpan,
  NavtitleSubheading,
  ContactNumber,
  ChooseCountries,
} from "../MainStyling/MainTextStyles";
import { NavigationBar } from "../MainStyling/MainOverlayStyles";
import { CallBackButton } from "../../../GeneralStyling/Buttons";
import {
  GreaterThanIcon,
  GlobeIcon,
} from "../../../GeneralStyling/IconStyles";

const FormNavbar = () => {
  return (
    <NavigationBar elevation={0}>
      <Toolbar>
        <Navtitle>
          Study
          <GreaterThanIcon sx={{ color: "#2047B6" }} />
          <NavSpan>Moov</NavSpan>
          <NavtitleSubheading>Education is Austria</NavtitleSubheading>
        </Navtitle>
        <Stack direction="row" spacing={2}>
          <ContactNumber>+7 495 284-44-23</ContactNumber>
          <CallBackButton variant="contained">Call Back</CallBackButton>
          <Stack direction="row" spacing={2}>
            <GlobeIcon />
            <ChooseCountries name="countries">
              <option value="Russia">Russian</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Austria">Austria</option>
              <option value="USA">USA</option>
            </ChooseCountries>
          </Stack>
        </Stack>
      </Toolbar>
    </NavigationBar>
  );
};

export default FormNavbar;
