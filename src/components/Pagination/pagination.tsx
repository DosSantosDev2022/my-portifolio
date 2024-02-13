'use client'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function PaginationComponent() {
  const pageItens = [
    {
      pageNumber: '1',
      pageLink: '/',
    },
    {
      pageNumber: '3',
      pageLink: '/',
    },
    {
      pageNumber: '4',
      pageLink: '/',
    },
    {
      pageNumber: '5',
      pageLink: '/',
    },
  ]
  return (
    <div className="w-full">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
            />
          </PaginationItem>
          {pageItens.map((page) => (
            <PaginationItem key={page.pageNumber}>
              <PaginationLink
                className="text-zinc-50 duration-500 hover:bg-zinc-900 hover:text-zinc-50"
                href={page.pageLink}
              >
                {page.pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis className="text-zinc-50 " />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
