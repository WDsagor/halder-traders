export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  variants: string[];
  inStock: boolean;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  variant?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  customer: CustomerInfo;
  items: OrderItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered";
  createdAt: Date;
}

export interface CartItem extends OrderItem {
  id: string;
}
