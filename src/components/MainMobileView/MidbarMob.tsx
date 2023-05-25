import { Box, Stack } from "@mui/material";
import { MidbarTextFull } from "./constant";
const MidbarMob = () => {
  return (
    <Stack direction="column" sx={{backgroundColor:'lightgray'}}>
      {MidbarTextFull.map((item) => (
        <Box sx={{padding: '10px', display:'flex'}}>{item}</Box>
      ))}
    </Stack>
  );
};
export default MidbarMob;
