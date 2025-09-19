import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; // Import PayPal SDK
import { getProductById } from "@/lib/getproduct";

interface PaymentModalProps {
    handlePayment: (paymentDetails: any) => void;
    cartData: any;
}

const PaymentPage: React.FC<PaymentModalProps> = ({ handlePayment, cartData }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");
    const [downloadLink, setDownloadLink] = useState<string | null>(null);

    // Billing information
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");  // Shipping country

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleDownload = async (productId: number) => {
        try {
            const product = await getProductById(productId);

            if (product && product.downloadLink) {
                setDownloadLink(product.downloadLink);
                window.location.href = product.downloadLink;
            } else {
                alert("Download link for this product not found.");
            }
        } catch (error) {
            console.error("Error while downloading the product:", error);
            alert("An error occurred while downloading the product. Please try again.");
        }
    };

    const handleSubmit = () => {
        const paymentDetails = {
            paymentMethod: selectedPaymentMethod,
            billing: {
                first_name: firstName,
                last_name: lastName,
                address_1: address,
                city: city,
                postcode: postcode,
                email: email,
                phone: phone,
                country: selectedCountry,  // Include country in billing information
            },
        };

        handlePayment(paymentDetails);
    };

    // Calculate total price
    // Safeguard: Check if cartData.items is defined and is an array before reducing
    useEffect(() => {
        console.log("Cart Data on Mount:", cartData);
        console.log("Cart items:", cartData?.items);
    }, [cartData]);
    const totalPrice = Array.isArray(cartData.items) ? cartData.items.reduce((total: number, item: any) => total + item.price * item.quantity, 0) : 0;
    const adjustedTotalPrice = totalPrice; // You can add discount logic here if needed

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Billing Information */}
                <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Billing Information</h4>
                    <div className="grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            placeholder="Postcode"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            className="w-full px-4 py-2 border rounded shadow-sm"
                            required
                        />
                        <select
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className="w-full px-4 py-2 border rounded shadow-sm"
                        >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="VN">Vietnam</option>
                            <option value="GB">United Kingdom</option>
                            {/* Add more countries if needed */}
                        </select>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h4>

                    {/* PayPal Payment Button */}
                    {selectedPaymentMethod === "paypal" && (
                        <PayPalScriptProvider options={{ clientId: "AQlHlhPCEivAUGbGEQ4yJ7mkzPB3v29EGgjLtLYTO87y7DhFj2xTBoOqt7OSFnFQDbfJtJirKWo9YzSj" }}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        intent: "CAPTURE",
                                        purchase_units: [
                                            {
                                                amount: {
                                                    currency_code: "USD",
                                                    value: "0.01",
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    if (actions.order) {
                                        return actions.order.capture().then((details) => {
                                            const isDigitalProduct = cartData.items && cartData.items.some((item: { attributes: string[]; }) => item.attributes[0] === "Digital");

                                            if (isDigitalProduct) {
                                                console.log("Payment completed successfully:", details);
                                                alert("Payment successful! You can download the product.");
                                                handleDownload(cartData.items[0].id);
                                            } else {
                                                console.log("Payment completed successfully:", details);
                                                alert("Payment successful! The product will be delivered to you.");
                                            }

                                            handleSubmit();
                                        });
                                    } else {
                                        console.error("Error: Order not available");
                                        return Promise.reject("Order not available");
                                    }
                                }}
                                onError={(err) => {
                                    console.log("Error during PayPal payment:", err);
                                }}
                            />
                        </PayPalScriptProvider>
                    )}
                    <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10 mt-8">
                        <h6 className="text-xl md:text-2xl font-bold text-black">Order Summary</h6>
                        <div className="flex flex-col space-y-5">
                            <div className="flex items-center justify-between">
                                <span className="md:text-xl text-black/60">Subtotal</span>
                                <span className="md:text-xl font-bold">${totalPrice}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="md:text-xl text-black/60">
                                    Discount (-0%){/*{Math.round(((totalPrice - adjustedTotalPrice) / totalPrice) * 100)}*/}
                                </span>
                                <span className="md:text-xl font-bold text-red-600">
                                    -${Math.round(totalPrice - adjustedTotalPrice)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="md:text-xl text-black/60">Delivery Fee</span>
                                <span className="md:text-xl font-bold">6.99</span>
                            </div>
                            <hr className="border-t-black/10" />
                            <div className="flex items-center justify-between">
                                <span className="md:text-xl text-black">Total</span>
                                <span className="text-xl md:text-2xl font-bold">${Math.round(adjustedTotalPrice)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Summary */}


            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={() => window.history.back()}  // Go back to the previous page
                    className="px-6 py-2 bg-gray-300 rounded text-gray-800"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
