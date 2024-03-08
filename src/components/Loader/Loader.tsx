import React from 'react' // Estilo para el loader (puedes personalizar según tus necesidades)

const Loader: React.FC = () => {
  return (
    <div
      className="w-full fixed left-0 top-0 z-30 flex justify-center 
                    items-center h-lvh bg-gray-700 bg-opacity-70"
      data-testid="loader-container"
    >
      <div className="animate-spin border-4 border-t-blue-500 w-[50px] h-[50px] rounded-full"></div>
    </div>
  )
}

export default Loader
