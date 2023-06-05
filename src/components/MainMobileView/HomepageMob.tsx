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

const HomepageMob = () => {
  const [CardCount, setCardCount] = useState(3);

  function AddMoreCards() {
    setCardCount((prev) => prev + 5);
  }

  const UniversityCards = Array.from({ length: CardCount }, (_, index) => (
    <UniversityCard key={index} />
  ));
  return (
    <div>
      <NavbarMob />
      <MidbarMob />
      <BoxMidPad>
        <BoldText variant="h5">318 study programs in 11 countries</BoldText>
        <SearchFilterMob />
      </BoxMidPad>
      {UniversityCards}
      <BoxCenterHighMar>
        <ShowMoreButton onClick={AddMoreCards}>Show More</ShowMoreButton>
      </BoxCenterHighMar>
      <FooterIconMob />
      <Box sx={{ padding: "-50px" }}>
        <FooterText />
      </Box>
    </div>
  );
};

export default HomepageMob;
