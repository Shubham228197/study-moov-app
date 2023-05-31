import NavbarMob from "./NavbarMob";
import MidbarMob from "./MidbarMob";
import { Box, Typography } from "@mui/material";
import UniversityCard from "./UniversityCard";
import { ShowMoreButton } from "../../GeneralStyling/Buttons";
import { BoxCenterHighMar } from "../MainComponent/MainStyling/HomepageOverlayStyles";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import FooterText from "../MainComponent/MainPage/FooterText";

const HomepageMob = () => {
  return (
    <div>
      <NavbarMob />
      <MidbarMob />
      <Typography variant="h5" fontWeight='bold' sx={{padding: '10px'}}>318 study programs in 11 countries</Typography>
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <UniversityCard />
      <BoxCenterHighMar>
        <ShowMoreButton>Show More</ShowMoreButton>
      </BoxCenterHighMar>
      <FooterIcon />
      <Box sx={{padding: '-50px'}}>
        <FooterText />
      </Box>
    </div>
  );
};

export default HomepageMob;
