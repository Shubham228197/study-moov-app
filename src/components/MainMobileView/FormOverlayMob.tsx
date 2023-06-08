import React, { useState } from "react";
import FooterIconMob from "./FooterIconMob";
import FooterText from "../MainComponent/MainPage/FooterText";
import ConsultationForm from "./ConsultationForm";
import ConsultationResult from "./ConsultationResult";

const FormOverlayMob = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div>
      {isSubmitted ? (
        <ConsultationResult />
      ) : (
        <ConsultationForm
          setIsSubmitted={setIsSubmitted}
          isSubmitted={isSubmitted}
        />
      )}
      <FooterIconMob />
      <FooterText />
    </div>
  );
};

export default FormOverlayMob;
