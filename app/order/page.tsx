import OrderForm from "@/components/OrderForm";
import AnimatedSection from "@/components/AnimatedSection";

export default function OrderPage() {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Place Your Order
          </h1>
          <p className="text-lg md:text-xl">
            Complete your purchase with confidence
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <AnimatedSection>
          <OrderForm />
        </AnimatedSection>
      </div>
    </main>
  );
}
