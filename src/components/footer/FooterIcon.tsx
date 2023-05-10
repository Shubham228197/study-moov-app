import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../styling/Buttons/IconButtons";
import { StudyMoovDesc, IconTray } from "../../styling/main/MainOverlayStyles";
import { FooterLink } from "../../styling/Buttons/ButtonStyles";

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
      <StudyMoovDesc direction="row">
        <FooterLink>About Us</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms of Use</FooterLink>
        <FooterLink>Contacts</FooterLink>
      </StudyMoovDesc>
    </div>
  );
};

export default FooterIcon;
