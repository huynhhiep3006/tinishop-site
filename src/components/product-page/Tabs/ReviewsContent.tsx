import React, { ReactNode } from "react";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ReviewsContent = ({ content }: { content: ReactNode }) => {
  return (
    <section>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 mb-10 sm:mb-9">
        <div className="flex items-center mb-2 sm:mb-3">
                <strong className="text-black sm:text-xl mr-1">Detail of product</strong>
                <IoIosCheckmarkCircle className="text-[#01AB31] text-xl sm:text-2xl" />
              </div>
              <p className="text-sm sm:text-base text-black/60">{content}</p>
      </div>
      
    </section>
  );
};

export default ReviewsContent;
