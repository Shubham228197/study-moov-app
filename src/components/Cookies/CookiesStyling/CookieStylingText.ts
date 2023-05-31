import { Typography } from '@mui/material';
import Styles from 'styled-components'

export const TableTextMidPad = Styles.td`
    padding: 10px;
`;
export const TextSelfAlignBold = Styles(Typography)`
    align-self: center ! important; 
    font-weight: bold ! important;
`;
export const EssText = Styles(Typography)`
    margin: 5px 30%  ! important;
    font-weight: light  ! important;
`;
export const EssButton = Styles(Typography)`
    text-decoration: underline ! important; 
    flex-grow: 1 ! important; 
    padding: 16px; 
    cursor: pointer;
`;
export const EssentialOption = Styles(Typography)`
    text-decoration: underline ! important;
    margin: 0px 50px ! important;
`;
export const UlineFlexText = Styles(Typography)`
    text-decoration: underline ! important;
    flex-grow: 1 ! important;
`;
export const UlineSpan = Styles.span`
    text-decoration: underline;
`;
export const BoldTextNoLRMidPad = Styles(Typography)`
font-weight: bold ! important;
padding: 10px 0px;
`;
export const MontBoldTextLarge = Styles(Typography)`
    font-family: 'Montserrat', sans-serif ! important;
    font-weight: bolder ! important;
    font-size: x-large ! important;
    color: black ! important;
    display: inline-block ! important;
`;
export const EssTextNoTBPad = Styles(Typography)`
    padding: 0px 16px;
`;