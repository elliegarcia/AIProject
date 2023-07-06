import React, { useRef } from "react";
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const FileUpload = ({ files, setFiles, filename }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    // const file = event.target.files[0];
    // if (!file) return;
    // file.isUploading = true;
    // setFiles([...files, file]);

    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      setFiles((prevFiles) => [...prevFiles, file]);
      localStorage.setItem(
        filename,
        JSON.stringify({ fileName: file.name, fileContent })
      );
    };
    reader.readAsText(file);

    // upload file
    // file.text().then((result) => {
    //   localStorage.setItem(
    //     filename,
    //     JSON.stringify({ fileName: file.name, fileContent: result })
    //   );
    // }, [files]);
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <Button variant="contained" endIcon={<FileUploadIcon />} onClick={handleButtonClick}>
            Upload File
          </Button>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={uploadHandler}
          />
        </div>
      </div>
    </>
  );
};

export default FileUpload;
