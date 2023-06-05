import { Box, Button, Grid, Paper, Stack } from '@mui/material'
import Styles from 'styled-components'

export const GridColumn = Styles(Grid)`
    display: flex;
    flex-direction: column ! important;
    padding: 0px 0px 0px 20%;
`;
export const HomePageButton = Styles(Button)`
    text-transform: capitalize ! important;
    background-color: #C4C4C4 ! important;
    color: black ! important;
    padding: 0px ! important;
`;
export const MultiLanguBox = Styles(Box)`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`;
export const GridCenterLowMargin = Styles(Grid)`
    text-align: center;
    margin: 5px 0px ! important;
`;
export const MultiLangCard = Styles(Paper)`
    max-width: 500px; 
    padding: 30px; 
    border-radius: 20px ! important;
    margin: 30px ! important;
`;
export const BoxCenterLowPad = Styles(Box)`
    display: flex; 
    justify-content: center;
    padding: 5%;
`;
export const StackCenter40Pad = Styles(Stack)`
    justify-content: center;
    padding: 40px;
`;