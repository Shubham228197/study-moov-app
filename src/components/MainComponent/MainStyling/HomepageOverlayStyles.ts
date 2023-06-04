import { AppBar, Box, Grid, Paper } from "@mui/material";
import Styles from "styled-components";

export const TranspNav = Styles(AppBar)`
    position: static ! important;
    background: transparent ! important;
`;
export const SelecteCountries = Styles.select`
    border: 0;
    width: 40px;
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: transparent; 
    boxShadow: none;
    color: white;
`;
export const SelectCount = Styles.select`
    border: 0;
    width: 40px;
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: transparent; 
`;
export const FilterBoxMain = Styles(Box)`
    margin: 20px 150px 20px 150px ! important;
`;
export const CollegeInfoCard = Styles(Paper)`
    margin-bottom: 20px ! important; 
    border-radius: 20px ! important;
`;
export const CollegeBuildingImage = Styles.img`
    width: 14vw ! important;
    height: 25vh ! important;
    border-radius: 10px ! important;
`;
export const CollegeInfoSection = Styles(Grid)`
    padding: 10px ! important; 
    align-self: center ! important;
`;
export const ContentContainer = Styles(Box)`
    padding: 0px 15px ! important;
`;
export const HomepageContent = Styles(Grid)`
    margin: 20px 150px 20px 150px ! important;
`;
export const CollegeInfoExtended = Styles(Paper)`
    border-radius: 20px ! important;
`;
export const ExtendedInfoButtonContainer = Styles(Box)`
    background-color: #DEDBD6 ! important; 
    padding: 10px ! important;
`;
export const UtilityIcons = Styles.img`
    height: 30px ! important; 
    width: 30px ! important;
`;
export const HomeFilterCard = Styles(Paper)`
    padding: 20px 40px 20px 40px ! important;
    display: flex ! important;
    justify-content: center ! important;
    margin-bottom: 20px ! important;
    border-radius: 20px ! important;
`;
export const MidbarContainer = Styles(Grid)`
    background: #a9a9a9 ! important;
    padding: 20px ! important;
`;
export const MidbarTextOne = Styles(Grid)`
    font-size: normal ! important; 
    padding: 5px 100px 5px 5px ! important;
`;
export const MidbarTextTwo = Styles(Grid)`
    font-size: normal ! important; 
    padding: 5px 130px 5px 5px ! important;
`;
export const MidbarTextThree = Styles(Grid)`
    font-size: normal ! important; 
    padding: 5px 40px 5px 5px ! important;
`;
export const NavigationContainer = Styles.div`
    background-image: url('../../FigmaImages/vadim-sherbakov-darked.jpg');
    background-repeat: no-repeat ! important;
    background-size: cover ! important;
`;
export const BritainFlagImage = Styles.img`
    position: sticky;
    left: 165px;
    filter: blur(5px);,
    transform: rotate(-35deg);
    height: 85px;
    width: 85px;
    z-index: 1;
`;
export const ScotlandFlagImage = Styles.img`
    position: sticky;
    transform: rotate(3deg);
    height: 50px;
    width: 50px;
    z-index: 1;
    left: 1412px;
`;
export const NaviagtionFooter = Styles(Box)`
    display: flex ! important;
    justify-content: center ! important;
    padding: 5px 50px 50px 50px ! important;
`;
export const VienaaCollegeImage = Styles.img`
    height: 6vh;
    width: 10vw;
    display: flex;
    margin: auto;
`;
export const FeeContainer = Styles(Box)`
padding: 5px 50px;
`;
