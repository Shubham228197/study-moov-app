import { Tooltip, Typography } from "@mui/material";
import { StarIconLogo, InfoIconLogo } from "../../GeneralStyling/Icons";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { CountryFlagImages } from "./MobileConstant/MobileConstant";
import CollegeImage from "../../FigmaImages/College-card-Dark.jpg";
import {
  AddressNdRating,
  PriceBox,
  ProgramListButton,
  RatingButton,
  SubmitAppSmallButton,
  UniversityCardContainer,
} from "./MobileStyling/MobileStylingOverlays";
import { BoldText } from "../../GeneralStyling/Texts";
import { RouteLink } from "../../GeneralStyling/Overlays";
import { FC } from "react";

type clgType = {
  name: string;
  location: string;
  degreeOffered: string[];
  languages: string[];
} 
type UniversityProps = {
  clgData: clgType
}
const UniversityCard: FC<UniversityProps> = (props): JSX.Element => {
  return (
    <UniversityCardContainer
      sx={{
        backgroundImage: `url('${CollegeImage}')`,
      }}
      elevation={8}
    >
      <BoldText variant="h3">{props.clgData.name}</BoldText>
      <AddressNdRating>
        <RatingButton variant="contained" size="small" color="success">
          <StarIconLogo fontSize="small" />
          4.8
          <Tooltip title="University ranking according to Times magazine">
            <InfoIconLogo fontSize="small" />
          </Tooltip>
        </RatingButton>
        <FmdGoodIcon fontSize="small" />
        {props.clgData.location}
      </AddressNdRating>
      <Typography sx={{ display: "flex" }}>
        Language of instruction:
        {CountryFlagImages.map((flags) => (
          <div key={flags.id}>{flags.imageTag}</div>
        ))}
      </Typography>
      <PriceBox>
        <Typography variant="subtitle2">Price</Typography>
        <Typography variant="h5">€ 25 538/year</Typography>
      </PriceBox>
      <RouteLink to="/program-details-mob">
        <SubmitAppSmallButton variant="contained" size="small">
          View Details
        </SubmitAppSmallButton>
      </RouteLink>
      <ProgramListButton variant="outlined">All Programs</ProgramListButton>
    </UniversityCardContainer>
  );
};

export default UniversityCard;
