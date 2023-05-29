import CookieFooter from "./CookieFooter";
import CookieNavbar from "./CookieNavbar";
import CookieListContent from "./CookieListContent";
import { Box } from "@mui/material";
import { CookieListContainer } from "./CookiesStyling/CookieStylingOverlays";

const CookieListPage = () => {
  return (
    <Box sx={{ backgroundColor: "#f2efce" }}>
      <CookieNavbar />
      <CookieListContainer>
        <CookieListContent />
      </CookieListContainer>
      <CookieFooter />
    </Box>
  );
};

export default CookieListPage;
