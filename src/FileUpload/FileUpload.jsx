import React, { useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const FileUpload = ({ files, setFiles }) => {
  const fileInputRef = useRef(null);
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      // const fileContent = e.target.result;

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
        console.error(err);
      });
  };
  reader.readAsDataURL(file);
};

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <Button
            variant="contained"
            endIcon={<FileUploadIcon />}
            onClick={handleButtonClick}
          >
            Upload File
          </Button>
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={uploadHandler}
        />
      </div>
    </>
  );
};

export default FileUpload;
