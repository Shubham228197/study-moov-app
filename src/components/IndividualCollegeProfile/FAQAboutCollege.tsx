import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQ } from "./CollegeProfileConstant/CollegeProfileConstants";
import { FAQAccordion } from "./CollegeProfileStyling/ProfileStylingOverlays";
import { BoldText } from "../../GeneralStyling/Texts";
import { Box30MarginNoLR } from "../../GeneralStyling/Overlays";

const FAQAboutCollege = () => {
  return (
    <Box30MarginNoLR>
      <BoldText variant="h5">Frequently Asked Questions</BoldText>
      {FAQ.map((faq) => (
        <FAQAccordion elevation={5} key={faq.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {faq.Questions}
          </AccordionSummary>
          <AccordionDetails>{faq.Answers}</AccordionDetails>
        </FAQAccordion>
      ))}
    </Box30MarginNoLR>
  );
};

export default FAQAboutCollege;
