'use client'

import Button from '@/components/Buttons/Button'
import { NavMenu } from '@/components/Header/navMenu'
import { HiBars3BottomRight } from 'react-icons/hi2'

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export function Header() {
  return (
    <header className="left-0 top-0 z-[1000] flex  w-full items-center justify-between border-b-[1px] border-zinc-500 bg-zinc-950 px-8 lg:fixed lg:h-[95px] lg:px-16 ">
      <div className="flex w-full flex-col items-center justify-between p-5 lg:flex-row lg:p-0">
        <div className="flex items-center gap-28">
          <h1 className="text-2xl font-bold text-slate-50">DosSantosDev</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden">
                <HiBars3BottomRight />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-zinc-950">
              <NavMenu />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex">
          <NavMenu />
        </div>
      </div>
    </header>
  )
}
