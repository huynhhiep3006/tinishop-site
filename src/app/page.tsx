import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import { getNewArrivals } from '@/lib/api';
import { getProductBy } from '@/lib/productBy';








export default async  function Home() {
  const { products: newArrivalsData } = await getNewArrivals(1,9);
  const getproductby: Product[] = await getProductBy("&orderby=popularity&order=desc");
  //console.log("Data: ",newArrivalsData);
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop?category=32"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="Top selling"
            data={getproductby}
            viewAllLink="/shop?category=31"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        {/* <Reviews data={reviewsData} /> */}
      </main>
    </>
  );
}
