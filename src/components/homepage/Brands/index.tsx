import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "Cozy",
    srcUrl: "/icons/cozy.png",
  },
  {
    id: "Christmas",
    srcUrl: "/icons/Christmas.png",
  },
  {
    id: "Halloween",
    srcUrl: "/icons/Halloween.png",
  },
  {
    id: "Carnival",
    srcUrl: "/icons/Carnival.png",
  },
  {
    id: "Best Seller",
    srcUrl: "/icons/Best Seller.png",
  },
];

const Brands = () => {
  return (
    <div className="bg-cream">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={200}
            width={200}
            alt={brand.id}
            className="h-auto w-auto max-w-[200px] lg:max-w-48 max-h-[200px] lg:max-h-90 my-5 md:my-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
