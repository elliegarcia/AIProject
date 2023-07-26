import React from "react";
import { Button, ButtonGroup, List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";

const DataListComponent = ({onListItemClick}) => {
  const jsonData = {
    "solvable": "false",
    "repairs": [
      {
        "id": "Repair_9_11_12",
        "predicates": ["person-at", "person", "location"],
        "objects": [
          "p0",
          "p2",
          "p3",
          "loc-0-0",
          "loc-0-2",
          "loc-0-3",
          "loc-1-0",
          "loc-1-1",
          "loc-1-2",
          "loc-1-3",
          "loc-2-0",
          "loc-3-0",
          "loc-3-1",
          "loc-3-2",
          "loc-3-3",
        ],
      },
      {
        "id": "Repair_10_11_12",
        "predicates": ["person-at", "person", "location"],
        "objects": [
          "p1",
          "p2",
          "p3",
          "loc-0-1",
          "loc-0-2",
          "loc-0-3",
          "loc-1-0",
          "loc-1-1",
          "loc-1-2",
          "loc-1-3",
          "loc-2-0",
          "loc-3-0",
          "loc-3-1",
          "loc-3-2",
          "loc-3-3",
        ],
      },
      {
        "id": "Repair_9_10_12",
        "predicates": ["person-at", "person", "location"],
        "objects": [
          "p0",
          "p1",
          "p3",
          "loc-0-0",
          "loc-0-1",
          "loc-0-3",
          "loc-1-0",
          "loc-1-1",
          "loc-1-2",
          "loc-1-3",
          "loc-2-0",
          "loc-3-0",
          "loc-3-1",
          "loc-3-2",
          "loc-3-3",
        ],
      },
    ],
  };

  const handleAcceptChange = (repairId, predicate, object) => {
    // Implement your logic for accepting changes here
    const acceptedChange = {repairId, predicate, object};
    console.log("accepted-change", acceptedChange)
    
    axios.post(`http://localhost:5000/file/:acceptedChanges}`, acceptedChange)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err)=>{
        console.error("Error sending accepted change:", err)
    });
  };

  const handleItemClick = (item) => {
    onListItemClick(item);
  }

  return (
    <div>
        <Typography variant="h6">This problem is not solvable until the following changes are made</Typography>
        <Button variant="outlined">Accept All Changes</Button>
    <List>
      {jsonData.repairs.map((repair) =>
        repair.predicates.map((predicate) =>
          repair.objects.map((object) => (
            <ListItem key={`${repair.id}_${predicate}_${object}`} onClick={() => handleItemClick(`${predicate} ${object}`)}>
              <ListItemText primary={`${predicate} ${object}`} />
              <ButtonGroup variant="text">
              <Button
                onClick={() => handleAcceptChange(repair.id, predicate, object)}
              >
                Accept Change
              </Button>
              </ButtonGroup>
            </ListItem>
          ))
        )
      )}
    </List>
    </div>
  );
};

export default DataListComponent;