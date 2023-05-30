import Styles from "styled-components";
import { Typography } from "@mui/material";

export const AboutHeadline = Styles.h1`
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 20.8px;
    margin-top: 0;
`;

export const AboutContent = Styles.p`
    margin-bottom: 5px;
`;

export const FooterTextTitle = Styles(Typography)`
    color: #2047B6
`;

export const FormHeading = Styles(Typography)`
    font-size: x-large !important;
    font-weight: bold !important;
    margin-bottom: 25px !important; 
`;

export const CheckboxLabel = Styles(Typography)`
    font-size: 12px !important; 
    padding: 5px !important; 
    color: gray;
`;

export const FormPrimaryText = Styles(Typography)`
    font-weight: bold ! important;
    text-align: center;
`;

export const FormSecondaryText = Styles(Typography)`
    text-align: center;
    padding: 10px 30px;
`;

export const Navtitle = Styles(Typography)`
    font-family: 'Montserrat', sans-serif ! important;
    flex-grow: 1;
    font-weight: bolder ! important;
    font-size: x-large ! important;
    color: black !important;
`;
export const NavtitleWhite = Styles(Typography)`
    font-family: 'Montserrat', sans-serif ! important;
    flex-grow: 1;
    font-weight: bolder ! important;
    font-size: x-large ! important;
    color: #ffffff !important;
`;

export const NavSpan = Styles.span`
    color: blue;
    font-weight: bolder ! important;
`;

export const NavtitleSubheading = Styles(Typography)`
    color: #958F81;
    font-family: 'Inter', sans-serif ! important;
    font-size: small ! important;
`;

export const ContactNumber = Styles(Typography)`
    font-family: 'Inter', sans-serif ! important;
    color: black ! important;
    margin: 5px ! important;
    font-weight: bold ! important;
`;
export const ContactNumberWhite = Styles(Typography)`
    font-family: 'Inter', sans-serif ! important;
    color: #ffffff ! important;
    margin: 5px ! important;
    font-weight: bold ! important;
`;

export const ChooseCountries = Styles.select`
    border: 0;
    width: 40px;
    margin: 0;
    font-family: 'Inter', sans-serif;
`;

export const PageTitle = Styles(Typography)`
  font-family: Inter !important;
  font-size: xxx-large !important;
  font-weight: 700 !important;
  margin: 50px !important;
`;

export const ListHeadline = Styles(Typography)`
  font-weight: 700 !important;
  font-family: Inter !important;
  text-align: center;
  font-size: 30px !important;
  margin: 15px !important;
`;
