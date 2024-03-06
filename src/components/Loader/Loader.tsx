import React from 'react'
import './Loader.scss' // Estilo para el loader (puedes personalizar según tus necesidades)

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  )
}

export default Loader
