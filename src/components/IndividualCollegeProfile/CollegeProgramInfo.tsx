import { Box, Button, Typography } from "@mui/material";
import MedicalProgramCard from "./MedicalProgramCard";
import MedicalSchoolCard from "./MedicalSchoolCard";
const CollegeProgramInfo = () => {
  return (
    <div style={{margin: '30px 0px 30px 0px'}}>
      <Typography variant="h4" fontWeight="bold">
        Programs
      </Typography>
      <Box
        sx={{
          backgroundColor: "#cbcbcb",
          display: "inline-block",
          borderRadius: "10px",
          margin: "10px 0px",
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="inherit"
          sx={{
            color: "white",
            backgroundColor: "black",
            ":hover": {
              color: "black",
            },
            margin: "5px",
          }}
        >
          Bachelor's degree
        </Button>
        <Button color="inherit" size="small">
          Master's Degree
        </Button>
      </Box>
      <MedicalProgramCard />
      <MedicalSchoolCard />
      <MedicalProgramCard />
    </div>
  );
};

export default CollegeProgramInfo;
