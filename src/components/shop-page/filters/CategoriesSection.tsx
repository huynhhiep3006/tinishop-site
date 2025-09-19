import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "Animals",
    slug: "/shop?category=26",
  },
  {
    title: "Halloween",
    slug: "/shop?category=27",
  },
  {
    title: "Christmas",
    slug: "/shop?category=28",
  },
  {
    title: "Cozy",
    slug: "/shop?category=29",
  },
  {
    title: "Carnival",
    slug: "/shop?category=30",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
