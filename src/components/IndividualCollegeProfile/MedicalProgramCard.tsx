import { Button, Grid } from "@mui/material";
import { BOMS } from "./CollegeProfileConstant/CollegeProfileConstants";
import CollegeFee from "../MainComponent/Homepage/CollegeFee";
import {
  CollegeCard,
  CollegeCardData,
  QuickAppBox,
} from "./CollegeProfileStyling/ProfileStylingOverlays";
import {
  BoldText,
  BoldTextLowPad,
  BoldTextLowPadNoTB,
  GrayText,
} from "./CollegeProfileStyling/ProfileStylingText";

const MedicalCollegeCard = () => (
  <CollegeCard elevation={4}>
    <Grid container>
      <Grid item xs={9}>
        <BoldText variant="h4">Bachelor of Medicine and Surgery</BoldText>
        <GrayText variant="subtitle2">Full-time</GrayText>
        <Grid container>
          {BOMS.map((data) => (
            <CollegeCardData item xs={3}>
              <BoldTextLowPad>{data.title}</BoldTextLowPad>
              <BoldTextLowPadNoTB variant="h6">{data.value}</BoldTextLowPadNoTB>
            </CollegeCardData>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <CollegeFee />
        <QuickAppBox>
          <Button variant="contained">Quick application</Button>
        </QuickAppBox>
      </Grid>
    </Grid>
  </CollegeCard>
);

export default MedicalCollegeCard;
