import { Form } from '@/components/Forms/Form'
import { FaSquarePhone } from 'react-icons/fa6'
import { HiMiniMapPin } from 'react-icons/hi2'
import { MdEmail } from 'react-icons/md'

export default function ContactPage() {
  return (
    <section className="px-28 flex items-center justify-center h-screen">
      <div className="w-full flex items-start justify-between">
        <div className="w-full space-y-2">
          <h4 className="text-zinc-50 font-extrabold text-5xl">
            Entre em contato
          </h4>
          <p className="text-violet-900  font-medium- text-xl">
            Vamos fechar uma parceria ?
          </p>
          <div className="flex flex-col items-start justify-center gap-2">
            <span className="text-zinc-50 font-light text-lg flex items-center gap-2">
              <MdEmail /> dossantosdevoficial@gmail.com
            </span>
            <span className="text-zinc-50 font-light  text-lg flex items-center gap-2">
              <FaSquarePhone /> +55 11 91645-3897
            </span>
            <span className="text-zinc-50 font-light  text-lg flex items-center gap-2">
              <HiMiniMapPin /> Itupeva - SP
            </span>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}
