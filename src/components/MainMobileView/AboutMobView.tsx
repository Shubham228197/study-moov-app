import { Box, Paper, Typography } from "@mui/material";
import { aboutData } from "../../constants/constants";

const AboutMobView = () => {
  return (
    <Paper sx={{ margin: "20px" }}>
      <Box sx={{padding: '15px 20px 30px 20px'}}>
        <Typography variant="h4" sx={{ padding: "5px", fontWeight: "bold" }}>
          About Us
        </Typography>
        {aboutData.map((item) => (
          <Typography variant="body2" sx={{ padding: "5px" }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default AboutMobView;
