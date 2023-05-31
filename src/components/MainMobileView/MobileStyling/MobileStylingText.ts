import { Typography } from '@mui/material';
import Styles from 'styled-components'

export const LowPadBoldText = Styles(Typography)`
    padding: 5px;
    font-weight: bold !important;
`;
export const LowPadText = Styles(Typography)`
    padding: 5px;
`;
export const CenterTextHighMar = Styles(Typography)`
    text-align: center ! important;
    margin: 20px ! important;
`
export const BoldTextCenter = Styles(Typography)`
    font-weight: bold ! important;
    text-align: center;
`;
export const CenterBoldText = Styles(Typography)`
    font-weight: bold ! important;
    text-align: center;
`;
export const CenterTextHighPad = Styles(Typography)`
    text-align: center ! important;
    padding: 20px;
`
export const BoldText = Styles(Typography)`
font-weight: bold ! important;
`;