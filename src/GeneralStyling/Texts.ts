import { Typography } from '@mui/material';
import Styles from 'styled-components'

export const TextLowPad = Styles(Typography)`
    padding: 5px
`;
export const BoldBlueSpan = Styles.span`
    color: blue;
    font-weight: bolder;
`;
export const BoldWhiteSpan = Styles.span`
    color: white;
    font-weight: bold;
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
export const BoldBlueText = Styles(Typography)`
    font-weight: bold ! important;
    color: blue ;
`;
export const BoldRedText = Styles(Typography)`
    font-weight: bold ! important;
    color: red ;
`;
export const BoldTextHighMarNoLR = Styles(Typography)`
    font-weight: bold ! important;
    margin: 20px 0px ! important;
`;
export const MobNavTitle = Styles(Typography)`
    font-weight: bold ! important; 
    text-align: center ! important; 
    padding: 20px;
`;
export const BolderSpan = Styles.span`
    font-weight: bolder;
`;