import { Stack } from "@mui/material";
import { MidbarTextFull } from "./MobileConstant/MobileConstant";
import { BoxFlexMidPad } from "./MobileStyling/MobileStylingOverlays";
const MidbarMob = () => {
  return (
    <Stack sx={{ backgroundColor: "lightgray" }}>
      {MidbarTextFull.map((item) => (
        <BoxFlexMidPad key={item.id}>{item.imageTag}</BoxFlexMidPad>
      ))}
    </Stack>
  );
};
export default MidbarMob;
