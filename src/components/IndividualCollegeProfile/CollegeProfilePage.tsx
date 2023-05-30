import FAQAboutCollege from "./FAQAboutCollege";
import ReviewAndRating from "./ReviewAndRating";
import FooterIcon from "../MainComponent/MainPage/FooterIcon";
import FooterText from "../MainComponent/MainPage/FooterText";
import AdmissionsDetails from "./AdmissionsDetails";
import EntryRequirements from "./EntryRequirements";
import CollegeProgramInfo from "./CollegeProgramInfo";
import CollegeProfileNavbar from "./CollegeProfileNavbar";
import CollegeImages from "./CollegeImages";
import { Box } from "@mui/material";
import {
  ArticleLinks,
  ArticlesBox,
  BlackTextButton,
} from "./CollegeProfileStyling/ProfileStylingOverlays";

const CollegeProfilePage = () => {
  return (
    <Box>
      <CollegeProfileNavbar />
      <nav>
        <ArticleLinks direction="row">
          <a href="#programs">
            <BlackTextButton>📜 Programs</BlackTextButton>
          </a>
          <a href="#admission">
            <BlackTextButton>📚 Admission</BlackTextButton>
          </a>
          {/* <a href="#location">
            <Button>📍 Location</Button>
          </a> */}
          <a href="#ranking">
            <BlackTextButton>📊 Ranking</BlackTextButton>
          </a>
          <a href="#gallery">
            <BlackTextButton>🖼 Gallery</BlackTextButton>
          </a>
          <a href="#FAQ">
            <BlackTextButton>️❓FAQ</BlackTextButton>
          </a>
        </ArticleLinks>
      </nav>
      <ArticlesBox>
        <Box id="programs">
          <CollegeProgramInfo />
        </Box>
        <Box id="admission">
          <EntryRequirements />
        </Box>
        <AdmissionsDetails />
        <Box id="ranking">
          <ReviewAndRating />
        </Box>
        <Box id="gallery">
          <CollegeImages />
        </Box>
        <Box id="FAQ">
          <FAQAboutCollege />
        </Box>
        <FooterIcon />
        <FooterText />
      </ArticlesBox>
    </Box>
  );
};

export default CollegeProfilePage;
