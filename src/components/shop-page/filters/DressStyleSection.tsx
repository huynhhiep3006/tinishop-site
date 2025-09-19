import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type DressStyle = {
  title: string;
  slug: string;
};

const dressStylesData: DressStyle[] = [
  {
    title: "New arrivals",
    slug: "/shop?category=32",
  },
  {
    title: "Bestsellers",
    slug: "/shop?category=31",
  },
  {
    title: "Discount",
    slug: "/shop?category=33",
  }
];

const DressStyleSection = () => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
         Recomended
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col text-black/60 space-y-0.5">
            {dressStylesData.map((dStyle, idx) => (
              <Link
                key={idx}
                href={dStyle.slug}
                className="flex items-center justify-between py-2"
              >
                {dStyle.title} <MdKeyboardArrowRight />
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DressStyleSection;
