"use client"
import { useEffect, useState } from "react";
import { fetchCartFromSession, createOrder } from "@/lib/order";
import PaymentModal from "@/components/cart-page/PaymentModal"; // Import PaymentModal
interface BillingInfo {
  first_name: string;
  last_name: string;
  address_1: string;
  city: string;
  postcode: string;
  email: string;
  phone: string;
}
interface PaymentDetails {
  paymentMethod: string;
  billing: BillingInfo;
}
const Checkout = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false); // Điều khiển việc hiển thị form thanh toán
  const [cartData, setCartData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  useEffect(() => {
    // Giả sử dữ liệu giỏ hàng được lưu trong sessionStorage
    const storedCart = JSON.parse(sessionStorage.getItem("persist:root") || "{}");
    const cartItems = storedCart?.carts ? JSON.parse(storedCart.carts) : null;
    setCartData(cartItems);
  }, []);
  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    // Get persist data from session storage
    const persistRoot = sessionStorage.getItem('persist:root');
    if (!persistRoot) {
      setError("Your cart is empty.");
      setLoading(false);
      return;
    }

    // Parse the persist data and extract the cart data
    const parsedData = JSON.parse(persistRoot);

    // Check if cart data exists and is in correct format
    const cartData = parsedData.carts ? JSON.parse(parsedData.carts) : null;

    if (!cartData || !cartData.cart || !Array.isArray(cartData.cart.items) || cartData.cart.items.length === 0) {
      setError("Your cart is empty.");
      setLoading(false);
      return;
    }

    const cart = cartData.cart.items; // Get items from cart

    setShowPaymentForm(true);  // Khi bấm Checkout, hiện form thanh toán
    setLoading(false); // Close loading indicator after showing modal
  };
  const handlePayment = async (paymentDetails: PaymentDetails) => {
    // Kiểm tra xem sessionStorage có chứa dữ liệu hay không
    const storedCart = sessionStorage.getItem("persist:root");
    if (!storedCart) {
      console.error("No data found in sessionStorage.");
      setError("No data found in the cart.");
      setLoading(false);
      return;
    }
    console.log("paymentDetails: ", paymentDetails);
    try {
      // Parse dữ liệu từ sessionStorage và kiểm tra cấu trúc
      const parsedData = JSON.parse(storedCart);
      const cartItems = parsedData?.carts ? JSON.parse(parsedData.carts).cart.items : null;

      // Kiểm tra cartItems có hợp lệ không
      if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
        console.error("No valid cart items found or cartItems is not an array.");
        setError("No valid cart items found.");
        setLoading(false);
        return;
      }
   
      // Sử dụng map để tạo dữ liệu cho đơn hàng
      const orderData = {
        line_items: cartItems.map((item: { id: any; quantity: any; }) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
        billing: {
          first_name: paymentDetails.billing.first_name,
          last_name: paymentDetails.billing.last_name,
          address_1: paymentDetails.billing.address_1,
          city: paymentDetails.billing.city,
          postcode: paymentDetails.billing.postcode,
          email: paymentDetails.billing.email,
          phone: paymentDetails.billing.phone,
        },
        payment_method: "Stripe", // Ví dụ vẫn giữ Stripe là phương thức thanh toán
        set_paid: true,
      };
      console.log("orderData: ", orderData);

      // Gọi API để tạo đơn hàng
      const orderResponse = await createOrder(orderData);
      setOrderId(orderResponse.id);  // Lưu order ID để dùng cho xác nhận hoặc điều hướng
      setShowPaymentForm(false);
      setLoading(false);

    } catch (err) {
      console.error("Error during checkout", err);
      setError("There was an error processing your order.");
      setLoading(false);
    }
  };



  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-1">Complete your order</p>
        </div>
      </div>




      {!showPaymentForm && (
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
                <p className="text-gray-600 text-lg">Processing your order...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Checkout Button */}
            {!loading && !orderId && (
              <div className="text-center">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Ready to complete your purchase?
                  </h2>
                  <p className="text-gray-600">
                    Click the button below to proceed with your order
                  </p>
                </div>

                <button
                  onClick={handleCheckout}
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 min-w-[200px]"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 5H3m4 8v6a1 1 0 001 1h10a1 1 0 001-1v-6M9 19v2a1 1 0 001 1h4a1 1 0 001-1v-2" />
                  </svg>
                  Proceed to Checkout
                </button>
              </div>
            )}

            {/* Success State */}
            {orderId && (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Order Confirmed!
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Thank you for your purchase. Your order has been placed successfully.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 inline-block">
                    <p className="text-sm text-gray-500 mb-1">Order ID</p>
                    <p className="text-lg font-mono font-semibold text-gray-900">#{orderId}</p>
                  </div>
                </div>

                {/* <div className="space-y-3">
                <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  View Order Details
                </button>
                <br />
                <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Continue Shopping
                </button>
              </div> */}
              </div>
            )}
            {/* Payment Modal */}

          </div>

          {/* Payment Methods */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">We accept</p>
            <div className="flex justify-center items-center space-x-4">
              <img src="/icons/Visa.svg" alt="Visa" className="h-8 opacity-60" />
              <img src="/icons/mastercard.svg" alt="Mastercard" className="h-8 opacity-60" />
              <img src="/icons/paypal.svg" alt="PayPal" className="h-8 opacity-60" />
              <img src="/icons/applePay.svg" alt="Apple Pay" className="h-8 opacity-60" />
              <img src="/icons/googlePay.svg" alt="Google Pay" className="h-8 opacity-60" />
            </div>
          </div>
        </div>
      )}
      {showPaymentForm && (

        <PaymentModal
          handlePayment={handlePayment}
          cartData={cartData}
        />

      )
      }
    </div >
  );
};

export default Checkout;
