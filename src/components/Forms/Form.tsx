'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import Button from '@/components/Buttons/Button'
import { Input } from './TextField'
import { TextArea } from './TextArea'
import { toast } from 'react-toastify'

const zodSchemaFomr = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  email: z.string().email('Formato do email inválido'),
  coments: z.string(),
})

type FormInput = z.infer<typeof zodSchemaFomr>

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(zodSchemaFomr),
  })
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    toast.success('Formulário enviado com sucesso')
    reset()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Input
          type="text"
          {...register('name')}
          placeholder="Digite seu nome"
          label="Digite seu nome completo"
        />
        {errors && (
          <span className="text-red-500 font-normal">
            {errors.name?.message}
          </span>
        )}
        <Input
          type="email"
          {...register('email')}
          placeholder="Digite seu email"
          label="Digite seu melhor email"
        />
        {errors && (
          <span className="text-red-500 font-normal">
            {errors.email?.message}
          </span>
        )}
        <TextArea
          label="Deixe sua mensagem"
          placeholder="Deixe sua mensagem"
          {...register('coments')}
        />
        <Button variant="highlight" className="hover:bg-violet-800 ">
          Enviar
        </Button>
      </form>
    </>
  )
}
