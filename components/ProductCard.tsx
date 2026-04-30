// src/components/ProductCard.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { addToCart } from "../store/cartSlice";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: `${id}-${Date.now()}`,
        productId: id,
        productName: name,
        quantity: 1,
        price: price,
      }),
    );

    Swal.fire({
      title: "Added to Cart!",
      text: `${name} has been added to your cart.`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${price}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
