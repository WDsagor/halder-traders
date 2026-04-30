import ProductSlider from "@/components/ProductSlider";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Premium sound quality with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Track your fitness and stay connected",
  },
  {
    id: 3,
    name: "Designer Backpack",
    price: 129,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description: "Style meets functionality",
  },
  {
    id: 4,
    name: "Premium Sneakers",
    price: 159,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Comfortable and stylish",
  },
];

export default function Home() {
  return (
    <main className="pt-16">
      <ProductSlider />

      <div className="container-custom py-16">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <AnimatedSection
              key={product.id}
              direction="up"
              delay={index * 0.1}
            >
              <ProductCard {...product} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection direction="left">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 mt-16">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Special Offer!
            </h2>
            <p className="text-xl mb-8">Get up to 50% off on selected items</p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">30 Days Return</h3>
              <p className="text-gray-600">Money back guarantee</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
