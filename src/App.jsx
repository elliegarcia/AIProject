import { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/FileUpload";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function App() {
  const [file, setFile] = useState("");
  const [fileContent, setFileContent] = useState("");

  

  const selectFile = () => {
    axios
      .get(`http://localhost:5000/files/:${file.name}`)
      .then((res) => {
        console.log(res.data);
        setFileContent(res.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="App">
      <div className="title">File Uploader</div>
      <FileUpload files={file} setFiles={setFile} />
      <pre>{fileContent}</pre>
      <button onClick={selectFile}>Get File Content</button>
    </div>
  );
}

export default App;
