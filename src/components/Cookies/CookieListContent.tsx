import { Stack, Typography } from "@mui/material";
import { CookieList } from "./CookieConstants/CookieConstant";
import { useState } from "react";
import EssentialCookieDetails from "./EssentialCookieDetails";
import {
  BoxCenterHighMar,
  BoxFlex,
  BoxFlexHighPad,
  OnOffButton,
  PrefButtton,
} from "./CookiesStyling/CookieStylingOverlays";
import {
  EssButton,
  EssText,
  EssentialOption,
  TextSelfAlignBold,
  UlineFlexText,
  UlineSpan,
} from "./CookiesStyling/CookieStylingText";
import { Box30padding } from "../../GeneralStyling/Overlays";
import { Link } from "react-router-dom";

const CookieListContent = () => {
  const [essentialCookie, setEssentialCookie] = useState(true);
  const ShowEssentialCookie = () => {
    setEssentialCookie(!essentialCookie);
  };

  return (
    <>
      <BoxFlexHighPad>
        <TextSelfAlignBold variant="h4">Manage you cookies</TextSelfAlignBold>
        <EssText variant="h5">
          Essential cookies are always on. You have the option to trun off other
          cookie types.
        </EssText>
      </BoxFlexHighPad>
      {essentialCookie ? (
        <Box30padding>
          <BoxFlex>
            <EssButton onClick={ShowEssentialCookie}>
              &gt; Essential Cookies (Dropdown list)
            </EssButton>
            <EssentialOption>Always On</EssentialOption>
          </BoxFlex>
          <Stack>
            {CookieList.map((list_value) => (
              <Stack direction="row" padding={2}>
                <UlineFlexText>{list_value.value}</UlineFlexText>
                <OnOffButton size="small">{list_value.option.on}</OnOffButton>
                <OnOffButton size="small">{list_value.option.off}</OnOffButton>
              </Stack>
            ))}
          </Stack>
          <Typography>
            Essential cookies are always on. You have the option to trun off
            other cookie types. Essential cookies are always on. You have the
            option to trun off other cookie types.
            <UlineSpan>Full list of cookies.</UlineSpan>
          </Typography>
          <BoxCenterHighMar>
            <Link to="/cookie-error" style={{ textDecoration: "none" }}>
              <PrefButtton variant="contained">Save preferences</PrefButtton>
            </Link>
          </BoxCenterHighMar>
        </Box30padding>
      ) : (
        <EssentialCookieDetails
          setEssentialCookie={setEssentialCookie}
          essentialCookie={essentialCookie}
        />
      )}
    </>
  );
};

export default CookieListContent;
