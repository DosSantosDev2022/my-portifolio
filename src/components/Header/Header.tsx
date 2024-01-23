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
    <header className="flex items-center justify-between w-full  bg-zinc-950 lg:h-[95px] lg:px-16 px-8 border-b-[1px] border-zinc-500 lg:fixed top-0 left-0 z-[1000] ">
      <div className="flex flex-col lg:flex-row items-center w-full justify-between p-5 lg:p-0">
        <div className="flex items-center gap-28">
          <h1 className="text-slate-50 text-2xl font-bold">DosSantosDev</h1>
          <Button onClick={toggleMenu} className="lg:hidden">
            <HiBars3BottomRight />
          </Button>
        </div>

        <div
          className={`lg:flex flex-col lg:flex-row items-center gap-5 mt-10 lg:mt-0  ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <NavMenu />
          <div className="flex items-center justify-center gap-4 ">
            <Link
              className="text-zinc-50 text-3xl hover:text-violet-800 duration-500 transition-all"
              target="_blank"
              href={'https://github.com/DosSantosDev2022'}
            >
              <FaGithub />
            </Link>

            <Link
              className="text-zinc-50 text-3xl hover:text-violet-800 duration-500 transition-all"
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
