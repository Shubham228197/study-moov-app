import MainNavbar from "../MainPage/MainNavbar";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../MainPage/FooterIcon";
import FooterText from "../MainPage/FooterText";
import { FilterBoxMain } from "../MainStyling/HomepageOverlayStyles";
import {
  BoldText30Mar,
  FilterMainSubheading,
} from "../MainStyling/HomepageTextStyles";
import { HomepageFilterSubheadingText } from "../../../GeneralConstants/Constants";
import { ShowMoreButton } from "../../../GeneralStyling/Buttons";
import { BoxCenterHighMar } from "../../../GeneralStyling/Overlays";
import FilterHomepage from "./FilterHomepage";
import { useState } from "react";

const HomepageFiltered = () => {
  const [CardCount, setCardCount] = useState(3);

  function AddMoreCards() {
    setCardCount((prev) => prev + 5);
  }

  const UniversityCards = Array.from({ length: CardCount }, (_, index) => (
    <CollegeCardOpen key={index} />
  ));
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
        <FilterHomepage />
        {UniversityCards}
        <BoxCenterHighMar>
          <ShowMoreButton variant="outlined" onClick={AddMoreCards}>
            Show more
          </ShowMoreButton>
        </BoxCenterHighMar>
        <FooterIcon />
        <FooterText />
      </FilterBoxMain>
    </>
  );
};

export default HomepageFiltered;
