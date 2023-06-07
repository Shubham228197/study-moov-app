import multiLangImage from ".././../FigmaImages/multiLang-removebg.png";
import { MultiLangCard } from "./ErrorPageStyling/ErrorPageStylingOverlays";
import {
  BoldBlueText,
  BoldRedText,
  BoldText,
} from "../../GeneralStyling/Texts";
import { BoxCenter } from "../../GeneralStyling/Overlays";

const MultiLang = () => (
  <MultiLangCard elevation={6}>
    <BoldRedText>Beta</BoldRedText>
    <BoldBlueText>Translation</BoldBlueText>
    <BoldText variant="h6">
      Translate entire web pages between seven language with a single click.
      <sup>1</sup>
    </BoldText>
    <BoxCenter>
      <img src={multiLangImage} alt="multiLangImage" />
    </BoxCenter>
  </MultiLangCard>
);

export default MultiLang;
