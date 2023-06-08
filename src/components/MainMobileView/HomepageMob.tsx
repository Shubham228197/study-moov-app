import NavbarMob from "./NavbarMob";
import MidbarMob from "./MidbarMob";
import { Box } from "@mui/material";
import UniversityCard from "./UniversityCard";
import { ShowMoreButton } from "../../GeneralStyling/Buttons";
import { BoxCenterHighMar, BoxMidPad } from "../../GeneralStyling/Overlays";
import FooterIconMob from "../MainMobileView/FooterIconMob";
import FooterText from "../MainComponent/MainPage/FooterText";
import SearchFilterMob from "./SearchFilterMob";
import { BoldText } from "../../GeneralStyling/Texts";
import { useState } from "react";
import { UniversitiesList } from "../../GeneralConstants/CollegeList";

const HomepageMob = () => {
  const [CardCount, setCardCount] = useState(3);

  const AddMoreCards = () => {
    setCardCount((prev) => prev + 2);
  };

  const ReduceCards = () => {
    setCardCount((prev) => prev - 2);
  };

  const UniversityCards = UniversitiesList.map((item, index) => (
    <UniversityCard key={index} clgData={item} />
  ));
  const ShowUniversity = Array.from(
    { length: CardCount },
    (_, index) => UniversityCards[index]
  );

  return (
    <>
      <NavbarMob />
      <MidbarMob />
      <BoxMidPad>
        <BoldText variant="h5">318 study programs in 11 countries</BoldText>
        <SearchFilterMob />
      </BoxMidPad>
      {ShowUniversity}
      <BoxCenterHighMar>
        {UniversitiesList.length === CardCount ? (
          <ShowMoreButton onClick={ReduceCards}>Show Less</ShowMoreButton>
        ) : (
          <ShowMoreButton onClick={AddMoreCards}>Show More</ShowMoreButton>
        )}
      </BoxCenterHighMar>
      <FooterIconMob />
      <Box sx={{ padding: "-50px" }}>
        <FooterText />
      </Box>
    </>
  );
};

export default HomepageMob;
