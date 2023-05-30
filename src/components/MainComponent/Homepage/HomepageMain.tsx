import NavbarHome from "./NavbarHome";
import MidbarHome from "./MidbarHome";
import FilterFieldHome from "./FilterFieldHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../MainPage/FooterIcon";
import FooterText from "../MainPage/FooterText";
import { ShowMoreButton } from "../../../GeneralStyling/Buttons";
import {
  HomepageContent,
  ShowMoreButtonContainer,
} from "../MainStyling/HomepageOverlayStyles";
import { HomepageHeading } from "../MainStyling/HomepageTextStyles";

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
