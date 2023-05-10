import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

interface TextBoxProps extends ComponentPropsWithoutRef<'input'> {
  type: 'text'
}

//const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
//  ({ ...props }, ref) => {
//    return <input className="border-color: black" {...props} ref={ref} />
//  }
//)

const TextBox = () => {
  return <input className="border border-black rounded" />
}

TextBox.displayName = 'TextBox'

export default TextBox
