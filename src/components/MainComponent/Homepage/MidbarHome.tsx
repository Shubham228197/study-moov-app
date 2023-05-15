import { Grid } from "@mui/material";
import BagImage from "../../../figma_Images/backpack-icon-main.png";
import GraduationImage from "../../../figma_Images/graduation-cap-icon-main.png";
import BookIcon from "../../../figma_Images/book-icon.png";
import {
  UtilityIcons,
  MidbarContainer,
  MidbarTextOne,
  MidbarTextTwo,
  MidbarTextThree,
} from "../../../styling/main/HomepageOverlayStyles";

const MidbarHome = () => {
  return (
    <MidbarContainer container>
      <Grid xs={2}></Grid>
      
      <Grid container xs={3}>
        <Grid item xs={1}>
          <UtilityIcons src={BagImage} alt="BagpackImage" />
        </Grid>
        <MidbarTextOne item xs={11}>
          Full support: visa, application submission, motivation letter,
          interview
        </MidbarTextOne>
      </Grid>

      <Grid container xs={3}>
        <Grid item xs={1}>
          <UtilityIcons src={GraduationImage} alt="BagpackImage" />
        </Grid>
        <MidbarTextTwo item xs={11}>
          Preparation for admission to the TOP-50 universities and TOP-100
          schools
        </MidbarTextTwo>
      </Grid>

      <Grid container xs={2}>
        <Grid item xs={1}>
          <UtilityIcons src={BookIcon} alt="BagpackImage" />
        </Grid>
        <MidbarTextThree item xs={11}>
          Preparation for IELTS, GMAT, TOEFL, GRE, UKiset, SAT
        </MidbarTextThree>
      </Grid>

      <Grid xs={2}></Grid>
    </MidbarContainer>
  );
};

export default MidbarHome;
