import React from 'react'

type ButtonProps = {
  text: string
  bgColor: 'orange' | 'red'
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${bgColor} text-white font-bold py-2 px-4 rounded`}
    >
      {text}
    </button>
  )
}

export default Button
