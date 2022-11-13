import { Header } from "../../components";
import { faqs } from "../../constants/faqs";
import { tokens } from "../../theme";
import { ExpandMoreIcon } from "../../constants/icons";
import {
  useTheme,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqs.map((faq) => (
        <Accordion key={faq.id} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
