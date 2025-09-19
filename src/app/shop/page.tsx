import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import { getNewArrivals } from '@/lib/api';
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import ShopPageClient from "@/components/common/ShopPageClient"; 
import { Product } from "@/types/product.types";

export default async function ShopPage({ searchParams }: { searchParams: { page?: string, category?: string, search?:string } }) {
  const currentPage = Number(searchParams.page) || 1;
  const perPage = 9;
  const condition = searchParams.category ? ("&category="+searchParams.category) : "";
  const search = searchParams.search ? ("&search="+searchParams.search) : "";
  const { products, totalPages } = await getNewArrivals(currentPage, perPage, condition+search);
  
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <ShopPageClient products={products} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </main>
  );
}
