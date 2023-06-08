import { Toolbar, Stack } from "@mui/material";
import {
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
  TranspNav,
  SelecteCountries,
} from "../MainStyling/HomepageOverlayStyles";
import { BoldBlueSpan } from "../../../GeneralStyling/Texts";
import { RouteLinkWhite } from "../../../GeneralStyling/Overlays";

const TransparentNavbar = () => {
  const handleDial = () => {
    const phoneNumber = "+7 495 284-44-23"; // Replace with your desired phone number
    const link = `tel:${phoneNumber}`;
    window.location.href = link;
  };
  return (
    <TranspNav>
      <Toolbar>
        <NavtitleWhite>
          <RouteLinkWhite to="/">
            Study
            <GreaterThanIcon sx={{ color: "#2047B6" }} />
            <BoldBlueSpan>Moov</BoldBlueSpan>
          </RouteLinkWhite>
          <NavtitleSubheading>Education is Austria</NavtitleSubheading>
        </NavtitleWhite>
        <Stack direction="row" spacing={2}>
          <ContactNumberWhite>+7 495 284-44-23</ContactNumberWhite>
          <CallBackButton variant="contained" onClick={handleDial}>
            Call Back
          </CallBackButton>
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
    </TranspNav>
  );
};

export default TransparentNavbar;
