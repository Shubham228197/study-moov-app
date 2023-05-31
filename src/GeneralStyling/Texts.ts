import { Typography } from '@mui/material';
import Styles from 'styled-components'

export const TextLowPad = Styles(Typography)`
    padding: 5px
`;
export const BoldBlueSpan = Styles.span`
    color: blue;
    font-weight: bolder;
`;
export const BoldText = Styles(Typography)`
    font-weight: bold ! important;
`;
export const GrayText = Styles(Typography)`
    color: gray;
`;
export const BoldTextLowPad = Styles(Typography)`
    font-weight: bold ! important;
    padding: 5px;
`;
export const BoldTextLowPadNoTB = Styles(Typography)`
    font-weight: bold ! important;
    padding: 5px;
`;
export const BoldTextCenter = Styles(Typography)`
    font-weight: bold ! important;
    text-align: center;
`;
export const FormSecondaryText = Styles(Typography)`
    text-align: center;
    padding: 10px 30px;
`;
export const ContactNumber = Styles(Typography)`
    font-family: 'Inter', sans-serif ! important;
    color: black ! important;
    margin: 5px ! important;
    font-weight: bold ! important;
`;
export const CenterTextHighMar = Styles(Typography)`
    text-align: center ! important;
    margin: 20px ! important;
`;