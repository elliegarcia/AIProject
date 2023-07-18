import React, { useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const FileUpload = ({ files, setFiles, setFileContent }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
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
      });
  };

  return (
    <>
      <div className="file-inputs">
        <Button
          variant="contained"
          endIcon={<FileUploadIcon />}
          onClick={handleButtonClick}
        >
          Upload File
        </Button>
        <input type="file" style={{display:"none"}} ref={fileInputRef} onChange={uploadHandler} />
      </div>
    </>
  );
};

export default FileUpload;
