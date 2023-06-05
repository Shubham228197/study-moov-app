import { Button, Grid } from "@mui/material";
import React from "react";
import CollegeFee from "../MainComponent/Homepage/CollegeFee";
import { SOMS } from "./CollegeProfileConstant/CollegeProfileConstants";
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
} from '../../GeneralStyling/Texts';

const MedicalSchoolCard = () => (
  <CollegeCard elevation={4}>
    <Grid container>
      <Grid item xs={9}>
        <BoldText variant="h4">School of Medicine and Surgery</BoldText>
        <GrayText variant="subtitle2">Full-time</GrayText>
        <Grid container>
          {SOMS.map((data) => (
            <CollegeCardData item xs={2.4} key={data.id}>
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

export default MedicalSchoolCard;
