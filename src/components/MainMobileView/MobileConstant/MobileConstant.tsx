import { Typography } from "@mui/material";
import BagImage from "../../../FigmaImages/backpack-icon-main.png";
import GraduationImage from "../../../FigmaImages/graduation-cap-icon-main.png";
import BookIcon from "../../../FigmaImages/book-icon.png";
import EnglandFlagImage from "../../../FigmaImages/great-britain-flag-icon.png";
import SpainFlagImage from "../../../FigmaImages/spain-flag-icon.png";
import FranceFlagImage from "../../../FigmaImages/france-flag-icon.png";

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
  {
    id: "1",
    imageTag: (
      <>
        <img
          src={BagImage}
          alt="bag"
          style={{ height: "30px", width: "30px", padding: "0px 10px" }}
        />
        <Typography variant="subtitle2" sx={{ padding: "0px 10px" }}>
          Full support: visa, application submission, motivation letter,
          interview
        </Typography>
      </>
    ),
  },
  {
    id: "2",
    imageTag: (
      <>
        <img
          src={GraduationImage}
          alt="cap"
          style={{ height: "30px", width: "30px", padding: "0px 10px" }}
        />
        <Typography variant="subtitle2" sx={{ padding: "0px 10px" }}>
          Preparation for admission to the TOP-50 universities and TOP-100
          schools
        </Typography>
      </>
    ),
  },
  {
    id: "3",
    imageTag: (
      <>
        <img
          src={BookIcon}
          alt="book"
          style={{ height: "30px", width: "30px", padding: "0px 10px" }}
        />
        <Typography variant="subtitle2" sx={{ padding: "0px 10px" }}>
          Preparation for IELTS, GMAT, TOEFL, GRE, UKiset, SAT
        </Typography>
      </>
    ),
  },
];
export const CountryFlagImages = [
  {
    id: "1",
    imageTag: (
      <img src={EnglandFlagImage} alt="london" style={{ height: "20px" }} />
    ),
  },
  {
    id: "2",
    imageTag: (
      <img src={SpainFlagImage} alt="spain" style={{ height: "20px" }} />
    ),
  },
  {
    id: "3",
    imageTag: (
      <img src={FranceFlagImage} alt="france" style={{ height: "20px" }} />
    ),
  },
];
export const ProgramDegreeDetails = [
  { id: 1, title: "Admission Before", value: `11 Oct - 13 Dec` },
  { id: 2, title: "Start Date", value: `November 1, 2021` },
  { id: 3, title: "Age", value: `22-23 years old` },
  { id: 4, title: "Price", value: `€ 22,989/year` },
];
type Poffers = {
  id: string;
  value: string;
  label: string;
  title: string;
}[];
export const ProgramOffers: Poffers = [
  {
    id: "1",
    title: `Bachelor's degree`,
    label: "bachelor-degree",
    value: "bachelor",
  },
  {
    id: "2",
    title: `Master's Degree`,
    label: "master-degree",
    value: "master",
  },
  { id: "3", title: `Under 18`, label: "under18-degree", value: "under18" },
];
