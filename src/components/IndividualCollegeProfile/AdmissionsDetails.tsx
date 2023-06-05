import { Typography } from "@mui/material";
import { AdmissionPoints } from "./CollegeProfileConstant/CollegeProfileConstants";
import { AddmissionContainer } from "./CollegeProfileStyling/ProfileStylingOverlays";
import {
  LiLowPadNoLR,
  TextMidPadNoLR,
} from "./CollegeProfileStyling/ProfileStylingText";
import { BoldText } from "../../GeneralStyling/Texts";

const AdmissionsDetails = () => {
  return (
    <AddmissionContainer elevation={4}>
      <BoldText variant="h4">{AdmissionPoints.title}</BoldText>
      <TextMidPadNoLR>{AdmissionPoints.about}</TextMidPadNoLR>
      <Typography>These include:</Typography>
      <ul>
        {AdmissionPoints.points.map((points, index) => (
          <LiLowPadNoLR key={index}>{points}</LiLowPadNoLR>
        ))}
      </ul>
    </AddmissionContainer>
  );
};

export default AdmissionsDetails;
