import { Button } from "@mui/material";
import MedicalProgramCard from "./MedicalProgramCard";
import MedicalSchoolCard from "./MedicalSchoolCard";
import {
  Box30MarginNoLR,
  ToggleButton,
  ToggleContainer,
} from "./CollegeProfileStyling/ProfileStylingOverlays";
import { BoldText } from "./CollegeProfileStyling/ProfileStylingText";

const CollegeProgramInfo = () => {
  return (
    <Box30MarginNoLR>
      <BoldText variant="h4">Programs</BoldText>
      <ToggleContainer>
        <ToggleButton>Bachelor's degree</ToggleButton>
        <Button color="inherit" size="small">
          Master's Degree
        </Button>
      </ToggleContainer>
      <MedicalProgramCard />
      <MedicalSchoolCard />
      <MedicalProgramCard />
    </Box30MarginNoLR>
  );
};

export default CollegeProgramInfo;
