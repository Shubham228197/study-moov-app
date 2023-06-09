import Styles from "styled-components";
import { Typography, TextField } from "@mui/material";

export const BoldText30Mar = Styles(Typography)`
    font-weight: bolder ! important ; 
    margin: 30px ! important;
`;

export const FilterMainSubheading = Styles(Typography)`
    margin: 30px 0px ! important;
`;
export const InfoBullets = Styles(Typography)`
    padding: 5px 0px ! important;
    margin: 5px 0px ! important;
    font-size: small ! important;
    font-weight: bold ! important;
`;
export const InfoPoints = Styles(Typography)`
    padding: 5px ! important;
    margin: 5px ! important;
    border-radius: 40px ! important;
    font-size: small ! important;
    font-weight: bold ! important;
`;

export const HomepageHeading = Styles(Typography)`
    font-weight: bold ! important; 
    marginTop: 30px ! important;
`;

export const FilterDegreeInput = Styles(TextField)`
    padding: 0px 20px 0px 20px ! important;
`;

export const FilterFeeRangeInput = Styles(TextField)`
    padding: 0px 30px 0px 0px ! important;
`;

export const NaviagtionHeading = Styles(Typography)`
    position: relative ! important;
    color: #FFF ! important;
    text-align: center ! important;
    font-size: 80px ! important;
    padding: 0px 80px 30px 80px ! important;
    margin: 0px 50px ! important;
    z-index: 100 ! important;
`;
export const FeeText = Styles(Typography)`
    margin: 0px; 
    text-align: end;
    fontWeight: bold ! important;
    word-break: break-all ! important;
    font-size: 1.7rem ! important;
`;
export const FeeTextHeading = Styles(Typography)`
    margin: 0px; 
    text-align: end;
    fontWeight: bold ! important;
`;