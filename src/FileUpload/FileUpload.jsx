import React, {useRef} from "react";
import Button from "@mui/material/Button";

const FileUpload = ({ files, setFiles }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    // upload file
    file.text().then((result) => {
      localStorage.setItem(
        "savedFile",
        JSON.stringify({ fileName: file.name, fileContent: result })
      );
    });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <Button variant="contained" onClick={handleButtonClick}>
            Upload File
          </Button>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={uploadHandler}
          />
          {/* <input type="file" onChange={uploadHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default FileUpload;
