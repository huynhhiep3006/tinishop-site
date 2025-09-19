const baseURL = "https://woo.dealoria.store/wp-json/wc/v3";
const consumer_key = "ck_31b802bb67ceb3f1987b40ff8739a291d7a9bebc";
const consumer_secret = "cs_097f8ff05cd3a547057877c537451e7ae44a99dd";

interface Product {
  id: number;
  title: string;
  srcUrl: string;
  gallery: string[];
  price: number;
  discount: {
    amount: number;
    percentage: number;
  };
  rating: number;
  related?: Product[];
}

async function fetchProductsByIds(ids: number[]): Promise<Product[]> {
  if (!ids || ids.length === 0) return [];

  const url = `${baseURL}/products?include=${ids.join(
    ","
  )}&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const products = await res.json();

  return products.map((product: any) => ({
    id: product.slug,
    title: product.name,
    srcUrl: product.images?.[0]?.src || "/images/placeholder.png",
    gallery:
      product.images?.map((img: any) => img.src) || ["/images/placeholder.png"],
    price: parseFloat(product.price),
    discount: {
      amount: product.regular_price - product.price,
      percentage:
        product.regular_price > 0
          ? Math.round(
              ((product.regular_price - product.price) /
                product.regular_price) *
                100
            )
          : 0,
    },
    rating: parseFloat(product.average_rating || "0"),
  }));
}

export async function getRelated(): Promise<Product[]> {
  const url = `${baseURL}/products?per_page=10&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const products = await res.json();

  const data: Product[] = await Promise.all(
    products.map(async (product: any) => {
      // Lấy danh sách related_ids
      const relatedIds: number[] = product.related_ids || [];

      // Fetch thông tin sản phẩm liên quan
      const relatedProducts = await fetchProductsByIds(relatedIds);

      return {
        id: product.slug,
        title: product.name,
        srcUrl: product.images?.[0]?.src || "/images/placeholder.png",
        gallery:
          product.images?.map((img: any) => img.src) || [
            "/images/placeholder.png",
          ],
        price: parseFloat(product.price),
        discount: {
          amount: product.regular_price - product.price,
          percentage:
            product.regular_price > 0
              ? Math.round(
                  ((product.regular_price - product.price) /
                    product.regular_price) *
                    100
                )
              : 0,
        },
        rating: parseFloat(product.average_rating || "0"),
        related: relatedProducts,
      };
    })
  );

  return data;
}
export async function getRelatedByIds(relatedIds: number[]): Promise<Product[]> {
  if (!relatedIds || relatedIds.length === 0) return [];

  const url = `${baseURL}/products?include=${relatedIds.join(",")}&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const products = await res.json();

  const data: Product[] = products.map((product: any) => ({
    id: product.slug,
    title: product.name,
    srcUrl: product.images?.[0]?.src || "/images/placeholder.png",
    gallery:
      product.images?.map((img: any) => img.src) || [
        "/images/placeholder.png",
      ],
    price: parseFloat(product.price),
    discount: {
      amount: product.regular_price - product.price,
      percentage:
        product.regular_price > 0
          ? Math.round(
              ((product.regular_price - product.price) /
                product.regular_price) *
                100
            )
          : 0,
    },
    rating: parseFloat(product.average_rating || "0"),
  }));

  return data;
}
