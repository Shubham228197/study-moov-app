import Styles from "styled-components";
import { Button } from "@mui/material";

export const FooterLink = Styles(Button)`
font-size: 13px !important;
text-transform: capitalize !important; 
color: gray !important;
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
