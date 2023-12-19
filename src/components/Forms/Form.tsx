'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

import Button from '@/components/Buttons/Button'

const zodSchemaFomr = z.object({
  nome: z.string().nonempty('O nome é obrigatório'),
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
    const templateParams = {
      name: data.nome,
      message: data.coments,
      email: data.email,
    }

    emailjs
      .send(
        'service_8s074tc',
        'template_r8yyiuc',
        templateParams,
        'U7coQ2AOuzdMMPPf2',
      )
      .then(
        (response) => {
          console.log(response)
          toast.success('Email enviado com sucesso !')
          reset()
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error)
          toast.error(
            'Erro ao enviar o formulário. Por favor, tente novamente.',
          )
        },
      )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <input
          type="text"
          {...register('nome')}
          placeholder="Digite seu nome"
        />
        {errors && (
          <span className="text-red-500 font-normal">
            {errors.nome?.message}
          </span>
        )}
        <input
          type="text"
          {...register('email')}
          placeholder="Digite seu email"
        />
        {errors && (
          <span className="text-red-500 font-normal">
            {errors.email?.message}
          </span>
        )}
        <textarea placeholder="Deixe sua mensagem" {...register('coments')} />
        <Button variant="primary" className="hover:bg-slate-950 ">
          Enviar
        </Button>
      </form>
    </>
  )
}
