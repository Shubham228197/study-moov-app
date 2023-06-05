import { Typography } from "@mui/material";
import { FC } from "react";
import { CookieTableContent } from "./CookieConstants/CookieConstant";
import {
  EssBoxNoTBPad,
  TDataHighPad,
  THeadingHighpad,
} from "./CookiesStyling/CookieStylingOverlays";
import { EssButton, EssTextNoTBPad } from "./CookiesStyling/CookieStylingText";
import { Box30padding } from "../../GeneralStyling/Overlays";

type cookie = {
  setEssentialCookie: (value: boolean) => void;
  essentialCookie: boolean;
};

const EssentialCookieDetails: FC<cookie> = (props): JSX.Element => {
  const ShowEssentialCookie = () => {
    props.setEssentialCookie(!props.essentialCookie);
  };

  return (
    <>
      <Box30padding>
        <EssButton onClick={ShowEssentialCookie}>&lt; Back</EssButton>
        <EssTextNoTBPad variant="h6">Essential Cookies</EssTextNoTBPad>
        <EssBoxNoTBPad>
          <Typography variant="subtitle2">
            Here is the list of cookies we use on our Website and Messenger and
            why:
          </Typography>
          <table border={1} style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <THeadingHighpad></THeadingHighpad>
                <th>Name</th>
                <th>Service</th>
                <th>Domain</th>
                <th>Domian Found</th>
                <th>Duration</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TDataHighPad rowSpan={5}>Essentials</TDataHighPad>
                <TDataHighPad>intercom-id-tx2p13Oc</TDataHighPad>
                <TDataHighPad>Intercom</TDataHighPad>
                <TDataHighPad>intercom.com</TDataHighPad>
                <TDataHighPad>app.intercom.com</TDataHighPad>
                <TDataHighPad>9 Months</TDataHighPad>
                <TDataHighPad>
                  Allows Visitors to see any conversation they've had on
                  intercom website
                </TDataHighPad>
              </tr>
              {CookieTableContent.map((rowDetails) => (
                <tr key={rowDetails.id}>
                  <td>{rowDetails.name}</td>
                  <td>{rowDetails.service}</td>
                  <td> {rowDetails.domain}</td>
                  <td>{rowDetails.domainfound}</td>
                  <td>{rowDetails.duration}</td>
                  <td>{rowDetails.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </EssBoxNoTBPad>
      </Box30padding>
    </>
  );
};

export default EssentialCookieDetails;
