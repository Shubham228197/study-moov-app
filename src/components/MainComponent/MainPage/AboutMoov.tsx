import { aboutData } from "../../../GeneralConstants/Constants";
import { AboutHeadline, AboutContent } from "../MainStyling/MainTextStyles";
import { AboutCardContainer } from "../MainStyling/MainOverlayStyles";
import { CrossButtonIcon } from "../../../GeneralStyling/IconStyles";

const AboutMoov = () => {
  return (
    <AboutCardContainer elevation={15}>
      <CrossButtonIcon />
      <AboutHeadline>About Us</AboutHeadline>
      {aboutData.map((item) => (
        <AboutContent>{item}</AboutContent>
      ))}
    </AboutCardContainer>
  );
};
export default AboutMoov;
