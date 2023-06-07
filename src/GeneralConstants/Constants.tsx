import { InputAdornment, MenuItem } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { UtilityIcons } from "../components/MainComponent/MainStyling/HomepageOverlayStyles";
import BritainFlag from "../FigmaImages/great-britain-flag-icon.png";
import SpainImage from "../FigmaImages/spain-flag-icon.png";
import GermanImage from "../FigmaImages/icons8-germany-48.png";
import RussiaImage from "../FigmaImages/russia-flag-icon.png";
import { styled } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
    id: "0",
    value: "all-languages",
    label: "All languages",
    tag: (
      <MenuItem key="all-languages" value="all-languages">
        All languages
      </MenuItem>
    ),
  },
  {
    id: "1",
    value: "english",
    label: "English",
    tag: (
      <MenuItem key="english" value="english">
        <UtilityIcons src={BritainFlag} alt="flag" />
        English
      </MenuItem>
    ),
  },
  {
    id: "2",
    value: "german",
    label: "German",
    tag: (
      <MenuItem key="german" value="german">
        <UtilityIcons src={GermanImage} alt="flag" /> German
      </MenuItem>
    ),
  },
  {
    id: "3",
    value: "russian",
    label: "Russian",
    tag: (
      <MenuItem key="russian" value="russian">
        <UtilityIcons src={RussiaImage} alt="flag" /> Russian
      </MenuItem>
    ),
  },
  {
    id: "4",
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
      <ClearIcon sx={{ color: "blue", cursor: "pointer" }} />
    </InputAdornment>
  ),
};

export const FieldNumber = {
  startAdornment: <InputAdornment position="start">{`<€`}</InputAdornment>,
  endAdornment: (
    <InputAdornment position="end">
      <ClearIcon sx={{ color: "blue", cursor: "pointer" }} />
    </InputAdornment>
  ),
};
export const CollegeDegreeDetails = [
  `11 Oct - 13 Dec`,
  `November 1, 2021`,
  `22-23 years old`,
  `€ 22,989/year`,
];
export const StyledToggleButtonGroupV2 = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      //   margin: theme.spacing(0.5), makes the button separate
      backgroundColor: "white",
      border: 0,
      "&.Mui-disabled": {
        backgroundColor: "pink",
        border: 0,
      },
      "&.css-1x4vipr-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {
        backgroundColor: "black",
        color: "white",
      },
    },
  })
);
export const StyledToggleButtonGroupV3 = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      //   margin: theme.spacing(0.5), makes the button separate
      backgroundColor: "transparent",
      border: 0,
      padding: 0,
      margin: "5px",
      "&.Mui-disabled": {
        border: 0,
      },
      // take the class for narrow down the comp from inspect
      "&.css-1x4vipr-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {
        backgroundColor: "black",
        color: "white",
      },
    },
  })
);
export const Specialities_Option = [
  { value: "cs", title: "Computer Science" },
  { value: "doc", title: "Doctorate" },
  { value: "mngmnt", title: "Management" },
  { value: "bus", title: "business" },
  { value: "com", title: "Commerce" },
  { value: "art", title: "Arts" },
  { value: "mech", title: "Mechanical" },
  { value: "bot", title: "Botony" },
];
export const Programs_Option = [
  { value: "bachelor", label: `Bachelor's Degree` },
  { value: "master", label: `Master's Degree` },
  { value: "under18", label: `Under 18 Degree` },
  { value: "diploma", label: `Diploma` },
  { value: "long-dist", label: `Long Distance` },
];
