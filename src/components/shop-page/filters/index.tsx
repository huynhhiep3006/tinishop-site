"use client"
import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
// import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Filters = () => {
  // State để lưu giá trị đã chọn
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<[number, number]>([0, 100]); // Example: price range
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedDressStyle, setSelectedDressStyle] = useState<string>("");
  const handleApplyFilter = () => {
    // Đây là nơi xử lý các giá trị lọc đã chọn
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Price Range:", selectedPrice);
    console.log("Selected Size:", selectedSize);
    console.log("Selected Dress Style:", selectedDressStyle);

    // Thực hiện gọi API với các tham số lọc (hoặc cập nhật UI)
    // Ví dụ: fetchProducts({ category: selectedCategory, price: selectedPrice, ... })
  };
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection 
        
        />
      <hr className="border-t-black/10" 
      
        />
      <PriceSection   
        selectedPrice={selectedPrice}
        onPriceChange={setSelectedPrice}
        />
      <hr className="border-t-black/10" />
      {/* <ColorsSection />
      <hr className="border-t-black/10" /> */}
      <SizeSection 
       selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="bg-pink w-full rounded-full text-sm font-medium py-4 h-12"
        onClick={handleApplyFilter}
      >
        Apply Filter
      </Button>
    </>
  );
};

export default Filters;
