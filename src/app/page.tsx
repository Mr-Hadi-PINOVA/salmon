import type { ReactNode } from "react";

const platformStacks = [
  {
    platform: "Web",
    stack: "React 18+, Vite, TypeScript, Tailwind CSS",
    notes: "CSR-first with routing ready for future SSR.",
  },
  {
    platform: "Mobile",
    stack: "Flutter 3+, Dart, flutter_riverpod/provider, dio",
    notes:
      "Adopt Tailwind-inspired tokens and custom widgets to mirror the web UI.",
  },
  {
    platform: "Shared",
    stack:
      "OpenAPI schema, GitHub Actions, ESLint/Prettier, Dart format & analyze",
    notes: "Encourage code generation for typings and models across platforms.",
  },
];

const backendEndpoints = [
  { label: "Health", method: "GET", path: "/health" },
  { label: "Products", method: "CRUD", path: "/api/v1/products" },
  { label: "Users", method: "CRUD", path: "/api/v1/users" },
  { label: "Orders", method: "GET/POST", path: "/api/v1/orders" },
];

const sharedUx = [
  "Responsive navigation for products, account placeholder, and orders",
  "Tailwind-driven palette, typography, and spacing tokens",
  "Optimistic UI updates with graceful loading fallbacks",
  "Error boundaries and toast/snackbar notifications",
];

const webArchitecture = [
  "Scaffold with Vite React TypeScript template",
  "Install and configure Tailwind CSS with brand tokens",
  "Set up ESLint (Airbnb + hooks) and Prettier",
  "Use folders for components, pages, features, hooks, services, state, styles",
  "Client routing with React Router v6 (Home, Products, ProductDetail, Orders, NotFound)",
  "Centralized axios client with interceptors",
  "Integrate TanStack Query for fetching, caching, optimistic updates",
];

const webFeatures = [
  "Product listing grid with search and filters",
  "Product detail view with add-to-cart interactions (client-side cart)",
  "Order history sourced from /api/v1/orders (mocked user context)",
  "Reusable Tailwind components for buttons, badges, modals, and forms",
  "Accessibility via semantic HTML, keyboard navigation, and focus states",
];

const devExperience = [
  "Configure Vite proxy for /api to http://localhost:8080",
  "Provide scripts for dev, build, preview, lint, and test",
  "Set up Jest + React Testing Library; consider Storybook",
];

const apiConsumption = [
  "Generate TypeScript types via openapi-typescript (with manual curation as needed)",
  "For Flutter, leverage openapi-generator-cli or Freezed models",
  "Maintain manual typings aligned with backend models until OpenAPI spec is available",
];

const configuration = [
  "Web uses .env files (e.g., VITE_API_BASE_URL)",
  "Flutter stores config under lib/config with flavor-specific files",
  "Document toggling between mock and live data for offline development",
];

const stylingTokens = [
  "Teal primary, violet accent, and neutral gray palette",
  "Inter typography on web; GoogleFonts.inter on mobile",
  "Spacing scale in multiples of 4 with md (8px) corner radius",
  "Provide design reference (Figma placeholder) for future collaboration",
  "Utility helpers in Flutter to mimic Tailwind ergonomics",
];

const stateFlow = [
  "Global state covers auth (placeholder), catalog, cart, and orders",
  "Remote state handled with React Query / Riverpod",
  "Persist cart with localStorage on web and shared_preferences on mobile",
  "Normalize backend errors with user-friendly messaging",
];

const testingStrategy = [
  "Web: Jest unit tests, Testing Library components, Playwright E2E",
  "Mobile: Widget tests and integration tests with mocked backend",
  "Optional shared smoke tests against seeded backend",
];

const deliveryChecklist = [
  "Complete scaffolds (package.json, pubspec.yaml, etc.)",
  "Tailwind configuration aligned with shared tokens",
  "Example screens consuming /api/v1/* endpoints",
  "Placeholder assets and README instructions",
  "Sample GitHub Actions running lint and tests",
  "Docs for connecting to the Go backend (proxy, env vars)",
  "Notes on future enhancements (auth, checkout, analytics)",
];

const futureEnhancements = [
  "JWT/OAuth2 authentication",
  "Stripe payments and inventory synchronization",
  "Web/mobile push notifications for order updates",
  "Internationalization support and theming",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="bg-gradient-to-br from-teal-500/20 via-slate-900 to-violet-600/20">
        <header className="mx-auto max-w-5xl px-6 pb-12 pt-16 sm:px-8">
          <span className="inline-flex items-center rounded-full border border-teal-400/40 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
            Cryptotrade
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Frontend Build Brief
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            A consolidated reference to align the React web and Flutter mobile
            clients with the Go backend. Use this blueprint when scaffolding new
            projects or onboarding collaborators.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
            {[
              {
                label: "Backend base URL",
                value: "http://localhost:8080",
              },
              { label: "Design System", value: "Tailwind CSS tokens" },
              { label: "CI", value: "GitHub Actions (lint & tests)" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur"
              >
                <dt className="text-xs uppercase tracking-wide text-slate-300">
                  {item.label}
                </dt>
                <dd className="mt-1 font-medium text-slate-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-5xl space-y-16 px-6 pb-20 pt-12 sm:px-8">
        <Section title="Project Vision">
          <p className="text-base text-slate-200">
            Deliver a unified, high-performance customer experience across web
            and mobile surfaces. Interfaces should echo backend domain concepts
            (products, users, orders, health) while leaving room for future
            authentication and advanced commerce capabilities.
          </p>
        </Section>

        <Section title="Target Platforms & Tech Stack">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-sm">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-300">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Stack</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-100">
                {platformStacks.map((stack) => (
                  <tr key={stack.platform} className="hover:bg-white/5">
                    <td className="px-4 py-3 font-semibold">
                      {stack.platform}
                    </td>
                    <td className="px-4 py-3">{stack.stack}</td>
                    <td className="px-4 py-3 text-slate-200">{stack.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Backend Interface Reference">
          <div className="grid gap-4 sm:grid-cols-2">
            {backendEndpoints.map((endpoint) => (
              <div
                key={endpoint.path}
                className="rounded-lg border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-900/70 px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-300">
                  {endpoint.label}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                  <span className="inline-flex items-center rounded-md bg-teal-500/20 px-2 py-1 text-xs font-semibold text-teal-200">
                    {endpoint.method}
                  </span>
                  {endpoint.path}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Shared UX Foundations">
          <BulletList items={sharedUx} />
        </Section>

        <Section
          title="Web Architecture & Key Features"
          subtitle="React + Tailwind"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Architecture" items={webArchitecture} />
            <Card title="Key Features" items={webFeatures} />
          </div>
        </Section>

        <Section title="Developer Experience">
          <BulletList items={devExperience} />
        </Section>

        <Section title="API Contract Consumption">
          <BulletList items={apiConsumption} />
        </Section>

        <Section title="Environment & Configuration">
          <BulletList items={configuration} />
        </Section>

        <Section title="Styling System">
          <BulletList items={stylingTokens} />
        </Section>

        <Section title="State & Data Flow">
          <BulletList items={stateFlow} />
        </Section>

        <Section title="Testing Strategy">
          <BulletList items={testingStrategy} />
        </Section>

        <Section title="Delivery Checklist">
          <BulletList items={deliveryChecklist} />
        </Section>

        <Section title="Future Enhancements">
          <BulletList items={futureEnhancements} />
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-slate-900/80 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Cryptotrade. Prepared for frontend
            scaffolding.
          </p>
          <p className="text-slate-400">
            Ready for future enhancements: authentication, checkout, and
            analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
  subtitle,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-5">
      <header>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-violet-200">
            {subtitle}
          </p>
        ) : null}
      </header>
      <div className="text-sm text-slate-200">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-sm"
        >
          <span
            className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-400"
            aria-hidden
          />
          <span className="leading-relaxed text-slate-200">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
