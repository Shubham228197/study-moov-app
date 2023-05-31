import MainNavbar from "../MainPage/MainNavbar";
import FilterFieldHome from "./FilterFieldHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../MainPage/FooterIcon";
import FooterText from "../MainPage/FooterText";
import {
  FilterBoxMain,
  ShowMoreButtonContainer,
} from "../MainStyling/HomepageOverlayStyles";
import {
  BoldText30Mar,
  FilterMainSubheading,
} from "../MainStyling/HomepageTextStyles";
import { HomepageFilterSubheadingText } from "../../../GeneralConstants/Constants.js";
import { ShowMoreButton } from "../../../GeneralStyling/Buttons";

const HomepageFiltered = () => {
  return (
    <>
      <MainNavbar />
      <FilterBoxMain>
        <BoldText30Mar variant="h4">
          Education at world universities
          <FilterMainSubheading>
            {HomepageFilterSubheadingText}
          </FilterMainSubheading>
        </BoldText30Mar>
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
      </FilterBoxMain>
    </>
  );
};

export default HomepageFiltered;
