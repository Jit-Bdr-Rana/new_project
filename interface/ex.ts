interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: string[];
}

interface CartItem {
  productId: Product["id"];
  quantity: number;
}

interface Customer {
  name: string;
  email: string;
  shippingAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
}

type Order = {
  id: string;
  customer: Customer;
  items: CartItem[];
  shippingMethod: "standard" | "express";
  paymentMethod: "credit_card" | "paypal";
  total: number;
};

type OrderSummary = Pick<Order, "id" | "customer" | "total">;

type ShippingMethod = {
  name: string;
  description: string;
  price: number;
};

type PaymentMethod = {
  name: string;
  icon: string;
};

type CheckoutPageProps = {
  products: Product[];
  cartItems: CartItem[];
  shippingMethods: ShippingMethod[];
  paymentMethods: PaymentMethod[];
  onPlaceOrder: (order: Order) => void;
};

type ProductPageProps = {
  product: Product;
};

type OrderHistoryPageProps = {
  orders: OrderSummary[];
};

type PageProps = CheckoutPageProps | ProductPageProps | OrderHistoryPageProps;
