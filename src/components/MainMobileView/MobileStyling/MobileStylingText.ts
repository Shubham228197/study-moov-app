import { TextField, Typography } from '@mui/material';
import Styles from 'styled-components'

export const CenterTextHighPad = Styles(Typography)`
    text-align: center ! important;
    padding: 20px;
`
export const FormInputs = Styles(TextField)`
border: 1px solid black ! important;
border-radius: 10px ! important;
`;