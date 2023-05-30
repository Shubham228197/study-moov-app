import { Typography } from '@mui/material'
import { AdmissionPoints } from './CollegeProfileConstant/CollegeProfileConstants'
import { AddmissionContainer } from './CollegeProfileStyling/ProfileStylingOverlays'
import { BoldText, LiLowPadNoLR, TextMidPadNoLR } from './CollegeProfileStyling/ProfileStylingText'

const AdmissionsDetails = () => {
  return (
    <AddmissionContainer elevation={4}>
      <BoldText variant='h4'>{AdmissionPoints.title}</BoldText>
      <TextMidPadNoLR>{AdmissionPoints.about}</TextMidPadNoLR>
      <Typography>These include:</Typography>
      <ul>
        {AdmissionPoints.points.map((points)=><LiLowPadNoLR>{points}</LiLowPadNoLR>)}
      </ul>
    </AddmissionContainer>
  )
}

export default AdmissionsDetails
