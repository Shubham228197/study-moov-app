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
import { ToggleButton } from "../../GeneralStyling/Buttons";

const EntryRequirements = () => (
  <Box30MarginNoLR>
    <BoldText variant="h4">Admission</BoldText>
    <AdmissionHeadline variant="h5">
      {ProgramEntryRequirements.ProgramBatch}
    </AdmissionHeadline>
    <ToggleContainer>
      <ToggleButton>Bachelor's degree</ToggleButton>
      <Button color="inherit" size="small">
        Master's Degree
      </Button>
    </ToggleContainer>
    <BoxCenterText>
      <GridLightGray container>
        {ProgramEntryRequirements.TableTitle.map((title) => (
          <GridLowPad item xs={3}>
            <BoldText>{title}</BoldText>
          </GridLowPad>
        ))}
      </GridLightGray>
      {ProgramEntryRequirements.TableData.map((data) => (
        <>
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
        </>
      ))}
    </BoxCenterText>
  </Box30MarginNoLR>
);

export default EntryRequirements;
