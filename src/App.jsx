import { useState } from "react";
import FileUpload from "./FileUpload/FileUpload";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GenerateSolutionButton from "./Components/GenerateSolutionButton";
import Highlighter from "react-highlight-words";
import Card from '@mui/material/Card';

function App() {
  const [file, setFile] = useState([]);
  const [fileContent, setFileContent] = useState("");
  const [file2, setFile2] = useState([]);
  const [fileContent2, setFileContent2] = useState("");

  const savedFile = (filename) => {
    axios
      .get(`http://localhost:5000/files/:${filename.name}`)
      .then((res) => {
        console.log(res.data);
        setFile(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Planning Web Interface
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="mainContainer" maxWidth="xl">
        <Box className="mainContentBoxes" sx={{ flexGrow: 1 }} mt={3}>
          <Grid container spacing={2} wrap="wrap">

            <Grid className="DomainHeader" item xs={3}>
              <Typography variant="h6">DOMAIN</Typography>
            </Grid>
            <Grid className="DomainFileUploader" item xs={4}>
              <FileUpload
                files={file}
                setFiles={setFile}
                setFileContent={setFileContent}
              />
            </Grid>

            <Grid className="GenerateSolution" item xs={5}>
              <GenerateSolutionButton />
            </Grid>

            <Grid className="DomainFile" item xs={10}>
              <Box sx={{ boxShadow:1, width: "60%", height: 300, overflow: "auto" }}>
                <pre>
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={["loc-0", "loc2"]}
                    autoEscape={true}
                    textToHighlight={fileContent}
                  />
                </pre>
              </Box>
            </Grid>

            <Grid item xs={12}/>
            <Box sx={{height: 80}}/>
            <Grid className="ProblemHeader" item xs={3}>
              <Typography variant="h6">PROBLEM</Typography>
            </Grid>
            <Grid className="ProblemFileUploader" item xs={4}>
              <FileUpload
                files={file2}
                setFiles={setFile2}
                setFileContent={setFileContent2}
              />
            </Grid>
            <Grid className="ProblemFile" item xs={10}>
              <Box sx={{ boxShadow:1, width: "60%", height: 300, overflow: "auto" }}>
                <pre>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={["loc-0", "loc2"]}
                    autoEscape={true}
                    textToHighlight={fileContent2}
                  />
                </pre>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
