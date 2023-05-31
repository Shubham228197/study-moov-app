import MainNavbar from "../MainComponent/MainPage/MainNavbar";
import PNF404 from "../../FigmaImages/PNF404-removebg.png";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import FooterText from "../MainComponent/MainPage/FooterText";
import {
  BoxCenterLowPad,
  StackCenter40Pad,
} from "./ErrorPageStyling/ErrorPageStylingOverlays";
import { TextLowPad } from "../../GeneralStyling/Texts";

const PageNotFound = () => {
  return (
    <>
      <MainNavbar />
      <BoxCenterLowPad>
        <img src={PNF404} alt="404-Error" />
        <StackCenter40Pad>
          <TextLowPad variant="h6" color="#d1cac9">
            Az oldal nem találhatót
          </TextLowPad>
          <TextLowPad variant="h5" color="#ada8a6">
            Сторінка не знайдена
          </TextLowPad>
          <TextLowPad variant="h4" color="#6e6a69">
            Seite nicht gefunden
          </TextLowPad>
          <TextLowPad variant="h3">Page not found</TextLowPad>
          <TextLowPad variant="h4" color="#6e6a69">
            Pagina non trovata
          </TextLowPad>
          <TextLowPad variant="h5" color="#ada8a6">
            Página no encontrada
          </TextLowPad>
          <TextLowPad variant="h6" color="#d1cac9">
            Η σελίδα δεν βρέθηκε
          </TextLowPad>
        </StackCenter40Pad>
      </BoxCenterLowPad>
      <FooterIcon />
      <FooterText />
    </>
  );
};

export default PageNotFound;
