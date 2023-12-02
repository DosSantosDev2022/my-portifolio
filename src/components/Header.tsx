import Button from './Button'

export default function Header() {
  return (
    <section className="w-full h-screen  bg-white flex items-center  ">
      <div className="flex flex-col gap-3 items-start justify-center py-8 px-4 w-[650px] ">
        <h1 className="text-slate-900 font-extrabold text-5xl">
          Eu sou Juliano Santos FullStack Developer
        </h1>
        <p className="text-slate-500 font-normal text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Button className="w-[115px] h-[48px] " variant="primary">
          HIRE ME
        </Button>
      </div>
    </section>
  )
}
