import { GreaterThanIcon } from "../../GeneralStyling/IconStyles";
import { BolderSpan, MobNavTitle } from "../../GeneralStyling/Texts";
import { RouteLink } from "../../GeneralStyling/Overlays";

const MobNavTextBlack = () => (
  <MobNavTitle variant="h6">
    <RouteLink to='/home-mob'>
    Study
    <GreaterThanIcon />
    <BolderSpan>Moov</BolderSpan></RouteLink>
  </MobNavTitle>
);

export default MobNavTextBlack;
