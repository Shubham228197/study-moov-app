import NavbarHome from "./NavbarHome";
import MidbarHome from "./MidbarHome";
import FilterFieldHome from "./FilterFieldHome";
import CollegeCardOpen from "./CollegeCardDetails";
import FooterIcon from "../MainPage/FooterIcon";
import FooterText from "../MainPage/FooterText";
import { ShowMoreButton } from "../../../GeneralStyling/Buttons";
import {
  HomepageContent
} from "../MainStyling/HomepageOverlayStyles";
import { HomepageHeading } from "../MainStyling/HomepageTextStyles";
import { BoxCenterHighMar } from "../../../GeneralStyling/Overlays";

const HomepageMain = () => {
  return (
    <>
      <NavbarHome />
      <MidbarHome />
      <HomepageContent>
        <HomepageHeading variant="h6">
          318 study programs in 11 countries
        </HomepageHeading>
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
      </HomepageContent>
    </>
  );
};

export default HomepageMain;
