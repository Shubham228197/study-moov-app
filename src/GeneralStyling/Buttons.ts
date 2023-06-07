import Styles from "styled-components";
import { Button } from "@mui/material";

export const FooterLink = Styles(Button)`
font-size: 13px ! important;
text-transform: capitalize ! important; 
color: gray ! important;
`;

export const FormSubmit = Styles(Button)`
  padding: 15px !important;
  font-size: normal !important;
  border-radius: 10px !important;
  margin-top: 30px !important;
  text-transform: none !important;
  font-weight: bold !important;
`;

export const CallBackButton = Styles(Button)`
  font-family: 'Inter', sans-serif;
  margin-left: 6px;
  text-transform: capitalize ! important;
`;

export const ShowMoreButton = Styles(Button)`
  border: 2px solid black ! important;
  color: black ! important;
`;

export const ExtendedButtonSelected = Styles(Button)`
  background-color: black ! important; 
  color: white ! important;
`;

export const ExtendedButton = Styles(Button)`
  color: gray ! important;
`;

export const CommonButton = Styles(Button)`
  display: flex ! important;
  margin: 30px auto 5px auto ! important;
  text-transform: capitalize ! important;
`;
export const ToggleButton = Styles(Button)`
    color: white ! important;
    background-color: black ! important;
    margin: 5px ! important;
`;
export const SuperEllipseButton = Styles(Button)`
  border-radius: 30px ! important;
`;
export const ButtonCptzd = Styles(Button)`
  text-transform: capitalize ! important;
  border-radius: 20px ! important;
`;