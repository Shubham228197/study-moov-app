import React from "react";
import CookieNavbar from "../Cookies/CookieNavbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import { langVariations } from "./constant";
import MultiLang from "./MultiLang";
import CookieFooter from "../Cookies/CookieFooter";

const CookieErrorPage = () => {
  return (
    <div style={{ backgroundColor: "#f2efce" }}>
      <CookieNavbar />
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "center", margin: "40px 0px" }}
        >
          404 ERROR: Page Not Found
        </Typography>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 0px 20%",
            }}
          >
            {langVariations.map((lines) => (
              <Typography variant="h5" fontWeight="bold">
                {lines}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center", margin: "5px 0px" }}>
            <Button
              size="large"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#C4C4C4",
                color: "black",
                fontWeight: "bold",
                padding: "0px",
              }}
            >
              <Typography
                variant="h5"
                padding="10px 80px"
                fontWeight="bold"
                border={1}
                fontStyle="italic"
              >
                to Home Page
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px'}}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ textAlign: "center", margin: "80px 0px 40px 0px" }}
          >
            This is an example of visualization of a record in different
            languages.
          </Typography>
          <MultiLang />
        </Box>
      </Box>
      <CookieFooter/>
    </div>
  );
};

export default CookieErrorPage;
