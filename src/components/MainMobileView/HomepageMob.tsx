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

const HomepageMob = () => {
  return (
    <div>
      <NavbarMob />
      <MidbarMob />
      <BoxMidPad>
        <BoldText variant="h5">318 study programs in 11 countries</BoldText>
        <SearchFilterMob />
      </BoxMidPad>
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <BoxCenterHighMar>
        <ShowMoreButton>Show More</ShowMoreButton>
      </BoxCenterHighMar>
      <FooterIconMob />
      <Box sx={{ padding: "-50px" }}>
        <FooterText />
      </Box>
    </div>
  );
};

export default HomepageMob;
