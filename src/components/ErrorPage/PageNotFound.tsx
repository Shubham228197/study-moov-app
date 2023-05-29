import React from "react";
import MainNavbar from "../MainComponent/MainNavbar";
import PNF404 from "../../figma_Images/PNF404-removebg.png";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";
import {
  BoxCenterLowPad,
  StackCenterLowPad,
} from "./Styling/ErrorPageStylingOverlays";
import { LowPadText } from "./Styling/ErrorPageStylingText";

const PageNotFound = () => {
  return (
    <>
      <MainNavbar />
      <BoxCenterLowPad>
        <img src={PNF404} alt="404-Error" />
        <StackCenterLowPad>
          <LowPadText variant="h6" color="#d1cac9">
            Az oldal nem találhatót
          </LowPadText>
          <LowPadText variant="h5" color="#ada8a6">
            Сторінка не знайдена
          </LowPadText>
          <LowPadText variant="h4" color="#6e6a69">
            Seite nicht gefunden
          </LowPadText>
          <LowPadText variant="h3">Page not found</LowPadText>
          <LowPadText variant="h4" color="#6e6a69">
            Pagina non trovata
          </LowPadText>
          <LowPadText variant="h5" color="#ada8a6">
            Página no encontrada
          </LowPadText>
          <LowPadText variant="h6" color="#d1cac9">
            Η σελίδα δεν βρέθηκε
          </LowPadText>
        </StackCenterLowPad>
      </BoxCenterLowPad>
      <FooterIcon />
      <FooterText />
    </>
  );
};

export default PageNotFound;
