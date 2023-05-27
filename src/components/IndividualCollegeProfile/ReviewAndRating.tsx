import { Grid, Stack, Typography } from "@mui/material";
import ReviewLogo from "../../figma_Images/qs_university_rankings_logo_removebg.png";
import { ReviewRank } from "./CollegeProfileConstants";
import { RankChart } from "./CollegeProfileConstants";

const ReviewAndRating = () => {
  return (
    <div style={{padding: '20px 0px', margin: '30px 0px 30px 0px'}}>
      <Typography variant="h5" fontWeight='bold'>Reviews and ratings</Typography>
      <Stack direction="row" padding='20px 0px'>
        <img
          src={ReviewLogo}
          alt="QS_Review_LOGO"
          style={{ maxHeight: "200px", maxWidth: "200px" }}
        />
        {ReviewRank.map((rank) => (
          <Typography sx={{ margin: "0px 30px" }}>
            <Typography fontWeight="bold">{rank.ranking}</Typography>
            {rank.topic}
          </Typography>
        ))}
      </Stack>
      <Grid container sx={{textAlign: 'center', backgroundColor: '#E5E5E5'}}>
        <Grid item xs={4} sx={{ padding: "20px 0px", fontWeight: "bold" }}>
          University
        </Grid>
        <Grid item xs={4} sx={{ padding: "20px 0px", fontWeight: "bold" }}>
          Ranked
        </Grid>
        <Grid item xs={4} sx={{ padding: "20px 0px", fontWeight: "bold" }}>
          Score
        </Grid>
      </Grid>
      {RankChart.map((ChartData) => (
        <Grid container sx={{textAlign: 'center', backgroundColor: '#F1EFEB'}}>
          <Grid item xs={4} sx={{ padding: "20px 0px" }}>
            {ChartData.University}
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px 0px", fontWeight: "bold" }}>
            {ChartData.Ranked}
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px 0px" }}>
            {ChartData.Score}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default ReviewAndRating;
