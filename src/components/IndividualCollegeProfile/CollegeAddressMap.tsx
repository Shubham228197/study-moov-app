import { Box } from "@mui/material";
import { GrayText, BoldText } from "../../GeneralStyling/Texts";
import { Box20MarginNoLR } from "../../GeneralStyling/Overlays";
import { MapContainer } from "./CollegeProfileStyling/ProfileStylingOverlays";
const CollegeAddressMap = () => {
  return (
    <Box>
      <BoldText variant="h4">Location</BoldText>
      <Box20MarginNoLR>
        <GrayText>School address:</GrayText>
        <GrayText>
          259 Greenwich High Road Greenwich London WE10 8NB, London
        </GrayText>
      </Box20MarginNoLR>
      <MapContainer
        title="adress"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.8587696313084!2d-0.013060623667255045!3d51.47910661277035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760285f745c5c5%3A0x88786f97c3738cb1!2sGreenwich%20School%20of%20English%2C%20259%20Greenwich%20High%20Rd%2C%20London%20SE10%208NB%2C%20UK!5e0!3m2!1sen!2sin!4v1686027727406!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></MapContainer>
    </Box>
  );
};

export default CollegeAddressMap;
