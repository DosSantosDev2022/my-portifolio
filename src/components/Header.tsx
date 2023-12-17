'use client'

import Link from 'next/link'
import Button from './Button'
import { NavMenu } from './navMenu'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="flex items-center justify-between w-full  bg-zinc-950 lg:h-[72px] lg:px-16 px-8 border-b-[1px] border-zinc-500 fixed ">
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
            <Button variant="primary">
              <Link
                target="_blank"
                href={'https://github.com/DosSantosDev2022'}
              >
                Github
              </Link>
            </Button>
            <Button variant="highlight">
              <Link
                target="_blank"
                href={'https://www.linkedin.com/in/juliano-santos-234bab257/'}
              >
                Linkedin
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
