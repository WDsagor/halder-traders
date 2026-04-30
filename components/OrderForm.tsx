// src/components/OrderForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import { RootState } from "../store/store";
import { CustomerInfo } from "../types";
import { clearCart } from "../store/cartSlice";

const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomerInfo>();

  const onSubmit = async (data: CustomerInfo) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const orderData = {
      customer: data,
      items: cartItems,
      total: total,
      orderDate: new Date().toISOString(),
    };

    console.log("Order submitted:", orderData);

    Swal.fire({
      title: "Order Confirmed!",
      text: "Thank you for your purchase. We will contact you soon.",
      icon: "success",
      confirmButtonColor: "#8b5cf6",
    });

    dispatch(clearCart());
    reset();
    setIsSubmitting(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-600">Your cart is empty</h3>
        <p className="text-gray-500 mt-2">
          Add some products to your cart first!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <p className="font-semibold">{item.productName}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4">
          <p className="text-xl font-bold">Total:</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold mb-6">Shipping Information</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                {...register("city", { required: "City is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Postal Code
              </label>
              <input
                {...register("postalCode", {
                  required: "Postal code is required",
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <input
              {...register("country", { required: "Country is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Confirm Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
