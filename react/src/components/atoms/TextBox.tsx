import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

interface TextBoxProps extends ComponentPropsWithoutRef<'input'> {
  type: 'text'
}

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  ({ ...props }, ref) => {
    return (
      <input
        className="border border-gray-700 rounded-lg xl:w-5/12 md:w-5/12 sm:w-5/12 xs:w-10/12 h-10 px-2"
        {...props}
        ref={ref}
      />
    )
  }
)

TextBox.displayName = 'TextBox'

export default TextBox
