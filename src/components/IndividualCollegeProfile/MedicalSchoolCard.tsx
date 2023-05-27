import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CollegeFee from "../MainComponent/Homepage/CollegeFee";
import { SOMS } from "./CollegeProfileConstants";

const MedicalSchoolCard = () => {
  return (
    <Paper
      elevation={4}
      sx={{ padding: "20px", borderRadius: "10px", margin: "10px 0px" }}
    >
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h4" fontWeight="bold">
            School of Medicine and Surgery
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Full-time
          </Typography>
          <Grid container>
            {SOMS.map((data) => (
              <Grid item xs={2.4} padding="10px 10px 10px 0px">
                <Typography fontWeight="bold" sx={{ padding: "5px" }}>
                  {data.title}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ padding: "0px 5px" }}
                >
                  {data.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CollegeFee />
          <Box sx={{ textAlign: "end", padding: "20px 60px" }}>
            <Button variant="contained">Quick application</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MedicalSchoolCard;
