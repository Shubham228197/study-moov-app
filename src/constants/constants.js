import { InputAdornment, MenuItem } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { UtilityIcons } from "../styling/main/HomepageOverlayStyles";
import BritainFlag from "../figma_Images/great-britain-flag-icon.png";
import SpainImage from "../figma_Images/spain-flag-icon.png";
import GermanImage from "../figma_Images/icons8-germany-48.png";
import RussiaImage from "../figma_Images/russia-flag-icon.png";

export const overlayData = [
  {
    sno: "#1",
    data: `Get a general idea of ​​the process of admission,
    enrollment, application to a university or school.`,
  },
  {
    sno: "#2",
    data: `Get a personal offer based on the results of the
    conversation.`,
  },
  {
    sno: "#3",
    data: `We will try to understand the aspects that need to be
    improved to increase the chances.`,
  },
  {
    sno: "#4",
    data: `Discuss the chances, challenges, and barriers to enrollment
    and admission.`,
  },
];

export const aboutData = [
  `An idea of ​​what it might take for you to get into your dream
    university.`,
  `Personalized and detailed offer of our services depending on your
    needs.`,
  `Understanding what financial and time commitments will be required
    from you to get into the university of your dreams.`,
  `Discuss the strength of your portfolio and application in general.`,
];
export const FormTnC = `By clicking on the button, you consent to the processing of your personal data. We guarantee confidentiality.`;

export const HomepageFilterSubheadingText = `So, if you are just a caring parent, it's time to think about how
your son or daughter gets a decent start in this life. After all,
most likely, for certain reasons, you did not get such a chance at
one time. And the sooner you make the right decision, the easier it
will be, in the end, for a young student to master a language that
is still unfamiliar to him and adapt in an English-speaking
environment. It is no coincidence that some educational institutions
in the world open their doors to children of five years of age.`;

export const SelectLanguages = [
  {
    value: "all-languages",
    label: "All languages",
    tag: (
      <MenuItem key="all-languages" value="all-languages">
        All languages
      </MenuItem>
    ),
  },
  {
    value: "english",
    label: "English",
    tag: (
      <MenuItem key="english" value="english">
        <UtilityIcons src={BritainFlag} alt="flag"/>English
      </MenuItem>
    ),
  },
  {
    value: "german",
    label: "German",
    tag: (
      <MenuItem key="german" value="german">
        <UtilityIcons src={GermanImage} alt="flag" /> German
      </MenuItem>
    ),
  },
  {
    value: "russian",
    label: "Russian",
    tag: (
      <MenuItem key="russian" value="russian">
        <UtilityIcons src={RussiaImage} alt="flag" /> Russian
      </MenuItem>
    ),
  },
  {
    value: "spanish",
    label: "Spanish",
    tag: (
      <MenuItem key="spanish" value="spanish">
        <UtilityIcons src={SpainImage} alt="flag" /> Spanish
      </MenuItem>
    ),
  },
];

export const FieldText = {
  style: {
    border: "2px solid #287DFC",
    borderRadius: "10px",
  },
  endAdornment: (
    <InputAdornment position="start">
      <ClearIcon sx={{ color: "blue" }} />
    </InputAdornment>
  ),
};

export const FieldNumber = {
  style: {
    border: "2px solid #287DFC",
    borderRadius: "10px",
  },
  startAdornment: <InputAdornment position="start">{`<€`}</InputAdornment>,
  endAdornment: (
    <InputAdornment position="end">
      <ClearIcon sx={{ color: "blue" }} />
    </InputAdornment>
  ),
};
export const CollegeDegreeDetails = [
  `11 Oct - 13 Dec`,
  `November 1, 2021`,
  `22-23 years old`,
  `€ 22,989/year`,
];
