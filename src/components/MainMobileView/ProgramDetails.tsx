import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ProgramDegreeDetails, ProgramOffers } from "./constant";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ProgramDetails = () => {
  let Program = "Bachelor";
  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#ebe0e0",
        }}
      >
        Study &gt; Moov
      </Typography>
      <Box sx={{fontWeight: 'bold', padding: '20px 0px'}}>
        <Button size="small" sx={{ padding: "0px" }}>
          <KeyboardArrowLeftIcon color='disabled'/>
        </Button>
        Vienne University
      </Box>
      <Stack direction="row" sx={{backgroundColor: '#ebe0e0'}}>
        {ProgramOffers.map((item) => (
          <Button sx={{textTransform: 'capitalize'}}>{item.value}</Button>
        ))}
      </Stack>
      <Grid container sx={{padding: '15px'}}>
        <Grid item xs={12}>
          <Typography>Speciality</Typography>
          <Typography variant="h4">{Program} of Design</Typography>
        </Grid>
        {ProgramDegreeDetails.map((item) => (
          <>
            <Grid item xs={6} sx={{padding: '10px 10px 10px 0px'}}>
              <Typography>{item.title}</Typography>
              <Typography>{item.value}</Typography>
            </Grid>
          </>
        ))}
        <Box sx={{display: 'flex', margin: 'auto'}}>
          <Button size="large" variant="contained" sx={{textTransform: 'capitalize', padding: '15px 75px', fontSize: 'large', borderRadius: '10px' }}>Submit Your Application</Button>
        </Box>
      </Grid>
    </div>
  );
};

export default ProgramDetails;
