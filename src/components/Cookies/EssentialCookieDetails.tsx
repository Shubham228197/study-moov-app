import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { CookieTableContent } from "./CookieConstant";

type cookie = {
  setEssentialCookie: (value: boolean) => void;
  essentialCookie: boolean;
};

const EssentialCookieDetails: FC<cookie> = (props): JSX.Element => {
  return (
    <Box sx={{ padding: "30px" }}>
      <Typography
        sx={{
          textDecoration: "underline",
          flexGrow: 1,
          padding: "16px",
          cursor: "pointer",
        }}
        onClick={() => props.setEssentialCookie(!props.essentialCookie)}
      >
        &lt; Back
      </Typography>
      <Typography sx={{padding: '0px 16px'}} variant="h6">Essential Cookies</Typography>
      <Box sx={{padding: '0px 16px'}}>
        <Typography variant="subtitle2">Here is the list of cookies we use on our Website and Messenger and why:</Typography>
        <table border={1} style={{borderCollapse: 'collapse'}}>
            <thead>
                <tr>
                    <th style={{padding: '20px'}}></th>
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
                    <td rowSpan={5} style={{padding: '20px'}}>Essentials</td>
                    <td style={{padding: '20px'}}>intercom-id-tx2p13Oc</td>
                    <td style={{padding: '20px'}}>Intercom</td>
                    <td style={{padding: '20px'}}>intercom.com</td>
                    <td style={{padding: '20px'}}>app.intercom.com</td>
                    <td style={{padding: '20px'}}>9 Months</td>
                    <td style={{padding: '20px'}}   >Allows Visitors to see any conversation they've had on intercom website</td>
                </tr>
                {CookieTableContent.map((rowDetails) => <tr>
                    <td>{rowDetails.name}</td>
                    <td>{rowDetails.service}</td>
                    <td>{rowDetails.domain}</td>
                    <td>{rowDetails.domainfound}</td>
                    <td>{rowDetails.duration}</td>
                    <td>{rowDetails.description}</td>
                </tr>)}
            </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default EssentialCookieDetails;
