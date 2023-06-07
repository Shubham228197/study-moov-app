import { FeeText } from "../MainStyling/HomepageTextStyles";
import { FeeContainer } from "../MainStyling/HomepageOverlayStyles";

const CollegeFee = () => {
  return (
    <FeeContainer>
      <FeeText variant="subtitle2">Price from</FeeText>
      <FeeText fontSize='xx-large'>€ 25,538/year</FeeText>
    </FeeContainer>
  );
};

export default CollegeFee;
