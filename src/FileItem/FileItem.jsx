import React from "react";
import Grid from "@mui/material/Grid";

const FileItem = ({ file, selectFile}) => {
  return (
    <Grid item xs={7}>
    <li className="file-item" key={file.name} onClick={(e) => selectFile(file)}>
      
      <p>{file.name}</p>
      
    </li>
    </Grid>
  );
};

export default FileItem;
