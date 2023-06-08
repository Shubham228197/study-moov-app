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
import FilterCompleted from "./FilterCompleted";
import { useState } from "react";
import { UniversitiesList } from "../../../GeneralConstants/CollegeList";
import useMoovContext from "../../../Hooks/use-moov-context";

const HomepageFiltered = () => {
  const [CardCount, setCardCount] = useState(2);
  const { globalFormData } = useMoovContext();
  function AddMoreCards() {
    setCardCount((prev) => prev + 5);
  }

  type UniversitiesListType = {
    id: string;
    name: string;
    location: string;
    degreeOffered: string[];
    languages: string[];
  }[];

  const filterUniversityBySearch = (UniversitiesList: UniversitiesListType) => {
    const FilterByLocation = UniversitiesList.filter((university) => {
      if (
        globalFormData.nativeLand.toLowerCase() ===
          university.location.toLowerCase() ||
        globalFormData.nativeLand === ""
      ) {
        return true;
      }
      return false;
    });

    const FilterByDegreeOffered = FilterByLocation.filter((university) => {
      if (
        globalFormData.program === "" ||
        university.degreeOffered.includes(globalFormData.program)
      ) {
        return true;
      }
      return false;
    });

    const FilterByLanguages = FilterByDegreeOffered.filter((university) => {
      if (
        globalFormData.languages === "all-languages" ||
        university.languages.includes(globalFormData.languages)
      ) {
        return true;
      }
      return false;
    });
    return FilterByLanguages;
  };

  const FilteredUniversity = filterUniversityBySearch(UniversitiesList);

  const UniversityCards = FilteredUniversity.map((item, index) => (
    <CollegeCardOpen key={item.id} CollegeProfileInfo={item} />
  ));

  const ShowUniversity = Array.from(
    { length: CardCount },
    (_, index) => UniversityCards[index]
  );
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
        <FilterCompleted />
        {ShowUniversity}
        <BoxCenterHighMar>
          {FilteredUniversity.length <= CardCount ? (
            <></>
          ) : (
            <ShowMoreButton variant="outlined" onClick={AddMoreCards}>
              Show more
            </ShowMoreButton>
          )}
        </BoxCenterHighMar>
        <FooterIcon />
        <FooterText />
      </FilterBoxMain>
    </>
  );
};

export default HomepageFiltered;
