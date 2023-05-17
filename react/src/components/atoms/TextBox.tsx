import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

interface TextBoxProps extends ComponentPropsWithoutRef<'input'> {
  type: 'text'
}

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  ({ ...props }, ref) => {
    return (
      <input
        className="border border-gray-700 rounded-lg h-10 px-2"
        {...props}
        ref={ref}
      />
    )
  }
)

TextBox.displayName = 'TextBox'

export default TextBox
