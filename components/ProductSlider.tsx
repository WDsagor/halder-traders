// src/components/ProductSlider.tsx
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useGSAP } from "@gsap/react";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299",
    image: "/images/1.jpg",
    description: "Experience crystal clear sound",
  },
  {
    id: 2,
    name: "Smart Watch Ultra",
    price: "$399",
    image: "/images/2.jpg",
    description: "Track your fitness journey",
  },
  {
    id: 3,
    name: "Premium Backpack",
    price: "$129",
    image: "/images/3.jpg",
    description: "Style meets functionality",
  },
  {
    id: 4,
    name: "Minimalist Sneakers",
    price: "$159",
    image: "/images/4.jpg",
    description: "Comfort redefined",
  },
];

const ProductSlider = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );
  }, []);

  return (
    <div className="relative h-[700px] w-full overflow-hidden ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        className="h-full w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative h-full w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div ref={textRef} className="text-center text-white">
                  <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {product.name}
                  </h2>
                  <p className="text-xl md:text-2xl mb-2">
                    {product.description}
                  </p>
                  <p className="text-3xl md:text-4xl font-bold mb-6">
                    {product.price}
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
