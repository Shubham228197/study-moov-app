import { Button } from "@mui/material";
import MedicalProgramCard from "./MedicalProgramCard";
import MedicalSchoolCard from "./MedicalSchoolCard";
import { BoldText } from "../../GeneralStyling/Texts";
import {
  Box30MarginNoLR,
  ToggleContainer,
} from "../../GeneralStyling/Overlays";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { StyledToggleButtonGroupV2 } from "../../GeneralConstants/Constants";

const CollegeProgramInfo = () => {
  const [programChoice, setProgramChoice] = useState("bachelor");
  let ButtonHistory = "";

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    ButtonHistory = programChoice;
    setProgramChoice(newAlignment);
    if (newAlignment === null) {
      setProgramChoice(ButtonHistory);
    }
  };
  return (
    <Box30MarginNoLR>
      <BoldText variant="h4">Programs</BoldText>
      <ToggleContainer>
        <StyledToggleButtonGroupV2
          size="small"
          value={programChoice}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="bachelor" aria-label="bachelor-degree">
            <Button color="inherit">Bachelor's degree</Button>
          </ToggleButton>
          <ToggleButton value="master" aria-label="master-degree">
            <Button color="inherit">Master's Degree</Button>
          </ToggleButton>
        </StyledToggleButtonGroupV2>
      </ToggleContainer>
      <MedicalProgramCard />
      <MedicalSchoolCard />
      <MedicalProgramCard />
    </Box30MarginNoLR>
  );
};

export default CollegeProgramInfo;
