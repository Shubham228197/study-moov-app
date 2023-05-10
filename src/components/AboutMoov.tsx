import { aboutData } from "../constants/constants.js";
import { AboutHeadline, AboutContent } from "../styling/main/MainTextStyles";
import { AboutCardContainer } from "../styling/main/MainOverlayStyles";
import { CrossButtonIcon } from "../styling/Buttons/IconButtonStyles.js";

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
