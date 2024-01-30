'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type AnimateLinkProps = ComponentProps<typeof motion.a> & {
  className: string
}

export function AnimateLink({ className, ...props }: AnimateLinkProps) {
  return (
    <>
      <motion.a {...props} className={className}></motion.a>
    </>
  )
}
