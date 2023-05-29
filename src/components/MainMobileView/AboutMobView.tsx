import { aboutData } from "../../constants/constants";
import { LowPadBoldText, LowPadText } from "./Styling/MobileStylingText";
import { AboutContainerMob } from "./Styling/MobileStylingOverlays";

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
