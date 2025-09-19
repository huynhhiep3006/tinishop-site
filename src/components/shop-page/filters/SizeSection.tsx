"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
interface SizeSectionProps {
  selectedSize: string;  // Chọn phạm vi giá (ví dụ: [0, 100])
  onSizeChange: (size: string) => void;  // Hàm cập nhật giá
}

const SizeSection: React.FC<SizeSectionProps> = ({ selectedSize, onSizeChange }) => {
  const [selected, setSelected] = useState<string>("Digital");
  const handlePriceChange = (value: string) => {
    onSizeChange(value);  // Cập nhật giá trị
  };
  return (
    <Accordion type="single" collapsible defaultValue="filter-size">
      <AccordionItem value="filter-size" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Type
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex items-center flex-wrap">
            {[
              "Physical Books",
              "Digital",
            ].map((size, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  "bg-[#F0F0F0] m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px] width-100",
                  selected === size && "bg-pink font-medium text-white",
                ])}
                onClick={() => setSelected(size)}
           
              >
                {size}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SizeSection;
