'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

import Button from '@/components/Buttons/Button'
import { NavMenu } from '@/components/Header/navMenu'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="left-0 top-0 z-[1000] flex  w-full items-center justify-between border-b-[1px] border-zinc-500 bg-zinc-950 px-8 lg:fixed lg:h-[95px] lg:px-16 ">
      <div className="flex w-full flex-col items-center justify-between p-5 lg:flex-row lg:p-0">
        <div className="flex items-center gap-28">
          <h1 className="text-2xl font-bold text-slate-50">DosSantosDev</h1>
          <Button onClick={toggleMenu} className="lg:hidden">
            <HiBars3BottomRight />
          </Button>
        </div>

        <div
          className={`mt-10 flex-col items-center gap-5 lg:mt-0 lg:flex lg:flex-row  ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <NavMenu />
          <div className="flex items-center justify-center gap-4 ">
            <Link
              className="text-3xl text-zinc-50 transition-all duration-500 hover:text-violet-800"
              target="_blank"
              href={'https://github.com/DosSantosDev2022'}
            >
              <FaGithub />
            </Link>

            <Link
              className="text-3xl text-zinc-50 transition-all duration-500 hover:text-violet-800"
              target="_blank"
              href={'https://www.linkedin.com/in/juliano-santos-234bab257/'}
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
