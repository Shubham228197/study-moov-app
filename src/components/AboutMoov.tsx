import { Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "../styling/AboutMoov.css";

const AboutMoov = () => {
  return (
    <div>
      <Paper
        className="about-container"
        sx={{ borderRadius: "20px" }}
        elevation={8}
      >
        <h1 className="about-headline">About Us <CloseIcon/>
        </h1>
        <p>
          An idea of ​​what it might take for you to get into your dream
          university.
          <br />
          <br />
          Personalized and detailed offer of our services depending on your
          needs.
          <br />
          <br />
          Understanding what financial and time commitments will be required
          from you to get into the university of your dreams. <br />
          <br />
          Discuss the strength of your portfolio and application in general
        </p>
      </Paper>
    </div>
  );
};

export default AboutMoov;
