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

const UniversityCard = () => {
  return (
    <UniversityCardContainer
      sx={{
        backgroundImage: `url('${CollegeImage}')`,
      }}
      elevation={8}
    >
      <BoldText variant="h3">Vienne Business University</BoldText>
      <AddressNdRating>
        <RatingButton variant="contained" size="small" color="success">
          <StarIconLogo fontSize="small" />
          4.8
          <Tooltip title="University ranking according to Times magazine">
            <InfoIconLogo fontSize="small" />
          </Tooltip>
        </RatingButton>
        <FmdGoodIcon fontSize="small" />
        Austria, Vienna
      </AddressNdRating>
      <Typography>
        Language of instruction:
        {CountryFlagImages.map((flags) => (
          <div key={flags.id}>{flags.imageTag}</div>
        ))}
      </Typography>
      <PriceBox>
        <Typography variant="subtitle2">Price</Typography>
        <Typography variant="h5">€ 25 538/year</Typography>
      </PriceBox>
      <SubmitAppSmallButton variant="contained" size="small">
        Submit Your Application
      </SubmitAppSmallButton>
      <ProgramListButton variant="outlined">All Programs</ProgramListButton>
    </UniversityCardContainer>
  );
};

export default UniversityCard;
