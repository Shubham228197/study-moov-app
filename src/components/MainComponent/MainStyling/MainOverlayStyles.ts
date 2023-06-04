import Styles from "styled-components";
import {
  Stack,
  Paper,
  FormControl,
  TextField,
  Checkbox,
  Box,
  Grid,
  AppBar,
} from "@mui/material";

export const CenterStackHighPad = Styles(Stack)`
    align-items: center ! important;
    padding: 20px;
`;
export const Formbox = Styles(Paper)`
    max-width: 600px;
    max-height: 540px;
    border-radius: 20px !important;
`;
export const AboutCardContainer = Styles(Paper)`
    border-radius: 20px !important;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 64px 80px 88px 80px ;
    width: 405px;
`;
export const FormContainer = Styles(FormControl)`
    margin: 30px 30px 0px 30px !important;
    padding: 40px 40px 0px 40px !important;
`;
export const FormFields = Styles(TextField)`
    padding: 5px !important;
`;
export const CheckBox = Styles(Checkbox)`
    padding: 15px !important;
`;
export const MessageBox = Styles(Box)`
    margin: 50px 40px 10px 40px;
    padding: 50px 40px 10px 40px;
`;
export const FormImageContainer = Styles(Grid)`
    margin-top: 50px ! important; 
    margin-bottom: 30px ! important;
`;
export const CrackerImage = Styles.img`
    max-width: 100px;
    max-height: 100px;
    display: flex;
    margin: auto;
`;
export const NavigationBar = Styles(AppBar)`
    position: static ! important;
    background: #FFF ! important;
`;
export const GridItemCenter = Styles(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const FormHomePointers = Styles(Grid)`
    height: 600px;
`;
export const FormHomeResponse = Styles(Grid)`
    height: 600px; 
    display: flex;
    justify-content: center;
`;
export const FormHomeFooter = Styles(Grid)`
    height: 300px;
`;
export const ListContent = Styles(Grid)`
padding: 10px 50px 10px 30px;
font-size: 17px;
`;
export const ListNumbers = Styles(Grid)`
font-size: xx-large;
padding: 20px 0px 20px 20px;
text-align: center;
color: #ddd5d5;
`;
