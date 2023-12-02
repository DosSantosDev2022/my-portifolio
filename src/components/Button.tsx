'use client'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'outlined' | 'danger'
}

export default function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      'bg-slate-900 text-slate-50 hover:bg-slate-950 hover:scale-105 transition-all',
    outlined: 'bg-transparent border-2 border-white text-slate-900',
    danger:
      'text-red-500 border-red-500 border hover:bg-red-600 bg-transparent ',
  }

  const _className = twMerge(
    variantClasses[variant],
    'appearance-none rounded-lg p-2 text-md font-bold shadow hover:scale-105 transition-all',
    className,
  )

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  )
}
