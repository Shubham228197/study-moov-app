import { Stack } from "@mui/material";
import { MidbarTextFull } from "./MobileConstant/constant";
import { BoxFlexMidPad } from "./Styling/MobileStylingOverlays";
const MidbarMob = () => {
  return (
    <Stack sx={{backgroundColor:'lightgray'}}>
      {MidbarTextFull.map((item) => (
        <BoxFlexMidPad>{item}</BoxFlexMidPad>
      ))}
    </Stack>
  );
};
export default MidbarMob;
