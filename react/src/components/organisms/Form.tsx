import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '../atoms/Button'
import Label from '../atoms/Label'
import SelectBox from '../atoms/SelectBox'
import Spacer from '../atoms/Spacer'
import TextBox from '../atoms/TextBox'

type SuggestHobbyValues = {
  currentInterest1: string
  currentInterest2: string
  pastInterest1: string
  pastInterest2: string
  HoursAvailablePerDay: number
  budget: number
}

type SuggestHobbyProps = {
  SuggestHobby: ({
    currentInterest1,
    currentInterest2,
    pastInterest1,
    pastInterest2,
    HoursAvailablePerDay,
    budget,
  }: SuggestHobbyValues) => void
  postReqLoding: boolean
}

const Form = ({ SuggestHobby, postReqLoding }: SuggestHobbyProps) => {
  const schema = z.object({
    currentInterest1: z
      .string()
      .min(1, { message: '入力してください' })
      .max(10, { message: '10文字以下で入力してください' }),
    currentInterest2: z
      .string()
      .min(1, { message: '入力してください' })
      .max(10, { message: '10文字以下で入力してください' }),
    pastInterest1: z
      .string()
      .min(1, { message: '入力してください' })
      .max(10, { message: '10文字以下で入力してください' }),
    pastInterest2: z
      .string()
      .min(1, { message: '入力してください' })
      .max(10, { message: '10文字以下で入力してください' }),
    HoursAvailablePerDay: z.number().min(1, { message: '未入力です' }),
    budget: z.number().min(1, { message: '未入力です' }),
  })

  type Schema = z.infer<typeof schema>

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (SuggestHobbyValues: SuggestHobbyValues) => {
    SuggestHobby(SuggestHobbyValues)
  }

  const options = [
    { value: 'line', label: '折れ線グラフ' },
    { value: 'bar', label: '棒グラフ' },
    { value: 'pie', label: '円グラフ' },
  ]

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center max-sm:text-left px-[10%] py-5 w-full rounded-lg border-t-8 border-b-8 border-black bg-white"
    >
      <Label tagName={'現在の興味・関心'} />
      <Spacer size={15} />
      <div className="flex md:justify-between px-8 xs:flex-col xs:justify-center xs:items-center xs:mb-3 md:flex-row">
        <div className="flex flex-col max-md:w-9/12 md:w-5/12">
          <TextBox type={'text'} {...register('currentInterest1')} />
          {errors.currentInterest1?.message ? (
            <>
              <p>{errors.currentInterest1?.message}</p>
            </>
          ) : (
            <Spacer size={24} />
          )}
        </div>
        <div className="flex flex-col max-md:w-9/12 md:w-5/12">
          <TextBox type={'text'} {...register('currentInterest2')} />
          {errors.currentInterest2?.message ? (
            <>
              <p>{errors.currentInterest2?.message}</p>
            </>
          ) : (
            <Spacer size={24} />
          )}
        </div>
      </div>

      <Label tagName={'過去の興味・関心'} />
      <Spacer size={15} />
      <div className="flex md:justify-between px-8 xs:flex-col xs:justify-center xs:items-center md:flex-row">
        <div className="flex flex-col max-md:w-9/12 md:w-5/12">
          <TextBox type={'text'} {...register('pastInterest1')} />
          {errors.pastInterest1?.message ? (
            <>
              <p>{errors.pastInterest1?.message}</p>
            </>
          ) : (
            <Spacer size={24} />
          )}
        </div>
        <div className="flex flex-col max-md:w-9/12 md:w-5/12">
          <TextBox type={'text'} {...register('pastInterest2')} />
          {errors.pastInterest2?.message ? (
            <>
              <p>{errors.currentInterest2?.message}</p>
            </>
          ) : (
            <Spacer size={24} />
          )}
        </div>
      </div>
      <Spacer size={30} />
      <Label tagName={'1日に使える時間'} />
      <Spacer size={15} />
      <div className="flex xs:justify-center md:justify-start px-8">
        <div className="max-md:w-9/12 md:w-5/12">
          <SelectBox<string> options={options} />
        </div>
      </div>
      <Spacer size={30} />
      <Label tagName={'予算'} />
      <Spacer size={15} />
      <div className="flex xs:justify-center md:justify-start px-8">
        <div className="max-md:w-9/12 md:w-5/12">
          <SelectBox<string> options={options} />
        </div>
      </div>
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
