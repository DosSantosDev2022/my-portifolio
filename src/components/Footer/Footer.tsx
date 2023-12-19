import Link from 'next/link'
import { FormFooter } from '@/components/Footer/formFooter'
import { NavFooter } from '@/components/Footer/navFooter'

export function FooterPageLayout() {
  return (
    <>
      <footer className="bg-zinc-950 lg:px-16 px-8 py-20 flex flex-col gap-20">
        <div className="w-full flex flex-col lg:flex-row items-start justify-around gap-32">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h1 className="text-slate-50 text-4xl font-bold">DosSantosDev</h1>
            <p className="text-zinc-100 text-sm font-light">
              Cadastre-se em nosso newsletter para se manter atualizado sobre
              recursos e lançamentos.
            </p>
            <FormFooter />
            <p className="text-zinc-100 text-xs font-light">
              Ao se inscrever, você concorda com nossa Política de Privacidade e
              consente em receber atualizações de nossa empresa.
            </p>
          </div>
          <NavFooter />
        </div>
        <div className="border-t border-zinc-300 w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between p-2 gap-4 mt-8">
            <p className="text-zinc-100 font-light text-sm">
              © 2023 DosSantosDev. All rights reserved.
            </p>
            <ul className="flex flex-col lg:flex-row items-start justify-center gap-4">
              <li>
                <Link
                  className="text-zinc-100 font-extralight text-xs hover:underline transition-all"
                  href={''}
                >
                  Política de privacida
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-100 font-extralight text-xs hover:underline transition-all"
                  href={''}
                >
                  Termos de serviços
                </Link>
              </li>
              <li>
                <Link
                  className="text-zinc-100 font-extralight text-xs hover:underline transition-all"
                  href={''}
                >
                  Configurações de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
