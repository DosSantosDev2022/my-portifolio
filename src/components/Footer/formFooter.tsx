'use client'

import Button from '@/components/Buttons/Button'

import { useForm, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../Forms/TextField'

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
      <Input
        type="email"
        {...register('email')}
        placeholder="Digite seu email"
      />
      <Button variant="highlight">Cadastrar</Button>
    </form>
  )
}
