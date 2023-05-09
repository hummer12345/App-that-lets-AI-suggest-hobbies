import React from 'react'

type HeadLineProps = {
  text: string
}

const HeadLine: React.FC<HeadLineProps> = ({ text }) => {
  return <h2 className={'font-bold'}>{text}</h2>
}

export default HeadLine
