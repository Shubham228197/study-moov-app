import { Typography } from "@mui/material";
import BagImage from "../../../figma_Images/backpack-icon-main.png";
import GraduationImage from "../../../figma_Images/graduation-cap-icon-main.png";
import BookIcon from "../../../figma_Images/book-icon.png";
import EnglandFlagImage from "../../../figma_Images/great-britain-flag-icon.png";
import SpainFlagImage from "../../../figma_Images/spain-flag-icon.png";
import FranceFlagImage from "../../../figma_Images/france-flag-icon.png";

export const MidbarText = [
  {
    icon: "BagImage",
    text: "Full support: visa, application submission, motivation letter, interview",
  },
  {
    icon: "cap",
    text: "Preparation for admission to the TOP-50 universities and TOP-100 schools",
  },
  {
    icon: "book",
    text: "Preparation for IELTS, GMAT, TOEFL, GRE, UKiset, SAT",
  },
];
export const MidbarTextFull = [
  <>
    <img
      src={BagImage}
      alt="bag"
      style={{ height: "30px", width: "30px", padding: "0px 10px" }}
    />
    <Typography variant="subtitle2" sx={{ padding: "0px 10px" }}>
      Full support: visa, application submission, motivation letter, interview
    </Typography>
  </>,
  <>
    <img
      src={GraduationImage}
      alt="cap"
      style={{ height: "30px", width: "30px", padding: "0px 10px" }}
    />
    <Typography variant="subtitle2" sx={{ padding: "0px 10px" }}>
      Preparation for admission to the TOP-50 universities and TOP-100 schools
    </Typography>
  </>,
  <>
    <img
      src={BookIcon}
      alt="book"
      style={{ height: "30px", width: "30px", padding: "0px 10px" }}
    />
    <Typography variant="subtitle2" sx={{ padding: "0px 10px" }}>
      Preparation for IELTS, GMAT, TOEFL, GRE, UKiset, SAT
    </Typography>
  </>,
];
export const CountryFlagImages = [
  <img src={EnglandFlagImage} alt="london" style={{ height: "20px" }} />,
  <img src={SpainFlagImage} alt="spain" style={{ height: "20px" }} />,
  <img src={FranceFlagImage} alt="france" style={{ height: "20px" }} />,
];
export const ProgramDegreeDetails = [
  { title: "Admission Before", value: `11 Oct - 13 Dec` },
  { title: "Start Date", value: `November 1, 2021` },
  { title: "Age", value: `22-23 years old` },
  { title: "Price", value: `€ 22,989/year` },
];
type Poffers = {
  value: string;
  type: string;
}[]
export const ProgramOffers: Poffers = [
    {value: `Bachelor's degree`, type: 'contained'},
    {value: `Master's Degree`, type: 'text'},
    {value: `Under 18`, type: 'text'},
]
