import CookieFooter from "./CookieFooter";
import CookieNavbar from "./CookieNavbar";
import CookieListContent from "./CookieListContent";
import { CookieListContainer } from "./CookiesStyling/CookieStylingOverlays";
import { useState } from "react";
import { CookiePage } from "./CookiesStyling/CookieStylingOverlays";

const CookieListPage = () => {
  const [isAccepted, setIsAccepted] = useState(true)
  return (
    <CookiePage>
      <CookieNavbar />
      <CookieListContainer>
        <CookieListContent />
      </CookieListContainer>
      {isAccepted && <CookieFooter setIsAccepted={setIsAccepted}/>}
    </CookiePage>
  );
};

export default CookieListPage;
