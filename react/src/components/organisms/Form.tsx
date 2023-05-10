import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../atoms/Button'
import Label from '../atoms/Label'
import SelectBox from '../atoms/SelectBox'
import TextBox from '../atoms/TextBox'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Label tagName={'現在の興味・関心'} isRequired={false} />
      <TextBox />
      <TextBox />
      <Label tagName={'過去の興味・関心'} isRequired={false} />
      <TextBox />
      <TextBox />
      <Label tagName={'1日に使える時間'} isRequired={false} />
      <SelectBox />
      <Button
        text={'新しい趣味を見つけてみよう！'}
        bgColor={'orange'}
        onClick={() => console.log('test')}
      />
    </form>
  )
}

export default Form
