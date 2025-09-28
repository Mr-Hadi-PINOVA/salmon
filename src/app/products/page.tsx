import { Suspense } from "react";
import { getProducts } from "@/lib/api-client";
import { ProductsView } from "./products-view";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Suspense
      fallback={<div className="text-sm text-slate-400">Loading products…</div>}
    >
      <ProductsView initialData={products} />
    </Suspense>
  );
}
