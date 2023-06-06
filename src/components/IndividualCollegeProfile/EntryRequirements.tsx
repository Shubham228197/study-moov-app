import { Button, Grid } from "@mui/material";
import { ProgramEntryRequirements } from "./CollegeProfileConstant/CollegeProfileConstants";
import Divider from "@mui/material/Divider";
import {
  BoxCenterText,
  GridLightGray,
  GridLighterGray,
  GridLowPad,
} from "./CollegeProfileStyling/ProfileStylingOverlays";
import { AdmissionHeadline } from "./CollegeProfileStyling/ProfileStylingText";
import { BoldText } from "../../GeneralStyling/Texts";
import {
  ToggleContainer,
  Box30MarginNoLR,
} from "../../GeneralStyling/Overlays";
import ToggleButton from "@mui/material/ToggleButton";
import { StyledToggleButtonGroupV2 } from "../../GeneralConstants/Constants";
import { useState } from "react";

const EntryRequirements = () => {
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
      <BoldText variant="h4">Admission</BoldText>
      <AdmissionHeadline variant="h5">
        {ProgramEntryRequirements.ProgramBatch}
      </AdmissionHeadline>
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
      <BoxCenterText>
        <GridLightGray container>
          {ProgramEntryRequirements.TableTitle.map((title, index) => (
            <GridLowPad item xs={3} key={index}>
              <BoldText>{title}</BoldText>
            </GridLowPad>
          ))}
        </GridLightGray>
        {ProgramEntryRequirements.TableData.map((data) => (
          <div key={data.id}>
            <GridLighterGray container>
              <Grid item xs={3}>
                {data.Pname}
              </Grid>
              <Grid item xs={3}>
                {data.Deadline.map((dline) => (
                  <p>{dline}</p>
                ))}
              </Grid>
              <Grid item xs={3}>
                {data.Eligiblity.map((elig) => (
                  <p>{elig}</p>
                ))}
              </Grid>
              <Grid item xs={3}>
                {data.Score}
              </Grid>
            </GridLighterGray>
            <Divider color="#dcdcdc" />
          </div>
        ))}
      </BoxCenterText>
    </Box30MarginNoLR>
  );
};

export default EntryRequirements;
