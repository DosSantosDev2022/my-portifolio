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
  slug: string
}

export function ProjectCards({
  coverImage,
  description,
  title,
  slug,
}: ProjectCardsProps) {
  return (
    <Card className="h-[27rem] w-full  space-y-2 overflow-hidden rounded-md  shadow-md lg:w-[21rem] ">
      <CardHeader>
        <Image
          className=" w-full rounded-sm"
          alt="Imagem descritiva do projeto"
          src={coverImage}
          width={250}
          height={250}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter className="flex items-center">
          <Link
            className="rounded-md bg-violet-900 p-2 text-sm text-zinc-50 transition-all duration-500 hover:bg-violet-700"
            href={`/Project/${slug}`}
          >
            Ver mais
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
