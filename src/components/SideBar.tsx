import Image from 'next/image'
import {
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa6'

import Link from 'next/link'
import ModalContact from './Modal'

export function SideBar() {
  const links = [
    { name: 'Home', Url: '/' },
    { name: 'Sobre mim', Url: '/About' },
    { name: 'Contato', Url: '/Contact' },
    { name: 'Projetos', Url: '/Projects' },
  ]
  const socialLinks = [
    { Url: '/', icon: <FaSquareInstagram />, name: 'Instagram' },
    { Url: '/', icon: <FaSquareTwitter />, name: 'Twitter' },
    { Url: '/', icon: <FaLinkedin />, name: 'Linkedin' },
    { Url: '/', icon: <FaYoutube />, name: 'Youtube' },
    { Url: '/', icon: <FaWhatsapp />, name: 'Whatsapp' },
  ]

  return (
    <>
      <aside className="bg-slate-900 w-60 h-full fixed flex flex-col p-6 gap-4">
        <Image
          className="rounded-full"
          alt=""
          src={'/profile.png'}
          width={300}
          height={300}
          quality={100}
        />
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-slate-50 font-semibold text-lg">
              Juliano Santos
            </h1>
            <span className="text-slate-500 font-normal text-sm">
              FullStack Developer
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 ">
            {socialLinks.map((link) => (
              <Link
                className="text-slate-50 text-2xl hover:scale-105 transition-all"
                key={link.name}
                href={link.Url}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-slate-950 w-full h-1" />

        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              className="bg-slate-50 rounded-md p-1 text-slate-900 font-normal text-sm tracking-wide hover:bg-slate-200 transition-all"
              key={link.name}
              href={link.Url}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="bg-slate-950 w-full h-1" />
        <ModalContact />
      </aside>
    </>
  )
}
