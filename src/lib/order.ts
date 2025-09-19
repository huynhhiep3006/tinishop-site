
const baseURL = "https://woo.dealoria.store/wp-json/wc/v3";
const consumer_key = "ck_31b802bb67ceb3f1987b40ff8739a291d7a9bebc";
const consumer_secret = "cs_097f8ff05cd3a547057877c537451e7ae44a99dd";

interface Product {
  product_id: number;
  quantity: number;
  price: number;
}

interface OrderData {
  line_items: Array<{ product_id: number; quantity: number }>;
  billing: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    postcode: string;
    email: string;
    phone: string;
  };
  payment_method: string;
  set_paid: boolean;
}

// Helper function to fetch the products from sessionStorage
export const fetchCartFromSession = (): Product[] => {
 const persistRoot = sessionStorage.getItem('persist:root');
if (persistRoot) {
  const parsedData = JSON.parse(persistRoot);  // Parse dữ liệu 'persist:root'
  
  // Lấy giá trị của trường 'carts' (một chuỗi JSON)
  const cartsData = JSON.parse(parsedData.carts);  // Parse dữ liệu 'carts'

  // Giỏ hàng đã được lưu trong 'cartsData.cart'
  console.log(cartsData.cart);  // Đây là giỏ hàng của bạn
   return cartsData.cart;
} else {
   return [];
}
 
};

// Helper function to submit the order to WooCommerce API
export const createOrder = async (orderData: OrderData) => {
  const url = `${baseURL}/orders?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
