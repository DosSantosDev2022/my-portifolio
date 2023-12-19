'use client'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

export function Slider() {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full h-56 sm:h-64 xl:h-[468px] 2xl:h-96 ">
        <Carousel>
          <Image
            src={
              'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt=""
            width={1000}
            height={1000}
            quality={100}
          />
          <Image
            src={
              'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt=""
            width={1000}
            height={1000}
            quality={100}
          />
          <Image
            src={
              'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt=""
            width={1000}
            height={1000}
            quality={100}
          />
        </Carousel>
      </div>
    </div>
  )
}
