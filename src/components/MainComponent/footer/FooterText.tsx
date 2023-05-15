import { Typography } from "@mui/material";
import { FooterTextConatiner } from "../../../styling/main/MainOverlayStyles";
import { FooterTextTitle } from "../../../styling/main/MainTextStyles";
import {
  HeartIcon,
  GreaterThanIcon,
} from "../../../styling/Buttons/IconButtonStyles";

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
