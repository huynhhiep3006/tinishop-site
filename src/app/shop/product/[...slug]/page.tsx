"use client";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { ProductFull, Product } from "@/types/product.types";
import { notFound } from "next/navigation";
import { getProductById } from '@/lib/getproduct';
import { getRelatedByIds } from '@/lib/related';
import { useEffect, useState } from 'react';
import he from 'he';

export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [productfull, setProduct] = useState<ProductFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
 
  useEffect(() => {
    const id = params.slug?.[0]; // Lấy ID từ slug
    if (!id) {
      setError("ID không hợp lệ.");
      return;
    }
    
    getProductById(id)
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]); // ✅ Chỉ lấy phần tử đầu tiên
        } else {
          setError("Không tìm thấy sản phẩm.");
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Không thể tải dữ liệu sản phẩm.");
        console.error(err);
        setLoading(false);
      });
  }, [params.slug]);

  useEffect(() => {
    if (!productfull || !productfull.related_ids?.length) return;

    getRelatedByIds(productfull.related_ids)
      .then(setRelatedProducts)
      .catch((err) => {
        console.error("❌ Lỗi khi load sản phẩm liên quan:", err);
      });
  }, [productfull]);

  if (loading) return <p className="text-center py-10">⏳ Đang tải dữ liệu...</p>;
  if (error || !productfull) return <p className="text-center py-10 text-red-500">{error ?? "Không tìm thấy sản phẩm."}</p>;

  console.log("✅ productfull data:", productfull);

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productfull.name ?? "product"} />
        <section className="mb-11">
          <Header data={productfull} />
        </section>
        <Tabs content={<div dangerouslySetInnerHTML={{ __html: he.decode(productfull.description) }} />} />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProducts} />
      </div>
    </main>
  );
}
