import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { InstagramGrid } from "@/components/InstagramGrid";
import ambience from "@/assets/ambience.jpg";
import experience from "@/assets/experience.jpg";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Downtown Rooftop Cafe Jhansi" },
      { name: "description", content: "More than just a cafe — Downtown brings flavorful food, vibrant music and warm hospitality to the heart of Jhansi." },
      { property: "og:title", content: "About — Downtown Rooftop Cafe" },
      { property: "og:description", content: "Memorable rooftop dining in Jhansi." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-20">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Our Story</div>
        <h1 className="text-5xl sm:text-7xl font-display max-w-4xl leading-[0.95]">
          More than just a <span className="text-gold italic">cafe</span>.
        </h1>
        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative reveal">
            <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-[3rem] opacity-50" />
            <img src={ambience} alt="Downtown Rooftop Cafe ambience" loading="lazy" className="relative w-full h-[520px] object-cover rounded-3xl glass" />
          </div>
          <div className="reveal space-y-5 text-fg/85 leading-relaxed">
            <p>Downtown Rooftop Cafe brings together flavorful food, vibrant music, warm hospitality and an unforgettable rooftop atmosphere in the heart of Jhansi.</p>
            <p>Whether it's a casual evening with friends, a family dinner, a celebration or simply a cup of coffee under the sky, Downtown offers an experience designed to be remembered.</p>
            <div className="hairline my-6" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Our Mission</div>
              <p className="text-lg font-display text-fg">Creating memorable rooftop dining experiences through quality food, exceptional hospitality and an inviting atmosphere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { i: Heart, t: "Hospitality", d: "Warm welcomes, attentive service, lasting smiles." },
            { i: Sparkles, t: "Atmosphere", d: "Open skies, ambient lighting and live energy." },
            { i: Star, t: "Quality", d: "Curated multi-cuisine menu, crafted with care." },
          ].map((v, i) => (
            <div key={v.t} className="reveal glass rounded-3xl p-7 lift-3d" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="h-12 w-12 rounded-2xl glass-strong grid place-items-center text-gold"><v.i size={20} /></div>
              <h3 className="mt-5 text-xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl glass">
          <img src={experience} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink to-ink/10" />
          <div className="relative p-10 sm:p-16 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl">Come for the food. <span className="text-gold italic">Stay for the view.</span></h2>
            <p className="mt-4 text-fg/80">Plan your next evening at Downtown — Jhansi's favourite rooftop escape.</p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Link to="/visit" className="btn-gold rounded-full px-6 py-3 text-sm inline-flex items-center gap-2">Visit Us <ArrowRight size={16} /></Link>
              <Link to="/menu" className="btn-ghost-gold rounded-full px-6 py-3 text-sm">View Menu</Link>
            </div>
          </div>
        </div>
      </section>

      <InstagramGrid />
    </Layout>
  );
}
