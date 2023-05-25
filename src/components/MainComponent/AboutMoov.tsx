import { aboutData } from "../../constants/constants";
import { AboutHeadline, AboutContent } from "../../styling/main/MainTextStyles";
import { AboutCardContainer } from "../../styling/main/MainOverlayStyles";
import { CrossButtonIcon } from "../../styling/Buttons/IconButtonStyles";

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
