import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./FileUpload.css";
import axios from "axios";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const [fileContent, setFileContent] = useState('');

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      // Do something with the file content, such as displaying it in the browser or sending it to a server
      setFileContent(fileContent);
      console.log(fileContent);
    };

    reader.readAsText(file);

    // upload file
    const formData = new FormData();
    formData.append("file", file, file.name);
    axios
      .post(`http://localhost:5000/files/:${file.name}`, formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        // inform the user
        console.error(err.files);
        removeFile(file.name);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
        </div>
        <pre>{fileContent}</pre>
      </div>
    </>
  );
};

export default FileUpload;
