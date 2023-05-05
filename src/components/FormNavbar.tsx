import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../styling/FormNavbar.css";

const FormNavbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ background: "#FFF" }} elevation={0}>
        <Toolbar sx={{ color: "black" }}>
          <Typography id="title" variant="h5" component="p">
            Study
            <KeyboardArrowRightIcon className="arrow-icon" />
            <span className="title-right">Moov</span>
            <Typography variant="subtitle2" className="sub-title">
              Education is Austria
            </Typography>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button id='number' className="font" color="inherit">
              +7 495 284-44-23
            </Button>
            <Button
              id="callback"
              variant="contained"
              sx={{ ml: 6, textTransform: "capitalize" }}
            >
              Call Back
            </Button>
            <Stack direction="row" spacing={2}>
              <LanguageIcon color="disabled" sx={{ margin: "auto" }} />
              <select name="countries" id="countries" value="">
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
    </div>
  );
};

export default FormNavbar;
