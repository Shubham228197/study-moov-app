import ReviewLogo from "../../FigmaImages/qs_university_rankings_logo_removebg.png";
import { ReviewRank } from "./CollegeProfileConstant/CollegeProfileConstants";
import { RankChart } from "./CollegeProfileConstant/CollegeProfileConstants";
import {
  RakingWrapper,
} from "./CollegeProfileStyling/ProfileStylingText";
import {
  BoldGridHighPadNoLR,
  BoxHighMarPad,
  GridHighPadNoLR,
  RankContainerHeading,
  RankDataContainer,
  RatingOrg,
  StackHighPadNoLR,
} from "./CollegeProfileStyling/ProfileStylingOverlays";
import { BoldText } from "../../GeneralStyling/Texts";

const ReviewAndRating = () => (
  <BoxHighMarPad>
    <BoldText variant="h5">Reviews and ratings</BoldText>
    <StackHighPadNoLR direction="row">
      <RatingOrg src={ReviewLogo} alt="QS_Review_LOGO" />
      {ReviewRank.map((rank) => (
        <RakingWrapper key={rank.id}>
          <BoldText>{rank.ranking}</BoldText>
          {rank.topic}
        </RakingWrapper>
      ))}
    </StackHighPadNoLR>
    <RankContainerHeading container>
      <BoldGridHighPadNoLR item xs={4}>
        University
      </BoldGridHighPadNoLR>
      <BoldGridHighPadNoLR item xs={4}>
        Ranked
      </BoldGridHighPadNoLR>
      <BoldGridHighPadNoLR item xs={4}>
        Score
      </BoldGridHighPadNoLR>
    </RankContainerHeading>
    {RankChart.map((ChartData) => (
      <RankDataContainer container key={ChartData.id}>
        <GridHighPadNoLR item xs={4}>
          {ChartData.University}
        </GridHighPadNoLR>
        <BoldGridHighPadNoLR item xs={4}>
          {ChartData.Ranked}
        </BoldGridHighPadNoLR>
        <GridHighPadNoLR item xs={4}>
          {ChartData.Score}
        </GridHighPadNoLR>
      </RankDataContainer>
    ))}
  </BoxHighMarPad>
);

export default ReviewAndRating;
