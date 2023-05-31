import { Accordion, Box, Button, Grid, Paper, Stack } from '@mui/material';
import Styles from 'styled-components'

export const AddmissionContainer = Styles(Paper)`
    padding: 50px;
    margin: 30px 0px 30px 0px ! important;
`;
export const ToggleContainer = Styles(Box)`
    background-color: #cbcbcb;
    display: inline-block;
    border-radius: 10px;
    margin: 10px 0px;
`;
export const ToggleButton = Styles(Button)`
    color: white ! important;
    background-color: black ! important;
    margin: 5px ! important;
`;

export const CollegeNavbar = Styles(Box)`
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CollegeNavText = Styles(Stack)`
    padding: 20% 80px 40px 80px;
`;
export const AddressNdRating = Styles(Box)`
    font-size: small; 
    margin: 20px 0px ! important;
`;
export const RatingButton = Styles(Button)`
    border-radius: 30px ! important;
    padding: 0px ! important;
`;
export const GridCenterWhite = Styles(Grid)`
    color: white ! important; 
    text-align: center ! important;
`;
export const ArticleLinks = Styles(Stack)`
    display: flex ! important;
    justify-content: center ! important;
    padding-top: 30px;
`;
export const BlackTextButton = Styles(Button)`
    color: black ! important;
`;
export const ArticlesBox = Styles(Box)`
    padding: 20px 80px 40px 80px;
`;
export const Box30MarginNoLR = Styles(Box)`
    margin: 30px 0px ! important;
`;
export const BoxCenterText = Styles(Box)`
    text-align: center;
`;
export const GridLowPad = Styles(Grid)`
    padding: 5px;
`;
export const GridLightGray = Styles(Grid)`
    background-color: #cbcbcb ! important; 
`;
export const GridLighterGray = Styles(Grid)`
    background-color: #e5e5e5 ! important; 
`;
export const FAQAccordion = Styles(Accordion)`
    margin: 30px 0px ! important;
    font-size: large ! important;
    padding: 15px;
`;
export const CollegeCard = Styles(Paper)`
    padding: 20px; 
    border-radius: 10px ! important;
    margin: 5px 0px ! important;
`;

export const CollegeCardData = Styles(Grid)`
    padding: 10px 10px 10px 0px;
`;
export const QuickAppBox = Styles(Box)`
    text-align: end ! important;
    padding: 20px 60px;
`;
export const BoxHighMarPad = Styles(Box)`
    padding: 20px 0px;
    margin: 30px 0px ! important;
`;
export const StackHighPadNoLR = Styles(Stack)`
    padding: 20px 0px;
`;
export const BoldGridHighPadNoLR = Styles(Grid)`
    padding: 20px 0px; 
    font-weight: bold ! important;
`;
export const GridHighPadNoLR = Styles(Grid)`
    padding: 20px 0px;
`;
export const RankDataContainer = Styles(Grid)`
    text-align: center ! important;
    background-color: #F1EFEB ! important;
`;
export const RankContainerHeading = Styles(Grid)`
    text-align: center ! important;
    background-color: #E5E5E5;
`;
export const RatingOrg = Styles.img`
    max-height: 200px;
    max-width: 200px;
`;