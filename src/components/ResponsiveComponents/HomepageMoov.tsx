import { useMediaQuery, useTheme } from "@mui/material";
import HomepageMain from "../MainComponent/Homepage/HomepageMain";
import HomepageMob from "../MainMobileView/HomepageMob";

const HomepageMediaQuery = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down(1000));
  return !mobileView ? <HomepageMain /> : <HomepageMob />;
};

export default HomepageMediaQuery;
