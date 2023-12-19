import { Slider } from './slider'

export function SectionOne() {
  return (
    <section className="py-28">
      <div className="flex items-center  justify-center  p-2 mb-6">
        <div className="flex  flex-col items-center justify-center gap-6 text-center w-[796px] ">
          <h2 className="text-2xl lg:text-5xl font-semibold text-zinc-50">
            Soluções Sob Medida e personalizando experiências para seu sucesso
            digital.
          </h2>
          <p className="text-zinc-100 font-normal text-md lg:text-lg">
            Highlight the Unique Selling Proposition (USP) with a short summary
            of the main feature and how it benefits customers. The idea here is
            to keep it short and direct. If the visitor wishes to learn more
            they will hit the button.
          </p>
        </div>
      </div>
      <Slider />
    </section>
  )
}
