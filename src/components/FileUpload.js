// src/components/FileUpload.js
import React from 'react'
import { useDropzone } from 'react-dropzone'

const FileUpload = ({ onFileSelect }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdb',
    onDrop: (acceptedFiles) => {
      onFileSelect(acceptedFiles[0])
    },
  })

  return (
    <div style={styles.container}>
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        <p style={styles.text}>
          📂 Drag & drop a PDB file here, or <b>click to select one</b>
        </p>
        <button style={styles.button}>Choose a File</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  dropzone: {
    width: '400px',
    padding: '20px',
    border: '2px dashed #007bff',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
  },
  text: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
}

export default FileUpload
