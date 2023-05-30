import { Typography } from "@mui/material";
import { FooterTextConatiner } from "../MainStyling/MainOverlayStyles";
import { FooterTextTitle } from "../MainStyling/MainTextStyles";
import {
  HeartIcon,
  GreaterThanIcon,
} from "../../../GeneralStyling/IconStyles";

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
