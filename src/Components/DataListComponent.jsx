import React from "react";
import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@material-ui/icons";

const DataListComponent = ({ onListItemClick, onAcceptChange }) => {
  const jsonData = {
    solvable: "false",
    repairs: [
      {
        id: "Repair_9_11_12",
        highlights: [
          "(person-at p0 loc-0-0)",
          "(person-at p0 loc-1-0)",
          "(person-at p0 loc-1-1)",
          "(person-at p0 loc-1-2)",
          "(person-at p0 loc-1-3)",
          "(person-at p0 loc-2-0)",
          "(person-at p0 loc-3-0)",
          "(person-at p0 loc-3-1)",
          "(person-at p0 loc-3-2)",
          "(person-at p0 loc-3-3)",

          "(person-at p2 loc-0-2)",
          "(person-at p2 loc-1-0)",
          "(person-at p2 loc-1-1)",
          "(person-at p2 loc-1-2)",
          "(person-at p2 loc-1-3)",
          "(person-at p2 loc-2-0)",
          "(person-at p2 loc-3-0)",
          "(person-at p2 loc-3-1)",
          "(person-at p2 loc-3-2)",
          "(person-at p2 loc-3-3)",

          "(person-at p3 loc-0-3)",
          "(person-at p3 loc-1-0)",
          "(person-at p3 loc-1-1)",
          "(person-at p3 loc-1-2)",
          "(person-at p3 loc-1-3)",
          "(person-at p3 loc-2-0)",
          "(person-at p3 loc-3-0)",
          "(person-at p3 loc-3-1)",
          "(person-at p3 loc-3-2)",
          "(person-at p3 loc-3-3)",
        ],
      },
      {
        id: "Repair_10_11_12",
        highlights: [
          "(person-at p1 loc-0-1)",
          "(person-at p1 loc-1-0)",
          "(person-at p1 loc-1-1)",
          "(person-at p1 loc-1-2)",
          "(person-at p1 loc-1-3)",
          "(person-at p1 loc-2-0)",
          "(person-at p1 loc-3-0)",
          "(person-at p1 loc-3-1)",
          "(person-at p1 loc-3-2)",
          "(person-at p1 loc-3-3)",

          "(person-at p2 loc-0-2)",
          "(person-at p2 loc-1-0)",
          "(person-at p2 loc-1-1)",
          "(person-at p2 loc-1-2)",
          "(person-at p2 loc-1-3)",
          "(person-at p2 loc-2-0)",
          "(person-at p2 loc-3-0)",
          "(person-at p2 loc-3-1)",
          "(person-at p2 loc-3-2)",
          "(person-at p2 loc-3-3)",

          "(person-at p3 loc-0-3)",
          "(person-at p3 loc-1-0)",
          "(person-at p3 loc-1-1)",
          "(person-at p3 loc-1-2)",
          "(person-at p3 loc-1-3)",
          "(person-at p3 loc-2-0)",
          "(person-at p3 loc-3-0)",
          "(person-at p3 loc-3-1)",
          "(person-at p3 loc-3-2)",
          "(person-at p3 loc-3-3)",
        ],
      },
      {
        id: "Repair_9_10_12",
        highlights: [
          "(person-at p0 loc-0-0)",
          "(person-at p0 loc-1-0)",
          "(person-at p0 loc-1-1)",
          "(person-at p0 loc-1-2)",
          "(person-at p0 loc-1-3)",
          "(person-at p0 loc-2-0)",
          "(person-at p0 loc-3-0)",
          "(person-at p0 loc-3-1)",
          "(person-at p0 loc-3-2)",
          "(person-at p0 loc-3-3)",

          "(person-at p1 loc-0-1)",
          "(person-at p1 loc-1-0)",
          "(person-at p1 loc-1-1)",
          "(person-at p1 loc-1-2)",
          "(person-at p1 loc-1-3)",
          "(person-at p1 loc-2-0)",
          "(person-at p1 loc-3-0)",
          "(person-at p1 loc-3-1)",
          "(person-at p1 loc-3-2)",
          "(person-at p1 loc-3-3)",

          "(person-at p3 loc-0-3)",
          "(person-at p3 loc-1-0)",
          "(person-at p3 loc-1-1)",
          "(person-at p3 loc-1-2)",
          "(person-at p3 loc-1-3)",
          "(person-at p3 loc-2-0)",
          "(person-at p3 loc-3-0)",
          "(person-at p3 loc-3-1)",
          "(person-at p3 loc-3-2)",
          "(person-at p3 loc-3-3)",
        ],
      },
    ],
  };

  const handleItemClick = (item) => {
    onListItemClick(item);
  };

  const handleAcceptChange = (acceptedChange, changeID) => {
    onAcceptChange(acceptedChange, changeID);
  };

  return (
    <div>
      <Typography variant="h6">
        This problem is not solvable until the following changes are made
      </Typography>
      <List>
        {jsonData.repairs.map((repair) => (
          
            <ListItem key={`${repair.id}`}>
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panella-header"
              >
                <ListItemText
                  primary={`${repair.id}`}
                  // secondary={`${repair.highlights}`}
                />
              </AccordionSummary>
              <AccordionDetails>
                <pre>{repair.highlights.map((highlight)=> `${highlight}\n`)}</pre>
              </AccordionDetails>
              </Accordion>
              <ButtonGroup variant="text">
                <Button onClick={() => handleItemClick(repair.highlights)}>
                  view changes
                </Button>
                <Button
                  onClick={() =>
                    handleAcceptChange(repair.highlights, repair.id)
                  }
                >
                  Accept Changes
                </Button>
              </ButtonGroup>
              
            </ListItem>
          
        ))}
      </List>
    </div>
  );
};

export default DataListComponent;
