import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Instagram, MapPin, Phone, Menu as MenuIcon, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full glass grid place-items-center">
        <span className="font-display text-gold text-xl leading-none">D</span>
        <span className="absolute inset-0 rounded-full animate-glow" style={{ boxShadow: "0 0 30px oklch(0.78 0.135 78 / 0.4)" }} />
      </div>
      <div className="leading-tight">
        <div className="font-display text-base tracking-wide text-fg">Downtown</div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted">Rooftop · Jhansi</div>
      </div>
    </Link>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4">
          <nav className={`glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_20px_60px_-30px_oklch(0_0_0/0.8)]" : ""}`}>
            <Logo />
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((n) => {
                const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
                return (
                  <li key={n.to}>
                    <Link to={n.to} className={`relative px-4 py-2 text-sm tracking-wide transition-colors ${active ? "text-gold" : "text-fg/80 hover:text-fg"}`}>
                      {n.label}
                      <span className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-px transition-all duration-500 ${active ? "w-6 bg-gold" : "w-0"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="hidden md:block">
              <a href="tel:+918303481858" className="btn-ghost-gold rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em]">Reserve</a>
            </div>
            <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="md:hidden p-2 text-fg">
              {open ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </nav>
          {open && (
            <div className="md:hidden mt-2 glass-strong rounded-2xl p-2 animate-float-up">
              {navItems.map((n) => {
                const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
                return (
                  <Link key={n.to} to={n.to} className={`block px-4 py-3 rounded-xl text-sm ${active ? "text-gold bg-white/5" : "text-fg/90"}`}>{n.label}</Link>
                );
              })}
              <a href="tel:+918303481858" className="block px-4 py-3 rounded-xl text-sm text-gold">Call +91 83034 81858</a>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 pt-24">{children}</main>

      <footer className="mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm text-sm text-muted leading-relaxed">
              Experience Jhansi from above. A rooftop destination for great food, vibrant ambience and unforgettable evenings under the open sky.
            </p>
            <p className="mt-6 font-display text-2xl text-gold">"Experience Jhansi From Above"</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {navItems.map((n) => <li key={n.to}><Link to={n.to} className="text-fg/80 hover:text-gold transition-colors">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-fg/80">
              <li className="flex gap-2"><MapPin size={14} className="mt-1 text-gold shrink-0" /><span>VK Agarwal Building, Jhokhanbagh Road, Kacheri Chauraha, Sadar Bazar, Jhansi 284001</span></li>
              <li className="flex gap-2"><Phone size={14} className="mt-1 text-gold shrink-0" /><a href="tel:+918303481858" className="hover:text-gold">+91 83034 81858</a></li>
              <li className="flex gap-2"><Instagram size={14} className="mt-1 text-gold shrink-0" /><a href="https://www.instagram.com/downtown_cafe_jhansi/" target="_blank" rel="noreferrer" className="hover:text-gold">@downtown_cafe_jhansi</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
            <div>© {new Date().getFullYear()} Downtown Rooftop Cafe. All rights reserved.</div>
            <div className="tracking-[0.2em] uppercase">Jhansi · Uttar Pradesh</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
