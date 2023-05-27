import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQ } from "./CollegeProfileConstants";

const FAQAboutCollege = () => {
  return (
    <div style={{margin: '30px 0px 30px 0px'}}>
      <Typography variant="h5" sx={{fontWeight: 'bold'}}>Frequently Asked Questions</Typography>
      {FAQ.map((faq) => (
        <Accordion sx={{margin: '30px 0px',fontSize: 'large', padding: '15px'}} elevation={5}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {faq.Questions}
          </AccordionSummary>
          <AccordionDetails>{faq.Answers}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAboutCollege;
