'use client'
import { FormEvent } from 'react'

const Form = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(event)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>client</div>
    </form>
  )
}

export default Form
