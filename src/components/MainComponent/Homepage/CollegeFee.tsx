import { FeeText } from "../../../styling/main/HomepageTextStyles";
import { FeeContainer } from "../../../styling/main/HomepageOverlayStyles";

const CollegeFee = () => {
  return (
    <FeeContainer sx={{ padding: "5px 50px" }}>
      <FeeText variant="subtitle2">Price from</FeeText>
      <FeeText variant="h4">€ 25 538/год</FeeText>
    </FeeContainer>
  );
};

export default CollegeFee;
