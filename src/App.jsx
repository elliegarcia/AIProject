import { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/FileUpload";
import FileList from "./FileList/FileList";
import HighlightedText from "./Components/HighlightedText";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FileItem from "./FileItem/FileItem";

function App() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");

  const selectFile = (filename) => {
    axios
      .get(`http://localhost:5000/files/:${filename.name}`)
      .then((res) => {
        console.log(res.data);
        setSelectedFile(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log("selectedfile", selectedFile);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Planning Web Interface
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }} mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={7}>DOMAIN:</Grid>
          <Grid item xs={5}>PLACEHOLDER:</Grid>
          <Grid item xs={3}>
            <FileUpload
              files={files}
              setFiles={setFiles}
            />
          </Grid>
          <Grid item xs={4}>
          <FileList
              files={files}
              selectFile={selectFile}
            />
          </Grid>
        </Grid>
      </Box>

      <HighlightedText text={selectedFile} highlight="AI" />
    </div>
  );
}

export default App;
