import { Box, Paper, Typography } from "@mui/material";
import multiLangImage from ".././../figma_Images/multiLang-removebg.png";

const MultiLang = () => {
  return (
    <Paper elevation={6} sx={{ maxWidth: "500px", padding: '30px', borderRadius: '20px' }}>
      <Typography sx={{ color: "red" }} fontWeight="bold">
        Beta
      </Typography>
      <Typography sx={{ color: "blue" }} fontWeight="bold">
        Translation
      </Typography>
      <Typography variant="h6" fontWeight="bold">
        Translate entire web pages between seven language with a single click.<sup style={{fontSize: 'small'}}>1</sup>
      </Typography>

      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <img src={multiLangImage} alt="multiLangImage" />
      </Box>
    </Paper>
  );
};

export default MultiLang;
