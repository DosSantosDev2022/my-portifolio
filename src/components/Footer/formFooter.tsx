'use client'

import Button from '@/components/Buttons/Button'

import { useForm, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const zodSchema = z.object({
  email: z.string().email('O formato do email é inválido'),
})

type FormInput = z.infer<typeof zodSchema>

export function FormFooter() {
  const { register, handleSubmit } = useForm<FormInput>({
    resolver: zodResolver(zodSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert('Formulário enviado com sucesso !')
    } else {
      alert('Erro ao enviar email')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full gap-2">
      <input
        placeholder="Digite seu email"
        {...register('email')}
        type="email"
        className='"bg-zinc-200 appearance-none border-2 border-zinc-200 rounded w-full py-2 px-4 text-zinc-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
      />
      <Button variant="highlight">Cadastrar</Button>
    </form>
  )
}
