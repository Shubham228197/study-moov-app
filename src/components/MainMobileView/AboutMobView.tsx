import { aboutData } from "../../GeneralConstants/Constants";
import { LowPadBoldText, LowPadText } from "./MobileStyling/MobileStylingText";
import { AboutContainerMob } from "./MobileStyling/MobileStylingOverlays";

const AboutMobView = () => {
  return (
    <AboutContainerMob elevation={6}>
      <LowPadBoldText variant="h4">About Us</LowPadBoldText>
      {aboutData.map((item) => (
        <LowPadText variant="body2">{item}</LowPadText>
      ))}
    </AboutContainerMob>
  );
};

export default AboutMobView;
