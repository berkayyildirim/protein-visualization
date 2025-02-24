// src/App.js
import React, { useState } from 'react'
import FileUpload from './components/FileUpload'
import ProteinVisualizer from './components/ProteinVisualizer'

const App = () => {
  const [pdbData, setPdbData] = useState(null)

  const handleFileSelect = (file) => {
    const reader = new FileReader()
    reader.onload = () => {
      setPdbData(reader.result)
    }
    reader.readAsText(file)
  }

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🧬 Protein Visualization</h1>
      <FileUpload onFileSelect={handleFileSelect} />
      {pdbData && <ProteinVisualizer pdbData={pdbData} />}
    </div>
  )
}

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
  },
}

export default App
