import { Stack } from "@mui/material";
import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../styling/Buttons/IconButtons";
import { StudyMoovDesc } from "../../styling/homepage/FormOverlayStyles";
import { FooterLink } from "../../styling/Buttons/ButtonStyles";

const FooterIcon = () => {
  return (
    <div>
      <Stack className="icon-tray" padding={2} direction="row">
        <FaceBookIcon />
        <YoutubeIcon />
        <InstaGramIcon />
        <TwitteRIcon />
        <LinkedinIcon />
      </Stack>
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
