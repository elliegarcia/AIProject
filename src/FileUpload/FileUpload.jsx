import React from 'react'
import axios from 'axios'
import FileItem from '../FileItem/FileItem';

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "file",
            file,
            file.name
        )
        axios.post(`http://localhost:5000/files/:${file.name}`, formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err.files)
                removeFile(file.name)
            });
    }

    return (
        <>
            <div className="file-card">

                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                </div>

            </div>
        </>
    )
}

export default FileUpload