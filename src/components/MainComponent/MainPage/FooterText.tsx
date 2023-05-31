import { Typography } from "@mui/material";
import { CenterStackHighPad } from "../MainStyling/MainOverlayStyles";
import { FooterTextTitle } from "../MainStyling/MainTextStyles";
import {
  HeartIcon,
  GreaterThanIcon,
} from "../../../GeneralStyling/IconStyles";

const FooterText = () => {
  return (
    <CenterStackHighPad>
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
    </CenterStackHighPad>
  );
};

export default FooterText;
