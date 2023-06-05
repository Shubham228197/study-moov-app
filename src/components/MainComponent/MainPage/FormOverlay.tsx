import { Grid, Stack } from "@mui/material";
import FooterIcon from "./FooterIcon";
import FooterText from "./FooterText";
import { overlayData } from "../../../GeneralConstants/Constants";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";
import {
  GridItemCenter,
  FormHomePointers,
  FormHomeResponse,
  FormHomeFooter,
} from "../MainStyling/MainOverlayStyles";
import { PageTitle, ListHeadline } from "../MainStyling/MainTextStyles";
import { ListContent, ListNumbers } from "../MainStyling/MainOverlayStyles";
import MainNavbar from "../MainPage/MainNavbar";
import { useState } from "react";

const FormOverlay = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <MainNavbar />
      <Grid container>
        <GridItemCenter item sm={12} xs={12}>
          <PageTitle>Free consultation with an academic advisor</PageTitle>
        </GridItemCenter>
        <FormHomePointers item sm={5} xs={12}>
          <Stack padding={2} direction="column">
            <ListHeadline>During the consultation, you:</ListHeadline>
            <Grid container>
              {overlayData.map((item) => (
                <Grid container key={item.sno}>
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
          {!isSubmitted ? <FormInput setIsSubmitted={setIsSubmitted} /> : <FormOutput/> }
        </FormHomeResponse>
        <FormHomeFooter item sm={12} xs={12}>
          <Stack direction="column">
            <FooterIcon />
            <FooterText />
          </Stack>
        </FormHomeFooter>
      </Grid>
    </>
  );
};

export default FormOverlay;
