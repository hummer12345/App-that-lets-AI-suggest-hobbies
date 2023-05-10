import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../atoms/Button'
import Label from '../atoms/Label'
import SelectBox from '../atoms/SelectBox'
import Spacer from '../atoms/Spacer'
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center text-left px-[10%] py-5 h-800 w-full rounded-lg border-t-8 border-b-8 border-black bg-white"
    >
      <Label tagName={'現在の興味・関心'} />
      <Spacer size={15} />
      <div className="flex justify-around">
        <TextBox type={'text'} />
        <TextBox type={'text'} />
      </div>
      <Spacer size={30} />
      <Label tagName={'過去の興味・関心'} />
      <Spacer size={15} />
      <div className="flex justify-around">
        <TextBox type={'text'} />
        <TextBox type={'text'} />
      </div>
      <Spacer size={30} />
      <Label tagName={'1日に使える時間'} />
      <Spacer size={15} />
      <SelectBox />
      <Spacer size={30} />
      <Label tagName={'予算'} />
      <Spacer size={15} />
      <SelectBox />
      <Spacer size={40} />
      <Button
        text={'新しい趣味を見つけてみよう！'}
        bgColor={'orange'}
        onClick={() => console.log('test')}
      />
    </form>
  )
}

export default Form
