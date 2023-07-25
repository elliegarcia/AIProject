import { useState, useEffect } from "react";
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

function App() {
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [file2, setFile2] = useState([]);
  const [filename2, setFilename2] = useState("");
  const [fileContent2, setFileContent2] = useState("");
  

  const getSavedFile = (filename) => {
    if (filename==="") {return }
    else{
    axios
      .get(`http://localhost:5000/files/:${filename}`)
      .then((res) => {
        setFile(res.data);
        console.log("axios-file", file);
      })
      .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getSavedFile(filename);
  }, [filename]);

  console.log("filename-get", filename)
  console.log("file-get", file)

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
                filename={filename}
                setFilename={setFilename}
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
                    searchWords={["loc", "p0"]}
                    autoEscape={true}
                    textToHighlight={file.toString()}
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
                filename={filename2}
                setFilename={setFilename2}
              />
            </Grid>
            <Grid className="ProblemFile" item xs={10}>
              <Box sx={{ boxShadow:1, width: "60%", height: 300, overflow: "auto" }}>
                <pre>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={["loc-0", "loc2"]}
                    autoEscape={true}
                    textToHighlight={file2.toString()}
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
