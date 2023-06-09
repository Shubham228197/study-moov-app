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
import { UniversitiesList } from "../../../GeneralConstants/CollegeList";

const HomepageMain = () => {
  const [CardCount, setCardCount] = useState(3);

  const AddMoreCards = () => {
    setCardCount((prev) => prev + 3);
  }
  const ReduceCards = () => {
    setCardCount((prev) => prev - 3);
  }

  const UniversityCards = UniversitiesList.map((item, index) => (
    <CollegeCardOpen key={index} CollegeProfileInfo={item} />
  ));
  const ShowUniversity = Array.from(
    { length: CardCount },
    (_, index) => UniversityCards[index]
  );

  return (
    <>
      <NavbarHome />
      <MidbarHome />
      <HomepageContent>
        <HomepageHeading variant="h6">
          318 study programs in 11 countries
        </HomepageHeading>
        <FilterHomepage />
        {ShowUniversity}
        <BoxCenterHighMar>
          {UniversitiesList.length <= CardCount ? (
            <ShowMoreButton variant="outlined" onClick={ReduceCards}>
            Show Less
          </ShowMoreButton>
          ) : (
            <ShowMoreButton variant="outlined" onClick={AddMoreCards}>
              Show more
            </ShowMoreButton>
          )}
        </BoxCenterHighMar>
        <FooterIcon />
        <FooterText />
      </HomepageContent>
    </>
  );
};

export default HomepageMain;
