import Button from '@/components/Buttons/Button'

export function FormFooter() {
  return (
    <form className="flex w-full gap-2">
      <input
        type="text"
        placeholder="Digite seu melhor email"
        className='bg-zinc-200 appearance-none border-2 border-zinc-300 rounded w-full py-2 px-4 text-zinc-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
      />
      <Button variant="highlight">Cadastrar</Button>
    </form>
  )
}
