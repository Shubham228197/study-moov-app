import { AppBar, Box, Button, Grid, ImageList, Paper, Stack, Toolbar } from "@mui/material";
import Styles from "styled-components";

export const AboutContainerMob = Styles(Paper)`
    padding: 15px 20px 30px 20px;
    height: 300px ! important;
    margin: auto ! important;
`;
export const PaperMidPad = Styles(Paper)`
    padding: 10px;
`;
export const ConfettiImageContainer = Styles(Stack)`
    padding: 40px 0px 80px 0px;
`;
export const ConfettiImage = Styles.img`
    max-height: 100px;
    max-width: 100px;
    display: flex;
    margin: 20px auto;
`;
export const BoxFlexMidPad = Styles(Box)`
    padding: 10px; 
    display: flex;
`;
export const MobNavbar = Styles(AppBar)`
    position: static !important;
    background-color: transparent !important;
    box-shadow: none !important;
    background-size: cover !important;
`;
export const StackCenterMidPad = Styles(Stack)`
    text-align: center; 
    padding: 10px;
`;
export const ButtonMidMar = Styles(Button)`
    margin: 10px !important;
`;
export const BoxBoldHighPadNoLR = Styles(Box)`
    font-weight: bold; 
    padding: 20px 0px;
`;
export const ButtonNoPad = Styles(Button)`
    padding: 0px;
`;
export const ButtonCptzd = Styles(Button)`
    text-transform: capitalize ! important;
`;
export const BoxCenterButton = Styles(Box)`
    display: flex; 
    margin: auto ! important;
`;
export const SubmitAppLargeButton = Styles(Button)`
    text-transform: capitalize ! important;
    padding: 15px 75px !important;
    font-size: large ! important;
    border-radius: 10px ! important;
`;
export const ProgramDetailsContainer = Styles(Grid)`
padding: 10px 10px 10px 0px;
`;
export const UniversityCardContainer = Styles(Paper)`
    margin: 10px;
    border-radius: 20px !important;
    background-size: cover;
    padding: 25px;
    color: white !important;
`;
export const AddressNdRating = Styles(Box)`
    font-size: small; 
    margin: 20px 0px ! important;
`;
export const RatingButton = Styles(Button)`
    border-radius: 30px ! important;
    padding: 0px ! important;
`;
export const PriceBox = Styles(Box)`
    margin: 20px 0px ! important;
`;
export const SubmitAppSmallButton = Styles(Button)`
    text-transform: capitalize ! important;
    margin: 0px 10px ! important;
`;
export const ProgramListButton = Styles(Button)`
    text-transform: capitalize ! important;
    color: white ! important;
    font-weight: bold ! important;
    border: 1.5px solid blue ! important;
`;
export const PrgmListGrid = Styles(Grid)`
    padding: 15px;
`;
export const MobSearchContainer = Styles(ImageList)`
    width: 380 ! important;
    position: -webkit-sticky ! important;
    row-height: 164 ! important;
`;
export const NavToolbar = Styles(Toolbar)`
    display: flex; 
    margin: auto ! important;
`;
export const EntryForm = Styles.form`
    display: flex;
    justify-content: center;
`;