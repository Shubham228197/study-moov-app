import MainNavbar from "../MainPage/MainNavbar";
import FilterFieldHome from "./FilterFieldHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../MainPage/FooterIcon";
import FooterText from "../MainPage/FooterText";
import {
  FilterBoxMain,
} from "../MainStyling/HomepageOverlayStyles";
import {
  BoldText30Mar,
  FilterMainSubheading,
} from "../MainStyling/HomepageTextStyles";
import { HomepageFilterSubheadingText } from "../../../GeneralConstants/Constants";
import { ShowMoreButton } from "../../../GeneralStyling/Buttons";
import { BoxCenterHighMar } from "../../../GeneralStyling/Overlays";

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
        <BoxCenterHighMar>
          <ShowMoreButton variant="outlined">Show more</ShowMoreButton>
        </BoxCenterHighMar>
        <FooterIcon />
        <FooterText />
      </FilterBoxMain>
    </>
  );
};

export default HomepageFiltered;
