import { Typography } from "@mui/material";
import MobNavTextBlue from "./MobNavTextBlue";
import { PolicyConatiner } from "../MainComponent/MainStyling/MainOverlayStyles";
import { BoldTextHighMarNoLR } from "../../GeneralStyling/Texts";
import FooterText from "../MainComponent/MainPage/FooterText";
import PPsvg from "../../FigmaImages/privacy_illustration.svg";
import { PrivacyPolicyDeclaration } from "../../GeneralConstants/Constants";

const PrivacyPolicyMob = () => {
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
        <Typography variant="subtitle2">
          {PrivacyPolicyDeclaration.heading}
        </Typography>
        <BoldTextHighMarNoLR variant="h5">
          {PrivacyPolicyDeclaration.policy}
        </BoldTextHighMarNoLR>
        <Typography fontSize="medium">
          {PrivacyPolicyDeclaration.footer}
        </Typography>
      </PolicyConatiner>
      <FooterText />
    </>
  );
};

export default PrivacyPolicyMob;
