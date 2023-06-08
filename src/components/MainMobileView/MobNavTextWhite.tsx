import { GreaterThanIcon } from "../../GeneralStyling/IconStyles";
import {
  BoldBlueSpan,
  BoldWhiteSpan,
  MobNavTitle,
} from "../../GeneralStyling/Texts";
import { RouteLink } from "../../GeneralStyling/Overlays";

const MobNavTextWhite = () => (
  <MobNavTitle variant="h6">
    <RouteLink to="/home-mob">
      <BoldWhiteSpan>Study</BoldWhiteSpan>
      <GreaterThanIcon />
      <BoldBlueSpan>Moov</BoldBlueSpan>
    </RouteLink>
  </MobNavTitle>
);

export default MobNavTextWhite;
