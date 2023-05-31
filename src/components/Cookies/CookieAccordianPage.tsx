import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordianInput } from "./CookieConstants/CookieConstant";
import SwitchToggle from "./SwitchToggle";
import { AccordionBox, TableRow } from "./CookiesStyling/CookieStylingOverlays";
import { TableTextMidPad } from "./CookiesStyling/CookieStylingText";
import { Box30margin } from "../../GeneralStyling/Overlays";

const CookieAccordianPage = () => (
  <Box30margin>
    {AccordianInput.map((accordian_data) => (
      <>
        <AccordionBox>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SwitchToggle />
            <Typography>{accordian_data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <table style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Services</th>
                  <th>Domain</th>
                  <th>Duration</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {accordian_data.table.map((table_data) => (
                  <>
                    <TableRow>
                      <TableTextMidPad>{table_data.name}</TableTextMidPad>
                      <TableTextMidPad>{table_data.service}</TableTextMidPad>
                      <TableTextMidPad>{table_data.domain}</TableTextMidPad>
                      <TableTextMidPad>{table_data.duration}</TableTextMidPad>
                      <TableTextMidPad>
                        {table_data.description}
                      </TableTextMidPad>
                    </TableRow>
                  </>
                ))}
              </tbody>
            </table>
          </AccordionDetails>
        </AccordionBox>
      </>
    ))}
  </Box30margin>
);

export default CookieAccordianPage;
