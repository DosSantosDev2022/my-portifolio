import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

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
      <body className="scrollbar scrollbar-thumb-slate-900 bg-slate-900">
        <Header />
        {children}
      </body>
    </html>
  )
}
