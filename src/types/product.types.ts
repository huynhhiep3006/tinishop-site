export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
};
export type ProductFull = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  download_limit: number;
  download_expiry: number;
  downloads: {
    id: string;
    name: string;
    file: string;
  }[];
  images: {
    id: number;
    src: string;
    name: string;
    alt: string;
  }[];
  stock_status: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  backorders: string;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  sku: string;
  tags: any[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  meta_data: {
    id: number;
    key: string;
    value: any;
  }[];
  related_ids: number[];
};

