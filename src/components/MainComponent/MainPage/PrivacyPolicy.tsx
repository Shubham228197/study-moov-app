import { Button, Typography } from "@mui/material";
import { BoldText } from "../../../GeneralStyling/Texts";
import PPsvg from "../../../FigmaImages/privacy_illustration.svg";
import MobNavTextBlue from "../../MainMobileView/MobNavTextBlue";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { RouteLink } from "../../../GeneralStyling/Overlays";
import FooterText from "./FooterText";
const PrivacyPolicy = () => {
  return (
    <>
      <MobNavTextBlue />
      <RouteLink to="/">
        <Button color="inherit">
          <KeyboardBackspaceIcon />
          Home
        </Button>
      </RouteLink>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <object
          data={PPsvg}
          width="300"
          height="300"
          aria-label="PP_image"
        ></object>
        <Typography variant="subtitle2">STUDY MOOV PRIVACY POLICY</Typography>
        <BoldText variant="h5" sx={{ margin: "20px 0px" }}>
          When you use our services, you're trusting us with your information.
          We understand this is a big responsibility and work hard to protect
          your information and put you in control.
        </BoldText>
        <Typography fontSize="medium">
          This Privacy Policy is meant to help you understand what information
          we collect, why we collect it, and how you can update, manage, export,
          and delete your information.
        </Typography>
      </div>
      <FooterText />
    </>
  );
};

export default PrivacyPolicy;
