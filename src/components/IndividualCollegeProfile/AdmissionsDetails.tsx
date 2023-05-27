import { Paper, Typography } from '@mui/material'
import { AdmissionPoints } from './CollegeProfileConstants'

const AdmissionsDetails = () => {
  return (
    <Paper elevation={4} sx={{padding: '50px', margin: '30px 0px 30px 0px'}}>
      <Typography variant='h4' fontWeight='bold'>{AdmissionPoints.title}</Typography>
      <Typography sx={{margin: '10px 0px'}}>{AdmissionPoints.about}</Typography>
      <Typography>These include:</Typography>
      <ul>
        {AdmissionPoints.points.map((points)=><li style={{padding: '5px 0px'}}>{points}</li>)}
      </ul>
    </Paper>
  )
}

export default AdmissionsDetails
