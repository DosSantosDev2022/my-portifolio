'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import Link from 'next/link'

export function NavFooter() {
  const navigation = [
    { title: 'Link 01', linkName: 'Home', url: '/' },
    { title: 'Link 01', linkName: 'Sobre mim', url: '/About' },
    { title: 'Link 01', linkName: 'Projetos', url: '/Projects' },
    { title: 'Link 01', linkName: 'Contato', url: '/Contact' },
  ]
  const Services = [
    { title: 'Link 01', linkName: 'Web developer', url: '/' },
    { title: 'Link 01', linkName: 'Desing System', url: '/' },
    { title: 'Link 01', linkName: 'Mobile developer', url: '/' },
    { title: 'Link 01', linkName: 'Performance', url: '/' },
  ]
  const Social = [
    { title: 'Link 01', linkName: 'Linkedin', url: '/' },
    { title: 'Link 01', linkName: 'Instagram', url: '/' },
    { title: 'Link 01', linkName: 'Facebook', url: '/' },
    { title: 'Link 01', linkName: 'Twitter', url: '/' },
  ]
  return (
    <div className="flex w-full flex-col  items-start gap-10 lg:flex-row ">
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-zinc-50">Navegação</h4>
            {navigation.map((link) => (
              <Link
                href={link.url}
                key={link.linkName}
                className="text-xl font-light text-zinc-50 transition-all hover:underline"
              >
                {link.linkName}
              </Link>
            ))}
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-zinc-50">Serviços</h4>
            {Services.map((link) => (
              <Link
                href={link.url}
                key={link.linkName}
                className="text-xl font-light text-zinc-50 transition-all hover:underline"
              >
                {link.linkName}
              </Link>
            ))}
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-zinc-50">Sociais</h4>
            {Social.map((link) => (
              <Link
                href={link.linkName}
                key={link.linkName}
                className="text-xl font-light text-zinc-50 transition-all hover:underline"
              >
                {link.linkName}
              </Link>
            ))}
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  )
}
