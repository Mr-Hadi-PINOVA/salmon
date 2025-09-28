"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
  { href: "#", label: "Account", disabled: true },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/20 text-sm font-bold text-teal-300">
            CT
          </span>
          Cryptotrade Console
        </Link>
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            if (item.disabled) {
              return (
                <span
                  key={item.label}
                  className="cursor-not-allowed rounded-full px-4 py-2 text-slate-600"
                  aria-disabled
                >
                  {item.label}
                </span>
              );
            }

            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "rounded-full px-4 py-2 transition",
                  isActive
                    ? "bg-teal-500/20 text-teal-200 shadow-[0_0_0_1px_rgba(45,212,191,0.4)]"
                    : "hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
