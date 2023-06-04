import { Typography } from "@mui/material";
import { GreaterThanIcon } from "../../GeneralStyling/IconStyles";

const MobNavTextBlack = () => (
  <Typography variant="h6" fontWeight="bold" textAlign='center' padding='20px'>
    Study
    <GreaterThanIcon />
    <span style={{ fontWeight: "bolder" }}>Moov</span>
  </Typography>
);

export default MobNavTextBlack;
