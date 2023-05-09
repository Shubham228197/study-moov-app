import "../styling/AboutMoov.css";
import { aboutData } from "../constants/constants.js";
import {
  AboutCardContainer,
  CrossButtonIcon,
  AboutHeadline,
  AboutContent,
} from "../styling/TextStyling";

const AboutMoov = () => {
  return (
    <div>
      <AboutCardContainer sx={{ borderRadius: "20px" }} elevation={15}>
        <CrossButtonIcon />
        <AboutHeadline>About Us</AboutHeadline>
        {aboutData.map((item) => (
          <AboutContent>{item}</AboutContent>
        ))}
      </AboutCardContainer>
    </div>
  );
};
export default AboutMoov;
