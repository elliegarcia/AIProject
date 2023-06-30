import React from "react";
import FileItem from "../FileItem/FileItem";
import axios from "axios";

const FileList = ({ files, removeFile, selectFile, selectedFile }) => {
  const deleteFileHandler = (_name) => {
    axios
      .delete(`http://localhost:5000/files/:${_name}`)
      .then((res) => {console.log(res, "deleted"); removeFile(_name)})
      .catch((err) => console.error(err));
  };

  return (
    <ul className="file-list">
      {files &&
        files.map((f) => (
          <FileItem
            key={f.name}
            file={f}
            deleteFile={deleteFileHandler}
            selectFile={selectFile}
          />
        ))}
    </ul>
  );
};

export default FileList;
