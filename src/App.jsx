import { useState } from "react";
import "./App.css";
import FileUpload from "./FileUpload/FileUpload";
import FileList from "./FileList/FileList";
import HighlightedText from "./Components/HighlightedText";
import axios from "axios";

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

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  return (
    <div className="App">
      <div className="title">File Uploader</div>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <HighlightedText text={selectedFile} highlight="AI" />
      
      <FileList
        files={files}
        removeFile={removeFile}
        selectFile={selectFile}
        selectedFile={selectedFile}
      />
    </div>
  );
}

export default App;
