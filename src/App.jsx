import { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/FileUpload";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GenerateSolutionButton from "./Components/GenerateSolutionButton";
import Highlighter from "react-highlight-words";

function App() {
  const [files, setFiles] = useState([]);
  const savedFile = JSON.parse(localStorage.getItem("savedFile"));
  const [files2, setFiles2] = useState([]);
  const savedFile2 = JSON.parse(localStorage.getItem("savedFile2"));

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
          <Grid container spacing={2} wrap="wrap">
            <Grid item xs={3} className="DomainHeader">
              <Typography variant="h6">DOMAIN</Typography>
            </Grid>
            <Grid item xs={4}>
              <FileUpload
                files={files}
                setFiles={setFiles}
                filename={"savedFile"}
              />
            </Grid>
            <Grid item xs={5}>
              <GenerateSolutionButton />
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ width: "80%", height: 200, overflow: "auto" }}>
                <pre><Highlighter
                  highlightClassName="YourHighlightClass"
                  searchWords={["loc-0", "loc2"]}
                  autoEscape={true}
                  textToHighlight={savedFile?.fileContent}
                /></pre>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ maxWidth: 400, height: 200, overflow: "auto" }}>
                <p>Generated solution...</p>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">PROBLEM</Typography>
            </Grid>
            <Grid item xs={4}>
              <FileUpload
                files={files2}
                setFiles={setFiles2}
                filename={"savedFile2"}
              />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: "80%", height: 200, overflow: "auto" }}>
              <pre><Highlighter
                  highlightClassName="YourHighlightClass"
                  searchWords={["loc1", "loc2"]}
                  autoEscape={true}
                  textToHighlight={savedFile2?.fileContent}
                /></pre>
                {/* <pre>{savedFile2?.fileContent}</pre> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
