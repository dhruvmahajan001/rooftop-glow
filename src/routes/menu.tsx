import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Leaf, Drumstick, Coffee } from "lucide-react";
import { Layout } from "@/components/Layout";
import { vegMenu, nonVegMenu, beverages, type MenuSection } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Downtown Rooftop Cafe Jhansi" },
      { name: "description", content: "Explore Downtown's multi-cuisine menu — North Indian, Chinese, Italian, sizzlers, biryani, cafe specials and signature beverages." },
      { property: "og:title", content: "Menu — Downtown Rooftop Cafe" },
      { property: "og:description", content: "Multi-cuisine rooftop menu in Jhansi." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Tab = "veg" | "nonveg" | "beverages";

function MenuPage() {
  const [tab, setTab] = useState<Tab>("veg");
  const [q, setQ] = useState("");

  const sections: MenuSection[] = tab === "veg" ? vegMenu : tab === "nonveg" ? nonVegMenu : beverages;
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return sections;
    return sections
      .map((s) => ({ ...s, items: s.items.filter((i) => i.toLowerCase().includes(term)) }))
      .filter((s) => s.items.length > 0);
  }, [sections, q]);

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3 reveal in">The Menu</div>
        <h1 className="text-5xl sm:text-7xl font-display max-w-3xl reveal in">
          Crafted flavors, <span className="text-gold italic">elevated</span> evenings.
        </h1>
        <p className="mt-5 max-w-xl text-muted reveal in">From slow-simmered curries to flaming sizzlers and signature frappes — every plate is built for the rooftop.</p>
      </section>

      {/* Tabs + search */}
      <section className="sticky top-20 z-30 mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
          <div className="flex gap-1 flex-1">
            {([
              { k: "veg", label: "Food · Veg", icon: Leaf },
              { k: "nonveg", label: "Food · Non-Veg", icon: Drumstick },
              { k: "beverages", label: "Beverages", icon: Coffee },
            ] as { k: Tab; label: string; icon: typeof Leaf }[]).map(({ k, label, icon: Icon }) => (
              <button key={k} onClick={() => setTab(k)}
                className={`relative flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm uppercase tracking-[0.15em] transition inline-flex items-center justify-center gap-2 ${tab === k ? "text-ink" : "text-fg/80 hover:text-fg"}`}>
                {tab === k && <span className="absolute inset-0 rounded-xl btn-gold -z-0" />}
                <Icon size={14} className="relative z-10" /> <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 glass rounded-xl px-3 py-2 flex-1 sm:max-w-xs">
            <Search size={14} className="text-gold" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-muted text-fg" />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted">No dishes match "{q}"</div>
        ) : (
          <div className="space-y-14">
            {filtered.map((s, idx) => (
              <div key={s.title + idx} className="reveal in">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">0{idx + 1}</span>
                  <h2 className="text-3xl sm:text-4xl">{s.title}</h2>
                  <span className="flex-1 hairline" />
                  <span className="text-xs text-muted">{s.items.length} dishes</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {s.items.map((item) => {
                    const featured = item.toLowerCase().includes("downtown");
                    return (
                      <div key={item}
                        className={`group glass rounded-xl px-4 py-3.5 flex items-center justify-between transition hover:border-gold/50 hover:-translate-y-0.5 ${featured ? "border-gold/40" : ""}`}>
                        <span className="text-sm text-fg/90 group-hover:text-fg">{item}</span>
                        {featured && <span className="text-[9px] uppercase tracking-[0.2em] text-gold border border-gold/40 rounded-full px-2 py-0.5">Signature</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
