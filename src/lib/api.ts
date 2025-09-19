const baseURL = "https://woo.dealoria.store/wp-json/wc/v3";
const consumer_key = "ck_31b802bb67ceb3f1987b40ff8739a291d7a9bebc";
const consumer_secret = "cs_097f8ff05cd3a547057877c537451e7ae44a99dd";
import { Product } from "@/types/product.types";
export async function getNewArrivals(page = 1, perPage = 10, key = ""): Promise<{ products: Product[]; totalPages: number }> {
  const url = `${baseURL}/products?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&page=${page}&per_page=${perPage}&status=publish${key}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const products = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1");
  // Map WooCommerce product -> Product[]
  const data = products.map((product: any) => ({
    id: product.slug,
    title: product.name,
    srcUrl: product.images?.[0]?.src || "/images/placeholder.png",
    gallery: product.images?.map((img: any) => img.src) || ["/images/placeholder.png"],
    price: parseFloat(product.price),
    discount: {
      amount: product.regular_price - product.price,
      percentage:
        product.regular_price > 0
          ? Math.round(((product.regular_price - product.price) / product.regular_price) * 100)
          : 0,
    },
    rating: parseFloat(product.average_rating || "0"),
  }));
  //console.log(data);
  return {
    products: data,
    totalPages,
  };
}
