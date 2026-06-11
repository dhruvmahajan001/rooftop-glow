import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Downtown Rooftop Cafe Jhansi" },
      { name: "description", content: "Visit Downtown Rooftop Cafe at VK Agarwal Building, Jhokhanbagh Road, Kacheri Chauraha, Sadar Bazar, Jhansi. Open daily till 11:30 PM. Call +91 83034 81858." },
      { property: "og:title", content: "Visit Downtown Rooftop Cafe" },
      { property: "og:description", content: "Find us in the heart of Jhansi." },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: VisitPage,
});

const ADDR = "VK Agarwal Building, Jhokhanbagh Road, Kacheri Chauraha, Sadar Bazar, Jhansi, Uttar Pradesh 284001";
const MAP_Q = encodeURIComponent("Downtown Rooftop Cafe Jhansi");
const MAP_SRC = `https://www.google.com/maps?q=${MAP_Q}&output=embed`;
const DIR = `https://www.google.com/maps/dir/?api=1&destination=${MAP_Q}`;
const WA = "https://wa.me/918303481858?text=Hi%20Downtown%20Rooftop%20Cafe!";

function VisitPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-12">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Find Us</div>
        <h1 className="text-5xl sm:text-7xl font-display max-w-3xl leading-[0.95]">
          Visit Downtown <br /><span className="text-gold italic">Rooftop Cafe</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 reveal">
          <div className="glass rounded-3xl overflow-hidden h-[480px] relative">
            <iframe
              title="Downtown Rooftop Cafe location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale-[20%] contrast-110"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {[
            { i: MapPin, t: "Location", body: ADDR },
            { i: Phone, t: "Contact", body: "+91 83034 81858", href: "tel:+918303481858" },
            { i: Clock, t: "Hours", body: "Open Daily · Until 11:30 PM" },
          ].map((c, i) => (
            <div key={c.t} className="reveal glass rounded-2xl p-6 lift-3d" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl glass-strong grid place-items-center text-gold shrink-0"><c.i size={18} /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted mb-1">{c.t}</div>
                  {c.href ? <a href={c.href} className="text-fg hover:text-gold transition">{c.body}</a> : <div className="text-fg/90 leading-relaxed">{c.body}</div>}
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <a href="tel:+918303481858" className="btn-gold rounded-full px-4 py-3 text-xs uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2"><Phone size={14} /> Call</a>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-ghost-gold rounded-full px-4 py-3 text-xs uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2"><MessageCircle size={14} /> WhatsApp</a>
            <a href={DIR} target="_blank" rel="noreferrer" className="btn-ghost-gold rounded-full px-4 py-3 text-xs uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2"><Navigation size={14} /> Directions</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Rooftop Seating", d: "Open-air tables under the stars." },
            { t: "Private Events", d: "Birthdays, anniversaries & gatherings." },
            { t: "Family Friendly", d: "Welcoming space for all ages." },
            { t: "Late Night", d: "Open daily until 11:30 PM." },
          ].map((f, i) => (
            <div key={f.t} className="reveal glass rounded-2xl p-5" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="font-display text-xl text-gold">{f.t}</div>
              <p className="text-sm text-muted mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
