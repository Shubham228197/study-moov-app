import { aboutData } from "../../GeneralConstants/Constants";
import { BoldTextLowPad, TextLowPad } from "../../GeneralStyling/Texts";
import { AboutContainerMob } from "./MobileStyling/MobileStylingOverlays";
import { CrossButtonIconMob } from "../../GeneralStyling/IconStyles";
import { FC } from "react";

type AboutModal = {
  setIsOpen: (value: boolean) => void;
}
const AboutMobView: FC<AboutModal> = (props): JSX.Element => {
  const closeModal = () => {
    props.setIsOpen(false)
  }
  return (
    <AboutContainerMob elevation={6}>
      <CrossButtonIconMob onClick={closeModal}/>
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
