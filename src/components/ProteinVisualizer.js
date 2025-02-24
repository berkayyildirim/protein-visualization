// src/components/ProteinVisualizer.js
import React, { useRef, useEffect } from 'react'

const ProteinVisualizer = ({ pdbData }) => {
  const viewerRef = useRef(null)

  useEffect(() => {
    if (!pdbData || !viewerRef.current) return

    if (typeof window.$3Dmol === 'undefined') {
      console.error('3Dmol.js is not loaded.')
      return
    }

    // 🛑 Clear previous render to prevent duplicate models
    viewerRef.current.innerHTML = ''

    // ✅ Create a properly sized viewer inside the container
    const viewer = window.$3Dmol.createViewer(viewerRef.current, {
      width: '100%', // Ensure full width of parent container
      height: '100%', // Ensure full height of parent container
      backgroundColor: 'white',
    })

    // Load PDB model
    viewer.addModel(pdbData, 'pdb')
    viewer.setStyle({}, { stick: {} })
    viewer.zoomTo()
    viewer.render()

    // ✅ Force re-render when window resizes
    const handleResize = () => {
      viewer.resize() // Adjust to fit container
      viewer.render()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [pdbData])

  return (
    <div style={styles.container}>
      <h2>Protein Structure</h2>
      <div ref={viewerRef} style={styles.viewer} />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
  },
  viewer: {
    width: '600px',
    height: '500px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    overflow: 'hidden', // 🛑 Prevents model overflow outside the box
    position: 'relative', // Ensures proper positioning
  },
}

export default ProteinVisualizer
