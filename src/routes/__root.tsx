import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gold">404</h1>
        <h2 className="mt-4 text-xl font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted">This page doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold rounded-full px-6 py-3 text-sm inline-block">Back home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted">Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 btn-gold rounded-full px-6 py-3 text-sm">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Downtown Rooftop Cafe — Jhansi's Premier Rooftop Dining" },
      { name: "description", content: "Downtown Rooftop Cafe in Jhansi — multi-cuisine rooftop dining, vibrant ambience, music, coffee and unforgettable evenings under the open sky." },
      { name: "theme-color", content: "#0e0c0a" },
      { property: "og:title", content: "Downtown Rooftop Cafe — Jhansi" },
      { property: "og:description", content: "Elevate every evening at Jhansi's premier rooftop cafe." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Downtown Rooftop Cafe" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Downtown Rooftop Cafe",
        image: "/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "VK Agarwal Building, Jhokhanbagh Road, Kacheri Chauraha, Sadar Bazar",
          addressLocality: "Jhansi",
          addressRegion: "Uttar Pradesh",
          postalCode: "284001",
          addressCountry: "IN",
        },
        telephone: "+91 83034 81858",
        servesCuisine: ["North Indian", "Chinese", "Cafe", "Italian", "Continental"],
        priceRange: "₹₹",
        openingHours: "Mo-Su 11:00-23:30",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
