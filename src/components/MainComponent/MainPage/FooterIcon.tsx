import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../../GeneralStyling/Icons";
import { StackCenter, IconTray } from '../../../GeneralStyling/Overlays'
import { FooterLink } from "../../../GeneralStyling/Buttons";
import { Box30margin } from "../../../GeneralStyling/Overlays";
import {Link} from 'react-router-dom'

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
        <FooterLink>About Us</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms of Use</FooterLink>
        <FooterLink>Contacts</FooterLink>
        <Link to='/cookie' style={{textDecoration: 'none'}}>
        <FooterLink>Cookies</FooterLink>
        </Link>
      </StackCenter>
    </Box30margin>
  );
};

export default FooterIcon;
