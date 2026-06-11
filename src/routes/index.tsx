import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, Utensils, Users, Music, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { InstagramGrid } from "@/components/InstagramGrid";
import heroImg from "@/assets/hero-rooftop.jpg";
import experienceImg from "@/assets/experience.jpg";
import dishImg from "@/assets/signature-dish.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Downtown Rooftop Cafe — Elevate Every Evening | Jhansi" },
      { name: "description", content: "Jhansi's rooftop destination for great food, vibrant ambience, music and coffee. Multi-cuisine menu, family friendly, open daily." },
      { property: "og:title", content: "Downtown Rooftop Cafe — Jhansi" },
      { property: "og:description", content: "Elevate every evening at Jhansi's premier rooftop cafe." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const features = [
  { icon: Sparkles, title: "Rooftop Experience", desc: "Open-air dining with beautiful evening vibes and city views." },
  { icon: Utensils, title: "Delicious Food", desc: "North Indian, Chinese, Cafe, Fast Food, Pizza and Continental." },
  { icon: Users, title: "Perfect Hangout", desc: "Ideal for friends, couples, families and celebrations." },
  { icon: Music, title: "Music & Ambience", desc: "A lively atmosphere designed for memorable evenings." },
];

const categories = [
  "North Indian","Chinese","Pizza","Burgers","Sandwiches","Cafe Specials","Desserts","Beverages",
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative -mt-24 min-h-[100svh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Downtown Rooftop Cafe Jhansi at twilight" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.135_78/0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 w-full">
          <div className="max-w-3xl animate-float-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-glow" /> Jhansi · Rooftop · Est. Downtown
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] font-display">
              Elevate <em className="italic text-gold not-italic">Every</em><br /> Evening.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-fg/80 leading-relaxed">
              Jhansi's rooftop destination for great food, vibrant ambience, music, coffee and unforgettable moments under the open sky.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-gold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2">
                Explore Menu <ArrowRight size={16} />
              </Link>
              <Link to="/visit" className="btn-ghost-gold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2">
                <MapPin size={16} /> Visit Us
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
              {["Rooftop Dining","Multi-Cuisine","Family Friendly","Open Daily"].map((t) => (
                <li key={t} className="glass rounded-xl px-3 py-2.5 text-xs sm:text-sm flex items-center gap-2 text-fg/90">
                  <Check size={14} className="text-gold shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-fg/60 animate-glow">Scroll</div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-2xl mb-14 reveal">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Why People Love Us</div>
          <h2 className="text-4xl sm:text-5xl">A rooftop crafted for <span className="text-gold italic">memorable</span> evenings.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <article key={f.title} className="reveal glass rounded-3xl p-6 lift-3d" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="h-12 w-12 rounded-2xl glass-strong grid place-items-center text-gold">
                <f.icon size={20} />
              </div>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
              <div className="mt-6 hairline" />
            </article>
          ))}
        </div>
      </section>

      {/* SIGNATURE SPLIT */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-[3rem] opacity-60" />
            <div className="relative overflow-hidden rounded-3xl glass">
              <img src={experienceImg} alt="Rooftop lanterns and dining" loading="lazy" className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-40 sm:w-56 overflow-hidden rounded-2xl glass-strong rotate-3">
              <img src={dishImg} alt="Signature dessert" loading="lazy" className="w-full h-40 sm:h-56 object-cover" />
            </div>
          </div>
          <div className="reveal lg:pl-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Signature Experience</div>
            <h2 className="text-4xl sm:text-5xl leading-tight">The perfect blend of <span className="text-gold italic">food & atmosphere</span>.</h2>
            <p className="mt-6 text-fg/80 leading-relaxed">
              At Downtown Rooftop Cafe, every visit is about more than food. It's about great conversations, open skies, handcrafted flavors and a relaxing rooftop ambience that keeps guests coming back.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{n:"40+",l:"Menu Categories"},{n:"7+",l:"Days A Week"},{n:"11:30PM",l:"Late Hours"}].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl text-gold">{s.n}</div>
                  <div className="text-[10px] mt-1 uppercase tracking-[0.18em] text-muted">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/menu" className="mt-8 inline-flex items-center gap-2 text-gold text-sm group">
              Discover the menu <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Popular Categories</div>
            <h2 className="text-4xl sm:text-5xl">A menu as <span className="text-gold italic">eclectic</span> as our nights.</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((c, i) => (
            <Link to="/menu" key={c} className="reveal group relative overflow-hidden rounded-2xl glass lift-3d aspect-[4/5] flex items-end p-5" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted">0{i + 1}</div>
                <div className="mt-1 font-display text-2xl">{c}</div>
              </div>
              <ArrowRight size={16} className="absolute top-5 right-5 text-gold -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition" />
            </Link>
          ))}
        </div>
      </section>

      <InstagramGrid />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="reveal relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center">
          <div className="absolute inset-0 opacity-50">
            <img src={heroImg} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink/90" />
          </div>
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Reserve Your Evening</div>
            <h2 className="text-4xl sm:text-6xl max-w-3xl mx-auto leading-tight">Ready for your next <span className="text-gold italic">rooftop experience?</span></h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/menu" className="btn-gold rounded-full px-6 py-3.5 text-sm">Explore Menu</Link>
              <a href="https://maps.google.com/?q=Downtown+Rooftop+Cafe+Jhansi" target="_blank" rel="noreferrer" className="btn-ghost-gold rounded-full px-6 py-3.5 text-sm inline-flex items-center gap-2">
                <MapPin size={16} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
