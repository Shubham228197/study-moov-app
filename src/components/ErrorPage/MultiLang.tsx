import multiLangImage from ".././../FigmaImages/multiLang-removebg.png";
import { BoxCenter, MultiLangCard } from "./ErrorPageStyling/ErrorPageStylingOverlays";
import { BoldText } from "./ErrorPageStyling/ErrorPageStylingText";

const MultiLang = () => {
  return (
    <MultiLangCard elevation={6}>
      <BoldText sx={{ color: "red" }}>Beta</BoldText>
      <BoldText sx={{ color: "blue" }}>Translation</BoldText>
      <BoldText variant="h6">
        Translate entire web pages between seven language with a single click.
        <sup>1</sup>
      </BoldText>
      <BoxCenter>
        <img src={multiLangImage} alt="multiLangImage" />
      </BoxCenter>
    </MultiLangCard>
  );
};

export default MultiLang;
