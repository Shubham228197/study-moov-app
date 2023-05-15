import { Grid, Stack } from "@mui/material";
import FooterIcon from "../MainComponent/footer/FooterIcon";
import FooterText from "../MainComponent/footer/FooterText";
import { overlayData } from "../../constants/constants.js";
// import FormInput from './FormInput';
import FormOutput from "./FormOutput";
import {
  FormHomeHeading,
  FormHomePointers,
  FormHomeResponse,
  FormHomeFooter,
} from "../../styling/main/MainOverlayStyles";
import { PageTitle, ListHeadline } from "../../styling/main/MainTextStyles";
import { ListContent, ListNumbers } from "../../styling/main/MainOverlayStyles";

const FormOverlay = () => {
  return (
    <div>
      <Grid container>
        <FormHomeHeading item sm={12} xs={12}>
          <PageTitle>Free consultation with an academic advisor</PageTitle>
        </FormHomeHeading>
        <FormHomePointers item sm={5} xs={12}>
          <Stack padding={2} direction="column">
            <ListHeadline>During the consultation, you:</ListHeadline>
            <Grid container>
              {overlayData.map((item) => (
                <Grid container>
                  <ListNumbers item xs={4}>
                    {item.sno}
                  </ListNumbers>
                  <ListContent item xs={8}>
                    {item.data}
                  </ListContent>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </FormHomePointers>
        <FormHomeResponse item sm={7} xs={12}>
          <FormOutput />
        </FormHomeResponse>
        <FormHomeFooter item sm={12} xs={12}>
          <Stack direction="column">
            <FooterIcon />
            <FooterText />
          </Stack>
        </FormHomeFooter>
      </Grid>
    </div>
  );
};

export default FormOverlay;
