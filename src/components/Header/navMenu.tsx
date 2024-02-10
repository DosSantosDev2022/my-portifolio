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
      <NavigationMenu.List className="flex flex-col items-center gap-10 lg:flex-row">
        {links.map((link) => (
          <NavigationMenu.Item
            key={link.name}
            className="rounded-sm p-1 text-sm font-light text-zinc-50 transition-all duration-300 hover:bg-violet-900"
          >
            <Link className="text-xl lg:text-base" href={link.Url}>
              {link.name}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
