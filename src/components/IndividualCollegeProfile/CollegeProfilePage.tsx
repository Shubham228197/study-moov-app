import FAQAboutCollege from "./FAQAboutCollege";
import ReviewAndRating from "./ReviewAndRating";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";
import AdmissionsDetails from "./AdmissionsDetails";
import EntryRequirements from "./EntryRequirements";
import CollegeProgramInfo from "./CollegeProgramInfo";
import CollegeProfileNavbar from "./CollegeProfileNavbar";
import CollegeImages from "./CollegeImages";
import { Box, Button, Stack } from "@mui/material";

const CollegeProfilePage = () => {
  return (
    <Box>
      <CollegeProfileNavbar />
      <nav>
        <Stack direction="row" sx={{display: 'flex', justifyContent: 'center', paddingTop: '30px'}}>
          <a href="#programs">
            <Button sx={{color: 'black'}}>📜 Programs</Button>
          </a>
          <a href="#admission">
            <Button sx={{color: 'black'}}>📚 Admission</Button>
          </a>
          {/* <a href="#location">
            <Button>📍 Location</Button>
          </a> */}
          <a href="#ranking">
            <Button sx={{color: 'black'}}>📊 Ranking</Button>
          </a>
          <a href="#gallery">
            <Button sx={{color: 'black'}}>🖼 Gallery</Button>
          </a>
          <a href="#FAQ">
            <Button sx={{color: 'black'}}>️❓FAQ</Button>
          </a>
        </Stack>
      </nav>
      <Box sx={{ padding: "20px 80px 40px 80px" }}>
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
      </Box>
    </Box>
  );
};

export default CollegeProfilePage;
