import {
  FaceBookIcon,
  InstaGramIcon,
  TwitteRIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../GeneralStyling/Icons";
import {
  StackCenter,
  IconTray,
  ModalOverlay,
  RouteLinkGray,
} from "../../GeneralStyling/Overlays";
import { FooterLink } from "../../GeneralStyling/Buttons";
import { Box30margin } from "../../GeneralStyling/Overlays";
import { RouteLink } from "../../GeneralStyling/Overlays";
import { useState } from "react";
import AboutMobView from "./AboutMobView";

const FooterIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };
  return (
    <Box30margin>
      <IconTray direction="row">
        <RouteLink to="https://www.facebook.com/" target="_blank">
          <FaceBookIcon />
        </RouteLink>
        <RouteLink to="https://www.youtube.com/" target="_blank">
          <YoutubeIcon />
        </RouteLink>
        <RouteLink to="https://www.instagram.com/" target="_blank">
          <InstaGramIcon />
        </RouteLink>
        <RouteLink to="https://twitter.com/" target="_blank">
          <TwitteRIcon />
        </RouteLink>
        <RouteLink to="https://www.linkedin.com/" target="_blank">
          <LinkedinIcon />
        </RouteLink>
      </IconTray>
      <StackCenter direction="column">
        <FooterLink onClick={OpenModal}>About Us</FooterLink>
        <FooterLink>
          <RouteLinkGray to="/privacy-policy">
            Privacy Policy
          </RouteLinkGray>
        </FooterLink>
        <FooterLink>Terms of Use</FooterLink>
        <FooterLink>Contacts</FooterLink>
      </StackCenter>
      {isOpen && (
        <ModalOverlay>
          <AboutMobView setIsOpen={setIsOpen} />
        </ModalOverlay>
      )}
    </Box30margin>
  );
};
export default FooterIcon;
