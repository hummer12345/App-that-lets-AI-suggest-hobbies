import React from 'react'
import Select from 'react-select'

type Option<T> = {
  value: T
  label: string
}

type OptionsProps<T> = {
  options: Option<T>[]
}

const SelectBox = <T,>({ options }: OptionsProps<T>): React.ReactElement => {
  return <Select options={options} defaultValue={options[0]} />
}

export default SelectBox
