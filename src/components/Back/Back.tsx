import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const BackComponent: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div
      className="flex items-center text-lg gap-3 py-5 cursor-pointer"
      onClick={handleClick}
    >
      <AiOutlineLeft />
      <span className="tracking-wider up">Atrás</span>
    </div>
  )
}

export default BackComponent
