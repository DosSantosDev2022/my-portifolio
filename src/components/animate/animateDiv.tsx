'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type AnimateContainerProps = ComponentProps<typeof motion.div> & {
  className?: string
}

export function AnimateDiv({ className, ...props }: AnimateContainerProps) {
  return (
    <>
      <motion.div {...props} className={className}></motion.div>
    </>
  )
}
