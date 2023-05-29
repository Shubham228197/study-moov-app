import { Box, Button, Grid, Paper, Stack } from '@mui/material'
import Styles from 'styled-components'

// CookieErrorPage.tsx
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
    margin: 20px;
`;
export const GridCenterLowMargin = Styles(Grid)`
    text-align: center;
    margin: 5px 0px ! important;
`;

//MultiLang.tsx
export const MultiLangCard = Styles(Paper)`
    max-width: 500px; 
    padding: 30px; 
    border-radius: 20px ! important;
`;
export const BoxCenter = Styles(Box)`
    display: flex; 
    justify-content: center;
`;

//PageNotFound.tsx
export const BoxCenterLowPad = Styles(Box)`
    display: flex; 
    justify-content: center;
    padding: 5%;
`;
export const StackCenterLowPad = Styles(Stack)`
    justify-content: center;
    padding: 40px;
`;