import { Accordion, AppBar, Box, Button, Grid } from "@mui/material";
import Styles from "styled-components";


export const AccordionBox = Styles(Accordion)`
    margin: 30px 0px ! important;
`;
export const TableRow = Styles.tr`
    border: 1px solid black;
    border-collapse: collapse;
`;
export const GridCenter = Styles(Grid)`
    display: flex;
    margin: auto ! important;   
    justify-content: center ! important;
`;
export const GridColMidPad = Styles(Grid)`
    display: flex; 
    flex-direction: column ! important; 
    padding: 10px;
`;
export const ManageCookieButton = Styles(Button)`
    border: 1px solid black ! important;
    color: black ! important;
    font-weight: bold ! important;
    text-transform: capitalize ! important;
    margin: 10px 10px 10px 0px ! important;

`;
export const AcceptCookieButton = Styles(Button)`
    background-color: black ! important;
    text-transform: capitalize ! important;
    margin: 10px ! important;
    color: white ! important;
`;
export const BoxFlexHighPad = Styles(Box)`
    display: flex ! important; 
    flex-direction: column ! important;  
    padding: 20px;
`;
export const BoxFlex = Styles(Box)`
    display: flex ! important;
`;
export const OnOffButton = Styles(Button)`
    background-color: #cfc9c9 ! important;
    color: black ! important;
    text-decoration: underline ! important;
    text-transform: capitalize ! important;
    margin: 5px ! important;
`;
export const BoxCenterHighMar = Styles(Box)`
    display: flex  ! important;
    justify-content: center  ! important;
    margin: 20px  ! important;
`;
export const PrefButtton = Styles(Button)`
    background-color: #cfc9c9 ! important;
    color: black  ! important;
    text-transform: capitalize ! important;
`;
export const CookieListContainer = Styles(Box)`
    margin: 40px 20% 60px 20% ! important;
    background-color: white ! important;
`;
export const TranspNavNoShadow = Styles(AppBar)`
    position: static ! important;
    background-color: transparent ! important;
    box-shadow: none ! important;
`;
export const TranspNav = Styles(AppBar)`
    position: static ! important;
    background: transparent ! important;
`;
export const CookieNavSelect = Styles.select`
    border: none;
    padding: 0px 10px;
    background-color: transparent;
`;
export const CapBlackButton = Styles(Button)`
    text-transform: capitalize ! important; 
    color: black ! important;
`;

export const EssBoxNoTBPad = Styles(Box)`
    padding: 0px 16px;
`;
export const THeadingHighpad = Styles.th`
    padding: 20px;
`;
export const TDataHighPad = Styles.td`
padding: 20px;
`;