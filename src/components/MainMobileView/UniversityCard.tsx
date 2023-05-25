import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";
import { StarIconLogo, InfoIconLogo } from "../../styling/Buttons/IconButtons";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { CountryFlagImages } from "./constant";
import CollegeImage from "../../figma_Images/College-card-Dark.jpg";

const UniversityCard = () => {
  return (
    <Paper
      sx={{
        backgroundImage: `url('${CollegeImage}')`,
        margin: "10px",
        borderRadius: "20px",
        backgroundSize: "cover",
      }}
      elevation={8}
    >
      <Box sx={{ padding: "25px", color: "white" }}>
        <Typography variant="h3" fontWeight="bold">
          Vienne Business University
        </Typography>
        <Box sx={{ fontSize: "small", margin: "20px 0px" }}>
          <Button
            color="success"
            variant="contained"
            size="small"
            sx={{ borderRadius: "30px", padding: "0px" }}
          >
            <StarIconLogo fontSize="small" />
            4.8
            <Tooltip title="University ranking according to Times magazine">
              <InfoIconLogo fontSize="small" />
            </Tooltip>
          </Button>
          <FmdGoodIcon fontSize="small" />
          Austria, Vienna
        </Box>
        <Typography>
          Language of instruction:
          {CountryFlagImages.map((flags) => (
            <>{flags}</>
          ))}
        </Typography>
        <Box sx={{ margin: "20px 0px" }}>
          <Typography variant="subtitle2">Price</Typography>
          <Typography variant="h5">€ 25 538/year</Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "capitalize", margin: "0px 10px" }}
        >
          Submit Your Application
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: "capitalize", color: 'white', fontWeight: 'bold', border: "1.5px solid blue"}}
        >
          All Programs
        </Button>
      </Box>
    </Paper>
  );
};

export default UniversityCard;
