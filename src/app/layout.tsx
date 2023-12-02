import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SideBar } from '@/components/SideBar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'DosSantosDev',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className} lang="pt-br">
      <body className="scrollbar scrollbar-thumb-slate-900">
        <div className="flex flex-row overflow-hidden">
          <SideBar />

          <div className="flex-1 p-4 min-h-0 overflow-auto ml-[250px]  ">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
