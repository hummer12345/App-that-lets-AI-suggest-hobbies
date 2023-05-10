import React from 'react'

type props = {
  tagName: string
  isRequired: boolean
}

const Label = ({ tagName, isRequired }: props) => {
  const mode = isRequired ? 'label-required' : 'label'
  return <label>{tagName}</label>
}

export default Label
