"use client";

import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { ProductFull } from "@/types/product.types";
import React from "react";
import { Discount } from "@/types/product.types";
const AddToCartBtn = ({ data }: { data: ProductFull & { quantity: number } }) => {
  const dispatch = useAppDispatch();
  const { sizeSelection, colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );

  const handleAddToCart = () => {
    // Kiểm tra nếu size hoặc color chưa được chọn
    if (!sizeSelection || !colorSelection) {
      alert("Please select size and color before adding to cart.");
      return;  // Dừng việc thêm vào giỏ nếu size hoặc color chưa được chọn
    }

    // Tiến hành dispatch để thêm sản phẩm vào giỏ
    dispatch(
      addToCart({
        id: data.id,
        name: data.name,
        srcUrl: data.images[0].src,
        price: Number(data.regular_price),
        attributes: [sizeSelection, colorSelection.name],
        discount: {
          amount: Number(data.regular_price) - Number(data.price),
          percentage: Math.round(
            ((Number(data.regular_price) - Number(data.price)) /
              Number(data.regular_price)) *
              100
          ) || 0,
        },
        quantity: data.quantity,
      })
    );
    console.log("Product quantity:", data.quantity);
  };
  
  return (
    <button
      type="button"
      className="bg-pink w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-pink/80 transition-all"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;

