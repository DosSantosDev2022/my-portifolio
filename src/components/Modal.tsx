'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { RxCrossCircled } from 'react-icons/rx'
import { MdEmail } from 'react-icons/md'
import { Form } from './Form'

export default function ModalContact() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className="bg-slate-50 text-slate-900 p-2 rounded-md flex items-center gap-2 transition-all duration-300 hover:scale-105">
          Entrar em contato
          <MdEmail />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 trasnsform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md bg-white p-3">
            <div className="flex flex-col gap-12 justify-center items-center w-[580px]  p-3">
              <header className="w-full flex items-center justify-between">
                <h6 className="text-slate-900 font-extrabold text-xl ">
                  Entre em contato comigo
                </h6>
                <Dialog.Close className="text-2xl text-slate-950 font-extrabold">
                  <RxCrossCircled />
                </Dialog.Close>
              </header>
              <Form />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
