import { useState, useEffect } from "react";
import FileUpload from "./FileUpload/FileUpload";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import GenerateSolutionButton from "./Components/GenerateSolutionButton";
import Highlighter from "react-highlight-words";
import DataListComponent from "./Components/DataListComponent";

function App() {
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState("");
  const [fileContent, setFileContent] = useState("");

  const [file2, setFile2] = useState([]);
  const [filename2, setFilename2] = useState("");
  const [fileContent2, setFileContent2] = useState("");

  const getSavedFile = (filename) => {
    if (filename === "") {
      return;
    } else {
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

  const getSavedFile2 = (filename2) => {
    if (filename === "") {
      return;
    } else {
      axios
        .get(`http://localhost:5000/files/:${filename2}`)
        .then((res) => {
          setFile2(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getSavedFile2(filename2);
  }, [filename2]);

  console.log("filename-get", filename);
  console.log("file-get", file);

  const [showList, setShowList] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const handleListItemClick = (item) => {
    // Handle the selected item in the main app
    setSelectedItem(item);
  };

  const [originalString, setOriginalString] = useState(file.toString());
  const handleAcceptChange = (acceptedChange) => {
    // Update the main app's state by removing the accepted change from the original string
    setOriginalString((prevString) =>
      prevString.replace(acceptedChange, "").trim()
    );
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
            <Grid className="LeftSide" item xs={7}>
              <Typography variant="h6">DOMAIN</Typography>
              <div className="Domain-Uploader" style={{ marginBottom: "15px" }}>
                <FileUpload
                  files={file}
                  setFiles={setFile}
                  filename={filename}
                  setFilename={setFilename}
                  setFileContent={setFileContent}
                />
              </div>
              <Box
                style={{ marginBottom: "50px" }}
                sx={{
                  boxShadow: 1,
                  width: "80%",
                  height: 300,
                  overflow: "auto",
                }}
              >
                <pre>
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[selectedItem]}
                    autoEscape={true}
                    textToHighlight={file.toString()}
                  />
                </pre>
              </Box>

              <Typography variant="h6">PROBLEM</Typography>
              <div
                className="Problem-Uploader"
                style={{ marginBottom: "15px" }}
              >
                <FileUpload
                  files={file2}
                  setFiles={setFile2}
                  filename={filename2}
                  setFilename={setFilename2}
                  setFileContent={setFileContent2}
                />
              </div>
              <Box
                sx={{
                  boxShadow: 1,
                  width: "80%",
                  height: 300,
                  overflow: "auto",
                }}
              >
                <pre>
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[selectedItem]}
                    autoEscape={true}
                    textToHighlight={file2.toString()}
                  />
                </pre>
              </Box>
            </Grid>

            <Grid className="GenerateSolution" item xs={5}>
              <div style={{ marginBottom: "15px" }}>
                <GenerateSolutionButton setShowList={setShowList} />
              </div>
              <Box style={{marginBottom:"15px"}}
                sx={{
                  boxShadow: 1,
                  width: "100%",
                  height: 1000,
                  overflow: "auto",
                }}
              >
              {showList && <DataListComponent onListItemClick={handleListItemClick} onAcceptChange={handleAcceptChange}/>}
              </Box>
              <Button variant="contained">submit changes</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
