import Link from 'next/link'
import { FormFooter } from '@/components/Footer/formFooter'
import { NavFooter } from '@/components/Footer/navFooter'

export function FooterPageLayout() {
  return (
    <>
      <footer className="flex flex-col gap-20 bg-zinc-950 px-6 py-20 lg:px-16">
        <div className="flex w-full flex-col items-start justify-around gap-32 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <h1 className="text-4xl font-bold text-slate-50">DosSantosDev</h1>
            <p className="text-sm font-light text-zinc-100">
              Cadastre-se em nosso newsletter para se manter atualizado sobre
              recursos e lançamentos.
            </p>
            <FormFooter />

            <p className="text-xs font-light text-zinc-100">
              Ao se inscrever, você concorda com nossa Política de Privacidade e
              consente em receber atualizações de nossa empresa.
            </p>
          </div>
          <NavFooter />
        </div>
        <div className="w-full border-t border-zinc-300">
          <div className="mt-8 flex flex-col items-start justify-between gap-4 p-2 lg:flex-row">
            <p className="text-sm font-light text-zinc-100">
              © 2023 DosSantosDev. All rights reserved.
            </p>
            <ul className="flex flex-col items-start justify-center gap-4 lg:flex-row">
              <li>
                <Link
                  className="text-xs font-extralight text-zinc-100 transition-all hover:underline"
                  href={''}
                >
                  Política de privacida
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs font-extralight text-zinc-100 transition-all hover:underline"
                  href={''}
                >
                  Termos de serviços
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs font-extralight text-zinc-100 transition-all hover:underline"
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
