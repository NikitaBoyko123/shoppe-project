export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface Cart {
  id: string;
  items: CartItem[];
  total: number;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
}
