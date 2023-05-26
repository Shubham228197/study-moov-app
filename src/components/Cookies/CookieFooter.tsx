import { Button, Grid, Stack, Typography } from "@mui/material";
import CookieIcon from '@mui/icons-material/Cookie';

const CookieFooter = () => {
  return (
    <Grid container sx={{ backgroundColor: "#E5E5E5" }}>
      <Grid item xs={6} sx={{display:'flex', margin: 'auto', justifyContent: 'center'}}>
        <CookieIcon fontSize="large" sx={{padding: '5px'}}/>
        <Typography variant="h6" sx={{padding: '5px'}}>Fresh Cookie Update</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", padding: '10px' }}>
        <Typography>
          We use cookies to make our site work and also for analytics and
          advertising purposes. You can enable or disable optional cookies. See
          our Cookie policy for more details
        </Typography>
        <Stack direction="row">
          <Button
            variant="outlined"
            sx={{
              border: "1px solid black",
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
              margin: "10px 10px 10px 0px",
            }}
          >
            Manage Your cookies
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              textTransform: "capitalize",
              margin: "10px",
            }}
          >
            Accept all cookies
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CookieFooter;
