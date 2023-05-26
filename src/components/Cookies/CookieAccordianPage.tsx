import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordianInput } from "./CookieConstant";
import SwitchToggle from "./SwitchToggle";

const CookieAccordianPage = () => {
  return (
    <div style={{margin: '30px'}}>
      {AccordianInput.map((accordian_data) => (
        <>
          <Accordion sx={{margin: '30px 0px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SwitchToggle/>
              <Typography>{accordian_data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <table border={0} style={{ borderCollapse: "collapse" }}>
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
                      <tr style={{border: '1px solid black', borderCollapse: "collapse" }}>
                        <td style={{ padding: "10px" }}>{table_data.name}</td>
                        <td style={{ padding: "10px" }}>
                          {table_data.service}
                        </td>
                        <td style={{ padding: "10px" }}>{table_data.domain}</td>
                        <td style={{ padding: "10px" }}>
                          {table_data.duration}
                        </td>
                        <td style={{ padding: "10px" }}>
                          {table_data.description}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};

export default CookieAccordianPage;
