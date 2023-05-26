import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { GlobeIcon } from "../../styling/Buttons/IconButtonStyles";

const CookieNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Stack direction='row' sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontFamily: `'Montserrat', sans-serif`,
              fontWeight: "bolder",
              fontSize: "x-large",
              color: "black",
              display: 'inline-block'
            }}
          >
            Study
            <KeyboardArrowRightIcon
              sx={{ position: "relative", top: "7px", color: "#2047B6" }}
            />
            <span style={{ color: "blue", fontWeight: "bolder" }}>Moov</span>
            <Typography
              sx={{
                color: "#958F81",
                fontFamily: `'Inter', sans-serif`,
                fontSize: "small",
              }}
            >
              Education is Austria
            </Typography>
          </Typography>
          <Stack direction="row" sx={{padding: '16px 20px' }}>
            <select name="Service" style={{ border: "none", padding: '0px 10px', backgroundColor: 'transparent' }}>
              <option value="services">Services</option>
            </select>
            <select name="Countries" style={{ border: "none", padding: '0px 10px', backgroundColor: 'transparent' }}>
              <option value="country">Countries</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Austria">Austria</option>
              <option value="USA">USA</option>
            </select>
            <select name="Programs" style={{ border: "none", padding: '0px 10px', backgroundColor: 'transparent' }}>
              <option value="program">Programs</option>
              <option value="Bachelor">Bachelor's</option>
              <option value="Master">Master's</option>
              <option value="Under 18">Under 18</option>
            </select>
            <Button sx={{ textTransform: "capitalize", color: "black" }}>
              Contacts
            </Button>
            <Button sx={{ textTransform: "capitalize", color: "black" }}>
              Blog
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography
            sx={{
              fontFamily: `'Inter', sans-serif`,
              color: "black",
              margin: "5px",
              fontWeight: "bold",
            }}
          >
            +7 495 284-44-23
          </Typography>
          <Button variant="contained">Call Back</Button>
          <Stack direction="row" spacing={2}>
            <GlobeIcon />
            <select
              name="countries"
              style={{
                border: 0,
                width: "40px",
                margin: 0,
                fontFamily: `'Inter', sans-serif`
                , backgroundColor: 'transparent'
              }}
            >
              <option value="Russia">Russian</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Austria">Austria</option>
              <option value="USA">USA</option>
            </select>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default CookieNavbar;
