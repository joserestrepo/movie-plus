import React from 'react'

import './Alert.scss'

const AlertComponent: React.FC<{ text: string }> = ({ text }) => {
  return <div className="alert">{text}</div>
}

export default AlertComponent
