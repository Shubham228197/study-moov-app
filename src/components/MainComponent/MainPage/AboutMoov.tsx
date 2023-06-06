import { aboutData } from "../../../GeneralConstants/Constants";
import { AboutHeadline, AboutContent } from "../MainStyling/MainTextStyles";
import { AboutCardContainer } from "../MainStyling/MainOverlayStyles";
import { CrossButtonIcon } from "../../../GeneralStyling/IconStyles";
import { FC } from "react";

type AboutModal = {
  setIsOpen: (value: boolean) => void;
};
const AboutMoov: FC<AboutModal> = (props): JSX.Element => {
  const closeModal = () => {
    props.setIsOpen(false)
  }
  return (
    <AboutCardContainer elevation={15}>
      <CrossButtonIcon onClick={closeModal}/>
      <AboutHeadline>About Us</AboutHeadline>
      {aboutData.map((item, index) => (
        <AboutContent key={index}>{item}</AboutContent>
      ))}
    </AboutCardContainer>
  );
};
export default AboutMoov;
