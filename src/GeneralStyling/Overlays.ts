import { Box, Grid, Stack } from "@mui/material";
import Styles from "styled-components";

export const Box30margin = Styles(Box)`
    margin: 30px ! important;
`;
export const Box30padding = Styles(Box)`
    padding: 30px;
`;
export const BoxCenter = Styles(Box)`
    display: flex ! important; 
    justify-content: center ! important;
`;
export const ToggleContainer = Styles(Box)`
    background-color: #cbcbcb;
    display: inline-block;
    border-radius: 10px;
    margin: 10px 0px;
`;
export const Box30MarginNoLR = Styles(Box)`
    margin: 30px 0px ! important;
`;
export const BoxCenterHighMar = Styles(Box)`
    display: flex ! important; 
    justify-content: center ! important; 
    margin: 20px ! important;
`;
export const GridMidPad = Styles(Grid)`
    padding: 10px;
`;
export const GridHighPad = Styles(Grid)`
    padding: 20px;
`;
export const IconTray = Styles(Stack)`
    padding: 16px;
    justify-content: center;
`;
export const StackCenter = Styles(Stack)`
    justify-content: center;
`;
export const BoxMidPad = Styles(Box)`
padding: 10px;
`;