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
  return (
    <div className="w-full">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="text-zinc-50" />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink className="text-zinc-50" href="Projects/1">
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis className="text-zinc-50" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="text-zinc-50" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
