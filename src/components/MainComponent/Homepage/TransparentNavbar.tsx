import { Toolbar, Stack } from "@mui/material";
import {
  NavSpan,
  NavtitleSubheading,
  ContactNumberWhite,
  NavtitleWhite,
} from "../MainStyling/MainTextStyles";
import { CallBackButton } from "../../../GeneralStyling/Buttons";
import {
  GreaterThanIcon,
  GlobeIconBlue,
} from "../../../GeneralStyling/IconStyles";
import {
  TransparentNavConatiner,
  SelecteCountries,
} from "../MainStyling/HomepageOverlayStyles";

const TransparentNavbar = () => {
  return (
    <TransparentNavConatiner sx={{ boxShadow: "none" }}>
      <Toolbar>
        <NavtitleWhite>
          Study
          <GreaterThanIcon sx={{ color: "#2047B6" }} />
          <NavSpan>Moov</NavSpan>
          <NavtitleSubheading>Education is Austria</NavtitleSubheading>
        </NavtitleWhite>
        <Stack direction="row" spacing={2}>
          <ContactNumberWhite>+7 495 284-44-23</ContactNumberWhite>
          <CallBackButton variant="contained">Call Back</CallBackButton>
          <Stack direction="row" spacing={2}>
            <GlobeIconBlue />
            <SelecteCountries name="countries">
              <option value="Russia">Russian</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Austria">Austria</option>
              <option value="USA">USA</option>
            </SelecteCountries>
          </Stack>
        </Stack>
      </Toolbar>
    </TransparentNavConatiner>
  );
};

export default TransparentNavbar;
