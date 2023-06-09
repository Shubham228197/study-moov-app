import { Typography } from "@mui/material";
import { BoldTextHighMarNoLR } from "../../../GeneralStyling/Texts";
import PPsvg from "../../../FigmaImages/privacy_illustration.svg";
import FooterText from "./FooterText";
import { PolicyConatiner } from "../MainStyling/MainOverlayStyles";
import MainNavbar from "./MainNavbar";
import { PrivacyPolicyDeclaration } from "../../../GeneralConstants/Constants";

const PrivacyPolicy = () => {
  return (
    <>
      <MainNavbar />
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

export default PrivacyPolicy;
