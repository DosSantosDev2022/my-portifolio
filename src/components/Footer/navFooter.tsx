'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import Link from 'next/link'

export function NavFooter() {
  const navigation = [
    { title: 'Link 01', linkName: 'Home', url: '/' },
    { title: 'Link 01', linkName: 'Sobre mim', url: '/' },
    { title: 'Link 01', linkName: 'Projetos', url: '/' },
    { title: 'Link 01', linkName: 'Contato', url: '/' },
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
    <div className="flex flex-col lg:flex-row  items-start gap-10 w-full ">
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item className="flex flex-col gap-4">
            <h4 className="text-zinc-50 font-bold text-2xl">Navegação</h4>
            {navigation.map((link) => (
              <Link
                href={link.linkName}
                key={link.linkName}
                className="text-zinc-50 font-light text-xl hover:underline transition-all"
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
            <h4 className="text-zinc-50 font-bold text-2xl">Serviços</h4>
            {Services.map((link) => (
              <Link
                href={link.linkName}
                key={link.linkName}
                className="text-zinc-50 font-light text-xl hover:underline transition-all"
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
            <h4 className="text-zinc-50 font-bold text-2xl">Sociais</h4>
            {Social.map((link) => (
              <Link
                href={link.linkName}
                key={link.linkName}
                className="text-zinc-50 font-light text-xl hover:underline transition-all"
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
