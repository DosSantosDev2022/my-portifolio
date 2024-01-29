'use client'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

interface ModalImageProps {
  coverImage: string
  img01: string
  img02: string
  img03: string
}

export function ModalImage({
  coverImage,
  img01,
  img02,
  img03,
}: ModalImageProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          className="w-full rounded-md border duration-500 hover:opacity-70 lg:h-[410px]"
          alt="Imagem de capa do projeto DashFreela"
          src={coverImage}
          width={500}
          height={500}
          quality={100}
        />
      </DialogTrigger>
      <DialogContent>
        {/*  <DialogTitle>{projectName} </DialogTitle> */}
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                className="w-full rounded-md lg:h-[480px] "
                alt=""
                src={img01}
                width={500}
                height={500}
                quality={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full rounded-md lg:h-[480px] "
                alt=""
                src={img02}
                width={500}
                height={500}
                quality={100}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full rounded-md lg:h-[480px] "
                alt=""
                src={img03}
                width={500}
                height={500}
                quality={100}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
