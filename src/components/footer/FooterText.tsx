import { Typography } from "@mui/material";
import {
  FooterTextTitle,
  FooterTextConatiner,
  HeartIcon,
  GreaterThanIcon,
} from "../../styling/homepage/FormOverlayStyles";

const FooterText = () => {
  return (
    <FooterTextConatiner>
      <FooterTextTitle>
        Study
        <GreaterThanIcon />
        Moov
      </FooterTextTitle>
      <Typography>© 2019-2021 StudyMOOV - education abroad</Typography>
      <Typography>
        Made with
        <HeartIcon />
        in Switzerland
      </Typography>
    </FooterTextConatiner>
  );
};

export default FooterText;
