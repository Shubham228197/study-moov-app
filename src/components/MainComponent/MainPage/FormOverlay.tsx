import { Grid, Stack } from "@mui/material";
import FooterIcon from "./FooterIcon";
import FooterText from "./FooterText";
import { overlayData } from "../../../GeneralConstants/Constants.js";
// import FormInput from './FormInput';
import FormOutput from "./FormOutput";
import {
  GridItemCenter,
  FormHomePointers,
  FormHomeResponse,
  FormHomeFooter,
} from "../MainStyling/MainOverlayStyles";
import { PageTitle, ListHeadline } from "../MainStyling/MainTextStyles";
import { ListContent, ListNumbers } from "../MainStyling/MainOverlayStyles";

const FormOverlay = () => {
  return (
    <div>
      <Grid container>
        <GridItemCenter item sm={12} xs={12}>
          <PageTitle>Free consultation with an academic advisor</PageTitle>
        </GridItemCenter>
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
