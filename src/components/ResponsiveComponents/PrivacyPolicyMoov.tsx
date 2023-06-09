import { useTheme, useMediaQuery } from "@mui/material";
import PrivacyPolicy from "../MainComponent/MainPage/PrivacyPolicy";
import PrivacyPolicyMob from "../MainMobileView/PrivacyPolicyMob";

const PrivacyPolicyMoov = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down(1000));
  return !mediaQuery ? <PrivacyPolicy /> : <PrivacyPolicyMob />;
};

export default PrivacyPolicyMoov;
