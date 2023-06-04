import { Typography } from "@mui/material";
import { GreaterThanIcon } from "../../GeneralStyling/IconStyles";

const MobNavTextWhite = () => (
  <Typography
    variant="h6"
    fontWeight="bold"
    textAlign="center"
    padding="20px"
    color="white"
  >
    Study
    <GreaterThanIcon />
    <span style={{ fontWeight: "bolder", color: "blue" }}>Moov</span>
  </Typography>
);

export default MobNavTextWhite;
