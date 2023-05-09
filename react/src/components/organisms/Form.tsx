import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../atoms/Button'

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name', { required: true })} />
      </label>
      {errors.name && <p>This field is required</p>}

      <label>
        Email:
        <input
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
      </label>
      {errors.email && errors.email.type === 'required' && (
        <p>This field is required</p>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <p>Invalid email format</p>
      )}

      <Button
        text={'新しい趣味を見つけてみよう！'}
        bgColor={'orange'}
        onClick={() => console.log('test')}
      />
    </form>
  )
}

export default Form
