import { Form } from '@/components/Forms/Form'
import { AnimateDiv } from '@/components/animate/animateDiv'
import { FaSquarePhone } from 'react-icons/fa6'
import { HiMiniMapPin } from 'react-icons/hi2'
import { MdEmail } from 'react-icons/md'

export default function ContactPage() {
  return (
    <section className="flex h-screen items-center justify-center px-28">
      <div className="flex w-full items-start justify-between">
        <AnimateDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full space-y-2"
        >
          <h4 className="text-5xl font-extrabold text-zinc-50">
            Entre em contato
          </h4>
          <p className="text-xl  font-medium text-violet-900">
            Vamos fechar uma parceria ?
          </p>
          <div className="flex flex-col items-start justify-center gap-2">
            <span className="flex items-center gap-2 text-lg font-light text-zinc-50">
              <MdEmail /> dossantosdevoficial@gmail.com
            </span>
            <span className="flex items-center  gap-2 text-lg font-light text-zinc-50">
              <FaSquarePhone /> +55 11 91645-3897
            </span>
            <span className="flex items-center  gap-2 text-lg font-light text-zinc-50">
              <HiMiniMapPin /> Itupeva - SP
            </span>
          </div>
        </AnimateDiv>
        <Form />
      </div>
    </section>
  )
}
