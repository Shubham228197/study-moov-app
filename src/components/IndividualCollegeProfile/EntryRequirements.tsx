import { Box, Button, Grid, Typography } from "@mui/material";
import { ProgramEntryRequirements } from "./CollegeProfileConstants";
import Divider from "@mui/material/Divider";

const EntryRequirements = () => {
  return (
    <div style={{margin: '30px 0px 30px 0px'}}>
      <Typography variant="h4" fontWeight="bold">
        Admission
      </Typography>
      <Typography variant="h5" sx={{ color: "gray", margin: "10px 0px" }}>
        {ProgramEntryRequirements.ProgramBatch}
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
      <Box sx={{ textAlign: "center" }}>
        <Grid container sx={{ backgroundColor: "#cbcbcb" }}>
          {ProgramEntryRequirements.TableTitle.map((title) => (
            <Grid item xs={3} sx={{ padding: "5px" }}>
              <Typography fontWeight="bold">{title}</Typography>
            </Grid>
          ))}
        </Grid>
        {ProgramEntryRequirements.TableData.map((data) => (
          <>
            <Grid container sx={{ backgroundColor: "#e5e5e5" }}>
              <Grid item xs={3}>
                {data.Pname}
              </Grid>
              <Grid item xs={3}>
                {data.Deadline.map((dline) => (
                  <p>{dline}</p>
                ))}
              </Grid>
              <Grid item xs={3}>
                {data.Eligiblity.map((elig) => (
                  <p>{elig}</p>
                ))}
              </Grid>
              <Grid item xs={3}>
                {data.Score}
              </Grid>
            </Grid>
            <Divider color="#dcdcdc" />
          </>
        ))}
      </Box>
    </div>
  );
};

export default EntryRequirements;
