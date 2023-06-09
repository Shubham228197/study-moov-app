import { FeeText, FeeTextHeading } from "../MainStyling/HomepageTextStyles";
import { FeeContainer } from "../MainStyling/HomepageOverlayStyles";

const CollegeFee = () => {
  return (
    <FeeContainer>
      <FeeTextHeading variant="subtitle2">Price from</FeeTextHeading>
      <FeeText>€ 25,538/year</FeeText>
    </FeeContainer>
  );
};

export default CollegeFee;
