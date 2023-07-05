import { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/FileUpload";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function App() {
  const [files, setFiles] = useState([]);

  const savedFile = JSON.parse(localStorage.getItem("savedFile"));

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Planning Web Interface
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }} mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              DOMAIN:
            </Grid>
            <Grid item xs={5}>
              PLACEHOLDER:
            </Grid>
            <Grid item xs={3}>
              <FileUpload files={files} setFiles={setFiles} />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={5}>
              <p>{savedFile.fileContent}</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
