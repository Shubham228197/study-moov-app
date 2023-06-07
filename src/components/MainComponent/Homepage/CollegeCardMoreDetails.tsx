import { Box, Button, Divider, Grid } from "@mui/material";
import GradImage from "../../../FigmaImages/graduation-cap-icon-main.png";
import PencilImage from "../../../FigmaImages/pencil-icon.png";
import BellImage from "../../../FigmaImages/bell-icon.png";
import AppleImage from "../../../FigmaImages/apple-icon.png";
import SandClockImage from "../../../FigmaImages/sandwatch-icon.png";
import {
  CollegeInfoExtended,
  ExtendedInfoButtonContainer,
  UtilityIcons,
} from "../MainStyling/HomepageOverlayStyles";
import { CollegeDegreeDetails } from "../../../GeneralConstants/Constants";
import { GridHighPad } from "../../../GeneralStyling/Overlays";
import { StyledToggleButtonGroupV3 } from "../../../GeneralConstants/Constants";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { ButtonCptzd } from "../../../GeneralStyling/Buttons";
import { ProgramToggleButtonInputs } from "../../../GeneralConstants/Constants";

const TableHeadingValues = [
  { id: 0, img: GradImage, value: "Program", alt: "Graduation-icon" },
  { id: 1, img: PencilImage, value: "Submission to", alt: "Pencil-icon" },
  { id: 2, img: BellImage, value: "Start date", alt: "Bell-icon" },
  { id: 3, img: AppleImage, value: "Age", alt: "Apple-icon" },
  { id: 4, img: SandClockImage, value: "Price", alt: "Sand-watch-icon" },
];

const CollegeCardMoreDetails = () => {
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
    <CollegeInfoExtended elevation={6}>
      <ExtendedInfoButtonContainer>
        <StyledToggleButtonGroupV3
          size="small"
          value={programChoice}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          {ProgramToggleButtonInputs.map((buttonInputs) => (
            <ToggleButton
              value={buttonInputs.value}
              aria-label={buttonInputs.aria_label}
              key={buttonInputs.id}
            >
              <ButtonCptzd color="inherit">{buttonInputs.label}</ButtonCptzd>
            </ToggleButton>
          ))}
        </StyledToggleButtonGroupV3>
      </ExtendedInfoButtonContainer>
      <Box>
        <Grid container>
          {TableHeadingValues.map((tableValues) => (
            <GridHighPad item xs={2} key={tableValues.id}>
              <UtilityIcons src={tableValues.img} alt={tableValues.alt} />
              {tableValues.value}
            </GridHighPad>
          ))}
          <GridHighPad item xs={2}></GridHighPad>
        </Grid>
        <Divider variant="middle" />

        <Grid container>
          {CollegeDegreeDetails.map((clgDetails) => (
            <>
              <GridHighPad item xs={2}>
                {clgDetails.program}
              </GridHighPad>
              {clgDetails.value.map((programInfo, index) => (
                <GridHighPad item xs={2} key={index}>
                  {programInfo}
                </GridHighPad>
              ))}
              <GridHighPad item xs={2}>
                <Button variant="contained">Submit your application</Button>
              </GridHighPad>
            </>
          ))}
        </Grid>
      </Box>
    </CollegeInfoExtended>
  );
};

export default CollegeCardMoreDetails;
