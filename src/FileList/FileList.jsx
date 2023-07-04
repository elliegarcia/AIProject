import React from "react";
import FileItem from "../FileItem/FileItem";

const FileList = ({ files, selectFile }) => {
  return (
    <ul className="file-list">
      {files &&
        files.map((f) => (
          <FileItem key={f.name} file={f} selectFile={selectFile} />
        ))}
    </ul>
  );
};

export default FileList;
