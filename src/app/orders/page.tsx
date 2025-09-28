import { Suspense } from "react";
import { getOrders } from "@/lib/api-client";
import { OrdersView } from "./orders-view";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <Suspense
      fallback={<div className="text-sm text-slate-400">Loading orders…</div>}
    >
      <OrdersView initialData={orders} />
    </Suspense>
  );
}
