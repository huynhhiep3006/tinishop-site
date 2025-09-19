import React from "react";
import PhotoSection from "./PhotoSection";
import { ProductFull } from "@/types/product.types";
import { josefinsans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";
import { useAppSelector } from "@/lib/hooks/redux";
const Header = ({ data }: { data: ProductFull }) => {
  console.log(data);
    const { sizeSelection, price } = useAppSelector(
    (state) => state.products
  );  // Lấy giá và lựa chọn từ Redux store
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <PhotoSection data={data} />
        </div>
        <div>
          <h1
            className={cn([
              josefinsans.className,
              "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
            ])}
          >
            {data.name}
          </h1>
          <div className="flex items-center mb-3 sm:mb-3.5">
            <Rating
              initialValue={Number(data.average_rating)}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={25}
              readonly
            />
            <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
              {Number(data.average_rating).toFixed(1)}
              <span className="text-black/60">/5</span>
            </span>
          </div>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            {Number(data.sale_price) > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ${Number(data.price)}
              </span>
            ) : Number(data.sale_price) > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${Number(data.price) - Number(data.sale_price)}`}
              </span>
            ) : (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ${Number(data.regular_price)*price}
              </span>
            )}
            {Number(data.price) > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${Number(data.regular_price)*price}
              </span>
            )}
            {/* {Number(data.price) > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${data.price}
              </span>
            )} */}
            {Number(data.price) > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                {`-${100 - ((Number(data.price) * 100) / Number(data.regular_price))}%`}
              </span>
            ) : (
              Number(data.price) > 0 && (
                <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                  {`-$${Number(data.price)}`}
                </span>
              )
            )}
          </div>
          <div
            className="text-sm sm:text-base text-black/60 mb-5"
            dangerouslySetInnerHTML={{ __html: data.short_description }}
          />
          <hr className="h-[1px] border-t-black/10 mb-5" />
          {/* <ColorSelection /><hr className="h-[1px] border-t-black/10 my-5" /> */}
          
          <SizeSelection />
          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
          <AddToCardSection data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
