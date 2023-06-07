import { Typography } from "@mui/material";
import { BoldTextHighMarNoLR } from "../../../GeneralStyling/Texts";
import PPsvg from "../../../FigmaImages/privacy_illustration.svg";
import MobNavTextBlue from "../../MainMobileView/MobNavTextBlue";
import FooterText from "./FooterText";
import { PolicyConatiner } from "../MainStyling/MainOverlayStyles";

const PrivacyPolicy = () => {
  return (
    <>
      <MobNavTextBlue />
      <PolicyConatiner>
        <object
          data={PPsvg}
          width="300"
          height="300"
          aria-label="PP_image"
        ></object>
        <Typography variant="subtitle2">STUDY MOOV PRIVACY POLICY</Typography>
        <BoldTextHighMarNoLR variant="h5">
          When you use our services, you're trusting us with your information.
          We understand this is a big responsibility and work hard to protect
          your information and put you in control.
        </BoldTextHighMarNoLR>
        <Typography fontSize="medium">
          This Privacy Policy is meant to help you understand what information
          we collect, why we collect it, and how you can update, manage, export,
          and delete your information.
        </Typography>
      </PolicyConatiner>
      <FooterText />
    </>
  );
};

export default PrivacyPolicy;
