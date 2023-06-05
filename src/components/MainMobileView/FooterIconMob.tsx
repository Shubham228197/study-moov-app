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
import { Link } from "react-router-dom";

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
      <Link to="/aboutus" style={{ textDecoration: "none" }}>
        <FooterLink>About Us</FooterLink>
      </Link>
      <FooterLink>Privacy Policy</FooterLink>
      <FooterLink>Terms of Use</FooterLink>
      <FooterLink>Contacts</FooterLink>
    </StackCenter>
  </Box30margin>
);

export default FooterIcon;
