import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../../GeneralStyling/Icons";
import { StackCenter, IconTray } from "../MainStyling/MainOverlayStyles";
import { FooterLink } from "../../../GeneralStyling/Buttons";

const FooterIcon = () => {
  return (
    <div style={{ margin: "30px" }}>
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
      </StackCenter>
    </div>
  );
};

export default FooterIcon;
