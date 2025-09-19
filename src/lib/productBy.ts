import {Product} from "@/types/product.types"
const baseURL = "https://woo.dealoria.store/wp-json/wc/v3";
const consumer_key = "ck_31b802bb67ceb3f1987b40ff8739a291d7a9bebc";
const consumer_secret = "cs_097f8ff05cd3a547057877c537451e7ae44a99dd";

export async function getProductBy(condition: string): Promise<Product[]> {
  const url = `${baseURL}/products?per_page=10&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}&status=publish${condition}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const products = await res.json();

  // Map WooCommerce product -> Product[]
  const data = products.map((product: any) => ({
    id: product.id,
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

  return data;
}
