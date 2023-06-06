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
import { useState } from "react";
import AboutMoov from "./AboutMoov";
import { ModalOverlay } from "../../../GeneralStyling/Overlays";

const FooterIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };
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
        <FooterLink onClick={OpenModal}>About Us</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms of Use</FooterLink>
        <FooterLink>Contacts</FooterLink>
        <RouteLink to="/cookie">
          <FooterLink>Cookies</FooterLink>
        </RouteLink>
      </StackCenter>
      {isOpen && (
        <ModalOverlay>
          <AboutMoov setIsOpen={setIsOpen} />
        </ModalOverlay>
      )}
    </Box30margin>
  );
};

export default FooterIcon;
