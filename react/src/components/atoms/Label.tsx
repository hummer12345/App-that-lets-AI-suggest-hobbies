import React from 'react'

type props = {
  tagName: string
}

const Label = ({ tagName }: props) => {
  return <label>{tagName}</label>
}

export default Label
