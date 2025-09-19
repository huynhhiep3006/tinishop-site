import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

interface PriceSectionProps {
  selectedPrice: [number, number];  // Chọn phạm vi giá (ví dụ: [0, 100])
  onPriceChange: (price: [number, number]) => void;  // Hàm cập nhật giá
}

const PriceSection: React.FC<PriceSectionProps> = ({ selectedPrice, onPriceChange }) => {
  const handlePriceChange = (value: number[]) => {
    if (value.length === 2) {
      onPriceChange([value[0], value[1]]);  // Cập nhật giá trị
    }
  };

  return (
    <Accordion type="single" collapsible defaultValue="filter-price">
      <AccordionItem value="filter-price" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Price
        </AccordionTrigger>
        <AccordionContent className="pt-4" contentClassName="overflow-visible">
          {/* Slider */}
          <Slider
            value={selectedPrice} // Truyền giá trị hiện tại vào Slider
            onValueChange={handlePriceChange} // Cập nhật giá trị khi thay đổi
            min={0}
            max={250}
            step={1}
            label="$"
          />

          {/* Hiển thị giá trị dưới slider */}
          <div className="mt-2 flex justify-between">
            <span>{`$${selectedPrice[0]}`}</span>
            <span>{`$${selectedPrice[1]}`}</span>
          </div>

          <div className="mb-3" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriceSection;
