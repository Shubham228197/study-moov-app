import { useMediaQuery, useTheme } from "@mui/material";
import FormOverlay from "../MainComponent/MainPage/FormOverlay";
import FormOverlayMob from "../MainMobileView/FormOverlayMob";

const FormMoov = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down(1000));
  return !mediaQuery ? <FormOverlay /> : <FormOverlayMob />;
};

export default FormMoov;
