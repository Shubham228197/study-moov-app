import NavbarHome from "./NavbarHome";
import MidbarHome from "./MidbarHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../MainPage/FooterIcon";
import FooterText from "../MainPage/FooterText";
import { ShowMoreButton } from "../../../GeneralStyling/Buttons";
import { HomepageContent } from "../MainStyling/HomepageOverlayStyles";
import { HomepageHeading } from "../MainStyling/HomepageTextStyles";
import { BoxCenterHighMar } from "../../../GeneralStyling/Overlays";
import FilterHomepage from "./FilterHomepage";
import { useState } from "react";

const HomepageMain = () => {
  const [CardCount, setCardCount] = useState(3);

  function AddMoreCards() {
    setCardCount((prev) => prev + 5);
  }

  const UniversityCards = Array.from({ length: CardCount }, (_, index) => (
    <CollegeCardOpen key={index} />
  ));

  return (
    <>
      <NavbarHome />
      <MidbarHome />
      <HomepageContent>
        <HomepageHeading variant="h6">
          318 study programs in 11 countries
        </HomepageHeading>
        <FilterHomepage />
        {UniversityCards}
        <BoxCenterHighMar>
          <ShowMoreButton variant="outlined" onClick={AddMoreCards}>
            Show more
          </ShowMoreButton>
        </BoxCenterHighMar>
        <FooterIcon />
        <FooterText />
      </HomepageContent>
    </>
  );
};

export default HomepageMain;
