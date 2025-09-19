// GetProduct.ts
import axios from 'axios';
const API_BASE = "https://woo.dealoria.store/wp-json/wc/v3";
const CONSUMER_KEY = "ck_31b802bb67ceb3f1987b40ff8739a291d7a9bebc";
const CONSUMER_SECRET = "cs_097f8ff05cd3a547057877c537451e7ae44a99dd";


export async function getProductById(productId: number) {
  try {
    const response = await axios.get(`${API_BASE}/products/${productId}`, {
      params: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
      },
    });

    return response.data; // dữ liệu sản phẩm
  } catch (error: any) {
    console.error('Failed to fetch product:', error.response?.data || error.message);
    throw error;
  }
}
