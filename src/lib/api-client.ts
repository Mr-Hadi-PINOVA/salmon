import { z } from "zod";
import { getApiBaseUrl, getMockMode } from "./env";
import { mockHealth, mockOrders, mockProducts } from "./mock-data";
import type { HealthResponse, Order, Product } from "./types";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().default(""),
  price: z.number(),
  currency: z.string().default("USD"),
  status: z.enum(["draft", "active", "archived"]).optional(),
  stock: z.number().optional(),
  tags: z.array(z.string()).optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
});

const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  status: z.enum(["pending", "processing", "fulfilled", "cancelled"]),
  total: z.number(),
  currency: z.string().default("USD"),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  lineItems: z
    .array(
      z.object({
        productId: z.string(),
        name: z.string(),
        quantity: z.number(),
        price: z.number(),
        currency: z.string().default("USD"),
      }),
    )
    .default([]),
});

const healthSchema = z.object({
  status: z.string(),
  version: z.string().optional(),
  uptime: z.string().optional(),
  dependencies: z.record(z.string()).optional(),
});

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function safeRequest<T>(
  fetcher: () => Promise<T>,
  fallback: T,
): Promise<T> {
  if (getMockMode()) {
    return fallback;
  }

  try {
    return await fetcher();
  } catch (error) {
    console.warn("Falling back to mock data due to API error", error);
    return fallback;
  }
}

export async function getHealth(): Promise<HealthResponse> {
  return safeRequest(
    async () => healthSchema.parse(await request("/health")),
    mockHealth,
  );
}

export async function getProducts(): Promise<Product[]> {
  return safeRequest(async () => {
    const data = await request<unknown>("/api/v1/products");
    const parsed = z.array(productSchema).parse(data);
    return parsed;
  }, mockProducts);
}

export async function getProduct(
  productId: string,
): Promise<Product | undefined> {
  return safeRequest(
    async () => {
      const data = await request<unknown>(`/api/v1/products/${productId}`);
      return productSchema.parse(data);
    },
    mockProducts.find((product) => product.id === productId),
  );
}

export async function getOrders(): Promise<Order[]> {
  return safeRequest(async () => {
    const data = await request<unknown>("/api/v1/orders");
    return z.array(orderSchema).parse(data);
  }, mockOrders);
}
