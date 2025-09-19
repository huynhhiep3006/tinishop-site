"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/product.types";
import ProductCard from "@/components/common/ProductCard";

interface Props {
  products: Product[];
  totalPages: number;
}

export default function ShopPageClient({
  products = [],
  totalPages,

}: {
  products: Product[] | undefined;
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category");
  console.log(products);
  return (
    <>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {Array.isArray(products) && products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <hr className="border-t-black/10" />
      <Pagination className="justify-between">
        <PaginationPrevious
          href={`?page=${currentPage - 1}`}
          className={`border border-black/10 ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
        />

        <PaginationContent>
          {/* Luôn hiện trang 1 */}
          {currentPage > 3 && (
            <>
              <PaginationItem>
                <PaginationLink
                  href={`?page=1`}
                  className="text-black/50 font-medium text-sm"
                  isActive={currentPage === 1}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              {currentPage > 4 && (
                <PaginationItem>
                  <PaginationEllipsis className="text-black/50 font-medium text-sm" />
                </PaginationItem>
              )}
            </>
          )}

          {/* Vòng lặp chính – max 5 trang trung tâm */}
          {[...Array(5)].map((_, i) => {
            const page = currentPage - 2 + i;

            if ((page <= 1 && page !== currentPage) || page >= totalPages) return null;

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`?page=${page}`}
                  className={`text-black/50 font-medium text-sm ${page === currentPage ? "text-black" : ""}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Hiện trang cuối */}
          {currentPage < totalPages - 2 && (
            <>
              {currentPage < totalPages - 3 && (
                <PaginationItem>
                  <PaginationEllipsis className="text-black/50 font-medium text-sm" />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href={`?page=${totalPages}`}
                  className="text-black/50 font-medium text-sm"
                  isActive={currentPage === totalPages}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
        </PaginationContent>


        {currentPage < totalPages && (
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            className="border border-black/10"
          />
        )}
      </Pagination>
    </>
  );
}
