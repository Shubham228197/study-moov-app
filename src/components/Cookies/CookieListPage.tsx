import CookieFooter from "./CookieFooter";
import CookieNavbar from "./CookieNavbar";
import CookieListContent from "./CookieListContent";
import { Box } from "@mui/material";
import { CookieListContainer } from "./CookiesStyling/CookieStylingOverlays";
import { useState } from "react";

const CookieListPage = () => {
  const [isAccepted, setIsAccepted] = useState(true)
  return (
    <Box sx={{ backgroundColor: "#f2efce", height: '100vh' }}>
      <CookieNavbar />
      <CookieListContainer>
        <CookieListContent />
      </CookieListContainer>
      {isAccepted && <CookieFooter setIsAccepted={setIsAccepted}/>}
    </Box>
  );
};

export default CookieListPage;
