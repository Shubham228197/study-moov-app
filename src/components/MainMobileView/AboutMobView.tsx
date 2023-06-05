import { aboutData } from "../../GeneralConstants/Constants";
import { BoldTextLowPad, TextLowPad } from "../../GeneralStyling/Texts";
import { AboutContainerMob } from "./MobileStyling/MobileStylingOverlays";
import { CrossButtonIconMob } from "../../GeneralStyling/IconStyles";

const AboutMobView = () => {
  return (
    <AboutContainerMob elevation={6}>
      <CrossButtonIconMob />
      <BoldTextLowPad variant="h4">About Us</BoldTextLowPad>
      {aboutData.map((item, index) => (
        <TextLowPad variant="body2" key={index}>
          {item}
        </TextLowPad>
      ))}
    </AboutContainerMob>
  );
};

export default AboutMobView;
