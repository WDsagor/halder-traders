// src/app/about/page.tsx
"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function About() {
  return (
    <main className="pt-16">
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/5.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      <div className="container-custom py-16">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2024, ShopVerse has been at the forefront of e-commerce
              innovation, bringing you the finest products from around the
              world. Our mission is to provide an exceptional shopping
              experience with quality products and outstanding customer service.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize online shopping by offering premium products at
                competitive prices, backed by exceptional customer service and a
                seamless shopping experience.
              </p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/6.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-64 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/images/6.webp"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most customer-centric e-commerce platform,
                where innovation meets convenience, and every shopping
                experience feels personal and enjoyable.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Every product undergoes strict quality checks",
                icon: "✓",
              },
              {
                title: "Fast Delivery",
                description: "Quick shipping with real-time tracking",
                icon: "🚚",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer service",
                icon: "💬",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up">
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">
              Be part of thousands of satisfied customers
            </p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
