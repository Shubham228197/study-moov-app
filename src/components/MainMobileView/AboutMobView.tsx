import { aboutData } from "../../GeneralConstants/Constants";
import { BoldTextLowPad, TextLowPad } from "./MobileStyling/MobileStylingText";
import { AboutContainerMob } from "./MobileStyling/MobileStylingOverlays";

const AboutMobView = () => {
  return (
    <AboutContainerMob elevation={6}>
      <BoldTextLowPad variant="h4">About Us</BoldTextLowPad>
      {aboutData.map((item) => (
        <TextLowPad variant="body2">{item}</TextLowPad>
      ))}
    </AboutContainerMob>
  );
};

export default AboutMobView;
