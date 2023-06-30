import React from "react";
import "./FileItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const FileItem = ({ file, deleteFile, selectFile}) => {
  return (
    <li className="file-item" key={file.name} onClick={(e) => selectFile(file)}>
      <p>{file.name}</p>
      <div className="actions" >
        {!file.isUploading && (
          <FontAwesomeIcon
            onClick={() => deleteFile(file.name)}
          />
        )}
      </div>
    </li>
  );
};

export default FileItem;
