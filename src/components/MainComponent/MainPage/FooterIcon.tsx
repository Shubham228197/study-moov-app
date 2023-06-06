import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../../GeneralStyling/Icons";
import { StackCenter, IconTray } from "../../../GeneralStyling/Overlays";
import { FooterLink } from "../../../GeneralStyling/Buttons";
import { Box30margin } from "../../../GeneralStyling/Overlays";
import { RouteLink } from "../../../GeneralStyling/Overlays";

const FooterIcon = () => {
  return (
    <Box30margin>
      <IconTray direction="row">
        <FaceBookIcon />
        <YoutubeIcon />
        <InstaGramIcon />
        <TwitteRIcon />
        <LinkedinIcon />
      </IconTray>
      <StackCenter direction="row">
        <RouteLink to="/about">
          <FooterLink>About Us</FooterLink>
        </RouteLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms of Use</FooterLink>
        <FooterLink>Contacts</FooterLink>
        <RouteLink to="/cookie">
          <FooterLink>Cookies</FooterLink>
        </RouteLink>
      </StackCenter>
    </Box30margin>
  );
};

export default FooterIcon;
