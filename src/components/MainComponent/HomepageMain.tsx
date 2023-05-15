import NavbarHome from "./NavbarHome";
import MidbarHome from "./MidbarHome";
import FilterFieldHome from "./FilterFieldHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../footer/FooterIcon";
import FooterText from "../footer/FooterText";
import { ShowMoreButton } from "../../styling/Buttons/ButtonStyles";
import {
  HomepageContent,
  ShowMoreButtonContainer,
} from "../../styling/main/HomepageOverlayStyles";
import { HomepageHeading } from "../../styling/main/HomepageTextStyles";

const HomepageMain = () => {
  return (
    <>
      <NavbarHome />
      <MidbarHome />
      <HomepageContent>
        <HomepageHeading variant="h6">
          318 study programs in 11 countries
        </HomepageHeading>
        <FilterFieldHome />
        <CollegeCardOpen />
        <CollegeCardOpen />
        <CollegeCardOpen />
        <CollegeCardOpen />
        <ShowMoreButtonContainer>
          <ShowMoreButton variant="outlined">Show more</ShowMoreButton>
        </ShowMoreButtonContainer>
        <FooterIcon />
        <FooterText />
      </HomepageContent>
    </>
  );
};

export default HomepageMain;
