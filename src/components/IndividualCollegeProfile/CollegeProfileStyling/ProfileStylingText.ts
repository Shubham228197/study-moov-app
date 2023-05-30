import { Typography } from '@mui/material';
import Styles from 'styled-components'

export const BoldText = Styles(Typography)`
    font-weight: bold ! important;
`;
export const TextMidPadNoLR = Styles(Typography)`
    margin: 10px 0px ! important;
`;
export const LiLowPadNoLR = Styles.li`
    padding: 5px 0px;
`;
export const AdmissionHeadline = Styles(Typography)`
    color: gray ! important;
    margin: 10px 0px ! important;
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
export const RakingWrapper = Styles(Typography)`
    margin: 0px 30px ! important;
`;