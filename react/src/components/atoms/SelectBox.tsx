import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

interface TextBoxProps extends ComponentPropsWithoutRef<'input'> {
  type: 'text'
}

const SelectBox = () => {
  return (
    <select
      name="pref"
      className="border rounded-lg px-3 py-2 w-full xs:w-10/12 bg-gray-100"
    >
      <option value="1">1時間</option>
      <option value="2">2時間</option>
      <option value="3">3時間</option>
      <option value="4">4時間</option>
      <option value="5">5時間</option>
      <option value="6">6時間以上</option>
    </select>
  )
}

export default SelectBox
