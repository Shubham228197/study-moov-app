import MainNavbar from "../MainNavbar";
import FilterFieldHome from "./FilterFieldHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../footer/FooterIcon";
import FooterText from "../footer/FooterText";
import {
  FilterBoxMain,
  ShowMoreButtonContainer,
} from "../../styling/main/HomepageOverlayStyles";
import {
  FilterMainHeadline,
  FilterMainSubheading,
} from "../../styling/main/HomepageTextStyles";
import { HomepageFilterSubheadingText } from "../../constants/constants.js";
import { ShowMoreButton } from "../../styling/Buttons/ButtonStyles";

const HomepageFiltered = () => {
  return (
    <>
      <MainNavbar />
      <FilterBoxMain>
        <FilterMainHeadline variant="h4">
          Education at world universities
          <FilterMainSubheading>
            {HomepageFilterSubheadingText}
          </FilterMainSubheading>
        </FilterMainHeadline>
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
