import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../GeneralStyling/Icons";
import { StackCenter, IconTray } from "../../GeneralStyling/Overlays";
import { FooterLink } from "../../GeneralStyling/Buttons";
import { Box30margin } from "../../GeneralStyling/Overlays";
import { RouteLink } from "../../GeneralStyling/Overlays";

const FooterIcon = () => (
  <Box30margin>
    <IconTray direction="row">
      <FaceBookIcon />
      <YoutubeIcon />
      <InstaGramIcon />
      <TwitteRIcon />
      <LinkedinIcon />
    </IconTray>
    <StackCenter direction="column">
      <RouteLink to="/aboutus">
        <FooterLink>About Us</FooterLink>
      </RouteLink>
      <FooterLink>Privacy Policy</FooterLink>
      <FooterLink>Terms of Use</FooterLink>
      <FooterLink>Contacts</FooterLink>
    </StackCenter>
  </Box30margin>
);

export default FooterIcon;
