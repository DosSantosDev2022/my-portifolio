import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardsProps {
  title: string
  description: string
  coverImage: string
}

export function ProjectCards({
  coverImage,
  description,
  title,
}: ProjectCardsProps) {
  return (
    <Card className="lg:w-[380px] w-full">
      <CardHeader>
        <Image
          className=" w-full"
          alt="Imagem descritiva do projeto"
          src={coverImage}
          width={250}
          height={250}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          className="bg-violet-900 p-2 rounded-md text-sm text-zinc-50 hover:bg-violet-800 transition-all"
          href={'/Projects'}
        >
          Ver mais
        </Link>
      </CardFooter>
    </Card>
  )
}
