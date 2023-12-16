'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
export function NavMenu() {
  const links = [
    { name: 'Home', Url: '/' },
    { name: 'Sobre mim', Url: '/About' },
    { name: 'Contato', Url: '/Contact' },
    { name: 'Projetos', Url: '/Projects' },
  ]

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-col gap-2">
        {links.map((link) => (
          <NavigationMenu.Item
            key={link.name}
            className="rounded-md p-1 text-slate-50 font-normal text-sm tracking-wide hover:scale-105 transition-all cursor-pointer"
          >
            <Link href={link.Url}>{link.name}</Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
