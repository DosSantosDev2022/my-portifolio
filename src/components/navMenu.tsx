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
      <NavigationMenu.List className="flex flex-col lg:flex-row items-center gap-10">
        {links.map((link) => (
          <NavigationMenu.Item
            key={link.name}
            className="text-zinc-50 font-light text-sm hover:bg-violet-900 p-1 rounded-sm transition-all duration-300"
          >
            <Link href={link.Url}>{link.name}</Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
