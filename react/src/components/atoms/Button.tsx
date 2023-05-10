import React from 'react'

type ButtonProps = {
  text: string
  bgColor: 'orange' | 'red'
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`bg-${bgColor} text-white text-xl font-bold h-14 py-4 px-4 rounded-lg`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
