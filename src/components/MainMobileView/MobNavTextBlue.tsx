import { GreaterThanIcon } from "../../GeneralStyling/IconStyles";
import { RouteLink } from "../../GeneralStyling/Overlays";
import { BoldBlueSpan, MobNavTitle } from "../../GeneralStyling/Texts";

const MobNavTextBlue = () => (
  <MobNavTitle variant="h6">
    <RouteLink to="/home-mob">
      Study
      <GreaterThanIcon />
      <BoldBlueSpan>Moov</BoldBlueSpan>
    </RouteLink>
  </MobNavTitle>
);

export default MobNavTextBlue;
