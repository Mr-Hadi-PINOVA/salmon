export interface HealthResponse {
  status: string;
  version?: string;
  uptime?: string;
  dependencies?: Record<string, string>;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  status?: "draft" | "active" | "archived";
  stock?: number;
  tags?: string[];
  updatedAt?: string;
  createdAt?: string;
}

export interface OrderLineItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  currency: string;
}

export interface Order {
  id: string;
  userId: string;
  status: "pending" | "processing" | "fulfilled" | "cancelled";
  total: number;
  currency: string;
  createdAt: string;
  updatedAt?: string;
  lineItems: OrderLineItem[];
}

export interface ApiErrorShape {
  message: string;
  code?: string | number;
  details?: unknown;
}
